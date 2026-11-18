/* Unit II: numericals and derivations (DRAFT, teacher to verify). Every number below was checked by a script.
   N1-N6 are the teacher's slide numericals; N7-N10 are extra practice in the same style. */
MTM.c.u2 = MTM.c.u2 || {sl: {}};
Object.assign(MTM.c.u2, {
  num: [
    {id: 'N1', topic: '2.4.4', marks: 10,
      title: 'Single-row impulse stage: power from the axial thrust (Dec 2023, Jun 2025)',
      q: 'In a stage of an impulse turbine with a single-row wheel, the mean diameter of the blade ring is 800 mm and the speed is 3000 rpm. Steam leaves the nozzles at 300 m/s and the nozzle angle is 20°. The rotor blades are equiangular and the blade friction factor is 0.86. What is the power developed in the blading when the axial thrust on the blades is 140 N?',
      given: ['D = 0.8 m', 'N = 3000 rpm', 'V<sub>1</sub> = 300 m/s', 'α<sub>1</sub> = 20°', 'Equiangular blades: β<sub>1</sub> = β<sub>2</sub>', 'Blade friction factor K = V<sub>r2</sub>/V<sub>r1</sub> = 0.86', 'Axial thrust F<sub>a</sub> = 140 N'],
      find: 'Power developed, P',
      steps: [
        {h: 'Step 1: blade speed', b: 'u = πDN/60 = π × 0.8 × 3000/60 = <b>125.66 m/s</b>.'},
        {h: 'Step 2: inlet triangle', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 300 cos 20° = 281.91 m/s.<br>V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub> = 300 sin 20° = 102.61 m/s.<br>Relative whirl V<sub>rw1</sub> = V<sub>w1</sub> − u = 281.91 − 125.66 = 156.25 m/s.<br>V<sub>r1</sub> = √(156.25² + 102.61²) = <b>186.93 m/s</b>; tan β<sub>1</sub> = 102.61/156.25 = 0.6567, so β<sub>1</sub> = 33.29°.'},
        {h: 'Step 3: outlet triangle', b: 'Equiangular: β<sub>2</sub> = β<sub>1</sub> = 33.29°. With friction V<sub>r2</sub> = K V<sub>r1</sub> = 0.86 × 186.93 = 160.76 m/s.<br>V<sub>f2</sub> = V<sub>r2</sub>sin β<sub>2</sub> = 160.76 × sin 33.29° = 88.24 m/s.<br>V<sub>rw2</sub> = V<sub>r2</sub>cos β<sub>2</sub> = 160.76 × cos 33.29° = 134.38 m/s.'},
        {h: 'Step 4: change of whirl', b: 'The exit relative whirl points against the blade motion, so the whirls add: ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 156.25 + 134.38 = <b>290.63 m/s</b>.'},
        {h: 'Step 5: mass flow from the axial thrust', b: 'The axial thrust comes from the change of axial (flow) momentum: F<sub>a</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>).<br>140 = ṁ(102.61 − 88.24) = ṁ × 14.37, so ṁ = <b>9.74 kg/s</b>.'},
        {h: 'Step 6: power', b: 'P = ṁ u ΔV<sub>w</sub> = 9.74 × 125.66 × 290.63 = 355 711 W = <b>355.7 kW</b>.<br><i>Check:</i> work per kg = uΔV<sub>w</sub> = 125.66 × 290.63 = 36.5 kJ/kg, and 36.5 × 9.74 = 356 kW ✓. (Carrying all the digits gives 355.9 kW; the small difference is rounding of the intermediate values.)'}
      ],
      ans: 'P ≈ 355.7 kW (about 356 kW), with ṁ = 9.74 kg/s',
      slides: [49, 50, 51, 52, 53], tool: 'ext/turbograph'},

    {id: 'N2', topic: '2.4.5', marks: 10,
      title: 'Single-row impulse stage: blade angles, power and axial thrust from the utilization factor',
      q: 'A stage of an impulse turbine has a mean blade diameter of 75 cm and runs at 3500 rpm. Steam leaves the nozzle at 275 m/s inclined at 20° to the plane of the wheel. The utilization factor is 0.9 and the relative velocity at the rotor exit is 0.9 of that at the inlet. Find (a) the inlet and exit rotor blade angles, (b) the power developed for a steam flow of 2 kg/s and (c) the axial thrust.',
      given: ['d = 0.75 m', 'N = 3500 rpm', 'V<sub>1</sub> = 275 m/s', 'α<sub>1</sub> = 20°', 'Utilization factor ε = 0.9', 'K = V<sub>r2</sub>/V<sub>r1</sub> = 0.9', 'ṁ = 2 kg/s'],
      find: 'β<sub>1</sub>, β<sub>2</sub>, P, F<sub>a</sub>',
      steps: [
        {h: 'Step 1: blade speed', b: 'u = πdN/60 = π × 0.75 × 3500/60 = <b>137.44 m/s</b>.'},
        {h: 'Step 2: inlet triangle and angle β<sub>1</sub>', b: 'V<sub>w1</sub> = 275 cos 20° = 258.42 m/s; V<sub>f1</sub> = 275 sin 20° = 94.06 m/s.<br>V<sub>w1</sub> − u = 258.42 − 137.44 = 120.98 m/s.<br>tan β<sub>1</sub> = 94.06/120.98 = 0.7775, so <b>β<sub>1</sub> = 37.86°</b>; V<sub>r1</sub> = √(94.06² + 120.98²) = 153.24 m/s.'},
        {h: 'Step 3: exit relative velocity', b: 'V<sub>r2</sub> = K V<sub>r1</sub> = 0.9 × 153.24 = 137.92 m/s.'},
        {h: 'Step 4: exit whirl from the utilization factor', b: 'ε = 2u(V<sub>w1</sub> + V<sub>w2</sub>)/V<sub>1</sub>². So 0.9 = 2 × 137.44 × (258.42 + V<sub>w2</sub>)/275², which gives 258.42 + V<sub>w2</sub> = 247.61 and <b>V<sub>w2</sub> = −10.81 m/s</b>.<br>The negative sign means a small exit whirl in the direction of blade motion; the blades are <i>not</i> equiangular here.'},
        {h: 'Step 5: exit blade angle β<sub>2</sub>', b: 'V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u, so V<sub>r2</sub>cos β<sub>2</sub> = −10.81 + 137.44 = 126.63 m/s.<br>cos β<sub>2</sub> = 126.63/137.92 = 0.9181, so <b>β<sub>2</sub> = 23.35°</b>.'},
        {h: 'Step 6: power', b: 'ΔV<sub>w</sub> = 258.42 − 10.81 = 247.61 m/s.<br>P = ṁuΔV<sub>w</sub> = 2 × 137.44 × 247.61 = 68 062 W = <b>68.06 kW</b>.'},
        {h: 'Step 7: axial thrust', b: 'V<sub>f2</sub> = V<sub>r2</sub>sin β<sub>2</sub> = 137.92 × sin 23.35° = 54.66 m/s.<br>F<sub>a</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>) = 2 × (94.06 − 54.66) = <b>78.8 N</b>, in the direction of the steam flow.<br><i>Check:</i> energy: W = 34.03 kJ/kg; V<sub>2</sub>²/2 = 1.55 kJ/kg (V<sub>2</sub> = 55.7 m/s); blade friction (V<sub>r1</sub>² − V<sub>r2</sub>²)/2 = 2.23 kJ/kg; sum = 37.81 kJ/kg = V<sub>1</sub>²/2 ✓.'}
      ],
      ans: 'β<sub>1</sub> = 37.86°, β<sub>2</sub> = 23.35°; P = 68.06 kW; F<sub>a</sub> = 78.8 N',
      slides: [54, 55, 56, 57, 58], tool: 'ext/turbograph'},

    {id: 'N3', topic: '2.5.3', marks: 5,
      title: 'Parsons stage: rotational speed, diagram power and enthalpy drop (June 2024)',
      q: 'A Parsons stage steam turbine receives steam from the fixed blades at 90 m/s. The mean blade height is 40 mm and the moving blade exit angle is 20°. The axial velocity is 3/4 of the blade velocity at the mean radius. Steam is supplied at 9000 kg/h at a specific volume of 0.669 m³/kg, and the effect of blade tip thickness on the annulus area may be neglected. Calculate (a) the rotational speed (rev/s) of the wheel, (b) the diagram power and (c) the enthalpy drop in the stage.',
      given: ['Parsons (50 % reaction): α<sub>1</sub> = β<sub>2</sub> = 20°, V<sub>1</sub> = V<sub>r2</sub> = 90 m/s', 'V<sub>f</sub> = (3/4)u', 'H = 0.04 m', 'ṁ = 9000/3600 = 2.5 kg/s', 'v<sub>s</sub> = 0.669 m³/kg'],
      find: 'N (rev/s), diagram power P, enthalpy drop Δh<sub>stage</sub>',
      steps: [
        {h: 'Step 1: flow velocity and blade speed', b: 'V<sub>f</sub> = V<sub>1</sub> sin α<sub>1</sub> = 90 sin 20° = 30.78 m/s.<br>u = (4/3)V<sub>f</sub> = <b>41.04 m/s</b>.'},
        {h: 'Step 2: whirl velocities', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 90 cos 20° = 84.57 m/s.<br>V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = 84.57 − 41.04 = 43.53 m/s.<br>ΔV<sub>w</sub> = 84.57 + 43.53 = <b>128.10 m/s</b>.'},
        {h: 'Step 3: mean diameter from continuity', b: 'The annulus area is A = πDH. Continuity: ṁ v<sub>s</sub> = A V<sub>f</sub> = πDH V<sub>f</sub>.<br>D = ṁ v<sub>s</sub>/(πH V<sub>f</sub>) = 2.5 × 0.669/(π × 0.04 × 30.78) = <b>0.432 m</b>.'},
        {h: 'Step 4: rotational speed', b: 'u = πDN, so N = u/(πD) = 41.04/(π × 0.432) = <b>30.2 rev/s</b> (≈ 1813 rpm).'},
        {h: 'Step 5: diagram power', b: 'P = ṁ u ΔV<sub>w</sub> = 2.5 × 41.04 × 128.10 = 13 144 W = <b>13.14 kW</b>.'},
        {h: 'Step 6: enthalpy drop in the stage', b: 'For an ideal 50 % reaction stage with full carry-over of kinetic energy between repeating stages, the stage enthalpy drop equals the work done per kg (no friction data, so K = 1 is assumed): Δh<sub>stage</sub> = uΔV<sub>w</sub>/1000 = 41.04 × 128.10/1000 = <b>5.26 kJ/kg</b>.'}
      ],
      ans: 'N = 30.2 rev/s (1813 rpm); P = 13.14 kW; Δh<sub>stage</sub> = 5.26 kJ/kg',
      slides: [72, 73, 74, 75], tool: 'ext/turbograph'},

    {id: 'N4', topic: '2.5.4', marks: 8,
      title: 'Parsons stage: blade inlet angle, power and available isentropic enthalpy drop (Venkanna, Example 6.13)',
      q: 'The following particulars refer to a stage of a Parsons steam turbine: mean diameter of the blade ring 70 cm, steam velocity at the inlet of the moving blades 160 m/s, outlet blade angle of the moving blades 20°, steam flow 7 kg/s, rotational speed 1500 rpm, stage efficiency 0.8. Draw the velocity diagram and find (1) the blade inlet angle, (2) the power developed in the stage and (3) the available isentropic enthalpy drop.',
      given: ['d = 0.7 m', 'V<sub>1</sub> = 160 m/s', 'β<sub>2</sub> = 20°', 'ṁ = 7 kg/s', 'N = 1500 rpm', 'η<sub>s</sub> = 0.8', 'Parsons: α<sub>1</sub> = β<sub>2</sub>, V<sub>r2</sub> = V<sub>1</sub>, V<sub>f1</sub> = V<sub>f2</sub>'],
      find: 'β<sub>1</sub>, P, Δh<sub>theoretical</sub>',
      steps: [
        {h: 'Step 1: blade speed', b: 'u = πdN/60 = π × 0.7 × 1500/60 = <b>54.98 m/s</b>.'},
        {h: 'Step 2: inlet triangle', b: 'α<sub>1</sub> = β<sub>2</sub> = 20°. V<sub>w1</sub> = 160 cos 20° = <b>150.35 m/s</b>; V<sub>f1</sub> = 160 sin 20° = <b>54.72 m/s</b>.'},
        {h: 'Step 3: blade inlet angle', b: 'tan β<sub>1</sub> = V<sub>f1</sub>/(V<sub>w1</sub> − u) = 54.72/(150.35 − 54.98) = 54.72/95.37 = 0.5738, so <b>β<sub>1</sub> = 29.85°</b> (29°51′). By symmetry the absolute exit angle α<sub>2</sub> = β<sub>1</sub> = 29.85°.'},
        {h: 'Step 4: exit whirl and change of whirl', b: 'V<sub>w2</sub> = V<sub>f2</sub>/tan α<sub>2</sub> = 54.72/tan 29.85° = 95.37 m/s.<br>ΔV<sub>w</sub> = 150.35 + 95.37 = <b>245.72 m/s</b>.<br><i>Check:</i> V<sub>w2</sub> = V<sub>1</sub>cos α<sub>1</sub> − u = 150.35 − 54.98 = 95.37 ✓.'},
        {h: 'Step 5: power', b: 'P = ṁuΔV<sub>w</sub> = 7 × 54.98 × 245.72 = 94 568 W = <b>94.57 kW</b>.'},
        {h: 'Step 6: isentropic enthalpy drop', b: 'η<sub>s</sub> = (actual power)/(isentropic enthalpy rate), so the isentropic enthalpy rate = 94.57/0.8 = 118.21 kW.<br>Per kg: Δh<sub>theoretical</sub> = 118.21/7 = <b>16.89 kJ/kg</b>.'}
      ],
      ans: 'β<sub>1</sub> = 29.85°; P = 94.57 kW; Δh<sub>theoretical</sub> = 16.89 kJ/kg',
      slides: [76, 77, 78, 79], tool: 'ext/turbograph'},

    {id: 'N5', topic: '2.5.5', marks: 8,
      title: 'Parsons turbine: number of moving rows for a given total enthalpy drop (Venkanna, Example 6.14)',
      q: 'In a Parsons reaction turbine running at 1500 rpm, the total available enthalpy drop for an expansion is 63 kJ/kg. If the mean diameter of the rotor is 100 cm, find the number of moving rows required. Assume that the stage efficiency is 0.8, the blade outlet angle is 20° and the blade speed ratio is 0.7.',
      given: ['N = 1500 rpm', 'ΔH<sub>total</sub> = 63 kJ/kg', 'd = 1.0 m', 'η<sub>s</sub> = 0.8', 'β<sub>2</sub> = 20° (so α<sub>1</sub> = 20°)', 'ρ = u/V<sub>1</sub> = 0.7'],
      find: 'Number of moving rows (stages)',
      steps: [
        {h: 'Step 1: blade speed', b: 'u = πdN/60 = π × 1.0 × 1500/60 = <b>78.54 m/s</b>.'},
        {h: 'Step 2: steam velocity from the speed ratio', b: 'V<sub>1</sub> = u/ρ = 78.54/0.7 = <b>112.20 m/s</b>. Parsons: V<sub>r2</sub> = V<sub>1</sub> = 112.20 m/s, α<sub>1</sub> = β<sub>2</sub> = 20°.'},
        {h: 'Step 3: whirl velocities', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> = 112.20 × 0.9397 = 105.43 m/s.<br>V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = 105.43 − 78.54 = 26.89 m/s.<br>ΔV<sub>w</sub> = 105.43 + 26.89 = <b>132.32 m/s</b>.'},
        {h: 'Step 4: work per stage', b: 'W<sub>stage</sub> = uΔV<sub>w</sub> = 78.54 × 132.32 = 10 392 J/kg = <b>10.392 kJ/kg</b>.'},
        {h: 'Step 5: isentropic drop per stage', b: 'Δh<sub>theoretical</sub> = W<sub>stage</sub>/η<sub>s</sub> = 10.392/0.8 = <b>12.99 kJ/kg</b>.'},
        {h: 'Step 6: number of rows', b: 'N<sub>S</sub> = ΔH<sub>total</sub>/Δh<sub>theoretical</sub> = 63/12.99 = 4.85, rounded <b>up</b> to <b>5 moving rows</b>.'}
      ],
      ans: '5 moving rows (stages)',
      slides: [80, 81, 82], tool: 'ext/turbograph'},

    {id: 'N6', topic: '2.7.3', marks: 10,
      title: 'Two-row Curtis stage: work backwards from the axial exit (Nov 2025)',
      q: 'The following particulars apply to a two-row velocity-compounded impulse stage of a turbine: nozzle angle 17°, blade speed 125 m/s, exit angles of the first row of moving blades, the fixed (guide) blades and the second row of moving blades 22°, 26° and 30° respectively. Take the blade velocity coefficient for each row of blades as 0.9, and assume that the absolute velocity of the steam leaving the stage is in the axial direction. (i) Draw the velocity diagram for both stages and (ii) calculate the absolute velocity of the steam leaving the velocity stage.',
      given: ['α<sub>1</sub> = 17°, u = 125 m/s', 'Row 1 moving exit β<sub>1</sub> = 22°', 'Guide-blade exit α<sub>2</sub> = 26°', 'Row 2 moving exit β<sub>2</sub> = 30°', 'K = 0.9 for every row', 'V<sub>4</sub> axial, so V<sub>w4</sub> = 0'],
      find: 'V<sub>4</sub> (and V<sub>1</sub> for the drawing)',
      steps: [
        {h: 'Strategy: work backwards', b: 'V<sub>1</sub> is not given, but the axial-exit condition fixes the last row. Go <b>Row 2 → guide blades → Row 1 → nozzle</b>. For the triangles where only a relative speed, u and one angle are known, use the cosine rule and take the positive root.'},
        {h: 'Step 1: Row 2 exit triangle', b: 'Axial exit: V<sub>w4</sub> = 0, so u − V<sub>r,out2</sub>cos β<sub>2</sub> = 0, giving V<sub>r,out2</sub> = u/cos β<sub>2</sub> = 125/cos 30° = <b>144.34 m/s</b>.<br>V<sub>4</sub> = V<sub>f4</sub> = V<sub>r,out2</sub> sin β<sub>2</sub> = 144.34 sin 30° = <b>72.17 m/s</b>. (This is the answer to part (ii).)<br>V<sub>r,in2</sub> = V<sub>r,out2</sub>/K = 144.34/0.9 = <b>160.38 m/s</b>.'},
        {h: 'Step 2: Row 2 inlet and the guide blades', b: 'Cosine rule: V<sub>r,in2</sub>² = V<sub>3</sub>² + u² − 2uV<sub>3</sub>cos α<sub>2</sub>.<br>160.38² = V<sub>3</sub>² + 125² − 2 × 125 × V<sub>3</sub> cos 26°, i.e. V<sub>3</sub>² − 224.70V<sub>3</sub> − 10 095 = 0, so <b>V<sub>3</sub> = 263.07 m/s</b> (V<sub>w3</sub> = 236.45, V<sub>f3</sub> = 115.32 m/s).<br>Guide blades: V<sub>3</sub> = K V<sub>2</sub>, so V<sub>2</sub> = 263.07/0.9 = <b>292.30 m/s</b>.'},
        {h: 'Step 3: Row 1 exit triangle', b: 'Cosine rule with β<sub>1</sub> = 22°: V<sub>2</sub>² = V<sub>r,out1</sub>² + u² − 2uV<sub>r,out1</sub>cos β<sub>1</sub>.<br>292.30² = V<sub>r,out1</sub>² + 125² − 2 × 125 × V<sub>r,out1</sub> cos 22°, i.e. V<sub>r,out1</sub>² − 231.80V<sub>r,out1</sub> − 69 821 = 0, so <b>V<sub>r,out1</sub> = 404.43 m/s</b>.<br>V<sub>r,in1</sub> = 404.43/0.9 = <b>449.36 m/s</b>.'},
        {h: 'Step 4: Row 1 inlet triangle and the nozzle velocity', b: 'Cosine rule with α<sub>1</sub> = 17°: V<sub>r,in1</sub>² = V<sub>1</sub>² + u² − 2uV<sub>1</sub>cos α<sub>1</sub>.<br>449.36² = V<sub>1</sub>² + 125² − 2 × 125 × V<sub>1</sub> cos 17°, i.e. V<sub>1</sub>² − 239.08V<sub>1</sub> − 186 301 = 0, so <b>V<sub>1</sub> = 567.4 m/s</b>.'},
        {h: 'Step 5: results table (for the drawing)', b: '<b>Row 1:</b> V<sub>1</sub> = 567.4 m/s in (V<sub>w</sub> = 542.6, V<sub>f</sub> = 165.9); V<sub>r,in1</sub> = 449.4, V<sub>r,out1</sub> = 404.4; exit V<sub>2</sub> = 292.3 m/s with V<sub>w2</sub> = −250.0.<br><b>Row 2:</b> V<sub>3</sub> = 263.1 m/s in (V<sub>w</sub> = 236.4, V<sub>f</sub> = 115.3); V<sub>r,in2</sub> = 160.4, V<sub>r,out2</sub> = 144.3; exit V<sub>4</sub> = 72.2 m/s axial.<br>The negative V<sub>w2</sub> means the steam leaves row 1 against the blade motion; the guide blades turn it back for row 2.'},
        {h: 'Extension (not asked): work and diagram efficiency', b: 'ΔV<sub>w</sub> for row 1 = 542.6 + 250.0 = 792.6 m/s; for row 2 = 236.4 + 0 = 236.4 m/s.<br>W = u(792.6 + 236.4) = 125 × 1029.0 = 128.6 kJ/kg; kinetic energy supplied V<sub>1</sub>²/2 = 161.0 kJ/kg.<br>Diagram efficiency = 128.6/161.0 = <b>0.80</b>. (The rest is friction in the rows and guide blades, and the exit KE V<sub>4</sub>²/2 = 2.6 kJ/kg.)'}
      ],
      ans: 'V<sub>4</sub> = 72.2 m/s (axial); nozzle velocity V<sub>1</sub> = 567.4 m/s',
      slides: [104, 105, 106, 107, 108, 109, 110, 111], tool: 'ext/turbograph'},

    {id: 'N7', topic: '2.4.2', marks: 10,
      title: 'Single-row impulse stage: nozzle, blade and stage efficiency, and where the energy goes',
      q: 'Steam flows at 4 kg/s through the nozzles of a single-row impulse stage. The isentropic enthalpy drop in the nozzles is 150 kJ/kg and the nozzle efficiency is 0.92. The nozzle angle is 18°, the blade speed is 210 m/s, the blades are equiangular and the blade velocity coefficient is 0.88. Find (a) the nozzle exit velocity, (b) the blade angle, (c) the work done per kg and the power, (d) the blade efficiency and the stage efficiency, (e) the axial thrust, and (f) the energy lost to blade friction and to the exit velocity, showing that everything adds up.',
      given: ['ṁ = 4 kg/s', '(Δh)<sub>theoretical</sub> = 150 kJ/kg', 'η<sub>n</sub> = 0.92', 'α<sub>1</sub> = 18°', 'u = 210 m/s', 'β<sub>1</sub> = β<sub>2</sub>', 'K = 0.88'],
      find: 'V<sub>1</sub>, β, W, P, η<sub>b</sub>, η<sub>S</sub>, F<sub>a</sub>, E<sub>Lf</sub>, E<sub>Le</sub>',
      steps: [
        {h: 'Step 1: nozzle exit velocity', b: 'η<sub>n</sub> = V<sub>1</sub>²/[2(Δh)<sub>theoretical</sub>] (Eq. 2.5), so V<sub>1</sub> = √(2 × 0.92 × 150 000) = √276 000 = <b>525.4 m/s</b>.'},
        {h: 'Step 2: inlet triangle', b: 'V<sub>w1</sub> = 525.36 cos 18° = 499.64 m/s; V<sub>f1</sub> = 525.36 sin 18° = 162.34 m/s.<br>V<sub>rw1</sub> = 499.64 − 210 = 289.64 m/s; V<sub>r1</sub> = √(289.64² + 162.34²) = 332.04 m/s.<br>tan β<sub>1</sub> = 162.34/289.64 = 0.5605, so <b>β<sub>1</sub> = β<sub>2</sub> = 29.27°</b>.'},
        {h: 'Step 3: outlet triangle', b: 'V<sub>r2</sub> = K V<sub>r1</sub> = 0.88 × 332.04 = 292.19 m/s. Because β<sub>2</sub> = β<sub>1</sub>, both components shrink by K: V<sub>rw2</sub> = 0.88 × 289.64 = 254.89 m/s and V<sub>f2</sub> = 0.88 × 162.34 = 142.86 m/s.<br>Exit absolute whirl V<sub>w2</sub> = V<sub>rw2</sub> − u = 44.89 m/s (opposed to the blade motion); V<sub>2</sub> = √(44.89² + 142.86²) = 149.75 m/s.'},
        {h: 'Step 4: work and power', b: 'ΔV<sub>w</sub> = V<sub>rw1</sub> + V<sub>rw2</sub> = 289.64 + 254.89 = 544.53 m/s.<br>W = uΔV<sub>w</sub> = 210 × 544.53 = 114 351 J/kg = <b>114.35 kJ/kg</b>; P = 4 × 114.35 = <b>457.4 kW</b>.'},
        {h: 'Step 5: efficiencies', b: 'Blade efficiency: η<sub>b</sub> = W/(V<sub>1</sub>²/2) = 114.35/138.0 = <b>0.829</b>.<br>Stage efficiency: η<sub>S</sub> = W/(Δh)<sub>theoretical</sub> = 114.35/150 = <b>0.762</b>.<br><i>Check:</i> η<sub>n</sub> × η<sub>b</sub> = 0.92 × 0.829 = 0.762 ✓ (Eq. 2.6).'},
        {h: 'Step 6: axial thrust', b: 'F<sub>a</sub> = ṁ(V<sub>f1</sub> − V<sub>f2</sub>) = 4 × (162.34 − 142.86) = <b>77.9 N</b>. (Friction reduces V<sub>f2</sub>, so a small thrust arises.)'},
        {h: 'Step 7: energy accounting', b: 'Blade friction (Eq. 2.8): E<sub>Lf</sub> = ṁ(V<sub>r1</sub>² − V<sub>r2</sub>²)/2000 = 4 × (110 250 − 85 372)/2000 = <b>49.7 kW</b>.<br>Exit loss (Eq. 2.9): E<sub>Le</sub> = ṁV<sub>2</sub>²/2000 = 4 × 22 425/2000 = <b>44.9 kW</b>.<br>Kinetic energy leaving the nozzle: ṁV<sub>1</sub>²/2 = 4 × 138.0 = 552.0 kW; and P + E<sub>Lf</sub> + E<sub>Le</sub> = 457.4 + 49.7 + 44.9 = 552.0 kW ✓.<br>Nozzle loss = ṁ[(Δh)<sub>theoretical</sub> − V<sub>1</sub>²/2] = 4 × 12.0 = 48.0 kW; the total 552.0 + 48.0 = 600 kW = ṁ(Δh)<sub>theoretical</sub> ✓.'}
      ],
      ans: 'V<sub>1</sub> = 525.4 m/s; β = 29.27°; W = 114.35 kJ/kg, P = 457.4 kW; η<sub>b</sub> = 0.829, η<sub>S</sub> = 0.762; F<sub>a</sub> = 77.9 N; E<sub>Lf</sub> = 49.7 kW, E<sub>Le</sub> = 44.9 kW',
      slides: [36, 37, 38, 39, 40], tool: 'ext/turbograph'},

    {id: 'N8', topic: '2.4.3', marks: 6,
      title: 'Optimum blade speed and maximum efficiency of a single-row impulse stage with friction',
      q: 'A simple impulse stage has a nozzle angle of 22°, a nozzle exit velocity of 600 m/s, equiangular blades and a blade velocity coefficient of 0.85. Find (a) the optimum blade speed ratio and blade speed, (b) the maximum diagram efficiency and the work per kg at that speed, (c) the rotor speed needed for a mean diameter of 1.2 m, and (d) the diagram efficiency if the blade speed ratio is only 0.40.',
      given: ['α<sub>1</sub> = 22°', 'V<sub>1</sub> = 600 m/s', 'β<sub>1</sub> = β<sub>2</sub>', 'K = 0.85', 'D = 1.2 m'],
      find: 'ρ<sub>opt</sub>, u<sub>opt</sub>, η<sub>d,max</sub>, W, N, η<sub>d</sub> at ρ = 0.40',
      steps: [
        {h: 'Step 1: optimum speed ratio and blade speed', b: 'ρ<sub>opt</sub> = cos α<sub>1</sub>/2 = cos 22°/2 = 0.9272/2 = <b>0.4636</b>.<br>u<sub>opt</sub> = ρ<sub>opt</sub>V<sub>1</sub> = 0.4636 × 600 = <b>278.2 m/s</b>. (K does not change ρ<sub>opt</sub>.)'},
        {h: 'Step 2: maximum diagram efficiency', b: 'η<sub>d,max</sub> = ((1 + K)/2)cos² α<sub>1</sub> = 0.925 × 0.8597 = <b>0.795</b>. (A frictionless stage would give cos² 22° = 0.860.)'},
        {h: 'Step 3: work per kg', b: 'W = η<sub>d,max</sub> × V<sub>1</sub>²/2 = 0.7952 × 180 000 = 143 140 J/kg = <b>143.1 kJ/kg</b>.'},
        {h: 'Step 4: rotor speed', b: 'N = 60u/(πD) = 60 × 278.2/(π × 1.2) = <b>4427 rpm</b>. Even with this very large diameter the speed is high: the case for compounding.'},
        {h: 'Step 5: off-optimum speed ratio', b: 'η<sub>d</sub> = 2(1 + K)ρ(cos α<sub>1</sub> − ρ) = 2 × 1.85 × 0.40 × (0.9272 − 0.40) = <b>0.780</b>: only 1.5 percentage points below the maximum, since the curve is flat near its peak (blade speed 240 m/s).'}
      ],
      ans: 'ρ<sub>opt</sub> = 0.464, u = 278.2 m/s; η<sub>d,max</sub> = 0.795; W = 143.1 kJ/kg; N ≈ 4430 rpm; η<sub>d</sub>(0.40) = 0.780',
      slides: [44, 45, 46, 47]},

    {id: 'N9', topic: '2.5.2', marks: 8,
      title: 'Reaction stage versus impulse stage: optimum speed, efficiency and off-design behaviour',
      q: 'A Parsons stage and a simple impulse stage both have a nozzle (fixed-blade exit) angle of 20° and a steam velocity of 120 m/s at the moving blades. Find for each (a) the optimum blade speed, (b) the maximum diagram efficiency, (c) the work per kg at the optimum for the reaction stage, and (d) the diagram efficiencies of both at a blade speed ratio of 0.8.',
      given: ['α<sub>1</sub> = 20° (both)', 'V<sub>1</sub> = 120 m/s', 'K = 1 (frictionless)', 'Reaction stage: α<sub>1</sub> = β<sub>2</sub>, V<sub>r2</sub> = V<sub>1</sub>'],
      find: 'u<sub>opt</sub>, η<sub>d,max</sub>, W (reaction), η<sub>d</sub> at ρ = 0.8',
      steps: [
        {h: 'Step 1: impulse stage', b: 'ρ<sub>opt</sub> = cos 20°/2 = 0.4698; u<sub>opt</sub> = 0.4698 × 120 = <b>56.4 m/s</b>. η<sub>d,max</sub> = cos² 20° = <b>0.883</b>.'},
        {h: 'Step 2: reaction stage', b: 'ρ<sub>opt</sub> = cos 20° = 0.9397; u<sub>opt</sub> = 0.9397 × 120 = <b>112.8 m/s</b>.<br>η<sub>d,max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>) = 2 × 0.8830/1.8830 = <b>0.938</b>.'},
        {h: 'Step 3: work per kg at the reaction optimum', b: 'W = V<sub>1</sub>²(2ρ cos α<sub>1</sub> − ρ²) = 14 400 × (2 × 0.9397 × 0.9397 − 0.8830) = 14 400 × 0.8830 = 12 716 J/kg = <b>12.72 kJ/kg</b>.<br><i>Check:</i> energy supplied E = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>) = 7200 × 1.8830 = 13.56 kJ/kg and W/E = 0.938 ✓.'},
        {h: 'Step 4: both stages at ρ = 0.8', b: 'Impulse: η<sub>d</sub> = 4ρ(cos α<sub>1</sub> − ρ) = 4 × 0.8 × (0.9397 − 0.8) = <b>0.447</b>.<br>Reaction: η<sub>d</sub> = 2(2ρ cos α<sub>1</sub> − ρ²)/(1 + cos² α<sub>1</sub>) = 2(2 × 0.8 × 0.9397 − 0.64)/1.8830 = 2 × 0.8635/1.8830 = <b>0.917</b>.<br>The reaction stage holds its efficiency far better away from its design point (the flatter curve of Figure 5). The two curves cross at ρ ≈ 0.6, where both are 0.815.'}
      ],
      ans: 'Impulse: u = 56.4 m/s, η = 0.883. Reaction: u = 112.8 m/s, η = 0.938, W = 12.72 kJ/kg. At ρ = 0.8: impulse 0.447, reaction 0.917',
      slides: [67, 68, 69, 70, 71]},

    {id: 'N10', topic: '2.7.2', marks: 8,
      title: 'Ideal two-row Curtis stage: optimum blade speed, maximum work and the saving in rotor speed',
      q: 'An ideal (frictionless, equiangular, axial-exit) two-row velocity-compounded stage has a nozzle angle of 18° and a nozzle exit velocity of 700 m/s. Find (a) the optimum blade speed, (b) the maximum work per kg and the maximum diagram efficiency, (c) the energy left in the exit steam, and (d) the rotor mean diameter at 3000 rpm compared with a single-row stage using the same nozzle.',
      given: ['α<sub>1</sub> = 18°', 'V<sub>1</sub> = 700 m/s', 'K = 1, equiangular rows, V<sub>w4</sub> = 0', 'N = 3000 rpm'],
      find: 'u<sub>opt</sub>, W<sub>t,max</sub>, η<sub>b,2S,max</sub>, exit KE, D (two-row and single-row)',
      steps: [
        {h: 'Step 1: optimum blade speed', b: 'For two rows ρ<sub>opt</sub> = cos α<sub>1</sub>/4 = 0.9511/4 = 0.2378. So u<sub>opt</sub> = 0.2378 × 700 = <b>166.4 m/s</b>. (V<sub>1</sub>cos α<sub>1</sub> = 665.7 m/s = 4u ✓.)'},
        {h: 'Step 2: maximum work and efficiency', b: 'W<sub>t,max</sub> = 8u² = 8 × 166.43² = 221 580 J/kg = <b>221.6 kJ/kg</b>.<br>η<sub>b,2S,max</sub> = cos² 18° = <b>0.9045</b>. Check: kinetic energy V<sub>1</sub>²/2 = 245.0 kJ/kg and 0.9045 × 245.0 = 221.6 kJ/kg ✓.'},
        {h: 'Step 3: energy left in the exit steam', b: 'With axial exit and constant axial velocity, V<sub>4</sub> = V<sub>f</sub> = V<sub>1</sub>sin α<sub>1</sub> = 700 × 0.3090 = 216.3 m/s, so exit KE = V<sub>4</sub>²/2 = <b>23.4 kJ/kg</b>. And 221.6 + 23.4 = 245.0 kJ/kg ✓ (the whole nozzle KE is accounted for).'},
        {h: 'Step 4: rotor diameter at 3000 rpm', b: 'D = 60u/(πN). Two-row: D = 60 × 166.43/(π × 3000) = <b>1.06 m</b>.<br>Single row (u<sub>opt</sub> = V<sub>1</sub>cos α<sub>1</sub>/2 = 332.9 m/s): D = 60 × 332.87/(π × 3000) = <b>2.12 m</b>.<br>The two-row stage halves the blade speed, and hence the wheel size or the stress, for the same ideal efficiency. In practice its real efficiency is lower (about 65–70 % against 80–85 % for a single row).'}
      ],
      ans: 'u<sub>opt</sub> = 166.4 m/s; W<sub>t,max</sub> = 221.6 kJ/kg; η = 0.9045; exit KE = 23.4 kJ/kg; D = 1.06 m (two-row) against 2.12 m (single row)',
      slides: [93, 98, 99, 100, 101, 103]}
  ],

  der: [
    {id: 'D1', topic: '2.4.3', title: 'Maximum diagram efficiency of a simple impulse (De Laval) stage', slides: [41, 42, 43, 44, 45, 46, 47, 48], tool: 'ext/turbograph',
      steps: [
        {h: 'Step 1: assumptions', b: 'Steady, one-dimensional, adiabatic flow; symmetrical (equiangular) blades β<sub>1</sub> = β<sub>2</sub>; blade velocity coefficient K = V<sub>r2</sub>/V<sub>r1</sub> (put K = 1 at the end for smooth blading); constant axial velocity. Let ρ = u/V<sub>1</sub>.'},
        {h: 'Step 2: inlet and outlet whirl', b: 'Inlet: V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub> and V<sub>r1</sub>cos β<sub>1</sub> = V<sub>1</sub>cos α<sub>1</sub> − u.<br>Outlet: V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = K V<sub>r1</sub>cos β<sub>1</sub> − u = K(V<sub>1</sub>cos α<sub>1</sub> − u) − u.'},
        {h: 'Step 3: change of whirl, work', b: 'ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> = (V<sub>1</sub>cos α<sub>1</sub> − u) + K(V<sub>1</sub>cos α<sub>1</sub> − u) = <b>(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)</b>.<br>W = uΔV<sub>w</sub> = u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u).'},
        {h: 'Step 4: diagram efficiency', b: 'η<sub>d</sub> = W/(½V<sub>1</sub>²) = 2u(1 + K)(V<sub>1</sub>cos α<sub>1</sub> − u)/V<sub>1</sub>² = <b>2(1 + K)ρ(cos α<sub>1</sub> − ρ)</b>.'},
        {h: 'Step 5: condition for the maximum', b: 'dη<sub>d</sub>/dρ = 2(1 + K)(cos α<sub>1</sub> − 2ρ) = 0 ⇒ <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/2</b>, i.e. u<sub>opt</sub> = V<sub>w1</sub>/2.'},
        {h: 'Step 6: maximum efficiency', b: 'η<sub>d,max</sub> = 2(1 + K)(cos α<sub>1</sub>/2)(cos α<sub>1</sub>/2) = <b>((1 + K)/2)cos² α<sub>1</sub></b>. For K = 1: <b>cos² α<sub>1</sub></b>. The graph of η<sub>d</sub> against ρ is a parabola, zero at ρ = 0 and ρ = cos α<sub>1</sub>.'}
      ]},

    {id: 'D2', topic: '2.5.2', title: 'Maximum diagram efficiency of a Parsons (50 % reaction) stage', slides: [66, 67, 68, 69, 70],
      steps: [
        {h: 'Step 1: assumptions', b: 'Symmetrical blading: α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>f1</sub> = V<sub>f2</sub>. Therefore V<sub>1</sub> = V<sub>r2</sub> and V<sub>r1</sub> = V<sub>2</sub>. No friction (K = 1).'},
        {h: 'Step 2: work done (Step A)', b: 'V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>. V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u = V<sub>1</sub>cos α<sub>1</sub> − u.<br>W = u(V<sub>w1</sub> + V<sub>w2</sub>) = u(2V<sub>1</sub>cos α<sub>1</sub> − u) = <b>V<sub>1</sub>²(2ρ cos α<sub>1</sub> − ρ²)</b> (Eq. 2.10).'},
        {h: 'Step 3: energy supplied (Step B)', b: 'The steam entering the moving blades already carries V<sub>1</sub>²/2 from the fixed blades, plus the further expansion in the moving row, proportional to V<sub>w1</sub>²/2: <b>E = (V<sub>1</sub>² + V<sub>w1</sub>²)/2 = (V<sub>1</sub>²/2)(1 + cos² α<sub>1</sub>)</b> (Eq. 2.11).'},
        {h: 'Step 4: diagram efficiency (Step C)', b: 'η<sub>d</sub> = W/E = <b>2(2ρ cos α<sub>1</sub> − ρ²)/(1 + cos² α<sub>1</sub>)</b> (Eq. 2.12).'},
        {h: 'Step 5: condition for the maximum (Step D)', b: 'dη<sub>d</sub>/dρ = 2(2cos α<sub>1</sub> − 2ρ)/(1 + cos² α<sub>1</sub>) = 0 ⇒ <b>ρ<sub>opt</sub> = cos α<sub>1</sub></b> (Eq. 2.13). The blade speed nearly matches the whirl component of the steam velocity.'},
        {h: 'Step 6: maximum efficiency (Step E)', b: 'η<sub>d,max</sub> = 2(2cos² α<sub>1</sub> − cos² α<sub>1</sub>)/(1 + cos² α<sub>1</sub>) = <b>2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)</b> (Eq. 2.14).<br>This is greater than the impulse value cos² α<sub>1</sub> for every α<sub>1</sub> (at 20°: 0.938 against 0.883).'}
      ]},

    {id: 'D3', topic: '2.7.2', title: 'Two-row velocity-compounded (Curtis) stage: total work, efficiency and optimum speed', slides: [93, 94, 95, 96, 97, 98, 99, 100, 101],
      steps: [
        {h: 'Step 1: assumptions', b: 'Frictionless (K = 1) in every row; equiangular rows (β<sub>2</sub> = β<sub>1</sub>, β<sub>4</sub> = β<sub>3</sub>) and guide blades (α<sub>3</sub> = α<sub>2</sub>, V<sub>3</sub> = V<sub>2</sub>); constant axial velocity; for maximum efficiency the exit is axial, V<sub>w4</sub> = 0 (α<sub>4</sub> = 90°).'},
        {h: 'Step 2: first row', b: 'W<sub>1</sub> = u(V<sub>w1</sub> + V<sub>w2</sub>)/g<sub>c</sub> = u(V<sub>r1</sub>cos β<sub>1</sub> + V<sub>r2</sub>cos β<sub>2</sub>)/g<sub>c</sub>. Ideal: <b>W<sub>1</sub> = 2u(V<sub>1</sub>cos α<sub>1</sub> − u)/g<sub>c</sub></b>.'},
        {h: 'Step 3: the guide blades link the rows', b: 'The whirl entering row 2: V<sub>3</sub>cos α<sub>3</sub> = V<sub>2</sub>cos α<sub>2</sub> = V<sub>r1</sub>cos β<sub>1</sub> − u = (V<sub>1</sub>cos α<sub>1</sub> − u) − u = <b>V<sub>1</sub>cos α<sub>1</sub> − 2u</b>.'},
        {h: 'Step 4: second row', b: 'W<sub>2</sub> = u(V<sub>w3</sub> + V<sub>w4</sub>)/g<sub>c</sub> = uV<sub>w3</sub>/g<sub>c</sub> (axial exit). V<sub>w3</sub> = V<sub>r3</sub>cos β<sub>3</sub> + V<sub>r4</sub>cos β<sub>4</sub> = 2(V<sub>3</sub>cos α<sub>3</sub> − u). Hence W<sub>2</sub> = 2u(V<sub>3</sub>cos α<sub>3</sub> − u)/g<sub>c</sub> = <b>2u(V<sub>1</sub>cos α<sub>1</sub> − 3u)/g<sub>c</sub></b>.'},
        {h: 'Step 5: total work', b: 'W<sub>t</sub> = W<sub>1</sub> + W<sub>2</sub> = (2u/g<sub>c</sub>)(2V<sub>1</sub>cos α<sub>1</sub> − 4u) = <b>(4u/g<sub>c</sub>)(V<sub>1</sub>cos α<sub>1</sub> − 2u)</b>.'},
        {h: 'Step 6: efficiency in terms of ρ', b: 'η<sub>b,2S</sub> = W<sub>t</sub>/(V<sub>1</sub>²/2g<sub>c</sub>) = 8u(V<sub>1</sub>cos α<sub>1</sub> − 2u)/V<sub>1</sub>² = <b>8ρ(cos α<sub>1</sub> − 2ρ)</b>.'},
        {h: 'Step 7: optimum and maximum', b: 'dη<sub>b,2S</sub>/dρ = 8cos α<sub>1</sub> − 32ρ = 0 ⇒ <b>ρ<sub>opt</sub> = cos α<sub>1</sub>/4</b>.<br>η<sub>b,2S,max</sub> = 8(cos α<sub>1</sub>/4)(cos α<sub>1</sub> − cos α<sub>1</sub>/2) = <b>cos² α<sub>1</sub></b>.<br>W<sub>t,max</sub> = (4u/g<sub>c</sub>)(4u − 2u) = <b>8u²/g<sub>c</sub></b>. In general, for n rows ρ<sub>opt</sub> = cos α<sub>1</sub>/(2n).'}
      ]},

    {id: 'D4', topic: '2.4.2', title: 'Stage efficiency equals nozzle efficiency times blade efficiency (Eq. 2.6)', slides: [36, 37, 38],
      steps: [
        {h: 'Step 1: define the three efficiencies', b: 'Blade efficiency η<sub>b</sub> = (work done per kg)/(actual enthalpy drop, i.e. the KE of the steam leaving the nozzle) = W/(V<sub>1</sub>²/2g<sub>c</sub>).<br>Nozzle efficiency η<sub>n</sub> = (actual drop)/(theoretical drop) = (V<sub>1</sub>²/2g<sub>c</sub>)/(Δh)<sub>theoretical</sub>.<br>Stage efficiency η<sub>S</sub> = W/(Δh)<sub>theoretical</sub>.'},
        {h: 'Step 2: multiply and divide by the actual drop', b: 'η<sub>S</sub> = W/(Δh)<sub>theoretical</sub> = [W/(V<sub>1</sub>²/2g<sub>c</sub>)] × [(V<sub>1</sub>²/2g<sub>c</sub>)/(Δh)<sub>theoretical</sub>].'},
        {h: 'Step 3: the result', b: '<b>η<sub>S</sub> = η<sub>b</sub> × η<sub>n</sub></b> (Eq. 2.6). Example: η<sub>b</sub> = 0.829 and η<sub>n</sub> = 0.92 give η<sub>S</sub> = 0.762 (see N7).'}
      ]},

    {id: 'D5', topic: '2.4.2', title: 'Where the nozzle kinetic energy goes in an impulse stage: V<sub>1</sub>²/2 = W + E<sub>Lf</sub> + E<sub>Le</sub>', slides: [36, 39],
      steps: [
        {h: 'Step 1: work from the three-component Euler equation', b: 'For a rotor with no change of blade speed (axial stage) the Euler work per kg can be written W = (V<sub>1</sub>² − V<sub>2</sub>²)/2 + (V<sub>r2</sub>² − V<sub>r1</sub>²)/2 (J/kg, g<sub>c</sub> = 1): the change of absolute kinetic energy plus the change of relative kinetic energy. With friction V<sub>r2</sub> &lt; V<sub>r1</sub>, so the second bracket is negative. <i>Check with N7:</i> (276 000 − 22 425)/2 + (85 372 − 110 250)/2 = 126 788 − 12 439 = 114 349 J/kg ✓.'},
        {h: 'Step 2: rearrange', b: 'V<sub>1</sub>²/2 = W + V<sub>2</sub>²/2 + (V<sub>r1</sub>² − V<sub>r2</sub>²)/2.'},
        {h: 'Step 3: name the terms', b: 'Multiplying by ṁ: ṁV<sub>1</sub>²/2 = P + E<sub>Le</sub> + E<sub>Lf</sub>, where E<sub>Le</sub> = ṁV<sub>2</sub>²/2 (Eq. 2.9) is the energy leaving with the exit velocity and E<sub>Lf</sub> = ṁ(V<sub>r1</sub>² − V<sub>r2</sub>²)/2 (Eq. 2.8) is the energy lost to blade friction. This is why η<sub>b</sub> = 1 − (E<sub>Le</sub> + E<sub>Lf</sub>)/(ṁV<sub>1</sub>²/2). With K = 1 the friction term vanishes.'}
      ]}
  ]
});
