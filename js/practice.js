/* practice.js: quick checks, quizzes (MCQ / match / order), flashcards, lesson-end screen */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;
const KIND = {mcq: 'Multiple choice', match: 'Match the following', order: 'Arrange in order', card: 'Flashcard'};
const L = ['A', 'B', 'C', 'D', 'E', 'F'];
const uidOf = it => it.id.split(':')[0];
const ref = it => it.slide ? ' <a href="#/study/' + uidOf(it) + '/' + it.slide + '">Review slide ' + it.slide + '</a>' : '';

/* ---------- one item of each kind ---------- */
function runMCQ(host, it, cb) {
  const order = MTM.shuffle(it.o.map((t, i) => i));
  host.innerHTML = '<div class="lbl">' + KIND.mcq + '</div><h3 style="margin-top:.2rem">' + it.q + '</h3><div id="opts" role="group">' +
    order.map((oi, k) => '<button class="opt" data-i="' + oi + '" data-k="' + k + '"><span class="k">' + L[k] + '</span><span>' + it.o[oi] + '</span></button>').join('') + '</div><div id="fb"></div>';
  const opts = host.querySelector('#opts');
  const pick = b => {
    if (!b || b.disabled) return;
    const ok = +b.dataset.i === it.a;
    opts.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.i === it.a) x.classList.add('ok'); });
    if (!ok) b.classList.add('no');
    host.querySelector('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correct.' : 'Not quite.') + '</b> ' + (it.e || '') + ref(it) + '</div>';
    cb(ok);
  };
  opts.onclick = e => pick(e.target.closest('.opt'));
  host._key = e => {
    const k = 'abcdef'.indexOf(e.key.toLowerCase()), n = '123456'.indexOf(e.key);
    const idx = k >= 0 && e.key.length === 1 ? k : n;
    if (idx >= 0) pick(opts.querySelector('[data-k="' + idx + '"]'));
  };
}

function runMatch(host, it, cb) {
  const right = MTM.shuffle(it.pairs.map((p, i) => i));
  let sel = -1, slips = 0, left = it.pairs.length, finished = false;
  host.innerHTML = '<div class="lbl">' + KIND.match + '</div><h3 style="margin-top:.2rem">' + it.q + '</h3><p class="small muted">Tap a term on the left, then tap its partner on the right.</p><div class="mcols"><div id="ml">' +
    it.pairs.map((p, i) => '<button class="mcell" data-l="' + i + '" style="width:100%;margin:.3rem 0">' + p[0] + '</button>').join('') + '</div><div id="mr">' +
    right.map(i => '<button class="mcell" data-r="' + i + '" style="width:100%;margin:.3rem 0">' + it.pairs[i][1] + '</button>').join('') + '</div></div><div id="fb"></div>';
  host.onclick = e => {
    if (finished) return;
    const l = e.target.closest('[data-l]'), r = e.target.closest('[data-r]');
    if (l && !l.classList.contains('done')) {
      host.querySelectorAll('[data-l]').forEach(x => x.classList.remove('sel'));
      sel = +l.dataset.l; l.classList.add('sel');
    } else if (r && !r.classList.contains('done') && sel >= 0) {
      if (+r.dataset.r === sel) {
        r.classList.add('done'); host.querySelector('[data-l="' + sel + '"]').classList.remove('sel'); host.querySelector('[data-l="' + sel + '"]').classList.add('done');
        sel = -1; left--;
        if (!left) {
          finished = true;
          host.querySelector('#fb').innerHTML = '<div class="fb ' + (slips ? 'no' : 'ok') + '"><b>' + (slips ? 'All matched, with ' + slips + ' slip' + (slips > 1 ? 's' : '') + '.' : 'All matched with no slips.') + '</b> ' + (it.e || '') + ref(it) + '</div>';
          cb(slips === 0);
        }
      } else {
        slips++; r.classList.add('shake'); setTimeout(() => r.classList.remove('shake'), 350);
      }
    }
  };
}

