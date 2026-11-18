/* Unit IV content, slides 22-44 (DRAFT, teacher to verify).
   Slip, power factor, worked examples 1 and 2, Stanitz and Stodola, eye Mach number, optimum eye diameter, prewhirl,
   losses, performance coefficients, characteristics, surging and choking, stage loading and flow coefficients. */
window.MTM = window.MTM || {c: {}};
MTM.c.u4 = MTM.c.u4 || {sl: {}};
(function () {
  Object.assign(MTM.c.u4.sl, {
    22: {i: 3,
      s: `With a finite number of vanes the gas cannot follow the vane direction exactly, so the real whirl at the tip is smaller than the ideal. The ratio of real to ideal whirl is the slip factor, about 0.9.`,
      d: `<b>Why slip occurs.</b> With a finite number of vanes the gas has inertia and cannot follow the vane exactly. A <b>relative eddy</b>, turning against the impeller, forms in each passage and the exit flow is turned back from the vane direction.<br>The whirl falls from V<sub>w2</sub> to V′<sub>w2</sub> and β′<sub>2</sub> &lt; β<sub>2</sub>. This is <b>slip</b>.<br><b>Slip factor:</b> σ = V′<sub>w2</sub>/V<sub>w2</sub> — (4.14).<br><b>Slip velocity</b> = V<sub>w2</sub> − V′<sub>w2</sub> = (1 − σ)V<sub>w2</sub>. Typically σ ≈ 0.9.<br>Primed quantities are with slip; unprimed are the ideal (no-slip) values.`,
      k: [`Cause: gas inertia + relative eddy in each passage`, `V′_w2 < V_w2 and β′₂ < β₂`, `σ = V′_w2/V_w2 (4.14), typically ≈ 0.9`, `Slip velocity = (1 − σ)V_w2`],
      tv: `<ul><li>With a finite number of vanes the gas has inertia and cannot follow the vane exactly.</li><li>A relative eddy, turning against the impeller, forms in each passage; the exit flow is turned back from the vane direction.</li><li>The whirl falls from V<sub>w2</sub> to V′<sub>w2</sub>, and β′<sub>2</sub> &lt; β<sub>2</sub>: this is <b>slip</b>.</li></ul>
 <div class="eqbox hot"><b>Slip factor</b> &nbsp;σ = V′<sub>w2</sub>/V<sub>w2</sub> &nbsp;— (4.14)</div>
 <div class="eqbox">Slip velocity = V<sub>w2</sub> − V′<sub>w2</sub> = (1 − σ)V<sub>w2</sub>; typically σ ≈ 0.9.</div>
 <p>Exit triangles: without slip (unprimed) and with slip (primed).</p>`,
      t: `"What is slip? How is it generated?" appears in four papers. Give the cause (inertia, relative eddy), the effect (V′_w2 < V_w2, β′₂ < β₂), the definition (4.14) and σ ≈ 0.9.`},

    23: {i: 3,
      s: `On the exit triangle, the no-slip triangle is bigger than the slip triangle. The work with slip is smaller by the factor σ.`,
      d: `Fig. 4.8: (a) backward-curved vanes, (b) radial vanes.<br>(a) <b>β<sub>2</sub> &lt; 90°:</b> ideal triangle ADC, actual triangle ABC. W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> (no slip); u<sub>2</sub>V′<sub>w2</sub>/g<sub>c</sub> (slip).<br>(b) <b>β<sub>2</sub> = 90°:</b> W.D. = u<sub>2</sub>²/g<sub>c</sub> (no slip); σu<sub>2</sub>²/g<sub>c</sub> (slip), since V′<sub>w2</sub> = σu<sub>2</sub>.<br>Slip always lowers the work for the same speed and tip diameter.`,
      k: [`Backward: W.D. = u₂V′_w2/g_c with slip`, `Radial: W.D. = σu₂²/g_c with slip`, `Slip always lowers the work`],
      tv: `<p>Fig. 4.8: (a) backward-curved vanes, (b) radial vanes.</p>
 <table><tr><th></th><th>No slip</th><th>With slip</th></tr>
 <tr><td>(a) β<sub>2</sub> &lt; 90°: ideal ADC, actual ABC</td><td>W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub></td><td>W.D. = u<sub>2</sub>V′<sub>w2</sub>/g<sub>c</sub></td></tr>
 <tr><td>(b) β<sub>2</sub> = 90°</td><td>W.D. = u<sub>2</sub>²/g<sub>c</sub></td><td>W.D. = σu<sub>2</sub>²/g<sub>c</sub></td></tr></table>`},

    24: {i: 3,
      s: `Slip lowers the work by σ; friction on the disc and recirculation raise the input by a power factor φ of about 1.02–1.05. Together they give the master equation used for every pressure-ratio problem.`,
      d: `<b>Power factor φ</b> (&gt; 1, typically 1.02–1.05) allows for braking effects (disc friction, windage, recirculation) which raise the input above the Euler work. Slip reduces the work (σ &lt; 1); φ increases the input.<br><b>W.D. = Δh<sub>0</sub> = σφu<sub>2</sub>²/g<sub>c</sub></b> — (4.18).<br><b>Master equation for the overall pressure ratio</b> p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub>:<br><b>p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>σφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></b> — (4.20).<br>Use it for every problem; put σ = φ = 1 if they are not given. Without σ, φ it reduces to Eq. (4.12). η<sub>c,t-to</sub> = overall total-to-total efficiency (inlet to diffuser exit); p<sub>03</sub> = stagnation pressure at the diffuser exit.`,
      k: [`φ ≈ 1.02–1.05 (disc friction, windage, recirculation)`, `W.D. = Δh₀ = σφu₂²/g_c (4.18)`, `p_R0 = [1 + ησφu₂²/(c_p g_c T₀₁)]^(γ/(γ−1)) (4.20)`, `σ = φ = 1 if not given`],
      tv: `<p>Power factor φ (&gt; 1, typically 1.02–1.05) allows for braking effects (disc friction, windage, recirculation) which raise the input above the Euler work. Slip reduces the work (σ &lt; 1); φ increases the input.</p>
 <div class="eqbox hot">W.D. = Δh<sub>0</sub> = σ φ u<sub>2</sub>²/g<sub>c</sub> &nbsp;— (4.18)</div>
 <div class="eqbox hot"><b>Master equation</b>, overall pressure ratio p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub><br>p<sub>R0</sub> = [ 1 + η<sub>c,t-to</sub> σ φ u<sub>2</sub>²/(c<sub>p</sub> g<sub>c</sub> T<sub>01</sub>) ]<sup>γ/(γ−1)</sup> &nbsp;— (4.20)</div>
 <p>Use this for every pressure-ratio problem; put σ = φ = 1 if they are not given. Without σ, φ it reduces to Eq. (4.12). η<sub>c,t-to</sub> = overall total-to-total efficiency (inlet to diffuser exit); p<sub>03</sub> = stagnation pressure at diffuser exit.</p>`,
      t: `This is the equation to write first in any numerical. Then substitute T₀₁, u₂ = πd₂N/60, σ, φ and η.`},

    25: {i: 3,
      s: `Worked example 1: at 20 000 rpm with a 0.6 m tip diameter the tip speed is 628 m/s. With slip factor 0.8 the work is 315.8 kJ/kg, so the air heats by 314 K.`,
      d: `<b>Given.</b> Air, T<sub>01</sub> = 290 K, N = 20 000 rpm, σ = 0.8, η<sub>c,t-t</sub> = 0.80, d<sub>2</sub> = 0.6 m, V<sub>1</sub> = V<sub>2</sub>. Find (a) the temperature rise, (b) the stage pressure ratio.<br>u<sub>2</sub> = πd<sub>2</sub>N/60 = π × 0.6 × 20 000/60 = <b>628.3 m/s</b>.<br>W.D. = σu<sub>2</sub>²/g<sub>c</sub> = 0.8 × 628.3² = 315.8 kJ/kg (4.15).<br><b>(a)</b> 315 827 = 1005(T<sub>03</sub> − 290) ⇒ T<sub>03</sub> = <b>604.3 K</b>, ΔT<sub>0</sub> = <b>314.3 K</b>.<br>Part (b) continues on the next slide.`,
      k: [`u₂ = πd₂N/60 = 628.3 m/s`, `W.D. = σu₂²/g_c = 315.8 kJ/kg`, `T₀₃ = 604.3 K, ΔT₀ = 314.3 K`],
      tv: `<p>Air at T<sub>01</sub> = 290 K flows through a centrifugal compressor at N = 20 000 rpm, slip factor σ = 0.8, η<sub>c,t-t</sub> = 0.80, d<sub>2</sub> = 0.6 m; V<sub>1</sub> = V<sub>2</sub>. Find (a) the temperature rise and (b) the stage pressure ratio.</p>
 <div class="eqbox">u<sub>2</sub> = πd<sub>2</sub>N/60 = π × 0.6 × 20 000/60 = 628.3 m/s</div>
 <div class="eqbox">W.D. = σu<sub>2</sub>²/g<sub>c</sub> = 0.8 × 628.3² = 315.8 kJ/kg &nbsp;(4.15)</div>
 <p><b>(a) Temperature rise:</b> 315 827 = 1005 (T<sub>03</sub> − 290) ⇒ <b>T<sub>03</sub> = 604.3 K, ΔT<sub>0</sub> = 314.3 K</b></p>`},

    26: {i: 3,
      s: `Worked example 1 continued: the efficiency fixes the isentropic end temperature (541.4 K), and the temperature ratio to the power 3.5 gives a pressure ratio of 8.89.`,
      d: `From (4.10a): 0.8 = (T<sub>03′</sub> − 290)/(604.26 − 290) ⇒ T<sub>03′</sub> = <b>541.4 K</b>.<br><b>(b)</b> p<sub>R0</sub> = (T<sub>03′</sub>/T<sub>01</sub>)<sup>3.5</sup> = (541.4/290)<sup>3.5</sup> = <b>8.89</b>.<br>Check with (4.17): 1 + 0.8 × 0.8 × 628.32²/(1005 × 290) = 1.867; 1.867<sup>3.5</sup> = 8.89 ✓.<br>(The very high ratio comes from the unusually high tip speed of 628 m/s; real single stages are limited to about 4, as the slide on stage limits noted.)`,
      k: [`T₀₃′ = 290 + 0.8 × 314.26 = 541.4 K`, `p_R0 = (541.4/290)^3.5 = 8.89`, `Check: [1 + ησu₂²/(c_p T₀₁)]^3.5 gives the same`],
      tv: `<div class="eqbox">From (4.10a): 0.8 = (T<sub>03′</sub> − 290)/(604.26 − 290) ⇒ T<sub>03′</sub> = 541.4 K</div>
 <p><b>(b) Pressure ratio</b></p>
 <div class="eqbox hot">p<sub>R0</sub> = (T<sub>03′</sub>/T<sub>01</sub>)<sup>3.5</sup> = (541.4/290)<sup>3.5</sup> = 8.89</div>
 <p>Check with (4.17): 1 + 0.8 × 0.8 × 628.32²/(1005 × 290) = 1.867; 1.867<sup>3.5</sup> = 8.89 ✓</p>`,
      t: `Method: u₂ → W.D. → T₀₃ → T₀₃′ from the efficiency → (T₀₃′/T₀₁)^3.5. Show each line; examiners give marks per step.`},

    27: {i: 3,
      s: `Worked example 2 works backwards: from the pressure ratio and efficiency find the actual work, hence the real whirl, and compare it with the tip speed. The gap is the slip.`,
      d: `<b>Given.</b> N = 15 000 rpm, p<sub>R1</sub> = 4 (impeller inlet to outlet), intake 1 atm, 25 °C, axial; radial exit vanes; η<sub>c,t-t</sub> = 0.78; d<sub>2</sub> = 58 cm. Find the slip and the slip factor.<br>T<sub>01</sub> = 298 K, (γ−1)/γ = 0.286.<br>T<sub>02′</sub> = 298 × 4<sup>0.286</sup> = <b>443.0 K</b>.<br>T<sub>02</sub> − T<sub>01</sub> = 145.0/0.78 = <b>185.9 K</b>.<br>u<sub>2</sub> = π × 0.58 × 15 000/60 = <b>455.5 m/s</b>.<br>W.D. = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = 1005 × 185.9 = <b>186.8 kJ/kg</b> = u<sub>2</sub>V′<sub>w2</sub>/g<sub>c</sub>, so V′<sub>w2</sub> = <b>410.1 m/s</b>.<br><b>Slip</b> = 455.5 − 410.1 = <b>45.4 m/s</b>; <b>σ</b> = 410.1/455.5 = <b>0.90</b>.<br>Method: (i) isentropic rise from p<sub>R1</sub>; (ii) actual rise via η<sub>c,t-t</sub>; (iii) V′<sub>w2</sub> from W.D.; (iv) compare with u<sub>2</sub>.`,
      k: [`T₀₂′ = 298 × 4^0.286 = 443.0 K`, `T₀₂ − T₀₁ = 145.0/0.78 = 185.9 K`, `u₂ = 455.5 m/s; W.D. = 186.8 kJ/kg; V′_w2 = 410.1 m/s`, `Slip = 45.4 m/s, σ = 0.90`],
      tv: `<p>A centrifugal compressor runs at 15 000 rpm and gives a stagnation pressure ratio of 4 (impeller inlet to outlet). Intake: 1 atm, 25 °C, axial; radial exit vanes; η<sub>c,t-t</sub> = 0.78; d<sub>2</sub> = 58 cm. Find the slip and the slip factor.</p>
 <div class="eqbox">T<sub>01</sub> = 298 K, &nbsp;(γ−1)/γ = 0.286<br>T<sub>02′</sub> = 298 × 4<sup>0.286</sup> = 443.0 K</div>
 <div class="eqbox">T<sub>02</sub> − T<sub>01</sub> = 145.0/0.78 = 185.9 K, &nbsp;u<sub>2</sub> = π × 0.58 × 15 000/60 = 455.5 m/s</div>
 <div class="eqbox">W.D. = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = 1005 × 185.9 = 186.8 kJ/kg &nbsp;= u<sub>2</sub>V′<sub>w2</sub>/g<sub>c</sub> &nbsp;⇒ &nbsp;V′<sub>w2</sub> = 410.1 m/s</div>
 <div class="eqbox hot"><b>Result:</b> Slip = 455.5 − 410.1 = 45.4 m/s, &nbsp;σ = 410.1/455.5 = 0.90</div>
 <p>Method: (i) isentropic rise from p<sub>R1</sub>; (ii) actual rise via η<sub>c,t-t</sub>; (iii) V′<sub>w2</sub> from W.D.; (iv) compare with u<sub>2</sub>.</p>`},

    28: {i: 2,
      s: `When the slip factor is not given, estimate it from the number of vanes using Stanitz or Stodola. For radial vanes and 19 vanes, σ ≈ 0.896.`,
      d: `<b>Stanitz</b> (45° ≤ β<sub>2</sub> ≤ 90°): σ = 1 − (1.98/n)/(1 − φ<sub>f</sub> cot β<sub>2</sub>). For radial vanes (β<sub>2</sub> = 90°): σ = 1 − 1.98/n.<br><b>Stodola:</b> σ = 1 − (π sin β<sub>2</sub>/n)/(1 − φ<sub>f</sub> cot β<sub>2</sub>). Radial: σ = 1 − π/n.<br>Stanitz values, radial vanes: n = 12 → 0.835; 16 → 0.876; 19 → 0.896; 24 → 0.918.<br>n = number of vanes; β<sub>2</sub> = exit blade angle; φ<sub>f</sub> = V<sub>f2</sub>/u<sub>2</sub> = flow coefficient. More vanes push σ toward 1, but friction and blockage rise: about 0.9 is the usual compromise. Example: n = 19, radial: σ = 1 − 1.98/19 = 0.896.`,
      k: [`Stanitz: σ = 1 − (1.98/n)/(1 − φ_f cot β₂)`, `Stodola: σ = 1 − (π sin β₂/n)/(1 − φ_f cot β₂)`, `Radial: σ = 1 − 1.98/n (Stanitz), 1 − π/n (Stodola)`, `More vanes → σ → 1 but more friction`],
      tv: `<table><tr><th>Stanitz (45° ≤ β<sub>2</sub> ≤ 90°)</th><th>Stodola</th></tr>
 <tr><td>σ = 1 − (1.98/n) / (1 − φ<sub>f</sub> cot β<sub>2</sub>) &nbsp;→ radial: 1 − 1.98/n</td><td>σ = 1 − (π sin β<sub>2</sub>/n) / (1 − φ<sub>f</sub> cot β<sub>2</sub>) &nbsp;→ radial: 1 − π/n</td></tr></table>
 <table><tr><th>Stanitz values, radial vanes: n</th><td>12</td><td>16</td><td>19</td><td>24</td></tr>
 <tr><th>σ</th><td>0.835</td><td>0.876</td><td>0.896</td><td>0.918</td></tr></table>
 <p>n = number of vanes; β<sub>2</sub> = exit blade angle; φ<sub>f</sub> = V<sub>f2</sub>/u<sub>2</sub> = flow coefficient. More vanes ⇒ σ → 1, but friction and blockage rise: about 0.9 is the usual compromise. Used when σ is not given. Example: n = 19, radial: σ = 1 − 1.98/19 = 0.896.</p>`,
      t: `For radial vanes memorise σ = 1 − 1.98/n. Use it only when the question gives n but not σ.`},

    29: {i: 3,
      s: `The relative speed of the gas is highest at the eye tip. If the relative Mach number reaches 1 there, shocks form and the inlet chokes. Keep it below about 0.9.`,
      d: `Fig. 4.4: inlet triangles at (a) the eye root and (b) the eye tip. Same V<sub>f</sub>, larger u at the tip: V<sub>r1</sub> is largest there.<br>The eye tip (d<sub>t</sub> = d<sub>1</sub>) is the critical place: u<sub>1</sub> and V<sub>r1</sub> are highest. If the relative Mach number exceeds unity there are shocks, separation and choking at inlet. Keep it below unity, about 0.9.<br>Remedies: an <b>optimum eye diameter</b> and <b>prewhirl</b> (next slides).<br><b>Relative Mach number at the eye tip:</b> M<sub>r1</sub> = V<sub>r1</sub>/√(γRT<sub>1</sub>), V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>². R: gas constant; T<sub>1</sub>: static inlet temperature, so √(γRT<sub>1</sub>) is the local speed of sound.`,
      k: [`Eye tip: u₁ and V_r1 highest`, `M_r1 > 1 → shock, separation, choking`, `Keep M_r1 < 1 (about 0.9)`, `M_r1 = V_r1/√(γRT₁)`, `Remedies: optimum eye diameter, prewhirl`],
      tv: `<p>Fig. 4.4: inlet triangles at (a) the eye root and (b) the eye tip. Same V<sub>f</sub>, larger u at the tip: V<sub>r1</sub> is largest there.</p>
 <ul><li>The eye tip (d<sub>t</sub> = d<sub>1</sub>) is critical: u<sub>1</sub> and V<sub>r1</sub> are highest there.</li><li>If the relative Mach number exceeds unity: shocks, separation and choking at inlet. Keep it below unity, about 0.9.</li><li>Remedies: an optimum eye diameter and prewhirl (next slides).</li></ul>
 <div class="eqbox hot"><b>Relative Mach number at the eye tip</b><br>M<sub>r1</sub> = V<sub>r1</sub>/√(γRT<sub>1</sub>), &nbsp;V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>²</div>
 <p>R: gas constant; T<sub>1</sub>: static inlet temperature, so √(γRT<sub>1</sub>) is the local speed of sound.</p>`},

    30: {i: 3,
      s: `A small eye makes the axial speed high; a big eye makes the tip speed high. Somewhere between the two, the relative speed at the tip is smallest. That is the optimum eye tip diameter.`,
      d: `Fig. 4.6: V<sub>r1</sub> against d<sub>t</sub>.<br>For flow Q and hub diameter d<sub>h</sub>: V<sub>f1</sub> = 4Q/[π(d<sub>t</sub>² − d<sub>h</sub>²)] and u<sub>1</sub> = πd<sub>t</sub>N/60, so<br><b>V<sub>r1</sub>² = (πd<sub>t</sub>N/60)² + [4Q/(π(d<sub>t</sub>² − d<sub>h</sub>²))]²</b> — (4.13).<br>A small eye raises V<sub>f1</sub>; a large eye raises u<sub>1</sub>. An intermediate d<sub>t</sub> gives the <b>minimum V<sub>r1</sub></b>.<br><b>Minimise:</b> set dV<sub>r1</sub>²/dd<sub>t</sub> = 0:<br>(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60²(4Q/π)²/(πN)² — (4.20a)<br>V<sub>r1,min</sub>² = (πN/60)²(3d<sub>t</sub>² − d<sub>h</sub>²)/2 — (4.20b).<br>Steps: find d<sub>t</sub> from (4.20a), then V<sub>f1</sub>, u<sub>1</sub>, V<sub>r1,min</sub> and the Mach number.`,
      k: [`V_r1² = u₁² + V_f1² = (πd_tN/60)² + [4Q/π(d_t² − d_h²)]² (4.13)`, `Small eye: high V_f1; large eye: high u₁`, `(d_t² − d_h²)³ = 2·60²(4Q/π)²/(πN)² (4.20a)`, `V_r1,min² = (πN/60)²(3d_t² − d_h²)/2 (4.20b)`],
      tv: `<p>Fig. 4.6: V<sub>r1</sub> against d<sub>t</sub>. For flow Q and hub diameter d<sub>h</sub>: V<sub>f1</sub> = 4Q/[π(d<sub>t</sub>² − d<sub>h</sub>²)] and u<sub>1</sub> = πd<sub>t</sub>N/60:</p>
 <div class="eqbox hot">V<sub>r1</sub>² = (πd<sub>t</sub>N/60)² + [ 4Q/(π(d<sub>t</sub>² − d<sub>h</sub>²)) ]² &nbsp;— (4.13)</div>
 <p>A small eye raises V<sub>f1</sub>; a large eye raises u<sub>1</sub>. An intermediate d<sub>t</sub> gives the minimum V<sub>r1</sub> (Fig. 4.6). Setting dV<sub>r1</sub>²/dd<sub>t</sub> = 0:</p>
 <div class="eqbox hot">(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60² (4Q/π)² / (πN)² &nbsp;— (4.20a)</div>
 <div class="eqbox hot">V<sub>r1,min</sub>² = (πN/60)² (3d<sub>t</sub>² − d<sub>h</sub>²)/2 &nbsp;— (4.20b)</div>`,
      t: `The derivation is differentiation of V_r1² with respect to d_t. Show the two terms of (4.13), set the derivative to zero, then simplify to (4.20a) and substitute back to get (4.20b).`},

    31: {i: 3,
      s: `Prewhirl means making the gas swirl in the direction of rotation before it enters the impeller. It lowers the relative speed and Mach number at the tip, at the price of a little less work.`,
      d: `Fig. 4.9: (a) inlet guide vanes, (b), (c) inlet triangles with and without prewhirl.<br><b>Why:</b> V<sub>r1</sub> and M<sub>r1</sub> are highest at the eye tip.<br><b>How:</b> guide vanes give the gas a whirl V′<sub>w1</sub> in the direction of rotation without changing V<sub>f1</sub>: α′<sub>1</sub> &lt; α<sub>1</sub> and V′<sub>r1</sub> &lt; V<sub>r1</sub>. Angle of prewhirl = 90° − α′<sub>1</sub>.<br><b>Trade-off:</b> the work is reduced: W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> (4.20c) → W.D. = (u<sub>2</sub>V<sub>w2</sub> − u′<sub>1</sub>V′<sub>w1</sub>)/g<sub>c</sub> (4.20d). The Mach number stays below critical at the cost of u′<sub>1</sub>V′<sub>w1</sub>/g<sub>c</sub> of work.`,
      k: [`Prewhirl: V′_w1 in direction of rotation, V_f1 unchanged`, `α′₁ < α₁ and V′_r1 < V_r1`, `Angle of prewhirl = 90° − α′₁`, `W.D. = (u₂V_w2 − u′₁V′_w1)/g_c (4.20d)`],
      tv: `<p>Fig. 4.9: (a) inlet guide vanes, (b), (c) inlet triangles with and without prewhirl.</p>
 <p><b>Why:</b> V<sub>r1</sub> and M<sub>r1</sub> are highest at the eye tip.<br><b>How:</b> guide vanes give the gas a whirl V′<sub>w1</sub> in the direction of rotation, without changing V<sub>f1</sub>: α′<sub>1</sub> &lt; α<sub>1</sub> and V′<sub>r1</sub> &lt; V<sub>r1</sub>. Angle of prewhirl = 90° − α′<sub>1</sub>.</p>
 <p><b>Trade-off:</b> work is reduced</p>
 <div class="eqbox">W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub> &nbsp;(4.20c) &nbsp;⟶ &nbsp;<b>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u′<sub>1</sub>V′<sub>w1</sub>)/g<sub>c</sub></b> &nbsp;(4.20d)</div>
 <p>The Mach number stays below critical, at the cost of u′<sub>1</sub>V′<sub>w1</sub>/g<sub>c</sub> of work.</p>`,
      t: `Remember the pair: prewhirl lowers M_r1 (good) but lowers the work (bad). Say both.`},

    32: {i: 3,
      s: `Losses come from shock at the inlet, friction, separation, leaking over the vane tips, disc friction and the diffuser and volute. They keep the efficiency near 80 %.`,
      d: `<table><tr><th>Loss</th><th>Cause</th></tr><tr><td>Incidence / shock</td><td>off-design flow; shock at high M<sub>r1</sub></td></tr><tr><td>Skin friction</td><td>surface drag in long narrow passages</td></tr><tr><td>Diffusion / separation</td><td>boundary layer under adverse pressure gradient</td></tr><tr><td>Tip-clearance leakage</td><td>flow over the vane tips</td></tr><tr><td>Disc friction, windage</td><td>drag on the disc (appears as φ)</td></tr><tr><td>Diffuser, volute</td><td>friction and stall; loss p<sub>02</sub> − p<sub>03</sub></td></tr></table>Losses are due to friction, leakage, shock and turbulence; adiabatic efficiency is usually limited to about 80 %.`,
      k: [`Incidence/shock at off-design or high M_r1`, `Skin friction in narrow passages`, `Separation under adverse pressure gradient`, `Tip leakage, disc friction (φ), diffuser/volute loss`, `η limited to ≈ 80 %`],
      tv: `<table><tr><th>Loss</th><th>Cause</th></tr>
 <tr><td>Incidence / shock</td><td>off-design flow; shock at high M<sub>r1</sub></td></tr>
 <tr><td>Skin friction</td><td>surface drag in long narrow passages</td></tr>
 <tr><td>Diffusion / separation</td><td>boundary layer under adverse pressure gradient</td></tr>
 <tr><td>Tip-clearance leakage</td><td>flow over the vane tips</td></tr>
 <tr><td>Disc friction, windage</td><td>drag on the disc (appears as φ)</td></tr>
 <tr><td>Diffuser, volute</td><td>friction and stall; loss p<sub>02</sub> − p<sub>03</sub></td></tr></table>
 <p>Losses are due to friction, leakage, shock and turbulence; adiabatic efficiency is usually limited to about 80 %.</p>`,
      t: `"Explain the different losses" is a 5-mark question asked in four papers. Name six losses with cause, in the order the gas meets them.`},

    33: {i: 3,
      s: `Four numbers describe the stage: the flow coefficient (how much flow for the speed), two loss coefficients (impeller and diffuser) and the loading coefficient (work per unit tip kinetic energy).`,
      d: `<b>(i) Flow coefficient</b> φ<sub>f</sub> = V<sub>f2</sub>/u<sub>2</sub> at the exit. It sets the shape of the triangle; a large φ<sub>f</sub> is towards choke.<br><b>(ii) Rotor (impeller) loss coefficient</b> ζ<sub>R</sub> = (h<sub>2</sub> − h<sub>2s</sub>)/(V<sub>r2</sub>²/2g<sub>c</sub>).<br><b>(iii) Diffuser loss coefficient</b> ζ<sub>D</sub> = (h<sub>3</sub> − h<sub>3s</sub>)/(V<sub>2</sub>²/2g<sub>c</sub>).<br><b>(iv) Loading coefficient</b> ψ<sub>L</sub> = g<sub>c</sub>Δh<sub>0</sub>/u<sub>2</sub>² = σφ. Work per unit kinetic energy of the tip speed.<br>2s, 3s: isentropic end states at p<sub>2</sub>, p<sub>3</sub>. Smaller ζ<sub>R</sub>, ζ<sub>D</sub> mean higher η<sub>c,t-to</sub>. ψ<sub>L</sub> is the stage loading of Sec. 4.2.1.`,
      k: [`φ_f = V_f2/u₂ (shape of triangle; large → choke)`, `ζ_R = (h₂ − h₂s)/(V_r2²/2g_c)`, `ζ_D = (h₃ − h₃s)/(V₂²/2g_c)`, `ψ_L = g_cΔh₀/u₂² = σφ`],
      tv: `<table><tr><th>(i) Flow coefficient</th><th>(iv) Loading coefficient</th></tr>
 <tr><td>φ<sub>f</sub> = V<sub>f2</sub>/u<sub>2</sub> (at exit). Sets the shape of the triangle; large φ<sub>f</sub> is towards choke.</td><td>ψ<sub>L</sub> = g<sub>c</sub>Δh<sub>0</sub>/u<sub>2</sub>² = σφ. Work per unit kinetic energy of the tip speed.</td></tr>
 <tr><th>(ii) Rotor (impeller) loss</th><th>(iii) Diffuser loss</th></tr>
 <tr><td>ζ<sub>R</sub> = (h<sub>2</sub> − h<sub>2s</sub>)/(V<sub>r2</sub>²/2g<sub>c</sub>)</td><td>ζ<sub>D</sub> = (h<sub>3</sub> − h<sub>3s</sub>)/(V<sub>2</sub>²/2g<sub>c</sub>)</td></tr></table>
 <p>2s, 3s: isentropic end states at p<sub>2</sub>, p<sub>3</sub>; smaller ζ<sub>R</sub>, ζ<sub>D</sub> mean higher η<sub>c,t-to</sub>. ψ<sub>L</sub> is the stage loading of Sec. 4.2.1.</p>`,
      t: `This is exactly the PYQ "explain (i) flow coefficient, (ii) rotor enthalpy loss coefficient, (iii) diffuser enthalpy loss coefficient, (iv) loading coefficient." Give formula and meaning for each.`},

    34: {i: 3,
      s: `The compressor map plots pressure ratio against mass flow for different speeds. Each speed line ends on the left at the surge line and on the right at choke. Work between them, close to peak efficiency.`,
      d: `<b>Characteristic</b> = the plot of pressure ratio (and efficiency) against mass flow for lines of constant speed, in corrected variables: p<sub>03</sub>/p<sub>01</sub> = f(ṁ√T<sub>01</sub>/p<sub>01</sub>, N/√T<sub>01</sub>).<br>Each speed line ends on the left at the <b>surge line</b>; the right-hand end is <b>choke</b>. A single stage reaches about 4; higher speed gives a higher ratio but a narrower range.<br>Centrifugal compressor map: π<sub>c</sub>, η<sub>c</sub> against % reference mass flow. Operate right of the surge line, near peak efficiency.`,
      k: [`p₀₃/p₀₁ = f(ṁ√T₀₁/p₀₁, N/√T₀₁)`, `Left end: surge line; right end: choke`, `Higher speed: higher ratio, narrower range`, `Operate right of surge line, near peak η`],
      tv: `<p>The plot of pressure ratio (and efficiency) against mass flow for lines of constant speed, in corrected variables:</p>
 <div class="eqbox hot">p<sub>03</sub>/p<sub>01</sub> = f( ṁ√T<sub>01</sub>/p<sub>01</sub>, &nbsp;N/√T<sub>01</sub> )</div>
 <ul><li>Each speed line ends on the left at the surge line; the right-hand end is choke.</li><li>A single stage reaches about 4; higher speed gives a higher ratio but a narrower range.</li><li>Centrifugal compressor map: π<sub>c</sub>, η<sub>c</sub> against % reference mass flow.</li><li>Operate right of the surge line, near peak efficiency.</li></ul>`,
      t: `The PYQ asks you to draw the curve. Draw pressure ratio vs corrected flow with 3 speed lines, a dashed surge line on the left, and mark the choke end vertically.`},

    35: {i: 3,
      s: `Surge is a repeating cycle: flow drops, reverses, pressure collapses, the machine recovers and delivers forward again, and the cycle repeats.`,
      d: `Fig. 4.11: <b>Surging = unsteady, periodic and reversed flow.</b> At constant speed: D design point, P peak, S zero-flow point, N maximum-flow end.<br>1. Demand down: pressure rises to the peak P.<br>2. Beyond P, p<sub>03</sub> falls with flow; flow drops to S, zero and possibly reversed.<br>3. The system pressure falls; the machine delivers again but cannot follow S → P quickly enough.<br>4. Flow surges forward, pressure jumps to P; the cycle repeats.`,
      k: [`Surging = unsteady, periodic, reversed flow`, `Peak P → drop to S (zero/reversed flow)`, `System pressure falls, machine recovers, cycle repeats`],
      tv: `<p>Fig. 4.11. <b>Surging = unsteady, periodic and reversed flow.</b> At constant speed: D design point, P peak, S zero-flow point, N maximum-flow end.</p>
 <ol><li>Demand down: pressure rises to the peak P.</li><li>Beyond P, p<sub>03</sub> falls with flow; flow drops to S, zero and possibly reversed.</li><li>The system pressure falls; the machine delivers again but cannot follow S → P quickly enough.</li><li>Flow surges forward, pressure jumps to P; the cycle repeats.</li></ol>`,
      t: `MCQ answer: "surging is unsteady, periodic and reversed flow." Learn the four-step cycle for descriptive answers.`},

    36: {i: 3,
      s: `Surge is a violent flow-reversal at low flow; choke is the flow limit at high flow, where the Mach number hits 1 at the smallest section. The working range lies between the two.`,
      d: `<b>Surging: effects and avoidance.</b> Violent vibration, noise, overheating, damage to blades and bearings. Operate right of the surge line with a margin; use an anti-surge bleed or recirculation valve; variable inlet guide vanes.<br><b>Choking.</b> At high mass flow, the Mach number reaches unity at the smallest section (eye throat or diffuser throat); the speed line then drops almost vertically to N. Keep M<sub>r1</sub> &lt; 1; prewhirl delays choke.<br><b>Stable operating range:</b> surge (stall) line ← working range → choke (low flow, reversed flow ↔ high flow, M = 1).<br>The flow leaving the rotor chokes only when the radial exit velocity V<sub>f2</sub> becomes sonic, even if V<sub>2</sub> is supersonic.`,
      k: [`Surge: vibration, noise, overheating, damage`, `Remedies: margin, anti-surge bleed/recirculation, variable IGV`, `Choke: M = 1 at the smallest section, high flow`, `Prewhirl delays choke`],
      tv: `<table><tr><th>Surging: effects and avoidance</th><th>Choking</th></tr>
 <tr><td>Violent vibration, noise, overheating, damage to blades and bearings. Operate right of the surge line with a margin; anti-surge bleed or recirculation valve; variable inlet guide vanes.</td><td>At high mass flow, Mach number reaches unity at the smallest section (eye throat or diffuser throat); the speed line then drops almost vertically to N. Keep M<sub>r1</sub> &lt; 1; prewhirl delays choke.</td></tr></table>
 <p><b>Stable operating range</b><br>surge (stall) line ← <b>working range</b> → choke &nbsp;(low flow, reversed flow ↔ high flow, M = 1)</p>
 <p>The flow leaving the rotor chokes only when the radial exit velocity V<sub>f2</sub> becomes sonic, even if V<sub>2</sub> is supersonic.</p>`,
      t: `Contrast surge and choke: low flow vs high flow, reversed flow vs M = 1, damaging vs flat characteristic. MCQ: "choking takes place at high mass flow."`},

    37: {i: 3,
      s: `Stage loading is the enthalpy rise divided by the blade kinetic energy u²/g<sub>c</sub>. It is also the change in whirl divided by the blade speed. Axial compressors use about 0.3–0.35.`,
      d: `<b>Stage loading coefficient</b> ψ<sub>L</sub> = g<sub>c</sub>Δh<sub>0</sub>/u² = g<sub>c</sub>W.D./u² = ΔV<sub>w</sub>/u.<br>The ratio of the actual stagnation enthalpy rise of the stage to the kinetic energy u²/g<sub>c</sub> of the blade speed.<br>The <b>pressure coefficient</b> uses u²/2g<sub>c</sub>: φ<sub>p</sub> = Δh<sub>0</sub>/(u²/2g<sub>c</sub>) = 2ψ<sub>L</sub>; with the work-done factor ψ: φ<sub>p</sub> = ψ·ΔV<sub>w</sub>·2/u.<br>Modern aircraft axial compressors: ψ<sub>L</sub> ≈ 0.3–0.35 at the mean radius.<br>Δh<sub>0</sub> = stagnation enthalpy rise of the stage, u = blade speed, ΔV<sub>w</sub> = change of whirl velocity, ψ = work-done factor.`,
      k: [`ψ_L = g_cΔh₀/u² = ΔV_w/u`, `φ_p = 2ψ_L (pressure coefficient)`, `Axial: ψ_L ≈ 0.3–0.35`],
      tv: `<div class="eqbox hot"><b>Stage loading coefficient</b><br>ψ<sub>L</sub> = g<sub>c</sub>Δh<sub>0</sub>/u² = g<sub>c</sub>W.D./u² = ΔV<sub>w</sub>/u</div>
 <ul><li>Ratio of the actual stagnation enthalpy rise of the stage to the kinetic energy u²/g<sub>c</sub> of the blade speed.</li><li>The pressure coefficient uses u²/2g<sub>c</sub>: φ<sub>p</sub> = Δh<sub>0</sub>/(u²/2g<sub>c</sub>) = 2ψ<sub>L</sub>; with the work-done factor ψ: φ<sub>p</sub> = ψ·ΔV<sub>w</sub>·2/u.</li><li>Modern aircraft axial compressors: ψ<sub>L</sub> ≈ 0.3–0.35 at the mean radius.</li></ul>
 <p>Δh<sub>0</sub> = stagnation enthalpy rise of the stage, u = blade speed, ΔV<sub>w</sub> = change of whirl velocity, ψ = work-done factor.</p>`},

    38: {i: 3,
      s: `Divide the work equation by u² to get the loading in terms of the flow coefficient and the air angles: ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>).`,
      d: `Fig. 5.3: stage velocity triangles. Dividing W.D. = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub> (5.18) by u²/g<sub>c</sub>:<br><b>ψ<sub>L</sub> = φ<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>) = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</b>.<br><b>Angle reference.</b> Angles α, β are measured from the <b>tangential</b> direction. Texts that measure them from the axial direction have tan α, tan β where cot α, cot β appear here.`,
      k: [`ψ_L = φ_f(cot α₂ − cot α₁) = φ_f(cot β₁ − cot β₂)`, `Angles from the tangential direction`, `From the axial direction, cot becomes tan`],
      tv: `<p>Fig. 5.3: stage velocity triangles. Dividing W.D. = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub> (5.18) by u²/g<sub>c</sub>:</p>
 <div class="eqbox hot"><b>Loading coefficient and flow coefficient</b><br>ψ<sub>L</sub> = φ<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>) = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</div>
 <p><b>Angle reference.</b> Angles α, β are measured from the tangential direction. Texts that measure them from the axial direction have tan α, tan β where cot α, cot β appear here.</p>`,
      t: `State the angle convention before using cot: angles are from the blade-speed (tangential) direction in this course.`},

    39: {i: 3,
      s: `The flow coefficient is axial speed divided by blade speed. It tells how steeply the air meets the blades, so it is very sensitive to incidence and stalling.`,
      d: `<b>Flow coefficient (compressor velocity ratio)</b> φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>) = 1/(cot α<sub>2</sub> + cot β<sub>2</sub>) — (5.13).<br>• It helps in obtaining large turning angles.<br>• It fixes the angle at which the air meets the blades, so it is very sensitive to incidence and is the natural variable for stalling characteristics.<br>• In compressible flow, φ<sub>f</sub> alone does not fix the operating point: Mach number also matters.`,
      k: [`φ_f = V_f/u = 1/(cot α₁ + cot β₁) = 1/(cot α₂ + cot β₂) (5.13)`, `Sensitive to incidence; natural variable for stall`, `Compressible flow: Mach number also matters`],
      tv: `<div class="eqbox hot"><b>Flow coefficient (compressor velocity ratio)</b><br>φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>) = 1/(cot α<sub>2</sub> + cot β<sub>2</sub>) &nbsp;— (5.13)</div>
 <ul><li>It helps in obtaining large turning angles.</li><li>It fixes the angle at which the air meets the blades, so it is very sensitive to incidence and is the natural variable for stalling characteristics.</li><li>In compressible flow, φ<sub>f</sub> alone does not fix the operating point: Mach number also matters.</li></ul>`},

    40: {i: 2,
      s: `Loading falls in a straight line as the flow coefficient rises: ψ<sub>L</sub> = 1 − Aφ<sub>f</sub>. For a 50 % reaction stage, A = 2 cot β<sub>2</sub>.`,
      d: `Yahya Fig. 7.6 (50 % reaction stage) and Fig. 11.17 (off-design curves).<br>Notation key (Yahya → Venkanna): ψ → ψ<sub>L</sub>, φ → φ<sub>f</sub>, c<sub>x</sub> → V<sub>f</sub>, tan α, tan β → cot α, cot β (angles from axial → from tangential).<br><b>ψ<sub>L</sub> = 1 − Aφ<sub>f</sub>, A = cot β<sub>2</sub> + cot α<sub>1</sub></b>. For 50 % reaction (α<sub>1</sub> = β<sub>2</sub>): <b>ψ<sub>L</sub> = 1 − 2φ<sub>f</sub> cot β<sub>2</sub></b>.<br>Derivation: from (5.13) cot β<sub>1</sub> = 1/φ<sub>f</sub> − cot α<sub>1</sub>, so ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 1 − φ<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>2</sub>).`,
      k: [`ψ_L = 1 − Aφ_f, A = cot β₂ + cot α₁`, `50 %: ψ_L = 1 − 2φ_f cot β₂`, `Straight line falling with φ_f`],
      tv: `<p>Yahya Fig. 7.6: 50 % reaction stage. Yahya Fig. 11.17: off-design curves.</p>
 <p>Notation key (Yahya → Venkanna): ψ → ψ<sub>L</sub>, φ → φ<sub>f</sub>, c<sub>x</sub> → V<sub>f</sub>, tan α, tan β → cot α, cot β (angles from axial → from tangential).</p>
 <div class="eqbox hot">ψ<sub>L</sub> = 1 − A φ<sub>f</sub>, &nbsp;A = cot β<sub>2</sub> + cot α<sub>1</sub></div>
 <div class="eqbox hot">50 % reaction (α<sub>1</sub> = β<sub>2</sub>): &nbsp;ψ<sub>L</sub> = 1 − 2φ<sub>f</sub> cot β<sub>2</sub></div>
 <p>Derivation: from (5.13) cot β<sub>1</sub> = 1/φ<sub>f</sub> − cot α<sub>1</sub>, so ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 1 − φ<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>2</sub>).</p>`},

    41: {i: 3,
      s: `The whole work input appears as a stagnation temperature rise, whatever the efficiency. Put that into the isentropic relation to get the stage pressure ratio.`,
      d: `Fig. 5.4: T–s diagram of an axial stage. The whole work input appears as a stagnation temperature rise, whatever the efficiency:<br><b>ΔT<sub>0</sub> = T<sub>03</sub> − T<sub>01</sub> = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>) = ψ<sub>L</sub>u²/(g<sub>c</sub>c<sub>p</sub>)</b>.<br><b>Stage pressure ratio</b> p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub> = [1 + η<sub>c,t-t</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup> — (5.23).`,
      k: [`ΔT₀ = uV_f(cot β₁ − cot β₂)/(g_c c_p) = ψ_L u²/(g_c c_p)`, `p_R0 = [1 + η ΔT₀/T₀₁]^(γ/(γ−1)) (5.23)`, `All work appears as ΔT₀ regardless of η`],
      tv: `<p>Fig. 5.4: T–s diagram of an axial stage. The whole work input appears as a stagnation temperature rise, whatever the efficiency:</p>
 <div class="eqbox hot">ΔT<sub>0</sub> = T<sub>03</sub> − T<sub>01</sub> = u V<sub>f</sub> (cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub> c<sub>p</sub>) = ψ<sub>L</sub> u²/(g<sub>c</sub> c<sub>p</sub>)</div>
 <div class="eqbox hot"><b>Stage pressure ratio</b><br>p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub> = [ 1 + η<sub>c,t-t</sub> (T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub> ]<sup>γ/(γ−1)</sup> &nbsp;— (5.23)</div>`},

    42: {i: 2,
      s: `The blade Mach number is the blade speed divided by the sonic speed at inlet stagnation conditions. It links the blade's kinetic energy to the state of the gas.`,
      d: `<b>Blade (tangential) Mach number</b> M<sub>b</sub> = u/a<sub>01</sub>, with a<sub>01</sub> = √(γRT<sub>01</sub>g<sub>c</sub>).<br>Using c<sub>p</sub> = γR/(γ−1): <b>u²/(g<sub>c</sub>c<sub>p</sub>T<sub>01</sub>) = (γ−1)M<sub>b</sub>²</b>.<br>It links the blade kinetic energy to the thermodynamic state of the gas. (Course-note material, not in Venkanna.)`,
      k: [`M_b = u/a₀₁, a₀₁ = √(γRT₀₁g_c)`, `u²/(g_c c_p T₀₁) = (γ − 1)M_b²`],
      tv: `<div class="eqbox">Blade (tangential) Mach number &nbsp;M<sub>b</sub> = u/a<sub>01</sub>, &nbsp;a<sub>01</sub> = √(γ R T<sub>01</sub> g<sub>c</sub>)</div>
 <p>Using c<sub>p</sub> = γR/(γ − 1):</p>
 <div class="eqbox hot">u²/(g<sub>c</sub> c<sub>p</sub> T<sub>01</sub>) = (γ − 1) M<sub>b</sub>²</div>
 <p>It links the blade kinetic energy to the thermodynamic state of the gas. <small>(Course notes, Mattingly; not in Venkanna.)</small></p>`},

    43: {i: 2,
      s: `Put the temperature rise in terms of the blade Mach number and loading: a faster blade or a higher loading gives a higher stage pressure ratio.`,
      d: `With ΔT<sub>0</sub> = ψ<sub>L</sub>u²/(g<sub>c</sub>c<sub>p</sub>): ΔT<sub>0</sub>/T<sub>01</sub> = ψ<sub>L</sub>(γ−1)M<sub>b</sub>².<br><b>Stage pressure ratio</b> p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>ψ<sub>L</sub>(γ−1)M<sub>b</sub>²]<sup>γ/(γ−1)</sup>.<br>Higher blade Mach number and higher loading both raise the stage pressure ratio; M<sub>b</sub> is limited by the relative Mach number at the rotor tip.`,
      k: [`ΔT₀/T₀₁ = ψ_L(γ − 1)M_b²`, `p_R0 = [1 + ηψ_L(γ − 1)M_b²]^(γ/(γ−1))`, `M_b limited by tip relative Mach number`],
      tv: `<p>With ΔT<sub>0</sub> = ψ<sub>L</sub>u²/(g<sub>c</sub>c<sub>p</sub>): &nbsp;ΔT<sub>0</sub>/T<sub>01</sub> = ψ<sub>L</sub>(γ − 1)M<sub>b</sub>²</p>
 <div class="eqbox hot"><b>Stage pressure ratio</b><br>p<sub>R0</sub> = [ 1 + η<sub>c,t-t</sub> ψ<sub>L</sub> (γ − 1) M<sub>b</sub>² ]<sup>γ/(γ−1)</sup></div>
 <p>Higher blade Mach number and higher loading both raise the stage pressure ratio; M<sub>b</sub> is limited by the relative Mach number at the rotor tip.</p>`},

    44: {i: 3,
      s: `Stage efficiency is the ideal work divided by the actual work between the same total pressures. Friction and turbulence make the actual work always greater.`,
      d: `Fig. 5.4: ideal and actual states. Ratio of the ideal (isentropic) work to the actual work between the same total pressures:<br><b>Stage (adiabatic) efficiency η<sub>c,t-t</sub> = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) = (p<sub>R0</sub><sup>(γ−1)/γ</sup> − 1)/(T<sub>03</sub>/T<sub>01</sub> − 1)</b>.<br>Because of friction and turbulence, the actual work is always greater than the isentropic work.`,
      k: [`η = isentropic rise ÷ actual rise`, `η = (p_R0^((γ−1)/γ) − 1)/(T₀₃/T₀₁ − 1)`, `Actual work > isentropic work`],
      tv: `<p>Fig. 5.4: ideal and actual states. Ratio of the ideal (isentropic) work to the actual work between the same total pressures:</p>
 <div class="eqbox hot"><b>Stage (adiabatic) efficiency</b><br>η<sub>c,t-t</sub> = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) = ( p<sub>R0</sub><sup>(γ−1)/γ</sup> − 1 ) / ( T<sub>03</sub>/T<sub>01</sub> − 1 )</div>
 <p>Because of friction and turbulence, the actual work is always greater than the isentropic work.</p>`}
  });
})();
