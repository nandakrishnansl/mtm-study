/* Unit III: numericals and derivations (DRAFT, teacher to verify). Every number below was checked by a script.
   Unit III slides have no worked numericals of their own; the past-paper numericals (pump and turbine scaling) are in the question bank.
   N1-N8 are extra practice in the style of the course; N4 and N5 use the same similarity laws as those past-paper questions. */
MTM.c.u3 = MTM.c.u3 || {sl: {}};
Object.assign(MTM.c.u3, {
  num: [
    {id: 'N1', topic: '3.2', marks: 3,
      title: 'Dimensional homogeneity of the hydraulic power equation',
      q: 'Show that the equation for the hydraulic power of a pump, P = ρgQH, is dimensionally homogeneous, and show that the Reynolds number ρVd/μ is dimensionless.',
      given: ['Table 3.1: ρ = M/L³, g = L/T², Q = L³/T, H = L, P = ML²/T³', 'V = L/T, d = L, μ = M/(LT)'],
      find: 'Dimensions of both sides',
      steps: [
        {h: 'Step 1: right-hand side', b: '[ρgQH] = (M/L³)(L/T²)(L³/T)(L) = M·L<sup>−3+1+3+1</sup>·T<sup>−2−1</sup> = <b>ML²/T³</b>.'},
        {h: 'Step 2: left-hand side', b: '[P] = ML²/T³ (Table 3.1: power).'},
        {h: 'Step 3: compare', b: 'Both sides have M¹L²T⁻³, so P = ρgQH is <b>dimensionally homogeneous</b>.'},
        {h: 'Step 4: Reynolds number', b: '[ρVd/μ] = (M/L³)(L/T)(L)/(M/(LT)) = (M·L<sup>−3+1+1</sup>·T<sup>−1</sup>)/(M·L<sup>−1</sup>·T<sup>−1</sup>) = M<sup>0</sup>L<sup>0</sup>T<sup>0</sup>. It is <b>dimensionless</b>.'}
      ],
      ans: 'Both sides of P = ρgQH are ML²/T³; Re has dimensions M⁰L⁰T⁰',
      slides: [10, 11, 12]},

    {id: 'N2', topic: '3.2.1', marks: 8,
      title: 'Buckingham π theorem: pressure drop in a rough pipe',
      q: 'The pressure drop Δp in a pipe of length L, diameter d and roughness height k depends on the mean velocity V, the fluid density ρ and the viscosity μ. Using Buckingham’s π theorem, with d, V and ρ as repeating variables, obtain the dimensionless groups.',
      given: ['Variables: Δp, L, d, k, V, ρ, μ', 'Repeating variables: d, V, ρ'],
      find: 'The independent π terms and the final functional form',
      steps: [
        {h: 'Step 1: count', b: 'n = 7 variables (Δp, L, d, k, V, ρ, μ), m = 3 dimensions (M, L, T). Number of π terms = n − m = <b>4</b>.'},
        {h: 'Step 2: repeating variables', b: 'd (geometric), V (flow), ρ (fluid) are independent and cover the three property groups. Each π contains d<sup>a</sup>V<sup>b</sup>ρ<sup>c</sup> and one other variable.'},
        {h: 'Step 3: π<sub>1</sub> with Δp', b: 'π<sub>1</sub> = d<sup>a</sup>V<sup>b</sup>ρ<sup>c</sup>Δp. With Δp = M L⁻¹T⁻²:<br>M: c + 1 = 0 → c = −1. T: −b − 2 = 0 → b = −2. L: a + b − 3c − 1 = 0 → a − 2 + 3 − 1 = 0 → a = 0.<br><b>π<sub>1</sub> = Δp/(ρV²)</b>.'},
        {h: 'Step 4: π<sub>2</sub> with μ', b: 'π<sub>2</sub> = d<sup>a</sup>V<sup>b</sup>ρ<sup>c</sup>μ with μ = M L⁻¹T⁻¹:<br>M: c + 1 = 0 → c = −1. T: −b − 1 = 0 → b = −1. L: a + b − 3c − 1 = 0 → a − 1 + 3 − 1 = 0 → a = −1.<br>π<sub>2</sub> = μ/(ρVd); inverted, <b>π<sub>2</sub> = ρVd/μ = Re</b>.'},
        {h: 'Step 5: π<sub>3</sub> and π<sub>4</sub>', b: 'The lengths L and k are already of dimension L, so only d is needed to make them dimensionless: <b>π<sub>3</sub> = L/d</b> (a = −1, b = c = 0) and <b>π<sub>4</sub> = k/d</b>.'},
        {h: 'Step 6: result', b: 'Δp/(ρV²) = f(Re, L/d, k/d). Experiment shows Δp is proportional to L/d, so Δp = (L/d)(ρV²/2)·λ(Re, k/d), where λ is the friction factor: this is the Darcy–Weisbach form.'}
      ],
      ans: 'π<sub>1</sub> = Δp/(ρV²), π<sub>2</sub> = Re = ρVd/μ, π<sub>3</sub> = L/d, π<sub>4</sub> = k/d; Δp/(ρV²) = f(Re, L/d, k/d)',
      slides: [13, 17, 19, 25]},

    {id: 'N3', topic: '3.2.3', marks: 6,
      title: 'Buckingham π theorem: torque of a turbomachine',
      q: 'The torque T on the shaft of an incompressible-flow turbomachine depends on the fluid density ρ, the speed N, the rotor diameter d and the fluid viscosity μ. Using d, N and ρ as repeating variables, find the dimensionless groups.',
      given: ['Variables: T, ρ, N, d, μ', 'Repeating variables: d, N, ρ', 'T = ML²T⁻², N = T⁻¹, μ = ML⁻¹T⁻¹'],
      find: 'The π terms',
      steps: [
        {h: 'Step 1: count', b: 'n = 5, m = 3, so n − m = <b>2</b> π terms.'},
        {h: 'Step 2: π<sub>1</sub> with the torque', b: 'π<sub>1</sub> = d<sup>a</sup>N<sup>b</sup>ρ<sup>c</sup>T.<br>M: c + 1 = 0 → c = −1. T: −b − 2 = 0 → b = −2. L: a − 3c + 2 = 0 → a + 3 + 2 = 0 → a = −5.<br><b>π<sub>1</sub> = T/(ρN²d⁵)</b>, the torque coefficient.'},
        {h: 'Step 3: π<sub>2</sub> with the viscosity', b: 'The set is the same as for the turbomachine analysis: c = −1, b = −1, a = −2, so π<sub>2</sub> = μ/(ρNd²); inverted <b>π<sub>2</sub> = ρNd²/μ</b>, a Reynolds number.'},
        {h: 'Step 4: result and a check', b: 'T/(ρN²d⁵) = f(ρNd²/μ).<br>Check against the power coefficient: P = Tω = 2πNT, so P/(ρN³d⁵) = 2π·T/(ρN²d⁵), the same group times 2π ✓.'}
      ],
      ans: 'T/(ρN²d⁵) = f(ρNd²/μ)',
      slides: [34, 37, 38, 39, 40]},

    {id: 'N4', topic: '3.3', marks: 5,
      title: 'Affinity laws: the same pump at a higher speed',
      q: 'A centrifugal pump running at 1450 rpm delivers 0.08 m³/s against a head of 25 m and takes 28 kW. Find the flow, head and power when the same pump runs at 1750 rpm, assuming the efficiency is unchanged.',
      given: ['N<sub>1</sub> = 1450 rpm, Q<sub>1</sub> = 0.08 m³/s, H<sub>1</sub> = 25 m, P<sub>1</sub> = 28 kW', 'N<sub>2</sub> = 1750 rpm', 'Same pump: d<sub>2</sub> = d<sub>1</sub>, same fluid, equal efficiency'],
      find: 'Q<sub>2</sub>, H<sub>2</sub>, P<sub>2</sub>',
      steps: [
        {h: 'Step 1: the similarity groups', b: 'For the same pump (d and ρ unchanged) the coefficients Q/(Nd³), gH/(N²d²) and P/(ρN³d⁵) stay constant, so Q ∝ N, H ∝ N² and P ∝ N³.'},
        {h: 'Step 2: speed ratio', b: 'N<sub>2</sub>/N<sub>1</sub> = 1750/1450 = <b>1.2069</b>.'},
        {h: 'Step 3: flow', b: 'Q<sub>2</sub> = Q<sub>1</sub>(N<sub>2</sub>/N<sub>1</sub>) = 0.08 × 1.2069 = <b>0.0966 m³/s</b>.'},
        {h: 'Step 4: head', b: 'H<sub>2</sub> = H<sub>1</sub>(N<sub>2</sub>/N<sub>1</sub>)² = 25 × 1.4565 = <b>36.4 m</b>.'},
        {h: 'Step 5: power', b: 'P<sub>2</sub> = P<sub>1</sub>(N<sub>2</sub>/N<sub>1</sub>)³ = 28 × 1.7580 = <b>49.2 kW</b>.<br><i>Check:</i> the original efficiency is ρgQ<sub>1</sub>H<sub>1</sub>/P<sub>1</sub> = 19.62/28 = 0.701. At the new speed ρgQ<sub>2</sub>H<sub>2</sub>/P<sub>2</sub> = 9.81 × 0.09655 × 36.41/49.22 = 0.701 ✓.'}
      ],
      ans: 'Q<sub>2</sub> = 0.0966 m³/s, H<sub>2</sub> = 36.4 m, P<sub>2</sub> = 49.2 kW',
      slides: [41, 42, 43]},

    {id: 'N5', topic: '3.3', marks: 8,
      title: 'Model turbine to prototype, with the scale correction to efficiency',
      q: 'A model turbine of 0.3 m diameter runs at 600 rpm under a head of 8 m and develops 15 kW at an efficiency of 85 %. The prototype is geometrically similar, of 1.8 m diameter, and works under a head of 40 m. Find (a) the speed, (b) the flow rate and (c) the power of the prototype, first assuming equal efficiency, and then (d) using η = 1 − (1 − η′)(d′/d)<sup>1/5</sup> for the prototype efficiency.',
      given: ['Model: d′ = 0.3 m, N′ = 600 rpm, H′ = 8 m, P′ = 15 kW, η′ = 0.85', 'Prototype: d = 1.8 m, H = 40 m', 'ρ = 1000 kg/m³, g = 9.81 m/s²'],
      find: 'N, Q, P of the prototype, and the corrected efficiency',
      steps: [
        {h: 'Step 1: ratios', b: 'd/d′ = 1.8/0.3 = <b>6</b>; H/H′ = 40/8 = <b>5</b>.'},
        {h: 'Step 2: speed (head coefficient)', b: 'gH/(N²d²) is equal, so N = N′(d′/d)√(H/H′) = 600 × (1/6) × √5 = <b>223.6 rpm</b>.'},
        {h: 'Step 3: model flow', b: 'P′ = η′ρgQ′H′, so Q′ = 15 000/(0.85 × 1000 × 9.81 × 8) = 0.2249 m³/s.'},
        {h: 'Step 4: prototype flow (flow coefficient)', b: 'Q/(Nd³) equal, so Q = Q′(N/N′)(d/d′)³ = 0.2249 × 0.3727 × 216 = <b>18.10 m³/s</b>. (Same result from Q ∝ d²√H: 0.2249 × 36 × √5 = 18.10 m³/s.)'},
        {h: 'Step 5: power with equal efficiency', b: 'P = P′(d/d′)²(H/H′)<sup>3/2</sup> = 15 × 36 × 11.18 = <b>6037 kW</b> (about 6.04 MW).<br><i>Check:</i> P = ηρgQH = 0.85 × 1000 × 9.81 × 18.10 × 40 = 6037 kW ✓, and P′(N/N′)³(d/d′)⁵ = 15 × 0.0518 × 7776 = 6037 kW ✓.'},
        {h: 'Step 6: efficiency correction', b: 'η = 1 − (1 − η′)(d′/d)<sup>1/5</sup> = 1 − 0.15 × (1/6)<sup>0.2</sup> = 1 − 0.15 × 0.6988 = <b>0.895</b>. (The slide does not define the primes; the usual convention is that primed quantities are the model’s.)'},
        {h: 'Step 7: corrected power', b: 'With the same flow, P = ηρgQH = 0.8952 × 1000 × 9.81 × 18.10 × 40 = 6358 kW <b>≈ 6.36 MW</b>. The larger machine is better than its model, so the equal-efficiency estimate is on the safe (low) side.'}
      ],
      ans: 'N = 223.6 rpm, Q = 18.1 m³/s, P ≈ 6.04 MW at equal efficiency; η = 0.895 and P ≈ 6.36 MW with the scale correction',
      slides: [41, 42, 43, 44]},

    {id: 'N6', topic: '3.5', marks: 5,
      title: 'Specific speed of a water turbine',
      q: 'A water turbine develops 10 MW at 125 rpm under a net head of 30 m. Find its specific speed (a) in the dimensional form N√P/H<sup>5/4</sup> (rpm, kW, m) and (b) in the dimensionless form Ω√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>), and say which type of turbine it is.',
      given: ['P = 10 MW = 10⁷ W = 10⁴ kW', 'N = 125 rpm', 'H = 30 m', 'ρ = 1000 kg/m³, g = 9.81 m/s²'],
      find: 'N<sub>ST</sub> (both forms) and the machine type',
      steps: [
        {h: 'Step 1: dimensional form', b: 'N<sub>ST</sub> = N√P/H<sup>5/4</sup> = 125 × √10 000/30<sup>1.25</sup> = 125 × 100/70.2 = <b>178</b> (rpm, kW, m).'},
        {h: 'Step 2: angular speed', b: 'Ω = 2πN/60 = 2π × 125/60 = 13.09 rad/s.'},
        {h: 'Step 3: dimensionless form', b: 'gH = 9.81 × 30 = 294.3 m²/s². (gH)<sup>5/4</sup> = 1219.<br>N<sub>ST</sub> = Ω√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>) = 13.09 × √10⁷/(√1000 × 1218) = 13.09 × 3162.3/(31.62 × 1219) = <b>1.07</b>.'},
        {h: 'Step 4: machine type', b: 'On the plot of ranges (slide 50) N<sub>s</sub> = 1.07 lies within the <b>Francis turbine</b> band (about 0.23 to 1.9), not in the Pelton (up to about 0.3) or Kaplan (about 2 to 6) bands.'},
        {h: 'Remark', b: 'The two numbers differ by the unit factors only: the form must be quoted with its units. If N is taken in rps instead of rad/s, the dimensionless value would be 0.171, 2π times smaller, and would no longer match the plot.'}
      ],
      ans: 'N<sub>ST</sub> ≈ 178 (rpm, kW, m); dimensionless N<sub>s</sub> ≈ 1.07 (N in rad/s): a Francis turbine',
      slides: [46, 47]},

    {id: 'N7', topic: '3.5', marks: 5,
      title: 'Specific speed of a pump, and the effect of a higher head',
      q: 'A pump delivers 0.25 m³/s against a total head of 40 m at 1450 rpm. Find the specific speed in the dimensionless form Ω√Q/(gH)<sup>3/4</sup> and in the dimensional form N√Q/H<sup>3/4</sup>, name the pump type, and find the specific speed if the head is raised to 160 m at the same speed and flow.',
      given: ['Q = 0.25 m³/s', 'H = 40 m (second case 160 m)', 'N = 1450 rpm', 'g = 9.81 m/s²'],
      find: 'N<sub>s</sub> (both forms), the type, N<sub>s</sub> at 160 m',
      steps: [
        {h: 'Step 1: angular speed', b: 'Ω = 2π × 1450/60 = 151.84 rad/s.'},
        {h: 'Step 2: dimensionless specific speed', b: 'gH = 9.81 × 40 = 392.4 m²/s²; (gH)<sup>3/4</sup> = 88.17; √Q = 0.5.<br>N<sub>s</sub> = 151.84 × 0.5/88.17 = <b>0.861</b>.'},
        {h: 'Step 3: dimensional form', b: 'N√Q/H<sup>3/4</sup> = 1450 × 0.5/40<sup>0.75</sup> = 725/15.90 = <b>45.6</b> (rpm, m³/s, m).'},
        {h: 'Step 4: type', b: 'N<sub>s</sub> = 0.86 lies in the centrifugal (radial) pump band, about 0.2 to 1.2 on the plot (slide 50).'},
        {h: 'Step 5: head raised to 160 m', b: 'N<sub>s</sub> ∝ H<sup>−3/4</sup>, so N<sub>s</sub> = 0.861 × (1/4)<sup>3/4</sup> = 0.861 × 0.3536 = <b>0.304</b>. A higher head at the same speed and flow gives a narrower, more radial impeller; a single-stage pump with such a low N<sub>s</sub> would be inefficient, so a multistage pump or a higher speed would be considered.'}
      ],
      ans: 'N<sub>s</sub> ≈ 0.86 (dimensionless) or 45.6 (rpm, m³/s, m): a centrifugal pump; 0.30 at 160 m',
      slides: [45, 47, 48]},

    {id: 'N8', topic: '3.2.2', marks: 5,
      title: 'Dynamic similarity of a ship model: Froude scaling',
      q: 'A ship model is built to a scale of 1:25 and is towed in the same water. For gravity (wave-making) similarity, find the model speed corresponding to a full-size speed of 15 knots, the ratio of the times, and the ratio of the model force to the full-size force (the inertia and gravity forces scale together).',
      given: ['Length scale L<sub>m</sub>/L<sub>p</sub> = 1/25', 'V<sub>p</sub> = 15 knots = 7.717 m/s (1 knot = 0.5144 m/s)', 'Same fluid, same g'],
      find: 'V<sub>m</sub>, time ratio, force ratio',
      steps: [
        {h: 'Step 1: the matching number', b: 'Gravity forces dominate wave making, so the Froude number must be equal: V<sub>m</sub>²/(gL<sub>m</sub>) = V<sub>p</sub>²/(gL<sub>p</sub>) (slide 31: inertia force ÷ gravitational force).'},
        {h: 'Step 2: model speed', b: 'V<sub>m</sub> = V<sub>p</sub>√(L<sub>m</sub>/L<sub>p</sub>) = 7.717 × √(1/25) = 7.717/5 = <b>1.543 m/s</b> (3.0 knots).'},
        {h: 'Step 3: time ratio', b: 'Time ∝ L/V, so t<sub>m</sub>/t<sub>p</sub> = (L<sub>m</sub>/L<sub>p</sub>)/(V<sub>m</sub>/V<sub>p</sub>) = (1/25)/(1/5) = <b>1/5</b>: the model run is five times faster in time scale.'},
        {h: 'Step 4: force ratio', b: 'Inertia force F ∝ ρV²L² (slide 26: F<sub>I</sub> ∝ ρV²d²). F<sub>m</sub>/F<sub>p</sub> = (V<sub>m</sub>/V<sub>p</sub>)²(L<sub>m</sub>/L<sub>p</sub>)² = (1/25)(1/625) = 1/15 625 = <b>6.4 × 10⁻⁵</b>, which is (L<sub>m</sub>/L<sub>p</sub>)³ for the same fluid.'},
        {h: 'Remark', b: 'The Reynolds numbers of model and ship cannot both be matched in the same fluid at this speed (Re<sub>m</sub>/Re<sub>p</sub> = (1/5)(1/25) = 1/125). Therefore the Froude number is matched and the friction resistance is corrected separately.'}
      ],
      ans: 'V<sub>m</sub> = 1.54 m/s (3 knots); t<sub>m</sub>/t<sub>p</sub> = 1/5; F<sub>m</sub>/F<sub>p</sub> = 1/15 625',
      slides: [26, 31]}
  ],

  der: [
    {id: 'D1', topic: '3.2.3', title: 'π terms of an incompressible-flow turbomachine: Q/(Nd³), H/(N²d²), P/(ρN³d⁵), ρNd²/μ', slides: [32, 33, 34, 35, 36, 37, 38, 39, 40],
      steps: [
        {h: 'Step 1: variables and functional relation', b: 'The dependent variable is the power: <b>P = f[ρ, N, μ, d, Q, H]</b> (Eq. 1.12). Here H means the specific energy gH, of dimension L²/T².'},
        {h: 'Step 2: count and repeating variables', b: 'n = 7, m = 3 (M, L, T), so n − m = 4 π terms. Repeating variables <b>d, N, ρ</b> (geometric, flow, fluid).'},
        {h: 'Step 3: π<sub>1</sub> with Q', b: 'π<sub>1</sub> = d<sup>a₁</sup>N<sup>b₁</sup>ρ<sup>c₁</sup>Q. M: c₁ = 0. L: a₁ − 3c₁ + 3 = 0. T: −b₁ − 1 = 0. So a₁ = −3, b₁ = −1: <b>π<sub>1</sub> = Q/(Nd³)</b>.'},
        {h: 'Step 4: π<sub>2</sub> with H', b: 'π<sub>2</sub> = d<sup>a₂</sup>N<sup>b₂</sup>ρ<sup>c₂</sup>H. M: c₂ = 0. L: a₂ − 3c₂ + 2 = 0. T: −b₂ − 2 = 0. So a₂ = −2, b₂ = −2: <b>π<sub>2</sub> = H/(N²d²)</b>.'},
        {h: 'Step 5: π<sub>3</sub> with P', b: 'π<sub>3</sub> = d<sup>a₃</sup>N<sup>b₃</sup>ρ<sup>c₃</sup>P. M: c₃ + 1 = 0. L: a₃ − 3c₃ + 2 = 0. T: −b₃ − 3 = 0. So c₃ = −1, b₃ = −3, a₃ = −5: <b>π<sub>3</sub> = P/(ρN³d⁵)</b>.'},
        {h: 'Step 6: π<sub>4</sub> with μ', b: 'π<sub>4</sub> = d<sup>a₄</sup>N<sup>b₄</sup>ρ<sup>c₄</sup>μ. M: c₄ + 1 = 0. L: a₄ − 3c₄ − 1 = 0. T: −b₄ − 1 = 0. So c₄ = −1, b₄ = −1, a₄ = −2: π<sub>4</sub> = μ/(ρNd²); inverted <b>π<sub>4</sub> = ρNd²/μ</b>.'},
        {h: 'Step 7: final relation', b: '<b>P/(ρN³d⁵) = f[Q/(Nd³), H/(N²d²), ρNd²/μ]</b>: the power, flow, head coefficients and the Reynolds number.'}
      ]},

    {id: 'D2', topic: '3.5', title: 'Specific speed of a turbine: N<sub>ST</sub> = N√P/H<sup>5/4</sup>', slides: [46, 47, 48],
      steps: [
        {h: 'Step 1: definition', b: 'The speed of a geometrically similar turbine working under unit head and developing unit power.'},
        {h: 'Step 2: from the π terms', b: 'Combine the power coefficient π<sub>3</sub> = P/(ρN³d⁵) and the head coefficient π<sub>2</sub> = H/(N²d²) so that d drops out: N<sub>ST</sub> = π<sub>3</sub><sup>1/2</sup>/π<sub>2</sub><sup>5/4</sup> = [P/(ρN³d⁵)]<sup>1/2</sup>[N²d²/H]<sup>5/4</sup> = N√P/(ρ<sup>1/2</sup>H<sup>5/4</sup>) (d<sup>−5/2</sup>d<sup>5/2</sup> = 1 and N<sup>−3/2</sup>N<sup>5/2</sup> = N).'},
        {h: 'Step 3: from the unit-quantity definition', b: 'P ∝ ρQgH with Q ∝ d²√H, so P ∝ d²H<sup>3/2</sup>. Also N ∝ √H/d, so d ∝ √H/N. Therefore P ∝ H<sup>3/2</sup>·H/N² = H<sup>5/2</sup>/N², i.e. N ∝ H<sup>5/4</sup>/√P:<br><b>N = kH<sup>5/4</sup>/√P</b>.'},
        {h: 'Step 4: unit head, unit power', b: 'Put H = 1 and P = 1: N = N<sub>ST</sub> = k.'},
        {h: 'Step 5: substitute k back', b: '<b>N<sub>ST</sub> = N√P/H<sup>5/4</sup></b> (water turbines, ρ omitted); in full form N√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>).'}
      ]},

    {id: 'D3', topic: '3.5', title: 'Specific speed of a pump: N<sub>SP</sub> = N√Q/H<sup>3/4</sup>', slides: [45, 47, 48],
      steps: [
        {h: 'Step 1: definition', b: 'The speed of a geometrically similar centrifugal pump delivering unit quantity (1 m³/s) against a head of one metre.'},
        {h: 'Step 2: from the π terms', b: 'N<sub>s</sub> = π<sub>1</sub><sup>1/2</sup>/π<sub>2</sub><sup>3/4</sup> = [Q/(Nd³)]<sup>1/2</sup>[N²d²/H]<sup>3/4</sup> = N√Q/H<sup>3/4</sup>, with H replaced by gH in the dimensionless form. The d cancels: d<sup>−3/2</sup>d<sup>3/2</sup> = 1 and N<sup>−1/2</sup>N<sup>3/2</sup> = N.'},
        {h: 'Step 3: from similarity', b: 'Q = area × velocity ∝ d²√H<sub>m</sub>, and d ∝ √H<sub>m</sub>/N, so Q ∝ H<sub>m</sub><sup>3/2</sup>/N²: <b>Q = kH<sub>m</sub><sup>3/2</sup>/N²</b>.'},
        {h: 'Step 4: unit flow, unit head', b: 'Put H<sub>m</sub> = 1 m and Q = 1 m³/s, so N = N<sub>SP</sub>: 1 = k/N<sub>SP</sub>², so N<sub>SP</sub>² = k.'},
        {h: 'Step 5: substitute back', b: 'Q = N<sub>SP</sub>²H<sub>m</sub><sup>3/2</sup>/N², so N<sub>SP</sub> = √(QN²/H<sub>m</sub><sup>3/2</sup>) = <b>N√Q/H<sub>m</sub><sup>3/4</sup></b> (Eq. 1.34).'}
      ]},

    {id: 'D4', topic: '3.2.2', title: 'Physical significance of the π terms: the Reynolds number as a ratio of forces', slides: [26, 27, 28, 29, 30, 31],
      steps: [
        {h: 'Step 1: inertia force per unit area', b: 'Inertia force F<sub>I</sub> ∝ ṁV and ṁ = AρV, so F<sub>I</sub> ∝ AρV². Hence ρV² ∝ F<sub>I</sub>/A ∝ F<sub>I</sub>/d².'},
        {h: 'Step 2: viscosity as a force ratio', b: 'μ = (shear stress)/(rate of shear) ∝ (F<sub>V</sub>/d²)/(V/d) = F<sub>V</sub>/(Vd).'},
        {h: 'Step 3: Reynolds number', b: 'ρVd = (ρV²)d/V ∝ F<sub>I</sub>/(dV). So Re = ρVd/μ ∝ [F<sub>I</sub>/(dV)] × [Vd/F<sub>V</sub>] = <b>F<sub>I</sub>/F<sub>V</sub></b>: inertia force ÷ viscous force.'},
        {h: 'Step 4: the other terms in the same way', b: 'Pressure: Δp/(ρV²) ∝ F<sub>p</sub>/F<sub>I</sub>. Weber: ρV²d/σ ∝ F<sub>I</sub>/F<sub>S</sub> (σ ∝ F<sub>S</sub>/d). Mach: ρV²/e = V²/a² = M², ∝ F<sub>I</sub>/F<sub>e</sub> (a² = e/ρ). Froude: ρV²/(wd) ∝ F<sub>I</sub>/F<sub>g</sub> (wd ∝ F<sub>g</sub>/d²).'}
      ]},

    {id: 'D5', topic: '3.2.1', title: 'π<sub>2</sub> and π<sub>3</sub> for flow through a duct: pressure coefficient and Reynolds number', slides: [13, 16, 17, 18, 19],
      steps: [
        {h: 'Step 1: setup', b: 'Δp = f(t, d, Q, ρ, μ, w, e, σ): n = 9, m = 3, so 6 π terms; repeating variables d, Q, ρ.'},
        {h: 'Step 2: π<sub>2</sub> with Δp', b: 'π<sub>2</sub> = d<sup>a₂</sup>Q<sup>b₂</sup>ρ<sup>c₂</sup>Δp = [L]<sup>a₂</sup>[L³T⁻¹]<sup>b₂</sup>[ML⁻³]<sup>c₂</sup>[ML⁻¹T⁻²]. M: c₂ + 1 = 0. L: a₂ + 3b₂ − 3c₂ − 1 = 0. T: −b₂ − 2 = 0. So c₂ = −1, b₂ = −2, a₂ = 4.'},
        {h: 'Step 3: simplify π<sub>2</sub>', b: 'π<sub>2</sub> = d⁴Δp/(Q²ρ). Using Q ∝ Vd², Q² ∝ V²d⁴, so <b>π<sub>2</sub> = Δp/(ρV²)</b> (Eq. 1.2).'},
        {h: 'Step 4: π<sub>3</sub> with μ', b: 'π<sub>3</sub> = d<sup>a₃</sup>Q<sup>b₃</sup>ρ<sup>c₃</sup>μ. M: c₃ + 1 = 0. L: a₃ + 3b₃ − 3c₃ − 1 = 0. T: −b₃ − 1 = 0. So c₃ = −1, b₃ = −1, a₃ = 1.'},
        {h: 'Step 5: simplify π<sub>3</sub>', b: 'π<sub>3</sub> = μd/(ρQ) = μ/(ρdV). Inverting: <b>π<sub>3</sub> = ρdV/μ = Re</b> (Eq. 1.3).'}
      ]},

    {id: 'D6', topic: '3.3', title: 'Power coefficient from the flow and head coefficients, and its form for water turbines', slides: [41, 42, 43],
      steps: [
        {h: 'Step 1: multiply', b: 'π<sub>3</sub> = π<sub>1</sub> × π<sub>2</sub> = [Q/(Nd³)] × [H/(Nd)²] = QH/(N³d⁵).'},
        {h: 'Step 2: use the power', b: 'The power is P = H × ṁ = ρQ(gH), with H the specific energy gH. So QH = P/ρ and π<sub>3</sub> = <b>P/(ρN³d⁵)</b> (Eq. 1.22).'},
        {h: 'Step 3: eliminate N', b: 'N ∝ √H/d, so N³d⁵ ∝ H<sup>3/2</sup>d²: π<sub>3</sub> ∝ <b>P/(ρd²H<sup>3/2</sup>)</b> (Eq. 1.23).'},
        {h: 'Step 4: water turbines', b: 'ρ is constant and is omitted: π<sub>3</sub> ∝ <b>P/(d²H<sup>3/2</sup>)</b> (Eq. 1.23a). For a fixed diameter, P ∝ H<sup>3/2</sup>: this is why unit power is P/H<sup>3/2</sup>.'}
      ]}
  ]
});