function runOrder(host, it, cb) {
  let ord = MTM.shuffle(it.items.map((t, i) => i));
  for (let g = 0; g < 5 && ord.every((v, k) => v === k); g++) ord = MTM.shuffle(ord);
  let checked = false;
  const draw = () => {
    host.innerHTML = '<div class="lbl">' + KIND.order + '</div><h3 style="margin-top:.2rem">' + it.q + '</h3><p class="small muted">Use the arrows to move steps up or down, then press Check.</p><div id="ol">' +
      ord.map((v, k) => '<div class="orow' + (checked ? (v === k ? ' ok' : ' no') : '') + '"><span class="num">' + (k + 1) + '</span><span class="t">' + it.items[v] + '</span>' +
        (checked ? '' : '<button class="btn sm" data-m="' + k + ':-1" aria-label="Move up"' + (k ? '' : ' disabled') + '>&uarr;</button><button class="btn sm" data-m="' + k + ':1" aria-label="Move down"' + (k < ord.length - 1 ? '' : ' disabled') + '>&darr;</button>') + '</div>').join('') + '</div>' +
      (checked ? '' : '<div class="row" style="margin-top:.6rem"><button class="btn pri" id="chk">Check order</button></div>') + '<div id="fb"></div>';
    if (checked) {
      const ok = ord.every((v, k) => v === k);
      host.querySelector('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correct order.' : 'Not quite. The correct order is:') + '</b>' + (ok ? '' : '<ol style="margin:.3rem 0 .3rem 1.2rem">' + it.items.map(x => '<li>' + x + '</li>').join('') + '</ol>') + ' ' + (it.e || '') + ref(it) + '</div>';
    }
  };
  draw();
  host.onclick = e => {
    if (checked) return;
    const m = e.target.closest('[data-m]');
    if (m) { const [k, d] = m.dataset.m.split(':').map(Number); [ord[k], ord[k + d]] = [ord[k + d], ord[k]]; draw(); return; }
    if (e.target.closest('#chk')) { checked = true; draw(); cb(ord.every((v, k) => v === k)); }
  };
}

function runItem(host, it, cb) {
  host._key = null; host.onclick = null;
  let called = false;
  const once = ok => { if (called) return; called = true; cb(ok); };
  ({mcq: runMCQ, match: runMatch, order: runOrder}[it.kind] || runMCQ)(host, it, once);
}

/* ---------- a session of items ---------- */
function session(view, uid, items, opt) {
  let i = 0; const res = [];
  const key = e => {
    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const h = $('#host');
    if (e.key === 'Enter') { const n = $('#nxt'); if (n) n.click(); }
    else if (h && h._key) h._key(e);
  };
  document.addEventListener('keydown', key);
  MTM.onLeave(() => document.removeEventListener('keydown', key));
  const draw = () => {
    if (i >= items.length) return end();
    const it = items[i];
    view.innerHTML = '<div class="quiz"><div class="row"><div class="crumbs">' + esc(opt.title) + '</div><span class="sp"></span><span class="small muted">' + (i + 1) + ' of ' + items.length + '</span></div><div class="bar"><i style="width:' + Math.round(i / items.length * 100) + '%"></i></div>' +
      '<div class="card" id="host" style="margin-top:.8rem"></div><div id="nx" class="row" style="margin-top:.8rem"><button class="btn sm" id="skip">Skip</button></div></div>';
    MTM.att.topic = it.topic;
    $('#skip').onclick = () => { res[i] = null; i++; draw(); };
    runItem($('#host'), it, ok => {
      res[i] = ok;
      MTM.srs.answer(it.id, ok, it.topic);
      $('#nx').innerHTML = '<span class="sp"></span><button class="btn pri" id="nxt">' + (i + 1 < items.length ? 'Next &rarr;' : 'Finish') + '</button>';
      const n = $('#nxt'); n.onclick = () => { i++; draw(); }; n.focus();
    });
  };
  const end = () => {
    if (opt.onEnd) return opt.onEnd(view, items, res);
    const ok = res.filter(r => r === true).length, tot = res.filter(r => r !== null).length;
    const missed = items.filter((x, k) => res[k] === false);
    view.innerHTML = '<div class="quiz"><div class="card center"><div class="lbl">' + esc(opt.title) + '</div><div class="stat">' + ok + ' / ' + tot + '</div><p class="muted">' + (!tot ? 'No questions were answered.' : ok === tot ? 'Full marks. These will come back for review later.' : 'Questions you missed will return for review in about ten minutes, then at longer gaps as you get them right.') + '</p>' +
      '<div class="row" style="justify-content:center">' + (missed.length ? '<button class="btn pri" id="again">Retry the ' + missed.length + ' missed</button>' : '') + '<a class="btn" href="' + (opt.back || '#/quiz/' + uid) + '">' + (opt.backLabel || 'Back to practice') + '</a></div></div>' +
      (missed.length ? '<h3 style="margin-top:1.2rem">Review these</h3>' + missed.map(m => '<div class="card flat" style="margin:.5rem 0"><div class="small muted">' + KIND[m.kind] + ' &middot; ' + esc(m.topic) + '</div><div>' + m.q + '</div>' + ref(m) + '</div>').join('') : '') + '</div>';
    const a = $('#again'); if (a) a.onclick = () => { i = 0; items = missed; res.length = 0; draw(); };
  };
  draw();
}
MTM.session = session; MTM.runItem = runItem;

