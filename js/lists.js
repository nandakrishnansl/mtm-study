/* lists.js: exam questions (previous-year and practice), numericals, derivations, key points and formulas, videos */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;
const UID = u => (MTM.unit(u) ? u : S().settings.unit);
MTM.pyq = MTM.pyq || {};

/* ---------- questions ---------- */
MTM.questionsFor = (uid, ids) => {
  ids = [].concat(ids || []);
  const c = MTM.cont(uid) || {}, out = [];
  (MTM.pyq[uid] || []).forEach(x => { if (!ids.length || ids.includes(x[0])) out.push({kind: 'pyq', topic: x[0], marks: x[1], q: x[2], a: x[3], slides: x[4] || [], src: x[5] || ''}); });
  (c.iq || []).forEach(x => { if (!ids.length || ids.includes(x[0])) out.push({kind: 'practice', topic: x[0], marks: x[1], q: x[2], a: x[3], slides: x[4] || [], src: ''}); });
  return out.sort((a, b) => (a.kind === b.kind ? 0 : a.kind === 'pyq' ? -1 : 1));
};
function slideRanges(a) {
  const out = []; a.slice().sort((m, n) => m - n).forEach(n => { const l = out[out.length - 1]; if (l && n === l[1] + 1) l[1] = n; else if (!l || n !== l[1]) out.push([n, n]); });
  return out;
}
function qCard(uid, x, open) {
  const t = MTM.topicById(uid, x.topic);
  return '<div class="card" style="margin:.6rem 0"><div class="row" style="margin-bottom:.3rem"><span class="chip ' + (x.kind === 'pyq' ? 'acc' : 'sand') + '">' + (x.kind === 'pyq' ? 'Previous year' : 'Practice') + '</span>' +
    '<span class="chip">' + x.marks + ' marks</span><span class="chip">' + (t ? esc(t.lbl) : esc((MTM.xtopics && MTM.xtopics[x.topic]) || x.topic)) + '</span>' + (x.src ? '<span class="chip">' + esc(x.src) + '</span>' : '') + '</div>' +
    '<div>' + x.q + '</div><details style="margin-top:.5rem"' + (open ? ' open' : '') + '><summary class="lbl" style="cursor:pointer">Answer outline' + (MTM.unit(uid) && MTM.unit(uid).reviewed ? '' : ' (draft)') + '</summary><div style="margin-top:.4rem">' + x.a + '</div></details>' +
    '<div class="row small" style="margin-top:.4rem">' + (x.slides.length ? 'Study: ' + slideRanges(x.slides).map(r => '<a href="#/study/' + uid + '/' + r[0] + '">' + (r[0] === r[1] ? 'slide ' + r[0] : 'slides ' + r[0] + '\u2013' + r[1]) + '</a>').join(', ') : '') + (t ? '<span class="sp"></span><a href="#/study/' + uid + '/' + t.from + '">Go to topic</a>' : '') + '</div></div>';
}
MTM.showQuestions = (uid, ids, label) => {
  const qs = MTM.questionsFor(uid, ids);
  MTM.modal('<div class="row"><h2 style="margin:0">Exam questions</h2><span class="sp"></span><button class="btn sm" id="mx">Close</button></div><p class="muted small">' + esc(label || '') + '</p>' +
    (qs.length ? qs.map(x => qCard(uid, x)).join('') : '<p class="muted">No questions are tagged to this topic yet.</p>') +
    '<p class="small muted">Questions marked Practice are written for revision and are not from past papers. Answer outlines are drafts until the teacher marks the unit as reviewed.</p>', (m, close) => { m.querySelector('#mx').onclick = close; });
};

