/* study.js: study home, slide-by-slide viewer with optional split explanation, topic timers, lightbox */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;
let visit = null;   /* per-visit topic timer */

function notReady(u) {
  return '<div class="card"><h2>Unit ' + esc(u.no) + ': ' + esc(u.title) + '</h2><p class="muted">The slides for this unit are not loaded yet. Unit V (Gas Turbines) is the fully built pilot unit.</p><a class="btn pri" href="#/study/u5">Open Unit V</a></div>';
}
const levelName = {all: 'All slides', imp: 'Important and must-know', ess: 'Must-know only', mark: 'Bookmarked and confused'};
function pathList(uid) {
  const P = MTM.P(uid), lv = P.level || 'all';
  return MTM.sl(uid).filter(s => {
    const i = MTM.imp(uid, s.n);
    if (lv === 'ess') return i >= 3;
    if (lv === 'imp') return i >= 2;
    if (lv === 'mark') return P.mark[s.n] || P.conf[s.n];
    return true;
  }).map(s => s.n);
}
function minutesFor(uid, list) { return Math.round(list.reduce((a, n) => a + MTM.slideMin(uid, n), 0)); }

/* ---------- text view built from extracted slide text ---------- */
function autoText(s) {
  let out = '', ul = false;
  const close = () => { if (ul) { out += '</ul>'; ul = false; } };
  (s.tx || []).forEach(it => {
    if (it.k === 'li') { if (!ul) { out += '<ul>'; ul = true; } out += '<li>' + esc(it.t) + '</li>'; return; }
    close();
    if (it.k === 'fig') out += '<p class="fig">' + esc(it.t) + '</p>';
    else if (it.k === 'flag') out += '<p class="flag">' + esc(it.t) + '</p>';
    else if (it.k === 'row') out += '<p>' + it.t.map(esc).join(' &nbsp;|&nbsp; ') + '</p>';
    else out += '<p>' + esc(it.t) + '</p>';
  });
  close();
  return out;
}
function textHTML(s, c) {
  return '<div class="textview"><h3>' + esc(s.title) + '</h3><div class="sub">' + esc(s.sub) + '</div>' + (s.src ? '<div class="src">' + esc(s.src) + '</div>' : '') + '<div style="margin-top:.6rem">' + (c && c.tv ? c.tv : autoText(s)) + '</div>' + (s.mx ? '<p class="flag" style="margin-top:.8rem">This slide has equations or figures. Switch to the page image to see them in full.</p>' : '') + '</div>';
}

