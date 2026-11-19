/* main.js: app shell, home, insights, settings */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;
const NAMES = {home: 'Home', study: 'Study', quiz: 'Practice', cards: 'Flashcards', map: 'Mind map', qs: 'Exam questions', num: 'Numericals', der: 'Derivations', ref: 'Important points', vid: 'Videos', tools: 'Tools', check: 'Quick check', insights: 'Insights', settings: 'Settings'};
const NAV = [
  ['home', '⌂', 'Home', false], ['study', '▤', 'Study', true], ['quiz', '✎', 'Practice', true], ['cards', '◫', 'Flashcards', true], ['map', '❖', 'Mind map', true],
  ['h', 'Revise'], ['qs', '?', 'Exam questions', true], ['num', '∑', 'Numericals', true], ['der', '∫', 'Derivations', true], ['ref', '★', 'Important points', true],
  ['h', 'More'], ['vid', '▶', 'Videos', true], ['tools', '⚒', 'Tools', false], ['insights', '↗', 'Insights', false], ['settings', '⚙', 'Settings', false]
];
const href = (name, uses) => '#/' + name + (uses ? '/' + S().settings.unit : '');
const draftChip = u => u.reviewed ? '' : '<span class="chip sand" title="Written for revision; the lecturer has not yet signed off every explanation">Draft: awaiting teacher review</span>';
MTM.draftChip = draftChip;