MTM.route('qs', (view, uid, filter) => {
  uid = UID(uid);
  const u = MTM.unit(uid), all = MTM.questionsFor(uid), npyq = all.filter(x => x.kind === 'pyq').length;
  const f = (filter || 'all').split('?')[0], topic = decodeURIComponent(MTM.hash().split('?t=')[1] || '');
  const show = all.filter(x => (f === 'all' || x.kind === f) && (!topic || x.topic === topic));
  const tops = MTM.topics(uid).filter(t => all.some(x => x.topic === t.id));
  let h = '<h1>Exam questions: Unit ' + esc(u.no) + '</h1><div class="row" style="margin-bottom:.8rem"><div class="tabs">' +
    [['all', 'All (' + all.length + ')'], ['pyq', 'Previous year (' + npyq + ')'], ['practice', 'Practice (' + (all.length - npyq) + ')']].map(t => '<button data-f="' + t[0] + '" class="' + (f === t[0] ? 'on' : '') + '">' + t[1] + '</button>').join('') +
    '</div><select id="tsel" aria-label="Filter by topic"><option value="">All topics</option>' + tops.map(t => '<option value="' + esc(t.id) + '"' + (t.id === topic ? ' selected' : '') + '>' + esc(t.lbl) + '</option>').join('') + '</select></div>';
  if (!npyq) h += '<div class="tip" style="margin-bottom:.8rem"><b>Previous-year questions are not loaded yet.</b> They will appear here, unit by unit, with solutions, once the papers are added. Until then these are practice questions written for this unit and are labelled that way.</div>';
  h += show.length ? show.map(x => qCard(uid, x)).join('') : '<div class="card muted">No questions match this filter.</div>';
  h += '<p class="small muted">Tip: try to write your own answer on paper first, then open the outline to compare. Marks shown are the suggested weight, not a guarantee of the exam pattern.</p>';
  view.innerHTML = h;
  const go = (ff, t) => MTM.go('qs/' + uid + '/' + ff + (t ? '?t=' + encodeURIComponent(t) : ''));
  view.onclick = e => { const b = e.target.closest('[data-f]'); if (b) go(b.dataset.f, topic); };
  view.onchange = e => { if (e.target.id === 'tsel') go(f, e.target.value); };
});

