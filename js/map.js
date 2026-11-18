/* map.js: mind map (SVG tree on wide screens, outline on narrow ones) */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;

function wrap(t, max) {
  max = max || 24;
  if (t.length <= max) return [t];
  const w = t.split(' '); let a = '', b = '';
  w.forEach(x => { if ((a + ' ' + x).trim().length <= max && !b) a = (a + ' ' + x).trim(); else b = (b + ' ' + x).trim(); });
  if (b.length > max + 4) b = b.slice(0, max + 1) + '…';
  return b ? [a, b] : [a];
}

function outline(uid, n, d) {
  const link = n.s ? ' <a class="chip" href="#/study/' + uid + '/' + n.s + '">slide ' + n.s + '</a>' : '';
  if (!n.c || !n.c.length) return '<li style="padding:.2rem 0">' + esc(n.t) + link + '</li>';
  return '<li><details' + (d < 1 ? ' open' : '') + '><summary style="cursor:pointer;padding:.25rem 0;font-weight:' + (d < 2 ? 600 : 400) + '">' + esc(n.t) + link + '</summary><ul class="clean" style="margin-left:1rem;border-left:2px solid var(--line);padding-left:.6rem">' + n.c.map(c => outline(uid, c, d + 1)).join('') + '</ul></details></li>';
}