/* ---------- shell ---------- */
function buildShell() {
  const nav = NAV.map(n => n[0] === 'h' ? '<div class="navh">' + n[1] + '</div>' : '<a href="' + href(n[0], n[3]) + '" data-r="' + n[0] + '" data-u="' + (n[3] ? 1 : '') + '"><span class="ic">' + n[1] + '</span>' + n[2] + '</a>').join('');
  $('#side').innerHTML = '<div class="brand"><div class="logo">MTM</div><div><b>Study Companion</b><span>' + esc(MTM.course.code) + ' &middot; IMU Chennai</span></div></div>' +
    '<div class="unitsel"><label class="small muted" for="usel">Unit</label><select id="usel">' + MTM.units.map(u => '<option value="' + u.id + '">Unit ' + u.no + ': ' + esc(u.title) + '</option>').join('') + '</select></div><nav class="nav" id="nav">' + nav + '</nav>';
  $('#top').innerHTML = '<button class="iconbtn menubtn" id="menu" aria-label="Open menu">&#9776;</button><div class="ttl" id="ttl"></div><button class="pomochip" id="pomochip" aria-label="Pomodoro timer"><i class="dot"></i><span></span></button><button class="iconbtn" id="palbtn" aria-label="Colour scheme" title="Colour scheme"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1-.9-1.5-.9-2.4 0-.9.7-1.5 1.7-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8.3-9-8.3Z"/><circle cx="7.5" cy="11" r="1" fill="currentColor"/><circle cx="10.5" cy="7.2" r="1" fill="currentColor"/><circle cx="15" cy="7.8" r="1" fill="currentColor"/></svg></button><button class="iconbtn" id="themebtn" aria-label="Switch to a dark scheme"></button><a class="iconbtn" href="#/settings" aria-label="Settings">&#9881;</a>';
  $('#themebtn').onclick = () => { MTM.toggleDark(); const r = MTM.parse(); if (r.name === 'settings') MTM.render(); };
  $('#palbtn').onclick = () => MTM.modal('<h2>Colour scheme</h2><p class="muted small">Pick the one that is easiest on your eyes. Your choice is kept on this device.</p>' + MTM.themePicker() + '<div class="row" style="justify-content:flex-end;margin-top:.4rem"><button class="btn pri" id="palclose">Done</button></div>', (m, close) => { m.querySelector('#palclose').onclick = close; });
  const tab = [['home', '⌂', 'Home', 0], ['study', '▤', 'Study', 1], ['quiz', '✎', 'Practice', 1], ['insights', '↗', 'Insights', 0]];
  $('#tabbar').innerHTML = tab.map(t => '<a href="' + href(t[0], t[3]) + '" data-r="' + t[0] + '"><b>' + t[1] + '</b>' + t[2] + '</a>').join('') + '<a href="#" id="more" data-r="more"><b>&#8943;</b>More</a>';
  const sel = $('#usel'); sel.value = S().settings.unit;
  sel.onchange = () => { S().settings.unit = sel.value; MTM.save(true); const r = MTM.parse(); if (['study', 'quiz', 'cards', 'map', 'qs', 'num', 'der', 'ref', 'vid'].includes(r.name)) MTM.go(r.name + '/' + sel.value); else MTM.render(); refreshLinks(); };
  $('#menu').onclick = () => toggleSide(true);
  $('#scrim').onclick = () => toggleSide(false);
  $('#pomochip').onclick = () => MTM.openPomo();
  $('#more').onclick = e => { e.preventDefault(); openMore(); };
  $('#nav').onclick = e => { if (e.target.closest('a')) toggleSide(false); };
}
function toggleSide(on) { $('#side').classList.toggle('open', on); $('#scrim').classList.toggle('on', on); }
function refreshLinks() {
  MTM.$$('[data-r]').forEach(a => { const n = NAV.find(x => x[0] === a.dataset.r), t = n ? n[3] : ['study', 'quiz'].includes(a.dataset.r); if (a.id !== 'more') a.setAttribute('href', href(a.dataset.r, t)); });
  const sel = $('#usel'); if (sel) sel.value = S().settings.unit;
}
function openMore() {
  const items = NAV.filter(n => n[0] !== 'h' && !['home', 'study', 'quiz', 'insights'].includes(n[0]));
  MTM.modal('<h2>More</h2><div class="grid g2">' + items.map(n => '<a class="listrow" href="' + href(n[0], n[3]) + '"><span class="ic" style="width:1.4rem;text-align:center">' + n[1] + '</span><b>' + n[2] + '</b></a>').join('') + '</div><div class="unitsel" style="margin:.8rem 0 0"><label class="small muted" for="usel2">Unit</label><select id="usel2" style="width:100%">' + MTM.units.map(u => '<option value="' + u.id + '"' + (u.id === S().settings.unit ? ' selected' : '') + '>Unit ' + u.no + ': ' + esc(u.title) + '</option>').join('') + '</select></div>',
    (m, close) => { m.onclick = e => { if (e.target.closest('a')) close(); }; m.querySelector('#usel2').onchange = e => { S().settings.unit = e.target.value; MTM.save(true); close(); const r = MTM.parse(); ['study', 'quiz', 'cards', 'map', 'qs', 'num', 'der', 'ref', 'vid'].includes(r.name) ? MTM.go(r.name + '/' + e.target.value) : MTM.render(); refreshLinks(); }; });
}
MTM.afterRender = r => {
  const a0 = r.args && r.args[0];
  if (a0 && MTM.unit(a0) && ['study', 'quiz', 'cards', 'map', 'qs', 'num', 'der', 'ref', 'vid', 'check'].includes(r.name) && S().settings.unit !== a0) { S().settings.unit = a0; MTM.save(true); }
  const u = MTM.unit(S().settings.unit);
  const nm = NAMES[r.name] || 'Home';
  $('#ttl').textContent = r.name === 'home' ? 'MTM Study Companion' : nm + (['study', 'quiz', 'cards', 'map', 'qs', 'num', 'der', 'ref', 'vid', 'check'].includes(r.name) && u ? ' · Unit ' + u.no : '');
  document.title = nm + ' · MTM Study Companion';
  MTM.$$('#nav a, #tabbar a').forEach(a => a.classList.toggle('on', a.dataset.r === (r.name === 'check' ? 'study' : r.name)));
  toggleSide(false);
  refreshLinks();
  MTM.pomoPaint && MTM.pomoPaint();
};