/* ---------- numericals and derivations (step-by-step reveal) ---------- */
function stepList(steps, rev) {
  return steps.map((s, i) => '<div class="step' + (i < rev ? '' : ' locked') + '"><h4><span class="chip">' + (i + 1) + '</span>' + s.h.replace(/^Step \d+:\s*/, '') + '</h4><div>' + s.b + '</div></div>').join('');
}
function solver(view, uid, kind, id) {
  const c = MTM.cont(uid) || {}, list = (kind === 'num' ? c.num : c.der) || [], idx = list.findIndex(x => x.id === id), x = list[idx];
  if (!x) return MTM.go(kind + '/' + uid);
  const P = MTM.P(uid); P[kind + 's'] = P[kind + 's'] || {};
  const label = kind === 'num' ? 'Numerical' : 'Derivation', total = x.steps.length;
  let rev = 0;
  const draw = () => {
    view.innerHTML = '<div class="quiz" style="max-width:52rem"><div class="crumbs"><a href="#/' + kind + '/' + uid + '">' + label + 's</a> &rsaquo; ' + x.id + '</div><h1 style="margin-top:.2rem">' + x.id + ': ' + x.title + '</h1>' +
      '<div class="row" style="margin-bottom:.6rem"><span class="chip">Topic ' + esc(x.topic) + '</span>' + (x.marks ? '<span class="chip sand">' + x.marks + (x.marks === 1 ? ' mark' : ' marks') + '</span>' : '') + (x.slides || []).map(n => '<a class="chip" href="#/study/' + uid + '/' + n + '">Slide ' + n + '</a>').join('') + (P[kind + 's'][x.id] ? '<span class="chip acc">Done: ' + esc(P[kind + 's'][x.id]) + '</span>' : '') + '</div>' +
      (kind === 'num' ? '<div class="card"><div class="lbl">Question</div><p>' + x.q + '</p><div class="grid g2"><div><div class="lbl">Given</div><ul class="clean">' + x.given.map(g => '<li>' + g + '</li>').join('') + '</ul></div><div><div class="lbl">To find</div><p>' + x.find + '</p></div></div></div>' : '<div class="card"><div class="lbl">Derive</div><p>' + x.title + '</p></div>') +
      MTM.kitBanner() +
      '<h3 style="margin-top:1rem">' + (kind === 'num' ? 'Solution, one step at a time' : 'Derivation, one step at a time') + '</h3><p class="small muted">Each step title is shown so you can try that step yourself first. Open the step to check.</p>' +
      '<div id="steps">' + stepList(x.steps, rev) + '</div>' +
      '<div class="row" style="margin:.8rem 0"><button class="btn pri" id="nx"' + (rev >= total ? ' disabled' : '') + '>' + (rev ? 'Show next step' : 'Show first step') + '</button><button class="btn" id="all"' + (rev >= total ? ' disabled' : '') + '>Show all</button><span class="sp"></span><span class="small muted">' + rev + ' of ' + total + ' steps</span></div>' +
      (rev >= total ? (x.ans ? '<div class="card" style="background:var(--good-soft)"><div class="lbl">Answer</div><p style="margin:.2rem 0">' + x.ans + '</p></div>' : '') +
        '<div class="card" style="margin-top:.8rem"><div class="lbl">How did you do?</div><div class="row"><button class="btn sm" data-r="Solved alone">I solved it alone</button><button class="btn sm" data-r="Needed hints">I needed some hints</button><button class="btn sm" data-r="Need to revise">I need to revise</button></div></div>' +
        (x.tool ? '<div style="margin-top:.8rem"><a class="btn soft" href="#/tools/' + x.tool + '">Open the calculator for this topic</a></div>' : '') : '') +
      '<div class="row" style="margin-top:1.2rem"><a class="btn" href="' + (idx > 0 ? '#/' + kind + '/' + uid + '/' + list[idx - 1].id : '#/' + kind + '/' + uid) + '">&larr; ' + (idx > 0 ? list[idx - 1].id : 'List') + '</a><span class="sp"></span>' + (idx < list.length - 1 ? '<a class="btn" href="#/' + kind + '/' + uid + '/' + list[idx + 1].id + '">' + list[idx + 1].id + ' &rarr;</a>' : '') + '</div></div>';
    $('#nx').onclick = () => { rev = Math.min(total, rev + 1); draw(); const st = view.querySelectorAll('.step')[rev - 1]; st && st.scrollIntoView({block: 'center', behavior: 'smooth'}); };
    $('#all').onclick = () => { rev = total; draw(); };
    view.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { P[kind + 's'][x.id] = b.dataset.r; MTM.save(true); MTM.toast('Saved.'); draw(); });
  };
  draw();
}
function listPage(view, uid, kind) {
  const c = MTM.cont(uid) || {}, list = (kind === 'num' ? c.num : c.der) || [], P = MTM.P(uid), done = P[kind + 's'] || {}, u = MTM.unit(uid);
  const label = kind === 'num' ? 'Numericals' : 'Derivations';
  if (!list.length) { view.innerHTML = '<h1>' + label + ': Unit ' + esc(u.no) + '</h1><div class="card muted">The ' + label.toLowerCase() + ' for this unit are not added yet. Unit V is the pilot unit.</div>'; return; }
  let h = '<h1>' + label + ': Unit ' + esc(u.no) + '</h1><p class="muted">' + (kind === 'num' ? 'Every numerical has a full step-by-step solution with the reason for each step. Try on paper first.' : 'Each derivation is broken into short steps, so you can learn it piece by piece and then write it from memory.') + '</p>';
  let g = null;
  list.forEach(x => {
    const t = MTM.topicById(uid, x.topic);
    if (t && t.g !== g) { g = t.g; h += '<div class="lbl" style="margin:1rem 0 .3rem">' + esc(t.g) + ' ' + esc(t.gt) + '</div>'; }
    h += '<a class="listrow" style="margin:.4rem 0" href="#/' + kind + '/' + uid + '/' + x.id + '"><b style="min-width:2.6rem;color:var(--accent-d)">' + x.id + '</b><span style="flex:1">' + x.title + '</span>' + (x.marks ? '<span class="chip sand">' + x.marks + (x.marks === 1 ? ' mark' : ' marks') + '</span>' : '') + '<span class="chip">' + x.steps.length + ' steps</span>' + (done[x.id] ? '<span class="chip acc">' + esc(done[x.id]) + '</span>' : '') + '</a>';
  });
  view.innerHTML = h;
}
['num', 'der'].forEach(kind => MTM.route(kind, (view, uid, id) => { uid = UID(uid); id ? solver(view, uid, kind, id) : listPage(view, uid, kind); }));

