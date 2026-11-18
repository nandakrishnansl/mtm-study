/* Unit III content, slides 1-25 (DRAFT, teacher to verify).
   i = importance (3 must-know, 2 important, 1 good to know); s = simple; d = detailed; k = key points; t = exam tip; tv = text-view override.
   Equations follow the teacher's Unit III slides and handout (Buckingham pi theorem, repeating variables d, N, rho for turbomachines). */
window.MTM = window.MTM || {c: {}};
MTM.c.u3 = MTM.c.u3 || {sl: {}};
(function () {
  Object.assign(MTM.c.u3.sl, {
    1: {i: 3,
      s: `Testing a machine by changing one variable at a time takes far too many experiments. Dimensional analysis groups the variables into a few dimensionless numbers, so a handful of tests tells you almost as much.`,
      d: `<b>The experimental challenge.</b> (1) Experiments are costly and slow, especially when more than about three parameters act together. (2) Varying one parameter at a time needs an impractically large number of tests. (3) Data from one-at-a-time tests is narrow and hard to generalise.<br><b>The dimensional analysis answer.</b> Combine the independent variables into a smaller set of <b>dimensionless groups</b>. You then plan the experiments around the groups, and get the most information from the fewest tests.`,
      k: [`Many variables → too many experiments`, `Dimensional analysis → fewer dimensionless groups`, `Maximum information from minimum tests`, `Results become general, not limited to one machine`],
      t: `A 2-mark question: "Why is dimensional analysis used?" Give the problem (cost, number of tests) and the solution (dimensionless groups).`},

    2: {i: 2,
      s: `Pipe flow depends on viscosity, density, velocity and pipe diameter. Combined into one number, the Reynolds number, a few experiments cover every pipe, fluid and speed.`,
      d: `Flow in a pipe depends on four variables: viscosity μ, density ρ, velocity u and diameter D. Testing each over a wide range would need hundreds of runs. Instead they are combined into one dimensionless group:<br><b>Reynolds number = ρuD/μ</b>.<br>Results plotted against this single number apply to any pipe size and any fluid, so a small handful of experiments gives universally usable data.`,
      k: [`Four variables (μ, ρ, u, D) → one group`, `Re = ρuD/μ`, `A few tests give general results`],
      tv: `<p>Four variables are combined into one dimensionless group:</p>
 <div class="eqbox hot"><b>Reynolds number</b><br>Re = ρuD/μ</div>
 <p>A small handful of experiments using this single group is enough to get generalised flow data that applies to any pipe, fluid or speed.</p>`,
      t: `Write the Reynolds number and say it combines four variables into one. This is the standard example used to introduce the idea.`},

    3: {i: 2,
      s: `The big aim is to find the steady "match point" of an engine, for example where a compressor and a turbine balance. Dimensional analysis shortens the testing, saves money and lets a small model predict a big machine.`,
      d: `<b>Ultimate goal:</b> to find the steady-state operating (match) point of an engine, such as the balance between a compressor and a turbine.<br><b>Advantages:</b> (1) <b>Fewer experiments:</b> many variables become a few non-dimensional quantities. (2) <b>Saves time and cost</b> in design and testing. (3) <b>Simpler design variation:</b> vary the groups instead of each separate parameter. (4) <b>Prototype prediction:</b> a full-size machine is predicted from a small-scale model. (5) <b>Machine selection:</b> helps find the type of machine with the best efficiency for a given head, speed and flow.`,
      k: [`Aim: find the match point (e.g. compressor with turbine)`, `Five advantages: fewer tests, time and cost, easier variation, prototype prediction, machine selection`],
      t: `"List the advantages of dimensional analysis" is an easy 5-marker. Learn the five bold headings.`},

    4: {i: 3,
      s: `Dimensional analysis is a technique that turns many physical variables into a few dimensionless ones. It works because every correct physical equation has the same dimensions on both sides.`,
      d: `<b>Definition.</b> A mathematical technique that reduces many physical variables to a manageable number of non-dimensional quantities. It assumes the process can be described by a <b>dimensionally homogeneous</b> equation.<br><b>Fundamental quantities:</b> independent basic dimensions with no relation to one another: mass M, length L, time T, temperature (θ).<br><b>Derived (secondary) quantities:</b> built from the fundamental ones: area, volume, velocity, force, acceleration.<br><b>Dimensional homogeneity:</b> an equation is homogeneous if the fundamental dimensions (M, L, T) have the same powers on both sides.`,
      k: [`Fundamental: M, L, T (and temperature)`, `Derived: area, volume, velocity, force, acceleration`, `Homogeneous: same powers of M, L, T on both sides`],
      t: `Write the definition, name the fundamental dimensions and state dimensional homogeneity in one line each.`},

    5: {i: 2,
      s: `Check Q = A × V: the dimensions on the left, L³/T, equal the dimensions on the right, L² × L/T. They match, so the equation is dimensionally homogeneous.`,
      d: `Take the flow-rate equation Q = A·V. Substituting the fundamental dimensions: [Q] = L³/T and [A][V] = L² × (L/T) = L³/T. Both sides are identical, so the equation is dimensionally homogeneous. A physically correct equation must always pass this test; it is also a quick way to catch errors in a formula.`,
      k: [`Q = A·V`, `L³/T = L² · L/T`, `Both sides equal → homogeneous`],
      tv: `<div class="eqbox">Q = A · V</div>
 <div class="eqbox">L³/T = L² × L/T = L³/T</div>
 <p>The dimensions on both sides match identically, so the equation is <b>dimensionally homogeneous</b>.</p>`,
      t: `In a "check the homogeneity" question write each variable's dimensions in M, L, T and show that both sides come out equal.`},

    6: {i: 3,
      s: `For a pump or other machine with an incompressible fluid, three dimensionless coefficients (flow, head and power) describe the performance. Combining them removes the diameter and gives the specific speed.`,
      d: `Head H, power P and efficiency η depend on speed N, diameter D, flow Q, density ρ and viscosity μ. The critical coefficients are:<br><b>Flow (capacity) coefficient Q/(ND³):</b> volume flow rate of a unit-diameter runner at unit speed.<br><b>Head (specific head) coefficient gH/(N²D²):</b> the ratio of the kinetic energy spouting under head H to the kinetic energy of the rotor's tangential speed.<br><b>Power (specific power) coefficient P/(ρN³D⁵):</b> relates power, density, speed and diameter.<br><b>Specific speed N<sub>s</sub>:</b> combines them so that the diameter D drops out. It classifies machines by shape and guides the designer to the maximum efficiency. Pumps: N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup>. Turbines: N<sub>s</sub> = N√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>).`,
      k: [`Flow coefficient Q/(ND³)`, `Head coefficient gH/(N²D²)`, `Power coefficient P/(ρN³D⁵)`, `Specific speed removes the diameter D`],
      tv: `<div class="eqbox">Flow coefficient (capacity) = Q/(ND³)</div>
 <div class="eqbox">Head coefficient (specific head) = gH/(N²D²)</div>
 <div class="eqbox">Power coefficient (specific power) = P/(ρN³D⁵)</div>
 <div class="eqbox hot"><b>Specific speed N<sub>s</sub></b> (eliminates the diameter D)<br>Pumps: N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup><br>Turbines: N<sub>s</sub> = N√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>)</div>
 <p>These four are derived on slides 32 to 48. Specific speed classifies machines by shape and points the designer to the best-efficiency design.</p>`,
      t: `Learn the three coefficients and both specific-speed formulae by heart. They are used in every Unit III numerical.`},

    7: {i: 3,
      s: `Buckingham's π theorem says that n variables containing m basic dimensions can be grouped into n − m independent dimensionless groups, called π terms.`,
      d: `<b>Statement.</b> If there are n variables (dependent and independent) in a dimensionally homogeneous equation, and these contain m fundamental dimensions (M, L, T), they can be grouped into <b>(n − m)</b> independent non-dimensional terms. Each term is a <b>π term</b>.<br><b>Formulation.</b> A dependent variable X<sub>1</sub> depends on X<sub>2</sub>, X<sub>3</sub>, …, X<sub>n</sub>: X<sub>1</sub> = f(X<sub>2</sub>, X<sub>3</sub>, …, X<sub>n</sub>). In implicit form f<sub>1</sub>(X<sub>1</sub>, X<sub>2</sub>, …, X<sub>n</sub>) = C, with C a constant. Applying the theorem: f<sub>1</sub>(π<sub>1</sub>, π<sub>2</sub>, π<sub>3</sub>, …, π<sub>n−m</sub>) = C.`,
      k: [`n variables, m fundamental dimensions`, `Number of π terms = n − m`, `f₁(π₁, π₂, …, π_(n−m)) = C`],
      tv: `<div class="eqbox hot"><b>Buckingham's π theorem</b><br>n variables, m fundamental dimensions (M, L, T)<br>Number of independent π terms = n − m</div>
 <div class="eqbox">X<sub>1</sub> = f(X<sub>2</sub>, X<sub>3</sub>, …, X<sub>n</sub>)</div>
 <div class="eqbox">f<sub>1</sub>(X<sub>1</sub>, X<sub>2</sub>, X<sub>3</sub>, …, X<sub>n</sub>) = C</div>
 <div class="eqbox">f<sub>1</sub>(π<sub>1</sub>, π<sub>2</sub>, π<sub>3</sub>, …, π<sub>n−m</sub>) = C</div>
 <p>Each independent dimensionless term is a π term.</p>`,
      t: `State the theorem in one sentence with the words "n − m". Then say that m is normally 3 (M, L, T).`},

    8: {i: 3,
      s: `To use the theorem: write the functional relation, choose m repeating variables, and build each π term from the repeating variables and exactly one other variable. Pick repeating variables that are independent and from different groups.`,
      d: `<b>Procedure (steps 1–3).</b> (1) Write the functional relation between the variables. (2) Write it in general implicit form. (3) Choose <b>m repeating variables</b> and write each π term: it contains all the repeating variables and <b>exactly one</b> of the remaining (non-repeating) variables.<br><b>Rules for the repeating variables.</b> Their number equals m. (a) <b>Independence:</b> as far as possible, choose independent variables. (b) <b>Property diversity:</b> one geometric (diameter, length), one flow (velocity, speed), one fluid property (density, viscosity).`,
      k: [`Choose m repeating variables`, `Each π = repeating variables × ONE other variable`, `Geometric + flow + fluid property`, `Repeating variables must be independent`],
      t: `Typical choice for turbomachines: diameter d (geometry), speed N (flow), density ρ (fluid). Say so in your answer.`},

    9: {i: 2,
      s: `Variables of a turbomachine fall into three groups: geometric (lengths), flow or kinematic (speeds and flow rates) and fluid or dynamic (density, viscosity, forces, power).`,
      d: `<b>1. Geometric:</b> length l, diameter d, thickness t, height h.<br><b>2. Flow (kinematic):</b> velocity u = πdN/60, flow velocity V, rotational speed N, volume flow rate Q, mass flow rate ṁ, acceleration a, angular velocity ω.<br><b>3. Fluid (dynamic):</b> gas density ρ, dynamic viscosity μ, bulk modulus K, pressure difference Δp, force F, power P, elasticity e, surface tension σ, specific weight w, stress, resistance Ω.<br>This grouping is used to choose repeating variables: take one from each group.`,
      k: [`Geometric: l, d, t, h`, `Flow: u, V, N, Q, ṁ, a, ω`, `Fluid: ρ, μ, K, Δp, F, P, e, σ, w`, `Pick one repeating variable from each group`],
      tv: `<table><tr><th>1. Geometric</th><th>2. Flow (kinematic)</th><th>3. Fluid (dynamic)</th></tr>
 <tr><td>Length l<br>Diameter d<br>Thickness t<br>Height h</td><td>Velocity u = πdN/60<br>Flow velocity V<br>Rotation speed N<br>Volume flow Q<br>Mass flow ṁ<br>Acceleration a<br>Angular velocity ω</td><td>Gas density ρ<br>Dynamic viscosity μ<br>Bulk modulus K<br>Pressure difference Δp<br>Force F, Power P<br>Elasticity e<br>Surface tension σ<br>Specific weight w<br>Stress, resistance Ω</td></tr></table>`},

    10: {i: 3,
      s: `Steps 4 to 7: give the repeating variables unknown powers, equate the powers of M, L and T on both sides, solve for the powers, then substitute back into each π term.`,
      d: `<b>Procedure (steps 4–7).</b> (4) <b>Assign exponents:</b> write the repeating variables in exponential form, for example d<sup>a</sup>N<sup>b</sup>ρ<sup>c</sup>. (5) <b>Solve for exponents:</b> using dimensional homogeneity, equate the powers of M, L and T on both sides to obtain simultaneous equations for a, b, c. (6) <b>Substitute</b> the exponents back into the respective π terms. (7) <b>Write the final equation</b> in the required form.<br>A π term is dimensionless, so it may be inverted, or raised to a power, without changing its dimensions.`,
      k: [`4: exponents a, b, c`, `5: equate powers of M, L, T`, `6: substitute back`, `7: write the final relation`],
      t: `In every π-theorem answer, show the three equations (for M, L and T) for each term. The marks are for the steps.`},

    11: {i: 3,
      s: `Table 3.1 lists the M-L-T dimensions of common quantities. You need these to solve the exponent equations: for example force is ML/T² and power is ML²/T³.`,
      d: `<b>Table 3.1 (part 1).</b> Surface (area) A: L². Volume v: L³. Density ρ: M/L³. Velocity V: L/T. Acceleration a: L/T². Momentum: ML/T. Force F: ML/T². Pressure and stress p: M/(LT²). Energy and work (W.D.): ML²/T². Power P: ML²/T³. Moment of inertia I: ML².<br><i>Note:</i> the slide prints momentum as ML²/T, which is the dimension of <b>angular</b> momentum; linear momentum is mass × velocity = ML/T.`,
      k: [`Force ML/T²`, `Pressure M/(LT²)`, `Work ML²/T²`, `Power ML²/T³`, `Density M/L³`],
      tv: `<table><tr><th>Symbol</th><th>Quantity</th><th>Dimensions</th></tr>
 <tr><td>A</td><td>Surface</td><td>L²</td></tr>
 <tr><td>v</td><td>Volume</td><td>L³</td></tr>
 <tr><td>ρ</td><td>Density</td><td>M/L³</td></tr>
 <tr><td>V</td><td>Velocity</td><td>L/T</td></tr>
 <tr><td>a</td><td>Acceleration</td><td>L/T²</td></tr>
 <tr><td>M</td><td>Momentum</td><td>ML/T <small>(slide prints ML²/T, the angular momentum)</small></td></tr>
 <tr><td>F</td><td>Force</td><td>ML/T²</td></tr>
 <tr><td>p</td><td>Pressure and stress</td><td>M/(LT²)</td></tr>
 <tr><td>W.D.</td><td>Energy and work</td><td>ML²/T²</td></tr>
 <tr><td>P</td><td>Power</td><td>ML²/T³</td></tr>
 <tr><td>I</td><td>Moment of inertia</td><td>ML²</td></tr></table>`,
      t: `You will be given no table in the exam. Remember force = mass × acceleration, then build pressure, work and power from it.`},

    12: {i: 3,
      s: `The rest of Table 3.1: angular velocity 1/T, torque ML²/T², viscosity M/(LT), surface tension M/T², specific weight M/(L²T²), enthalpy per unit mass L²/T².`,
      d: `<b>Table 3.1 (part 2).</b> Angular velocity ω: 1/T. Angular acceleration α: 1/T². Torque T: ML²/T². Modulus of elasticity e: M/(LT²). Surface tension σ: M/T². Absolute viscosity μ: M/(LT). Kinematic viscosity ν: L²/T. Angular momentum τ: ML²/T. Mass flow rate ṁ: M/T. Volume flow rate Q: L³/T. Enthalpy per unit mass h: L²/T². Rotor diameter d and machine dimensions a, b, c: L. Specific weight w: M/(L²T²).<br>Note that gH (head × gravity) has the same dimensions as enthalpy per unit mass, L²/T², which is why H or gH is treated as "specific energy" in turbomachine analysis.`,
      k: [`μ: M/(LT), ν: L²/T`, `σ: M/T², e: M/(LT²)`, `Torque: ML²/T²`, `Q: L³/T, ṁ: M/T`, `gH and h: L²/T²`],
      tv: `<table><tr><th>Symbol</th><th>Quantity</th><th>Dimensions</th></tr>
 <tr><td>ω</td><td>Angular velocity</td><td>1/T</td></tr>
 <tr><td>α</td><td>Angular acceleration</td><td>1/T²</td></tr>
 <tr><td>T</td><td>Torque</td><td>ML²/T²</td></tr>
 <tr><td>e</td><td>Modulus of elasticity</td><td>M/(LT²)</td></tr>
 <tr><td>σ</td><td>Surface tension</td><td>M/T²</td></tr>
 <tr><td>μ</td><td>Viscosity (absolute)</td><td>M/(LT)</td></tr>
 <tr><td>ν</td><td>Viscosity (kinematic)</td><td>L²/T</td></tr>
 <tr><td>τ</td><td>Angular momentum</td><td>ML²/T</td></tr>
 <tr><td>ṁ</td><td>Mass flow rate</td><td>M/T</td></tr>
 <tr><td>Q</td><td>Volume flow rate</td><td>L³/T</td></tr>
 <tr><td>h</td><td>Enthalpy per unit mass</td><td>L²/T²</td></tr>
 <tr><td>d</td><td>Rotor diameter</td><td>L</td></tr>
 <tr><td>a, b, c…</td><td>Machine dimensions</td><td>L</td></tr>
 <tr><td>w</td><td>Specific weight</td><td>M/(L²T²)</td></tr></table>`,
      t: `Memorise viscosity, surface tension and specific weight: these three are the ones students most often get wrong.`},

    13: {i: 3,
      s: `First worked example: steady flow through a duct. Nine variables and three basic dimensions give six π terms. The repeating variables are d, Q and ρ.`,
      d: `<b>System variables.</b> Steady flow of a fluid through a duct. Geometric: thickness t and diameter d. Kinematic: volume flow rate Q. Fluid properties: density ρ, viscosity μ, specific weight w, elasticity e, surface tension σ. The pressure increment Δp is the dependent variable:<br><b>Δp = f(t, d, Q, ρ, μ, w, e, σ)</b> — (3.1)<br><b>Applying the theorem.</b> n = 9 variables, m = 3 dimensions (M, L, T), so n − m = <b>6 independent π terms</b>. Repeating variables: <b>d, Q, ρ</b>, chosen because they do not form a dimensionless product. They are combined in turn with t, Δp, μ, σ, e and w.`,
      k: [`Δp = f(t, d, Q, ρ, μ, w, e, σ)`, `n = 9, m = 3 → 6 π terms`, `Repeating variables: d, Q, ρ`],
      tv: `<div class="eqbox">Δp = f(t, d, Q, ρ, μ, w, e, σ) &nbsp;— (3.1)</div>
 <p>n = 9 variables, m = 3 primary dimensions, so n − m = <b>6</b> independent π terms.</p>
 <div class="eqbox hot">Repeating variables: <b>d, Q, ρ</b><br>Combined in turn with t, Δp, μ, σ, e, w</div>
 <p>They are chosen because they do not form a dimensionless product among themselves.</p>`,
      t: `Count n, count m, subtract, then name the repeating variables. Do this first in any π-theorem answer.`},

    14: {i: 2,
      s: `π<sub>1</sub> combines the repeating variables with the thickness t. Equating the powers of M, L and T gives c₁ = 0, b₁ = 0 and a₁ = −1.`,
      d: `Write π<sub>1</sub> = d<sup>a₁</sup>Q<sup>b₁</sup>ρ<sup>c₁</sup>t. Substitute the dimensions: M⁰L⁰T⁰ = [L]<sup>a₁</sup>[L³T⁻¹]<sup>b₁</sup>[ML⁻³]<sup>c₁</sup>[L].<br>Equating the powers: <b>M:</b> c₁ = 0. <b>L:</b> a₁ + 3b₁ − 3c₁ + 1 = 0. <b>T:</b> −b₁ = 0.`,
      k: [`π₁ = d^a₁ Q^b₁ ρ^c₁ t`, `M: c₁ = 0`, `L: a₁ + 3b₁ − 3c₁ + 1 = 0`, `T: −b₁ = 0`],
      tv: `<div class="eqbox">π<sub>1</sub> = d<sup>a₁</sup> Q<sup>b₁</sup> ρ<sup>c₁</sup> t</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₁</sup> [L³T⁻¹]<sup>b₁</sup> [ML⁻³]<sup>c₁</sup> [L]</div>
 <div class="eqbox">For M: c₁ = 0<br>For L: a₁ + 3b₁ − 3c₁ + 1 = 0<br>For T: −b₁ = 0</div>`},

    15: {i: 2,
      s: `Solving gives a₁ = −1, b₁ = 0, c₁ = 0, so π<sub>1</sub> = t/d. This is just the geometrical relationship (a thickness-to-diameter ratio).`,
      d: `The simultaneous equations give a₁ = −1, b₁ = 0, c₁ = 0. Substituting: π<sub>1</sub> = d⁻¹·Q⁰·ρ⁰·t, which is<br><b>π<sub>1</sub> = t/d</b> — (1.1)<br>It is a pure geometric ratio: two ducts with the same t/d are geometrically similar.`,
      k: [`a₁ = −1, b₁ = 0, c₁ = 0`, `π₁ = t/d (Eq. 1.1)`, `A geometric ratio`],
      tv: `<div class="eqbox">a₁ = −1, &nbsp;b₁ = 0, &nbsp;c₁ = 0</div>
 <div class="eqbox hot">π<sub>1</sub> = d⁻¹ · Q⁰ · ρ⁰ · t = <b>t/d</b> &nbsp;— (1.1)</div>`},

    16: {i: 2,
      s: `π<sub>2</sub> combines the repeating variables with the pressure increment Δp. The three power equations give c₂ = −1, b₂ = −2 and a₂ = 4.`,
      d: `π<sub>2</sub> = d<sup>a₂</sup>Q<sup>b₂</sup>ρ<sup>c₂</sup>Δp. Dimensions: M⁰L⁰T⁰ = [L]<sup>a₂</sup>[L³T⁻¹]<sup>b₂</sup>[ML⁻³]<sup>c₂</sup>[ML⁻¹T⁻²].<br><b>M:</b> c₂ + 1 = 0. <b>L:</b> a₂ + 3b₂ − 3c₂ − 1 = 0. <b>T:</b> −b₂ − 2 = 0.<br>Solving: c₂ = −1, b₂ = −2, a₂ = 4.`,
      k: [`Δp has dimension M/(LT²)`, `M: c₂ + 1 = 0`, `T: −b₂ − 2 = 0`, `a₂ = 4, b₂ = −2, c₂ = −1`],
      tv: `<div class="eqbox">π<sub>2</sub> = d<sup>a₂</sup> Q<sup>b₂</sup> ρ<sup>c₂</sup> Δp</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₂</sup> [L³T⁻¹]<sup>b₂</sup> [ML⁻³]<sup>c₂</sup> [ML⁻¹T⁻²]</div>
 <div class="eqbox">For M: c₂ + 1 = 0<br>For L: a₂ + 3b₂ − 3c₂ − 1 = 0<br>For T: −b₂ − 2 = 0</div>
 <div class="eqbox hot">c₂ = −1, &nbsp;b₂ = −2, &nbsp;a₂ = 4</div>`},

    17: {i: 3,
      s: `Substituting, π<sub>2</sub> = d⁴Δp/(Q²ρ). Since Q ∝ Vd², this becomes Δp/(ρV²): the pressure change divided by the dynamic pressure.`,
      d: `π<sub>2</sub> = d⁴Q⁻²ρ⁻¹Δp = d⁴Δp/(Q²ρ). With Q ∝ Vd², Q² ∝ V²d⁴, so π<sub>2</sub> = d⁴Δp/(V²d⁴ρ):<br><b>π<sub>2</sub> = Δp/(ρV²)</b> — (1.2)<br>This is the pressure coefficient (Euler number). Its meaning is a force ratio, shown on slide 27.`,
      k: [`π₂ = d⁴Δp/(Q²ρ)`, `Q² ∝ V²d⁴`, `π₂ = Δp/(ρV²) (Eq. 1.2)`],
      tv: `<div class="eqbox">π<sub>2</sub> = d⁴ Q⁻² ρ⁻¹ Δp = d⁴ Δp / (Q² ρ)</div>
 <p>Since Q ∝ V d², we have Q² ∝ V² d⁴. Substituting:</p>
 <div class="eqbox">π<sub>2</sub> = d⁴ Δp / (V² d⁴ ρ)</div>
 <div class="eqbox hot">π<sub>2</sub> = Δp / (ρV²) &nbsp;— (1.2)</div>`},

    18: {i: 2,
      s: `π<sub>3</sub> combines the repeating variables with viscosity μ. The equations give b₃ = −1, c₃ = −1 and a₃ = 1.`,
      d: `π<sub>3</sub> = d<sup>a₃</sup>Q<sup>b₃</sup>ρ<sup>c₃</sup>μ. Dimensions: M⁰L⁰T⁰ = [L]<sup>a₃</sup>[L³T⁻¹]<sup>b₃</sup>[ML⁻³]<sup>c₃</sup>[ML⁻¹T⁻¹].<br><b>M:</b> c₃ + 1 = 0. <b>L:</b> a₃ + 3b₃ − 3c₃ − 1 = 0. <b>T:</b> −b₃ − 1 = 0.<br>Solving: b₃ = −1, c₃ = −1, a₃ = 1.`,
      k: [`μ has dimension M/(LT)`, `T: −b₃ − 1 = 0`, `a₃ = 1, b₃ = −1, c₃ = −1`],
      tv: `<div class="eqbox">π<sub>3</sub> = d<sup>a₃</sup> Q<sup>b₃</sup> ρ<sup>c₃</sup> μ</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₃</sup> [L³T⁻¹]<sup>b₃</sup> [ML⁻³]<sup>c₃</sup> [ML⁻¹T⁻¹]</div>
 <div class="eqbox">For M: c₃ + 1 = 0<br>For L: a₃ + 3b₃ − 3c₃ − 1 = 0<br>For T: −b₃ − 1 = 0</div>
 <div class="eqbox hot">b₃ = −1, &nbsp;c₃ = −1, &nbsp;a₃ = 1</div>`},

    19: {i: 3,
      s: `Substituting and using Q ∝ Vd², then inverting, π<sub>3</sub> = ρVd/μ: the Reynolds number.`,
      d: `π<sub>3</sub> = d·Q⁻¹ρ⁻¹μ = μd/(ρQ). With Q ∝ Vd², π<sub>3</sub> = μd/(ρVd²) = μ/(ρdV). Inverting this dimensionless group gives the standard form:<br><b>π<sub>3</sub> = ρdV/μ = Reynolds number</b> — (1.3)`,
      k: [`π₃ = μd/(ρQ) = μ/(ρdV)`, `Inverted: π₃ = ρdV/μ`, `Reynolds number (Eq. 1.3)`],
      tv: `<div class="eqbox">π<sub>3</sub> = d¹ Q⁻¹ ρ⁻¹ μ = μd / (ρ Q)</div>
 <p>With Q ∝ V × d²:</p>
 <div class="eqbox">π<sub>3</sub> = μd / (ρ V d²) = μ / (ρ d V)</div>
 <p>Inverting gives the standard dimensionless group:</p>
 <div class="eqbox hot">π<sub>3</sub> = ρ d V / μ = <b>Reynolds number</b> &nbsp;— (1.3)</div>`},

    20: {i: 2,
      s: `π<sub>4</sub> combines the repeating variables with surface tension σ. The equations give b₄ = −2, c₄ = −1 and a₄ = 3.`,
      d: `π<sub>4</sub> = d<sup>a₄</sup>Q<sup>b₄</sup>ρ<sup>c₄</sup>σ. Dimensions: M⁰L⁰T⁰ = [L]<sup>a₄</sup>[L³T⁻¹]<sup>b₄</sup>[ML⁻³]<sup>c₄</sup>[MT⁻²].<br><b>M:</b> c₄ + 1 = 0. <b>L:</b> a₄ + 3b₄ − 3c₄ = 0. <b>T:</b> −b₄ − 2 = 0.<br>Solving: b₄ = −2, c₄ = −1, a₄ = 3.`,
      k: [`σ has dimension M/T²`, `L: a₄ + 3b₄ − 3c₄ = 0`, `a₄ = 3, b₄ = −2, c₄ = −1`],
      tv: `<div class="eqbox">π<sub>4</sub> = d<sup>a₄</sup> Q<sup>b₄</sup> ρ<sup>c₄</sup> σ</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₄</sup> [L³T⁻¹]<sup>b₄</sup> [ML⁻³]<sup>c₄</sup> [MT⁻²]</div>
 <div class="eqbox">For M: c₄ + 1 = 0<br>For L: a₄ + 3b₄ − 3c₄ = 0<br>For T: −b₄ − 2 = 0</div>
 <div class="eqbox hot">b₄ = −2, &nbsp;c₄ = −1, &nbsp;a₄ = 3</div>`},

    21: {i: 3,
      s: `Substituting and inverting, π<sub>4</sub> = ρV²d/σ: the Weber number.`,
      d: `π<sub>4</sub> = d³Q⁻²ρ⁻¹σ = σd³/(Q²ρ). With Q² ∝ V²d⁴: π<sub>4</sub> = σd³/(V²d⁴ρ) = σ/(ρV²d). Inverting:<br><b>π<sub>4</sub> = ρV²d/σ = Weber number</b> — (1.4)`,
      k: [`π₄ = σ/(ρV²d)`, `Inverted: ρV²d/σ`, `Weber number (Eq. 1.4)`],
      tv: `<div class="eqbox">π<sub>4</sub> = d³ Q⁻² ρ⁻¹ σ = σ d³ / (Q² ρ)</div>
 <p>Substituting Q² ∝ V² d⁴:</p>
 <div class="eqbox">π<sub>4</sub> = σ d³ / (V² d⁴ ρ) = σ / (ρ V² d)</div>
 <div class="eqbox hot">π<sub>4</sub> = ρ V² d / σ = <b>Weber number</b> &nbsp;— (1.4)</div>`},

    22: {i: 2,
      s: `π<sub>5</sub> combines the repeating variables with the elasticity e. Its equations are the same as those of π<sub>2</sub>: b₅ = −2, c₅ = −1, a₅ = 4.`,
      d: `π<sub>5</sub> = d<sup>a₅</sup>Q<sup>b₅</sup>ρ<sup>c₅</sup>e. The modulus of elasticity has the same dimensions as pressure, M/(LT²), so the equations repeat those of π<sub>2</sub>.<br><b>M:</b> c₅ + 1 = 0. <b>L:</b> a₅ + 3b₅ − 3c₅ − 1 = 0. <b>T:</b> −b₅ − 2 = 0.<br>Solving: b₅ = −2, c₅ = −1, a₅ = 4.`,
      k: [`e has the dimension of pressure, M/(LT²)`, `Same equations as π₂`, `a₅ = 4, b₅ = −2, c₅ = −1`],
      tv: `<div class="eqbox">π<sub>5</sub> = d<sup>a₅</sup> Q<sup>b₅</sup> ρ<sup>c₅</sup> e</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₅</sup> [L³T⁻¹]<sup>b₅</sup> [ML⁻³]<sup>c₅</sup> [ML⁻¹T⁻²]</div>
 <div class="eqbox">For M: c₅ + 1 = 0<br>For L: a₅ + 3b₅ − 3c₅ − 1 = 0<br>For T: −b₅ − 2 = 0</div>
 <div class="eqbox hot">b₅ = −2, &nbsp;c₅ = −1, &nbsp;a₅ = 4</div>`},

    23: {i: 3,
      s: `Substituting, π<sub>5</sub> = ed⁴/(Q²ρ), which becomes e/(ρV²); inverted, ρV²/e. This is the square of the Mach number.`,
      d: `π<sub>5</sub> = d⁴Q⁻²ρ⁻¹e = ed⁴/(Q²ρ). With Q² ∝ V²d⁴: π<sub>5</sub> = e/(ρV²). It can be inverted:<br><b>π<sub>5</sub> = ρV²/e</b> — (1.5)<br>Slide 30 shows that this equals M², the square of the Mach number.`,
      k: [`π₅ = e/(ρV²)`, `Inverted: ρV²/e (Eq. 1.5)`, `= M² (Mach number squared)`],
      tv: `<div class="eqbox">π<sub>5</sub> = d⁴ Q⁻² ρ⁻¹ e = e d⁴ / (Q² ρ)</div>
 <p>Substituting Q² ∝ V² d⁴:</p>
 <div class="eqbox">π<sub>5</sub> = e d⁴ / (V² d⁴ ρ) = e / (ρ V²)</div>
 <div class="eqbox hot">π<sub>5</sub> = ρ V² / e &nbsp;— (1.5)</div>`},

    24: {i: 2,
      s: `π<sub>6</sub> combines the repeating variables with the specific weight w. The equations give b₆ = −2, c₆ = −1 and a₆ = 5.`,
      d: `π<sub>6</sub> = d<sup>a₆</sup>Q<sup>b₆</sup>ρ<sup>c₆</sup>w. Dimensions: M⁰L⁰T⁰ = [L]<sup>a₆</sup>[L³T⁻¹]<sup>b₆</sup>[ML⁻³]<sup>c₆</sup>[ML⁻²T⁻²].<br><b>M:</b> c₆ + 1 = 0. <b>L:</b> a₆ + 3b₆ − 3c₆ − 2 = 0. <b>T:</b> −b₆ − 2 = 0.<br>Solving: b₆ = −2, c₆ = −1, a₆ = 5.`,
      k: [`w has dimension M/(L²T²)`, `L: a₆ + 3b₆ − 3c₆ − 2 = 0`, `a₆ = 5, b₆ = −2, c₆ = −1`],
      tv: `<div class="eqbox">π<sub>6</sub> = d<sup>a₆</sup> Q<sup>b₆</sup> ρ<sup>c₆</sup> w</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₆</sup> [L³T⁻¹]<sup>b₆</sup> [ML⁻³]<sup>c₆</sup> [ML⁻²T⁻²]</div>
 <div class="eqbox">For M: c₆ + 1 = 0<br>For L: a₆ + 3b₆ − 3c₆ − 2 = 0<br>For T: −b₆ − 2 = 0</div>
 <div class="eqbox hot">b₆ = −2, &nbsp;c₆ = −1, &nbsp;a₆ = 5</div>`},

    25: {i: 3,
      s: `Substituting, π<sub>6</sub> = wd⁵/(Q²ρ) = wd/(ρV²); inverted, ρV²/(wd). This is the Froude number group. Inverting a π term does not change its dimensions.`,
      d: `π<sub>6</sub> = d⁵Q⁻²ρ⁻¹w = wd⁵/(Q²ρ). With Q² ∝ V²d⁴: π<sub>6</sub> = wd/(ρV²). Inverted:<br><b>π<sub>6</sub> = ρV²/(wd)</b> — (1.6)<br><b>Note.</b> Equations (1.3) to (1.6) are dimensionless. Even if inverted, their dimensions are not affected; they are inverted only for convenience, so that the inertia term ρV² appears in the numerator.<br>The six results: t/d, Δp/(ρV²), Re, We, ρV²/e (= M²) and ρV²/(wd) (Froude).`,
      k: [`π₆ = wd/(ρV²) → ρV²/(wd) (Eq. 1.6)`, `Inverting a π term is allowed`, `Six groups: t/d, Δp/ρV², Re, We, M², Fr`],
      tv: `<div class="eqbox">π<sub>6</sub> = d⁵ Q⁻² ρ⁻¹ w = w d⁵ / (Q² ρ)</div>
 <p>Substituting Q² ∝ V² d⁴:</p>
 <div class="eqbox">π<sub>6</sub> = w d / (ρ V²)</div>
 <div class="eqbox hot">π<sub>6</sub> = ρ V² / (w d) &nbsp;— (1.6)</div>
 <p><b>Note:</b> Equations (1.3) to (1.6) are dimensionless. Even if inverted, the dimensions are not affected; they are inverted only for convenience.</p>`,
      t: `After deriving the six terms, name them: Re, We, M² and Fr are the four named numbers. This is the first half of the "physical significance" question.`}
  });
})();
