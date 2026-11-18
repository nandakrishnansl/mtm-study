/* Unit I: numericals and derivations (DRAFT, teacher to verify). Every number below was checked by a script. */
MTM.c.u1 = MTM.c.u1 || {sl: {}};
Object.assign(MTM.c.u1, {
  num: [
    {id: 'N1', topic: '1.5.1', marks: 10,
      title: 'Single-row impulse stage: power from the axial thrust (Dec 2023, Jun 2025)',
      q: 'In a stage of an impulse turbine with a single-row wheel, the mean diameter of the blade ring is 800 mm and the speed is 3000 rpm. Steam leaves the nozzles at 300 m/s and the nozzle angle is 20°. The rotor blades are equiangular and the blade friction factor is 0.86. What is the power developed in the blading when the axial thrust on the blades is 140 N?',
      given: ['D = 0.8 m', 'N = 3000 rpm', 'V<sub>1</sub> = 300 m/s', 'α<sub>1</sub> = 20°', 'Equiangular blades: β<sub>1</sub> = β<sub>2</sub>', 'Friction factor k = V<sub>r2</sub>/V<sub>r1</sub> = 0.86', 'Axial thrust F = 140 N'],
      find: 'Power developed, P',
      steps: [
        {h: 'Step 1: blade speed', b: 'u = πDN/60 = π × 0.8 × 3000/60 = <b>125.66 m/s</b>.'},
        {h: 'Step 2: inlet triangle', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 300 cos 20° = 281.91 m/s.<br>V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub> = 300 sin 20° = 102.61 m/s.<br>Relative whirl V<sub>rw1</sub> = V<sub>w1</sub> − u = 281.91 − 125.66 = 156.25 m/s.<br>V<sub>r1</sub> = √(156.25² + 102.61²) = <b>186.93 m/s</b>; tan β<sub>1</sub> = 102.61/156.25 = 0.6567, so β<sub>1</sub> = <b>33.29°</b>.'},
        {h: 'Step 3: outlet triangle', b: 'Equiangular: β<sub>2</sub> = β<sub>1</sub> = 33.29°. With friction, V<sub>r2</sub> = k V<sub>r1</sub> = 0.86 × 186.93 = 160.76 m/s.<br>V<sub>f2</sub> = V<sub>r2</sub>sin β<sub>2</sub> = 160.76 × sin 33.29° = 88.24 m/s.<br>V<sub>rw2</sub> = V<sub>r2</sub>cos β<sub>2</sub> = 160.76 × cos 33.29° = 134.38 m/s.'},
        {h: 'Step 4: change of whirl', b: 'The exit relative whirl points against the blade motion, so the whirls add: ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 156.25 + 134.38 = <b>290.63 m/s</b>.'},
        {h: 'Step 5: mass flow from the axial thrust', b: 'The axial thrust comes from the change of axial (flow) momentum: F = ṁ(V<sub>f1</sub> − V<sub>f2</sub>).<br>140 = ṁ(102.61 − 88.24) = ṁ × 14.37, so ṁ = <b>9.74 kg/s</b>.'},
        {h: 'Step 6: power', b: 'Euler: P = ṁ u ΔV<sub>w</sub> = 9.74 × 125.66 × 290.63 = 355 711 W = <b>355.7 kW</b>.<br><i>Check:</i> work per kg = uΔV<sub>w</sub> = 125.66 × 290.63 = 36.5 kJ/kg, and 36.5 × 9.74 = 356 kW ✓. (Carrying all the digits gives 355.9 kW; the small difference is rounding of the intermediate values.)'}
      ],
      ans: 'P ≈ 355.7 kW (about 356 kW), with ṁ = 9.74 kg/s',
      slides: [10, 12, 13], tool: 'ext/vt-assembly'},

    {id: 'N2', topic: '1.5', marks: 8,
      title: 'Axial impulse stage with equiangular blades: work, power and utilization factor',
      q: 'An axial impulse turbine stage has a nozzle angle of 20°, a nozzle exit velocity of 350 m/s and a blade speed of 160 m/s. The blades are equiangular and there is no friction. For a steam flow of 6 kg/s find (a) the blade angles, (b) the work per kg and the power, (c) the exit velocity of the steam and (d) the utilization factor.',
      given: ['α<sub>1</sub> = 20°', 'V<sub>1</sub> = 350 m/s', 'u = 160 m/s', 'β<sub>1</sub> = β<sub>2</sub>, V<sub>r2</sub> = V<sub>r1</sub>', 'ṁ = 6 kg/s'],
      find: 'β<sub>1</sub>, β<sub>2</sub>, W, P, V<sub>2</sub>, ε',
      steps: [
        {h: 'Step 1: inlet triangle', b: 'V<sub>w1</sub> = 350 cos 20° = 328.89 m/s; V<sub>f1</sub> = 350 sin 20° = 119.71 m/s.<br>V<sub>rw1</sub> = 328.89 − 160 = 168.89 m/s; V<sub>r1</sub> = √(168.89² + 119.71²) = 207.01 m/s.'},
        {h: 'Step 2: blade angles', b: 'tan β<sub>1</sub> = V<sub>f1</sub>/V<sub>rw1</sub> = 119.71/168.89 = 0.7088, so <b>β<sub>1</sub> = 35.33°</b>. Equiangular: <b>β<sub>2</sub> = 35.33°</b>.'},
        {h: 'Step 3: outlet triangle', b: 'No friction: V<sub>r2</sub> = V<sub>r1</sub> = 207.01 m/s, so V<sub>rw2</sub> = 168.89 m/s (against the blade motion) and V<sub>f2</sub> = V<sub>f1</sub> = 119.71 m/s.<br>Exit absolute whirl = V<sub>rw2</sub> − u = 168.89 − 160 = 8.89 m/s (a little against the blade motion).'},
        {h: 'Step 4: change of whirl and work', b: 'ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 2 × 168.89 = 337.78 m/s.<br>W = uΔV<sub>w</sub> = 160 × 337.78 = 54 046 J/kg = <b>54.05 kJ/kg</b>.<br>P = ṁW = 6 × 54.05 = <b>324.3 kW</b>.'},
        {h: 'Step 5: exit velocity', b: 'V<sub>2</sub> = √(8.89² + 119.71²) = <b>120.0 m/s</b>.'},
        {h: 'Step 6: utilization factor', b: 'ε = W/(V<sub>1</sub>²/2) = 54 046/61 250 = <b>0.882</b>.<br><i>Checks:</i> W + V<sub>2</sub>²/2 = 54.05 + 7.20 = 61.25 kJ/kg = V<sub>1</sub>²/2 ✓ (all the energy is either used or leaves as exit KE). The maximum possible is cos² 20° = 0.883, and here u/V<sub>1</sub> = 0.457, close to the optimum 0.470.'}
      ],
      ans: 'β<sub>1</sub> = β<sub>2</sub> = 35.33°; W = 54.05 kJ/kg; P = 324.3 kW; V<sub>2</sub> = 120.0 m/s; ε = 0.882',
      slides: [10, 11, 20], tool: 'ext/vt-assembly'},

    {id: 'N3', topic: '1.6', marks: 8,
      title: 'Centrifugal impeller: work and its three components',
      q: 'A centrifugal impeller runs at 1450 rpm with inlet radius 0.10 m and outlet radius 0.25 m. The flow enters with no whirl and a flow velocity of 6 m/s. At the outlet the whirl is 30 m/s and the flow velocity is 8 m/s. For a mass flow of 2 kg/s find (a) the work input per kg from the Euler equation, (b) the three components of energy transfer and show that they add up to the same value, and (c) the power and the share that appears as static pressure rise.',
      given: ['N = 1450 rpm', 'r<sub>1</sub> = 0.10 m, r<sub>2</sub> = 0.25 m', 'V<sub>w1</sub> = 0, V<sub>f1</sub> = 6 m/s', 'V<sub>w2</sub> = 30 m/s, V<sub>f2</sub> = 8 m/s', 'ṁ = 2 kg/s'],
      find: 'W, the three components, P, static share',
      steps: [
        {h: 'Step 1: blade speeds', b: 'ω = 2πN/60 = 151.84 rad/s.<br>u<sub>1</sub> = ωr<sub>1</sub> = 15.18 m/s; u<sub>2</sub> = ωr<sub>2</sub> = 37.96 m/s.'},
        {h: 'Step 2: Euler work', b: 'This is a power-absorbing machine, so W = u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub> = 37.96 × 30 − 0 = <b>1138.8 J/kg</b>.'},
        {h: 'Step 3: velocities needed for the components', b: 'V<sub>1</sub> = V<sub>f1</sub> = 6 m/s (no whirl), so V<sub>1</sub>² = 36.<br>V<sub>2</sub>² = 30² + 8² = 964.<br>V<sub>r1</sub>² = V<sub>f1</sub>² + u<sub>1</sub>² = 36 + 230.55 = 266.55.<br>V<sub>r2</sub>² = V<sub>f2</sub>² + (u<sub>2</sub> − V<sub>w2</sub>)² = 64 + (7.96)² = 127.38.'},
        {h: 'Step 4: the three components (for a compressor or pump the signs are reversed)', b: 'I (absolute KE gain) = (V<sub>2</sub>² − V<sub>1</sub>²)/2 = (964 − 36)/2 = <b>464.0 J/kg</b>.<br>II (centrifugal) = (u<sub>2</sub>² − u<sub>1</sub>²)/2 = (1441.0 − 230.5)/2 = <b>605.2 J/kg</b>.<br>III (relative KE decrease, diffusion) = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2 = (266.55 − 127.38)/2 = <b>69.6 J/kg</b>.'},
        {h: 'Step 5: check', b: 'I + II + III = 464.0 + 605.2 + 69.6 = <b>1138.8 J/kg</b> ✓, the same as the Euler work from Step 2.'},
        {h: 'Step 6: power and static share', b: 'P = ṁW = 2 × 1138.8 = <b>2.28 kW</b>.<br>Static share = (II + III)/W = (605.2 + 69.6)/1138.8 = <b>59 %</b> goes to the static pressure rise inside the rotor; the other 41 % leaves as kinetic energy, which the diffuser or volute must turn into pressure.'}
      ],
      ans: 'W = 1138.8 J/kg; I = 464.0, II = 605.2, III = 69.6 J/kg; P = 2.28 kW; static share ≈ 59 %',
      slides: [14, 15, 17]},

    {id: 'N4', topic: '1.8.1', marks: 5,
      title: 'Degree of reaction from the velocities of an axial stage',
      q: 'In an axial turbine stage (u<sub>1</sub> = u<sub>2</sub>) the velocities are V<sub>1</sub> = 400 m/s, V<sub>2</sub> = 150 m/s, V<sub>r1</sub> = 220 m/s and V<sub>r2</sub> = 330 m/s. Find the work done per kg, the degree of reaction and the share of the work that comes from the change of relative kinetic energy. State the type of stage.',
      given: ['V<sub>1</sub> = 400 m/s, V<sub>2</sub> = 150 m/s', 'V<sub>r1</sub> = 220 m/s, V<sub>r2</sub> = 330 m/s', 'u<sub>1</sub> = u<sub>2</sub>'],
      find: 'W, R, share of component III',
      steps: [
        {h: 'Step 1: the two components (u<sub>1</sub> = u<sub>2</sub>, so there is no centrifugal term)', b: 'I = (V<sub>1</sub>² − V<sub>2</sub>²)/2 = (160 000 − 22 500)/2 = <b>68 750 J/kg</b>.<br>III = (V<sub>r2</sub>² − V<sub>r1</sub>²)/2 = (108 900 − 48 400)/2 = <b>30 250 J/kg</b>.'},
        {h: 'Step 2: work done', b: 'W = I + III = 68 750 + 30 250 = 99 000 J/kg = <b>99.0 kJ/kg</b>.'},
        {h: 'Step 3: degree of reaction', b: 'R = Δh<sub>rotor</sub>/Δh<sub>stage</sub> = III/(I + III) = 30 250/99 000 = <b>0.306</b>.'},
        {h: 'Step 4: share and type', b: 'The relative-KE component gives 30.6 % of the work (the same number as R in an axial stage).<br>0 < R < 0.5: a <b>reaction stage with less than 50 % reaction</b>. The rotor does speed the steam up (V<sub>r2</sub> > V<sub>r1</sub>), so the stage is not pure impulse.'}
      ],
      ans: 'W = 99.0 kJ/kg; R = 0.306; component III = 30.6 % of the work',
      slides: [17, 18]},

    {id: 'N5', topic: '1.8.2', marks: 8,
      title: 'Utilization factor of a single-row impulse stage, and the optimum blade speed',
      q: 'A single-row impulse stage has a nozzle angle of 20° and a nozzle exit velocity of 500 m/s. The blades are equiangular and there is no friction. Find the utilization factor when the blade speed is 200 m/s. Then find the optimum blade speed, the maximum utilization factor and the work per kg at that speed.',
      given: ['α<sub>1</sub> = 20°', 'V<sub>1</sub> = 500 m/s', 'u = 200 m/s', 'Equiangular, frictionless: V<sub>r2</sub> = V<sub>r1</sub>'],
      find: 'ε at u = 200 m/s; u<sub>opt</sub>, ε<sub>max</sub>, W',
      steps: [
        {h: 'Step 1: change of whirl at u = 200 m/s', b: 'V<sub>w1</sub> = 500 cos 20° = 469.85 m/s; V<sub>rw1</sub> = 469.85 − 200 = 269.85 m/s.<br>Equiangular and frictionless: V<sub>rw2</sub> = V<sub>rw1</sub>, so ΔV<sub>w</sub> = 2 × 269.85 = 539.69 m/s.'},
        {h: 'Step 2: work and utilization factor', b: 'W = uΔV<sub>w</sub> = 200 × 539.69 = 107 939 J/kg = 107.9 kJ/kg.<br>ε = W/(V<sub>1</sub>²/2) = 107 939/125 000 = <b>0.864</b>. (Same from ε = 4ρ(cos α<sub>1</sub> − ρ) with ρ = u/V<sub>1</sub> = 0.4: 4 × 0.4 × (0.9397 − 0.4) = 0.864.)'},
        {h: 'Step 3: optimum blade speed', b: '(u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>/2 = 0.9397/2 = 0.4698, so u<sub>opt</sub> = 0.4698 × 500 = <b>234.9 m/s</b>.'},
        {h: 'Step 4: maximum utilization factor', b: 'ε<sub>max</sub> = cos² 20° = <b>0.883</b>.'},
        {h: 'Step 5: work at the optimum', b: 'W<sub>opt</sub> = ε<sub>max</sub> × V<sub>1</sub>²/2 = 0.883 × 125 000 = <b>110.4 kJ/kg</b>.<br><i>Check:</i> W = 2u(V<sub>1</sub>cos α<sub>1</sub> − u) = 2 × 234.9 × (469.85 − 234.9) = 110.4 kJ/kg ✓. At the optimum the exit whirl is zero: V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u = 0, so no kinetic energy is lost with swirl.'}
      ],
      ans: 'ε = 0.864 at 200 m/s; u<sub>opt</sub> = 234.9 m/s; ε<sub>max</sub> = 0.883; W<sub>opt</sub> = 110.4 kJ/kg',
      slides: [20], tool: 'ext/vt-assembly'},

    {id: 'N6', topic: '1.8.2', marks: 8,
      title: '50 % reaction stage at its optimum blade speed',
      q: 'An axial 50 % reaction (Parsons) stage has a nozzle angle of 20° and an exit velocity from the fixed blades of 220 m/s. The blade speed is the optimum value for maximum utilization factor. Find the blade speed, the work per kg and the utilization factor. Confirm that R = 0.5.',
      given: ['α<sub>1</sub> = 20°', 'V<sub>1</sub> = 220 m/s', 'R = 0.5: V<sub>r2</sub> = V<sub>1</sub>, V<sub>2</sub> = V<sub>r1</sub>, β<sub>2</sub> = α<sub>1</sub>', 'u = u<sub>opt</sub> = V<sub>1</sub>cos α<sub>1</sub>'],
      find: 'u, W, ε, R',
      steps: [
        {h: 'Step 1: optimum blade speed', b: 'For a 50 % reaction stage (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>, so u = 220 × cos 20° = <b>206.7 m/s</b>.'},
        {h: 'Step 2: inlet triangle', b: 'V<sub>w1</sub> = 220 cos 20° = 206.7 m/s (= u); V<sub>f</sub> = 220 sin 20° = 75.2 m/s.<br>V<sub>rw1</sub> = V<sub>w1</sub> − u = 0, so V<sub>r1</sub> = V<sub>f</sub> = 75.2 m/s (β<sub>1</sub> = 90°).'},
        {h: 'Step 3: outlet triangle (symmetrical)', b: 'V<sub>r2</sub> = V<sub>1</sub> = 220 m/s and β<sub>2</sub> = α<sub>1</sub> = 20°, so V<sub>rw2</sub> = 220 cos 20° = 206.7 m/s.<br>Exit absolute whirl = V<sub>rw2</sub> − u = 0: the steam leaves axially, V<sub>2</sub> = V<sub>f</sub> = 75.2 m/s = V<sub>r1</sub> ✓.'},
        {h: 'Step 4: work', b: 'ΔV<sub>w</sub> = V<sub>w1</sub> + 0 = 206.7 m/s, so W = uΔV<sub>w</sub> = 206.7² = 42 738 J/kg = <b>42.74 kJ/kg</b> (= V<sub>1</sub>²cos² α<sub>1</sub>).'},
        {h: 'Step 5: energy supplied and utilization factor', b: 'Energy supplied to the rotor = V<sub>1</sub>²/2 + (V<sub>r2</sub>² − V<sub>r1</sub>²)/2 = 24 200 + (48 400 − 5 662)/2 = 45 569 J/kg.<br>ε = 42 738/45 569 = <b>0.938</b>.<br><i>Check:</i> 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>) = 2 × 0.883/1.883 = 0.938 ✓.'},
        {h: 'Step 6: degree of reaction', b: 'R = (V<sub>r2</sub>² − V<sub>r1</sub>²)/[(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)] = 42 738/(42 738 + 42 738) = <b>0.5</b> ✓.'}
      ],
      ans: 'u = 206.7 m/s; W = 42.74 kJ/kg; ε = 0.938; R = 0.5',
      slides: [18, 20], tool: 'ext/vt-assembly'},

    {id: 'N7', topic: '1.5', marks: 4,
      title: 'Radial inward-flow turbine: torque and power from angular momentum',
      q: 'The rotor of a radial inward-flow turbine has an inlet radius of 0.15 m and runs at 20 000 rpm. The steam enters with a whirl velocity of 250 m/s and leaves with no whirl. For a flow of 2 kg/s find the torque, the work per kg and the power.',
      given: ['r<sub>1</sub> = 0.15 m', 'N = 20 000 rpm', 'V<sub>w1</sub> = 250 m/s, V<sub>w2</sub> = 0', 'ṁ = 2 kg/s'],
      find: 'T, W, P',
      steps: [
        {h: 'Step 1: angular speed and blade speed', b: 'ω = 2π × 20 000/60 = 2094.4 rad/s; u<sub>1</sub> = ωr<sub>1</sub> = 2094.4 × 0.15 = <b>314.2 m/s</b>.'},
        {h: 'Step 2: torque', b: 'T = ṁ(r<sub>1</sub>V<sub>w1</sub> − r<sub>2</sub>V<sub>w2</sub>) = 2 × (0.15 × 250 − 0) = <b>75 N·m</b>.'},
        {h: 'Step 3: power', b: 'P = Tω = 75 × 2094.4 = 157 080 W = <b>157.1 kW</b>.'},
        {h: 'Step 4: work per kg (and check)', b: 'W = u<sub>1</sub>V<sub>w1</sub> − 0 = 314.2 × 250 = 78 540 J/kg = <b>78.5 kJ/kg</b>.<br><i>Check:</i> ṁW = 2 × 78.54 = 157.1 kW ✓, the same as Tω.'}
      ],
      ans: 'T = 75 N·m; W = 78.5 kJ/kg; P = 157.1 kW',
      slides: [10, 15]}
  ],

  der: [
    {id: 'D1', topic: '1.5', title: 'Euler\'s turbomachinery equation (Dec 2023, Jun 2025)', slides: [7, 8, 9, 10, 11],
      steps: [
        {h: 'Step 1: set-up and assumptions', b: 'Steady flow through a rotor; the fluid enters at 1 (radius r<sub>1</sub>) and leaves at 2 (radius r<sub>2</sub>), following the vane tangentially, with no friction. Let ṁ = mass flow rate, ω = angular speed, u = ωr = πDN/60, and g<sub>c</sub> = 1 in SI. Resolve V into V<sub>a</sub>, V<sub>R</sub> and V<sub>w</sub>: only V<sub>w</sub> gives a torque.'},
        {h: 'Step 2: Newton\'s law for the whirl component', b: 'Force = rate of change of momentum, so the tangential force on the fluid is ṁ(V<sub>w2</sub> − V<sub>w1</sub>), and the fluid pushes back on the blade with ṁ(V<sub>w1</sub> − V<sub>w2</sub>) (third law).'},
        {h: 'Step 3: angular momentum at entry and exit', b: 'Entry: ṁV<sub>w1</sub>r<sub>1</sub>/g<sub>c</sub> (N·m). Exit: ṁV<sub>w2</sub>r<sub>2</sub>/g<sub>c</sub> (N·m).'},
        {h: 'Step 4: torque', b: 'T = net rate of change of angular momentum = ṁ(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub> (N·m).'},
        {h: 'Step 5: power', b: 'P = Tω = ṁω(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub>. With u<sub>1</sub> = ωr<sub>1</sub> and u<sub>2</sub> = ωr<sub>2</sub>: P = ṁ(u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> (W).'},
        {h: 'Step 6: work per kg (the Euler equation)', b: '<b>W.D. = P/ṁ = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> J/kg</b>. Turbine if positive; pump, fan, compressor or blower if negative. If V<sub>w2</sub> is opposite to V<sub>w1</sub>, the terms add: (u<sub>1</sub>V<sub>w1</sub> + u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub>.'}
      ]},

    {id: 'D2', topic: '1.5.1', title: 'Alternate (three-component) form of the Euler equation', slides: [12, 13], tool: 'ext/vt-assembly',
      steps: [
        {h: 'Step 1: velocity triangle at inlet', b: 'V = u + V<sub>r</sub> (vector). Right-angled triangle ABD: V<sub>f1</sub>² = V<sub>1</sub>² − V<sub>w1</sub>² (1.3).'},
        {h: 'Step 2: the other right-angled triangle', b: 'Triangle BCD, with BC = u<sub>1</sub> − V<sub>w1</sub>: V<sub>f1</sub>² = V<sub>r1</sub>² − (u<sub>1</sub> − V<sub>w1</sub>)² = V<sub>r1</sub>² − u<sub>1</sub>² − V<sub>w1</sub>² + 2u<sub>1</sub>V<sub>w1</sub> (1.4).'},
        {h: 'Step 3: eliminate V<sub>f1</sub>', b: 'Equate (1.3) and (1.4): V<sub>1</sub>² = V<sub>r1</sub>² − u<sub>1</sub>² + 2u<sub>1</sub>V<sub>w1</sub>, so <b>u<sub>1</sub>V<sub>w1</sub> = (V<sub>1</sub>² + u<sub>1</sub>² − V<sub>r1</sub>²)/2</b> (1.5).'},
        {h: 'Step 4: same at exit', b: 'u<sub>2</sub>V<sub>w2</sub> = (V<sub>2</sub>² + u<sub>2</sub>² − V<sub>r2</sub>²)/2 (1.6).'},
        {h: 'Step 5: substitute in W.D. = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub>', b: 'W.D. = [(V<sub>1</sub>² + u<sub>1</sub>² − V<sub>r1</sub>²) − (V<sub>2</sub>² + u<sub>2</sub>² − V<sub>r2</sub>²)]/2g<sub>c</sub>.'},
        {h: 'Step 6: regroup (Eq. 1.7)', b: '<b>W.D. = [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub></b>: change of absolute KE (dynamic), centrifugal effect (static), change of relative KE (static).'}
      ]},

    {id: 'D3', topic: '1.8.1', title: 'Degree of reaction and stage loading coefficient for a zero-swirl turbine (Sep/Oct 2025)', slides: [18, 24],
      steps: [
        {h: 'Step 1: zero swirl, constant V<sub>f</sub>', b: 'The absolute velocity leaves the rotor axially: V<sub>w3</sub> = 0. The work per kg is W = uV<sub>w2</sub> (V<sub>w2</sub> = whirl leaving the stator and entering the rotor).'},
        {h: 'Step 2: stage loading coefficient', b: 'ψ = W/u² = V<sub>w2</sub>/u.'},
        {h: 'Step 3: stage enthalpy drop', b: 'For a normal repeating stage the stage inlet and exit velocities are equal, so Δh<sub>stage</sub> = W.'},
        {h: 'Step 4: stator enthalpy drop', b: 'Δh<sub>stator</sub> = (V<sub>2</sub>² − V<sub>1</sub>²)/2 with V<sub>1</sub> = V<sub>f</sub> (axial entry) and V<sub>2</sub>² = V<sub>f</sub>² + V<sub>w2</sub>²: Δh<sub>stator</sub> = V<sub>w2</sub>²/2.'},
        {h: 'Step 5: reaction', b: '1 − R = Δh<sub>stator</sub>/Δh<sub>stage</sub> = (V<sub>w2</sub>²/2)/(uV<sub>w2</sub>) = V<sub>w2</sub>/2u = ψ/2. So <b>R = 1 − ψ/2</b>, or ψ = 2(1 − R).'},
        {h: 'Step 6: checks', b: 'R = 0.5 gives ψ = 1 (V<sub>w2</sub> = u, symmetrical triangles). R = 0 gives ψ = 2 (V<sub>w2</sub> = 2u, the impulse stage).'}
      ]},

    {id: 'D4', topic: '1.8.2', title: 'Maximum utilization factor of a simple impulse stage: ε<sub>max</sub> = cos² α<sub>1</sub>', slides: [20],
      steps: [
        {h: 'Step 1: conditions', b: 'Axial stage, u<sub>1</sub> = u<sub>2</sub> = u; equiangular blades (β<sub>2</sub> = β<sub>1</sub>); no friction (V<sub>r2</sub> = V<sub>r1</sub>).'},
        {h: 'Step 2: whirl components', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>. Relative whirl at entry V<sub>rw1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u, and at exit V<sub>rw2</sub> = V<sub>rw1</sub> (reversed). So ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 2(V<sub>1</sub>cos α<sub>1</sub> − u).'},
        {h: 'Step 3: work', b: 'W = uΔV<sub>w</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u).'},
        {h: 'Step 4: utilization factor', b: 'ε = W/(V<sub>1</sub>²/2) = 4(u/V<sub>1</sub>)(cos α<sub>1</sub> − u/V<sub>1</sub>). Put ρ = u/V<sub>1</sub>: ε = 4ρ(cos α<sub>1</sub> − ρ).'},
        {h: 'Step 5: maximise', b: 'dε/dρ = 4(cos α<sub>1</sub> − 2ρ) = 0, so <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/2</b>. (d²ε/dρ² = −8 < 0, so this is a maximum.)'},
        {h: 'Step 6: maximum value', b: 'ε<sub>max</sub> = 4 × (cos α<sub>1</sub>/2) × (cos α<sub>1</sub>/2) = <b>cos² α<sub>1</sub></b>. For α<sub>1</sub> = 20°, ε<sub>max</sub> = 0.883. At this speed V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − 2u = 0, so the steam leaves axially.'}
      ]},

    {id: 'D5', topic: '1.8.2', title: 'Maximum utilization factor of a 50 % reaction stage: ε<sub>max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)', slides: [18, 20],
      steps: [
        {h: 'Step 1: symmetrical blading', b: 'R = 0.5: V<sub>r2</sub> = V<sub>1</sub>, V<sub>2</sub> = V<sub>r1</sub>, β<sub>2</sub> = α<sub>1</sub>, and V<sub>f</sub> is constant.'},
        {h: 'Step 2: work', b: 'Exit whirl (against the blade motion) V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u. So ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = 2V<sub>1</sub>cos α<sub>1</sub> − u and W = u(2V<sub>1</sub>cos α<sub>1</sub> − u).'},
        {h: 'Step 3: energy supplied to the rotor', b: 'E = V<sub>1</sub>²/2 + (V<sub>r2</sub>² − V<sub>r1</sub>²)/2 = V<sub>1</sub>² − V<sub>r1</sub>²/2 (since V<sub>r2</sub> = V<sub>1</sub>). Cosine rule: V<sub>r1</sub>² = V<sub>1</sub>² − 2uV<sub>1</sub>cos α<sub>1</sub> + u². So E = (V<sub>1</sub>² + 2uV<sub>1</sub>cos α<sub>1</sub> − u²)/2. (This equals W + V<sub>2</sub>²/2.)'},
        {h: 'Step 4: utilization factor', b: 'With ρ = u/V<sub>1</sub> and c = cos α<sub>1</sub>: ε = W/E = 2ρ(2c − ρ)/(1 + 2cρ − ρ²).'},
        {h: 'Step 5: maximise', b: 'Differentiating, the numerator of dε/dρ simplifies to 4(c − ρ), so dε/dρ = 4(c − ρ)/(1 + 2cρ − ρ²)². It is positive for ρ &lt; c and negative for ρ &gt; c, so <b>ρ<sub>opt</sub> = cos α<sub>1</sub></b>: twice the optimum of the impulse stage.'},
        {h: 'Step 6: maximum value', b: 'ε<sub>max</sub> = 2c·c/(1 + 2c² − c²) = <b>2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)</b>. For α<sub>1</sub> = 20°, ε<sub>max</sub> = 0.938, higher than the impulse stage\'s 0.883.'}
      ]}
  ]
});
