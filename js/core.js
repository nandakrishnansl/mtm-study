/* core.js: store, data helpers, spaced repetition, router, UI helpers */
(function(){
'use strict';
const MTM = window.MTM = window.MTM || {c:{}};
MTM.slides = MTM.slides || {};
const $ = MTM.$ = (s, r) => (r || document).querySelector(s);
MTM.$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
MTM.esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
MTM.pad = n => String(n).padStart(2, '0');
MTM.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
MTM.mmss = s => { s = Math.max(0, Math.round(s)); return MTM.pad(Math.floor(s / 60)) + ':' + MTM.pad(s % 60); };
MTM.today = () => { const d = new Date(); return d.getFullYear() + '-' + MTM.pad(d.getMonth() + 1) + '-' + MTM.pad(d.getDate()); };

/* ---------- store (kept on the student's own device) ---------- */
const KEY = 'mtm.v1';
const DEFAULTS = {
  settings: {theme: 'auto', lastLight: 'paper', lastDark: 'night', fs: 100, view: 'auto', split: false, detail: false, quick: true, timers: true, motion: true, unit: 'u5',
             idle: 120, recall: true, kit: true,
             pomo: {work: 25, short: 5, long: 15, every: 4, sound: true}},
  progress: {}, srs: {}, days: {}, notes: {}, tq: {}, kitDay: '',
  pomo: {phase: 'idle', running: false, endsAt: 0, left: 0, count: 0}
};
function merge(base, src) {
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return src === undefined ? base : src;
  const out = {};
  for (const k in base) out[k] = merge(base[k], src && src[k]);
  if (src) for (const k in src) if (!(k in base)) out[k] = src[k];
  return out;
}
let S;
function load() {
  try { S = merge(DEFAULTS, JSON.parse(localStorage.getItem(KEY) || 'null') || {}); }
  catch (e) { S = merge(DEFAULTS, {}); }
}
load();
let saveT = 0;
MTM.save = (now) => {
  clearTimeout(saveT);
  const f = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode: keep in memory */ } };
  if (now) f(); else saveT = setTimeout(f, 400);
};
MTM.S = () => S;
MTM.exportData = () => JSON.stringify(S);
MTM.importData = txt => { const o = JSON.parse(txt); S = merge(DEFAULTS, o); MTM.save(true); };
MTM.resetData = () => { S = merge(DEFAULTS, {}); MTM.save(true); };

/* ---------- units, slides, topics ---------- */
MTM.unit = id => (MTM.units || []).find(u => u.id === id);
MTM.sl = uid => MTM.slides[uid] || [];
MTM.cont = uid => MTM.c[uid] || null;
MTM.slideC = (uid, n) => (MTM.c[uid] && MTM.c[uid].sl && MTM.c[uid].sl[n]) || null;
MTM.imp = (uid, n) => { const c = MTM.slideC(uid, n); return c ? c.i : 2; };
MTM.img = (uid, n) => 'slides/' + uid + '/' + MTM.pad(n) + '.webp';
MTM.slideMin = (uid, n) => {
  const c = MTM.cont(uid), extra = c && c.meta && c.meta.extraMin ? (c.meta.extraMin[n] || 0) : 0;
  return ({3: 3, 2: 2, 1: 1}[MTM.imp(uid, n)] || 2) + extra;
};
const topicCache = {};
MTM.topics = uid => {
  if (topicCache[uid]) return topicCache[uid];
  const sl = MTM.sl(uid), c = MTM.cont(uid);
  let tops = [];
  const tmapU = MTM.tmap && MTM.tmap[uid];
  if (c && c.meta && c.meta.topics) {
    tops = c.meta.topics.map(t => Object.assign({}, t));
  } else if (tmapU) {
    tops = tmapU.topics.map(t => Object.assign({}, t));
  } else {
    let cur = null;
    sl.forEach(s => {
      if (s.num && (!cur || cur.id !== s.num)) {
        cur = {id: s.num, g: s.num.split('.').slice(0, 2).join('.'), t: s.title.replace(/^[\d.]+\s*/, ''), from: s.n, to: s.n};
        tops.push(cur);
      } else if (cur) cur.to = s.n;
      else { cur = {id: '0', g: '', t: s.title, from: s.n, to: s.n}; tops.push(cur); }
    });
  }
  const gt = {};
  if (c && c.meta && c.meta.groups) c.meta.groups.forEach(g => gt[g.id] = g.t);
  else if (tmapU) tmapU.groups.forEach(g => gt[g.id] = g.t);
  tops.forEach(t => {
    t.slides = []; for (let n = t.from; n <= t.to; n++) t.slides.push(n);
    t.limit = Math.max(3, Math.ceil(t.slides.reduce((a, n) => a + MTM.slideMin(uid, n), 0)));
    t.gt = gt[t.g] || t.t;
    t.num = /^\d+\.\d/.test(t.id) ? t.id : '';
    t.lbl = t.num ? t.id + ' ' + t.t : t.t;
  });
  topicCache[uid] = tops;
  return tops;
};
MTM.topicOf = (uid, n) => MTM.topics(uid).find(t => n >= t.from && n <= t.to);
MTM.topicById = (uid, id) => MTM.topics(uid).find(t => t.id === id);
MTM.groupEnd = (uid, n) => { const t = MTM.topicOf(uid, n), nx = MTM.topicOf(uid, n + 1); return !!t && !!t.g && (!nx || nx.g !== t.g); };

