/* Unit II content, slides 36-58 (DRAFT, teacher to verify): performance parameters, maximum blade efficiency, numericals 1 and 2 */
(function () {
  Object.assign(MTM.c.u2.sl, {
    36: {i: 3,
      s: `The work done on the blades per kg of steam is the blade speed times the total change in whirl velocity, and power is that times the steam flow rate.`,
      d: `<b>Work done per unit mass:</b> W.D. = [V<sub>w1</sub> − (−V<sub>w2</sub>)] u/g<sub>c</sub> = (V<sub>w1</sub> + V<sub>w2</sub>) u/g<sub>c</sub> J/kg. The plus sign appears because the exit whirl is opposite to the blade motion; the unit check m/s × m/s × (N·s²/kg·m) = N·m/kg = J/kg.<br><b>In kJ/kg:</b> W.D. = (V<sub>w1</sub> + V<sub>w2</sub>) u/(1000 g<sub>c</sub>) — Eq. (2.1).<br><b>Total power:</b> multiply by the steam mass flow m<sub>s</sub> (kg/s): P = m<sub>s</sub>(V<sub>w1</sub> + V<sub>w2</sub>) u/(1000 g<sub>c</sub>) kW — Eq. (2.2).`,
      k: [`W.D. = (V<sub>w1</sub> + V<sub>w2</sub>)u/g<sub>c</sub> J/kg (2.1)`, `P = m<sub>s</sub>(V<sub>w1</sub> + V<sub>w2</sub>)u/(1000g<sub>c</sub>) kW (2.2)`, `ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> (whirls opposed)`],
      t: `Write the unit check in the first numerical of the paper; it is a quick, safe mark.`,
      tv: `<div class="eqbox hot"><b>1. Power developed</b><br>Work done per unit mass: W.D. = [V<sub>w1</sub> − (−V<sub>w2</sub>)] u/g<sub>c</sub> = (V<sub>w1</sub> + V<sub>w2</sub>) u/g<sub>c</sub> &nbsp;J/kg<br>In kJ/kg: W.D. = (V<sub>w1</sub> + V<sub>w2</sub>) u/(1000 g<sub>c</sub>) &nbsp;— (2.1)</div>
 <div class="eqbox hot">Total power: P = m<sub>s</sub> (V<sub>w1</sub> + V<sub>w2</sub>) u/(1000 g<sub>c</sub>) &nbsp;kJ/s or kW &nbsp;— (2.2)</div>
 <p>Unit check: [m/s + m/s] × m/s × [1/(1 kg·m/N·s²)] = m²/s² × N·s²/(kg·m) = N·m/kg = J/kg.</p>`},

    37: {i: 3,
      s: `Blade (diagram) efficiency is the work done on the blades divided by the kinetic energy of the steam entering them. For an impulse stage it is 2u(V<sub>w1</sub> + V<sub>w2</sub>)/V<sub>1</sub>².`,
      d: `<b>Blade, blading, rotor or vane efficiency η<sub>b</sub>:</b> η<sub>b</sub> = (work done on the blades per kg of steam)/(energy supplied per kg of steam) — Eq. (2.3).<br>The energy supplied is the kinetic energy of the steam at entry to the moving blades, V<sub>1</sub>²/2g<sub>c</sub> (for an impulse stage with V<sub>r1</sub> = V<sub>r2</sub>).<br>So η<sub>b</sub> = [(V<sub>w1</sub> + V<sub>w2</sub>)u/g<sub>c</sub>]/[V<sub>1</sub>²/2g<sub>c</sub>] = <b>2(V<sub>w1</sub> + V<sub>w2</sub>)u/V<sub>1</sub>²</b> — Eq. (2.4). It is also written as work done divided by the actual enthalpy drop per kg of steam.`,
      k: [`η<sub>b</sub> = work on blades/KE of steam at blade entry (2.3)`, `η<sub>b</sub> = 2(V<sub>w1</sub> + V<sub>w2</sub>)u/V<sub>1</sub>² (2.4)`, `Same as diagram efficiency and utilization factor`],
      tv: `<div class="eqbox hot"><b>2. Diagram, blading, rotor or vane efficiency (η<sub>b</sub>)</b><br>η<sub>b</sub> = (work done on blades per kg of steam)/(energy supplied per kg of steam) &nbsp;— (2.3)<br>= (power developed per kg of steam)/(total energy supplied per kg of steam)<br>= (work output from the blades per kg of steam)/(K.E. of steam at inlet to the blades per kg of steam)</div>
 <p>Total energy supplied per kg of steam = V<sub>1</sub>²/2g<sub>c</sub> (if V<sub>r1</sub> = V<sub>r2</sub>).</p>
 <div class="eqbox hot">η<sub>b</sub> = [(V<sub>w1</sub> + V<sub>w2</sub>)u/g<sub>c</sub>]/[V<sub>1</sub>²/2g<sub>c</sub>] = (work done/kg of steam)/(actual enthalpy drop/kg of steam) = 2(V<sub>w1</sub> + V<sub>w2</sub>)u/V<sub>1</sub>² &nbsp;— (2.4)</div>`},

    38: {i: 3,
      s: `Nozzle efficiency compares the real enthalpy drop in the nozzle with the ideal one. Stage efficiency compares the work done with the ideal nozzle drop, and equals nozzle efficiency times blade efficiency.`,
      d: `<b>Nozzle efficiency η<sub>n</sub> = (actual enthalpy drop in the nozzle)/(isentropic enthalpy drop in the nozzle)</b> = (Δh)<sub>actual</sub>/(Δh)<sub>theoretical</sub> = V<sub>1</sub>²/[2g<sub>c</sub>(Δh)<sub>theoretical</sub>] — Eq. (2.5).<br><b>Gross or stage efficiency η<sub>S</sub> = (work done per kg of steam)/(theoretical enthalpy drop in the nozzle per kg of steam)</b> = [(V<sub>w1</sub> + V<sub>w2</sub>)u/g<sub>c</sub>]/(Δh)<sub>theoretical</sub> — Eq. (2.5a). Splitting it: η<sub>S</sub> = (work done/actual drop) × (actual drop/theoretical drop), that is,<br><b>η<sub>S</sub> = η<sub>b</sub> × η<sub>n</sub></b> — Eq. (2.6).`,
      k: [`η<sub>n</sub> = actual Δh/isentropic Δh = V<sub>1</sub>²/2g<sub>c</sub>(Δh)<sub>th</sub> (2.5)`, `η<sub>S</sub> = work done/theoretical Δh (2.5a)`, `η<sub>S</sub> = η<sub>b</sub> × η<sub>n</sub> (2.6)`],
      t: `"Show that stage efficiency is the product of blade and nozzle efficiencies": multiply and divide by the actual enthalpy drop. Two lines.`,
      tv: `<div class="eqbox hot"><b>3. Nozzle efficiency (η<sub>n</sub>)</b><br>η<sub>n</sub> = (actual enthalpy drop in the nozzle)/(isentropic [theoretical] enthalpy drop in the nozzle)<br>= (Δh)<sub>actual</sub>/(Δh)<sub>theoretical</sub> = V<sub>1</sub>²/[2g<sub>c</sub>(Δh)<sub>theoretical</sub>] &nbsp;— (2.5)</div>
 <div class="eqbox hot"><b>4. Gross or stage efficiency (η<sub>S</sub>)</b><br>η<sub>S</sub> = (work done per kg of steam)/(theoretical enthalpy drop in the nozzle per kg of steam)<br>= (work done per kg)/(available energy at the stage) = [(V<sub>w1</sub> + V<sub>w2</sub>)u/g<sub>c</sub>]/(Δh)<sub>theoretical</sub> &nbsp;— (2.5a)<br>∴ η<sub>S</sub> = [work done/actual enthalpy drop] × [actual enthalpy drop/theoretical enthalpy drop]<br>i.e. <b>η<sub>S</sub> = η<sub>b</sub> × η<sub>n</sub></b> &nbsp;— (2.6)</div>`},

    39: {i: 3,
      s: `Three more quantities: the axial thrust (from the change in flow velocity), the energy lost to friction in the blade passage, and the energy carried away in the exit velocity.`,
      d: `<b>5. Axial thrust:</b> F<sub>a</sub> = (V<sub>f1</sub> − V<sub>f2</sub>) m<sub>s</sub>/(g<sub>c</sub> × 1000) kN — Eq. (2.7). It is zero if V<sub>f1</sub> = V<sub>f2</sub>.<br><b>6. Energy lost to blade friction:</b> E<sub>Lf</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²) m<sub>s</sub>/(2g<sub>c</sub> × 1000) kW — Eq. (2.8). It is the loss of relative kinetic energy over the blades.<br><b>7. Energy lost at exit (leaving loss):</b> E<sub>Le</sub> = V<sub>2</sub>² m<sub>s</sub>/(2g<sub>c</sub> × 1000) kW — Eq. (2.9), the kinetic energy that leaves with the exit absolute velocity V<sub>2</sub>.`,
      k: [`F<sub>a</sub> = m<sub>s</sub>(V<sub>f1</sub> − V<sub>f2</sub>)/(1000g<sub>c</sub>) kN (2.7)`, `E<sub>Lf</sub> = m<sub>s</sub>(V<sub>r1</sub>² − V<sub>r2</sub>²)/(2000g<sub>c</sub>) kW (2.8)`, `E<sub>Le</sub> = m<sub>s</sub>V<sub>2</sub>²/(2000g<sub>c</sub>) kW (2.9)`],
      tv: `<div class="eqbox hot"><b>5. Axial thrust (F<sub>a</sub>)</b><br>F<sub>a</sub> = (V<sub>f1</sub> − V<sub>f2</sub>) m<sub>s</sub>/(g<sub>c</sub> × 1000) &nbsp;kN &nbsp;— (2.7)</div>
 <div class="eqbox hot"><b>6. Energy lost in the blade passage due to friction (E<sub>Lf</sub>)</b><br>E<sub>Lf</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²) m<sub>s</sub>/(2g<sub>c</sub> × 1000) &nbsp;kW &nbsp;— (2.8)</div>
 <div class="eqbox hot"><b>7. Energy lost at exit (energy equivalent to the exit absolute velocity) (E<sub>Le</sub>)</b><br>E<sub>Le</sub> = V<sub>2</sub>² m<sub>s</sub>/(2g<sub>c</sub> × 1000) &nbsp;kW &nbsp;— (2.9)</div>`},

    40: {i: 2,
      s: `A recap of the velocity triangles: friction reduces the exit relative velocity through K, and the axial thrust comes from the difference in flow velocity.`,
      d: `The triangles are built from the absolute velocities (V<sub>1</sub>, V<sub>2</sub>), the blade speed u and the relative velocities (V<sub>r1</sub>, V<sub>r2</sub>). <b>Theoretical (pure impulse):</b> no friction, so V<sub>r2</sub> = V<sub>r1</sub>. <b>Practical:</b> friction lowers the exit relative velocity, V<sub>r2</sub> = K V<sub>r1</sub> with K the blade velocity coefficient. <b>Axial thrust:</b> F<sub>axial</sub> = m<sub>s</sub>(V<sub>f1</sub> − V<sub>f2</sub>); in a pure impulse turbine with symmetrical blades the thrust is very small.`,
      k: [`V<sub>r2</sub> = K V<sub>r1</sub>`, `F<sub>axial</sub> = m<sub>s</sub>(V<sub>f1</sub> − V<sub>f2</sub>)`, `Symmetrical impulse blades: thrust very small`]},

    41: {i: 3,
      s: `The next slides prove that the diagram efficiency of a simple impulse stage is greatest at a particular blade speed. Here are the assumptions.`,
      d: `<b>Derivation: maximum diagram efficiency of a De Laval impulse turbine.</b><br><b>Assumptions:</b> (1) steady one-dimensional, adiabatic flow through the blade channels; (2) symmetrical (equiangular) blades: β<sub>1</sub> = β<sub>2</sub>; (3) smooth blading, no friction: V<sub>r2</sub> = V<sub>r1</sub> (to keep it general the proof uses the blade velocity coefficient K = V<sub>r2</sub>/V<sub>r1</sub> and puts K = 1 at the end).`,
      k: [`Steady, one-dimensional, adiabatic flow`, `Equiangular blades: β<sub>1</sub> = β<sub>2</sub>`, `Start with K, set K = 1 at the end`],
      tv: `<p><b>Derivation: maximum diagram efficiency of a De Laval impulse turbine.</b></p>
 <ul><li><b>Steady, one-dimensional flow:</b> steam flow is uniform, adiabatic and continuous through the blading channels.</li>
 <li><b>Symmetrical (equiangular) blades:</b> the inlet blade angle equals the outlet blade angle, β<sub>1</sub> = β<sub>2</sub>.</li>
 <li><b>Smooth blading (zero friction):</b> no friction loss, so V<sub>r2</sub> = V<sub>r1</sub>. To keep the derivation general a blade velocity coefficient K = V<sub>r2</sub>/V<sub>r1</sub> is used first.</li></ul>`},

    42: {i: 3,
      s: `The symbols used in the proof: V<sub>1</sub>, α<sub>1</sub>, u, V<sub>r1</sub>, β<sub>1</sub>, V<sub>r2</sub>, β<sub>2</sub>, the whirl velocities and the speed ratio ρ = u/V<sub>1</sub>.`,
      d: `These are the standard symbols from the superimposed inlet and outlet velocity triangles: V<sub>1</sub> (nozzle exit velocity), α<sub>1</sub> (nozzle angle), u (mean blade speed), V<sub>r1</sub> and β<sub>1</sub> (relative velocity and angle at entry), V<sub>r2</sub> and β<sub>2</sub> (at exit), V<sub>w1</sub> and V<sub>w2</sub> (whirl velocities), and the non-dimensional speed ratio ρ = u/V<sub>1</sub>. Nothing new is introduced; the derivation uses only the vector relations of the triangles.`,
      k: [`ρ = u/V<sub>1</sub>`, `V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>`, `V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u`]},

    43: {i: 3,
      s: `Step A: the driving force per kg of steam equals the change in whirl, and the exit whirl is written in terms of K and the inlet velocity.`,
      d: `<b>Step A.</b> By Newton's second law the tangential driving force per unit mass flow (ṁ = 1 kg/s) is F<sub>t</sub> = V<sub>w1</sub> + V<sub>w2</sub> = ΔV<sub>w</sub>.<br><b>Inlet:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>, and V<sub>r1</sub>cos β<sub>1</sub> = V<sub>w1</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u.<br><b>Outlet:</b> V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u. With K = V<sub>r2</sub>/V<sub>r1</sub> and β<sub>1</sub> = β<sub>2</sub>: V<sub>w2</sub> = K V<sub>r1</sub>cos β<sub>1</sub> − u, and using the inlet relation, <b>V<sub>w2</sub> = K(V<sub>1</sub>cos α<sub>1</sub> − u) − u</b>.`,
      k: [`F<sub>t</sub> = V<sub>w1</sub> + V<sub>w2</sub> = ΔV<sub>w</sub>`, `V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u`, `V<sub>w2</sub> = K(V<sub>1</sub>cos α<sub>1</sub> − u) − u`],
      tv: `<p><b>Step A: the rate of work done.</b> The tangential driving force on the rotor per unit mass flow of steam (ṁ = 1 kg/s) is, by Newton's second law, the change of tangential momentum:</p>
 <div class="eqbox">F<sub>t</sub> = V<sub>w1</sub> + V<sub>w2</sub> = ΔV<sub>w</sub></div>
 <p><b>At inlet:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>, &nbsp; V<sub>r1</sub>cos β<sub>1</sub> = V<sub>w1</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u</p>
 <p><b>At outlet:</b> V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u</p>
 <p>Using K = V<sub>r2</sub>/V<sub>r1</sub> and β<sub>1</sub> = β<sub>2</sub>: V<sub>w2</sub> = K V<sub>r1</sub>cos β<sub>1</sub> − u, and substituting the inlet relation:</p>
 <div class="eqbox hot">V<sub>w2</sub> = K(V<sub>1</sub>cos α<sub>1</sub> − u) − u</div>`},

    44: {i: 3,
      s: `Add the two whirls to get ΔV<sub>w</sub> = (1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u), then the work is u times that, and the diagram efficiency is the work divided by V<sub>1</sub>²/2.`,
      d: `<b>Change of whirl:</b> ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> + K(V<sub>1</sub>cos α<sub>1</sub> − u) − u = (V<sub>1</sub>cos α<sub>1</sub> − u) + K(V<sub>1</sub>cos α<sub>1</sub> − u) = <b>(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)</b>.<br><b>Work done per kg:</b> W = F<sub>t</sub>·u = uΔV<sub>w</sub> = u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u).<br><b>Step B. Diagram efficiency:</b> kinetic energy supplied per kg E<sub>k</sub> = ½V<sub>1</sub>², so η<sub>d</sub> = W/E<sub>k</sub> = <b>2u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub>²</b>.`,
      k: [`ΔV<sub>w</sub> = (1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)`, `W = u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)`, `η<sub>d</sub> = 2u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub>²`],
      tv: `<p>Sum the inlet and outlet whirl components:</p>
 <div class="eqbox">ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> + K(V<sub>1</sub>cos α<sub>1</sub> − u) − u = (V<sub>1</sub>cos α<sub>1</sub> − u) + K(V<sub>1</sub>cos α<sub>1</sub> − u)<br><b>ΔV<sub>w</sub> = (1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)</b></div>
 <p>The diagram power or work done per unit mass flow of steam is</p>
 <div class="eqbox">W = F<sub>t</sub>·u = uΔV<sub>w</sub> = u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)</div>
 <p><b>Step B: diagram efficiency (η<sub>d</sub>).</b> The kinetic energy supplied by the nozzle per unit mass of steam is E<sub>k</sub> = ½V<sub>1</sub>². Then</p>
 <div class="eqbox hot">η<sub>d</sub> = W/E<sub>k</sub> = u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)/(½V<sub>1</sub>²) = 2u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub>²</div>`},

    45: {i: 3,
      s: `Write the efficiency in terms of the speed ratio ρ = u/V<sub>1</sub>: it is η<sub>d</sub> = 2(1 + K)ρ(cos α<sub>1</sub> − ρ). Differentiating with respect to ρ gives the best speed ratio, ρ<sub>opt</sub> = cos α<sub>1</sub>/2.`,
      d: `Divide the terms in brackets by V<sub>1</sub>: η<sub>d</sub> = 2(1 + K)(u/V<sub>1</sub>)(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub> = <b>2(1 + K)ρ(cos α<sub>1</sub> − ρ)</b>.<br><b>Step C, the condition for maximum efficiency:</b> for a fixed nozzle angle differentiate with respect to ρ: dη<sub>d</sub>/dρ = 2(1 + K)(cos α<sub>1</sub> − 2ρ) = 0. Since 2(1 + K) ≠ 0, cos α<sub>1</sub> − 2ρ = 0, so <b>ρ<sub>opt</sub> = (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>/2</b>.<br><b>Physical meaning:</b> the diagram efficiency of a simple impulse turbine is a maximum when the blade speed equals half the tangential component of the steam inlet velocity (u = ½V<sub>1</sub>cos α<sub>1</sub> = ½V<sub>w1</sub>).`,
      k: [`η<sub>d</sub> = 2(1 + K)ρ(cos α<sub>1</sub> − ρ)`, `dη<sub>d</sub>/dρ = 0 ⇒ cos α<sub>1</sub> − 2ρ = 0`, `ρ<sub>opt</sub> = cos α<sub>1</sub>/2`, `u<sub>opt</sub> = V<sub>w1</sub>/2`],
      t: `The meaning "u = half the whirl component of V<sub>1</sub>" is often the one-line answer asked for.`,
      tv: `<p>To express this in terms of the blade-speed ratio ρ = u/V<sub>1</sub>, divide the terms inside the parentheses by V<sub>1</sub>:</p>
 <div class="eqbox">η<sub>d</sub> = 2(1 + K)(u/V<sub>1</sub>)[(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub>] = <b>2(1 + K)ρ(cos α<sub>1</sub> − ρ)</b></div>
 <p><b>Step C: the condition for maximum efficiency.</b> For a fixed nozzle angle α<sub>1</sub>, differentiate η<sub>d</sub> with respect to ρ and put the derivative equal to zero:</p>
 <div class="eqbox">d(η<sub>d</sub>)/dρ = 0 &nbsp;⇒&nbsp; d/dρ[2(1 + K)(ρcos α<sub>1</sub> − ρ²)] = 2(1 + K)(cos α<sub>1</sub> − 2ρ) = 0</div>
 <p>Since 2(1 + K) ≠ 0: cos α<sub>1</sub> − 2ρ = 0, so</p>
 <div class="eqbox hot">ρ<sub>opt</sub> = (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>/2</div>
 <p><b>Physical significance:</b> for a simple impulse turbine, the maximum diagram efficiency is reached when the blade speed is exactly half the tangential component of the steam inlet velocity.</p>`},

    46: {i: 3,
      s: `Put the best ρ back into the efficiency: η<sub>d,max</sub> = ((1 + K)/2) cos² α<sub>1</sub>. With no friction (K = 1) this is cos² α<sub>1</sub>.`,
      d: `<b>Step D:</b> substitute ρ<sub>opt</sub> = cos α<sub>1</sub>/2: η<sub>d,max</sub> = 2(1 + K)(cos α<sub>1</sub>/2)(cos α<sub>1</sub> − cos α<sub>1</sub>/2) = 2(1 + K)(cos α<sub>1</sub>/2)(cos α<sub>1</sub>/2) = <b>((1 + K)/2) cos² α<sub>1</sub></b>.<br><b>Step E, frictionless case (K = 1):</b> η<sub>d,max</sub> = ((1 + 1)/2) cos² α<sub>1</sub> = <b>cos² α<sub>1</sub></b>. So the highest possible diagram efficiency of a simple impulse stage is cos² α<sub>1</sub>: it increases as the nozzle angle α<sub>1</sub> decreases (α<sub>1</sub> = 20° gives 0.883).`,
      k: [`η<sub>d,max</sub> = ((1 + K)/2)cos² α<sub>1</sub>`, `K = 1: η<sub>d,max</sub> = cos² α<sub>1</sub>`, `Small α<sub>1</sub> → high efficiency`, `Friction (K &lt; 1) lowers the maximum`],
      t: `This is one of the most repeated derivations: write Steps A to E in order, with the final result boxed.`,
      tv: `<p><b>Step D: substituting for maximum diagram efficiency.</b> Substitute ρ<sub>opt</sub> = cos α<sub>1</sub>/2 in the general equation:</p>
 <div class="eqbox">η<sub>d,max</sub> = 2(1 + K)(cos α<sub>1</sub>/2)(cos α<sub>1</sub> − cos α<sub>1</sub>/2) = 2(1 + K)(cos α<sub>1</sub>/2)(cos α<sub>1</sub>/2)<br><b>η<sub>d,max</sub> = ((1 + K)/2) cos² α<sub>1</sub></b></div>
 <p><b>Step E: the frictionless case (K = 1).</b> For an ideal stage with perfectly smooth blading:</p>
 <div class="eqbox hot">η<sub>d,max</sub> = ((1 + 1)/2) cos² α<sub>1</sub> = cos² α<sub>1</sub></div>
 <p>This completes the proof that the maximum possible diagram efficiency of a simple impulse turbine is cos² α<sub>1</sub>.</p>`},

    47: {i: 2,
      s: `A graph of blade efficiency against speed ratio. It is a parabola: zero at ρ = 0, a peak at ρ = cos α<sub>1</sub>/2 and zero again at ρ = cos α<sub>1</sub>.`,
      d: `Check against the formula η<sub>d</sub> = 2(1 + K)ρ(cos α<sub>1</sub> − ρ): it is zero at ρ = 0 (the blade is not moving, so no work) and at ρ = cos α<sub>1</sub> (u = V<sub>w1</sub>: the steam has no relative whirl to give), with the maximum midway. The curve is parabolic in ρ.`,
      k: [`Parabola in ρ`, `Zero at ρ = 0 and ρ = cos α<sub>1</sub>`, `Peak at ρ = cos α<sub>1</sub>/2`]},

    48: {i: 3,
      s: `A summary of the derivation: efficiency depends on the speed ratio; the best speed ratio is cos α<sub>1</sub>/2; the best efficiency is cos² α<sub>1</sub> for K = 1.`,
      d: `<b>Blade speed ratio ρ</b> = u/V<sub>1</sub> governs the performance. <b>Condition for maximum efficiency</b> for a single-stage impulse turbine: ρ<sub>opt</sub> = cos α<sub>1</sub>/2. <b>Maximum diagram efficiency</b> at that ratio: η<sub>d,max</sub> = ((1 + K)/2)cos² α<sub>1</sub> = cos² α<sub>1</sub> for K = 1. <b>Plot:</b> η<sub>d</sub> against ρ is a parabola that starts at zero, peaks at ρ<sub>opt</sub> and falls back to zero. <b>Practical meaning:</b> a single-stage turbine needs a blade speed of about V<sub>1</sub>cos α<sub>1</sub>/2, which for a big pressure drop is very high; this is why compounding is used.`,
      k: [`ρ<sub>opt</sub> = cos α<sub>1</sub>/2`, `η<sub>d,max</sub> = ((1 + K)/2)cos² α<sub>1</sub>`, `Single stage: blade speed too high → compounding`],
      tv: `<ul><li><b>Blade speed ratio (ρ):</b> performance is governed by this ratio, the blade velocity u divided by the nozzle exit velocity V<sub>1</sub>.</li>
 <li><b>Condition for maximum efficiency</b> (single-stage impulse turbine): ρ<sub>opt</sub> = cos α<sub>1</sub>/2.</li>
 <li><b>Maximum diagram efficiency</b> at the optimum ratio: η<sub>d,max</sub> = ((1 + K)/2) cos² α<sub>1</sub> (= cos² α<sub>1</sub> for K = 1).</li>
 <li><b>Efficiency versus blade speed ratio:</b> a parabolic curve; it starts at zero, peaks exactly at the optimum ratio and falls back to zero.</li></ul>`},

    49: {i: 3,
      s: `Numerical 1: a single-row impulse stage. You are given the diameter, speed, nozzle velocity and angle, equiangular blades, a friction factor and the axial thrust, and you find the power.`,
      d: `<b>Question (10 marks, Dec 2023 and Jun 2025):</b> a single-row impulse stage, mean blade ring diameter 800 mm, 3000 rpm; steam leaves the nozzles at 300 m/s at a nozzle angle of 20°; blades equiangular, friction factor 0.86. Find the power developed in the blading when the axial thrust on the blades is 140 N.<br><b>Plan:</b> blade speed → inlet triangle → outlet triangle with K = 0.86 and β<sub>2</sub> = β<sub>1</sub> → ΔV<sub>w</sub> → mass flow from the axial thrust → P = m<sub>s</sub>uΔV<sub>w</sub>. The complete worked solution is in <b>Numericals, N1</b> of this unit.`,
      k: [`Given: D = 0.8 m, N = 3000 rpm, V<sub>1</sub> = 300 m/s, α<sub>1</sub> = 20°, K = 0.86, F = 140 N`, `Axial thrust gives the mass flow`, `Answer: 355.7 kW`],
      t: `Asked twice (Dec 2023, Jun 2025): learn the six steps in the worked solution.`},

    50: {i: 3,
      s: `Solution, part 1: list the given data, find the blade speed, and begin the inlet triangle by finding the whirl velocity.`,
      d: `<b>Given:</b> D = 0.8 m, N = 3000 rpm, V<sub>1</sub> = 300 m/s, α<sub>1</sub> = 20°, equiangular blades (β<sub>1</sub> = β<sub>2</sub>), K = V<sub>r2</sub>/V<sub>r1</sub> = 0.86, F<sub>axial</sub> = 140 N.<br><b>Blade speed:</b> u = πDN/60 = π × 0.8 × 3000/60 = 125.66 m/s.<br><b>Whirl at inlet:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 300 cos 20° = 281.91 m/s.`,
      k: [`u = πDN/60 = 125.66 m/s`, `V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 281.91 m/s`]},

    51: {i: 3,
      s: `Solution, part 2: finish the inlet triangle (V<sub>f1</sub>, V<sub>rw1</sub>, V<sub>r1</sub>, β<sub>1</sub>), then start the outlet triangle using K.`,
      d: `<b>Flow velocity:</b> V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub> = 300 sin 20° = 102.61 m/s. <b>Relative whirl:</b> V<sub>rw1</sub> = V<sub>w1</sub> − u = 281.91 − 125.66 = 156.25 m/s. <b>Relative velocity:</b> V<sub>r1</sub> = √(156.25² + 102.61²) = 186.93 m/s. <b>Blade angle:</b> tan β<sub>1</sub> = 102.61/156.25 = 0.6567, so β<sub>1</sub> = 33.29°.<br><b>Outlet:</b> β<sub>2</sub> = β<sub>1</sub> = 33.29° (equiangular) and V<sub>r2</sub> = K V<sub>r1</sub> = 0.86 × 186.93 = 160.76 m/s.`,
      k: [`V<sub>f1</sub> = 102.61 m/s, V<sub>r1</sub> = 186.93 m/s`, `β<sub>1</sub> = β<sub>2</sub> = 33.29°`, `V<sub>r2</sub> = 160.76 m/s`]},

    52: {i: 3,
      s: `Solution, part 3: the outlet flow and whirl velocities, then the mass flow from the axial thrust, and the change in whirl.`,
      d: `<b>Outlet flow:</b> V<sub>f2</sub> = V<sub>r2</sub>sin β<sub>2</sub> = 160.76 sin 33.29° = 88.24 m/s. <b>Relative whirl at outlet:</b> V<sub>rw2</sub> = V<sub>r2</sub>cos β<sub>2</sub> = 134.38 m/s. <b>Change of whirl:</b> ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 156.25 + 134.38 = 290.63 m/s.<br><b>Mass flow from the axial thrust:</b> F<sub>axial</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>), so 140 = ṁ(102.61 − 88.24), ṁ = 9.74 kg/s.`,
      k: [`V<sub>f2</sub> = 88.24 m/s`, `ΔV<sub>w</sub> = 290.63 m/s`, `ṁ = F/(V<sub>f1</sub> − V<sub>f2</sub>) = 9.74 kg/s`]},

    53: {i: 3,
      s: `Final step: power = mass flow × blade speed × change of whirl = 355.71 kW.`,
      d: `<b>Power:</b> P = ṁ u ΔV<sub>w</sub> = 9.74 × 125.66 × 290.63 = 355 711 W = <b>355.71 kW</b>. <b>Final answer:</b> the power developed in the blading is 355.71 kW (carrying all the digits gives 355.9 kW).`,
      k: [`P = ṁuΔV<sub>w</sub> = 355.71 kW`]},

    54: {i: 3,
      s: `Numerical 2: given the utilization factor and friction factor you find the blade angles, power and axial thrust. Here the exit whirl comes from the utilization factor.`,
      d: `<b>Question:</b> a stage of an impulse turbine, mean blade diameter 75 cm, 3500 rpm. Steam leaves the nozzle at 275 m/s inclined 20° to the plane of the wheel. The utilization factor is 0.9 and the relative velocity at the rotor exit is 0.9 of that at the inlet. Find the inlet and exit rotor angles, the power for 2 kg/s, and the axial thrust.<br><b>Given:</b> d = 0.75 m, N = 3500 rpm, V<sub>1</sub> = 275 m/s, α<sub>1</sub> = 20°, ε = 0.9, K = 0.9, ṁ = 2 kg/s.<br><b>Blade speed:</b> u = πdN/60 = π × 0.75 × 3500/60 = 137.44 m/s.`,
      k: [`Given: ε = 0.9, K = 0.9, ṁ = 2 kg/s`, `u = 137.44 m/s`, `Unknowns: β<sub>1</sub>, β<sub>2</sub>, P, F<sub>a</sub>`],
      t: `Here the blades are NOT equiangular: β<sub>2</sub> is found from the utilization factor.`},

    55: {i: 3,
      s: `Inlet triangle and K for Numerical 2: V<sub>w1</sub> = 258.42, V<sub>f1</sub> = 94.06, β<sub>1</sub> = 37.86°, V<sub>r1</sub> = 153.24 and V<sub>r2</sub> = 137.92 m/s.`,
      d: `<b>Inlet:</b> V<sub>w1</sub> = 275 cos 20° = 258.42 m/s; V<sub>f1</sub> = 275 sin 20° = 94.06 m/s. tan β<sub>1</sub> = V<sub>f1</sub>/(V<sub>w1</sub> − u) = 94.06/(258.42 − 137.44) = 94.06/120.98 = 0.7775, so <b>β<sub>1</sub> = 37.86°</b>. V<sub>r1</sub> = √(94.06² + 120.98²) = 153.24 m/s.<br><b>Outlet relative velocity:</b> V<sub>r2</sub> = K V<sub>r1</sub> = 0.9 × 153.24 = 137.92 m/s.`,
      k: [`β<sub>1</sub> = 37.86°`, `V<sub>r1</sub> = 153.24 m/s`, `V<sub>r2</sub> = K V<sub>r1</sub> = 137.92 m/s`]},

    56: {i: 3,
      s: `The utilization factor gives the exit whirl: V<sub>w2</sub> = −10.81 m/s, and then the exit blade angle is β<sub>2</sub> = 23.35°.`,
      d: `<b>Exit whirl from ε:</b> ε = 2u(V<sub>w1</sub> + V<sub>w2</sub>)/V<sub>1</sub>², so 0.9 = 2 × 137.44 × (258.42 + V<sub>w2</sub>)/275², giving 258.42 + V<sub>w2</sub> = 247.61 and <b>V<sub>w2</sub> = −10.81 m/s</b>. The negative sign means the steam still has a small whirl in the direction of the blade motion at exit (it has not been fully reversed), typical of a fast rotor.<br><b>Exit blade angle:</b> V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u gives −10.81 = 137.92 cos β<sub>2</sub> − 137.44, so cos β<sub>2</sub> = 126.63/137.92 = 0.9181 and <b>β<sub>2</sub> = 23.35°</b>.`,
      k: [`ε = 2u(V<sub>w1</sub> + V<sub>w2</sub>)/V<sub>1</sub>² ⇒ V<sub>w2</sub> = −10.81 m/s`, `cos β<sub>2</sub> = 126.63/137.92`, `β<sub>2</sub> = 23.35° (≠ β<sub>1</sub>)`]},

    57: {i: 3,
      s: `Power and axial thrust for Numerical 2: ΔV<sub>w</sub> = 247.61 m/s, P = 68.06 kW, V<sub>f2</sub> = 54.66 m/s and F<sub>a</sub> = 78.8 N.`,
      d: `<b>Change of whirl:</b> ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = 258.42 − 10.81 = 247.61 m/s. <b>Power:</b> P = ṁuΔV<sub>w</sub> = 2 × 137.44 × 247.61 = 68 062 W = <b>68.06 kW</b>. <b>Exit flow velocity:</b> V<sub>f2</sub> = V<sub>r2</sub>sin β<sub>2</sub> = 137.92 sin 23.35° = 54.66 m/s. <b>Axial thrust:</b> F<sub>a</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>) = 2 × (94.06 − 54.66) = <b>78.8 N</b>.`,
      k: [`ΔV<sub>w</sub> = 247.61 m/s`, `P = ṁuΔV<sub>w</sub> = 68.06 kW`, `F<sub>a</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>) = 78.8 N`]},

    58: {i: 2,
      s: `Final answers of Numerical 2: rotor angles 37.86° and 23.35°, power 68.06 kW and axial thrust 78.8 N.`,
      d: `<b>Final answers:</b> inlet rotor angle β<sub>1</sub> = 37.86°, exit rotor angle β<sub>2</sub> = 23.35°, power output 68.06 kW, axial thrust 78.8 N. The full solution with the reasoning at each step is in <b>Numericals, N2</b>.`,
      k: [`β<sub>1</sub> = 37.86°, β<sub>2</sub> = 23.35°`, `P = 68.06 kW`, `F<sub>a</sub> = 78.8 N`]}
  });
})();