/* ---------- study home for a unit ---------- */
function studyHome(view, uid) {
  const u = MTM.unit(uid), P = MTM.P(uid), sl = MTM.sl(uid), up = MTM.unitProgress(uid), tops = MTM.topics(uid);
  const all = sl.map(s => s.n), ess = sl.filter(s => MTM.imp(uid, s.n) >= 3).map(s => s.n), imp = sl.filter(s => MTM.imp(uid, s.n) >= 2).map(s => s.n);
  const marked = sl.filter(s => P.mark[s.n] || P.conf[s.n]).map(s => s.n);
  const hasC = !!MTM.cont(uid), last = P.last && P.last >= 1 ? P.last : 0;
  const card = (lv, ttl, desc, list) => '<button class="card" data-lv="' + lv + '" style="text-align:left"' + (list.length ? '' : ' disabled') + '><h3>' + ttl + '</h3><p class="muted small">' + desc + '</p><span class="chip acc">' + list.length + ' slides</span> <span class="chip">about ' + minutesFor(uid, list) + ' min</span></button>';
  let h = '<h1>Unit ' + esc(u.no) + ': ' + esc(u.title) + '</h1><div class="row" style="margin-bottom:1rem"><div class="bar" style="flex:1;max-width:22rem"><i style="width:' + up.pct + '%"></i></div><span class="small muted">' + up.seen + ' of ' + up.total + ' slides seen</span><span class="sp"></span><button class="btn sm" id="kitBtn">Study kit</button></div>';
  if (u.note) h += '<p class="tip" style="margin-bottom:1rem">' + esc(u.note) + '</p>';
  if (last) h += '<div class="card" style="margin-bottom:1rem;background:var(--accent-soft)"><div class="row"><div><div class="lbl">Continue where you left off</div><b>Slide ' + last + ': ' + esc(sl[last - 1].title) + '</b></div><span class="sp"></span><a class="btn pri" href="#/study/' + uid + '/' + last + '">Continue</a></div></div>';
  h += '<h2>Choose how to study</h2><div class="grid auto" id="paths">' +
    card('all', 'Slide by slide', 'The whole unit in order, with a time limit for each topic.', all) +
    (hasC ? card('imp', 'Important topics', 'Skips the good-to-know slides. Best for a first revision.', imp) +
    card('ess', 'Exam essentials', 'Only the must-know slides: equations, definitions and key diagrams.', ess) : '') +
    card('mark', 'Bookmarked and confused', 'The slides you marked while studying.', marked) +
    '<a class="card" href="#/qs/' + uid + '" style="text-decoration:none;color:inherit"><h3>Question-based</h3><p class="muted small">Pick an exam question, study the topic it needs, then check the answer.</p><span class="chip sand">Questions</span></a></div>';
  h += '<h2 style="margin-top:1.6rem">Topics</h2><div class="card flat" style="padding:.4rem .6rem">';
  let g = null;
  tops.forEach(t => {
    if (t.g !== g) { g = t.g; if (g) h += '<div class="lbl" style="margin:.8rem 0 .2rem">' + esc(g) + ' ' + esc(t.gt) + '</div>'; }
    const done = t.slides.filter(n => P.seen[n]).length;
    const qn = MTM.questionsFor ? MTM.questionsFor(uid, t.id).length : 0, itn = MTM.itemsForTopic(uid, t.id).length;
    h += '<a class="listrow" style="margin:.3rem 0;border:0;border-bottom:1px solid var(--line);border-radius:0" href="#/study/' + uid + '/' + t.from + '"><b style="min-width:3.2rem;color:var(--accent-d)">' + esc(t.num) + '</b><span style="flex:1">' + esc(t.t) + '</span>' +
      (qn ? '<span class="chip sand">' + qn + ' Q</span>' : '') + (itn ? '<span class="chip">' + itn + ' checks</span>' : '') + '<span class="chip">' + t.limit + ' min</span><span class="chip ' + (done === t.slides.length ? 'acc' : '') + '">' + done + '/' + t.slides.length + '</span></a>';
  });
  h += '</div>' + (hasC ? '' : '<p class="muted small" style="margin-top:1rem">Explanations, flashcards and quick checks for this unit are being prepared. The slides are fully available.</p>');
  view.innerHTML = h;
  view.onclick = e => {
    if (e.target.closest('#kitBtn')) return MTM.kit(true);
    const b = e.target.closest('[data-lv]'); if (!b) return;
    P.level = b.dataset.lv; MTM.save(true);
    const list = pathList(uid), start = list.includes(last) ? last : list[0];
    MTM.go('study/' + uid + '/' + start);
  };
  MTM.kit();
}