/* ---------- item selection ---------- */
const nonCard = uid => MTM.items(uid).filter(i => i.kind !== 'card');
const groupOf = (uid, topic) => { const t = MTM.topicById(uid, topic); return t ? t.g : ''; };
function buildSet(uid, mode, arg) {
  const all = nonCard(uid);
  switch (mode) {
    case 'due': return all.filter(i => MTM.srs.isDue(i.id));
    case 'weak': return all.filter(i => MTM.srs.isWeak(i.id));
    case 'new': return all.filter(i => !MTM.srs.get(i.id));
    case 'kind': return all.filter(i => i.kind === arg);
    case 'topic': return all.filter(i => i.topic === arg);
    case 'group': return all.filter(i => groupOf(uid, i.topic) === arg);
    default: {
      const pri = MTM.shuffle(all.filter(i => MTM.srs.isDue(i.id) || MTM.srs.isWeak(i.id))), rest = MTM.shuffle(all.filter(i => !pri.includes(i)));
      return pri.concat(rest).slice(0, 10);
    }
  }
}
const titleOf = (uid, mode, arg) => ({due: 'Due for review', weak: 'Weak spots', new: 'New questions', kind: KIND[arg] || 'Practice', mixed: 'Mixed test of 10'}[mode] ||
  (mode === 'topic' ? 'Topic ' + arg + ' ' + ((MTM.topicById(uid, arg) || {}).t || '') : mode === 'group' ? 'Lesson ' + arg : 'Practice'));

