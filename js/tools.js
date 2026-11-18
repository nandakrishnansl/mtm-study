/* tools.js: built-in calculators and the teacher's interactive tools */
(function(){
'use strict';
const MTM = window.MTM, $ = MTM.$, S = () => MTM.S(), esc = MTM.esc;
const f = (x, d) => (isFinite(x) ? x.toFixed(d == null ? 1 : d) : '–');

/* rows of slider + value */
const slider = (id, label, min, max, step, val, unit) => '<label for="' + id + '">' + label + ': <span class="val" id="' + id + 'v"></span> ' + (unit || '') + '</label><input type="range" id="' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '" style="width:100%">';
const bind = (root, ids, fn) => ids.forEach(id => { const el = $('#' + id, root), out = $('#' + id + 'v', root); const u = () => { out.textContent = el.value; fn(); }; el.addEventListener('input', u); out.textContent = el.value; });

/* 1. Brayton cycle explorer */
function brayton(host) {
  host.innerHTML = '<div class="grid g2" style="align-items:start"><div class="card tool"><h3>Simple gas turbine cycle</h3>' +
    slider('t1', 'Inlet temperature T<sub>1</sub>', 250, 330, 1, 288, 'K') + slider('t3', 'Turbine inlet T<sub>3</sub>', 800, 1700, 10, 1200, 'K') + slider('pr', 'Pressure ratio p<sub>R</sub>', 2, 40, 0.5, 8, '') + slider('g', 'γ', 1.25, 1.5, 0.01, 1.4, '') + slider('cp', 'c<sub>p</sub>', 0.95, 1.2, 0.005, 1.005, 'kJ/kg K') +
    '<p class="small muted" style="margin-top:.6rem">Ideal cycle: no losses, constant c<sub>p</sub> and γ, fuel mass ignored. Same assumptions as Eq. 5.9 and 5.12.</p></div>' +
    '<div class="card"><div class="kgrid" id="bo"></div><div id="bchart" style="margin-top:.6rem"></div><p class="small muted">Orange dashed line: your p<sub>R</sub>. Green dot: p<sub>R</sub> for maximum net work, where x = √t.</p></div></div>';
  const run = () => {
    const T1 = +$('#t1', host).value, T3 = +$('#t3', host).value, pR = +$('#pr', host).value, g = +$('#g', host).value, cp = +$('#cp', host).value;
    const e = (g - 1) / g, x = Math.pow(pR, e), t = T3 / T1, T2 = T1 * x, T4 = T3 / x;
    const WC = cp * (T2 - T1), WT = cp * (T3 - T4), WN = WT - WC, Q = cp * (T3 - T2), eta = 1 - 1 / x;
    const kv = (k, v, u) => '<div class="kpi"><span class="v">' + v + '</span><span class="l">' + k + (u ? ' (' + u + ')' : '') + '</span></div>';
    $('#bo', host).innerHTML = kv('x = p<sub>R</sub><sup>(γ−1)/γ</sup>', f(x, 3)) + kv('T<sub>2</sub>', f(T2), 'K') + kv('T<sub>4</sub>', f(T4), 'K') + kv('Compressor work W<sub>C</sub>', f(WC), 'kJ/kg') + kv('Turbine work W<sub>T</sub>', f(WT), 'kJ/kg') + kv('Net work W<sub>N</sub>', f(WN), 'kJ/kg') + kv('Heat supplied Q', f(Q), 'kJ/kg') + kv('Efficiency η', f(eta * 100) + ' %') + kv('Back work ratio', f(WC / WT * 100) + ' %');
    const W = 360, H = 190, px = p => 36 + (p - 2) / 38 * (W - 56), pts = [], pe = [];
    let wmax = 1;
    for (let p = 2; p <= 40; p += 0.5) { const xx = Math.pow(p, e), w = cp * T1 * (t * (1 - 1 / xx) - (xx - 1)); wmax = Math.max(wmax, w); pts.push([p, w]); pe.push([p, 1 - 1 / xx]); }
    const py = w => H - 24 - Math.max(0, w) / wmax * (H - 44), pe2 = v => H - 24 - v * (H - 44);
    const popt = Math.pow(Math.sqrt(t), g / (g - 1)), wopt = cp * T1 * (t * (1 - 1 / Math.sqrt(t)) - (Math.sqrt(t) - 1));
    const path = (a, fy) => a.map((q, i) => (i ? 'L' : 'M') + px(q[0]).toFixed(1) + ',' + fy(q[1]).toFixed(1)).join('');
    $('#bchart', host).innerHTML = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Net work and efficiency against pressure ratio">' +
      '<line x1="36" y1="' + (H - 24) + '" x2="' + (W - 12) + '" y2="' + (H - 24) + '" stroke="var(--line)"/><line x1="36" y1="14" x2="36" y2="' + (H - 24) + '" stroke="var(--line)"/>' +
      '<path d="' + path(pts, py) + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/><path d="' + path(pe, pe2) + '" fill="none" stroke="var(--sand)" stroke-width="2.5"/>' +
      '<line x1="' + px(Math.min(40, pR)) + '" x2="' + px(Math.min(40, pR)) + '" y1="14" y2="' + (H - 24) + '" stroke="var(--clay)" stroke-dasharray="4 3"/>' +
      (popt <= 40 ? '<circle cx="' + px(popt) + '" cy="' + py(wopt) + '" r="5" fill="var(--good)"/>' : '') +
      '<text x="' + (W - 12) + '" y="' + (H - 8) + '" text-anchor="end">pressure ratio →</text></svg>' +
      '<div class="legend"><span><i style="background:var(--accent)"></i>Net work</span><span><i style="background:var(--sand)"></i>Efficiency</span><span>p<sub>R</sub> for max work = ' + f(popt) + '</span></div>';
  };
  bind(host, ['t1', 't3', 'pr', 'g', 'cp'], run); run();
}

/* 2. combustion airflow zones */
function zones(host) {
  host.innerHTML = '<div class="grid g2" style="align-items:start"><div class="card tool"><h3>Combustion chamber airflow</h3>' + slider('ma', 'Total air flow', 10, 80, 0.5, 40, 'kg/s') + slider('mf', 'Fuel flow', 0.2, 2, 0.05, 0.5, 'kg/s') + slider('p1', 'Primary zone share', 10, 25, 1, 18, '%') + slider('p2', 'Secondary zone share', 20, 40, 1, 30, '%') +
    '<p class="small muted">The tertiary (dilution) share is what is left. Typical: primary 15–20 %, secondary about 30 %, tertiary about 50 %.</p></div><div class="card"><div id="zo"></div></div></div>';
  const run = () => {
    const ma = +$('#ma', host).value, mf = +$('#mf', host).value, a = +$('#p1', host).value, b = +$('#p2', host).value, c = 100 - a - b;
    const rows = [['Primary', a, 'var(--clay)'], ['Secondary', b, 'var(--sand)'], ['Tertiary (dilution)', c, 'var(--accent)']];
    $('#zo', host).innerHTML = rows.map(r => '<div class="hbar"><span>' + r[0] + ' (' + r[1] + ' %)</span><div class="bar"><i style="width:' + r[1] + '%;background:' + r[2] + '"></i></div><b>' + f(ma * r[1] / 100) + ' kg/s</b></div>').join('') +
      '<div class="grid g2" style="margin-top:.8rem"><div class="kpi"><span class="v">' + f(ma / mf) + '</span><span class="l">Overall air:fuel ratio</span></div><div class="kpi"><span class="v">' + f(ma * a / 100 / mf) + '</span><span class="l">Primary zone air:fuel ratio</span></div></div>' +
      '<p class="small muted" style="margin-top:.6rem">' + (c < 0 ? 'The shares add to more than 100 %. Reduce one of them.' : ma / mf > 40 ? 'Overall mixture is very lean, as normal for a gas turbine: far more air than the fuel needs, so the dilution air can cool the gas.' : 'This overall mixture is richer than usual for a gas turbine.') + '</p>';
  };
  bind(host, ['ma', 'mf', 'p1', 'p2'], run); run();
}

/* 3. propeller law and gearbox */
function prop(host) {
  host.innerHTML = '<div class="grid g2" style="align-items:start"><div class="card tool"><h3>Propeller law and reduction gear</h3>' + slider('P1', 'Power at reference speed', 1000, 40000, 100, 20000, 'kW') + slider('n1', 'Reference speed', 50, 200, 1, 150, 'rev/min') + slider('n2', 'New speed', 40, 200, 1, 120, 'rev/min') + slider('N', 'Power turbine speed', 3000, 8000, 50, 3600, 'rev/min') + slider('st', 'Reduction stages', 1, 3, 1, 2, '') +
    '<p class="small muted">Propeller law: power varies as the cube of speed, P ∝ n³.</p></div><div class="card"><div id="po"></div></div></div>';
  const run = () => {
    const P1 = +$('#P1', host).value, n1 = +$('#n1', host).value, n2 = +$('#n2', host).value, N = +$('#N', host).value, st = +$('#st', host).value;
    const P2 = P1 * Math.pow(n2 / n1, 3), i = N / n1;
    $('#po', host).innerHTML = '<div class="grid g2"><div class="kpi"><span class="v">' + f(P2, 0) + ' kW</span><span class="l">Power at ' + n2 + ' rev/min</span></div><div class="kpi"><span class="v">' + f(P2 / P1 * 100, 0) + ' %</span><span class="l">of reference power</span></div><div class="kpi"><span class="v">' + f(i, 1) + ' : 1</span><span class="l">Gear ratio i = N<sub>PT</sub> / N<sub>prop</sub></span></div><div class="kpi"><span class="v">' + f(Math.pow(i, 1 / st), 2) + ' : 1</span><span class="l">Ratio per stage (' + st + ' stage' + (st > 1 ? 's' : '') + ', equal split)</span></div></div>' +
      '<p class="small muted" style="margin-top:.6rem">A small drop in speed saves a lot of power: ' + f((1 - n2 / n1) * 100, 0) + ' % less speed gives ' + f((1 - P2 / P1) * 100, 0) + ' % less power (when n2 &lt; n1).</p>';
  };
  bind(host, ['P1', 'n1', 'n2', 'N', 'st'], run); run();
}

const BUILT = [
  {id: 'brayton', title: 'Brayton cycle explorer', desc: 'Move pressure ratio and temperatures and watch work, efficiency and the best pressure ratio change.', fn: brayton, unit: 'u5'},
  {id: 'zones', title: 'Combustion airflow zones', desc: 'See how air splits between the primary, secondary and dilution zones.', fn: zones, unit: 'u5'},
  {id: 'prop', title: 'Propeller law and gearbox', desc: 'Power against speed (cube law) and the reduction ratio from turbine to propeller.', fn: prop, unit: 'u5'}
];

MTM.route('tools', (view, a, b) => {
  /* a may be a built-in tool id, or "ext" followed by an id */
  const ext = MTM.extTools || [];
  if (a === 'ext' && b) {
    const t = ext.find(x => x.id === b);
    if (!t) return MTM.go('tools');
    view.innerHTML = '<div class="row"><a class="btn sm" href="#/tools">&larr; All tools</a><h2 style="margin:0">' + esc(t.title) + '</h2><span class="sp"></span><a class="btn sm" target="_blank" rel="noopener" href="tools/' + esc(t.file) + '">Open full screen</a></div><p class="muted small">' + esc(t.desc) + ' On a phone, use full screen and turn the phone sideways.</p><iframe title="' + esc(t.title) + '" src="tools/' + esc(t.file) + '" style="width:100%;height:78vh;border:1px solid var(--line);border-radius:14px;background:#fff" loading="lazy"></iframe>';
    return;
  }
  const bt = BUILT.find(x => x.id === a);
  if (bt) {
    view.innerHTML = '<div class="row"><a class="btn sm" href="#/tools">&larr; All tools</a></div><h1 style="margin-top:.6rem">' + esc(bt.title) + '</h1><div id="tb"></div>';
    bt.fn($('#tb')); return;
  }
  view.innerHTML = '<h1>Tools</h1><p class="muted">Play with the numbers and diagrams. Nothing here is graded.</p><h2>Calculators</h2><div class="grid auto">' +
    BUILT.map(t => '<a class="card" href="#/tools/' + t.id + '" style="text-decoration:none;color:inherit"><h3>' + esc(t.title) + '</h3><p class="muted small">' + esc(t.desc) + '</p><span class="chip acc">Unit V</span></a>').join('') + '</div>' +
    (ext.length ? '<h2 style="margin-top:1.6rem">Interactive models</h2><div class="grid auto">' + ext.map(t => '<a class="card" href="#/tools/ext/' + esc(t.id) + '" style="text-decoration:none;color:inherit"><h3>' + esc(t.title) + '</h3><p class="muted small">' + esc(t.desc) + '</p><span class="chip acc">Unit ' + esc((MTM.unit(t.unit) || {}).no || '') + '</span></a>').join('') + '</div>' : '');
});
})();
