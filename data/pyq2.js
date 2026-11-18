/* Previous-year questions, Units III and IV (draft answer outlines; see pyq.js for the notes). */
(function () {
const {mcq, q} = MTM.pq;

/* ======================= UNIT III ======================= */
MTM.pyq.u3 = [
mcq('3.1', 'Which of the following statements are true for dimensional analysis?',
  ['The functional relationship between dependent and non-dependent variables can be expressed in dimensionless terms by dimensional analysis.', 'It is used to change the theoretical equation into a dimensionless form.', 'It helps to convert the units of quantities from one system to another system.', 'All of the above'], 3,
  'Dimensional analysis reduces a relation to dimensionless groups, turns an equation into dimensionless form, and can be used to check and convert units.',
  [1, 2, 3, 4, 5, 6], 'Dec 2023, Q9'),

mcq('3.2.2', 'In model testing of a ship, the forces present in dynamic similarity are',
  ['Inertia forces', 'Gravity forces', 'Viscous forces', 'All of the above'], 3,
  'Dynamic similarity needs the force ratios to be equal. For a ship all three act: inertia, gravity (wave making, Froude number) and viscous (friction, Reynolds number). In practice the Froude number is matched and the friction is corrected separately, because both cannot be matched at once.',
  [26, 27, 28, 29, 30, 31], 'Dec 2023, Q10'),

mcq('3.1', 'Which of the following physical quantities is dimensionless?',
  ['Strain', 'Angle', 'Specific gravity', 'All of the above'], 3,
  'Strain (change in length / length), angle (arc / radius) and specific gravity (a ratio of densities) are all ratios of like quantities, so each is dimensionless.',
  [1, 2, 3, 4, 5, 6], 'Sep/Oct 2025, Q6'),

q('3.1', 2, '<p>Distinguish between the model and the prototype. / Explain model and prototype.</p>',
  `<ul><li><b>Prototype:</b> the full-size, actual machine or ship whose performance is wanted.</li>
  <li><b>Model:</b> a smaller (or sometimes larger) machine of the same geometric shape, built and tested to predict the prototype. It is geometrically similar, and is tested at conditions that give kinematic and dynamic similarity.</li>
  <li>Results scale by the similarity laws: Q/(ND³), gH/(N²D²) and P/(ρN³D⁵) are the same for both. Models save cost and time.</li></ul>`,
  [1, 2, 3, 4, 5, 6], 'Dec 2023, Q12; Jun 2025, Q11'),

q('3.1', 5, '<p>Comment on dynamic similarity and its utility in the design process.</p>',
  `<ul><li><b>Three similarities:</b> geometric (same shape, same scale factor), kinematic (velocity triangles similar), and dynamic (the ratios of forces, inertia : pressure : viscous : gravity, are equal at corresponding points).</li>
  <li>Dynamic similarity means the dimensionless numbers (Reynolds, Froude, Mach, Euler, Weber) of model and prototype are equal.</li>
  <li><b>Utility:</b> a cheap, small model can be tested and the head, flow and power of the full-size machine predicted by the similarity laws. It allows a comparison of designs, checks of performance before building, and the study of the effect of speed and size.</li>
  <li><b>Limits:</b> all the numbers cannot be matched together; scale effects (Reynolds number, roughness, clearances) make the efficiency of the prototype higher than the model. A correction such as η = 1 − (1 − η′)(d′/d)<sup>1/5</sup> is used.</li></ul>`,
  [3, 4, 5, 6, 44], 'Jun 2023, Q18(a); Mar 2026, Q18(a)'),

mcq('3.3', 'The stage loading is defined as the ratio of the stagnation enthalpy change through a stage to the square of',
  ['Inlet absolute velocity', 'Exit absolute velocity', 'Mean blade speed', 'Axial velocity'], 2,
  'Stage loading coefficient ψ = Δh<sub>0</sub>/u²: the work per kg divided by the square of the mean blade speed.',
  [41, 42, 43, 44], 'Jun 2024, Q3'),

q('3.2.3', 5, '<p>State Buckingham\'s π theorem. Using this theorem for a control volume of a pump, combine the speed (Ω), fluid density (ρ) and impeller diameter (D) with the pressure head (gH) and power (P), and derive the relationships for the non-dimensional head coefficient and power coefficient.</p>',
  `<ul><li><b>Theorem:</b> if a physical problem has n variables that involve m fundamental dimensions, it can be written as a relation between (n − m) independent dimensionless π groups.</li></ul>
  <ol><li>Variables: gH, P, Ω, ρ, D, so n = 5. Dimensions M, L, T, so m = 3, and there are 2 π groups. Repeating variables: Ω, ρ, D.</li>
  <li><b>π<sub>1</sub> = gH · Ω<sup>a</sup>ρ<sup>b</sup>D<sup>c</sup>.</b> gH = L²T⁻². T: −2 − a = 0, so a = −2. M: b = 0. L: 2 − 3b + c = 0, so c = −2. <b>π<sub>1</sub> = gH/(Ω²D²)</b>, the head coefficient ψ.</li>
  <li><b>π<sub>2</sub> = P · Ω<sup>a</sup>ρ<sup>b</sup>D<sup>c</sup>.</b> P = ML²T⁻³. M: 1 + b = 0, so b = −1. T: −3 − a = 0, so a = −3. L: 2 + 3 + c = 0, so c = −5. <b>π<sub>2</sub> = P/(ρΩ³D⁵)</b>, the power coefficient.</li>
  <li>So gH/(Ω²D²) = f<sub>1</sub>(…) and P/(ρΩ³D⁵) = f<sub>2</sub>(…); these hold with the same flow coefficient Q/(ΩD³) for similar machines (g is a constant here and is kept with H).</li></ol>`,
  [32, 33, 34, 35, 36, 37, 38, 39, 40], 'Sep/Oct 2025, Q17(a)'),

q('3.3', 6, '<p>A model centrifugal pump with an efficiency of 88 % is tested at a rotational speed of 3000 rpm and delivers 0.12 m³/s of water against a head of 30 m. Using the similarity rules, determine the rotational speed, volume flow rate and power requirement of a geometrically similar prototype at eight times the scale of the model and working against a head of 50 m.</p>',
  `<p class="small">Rules: Q/(ND³), gH/(N²D²) and P/(ρN³D⁵) are the same for model (m) and prototype (p). D<sub>p</sub>/D<sub>m</sub> = 8. The prototype efficiency is taken equal to the model's.</p>
  <ol><li><b>Speed (head rule):</b> N<sub>p</sub> = N<sub>m</sub>(D<sub>m</sub>/D<sub>p</sub>)√(H<sub>p</sub>/H<sub>m</sub>) = 3000 × (1/8) × √(50/30) = <b>484 rpm</b>.</li>
  <li><b>Flow:</b> Q<sub>p</sub> = Q<sub>m</sub>(N<sub>p</sub>/N<sub>m</sub>)(D<sub>p</sub>/D<sub>m</sub>)³ = 0.12 × (484.1/3000) × 512 = <b>9.92 m³/s</b>.</li>
  <li><b>Model power:</b> P<sub>m</sub> = ρgQ<sub>m</sub>H<sub>m</sub>/η = 1000 × 9.81 × 0.12 × 30/0.88 = 40.1 kW.</li>
  <li><b>Prototype power:</b> P<sub>p</sub> = P<sub>m</sub>(N<sub>p</sub>/N<sub>m</sub>)³(D<sub>p</sub>/D<sub>m</sub>)⁵ = 40.13 × (0.1614)³ × 8⁵ ≈ <b>5530 kW</b> (about 5.5 MW).</li>
  <li>Check: ρgQ<sub>p</sub>H<sub>p</sub>/η = 1000 × 9.81 × 9.915 × 50/0.88 = 5526 kW. ✓</li></ol>`,
  [41, 42, 43, 44], 'Jun 2024, Q18(a)'),

q('3.3', 10, '<p>A radial flow hydraulic turbine produces 42 kW under a head of 16 m and runs at 100 rpm. A geometrically similar model producing 32 W and a head of 6 m is to be tested under geometrically similar conditions. If the model efficiency is assumed to be 92 %, find the diameter ratio between the model and the prototype, the volume flow rate through the model, and the speed of the model.</p>',
  `<p class="small">Assumption: the prototype has the same efficiency (92 %) as the model, as the paper gives no other value. Turbine output P = ηρgQH.</p>
  <ol><li><b>Flow, model:</b> Q<sub>m</sub> = P<sub>m</sub>/(ηρgH<sub>m</sub>) = 32/(0.92 × 1000 × 9.81 × 6) = <b>5.91 × 10⁻⁴ m³/s</b> (0.59 L/s).</li>
  <li><b>Flow, prototype:</b> Q<sub>p</sub> = 42 000/(0.92 × 1000 × 9.81 × 16) = 0.291 m³/s.</li>
  <li><b>Diameter ratio:</b> from Q ∝ ND³ and H ∝ N²D², Q ∝ D²√H. So (D<sub>m</sub>/D<sub>p</sub>)² = (Q<sub>m</sub>/Q<sub>p</sub>)/√(H<sub>m</sub>/H<sub>p</sub>) = 2.03 × 10⁻³/0.612 = 3.32 × 10⁻³, so <b>D<sub>m</sub>/D<sub>p</sub> = 0.0576</b> (about 1 : 17.4).</li>
  <li><b>Model speed:</b> N<sub>m</sub> = N<sub>p</sub>(D<sub>p</sub>/D<sub>m</sub>)√(H<sub>m</sub>/H<sub>p</sub>) = 100 × (1/0.0576) × 0.612 = <b>1063 rpm</b>.</li>
  <li>Check with the power law: P<sub>m</sub>/P<sub>p</sub> = (N<sub>m</sub>/N<sub>p</sub>)³(D<sub>m</sub>/D<sub>p</sub>)⁵ = 10.63³ × 0.0576⁵ = 7.6 × 10⁻⁴, and 32/42 000 = 7.6 × 10⁻⁴. ✓</li></ol>`,
  [41, 42, 43, 44], 'Sep/Oct 2025, Q17(b)'),

q('3.6', 2, '<p>What is the Cordier diagram? What is its use?</p>',
  `<ul><li>Cordier found that the best-efficiency points of many good pumps, fans, compressors and turbines fall on one curve (a narrow band) when specific speed N<sub>s</sub> is plotted against specific diameter D<sub>s</sub> = D(gH)<sup>1/4</sup>/Q<sup>1/2</sup>. This curve is the Cordier diagram.</li>
  <li><b>Use:</b> a first design tool. For the given head, flow and speed, N<sub>s</sub> tells the machine type (radial, mixed, axial), and the curve gives the best D<sub>s</sub>, so the size (diameter) and the best efficiency can be estimated before detailed design.</li></ul>`,
  [49, 50], 'Jun 2024, Q14; Jun 2025, Q14'),

q('3.5', 5, '<p>What is the specific speed? Write down the range of specific speed of the various types of turbomachine.</p>',
  `<ul><li><b>Definition (pumps, fans, compressors):</b> the speed of a geometrically similar machine of unit size that delivers unit discharge against unit head. N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup> (dimensionless form; the dimensional form is N√Q/H<sup>3/4</sup>).</li>
  <li><b>Turbines:</b> the speed of a geometrically similar turbine that produces unit power under unit head: N<sub>st</sub> = N√P/(ρ<sup>1/2</sup>(gH)<sup>5/4</sup>); for water turbines N√P/H<sup>5/4</sup>.</li>
  <li>It comes from combining the π terms (flow and head coefficients) so that the diameter drops out. It tells the type of machine: low N<sub>s</sub> = radial, high N<sub>s</sub> = axial.</li>
  <li><b>Approximate ranges</b> (dimensionless, read off the plot on slide 50): Pelton wheel: single jet up to about 0.15, multijet about 0.1 to 0.3; Francis turbines about 0.23 to 1.9; Kaplan turbines about 2 to 6 and propeller turbines about 2 to 3.5; centrifugal pumps about 0.2 to 1.2; mixed-flow pumps about 1.3 to 2.8; axial (propeller) pumps about 2.9 to 7.5; centrifugal compressors and fans about 0.5 to 2; axial steam and gas turbines about 0.4 to 2; axial compressors 1.5 and above. (N in rad/s.)</li></ul>`,
  [45, 46, 47, 48, 50], 'Dec 2023, Q20(b)'),

q('3.5', 2, '<p>What are the specific speed and the specific diameter of a pump?</p>',
  `<ul><li><b>Specific speed:</b> N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup>. It is the speed at which a geometrically similar pump would deliver unit flow against unit head; it fixes the shape of the pump.</li>
  <li><b>Specific diameter:</b> D<sub>s</sub> = D(gH)<sup>1/4</sup>/√Q, the diameter of a similar pump that delivers unit flow at unit head. It fixes the size.</li>
  <li>Both are dimensionless and are used with the Cordier diagram to select the pump.</li></ul>`,
  [45, 46, 47, 48, 49], 'Sep/Oct 2025, Q14'),

/* ----- pumps (slides to come) ----- */
q('U3X', 2, '<p>What is cavitation?</p>',
  `<ul><li>When the local static pressure of a liquid drops to its vapour pressure (at the pump inlet or on the suction side of the blades), vapour bubbles form. They are carried into a higher-pressure region and collapse suddenly.</li>
  <li>Effects: noise and vibration, pitting and erosion of the blades, a fall of head and efficiency. Avoided by keeping the NPSH available above the NPSH required.</li></ul>`,
  [], 'Jun 2023, Q11; Mar 2026, Q11'),

mcq('U3X', 'What does Net Positive Suction Head (NPSH) primarily indicate in a pumping system?',
  ['The total pressure available at the pump discharge', 'The velocity of the fluid in the suction pipe', 'The available pressure at the suction side to prevent cavitation', 'The efficiency of the pump'], 2,
  'NPSH is the total head at the pump suction above the vapour pressure head. It must stay above the NPSH required by the pump, so the liquid does not vaporise.',
  [], 'Sep/Oct 2025, Q10'),

q('U3X', 5, '<p>Explain the different losses in a centrifugal pump.</p><p class="small muted">The Jun 2023 paper asked the same question for a centrifugal compressor (see Unit IV, 4.1.7).</p>',
  `<ul><li><b>Hydraulic losses:</b> friction in the impeller passages, volute and diffuser; shock (incidence) loss when the flow is off the design point; eddy and separation losses; the loss from the exit velocity.</li>
  <li><b>Volumetric (leakage) losses:</b> back-flow from the high to the low pressure side through the wear-ring clearance.</li>
  <li><b>Disc friction:</b> drag on the outer faces of the impeller in the casing liquid.</li>
  <li><b>Mechanical losses:</b> bearings and gland packing or seal.</li>
  <li>Efficiencies: η<sub>h</sub> (hydraulic), η<sub>v</sub> (volumetric), η<sub>m</sub> (mechanical), with η<sub>overall</sub> = η<sub>h</sub>η<sub>v</sub>η<sub>m</sub>.</li></ul>`,
  [], 'Mar 2026, Q18(b)'),

/* ----- turbocharging (slides to come) ----- */
q('U3T', 5, '<p>Explain the constant pressure turbocharging system and list its advantages.</p>',
  `<ul><li><b>Arrangement:</b> the exhaust of all the cylinders goes into one large exhaust manifold (a receiver), where the pressure is nearly constant. The gas then flows steadily to the turbine (one entry), which drives the compressor.</li>
  <li>The blow-down pulses are damped in the receiver. The turbine runs with steady flow, so it can be a high-efficiency design.</li>
  <li><b>Advantages:</b> high turbine efficiency; simple exhaust piping and a single turbine entry; good at high load and high pressure ratio, so a good fit to large engines; low cost and little pipe design work; one turbocharger can serve many cylinders.</li>
  <li><b>Drawbacks:</b> the pulse energy is lost, and at part load and in acceleration the response is poor. On a 2-stroke the scavenge air is not enough at low load or starting, so auxiliary blowers are needed.</li></ul>`,
  [], 'Jun 2023, Q19(a); Mar 2026, Q19(a)'),

q('U3T', 6, '<p>Explain the difference between constant pressure turbocharging and pulse turbocharging with a neat sketch, and comment on the utility of each.</p>',
  `<table class="cmp"><tr><th></th><th>Constant pressure</th><th>Pulse</th></tr>
  <tr><td>Exhaust system</td><td>Large common manifold (receiver), nearly steady pressure</td><td>Small, short pipes; cylinders grouped by firing order so pulses do not interfere</td></tr>
  <tr><td>Turbine inlet</td><td>Steady flow, single entry</td><td>Unsteady pulsating flow, multi-entry (grouped) turbine</td></tr>
  <tr><td>Energy used</td><td>Mean pressure only (the blow-down kinetic energy is lost)</td><td>The kinetic energy of the blow-down pulse is also used</td></tr>
  <tr><td>Turbine efficiency</td><td>High (steady flow)</td><td>Lower (partial admission, unsteady flow)</td></tr>
  <tr><td>Response / part load</td><td>Slow, poor at low load</td><td>Quick response and better at low load</td></tr>
  <tr><td>Complexity</td><td>Simple</td><td>Complex piping</td></tr>
  <tr><td>Use</td><td>High load, high pressure ratio, large engines</td><td>Variable-load engines, such as medium-speed 4-stroke engines</td></tr></table>
  <p>Sketch both: one common receiver feeding one turbine entry, and the two or three separate pipe groups feeding a divided turbine casing.</p>`,
  [], 'Dec 2023, Q21(b); Sep/Oct 2025, Q18(b)'),

q('U3T', 7, '<p>Explain the pulse (pulse converter) turbocharging system and list its advantages.</p>',
  `<ul><li><b>Principle:</b> each cylinder opens its exhaust valve and releases a pulse of high-pressure gas (the blow-down). Short, small-bore pipes carry it quickly to the turbine so that the pressure peak and kinetic energy are still large on arrival.</li>
  <li><b>Arrangement:</b> cylinders whose firing is far apart are joined on one pipe, so that the pulses do not interfere and the scavenging of one is not disturbed by another. The groups enter separate sections of a multi-entry turbine. A <b>pulse converter</b> (a nozzle-like junction) joins the pipes: it turns the pressure pulse into velocity and stops the high-pressure pulse from blowing back into the cylinder that is scavenging.</li>
  <li><b>Advantages:</b> uses the blow-down energy; quick response of the turbocharger when the load changes; good low-load and part-load performance; lower scavenge pressure drop and better cylinder scavenging in suitable engines.</li>
  <li><b>Disadvantages:</b> complex piping with grouping rules; lower turbine efficiency; not suited to every number of cylinders.</li></ul>`,
  [], 'Jun 2025, Q21(a); Sep/Oct 2025, Q18(a)'),

q('U3T', 2, '<p>What are the advantages and disadvantages of pulse turbocharging?</p>',
  `<ul><li><b>Advantages:</b> uses the kinetic energy of the exhaust pulse, quick response, good part-load performance and acceleration.</li>
  <li><b>Disadvantages:</b> complicated exhaust piping (cylinder grouping, multi-entry turbine); the turbine efficiency is lower because of the unsteady, partial-admission flow; pulses from different cylinders can interfere; less effective on engines where the exhaust and scavenge periods overlap, such as small two-stroke engines.</li></ul>`,
  [], 'Jun 2024, Q15'),

q('U3T', 3, '<p>List the advantages and disadvantages of the constant pressure turbocharging system.</p>',
  `<ul><li><b>Advantages:</b> high turbine efficiency (steady flow), simple manifold and a single turbine entry, good at high load and high pressure ratio, low cost.</li>
  <li><b>Disadvantages:</b> poor at part load and slow to respond; the blow-down pulse energy is lost; the large manifold takes space and heat; auxiliary blowers are needed for a 2-stroke at low load and when starting.</li></ul>`,
  [], 'Jun 2025, Q21(b)'),

q('U3T', 4, '<p>Why is an auxiliary blower required with constant pressure turbocharging?</p>',
  `<ul><li>In a two-stroke engine the scavenge air must be at a higher pressure than the exhaust for the cylinder to be scavenged. At low load, in starting and in manoeuvring, the exhaust energy is small and the receiver pressure low, so the turbocharger cannot supply enough air.</li>
  <li>With constant pressure the blow-down pulse is lost in the receiver, so there is no help from the pulse in these conditions.</li>
  <li>An electrically driven auxiliary blower (or a bank of blowers) supplies the extra air until the turbocharger can take over, so the scavenging and combustion are good at low load and the engine starts and accelerates properly.</li></ul>`,
  [], 'Jun 2024, Q22(b)'),

q('U3T', 6, '<p>For the marine turbochargers used with marine diesel engines, neatly draw the compressor performance curves and the turbine performance curves with the mapping. Specify the salient points.</p>',
  `<ul><li><b>Compressor map:</b> pressure ratio against corrected mass flow, with lines of constant corrected speed and islands of constant efficiency. The <b>surge line</b> bounds the left side (low flow); the right side of each speed line ends at <b>choke</b> (steep fall). Peak efficiency lies in the middle.</li>
  <li><b>Turbine map:</b> expansion ratio against the flow parameter (ṁ√T/p) for lines of constant speed; the curves bunch together and become nearly vertical when the nozzle chokes. Efficiency is plotted against the blade speed ratio.</li>
  <li><b>Mapping (matching):</b> draw the engine's air-demand (operating) line on the compressor map, so that it stays away from the surge line at all loads and passes through the high-efficiency island at normal running; the turbine map must give the same shaft speed and a matching power balance (turbine power = compressor power + losses).</li>
  <li><b>Salient points:</b> surge line, choke line, design (maximum efficiency) point, engine operating line, speed lines, and the margin to surge.</li></ul>`,
  [], 'Jun 2024, Q22(a)'),

mcq('U3T', 'Pulse type turbocharging, when installed on small two-stroke diesel engines, results in',
  ['Less effective and insufficient scavenging in part load conditions', 'Very effective and substantial scavenging in part load conditions', 'A similar effect to constant pressure turbocharging', 'A high-level disaster, so this combination is never used'], 0,
  'A two-stroke engine needs a scavenge pressure above the exhaust pressure, and at part load the pulses are weak. The turbocharger then gives too little air, so the scavenging is insufficient (auxiliary blowers help). Draft answer: please confirm the key.',
  [], 'Jun 2024, Q10'),

mcq('U3T', 'A turbocharger is used in an internal combustion (IC) engine',
  ['To increase the engine\'s fuel consumption', 'To improve the engine\'s thermal efficiency by reducing heat loss', 'To force more air into the combustion chamber for better power output', 'To cool down the engine by circulating compressed air'], 2,
  'The exhaust-driven turbine drives a compressor that raises the pressure and density of the charge air, so more air (and more fuel) can be burned for the same cylinder size, giving more power.',
  [], 'Sep/Oct 2025, Q9'),

q('U3T', 2, '<p>With the help of a pressure-volume (PV) diagram, explain the working principle of a turbocharger.</p>',
  `<ul><li>A turbocharger is a compressor and a turbine on one shaft. The exhaust gas leaving the engine at p<sub>3</sub> expands through the turbine to the exhaust pressure p<sub>4</sub> (expansion line 3 → 4 on the p–V diagram), and the work obtained (the area under 3–4) drives the compressor.</li>
  <li>The compressor draws ambient air at p<sub>1</sub> and compresses it to p<sub>2</sub> (line 1 → 2; the area is the work input). The charge air, after the cooler, enters the cylinder at this raised pressure and a larger mass of air is trapped.</li>
  <li>Turbine work = compressor work + mechanical losses. The exhaust gas is much hotter than the air, so a smaller expansion ratio in the turbine than the pressure ratio of the compressor is enough. The energy comes from exhaust heat that would otherwise be wasted.</li></ul>`,
  [], 'Sep/Oct 2025, Q13')
];

/* ======================= UNIT IV ======================= */
MTM.pyq.u4 = [
mcq('4.1.8', 'Surging is the phenomenon of',
  ['Steady, periodic and reversed flow', 'Unsteady, periodic and reversed flow', 'Unsteady, periodic and uniform flow', 'Dimensional, steady and uniform flow'], 1,
  'At low mass flow the compressor cannot hold the delivery pressure. The flow reverses, the pressure falls, the flow starts again, and the cycle repeats: unsteady, periodic, reversed flow, with vibration and noise.',
  [34, 35, 36], 'Jun 2023, Q7; Mar 2026, Q7'),

mcq('4.1.8', 'When a compressor operates at ______ choking takes place.',
  ['High mass flow', 'Low mass flow', 'High temperature', 'None of the mentioned'], 0,
  'At high mass flow the Mach number in the passage reaches 1 (the throat or the diffuser). The flow cannot increase further, and the speed line on the map falls steeply at the right end.',
  [36], 'Dec 2023, Q8'),

mcq('4.1.8', 'According to the compressor performance map, it is recommended not to operate the compressor near the',
  ['Operating line', 'Design point', 'Stall line', 'None of the above'], 2,
  'The stall (surge) line is the left boundary of the map. Near it the flow separates and surge can start, so a margin is kept.',
  [34, 35, 36], 'Jun 2024, Q9'),

mcq('4.3.9', 'A centrifugal compressor is suitable for which of the following?',
  ['High pressure ratio, low mass flow', 'High pressure ratio, high mass flow', 'Low pressure ratio, low mass flow', 'Low pressure ratio, high mass flow'], 0,
  'A centrifugal stage gives a high pressure ratio per stage (about 4) but handles a smaller mass flow than an axial compressor of the same size.',
  [69, 70], 'Jun 2023, Q10; Mar 2026, Q10'),

mcq('4.1.1', 'In a centrifugal compressor, the diffuser converts',
  ['Kinetic energy into pressure energy', 'Pressure energy into kinetic energy', 'Kinetic energy into mechanical energy', 'Mechanical energy into kinetic energy'], 0,
  'The diffuser slows the high-velocity gas leaving the impeller and turns its kinetic energy into a rise in static pressure.',
  [5, 6], 'Jun 2025, Q5'),

mcq('4.3.9', 'The mass flow rate of air compressed in an axial flow compressor is ______ that of a centrifugal compressor.',
  ['Lower than', 'Higher than', 'The same as', 'Unpredictable'], 1,
  'An axial compressor passes a higher mass flow for the same frontal area, which is why it is used in large gas turbines.',
  [69, 70], 'Jun 2025, Q9'),

q('4.1.4', 3, '<p>What is the slip factor? How is slip generated in a centrifugal flow compressor?</p>',
  `<ul><li><b>Slip:</b> the gas leaving the impeller does not follow the blade direction fully, so the whirl component V<sub>w2</sub> at the tip is less than the ideal value V<sub>w2</sub>′ (which is u<sub>2</sub> for radial blades).</li>
  <li><b>Slip factor:</b> σ = V<sub>w2</sub>/V<sub>w2</sub>′, usually 0.85 to 0.95. The Stanitz value for radial vanes is about σ = 1 − 0.63π/Z, with Z the number of blades.</li>
  <li><b>How it arises:</b> inside the rotating passage the fluid tends to keep its absolute irrotational motion, which looks like a <b>relative eddy</b> turning against the rotation. Also the pressure is higher on the leading face and lower on the trailing face of each vane. The exit stream is shifted towards the trailing face, so the relative velocity V<sub>r2</sub> is turned backwards and V<sub>w2</sub> falls.</li>
  <li>Effect: less work than the ideal (work = σu<sub>2</sub>²), made up for by the power input factor. More blades give less slip.</li></ul>`,
  [22, 23, 24], 'Dec 2023, Q19(c); Jun 2024, Q12'),

q('4.1.2', 4, '<p>Sketch and describe the velocity diagrams of a centrifugal flow compressor.</p>',
  `<ul><li><b>Inlet (impeller eye, u<sub>1</sub> = ωr<sub>1</sub>):</b> absolute velocity V<sub>1</sub> axial (no pre-whirl, V<sub>w1</sub> = 0) and blade speed u<sub>1</sub> at right angles to each other; the relative velocity V<sub>r1</sub> closes the triangle at angle β<sub>1</sub>.</li>
  <li><b>Exit (impeller tip, u<sub>2</sub> = ωr<sub>2</sub>):</b> blade speed u<sub>2</sub>, radial flow component V<sub>f2</sub>, relative velocity V<sub>r2</sub> at β<sub>2</sub> (blade angle, radial for radial vanes), absolute velocity V<sub>2</sub> at α<sub>2</sub> and whirl V<sub>w2</sub> = u<sub>2</sub> − V<sub>f2</sub> cot β<sub>2</sub>.</li>
  <li>With slip the exit triangle is shifted: V<sub>w2</sub> falls to σV<sub>w2</sub>′ (slide 23).</li>
  <li>Work per kg = u<sub>2</sub>V<sub>w2</sub> − u<sub>1</sub>V<sub>w1</sub> = u<sub>2</sub>V<sub>w2</sub> when there is no pre-whirl.</li></ul>`,
  [7, 8, 9, 10], 'Jun 2024, Q18(b)'),

q('4.1.8', 5, '<p>How is the performance characteristic of a compressor defined? Draw a typical characteristic curve of a high-speed (axial or centrifugal) compressor.</p><p class="small muted">Asked in four papers with 3, 4 or 5 marks.</p>',
  `<ul><li><b>Definition:</b> the plot of the pressure ratio (and the efficiency) against the mass flow, for lines of constant speed. In corrected variables the axes are p<sub>03</sub>/p<sub>01</sub> against ṁ√T<sub>01</sub>/p<sub>01</sub>, for constant N/√T<sub>01</sub> (slide 34).</li>
  <li><b>Sketch:</b> pressure ratio on the vertical axis and corrected mass flow on the horizontal axis; a family of speed lines (for example 60, 70, 80, 90, 100 %) that rise to the right, then flatten and fall; the <b>surge line</b> on the left joining the peaks; <b>choke</b> on the right, where the lines drop steeply; closed contours of constant efficiency (peak about in the middle); and the working (operating) line.</li>
  <li><b>Features:</b> a higher speed gives a higher pressure ratio but a narrower stable range. An axial compressor has steeper speed lines and a narrower range than a centrifugal one, whose curves are flatter and wider.</li>
  <li>Operate to the right of the surge line, near the peak efficiency, with a surge margin.</li></ul>`,
  [34, 35, 36], 'Dec 2023, Q18(a); Jun 2023, Q20(c); Jun 2024, Q19(b); Jun 2025, Q19(b); Mar 2026, Q20(c)'),

q('4.1.7', 5, '<p>Explain the following performance coefficients: (i) flow coefficient, (ii) rotor enthalpy loss coefficient, (iii) diffuser enthalpy loss coefficient, (iv) loading coefficient.</p>',
  `<ul><li><b>(i) Flow coefficient:</b> φ<sub>f</sub> = V<sub>f2</sub>/u<sub>2</sub>, the radial velocity at the exit over the tip speed. It sets the shape of the exit triangle; a large value is towards choke.</li>
  <li><b>(ii) Rotor (impeller) loss coefficient:</b> ζ<sub>R</sub> = (h<sub>2</sub> − h<sub>2s</sub>)/(V<sub>r2</sub>²/2): the enthalpy lost in the impeller against the relative kinetic energy at the exit. (2s is the isentropic end state at p<sub>2</sub>.)</li>
  <li><b>(iii) Diffuser loss coefficient:</b> ζ<sub>D</sub> = (h<sub>3</sub> − h<sub>3s</sub>)/(V<sub>2</sub>²/2): the enthalpy lost in the diffuser against the kinetic energy entering it.</li>
  <li><b>(iv) Loading coefficient:</b> ψ<sub>L</sub> = Δh<sub>0</sub>/u<sub>2</sub>², the work per unit mass over the kinetic energy scale of the tip speed.</li>
  <li>Smaller ζ<sub>R</sub> and ζ<sub>D</sub> mean a higher total-to-total efficiency.</li></ul>`,
  [33], 'Dec 2023, Q18(b)'),

q('4.1.7', 5, '<p>Explain the different losses in a centrifugal compressor.</p>',
  `<ul><li><b>Incidence (shock) loss:</b> at off-design flow the gas meets the vane edge at the wrong angle; shock at high relative Mach number at the eye.</li>
  <li><b>Skin friction:</b> drag on the surfaces in long, narrow passages.</li>
  <li><b>Diffusion and separation loss:</b> the boundary layer separates under the adverse pressure gradient (blade loading).</li>
  <li><b>Tip-clearance (leakage) loss:</b> gas flows over the vane tips from the pressure to the suction side.</li>
  <li><b>Disc friction (windage):</b> drag on the back of the disc, which appears as extra input work (the power factor).</li>
  <li><b>Diffuser and volute loss:</b> friction and stall, shown as the fall of p<sub>02</sub> to p<sub>03</sub>.</li>
  <li>Together they limit the adiabatic efficiency to about 80 %.</li></ul>`,
  [32, 33], 'Jun 2023, Q18(b)'),

q('4.3.9', 3, '<p>Write down the differences between an axial and a centrifugal compressor.</p>',
  `<table class="cmp"><tr><th></th><th>Centrifugal</th><th>Axial</th></tr>
  <tr><td>Flow direction</td><td>Axial in, radial out</td><td>Axial throughout</td></tr>
  <tr><td>Mass flow</td><td>Lower</td><td>Higher</td></tr>
  <tr><td>Pressure ratio per stage</td><td>High (about 4)</td><td>Low (about 1.2)</td></tr>
  <tr><td>Efficiency</td><td>Lower (about 80 %)</td><td>Higher</td></tr>
  <tr><td>Multistaging</td><td>Difficult; usually up to 2 stages</td><td>Easy; overall 20 : 1 or more</td></tr>
  <tr><td>Frontal area</td><td>Large</td><td>Small</td></tr>
  <tr><td>Operating range</td><td>Wide, flat curves</td><td>Narrow, steep curves</td></tr>
  <tr><td>Damage tolerance</td><td>Rugged</td><td>Delicate, prone to foreign-object damage</td></tr>
  <tr><td>Use</td><td>Turbochargers, small engines</td><td>Jet engines, large gas turbines</td></tr></table>`,
  [69, 70], 'Dec 2023, Q19(b)'),

q('4.3.7', 7, '<p>For axial flow turbo-compressors: define the degree of reaction and the flow coefficient. Draw the velocity triangles at entry and exit of the moving blades. Deduce the relationship between the degree of reaction, the flow coefficient and the blade angles. How is the relation applied to 50 % reaction?</p>',
  `<ul><li><b>Degree of reaction:</b> R = (static enthalpy rise in the rotor)/(static enthalpy rise in the stage) = Δh<sub>R</sub>/(Δh<sub>R</sub> + Δh<sub>S</sub>).</li>
  <li><b>Flow coefficient:</b> φ<sub>f</sub> = V<sub>f</sub>/u, the axial (flow) velocity over the blade speed.</li>
  <li><b>Triangles:</b> inlet: u, V<sub>1</sub> (α<sub>1</sub>), V<sub>r1</sub> (β<sub>1</sub>); exit: u, V<sub>2</sub> (α<sub>2</sub>), V<sub>r2</sub> (β<sub>2</sub>). V<sub>f</sub> is constant. Draw them on a common base with the angles measured from the blade speed direction.</li></ul>
  <ol><li>Rotor: h<sub>2</sub> − h<sub>1</sub> = (V<sub>r1</sub>² − V<sub>r2</sub>²)/2 = (x<sub>1</sub>² − x<sub>2</sub>²)/2, where x = V<sub>f</sub> cot β is the whirl part of the relative velocity.</li>
  <li>Stage work: W = u(V<sub>w2</sub> − V<sub>w1</sub>) = u(x<sub>1</sub> − x<sub>2</sub>), and h<sub>3</sub> − h<sub>1</sub> = W (a normal stage has V<sub>1</sub> = V<sub>3</sub>).</li>
  <li>R = (x<sub>1</sub>² − x<sub>2</sub>²)/[2u(x<sub>1</sub> − x<sub>2</sub>)] = (x<sub>1</sub> + x<sub>2</sub>)/2u.</li></ol>
  <p><b>R = (φ<sub>f</sub>/2)(cot β<sub>1</sub> + cot β<sub>2</sub>)</b>, and in terms of the absolute angles R = 1 − (φ<sub>f</sub>/2)(cot α<sub>1</sub> + cot α<sub>2</sub>).</p>
  <p><b>50 % reaction:</b> put R = 0.5: 1/φ<sub>f</sub> = cot β<sub>1</sub> + cot β<sub>2</sub> = cot α<sub>1</sub> + cot α<sub>2</sub>, which gives α<sub>1</sub> = β<sub>2</sub> and α<sub>2</sub> = β<sub>1</sub>: symmetrical triangles, V<sub>1</sub> = V<sub>r2</sub> and V<sub>2</sub> = V<sub>r1</sub>, with equal static rise in rotor and stator.</p>`,
  [62, 63, 64, 65], 'Jun 2024, Q19(a)')
];
})();
