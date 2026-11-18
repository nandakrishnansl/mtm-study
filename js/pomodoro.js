/* pomodoro.js: focus / break timer that survives page reloads */
(function(){
'use strict';
const MTM = window.MTM, S = () => MTM.S(), P = () => S().pomo, cfg = () => S().settings.pomo;
const TIPS = [
  'Stand up and stretch your back and shoulders.',
  'Drink some water.',
  '20-20-20: look at something 20 feet (6 m) away for 20 seconds.',
  'Breathe in for 4 counts, hold for 4, breathe out for 6.',
  'Roll your neck and wrists slowly.',
  'Step away from the screen and look out of a window.',
  'Walk around for a minute. Leave the phone behind.'
];
const PRESETS = {'25/5/15': [25, 5, 15], '50/10/20': [50, 10, 20], '15/3/10': [15, 3, 10]};
const dur = ph => cfg()[ph] * 60;
function remaining() {
  const p = P();
  if (p.phase === 'idle') return dur('work');
  return p.running ? Math.max(0, (p.endsAt - Date.now()) / 1000) : p.left;
}
function setPhase(ph, running) {
  const p = P(); p.phase = ph; p.running = running;
  if (ph === 'idle') { p.left = dur('work'); p.endsAt = 0; }
  else if (running) p.endsAt = Date.now() + dur(ph) * 1000;
  else p.left = dur(ph);
  MTM.save(true);
}
const api = MTM.pomo = {
  start() { setPhase('work', true); MTM.day().pstart++; paint(); },
  pause() { const p = P(); if (!p.running) return; p.left = remaining(); p.running = false; MTM.save(true); paint(); },
  resume() { const p = P(); if (p.running || p.phase === 'idle') return; p.endsAt = Date.now() + p.left * 1000; p.running = true; MTM.save(true); paint(); },
  reset() { setPhase('idle', false); hideBreak(); paint(); },
  breakNow() { setPhase('short', true); showBreak(); paint(); },
  skipBreak() { setPhase('idle', false); hideBreak(); paint(); },
  addTwo() { const p = P(); if (p.running) p.endsAt += 120000; else p.left += 120; MTM.save(true); paint(); },
  phase: () => P().phase, running: () => P().running, remaining
};
function complete() {
  const p = P();
  if (p.phase === 'work') {
    p.count++; const d = MTM.day(); d.focus += cfg().work; d.poms++;
    const long = p.count % cfg().every === 0;
    setPhase(long ? 'long' : 'short', true);
    MTM.beep([660, 880, 990]);
    showBreak();
  } else {
    MTM.beep([880, 660]);
    setPhase('idle', false); hideBreak();
    MTM.toast('Break over. Ready for another focus session?', [{label: 'Start focus', fn: api.start}], 15000);
  }
  paint();
}
/* ---- break overlay ---- */
let brk = null;
function showBreak() {
  hideBreak();
  const p = P(), long = p.phase === 'long';
  brk = document.createElement('div'); brk.className = 'breakscr';
  brk.innerHTML = '<div class="chip acc">' + (long ? 'Long break' : 'Short break') + '</div><div class="breath" aria-hidden="true"></div>' +
    '<div class="big" id="brkT">--:--</div><h2>Rest your eyes and your mind</h2><p style="max-width:26rem">' + MTM.esc(TIPS[Math.floor(Math.random() * TIPS.length)]) + '</p>' +
    '<div class="row" style="justify-content:center"><button class="btn" id="brkTwo">+2 min</button><button class="btn pri" id="brkSkip">Back to study</button><button class="btn" id="brkHide">Hide</button></div>' +
    '<p class="small muted">The timer keeps running in the top bar.</p>';
  document.body.appendChild(brk);
  brk.querySelector('#brkSkip').onclick = api.skipBreak;
  brk.querySelector('#brkTwo').onclick = api.addTwo;
  brk.querySelector('#brkHide').onclick = hideBreak;
}
function hideBreak() { if (brk) { brk.remove(); brk = null; } }
/* ---- topbar chip + panel ---- */
function chipText() {
  const p = P();
  if (p.phase === 'idle') return 'Focus';
  return (p.running ? '' : 'Paused ') + MTM.mmss(remaining());
}
function paint() {
  const chip = MTM.$('#pomochip'); if (!chip) return;
  const p = P();
  chip.className = 'pomochip ' + (p.phase === 'work' ? 'work' : p.phase === 'idle' ? '' : 'break');
  chip.querySelector('span').textContent = chipText();
  const bt = MTM.$('#brkT'); if (bt) bt.textContent = MTM.mmss(remaining());
  const panel = MTM.$('#pomoPanel'); if (panel) paintPanel(panel);
}
function paintPanel(root) {
  const p = P(), tot = p.phase === 'idle' ? dur('work') : dur(p.phase), rem = remaining();
  const C = 2 * Math.PI * 90, frac = p.phase === 'idle' ? 1 : Math.max(0, Math.min(1, rem / tot));
  root.querySelector('.arc').setAttribute('stroke-dashoffset', (C * (1 - frac)).toFixed(1));
  root.querySelector('.tm').textContent = MTM.mmss(rem);
  root.querySelector('.ph').textContent = p.phase === 'idle' ? 'Ready' : p.phase === 'work' ? 'Focus' : p.phase === 'long' ? 'Long break' : 'Short break';
  const filled = p.phase === 'long' ? cfg().every : p.count % cfg().every;
  root.querySelector('.dots').innerHTML = Array.from({length: cfg().every}, (_, i) => '<i class="' + (i < filled ? 'on' : '') + '"></i>').join('');
  const run = p.running;
  root.querySelector('#pgo').textContent = p.phase === 'idle' ? 'Start focus' : run ? 'Pause' : 'Resume';
  root.querySelector('#pgo').dataset.a = p.phase === 'idle' ? 'start' : run ? 'pause' : 'resume';
  root.querySelector('#pskip').classList.toggle('hide', !(p.phase === 'short' || p.phase === 'long'));
  const d = MTM.day();
  root.querySelector('#pstat').textContent = 'Today: ' + d.poms + ' focus session' + (d.poms === 1 ? '' : 's') + ', ' + d.focus + ' min';
}
MTM.openPomo = () => {
  const c = cfg(), cur = [c.work, c.short, c.long].join('/');
  const opts = Object.keys(PRESETS).map(k => '<option value="' + k + '"' + (k === cur ? ' selected' : '') + '>' + k.replace(/\//g, ' / ') + ' min</option>').join('') + (PRESETS[cur] ? '' : '<option value="' + cur + '" selected>' + cur.replace(/\//g, ' / ') + ' min (custom)</option>');
  MTM.modal('<div id="pomoPanel"><h2>Pomodoro</h2><p class="muted small">Study in focused rounds, then rest. Pattern: focus / short break / long break.</p>' +
    '<div class="ring"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="none" stroke="var(--surface2)" stroke-width="10"/><circle class="arc" cx="100" cy="100" r="90" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + (2 * Math.PI * 90).toFixed(1) + '" stroke-dashoffset="0"/></svg><div class="tm">--:--</div><div class="ph"></div></div>' +
    '<div class="dots"></div><p class="center small muted" id="pstat"></p>' +
    '<div class="row" style="justify-content:center"><button class="btn pri" id="pgo" data-a="start">Start focus</button><button class="btn" id="pskip" data-a="skipBreak">Skip break</button><button class="btn" data-a="reset">Reset</button></div>' +
    '<hr style="border:0;border-top:1px solid var(--line);margin:1rem 0"><div class="row"><label for="ppre">Durations</label><select id="ppre">' + opts + '</select>' +
    '<label><input type="checkbox" id="psnd"' + (c.sound ? ' checked' : '') + '> Sound</label></div>' +
    '<div class="row" style="margin-top:.6rem"><label>Long break after <input type="number" id="pevery" min="2" max="8" value="' + c.every + '" style="width:4.5rem"> rounds</label></div>' +
    '<div class="row" style="justify-content:flex-end;margin-top:.8rem"><button class="btn" data-a="close">Close</button></div></div>', (m, close) => {
    const root = m.querySelector('#pomoPanel');
    root.onclick = e => {
      const a = e.target.closest('[data-a]'); if (!a) return;
      const k = a.dataset.a;
      if (k === 'close') close(); else if (api[k]) api[k]();
      paint();
    };
    root.querySelector('#ppre').onchange = e => { const v = e.target.value.split('/').map(Number); c.work = v[0]; c.short = v[1]; c.long = v[2]; if (P().phase === 'idle') P().left = dur('work'); MTM.save(true); paint(); };
    root.querySelector('#psnd').onchange = e => { c.sound = e.target.checked; MTM.save(true); };
    root.querySelector('#pevery').onchange = e => { c.every = Math.max(2, Math.min(8, +e.target.value || 4)); MTM.save(true); paint(); };
    paint();
  });
};
setInterval(() => {
  const p = P();
  if (p.running && p.phase !== 'idle' && p.endsAt - Date.now() <= 0) complete();
  paint();
}, 500);
MTM.pomoInit = () => {
  const p = P();
  if (p.running && p.phase !== 'idle' && p.endsAt - Date.now() <= 0) { setPhase('idle', false); }   /* finished while the page was closed */
  paint();
};
MTM.pomoPaint = paint;
MTM.pomoBreak = () => { const p = P(); return p.phase === 'short' || p.phase === 'long'; };
})();