/* ---------- progress ---------- */
MTM.P = uid => (S.progress[uid] = S.progress[uid] || {seen: {}, done: {}, mark: {}, conf: {}, last: 0, time: {}});
MTM.day = (key) => {
  const k = key || MTM.today();
  const d = (S.days[k] = S.days[k] || {});
  ['focus', 'study', 'poms', 'pstart', 'q', 'ok', 'act', 'idle', 'away', 'paper', 'slides'].forEach(f => { if (typeof d[f] !== 'number') d[f] = 0; });
  d.hr = d.hr || {}; d.chk = d.chk || {shown: 0, ok: 0, miss: 0};
  return d;
};
MTM.unitProgress = uid => {
  const n = MTM.sl(uid).length, p = MTM.P(uid);
  const seen = Object.keys(p.seen).length, done = Object.keys(p.done).length;
  return {total: n, seen, done, pct: n ? Math.round(100 * Math.max(seen, done) / n) : 0};
};

/* ---------- spaced repetition (Leitner boxes) ---------- */
const BOX_DAYS = [0, 0, 1, 3, 7, 14, 30];
MTM.srs = {
  get: id => S.srs[id] || null,
  answer(id, ok, topic) {
    const r = S.srs[id] || {b: 0, due: 0, n: 0, w: 0};
    const d = MTM.day(); d.q++; if (ok) d.ok++;
    if (topic) { const k = id.split(':')[0] + ':' + topic, t = (S.tq[k] = S.tq[k] || {n: 0, ok: 0}); t.n++; if (ok) t.ok++; }
    r.n++;
    if (ok) { r.b = Math.min(6, r.b + 1); r.due = Date.now() + BOX_DAYS[r.b] * 86400e3; }
    else { r.b = 1; r.w++; r.due = Date.now() + 10 * 60e3; }
    r.last = Date.now(); r.ok = !!ok;
    S.srs[id] = r; MTM.save();
  },
  isDue: id => { const r = S.srs[id]; return !!r && r.due <= Date.now(); },
  isWeak: id => { const r = S.srs[id]; return !!r && (r.b <= 1 || r.ok === false); }
};

/* ---------- normalised practice items ---------- */
const itemCache = {};
MTM.items = uid => {
  if (itemCache[uid]) return itemCache[uid];
  const c = MTM.cont(uid) || {}, out = [];
  (c.cards || []).forEach((x, i) => out.push({id: uid + ':c:' + i, kind: 'card', topic: x[0], front: x[1], back: x[2], slide: x[3]}));
  (c.mcq || []).forEach((x, i) => out.push({id: uid + ':q:' + i, kind: 'mcq', topic: x[0], q: x[1], o: x[2], a: x[3], e: x[4], slide: x[5]}));
  (c.match || []).forEach((x, i) => out.push({id: uid + ':m:' + i, kind: 'match', topic: x[0], q: x[1], pairs: x[2], slide: x[3], e: x[4]}));
  (c.order || []).forEach((x, i) => out.push({id: uid + ':o:' + i, kind: 'order', topic: x[0], q: x[1], items: x[2], slide: x[3], e: x[4]}));
  return (itemCache[uid] = out);
};
MTM.itemsForTopic = (uid, topic, kinds) => MTM.items(uid).filter(i => i.topic === topic && (!kinds || kinds.includes(i.kind)));