/* ---------- important points and formula sheet ---------- */
MTM.route('ref', (view, uid, tab) => {
  uid = UID(uid); tab = tab || 'points';
  const u = MTM.unit(uid), c = MTM.cont(uid) || {}, sl = MTM.sl(uid), tops = MTM.topics(uid), lvl = +(MTM.hash().split('?l=')[1] || 3);
  let h = '<div class="row noprint"><h1 style="margin:0">Important points: Unit ' + esc(u.no) + '</h1><span class="sp"></span><button class="btn sm" onclick="window.print()">Print or save as PDF</button></div><div class="row noprint" style="margin:.8rem 0"><div class="tabs">' +
    [['points', 'Key points'], ['formulas', 'Formula sheet']].map(t => '<button data-t="' + t[0] + '" class="' + (tab === t[0] ? 'on' : '') + '">' + t[1] + '</button>').join('') + '</div>' +
    (tab === 'points' ? '<div class="tabs"><button data-l="3" class="' + (lvl === 3 ? 'on' : '') + '">Must know</button><button data-l="2" class="' + (lvl === 2 ? 'on' : '') + '">Must know and important</button></div>' : '') + '</div>';
  if (!c.sl) h += '<div class="card muted">Key points for this unit are not written yet.</div>';
  else if (tab === 'formulas') {
    const fs = c.formulas || [];
    h += fs.length ? '<div class="card flat" style="padding:.2rem .9rem">' + fs.map(f => '<div class="listrow" style="margin:.5rem 0;align-items:flex-start;flex-wrap:wrap"><div style="flex:1;min-width:12rem"><b>' + f.t + '</b><div class="small muted">' + (f.n || '') + '</div></div><div style="font:1.08rem var(--serif)">' + f.e + '</div>' + (f.s ? '<a class="chip" href="#/study/' + uid + '/' + f.s + '">Slide ' + f.s + '</a>' : '') + '</div>').join('') + '</div>' : '<div class="card muted">No formulas listed yet.</div>';
  } else {
    let g = null;
    tops.forEach(t => {
      const items = t.slides.filter(n => MTM.imp(uid, n) >= lvl && c.sl[n] && c.sl[n].k && c.sl[n].k.length);
      if (!items.length) return;
      if (t.g !== g) { g = t.g; h += '<h2 style="margin-top:1.4rem">' + esc(t.g) + ' ' + esc(t.gt) + '</h2>'; }
      h += '<div class="card" style="margin:.6rem 0"><h3>' + esc(t.lbl) + '</h3>' + items.map(n => '<ul class="kp clean">' + c.sl[n].k.map(k => '<li>' + k + '</li>').join('') + '</ul><div class="small noprint" style="margin:-.3rem 0 .4rem"><a href="#/study/' + uid + '/' + n + '">Slide ' + n + '</a></div>').join('') + '</div>';
    });
  }
  view.innerHTML = h;
  view.onclick = e => {
    const t = e.target.closest('[data-t]'), l = e.target.closest('[data-l]');
    if (t) MTM.go('ref/' + uid + '/' + t.dataset.t); else if (l) { MTM.setHash('#/ref/' + uid + '/points?l=' + l.dataset.l); }
  };
});

/* ---------- videos ---------- */
MTM.route('vid', (view, uid) => {
  uid = UID(uid);
  const u = MTM.unit(uid), vids = MTM.vids(uid);
  let h = '<h1>Simple videos and reading: Unit ' + esc(u.no) + '</h1><p class="muted">Use these when a topic feels dry or hard. Links open in a new tab. YouTube cards open a search page so you can pick a short animation; your teacher can replace them with fixed videos.</p>';
  if (!vids.length) h += '<div class="card muted">No links added for this unit yet.</div>';
  let g = null;
  vids.forEach(v => {
    const t = MTM.topicById(uid, v.topic);
    if (t && t.g !== g) { g = t.g; h += '<div class="lbl" style="margin:1rem 0 .3rem">' + esc(t.g) + ' ' + esc(t.gt) + '</div>'; }
    if (v.kind === 'local') h += '<div class="card" style="margin:.5rem 0"><b>' + esc(v.title) + '</b><div class="small muted">' + esc(v.why) + '</div><video controls preload="none" style="width:100%;max-height:60vh;margin-top:.5rem;border-radius:10px" src="' + esc(v.url) + '"></video></div>';
    else h += '<a class="listrow" style="margin:.4rem 0" target="_blank" rel="noopener" href="' + esc(v.url) + '"><span class="chip ' + (v.kind === 'yt' ? 'clay' : 'acc') + '">' + (v.kind === 'yt' ? 'YouTube search' : 'Reading') + '</span><span style="flex:1"><b>' + esc(v.title) + '</b><div class="small muted">' + esc(v.why) + '</div></span><span class="chip">' + esc(v.topic) + '</span></a>';
  });
  view.innerHTML = h;
});
})();