/* ---------- practice hub ---------- */
function hub(view, uid) {
  const u = MTM.unit(uid), all = nonCard(uid), cards = MTM.items(uid).filter(i => i.kind === 'card');
  const due = all.filter(i => MTM.srs.isDue(i.id)).length, weak = all.filter(i => MTM.srs.isWeak(i.id)).length, fresh = all.filter(i => !MTM.srs.get(i.id)).length;
  const cdue = cards.filter(i => MTM.srs.isDue(i.id)).length;
  if (!all.length && !cards.length) { view.innerHTML = '<h1>Practice</h1><div class="card"><p class="muted">Practice questions for Unit ' + esc(u.no) + ' are not ready yet. Unit V is the pilot unit.</p><a class="btn pri" href="#/quiz/u5">Open Unit V practice</a></div>'; return; }
  const tile = (href, ttl, desc, n, cls) => '<a class="card" href="' + href + '" style="text-decoration:none;color:inherit' + (n === 0 ? ';opacity:.55' : '') + '"><h3>' + ttl + '</h3><p class="muted small">' + desc + '</p><span class="chip ' + (cls || 'acc') + '">' + n + '</span></a>';
  let h = '<h1>Practice: Unit ' + esc(u.no) + '</h1><p class="muted">Short tests that come back when you are about to forget them. Wrong answers return in ten minutes; right ones return after a day, three days, a week and so on.</p>' +
    '<div class="grid auto">' +
    tile('#/quiz/' + uid + '/run/mixed', 'Mixed test', '10 questions, weak and due ones first.', Math.min(10, all.length)) +
    tile('#/quiz/' + uid + '/run/due', 'Due for review', 'Questions that are ready to be repeated.', due, 'sand') +
    tile('#/quiz/' + uid + '/run/weak', 'Weak spots', 'Questions you missed recently.', weak, 'clay') +
    tile('#/quiz/' + uid + '/run/new', 'Not tried yet', 'Questions you have never answered.', fresh) +
    tile('#/cards/' + uid + '/due', 'Flashcards due', 'Flip through the cards that are due.', cdue, 'sand') +
    tile('#/cards/' + uid + '/all', 'All flashcards', 'Every card in this unit.', cards.length) + '</div>' +
    '<h2 style="margin-top:1.6rem">By type</h2><div class="row">' + ['mcq', 'match', 'order'].map(k => '<a class="btn" href="#/quiz/' + uid + '/run/kind/' + k + '">' + KIND[k] + ' (' + all.filter(i => i.kind === k).length + ')</a>').join('') + '</div>' +
    '<h2 style="margin-top:1.6rem">By topic</h2><div class="card flat" style="padding:.4rem .6rem">';
  MTM.topics(uid).forEach(t => {
    const q = all.filter(i => i.topic === t.id).length, c = cards.filter(i => i.topic === t.id).length;
    if (!q && !c) return;
    const tq = S().tq[uid + ':' + t.id], acc = tq && tq.n ? Math.round(100 * tq.ok / tq.n) : null;
    h += '<div class="listrow" style="margin:.3rem 0;border:0;border-bottom:1px solid var(--line);border-radius:0"><b style="min-width:3.2rem;color:var(--accent-d)">' + esc(t.num) + '</b><span style="flex:1">' + esc(t.t) + '</span>' +
      (acc !== null ? '<span class="chip ' + (acc >= 75 ? 'acc' : acc >= 50 ? 'sand' : 'clay') + '">' + acc + '% right</span>' : '') +
      (q ? '<a class="btn sm" href="#/quiz/' + uid + '/run/topic/' + encodeURIComponent(t.id) + '">' + q + ' tests</a>' : '') + (c ? '<a class="btn sm soft" href="#/cards/' + uid + '/topic/' + encodeURIComponent(t.id) + '">' + c + ' cards</a>' : '') + '</div>';
  });
  view.innerHTML = h + '</div>';
}

MTM.route('quiz', (view, uid, run, mode, arg) => {
  uid = MTM.unit(uid) ? uid : S().settings.unit;
  if (run !== 'run') return hub(view, uid);
  const items = buildSet(uid, mode, arg);
  const title = titleOf(uid, mode, arg);
  if (!items.length) {
    view.innerHTML = '<div class="quiz"><div class="card center"><h2>' + esc(title) + '</h2><p class="muted">' + (mode === 'due' ? 'Nothing is due right now. Come back later, or try a mixed test.' : mode === 'weak' ? 'No weak spots yet. That is a good sign.' : 'There is nothing in this set.') + '</p><a class="btn pri" href="#/quiz/' + uid + '/run/mixed">Mixed test</a> <a class="btn" href="#/quiz/' + uid + '">Back</a></div></div>';
    return;
  }
  session(view, uid, mode === 'mixed' ? items : MTM.shuffle(items), {title});
});