/* ---------- theme ---------- */
const darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
/* colour schemes: the colours themselves live in css/app.css under [data-theme=...]; this list names them and says which are dark */
MTM.themes = [
  {id: 'paper', name: 'Paper', note: 'Cream and sage', dark: false, bg: '#F4F0E6'},
  {id: 'mist', name: 'Mist', note: 'Cool teal', dark: false, bg: '#ECF2F1'},
  {id: 'sky', name: 'Sky', note: 'Soft blue', dark: false, bg: '#EDF2F8'},
  {id: 'lavender', name: 'Lavender', note: 'Quiet lilac', dark: false, bg: '#F1EEF7'},
  {id: 'blush', name: 'Blush', note: 'Warm rose', dark: false, bg: '#F7EFEC'},
  {id: 'sepia', name: 'Sepia', note: 'Like old paper', dark: false, bg: '#F3ECDD'},
  {id: 'contrast', name: 'High contrast', note: 'Black on white', dark: false, bg: '#FFFFFF'},
  {id: 'night', name: 'Night', note: 'Dark green', dark: true, bg: '#17211F'},
  {id: 'dusk', name: 'Dusk', note: 'Dark blue', dark: true, bg: '#151B2B'},
  {id: 'ember', name: 'Ember', note: 'Warm dark, low glare', dark: true, bg: '#1E1A17'}
];
const themeOf = id => MTM.themes.find(t => t.id === id);
MTM.theme = () => {
  const st = S.settings, t = st.theme;
  if (t === 'auto') return darkMQ && darkMQ.matches ? (themeOf(st.lastDark) ? st.lastDark : 'night') : (themeOf(st.lastLight) ? st.lastLight : 'paper');
  return themeOf(t) ? t : 'paper';
};
MTM.isDark = () => !!themeOf(MTM.theme()).dark;
MTM.applyTheme = () => {
  const s = S.settings, r = document.documentElement, th = MTM.theme(), def = themeOf(th);
  r.setAttribute('data-theme', th);
  if (def.dark) r.setAttribute('data-dark', ''); else r.removeAttribute('data-dark');
  r.style.fontSize = s.fs + '%';
  r.classList.toggle('reduce', !s.motion);
  const m = document.querySelector('meta[name=theme-color]');
  if (m) m.content = def.bg;
  const b = document.getElementById('themebtn');
  if (b) { b.innerHTML = def.dark ? '&#9728;' : '&#9790;'; b.setAttribute('aria-label', def.dark ? 'Switch to a light scheme' : 'Switch to a dark scheme'); b.title = b.getAttribute('aria-label'); }
  document.querySelectorAll('.themetile').forEach(t => t.setAttribute('aria-checked', String((t.dataset.pick || '') === s.theme)));
};
/* choose a scheme: 'auto' or a scheme id. The last light and last dark choices are remembered for "Match my device" and for the sun/moon button. */
MTM.setTheme = id => {
  const st = S.settings, d = themeOf(id);
  st.theme = d ? id : 'auto';
  if (d) st[d.dark ? 'lastDark' : 'lastLight'] = id;
  MTM.save(true); MTM.applyTheme();
};
MTM.toggleDark = () => {
  const st = S.settings, nowDark = MTM.isDark();
  MTM.setTheme(nowDark ? (themeOf(st.lastLight) ? st.lastLight : 'paper') : (themeOf(st.lastDark) ? st.lastDark : 'night'));
};
/* the picker: tiles paint themselves, because each tile carries its own data-theme */
MTM.themePicker = () => {
  const st = S.settings, L = themeOf(st.lastLight) || themeOf('paper'), D = themeOf(st.lastDark) || themeOf('night');
  const tile = t => '<button type="button" class="themetile" role="radio" data-theme="' + t.id + '" data-pick="' + t.id + '" aria-checked="' + (st.theme === t.id) + '"><span class="sw"><i class="a"></i><i class="b"></i><i class="c"></i></span><b>' + t.name + '</b><small>' + t.note + '</small></button>';
  const auto = '<button type="button" class="themetile auto" role="radio" data-pick="auto" aria-checked="' + (st.theme === 'auto') + '"><span class="half" data-theme="' + L.id + '"><b>Match my device</b><small>' + L.name + ' by day</small></span><span class="half" data-theme="' + D.id + '"><b>&nbsp;</b><small>' + D.name + ' by night</small></span></button>';
  return '<div class="themegrid" role="radiogroup" aria-label="Colour scheme">' + auto + MTM.themes.map(tile).join('') + '</div>';
};
MTM.refreshPicker = () => {
  const st = S.settings, L = themeOf(st.lastLight) || themeOf('paper'), D = themeOf(st.lastDark) || themeOf('night');
  document.querySelectorAll('.themetile.auto').forEach(t => {
    const h = t.querySelectorAll('.half');
    if (h[0]) { h[0].setAttribute('data-theme', L.id); h[0].querySelector('small').textContent = L.name + ' by day'; }
    if (h[1]) { h[1].setAttribute('data-theme', D.id); h[1].querySelector('small').textContent = D.name + ' by night'; }
  });
};
document.addEventListener('click', e => {
  const t = e.target.closest && e.target.closest('.themetile');
  if (!t) return;
  MTM.setTheme(t.dataset.pick);
  MTM.refreshPicker();
});
if (darkMQ) { const f = () => { if (S.settings.theme === 'auto') MTM.applyTheme(); }; darkMQ.addEventListener ? darkMQ.addEventListener('change', f) : darkMQ.addListener(f); }