/* ---------- home ---------- */
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; });
const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
function installHTML() {
  if (isStandalone()) return '';
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  return '<div class="card flat" style="margin-top:1rem"><b>Use it like an app</b><p class="small muted" style="margin:.2rem 0 .5rem">' + (ios ? 'In Safari tap Share, then Add to Home Screen.' : 'Install it on your phone or computer so it opens full screen and works without internet.') + '</p>' + (installEvt ? '<button class="btn pri sm" id="inst">Install app</button>' : '') + '</div>';
}
MTM.route('home', view => {
  const s = S(), u = MTM.unit(s.settings.unit), P = MTM.P(u.id), d = MTM.day(), sl = MTM.sl(u.id);
  const dueQ = MTM.items(u.id).filter(i => MTM.srs.isDue(i.id)).length;
  const last = P.last && sl[P.last - 1] ? P.last : 0;
  let h = '<h1>Marine Turbo Machinery</h1><p class="muted">' + esc(MTM.course.code) + ' &middot; ' + esc(MTM.course.school) + '. Learn each topic, test yourself, and come back to what you forget.</p>';
  h += '<div class="hero"><div class="card"><div class="lbl">' + (last ? 'Continue where you left off' : 'Start here') + '</div>' +
    (sl.length ? '<h2 style="margin:.2rem 0">' + (last ? 'Slide ' + last + ': ' + esc(sl[last - 1].title) : 'Unit ' + u.no + ': ' + esc(u.title)) + '</h2><p class="muted small">' + (last ? esc((MTM.topicOf(u.id, last) || {}).t || '') : 'Slides, simple and detailed explanations, quick checks and exam questions.') + '</p><div class="row"><a class="btn pri" href="#/study/' + u.id + (last ? '/' + last : '') + '">' + (last ? 'Continue' : 'Open Unit ' + u.no) + '</a><a class="btn" href="#/study/' + u.id + '">Choose a study path</a>' + draftChip(u) + '</div>'
      : '<h2 style="margin:.2rem 0">Unit ' + u.no + ': ' + esc(u.title) + '</h2><p class="muted">This unit is being prepared. Unit V (Gas Turbines) is ready to try.</p><button class="btn pri" id="goU5">Switch to Unit V</button>') + '</div>' +
    '<div class="card"><div class="lbl">Today</div><div class="grid g3" style="margin-top:.3rem"><div class="kpi"><span class="v">' + Math.round(d.act / 60) + '</span><span class="l">minutes studied</span></div><div class="kpi"><span class="v">' + d.poms + '</span><span class="l">focus sessions</span></div><div class="kpi"><span class="v">' + dueQ + '</span><span class="l">items due</span></div></div><div class="row" style="margin-top:.7rem"><button class="btn sm" id="pomo">Pomodoro</button><button class="btn sm" id="kit">Study kit</button><a class="btn sm" href="#/quiz/' + u.id + '/run/due">Review due</a></div></div></div>';
  h += '<h2 style="margin-top:1.6rem">Units</h2><div class="grid auto">' + MTM.units.map(x => {
    const up = MTM.unitProgress(x.id), has = MTM.sl(x.id).length;
    return '<a class="card" href="#/study/' + x.id + '" data-unit="' + x.id + '" style="text-decoration:none;color:inherit"><div class="row"><span class="chip acc">Unit ' + x.no + '</span><span class="chip">' + x.hours + ' h</span>' + (has ? '' : '<span class="chip sand">Coming soon</span>') + '</div><h3 style="margin-top:.5rem">' + esc(x.title) + '</h3>' +
      (has ? '<div class="bar"><i style="width:' + up.pct + '%"></i></div><div class="small muted" style="margin-top:.3rem">' + up.seen + ' of ' + up.total + ' slides seen</div>' : '<div class="small muted">Slides and questions will be added unit by unit.</div>') + '</a>';
  }).join('') + '</div>';
  const q = [['quiz', 'Practice', 'Quick tests that return when you are about to forget.', 1], ['cards', 'Flashcards', 'Flip through key ideas.', 1], ['map', 'Mind map', 'See the whole unit on one page.', 1], ['qs', 'Exam questions', 'Practice and previous-year questions with answers.', 1], ['num', 'Numericals', 'Step by step, with reasons.', 1], ['der', 'Derivations', 'Learn them in short steps.', 1], ['ref', 'Important points', 'Key points and formula sheet.', 1], ['vid', 'Videos', 'Simple explanations when a topic is hard.', 1], ['tools', 'Tools', 'Calculators and interactive models.', 0], ['insights', 'Insights', 'See how well your study time is working.', 0]];
  h += '<h2 style="margin-top:1.6rem">Revise and explore</h2><div class="grid auto">' + q.map(x => '<a class="card" href="' + href(x[0], x[3]) + '" style="text-decoration:none;color:inherit"><h3>' + x[1] + '</h3><p class="muted small" style="margin:0">' + x[2] + '</p></a>').join('') + '</div>';
  h += '<div class="tip" style="margin-top:1.4rem"><b>Before you start:</b> keep a notebook or rough sheets, a pen and a calculator beside you. You will learn far more by writing steps yourself than by only reading.</div>' + installHTML() +
    '<p class="small muted" style="margin-top:1.2rem">Your progress is saved only on this device. You can move it to another device from Settings.</p>';
  view.innerHTML = h;
  view.onclick = e => {
    if (e.target.closest('#pomo')) return MTM.openPomo();
    if (e.target.closest('#kit')) return MTM.kit(true);
    if (e.target.closest('#goU5')) { S().settings.unit = 'u5'; MTM.save(true); refreshLinks(); return MTM.render(); }
    if (e.target.closest('#inst') && installEvt) { installEvt.prompt(); installEvt = null; }
    const a = e.target.closest('[data-unit]'); if (a) { S().settings.unit = a.dataset.unit; MTM.save(true); refreshLinks(); }
  };
});

