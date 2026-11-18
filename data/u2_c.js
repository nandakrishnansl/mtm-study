/* Unit II content, slides 59-84 (DRAFT, teacher to verify): axial reaction turbines, Parsons derivation, Parsons numericals, need for compounding */
(function () {
  Object.assign(MTM.c.u2.sl, {
    59: {i: 3,
      s: `In a reaction turbine the steam keeps expanding as it passes through both the fixed and the moving blades, so both act as nozzles. In a 50 % reaction stage the enthalpy drop is shared equally between fixed and moving rows.`,
      d: `<b>Core mechanism:</b> steam expands continuously through the fixed guide blades and the moving rotor blades; both act as nozzles.<br><b>Design consequence:</b> the continuous pressure drop increases the specific volume of the steam, so the rotor diameter and the blade height must grow progressively after each stage to accommodate the expansion.<br><b>Energy (h–s diagram):</b> the total adiabatic enthalpy drop of the stage is divided between the stator (fixed blades) and the rotor (moving blades). In a <b>50 % reaction stage</b> the drop is split exactly equally. The output comes from the combination of the <b>impulse force</b> (from the incoming steam) and the <b>reaction force</b> (from the steam accelerating out of the moving blades).`,
      k: [`Both fixed and moving blades act as nozzles`, `Blade height and diameter grow stage by stage`, `50 % reaction: half the Δh in fixed, half in moving`, `Work = impulse force + reaction force`],
      t: `Reaction = pressure drop in the moving blades too. Degree of reaction R = Δh in the moving blades ÷ Δh in the whole stage.`},

    60: {i: 3,
      s: `A reaction turbine rotor is a plain drum with the blades fixed on its surface. A single impulse wheel is often fitted at the HP end, and a dummy (balance) piston is used to cancel the large axial thrust.`,
      d: `<b>Drum construction:</b> the pressure drop per row is small, so the thrust per row is small and the rotor can be a plain <b>drum</b> carrying the moving blades on its outer surface, instead of separate bladed discs.<br><b>Impulse first stage:</b> marine reaction turbines often have one impulse (Curtis or Rateau) wheel at the HP end. It drops the steam to a moderate pressure before the long drum of reaction blading, which keeps the turbine short and the number of reaction stages manageable.<br><b>Dummy (balance) piston:</b> because pressure acts on the full drum area at every stage, a large axial thrust builds up along the rotor. A dummy piston, with inlet-pressure steam on one face and condenser (or lower) pressure on the other, is fitted to oppose this thrust.`,
      k: [`Plain drum rotor, blades on the surface`, `HP end: one impulse (Curtis/Rateau) wheel`, `Dummy piston balances the axial thrust`],
      t: `Why a dummy piston? Because the reaction rotor has a big net axial thrust towards the exhaust end. Say this in one line.`},

    61: {i: 2,
      s: `Figure 1: the drum rotor of an impulse-reaction turbine, showing the HP impulse wheel, the dummy (balance) piston and the long reaction-bladed drum.`,
      d: `Find in the figure the three features from the previous slide: the single impulse wheel at the high-pressure end, the long drum carrying rows of reaction blading that grow longer toward the exhaust, and the dummy piston at the HP end of the drum that balances the thrust.`,
      k: [`HP impulse wheel + reaction drum`, `Blades lengthen toward the exhaust`, `Dummy piston at the HP end`]},

    62: {i: 2,
      s: `Figure 2: the velocity triangles for the reaction turbine.`,
      d: `In a reaction stage the inlet and outlet triangles are both drawn on the moving blade; because the moving blades also expand the steam, V<sub>r2</sub> is larger than V<sub>r1</sub>. For the 50 % reaction case the two triangles are mirror images (next slides).`,
      k: [`Reaction: V<sub>r2</sub> &gt; V<sub>r1</sub>`, `50 %: triangles are mirror images`]},

    63: {i: 3,
      s: `In a 50 % reaction (Parsons) stage the fixed and moving blades have the same shape, reversed, so the velocity triangles are mirror images. Unlike impulse blades, reaction blades produce a large axial thrust.`,
      d: `<b>50 % reaction stage (Parsons):</b> fixed and moving blades have identical aerofoil sections, reversed in direction. This gives perfectly symmetrical triangles: <b>absolute inlet = relative exit (V<sub>1</sub> = V<sub>r2</sub>), relative inlet = absolute exit (V<sub>r1</sub> = V<sub>2</sub>)</b>, and α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>.<br><b>Axial thrust:</b> unlike impulse turbines, reaction turbines develop substantial axial thrust because of the pressure drop across the moving blades. <b>Reaction thrust = (pressure drop) × (blade annulus area)</b>. It acts strongly toward the exhaust end, often requiring a dummy cylinder (piston) to balance it.`,
      k: [`V<sub>1</sub> = V<sub>r2</sub> and V<sub>r1</sub> = V<sub>2</sub>`, `α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>`, `Thrust = Δp × annulus area`, `Thrust acts toward the exhaust end`],
      t: `The mirror-image property is what makes every Parsons numerical short: write α<sub>1</sub> = β<sub>2</sub> and V<sub>1</sub> = V<sub>r2</sub> at once.`},

    64: {i: 2,
      s: `Figure 3: the general nomenclature for the inlet and outlet velocity triangles of an axial turbine stage. For a 50 % reaction stage the outlet triangle mirrors the inlet one.`,
      d: `The figure labels the blade speed, the absolute velocities (V), the relative velocities (V<sub>r</sub>), and the angles α (absolute) and β (relative) at the inlet and the outlet. For the Parsons stage α<sub>1</sub> = β<sub>2</sub> and β<sub>1</sub> = α<sub>2</sub>.`,
      k: [`α: absolute angles; β: relative angles`, `Parsons: α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>`]},

    65: {i: 2,
      s: `Figure 4: the velocity triangles of the reaction turbine, drawn as a pair of mirror-image triangles.`,
      d: `Draw the inlet triangle first (V<sub>1</sub> at α<sub>1</sub>, u, V<sub>r1</sub> at β<sub>1</sub>), then reflect it for the outlet (V<sub>r2</sub> = V<sub>1</sub> at β<sub>2</sub> = α<sub>1</sub>, u, V<sub>2</sub> = V<sub>r1</sub> at α<sub>2</sub> = β<sub>1</sub>). The flow velocity is the same at both: V<sub>f1</sub> = V<sub>f2</sub>.`,
      k: [`Draw inlet, then mirror it`, `V<sub>f1</sub> = V<sub>f2</sub>`]},

    66: {i: 3,
      s: `Derivation: the maximum diagram efficiency of a Parsons (50 % reaction) turbine. The assumptions are symmetrical blading, mirror-image triangles and no friction.`,
      d: `<b>Assumptions:</b> (1) <b>symmetrical (50 % reaction) blading</b>: fixed and moving blades are mirror images, α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>f1</sub> = V<sub>f2</sub>. (2) <b>Consequence of symmetry:</b> V<sub>1</sub> = V<sub>r2</sub> and V<sub>r1</sub> = V<sub>2</sub>. (3) <b>Smooth, frictionless blading:</b> no blade friction loss, K = 1.`,
      k: [`α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>f1</sub> = V<sub>f2</sub>`, `V<sub>1</sub> = V<sub>r2</sub>, V<sub>r1</sub> = V<sub>2</sub>`, `K = 1 (no friction)`],
      tv: `<p><b>Derivation: maximum diagram efficiency of a Parson's (50 % reaction) turbine</b></p>
 <ul><li><b>Symmetrical (50 % reaction) blading:</b> fixed and moving blades are mirror images of each other: α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>f1</sub> = V<sub>f2</sub>.</li>
 <li><b>Consequence of symmetry:</b> the absolute inlet velocity equals the relative outlet velocity, and vice versa: V<sub>1</sub> = V<sub>r2</sub> and V<sub>r1</sub> = V<sub>2</sub>.</li>
 <li><b>Smooth, frictionless blading:</b> no blade-friction losses are considered in this ideal derivation (blade velocity coefficient K = 1).</li></ul>`},

    67: {i: 3,
      s: `Step A: the work done per kg is u(2V<sub>1</sub>cos α<sub>1</sub> − u), which in terms of the speed ratio is V<sub>1</sub>²(2ρ cos α<sub>1</sub> − ρ²). Step B starts the energy supplied.`,
      d: `<b>Step A, work done per unit mass flow.</b> At inlet V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>. At outlet, using V<sub>r2</sub> = V<sub>1</sub> and β<sub>2</sub> = α<sub>1</sub>: V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u.<br>Euler: W = u(V<sub>w1</sub> + V<sub>w2</sub>) = u[V<sub>1</sub>cos α<sub>1</sub> + (V<sub>1</sub>cos α<sub>1</sub> − u)] = <b>u(2V<sub>1</sub>cos α<sub>1</sub> − u)</b>.<br>With ρ = u/V<sub>1</sub>: <b>W = V<sub>1</sub>²(2ρ cos α<sub>1</sub> − ρ²)</b> — Eq. (2.10).<br><b>Step B, energy supplied per stage.</b> In a reaction stage the steam entering the moving blades already carries kinetic energy V<sub>1</sub>²/2 from the fixed blades, and a further amount is made available by the continued expansion in the moving row, proportional to the whirl kinetic energy V<sub>w1</sub>²/2.`,
      k: [`V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − u`, `W = u(2V<sub>1</sub>cos α<sub>1</sub> − u)`, `W = V<sub>1</sub>²(2ρ cos α<sub>1</sub> − ρ²) (2.10)`],
      tv: `<p><b>Step A: work done per unit mass flow.</b></p>
 <p>At inlet, the whirl component of the absolute velocity is V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>.</p>
 <p>At outlet, using V<sub>r2</sub> = V<sub>1</sub> and β<sub>2</sub> = α<sub>1</sub> (symmetry): V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u.</p>
 <p>The work done per unit mass flow (Euler's equation) is:</p>
 <div class="eqbox">W = u(V<sub>w1</sub> + V<sub>w2</sub>) = u[V<sub>1</sub>cos α<sub>1</sub> + (V<sub>1</sub>cos α<sub>1</sub> − u)]<br>W = u(2V<sub>1</sub>cos α<sub>1</sub> − u)</div>
 <p>Introducing the blade speed ratio ρ = u/V<sub>1</sub>:</p>
 <div class="eqbox hot">W = V<sub>1</sub>² (2ρ cos α<sub>1</sub> − ρ²) &nbsp;— (2.10)</div>
 <p><b>Step B: energy supplied per stage.</b> For a reaction stage, the steam entering the moving blades already carries kinetic energy V<sub>1</sub>²/2 from the fixed (guide) blades, <i>and</i> a further amount is made available by the continued expansion (reaction) within the moving row itself, proportional to the whirl kinetic energy V<sub>w1</sub>²/2.</p>`},

    68: {i: 3,
      s: `The energy supplied per stage is E = (V<sub>1</sub>² + V<sub>w1</sub>²)/2 = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>). Dividing the work by it gives the diagram efficiency, which is greatest at ρ = cos α<sub>1</sub>.`,
      d: `<b>Energy supplied:</b> E = (V<sub>1</sub>² + V<sub>w1</sub>²)/2 = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>) — Eq. (2.11).<br><b>Step C, diagram efficiency:</b> η<sub>d</sub> = W/E = <b>2(2ρ cos α<sub>1</sub> − ρ²)/(1 + cos² α<sub>1</sub>)</b> — Eq. (2.12).<br><b>Step D, condition for maximum:</b> for a fixed α<sub>1</sub>, dη<sub>d</sub>/dρ = 2(2cos α<sub>1</sub> − 2ρ)/(1 + cos² α<sub>1</sub>) = 0, so cos α<sub>1</sub> − ρ = 0 and <b>ρ<sub>opt</sub> = (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub></b> — Eq. (2.13).<br><b>Meaning:</b> unlike the impulse stage (optimum at ρ = cos α<sub>1</sub>/2) a reaction stage is most efficient at a <i>higher</i> blade speed ratio: the blade speed nearly matches the whirl component of the steam velocity.`,
      k: [`E = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>) (2.11)`, `η<sub>d</sub> = 2(2ρ cos α<sub>1</sub> − ρ²)/(1 + cos² α<sub>1</sub>) (2.12)`, `ρ<sub>opt</sub> = cos α<sub>1</sub> (2.13)`, `Impulse: cos α<sub>1</sub>/2; reaction: cos α<sub>1</sub>`],
      tv: `<p>The standard result for the total energy supplied per stage of a 50 % reaction turbine is therefore:</p>
 <div class="eqbox">E = (V<sub>1</sub>² + V<sub>w1</sub>²)/2 = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>) &nbsp;— (2.11)</div>
 <p><b>Step C: diagram efficiency.</b> Dividing the work done (Eq. 2.10) by the energy supplied (Eq. 2.11):</p>
 <div class="eqbox hot">η<sub>d</sub> = W/E = 2(2ρ cos α<sub>1</sub> − ρ²)/(1 + cos² α<sub>1</sub>) &nbsp;— (2.12)</div>
 <p><b>Step D: condition for maximum efficiency.</b> Differentiating η<sub>d</sub> with respect to ρ (for a fixed nozzle angle α<sub>1</sub>) and equating to zero:</p>
 <div class="eqbox">dη<sub>d</sub>/dρ = 2(2 cos α<sub>1</sub> − 2ρ)/(1 + cos² α<sub>1</sub>) = 0 &nbsp;⟹&nbsp; <b>ρ<sub>opt</sub> = (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub></b> &nbsp;— (2.13)</div>
 <p><b>Physical significance:</b> unlike the impulse stage (optimum at ρ = cos α<sub>1</sub>/2), a reaction stage runs most efficiently at a <i>higher</i> blade speed ratio – the blade speed nearly matches the whirl component of the steam velocity.</p>`},

    69: {i: 3,
      s: `Step E: put ρ = cos α<sub>1</sub> back in and the maximum diagram efficiency is 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>), which is always greater than the impulse stage's cos² α<sub>1</sub>.`,
      d: `<b>Step E:</b> substituting ρ<sub>opt</sub> = cos α<sub>1</sub> into Eq. (2.12): η<sub>d,max</sub> = 2(2cos² α<sub>1</sub> − cos² α<sub>1</sub>)/(1 + cos² α<sub>1</sub>) = <b>2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)</b> — Eq. (2.14).<br>This is strictly greater than the impulse stage's cos² α<sub>1</sub> for every α<sub>1</sub> (because 2/(1 + cos² α<sub>1</sub>) &gt; 1), so a reaction stage is inherently more efficient at its own optimum operating point. <i>Check at α<sub>1</sub> = 20°:</i> cos² 20° = 0.883; impulse 88.3 %; reaction 2 × 0.883/1.883 = 93.8 %.`,
      k: [`η<sub>d,max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>) (2.14)`, `Greater than cos² α<sub>1</sub> for every α<sub>1</sub>`, `α<sub>1</sub> = 20°: impulse 88.3 %, reaction 93.8 %`],
      t: `Boxed final result (2.14) plus the one-line comparison with the impulse stage earns the last mark.`,
      tv: `<p><b>Step E: maximum diagram efficiency.</b> Substituting ρ<sub>opt</sub> = cos α<sub>1</sub> into Eq. (2.12):</p>
 <div class="eqbox">η<sub>d,max</sub> = 2(2cos² α<sub>1</sub> − cos² α<sub>1</sub>)/(1 + cos² α<sub>1</sub>)</div>
 <div class="eqbox hot">η<sub>d,max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>) &nbsp;— (2.14)</div>
 <p>This is strictly greater than the impulse stage's cos² α<sub>1</sub> for every value of α<sub>1</sub>, confirming that a reaction stage is inherently more efficient at its own optimum operating point.</p>`},

    70: {i: 3,
      s: `Summary of the reaction-stage result: the best blade speed ratio is cos α<sub>1</sub>, the best efficiency is 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>), and the efficiency curve is flatter, so it stays high over a wider range of speeds.`,
      d: `<b>Condition for maximum efficiency:</b> reached when the blade speed ratio ρ equals cos α<sub>1</sub>, i.e. the blade speed matches the tangential component of the absolute steam velocity. <b>Maximum diagram efficiency:</b> 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>). <b>Efficiency against blade speed ratio:</b> a parabolic curve that peaks at a higher ρ (cos α<sub>1</sub>) than for the impulse stage, and is distinctly flatter. <b>Operational advantage:</b> the flatter curve lets the reaction turbine hold a high efficiency over a much wider range of off-design operating speeds, which suits a ship that changes speed.`,
      k: [`ρ<sub>opt</sub> = cos α<sub>1</sub>`, `η<sub>d,max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)`, `Flatter curve: high efficiency over a wider speed range`],
      tv: `<ul><li><b>Condition for maximum efficiency:</b> reached when the blade speed ratio (ρ) equals the tangential component of the absolute steam velocity.</li>
 <li><b>Maximum diagram efficiency:</b> at this optimal ratio the efficiency is 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>).</li>
 <li><b>Efficiency versus blade speed ratio plot:</b> forms a parabolic curve, but peaks at a higher blade speed ratio (cos α<sub>1</sub>) than an impulse stage; the curve is distinctly flatter.</li>
 <li><b>Operational advantage:</b> the flatter profile allows the reaction turbine to maintain high efficiency over a much wider range of off-design operating speeds.</li></ul>`},

    71: {i: 2,
      s: `Figure 5: diagram efficiency against blade speed ratio for a simple impulse stage and a 50 % reaction stage at the same nozzle angle (20°). The impulse stage peaks at 88.3 % (ρ = 0.47); the reaction stage peaks at 93.8 % (ρ = 0.94) and is flatter.`,
      d: `Read the two curves for α<sub>1</sub> = 20°. <b>Impulse:</b> maximum 88.3 % at ρ = 0.470 (= cos 20°/2), falling to zero at ρ = 0.94. <b>Reaction:</b> maximum 93.8 % at ρ = 0.940 (= cos 20°), a broader hump that stays high for a long way on either side. The reaction curve is above the impulse curve beyond ρ ≈ 0.6, and the impulse curve is higher at the lowest speed ratios.`,
      k: [`Impulse: 88.3 % at ρ = 0.47`, `Reaction: 93.8 % at ρ = 0.94`, `Reaction curve is flatter`]},

    72: {i: 3,
      s: `Parsons numerical 1 (June 2024, 5 marks): given the steam velocity, blade height, exit angle, axial-velocity ratio and flow, find the rotational speed, the diagram power and the enthalpy drop of the stage.`,
      d: `<b>Question:</b> a Parsons stage steam turbine receives steam from the fixed blades at 90 m/s. The mean blade height is 40 mm and the moving blade exit angle is 20°. The axial velocity is 3/4 of the blade velocity at the mean radius. Steam supply is 9000 kg/h at a specific volume of 0.669 m³/kg; the effect of blade tip thickness on the annulus area may be neglected. Calculate (a) the rotational speed (rev/s) of the wheel, (b) the diagram power, and (c) the enthalpy drop in the stage.<br>The figure on the slide shows what "blade height" means. The full solution is on the next slides and in <b>Numericals, N3</b>.`,
      k: [`Given: V<sub>1</sub> = 90 m/s, β<sub>2</sub> = 20°, H = 40 mm, ṁ = 2.5 kg/s, v<sub>s</sub> = 0.669 m³/kg`, `V<sub>f</sub> = (3/4)u`, `Find: N, P, Δh`],
      t: `A June 2024 question. The trick is V<sub>f</sub> = (3/4)u: it lets you find u from V<sub>f</sub> = V<sub>1</sub> sin α<sub>1</sub>.`},

    73: {i: 3,
      s: `Solution, part 1: the Parsons conditions give α<sub>1</sub> = β<sub>2</sub> = 20°; then V<sub>f</sub> = 30.78 m/s, u = 41.04 m/s, V<sub>w1</sub> = 84.57 m/s, V<sub>w2</sub> = 43.53 m/s, ΔV<sub>w</sub> = 128.10 m/s.`,
      d: `<b>1. Data (Parsons, so α<sub>1</sub> = β<sub>2</sub> and V<sub>1</sub> = V<sub>r2</sub>):</b> V<sub>1</sub> = 90 m/s, β<sub>2</sub> = 20° ⇒ α<sub>1</sub> = 20°, V<sub>f</sub> = (3/4)u, H = 0.04 m, ṁ = 9000/3600 = 2.5 kg/s, v<sub>s</sub> = 0.669 m³/kg.<br><b>2. Axial velocity and blade speed:</b> V<sub>f</sub> = V<sub>1</sub> sin α<sub>1</sub> = 90 sin 20° = 30.78 m/s; u = (4/3)V<sub>f</sub> = 41.04 m/s.<br><b>3. Whirl velocities:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 84.57 m/s; V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = 84.57 − 41.04 = 43.53 m/s; ΔV<sub>w</sub> = 84.57 + 43.53 = 128.10 m/s.`,
      k: [`V<sub>f</sub> = V<sub>1</sub> sin α<sub>1</sub> = 30.78 m/s`, `u = (4/3)V<sub>f</sub> = 41.04 m/s`, `ΔV<sub>w</sub> = 84.57 + 43.53 = 128.10 m/s`]},

    74: {i: 3,
      s: `Solution, part 2: continuity gives the mean diameter D = 0.432 m, so N = 30.2 rev/s (1813 rpm); the diagram power is 13.14 kW.`,
      d: `<b>4. Mean diameter and speed.</b> Neglecting tip thickness the annulus area is A = πDH. Continuity: ṁ v<sub>s</sub> = A V<sub>f</sub> = πDH V<sub>f</sub>, so D = ṁ v<sub>s</sub>/(πH V<sub>f</sub>) = 2.5 × 0.669/(π × 0.04 × 30.78) = <b>0.432 m</b>. From u = πDN: N = u/(πD) = 41.04/(π × 0.432) = <b>30.2 rev/s</b> (≈ 1813 rpm).<br><b>5. Diagram power:</b> P = ṁ u ΔV<sub>w</sub> = 2.5 × 41.04 × 128.10 = 13 144 W = <b>13.14 kW</b>.`,
      k: [`ṁ v<sub>s</sub> = πDH V<sub>f</sub> ⇒ D = 0.432 m`, `N = u/(πD) = 30.2 rev/s (1813 rpm)`, `P = ṁuΔV<sub>w</sub> = 13.14 kW`],
      t: `Continuity with the annulus area is the standard way to link flow, blade height and diameter in reaction stages.`},

    75: {i: 3,
      s: `Solution, part 3: for an ideal 50 % reaction stage with full carry-over of kinetic energy, the stage enthalpy drop equals the work done per kg, which is 5.26 kJ/kg.`,
      d: `<b>6. Enthalpy drop in the stage.</b> For an ideal (frictionless) 50 % reaction stage with full carry-over of kinetic energy between repeating stages, the theoretical stage enthalpy drop equals the actual work done per unit mass (no friction data is given, so K = 1 is assumed): Δh<sub>stage</sub> = uΔV<sub>w</sub>/1000 = 41.04 × 128.10/1000 = <b>5.26 kJ/kg</b>.<br><b>Final answer:</b> N = 30.2 rev/s, P = 13.14 kW, Δh<sub>stage</sub> = 5.26 kJ/kg.`,
      k: [`Δh<sub>stage</sub> = uΔV<sub>w</sub>/1000 = 5.26 kJ/kg`, `Assumes K = 1 and full carry-over`, `N = 30.2 rev/s, P = 13.14 kW`],
      t: `State the assumption (K = 1, full carry-over) in the answer: it earns the mark for the enthalpy drop.`},

    76: {i: 3,
      s: `Parsons numerical 2 (Venkanna, Example 6.13): given d, V<sub>1</sub>, β<sub>2</sub>, ṁ, N and the stage efficiency, find the blade inlet angle, power and available isentropic enthalpy drop.`,
      d: `<b>Question:</b> a stage of a Parsons turbine has mean blade-ring diameter 70 cm, steam velocity at the inlet of the moving blades 160 m/s, outlet blade angle 20°, steam flow 7 kg/s, speed 1500 rpm and stage efficiency 0.8. Draw the velocity diagram and find (1) the blade inlet angle β<sub>1</sub>, (2) the power developed P, and (3) the available isentropic enthalpy drop Δh<sub>theoretical</sub>.`,
      k: [`Given: d = 0.7 m, V<sub>1</sub> = 160 m/s, β<sub>2</sub> = 20°, ṁ = 7 kg/s, N = 1500 rpm, η<sub>s</sub> = 0.8`, `Find: β<sub>1</sub>, P, Δh<sub>theoretical</sub>`]},

    77: {i: 3,
      s: `Solution, part 1: the blade speed is u = 54.98 m/s; the Parsons conditions give α<sub>1</sub> = β<sub>2</sub> = 20° and V<sub>r2</sub> = V<sub>1</sub> = 160 m/s; the inlet whirl is 150.35 m/s and the flow velocity 54.72 m/s.`,
      d: `<b>1. Mean blade speed:</b> u = πdN/60 = π × 0.7 × 1500/60 = 54.98 m/s.<br><b>2. Parsons conditions:</b> α<sub>1</sub> = β<sub>2</sub> = 20°; V<sub>1</sub> = V<sub>r2</sub> = 160 m/s; V<sub>f1</sub> = V<sub>f2</sub> = V<sub>f</sub>.<br><b>3. Inlet triangle:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 160 cos 20° = 150.35 m/s; V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub> = 160 sin 20° = 54.72 m/s.`,
      k: [`u = 54.98 m/s`, `V<sub>w1</sub> = 150.35 m/s`, `V<sub>f</sub> = 54.72 m/s`]},

    78: {i: 3,
      s: `Solution, part 2: tan β<sub>1</sub> = V<sub>f</sub>/(V<sub>w1</sub> − u) gives β<sub>1</sub> = 29.85°; by symmetry α<sub>2</sub> = β<sub>1</sub>, so V<sub>w2</sub> = 95.37 m/s, ΔV<sub>w</sub> = 245.72 m/s, and the power is 94.57 kW.`,
      d: `<b>4. Blade inlet angle:</b> tan β<sub>1</sub> = V<sub>f1</sub>/(V<sub>w1</sub> − u) = 54.72/(150.35 − 54.98) = 54.72/95.37 = 0.5738, so <b>β<sub>1</sub> = 29.85°</b> (29°51′). For the symmetrical stage the absolute exit angle is also α<sub>2</sub> = β<sub>1</sub> = 29.85°.<br><b>5. Outlet whirl and total whirl change:</b> V<sub>w2</sub> = V<sub>f2</sub>/tan α<sub>2</sub> = 54.72/tan 29.85° = 95.37 m/s; ΔV<sub>w</sub> = 150.35 + 95.37 = 245.72 m/s.<br><b>6. Power:</b> P = ṁ u ΔV<sub>w</sub> = 7 × 54.98 × 245.72 = 94 568 W = <b>94.57 kW</b>.`,
      k: [`β<sub>1</sub> = 29.85°`, `V<sub>w2</sub> = V<sub>f2</sub>/tan α<sub>2</sub> = 95.37 m/s`, `P = 7 × 54.98 × 245.72 = 94.57 kW`],
      t: `Check: V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − u = 95.37 gives the same answer.`},

    79: {i: 3,
      s: `Solution, part 3: the stage efficiency links the power to the isentropic enthalpy rate: 94.57/0.8 = 118.21 kW, which is 16.89 kJ/kg per kg of steam.`,
      d: `<b>7. Available isentropic enthalpy drop.</b> η<sub>s</sub> = (actual power developed)/(isentropic enthalpy rate). Total isentropic enthalpy rate = P/η<sub>s</sub> = 94.57/0.8 = 118.21 kW. Per unit mass flow: Δh<sub>theoretical</sub> = 118.21/7 = <b>16.89 kJ/kg</b>.<br><b>Final answers:</b> β<sub>1</sub> = 29.85°, P = 94.57 kW, Δh<sub>theoretical</sub> = 16.89 kJ/kg.`,
      k: [`Isentropic rate = P/η<sub>s</sub> = 118.21 kW`, `Δh<sub>theoretical</sub> = 118.21/7 = 16.89 kJ/kg`, `β<sub>1</sub> = 29.85°, P = 94.57 kW`]},

    80: {i: 3,
      s: `Parsons numerical 3 (Venkanna, Example 6.14): given the total enthalpy drop (63 kJ/kg), speed, diameter, stage efficiency, outlet angle and speed ratio, find the number of moving rows. First, the blade speed and the steam velocity.`,
      d: `<b>Question:</b> a Parsons turbine runs at 1500 rpm; the total available enthalpy drop is 63 kJ/kg; mean rotor diameter 100 cm; stage efficiency 0.8; blade outlet angle 20°; blade speed ratio 0.7. Find the number of moving rows.<br><b>1. Blade speed:</b> u = πdN/60 = π × 1.0 × 1500/60 = 78.54 m/s.<br><b>2. Steam inlet velocity from the speed ratio:</b> V<sub>1</sub> = u/ρ = 78.54/0.7 = 112.20 m/s.<br><b>3. Parsons conditions:</b> α<sub>1</sub> = β<sub>2</sub> = 20° and V<sub>r2</sub> = V<sub>1</sub> = 112.20 m/s.`,
      k: [`Given: ΔH<sub>total</sub> = 63 kJ/kg, ρ = 0.7, η<sub>s</sub> = 0.8, β<sub>2</sub> = 20°`, `u = 78.54 m/s`, `V<sub>1</sub> = u/ρ = 112.20 m/s`]},

    81: {i: 3,
      s: `Whirl components: V<sub>w1</sub> = 105.43 m/s, V<sub>w2</sub> = 26.89 m/s, ΔV<sub>w</sub> = 132.32 m/s, so the work per stage is 10.392 kJ/kg.`,
      d: `<b>4. Whirl velocities:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 112.20 × 0.9397 = 105.43 m/s. V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u = 105.43 − 78.54 = 26.89 m/s. ΔV<sub>w</sub> = 105.43 + 26.89 = 132.32 m/s.<br><b>5. Actual work done per stage (unit mass flow):</b> W<sub>stage</sub> = uΔV<sub>w</sub> = 78.54 × 132.32 = 10 392 J/kg = <b>10.392 kJ/kg</b>.`,
      k: [`V<sub>w1</sub> = 105.43, V<sub>w2</sub> = 26.89 m/s`, `ΔV<sub>w</sub> = 132.32 m/s`, `W<sub>stage</sub> = 10.392 kJ/kg`]},

    82: {i: 3,
      s: `Number of rows: the isentropic drop needed per stage is 10.392/0.8 = 12.99 kJ/kg, so 63/12.99 = 4.85, which rounds up to 5 moving rows.`,
      d: `<b>6. Isentropic enthalpy drop per stage:</b> η<sub>s</sub> = W<sub>stage</sub>/Δh<sub>theoretical</sub>, so Δh<sub>theoretical</sub> = 10.392/0.8 = <b>12.99 kJ/kg</b>.<br><b>7. Number of moving rows:</b> N<sub>S</sub> = ΔH<sub>total</sub>/Δh<sub>theoretical</sub> = 63/12.99 = 4.85, rounded up to the next whole number: <b>5 stages (5 rows of moving blades)</b>.`,
      k: [`Δh<sub>theoretical</sub> = W<sub>stage</sub>/η<sub>s</sub> = 12.99 kJ/kg`, `N<sub>S</sub> = 63/12.99 = 4.85 → 5`, `Always round UP the number of stages`],
      t: `Round the number of stages up, never down: 4 stages cannot absorb the whole 63 kJ/kg.`},

    83: {i: 3,
      s: `Compounding (section 2.6) is needed because a single stage that takes the whole boiler-to-condenser pressure drop would need an impossible steam velocity (about 1050 m/s) and a rotor speed up to 30 000 rpm.`,
      d: `<b>The single-stage problem:</b> if the whole boiler-to-condenser pressure drop occurs in one stage, the inlet steam velocity becomes excessively high (e.g. 1050 m/s).<br><b>Consequences:</b> to keep the optimum speed ratio the rotor must spin at dangerously high speeds (up to 30 000 rpm); this leads to extreme centrifugal stress, the need for massive reduction gears, and a severe exit kinetic energy (carry-over) loss.<br><b>The solution:</b> compounding splits the total energy transfer over several stages, which reduces the rotational speed to practical, safe limits while keeping the efficiency.`,
      k: [`Single stage: V<sub>1</sub> about 1050 m/s`, `Rotor up to 30 000 rpm → huge stress, huge gears`, `Compounding: split the drop over several stages`],
      t: `Revision link: slide 20 gave the same numbers (30 000 rpm). Use both.`},

    84: {i: 3,
      s: `The three methods: velocity compounding (Curtis) with the whole drop in one nozzle set; pressure compounding (Rateau) with the drop shared among stages; and reaction staging (Parsons), where pressure falls through fixed and moving blades.`,
      d: `<b>Velocity compounding (Curtis, multistage impulse):</b> the entire pressure drop occurs in one set of nozzles; the kinetic energy is absorbed in steps across 2–3 moving rows on a single wheel; fixed guide blades between them only redirect the steam, with no pressure drop.<br><b>Pressure compounding (Rateau, multistage impulse):</b> the total pressure drop is split into smaller drops across several simple impulse stages on a common shaft; each stage has its own nozzle ring and moving ring; smaller drops give lower steam velocities and so lower blade speeds.<br><b>Reaction staging (Parsons):</b> inherently pressure compounded; the stage enthalpy drop is shared equally between fixed and moving blades (50 % reaction); pressure falls continuously through both; many stages are required to drop from boiler to condenser pressure.`,
      k: [`Curtis: one nozzle set, 2–3 moving rows`, `Rateau: pressure drop shared over stages`, `Parsons: 50 % reaction, many stages`],
      tv: `<ul><li><b>Velocity compounding (Curtis, multistage impulse):</b> the entire pressure drop occurs in one set of nozzles. Kinetic energy is absorbed in steps across multiple moving blade rows (usually 2–3) on a single wheel. Interspersed fixed guide blades merely redirect the steam into the next moving row without dropping pressure.</li>
 <li><b>Pressure compounding (Rateau, multistage impulse):</b> the total pressure drop is split into a series of smaller drops across several simple impulse stages on a common shaft. Each stage uses its own nozzle ring and moving blade ring. Fractional pressure drops yield lower steam velocities, directly lowering the required blade speeds.</li>
 <li><b>Reaction staging (Parsons):</b> inherently pressure compounded. The stage enthalpy drop is divided equally between fixed and moving blades (50 % reaction). Pressure falls continuously through both fixed and moving passages. Many stages are needed to drop from boiler to condenser pressure.</li></ul>`}
  });
})();