/* ---------- toast / modal ---------- */
MTM.toast = (msg, actions, ms) => {
  $('.toast') && $('.toast').remove();
  const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status');
  t.innerHTML = '<span>' + msg + '</span>';
  (actions || []).forEach(a => { const b = document.createElement('button'); b.textContent = a.label; b.onclick = () => { t.remove(); a.fn && a.fn(); }; t.appendChild(b); });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms || (actions && actions.length ? 12000 : 3500));
};
MTM.modal = (html, mount) => {
  const m = document.createElement('div'); m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true');
  m.innerHTML = '<div class="card">' + html + '</div>';
  const close = () => { m.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') close(); };
  m.addEventListener('mousedown', e => { if (e.target === m) close(); });
  document.addEventListener('keydown', esc);
  document.body.appendChild(m);
  mount && mount(m, close);
  return close;
};
MTM.beep = (pattern) => {
  try {
    if (!S.settings.pomo.sound) return;
    const ctx = MTM._ac || (MTM._ac = new (window.AudioContext || window.webkitAudioContext)());
    (pattern || [660, 880]).forEach((f, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + i * 0.28;
      o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.3);
    });
  } catch (e) {}
  try { navigator.vibrate && navigator.vibrate([120, 80, 120]); } catch (e) {}
};

/* ---------- router ---------- */
const routes = {};
MTM.route = (name, fn) => { routes[name] = fn; };
let leaveFn = null;
MTM.onLeave = fn => { leaveFn = fn; };
/* Routing. Normally the route lives in the address hash (#/study/u5/3). When the app is shown inside a frame
   (a preview pane, or a school page that embeds it) the host may ignore #/paths, so the route is kept in memory instead. */
const EMB = (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
let memHash = '';
MTM.embedded = EMB;
MTM.hash = () => EMB ? memHash : location.hash;
MTM.setHash = (h, quiet) => { if (EMB) { memHash = h; if (!quiet) MTM.render(); } else location.hash = h; };
MTM.parse = () => {
  const h = MTM.hash().replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean).map(decodeURIComponent);
  return {name: parts[0] || 'home', args: parts.slice(1)};
};
MTM.go = hash => { if (MTM.hash() === '#/' + hash) MTM.render(); else MTM.setHash('#/' + hash); };
MTM.render = () => {
  if (leaveFn) { try { leaveFn(); } catch (e) {} leaveFn = null; }
  const view = $('#view'), r = MTM.parse();
  view.onclick = null; view.onchange = null; view.oninput = null; view.onkeydown = null;
  view.innerHTML = '';
  MTM.beforeRender && MTM.beforeRender(r);
  const fn = routes[r.name] || routes.home;
  try { fn(view, ...r.args); } catch (e) { console.error(e); view.innerHTML = '<div class="card"><h2>Something went wrong</h2><p class="muted">' + MTM.esc(e.message) + '</p><a class="btn" href="#/home">Back to home</a></div>'; }
  MTM.afterRender && MTM.afterRender(r);
  window.scrollTo(0, 0);
};
window.addEventListener('hashchange', MTM.render);

MTM.slideLink = (uid, n, label) => '<a href="#/study/' + uid + '/' + n + '">' + (label || 'Slide ' + n) + '</a>';
MTM.imp3 = n => '<span class="imp" title="' + ['', 'Good to know', 'Important', 'Must know'][n] + '">' + [1, 2, 3].map(i => '<i class="' + (i <= n ? 'on' : '') + '"></i>').join('') + '</span>';
})();
