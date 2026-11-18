/* Unit IV content, slides 1-21 (DRAFT, teacher to verify).
   Centrifugal compressor: working principle, velocity triangles, Euler work, pressure ratio, efficiencies.
   i = importance (3 must-know, 2 important, 1 good to know); s = simple; d = detailed; k = key points; t = exam tip; tv = text-view override.
   Equations follow the teacher's Unit IV slides (Venkanna numbering 4.1 ... 4.20, g_c = 1 kg m/(N s^2)). */
window.MTM = window.MTM || {c: {}};
MTM.c.u4 = MTM.c.u4 || {sl: {}};
(function () {
  Object.assign(MTM.c.u4.sl, {
    1: {i: 3,
      s: `A centrifugal compressor is a machine that takes in power and squeezes a gas. The spinning impeller speeds the gas up, and the diffuser and volute turn that speed into pressure. One stage gives a pressure ratio of about 4.`,
      d: `<b>Power-absorbing turbomachine.</b> The impeller adds energy to the gas; the diffuser and volute convert kinetic energy into pressure. The gas enters the eye <b>axially</b> and leaves the impeller <b>radially</b> at high speed.<br><b>Numbers.</b> Stage pressure ratio p<sub>R1</sub> = p<sub>02</sub>/p<sub>01</sub> ≈ 4 (p<sub>01</sub>, p<sub>02</sub>: stagnation pressures at impeller inlet and exit); efficiency about 80 %. The slide quotes 110–250 kPa for one stage and says about 10 bar needs several stages.<br><b>Against the axial type:</b> high pressure ratio per stage, lower mass flow; rugged, short and stable over a wide flow range.<br><b>Marine use:</b> turbochargers of main and auxiliary diesel engines, small gas-turbine sets, blowers.`,
      k: [`Power-absorbing: impeller adds energy to the gas`, `Axial entry, radial exit`, `Stage pressure ratio ≈ 4, efficiency ≈ 80 %`, `High ratio per stage, low flow, rugged, wide range`, `Marine: turbochargers, blowers, small gas turbines`],
      t: `A 2-mark opener: say "power-absorbing, axial in, radial out, pR ≈ 4 per stage" and name turbochargers as the marine use.`},

    2: {i: 2,
      s: `Fig. 4.1 labels the parts: shaft, impeller disc and blades, shroud, eye and inducer, accelerating nozzle, diffuser, volute and casing, with the radii r<sub>h</sub>, r<sub>m</sub>, r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub>.`,
      d: `Fig. 4.1 numbers the main parts: (1) driving shaft; (2) impeller disc or hub; (3) impeller blade; (4) diffuser blade or diffuser; (5) collection chamber or volute; (6) casing; (7) inducer section; (8) radial-blade impeller; (9) shroud; (10) impeller eye; (11) accelerating nozzle; (12) inlet guide vanes (IGV); (13) hub radius r<sub>h</sub>; (14) mean radius r<sub>m</sub>; (15) tip radius of the eye r<sub>t</sub> = r<sub>1</sub>; (16) impeller exit radius r<sub>2</sub>; (17) diffuser exit radius r<sub>3</sub>; (18) outlet from the volute casing.<br>Learn the order of the flow path: IGV → nozzle → eye and inducer → impeller → diffuser → volute → outlet. The radii r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub> match the stations 1, 2, 3 used in the equations.`,
      k: [`Flow path: IGV, nozzle, eye, impeller, diffuser, volute`, `r_h hub, r_m mean, r_t = r₁ eye tip, r₂ impeller exit, r₃ diffuser exit`, `Shroud covers the vanes; inducer is the bent entry section`],
      tv: `<p><b>Fig. 4.1: main components of a centrifugal compressor</b> (slide image). Key:</p>
 <table><tr><td>(1) Driving shaft</td><td>(7) Inducer section</td><td>(13) Hub radius r<sub>h</sub></td></tr>
 <tr><td>(2) Impeller disc or hub</td><td>(8) Radial blade impeller</td><td>(14) Mean radius r<sub>m</sub></td></tr>
 <tr><td>(3) Impeller blade</td><td>(9) Shroud</td><td>(15) Eye tip radius r<sub>t</sub> = r<sub>1</sub></td></tr>
 <tr><td>(4) Diffuser blade or diffuser</td><td>(10) Impeller eye</td><td>(16) Impeller exit radius r<sub>2</sub></td></tr>
 <tr><td>(5) Collection chamber or volute</td><td>(11) Accelerating nozzle</td><td>(17) Diffuser exit radius r<sub>3</sub></td></tr>
 <tr><td>(6) Casing</td><td>(12) Inlet guide vanes (IGV)</td><td>(18) Outlet from the volute casing</td></tr></table>`,
      t: `If asked to "describe a centrifugal compressor with a sketch", draw the half-section of Fig. 4.1 and label at least eight of these parts.`},

    3: {i: 3,
      s: `The gas comes in through the eye, is thrown outward by the spinning vanes (gaining speed and some pressure), slows down in the diffuser (turning speed into pressure) and is collected by the volute.`,
      d: `<b>1. Inlet pipe and eye (inducer):</b> the gas is drawn in axially with absolute velocity V<sub>1</sub>. The vanes are bent at the eye so that the relative flow meets them at the vane angle (<i>shockless entry</i>).<br><b>2. Impeller:</b> disc and vanes spin at 20 000–30 000 rpm. Centrifugal force drives the gas outward from r<sub>1</sub> to r<sub>2</sub>; the vanes add energy that appears mainly as kinetic energy plus a small pressure rise.<br><b>3. Impeller exit:</b> the gas is turned through β<sub>2</sub> and leaves with absolute velocity V<sub>2</sub> at angle α<sub>2</sub>.<br><b>4. Diffuser:</b> the vaneless or vaned ring slows the gas, turning kinetic energy into static pressure. <b>No work</b> is done here.<br><b>5. Casing and volute, outlet pipe:</b> collect the gas from the whole circumference; a little more kinetic energy becomes pressure.<br><b>6. Clearance</b> between vanes and casing is kept very small to limit leakage; modern designs share the rise about equally between impeller and diffuser.`,
      k: [`Eye: axial entry, shockless`, `Impeller: only place where work is added`, `Diffuser: no work, K.E. → pressure`, `Volute collects, small extra rise`, `Small tip clearance limits leakage`],
      t: `Write the six stages in order, naming the work-adding part (impeller) and the work-free parts (diffuser, volute). This is the base of any "explain the working" answer.`},

    4: {i: 3,
      s: `Work is added only in the impeller. After it, the stagnation enthalpy stays constant; the diffuser and volute only slow the gas and raise its static pressure.`,
      d: `Follow the gas from station to station:<br><b>Eye, inlet (1):</b> no work, h<sub>01</sub> = h<sub>1</sub> + V<sub>1</sub>²/2g<sub>c</sub>; axial entry, V<sub>1</sub> = V<sub>f1</sub> and V<sub>w1</sub> = 0; static pressure p<sub>1</sub>, stagnation p<sub>01</sub>.<br><b>Impeller (1→2):</b> work added, W.D. = h<sub>02</sub> − h<sub>01</sub> = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub>; V rises from V<sub>1</sub> to V<sub>2</sub> while the relative velocity falls from V<sub>r1</sub> to V<sub>r2</sub>; p rises p<sub>1</sub> → p<sub>2</sub> and p<sub>0</sub> rises p<sub>01</sub> → p<sub>02</sub> (<b>only here</b>).<br><b>Diffuser (2→3):</b> no work, h<sub>03</sub> = h<sub>02</sub>; V falls V<sub>2</sub> → V<sub>3</sub>; p rises p<sub>2</sub> → p<sub>3</sub>, and p<sub>03</sub> is slightly lower than p<sub>02</sub> (loss).<br><b>Volute (3→4):</b> no work, h<sub>04</sub> = h<sub>03</sub>; V falls further, small further rise of pressure.<br>The blades give energy to the gas in the impeller only. About half leaves as static pressure and half as kinetic energy, which the diffuser and volute recover as pressure.`,
      k: [`Work only in the impeller (1→2)`, `h₀₃ = h₀₂, h₀₄ = h₀₃: no work after the impeller`, `p₀ rises only in the impeller; falls slightly in the diffuser`, `About half static, half kinetic leaves the impeller`],
      tv: `<table><tr><th>Element</th><th>Work and energy</th><th>Velocity</th><th>Pressure</th></tr>
 <tr><td>Eye, inlet (state 1)</td><td>no work; h<sub>01</sub> = h<sub>1</sub> + V<sub>1</sub>²/2g<sub>c</sub></td><td>axial: V<sub>1</sub> = V<sub>f1</sub>, V<sub>w1</sub> = 0</td><td>inlet static p<sub>1</sub>, stagnation p<sub>01</sub></td></tr>
 <tr><td>Impeller (1→2)</td><td><b>work added:</b> W.D. = h<sub>02</sub> − h<sub>01</sub> = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub></td><td>V rises V<sub>1</sub> → V<sub>2</sub>; relative velocity falls V<sub>r1</sub> → V<sub>r2</sub></td><td>p rises p<sub>1</sub> → p<sub>2</sub>; p<sub>0</sub> rises p<sub>01</sub> → p<sub>02</sub> (<b>only here</b>)</td></tr>
 <tr><td>Diffuser (2→3)</td><td>no work: h<sub>03</sub> = h<sub>02</sub></td><td>falls V<sub>2</sub> → V<sub>3</sub></td><td>p rises p<sub>2</sub> → p<sub>3</sub>; p<sub>03</sub> slightly <i>lower</i> than p<sub>02</sub> (loss)</td></tr>
 <tr><td>Volute (3→4)</td><td>no work: h<sub>04</sub> = h<sub>03</sub></td><td>falls further</td><td>small further rise</td></tr></table>
 <p>The blades give energy to the gas in the impeller only: about <b>half</b> leaves as static pressure and half as kinetic energy, which the diffuser and volute recover as pressure.</p>
 <p><small>h: static enthalpy; h<sub>0</sub> = h + V²/2g<sub>c</sub>: stagnation enthalpy; V<sub>f</sub>, V<sub>w</sub>: flow and whirl parts; u<sub>2</sub>: tip speed; W.D.: work per kg.</small></p>`,
      t: `Learn this table. A frequent MCQ is "the diffuser converts kinetic energy into pressure energy"; a frequent descriptive point is "no work after the impeller".`},

    5: {i: 3,
      s: `In the impeller the pressure rises for two reasons: the gas moves to a larger radius (centrifugal effect) and the relative velocity falls in the widening passage. In the diffuser the pressure rises only because the absolute velocity falls.`,
      d: `<b>Impeller (1→2).</b> The static enthalpy, and so the pressure, rises for two reasons:<br>h<sub>2</sub> − h<sub>1</sub> = (u<sub>2</sub>² − u<sub>1</sub>²)/2g<sub>c</sub> + (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub>.<br>The first term is the <b>centrifugal effect</b> of the radius change; the second is the <b>diffusion of the relative velocity</b> V<sub>r</sub> in the widening passage.<br><b>Diffuser (2→3).</b> No work, h<sub>03</sub> = h<sub>02</sub>, so h<sub>3</sub> − h<sub>2</sub> = (V<sub>2</sub>² − V<sub>3</sub>²)/2g<sub>c</sub>: the <b>diffusion of the absolute velocity</b>.<br><b>Stagnation pressure</b> rises only in the impeller; friction in the diffuser lowers it slightly.`,
      k: [`Impeller: centrifugal term + relative-velocity diffusion`, `Diffuser: absolute-velocity diffusion`, `p₀ rises only in the impeller`],
      tv: `<p><b>Impeller (1→2).</b> Static enthalpy, and so pressure, rises for two reasons:</p>
 <div class="eqbox hot">h<sub>2</sub> − h<sub>1</sub> = (u<sub>2</sub>² − u<sub>1</sub>²)/2g<sub>c</sub> + (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub></div>
 <p>the <i>centrifugal</i> effect of the radius change and the <i>diffusion</i> of the relative velocity V<sub>r</sub> in the widening passage.</p>
 <p><b>Diffuser (2→3).</b> No work, h<sub>03</sub> = h<sub>02</sub>, so</p>
 <div class="eqbox hot">h<sub>3</sub> − h<sub>2</sub> = (V<sub>2</sub>² − V<sub>3</sub>²)/2g<sub>c</sub></div>
 <p>the diffusion of the absolute velocity. Stagnation pressure rises <b>only in the impeller</b>; friction in the diffuser lowers it slightly.</p>`,
      t: `For "where does the pressure rise?" give the two-term equation for the impeller and the one-term equation for the diffuser.`},

    6: {i: 2,
      s: `The diffuser slows the fast gas leaving the impeller and turns the speed into pressure. A good one wastes as little stagnation pressure as possible.`,
      d: `Fig. 4.10 shows the diffuser passage. The diffuser reduces V<sub>2</sub> to V<sub>3</sub>, turning kinetic energy into static pressure (p<sub>3</sub> − p<sub>2</sub>). A good diffuser has <b>minimum loss</b> (p<sub>02</sub> − p<sub>03</sub>).<br><b>Vaneless:</b> diffusion in the annular space between d<sub>2</sub> and d<sub>3</sub>; economical and works over a wide range. <b>Vaned:</b> shorter radius but a narrower operating range.<br>For a vaneless diffuser the velocity falls in proportion to the radius ratio, V<sub>3</sub>/V<sub>2</sub> = r<sub>2</sub>/r<sub>3</sub> (Eq. 4.24, listed in the formula summary of slide 74).`,
      k: [`Diffuser: K.E. → static pressure, no work`, `Vaneless: cheap, wide range`, `Vaned: compact, narrow range`, `Good diffuser = small p₀₂ − p₀₃`],
      t: `Compare vaneless and vaned diffusers in two lines: range of flow against size.`},

    7: {i: 3,
      s: `Two triangles describe the gas at the impeller: one at the eye (inlet) and one at the tip (exit). With a finite number of vanes the real exit whirl is smaller than the ideal one: that loss is slip.`,
      d: `Fig. 4.2: <b>exit triangles</b> (a): ACE without slip, BDE with slip; <b>inlet triangle</b> (b).<br><b>Slip in brief.</b> With a finite number of vanes the gas cannot follow the vanes exactly: the exit whirl falls from V<sub>w2</sub> = u<sub>2</sub> (AC) to V′<sub>w2</sub> (BC). The difference AB = V<sub>w2</sub> − V′<sub>w2</sub> is the <b>slip</b>; β′<sub>2</sub> &lt; β<sub>2</sub> and α′<sub>2</sub> &gt; α<sub>2</sub>. The slip factor σ = V′<sub>w2</sub>/V<sub>w2</sub> is treated in Sec. 4.1.4.`,
      k: [`Inlet triangle at the eye, exit triangle at the tip`, `Slip: V′_w2 < V_w2`, `With slip: β′₂ < β₂, α′₂ > α₂`, `σ = V′_w2/V_w2`],
      tv: `<p>Exit triangles (Fig. 4.2a): ACE without slip, BDE with slip. Inlet triangle (Fig. 4.2b).</p>
 <p><b>Slip in brief.</b> With a finite number of vanes the gas cannot follow the vanes exactly: the exit whirl falls from V<sub>w2</sub> = u<sub>2</sub> (AC) to V′<sub>w2</sub> (BC). The difference AB = V<sub>w2</sub> − V′<sub>w2</sub> is the slip; β′<sub>2</sub> &lt; β<sub>2</sub> and α′<sub>2</sub> &gt; α<sub>2</sub>.</p>
 <div class="eqbox hot">Slip factor σ = V′<sub>w2</sub>/V<sub>w2</sub></div>`},

    8: {i: 3,
      s: `At the eye the gas enters straight in, so it has no whirl. The only unknowns are the axial speed V<sub>f1</sub> (flow divided by area) and the blade speed u<sub>1</sub>; together they give the vane inlet angle β<sub>1</sub>.`,
      d: `<b>Inlet triangle (Fig. 4.2b).</b> The gas enters axially: α<sub>1</sub> = 90°, so V<sub>w1</sub> = 0 and V<sub>1</sub> = V<sub>f1</sub>. The relative velocity V<sub>r1</sub> makes angle β<sub>1</sub> with the blade speed u<sub>1</sub>:<br>V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>², tan β<sub>1</sub> = V<sub>f1</sub>/u<sub>1</sub>.<br>V<sub>f1</sub> = Q/A<sub>1</sub> (axial velocity); u<sub>1</sub> = πd<sub>1</sub>N/60 is the blade speed at the eye; β<sub>1</sub> is the vane inlet angle, set equal to the flow angle for shockless entry.`,
      k: [`α₁ = 90°, V_w1 = 0, V₁ = V_f1`, `V_r1² = u₁² + V_f1²`, `tan β₁ = V_f1/u₁`, `V_f1 = Q/A₁, u₁ = πd₁N/60`],
      tv: `<p>The gas enters axially: α<sub>1</sub> = 90°, so</p>
 <div class="eqbox">V<sub>w1</sub> = 0, &nbsp;V<sub>1</sub> = V<sub>f1</sub></div>
 <p>The relative velocity V<sub>r1</sub> makes angle β<sub>1</sub> with the blade speed u<sub>1</sub>:</p>
 <div class="eqbox hot">V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>², &nbsp;tan β<sub>1</sub> = V<sub>f1</sub>/u<sub>1</sub></div>
 <p>V<sub>1</sub>: absolute velocity; V<sub>f1</sub>: flow (axial) component = Q/A<sub>1</sub>; u<sub>1</sub> = πd<sub>1</sub>N/60: blade speed at the eye; β<sub>1</sub>: vane inlet angle, set to the flow angle for shockless entry.</p>`,
      t: `Draw the inlet triangle as a right-angled triangle with u<sub>1</sub> and V<sub>f1</sub> as the two sides and V<sub>r1</sub> as the hypotenuse.`},

    9: {i: 3,
      s: `At the tip, the whirl is the blade speed minus what the flow component cannot fill: V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub>. It works for backward, radial and forward vanes.`,
      d: `<b>Exit triangle (Fig. 4.2a).</b> V<sub>2</sub>: absolute exit velocity at angle α<sub>2</sub>; V<sub>r2</sub>: relative velocity along the vane at angle β<sub>2</sub>; V<sub>w2</sub>, V<sub>f2</sub>: whirl and flow (radial) components of V<sub>2</sub>; u<sub>2</sub> = πd<sub>2</sub>N/60: tip speed.<br><b>Exit whirl, all vane types:</b> V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub>, with V<sub>2</sub>² = V<sub>w2</sub>² + V<sub>f2</sub>². Valid for backward (β<sub>2</sub> &lt; 90°), radial (90°) and forward (&gt; 90°) vanes. Ideal radial exit: u<sub>2</sub> = V<sub>w2</sub> and V<sub>r2</sub> = V<sub>f2</sub>.`,
      k: [`V_w2 = u₂ − V_f2 cot β₂`, `V₂² = V_w2² + V_f2²`, `Valid for backward, radial, forward vanes`, `Radial vane: V_w2 = u₂`],
      tv: `<p>V<sub>2</sub>: absolute exit velocity at angle α<sub>2</sub>; V<sub>r2</sub>: relative velocity along the vane at angle β<sub>2</sub>; V<sub>w2</sub>, V<sub>f2</sub>: whirl and flow (radial) components of V<sub>2</sub>; u<sub>2</sub> = πd<sub>2</sub>N/60: tip speed.</p>
 <div class="eqbox hot"><b>Exit whirl, all vane types</b><br>V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub>, &nbsp;V<sub>2</sub>² = V<sub>w2</sub>² + V<sub>f2</sub>²</div>
 <p>Valid for backward (β<sub>2</sub> &lt; 90°), radial (90°) and forward (&gt; 90°) vanes. Ideal radial exit: u<sub>2</sub> = V<sub>w2</sub>, V<sub>r2</sub> = V<sub>f2</sub>.</p>`,
      t: `Put α₂, β₂ and the three exit sides on the sketch. Radial vanes (β₂ = 90°) are the usual case in numericals.`},

    10: {i: 2,
      s: `Along the eye the flow speed V<sub>f1</sub> is the same at every radius but the blade speed grows from root to tip, so the vane angle changes: the vane is twisted. The tip is where the relative speed is highest.`,
      d: `Fig. 4.2(c): impeller sector with the inlet triangle at the eye root (r<sub>h</sub>), mean (r<sub>m</sub>) and eye tip (r<sub>1</sub>) and the exit radius r<sub>2</sub>.<br>V<sub>f1</sub> is the same at every radius, but u = ωr grows from root to tip, so β<sub>1</sub> falls: the vane must be <b>twisted</b>. At the eye tip u<sub>1</sub> and hence V<sub>r1</sub> are largest: this is where the Mach number first becomes critical (Sec. 4.1.6).`,
      k: [`V_f1 constant over the radius`, `u = ωr grows root to tip → β₁ falls`, `Vane is twisted`, `Tip: largest V_r1, critical Mach number first`],
      t: `Link this slide to Sec. 4.1.6: the eye tip is the critical place for the relative Mach number.`},

    11: {i: 2,
      s: `Fig. 4.7 compares exit triangles of backward, radial and forward vanes at the same tip speed: the more forward the vane, the larger the whirl and the work, but the worse the efficiency.`,
      d: `Fig. 4.7: exit triangles for different β<sub>2</sub> at the same u<sub>2</sub>: (a) backward-curved (β<sub>2</sub> &lt; 90°), (b) radial (β<sub>2</sub> = 90°), (c) forward-curved (β<sub>2</sub> &gt; 90°). With the same flow component V<sub>f2</sub>, the whirl V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub> increases from (a) to (c). The next slide tabulates the comparison.`,
      k: [`Same u₂ and V_f2 for all three`, `V_w2 increases backward → radial → forward`],
      t: `Sketch the three exit triangles side by side on a common base u₂ when you answer a blade-shape question.`},

    12: {i: 3,
      s: `Backward vanes give the least work but the best efficiency and a stable range; forward vanes give the most work but are unstable and inefficient, so they are rarely used. Radial vanes are the usual compromise for high speed.`,
      d: `<b>Comparison of blade shape.</b> (a) <b>Backward:</b> β<sub>2</sub> &lt; 90°, V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub>, minimum work, lowest exit velocity V<sub>2</sub>, best efficiency; used where an efficient, broad, stable range is wanted. (b) <b>Radial:</b> β<sub>2</sub> = 90°, V<sub>w2</sub> = u<sub>2</sub>, work in between, mid V<sub>2</sub>, good efficiency; strong at the tip, used in high-speed machines. (c) <b>Forward:</b> β<sub>2</sub> &gt; 90°, V<sub>w2</sub> = u<sub>2</sub> + V<sub>f2</sub>|cot β<sub>2</sub>|, maximum work, highest V<sub>2</sub> (large diffusion loss), poor efficiency; rarely used because unstable.`,
      k: [`Backward: least work, best efficiency, stable`, `Radial: intermediate, strong, high-speed machines`, `Forward: most work, high V₂, poor efficiency, unstable`],
      tv: `<table><tr><th></th><th>(a) Backward</th><th>(b) Radial</th><th>(c) Forward</th></tr>
 <tr><td>Exit angle</td><td>β<sub>2</sub> &lt; 90°</td><td>β<sub>2</sub> = 90°</td><td>β<sub>2</sub> &gt; 90°</td></tr>
 <tr><td>V<sub>w2</sub></td><td>u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub></td><td>u<sub>2</sub></td><td>u<sub>2</sub> + V<sub>f2</sub>|cot β<sub>2</sub>|</td></tr>
 <tr><td>Work</td><td>minimum</td><td>between</td><td>maximum</td></tr>
 <tr><td>Exit V<sub>2</sub></td><td>lowest</td><td>mid</td><td>highest</td></tr>
 <tr><td>Efficiency</td><td>best</td><td>good</td><td>poor</td></tr>
 <tr><td>Use</td><td>efficient, broad stable range</td><td>strong at the tip; high-speed machines</td><td>rarely used: unstable, large diffusion loss</td></tr></table>`,
      t: `A 3-mark question: tabulate backward, radial and forward in terms of work, V₂ and efficiency.`},

    13: {i: 3,
      s: `Start with Euler's equation for work. With axial entry (no whirl at inlet) and a radial exit (whirl equal to the tip speed), the work is simply the tip speed squared.`,
      d: `<b>Assumptions for ideal energy transfer:</b> axial entry, α<sub>1</sub> = 90°, so V<sub>w1</sub> = 0 and V<sub>1</sub> = V<sub>f1</sub>; no friction loss; adiabatic flow (no heat transfer); the gas leaves with u<sub>2</sub> = V<sub>w2</sub> (radial exit, β<sub>2</sub> = 90°).<br><b>Derivation.</b> The machine absorbs power, so Euler's equation gives the work per kg:<br>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub>)/g<sub>c</sub> = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> J/kg (V<sub>w1</sub> = 0) = u<sub>2</sub>·u<sub>2</sub>/g<sub>c</sub> = u<sub>2</sub>²/g<sub>c</sub> (V<sub>w2</sub> = u<sub>2</sub>).<br>u<sub>1</sub>, u<sub>2</sub>: blade speeds at inlet and exit; V<sub>w1</sub>, V<sub>w2</sub>: whirl velocities; g<sub>c</sub> = 1 kg·m/(N·s²).`,
      k: [`Axial entry: V_w1 = 0`, `Radial exit: V_w2 = u₂`, `W.D. = (u₂V_w2 − u₁V_w1)/g_c`, `W.D. = u₂²/g_c`],
      tv: `<p><b>Assumptions:</b> axial entry, α<sub>1</sub> = 90°, so V<sub>w1</sub> = 0 and V<sub>1</sub> = V<sub>f1</sub>; no friction loss, adiabatic flow; the gas leaves with u<sub>2</sub> = V<sub>w2</sub> (radial exit, β<sub>2</sub> = 90°).</p>
 <p><b>Derivation.</b> The machine absorbs power, so Euler's equation gives the work per kg:</p>
 <div class="eqbox">W.D. = (u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub>)/g<sub>c</sub></div>
 <div class="eqbox">= u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> &nbsp;J/kg &nbsp;(V<sub>w1</sub> = 0)</div>
 <div class="eqbox hot">= u<sub>2</sub>·u<sub>2</sub>/g<sub>c</sub> = u<sub>2</sub>²/g<sub>c</sub> &nbsp;(V<sub>w2</sub> = u<sub>2</sub>)</div>
 <p>u<sub>1</sub>, u<sub>2</sub>: blade speeds at inlet and exit; V<sub>w1</sub>, V<sub>w2</sub>: whirl velocities; g<sub>c</sub> = 1 kg·m/N·s².</p>`,
      t: `Give the three assumptions first, then the three equality steps. Examiners award a mark for each.`},

    14: {i: 3,
      s: `The work per kg is u<sub>2</sub>²/g<sub>c</sub> and the power is the mass flow times that. The work depends only on the tip speed, not on the inlet velocity or the eye size.`,
      d: `<b>Work done and power.</b><br>W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> = V<sub>w2</sub>²/g<sub>c</sub> J/kg — (4.1)<br>P = ρQ V<sub>w2</sub>²/g<sub>c</sub> W — (4.2)<br>ρ = gas density (kg/m³), Q = volume flow rate (m³/s), so ρQ is the mass flow ṁ.<br>The work is <b>independent of the entering velocity V<sub>1</sub></b> and of the eye dimensions; it depends on the speed and the tip diameter d<sub>2</sub> (through u<sub>2</sub>). If speed is limited, more pressure rise needs a larger d<sub>2</sub> or multistaging; multistaging enlarges the frontal area and makes the machine bulky.`,
      k: [`W.D. = u₂V_w2/g_c = V_w2²/g_c (4.1)`, `P = ρQ V_w2²/g_c (4.2)`, `Independent of V₁ and the eye size`, `More pressure: larger d₂ or more stages`],
      tv: `<div class="eqbox hot">W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> = V<sub>w2</sub>²/g<sub>c</sub> &nbsp;J/kg &nbsp;— (4.1)</div>
 <div class="eqbox hot">P = ρ Q V<sub>w2</sub>²/g<sub>c</sub> &nbsp;W &nbsp;— (4.2)</div>
 <p>ρ = gas density (kg/m³), Q = volume flow rate (m³/s).</p>
 <ul><li>The work is independent of the entering velocity V<sub>1</sub> and of the eye dimensions.</li><li>It depends on the speed and the tip diameter d<sub>2</sub> (through u<sub>2</sub>).</li><li>If speed is limited, more pressure rise needs a larger d<sub>2</sub> or multistaging; but multistaging enlarges the frontal area and makes the machine bulky.</li></ul>`,
      t: `Quote Eq. 4.1 and 4.2 and the three bullet points. "Work depends only on u₂" is a favourite viva question.`},

    15: {i: 3,
      s: `The same work equals the rise in stagnation enthalpy of the gas, which for a perfect gas is c<sub>p</sub> times the stagnation-temperature rise. So the temperature rise is u<sub>2</sub>² divided by c<sub>p</sub>.`,
      d: `<b>Adiabatic flow (Q = 0), potential energy neglected:</b> h<sub>01</sub> = h<sub>1</sub> + V<sub>1</sub>²/2g<sub>c</sub>, h<sub>02</sub> = h<sub>2</sub> + V<sub>2</sub>²/2g<sub>c</sub>. The work equals the stagnation enthalpy rise (arrow W<sub>a</sub> in Fig. 3.6):<br><b>W.D. = h<sub>02</sub> − h<sub>01</sub> = Δh<sub>0</sub></b> — (4.3) = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) — (4.5).<br>With (4.1): <b>Δh<sub>0</sub> = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = u<sub>2</sub>²/g<sub>c</sub></b> — (4.6).<br>c<sub>p</sub>: specific heat; T<sub>01</sub>, T<sub>02</sub>: stagnation temperatures at impeller inlet and exit.`,
      k: [`W.D. = h₀₂ − h₀₁ = Δh₀ (4.3)`, `= c_p(T₀₂ − T₀₁) (4.5)`, `Δh₀ = u₂²/g_c (4.6)`, `Adiabatic, potential energy neglected`],
      tv: `<p>Adiabatic flow (Q = 0), potential energy neglected: h<sub>01</sub> = h<sub>1</sub> + V<sub>1</sub>²/2g<sub>c</sub>, h<sub>02</sub> = h<sub>2</sub> + V<sub>2</sub>²/2g<sub>c</sub>. The work equals the stagnation enthalpy rise (arrow W<sub>a</sub>, Fig. 3.6):</p>
 <div class="eqbox">W.D. = h<sub>02</sub> − h<sub>01</sub> = Δh<sub>0</sub> &nbsp;— (4.3)</div>
 <div class="eqbox">= c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) &nbsp;— (4.5)</div>
 <div class="eqbox hot">With (4.1): Δh<sub>0</sub> = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = u<sub>2</sub>²/g<sub>c</sub> &nbsp;— (4.6)</div>
 <p>c<sub>p</sub>: specific heat; T<sub>01</sub>, T<sub>02</sub>: stagnation temperatures at impeller inlet and exit.</p>`,
      t: `Use c_p = 1005 J/(kg·K) for air in numericals unless the question gives another value.`},

    16: {i: 3,
      s: `The ideal compression from p<sub>01</sub> to the same p<sub>02</sub> is isentropic and needs less work. The total-to-total efficiency is the ideal temperature rise divided by the actual one.`,
      d: `<b>Efficiency.</b> Ideal compression from p<sub>01</sub> to the same p<sub>02</sub> is isentropic and ends at state 02′ (Fig. 3.6, W<sub>isen</sub> &lt; W<sub>a</sub>). The total-to-total efficiency of the impeller:<br><b>η<sub>c,t-t</sub> = (h<sub>02′</sub> − h<sub>01</sub>)/(h<sub>02</sub> − h<sub>01</sub>) = (T<sub>02′</sub> − T<sub>01</sub>)/(T<sub>02</sub> − T<sub>01</sub>)</b> — (4.4).<br>Using (4.6): T<sub>02</sub> − T<sub>01</sub> = (T<sub>02′</sub> − T<sub>01</sub>)/η<sub>c,t-t</sub> — (4.7), and so<br><b>T<sub>02′</sub> − T<sub>01</sub> = η<sub>c,t-t</sub> u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>)</b> — (4.8).<br>02′ is the isentropic end state at p<sub>02</sub>.`,
      k: [`η = ideal rise ÷ actual rise`, `η_c,t-t = (T₀₂′ − T₀₁)/(T₀₂ − T₀₁) (4.4)`, `T₀₂′ − T₀₁ = η u₂²/(c_p g_c) (4.8)`],
      tv: `<p>Ideal compression from p<sub>01</sub> to the same p<sub>02</sub> is isentropic and ends at 02′. The total-to-total efficiency of the impeller:</p>
 <div class="eqbox hot">η<sub>c,t-t</sub> = (h<sub>02′</sub> − h<sub>01</sub>)/(h<sub>02</sub> − h<sub>01</sub>) = (T<sub>02′</sub> − T<sub>01</sub>)/(T<sub>02</sub> − T<sub>01</sub>) &nbsp;— (4.4)</div>
 <p>Using (4.6):</p>
 <div class="eqbox">T<sub>02</sub> − T<sub>01</sub> = (T<sub>02′</sub> − T<sub>01</sub>)/η<sub>c,t-t</sub> &nbsp;— (4.7)</div>
 <div class="eqbox hot">T<sub>02′</sub> − T<sub>01</sub> = η<sub>c,t-t</sub> u<sub>2</sub>²/(c<sub>p</sub> g<sub>c</sub>) &nbsp;— (4.8)</div>
 <p>η<sub>c,t-t</sub> = total-to-total efficiency of the impeller; 02′ = isentropic end state at p<sub>02</sub>.</p>`,
      t: `Remember "t-t" means stagnation (total) to stagnation (total). Do not mix it with the static-to-static efficiency of slide 21.`},

    17: {i: 3,
      s: `Along the isentropic line the pressure ratio follows from the temperature ratio. Putting in the ideal temperature rise from the last slide gives the stage pressure ratio in terms of the tip speed.`,
      d: `Along the isentropic line 01 → 02′ (Fig. 4.3), for a perfect gas: T<sub>02′</sub>/T<sub>01</sub> = (p<sub>02</sub>/p<sub>01</sub>)<sup>(γ−1)/γ</sup>, so p<sub>02</sub>/p<sub>01</sub> = [(T<sub>02′</sub> − T<sub>01</sub>)/T<sub>01</sub> + 1]<sup>γ/(γ−1)</sup>. Substituting (4.8):<br><b>p<sub>R1</sub> = p<sub>02</sub>/p<sub>01</sub> = [1 + η<sub>c,t-t</sub>u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></b> — (4.9).<br>γ = c<sub>p</sub>/c<sub>v</sub> = ratio of specific heats; p<sub>01</sub>, p<sub>02</sub> = stagnation pressures at impeller inlet and exit. For air γ/(γ−1) = 3.5.`,
      k: [`T₀₂′/T₀₁ = (p₀₂/p₀₁)^((γ−1)/γ)`, `p_R1 = [1 + η u₂²/(c_p g_c T₀₁)]^(γ/(γ−1)) (4.9)`, `Exponent = 3.5 for air`],
      tv: `<p>Along the isentropic line 01 → 02′ (Fig. 4.3), for a perfect gas:</p>
 <div class="eqbox">T<sub>02′</sub>/T<sub>01</sub> = (p<sub>02</sub>/p<sub>01</sub>)<sup>(γ−1)/γ</sup> &nbsp;⟹ &nbsp;p<sub>02</sub>/p<sub>01</sub> = [(T<sub>02′</sub> − T<sub>01</sub>)/T<sub>01</sub> + 1]<sup>γ/(γ−1)</sup></div>
 <p>Substituting (4.8):</p>
 <div class="eqbox hot"><b>Stagnation pressure ratio of the impeller</b><br>p<sub>R1</sub> = p<sub>02</sub>/p<sub>01</sub> = [ 1 + η<sub>c,t-t</sub> u<sub>2</sub>²/(c<sub>p</sub> g<sub>c</sub> T<sub>01</sub>) ]<sup>γ/(γ−1)</sup> &nbsp;— (4.9)</div>
 <p>γ = c<sub>p</sub>/c<sub>v</sub> = ratio of specific heats; p<sub>01</sub>, p<sub>02</sub> = stagnation pressures at impeller inlet and exit.</p>`,
      t: `A very common 5-mark derivation: "Derive the pressure ratio of a centrifugal compressor stage in terms of tip speed." Follow slides 13 to 17 in order.`},

    18: {i: 2,
      s: `If the inlet and exit velocities are equal the static pressure ratio has the same form. The pressure ratio rises with the square of the tip speed and is limited to about 4 per stage.`,
      d: `If V<sub>1</sub> = V<sub>2</sub>, the static pressure ratio p<sub>R</sub> = p<sub>2</sub>/p<sub>1</sub> has the same form: <b>p<sub>R</sub> = p<sub>2</sub>/p<sub>1</sub> = [1 + η<sub>c,t-t</sub>u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>1</sub>)]<sup>γ/(γ−1)</sup></b> — (4.10), with T<sub>1</sub> the static temperature at impeller inlet.<br>p<sub>R1</sub> (stagnation) and p<sub>R</sub> (static) both rise with the <b>square of the tip speed</b> u<sub>2</sub>. In practice p<sub>R1</sub> is limited to about 4 per stage. Losses (friction, leakage, shock, turbulence) limit the adiabatic efficiency to about 80 %; the mechanical efficiency is taken as 1 if not given.`,
      k: [`p_R = [1 + η u₂²/(c_p g_c T₁)]^(γ/(γ−1)) (4.10), if V₁ = V₂`, `Both ratios ∝ u₂²`, `Limit ≈ 4 per stage`, `η ≈ 80 %; η_mech = 1 if not given`],
      tv: `<p>If the inlet and exit velocities are equal, V<sub>1</sub> = V<sub>2</sub>, the static pressure ratio p<sub>R</sub> = p<sub>2</sub>/p<sub>1</sub> has the same form:</p>
 <div class="eqbox hot">p<sub>R</sub> = p<sub>2</sub>/p<sub>1</sub> = [ 1 + η<sub>c,t-t</sub> u<sub>2</sub>²/(c<sub>p</sub> g<sub>c</sub> T<sub>1</sub>) ]<sup>γ/(γ−1)</sup> &nbsp;— (4.10)</div>
 <ul><li>p<sub>R1</sub> (stagnation) and p<sub>R</sub> (static) both rise with the square of the tip speed u<sub>2</sub>.</li><li>In practice p<sub>R1</sub> is limited to about 4 per stage.</li><li>Losses (friction, leakage, shock, turbulence) limit the adiabatic efficiency to about 80 %; the mechanical efficiency is taken as 1 if not given.</li></ul>
 <p>T<sub>1</sub> = static temperature at impeller inlet; other symbols as on the previous slide.</p>`},

    19: {i: 3,
      s: `The h–s diagram follows the gas through the nozzle, impeller, diffuser and volute. The stagnation enthalpy stays constant after the impeller; the stagnation pressure falls slightly in the diffuser because of loss.`,
      d: `Fig. 4.3: h–s (or T–s) diagram for a centrifugal compressor.<br>0 → 1: flow in the accelerating nozzle; 1 → 2: impeller; 2 → 3: diffuser; 3 → 4: volute.<br>h<sub>0i</sub> = h<sub>i</sub> + V<sub>i</sub>²/2g<sub>c</sub>; no work after the impeller, so h<sub>02</sub> = h<sub>03</sub> = h<sub>04</sub>.<br>Static pressure rises partly in the impeller (p<sub>1</sub> → p<sub>2</sub>) and partly in the diffuser (p<sub>2</sub> → p<sub>3</sub>). The stagnation pressure rise is entirely due to the impeller, reduced by the diffuser loss: p<sub>03</sub> &lt; p<sub>02</sub>.<br>02′, 03′, 03″ are the isentropic end states used in the efficiencies. V<sub>1</sub>: velocity at impeller inlet; V<sub>2</sub>: impeller exit and diffuser inlet; V<sub>3</sub>: diffuser exit.`,
      k: [`0→1 nozzle, 1→2 impeller, 2→3 diffuser, 3→4 volute`, `h₀₂ = h₀₃ = h₀₄`, `p₀ rise is due to the impeller; p₀₃ < p₀₂`, `Primed states = isentropic ends`],
      t: `Practice drawing this diagram: vertical lines for isentropic compression, a line leaning right for the actual process, and the V²/2g_c gap between static and stagnation points.`},

    20: {i: 3,
      s: `The overall pressure ratio runs from the impeller inlet to the diffuser exit (p<sub>03</sub>/p<sub>01</sub>). The overall total-to-total efficiency compares the actual rise with the isentropic rise between the same total pressures.`,
      d: `Overall, impeller inlet → diffuser exit: p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub>.<br><b>Overall total-to-total efficiency:</b> η<sub>c,t-to</sub> = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) — (4.10a). T<sub>03′</sub>: isentropic end state at p<sub>03</sub> (h<sub>03′</sub> likewise); T<sub>03</sub>: actual stagnation temperature at diffuser exit.<br><b>Pressure ratio:</b> p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup> — (4.11).`,
      k: [`p_R0 = p₀₃/p₀₁ (overall)`, `η_c,t-to = (T₀₃′ − T₀₁)/(T₀₃ − T₀₁) (4.10a)`, `p_R0 = [1 + η(T₀₃ − T₀₁)/T₀₁]^(γ/(γ−1)) (4.11)`],
      tv: `<p>Impeller inlet → diffuser exit: p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub>.</p>
 <div class="eqbox hot"><b>Overall total-to-total efficiency</b><br>η<sub>c,t-to</sub> = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) &nbsp;— (4.10a)</div>
 <p>T<sub>03′</sub>: isentropic end state at p<sub>03</sub> (h<sub>03′</sub> likewise); T<sub>03</sub>: actual stagnation temperature at diffuser exit.</p>
 <div class="eqbox hot">p<sub>R0</sub> = [ 1 + η<sub>c,t-to</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub> ]<sup>γ/(γ−1)</sup> &nbsp;— (4.11)</div>`},

    21: {i: 3,
      s: `Because there is no work in the diffuser, T<sub>03</sub> − T<sub>01</sub> is still u<sub>2</sub>²/(g<sub>c</sub>c<sub>p</sub>), so the overall pressure ratio can be written from the tip speed. When V<sub>3</sub> = V<sub>1</sub> the static-to-static efficiency can be used.`,
      d: `No work in the diffuser, so h<sub>03</sub> − h<sub>01</sub> = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>) = u<sub>2</sub>²/g<sub>c</sub>. Therefore<br><b>p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>u<sub>2</sub>²/(g<sub>c</sub>c<sub>p</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></b> — (4.12).<br>Eq. (4.9) is for impeller inlet to impeller exit; Eq. (4.12) is for impeller inlet to diffuser exit.<br>When the diffuser is designed so that V<sub>3</sub> = V<sub>1</sub>, the <b>static-to-static efficiency</b> is η<sub>c,s-s</sub> = (h<sub>3′</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = (T<sub>3′</sub> − T<sub>1</sub>)/(T<sub>3</sub> − T<sub>1</sub>) — (4.12b). η<sub>c,t-to</sub> compares the actual rise with the isentropic rise between the same total pressures.`,
      k: [`h₀₃ − h₀₁ = c_p(T₀₃ − T₀₁) = u₂²/g_c`, `p_R0 = [1 + η u₂²/(g_c c_p T₀₁)]^(γ/(γ−1)) (4.12)`, `4.9: inlet to impeller exit; 4.12: inlet to diffuser exit`, `η_c,s-s used when V₃ = V₁ (4.12b)`],
      tv: `<p>No work in the diffuser, so h<sub>03</sub> − h<sub>01</sub> = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>) = u<sub>2</sub>²/g<sub>c</sub>:</p>
 <div class="eqbox hot"><b>Overall pressure ratio from tip speed</b><br>p<sub>R0</sub> = [ 1 + η<sub>c,t-to</sub> u<sub>2</sub>²/(g<sub>c</sub> c<sub>p</sub> T<sub>01</sub>) ]<sup>γ/(γ−1)</sup> &nbsp;— (4.12)</div>
 <p>Eq. (4.9): impeller inlet to impeller exit. Eq. (4.12): impeller inlet to diffuser exit. When the diffuser is designed so that V<sub>3</sub> = V<sub>1</sub>:</p>
 <div class="eqbox"><b>Static-to-static efficiency</b><br>η<sub>c,s-s</sub> = (h<sub>3′</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = (T<sub>3′</sub> − T<sub>1</sub>)/(T<sub>3</sub> − T<sub>1</sub>) &nbsp;— (4.12b)</div>
 <p>η<sub>c,t-to</sub> compares the actual rise with the isentropic rise between the same total pressures.</p>`,
      t: `In a numerical, state which efficiency is given (t-t, t-to or s-s) and which pressure ratio you are using. Mixing them is the commonest error.`}
  });
})();
