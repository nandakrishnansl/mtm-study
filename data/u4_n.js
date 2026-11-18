/* Unit IV: numericals and derivations (DRAFT, teacher to verify). Every number below was checked by a script.
   N1-N3 are the worked examples on the teacher's slides (25-27, 71-72); N4-N10 are extra practice in the same style.
   Air: c_p = 1005 J/(kg K), γ = 1.4, R = 287 J/(kg K), (γ-1)/γ = 0.2857, g_c = 1. */
MTM.c.u4 = MTM.c.u4 || {sl: {}};
Object.assign(MTM.c.u4, {
  num: [
    {id: 'N1', topic: '4.1.4', marks: 5,
      title: 'Centrifugal compressor: temperature rise and pressure ratio with slip',
      q: 'Air at T<sub>01</sub> = 290 K flows through a centrifugal compressor at N = 20 000 rpm. The slip factor is σ = 0.8, η<sub>c,t-t</sub> = 0.80, and the impeller tip diameter is d<sub>2</sub> = 0.6 m; V<sub>1</sub> = V<sub>2</sub>. Find (a) the temperature rise and (b) the stage pressure ratio.',
      given: ['T<sub>01</sub> = 290 K, N = 20 000 rpm', 'σ = 0.8, η = 0.80, d<sub>2</sub> = 0.6 m', 'c<sub>p</sub> = 1005 J/(kg K), γ = 1.4'],
      find: 'ΔT<sub>0</sub> and p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: tip speed', b: 'u<sub>2</sub> = πd<sub>2</sub>N/60 = π × 0.6 × 20 000/60 = <b>628.3 m/s</b>.'},
        {h: 'Step 2: work done with slip', b: 'W.D. = σu<sub>2</sub>²/g<sub>c</sub> = 0.8 × 628.32² = 315 827 J/kg = <b>315.8 kJ/kg</b> (Eq. 4.15).'},
        {h: 'Step 3: (a) temperature rise', b: 'W.D. = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>): 315 827 = 1005(T<sub>03</sub> − 290), so <b>T<sub>03</sub> = 604.3 K</b> and <b>ΔT<sub>0</sub> = 314.3 K</b>.'},
        {h: 'Step 4: ideal end state from the efficiency', b: 'η = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>): 0.8 = (T<sub>03′</sub> − 290)/(604.26 − 290), so <b>T<sub>03′</sub> = 541.4 K</b>.'},
        {h: 'Step 5: (b) pressure ratio', b: 'p<sub>R0</sub> = (T<sub>03′</sub>/T<sub>01</sub>)<sup>3.5</sup> = (541.4/290)<sup>3.5</sup> = <b>8.89</b>.<br>Check with the master form: 1 + 0.8 × 0.8 × 628.32²/(1005 × 290) = 1.867; 1.867<sup>3.5</sup> = 8.89 ✓.'}
      ],
      ans: 'ΔT<sub>0</sub> = 314.3 K (T<sub>03</sub> = 604.3 K); p<sub>R0</sub> = 8.89',
      slides: [24, 25, 26]},

    {id: 'N2', topic: '4.1.4', marks: 5,
      title: 'Finding the slip and slip factor from the pressure ratio',
      q: 'A centrifugal compressor runs at 15 000 rpm and gives a stagnation pressure ratio of 4 (impeller inlet to outlet). The intake is air at 1 atm and 25 °C, axial, and the exit vanes are radial. Take η<sub>c,t-t</sub> = 0.78 and d<sub>2</sub> = 58 cm. Find the slip and the slip factor.',
      given: ['N = 15 000 rpm, p<sub>R1</sub> = 4, T<sub>01</sub> = 298 K', 'Radial vanes, η = 0.78, d<sub>2</sub> = 0.58 m'],
      find: 'Slip velocity and σ',
      steps: [
        {h: 'Step 1: ideal temperature rise', b: 'T<sub>02′</sub> = T<sub>01</sub> p<sub>R1</sub><sup>(γ−1)/γ</sup> = 298 × 4<sup>0.286</sup> = <b>443.0 K</b>, so T<sub>02′</sub> − T<sub>01</sub> = 145.0 K.'},
        {h: 'Step 2: actual temperature rise', b: 'T<sub>02</sub> − T<sub>01</sub> = 145.0/0.78 = <b>185.9 K</b>.'},
        {h: 'Step 3: tip speed', b: 'u<sub>2</sub> = π × 0.58 × 15 000/60 = <b>455.5 m/s</b>.'},
        {h: 'Step 4: actual work and whirl', b: 'W.D. = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = 1005 × 185.9 = <b>186.8 kJ/kg</b> = u<sub>2</sub>V′<sub>w2</sub>/g<sub>c</sub>, so V′<sub>w2</sub> = 186 800/455.5 = <b>410.1 m/s</b>.'},
        {h: 'Step 5: slip and slip factor', b: 'For radial vanes the ideal whirl is u<sub>2</sub> = 455.5 m/s. Slip = 455.5 − 410.1 = <b>45.4 m/s</b>; σ = 410.1/455.5 = <b>0.90</b>.'}
      ],
      ans: 'Slip = 45.4 m/s; σ = 0.90',
      slides: [22, 27]},

    {id: 'N3', topic: 'W4', marks: 7,
      title: 'Three-stage axial compressor: exit temperature, efficiency and pressure ratio',
      q: 'Air enters a three-stage axial compressor at 1 bar and 300 K. The energy input is 25 kJ/kg per stage and the stage efficiency is 0.86. Find (a) the exit temperature, (b) the compressor efficiency and (c) the pressure ratio.',
      given: ['p<sub>1</sub> = 1 bar, T<sub>1</sub> = 300 K', 'Input 25 kJ/kg per stage, η<sub>stage</sub> = 0.86, three stages', 'c<sub>p</sub> = 1.005 kJ/(kg K)'],
      find: 'T<sub>4</sub>, η<sub>C</sub>, p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: (a) exit temperature', b: 'Per stage ΔT = 25/1.005 = <b>24.88 K</b>. T<sub>4</sub> = 300 + 3 × 24.88 = <b>374.6 K</b>.'},
        {h: 'Step 2: ideal rise per stage', b: 'ΔT<sub>ideal</sub> = η × ΔT = 0.86 × 24.88 = <b>21.4 K</b>.'},
        {h: 'Step 3: pressure ratio of each stage', b: 'p<sub>R</sub> = (1 + 21.4/T<sub>in</sub>)<sup>3.5</sup>.<br>Stage 1: T<sub>in</sub> = 300.0 K → <b>1.273</b>. Stage 2: 324.9 K → <b>1.250</b>. Stage 3: 349.8 K → <b>1.231</b>.'},
        {h: 'Step 4: (c) overall pressure ratio', b: 'p<sub>R0</sub> = 1.273 × 1.250 × 1.231 ≈ <b>1.96</b>.'},
        {h: 'Step 5: (b) compressor efficiency', b: 'T<sub>4′</sub> = 300 × 1.96<sup>0.2857</sup> = 363.5 K.<br>η<sub>C</sub> = (363.5 − 300)/(374.6 − 300) = <b>85 %</b>, a little below the stage efficiency of 86 % because each stage heats the air entering the next.'}
      ],
      ans: 'T<sub>4</sub> = 374.6 K; η<sub>C</sub> = 85 %; p<sub>R0</sub> ≈ 1.96',
      slides: [71, 72]},

    {id: 'N4', topic: '4.1.5', marks: 5,
      title: 'Stanitz slip factor, work and pressure ratio with a power factor',
      q: 'An impeller with 19 radial vanes has a tip diameter of 0.30 m and runs at 24 000 rpm. Air enters axially at T<sub>01</sub> = 300 K. Take the power factor φ = 1.04 and η<sub>c,t-to</sub> = 0.80. Estimate the slip factor by Stanitz, and find the work done, the stagnation temperature rise and the pressure ratio. What would the ratio be with no slip and φ = 1?',
      given: ['n = 19, β<sub>2</sub> = 90°, d<sub>2</sub> = 0.30 m, N = 24 000 rpm', 'T<sub>01</sub> = 300 K, φ = 1.04, η = 0.80'],
      find: 'σ, W.D., ΔT<sub>0</sub>, p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: slip factor', b: 'Radial vanes: σ = 1 − 1.98/n = 1 − 1.98/19 = <b>0.896</b>.'},
        {h: 'Step 2: tip speed', b: 'u<sub>2</sub> = π × 0.30 × 24 000/60 = <b>377.0 m/s</b>.'},
        {h: 'Step 3: work done', b: 'W.D. = σφu<sub>2</sub>²/g<sub>c</sub> = 0.896 × 1.04 × 377.0² = <b>132.4 kJ/kg</b>.'},
        {h: 'Step 4: temperature rise', b: 'ΔT<sub>0</sub> = W.D./c<sub>p</sub> = 132 404/1005 = <b>131.7 K</b>.'},
        {h: 'Step 5: pressure ratio', b: 'p<sub>R0</sub> = [1 + ησφu<sub>2</sub>²/(c<sub>p</sub>T<sub>01</sub>)]<sup>3.5</sup> = [1 + 0.80 × 132 404/(1005 × 300)]<sup>3.5</sup> = 1.3513<sup>3.5</sup> = <b>2.87</b>.'},
        {h: 'Step 6: the no-slip case', b: 'With σ = φ = 1: p<sub>R0</sub> = [1 + 0.80 × 377.0²/(1005 × 300)]<sup>3.5</sup> = <b>3.06</b>. Slip and the power factor together lower the ratio by about 6 %.'}
      ],
      ans: 'σ = 0.896; W.D. = 132.4 kJ/kg; ΔT<sub>0</sub> = 131.7 K; p<sub>R0</sub> = 2.87 (3.06 with σ = φ = 1)',
      slides: [24, 28]},

    {id: 'N5', topic: '4.1.6', marks: 7,
      title: 'Optimum eye tip diameter and the eye Mach number',
      q: 'The eye of a centrifugal compressor passes Q = 2.5 m³/s of air at N = 15 000 rpm. The hub diameter is d<sub>h</sub> = 0.10 m and the inlet static temperature is T<sub>1</sub> = 288 K. Find the eye tip diameter that makes the relative velocity at the tip a minimum, and then V<sub>f1</sub>, u<sub>1</sub>, V<sub>r1</sub>, the vane inlet angle β<sub>1</sub> and the relative Mach number M<sub>r1</sub>.',
      given: ['Q = 2.5 m³/s, N = 15 000 rpm, d<sub>h</sub> = 0.10 m', 'T<sub>1</sub> = 288 K, γ = 1.4, R = 287 J/(kg K)'],
      find: 'd<sub>t</sub>, V<sub>r1,min</sub>, β<sub>1</sub>, M<sub>r1</sub>',
      steps: [
        {h: 'Step 1: optimum diameter (Eq. 4.20a)', b: '(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60²(4Q/π)²/(πN)². Here 4Q/π = 3.1831 and πN = 47 124.<br>(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2 × 3600 × 10.132/(2.2207 × 10⁹) = 3.285 × 10⁻⁵, so d<sub>t</sub>² − d<sub>h</sub>² = 0.03203 m².<br>d<sub>t</sub>² = 0.04203, <b>d<sub>t</sub> = 0.2050 m</b>.'},
        {h: 'Step 2: axial velocity', b: 'V<sub>f1</sub> = 4Q/[π(d<sub>t</sub>² − d<sub>h</sub>²)] = 3.1831/0.03203 = <b>99.4 m/s</b>.'},
        {h: 'Step 3: blade speed at the eye tip', b: 'u<sub>1</sub> = πd<sub>t</sub>N/60 = π × 0.2050 × 15 000/60 = <b>161.0 m/s</b>.'},
        {h: 'Step 4: relative velocity', b: 'V<sub>r1</sub> = √(161.0² + 99.4²) = <b>189.2 m/s</b>.<br>Check with Eq. 4.20b: V<sub>r1,min</sub>² = (πN/60)²(3d<sub>t</sub>² − d<sub>h</sub>²)/2 = 785.4² × (3 × 0.04203 − 0.01)/2 = 35 802, so V<sub>r1,min</sub> = 189.2 m/s ✓.'},
        {h: 'Step 5: vane angle and Mach number', b: 'tan β<sub>1</sub> = V<sub>f1</sub>/u<sub>1</sub> = 99.4/161.0, so <b>β<sub>1</sub> = 31.7°</b>.<br>a<sub>1</sub> = √(γRT<sub>1</sub>) = √(1.4 × 287 × 288) = 340.2 m/s, so <b>M<sub>r1</sub> = 189.2/340.2 = 0.556</b>, comfortably subsonic.'},
        {h: 'Step 6: why this is the minimum', b: 'A smaller eye, d<sub>t</sub> = 0.15 m, gives V<sub>f1</sub> = 254.6 m/s and V<sub>r1</sub> = 280.6 m/s. A larger one, d<sub>t</sub> = 0.25 m, gives u<sub>1</sub> = 196.3 m/s and V<sub>r1</sub> = 205.5 m/s. Both are above 189.2 m/s.'}
      ],
      ans: 'd<sub>t</sub> = 0.205 m; V<sub>f1</sub> = 99.4 m/s; u<sub>1</sub> = 161.0 m/s; V<sub>r1,min</sub> = 189.2 m/s; β<sub>1</sub> = 31.7°; M<sub>r1</sub> = 0.556',
      slides: [29, 30], tool: 'ext/cc-parts'},

    {id: 'N6', topic: '4.3.8', marks: 6,
      title: 'Axial compressor stage with 50 % reaction',
      q: 'An axial compressor stage has 50 % reaction. The blade speed is u = 200 m/s, the axial velocity V<sub>f</sub> = 100 m/s (constant) and the air enters the rotor at α<sub>1</sub> = 60° (measured from the tangential direction). Find the other blade and air angles, the whirl change, the work done, the temperature rise and the stage pressure ratio for T<sub>01</sub> = 288 K and η<sub>c,t-t</sub> = 0.88. Repeat with a work-done factor ψ = 0.98.',
      given: ['u = 200 m/s, V<sub>f</sub> = 100 m/s, α<sub>1</sub> = 60°, R = 0.5', 'T<sub>01</sub> = 288 K, η = 0.88, c<sub>p</sub> = 1005 J/(kg K)'],
      find: 'β<sub>1</sub>, β<sub>2</sub>, α<sub>2</sub>, ΔV<sub>w</sub>, W.D., ΔT<sub>0</sub>, p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: flow coefficient and β<sub>1</sub>', b: 'φ<sub>f</sub> = V<sub>f</sub>/u = 0.5, so 1/φ<sub>f</sub> = 2 = cot α<sub>1</sub> + cot β<sub>1</sub> (Eq. 5.13). cot 60° = 0.5774, so cot β<sub>1</sub> = 1.4226 and <b>β<sub>1</sub> = 35.1°</b>.'},
        {h: 'Step 2: use R = 0.5', b: 'For 50 % reaction α<sub>1</sub> = β<sub>2</sub> and α<sub>2</sub> = β<sub>1</sub>: <b>β<sub>2</sub> = 60°, α<sub>2</sub> = 35.1°</b>. Check: R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 0.25 × (1.4226 + 0.5774) = 0.5 ✓.'},
        {h: 'Step 3: change of whirl', b: 'ΔV<sub>w</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 100 × (1.4226 − 0.5774) = <b>84.5 m/s</b>. Loading ψ<sub>L</sub> = ΔV<sub>w</sub>/u = 0.423.'},
        {h: 'Step 4: work and temperature rise', b: 'W.D. = uΔV<sub>w</sub> = 200 × 84.53 = <b>16.9 kJ/kg</b>; ΔT<sub>0</sub> = 16 906/1005 = <b>16.8 K</b>.'},
        {h: 'Step 5: pressure ratio', b: 'p<sub>R0</sub> = [1 + 0.88 × 16.82/288]<sup>3.5</sup> = 1.0514<sup>3.5</sup> = <b>1.192</b>.'},
        {h: 'Step 6: with ψ = 0.98', b: 'W.D. = 0.98 × 16.9 = 16.6 kJ/kg; ΔT<sub>0</sub> = 16.5 K; p<sub>R0</sub> = [1 + 0.88 × 16.49/288]<sup>3.5</sup> = <b>1.188</b>. The air velocities are V<sub>1</sub> = V<sub>f</sub>/sin α<sub>1</sub> = 115.5 m/s and V<sub>r1</sub> = V<sub>f</sub>/sin β<sub>1</sub> = 173.9 m/s.'}
      ],
      ans: 'β<sub>1</sub> = α<sub>2</sub> = 35.1°, β<sub>2</sub> = 60°; ΔV<sub>w</sub> = 84.5 m/s; W.D. = 16.9 kJ/kg; ΔT<sub>0</sub> = 16.8 K; p<sub>R0</sub> = 1.192 (1.188 with ψ = 0.98)',
      slides: [49, 51, 52, 54, 65]},

    {id: 'N7', topic: '4.3.5', marks: 6,
      title: 'Axial stage with axial entry (zero inlet swirl): reaction and angles',
      q: 'An axial compressor stage receives air axially (α<sub>1</sub> = 90°). The blade speed is u = 220 m/s, V<sub>f</sub> = 110 m/s and the air leaves the rotor at α<sub>2</sub> = 45° from the tangential direction. Find β<sub>1</sub>, β<sub>2</sub>, the degree of reaction, the loading coefficient, the work done and, for T<sub>01</sub> = 290 K and η<sub>c,t-t</sub> = 0.87, the stage pressure ratio.',
      given: ['α<sub>1</sub> = α<sub>3</sub> = 90°, α<sub>2</sub> = 45°', 'u = 220 m/s, V<sub>f</sub> = 110 m/s', 'T<sub>01</sub> = 290 K, η = 0.87'],
      find: 'β<sub>1</sub>, β<sub>2</sub>, R, ψ<sub>L</sub>, W.D., p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: flow coefficient', b: 'φ<sub>f</sub> = V<sub>f</sub>/u = 0.5, so 1/φ<sub>f</sub> = 2.'},
        {h: 'Step 2: angles', b: 'Entry: cot α<sub>1</sub> = 0, so cot β<sub>1</sub> = 2 − 0 = 2 and <b>β<sub>1</sub> = 26.6°</b>.<br>Exit: cot α<sub>2</sub> = 1, so cot β<sub>2</sub> = 2 − 1 = 1 and <b>β<sub>2</sub> = 45°</b>.'},
        {h: 'Step 3: degree of reaction', b: 'R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>) = 0.25 × 3 = <b>0.75</b>. Check with the zero-swirl formula: R = 1 − (φ<sub>f</sub>/2)cot α<sub>2</sub> = 1 − 0.25 = 0.75 ✓. So 75 % of the static rise is in the rotor.'},
        {h: 'Step 4: loading and work', b: 'V<sub>w2</sub> = ΔV<sub>w</sub> = V<sub>f</sub> cot α<sub>2</sub> = 110 m/s, so ψ<sub>L</sub> = ΔV<sub>w</sub>/u = <b>0.5</b> (and R = 1 − ψ<sub>L</sub>/2 = 0.75 ✓).<br>W.D. = uΔV<sub>w</sub> = 220 × 110 = <b>24.2 kJ/kg</b>.'},
        {h: 'Step 5: temperature rise and pressure ratio', b: 'ΔT<sub>0</sub> = 24 200/1005 = <b>24.1 K</b>. p<sub>R0</sub> = [1 + 0.87 × 24.08/290]<sup>3.5</sup> = 1.0722<sup>3.5</sup> = <b>1.276</b>.'}
      ],
      ans: 'β<sub>1</sub> = 26.6°, β<sub>2</sub> = 45°; R = 0.75; ψ<sub>L</sub> = 0.5; W.D. = 24.2 kJ/kg; ΔT<sub>0</sub> = 24.1 K; p<sub>R0</sub> = 1.276',
      slides: [59, 60, 64]},

    {id: 'N8', topic: '4.2.3', marks: 4,
      title: 'Blade Mach number and stage pressure ratio',
      q: 'The mean blade speed of an axial compressor stage is 250 m/s. The inlet stagnation temperature is 288 K and the stage loading is ψ<sub>L</sub> = 0.35. Find the blade Mach number, the stagnation temperature rise and the stage pressure ratio for η<sub>c,t-t</sub> = 0.90.',
      given: ['u = 250 m/s, T<sub>01</sub> = 288 K, ψ<sub>L</sub> = 0.35', 'η = 0.90, γ = 1.4, R = 287 J/(kg K)'],
      find: 'M<sub>b</sub>, ΔT<sub>0</sub>, p<sub>R0</sub>',
      steps: [
        {h: 'Step 1: speed of sound', b: 'a<sub>01</sub> = √(γRT<sub>01</sub>g<sub>c</sub>) = √(1.4 × 287 × 288) = <b>340.2 m/s</b>.'},
        {h: 'Step 2: blade Mach number', b: 'M<sub>b</sub> = u/a<sub>01</sub> = 250/340.2 = <b>0.735</b>.'},
        {h: 'Step 3: temperature rise', b: 'ΔT<sub>0</sub>/T<sub>01</sub> = ψ<sub>L</sub>(γ − 1)M<sub>b</sub>² = 0.35 × 0.4 × 0.5401 = 0.0756, so <b>ΔT<sub>0</sub> = 21.8 K</b>.<br>Check: ψ<sub>L</sub>u²/c<sub>p</sub> = 0.35 × 62 500/1005 = 21.8 K ✓.'},
        {h: 'Step 4: pressure ratio', b: 'p<sub>R0</sub> = [1 + η ψ<sub>L</sub>(γ − 1)M<sub>b</sub>²]<sup>3.5</sup> = [1 + 0.90 × 0.0756]<sup>3.5</sup> = 1.0680<sup>3.5</sup> = <b>1.259</b>.'}
      ],
      ans: 'M<sub>b</sub> = 0.735; ΔT<sub>0</sub> = 21.8 K; p<sub>R0</sub> = 1.26',
      slides: [42, 43]},

    {id: 'N9', topic: '4.1.3', marks: 6,
      title: 'Turbocharger compressor: pressure ratio and power',
      q: 'The compressor of a diesel-engine turbocharger has an impeller of tip diameter 0.20 m running at 42 000 rpm. Air enters axially at 300 K and the mass flow is 0.6 kg/s. Take σ = 0.90, φ = 1.04 and η<sub>c,t-to</sub> = 0.78. Find the tip speed, the work done, the delivery stagnation temperature, the pressure ratio and the power absorbed.',
      given: ['d<sub>2</sub> = 0.20 m, N = 42 000 rpm, T<sub>01</sub> = 300 K', 'ṁ = 0.6 kg/s, σ = 0.90, φ = 1.04, η = 0.78'],
      find: 'u<sub>2</sub>, W.D., T<sub>03</sub>, p<sub>R0</sub>, power',
      steps: [
        {h: 'Step 1: tip speed', b: 'u<sub>2</sub> = π × 0.20 × 42 000/60 = <b>439.8 m/s</b>.'},
        {h: 'Step 2: work done', b: 'W.D. = σφu<sub>2</sub>²/g<sub>c</sub> = 0.90 × 1.04 × 439.8² = <b>181.1 kJ/kg</b> (Eq. 4.18).'},
        {h: 'Step 3: delivery temperature', b: 'ΔT<sub>0</sub> = 181 064/1005 = 180.2 K, so <b>T<sub>03</sub> = 480.2 K</b>.'},
        {h: 'Step 4: pressure ratio (Eq. 4.20)', b: 'p<sub>R0</sub> = [1 + ησφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>3.5</sup> = [1 + 0.78 × 181 064/(1005 × 300)]<sup>3.5</sup> = 1.4684<sup>3.5</sup> = <b>3.84</b>.'},
        {h: 'Step 5: power absorbed', b: 'P = ṁ × W.D. = 0.6 × 181.1 = <b>108.6 kW</b>. This is the power the exhaust-gas turbine must supply (mechanical efficiency taken as 1).'}
      ],
      ans: 'u<sub>2</sub> = 439.8 m/s; W.D. = 181.1 kJ/kg; T<sub>03</sub> = 480.2 K; p<sub>R0</sub> = 3.84; P = 108.6 kW',
      slides: [14, 15, 24]},

    {id: 'N10', topic: '4.1.3', marks: 5,
      title: 'Power needed to compress air to a given pressure ratio',
      q: 'A centrifugal compressor takes in air at 288 K and delivers it at a stagnation pressure ratio of 3.5. The overall total-to-total efficiency is 0.80 and the mass flow is 2 kg/s. Find the delivery stagnation temperature and the power absorbed.',
      given: ['T<sub>01</sub> = 288 K, p<sub>R0</sub> = 3.5, η<sub>c,t-to</sub> = 0.80', 'ṁ = 2 kg/s, c<sub>p</sub> = 1005 J/(kg K)'],
      find: 'T<sub>03</sub>, power',
      steps: [
        {h: 'Step 1: isentropic delivery temperature', b: 'T<sub>03′</sub> = T<sub>01</sub>p<sub>R0</sub><sup>(γ−1)/γ</sup> = 288 × 3.5<sup>0.2857</sup> = <b>411.9 K</b>, so the ideal rise is 123.9 K.'},
        {h: 'Step 2: actual rise', b: 'η = (T<sub>03′</sub> − T<sub>01</sub>)/(T<sub>03</sub> − T<sub>01</sub>), so T<sub>03</sub> − T<sub>01</sub> = 123.9/0.80 = <b>154.9 K</b> and <b>T<sub>03</sub> = 442.9 K</b>.'},
        {h: 'Step 3: power', b: 'P = ṁc<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>) = 2 × 1.005 × 154.9 = <b>311.4 kW</b>.'}
      ],
      ans: 'T<sub>03</sub> = 442.9 K; P = 311.4 kW',
      slides: [16, 17, 20, 21]}
  ],

  der: [
    {id: 'D1', topic: '4.1.3', title: 'Work done on the gas and the stagnation temperature rise: W.D. = u<sub>2</sub>²/g<sub>c</sub>', slides: [13, 14, 15],
      steps: [
        {h: 'Step 1: assumptions', b: 'Axial entry (α<sub>1</sub> = 90°, V<sub>w1</sub> = 0), no friction loss, adiabatic flow, and a radial exit with V<sub>w2</sub> = u<sub>2</sub> (β<sub>2</sub> = 90°).'},
        {h: 'Step 2: Euler equation', b: 'The machine absorbs power: W.D. = (u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub>)/g<sub>c</sub>. With V<sub>w1</sub> = 0: <b>W.D. = u<sub>2</sub>V<sub>w2</sub>/g<sub>c</sub></b> J/kg.'},
        {h: 'Step 3: radial exit', b: 'Put V<sub>w2</sub> = u<sub>2</sub>: <b>W.D. = u<sub>2</sub>²/g<sub>c</sub></b> (Eq. 4.1). The power is P = ρQV<sub>w2</sub>²/g<sub>c</sub> (Eq. 4.2).'},
        {h: 'Step 4: link to the thermodynamics', b: 'Adiabatic flow, potential energy neglected: W.D. = h<sub>02</sub> − h<sub>01</sub> = Δh<sub>0</sub> = c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) (Eqs. 4.3, 4.5). Hence <b>c<sub>p</sub>(T<sub>02</sub> − T<sub>01</sub>) = u<sub>2</sub>²/g<sub>c</sub></b> (Eq. 4.6).'}
      ]},

    {id: 'D2', topic: '4.1.3', title: 'Stage pressure ratio p<sub>R1</sub> = [1 + η<sub>c,t-t</sub>u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup>', slides: [15, 16, 17],
      steps: [
        {h: 'Step 1: efficiency', b: 'The ideal compression from p<sub>01</sub> to the same p<sub>02</sub> ends at 02′. η<sub>c,t-t</sub> = (T<sub>02′</sub> − T<sub>01</sub>)/(T<sub>02</sub> − T<sub>01</sub>) (Eq. 4.4).'},
        {h: 'Step 2: ideal rise', b: 'With Eq. 4.6, T<sub>02</sub> − T<sub>01</sub> = u<sub>2</sub>²/(g<sub>c</sub>c<sub>p</sub>). So <b>T<sub>02′</sub> − T<sub>01</sub> = η<sub>c,t-t</sub>u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>)</b> (Eq. 4.8).'},
        {h: 'Step 3: isentropic relation', b: 'Along 01 → 02′: T<sub>02′</sub>/T<sub>01</sub> = (p<sub>02</sub>/p<sub>01</sub>)<sup>(γ−1)/γ</sup>, so p<sub>02</sub>/p<sub>01</sub> = [(T<sub>02′</sub> − T<sub>01</sub>)/T<sub>01</sub> + 1]<sup>γ/(γ−1)</sup>.'},
        {h: 'Step 4: substitute', b: '<b>p<sub>R1</sub> = p<sub>02</sub>/p<sub>01</sub> = [1 + η<sub>c,t-t</sub>u<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></b> (Eq. 4.9).'},
        {h: 'Step 5: from impeller to diffuser exit', b: 'No work in the diffuser, so T<sub>03</sub> − T<sub>01</sub> = T<sub>02</sub> − T<sub>01</sub> and the same form holds with η<sub>c,t-to</sub> for p<sub>R0</sub> = p<sub>03</sub>/p<sub>01</sub> (Eq. 4.12).'}
      ]},

    {id: 'D3', topic: '4.1.4', title: 'Master equation with slip and power factor: p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>σφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup>', slides: [22, 23, 24],
      steps: [
        {h: 'Step 1: effect of slip', b: 'Slip reduces the whirl from V<sub>w2</sub> to V′<sub>w2</sub> = σV<sub>w2</sub> (Eq. 4.14). For radial vanes V<sub>w2</sub> = u<sub>2</sub>, so the work falls to σu<sub>2</sub>²/g<sub>c</sub>.'},
        {h: 'Step 2: effect of the power factor', b: 'Disc friction, windage and recirculation raise the input above the Euler work by the factor φ (1.02 to 1.05): <b>W.D. = Δh<sub>0</sub> = σφu<sub>2</sub>²/g<sub>c</sub></b> (Eq. 4.18).'},
        {h: 'Step 3: temperature rise', b: 'T<sub>03</sub> − T<sub>01</sub> = σφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>), since there is no work in the diffuser.'},
        {h: 'Step 4: pressure ratio', b: 'Use p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup> (Eq. 4.11): <b>p<sub>R0</sub> = [1 + η<sub>c,t-to</sub>σφu<sub>2</sub>²/(c<sub>p</sub>g<sub>c</sub>T<sub>01</sub>)]<sup>γ/(γ−1)</sup></b> (Eq. 4.20).'},
        {h: 'Step 5: special cases', b: 'Put σ = φ = 1 if they are not given; the result then reduces to Eq. 4.12.'}
      ]},

    {id: 'D4', topic: '4.1.6', title: 'Optimum eye tip diameter: minimum relative velocity at the eye', slides: [29, 30],
      steps: [
        {h: 'Step 1: relative velocity at the eye tip', b: 'The gas enters axially, so V<sub>r1</sub>² = u<sub>1</sub>² + V<sub>f1</sub>². With V<sub>f1</sub> = 4Q/[π(d<sub>t</sub>² − d<sub>h</sub>²)] and u<sub>1</sub> = πd<sub>t</sub>N/60: <b>V<sub>r1</sub>² = (πd<sub>t</sub>N/60)² + [4Q/π(d<sub>t</sub>² − d<sub>h</sub>²)]²</b> (Eq. 4.13).'},
        {h: 'Step 2: the trade-off', b: 'A small eye makes V<sub>f1</sub> large; a large eye makes u<sub>1</sub> large. So V<sub>r1</sub> has a minimum at an intermediate d<sub>t</sub> (Fig. 4.6).'},
        {h: 'Step 3: differentiate', b: 'Set d(V<sub>r1</sub>²)/dd<sub>t</sub> = 0: 2(πN/60)²d<sub>t</sub> − 4d<sub>t</sub>(4Q/π)²/(d<sub>t</sub>² − d<sub>h</sub>²)³ = 0.'},
        {h: 'Step 4: simplify', b: '(πN/60)²(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2(4Q/π)², i.e. <b>(d<sub>t</sub>² − d<sub>h</sub>²)³ = 2·60²(4Q/π)²/(πN)²</b> (Eq. 4.20a).'},
        {h: 'Step 5: minimum value', b: 'From Step 4: V<sub>f1</sub>² = (πN/60)²(d<sub>t</sub>² − d<sub>h</sub>²)/2. Then V<sub>r1,min</sub>² = (πN/60)²[d<sub>t</sub>² + (d<sub>t</sub>² − d<sub>h</sub>²)/2] = <b>(πN/60)²(3d<sub>t</sub>² − d<sub>h</sub>²)/2</b> (Eq. 4.20b).'}
      ]},

    {id: 'D5', topic: '4.2.1', title: 'Stage loading and flow coefficient: ψ<sub>L</sub> = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>) = 1 − Aφ<sub>f</sub>', slides: [37, 38, 39, 40],
      steps: [
        {h: 'Step 1: definition', b: 'ψ<sub>L</sub> = g<sub>c</sub>Δh<sub>0</sub>/u² = g<sub>c</sub>W.D./u² = ΔV<sub>w</sub>/u.'},
        {h: 'Step 2: use the work equation', b: 'W.D. = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub> (Eq. 5.18). Dividing by u²/g<sub>c</sub>: <b>ψ<sub>L</sub> = (V<sub>f</sub>/u)(cot β<sub>1</sub> − cot β<sub>2</sub>) = φ<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</b>; in absolute angles ψ<sub>L</sub> = φ<sub>f</sub>(cot α<sub>2</sub> − cot α<sub>1</sub>).'},
        {h: 'Step 3: eliminate β<sub>1</sub>', b: 'From Eq. 5.13, cot β<sub>1</sub> = 1/φ<sub>f</sub> − cot α<sub>1</sub>. So ψ<sub>L</sub> = φ<sub>f</sub>(1/φ<sub>f</sub> − cot α<sub>1</sub> − cot β<sub>2</sub>) = <b>1 − φ<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>2</sub>) = 1 − Aφ<sub>f</sub></b>, with A = cot β<sub>2</sub> + cot α<sub>1</sub>.'},
        {h: 'Step 4: 50 % reaction', b: 'α<sub>1</sub> = β<sub>2</sub>, so A = 2 cot β<sub>2</sub> and <b>ψ<sub>L</sub> = 1 − 2φ<sub>f</sub> cot β<sub>2</sub></b>: loading falls linearly as φ<sub>f</sub> rises.'}
      ]},

    {id: 'D6', topic: '4.2.3', title: 'Stage pressure ratio in terms of the blade Mach number: p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>ψ<sub>L</sub>(γ−1)M<sub>b</sub>²]<sup>γ/(γ−1)</sup>', slides: [41, 42, 43],
      steps: [
        {h: 'Step 1: temperature rise', b: 'ΔT<sub>0</sub> = T<sub>03</sub> − T<sub>01</sub> = ψ<sub>L</sub>u²/(g<sub>c</sub>c<sub>p</sub>) (from the loading definition).'},
        {h: 'Step 2: blade Mach number', b: 'M<sub>b</sub> = u/a<sub>01</sub> with a<sub>01</sub> = √(γRT<sub>01</sub>g<sub>c</sub>). Using c<sub>p</sub> = γR/(γ − 1): u²/(g<sub>c</sub>c<sub>p</sub>T<sub>01</sub>) = (γ − 1)M<sub>b</sub>².'},
        {h: 'Step 3: combine', b: 'ΔT<sub>0</sub>/T<sub>01</sub> = ψ<sub>L</sub>(γ − 1)M<sub>b</sub>².'},
        {h: 'Step 4: substitute in Eq. 5.23', b: '<b>p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>ψ<sub>L</sub>(γ − 1)M<sub>b</sub>²]<sup>γ/(γ−1)</sup></b>. A higher blade Mach number or a higher loading raises the stage pressure ratio; M<sub>b</sub> is limited by the relative Mach number at the rotor tip.'}
      ]},

    {id: 'D7', topic: '4.3.2', title: 'Axial stage: work done, temperature rise and pressure ratio', slides: [49, 51, 52],
      steps: [
        {h: 'Step 1: triangles', b: 'u = V<sub>f</sub>(cot α<sub>1</sub> + cot β<sub>1</sub>) = V<sub>f</sub>(cot α<sub>2</sub> + cot β<sub>2</sub>) (Eq. 5.13). With V<sub>w</sub> = u − x and x = V<sub>f</sub> cot β: <b>ΔV<sub>w</sub> = x<sub>1</sub> − x<sub>2</sub> = V<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)</b>.'},
        {h: 'Step 2: Euler work', b: 'u<sub>1</sub> = u<sub>2</sub> = u: <b>W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/g<sub>c</sub></b> (Eqs. 5.17, 5.18). The stator does no work: h<sub>03</sub> = h<sub>02</sub>.'},
        {h: 'Step 3: temperature rise', b: 'W.D. = c<sub>p</sub>(T<sub>03</sub> − T<sub>01</sub>), so <b>T<sub>03</sub> − T<sub>01</sub> = uV<sub>f</sub>(cot β<sub>1</sub> − cot β<sub>2</sub>)/(g<sub>c</sub>c<sub>p</sub>)</b> (Eq. 5.24), whatever the efficiency.'},
        {h: 'Step 4: pressure ratio', b: '<b>p<sub>R0</sub> = [1 + η<sub>c,t-t</sub>(T<sub>03</sub> − T<sub>01</sub>)/T<sub>01</sub>]<sup>γ/(γ−1)</sup></b> (Eq. 5.23). With the work-done factor ψ the work and rise are multiplied by ψ (Eq. 5.25).'}
      ]},

    {id: 'D8', topic: '4.3.4', title: 'Stagnation enthalpy is constant in the relative system: h<sub>01rel</sub> = h<sub>02rel</sub>', slides: [55, 56],
      steps: [
        {h: 'Step 1: energy balance on the rotor', b: 'W.D. = h<sub>02</sub> − h<sub>01</sub> = (h<sub>2</sub> − h<sub>1</sub>) + (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>.'},
        {h: 'Step 2: use the Euler work', b: 'W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub>, and V<sup>2</sup> = V<sub>f</sub>² + V<sub>w</sub>² with V<sub>f1</sub> = V<sub>f2</sub>, so V<sub>2</sub>² − V<sub>1</sub>² = V<sub>w2</sub>² − V<sub>w1</sub>².'},
        {h: 'Step 3: simplify', b: 'h<sub>2</sub> − h<sub>1</sub> = (V<sub>w2</sub> − V<sub>w1</sub>)[u − (V<sub>w2</sub> + V<sub>w1</sub>)/2]/g<sub>c</sub> = (V<sub>w2</sub> − V<sub>w1</sub>)[(u − V<sub>w2</sub>) + (u − V<sub>w1</sub>)]/2g<sub>c</sub>. With x = u − V<sub>w</sub>: V<sub>w2</sub> − V<sub>w1</sub> = x<sub>1</sub> − x<sub>2</sub>, so <b>h<sub>2</sub> − h<sub>1</sub> = (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub></b> (Eq. 5.20).'},
        {h: 'Step 4: relative velocities', b: 'V<sub>r</sub>² = V<sub>f</sub>² + x², so x<sub>1</sub>² − x<sub>2</sub>² = V<sub>r1</sub>² − V<sub>r2</sub>²: h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> (Eq. 5.21).'},
        {h: 'Step 5: conclusion', b: 'Rearranged: h<sub>1</sub> + V<sub>r1</sub>²/2g<sub>c</sub> = h<sub>2</sub> + V<sub>r2</sub>²/2g<sub>c</sub>, i.e. <b>h<sub>01rel</sub> = h<sub>02rel</sub></b> (Eq. 5.22). The rotor raises static enthalpy only by slowing the relative flow.'}
      ]},

    {id: 'D9', topic: '4.3.7', title: 'Degree of reaction in terms of φ<sub>f</sub> and the blade angles: R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>)', slides: [62, 63],
      steps: [
        {h: 'Step 1: definition', b: 'R = (h<sub>2</sub> − h<sub>1</sub>)/(h<sub>3</sub> − h<sub>1</sub>) (Eq. 5.26). In a normal stage V<sub>1</sub> = V<sub>3</sub>, so h<sub>3</sub> − h<sub>1</sub> = W.D.'},
        {h: 'Step 2: rotor rise', b: 'h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2g<sub>c</sub> = (x<sub>1</sub>² − x<sub>2</sub>²)/2g<sub>c</sub> (Eq. 5.21).'},
        {h: 'Step 3: stage work', b: 'W.D. = u(V<sub>w2</sub> − V<sub>w1</sub>)/g<sub>c</sub> = u(x<sub>1</sub> − x<sub>2</sub>)/g<sub>c</sub>.'},
        {h: 'Step 4: divide', b: 'R = (x<sub>1</sub>² − x<sub>2</sub>²)/[2u(x<sub>1</sub> − x<sub>2</sub>)] = (x<sub>1</sub> + x<sub>2</sub>)/2u = V<sub>f</sub>(cot β<sub>1</sub> + cot β<sub>2</sub>)/2u.'},
        {h: 'Step 5: result', b: '<b>R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>)</b> (Eq. 5.27), with φ<sub>f</sub> = V<sub>f</sub>/u.'}
      ]},

    {id: 'D10', topic: '4.3.7', title: 'Degree of reaction in terms of the absolute angles: R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)', slides: [62, 64],
      steps: [
        {h: 'Step 1: split the stage rise', b: 'In a normal stage V<sub>1</sub> = V<sub>3</sub>. The stator takes Δh<sub>S</sub> = (V<sub>2</sub>² − V<sub>1</sub>²)/2g<sub>c</sub>; the rotor takes Δh<sub>R</sub> = W.D. − Δh<sub>S</sub>.'},
        {h: 'Step 2: reaction as 1 minus the stator share', b: 'R = Δh<sub>R</sub>/W.D. = 1 − Δh<sub>S</sub>/W.D. = 1 − (V<sub>2</sub>² − V<sub>1</sub>²)/(2u(V<sub>w2</sub> − V<sub>w1</sub>)).'},
        {h: 'Step 3: constant V<sub>f</sub>', b: 'V<sub>2</sub>² − V<sub>1</sub>² = V<sub>w2</sub>² − V<sub>w1</sub>², so R = 1 − (V<sub>w2</sub> + V<sub>w1</sub>)/2u.'},
        {h: 'Step 4: result', b: 'With V<sub>w</sub> = V<sub>f</sub> cot α: <b>R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>)</b> (Eq. 5.28).'}
      ]},

    {id: 'D11', topic: '4.3.8', title: '50 % reaction: α<sub>1</sub> = β<sub>2</sub>, α<sub>2</sub> = β<sub>1</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub>', slides: [49, 63, 64, 65],
      steps: [
        {h: 'Step 1: put R = 0.5 in both forms', b: 'Eq. 5.27: 1 = φ<sub>f</sub>(cot β<sub>1</sub> + cot β<sub>2</sub>). Eq. 5.28: 1 = φ<sub>f</sub>(cot α<sub>1</sub> + cot α<sub>2</sub>). So <b>1/φ<sub>f</sub> = cot β<sub>1</sub> + cot β<sub>2</sub> = cot α<sub>1</sub> + cot α<sub>2</sub></b>.'},
        {h: 'Step 2: compare with Eq. 5.13', b: '1/φ<sub>f</sub> = cot α<sub>1</sub> + cot β<sub>1</sub> = cot α<sub>2</sub> + cot β<sub>2</sub>. Subtract from the line above: cot β<sub>2</sub> = cot α<sub>1</sub> and cot β<sub>1</sub> = cot α<sub>2</sub>.'},
        {h: 'Step 3: result', b: '<b>α<sub>1</sub> = β<sub>2</sub> and α<sub>2</sub> = β<sub>1</sub></b>, so the triangles are symmetrical: V<sub>1</sub> = V<sub>r2</sub> and V<sub>2</sub> = V<sub>r1</sub> (Eqs. 5.29, 5.30).'},
        {h: 'Step 4: meaning', b: 'h<sub>2</sub> − h<sub>1</sub> = h<sub>3</sub> − h<sub>2</sub>: equal static rise in rotor and stator. This is the usual choice for a compressor stage.'}
      ]}
  ]
});
