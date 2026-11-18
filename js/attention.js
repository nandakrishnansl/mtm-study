/* attention.js: activity tracking, "still with us?" prompt, and the study-kit checklist */
(function(){
'use strict';
const MTM = window.MTM, S = () => MTM.S();
const STUDY = ['study', 'check', 'quiz', 'cards', 'num', 'der', 'qs', 'ref', 'map', 'tools'];
const A = MTM.att = {studying: false, route: '', uid: '', topic: '', onActive: null, away: false};
let last = Date.now(), graceUntil = 0, prompt = null, promptAt = 0, pausedPomo = false, lastMove = 0, awayBar = null;

function bump() {
  if (prompt) return;
  last = Date.now();
  if (A.away) back();
}
['pointerdown', 'keydown', 'wheel', 'touchstart', 'click'].forEach(ev => document.addEventListener(ev, bump, {passive: true, capture: true}));
document.addEventListener('scroll', bump, {passive: true, capture: true});
document.addEventListener('pointermove', () => { const n = Date.now(); if (n - lastMove > 1500) { lastMove = n; bump(); } }, {passive: true});

MTM.beforeRender = r => {
  A.route = r.name; A.studying = STUDY.includes(r.name); A.onActive = null; A.topic = '';
  A.uid = (MTM.unit(r.args[0]) ? r.args[0] : S().settings.unit);
  last = Date.now();
  closePrompt();
};
function threshold() {
  const t = +S().settings.idle; if (!t) return Infinity;
  return t * (['num', 'der'].includes(A.route) ? 2 : 1);
}
setInterval(() => {
  const now = Date.now(), d = MTM.day();
  if (document.hidden) { if (A.studying && !MTM.pomoBreak()) d.away++; return; }
  if (!A.studying || MTM.pomoBreak()) return;
  if (A.away) { d.away++; return; }
  const hour = new Date().getHours(), hr = (d.hr[hour] = d.hr[hour] || {a: 0, i: 0});
  const idleFor = (now - last) / 1000, grace = now < graceUntil;
  if (prompt) {
    d.idle++; hr.i++;
    const left = Math.max(0, 60 - (now - promptAt) / 1000), b = prompt.querySelector('.bar i');
    if (b) b.style.width = (left / 60 * 100) + '%';
    if (left <= 0) miss();
  } else if (grace || idleFor < threshold()) {
    d.act++; hr.a++; if (grace) d.paper++;
    A.onActive && A.onActive();
  } else {
    d.idle++; hr.i++;
    showPrompt();
  }
  MTM.save();
}, 1000);

function recallCard() {
  if (!S().settings.recall || !A.uid) return null;
  let cards = A.topic ? MTM.itemsForTopic(A.uid, A.topic, ['card']) : [];
  if (!cards.length) cards = MTM.items(A.uid).filter(i => i.kind === 'card');
  return cards.length ? cards[Math.floor(Math.random() * cards.length)] : null;
}
function showPrompt() {
  closePrompt();
  const d = MTM.day(); d.chk.shown++;
  const c = recallCard();
  prompt = document.createElement('div'); prompt.className = 'attn'; prompt.setAttribute('role', 'alertdialog'); prompt.setAttribute('aria-labelledby', 'attT');
  prompt.innerHTML = '<h3 id="attT">Still with us?</h3><p class="small muted">There has been no activity for a while. If you are writing or calculating on paper, that is good: just tell us.</p>' +
    (c ? '<div class="recall"><div class="lbl">Quick recall</div><div><b>' + c.front + '</b></div><div class="ans hide" style="margin-top:.5rem">' + c.back + '</div><button class="btn sm" data-a="show" style="margin-top:.4rem">Show answer</button></div>' : '') +
    '<div class="row"><button class="btn pri" data-a="here">I am here</button><button class="btn" data-a="paper">Working on paper (10 min)</button><button class="btn" data-a="brk">Take a break</button></div>' +
    '<div class="bar sand" style="margin-top:.7rem" aria-hidden="true"><i style="width:100%"></i></div>';
  document.body.appendChild(prompt); promptAt = Date.now();
  prompt.onclick = e => {
    const b = e.target.closest('[data-a]'); if (!b) return;
    const k = b.dataset.a;
    if (k === 'show') { prompt.querySelector('.ans').classList.remove('hide'); b.remove(); return; }
    d.chk.ok++; closePrompt(); last = Date.now();
    if (k === 'paper') { graceUntil = Date.now() + 10 * 60e3; MTM.toast('Okay. Prompts are paused for 10 minutes and this time counts as study.'); }
    if (k === 'brk') MTM.pomo.breakNow();
  };
  MTM.beep([520]);
}
function closePrompt() { if (prompt) { prompt.remove(); prompt = null; } }
function miss() {
  MTM.day().chk.miss++; closePrompt();
  A.away = true;
  if (MTM.pomo.phase() === 'work' && MTM.pomo.running()) { MTM.pomo.pause(); pausedPomo = true; }
  awayBar = document.createElement('div'); awayBar.className = 'awaybar'; awayBar.textContent = 'Paused: you seem to be away. Tap or press any key to continue.';
  document.body.appendChild(awayBar);
}
function back() {
  A.away = false; last = Date.now();
  if (awayBar) { awayBar.remove(); awayBar = null; }
  MTM.toast('Welcome back. Timers were paused while you were away.', pausedPomo ? [{label: 'Resume focus', fn: () => MTM.pomo.resume()}] : []);
  pausedPomo = false;
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) last = Date.now(); });

/* ---- study kit ---- */
MTM.kitBanner = () => '<div class="tip kitbanner noprint"><div><b>Keep your kit ready.</b> Calculator, pen and a rough sheet. Try each step on paper first, then reveal the solution to check yourself.</div></div>';
MTM.kit = force => {
  const s = S();
  if (!force && (!s.settings.kit || s.kitDay === MTM.today())) return;
  s.kitDay = MTM.today(); MTM.save(true);
  const items = [
    ['Notebook or rough sheets', 'Write each formula and sketch each diagram yourself. Writing makes you remember more than reading.'],
    ['Pen or pencil', 'Use a second colour for corrections, so you can see what you got wrong.'],
    ['Scientific calculator', 'Check the battery and keep it ready for the numericals. Always try the steps yourself before opening the solution.'],
    ['Your textbook (optional)', 'Slides show chapter and page numbers (Ganesan, Pounder, Venkanna) so you can read around a topic.'],
    ['A quiet seat, water, phone on silent', 'The Pomodoro timer will remind you when to rest.']
  ];
  MTM.modal('<h2>Get your study kit ready</h2><p class="muted">A few things make this session far more effective. Tick them off as you go.</p><ul class="clean kit">' +
    items.map((x, i) => '<li><input type="checkbox" id="kit' + i + '"><label for="kit' + i + '"><b>' + x[0] + '</b><span class="muted small">' + x[1] + '</span></label></li>').join('') + '</ul>' +
    '<p class="small muted">When the app thinks you have been away for a while it will ask once. If you are working on paper, choose “Working on paper”.</p>' +
    '<div class="row"><label class="small"><input type="checkbox" id="kitRemind"' + (s.settings.kit ? ' checked' : '') + '> Remind me at the start of each day</label><span class="sp"></span><button class="btn pri" id="kitGo">I am ready</button></div>',
    (m, close) => {
      m.querySelector('#kitGo').onclick = () => { s.settings.kit = m.querySelector('#kitRemind').checked; MTM.save(true); close(); };
    });
};
})();