function tree(view, uid, root) {
  const open = new Set(['0']);
  root.c.forEach((c, i) => open.add('0.' + i));      /* level 1 branches open by default */
  const GAPX = 44, ROWH = 50;
  let selected = null;
  const draw = () => {
    const colW = [], nodes = [];
    let leafY = 0;
    const walk = (n, id, d, parent) => {
      n.id = id; n.d = d; n.lines = wrap(n.t);
      n.w = Math.max(70, Math.max.apply(null, n.lines.map(l => l.length)) * 7.1 + 26) + (n.c && n.c.length ? 14 : 0);
      n.h = n.lines.length > 1 ? 42 : 32;
      colW[d] = Math.max(colW[d] || 0, n.w);
      const kids = n.c && open.has(id) ? n.c : [];
      kids.forEach((k, i) => walk(k, id + '.' + i, d + 1, n));
      if (kids.length) n.y = (kids[0].y + kids[kids.length - 1].y) / 2; else { n.y = leafY; leafY += ROWH; }
      n.kids = kids; n.parent = parent; nodes.push(n);
    };
    walk(root, '0', 0, null);
    const xs = []; let acc = 12;
    colW.forEach((w, d) => { xs[d] = acc; acc += w + GAPX; });
    const W = acc - GAPX + 12, H = Math.max(leafY, ROWH) + 10;
    let edges = '', ns = '';
    nodes.forEach(n => {
      n.x = xs[n.d];
      n.kids.forEach(k => { /* edges after positions known */ });
    });
    nodes.forEach(n => n.kids.forEach(k => {
      const x1 = n.x + n.w, y1 = n.y + 5 + n.h / 2 - 0, x2 = xs[k.d], y2 = k.y + 5 + k.h / 2;
      edges += '<path class="mmedge" d="M' + x1 + ',' + y1 + ' C' + (x1 + GAPX / 2) + ',' + y1 + ' ' + (x2 - GAPX / 2) + ',' + y2 + ' ' + x2 + ',' + y2 + '"/>';
    }));
    nodes.forEach(n => {
      const hasK = n.c && n.c.length, cls = 'mmnode' + (n.d === 0 ? ' root' : n.d === 1 ? ' l1' : '') + (selected === n.id ? ' sel' : '');
      ns += '<g class="' + cls + '" data-id="' + n.id + '" transform="translate(' + n.x + ',' + (n.y + 5) + ')" tabindex="0" role="button" aria-label="' + esc(n.t) + '"><rect width="' + n.w + '" height="' + n.h + '" rx="9"/>' +
        n.lines.map((l, i) => '<text x="' + (n.w / 2 - (hasK ? 6 : 0)) + '" y="' + (n.lines.length > 1 ? 17 + i * 15 : 21) + '" text-anchor="middle">' + esc(l) + '</text>').join('') +
        (hasK ? '<text x="' + (n.w - 12) + '" y="' + (n.h / 2 + 5) + '" text-anchor="middle" style="font-weight:700">' + (open.has(n.id) ? '−' : '+') + '</text>' : '') + '</g>';
    });
    $('#mmsvg').innerHTML = '<svg width="' + W + '" height="' + (H + 10) + '" viewBox="0 0 ' + W + ' ' + (H + 10) + '" role="group" aria-label="Mind map">' + edges + ns + '</svg>';
    root._nodes = nodes;
  };
  view.innerHTML = '<div class="row"><h1 style="margin:0">Mind map: ' + esc(root.t) + '</h1><span class="sp"></span><button class="btn sm" id="ex">Expand all</button><button class="btn sm" id="co">Collapse</button></div>' +
    '<p class="muted small">Tap a box to open or close its branches. A box that points to a slide shows a button below the map.</p><div class="mmwrap" id="mmsvg"></div><div class="card" id="mmsel" style="margin-top:.8rem"><span class="muted">Select a box to see its slide.</span></div>';
  draw();
  const centre = () => { const w = $('#mmsvg'), r = root._nodes.find(x => x.id === '0'); if (w && r) w.scrollTop = Math.max(0, r.y - w.clientHeight / 2 + 20); };
  centre();
  const all = (n, id) => { if (n.c && n.c.length) { open.add(id); n.c.forEach((k, i) => all(k, id + '.' + i)); } };
  const act = g => {
    const id = g.dataset.id, n = root._nodes.find(x => x.id === id); if (!n) return;
    selected = id;
    if (n.c && n.c.length) open.has(id) ? (id !== '0' && open.delete(id)) : open.add(id);
    draw();
    $('#mmsel').innerHTML = '<b>' + esc(n.t) + '</b>' + (n.s ? ' <a class="btn sm pri" href="#/study/' + uid + '/' + n.s + '">Open slide ' + n.s + '</a>' : '<span class="muted small"> (heading; open a branch for slides)</span>') +
      (n.c && n.c.length ? '<div class="small muted" style="margin-top:.3rem">Branches: ' + n.c.map(k => esc(k.t)).join(' · ') + '</div>' : '');
  };
  view.onclick = e => { const g = e.target.closest('.mmnode'); if (g) return act(g); if (e.target.id === 'ex') { all(root, '0'); draw(); } else if (e.target.id === 'co') { open.clear(); open.add('0'); root.c.forEach((c, i) => open.add('0.' + i)); draw(); centre(); } };
  view.onkeydown = e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('mmnode')) { e.preventDefault(); act(e.target); } };
}

MTM.route('map', (view, uid) => {
  uid = MTM.unit(uid) ? uid : S().settings.unit;
  const c = MTM.cont(uid), u = MTM.unit(uid);
  if (!c || !c.mm) { view.innerHTML = '<h1>Mind map: Unit ' + esc(u.no) + '</h1><div class="card muted">The mind map for this unit is not ready yet. Unit V is the pilot unit.</div>'; return; }
  const narrow = window.innerWidth < 700;
  if (narrow) {
    view.innerHTML = '<h1>Mind map: ' + esc(c.mm.t) + '</h1><p class="muted small">Tap a heading to open its branches. On a larger screen this appears as a diagram.</p><div class="card"><ul class="clean">' + c.mm.c.map(n => outline(uid, n, 0)).join('') + '</ul></div>';
  } else tree(view, uid, JSON.parse(JSON.stringify(c.mm)));
  let t = 0, w = window.innerWidth;
  const rs = () => { clearTimeout(t); t = setTimeout(() => { if ((window.innerWidth < 700) !== (w < 700)) MTM.render(); w = window.innerWidth; }, 250); };
  window.addEventListener('resize', rs); MTM.onLeave(() => window.removeEventListener('resize', rs));
});
})();
