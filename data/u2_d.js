/* Unit II content, slides 85-111 (DRAFT, teacher to verify): velocity compounding (Curtis), two-row derivation, practical efficiencies, Nov 2025 numerical */
(function () {
  Object.assign(MTM.c.u2.sl, {
    85: {i: 2,
      s: `Section 2.7, velocity compounding. Figure 7 shows the rotor assembly of a Curtis turbine: one wheel carrying two (or three) rows of moving blades, with fixed guide blades fitted between them.`,
      d: `Look at how the rows are arranged on one wheel: moving blades, then a ring of fixed guide blades fixed to the casing, then moving blades again. The nozzle ring (not shown on the rotor) sits ahead of the first row.`,
      k: [`Curtis wheel: 2 or 3 moving rows on one disc`, `Fixed guide blades between the moving rows`]},

    86: {i: 3,
      s: `In a Curtis turbine the whole pressure drop takes place in one set of nozzles, and the very fast jet is slowed in steps by two or three moving rows with fixed guide rows between them. Pressure then stays constant.`,
      d: `<b>Purpose:</b> solves the problem of very high rotor speed by absorbing the kinetic energy gradually, in steps.<br><b>Configuration:</b> the whole boiler-to-exhaust pressure drop happens in a single row of stationary nozzles, giving an extremely fast jet. The jet is directed onto a wheel with several (usually 2 or 3) rows of moving blades, separated by rows of fixed guide blades.<br><b>Pressure:</b> falls sharply in the nozzles, then stays strictly constant through all the moving and fixed rows.<br><b>Velocity:</b> rises dramatically in the nozzles; falls significantly in each moving row (kinetic energy handed to the rotor); in the fixed guide blades the flow is only redirected into the next moving row, with no pressure change (a slight velocity drop due to friction).`,
      k: [`All the pressure drop in the nozzles`, `Pressure constant over moving and fixed rows`, `Velocity: up in nozzle, down in each moving row`, `Guide blades redirect only (small friction drop)`],
      t: `Sketch the two curves (pressure flat after the nozzle, velocity stepping down) and label them: that is the standard answer.`},

    87: {i: 2,
      s: `Figure 8: the pressure and velocity profiles of a Curtis stage. The pressure falls once in the nozzle; the velocity jumps up in the nozzle and then steps down over the moving rows.`,
      d: `Compare it with the Rateau and Parsons profiles later in this unit: Curtis has <i>one</i> pressure drop; Rateau has a staircase of drops; Parsons falls steadily. In the Curtis velocity curve, the velocity drops over each moving row and slightly over the fixed row between them.`,
      k: [`Curtis: one pressure drop`, `Velocity: spike, then steps down`]},

    88: {i: 3,
      s: `To show the geometric effect of velocity compounding, assume no friction (K = 1) in every row, symmetrical blades (equal in and out angles) and a constant axial velocity.`,
      d: `<b>Frictionless flow:</b> the blade velocity coefficient is unity for all moving and fixed guide rows. <b>Symmetrical (equiangular) blading:</b> the inlet and outlet angles of any blade row are equal: moving rows β<sub>out</sub> = β<sub>in</sub>; fixed guide rows α<sub>out</sub> = α<sub>in</sub>. <b>Constant axial velocity:</b> the axial flow velocity is uniform and constant through the whole stage.`,
      k: [`K = 1 for every row`, `Moving rows: β<sub>out</sub> = β<sub>in</sub>; guide rows: α<sub>out</sub> = α<sub>in</sub>`, `V<sub>f</sub> constant through the stage`],
      tv: `<p>To isolate the purely geometric effects of velocity compounding, adopt the standard idealised, frictionless assumptions:</p>
 <ul><li><b>Frictionless flow:</b> the blade velocity friction coefficient is unity for all moving and fixed guide rows.</li>
 <li><b>Symmetrical (equiangular) blading:</b> the inlet and outlet angles of any given blade row are equal: moving rows β<sub>out</sub> = β<sub>in</sub>; fixed guide rows α<sub>out</sub> = α<sub>in</sub>.</li>
 <li><b>Constant axial velocity:</b> the axial flow velocity is uniform and constant throughout the entire stage.</li></ul>`},

    89: {i: 3,
      s: `First the baseline: the single-row (De Laval) impulse stage, repeated here so you can compare it with the Curtis stages. Figure 9 is its combined velocity diagram.`,
      d: `In a simple single-row impulse turbine the steam takes its whole pressure drop in one set of nozzles and gives up its velocity across one row of moving blades. This slide repeats the De Laval blade efficiency derivation (slides 41 to 48) for a fair comparison with the two-row Curtis stage that follows. Figure 9 is the combined inlet-and-outlet diagram on a common base u.`,
      k: [`Baseline: one row, K = 1`, `Compare: single row vs two-row Curtis`]},

    90: {i: 3,
      s: `Baseline vector relations: V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>, V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u, so ΔV<sub>w</sub> = 2(V<sub>1</sub>cos α<sub>1</sub> − u) and the work is 2u(V<sub>1</sub>cos α<sub>1</sub> − u).`,
      d: `<b>Inlet:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>; V<sub>r1</sub>cos β<sub>1</sub> = V<sub>w1</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u.<br><b>Outlet</b> (frictionless, symmetrical: V<sub>r2</sub> = V<sub>r1</sub>, β<sub>2</sub> = β<sub>1</sub>): V<sub>r2</sub>cos β<sub>2</sub> = V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u; the outlet whirl velocity is V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = (V<sub>1</sub>cos α<sub>1</sub> − u) − u = V<sub>1</sub>cos α<sub>1</sub> − 2u.<br><b>Total whirl change:</b> ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> + (V<sub>1</sub>cos α<sub>1</sub> − 2u) = 2(V<sub>1</sub>cos α<sub>1</sub> − u).<br><b>Work per unit mass flow:</b> W = u·ΔV<sub>w</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u).`,
      k: [`V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u`, `ΔV<sub>w</sub> = 2(V<sub>1</sub>cos α<sub>1</sub> − u)`, `W = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)`],
      t: `Here V<sub>w2</sub> is taken as the signed outlet whirl, so the same expression V<sub>w1</sub> + V<sub>w2</sub> appears. Compare with slide 44 (K = 1).`,
      tv: `<p><b>At inlet:</b> V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>. The relative inlet tangential velocity component is:</p>
 <div class="eqbox">V<sub>r1</sub>cos β<sub>1</sub> = V<sub>w1</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u</div>
 <p><b>At outlet:</b> using the frictionless and symmetrical assumptions (V<sub>r2</sub> = V<sub>r1</sub> and β<sub>2</sub> = β<sub>1</sub>): V<sub>r2</sub>cos β<sub>2</sub> = V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u. The outlet whirl velocity is:</p>
 <div class="eqbox">V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = (V<sub>1</sub>cos α<sub>1</sub> − u) − u = V<sub>1</sub>cos α<sub>1</sub> − 2u</div>
 <p><b>Total whirl change (ΔV<sub>w</sub>) and efficiency (η<sub>d</sub>):</b></p>
 <div class="eqbox">ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> + (V<sub>1</sub>cos α<sub>1</sub> − 2u) = 2(V<sub>1</sub>cos α<sub>1</sub> − u)</div>
 <p>The work done per unit mass flow of steam is:</p>
 <div class="eqbox hot">W = u·ΔV<sub>w</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)</div>`},

    91: {i: 3,
      s: `Dividing by the kinetic energy ½V<sub>1</sub>² gives η<sub>d</sub> = 4ρ(cos α<sub>1</sub> − ρ); its maximum is at ρ = cos α<sub>1</sub>/2 and equals cos² α<sub>1</sub>.`,
      d: `Dividing by the initial kinetic energy supplied (E<sub>k</sub> = ½V<sub>1</sub>²): η<sub>d</sub> = W/E<sub>k</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/(½V<sub>1</sub>²) = <b>4ρ(cos α<sub>1</sub> − ρ)</b>.<br><b>Optimum condition:</b> dη<sub>d</sub>/dρ = 4(cos α<sub>1</sub> − 2ρ) = 0 ⇒ <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/2</b>.<br><b>Maximum efficiency:</b> η<sub>d,max</sub> = 4(cos α<sub>1</sub>/2)(cos α<sub>1</sub> − cos α<sub>1</sub>/2) = <b>cos² α<sub>1</sub></b>.`,
      k: [`η<sub>d</sub> = 4ρ(cos α<sub>1</sub> − ρ)`, `ρ<sub>opt</sub> = cos α<sub>1</sub>/2`, `η<sub>d,max</sub> = cos² α<sub>1</sub>`],
      tv: `<p>Dividing by the initial kinetic energy supplied (E<sub>k</sub> = ½V<sub>1</sub>²) gives:</p>
 <div class="eqbox">η<sub>d</sub> = W/E<sub>k</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/(½V<sub>1</sub>²) = 4ρ(cos α<sub>1</sub> − ρ)</div>
 <p><b>Optimum condition and maximum efficiency.</b> To find the optimum blade speed ratio (ρ<sub>opt</sub>), differentiate with respect to ρ:</p>
 <div class="eqbox">d(η<sub>d</sub>)/dρ = 4(cos α<sub>1</sub> − 2ρ) = 0 &nbsp;⟹&nbsp; ρ<sub>opt</sub> = cos α<sub>1</sub>/2</div>
 <p>Substitute ρ<sub>opt</sub> back into the efficiency formula:</p>
 <div class="eqbox hot">η<sub>d,max</sub> = 4(cos α<sub>1</sub>/2)(cos α<sub>1</sub> − cos α<sub>1</sub>/2) &nbsp;⟹&nbsp; η<sub>d,max</sub> = cos² α<sub>1</sub></div>`},

    92: {i: 2,
      s: `Section 2: the two-row Curtis stage. Figure 10 is its combined velocity diagram: two moving rows with a fixed guide row between them, all drawn on one base u.`,
      d: `Number the points as the teacher does: 1 = entry to row 1, 2 = exit of row 1, 3 = entry to row 2 (after the guide blades), 4 = exit of row 2. Then: V<sub>1</sub>, α<sub>1</sub> (nozzle); V<sub>2</sub>, α<sub>2</sub> (leaving row 1, entering the guide blades); V<sub>3</sub>, α<sub>3</sub> (leaving the guide blades); V<sub>4</sub>, α<sub>4</sub> (leaving the stage). Four triangles in all.`,
      k: [`Points 1-2 = row 1; 3-4 = row 2`, `Guide blades join 2 to 3`, `Four triangles on one base u`]},

    93: {i: 3,
      s: `For maximum efficiency the steam must leave the last row purely axially, so the carry-over loss is least. Ideal guide blades keep V and α unchanged. The work in the first row is u(V<sub>w1</sub> + V<sub>w2</sub>)/g<sub>c</sub>.`,
      d: `<b>1. Need for multistaging:</b> to reduce blade tip speed, minimise carry-over loss and lower the centrifugal stresses.<br><b>2. Condition for maximum efficiency:</b> the final exit kinetic energy (carry-over loss) is least when the absolute velocity leaving the last (second) row is purely axial: V<sub>4</sub> = V<sub>f4</sub> ⇒ α<sub>4</sub> = 90°.<br><b>3. Flow through the guide blades:</b> they only redirect the steam into the next moving row; with no friction the magnitude and angle remain constant: V<sub>2</sub> = V<sub>3</sub> and α<sub>2</sub> = α<sub>3</sub>.<br><b>4. Work in the first row:</b> W<sub>1</sub> = u(V<sub>w1</sub> + V<sub>w2</sub>)/g<sub>c</sub>.`,
      k: [`Max efficiency: α<sub>4</sub> = 90° (axial exit)`, `Ideal guide blades: V<sub>2</sub> = V<sub>3</sub>, α<sub>2</sub> = α<sub>3</sub>`, `W<sub>1</sub> = u(V<sub>w1</sub> + V<sub>w2</sub>)/g<sub>c</sub>`],
      tv: `<p><b>1. The need for multistaging.</b> Essential to reduce high blade tip speeds, minimise carry-over losses and lower high centrifugal stresses on the rotor.</p>
 <p><b>2. Condition for maximum efficiency.</b> To minimise the final exit kinetic energy (carry-over loss), the absolute velocity of steam leaving the final (second) row must be purely axial:</p>
 <div class="eqbox">V<sub>4</sub> = V<sub>f4</sub> &nbsp;⟹&nbsp; α<sub>4</sub> = 90°</div>
 <p><b>3. Flow through fixed guide blades.</b> The fixed guide blades redirect the steam into the next moving row. Assuming no friction, the magnitude and angle remain constant: V<sub>2</sub> = V<sub>3</sub> and α<sub>2</sub> = α<sub>3</sub>.</p>
 <p><b>4. Work done in the first stage (W<sub>1</sub>).</b> The work done per kg of steam in the first moving row is:</p>
 <div class="eqbox">W<sub>1</sub> = u(V<sub>w1</sub> + V<sub>w2</sub>)/g<sub>c</sub></div>`},

    94: {i: 3,
      s: `In relative-velocity form W<sub>1</sub> = u(V<sub>r1</sub>cos β<sub>1</sub> + V<sub>r2</sub>cos β<sub>2</sub>)/g<sub>c</sub>. For ideal blades this is 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub>. The second row's work is u(V<sub>w3</sub> + V<sub>w4</sub>)/g<sub>c</sub>.`,
      d: `<b>Expanding in relative velocities and blade angles:</b> W<sub>1</sub> = u(V<sub>r1</sub>cos β<sub>1</sub> + V<sub>r2</sub>cos β<sub>2</sub>)/g<sub>c</sub>. It simplifies if the blades are equiangular (β<sub>1</sub> = β<sub>2</sub>) and frictionless (K = 1).<br><b>Work done in a two-row Curtis stage.</b><br><b>1. First row:</b> ideal, equiangular, K = 1: <b>W<sub>1</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub> J/kg</b>.<br><b>2. Second row:</b> the general equation is <b>W<sub>2</sub> = u(V<sub>w3</sub> + V<sub>w4</sub>)/g<sub>c</sub></b>.`,
      k: [`W<sub>1</sub> = u(V<sub>r1</sub>cos β<sub>1</sub> + V<sub>r2</sub>cos β<sub>2</sub>)/g<sub>c</sub>`, `Ideal: W<sub>1</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub>`, `W<sub>2</sub> = u(V<sub>w3</sub> + V<sub>w4</sub>)/g<sub>c</sub>`],
      tv: `<p>Expanding in terms of relative velocity and blade angles:</p>
 <div class="eqbox">W<sub>1</sub> = u(V<sub>r1</sub>cos β<sub>1</sub> + V<sub>r2</sub>cos β<sub>2</sub>)/g<sub>c</sub></div>
 <p><b>Simplification based on ideal conditions:</b> this further simplifies if the blades are equiangular (β<sub>1</sub> = β<sub>2</sub>) and frictionless (K = 1).</p>
 <p><b>Work done in a two-row Curtis stage</b></p>
 <p><b>1. Work done in the first stage (W<sub>1</sub>).</b> For ideal, equiangular blades (β<sub>1</sub> = β<sub>2</sub>) with no friction (K = 1):</p>
 <div class="eqbox">W<sub>1</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub> &nbsp;J/kg</div>
 <p><b>2. Work done in the second stage (W<sub>2</sub>).</b> The general work equation for the second moving row is:</p>
 <div class="eqbox">W<sub>2</sub> = u(V<sub>w3</sub> + V<sub>w4</sub>)/g<sub>c</sub></div>`},

    95: {i: 3,
      s: `With axial exit V<sub>w4</sub> = 0, so W<sub>2</sub> = uV<sub>w3</sub>/g<sub>c</sub>. And V<sub>w3</sub> is the sum of the relative whirls, which for ideal equiangular blades is 2(V<sub>3</sub>cos α<sub>3</sub> − u). So W<sub>2</sub> = 2u(V<sub>3</sub>cos α<sub>3</sub> − u)/g<sub>c</sub>.`,
      d: `<b>Applying the maximum-efficiency condition:</b> if the final exit is purely axial (α<sub>4</sub> = 90°), the outlet whirl is zero (V<sub>w4</sub> = 0), so W<sub>2</sub> = uV<sub>w3</sub>/g<sub>c</sub>.<br><b>3. Simplifying the second-row whirl V<sub>w3</sub>:</b> from the velocity triangle, V<sub>w3</sub> is the sum of the relative whirl components: V<sub>w3</sub> = V<sub>r3</sub>cos β<sub>3</sub> + V<sub>r4</sub>cos β<sub>4</sub>.<br><b>Ideal simplification:</b> for equiangular blades (β<sub>3</sub> = β<sub>4</sub>) with no friction (K<sub>2</sub> = V<sub>r4</sub>/V<sub>r3</sub> = 1): V<sub>w3</sub> = 2V<sub>r3</sub>cos β<sub>3</sub> = 2(V<sub>3</sub>cos α<sub>3</sub> − u).<br>Substituting back: <b>W<sub>2</sub> = 2u(V<sub>3</sub>cos α<sub>3</sub> − u)/g<sub>c</sub> J/kg</b>.`,
      k: [`α<sub>4</sub> = 90° ⇒ V<sub>w4</sub> = 0, W<sub>2</sub> = uV<sub>w3</sub>/g<sub>c</sub>`, `V<sub>w3</sub> = 2(V<sub>3</sub>cos α<sub>3</sub> − u)`, `W<sub>2</sub> = 2u(V<sub>3</sub>cos α<sub>3</sub> − u)/g<sub>c</sub>`],
      tv: `<p><b>Applying the maximum-efficiency condition.</b> If the final steam exit is purely axial (α<sub>4</sub> = 90°), the outlet whirl velocity drops to zero (V<sub>w4</sub> = 0):</p>
 <div class="eqbox">W<sub>2</sub> = uV<sub>w3</sub>/g<sub>c</sub></div>
 <p><b>3. Simplifying the second-stage whirl velocity (V<sub>w3</sub>).</b> From the velocity triangle, V<sub>w3</sub> is the sum of the relative whirl components:</p>
 <div class="eqbox">V<sub>w3</sub> = V<sub>r3</sub>cos β<sub>3</sub> + V<sub>r4</sub>cos β<sub>4</sub></div>
 <p><b>Ideal simplification:</b> for equiangular blades (β<sub>3</sub> = β<sub>4</sub>) with no blade friction (K<sub>2</sub> = V<sub>r4</sub>/V<sub>r3</sub> = 1):</p>
 <div class="eqbox">V<sub>w3</sub> = 2V<sub>r3</sub>cos β<sub>3</sub> = 2(V<sub>3</sub>cos α<sub>3</sub> − u)</div>
 <p>Substituting this back yields the final ideal work done for the second stage:</p>
 <div class="eqbox hot">W<sub>2</sub> = 2u(V<sub>3</sub>cos α<sub>3</sub> − u)/g<sub>c</sub> &nbsp;J/kg</div>`},

    96: {i: 3,
      s: `Link the two rows: the whirl entering row 2 is V<sub>3</sub>cos α<sub>3</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u, so the work in row 2 is W<sub>2</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub>.`,
      d: `<b>1. Relating the first-row exit to the second-row inlet:</b> with ideal guide blades (V<sub>2</sub> = V<sub>3</sub>, α<sub>2</sub> = α<sub>3</sub>) and symmetric first-row blades (β<sub>2</sub> = β<sub>1</sub>, K = 1), the absolute whirl component entering row 2 is V<sub>3</sub>cos α<sub>3</sub> = V<sub>2</sub>cos α<sub>2</sub> = V<sub>r1</sub>cos β<sub>1</sub> − u. Using the inlet condition V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u: <b>V<sub>3</sub>cos α<sub>3</sub> = (V<sub>1</sub>cos α<sub>1</sub> − u) − u = V<sub>1</sub>cos α<sub>1</sub> − 2u</b>.<br><b>2. Work in the second row:</b> W<sub>2</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − 2u − u)/g<sub>c</sub> = <b>2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub></b>.`,
      k: [`V<sub>3</sub>cos α<sub>3</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u`, `W<sub>2</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub>`],
      tv: `<p><b>1. Relating the first-stage exit to the second-stage inlet.</b> Assuming ideal fixed guide blades (V<sub>2</sub> = V<sub>3</sub>, α<sub>2</sub> = α<sub>3</sub>) and symmetric first-stage blades (β<sub>2</sub> = β<sub>1</sub>, K = 1), the absolute whirl component entering the second stage is:</p>
 <div class="eqbox">V<sub>3</sub>cos α<sub>3</sub> = V<sub>2</sub>cos α<sub>2</sub> = V<sub>r1</sub>cos β<sub>1</sub> − u</div>
 <p>Substituting the inlet conditions (V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u):</p>
 <div class="eqbox">V<sub>3</sub>cos α<sub>3</sub> = (V<sub>1</sub>cos α<sub>1</sub> − u) − u = V<sub>1</sub>cos α<sub>1</sub> − 2u</div>
 <p><b>2. Work done in the second stage (W<sub>2</sub>).</b> Substituting V<sub>3</sub>cos α<sub>3</sub> into the second-stage work equation derived previously:</p>
 <div class="eqbox">W<sub>2</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − 2u − u)/g<sub>c</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub></div>`},

    97: {i: 3,
      s: `Add the two rows: W<sub>t</sub> = W<sub>1</sub> + W<sub>2</sub> = (2u/g<sub>c</sub>)(2V<sub>1</sub>cos α<sub>1</sub> − 4u).`,
      d: `<b>3. Total work (W<sub>t</sub> = W<sub>1</sub> + W<sub>2</sub>):</b> W<sub>t</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub> + 2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub>. Factoring out the common terms: W<sub>t</sub> = (2u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − u + V<sub>1</sub>cos α<sub>1</sub> − 3u) = <b>(2u/g<sub>c</sub>)(2V<sub>1</sub>cos α<sub>1</sub> − 4u)</b>.`,
      k: [`W<sub>t</sub> = W<sub>1</sub> + W<sub>2</sub>`, `W<sub>t</sub> = (2u/g<sub>c</sub>)(2V<sub>1</sub>cos α<sub>1</sub> − 4u)`],
      tv: `<p><b>3. Total work done (W<sub>t</sub>).</b> The total work is the sum of the work done by both moving rows (W<sub>t</sub> = W<sub>1</sub> + W<sub>2</sub>):</p>
 <div class="eqbox">W<sub>t</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub> + 2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub></div>
 <p>Factoring out the common terms:</p>
 <div class="eqbox">W<sub>t</sub> = (2u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − u + V<sub>1</sub>cos α<sub>1</sub> − 3u)<br>W<sub>t</sub> = (2u/g<sub>c</sub>)(2V<sub>1</sub>cos α<sub>1</sub> − 4u)</div>`},

    98: {i: 3,
      s: `Factor out the 2: W<sub>t</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u). Dividing by V<sub>1</sub>²/2g<sub>c</sub> gives the two-row blade efficiency η<sub>b,2S</sub> = 8u(V<sub>1</sub>cos α<sub>1</sub> − 2u)/V<sub>1</sub>².`,
      d: `<b>1. Final total work:</b> W<sub>t</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u).<br><b>2. Blade (diagram) efficiency for the two rows</b> = total work ÷ kinetic energy supplied at the inlet: η<sub>b,2S</sub> = W<sub>t</sub>/(V<sub>1</sub>²/2g<sub>c</sub>).<br>Substituting W<sub>t</sub>: η<sub>b,2S</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u) × (2g<sub>c</sub>/V<sub>1</sub>²) = <b>8u(V<sub>1</sub>cos α<sub>1</sub> − 2u)/V<sub>1</sub>²</b>.`,
      k: [`W<sub>t</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u)`, `η<sub>b,2S</sub> = W<sub>t</sub>/(V<sub>1</sub>²/2g<sub>c</sub>)`, `η<sub>b,2S</sub> = 8u(V<sub>1</sub>cos α<sub>1</sub> − 2u)/V<sub>1</sub>²`],
      tv: `<p><b>1. Final total work expression (W<sub>t</sub>).</b> Factoring out 2 from the previous derivation yields:</p>
 <div class="eqbox">W<sub>t</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u)</div>
 <p><b>2. Blade efficiency calculation (η<sub>b</sub>).</b> The blade (or diagram) efficiency for the two stages is the ratio of the total work to the kinetic energy supplied at the inlet:</p>
 <div class="eqbox">η<sub>b,2S</sub> = W<sub>t</sub>/(V<sub>1</sub>²/2g<sub>c</sub>)</div>
 <p>Substituting the expression for W<sub>t</sub> and simplifying:</p>
 <div class="eqbox">η<sub>b,2S</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u) × (2g<sub>c</sub>/V<sub>1</sub>²)<br>η<sub>b,2S</sub> = 8u(V<sub>1</sub>cos α<sub>1</sub> − 2u)/V<sub>1</sub>²</div>`},

    99: {i: 3,
      s: `Divide through by V<sub>1</sub>²: the efficiency in terms of the speed ratio ρ = u/V<sub>1</sub> is η<sub>b,2S</sub> = 8ρ(cos α<sub>1</sub> − 2ρ).`,
      d: `<b>3. Final efficiency in terms of blade speed ratio:</b> factor V<sub>1</sub> out of the numerator terms: η<sub>b,2S</sub> = 8u V<sub>1</sub>(cos α<sub>1</sub> − 2u/V<sub>1</sub>)/V<sub>1</sub>². Substituting ρ = u/V<sub>1</sub> (some textbooks write φ instead of ρ): <b>η<sub>b,2S</sub> = 8ρ(cos α<sub>1</sub> − 2ρ)</b>.`,
      k: [`η<sub>b,2S</sub> = 8ρ(cos α<sub>1</sub> − 2ρ)`, `Some textbooks use φ for ρ`],
      tv: `<p><b>3. Final efficiency in terms of blade speed ratio.</b> Factoring V<sub>1</sub> out of the numerator terms to simplify the fraction:</p>
 <div class="eqbox">η<sub>b,2S</sub> = 8u V<sub>1</sub>(cos α<sub>1</sub> − 2u/V<sub>1</sub>)/V<sub>1</sub>²</div>
 <p>Substituting the non-dimensional blade speed ratio (ρ = u/V<sub>1</sub>; some editions of the textbook denote it φ):</p>
 <div class="eqbox hot">η<sub>b,2S</sub> = 8ρ(cos α<sub>1</sub> − 2ρ)</div>`},

    100: {i: 3,
      s: `Differentiating η<sub>b,2S</sub> with respect to ρ gives 8cos α<sub>1</sub> − 32ρ = 0, so ρ<sub>opt</sub> = cos α<sub>1</sub>/4 (half the single-row value). The maximum efficiency is still cos² α<sub>1</sub>.`,
      d: `<b>1. Optimum blade speed ratio:</b> dη<sub>b,2S</sub>/dρ = d[8ρ(cos α<sub>1</sub> − 2ρ)]/dρ = 0. Expanding the derivative: 8cos α<sub>1</sub> − 32ρ = 0, so <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/4</b>.<br><b>2. Maximum blade efficiency:</b> substituting back, η<sub>b,2S,max</sub> = (8cos α<sub>1</sub>/4)[cos α<sub>1</sub> − 2cos α<sub>1</sub>/4] = 2cos α<sub>1</sub> × (cos α<sub>1</sub>/2) = <b>cos² α<sub>1</sub></b>.<br><b>Meaning:</b> the best blade speed for a two-row Curtis stage is half that of a single-row stage (cos α<sub>1</sub>/4 against cos α<sub>1</sub>/2), with the same ideal maximum efficiency. That halving of blade speed is the whole purpose of velocity compounding.`,
      k: [`8cos α<sub>1</sub> − 32ρ = 0`, `ρ<sub>opt</sub> = cos α<sub>1</sub>/4`, `η<sub>b,2S,max</sub> = cos² α<sub>1</sub>`, `Blade speed halved vs single row`],
      t: `Write ρ<sub>opt</sub> = cos α<sub>1</sub>/4 for two rows. For n rows, ρ<sub>opt</sub> = cos α<sub>1</sub>/(2n) (see Figure 11).`,
      tv: `<p><b>1. Optimum blade speed ratio (ρ<sub>opt</sub>).</b> Differentiating the two-stage diagram efficiency (η<sub>b,2S</sub>) with respect to the blade speed ratio (ρ) and equating to zero yields the condition for maximum efficiency:</p>
 <div class="eqbox">dη<sub>b,2S</sub>/dρ = d[8ρ(cos α<sub>1</sub> − 2ρ)]/dρ = 0</div>
 <p>Expanding the derivative gives 8cos α<sub>1</sub> − 32ρ = 0.</p>
 <div class="eqbox hot"><b>Optimum ratio:</b> ρ<sub>opt</sub> = cos α<sub>1</sub>/4</div>
 <p><b>2. Maximum blade efficiency (η<sub>b,2S,max</sub>).</b> Substituting the optimum ratio back into the efficiency equation:</p>
 <div class="eqbox">η<sub>b,2S,max</sub> = (8cos α<sub>1</sub>/4)[cos α<sub>1</sub> − 2cos α<sub>1</sub>/4]</div>
 <div class="eqbox hot"><b>Maximum efficiency:</b> η<sub>b,2S,max</sub> = cos² α<sub>1</sub></div>
 <p><b>3. Maximum total work done (W<sub>t,max</sub>)</b> continues on the next slide.</p>`},

    101: {i: 3,
      s: `At the optimum, V<sub>1</sub>cos α<sub>1</sub> = 4u, so the maximum work is W<sub>t,max</sub> = 8u²/g<sub>c</sub>.`,
      d: `<b>3. Maximum total work:</b> substituting the optimum condition into W<sub>t</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u): W<sub>t,max</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub> × 4ρ − 2u), because cos α<sub>1</sub> = 4ρ at the optimum. Using V<sub>1</sub>ρ = u: W<sub>t,max</sub> = (4u/g<sub>c</sub>)(4u − 2u) = <b>8u²/g<sub>c</sub></b>.<br>For comparison, the single-row stage gives W<sub>max</sub> = 2u(2u − u)/g<sub>c</sub> = 2u²/g<sub>c</sub> at its own optimum. So for the <i>same blade speed u</i> the two-row stage does four times the work per kg (8u² against 2u²); for the <i>same nozzle velocity V<sub>1</sub></i> both do the same work (V<sub>1</sub>²cos² α<sub>1</sub>/2g<sub>c</sub>), but the two-row stage needs only half the blade speed.`,
      k: [`At optimum V<sub>1</sub>cos α<sub>1</sub> = 4u`, `W<sub>t,max</sub> = 8u²/g<sub>c</sub>`, `Single row optimum: 2u²/g<sub>c</sub>`],
      tv: `<p><b>3. Maximum total work done (W<sub>t,max</sub>).</b> Substituting the optimum condition into the total work equation (W<sub>t</sub>) yields the maximum work:</p>
 <div class="eqbox">W<sub>t,max</sub> = (4u/g<sub>c</sub>)(V<sub>1</sub> × 4ρ − 2u)</div>
 <p>Substituting the velocity relationship (V<sub>1</sub>ρ = u) simplifies the expression:</p>
 <div class="eqbox">W<sub>t,max</sub> = (4u/g<sub>c</sub>)(4u − 2u)</div>
 <div class="eqbox hot"><b>Maximum work:</b> the final maximum work done for the two-stage impulse turbine is W<sub>t,max</sub> = 8u²/g<sub>c</sub>.</div>`},

    102: {i: 3,
      s: `Figure 11: diagram efficiency against blade speed ratio for single-row and multi-row Curtis stages. With more rows the peak moves to the left (lower ρ), while the ideal maximum stays at cos² α<sub>1</sub>.`,
      d: `Under ideal, frictionless conditions the maximum efficiency of every stage is cos² α<sub>1</sub> (0.88 at 20°), but as the number of rows n grows the optimum moves to the left: <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/(2n)</b>. For α<sub>1</sub> = 20°: n = 1 → 0.47; n = 2 → 0.23; n = 3 → 0.16. The figure also shows a single-row stage with friction (K = 0.85), whose maximum is ((1 + K)/2)cos² α<sub>1</sub> = 0.82. The narrower the curve, the more the efficiency suffers if the speed ratio is not exactly right.`,
      k: [`ρ<sub>opt</sub> = cos α<sub>1</sub>/(2n)`, `20°: 0.47, 0.23, 0.16 for n = 1, 2, 3`, `Ideal maximum: cos² α<sub>1</sub> = 0.88`, `K = 0.85 single row: 0.82`],
      t: `More rows: lower blade speed, but a narrower efficiency curve.`},

    103: {i: 3,
      s: `In real turbines friction grows with the number of rows. A single row reaches 80–85 %, a two-row Curtis 65–70 %, and a three-row Curtis falls below 50 %. So three-row stages are obsolete in modern marine propulsion.`,
      d: `<b>Practical reality:</b> aerodynamic friction losses scale with the number of blade rows. A single-row stage achieves an actual maximum efficiency of 80–85 %; a 2-row Curtis stage 65–70 %; a 3-row Curtis stage drops below 50 % because of the large frictional losses across the five rows of cascade blades (three moving and two fixed). For this reason 3-row Curtis designs are obsolete in modern marine propulsion and are used only in small, non-condensing, high-speed auxiliary shipboard turbines.`,
      k: [`1 row: 80–85 %`, `2 rows: 65–70 %`, `3 rows: below 50 %`, `3-row: only small auxiliary turbines`],
      t: `Quote these numbers when asked "why is a Curtis wheel used only as the first stage or for astern?" Efficiency is traded for compactness.`},

    104: {i: 3,
      s: `Numerical (Curtis, Nov 2025, 10 marks): a two-row velocity-compounded stage with nozzle angle 17°, blade speed 125 m/s, exit angles 22°, 26° and 30°, K = 0.9, axial exit. Draw the diagrams and find the exit velocity.`,
      d: `<b>Question:</b> a two-row velocity-compounded impulse stage: nozzle angle 17°; blade speed 125 m/s; the exit angles of the first moving row, the fixed guide blades and the second moving row are 22°, 26° and 30° respectively. Take the blade velocity coefficient as 0.9 for each row, and assume the absolute velocity of the steam leaving the stage is axial. (i) Draw the velocity diagram for both stages and (ii) calculate the absolute velocity of the steam leaving the velocity stage. (10 marks)<br>Note that the nozzle velocity V<sub>1</sub> is <i>not</i> given: you must work backwards from the exit.`,
      k: [`Given: α<sub>1</sub> = 17°, u = 125 m/s, β<sub>1</sub> = 22°, α<sub>2</sub> = 26°, β<sub>2</sub> = 30°, K = 0.9`, `Axial exit: V<sub>w4</sub> = 0`, `V<sub>1</sub> is NOT given`],
      t: `Nov 2025 paper. The unknown nozzle velocity is the key: use the backward method.`},

    105: {i: 3,
      s: `Strategy: since the nozzle velocity is unknown but the exit condition V<sub>w4</sub> = 0 fixes the last row, work backwards: row 2, then the guide blades, then row 1, then the nozzle.`,
      d: `<b>Given data:</b> α<sub>1</sub> = 17°, u = 125 m/s; row 1 moving exit β<sub>1</sub> = 22°; fixed guide exit α<sub>2</sub> = 26°; row 2 moving exit β<sub>2</sub> = 30°; K = 0.9 for all rows; V<sub>4</sub> axial ⇒ V<sub>w4</sub> = 0.<br><b>Solution strategy (backward method):</b> the exit condition fixes the last row, so work from the exit: <b>Row 2 → guide blades → Row 1 → nozzle</b>.`,
      k: [`Backward: Row 2 → guide → Row 1 → nozzle`, `V<sub>w4</sub> = 0 fixes the last triangle`]},

    106: {i: 3,
      s: `Row 2 exit triangle: axial exit means the relative exit whirl cancels u, so V<sub>r,out2</sub> = u/cos β<sub>2</sub> = 144.34 m/s, V<sub>4</sub> = 72.17 m/s and V<sub>r,in2</sub> = 160.38 m/s.`,
      d: `<b>1. Row 2 (last moving row), exit triangle.</b> Axial exit means zero whirl at exit, so the whirl component of the relative exit velocity cancels the blade speed: u − V<sub>r,out2</sub>cos β<sub>2</sub> = 0 ⇒ V<sub>r,out2</sub> = u/cos β<sub>2</sub> = 125/cos 30° = <b>144.34 m/s</b>.<br><b>Absolute exit velocity (purely axial):</b> V<sub>4</sub> = V<sub>f4</sub> = V<sub>r,out2</sub> sin β<sub>2</sub> = 144.34 sin 30° = <b>72.17 m/s</b>.<br><b>Relative velocity at inlet to row 2</b> (friction: V<sub>r,out2</sub> = K V<sub>r,in2</sub>): V<sub>r,in2</sub> = 144.34/0.9 = <b>160.38 m/s</b>.`,
      k: [`V<sub>r,out2</sub> = u/cos β<sub>2</sub> = 144.34 m/s`, `V<sub>4</sub> = V<sub>r,out2</sub> sin β<sub>2</sub> = 72.17 m/s`, `V<sub>r,in2</sub> = V<sub>r,out2</sub>/K = 160.38 m/s`]},

    107: {i: 3,
      s: `Row 2 inlet triangle (cosine rule) gives the guide-blade exit velocity V<sub>3</sub> = 263.07 m/s; because of friction in the guide blades V<sub>2</sub> = V<sub>3</sub>/K = 292.30 m/s.`,
      d: `<b>2. Row 2 inlet triangle and the fixed guide blades.</b> The steam leaves the guide blades at V<sub>3</sub> with angle α<sub>2</sub> = 26°. Cosine rule on the row 2 inlet triangle: V<sub>r,in2</sub>² = V<sub>3</sub>² + u² − 2uV<sub>3</sub>cos α<sub>2</sub>. So 160.38² = V<sub>3</sub>² + 125² − 2 × 125 × V<sub>3</sub> cos 26°, i.e. V<sub>3</sub>² − 224.70V<sub>3</sub> − 10 095 = 0, giving <b>V<sub>3</sub> = 263.07 m/s</b>.<br><b>Check:</b> V<sub>w3</sub> = V<sub>3</sub>cos 26° = 236.45 m/s; V<sub>f3</sub> = V<sub>3</sub>sin 26° = 115.32 m/s.<br>The guide blades lose velocity through friction (V<sub>3</sub> = K V<sub>2</sub>), so the velocity entering them from row 1 is V<sub>2</sub> = V<sub>3</sub>/K = 263.07/0.9 = <b>292.30 m/s</b>.`,
      k: [`V<sub>3</sub>² − 224.70V<sub>3</sub> − 10 095 = 0 ⇒ V<sub>3</sub> = 263.07`, `V<sub>w3</sub> = 236.45, V<sub>f3</sub> = 115.32 m/s`, `V<sub>2</sub> = V<sub>3</sub>/K = 292.30 m/s`],
      t: `Cosine rule when only the relative speed, u and one angle are known: pick the positive root of the quadratic.`},

    108: {i: 3,
      s: `Row 1: the cosine rule on the exit triangle gives V<sub>r,out1</sub> = 404.43 m/s, hence V<sub>r,in1</sub> = 449.36 m/s; the cosine rule on the inlet triangle then gives the nozzle velocity V<sub>1</sub> = 567.4 m/s.`,
      d: `<b>3. Row 1 exit and inlet triangles.</b> <b>Exit of row 1</b> (cosine rule, V<sub>2</sub> and β<sub>1</sub> = 22°): V<sub>2</sub>² = V<sub>r,out1</sub>² + u² − 2uV<sub>r,out1</sub>cos β<sub>1</sub>. 292.30² = V<sub>r,out1</sub>² + 125² − 2 × 125 × V<sub>r,out1</sub> cos 22° gives V<sub>r,out1</sub>² − 231.80V<sub>r,out1</sub> − 69 821 = 0, so <b>V<sub>r,out1</sub> = 404.43 m/s</b>, and V<sub>r,in1</sub> = 404.43/0.9 = <b>449.36 m/s</b>.<br><b>Inlet of row 1</b> (nozzle angle α<sub>1</sub> = 17°): V<sub>r,in1</sub>² = V<sub>1</sub>² + u² − 2uV<sub>1</sub>cos α<sub>1</sub>. 449.36² = V<sub>1</sub>² + 125² − 2 × 125 × V<sub>1</sub> cos 17° gives V<sub>1</sub>² − 239.08V<sub>1</sub> − 186 301 = 0, so <b>V<sub>1</sub> = 567.4 m/s</b>.`,
      k: [`V<sub>r,out1</sub> = 404.43; V<sub>r,in1</sub> = 449.36 m/s`, `V<sub>1</sub>² − 239.08V<sub>1</sub> − 186 301 = 0`, `V<sub>1</sub> = 567.4 m/s`]},

    109: {i: 3,
      s: `The results table for the two rows: row 1 has V<sub>1</sub> = 567.4 m/s in and V<sub>2</sub> = 292.3 m/s out (with V<sub>w2</sub> = −250.0); row 2 has V<sub>3</sub> = 263.1 m/s in and V<sub>4</sub> = 72.2 m/s out (V<sub>w4</sub> = 0).`,
      d: `<table><tr><th>Quantity</th><th>Row 1 (moving)</th><th>Row 2 (moving)</th></tr>
 <tr><td>Inlet absolute velocity</td><td>V<sub>1</sub> = 567.4 m/s</td><td>V<sub>3</sub> = 263.1 m/s</td></tr>
 <tr><td>Inlet whirl / axial</td><td>V<sub>w</sub> = 542.6, V<sub>f</sub> = 165.9 m/s</td><td>V<sub>w</sub> = 236.4, V<sub>f</sub> = 115.3 m/s</td></tr>
 <tr><td>Relative velocity in</td><td>V<sub>r,in1</sub> = 449.4 m/s</td><td>V<sub>r,in2</sub> = 160.4 m/s</td></tr>
 <tr><td>Relative velocity out</td><td>V<sub>r,out1</sub> = 404.4 m/s</td><td>V<sub>r,out2</sub> = 144.3 m/s</td></tr>
 <tr><td>Exit absolute velocity</td><td>V<sub>2</sub> = 292.3 m/s (V<sub>w2</sub> = −250.0)</td><td>V<sub>4</sub> = 72.2 m/s (V<sub>w4</sub> = 0)</td></tr></table>
 <b>Note:</b> V<sub>w2</sub> = −250.0 m/s is negative: the steam leaves row 1 moving <i>opposite</i> to the blade rotation. The fixed guide blades turn it back to V<sub>w3</sub> = +236.4 m/s for row 2.`,
      k: [`V<sub>1</sub> = 567.4, V<sub>3</sub> = 263.1 m/s`, `V<sub>2</sub> = 292.3, V<sub>4</sub> = 72.2 m/s`, `V<sub>w2</sub> = −250.0 m/s: guide blades turn it back`]},

    110: {i: 2,
      s: `Figure 12: the combined velocity diagrams of the two-row Curtis stage, drawn from the calculated values.`,
      d: `Use it as the model drawing for part (i) of the question: four triangles on one base u, with the guide-blade triangle between the two moving-row triangles, and the last absolute velocity V<sub>4</sub> drawn vertical (axial).`,
      k: [`Part (i): draw the four triangles`, `V<sub>4</sub> vertical (axial)`]},

    111: {i: 3,
      s: `Final answer: the nozzle velocity is V<sub>1</sub> = 567.4 m/s and the steam leaves the stage axially at V<sub>4</sub> = 72.2 m/s.`,
      d: `<b>Final answer:</b> the calculated nozzle velocity is V<sub>1</sub> = 567.4 m/s. The steam leaves the velocity-compounded stage purely in the axial direction at <b>V<sub>4</sub> = 72.2 m/s</b>. The question asks for V<sub>4</sub>: it is found directly in step 1 (72.17 m/s), so you can score the main mark early; the remaining steps give V<sub>1</sub> for the drawing. The full working is in <b>Numericals, N6</b>.`,
      k: [`V<sub>4</sub> = 72.2 m/s (axial)`, `V<sub>1</sub> = 567.4 m/s`],
      t: `V<sub>4</sub> is found in the first step: do that first, and secure the answer before the longer chain.`}
  });
})();
