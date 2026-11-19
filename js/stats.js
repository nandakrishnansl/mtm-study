/* stats.js: anonymous visit counter (GoatCounter). Switched off until a site code is set.
   How to switch it on: make a free site at goatcounter.com, then put its code (the part before
   ".goatcounter.com") between the quotes below. It counts app opens, which section is opened
   (never slide numbers, names or progress) and installs to the home screen.
   Your own devices: open the app once with ?stats=off at the end of the address to stop counting
   them (?stats=on turns it back on). */
(function () {
  var GOATCOUNTER_CODE = '';   // for example 'mtm-study'
  var KEY = 'mtm_nostats';
  var code = String(window.MTM_STATS_CODE || GOATCOUNTER_CODE);
  try {
    var m = /[?&]stats=(on|off)\b/.exec(location.search);
    if (m) { if (m[1] === 'off') localStorage.setItem(KEY, '1'); else localStorage.removeItem(KEY); }
  } catch (e) {}
  var optedOut = false;
  try { optedOut = localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (!/^[a-z0-9-]+$/i.test(code) || optedOut || !/^https?:$/.test(location.protocol)) return;

  window.MTM = window.MTM || {};
  MTM.statsOn = true;                       // lets Settings say that anonymous visits are counted

  function count(path, title, isEvent) {
    try {
      if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: path, title: title || path, event: !!isEvent });
    } catch (e) {}
  }
  var last = '';
  function section() {                      // '#/study/u4/12' -> '/study/u4' (no slide numbers)
    var seg = (location.hash || '').replace(/^#\/?/, '').split('/').filter(Boolean).slice(0, 2);
    return '/' + (seg.join('/') || 'home');
  }
  function view() { var p = section(); if (p !== last) { last = p; count(p); } }

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + code + '.goatcounter.com/count');
  s.setAttribute('data-goatcounter-settings', JSON.stringify({ no_onload: true }));
  s.onload = function () {
    count('app-open', 'App opened', true);
    view();
    window.addEventListener('hashchange', view);
  };
  document.head.appendChild(s);
  window.addEventListener('appinstalled', function () { count('app-installed', 'Installed to home screen', true); });
})();