/* ---------- flashcards ---------- */
MTM.route('cards', (view, uid, mode, arg) => {
  uid = MTM.unit(uid) ? uid : S().settings.unit;
  const cards = MTM.items(uid).filter(i => i.kind === 'card');
  let deck = cards, title = 'All flashcards';
  if (mode === 'due') { deck = cards.filter(i => MTM.srs.isDue(i.id)); title = 'Flashcards due'; }
  else if (mode === 'topic') { deck = cards.filter(i => i.topic === arg); title = 'Cards: topic ' + arg; }
  else if (mode === 'group') { deck = cards.filter(i => groupOf(uid, i.topic) === arg); title = 'Cards: lesson ' + arg; }
  else if (mode === 'weak') { deck = cards.filter(i => MTM.srs.isWeak(i.id)); title = 'Weak cards'; }
  if (!deck.length) {
    view.innerHTML = '<div class="quiz"><div class="card center"><h2>' + esc(title) + '</h2><p class="muted">' + (mode === 'due' ? 'No cards are due right now.' : 'No cards here yet.') + '</p><a class="btn pri" href="#/cards/' + uid + '/all">All cards</a> <a class="btn" href="#/quiz/' + uid + '">Back to practice</a></div></div>';
    return;
  }
  deck = MTM.shuffle(deck);
  let i = 0, got = 0, flipped = false;
  const key = e => {
    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    else if (flipped && e.key === '1') rate(false); else if (flipped && e.key === '2') rate(true);
  };
  document.addEventListener('keydown', key); MTM.onLeave(() => document.removeEventListener('keydown', key));
  function flip() { const f = $('.flip'); if (!f) return; flipped = !flipped; f.classList.toggle('f', flipped); $('#rate').classList.toggle('hide', !flipped); }
  function rate(ok) {
    const c = deck[i]; MTM.srs.answer(c.id, ok, c.topic); if (ok) got++;
    i++; flipped = false; draw();
  }
  function draw() {
    if (i >= deck.length) {
      view.innerHTML = '<div class="quiz"><div class="card center"><div class="lbl">' + esc(title) + '</div><div class="stat">' + got + ' / ' + deck.length + '</div><p class="muted">Cards you were unsure about come back in ten minutes.</p><div class="row" style="justify-content:center"><a class="btn pri" href="#/cards/' + uid + '/due">Cards due now</a><a class="btn" href="#/quiz/' + uid + '">Back to practice</a></div></div></div>';
      return;
    }
    const c = deck[i]; MTM.att.topic = c.topic;
    view.innerHTML = '<div class="quiz"><div class="row"><div class="crumbs">' + esc(title) + '</div><span class="sp"></span><span class="small muted">' + (i + 1) + ' of ' + deck.length + '</span></div><div class="bar"><i style="width:' + Math.round(i / deck.length * 100) + '%"></i></div>' +
      '<div class="flip" style="margin-top:1rem"><div class="in" id="cardin" tabindex="0" role="button" aria-label="Flip card"><div class="face"><div class="t">Topic ' + esc(c.topic) + '</div><div style="font:1.15rem/1.5 var(--serif)">' + c.front + '</div><div class="small muted" style="margin-top:1rem">Tap to flip</div></div><div class="face back"><div class="t">Answer</div><div>' + c.back + '</div>' + (c.slide ? '<div class="small" style="margin-top:.8rem"><a href="#/study/' + uid + '/' + c.slide + '">Slide ' + c.slide + '</a></div>' : '') + '</div></div></div>' +
      '<div id="rate" class="row hide" style="justify-content:center;margin-top:1rem"><button class="btn bad" id="no">Again (1)</button><button class="btn pri" id="yes">Got it (2)</button></div></div>';
    $('#cardin').onclick = e => { if (e.target.closest('a')) return; flip(); };
    $('#no').onclick = () => rate(false); $('#yes').onclick = () => rate(true);
  }
  draw();
});

