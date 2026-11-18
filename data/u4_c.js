/* Unit IV content, slides 45-68 (DRAFT, teacher to verify).
   Axial flow compressor: construction, geometry and triangles, work and pressure ratio, work-done factor,
   h-s diagram, exit swirl, loading and flow coefficients, degree of reaction, zero and 50 % reaction. */
window.MTM = window.MTM || {c: {}};
MTM.c.u4 = MTM.c.u4 || {sl: {}};
(function () {
  Object.assign(MTM.c.u4.sl, {
    45: {i: 3,
      s: `An axial compressor stage is one row of moving blades (rotor) followed by one row of fixed blades (stator). One stage only raises the pressure by about 1.2 times, so many stages are stacked.`,
      d: `Fig. 5.2: velocity and pressure distribution.<br>• A <b>stage</b> = a row of moving blades (rotor) on the hub + a row of fixed blades (stator) on the casing. Several stages give the overall pressure ratio; one stage gives about 1.2.<br>• <b>Rotor:</b> aerofoil blades turn the flow and raise the absolute velocity V; the relative velocity V<sub>r</sub> falls (diffusion), so some static pressure rises.<br>• <b>Stator:</b> acts as a diffuser; kinetic energy becomes pressure and the flow is turned to enter the next rotor.<br>• <b>IGV</b> (inlet guide vanes, also UGV): an extra fixed row before stage 1 that sets the entry angle α<sub>1</sub>; not part of a stage.<br>• Compression occurs in both rows, and pressure rises continuously from stage to stage.`,
      k: [`Stage = rotor + stator`, `One stage ≈ 1.2; many stages for the overall ratio`, `Rotor: V rises, V_r falls, some pressure rise`, `Stator: diffuser, K.E. → pressure`, `IGV sets α₁; not part of a stage`],
      t: `The 2-mark answer: "rotor adds energy, raises V and some p; stator diffuses; one stage ≈ 1.2."`},

    46: {i: 3,
      s: `The axial speed is kept the same through the stage, so the annulus must get narrower as the gas becomes denser. Stations: 1 rotor entry, 2 rotor exit, 3 stator exit.`,
      d: `<b>Stations:</b> 1 rotor entry, 2 rotor exit = stator entry, 3 stator exit.<br>The axial velocity is kept constant, V<sub>f1</sub> = V<sub>f2</sub> = V<sub>f3</sub> = V<sub>f</sub> (V<sub>f</sub>: flow component of the absolute velocity along the axis). The blade speed u is the same at entry and exit (no radial flow).<br>The density rises from stage to stage, so the blade height h<sub>b</sub> must <b>decrease</b>: the annulus converges.<br><b>Continuity</b> (blade height h<sub>b</sub>, mean diameter d): ṁ = ρ<sub>1</sub>A<sub>1</sub>V<sub>f1</sub> = ρ<sub>2</sub>A<sub>2</sub>V<sub>f2</sub>, A = πd h<sub>b</sub> ⇒ <b>ρ<sub>1</sub>h<sub>b1</sub> = ρ<sub>2</sub>h<sub>b2</sub></b> (5.1, 5.2).<br>A normal stage repeats the stage before it: V<sub>1</sub> = V<sub>3</sub> and α<sub>1</sub> = α<sub>3</sub>.`,
      k: [`V_f1 = V_f2 = V_f3 = V_f; same u`, `Density up → blade height down (converging annulus)`, `ρ₁h_b1 = ρ₂h_b2 (5.1, 5.2)`, `Normal stage: V₁ = V₃, α₁ = α₃`],
      tv: `<ul><li>Stations: 1 rotor entry, 2 rotor exit = stator entry, 3 stator exit.</li><li>The axial velocity is kept constant, V<sub>f1</sub> = V<sub>f2</sub> = V<sub>f3</sub> = V<sub>f</sub> (V<sub>f</sub>: flow component of the absolute velocity along the axis).</li><li>The blade speed u is the same at entry and exit (no radial flow).</li><li>The density rises from stage to stage, so the blade height h<sub>b</sub> must decrease: the annulus converges.</li></ul>
 <div class="eqbox hot"><b>Continuity</b> (blade height h<sub>b</sub>, mean diameter d)<br>ṁ = ρ<sub>1</sub>A<sub>1</sub>V<sub>f1</sub> = ρ<sub>2</sub>A<sub>2</sub>V<sub>f2</sub>, &nbsp;A = πd h<sub>b</sub> &nbsp;⇒ &nbsp;ρ<sub>1</sub>h<sub>b1</sub> = ρ<sub>2</sub>h<sub>b2</sub> &nbsp;— (5.1, 5.2)</div>
 <p>A normal stage repeats the stage before it: V<sub>1</sub> = V<sub>3</sub> and α<sub>1</sub> = α<sub>3</sub>.</p>`},

    47: {i: 3,
      s: `Fig. 5.3 shows the entry triangle, the exit triangle and the two combined on a common base. All angles are measured from the tangential (blade-motion) direction.`,
      d: `Fig. 5.3: (a) entry triangle, (b) exit triangle, (c) combined diagram (symmetrical blading, R = 0.5, V<sub>1</sub> = V<sub>3</sub>, α<sub>1</sub> = α<sub>3</sub>). <b>All angles are from the tangential direction.</b><br>Draw both triangles on a common base u with V<sub>f</sub> the common height. Entry: V<sub>1</sub> (α<sub>1</sub>) and V<sub>r1</sub> (β<sub>1</sub>). Exit: V<sub>2</sub> (α<sub>2</sub>) and V<sub>r2</sub> (β<sub>2</sub>). Because V<sub>f</sub> and u are the same, the two triangles share the base and the height and differ only in the angles.`,
      k: [`Entry (V₁, V_r1, α₁, β₁) and exit (V₂, V_r2, α₂, β₂)`, `Common base u and common height V_f`, `Angles from the tangential direction`],
      t: `Always draw the combined diagram (Fig. 5.3c) with a common base u. Label u, V_f, V_w1, V_w2, x₁, x₂ and all four angles.`},

    48: {i: 3,
      s: `Each triangle gives simple trigonometric relations. At entry and at exit, blade speed u equals the whirl of the relative velocity plus the whirl of the absolute velocity.`,
      d: `V, V<sub>r</sub>: absolute and relative velocity; α, β: their angles from the tangential direction; V<sub>w</sub>: whirl component of V; x = V<sub>r</sub> cos β: whirl component of V<sub>r</sub>; u: blade speed.<br><b>Entry triangle (1):</b> V<sub>f1</sub> = V<sub>1</sub> sin α<sub>1</sub> = V<sub>r1</sub> sin β<sub>1</sub>; V<sub>w1</sub> = V<sub>f1</sub> cot α<sub>1</sub>; x<sub>1</sub> = V<sub>f1</sub> cot β<sub>1</sub>; u = x<sub>1</sub> + V<sub>w1</sub> = V<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>1</sub>).<br><b>Exit triangle (2):</b> V<sub>f2</sub> = V<sub>2</sub> sin α<sub>2</sub> = V<sub>r2</sub> sin β<sub>2</sub>; V<sub>w2</sub> = V<sub>f2</sub> cot α<sub>2</sub>; x<sub>2</sub> = V<sub>f2</sub> cot β<sub>2</sub>; u = x<sub>2</sub> + V<sub>w2</sub> = V<sub>f</sub>(cot α<sub>2</sub> + cot β<sub>2</sub>).`,
      k: [`V_f = V sin α = V_r sin β`, `V_w = V_f cot α; x = V_f cot β`, `u = x + V_w = V_f(cot α + cot β) at entry and exit`],
      tv: `<p>V, V<sub>r</sub>: absolute and relative velocity; α, β: their angles from the tangential direction; V<sub>w</sub>: whirl component of V; x = V<sub>r</sub> cos β: whirl component of V<sub>r</sub>; u: blade speed.</p>
 <div class="eqbox"><b>Entry triangle (1)</b><br>V<sub>f1</sub> = V<sub>1</sub> sin α<sub>1</sub> = V<sub>r1</sub> sin β<sub>1</sub>, &nbsp;V<sub>w1</sub> = V<sub>f1</sub> cot α<sub>1</sub>, &nbsp;x<sub>1</sub> = V<sub>f1</sub> cot β<sub>1</sub>,<br>u = x<sub>1</sub> + V<sub>w1</sub> = V<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>1</sub>)</div>
 <div class="eqbox"><b>Exit triangle (2)</b><br>V<sub>f2</sub> = V<sub>2</sub> sin α<sub>2</sub> = V<sub>r2</sub> sin β<sub>2</sub>, &nbsp;V<sub>w2</sub> = V<sub>f2</sub> cot α<sub>2</sub>, &nbsp;x<sub>2</sub> = V<sub>f2</sub> cot β<sub>2</sub>,<br>u = x<sub>2</sub> + V<sub>w2</sub> = V<sub>f</sub>(cot α<sub>2</sub> + cot β<sub>2</sub>)</div>`},

    49: {i: 3,
      s: `Because u is the same at entry and exit, the two expressions for u can be equated. That links the angles to the flow coefficient φ<sub>f</sub> = V<sub>f</sub>/u, and shows that the whirl added equals the change of x.`,
      d: `Equating the two expressions for u, and using V<sub>w</sub> = u − x, the entry and exit triangles are linked:<br><b>u/V<sub>f</sub> = 1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub></b> — (5.13).<br><b>ΔV<sub>w</sub> = V<sub>w2</sub> − V<sub>w1</sub> = x<sub>1</sub> − x<sub>2</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = V<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>)</b> — (5.14–5.16).<br>φ<sub>f</sub> = V<sub>f</sub>/u is the flow coefficient (defined fully in 4.3.6). ΔV<sub>w</sub> is the whirl added to the gas by the rotor, which fixes the work done.`,
      k: [`1/φ_f = cot α₁ + cot β₁ = cot α₂ + cot β₂ (5.13)`, `ΔV_w = x₁ − x₂ = V_f(cot β₁ − cot β₂) = V_f(cot α₂ − cot α₁) (5.14–5.16)`, `ΔV_w fixes the work`],
      tv: `<p>Equating the two expressions for u, and using V<sub>w</sub> = u − x, the entry and exit triangles are linked:</p>
 <div class="eqbox hot"><b>Relations between the triangles</b><br>u/V<sub>f</sub> = 1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub> &nbsp;— (5.13)</div>
 <div class="eqbox hot">ΔV<sub>w</sub> = V<sub>w2</sub> − V<sub>w1</sub> = x<sub>1</sub> − x<sub>2</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = V<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>) &nbsp;— (5.14–5.16)</div>
 <p>φ<sub>f</sub> = V<sub>f</sub>/u is the flow coefficient (defined fully in 4.3.6). ΔV<sub>w</sub> is the whirl added to the gas by the rotor, which fixes the work done.</p>`},

    50: {i: 1,
      s: `Yahya's book draws the same stage with different symbols and measures angles from the axial direction. Use the key to translate.`,
      d: `Yahya Fig. 11.1(a) pressure and velocity; Fig. 11.1(b) velocity triangles for a compressor stage.<br><b>Key (Yahya → Venkanna):</b> c → V, w → V<sub>r</sub>, c<sub>x</sub> → V<sub>f</sub>, c<sub>y</sub> → V<sub>w</sub>, b → β. Yahya measures angles from the <b>axial</b> direction: α<sub>Y</sub> = 90° − α.<br>So if you use Yahya's formulas, tan of his angle plays the part of cot of Venkanna's angle.`,
      k: [`Yahya c → V, w → V_r, c_x → V_f, c_y → V_w`, `Yahya's angles are from the axial direction: α_Y = 90° − α`],
      tv: `<p>Yahya Fig. 11.1(a) pressure and velocity; Fig. 11.1(b) velocity triangles for a compressor stage.</p>
 <p><b>Key (Yahya → Venkanna):</b> c → V, w → V<sub>r</sub>, c<sub>x</sub> → V<sub>f</sub>, c<sub>y</sub> → V<sub>w</sub>, b → β. Yahya measures angles from the axial direction: α<sub>Y</sub> = 90° − α.</p>`},

    51: {i: 3,
      s: `Euler's equation gives the work from the change in whirl. Only the rotor does work; the stator does none, so the stagnation enthalpy rise of the stage equals the rotor work.`,
      d: `Euler's equation for the work per kg of gas, with u<sub>1</sub> = u<sub>2</sub> = u and g<sub>c</sub> the unit-conversion constant:<br><b>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub>)/g<sub>c</sub> = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub></b> — (5.17).<br><b>W.D. = Δh<sub>0</sub> = uV<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>)/g<sub>c</sub> = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></b> — (5.18).<br>h<sub>0</sub> is the stagnation enthalpy. The stator does no work, so h<sub>03</sub> = h<sub>02</sub> and W.D. = h<sub>02</sub> − h<sub>01</sub> = h<sub>03</sub> − h<sub>01</sub> (5.19).`,
      k: [`W.D. = u(V_w2 − V_w1)/g_c (5.17)`, `W.D. = Δh₀ = uV_f(cot β₁ − cot β₂)/g_c (5.18)`, `Stator does no work: h₀₃ = h₀₂ (5.19)`],
      tv: `<p>Euler's equation for the work per kg of gas, with u<sub>1</sub> = u<sub>2</sub> = u and g<sub>c</sub> the unit-conversion constant:</p>
 <div class="eqbox hot"><b>Work done (W.D.)</b><br>W.D. = (u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub>)/g<sub>c</sub> = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> &nbsp;— (5.17)</div>
 <div class="eqbox hot">W.D. = Δh<sub>0</sub> = u V<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>)/g<sub>c</sub> = u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub> &nbsp;— (5.18)</div>
 <p>h<sub>0</sub> is the stagnation enthalpy. The stator does no work, so h<sub>03</sub> = h<sub>02</sub> and W.D. = h<sub>02</sub> − h<sub>01</sub> = h<sub>03</sub> − h<sub>01</sub> (5.19).</p>`},

    52: {i: 3,
      s: `All the work shows up as a stagnation temperature rise, however inefficient the stage. Put that rise into the efficiency relation and you get the stage pressure ratio.`,
      d: `The whole work input appears as a stagnation temperature rise, whatever the efficiency (c<sub>p</sub>: specific heat at constant pressure, T<sub>0</sub>: stagnation temperature):<br><b>W.D. = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>) ⇒ T<sub>02</sub> − T<sub>01</sub> = T<sub>03</sub> − T<sub>01</sub> = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>)</b> — (5.24).<br>With the stage efficiency η<sub>c,t-t</sub> (defined in 4.3.4) and γ, the stagnation pressure ratio of a stage is<br><b>p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub> = [1 + η<sub>c,t-t</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup></b> — (5.23).`,
      k: [`T₀₃ − T₀₁ = uV_f(cot β₁ − cot β₂)/(g_c c_p) (5.24)`, `p_R0 = [1 + ηΔT₀/T₀₁]^(γ/(γ−1)) (5.23)`, `Rotor: T₀₂ > T₀₁; stator: T₀₃ = T₀₂`],
      tv: `<p>The whole work input appears as a stagnation temperature rise, whatever the efficiency (c<sub>p</sub>: specific heat at constant pressure, T<sub>0</sub>: stagnation temperature):</p>
 <div class="eqbox hot"><b>Temperature rise</b><br>W.D. = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>) ⇒ T<sub>02</sub> − T<sub>01</sub> = T<sub>03</sub> − T<sub>01</sub> = u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub> c<sub>p</sub>) &nbsp;— (5.24)</div>
 <p>With the stage efficiency η<sub>c,t-t</sub> (defined in 4.3.4) and γ, the ratio of specific heats, the stagnation pressure ratio of a stage is:</p>
 <div class="eqbox hot"><b>Stage pressure ratio</b><br>p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub> = [ 1 + η<sub>c,t-t</sub> (T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub> ]<sup>γ/(γ−1)</sup> &nbsp;— (5.23)</div>`,
      t: `A standard 5-mark derivation: Euler → 5.18 → 5.24 → 5.23. Write the four equations in order.`},

    53: {i: 2,
      s: `Boundary layers on the hub and casing and tip clearance make the axial speed lower near the walls and higher in the middle. The effect grows toward the rear stages, so the real stage absorbs less work than the Euler value.`,
      d: `So far V<sub>f</sub> was taken as constant. In practice boundary layers on the hub and casing and tip clearance make the axial velocity <b>lower near the walls and higher in the middle</b>. The effect grows from the first stage to the last, and the stage absorbs less work than the Euler value. An empirical correction, the <b>work-done factor ψ</b>, accounts for it.<br>Yahya Fig. 11.10: axial velocity along the blade height, first and last stages. Key (Yahya → Venkanna): c → V, w → V<sub>r</sub>, c<sub>x</sub> → V<sub>f</sub>, Ω → ψ, O<sub>i</sub> → 0i (stagnation), O<sub>rel</sub> → 0 rel.`,
      k: [`Boundary layers + tip clearance distort V_f`, `Grows from first to last stage`, `Stage absorbs less work than Euler value`, `Correction: work-done factor ψ`],
      t: `"Why is the work-done factor needed?" Answer: because the axial velocity is not uniform across the annulus.`},

    54: {i: 3,
      s: `The work-done factor is the actual work divided by the ideal work. It is about 0.98 in the first stages and falls to about 0.85 in the last stages. Multiply it into the Euler work.`,
      d: `<b>Work-done factor</b> ψ = actual work-absorbing capacity / ideal work-absorbing capacity.<br><b>W.D. = ψu(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = ψuV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></b> — (5.25a,b).<br><b>T<sub>02</sub> − T<sub>01</sub> = T<sub>03</sub> − T<sub>01</sub> = ψuV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>)</b> — (5.25c).<br>ψ ≈ 0.98 in the first stages, falling to about 0.85 in later stages as the boundary layers thicken (Yahya's Ω is Venkanna's ψ). Eq. 5.23 is then used with this reduced temperature rise.`,
      k: [`ψ = actual/ideal work capacity`, `W.D. = ψuV_f(cot β₁ − cot β₂)/g_c (5.25b)`, `ψ ≈ 0.98 early → 0.85 late`, `Use the reduced ΔT₀ in Eq. 5.23`],
      tv: `<div class="eqbox hot"><b>Work done factor</b><br>ψ = actual work absorbing capacity / ideal work absorbing capacity</div>
 <div class="eqbox hot">W.D. = ψ u (V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = ψ u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub> &nbsp;— (5.25a,b)</div>
 <div class="eqbox">T<sub>02</sub> − T<sub>01</sub> = T<sub>03</sub> − T<sub>01</sub> = ψ u V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub> c<sub>p</sub>) &nbsp;— (5.25c)</div>
 <p>ψ ≈ 0.98 in the first stages, falling to about 0.85 in later stages as the boundary layers thicken (Yahya's Ω is Venkanna's ψ). Eq. 5.23 is then used with this reduced temperature rise.</p>`,
      t: `Slide 79 Q7 asks you to "state the work done factor". Give the definition, Eq. 5.25b and the 0.98 → 0.85 range.`},

    55: {i: 3,
      s: `On the h–s (or T–s) diagram, the rotor adds work and moves the state up and to the right. The stator adds no work but raises the static pressure further.`,
      d: `Fig. 5.4: stage of an axial compressor.<br>• State 1 (static, pressure p<sub>1</sub>) and 01 (stagnation, p<sub>01</sub>) are at rotor entry; the gap is V<sub>1</sub>²/2g<sub>c</sub>.<br>• <b>Rotor 1 → 2:</b> work is added, so h<sub>02</sub> &gt; h<sub>01</sub>; the static pressure rises to p<sub>2</sub> and the line leans to the right: entropy rises through friction.<br>• <b>Stator 2 → 3:</b> no work, h<sub>03</sub> = h<sub>02</sub>; V<sub>2</sub>²/2g<sub>c</sub> falls to V<sub>3</sub>²/2g<sub>c</sub> and static pressure rises to p<sub>3</sub>.<br>• Primed states 2′, 3′, 03′, 3″, 03″ are the isentropic (ideal) states at the same pressures; the actual stagnation pressure falls short of the ideal (p<sub>03</sub> below the ideal).<br>• 01rel, 02rel: stagnation states in the relative system (next slide).`,
      k: [`Rotor: h₀ rises, entropy rises`, `Stator: h₀₃ = h₀₂, static p rises`, `Primed states = isentropic`, `p₀₃ (actual) < ideal`],
      tv: `<p>Fig. 5.4: stage of an axial compressor.</p>
 <ul><li>State 1 (static, pressure p<sub>1</sub>) and 01 (stagnation, p<sub>01</sub>) are at rotor entry; the gap is V<sub>1</sub>²/2g<sub>c</sub>.</li><li>Rotor 1 → 2: work is added, so h<sub>02</sub> &gt; h<sub>01</sub>; the static pressure rises to p<sub>2</sub> and the line leans to the right: entropy rises through friction.</li><li>Stator 2 → 3: no work, h<sub>03</sub> = h<sub>02</sub>; V<sub>2</sub>²/2g<sub>c</sub> falls to V<sub>3</sub>²/2g<sub>c</sub> and static pressure rises to p<sub>3</sub>.</li><li>Primed states 2′, 3′, 03′, 3″, 03″ are the isentropic (ideal) states at the same pressures; the actual stagnation pressure falls short of the ideal (p<sub>03</sub> below the ideal).</li><li>01rel, 02rel: stagnation states in the relative system (next slide).</li></ul>`,
      t: `Practice sketching the stage h–s diagram (Q7 on slide 79): points 1, 2, 3 with their stagnation points above them, and the isentropic ends at the same pressures.`},

    56: {i: 2,
      s: `Measured on the rotor, the stagnation enthalpy stays constant: the rotor raises static enthalpy only by slowing the relative flow.`,
      d: `<b>Energy balance on the rotor:</b> W.D. = (h<sub>02</sub> − h<sub>01</sub>) = (h<sub>2</sub> − h<sub>1</sub>) + (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>. With W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub>, V² = V<sub>f</sub>² + V<sub>w</sub>², V<sub>f1</sub> = V<sub>f2</sub> and V<sub>w</sub> = u − x:<br>(h<sub>2</sub> − h<sub>1</sub>) − (V<sub>w2</sub> − V<sub>w1</sub>)[(u − V<sub>w2</sub>) + (u − V<sub>w1</sub>)]/2g<sub>c</sub> = 0, i.e. (h<sub>2</sub> − h<sub>1</sub>) − (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub> = 0 — (5.20)<br>⇒ h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> ⇒ <b>h<sub>01rel</sub> = h<sub>02rel</sub></b> — (5.21, 5.22).<br>Stagnation enthalpy stays constant in the relative system: the rotor raises static enthalpy only by slowing the relative flow (V<sub>r2</sub> &lt; V<sub>r1</sub>).`,
      k: [`h₂ − h₁ = (V_r1² − V_r2²)/2g_c = (x₁² − x₂²)/2g_c (5.21)`, `h₀₁rel = h₀₂rel (5.22)`, `Rotor raises static h only by diffusing V_r`],
      tv: `<p>Energy balance on the rotor gives W.D. = (h<sub>02</sub> − h<sub>01</sub>) = (h<sub>2</sub> − h<sub>1</sub>) + (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>, and with W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub>, V² = V<sub>f</sub>² + V<sub>w</sub>², V<sub>f1</sub> = V<sub>f2</sub>, V<sub>w</sub> = u − x:</p>
 <div class="eqbox">(h<sub>2</sub> − h<sub>1</sub>) − (V<sub>w2</sub> − V<sub>w1</sub>)[(u − V<sub>w2</sub>) + (u − V<sub>w1</sub>)]/2g<sub>c</sub> = 0 &nbsp;⇒ &nbsp;(h<sub>2</sub> − h<sub>1</sub>) − (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub> = 0 &nbsp;— (5.20)</div>
 <div class="eqbox hot">h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> &nbsp;⇒ &nbsp;h<sub>01rel</sub> = h<sub>02rel</sub> &nbsp;— (5.21, 5.22)</div>
 <p>Stagnation enthalpy stays constant in the relative system: the rotor raises static enthalpy only by slowing the relative flow (V<sub>r2</sub> &lt; V<sub>r1</sub>).</p>`},

    57: {i: 3,
      s: `Stage efficiency compares the ideal compression work to the actual work for the same final stagnation pressure. Friction makes the real path need more work.`,
      d: `Fig. 11.2: h–s diagram of a compressor stage (w<sub>a</sub> actual, w<sub>s</sub> ideal work).<br><b>Total-to-total (adiabatic) efficiency</b> η<sub>c,t-t</sub> = ideal work/actual work = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) — (5.23).<br>03′ is reached from 01 by isentropic compression to the same exit stagnation pressure p<sub>03</sub> (O<sub>3ss</sub> in the figure). It needs less work than the actual path 1 → 2 → 3, because friction raises the entropy by Δs.`,
      k: [`η_c,t-t = ideal/actual work between the same p₀₁ and p₀₃`, `03′: isentropic end at p₀₃`, `Friction raises entropy by Δs`],
      tv: `<p>Fig. 11.2: h–s diagram of a compressor stage (w<sub>a</sub> actual, w<sub>s</sub> ideal work).</p>
 <div class="eqbox hot"><b>Total-to-total (adiabatic) efficiency</b><br>η<sub>c,t-t</sub> = ideal work/actual work = (h<sub>03′</sub> − h<sub>01</sub>)/(h<sub>03</sub> − h<sub>01</sub>) = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>) &nbsp;— (5.23)</div>
 <p>03′ is reached from 01 by isentropic compression to the same exit stagnation pressure p<sub>03</sub> (O<sub>3ss</sub> in the figure). It needs less work than the actual path 1 → 2 → 3, because friction raises the entropy by Δs.</p>`},

    58: {i: 2,
      s: `The swirl of the gas leaving the stator carries kinetic energy that is wasted unless the next stage uses it. In a normal stage it is the entry swirl of the next rotor.`,
      d: `• The flow leaves the stator with absolute velocity V<sub>3</sub> at angle α<sub>3</sub> (from the tangential direction); this is the exit swirl angle. Its whirl component is V<sub>w3</sub> = V<sub>f</sub> cot α<sub>3</sub>.<br>• The kinetic energy leaving the stage, V<sub>3</sub>²/2g<sub>c</sub> with V<sub>3</sub>² = V<sub>f</sub>² + V<sub>w3</sub>², is a <b>leaving loss</b>; it is least for zero swirl, V<sub>w3</sub> = 0 (α<sub>3</sub> = 90°).<br>• In a normal stage, α<sub>3</sub> = α<sub>1</sub>: the exit swirl is the entry swirl of the next rotor, so it is not wasted.<br>• In the last stage the swirl is removed by straightening (exit guide) vanes.`,
      k: [`V_w3 = V_f cot α₃`, `Leaving loss V₃²/2g_c least for zero swirl`, `Normal stage: α₃ = α₁, swirl reused`, `Last stage: exit guide vanes remove swirl`],
      t: `Mention exit guide vanes whenever the question asks what happens to the swirl in the last stage.`},

    59: {i: 3,
      s: `When the air enters axially (no inlet swirl) no guide vanes are needed. All the whirl is added by the rotor and the degree of reaction is high, R = 1 − ψ<sub>L</sub>/2.`,
      d: `Fig. 5.8: V<sub>1</sub> axial (α<sub>1</sub> = α<sub>3</sub> = 90°).<br>For a normal stage with α<sub>1</sub> = α<sub>3</sub> = 90°: V<sub>w1</sub> = V<sub>w3</sub> = 0, so V<sub>1</sub> = V<sub>3</sub> = V<sub>f</sub> and ΔV<sub>w</sub> = V<sub>w2</sub>.<br>• No guide vanes are needed.<br>• Large static rise in the rotor, R = 60–90 %.<br>• Large V<sub>r1</sub>: stage efficiency below that of R = 0.5.<br>From Eq. 5.28 with cot α<sub>1</sub> = 0: <b>R = 1 − (φ<sub>f</sub>/2) cot α<sub>2</sub> = 1 − ψ<sub>L</sub>/2</b> (ψ<sub>L</sub>: stage loading, 4.3.6).`,
      k: [`α₁ = α₃ = 90°: V_w1 = V_w3 = 0, ΔV_w = V_w2`, `No guide vanes; R = 60–90 %`, `Large V_r1; efficiency below R = 0.5`, `R = 1 − (φ_f/2) cot α₂ = 1 − ψ_L/2`],
      tv: `<p>Fig. 5.8: V<sub>1</sub> axial (α<sub>1</sub> = α<sub>3</sub> = 90°). For a normal stage with α<sub>1</sub> = α<sub>3</sub> = 90°: V<sub>w1</sub> = V<sub>w3</sub> = 0, so V<sub>1</sub> = V<sub>3</sub> = V<sub>f</sub> and ΔV<sub>w</sub> = V<sub>w2</sub>.</p>
 <ul><li>No guide vanes are needed.</li><li>Large static rise in the rotor, R = 60–90 %.</li><li>Large V<sub>r1</sub>: stage efficiency below that of R = 0.5.</li></ul>
 <div class="eqbox hot">From Eq. 5.28 with cot α<sub>1</sub> = 0: &nbsp;R = 1 − (φ<sub>f</sub>/2) cot α<sub>2</sub> = 1 − ψ<sub>L</sub>/2</div>
 <p>ψ<sub>L</sub>: stage loading, 4.3.6.</p>`},

    60: {i: 3,
      s: `Two numbers describe an axial stage: the flow coefficient φ<sub>f</sub> = V<sub>f</sub>/u and the pressure (loading) coefficient φ<sub>p</sub>, which is the enthalpy rise per unit blade kinetic energy u²/2g<sub>c</sub>.`,
      d: `<b>Flow coefficient φ<sub>f</sub></b> (compressor velocity ratio): φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>) = 1/(cot α<sub>2</sub> + cot β<sub>2</sub>) — (5.8, 5.13).<br><b>Pressure coefficient φ<sub>p</sub></b> (stage loading): φ<sub>p</sub> = Δh<sub>0</sub>/(u²/2g<sub>c</sub>) = 2g<sub>c</sub>Δh<sub>0</sub>/u² = 2ΔV<sub>w</sub>/u; with ψ: 2ψΔV<sub>w</sub>/u — (5.9).<br>φ<sub>f</sub> helps to obtain large turning angles. φ<sub>p</sub> is the actual stagnation-enthalpy rise per unit kinetic energy of the blade speed. Yahya's stage loading is ψ<sub>L</sub> = Δh<sub>0</sub>g<sub>c</sub>/u² = φ<sub>p</sub>/2.`,
      k: [`φ_f = V_f/u = 1/(cot α₁ + cot β₁) (5.8, 5.13)`, `φ_p = Δh₀/(u²/2g_c) = 2ΔV_w/u (5.9); with ψ: 2ψΔV_w/u`, `Yahya's ψ_L = φ_p/2`],
      tv: `<div class="eqbox hot"><b>Flow coefficient φ<sub>f</sub></b> (compressor velocity ratio)<br>φ<sub>f</sub> = V<sub>f</sub>/u = 1/(cot α<sub>1</sub> + cot β<sub>1</sub>) = 1/(cot α<sub>2</sub> + cot β<sub>2</sub>) &nbsp;— (5.8, 5.13)</div>
 <div class="eqbox hot"><b>Pressure coefficient φ<sub>p</sub></b> (stage loading)<br>φ<sub>p</sub> = Δh<sub>0</sub>/(u²/2g<sub>c</sub>) = 2g<sub>c</sub>Δh<sub>0</sub>/u² = 2ΔV<sub>w</sub>/u &nbsp;(with ψ: 2ψΔV<sub>w</sub>/u) &nbsp;— (5.9)</div>
 <p>φ<sub>f</sub> helps to obtain large turning angles. φ<sub>p</sub> is the actual stagnation-enthalpy rise per unit kinetic energy of the blade speed. Yahya's stage loading is ψ<sub>L</sub> = Δh<sub>0</sub>g<sub>c</sub>/u² = φ<sub>p</sub>/2.</p>`,
      t: `Know the difference: φ_p uses u²/2g_c and equals 2ψ_L. Use whichever symbol the question defines.`},

    61: {i: 3,
      s: `Loading and flow coefficients are linked by the blade angles. For a 50 % reaction stage the loading falls in a straight line as the flow coefficient rises.`,
      d: `Fig. 7.6: a 50 % reaction stage. Fig. 11.17: off-design curves of loading against flow. Key (Yahya → Venkanna): ψ → ψ<sub>L</sub>, φ → φ<sub>f</sub>, c<sub>x</sub> → V<sub>f</sub>, tan α, tan β → cot α, cot β (angles from axial → from tangential).<br><b>ψ<sub>L</sub> = ΔV<sub>w</sub>/u = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 1 − φ<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>2</sub>)</b>; for R = 0.5 (α<sub>1</sub> = β<sub>2</sub>): <b>ψ<sub>L</sub> = 1 − 2φ<sub>f</sub> cot β<sub>2</sub></b>.`,
      k: [`ψ_L = ΔV_w/u = φ_f(cot β₁ − cot β₂)`, `= 1 − φ_f(cot α₁ + cot β₂)`, `R = 0.5: ψ_L = 1 − 2φ_f cot β₂`],
      tv: `<p>Fig. 7.6: a 50 % reaction stage. Fig. 11.17: off-design curves of loading against flow.</p>
 <p>Key (Yahya → Venkanna): ψ → ψ<sub>L</sub>, φ → φ<sub>f</sub>, c<sub>x</sub> → V<sub>f</sub>, tan α, tan β → cot α, cot β (angles from axial → from tangential).</p>
 <div class="eqbox hot">ψ<sub>L</sub> = ΔV<sub>w</sub>/u = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 1 − φ<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>2</sub>);<br>R = 0.5 (α<sub>1</sub> = β<sub>2</sub>): &nbsp;ψ<sub>L</sub> = 1 − 2φ<sub>f</sub> cot β<sub>2</sub></div>`},

    62: {i: 3,
      s: `The degree of reaction is the share of the stage's static enthalpy (and so pressure) rise that happens in the rotor.`,
      d: `<b>Degree of reaction</b> R = static enthalpy rise in the rotor / static enthalpy rise in the stage = (h<sub>2</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = Δh<sub>R</sub>/(Δh<sub>R</sub> + Δh<sub>S</sub>) = ΔT<sub>R</sub>/(ΔT<sub>R</sub> + ΔT<sub>S</sub>) — (5.26).<br>Δh<sub>R</sub>, Δh<sub>S</sub> and ΔT<sub>R</sub>, ΔT<sub>S</sub>: static enthalpy and temperature rise in the rotor and in the stator.<br>R shows how the stage pressure rise is shared between rotor and stator. Since h<sub>3</sub> − h<sub>1</sub> = W.D. (a normal stage has V<sub>1</sub> = V<sub>3</sub>), R = (h<sub>2</sub> − h<sub>1</sub>)/W.D.`,
      k: [`R = (h₂ − h₁)/(h₃ − h₁) = Δh_R/(Δh_R + Δh_S) (5.26)`, `Share of the stage static rise taken by the rotor`, `Normal stage: R = (h₂ − h₁)/W.D.`],
      tv: `<div class="eqbox hot"><b>Degree of reaction R</b><br>R = static enthalpy rise in the rotor / static enthalpy rise in the stage = (h<sub>2</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) = Δh<sub>R</sub>/(Δh<sub>R</sub> + Δh<sub>S</sub>) = ΔT<sub>R</sub>/(ΔT<sub>R</sub> + ΔT<sub>S</sub>) &nbsp;— (5.26)</div>
 <p>Δh<sub>R</sub>, Δh<sub>S</sub> and ΔT<sub>R</sub>, ΔT<sub>S</sub>: static enthalpy and temperature rise in the rotor and in the stator.</p>
 <p>R shows how the stage pressure rise is shared between rotor and stator. Since h<sub>3</sub> − h<sub>1</sub> = W.D. (a normal stage has V<sub>1</sub> = V<sub>3</sub>), R = (h<sub>2</sub> − h<sub>1</sub>)/W.D.</p>`,
      t: `Definition first, with the formula in enthalpies, then in temperatures. This is the first mark in the 7-mark PYQ.`},

    63: {i: 3,
      s: `The rotor's static rise is the drop in relative kinetic energy, which depends on x<sub>1</sub> and x<sub>2</sub>. Dividing by the stage work gives R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>).`,
      d: `<b>Rotor:</b> h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> = (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub> — (5.21).<br><b>Stage:</b> h<sub>3</sub> − h<sub>1</sub> = W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = u(x<sub>1</sub> − x<sub>2</sub>)/g<sub>c</sub>.<br>R = (x<sub>1</sub>² − x<sub>2</sub>²)/[2u(x<sub>1</sub> − x<sub>2</sub>)] = (x<sub>1</sub> + x<sub>2</sub>)/2u = V<sub>f</sub>(cot β<sub>1</sub> + cot β<sub>2</sub>)/2u.<br><b>Result: R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>)</b> — (5.27).`,
      k: [`h₂ − h₁ = (x₁² − x₂²)/2g_c`, `W.D. = u(x₁ − x₂)/g_c`, `R = (x₁ + x₂)/2u`, `R = (φ_f/2)(cot β₁ + cot β₂) (5.27)`],
      tv: `<div class="eqbox">Rotor: h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> = (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub> &nbsp;(5.21), and stage: h<sub>3</sub> − h<sub>1</sub> = W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = u(x<sub>1</sub> − x<sub>2</sub>)/g<sub>c</sub>.</div>
 <div class="eqbox">R = (x<sub>1</sub>² − x<sub>2</sub>²)/[2u(x<sub>1</sub> − x<sub>2</sub>)] = (x<sub>1</sub> + x<sub>2</sub>)/2u = V<sub>f</sub>(cot β<sub>1</sub> + cot β<sub>2</sub>)/2u</div>
 <div class="eqbox hot"><b>Result</b><br>R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) &nbsp;— (5.27)</div>`,
      t: `Core of the 7-mark PYQ (Jun 2024 Q19a). Write the rotor and stage enthalpy rises, divide, simplify.`},

    64: {i: 3,
      s: `The same answer in absolute angles: the stator takes the rise in absolute kinetic energy, so R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>).`,
      d: `Energy balance (V<sub>1</sub> = V<sub>3</sub> in a normal stage): in the rotor, Δh<sub>R</sub> = W.D. − (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>; in the stator, Δh<sub>S</sub> = (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>.<br>R = 1 − Δh<sub>S</sub>/W.D. = 1 − (V<sub>w2</sub>² − V<sub>w1</sub>²)/[2u(V<sub>w2</sub> − V<sub>w1</sub>)] = 1 − (V<sub>w1</sub> + V<sub>w2</sub>)/2u (V<sub>f</sub> is constant, so V<sub>2</sub>² − V<sub>1</sub>² = V<sub>w2</sub>² − V<sub>w1</sub>²).<br><b>Result: R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</b> — (5.28).`,
      k: [`Δh_S = (V₂² − V₁²)/2g_c`, `R = 1 − Δh_S/W.D. = 1 − (V_w1 + V_w2)/2u`, `R = 1 − (φ_f/2)(cot α₁ + cot α₂) (5.28)`],
      tv: `<p>Energy balance in the rotor (V<sub>1</sub> = V<sub>3</sub> in a normal stage): Δh<sub>R</sub> = W.D. − (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>; in the stator: Δh<sub>S</sub> = (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>.</p>
 <div class="eqbox">R = 1 − (V<sub>w2</sub>² − V<sub>w1</sub>²)/[2u(V<sub>w2</sub> − V<sub>w1</sub>)] = 1 − (V<sub>w1</sub> + V<sub>w2</sub>)/2u</div>
 <div class="eqbox hot"><b>Result</b><br>R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>) &nbsp;— (5.28)</div>`},

    65: {i: 3,
      s: `Put R = 0.5 into the two formulas. The entry and exit angles swap (α<sub>1</sub> = β<sub>2</sub>, α<sub>2</sub> = β<sub>1</sub>), the triangles are mirror images, and rotor and stator share the rise equally.`,
      d: `Fig. 5.5: R = 50 %: symmetrical triangles.<br>R = 0.5 in Eqs. 5.27 and 5.28: <b>1/φ<sub>f</sub> = cot β<sub>1</sub> + cot β<sub>2</sub> = cot α<sub>2</sub> + cot α<sub>1</sub></b>. Compare with 5.13 (1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub>) ⇒ <b>α<sub>1</sub> = β<sub>2</sub>, α<sub>2</sub> = β<sub>1</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub></b> (5.29, 5.30).<br>h<sub>2</sub> − h<sub>1</sub> = h<sub>3</sub> − h<sub>2</sub>: equal static rise in rotor and stator, so entry and exit triangles are equal. This is the usual choice for a compressor stage.`,
      k: [`R = 0.5: 1/φ_f = cot β₁ + cot β₂ = cot α₁ + cot α₂`, `α₁ = β₂, α₂ = β₁`, `V₁ = V_r2, V₂ = V_r1`, `h₂ − h₁ = h₃ − h₂`],
      tv: `<p>Fig. 5.5: R = 50 %: symmetrical triangles.</p>
 <div class="eqbox">R = 0.5 in Eqs. 5.27, 5.28 &nbsp;⇒ &nbsp;1/φ<sub>f</sub> = cot β<sub>1</sub> + cot β<sub>2</sub> = cot α<sub>2</sub> + cot α<sub>1</sub></div>
 <div class="eqbox hot">⇒ &nbsp;α<sub>1</sub> = β<sub>2</sub>, &nbsp;α<sub>2</sub> = β<sub>1</sub>, &nbsp;V<sub>1</sub> = V<sub>r2</sub>, &nbsp;V<sub>2</sub> = V<sub>r1</sub> &nbsp;— (5.29, 5.30)</div>
 <p>h<sub>2</sub> − h<sub>1</sub> = h<sub>3</sub> − h<sub>2</sub>: equal static rise in rotor and stator, so entry and exit triangles are equal. This is the usual choice for a compressor stage.</p>`,
      t: `The PYQ ends with "how is the relation applied to 50 % reaction?" Show R = 0.5 in both forms, equate to 1/φ_f from 5.13, and read off α₁ = β₂, α₂ = β₁.`},

    66: {i: 2,
      s: `At zero reaction the rotor gives no static rise; the stator does it all. The rotor acts like an impulse row, but the stator then has a hard diffusion job, so R = 0 is rarely used.`,
      d: `R = 0 means h<sub>2</sub> = h<sub>1</sub>: the rotor gives no static rise; the whole rise h<sub>3</sub> − h<sub>2</sub> = W.D. is in the stator. From Eq. 5.27:<br><b>Conditions for R = 0:</b> cot β<sub>1</sub> = −cot β<sub>2</sub> ⇒ β<sub>2</sub> = 180° − β<sub>1</sub>, V<sub>r1</sub> = V<sub>r2</sub>, x<sub>2</sub> = −x<sub>1</sub>; ΔV<sub>w</sub> = x<sub>1</sub> − x<sub>2</sub> = 2x<sub>1</sub>, so ψ<sub>L</sub> = 2x<sub>1</sub>/u.<br>• The rotor blades act as an impulse row (circular-arc sections): no diffusion of V<sub>r</sub>.<br>• The stator must diffuse from a large V<sub>2</sub> to V<sub>1</sub>: high stator loss.<br>• Hence R = 0 is rarely used; compare Fig. 5.7 (R &lt; 0.5).`,
      k: [`R = 0: h₂ = h₁, all rise in the stator`, `cot β₁ = −cot β₂, β₂ = 180° − β₁, V_r1 = V_r2`, `Impulse rotor, high stator loss: rarely used`],
      tv: `<p>R = 0 means h<sub>2</sub> = h<sub>1</sub>: the rotor gives no static rise; the whole rise h<sub>3</sub> − h<sub>2</sub> = W.D. is in the stator. From Eq. 5.27:</p>
 <div class="eqbox hot"><b>Conditions for R = 0</b><br>cot β<sub>1</sub> = −cot β<sub>2</sub> &nbsp;⇒ &nbsp;β<sub>2</sub> = 180° − β<sub>1</sub>, &nbsp;V<sub>r1</sub> = V<sub>r2</sub>, &nbsp;x<sub>2</sub> = −x<sub>1</sub><br>ΔV<sub>w</sub> = x<sub>1</sub> − x<sub>2</sub> = 2x<sub>1</sub>, &nbsp;ψ<sub>L</sub> = 2x<sub>1</sub>/u</div>
 <ul><li>The rotor blades act as an impulse row (circular-arc sections): no diffusion of V<sub>r</sub>.</li><li>The stator must diffuse from a large V<sub>2</sub> to V<sub>1</sub>: high stator loss.</li><li>Hence R = 0 is rarely used; compare Fig. 5.7 (R &lt; 0.5).</li></ul>`},

    67: {i: 2,
      s: `For R above 0.5 the rotor does more of the compression; for R below 0.5 the stator does more. The triangles stop being symmetric.`,
      d: `Fig. 5.6: R &gt; 0.5, rotor static rise exceeds stator rise (V<sub>r1</sub> large, V<sub>2</sub> small). Fig. 5.7: R &lt; 0.5, stator static rise exceeds rotor rise (V<sub>2</sub> large, V<sub>r1</sub> small).<br>From R = 1 − (V<sub>w1</sub> + V<sub>w2</sub>)/2u: R &gt; 0.5 when V<sub>w1</sub> + V<sub>w2</sub> &lt; u, that is when the absolute whirl is small; R &lt; 0.5 when the absolute whirl is large.`,
      k: [`R > 0.5: rotor rise > stator rise`, `R < 0.5: stator rise > rotor rise`, `Triangles asymmetric`],
      tv: `<p>Fig. 5.6: R &gt; 0.5, rotor static rise exceeds stator rise. Fig. 5.7: R &lt; 0.5, stator static rise exceeds rotor rise.</p>
 <p>From R = 1 − (V<sub>w1</sub> + V<sub>w2</sub>)/2u: R &gt; 0.5 when V<sub>w1</sub> + V<sub>w2</sub> &lt; u, i.e. when the absolute whirl is small; R &lt; 0.5 when the absolute whirl is large.</p>`},

    68: {i: 3,
      s: `Summary of reaction: 0 means the stator does all the rise, 0.5 means equal and symmetrical, above 0.5 the rotor takes more, and above 1 the rotor alone does it (with an axial rotor exit).`,
      d: `Fig. 5.9: V<sub>2</sub> axial (α<sub>2</sub> = 90°). V<sub>w2</sub> = 0: least V<sub>2</sub>; the whole rise is in the rotor (R &gt; 100 %); little work per stage, so a bulky machine and low stage efficiency.<br><table><tr><th>R</th><th>Rise in rotor and stator</th></tr><tr><td>0</td><td>all in the stator (impulse rotor)</td></tr><tr><td>&lt; 0.5</td><td>stator greater than rotor</td></tr><tr><td>0.5</td><td>equal; symmetrical triangles</td></tr><tr><td>&gt; 0.5</td><td>rotor greater than stator</td></tr><tr><td>&gt; 1</td><td>rotor only (V<sub>2</sub> axial)</td></tr></table>`,
      k: [`R = 0: all in stator`, `R < 0.5: stator > rotor`, `R = 0.5: equal, symmetrical`, `R > 0.5: rotor > stator`, `R > 1: rotor only, V₂ axial`],
      tv: `<p>Fig. 5.9: V<sub>2</sub> axial (α<sub>2</sub> = 90°). V<sub>w2</sub> = 0: least V<sub>2</sub>; the whole rise is in the rotor (R &gt; 100 %); little work per stage, so a bulky machine and low stage efficiency.</p>
 <table><tr><th>R</th><th>Rise in rotor and stator</th></tr>
 <tr><td>0</td><td>all in the stator (impulse rotor)</td></tr>
 <tr><td>&lt; 0.5</td><td>stator greater than rotor</td></tr>
 <tr><td>0.5</td><td>equal; symmetrical triangles</td></tr>
 <tr><td>&gt; 0.5</td><td>rotor greater than stator</td></tr>
 <tr><td>&gt; 1</td><td>rotor only (V<sub>2</sub> axial)</td></tr></table>`,
      t: `Learn the table. A one-line version fits a 2-mark question.`}
  });
})();