/* ---------- the slide viewer ---------- */
function renderSlide(view, uid, n) {
  const sl = MTM.sl(uid), s = sl[n - 1];
  if (!s) return MTM.go('study/' + uid);
  const c = MTM.slideC(uid, n), top = MTM.topicOf(uid, n), P = MTM.P(uid), set = S().settings, u = MTM.unit(uid);
  const list = pathList(uid), idx = list.indexOf(n);
  const prevN = list.filter(x => x < n).pop(), nextN = list.find(x => x > n);
  P.last = n; P.seen[n] = P.seen[n] || Date.now(); MTM.day().slides++; MTM.save();
  MTM.att.topic = top.id;
  const narrow = window.innerWidth < 700;
  const mode = set.view === 'auto' ? (narrow ? 'text' : 'img') : set.view;
  const limit = top.limit * 60;
  if (!visit || visit.uid !== uid || visit.topic !== top.id || Date.now() - visit.ts > 10 * 60e3) visit = {uid, topic: top.id, secs: 0, extra: 0, warned: false, ts: Date.now()};
  const qs = MTM.questionsFor ? MTM.questionsFor(uid, top.id) : [];
  const nums = c && MTM.cont(uid).num ? MTM.cont(uid).num.filter(x => x.slides.includes(n)) : [];
  const ders = c && MTM.cont(uid).der ? MTM.cont(uid).der.filter(x => x.slides.includes(n)) : [];
  const vids = MTM.vids(uid).filter(v => v.topic === top.id);

  let h = '<div class="study' + (set.split ? ' split' : '') + '"><div class="st-head"><div style="flex:1;min-width:14rem"><div class="crumbs">Unit ' + esc(u.no) + (top.g ? ' &rsaquo; ' + esc(top.g) + ' ' + esc(top.gt) : '') + '</div><b class="crumbs" style="font-size:1.05rem;color:var(--ink);font-family:var(--serif)">' + esc(top.lbl) + '</b></div>' +
    '<div class="row noprint"><div class="tabs" role="tablist"><button data-v="img" class="' + (mode === 'img' ? 'on' : '') + '">Slide</button><button data-v="text" class="' + (mode === 'text' ? 'on' : '') + '">Text</button></div>' +
    '<button class="btn sm ' + (set.split ? 'soft' : '') + '" id="splitBtn" aria-pressed="' + !!set.split + '">Explain</button>' +
    '<button class="btn sm ' + (set.quick ? 'soft' : '') + '" id="quickBtn" aria-pressed="' + !!set.quick + '" title="Practice questions at the end of each topic. Switch off to move straight from slide to slide.">Quick checks: ' + (set.quick ? 'On' : 'Off') + '</button>' +
    '<select id="lvl" aria-label="Study path">' + Object.keys(levelName).map(k => '<option value="' + k + '"' + ((P.level || 'all') === k ? ' selected' : '') + '>' + levelName[k] + '</option>').join('') + '</select>' +
    '<button class="btn sm" id="listBtn">All slides</button></div></div>';
  if (set.timers) h += '<div class="timerchip" id="tchip" title="Suggested time for this topic"><span>Topic time</span><b id="tt"></b><div class="bar"><i id="tb" style="width:0"></i></div></div>';
  h += '<div class="st-body"><section class="pane" id="slidePane">';
  h += mode === 'img'
    ? '<figure class="slidefig" id="fig" tabindex="0" aria-label="Enlarge slide"><img id="simg" src="' + MTM.img(uid, n) + '" alt="Slide ' + n + ': ' + esc(s.title) + '. Use the Text view for a readable version."><span class="zoomhint">Tap to enlarge</span></figure>'
    : textHTML(s, c);
  h += '<div class="small muted" style="margin-top:.4rem">Slide ' + n + ' of ' + sl.length + (s.pg ? ' &middot; handout page ' + s.pg : '') + '</div></section>';
  if (set.split) {
    h += '<aside class="explain" id="expl">';
    if (!c) h += '<div class="card muted">Explanations for this unit are not written yet. The slide is complete; use the topic list and questions to revise.</div>';
    else {
      h += '<div class="card"><div class="row"><span class="lbl">Simple explanation</span><span class="sp"></span>' + MTM.imp3(c.i) + '</div><div class="simple">' + c.s + '</div></div>' +
        '<details class="card"' + (set.detail ? ' open' : '') + '><summary class="lbl" style="cursor:pointer">More detail</summary><div class="detail" style="margin-top:.4rem">' + c.d + '</div></details>' +
        (c.k && c.k.length ? '<div class="card"><div class="lbl">Key points</div><ul class="kp clean">' + c.k.map(k => '<li>' + k + '</li>').join('') + '</ul></div>' : '') +
        (c.t ? '<div class="tip"><b>Exam tip.</b> ' + c.t + '</div>' : '');
    }
    h += '<div class="card" id="acts"><div class="row"><button class="btn sm" data-act="done">' + (P.done[n] ? 'Got it (done)' : 'Got it') + '</button><button class="btn sm" data-act="conf">' + (P.conf[n] ? 'Confused (marked)' : 'Confused') + '</button><button class="btn sm" data-act="mark">' + (P.mark[n] ? 'Bookmarked' : 'Bookmark') + '</button><button class="btn sm" data-act="note">Note</button></div>' +
      '<div id="noteBox" class="' + (S().notes[uid + ':' + n] ? '' : 'hide') + '" style="margin-top:.6rem"><textarea id="note" placeholder="Your own note for this slide…">' + esc(S().notes[uid + ':' + n] || '') + '</textarea></div></div>';
    let rel = '';
    if (qs.length) rel += '<button class="btn sm warn" data-act="qs">' + qs.length + ' exam question' + (qs.length > 1 ? 's' : '') + ' on this topic</button> ';
    nums.forEach(x => rel += '<a class="btn sm soft" href="#/num/' + uid + '/' + x.id + '">Numerical ' + x.id + '</a> ');
    ders.forEach(x => rel += '<a class="btn sm soft" href="#/der/' + uid + '/' + x.id + '">Derivation ' + x.id + '</a> ');
    if (MTM.itemsForTopic(uid, top.id).length) rel += '<a class="btn sm" href="#/check/' + uid + '/' + top.id + '/' + n + '/now">Quick check</a> ';
    if (rel) h += '<div class="card"><div class="lbl">Related</div><div class="row">' + rel + '</div></div>';
    if (vids.length) h += '<div class="card"><div class="lbl">Stuck or bored? Try a simpler view</div>' + vids.map(v => '<div style="margin:.3rem 0"><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title) + '</a><div class="small muted">' + esc(v.why) + '</div></div>').join('') + '</div>';
    h += '</aside>';
  }
  h += '</div><div class="st-nav noprint"><button class="btn" id="prev"' + (prevN ? '' : ' disabled') + '>&larr; Prev</button><div class="segs" aria-hidden="true">' +
    list.map(x => '<i class="' + (x === n ? 'cur' : P.seen[x] ? 'seen' : '') + '"></i>').join('') + '</div><span class="small muted">' + (idx + 1 || '–') + ' / ' + list.length + '</span><button class="btn pri" id="next">' + (nextN ? 'Next &rarr;' : 'Finish') + '</button></div></div>';
  view.innerHTML = h;

  /* ---- timer ---- */
  const paintTimer = () => {
    const tt = $('#tt'), tb = $('#tb'), chip = $('#tchip'); if (!tt) return;
    const lim = limit + visit.extra;
    tt.textContent = MTM.mmss(visit.secs) + ' / ' + Math.round(lim / 60) + ' min';
    tb.style.width = Math.min(100, visit.secs / lim * 100) + '%';
    tb.parentElement.className = 'bar' + (visit.secs > lim ? ' clay' : visit.secs > lim * 0.8 ? ' sand' : '');
    chip.classList.toggle('over', visit.secs > lim);
  };
  paintTimer();
  MTM.att.onActive = () => {
    visit.secs++; visit.ts = Date.now(); P.time[top.id] = (P.time[top.id] || 0) + 1; MTM.day().study++;
    paintTimer();
    if (set.timers && !visit.warned && visit.secs >= limit + visit.extra) {
      visit.warned = true;
      MTM.toast('Time for ' + esc(top.num ? 'topic ' + top.num : 'this section') + ' is up. Move on, or take 5 more minutes?', [{label: '+5 min', fn: () => { visit.extra += 300; visit.warned = false; paintTimer(); }}, {label: nextN ? 'Next' : 'Finish', fn: goNext}], 20000);
    }
  };

  /* ---- navigation ---- */
  function goPrev() { prevN && MTM.go('study/' + uid + '/' + prevN); }
  function goNext() {
    const nt = nextN ? MTM.topicOf(uid, nextN) : null;
    const leaving = !nt || nt.id !== top.id;
    if (leaving) {
      const leavingGrp = !!top.g && (!nt || nt.g !== top.g);
      const has = (set.quick && MTM.itemsForTopic(uid, top.id).filter(i => i.kind !== 'card').length) || leavingGrp || !nextN;
      if (has) return MTM.go('check/' + uid + '/' + top.id + '/' + (nextN || 'end'));
    }
    nextN ? MTM.go('study/' + uid + '/' + nextN) : MTM.go('check/' + uid + '/' + top.id + '/end');
  }
  $('#prev').onclick = goPrev; $('#next').onclick = goNext;
  if (nextN && mode === 'img') { const pre = new Image(); pre.src = MTM.img(uid, nextN); }
  const img = $('#simg'); if (img) img.onerror = () => { S().settings.view = 'text'; MTM.save(); MTM.render(); };

  view.onclick = e => {
    const v = e.target.closest('[data-v]');
    if (v) { S().settings.view = v.dataset.v; MTM.save(); return MTM.render(); }
    if (e.target.closest('#splitBtn')) { set.split = !set.split; MTM.save(); return MTM.render(); }
    if (e.target.closest('#quickBtn')) { set.quick = !set.quick; MTM.save(); MTM.render(); return MTM.toast(set.quick ? 'Quick checks are on. A few questions will appear at the end of each topic.' : 'Quick checks are off. You will move straight from slide to slide.'); }
    if (e.target.closest('#listBtn')) return openList(uid, n);
    if (e.target.closest('#fig')) return lightbox(uid, n);
    const a = e.target.closest('[data-act]');
    if (!a) return;
    const k = a.dataset.act;
    if (k === 'done') { P.done[n] ? delete P.done[n] : (P.done[n] = Date.now(), delete P.conf[n]); }
    else if (k === 'conf') { P.conf[n] ? delete P.conf[n] : (P.conf[n] = Date.now(), delete P.done[n]); if (P.conf[n] && vids.length) MTM.toast('Marked as confused. A simpler video is listed under Related.'); }
    else if (k === 'mark') { P.mark[n] ? delete P.mark[n] : P.mark[n] = Date.now(); }
    else if (k === 'note') { $('#noteBox').classList.toggle('hide'); $('#note').focus(); return; }
    else if (k === 'qs') return MTM.showQuestions(uid, top.id, top.lbl);
    MTM.save(); MTM.render();
  };
  view.onchange = e => { if (e.target.id === 'lvl') { P.level = e.target.value; MTM.save(true); const l = pathList(uid); MTM.go('study/' + uid + '/' + (l.includes(n) ? n : (l.find(x => x > n) || l[0] || n))); } };
  view.oninput = e => { if (e.target.id === 'note') { const k = uid + ':' + n; if (e.target.value) S().notes[k] = e.target.value; else delete S().notes[k]; MTM.save(); } };

  /* swipe + keyboard */
  let sx = 0, sy = 0;
  const pane = $('#slidePane');
  pane.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, {passive: true});
  pane.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.abs(dx) > 70 && Math.abs(dy) < 45) (dx < 0 ? goNext : goPrev)(); }, {passive: true});
  const key = e => {
    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') goNext(); else if (e.key === 'ArrowLeft') goPrev();
    else if (e.key === 't' || e.key === 'T') { S().settings.view = mode === 'img' ? 'text' : 'img'; MTM.save(); MTM.render(); }
    else if (e.key === 'e' || e.key === 'E') { set.split = !set.split; MTM.save(); MTM.render(); }
  };
  document.addEventListener('keydown', key);
  MTM.onLeave(() => document.removeEventListener('keydown', key));
}