/* ---------- topic-end quick check and lesson-end screen ---------- */
MTM.route('check', (view, uid, topicId, next, force) => {
  uid = MTM.unit(uid) ? uid : S().settings.unit;
  const top = MTM.topicById(uid, topicId);
  if (!top) return MTM.go('study/' + uid);
  const nextN = next && next !== 'end' ? +next : 0;
  const nt = nextN ? MTM.topicOf(uid, nextN) : null;
  const leavingGroup = !!top.g && (!nt || nt.g !== top.g);
  const cont = nextN ? '#/study/' + uid + '/' + nextN : '#/study/' + uid;
  let pool = (S().settings.quick || force === 'now') ? MTM.itemsForTopic(uid, top.id).filter(i => i.kind !== 'card') : [];
  const pri = MTM.shuffle(pool.filter(i => MTM.srs.isDue(i.id) || MTM.srs.isWeak(i.id) || !MTM.srs.get(i.id)));
  pool = pri.concat(MTM.shuffle(pool.filter(i => !pri.includes(i)))).slice(0, 3);
  MTM.att.topic = top.id;
  const onEnd = (v, items, res) => {
    const ok = res.filter(r => r === true).length, tot = res.filter(r => r !== null).length;
    const grpTops = MTM.topics(uid).filter(t => t.g === top.g), ids = grpTops.map(t => t.id);
    const qn = MTM.questionsFor ? MTM.questionsFor(uid, ids).length : 0, tq = MTM.questionsFor ? MTM.questionsFor(uid, top.id).length : 0;
    const c = MTM.cont(uid) || {};
    const nums = (c.num || []).filter(x => ids.includes(x.topic)), ders = (c.der || []).filter(x => ids.includes(x.topic));
    const cn = MTM.items(uid).filter(i => i.kind === 'card' && ids.includes(i.topic)).length, qq = MTM.items(uid).filter(i => i.kind !== 'card' && ids.includes(i.topic)).length;
    let h = '<div class="quiz"><div class="card center"><div class="lbl">' + (top.num ? 'Topic ' : '') + esc(top.lbl) + '</div>' +
      (tot ? '<div class="stat">' + ok + ' / ' + tot + '</div><p class="muted">' + (ok === tot ? 'Well done. Those will return later for a quick refresh.' : 'Missed ones come back for review in ten minutes.') + '</p>' : '<p class="muted">Topic complete.</p>') +
      (tq ? '<div class="row" style="justify-content:center"><button class="btn warn" id="tq">' + tq + ' exam question' + (tq > 1 ? 's' : '') + ' on this topic</button></div>' : '') + '</div>';
    if (leavingGroup) {
      h += '<div class="card" style="margin-top:1rem"><h2>End of lesson ' + esc(top.g) + ': ' + esc(top.gt) + '</h2><p class="muted">Before you move on, here is everything related to this lesson.</p><div class="grid auto">' +
        (cn ? '<a class="card flat" href="#/cards/' + uid + '/group/' + encodeURIComponent(top.g) + '" style="text-decoration:none;color:inherit"><b>Revise flashcards</b><div class="small muted">' + cn + ' cards</div></a>' : '') +
        (qq ? '<a class="card flat" href="#/quiz/' + uid + '/run/group/' + encodeURIComponent(top.g) + '" style="text-decoration:none;color:inherit"><b>Test this lesson</b><div class="small muted">' + qq + ' questions</div></a>' : '') +
        (qn ? '<button class="card flat" id="gq" style="text-align:left"><b>Exam questions</b><div class="small muted">' + qn + ' questions, with answer outlines</div></button>' : '') +
        (nums.length ? '<div class="card flat"><b>Numericals</b>' + nums.map(x => '<div><a href="#/num/' + uid + '/' + x.id + '">' + x.id + ': ' + esc(x.title) + '</a></div>').join('') + '</div>' : '') +
        (ders.length ? '<div class="card flat"><b>Derivations</b>' + ders.map(x => '<div><a href="#/der/' + uid + '/' + x.id + '">' + x.id + ': ' + esc(x.title) + '</a></div>').join('') + '</div>' : '') +
        '</div></div>';
    }
    if (!nextN) h += '<div class="card" style="margin-top:1rem"><h2>You have reached the end of this path</h2><p class="muted">Lock it in with a mixed test, try the exam questions, then see how your study time went.</p><div class="row"><a class="btn pri" href="#/quiz/' + uid + '/run/mixed">Mixed test</a><a class="btn" href="#/qs/' + uid + '">Exam questions</a><a class="btn" href="#/insights">Insights</a></div></div>';
    h += '<div class="row" style="margin-top:1rem;justify-content:flex-end"><a class="btn pri" href="' + cont + '">' + (nextN ? 'Continue &rarr;' : 'Back to unit') + '</a></div></div>';
    v.innerHTML = h;
    const a = $('#tq'); if (a) a.onclick = () => MTM.showQuestions(uid, top.id, top.lbl);
    const b = $('#gq'); if (b) b.onclick = () => MTM.showQuestions(uid, ids, 'Lesson ' + top.g + ' ' + top.gt);
  };
  if (!pool.length) return onEnd(view, [], []);
  session(view, uid, pool, {title: 'Quick check: ' + top.lbl, onEnd});
});
})();