/* ---------- insights ---------- */
const keyOf = d => d.getFullYear() + '-' + MTM.pad(d.getMonth() + 1) + '-' + MTM.pad(d.getDate());
const ago = n => { const d = new Date(); d.setDate(d.getDate() - n); return d; };
const rec = k => { const d = S().days[k] || {}, c = d.chk || {}; return {act: d.act || 0, idle: d.idle || 0, away: d.away || 0, paper: d.paper || 0, focus: d.focus || 0, poms: d.poms || 0, pstart: d.pstart || 0, q: d.q || 0, ok: d.ok || 0, slides: d.slides || 0, hr: d.hr || {}, shown: c.shown || 0, cok: c.ok || 0, miss: c.miss || 0}; };
const sum = (arr, f) => arr.reduce((a, x) => a + (x[f] || 0), 0);
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hrLabel = h => (h % 12 || 12) + (h < 12 ? ' am' : ' pm');

function stackSVG(rows, h) {
  const W = 640, H = h || 190, n = rows.length, bw = (W - 40) / n, top = Math.max(30, ...rows.map(r => r.a + r.i)), y = v => (H - 32) * (1 - v / top) + 8;
  let g = '';
  [0, 0.5, 1].forEach(f => { const v = Math.round(top * f); g += '<line x1="30" x2="' + W + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="var(--line)" stroke-dasharray="2 4"/><text x="26" y="' + (y(v) + 4) + '" text-anchor="end">' + v + '</text>'; });
  rows.forEach((r, k) => {
    const x = 34 + k * bw + bw * .15, w = bw * .7;
    g += '<g><title>' + esc(r.tip) + '</title><rect x="' + x + '" y="' + y(r.a) + '" width="' + w + '" height="' + Math.max(0, y(0) - y(r.a)) + '" rx="3" fill="var(--accent)"/><rect x="' + x + '" y="' + y(r.a + r.i) + '" width="' + w + '" height="' + Math.max(0, y(r.a) - y(r.a + r.i)) + '" rx="3" fill="var(--sand)"/><text x="' + (x + w / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(r.l) + '</text></g>';
  });
  return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Minutes studied: active and idle">' + g + '</svg>';
}

MTM.route('insights', view => {
  const s = S(), keys14 = Array.from({length: 14}, (_, i) => keyOf(ago(13 - i))), days14 = keys14.map(rec), days7 = days14.slice(7);
  const totA = sum(days7, 'act'), totI = sum(days7, 'idle');
  const eng = totA + totI > 0 ? totA / (totA + totI) : null;
  const shown = sum(days7, 'shown'), attn = shown ? sum(days7, 'cok') / shown : null;
  const pst = sum(days7, 'pstart'), pomo = pst ? Math.min(1, sum(days7, 'poms') / pst) : null;
  const q = sum(days7, 'q'), acc = q ? sum(days7, 'ok') / q : null;
  const comps = [['Engagement (time active while the screen is open)', eng, 0.4], ['Attention checks answered', attn, 0.2], ['Focus sessions finished', pomo, 0.2], ['Recall accuracy in tests', acc, 0.2]];
  const have = comps.filter(c => c[1] !== null), wsum = have.reduce((a, c) => a + c[2], 0);
  const idx = totA >= 600 && have.length ? Math.round(100 * have.reduce((a, c) => a + c[1] * c[2], 0) / wsum) : null;
  let streak = 0; for (let i = 0; i < 60; i++) { const r = rec(keyOf(ago(i))); if (r.act >= 600) streak++; else if (i > 0) break; }

  let h = '<h1>Insights</h1><p class="muted">How your study time has been working, from what the app can see: taps, scrolls, key presses, focus sessions and test answers. Work done on paper cannot be seen, so use “Working on paper” when the app asks if you are still there.</p>';
  h += '<div class="grid g4"><div class="card kpi"><span class="v">' + (Math.round(totA / 60)) + ' min</span><span class="l">Active study, last 7 days</span></div><div class="card kpi"><span class="v">' + (idx === null ? '–' : idx + ' / 100') + '</span><span class="l">Study efficiency index' + (idx === null ? ' (needs about 10 active minutes)' : '') + '</span></div><div class="card kpi"><span class="v">' + streak + ' day' + (streak === 1 ? '' : 's') + '</span><span class="l">Study streak (10+ active minutes a day)</span></div><div class="card kpi"><span class="v">' + (acc === null ? '–' : Math.round(acc * 100) + ' %') + '</span><span class="l">Recall accuracy (' + q + ' answers)</span></div></div>';
  h += '<details class="card" style="margin-top:1rem"' + (idx === null ? '' : ' open') + '><summary><b>How the efficiency index is worked out</b></summary><div style="margin-top:.5rem">' + comps.map(c => '<div class="hbar"><span>' + c[0] + ' <span class="muted small">(weight ' + Math.round(c[2] * 100) + ' %)</span></span><div class="bar"><i style="width:' + (c[1] === null ? 0 : Math.round(c[1] * 100)) + '%"></i></div><b>' + (c[1] === null ? 'no data' : Math.round(c[1] * 100) + ' %') + '</b></div>').join('') +
    '<p class="small muted">The index is the weighted average of the parts that have data, so it is fair to someone who has not yet tried every feature. It is a guide to your routine, not a grade, and it only reflects activity inside this app.</p></div></details>';

  h += '<h2 style="margin-top:1.6rem">Last 14 days</h2><div class="card">' + stackSVG(days14.map((r, k) => { const d = ago(13 - k); return {a: Math.round(r.act / 60), i: Math.round(r.idle / 60), l: WD[d.getDay()][0] + d.getDate(), tip: WD[d.getDay()] + ' ' + d.getDate() + ': ' + Math.round(r.act / 60) + ' min active, ' + Math.round(r.idle / 60) + ' min idle'}; })) +
    '<div class="legend"><span><i style="background:var(--accent)"></i>Active minutes</span><span><i style="background:var(--sand)"></i>Idle minutes (screen open, no activity)</span></div>' +
    '<details style="margin-top:.5rem"><summary class="small">Show as a table</summary><table style="width:100%;font-size:.85rem;margin-top:.4rem"><tr><th align="left">Day</th><th>Active</th><th>Idle</th><th>Paper</th><th>Away</th><th>Focus sessions</th><th>Answers</th></tr>' +
    days14.map((r, k) => { const d = ago(13 - k); return '<tr><td>' + WD[d.getDay()] + ' ' + d.getDate() + '</td><td align="center">' + Math.round(r.act / 60) + '</td><td align="center">' + Math.round(r.idle / 60) + '</td><td align="center">' + Math.round(r.paper / 60) + '</td><td align="center">' + Math.round(r.away / 60) + '</td><td align="center">' + r.poms + '</td><td align="center">' + r.q + '</td></tr>'; }).join('') + '</table></details></div>';

  /* hours of day and weekdays over the last 28 days */
  const days28 = Array.from({length: 28}, (_, i) => ago(27 - i)).map(d => ({d, r: rec(keyOf(d))}));
  const hrs = Array.from({length: 24}, () => ({a: 0, i: 0}));
  days28.forEach(x => Object.keys(x.r.hr).forEach(k => { hrs[+k].a += x.r.hr[k].a || 0; hrs[+k].i += x.r.hr[k].i || 0; }));
  const hdata = hrs.map((v, k) => ({a: Math.round(v.a / 60), i: Math.round(v.i / 60), l: k % 3 === 0 ? String(k) : '', tip: hrLabel(k) + ': ' + Math.round(v.a / 60) + ' min active, ' + Math.round(v.i / 60) + ' min idle', ratio: v.a + v.i >= 300 ? v.a / (v.a + v.i) : null, min: v.a / 60}));
  const cand = hdata.map((x, k) => ({k, ...x})).filter(x => x.ratio !== null).sort((a, b) => b.ratio - a.ratio || b.min - a.min);
  const best = cand[0];
  h += '<div class="grid g2" style="margin-top:1rem;align-items:start"><div><h2>Which hours work best</h2><div class="card">' + (cand.length ? stackSVG(hdata.slice(5), 170) .replace('Minutes studied', 'Minutes by hour') + '<div class="legend"><span>Hour of day, last 4 weeks (5 am to 11 pm)</span></div><p style="margin:.5rem 0 0">' + (best ? 'Your most focused hour so far is <b>' + hrLabel(best.k) + '</b> (' + Math.round(best.ratio * 100) + ' % of the time active).' : '') + '</p>' : '<p class="muted">After a few study sessions this chart will show which hours of the day you focus best.</p>') + '</div></div>' +
    '<div><h2>Weekday pattern</h2><div class="card">' + (() => {
      const wd = Array.from({length: 7}, () => ({m: 0, n: 0}));
      days28.forEach(x => { wd[x.d.getDay()].m += x.r.act / 60; wd[x.d.getDay()].n++; });
      const mx = Math.max(10, ...wd.map(w => w.m / w.n));
      return [1, 2, 3, 4, 5, 6, 0].map(k => '<div class="hbar"><span>' + WD[k] + '</span><div class="bar"><i style="width:' + Math.round(wd[k].m / wd[k].n / mx * 100) + '%"></i></div><b>' + Math.round(wd[k].m / wd[k].n) + ' min</b></div>').join('') + '<div class="small muted">Average active minutes per day, last 4 weeks.</div>';
    })() + '</div></div></div>';

  /* topics: time against limit and accuracy */
  const uid = s.settings.unit, tops = MTM.topics(uid), P = MTM.P(uid);
  const rows = tops.map(t => { const secs = P.time[t.id] || 0, tq = s.tq[uid + ':' + t.id]; return {t, secs, acc: tq && tq.n ? tq.ok / tq.n : null, n: tq ? tq.n : 0}; }).filter(r => r.secs > 0 || r.n > 0);
  h += '<h2 style="margin-top:1.6rem">Time and recall by topic: Unit ' + esc(MTM.unit(uid).no) + '</h2>';
  h += rows.length ? '<div class="card flat" style="padding:.4rem .8rem">' + rows.map(r => { const lim = r.t.limit * 60, over = r.secs > lim * 1.5; return '<div class="hbar" style="grid-template-columns:minmax(7rem,18rem) 1fr auto"><span><b>' + esc(r.t.num) + '</b> ' + esc(r.t.t) + '</span><div class="bar ' + (over ? 'clay' : '') + '"><i style="width:' + Math.min(100, Math.round(r.secs / lim * 100)) + '%"></i></div><span class="small">' + Math.round(r.secs / 60) + ' / ' + r.t.limit + ' min' + (r.acc !== null ? ' &middot; ' + Math.round(r.acc * 100) + '% right' : '') + '</span></div>'; }).join('') + '</div>' : '<div class="card muted">Study a topic and answer a few questions to see time and recall by topic.</div>';

  /* plain-language suggestions from rules */
  const tips = [];
  if (idx === null) tips.push(['', 'Study for a few sessions and this page will start to show your pattern. Even 10 focused minutes a day is enough to begin.']);
  else {
    if (eng !== null && eng < 0.7) tips.push(['warn', 'About ' + Math.round((1 - eng) * 100) + ' % of your open-screen time is idle. Try shorter focus sessions (the Pomodoro presets include 20/5), keep a notebook beside you, and use “Working on paper” when you are calculating.']);
    if (attn !== null && attn < 0.6 && shown >= 3) tips.push(['warn', 'You answered only ' + Math.round(attn * 100) + ' % of the attention checks. Put the phone on silent and close other tabs before you start.']);
    if (pomo !== null && pomo < 0.6 && pst >= 3) tips.push(['warn', 'You started ' + pst + ' focus sessions but finished ' + sum(days7, 'poms') + '. If 25 minutes feels long, begin with 15 and build up.']);
    if (best) tips.push(['', 'Your sharpest hour is ' + hrLabel(best.k) + '. Save the hard topics there: numericals, derivations and mixed tests.']);
    if (acc !== null && q >= 10 && acc >= 0.8) tips.push(['', 'Recall is strong at ' + Math.round(acc * 100) + ' %. Move on to numericals, derivations and exam questions.']);
    if (acc !== null && q >= 10 && acc < 0.5) tips.push(['warn', 'Recall is ' + Math.round(acc * 100) + ' %. Go back to the simple explanation, mark slides as “Confused”, and retake the Weak spots test tomorrow.']);
    if (q < 5 && sum(days7, 'slides') > 10) tips.push(['warn', 'You have read many slides but answered few questions. Testing yourself is what makes learning stick: finish each topic with its quick check.']);
    const slow = rows.filter(r => r.secs > r.t.limit * 90 && r.acc !== null && r.acc < 0.6).slice(0, 2);
    slow.forEach(r => tips.push(['warn', 'Topic ' + r.t.id + ' (' + r.t.t + ') takes you a long time and recall is ' + Math.round(r.acc * 100) + ' %. Watch the linked video, then try its flashcards again.']));
    const paper = sum(days7, 'paper'); if (paper > 0) tips.push(['', 'You spent ' + Math.round(paper / 60) + ' minutes working on paper this week. Writing by hand is a good habit.']);
    if (streak >= 3) tips.push(['', 'You have studied ' + streak + ' days in a row. Keep it going.']);
  }
  h += '<h2 style="margin-top:1.6rem">What to try next</h2>' + tips.map(t => '<div class="insight ' + t[0] + '">' + t[1] + '</div>').join('') +
    '<p class="small muted" style="margin-top:1rem">These notes come from simple rules applied to your own numbers. They never leave this device.</p>';
  view.innerHTML = h;
});

/* ---------- settings ---------- */
MTM.route('settings', view => {
  const s = S().settings, opt = (v, cur, t) => '<option value="' + v + '"' + (String(cur) === String(v) ? ' selected' : '') + '>' + t + '</option>';
  const row = (l, d, c) => '<div class="listrow" style="margin:.4rem 0;flex-wrap:wrap"><div style="flex:1;min-width:12rem"><b>' + l + '</b><div class="small muted">' + d + '</div></div>' + c + '</div>';
  const chk = (id, v) => '<input type="checkbox" id="' + id + '"' + (v ? ' checked' : '') + ' style="width:1.3rem;height:1.3rem;accent-color:var(--accent)">';
  view.innerHTML = '<h1>Settings</h1><div style="max-width:46rem">' +
    '<h2>Look and feel</h2>' + row('Colour scheme', 'Pick the one that is easiest on your eyes. “Match my device” follows your phone or computer: your last light choice by day and your last dark choice at night. The moon and sun button at the top swaps between your light and dark choices.', '') + MTM.themePicker() +
    row('Text size', 'Makes everything larger or smaller.', '<select id="s-fs">' + [[90, 'Small'], [100, 'Normal'], [112, 'Large'], [125, 'Extra large']].map(x => opt(x[0], s.fs, x[1])).join('') + '</select>') +
    row('Reduce motion', 'Switches off card flips and slide-in effects.', chk('s-nomo', !s.motion)) +
    '<h2 style="margin-top:1.4rem">Studying</h2>' + row('Slide display', 'Auto shows the text view on phones and the slide image on larger screens.', '<select id="s-view">' + opt('auto', s.view, 'Auto') + opt('img', s.view, 'Slide image') + opt('text', s.view, 'Text view') + '</select>') +
    row('Show explanations beside the slide', 'The simple and detailed explanation panel.', chk('s-split', s.split)) + row('Open “More detail” automatically', 'Shows the detailed explanation without tapping.', chk('s-detail', s.detail)) +
    row('Quick check at the end of each topic', 'A few questions before you move on.', chk('s-quick', s.quick)) + row('Topic time guide', 'Shows a suggested time for each topic.', chk('s-timers', s.timers)) +
    '<h2 style="margin-top:1.4rem">Attention and focus</h2>' + row('Ask if I am still there after', 'The app asks gently when there is no activity. Numericals and derivations wait twice as long.', '<select id="s-idle">' + [[0, 'Never'], [60, '1 minute'], [120, '2 minutes'], [180, '3 minutes'], [300, '5 minutes']].map(x => opt(x[0], s.idle, x[1])).join('') + '</select>') +
    row('Include a recall question', 'The prompt asks one quick flashcard question from the topic.', chk('s-recall', s.recall)) + row('Study kit reminder each day', 'Reminds you to keep notebook, pen and calculator ready.', chk('s-kit', s.kit)) +
    row('Pomodoro timer', 'Focus and break lengths, sound and long break.', '<button class="btn sm" id="s-pomo">Open timer settings</button>') +
    '<h2 style="margin-top:1.4rem">Your data</h2><p class="small muted">Your progress is stored only on this device.' + (MTM.statsOn ? ' The app counts anonymous visits (no names, emails or progress) so your teacher can see whether it is being used.' : '') + ' To move to another phone or computer, save a backup file and open it there.</p><div class="row">' +
    '<button class="btn" id="s-exp">Save backup file</button><label class="btn" for="s-imp" style="cursor:pointer">Restore from file</label><input type="file" id="s-imp" accept="application/json,.json" class="sr"><button class="btn bad" id="s-reset">Erase my progress</button></div>' +
    '<h2 style="margin-top:1.4rem">About</h2><p class="small muted">Marine Turbo Machinery, ' + esc(MTM.course.code) + ', ' + esc(MTM.course.school) + '. Prepared by Nandakrishnan S L from lecture slides and handouts. Figures come from the course slides; textbooks are cited by chapter and page only. Explanations marked draft have not yet been signed off by the lecturer.</p></div>';
  const set = (k, v) => { s[k] = v; MTM.save(true); MTM.applyTheme(); };
  view.onchange = e => {
    const id = e.target.id, v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (id === 's-fs') set('fs', +v); else if (id === 's-nomo') set('motion', !v); else if (id === 's-view') set('view', v);
    else if (id === 's-split') set('split', v); else if (id === 's-detail') set('detail', v); else if (id === 's-quick') set('quick', v); else if (id === 's-timers') set('timers', v);
    else if (id === 's-idle') set('idle', +v); else if (id === 's-recall') set('recall', v); else if (id === 's-kit') set('kit', v);
    else if (id === 's-imp') { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { MTM.importData(r.result); MTM.applyTheme(); MTM.toast('Backup restored.'); MTM.render(); } catch (err) { MTM.toast('That file could not be read.'); } }; r.readAsText(f); }
  };
  view.onclick = e => {
    if (e.target.id === 's-pomo') return MTM.openPomo();
    if (e.target.id === 's-exp') { const b = new Blob([MTM.exportData()], {type: 'application/json'}), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'mtm-progress-' + MTM.today() + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }
    if (e.target.id === 's-reset') MTM.modal('<h2>Erase all progress?</h2><p>This removes your progress, notes and review schedule from this device. It cannot be undone. Save a backup first if you may want it back.</p><div class="row"><button class="btn bad" id="yes">Erase</button><button class="btn" id="no">Cancel</button></div>', (m, close) => { m.querySelector('#no').onclick = close; m.querySelector('#yes').onclick = () => { MTM.resetData(); MTM.applyTheme(); close(); MTM.toast('Progress erased.'); MTM.render(); }; });
  };
});

/* ---------- start ---------- */
function start() {
  buildShell(); MTM.applyTheme();
  MTM.pomoInit && MTM.pomoInit();
  if (!MTM.hash()) MTM.setHash('#/home', true);
  if (MTM.embedded) document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (a && !e.defaultPrevented) { e.preventDefault(); MTM.setHash(a.getAttribute('href')); }
  });
  MTM.render();
  try { if (!MTM.embedded && 'serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) {}
  window.addEventListener('beforeunload', () => MTM.save(true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) MTM.save(true); });
}
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
