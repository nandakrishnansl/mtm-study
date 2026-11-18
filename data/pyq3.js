/* Previous-year questions, Unit V (draft answer outlines; see pyq.js for the notes). Slide numbers refer to the Unit V slide set. */
(function () {
const {mcq, q} = MTM.pq;

MTM.pyq.u5 = [
q('5.1.1', 5, '<p>With the help of a neat sketch, indicate the variation of temperature, total pressure and velocity along the length of a simple gas turbine.</p>',
  `<p>Draw the engine (intake, compressor, combustion chamber, turbine, exhaust) with three graphs below it on the same stations 1 to 4 (slides 2 to 9).</p>
  <ul><li><b>Temperature:</b> constant at the intake (T<sub>1</sub>); rises through the compressor to T<sub>2</sub>; rises steeply in the combustion chamber to the maximum T<sub>3</sub> (turbine inlet); falls through the turbine to T<sub>4</sub>.</li>
  <li><b>Total pressure:</b> rises through the compressor to p<sub>02</sub>; falls slightly in the combustion chamber (the pressure loss, a few per cent); falls across the turbine to a value just above the ambient at the exhaust.</li>
  <li><b>Velocity:</b> roughly constant (about 100 to 200 m/s) along the compressor; deliberately low in the combustion chamber (a flame speed of only 2 to 5 m/s must be matched); high again in the turbine nozzles and blades; then the exhaust diffuser slows the gas.</li>
  <li>Label the work of the compressor and turbine and the heat added in the chamber.</li></ul>`,
  [2, 3, 4, 5, 6, 7, 8, 9], 'Jun 2023, Q16(a); Mar 2026, Q16(a)'),

mcq('5.1.2', 'Addition of a recuperator to the simple gas turbine cycle has the effect of',
  ['Decreasing the total system pressure drop', 'Increasing the specific fuel consumption', 'Improving the cycle thermal efficiency for all pressure ratios', 'Improving the cycle thermal efficiency only for lower pressure ratios'], 3,
  'A recuperator heats the compressed air with the exhaust. This works only while the exhaust is hotter than the compressor delivery air, which holds at low pressure ratios. At high pressure ratios the exhaust is cooler, so there is no gain. It also adds a pressure drop and lowers the specific fuel consumption.',
  [19, 20], 'Jun 2023, Q6; Mar 2026, Q6'),

mcq('5.1.2', 'In a gas turbine, the intercooler is placed',
  ['Before the low pressure compressor', 'In between the low pressure compressor and the high pressure compressor', 'In between the high pressure compressor and the combustion chamber', 'None of the mentioned'], 1,
  'The intercooler cools the air between the LP and HP compressors, which lowers the HP compressor work (slide 13).',
  [13], 'Jun 2025, Q1'),

mcq('5.1.2', 'In a gas turbine, what is the function of the re-heater?',
  ['Heat the inlet air', 'Heat the exhaust gases', 'Heat the air coming out of the compressor', 'Heat the gases coming out of the high pressure turbine'], 3,
  'The re-heater is a second combustor between turbine stages. It raises the temperature of the gas leaving the HP turbine before the next turbine, so the turbine work rises.',
  [13], 'Jun 2025, Q8'),

mcq('5.1.2', 'For a compact design of turbine, the type preferred is',
  ['Single spool design', 'Double (twin) spool design', 'Triple spool design', 'All of the above'], 1,
  'A twin-spool machine lets the HP and LP parts run at their own best speeds, giving a high pressure ratio in a compact, short engine with a good surge margin and a free power turbine. Draft answer: please confirm the key.',
  [10, 17], 'Sep/Oct 2025, Q7'),

q('5.1.2', 5, '<p>A ship is fitted with a modern high-performance gas turbine unit consisting of three compressors and three turbines. The HP turbine drives the HP compressor and the LP turbine drives the IP and LP compressors (twin spool). The generator is driven by a free turbine. A recuperator, two intercoolers and a re-heater are included. Draw the gas turbine configuration.</p>',
  `<p>Draw it as a block diagram in this air and gas path order:</p>
  <ol><li>Air intake → <b>LP compressor</b> → <b>intercooler 1</b> → <b>IP compressor</b> → <b>intercooler 2</b> → <b>HP compressor</b>. (The LP and IP compressors are on the LP shaft; the HP compressor is on the HP shaft.)</li>
  <li>→ <b>Recuperator</b> (air side) → <b>main combustion chamber</b>.</li>
  <li>→ <b>HP turbine</b> (drives the HP compressor) → <b>re-heater</b> (second combustor) → <b>LP turbine</b> (drives the IP and LP compressors).</li>
  <li>→ <b>Free (power) turbine</b>, on its own shaft, → reduction gear → <b>generator</b>.</li>
  <li>→ <b>Recuperator</b> (gas side) → exhaust uptake.</li></ol>
  <p class="small">Show the two shafts (HP and LP) and the separate power-turbine shaft, and label the cooling water for the intercoolers. The re-heater may also be placed between the LP turbine and the power turbine.</p>`,
  [10, 13, 17, 19, 20, 21], 'Jun 2023, Q16(b); Mar 2026, Q16(b)'),

q('5.1.2', 6, '<p>Draw the schematic diagram and demonstrate a gas turbine closed recuperative cycle with reheat and intercooling.</p>',
  `<ul><li><b>Closed cycle:</b> the working gas (air, helium or another gas) circulates in a closed loop and never mixes with combustion products. Heat is added in a <b>heater</b> (a heat exchanger) instead of a combustion chamber, and rejected in a <b>pre-cooler</b> (slide 16).</li>
  <li><b>Flow order:</b> pre-cooler → <b>LP compressor</b> → <b>intercooler</b> → <b>HP compressor</b> → <b>recuperator</b> (cold side) → <b>heater</b> → <b>HP turbine</b> → <b>re-heater</b> → <b>LP (power) turbine</b> → <b>recuperator</b> (hot side) → pre-cooler → back to the LP compressor.</li>
  <li><b>T–s diagram:</b> compression in two steps with a cooling line between them; regenerative heating from the compressor outlet; heating to T<sub>max</sub>; expansion in two steps with a reheat line back to T<sub>max</sub>; cooling in the recuperator and the pre-cooler to the start.</li>
  <li>Merits: no fouling of the heat exchangers or turbine, a denser gas gives a smaller machine, and any fuel or heat source can be used. The efficiency is raised by the recuperator, and the work by the intercooler and the re-heater.</li></ul>`,
  [13, 16, 19, 20], 'Jun 2024, Q21(a)'),

q('5.1.2', 4, '<p>Draw the reheat cycle and the T–s diagram for a gas turbine.</p>',
  `<ul><li><b>Layout:</b> compressor → combustion chamber → HP turbine → <b>re-heater</b> (second combustor) → LP turbine → exhaust.</li>
  <li><b>T–s diagram:</b> 1–2 compression; 2–3 heat addition at constant pressure up to T<sub>3</sub>; 3–4 expansion in the HP turbine to the intermediate pressure; 4–5 reheating at constant pressure back to about T<sub>3</sub>; 5–6 expansion in the LP turbine down to the exhaust pressure; 6–1 heat rejection to the atmosphere.</li>
  <li>The work output rises, since the LP expansion starts at a high temperature. For the best split, each turbine takes the same pressure ratio (√ of the total). The cycle efficiency alone falls a little (more heat is added), so reheat is used with a recuperator.</li></ul>`,
  [13], 'Jun 2025, Q18(b)'),

q('5.1.2', 4, '<p>List the methods to improve the thermal efficiency of a gas turbine and explain any one of them in detail.</p>',
  `<ul><li><b>Methods:</b> (1) raise the turbine inlet temperature (better materials and blade cooling); (2) use the best pressure ratio for the cycle; (3) raise the compressor and turbine efficiencies; (4) regeneration (recuperator); (5) intercooling; (6) reheating; (7) a combined cycle using the exhaust heat.</li>
  <li><b>Regeneration (in detail):</b> a heat exchanger uses the hot exhaust (T<sub>4</sub>) to pre-heat the compressed air (T<sub>2</sub>) before the combustion chamber. Less fuel is needed for the same T<sub>3</sub>, so the efficiency rises. It works only when T<sub>4</sub> &gt; T<sub>2</sub>, that is, at low pressure ratios. The effectiveness ε = (T<sub>x</sub> − T<sub>2</sub>)/(T<sub>4</sub> − T<sub>2</sub>), where T<sub>x</sub> is the air temperature leaving the recuperator. The costs are an extra pressure drop, size and weight.</li>
  <li>At sea the intercooled-recuperated (ICR) cycle is used: high efficiency and good part-load fuel consumption (slides 17 to 20).</li></ul>`,
  [13, 17, 18, 19, 20], 'Jun 2025, Q20(a)'),

q('5.2.2', 6, '<p>In reference to apportioning the airflow in a flame tube of a gas turbine, explain the division of airflow into zones, with their function.</p>',
  `<table class="cmp"><tr><th>Zone</th><th>Share of air</th><th>Function</th></tr>
  <tr><td>Primary</td><td>about 15 to 20 %</td><td>Near-stoichiometric burning; the flame is held by swirl vanes or baffles, which set up a recirculation zone.</td></tr>
  <tr><td>Secondary</td><td>about 30 %</td><td>Completes the burning (CO and unburned fuel), added through holes in the liner; also cools the liner.</td></tr>
  <tr><td>Tertiary (dilution)</td><td>the rest, about 50 %</td><td>Cools the gas to the turbine inlet temperature and gives an even temperature profile at the turbine.</td></tr></table>
  <ul><li>The air is added in stages, because adding all of it at the front would chill the flame. A part of the air also forms a cooling film on the liner wall.</li>
  <li>The overall air-fuel ratio is 60 : 1 to 120 : 1, against about 15 : 1 for complete burning, which is why the dilution is needed.</li></ul>`,
  [27, 28, 29], 'Jun 2024, Q20(a); Sep/Oct 2025, Q21(b)'),

mcq('5.2.2', 'The recommended A/F (air to fuel) ratio for efficient working of a gas turbine is',
  ['10', '100', '14.7', '5'], 1,
  'The overall air-fuel ratio of a gas turbine is lean, about 60 : 1 to 120 : 1, since the air is also needed to cool the gas to the turbine limit. Only the primary zone burns near 15 : 1 (stoichiometric). Of the options, 100 fits.',
  [26, 27], 'Sep/Oct 2025, Q4'),

q('5.2.4', 2, '<p>What are the different types of combustion chambers used in gas turbines?</p>',
  `<ul><li><b>Tubular (multi-can):</b> several separate flame tubes, each in its own casing and with its own injector, spaced round the shaft. Easy to develop and to replace one can; large, heavy, high pressure loss (factor about 35).</li>
  <li><b>Turbo-annular (can-annular):</b> separate cans inside one common annular casing; an intermediate choice (factor about 25).</li>
  <li><b>Annular:</b> one continuous annular flame tube between the compressor and the turbine; compact, lightest, least pressure loss (about 18), but an even fuel and temperature distribution is hard.</li>
  <li>(Heavy industrial plant may use one single large chamber.)</li></ul>`,
  [31, 32], 'Jun 2023, Q12; Mar 2026, Q12; Jun 2025, Q13'),

mcq('5.2.4', 'In a gas turbine, the ______ design of the combustion chamber (combustor) is the most efficient design.',
  ['Can combustor', 'Can-annular combustor', 'Multi-can combustor', 'Annular combustor'], 3,
  'The annular combustor has the smallest diameter and weight and the lowest pressure loss, with a continuous sheet of gas into the turbine (slide 32).',
  [31, 32], 'Jun 2024, Q4; Jun 2025, Q3; Sep/Oct 2025, Q3'),

mcq('5.3.1', 'The mean radius in a mean-line design is equal to',
  ['Half of the mean of the sum of all blade tip diameters of the turbine', 'The mean radius of the rotor shaft', 'Half of the mean diameter of the turbine casing', 'Half of the distance between the hub radius and the tip radius of a blade'], 3,
  'In a mean-line design the stage is analysed at the mean radius, midway between hub and tip: r<sub>m</sub> = (r<sub>h</sub> + r<sub>t</sub>)/2. Option (d) is the nearest wording. Note for the teacher: strictly (r<sub>t</sub> − r<sub>h</sub>)/2 is the half blade height, so please confirm the intended key.',
  [35, 36], 'Jun 2024, Q8'),

q('5.3.1', 10, '<p>A single-stage gas turbine operates at its design condition with an axial absolute flow at entry and exit from the stage. The absolute flow angle at the nozzle exit is 70°. At stage entry the total pressure and temperature are 311 kPa and 850 °C. The exhaust static pressure is 100 kPa, the total-to-static efficiency is 0.87 and the mean blade speed is 500 m/s. Assuming constant axial velocity through the stage, determine (a) the specific work done, (b) the axial velocity. Use absolute zero = 273 K, c<sub>p</sub> = 1148 J/kg K, γ = 1.33.</p>',
  `<ol><li>T<sub>01</sub> = 850 + 273 = 1123 K. Pressure ratio p<sub>3</sub>/p<sub>01</sub> = 100/311 = 0.3215.</li>
  <li>(p<sub>3</sub>/p<sub>01</sub>)<sup>(γ−1)/γ</sup> = 0.3215<sup>0.2481</sup> = 0.7546.</li>
  <li>Total-to-static efficiency η<sub>ts</sub> = W/(c<sub>p</sub>T<sub>01</sub>[1 − (p<sub>3</sub>/p<sub>01</sub>)<sup>(γ−1)/γ</sup>]).</li>
  <li><b>(a) W = 0.87 × 1148 × 1123 × (1 − 0.7546) = 275.2 kJ/kg ≈ 275 kJ/kg.</b></li>
  <li>The flow leaves the rotor axially (V<sub>w3</sub> = 0), so W = uV<sub>w2</sub>, and V<sub>w2</sub> = 275 200/500 = 550.4 m/s.</li>
  <li>With constant axial velocity, V<sub>w2</sub> = V<sub>f</sub> tan α<sub>2</sub> where α<sub>2</sub> = 70° (tan 70° = 2.747).</li>
  <li><b>(b) V<sub>f</sub> = 550.4/2.747 ≈ 200 m/s.</b></li></ol>
  <p class="small">Check: stage loading ψ = W/u² = 1.10, so R = 1 − ψ/2 = 0.45 (the zero-swirl relation, Unit I).</p>`,
  [35, 36], 'Sep/Oct 2025, Q19(b)'),

mcq('5.3.2', 'In a "free power turbine" arrangement the ....',
  ['Power produced by the turbine is free of any vibrations', 'Power turbine is mounted after the HP compressor', 'Power produced by the turbine is free - no energy is supplied', 'Power turbine is mounted on a separate shaft from the gas generator'], 3,
  'The gas generator (compressor, combustor and its turbine) runs at its own speed. The power turbine is on a separate shaft and runs at the speed the load needs, which suits propeller drive and easy starting (slides 37 and 38).',
  [37, 38], 'Jun 2023, Q5; Mar 2026, Q5'),

q('5.4.2', 4, '<p>With the help of a neat sketch, explain the concept of blade cooling in gas turbines.</p>',
  `<ul><li><b>Why:</b> a higher turbine inlet temperature gives more power and efficiency, but the blade is the life-limiting part. Cooling lets the blade run 200 to 300 °C below the gas temperature, so the gas can reach about 1400 K with nickel alloys.</li>
  <li><b>Coolant:</b> air bled from the HP end of the compressor (about 600 °C cooler than the gas), 1 to 3 % of the flow per blade row.</li>
  <li><b>Internal methods:</b> convection (air through passages in the blade, single or multi-pass) and impingement (jets on the inside of the leading edge).</li>
  <li><b>External methods:</b> film cooling (small holes make a protective film on the surface) and transpiration (the air sweats through a porous wall).</li>
  <li>The coolant geometric parameter Z (slide 48) measures how well the passage shape cools the blade: a high Z gives a cooler blade (Z &gt; 150 is needed; little gain beyond 250). Sketch a hollow blade with the passages and the film holes.</li></ul>`,
  [45, 46, 47, 48], 'Jun 2023, Q20(a); Mar 2026, Q20(a); Jun 2024, Q21(b); Jun 2025, Q22(a)'),

q('5.4.2', 2, '<p>Explain impingement cooling of the blades of a gas turbine.</p>',
  `<ul><li>Cool air from the compressor is fed to a hollow insert (tube) placed inside the blade. Many small holes in the insert fire jets of this air at the inside of the leading edge and the blade walls.</li>
  <li>The jets give a very high heat transfer rate at the point of impact (the leading edge is the hottest part), then the used air flows along the blade or out through film holes.</li>
  <li>It is an internal method, often combined with convection and film cooling.</li></ul>`,
  [45, 47], 'Jun 2024, Q13'),

mcq('5.5.2', 'Which of the following is not satisfactory as a starter for marine gas turbines?',
  ['A small diesel engine', 'Another small compact gas turbine', 'A hydraulic motor', 'A pneumatic starter'], 0,
  'The course slides name the electric motor, the compressed-air (pneumatic) starter and the hydraulic motor as the starters. A small diesel engine is bulky, heavy and slow to engage, so it is the least suitable at sea. Note for the teacher: the key cannot be fixed from the slides; please confirm.',
  [49, 50], 'Jun 2024, Q5'),

q('5.5.1', 5, '<p>Explain the starting and ignition system in a gas turbine.</p>',
  `<ul><li><b>Starting sequence:</b> (1) a starter turns the compressor to a speed whose airflow can sustain combustion; (2) during the run-up the ignition is switched on and fuel is fed to the burners; (3) the flame lights round from can to can through the interconnecting tubes; (4) the turbine now makes more power than the compressor needs, and the starter is disengaged by a clutch; (5) the igniters are switched off and the burning is self-sustaining (slide 49).</li>
  <li><b>Starters:</b> an electric motor through a reduction gear and clutch; an air starter motor (a small air turbine or vane motor on compressed air); a hydraulic motor (pump and accumulator). With a free power turbine only the gas generator is turned, so a small starter is enough.</li>
  <li><b>Ignition:</b> needed only at the start. An igniter plug sits near the primary zone in one or two cans. A <b>surface-discharge igniter</b> is a capacitor discharge (about 3 J, one spark per second); a <b>torch igniter</b> is a spark plug with a small spray burner, for heavy fuels. Light-up is harder at low pressure.</li></ul>`,
  [49, 50, 51], 'Jun 2025, Q22(b)'),

q('5.5.2', 2, '<p>Briefly describe any two devices used for starting a gas turbine.</p>',
  `<ul><li><b>Electric starter motor:</b> turns the main shaft through a reduction gear and a clutch, and is disengaged when the engine is self-sustaining. A battery or the ship supply feeds it.</li>
  <li><b>Air starter motor:</b> a small air turbine or vane motor driven by compressed air (from a receiver and compressor) turns the shaft through a gear and clutch. It is light and good where the air is available.</li>
  <li>Also used: a hydraulic motor with a pump and accumulator (and a cartridge starter in military aircraft only).</li></ul>`,
  [50], 'Sep/Oct 2025, Q21(a)'),

q('5.7.1', 6, '<p>Write a short note on the gas turbine propulsion option for ship propulsion (explain the gas turbine for ship propulsion and draw the general layout). Write the advantages and disadvantages of gas turbine propulsion.</p>',
  `<ul><li><b>Layout:</b> air intake with filters and silencer → gas generator (compressor, combustors, HP turbine) → free power turbine → reduction gear → shaft and propeller (or a water jet, or a generator for electric drive). Exhaust uptake to the funnel (slides 54 to 61). Sketch it with the intake and the uptake ducts.</li>
  <li><b>Users:</b> warships, cruise ships, fast ferries, freight carriers, LNG carriers and fast container ships. Plants: COGAG and CODAG (gas turbines combined with other gas turbines or with diesels).</li>
  <li><b>Advantages:</b> power-to-weight at least four times that of a medium-speed diesel (LM2500: 25 000 kW, 3.5 t); compact, so more space for cargo or cabins; low noise and vibration; modular, quick replacement (GTCU change in 6 to 12 h); lower NOx and SOx; high automation, idle in about 30 s and an instant restart.</li>
  <li><b>Disadvantages:</b> higher fuel consumption and poor part-load efficiency; aero-derived engines need light distillate fuel; large intake and exhaust ducts; salt ingestion needs good filtration; the hot-section life limits the maintenance interval.</li></ul>`,
  [54, 55, 56, 57, 58, 59, 60, 61], 'Jun 2023, Q19(b); Mar 2026, Q19(b); Dec 2023, Q21(a); Jun 2025, Q18(a)'),

q('5.7.1', 3, '<p>List the various advantages and disadvantages of the gas turbine over diesel and steam as propulsion plant options.</p>',
  `<table class="cmp"><tr><th>Advantages</th><th>Disadvantages</th></tr>
  <tr><td>High power-to-weight and compact size, so more usable space</td><td>Higher specific fuel consumption, poor at part load</td></tr>
  <tr><td>Low noise and vibration; smooth rotary motion</td><td>Aero-derived types need light distillate fuel</td></tr>
  <tr><td>Quick start (idle in about 30 s), rapid loading, quick restart</td><td>Large intake and exhaust ducts; salt in the air needs filters</td></tr>
  <tr><td>No boiler or cooling water problems as in steam; fewer parts than a diesel</td><td>Hot-section life limits the maintenance interval; discs have a limited number of start-stop cycles</td></tr>
  <tr><td>Modular, replaced as a unit (GTCU in 6 to 12 h); high automation, low manning</td><td>A reduction gear is needed; a reversing arrangement or a CP propeller as well</td></tr>
  <tr><td>Lower NOx and SOx than a diesel</td><td>Cost of the engine and of fuel treatment</td></tr></table>`,
  [54, 64, 65], 'Jun 2023, Q20(b); Mar 2026, Q20(b); Jun 2024, Q21(c); Jun 2025, Q20(c)'),

mcq('5.7.1', 'Choose the correct statement.',
  ['A gas turbine requires a lot of cooling water', 'A gas turbine is capable of rapid start-up and loading', 'Gas turbines have a flat efficiency at part loads', 'Gas turbines have high standby losses and require a lot of maintenance'], 1,
  'A gas turbine reaches idle in about 30 s and can be loaded quickly. It needs little cooling water, its efficiency falls at part load, and it has low standby losses.',
  [54], 'Jun 2025, Q10'),

q('5.7.1', 6, '<p>Draw the typical marine gas turbine propulsion plant (twin spool arrangement with a free turbine). Label all the important components.</p>',
  `<ol><li>Air intake (louvres, filter, silencer) → <b>LP compressor</b> → <b>HP compressor</b> → <b>combustion chambers</b> (fuel injectors, igniters).</li>
  <li>→ <b>HP turbine</b> (drives the HP compressor by the HP shaft) → <b>LP turbine</b> (drives the LP compressor by the LP shaft) → <b>free power turbine</b> on its own shaft.</li>
  <li>→ <b>Exhaust</b> diffuser and uptake (silencer) to the funnel.</li>
  <li>Power turbine shaft → <b>reduction gear</b> (with the thrust bearing, clutch) → <b>propeller shaft</b> and propeller.</li>
  <li>Auxiliaries: starter (with its clutch), fuel system, lubrication oil system, accessory gearbox.</li></ol>
  <p class="small">Show the three shafts (HP, LP and the power turbine) and the gas path clearly (slides 54 to 58).</p>`,
  [54, 55, 56, 57, 58], 'Sep/Oct 2025, Q20(a)'),

q('5.7.2', 4, '<p>In reference to a gas turbine used for ship propulsion, name the components found in the air intake path, with a simple sketch.</p>',
  `<ul><li>Intake opening (louvres or a weather hood), then the <b>marine intake filter</b> in three stages: (1) a <b>vane separator</b> (inertia removes large water droplets and spray, down to about 12 µm); (2) a <b>coalescer and dust filter</b> (small droplets and salt aerosol merge into larger drops; face velocity 6 to 8 m/s); (3) a final filter or demister.</li>
  <li><b>Intake silencer</b> and the ducting with a bellmouth feeding the engine evenly into the compressor.</li>
  <li>Requirements: compact (high velocity), low pressure loss even when wet, good dust filtration (slides 60 and 71).</li></ul>`,
  [59, 60, 71], 'Jun 2024, Q20(b)'),

q('5.7.6', 4, '<p>Briefly describe, with a schematic diagram, a typical lubrication system used in a gas turbine.</p>',
  `<ul><li><b>Circuit:</b> oil tank → pressure pump → filter → oil cooler → bearings, gears and drives → scavenge pumps → (de-aerator and breather) → tank (slide 66).</li>
  <li>The oil lubricates and, above all, <b>cools</b> the bearings. It does not meet the combustion process. The quantity circulated and the consumption are small, so the oil works hard (above 200 °C in aero-derived engines).</li>
  <li><b>Synthetic oils</b> are used, because mineral oil would oxidise, form gum and coke. On ships the system is modified for the ship's motion, and the lube oil module may be in the engine room.</li>
  <li>Sketch the chain of boxes, with the filter, the cooler and the de-aerator and breather shown.</li></ul>`,
  [66], 'Sep/Oct 2025, Q21(c)'),

mcq('5.8.1', 'An internal gear box in a marine gas turbine is used because',
  ['It becomes difficult to bring the drive shaft outwards, as it may disturb the gas flow', 'A gas turbine is never equipped with an external gearbox', 'An internal gear box is stronger than an external gear box', 'A gear box is only used for running a fuel pump for the turbine'], 0,
  'The shaft of the compressor and turbine rotors lies in the gas path. An internal (accessory) gearbox takes the drive for the accessories out without disturbing the gas flow. The paper says "steam turbine" but the options refer to a gas turbine, so this is read as a gas turbine; please confirm the key.',
  [67, 69], 'Jun 2024, Q6')
];
})();
