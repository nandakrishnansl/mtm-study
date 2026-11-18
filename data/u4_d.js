/* Unit IV content, slides 69-79 (DRAFT, teacher to verify).
   Axial versus centrifugal, worked example 5.1 (three-stage axial compressor), formula summaries, PYQ and practice lists. */
window.MTM = window.MTM || {c: {}};
MTM.c.u4 = MTM.c.u4 || {sl: {}};
(function () {
  Object.assign(MTM.c.u4.sl, {
    69: {i: 3,
      s: `Centrifugal: high pressure ratio per stage, lower flow, lower efficiency, hard to stage. Axial: low ratio per stage, higher flow, higher efficiency, easy to stage to very high overall ratios.`,
      d: `<table><tr><th>Feature</th><th>Centrifugal</th><th>Axial</th></tr><tr><td>Flow direction</td><td>axial in, radial out</td><td>axial throughout</td></tr><tr><td>Mass flow</td><td>lower</td><td>higher</td></tr><tr><td>Pressure ratio per stage</td><td>high (≈ 4)</td><td>low (≈ 1.2)</td></tr><tr><td>Efficiency</td><td>lower (≈ 80 %)</td><td>higher</td></tr><tr><td>Multistaging</td><td>difficult, usually ≤ 2 stages</td><td>easy, overall 20:1 or more</td></tr></table>`,
      k: [`Centrifugal: axial in, radial out; axial: axial throughout`, `Mass flow: axial higher`, `Ratio per stage: ≈ 4 vs ≈ 1.2`, `Efficiency: ≈ 80 % vs higher`, `Staging: ≤ 2 vs overall 20:1 or more`],
      tv: `<table><tr><th>Feature</th><th>Centrifugal</th><th>Axial</th></tr>
 <tr><td>Flow direction</td><td>axial in, radial out</td><td>axial throughout</td></tr>
 <tr><td>Mass flow</td><td>lower</td><td>higher</td></tr>
 <tr><td>Pressure ratio per stage</td><td>high (≈ 4)</td><td>low (≈ 1.2)</td></tr>
 <tr><td>Efficiency</td><td>lower (≈ 80 %)</td><td>higher</td></tr>
 <tr><td>Multistaging</td><td>difficult, usually ≤ 2 stages</td><td>easy, overall 20:1 or more</td></tr></table>`,
      t: `Answer a 3-mark "differences" question by choosing six rows from slides 69 and 70. Mass flow is an MCQ: axial is higher.`},

    70: {i: 3,
      s: `Axial machines are slim and efficient but delicate and have a narrow operating range. Centrifugal machines are rugged and flexible but wide. Use follows: turbochargers vs jet engines and large gas turbines.`,
      d: `<table><tr><th>Feature</th><th>Centrifugal</th><th>Axial</th></tr><tr><td>Frontal area</td><td>large</td><td>small (low drag)</td></tr><tr><td>Operating range</td><td>wide, flatter curves</td><td>narrow, steep curves</td></tr><tr><td>Starting torque</td><td>lower</td><td>higher</td></tr><tr><td>Damage tolerance</td><td>rugged (FOD tolerant)</td><td>delicate aerofoils, FOD prone</td></tr><tr><td>Use</td><td>turbochargers, small engines</td><td>jet engines, large gas turbines</td></tr></table>FOD = foreign object damage.`,
      k: [`Frontal area: large vs small`, `Range: wide/flat vs narrow/steep`, `Starting torque: lower vs higher`, `Rugged vs delicate (FOD)`, `Use: turbochargers vs jet engines, large gas turbines`],
      tv: `<table><tr><th>Feature</th><th>Centrifugal</th><th>Axial</th></tr>
 <tr><td>Frontal area</td><td>large</td><td>small (low drag)</td></tr>
 <tr><td>Operating range</td><td>wide, flatter curves</td><td>narrow, steep curves</td></tr>
 <tr><td>Starting torque</td><td>lower</td><td>higher</td></tr>
 <tr><td>Damage tolerance</td><td>rugged (FOD tolerant)</td><td>delicate aerofoils, FOD prone</td></tr>
 <tr><td>Use</td><td>turbochargers, small engines</td><td>jet engines, large gas turbines</td></tr></table>
 <p>FOD = foreign object damage.</p>`},

    71: {i: 3,
      s: `Worked example: a three-stage axial compressor with 25 kJ/kg input per stage. Each stage heats the air by 24.88 K, so the exit temperature is 374.6 K.`,
      d: `<b>Example 5.1.</b> Air enters a three-stage axial compressor at 1 bar and 300 K. The energy input is 25 kJ/kg per stage and the stage efficiency is 0.86. Find (a) the exit temperature, (b) the compressor efficiency, (c) the pressure ratio.<br><b>Per stage:</b> W.D. = c<sub>p</sub>ΔT ⇒ ΔT = 25/1.005 = <b>24.88 K</b>, so <b>T<sub>4</sub> = 300 + 3 × 24.88 = 374.6 K</b>.`,
      k: [`ΔT per stage = 25/1.005 = 24.88 K`, `T₄ = 300 + 3 × 24.88 = 374.6 K`, `Part (a) answered`],
      tv: `<p>Air enters a three-stage axial compressor at 1 bar and 300 K. The energy input is 25 kJ/kg per stage and the stage efficiency is 0.86. Find (a) the exit temperature, (b) the compressor efficiency, (c) the pressure ratio.</p>
 <div class="eqbox hot">Per stage: W.D. = c<sub>p</sub>ΔT ⇒ ΔT = 25/1.005 = 24.88 K, &nbsp;so &nbsp;T<sub>4</sub> = 300 + 3 × 24.88 = 374.6 K</div>`},

    72: {i: 3,
      s: `Each stage's ideal temperature rise is 0.86 times the actual, 21.4 K. The pressure ratio of each stage depends on its own inlet temperature; multiply the three to get 1.96, and the compressor efficiency is 85 %.`,
      d: `Each stage: ΔT<sub>ideal</sub> = 0.86 × 24.88 = <b>21.4 K</b>; p<sub>R</sub> = (1 + 21.4/T<sub>in</sub>)<sup>3.5</sup>.<br><table><tr><th>Stage</th><th>T<sub>in</sub> (K)</th><th>p<sub>R</sub></th></tr><tr><td>1</td><td>300.0</td><td>1.273</td></tr><tr><td>2</td><td>324.9</td><td>1.250</td></tr><tr><td>3</td><td>349.8</td><td>1.231</td></tr></table><b>Results:</b> p<sub>R0</sub> = 1.273 × 1.250 × 1.231 ≈ <b>1.96</b>; T<sub>4′</sub> = 300 × 1.96<sup>0.2857</sup> = <b>363.5 K</b>; η<sub>C</sub> = (363.5 − 300)/(374.6 − 300) = <b>85 %</b>.<br>The compressor (overall) efficiency is a little less than the stage efficiency because the heating of one stage raises the inlet temperature of the next (the reheat effect).`,
      k: [`ΔT_ideal = 0.86 × 24.88 = 21.4 K per stage`, `p_R = (1 + 21.4/T_in)^3.5: 1.273, 1.250, 1.231`, `p_R0 ≈ 1.96; T₄′ = 363.5 K`, `η_C = 63.5/74.6 = 85 %`],
      tv: `<div class="eqbox">Each stage: ΔT<sub>ideal</sub> = 0.86 × 24.88 = 21.4 K; &nbsp;p<sub>R</sub> = (1 + 21.4/T<sub>in</sub>)<sup>3.5</sup></div>
 <table><tr><th>Stage</th><th>T<sub>in</sub> (K)</th><th>p<sub>R</sub></th></tr><tr><td>1</td><td>300.0</td><td>1.273</td></tr><tr><td>2</td><td>324.9</td><td>1.250</td></tr><tr><td>3</td><td>349.8</td><td>1.231</td></tr></table>
 <div class="eqbox hot"><b>Results</b><br>p<sub>R0</sub> = 1.273 × 1.250 × 1.231 ≈ 1.96; &nbsp;T<sub>4′</sub> = 300 × 1.96<sup>0.2857</sup> = 363.5 K;<br>η<sub>C</sub> = (363.5 − 300)/(374.6 − 300) = 85 %</div>
 <p>The compressor efficiency is a little below the stage efficiency because the heating in each stage raises the inlet temperature of the next (reheat effect).</p>`,
      t: `In a multistage numerical, treat each stage separately: its own T_in gives its own p_R. Do not use 300 K for every stage.`},

    73: {i: 3,
      s: `One-table summary of the axial stage: link between triangles, whirl change, work, temperature rise, pressure ratio, efficiency, pressure coefficient and degree of reaction.`,
      d: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr><tr><td>Triangle link</td><td>u/V<sub>f</sub> = 1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub></td><td>5.13</td></tr><tr><td>Change of whirl</td><td>ΔV<sub>w</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = V<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>)</td><td>5.16</td></tr><tr><td>Work done</td><td>W.D. = ψuV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.25b</td></tr><tr><td>Temperature rise</td><td>T<sub>03</sub> − T<sub>01</sub> = ψuV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>)</td><td>5.25c</td></tr><tr><td>Stage pressure ratio</td><td>p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup></td><td>5.23</td></tr><tr><td>Efficiency</td><td>η<sub>c,t-t</sub> = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>)</td><td>5.23</td></tr><tr><td>Pressure coefficient</td><td>φ<sub>p</sub> = 2g<sub>c</sub>Δh<sub>0</sub>/u² = 2ψΔV<sub>w</sub>/u</td><td>5.9</td></tr><tr><td>Degree of reaction</td><td>R = (h<sub>2</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</td><td>5.26–5.28</td></tr><tr><td>50 % reaction</td><td>α<sub>1</sub> = β<sub>2</sub>, α<sub>2</sub> = β<sub>1</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub></td><td>5.29, 5.30</td></tr></table>`,
      k: [`Triangle link (5.13), whirl change (5.16)`, `Work with ψ (5.25b), ΔT₀ (5.25c)`, `p_R0 (5.23), η_c,t-t`, `φ_p (5.9), R (5.26–5.28), 50 % (5.29, 5.30)`],
      tv: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr>
 <tr><td>Triangle link</td><td>u/V<sub>f</sub> = 1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub></td><td>5.13</td></tr>
 <tr><td>Change of whirl</td><td>ΔV<sub>w</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = V<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>)</td><td>5.16</td></tr>
 <tr><td>Work done</td><td>W.D. = ψ u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.25b</td></tr>
 <tr><td>Temperature rise</td><td>T<sub>03</sub> − T<sub>01</sub> = ψ u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>)</td><td>5.25c</td></tr>
 <tr><td>Stage pressure ratio</td><td>p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup></td><td>5.23</td></tr>
 <tr><td>Efficiency</td><td>η<sub>c,t-t</sub> = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>)</td><td>5.23</td></tr>
 <tr><td>Pressure coefficient</td><td>φ<sub>p</sub> = 2g<sub>c</sub>Δh<sub>0</sub>/u² = 2ψΔV<sub>w</sub>/u</td><td>5.9</td></tr>
 <tr><td>Degree of reaction</td><td>R = (h<sub>2</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</td><td>5.26–5.28</td></tr>
 <tr><td>50 % reaction</td><td>α<sub>1</sub> = β<sub>2</sub>, α<sub>2</sub> = β<sub>1</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub></td><td>5.29, 5.30</td></tr></table>`},

    74: {i: 3,
      s: `One-table summary of the centrifugal compressor: work, efficiency, slip factor, overall pressure ratio, the eye, prewhirl and the vaneless diffuser.`,
      d: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr><tr><td>Work, ideal radial exit</td><td>W.D. = u<sub>2</sub>²/g<sub>c</sub></td><td>4.1</td></tr><tr><td>Work, slip and power factor</td><td>W.D. = σφu<sub>2</sub>²/g<sub>c</sub></td><td>4.18</td></tr><tr><td>Efficiency; slip factor</td><td>η<sub>c,t-t</sub> = (T<sub>02′</sub> − T<sub>01</sub>)/(T<sub>02</sub> − T<sub>01</sub>), σ = V′<sub>w2</sub>/V<sub>w2</sub></td><td>4.4, 4.14</td></tr><tr><td>Overall pressure ratio</td><td>p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>σφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></td><td>4.20</td></tr><tr><td>Eye: V<sub>r1</sub>, minimum</td><td>V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>²; V<sub>r1,min</sub>² = (πN)²(3d<sub>t</sub>² − d<sub>h</sub>²)/(2·60²)</td><td>4.13, 4.20b</td></tr><tr><td>Prewhirl work; diffuser</td><td>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u′<sub>1</sub>V′<sub>w1</sub>)/g<sub>c</sub>; V<sub>3</sub>/V<sub>2</sub> = r<sub>2</sub>/r<sub>3</sub></td><td>4.20d, 4.24</td></tr></table>`,
      k: [`W.D. = u₂²/g_c (4.1); σφu₂²/g_c (4.18)`, `η (4.4), σ (4.14)`, `p_R0 master equation (4.20)`, `Eye: 4.13, 4.20b; prewhirl 4.20d; diffuser 4.24`],
      tv: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr>
 <tr><td>Work, ideal radial exit</td><td>W.D. = u<sub>2</sub>²/g<sub>c</sub></td><td>4.1</td></tr>
 <tr><td>Work, slip and power factor</td><td>W.D. = σφ u<sub>2</sub>²/g<sub>c</sub></td><td>4.18</td></tr>
 <tr><td>Efficiency; slip factor</td><td>η<sub>c,t-t</sub> = (T<sub>02′</sub> − T<sub>01</sub>)/(T<sub>02</sub> − T<sub>01</sub>), &nbsp;σ = V′<sub>w2</sub>/V<sub>w2</sub></td><td>4.4, 4.14</td></tr>
 <tr><td>Overall pressure ratio</td><td>p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>σφ u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></td><td>4.20</td></tr>
 <tr><td>Eye: V<sub>r1</sub>, minimum</td><td>V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>²; &nbsp;V<sub>r1,min</sub>² = (πN)²(3d<sub>t</sub>² − d<sub>h</sub>²)/(2·60²)</td><td>4.13, 4.20b</td></tr>
 <tr><td>Prewhirl work; diffuser</td><td>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u′<sub>1</sub>V′<sub>w1</sub>)/g<sub>c</sub>; &nbsp;V<sub>3</sub>/V<sub>2</sub> = r<sub>2</sub>/r<sub>3</sub></td><td>4.20d, 4.24</td></tr></table>`},

    75: {i: 3,
      s: `Short table for the axial stage: flow coefficient, work, work with ψ, loading, pressure ratio and degree of reaction.`,
      d: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr><tr><td>Flow coefficient</td><td>φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>)</td><td>5.13</td></tr><tr><td>Work done</td><td>W.D. = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.18</td></tr><tr><td>With work-done factor</td><td>W.D. = ψuV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.25b</td></tr><tr><td>Loading coefficient</td><td>ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</td><td>–</td></tr><tr><td>Stage pressure ratio</td><td>p<sub>R0</sub> = [1 + ηΔT<sub>0</sub>/T<sub>01</sub>]<sup>γ/(γ−1)</sup></td><td>5.23</td></tr><tr><td>Degree of reaction</td><td>R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</td><td>5.27, 5.28</td></tr></table>`,
      k: [`φ_f (5.13), W.D. (5.18), with ψ (5.25b)`, `ψ_L = φ_f(cot β₁ − cot β₂)`, `p_R0 (5.23), R (5.27, 5.28)`],
      tv: `<table><tr><th>Quantity</th><th>Formula</th><th>Eq.</th></tr>
 <tr><td>Flow coefficient</td><td>φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>)</td><td>5.13</td></tr>
 <tr><td>Work done</td><td>W.D. = u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.18</td></tr>
 <tr><td>With work done factor</td><td>W.D. = ψ u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></td><td>5.25b</td></tr>
 <tr><td>Loading coefficient</td><td>ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</td><td>–</td></tr>
 <tr><td>Stage pressure ratio</td><td>p<sub>R0</sub> = [1 + η ΔT<sub>0</sub>/T<sub>01</sub>]<sup>γ/(γ−1)</sup></td><td>5.23</td></tr>
 <tr><td>Degree of reaction</td><td>R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</td><td>5.27, 5.28</td></tr></table>`},

    76: {i: 3,
      s: `Six one-mark questions have appeared: choking, surging, which machine for high pressure ratio at low flow, stall line, diffuser, and axial versus centrifugal mass flow.`,
      d: `<table><tr><th>Paper</th><th>Question</th><th>Answer</th></tr><tr><td>Dec 2023 Q8</td><td>Choking takes place when the compressor operates at</td><td>high mass flow</td></tr><tr><td>Jun 2023 Q7; Mar 2026 Q7</td><td>Surging is the phenomenon of</td><td>unsteady, periodic, reversed flow</td></tr><tr><td>Jun 2023 Q10; Mar 2026 Q10</td><td>A centrifugal compressor is suitable for</td><td>high pressure ratio, low mass flow</td></tr><tr><td>Jun 2024 Q9</td><td>According to the performance map, do not operate near the</td><td>stall line</td></tr><tr><td>Jun 2025 Q5</td><td>The diffuser converts</td><td>kinetic energy into pressure energy</td></tr><tr><td>Jun 2025 Q9</td><td>Mass flow of an axial compressor is ___ centrifugal</td><td>higher than</td></tr></table>`,
      k: [`Choking: high mass flow`, `Surging: unsteady, periodic, reversed flow`, `Centrifugal: high pressure ratio, low mass flow`, `Do not operate near the stall line`, `Diffuser: K.E. → pressure`, `Axial mass flow: higher`],
      tv: `<table><tr><th>Paper</th><th>Question</th><th>Answer</th></tr>
 <tr><td>Dec 2023 Q8</td><td>Choking takes place when the compressor operates at</td><td>high mass flow</td></tr>
 <tr><td>Jun 2023 Q7; Mar 2026 Q7</td><td>Surging is the phenomenon of</td><td>unsteady, periodic, reversed flow</td></tr>
 <tr><td>Jun 2023 Q10; Mar 2026 Q10</td><td>A centrifugal compressor is suitable for</td><td>high pressure ratio, low mass flow</td></tr>
 <tr><td>Jun 2024 Q9</td><td>Performance map: do not operate near the</td><td>stall line</td></tr>
 <tr><td>Jun 2025 Q5</td><td>The diffuser converts</td><td>kinetic energy into pressure energy</td></tr>
 <tr><td>Jun 2025 Q9</td><td>Mass flow of an axial compressor is ___ centrifugal</td><td>higher than</td></tr></table>`},

    77: {i: 3,
      s: `The centrifugal descriptive questions: characteristics, the four coefficients, slip, how slip arises, and velocity diagrams.`,
      d: `<table><tr><th>Paper</th><th>Marks</th><th>Question</th><th>See</th></tr><tr><td>Dec 2023 Q18(a)</td><td>5</td><td>Performance characteristics; curve of a high-speed compressor</td><td>slides 34–36</td></tr><tr><td>Dec 2023 Q18(b)</td><td>5</td><td>Flow, rotor loss, diffuser loss, loading coefficients</td><td>slide 33</td></tr><tr><td>Dec 2023 Q19(c)</td><td>3</td><td>What is slip factor?</td><td>slides 22–23</td></tr><tr><td>Jun 2024 Q12</td><td>2</td><td>How is slip generated?</td><td>slide 22</td></tr><tr><td>Jun 2024 Q18(b)</td><td>4</td><td>Velocity diagrams (centrifugal)</td><td>slides 7–10</td></tr><tr><td>Jun 2025 Q19(b)</td><td>4</td><td>Characteristic curve</td><td>slides 34–36</td></tr></table>The "See" column here points to the slides of this app; the printed handout gives its own page numbers.`,
      k: [`Characteristics: slides 34–36`, `Four coefficients: slide 33`, `Slip: slides 22–23`, `Velocity diagrams: slides 7–10`],
      tv: `<table><tr><th>Paper</th><th>Marks</th><th>Question</th><th>See</th></tr>
 <tr><td>Dec 2023 Q18(a)</td><td>5</td><td>Performance characteristics; curve of a high-speed compressor</td><td>slides 34–36</td></tr>
 <tr><td>Dec 2023 Q18(b)</td><td>5</td><td>Flow, rotor loss, diffuser loss, loading coefficients</td><td>slide 33</td></tr>
 <tr><td>Dec 2023 Q19(c)</td><td>3</td><td>What is slip factor?</td><td>slides 22–23</td></tr>
 <tr><td>Jun 2024 Q12</td><td>2</td><td>How is slip generated?</td><td>slide 22</td></tr>
 <tr><td>Jun 2024 Q18(b)</td><td>4</td><td>Velocity diagrams (centrifugal)</td><td>slides 7–10</td></tr>
 <tr><td>Jun 2025 Q19(b)</td><td>4</td><td>Characteristic curve</td><td>slides 34–36</td></tr></table>
 <p><small>The "See" column points to the slides in this app; the printed handout gives its own page numbers.</small></p>`},

    78: {i: 3,
      s: `The axial-compressor descriptive questions: axial versus centrifugal, the long 7-mark question on reaction and flow coefficient, and the axial characteristic curve.`,
      d: `<table><tr><th>Paper</th><th>Marks</th><th>Question</th><th>See</th></tr><tr><td>Dec 2023 Q19(b)</td><td>3</td><td>Axial versus centrifugal</td><td>slides 69–70</td></tr><tr><td>Jun 2024 Q19(a)</td><td>7</td><td>Axial: R, φ<sub>f</sub>, triangles, relation, 50 %</td><td>slides 47–49, 62–65</td></tr><tr><td>Jun 2024 Q19(b); Mar 2026 Q20(c)</td><td>3, 3</td><td>Axial characteristic curve</td><td>slides 34–36 (course notes, compressor maps)</td></tr></table>`,
      k: [`Axial vs centrifugal: slides 69–70`, `7-mark R, φ_f, triangles, 50 %: slides 47–49, 62–65`, `Axial characteristic: course notes, compressor maps`],
      tv: `<table><tr><th>Paper</th><th>Marks</th><th>Question</th><th>See</th></tr>
 <tr><td>Dec 2023 Q19(b)</td><td>3</td><td>Axial versus centrifugal</td><td>slides 69–70</td></tr>
 <tr><td>Jun 2024 Q19(a)</td><td>7</td><td>Axial: R, φ<sub>f</sub>, triangles, relation, 50 %</td><td>slides 47–49, 62–65</td></tr>
 <tr><td>Jun 2024 Q19(b); Mar 2026 Q20(c)</td><td>3, 3</td><td>Axial characteristic curve</td><td>slides 34–36 (course notes, compressor maps)</td></tr></table>`},

    79: {i: 3,
      s: `Eight practice questions cover every important topic: sketch and T–s diagram, work and pressure ratio derivation, eye diameter, slip and prewhirl, surge and choke, reaction, work-done factor and comparison.`,
      d: `<b>Q1.</b> Describe a centrifugal compressor with a sketch; show the process on a T–s diagram.<br><b>Q2.</b> Derive W.D. and p<sub>R0</sub> in terms of u<sub>2</sub>, σ, φ, η<sub>c,t-to</sub>.<br><b>Q3.</b> Show that V<sub>r1</sub> at the eye is minimum for (d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60²(4Q/π)²/(πN)².<br><b>Q4.</b> Explain slip and slip factor; what are prewhirl and IGVs?<br><b>Q5.</b> Explain surging and choking with a characteristic curve; state the remedies.<br><b>Q6.</b> Define the degree of reaction and flow coefficient; derive R in terms of φ<sub>f</sub> and blade angles; apply to R = 0.5.<br><b>Q7.</b> State the work-done factor; sketch the h–s diagram of an axial stage.<br><b>Q8.</b> Compare axial and centrifugal compressors. Numericals: the worked examples in this handout and the solved examples in Venkanna, Chapters 4 and 5.`,
      k: [`Q1 sketch + T–s; Q2 W.D. and p_R0; Q3 minimum V_r1`, `Q4 slip, prewhirl, IGV; Q5 surge and choke`, `Q6 R and φ_f, 50 %; Q7 ψ and h–s; Q8 comparison`],
      tv: `<ol><li>Describe a centrifugal compressor with a sketch; show the process on a T–s diagram.</li>
 <li>Derive W.D. and p<sub>R0</sub> in terms of u<sub>2</sub>, σ, φ, η<sub>c,t-to</sub>.</li>
 <li>Show that V<sub>r1</sub> at the eye is minimum for (d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60²(4Q/π)²/(πN)².</li>
 <li>Explain slip and slip factor; what are prewhirl and IGVs?</li>
 <li>Explain surging and choking with a characteristic curve; state the remedies.</li>
 <li>Define the degree of reaction and flow coefficient; derive R in terms of φ<sub>f</sub> and blade angles; apply to R = 0.5.</li>
 <li>State the work done factor; sketch the h–s diagram of an axial stage.</li>
 <li>Compare axial and centrifugal compressors.</li></ol>
 <p>Numericals: the worked examples in this handout and the solved examples in Venkanna, Chapters 4 and 5.</p>`,
      t: `Work through all eight before an exam; the app's Questions page has model answers for the unit's PYQs and extra practice questions.`}
  });
})();
