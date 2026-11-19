/* service worker: app shell cached on install, slide images cached as they are viewed */
const V = 'mtm-v8';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'css/app.css', 'icons/icon.svg', 'icons/icon-192.png',
  'js/core.js', 'js/pomodoro.js', 'js/attention.js', 'js/study.js', 'js/practice.js', 'js/lists.js', 'js/map.js', 'js/tools.js', 'js/main.js', 'js/stats.js',
  'data/units.js', 'data/tmap.js', 'data/u1_slides.js', 'data/u2_slides.js', 'data/u3_slides.js', 'data/u4_slides.js', 'data/pyq.js', 'data/pyq2.js', 'data/pyq3.js', 'data/tools.js', 'tools/turbograph.html', 'tools/velocity-triangles.html', 'tools/turbine-profiles.html', 'tools/centrifugal-compressor-parts.html', 'tools/vendor/chart.umd.min.js', 'data/u1_a.js', 'data/u1_q.js', 'data/u1_n.js', 'data/u2_a.js', 'data/u2_b.js', 'data/u2_c.js', 'data/u2_d.js', 'data/u2_e.js', 'data/u2_q.js', 'data/u2_n.js', 'data/u3_a.js', 'data/u3_b.js', 'data/u3_q.js', 'data/u3_n.js', 'data/u4_a.js', 'data/u4_b.js', 'data/u4_c.js', 'data/u4_d.js', 'data/u4_q.js', 'data/u4_r.js', 'data/u4_n.js', 'data/u5_slides.js', 'data/u5_a.js', 'data/u5_b.js', 'data/u5_c.js', 'data/u5_q1.js', 'data/u5_q2.js', 'data/u5_q3.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  const isCode = /\.(js|css|html|webmanifest)$/.test(new URL(r.url).pathname) || r.mode === 'navigate';
  if (isCode) {   /* network first so updates arrive, cache as the fallback */
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
  } else {        /* images, video, tools: cache first */
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok && res.status === 200) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })));
  }
});