function lightbox(uid, n) {
  const lb = document.createElement('div'); lb.className = 'lightbox';
  lb.innerHTML = '<button class="btn x" aria-label="Close">Close</button><img src="' + MTM.img(uid, n) + '" alt="Slide ' + n + ' enlarged">';
  const close = () => { lb.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', esc);
  lb.querySelector('.x').onclick = close;
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.body.appendChild(lb);
}

function openList(uid, cur) {
  const P = MTM.P(uid), sl = MTM.sl(uid), tops = MTM.topics(uid);
  const d = document.createElement('div'); d.className = 'drawer';
  let h = '<div class="row"><h3 style="margin:0">All slides</h3><span class="sp"></span><button class="btn sm" id="dx">Close</button></div><div class="slist">';
  let g = null;
  tops.forEach(t => {
    h += '<h5>' + esc(t.lbl) + '</h5>';
    t.slides.forEach(n => {
      const s = sl[n - 1];
      h += '<button data-n="' + n + '" class="' + (n === cur ? 'cur' : '') + '"><span class="n">' + n + '</span><span class="ck">' + (P.done[n] ? '&#10003;' : P.conf[n] ? '?' : P.seen[n] ? '&middot;' : '') + '</span><span style="flex:1">' + esc((s.title.replace(/^[\d.]+\s*/, '') + (s.sub ? ': ' + s.sub : ''))) + '</span>' + (P.mark[n] ? '<span class="chip sand">saved</span>' : '') + '</button>';
    });
  });
  d.innerHTML = h + '</div>';
  document.body.appendChild(d);
  const close = () => d.remove();
  d.querySelector('#dx').onclick = close;
  d.onclick = e => { const b = e.target.closest('[data-n]'); if (b) { close(); MTM.go('study/' + uid + '/' + b.dataset.n); } };
  const cb = d.querySelector('.cur'); cb && cb.scrollIntoView({block: 'center'});
}

MTM.route('study', (view, uid, n) => {
  uid = MTM.unit(uid) ? uid : S().settings.unit;
  S().settings.unit = uid;
  const u = MTM.unit(uid);
  if (!MTM.sl(uid).length) { view.innerHTML = notReady(u); return; }
  MTM.kit();
  if (!n) return studyHome(view, uid);
  renderSlide(view, uid, +n);
});
MTM.minutesFor = minutesFor;
})();
