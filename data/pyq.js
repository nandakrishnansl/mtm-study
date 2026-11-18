/* Previous-year questions, Units I and II.
   Source: the six end-semester papers in the course folder (Jun 2023, Dec 2023, Jun 2024, Jun 2025, Sep/Oct 2025, Mar/Apr 2026).
   Questions are transcribed from the papers. Answer outlines are DRAFTS written from the course slides and standard texts;
   the teacher should check them before students rely on them. Repeated questions are merged and list every paper they appeared in.
   Entry format: [topicId, marks, questionHtml, answerHtml, [slides], 'Month Year, Q no.'] */
window.MTM = window.MTM || {c: {}};
MTM.pyq = MTM.pyq || {u1: [], u2: [], u3: [], u4: [], u5: []};
/* labels for questions whose topic has no slides yet (chip text) */
MTM.xtopics = Object.assign(MTM.xtopics || {}, {
  U3X: 'Pumps: cavitation, NPSH, losses (slides to come)',
  U3T: 'Turbocharging and matching (slides to come)'
});
/* helpers (shared by the unit files) */
MTM.pq = MTM.pq || {};
MTM.pq.mcq = (topic, stem, opts, ans, why, slides, src) => [topic, 1,
  '<p>' + stem + '</p><ol type="a" class="opts">' + opts.map(o => '<li>' + o + '</li>').join('') + '</ol>',
  '<p><b>Answer: (' + 'abcd'[ans] + ') ' + opts[ans] + '.</b> ' + why + '</p>', slides, src];
MTM.pq.q = (topic, marks, q, a, slides, src) => [topic, marks, q, a, slides, src];

(function () {
const {mcq, q} = MTM.pq;

/* ======================= UNIT I ======================= */
MTM.pyq.u1 = [
mcq('1.7', 'A radial turbine works on the principle of',
  ['Impulse principle', 'Impulse reaction principle', 'Pressure-velocity compounding', 'Centrifugal force principle'], 1,
  'In a radial machine the radius changes (u<sub>1</sub> ≠ u<sub>2</sub>), so the centrifugal term of the Euler equation changes the static pressure across the rotor. The pressure falls in the rotor as well as in the nozzle, so the action is part impulse and part reaction.',
  [15, 17], 'Jun 2023, Q9; Mar 2026, Q9'),

mcq('1.8.1', 'In the velocity diagram given in the paper, u is the blade velocity, C the absolute velocity and W the relative velocity (1 = inlet, 2 = outlet). The inlet and outlet triangles stand on a common base u and are mirror images (C<sub>1</sub> = W<sub>2</sub> and W<sub>1</sub> = C<sub>2</sub>). The diagram is for',
  ['An impulse turbine', 'A reaction turbine', 'A centrifugal pump', 'An axial flow compressor'], 1,
  'The relative velocity grows across the rotor (W<sub>2</sub> &gt; W<sub>1</sub>), so the steam expands in the moving blades. Mirror-image triangles are the 50 % reaction (Parsons) diagram. In an impulse turbine W<sub>2</sub> ≈ W<sub>1</sub>, and in a compressor the relative velocity falls. The figure itself is on the paper; this description is read from it.',
  [18, 19], 'Dec 2023, Q4'),

q('1.8.1', 2, '<p>How is the degree of reaction defined? What is a 50 % reaction turbine?</p>',
  `<ul><li><b>Definition:</b> R = (static enthalpy drop in the rotor) / (static enthalpy drop in the whole stage) = Δh<sub>rotor</sub> / (Δh<sub>stator</sub> + Δh<sub>rotor</sub>).</li>
  <li>In terms of velocities (axial stage, u<sub>1</sub> = u<sub>2</sub>): R = (V<sub>r2</sub>² − V<sub>r1</sub>²) / [(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)].</li>
  <li>R = 0 is a pure impulse stage (all the drop in the nozzle); 0 &lt; R &lt; 1 is a reaction stage.</li>
  <li><b>50 % reaction:</b> R = 0.5, so the drop is shared equally between fixed and moving blades. The blades are symmetrical (mirror images): α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub>. This is the Parsons turbine.</li></ul>`,
  [18], 'Dec 2023, Q13'),

q('1.5', 6, '<p>Derive Euler\'s turbomachinery equation.</p><p class="small muted">Dec 2023 asked this for 4 marks, Jun 2025 for 6 marks.</p>',
  `<ol><li><b>Set-up:</b> steady, uniform flow through a rotor; no friction; flow leaves the vane tangentially. A control volume surrounds the rotor with inlet radius r<sub>1</sub> and outlet radius r<sub>2</sub>.</li>
  <li><b>Angular momentum:</b> torque on the rotor T = ṁ (r<sub>1</sub>V<sub>w1</sub> − r<sub>2</sub>V<sub>w2</sub>) for a turbine (V<sub>w</sub> is the whirl, i.e. tangential, component of the absolute velocity). The sign reverses for a pump or compressor.</li>
  <li><b>Power:</b> P = Tω = ṁ (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>), with u = ωr. Work per kg: W = u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>. This is the Euler equation.</li>
  <li><b>Alternate form:</b> from the velocity triangle V<sub>r</sub>² = V² + u² − 2uV<sub>w</sub>, so uV<sub>w</sub> = (V² + u² − V<sub>r</sub>²)/2. Then
  W = (V<sub>1</sub>² − V<sub>2</sub>²)/2 + (u<sub>1</sub>² − u<sub>2</sub>²)/2 + (V<sub>r2</sub>² − V<sub>r1</sub>²)/2.</li>
  <li><b>Meaning of the three terms:</b> change in absolute kinetic energy; centrifugal effect (change of radius, zero in a purely axial machine); change in relative kinetic energy (diffusion or acceleration inside the blade passage).</li></ol>
  <p class="small">Draw the inlet and outlet velocity triangles and label V, V<sub>r</sub>, u, V<sub>w</sub>, V<sub>f</sub>, α and β.</p>`,
  [7, 8, 9, 10, 11, 12, 13], 'Dec 2023, Q19(a); Jun 2025, Q19(a)'),

q('1.8.1', 2, '<p>Indicate and label the important angles and velocity terms in the velocity diagrams of a moving blade in a 50 % reaction turbine.</p>',
  `<ul><li><b>Inlet triangle:</b> absolute velocity V<sub>1</sub> at angle α<sub>1</sub> to the blade motion; blade speed u; relative velocity V<sub>r1</sub> at angle β<sub>1</sub>; whirl component V<sub>w1</sub>; flow (axial) component V<sub>f1</sub>.</li>
  <li><b>Outlet triangle:</b> V<sub>r2</sub> at β<sub>2</sub>; V<sub>2</sub> at α<sub>2</sub>; whirl V<sub>w2</sub>; flow V<sub>f2</sub>; the same u.</li>
  <li><b>50 % reaction (symmetrical):</b> α<sub>1</sub> = β<sub>2</sub>, β<sub>1</sub> = α<sub>2</sub>, V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub>; V<sub>f1</sub> = V<sub>f2</sub> (constant axial velocity).</li>
  <li>Mark the change in whirl ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub>; work per kg = u ΔV<sub>w</sub>.</li></ul>`,
  [18, 19], 'Jun 2024, Q11'),

mcq('1.8.1', 'The degree of reaction is given by',
  ['Heat drop in moving blades / total heat drop in the stage', 'Heat drop in fixed blades / total heat drop in the stage', 'Heat drop in moving blades / heat drop in fixed blades', 'Total heat drop in the stage / heat drop in fixed blades'], 0,
  'R = Δh<sub>rotor</sub> / Δh<sub>stage</sub>: the share of the stage enthalpy drop that happens in the moving blades.',
  [18], 'Jun 2025, Q7'),

q('1.8.1', 4, '<p>Bring out at least six (Jun 2025, 3 marks), eight (Jun 2023, 4 marks) or ten (Mar 2026, 4 marks) differences between an impulse turbine and a reaction (impulse-reaction) turbine. Explain why an impulse-reaction turbine usually has a drum type rotor.</p>',
  `<table class="cmp"><tr><th></th><th>Impulse turbine</th><th>Reaction turbine</th></tr>
  <tr><td>1. Pressure drop</td><td>All in the nozzles (R = 0)</td><td>Shared by fixed and moving blades (R ≈ 0.5)</td></tr>
  <tr><td>2. Relative velocity over moving blades</td><td>Constant (falls a little by friction)</td><td>Increases (V<sub>r2</sub> &gt; V<sub>r1</sub>)</td></tr>
  <tr><td>3. Pressure in moving blade passage</td><td>Constant</td><td>Falls</td></tr>
  <tr><td>4. Blade passage</td><td>Constant area, symmetrical bucket shape</td><td>Converging, aerofoil shape (the passage is a nozzle)</td></tr>
  <tr><td>5. Nozzles</td><td>Separate nozzles; partial admission possible</td><td>Fixed blades all round; full admission</td></tr>
  <tr><td>6. Axial thrust</td><td>Small</td><td>Large; needs a dummy (balance) piston or double flow</td></tr>
  <tr><td>7. Rotor</td><td>Disc (wheel) type with diaphragms</td><td>Drum type</td></tr>
  <tr><td>8. Tip clearance and leakage</td><td>Less critical; seals at the diaphragms</td><td>Critical at both rows; tight clearance</td></tr>
  <tr><td>9. Stages for the same total drop</td><td>Fewer (large drop per stage)</td><td>More (small drop per stage); longer machine</td></tr>
  <tr><td>10. Maximum diagram efficiency</td><td>cos²α<sub>1</sub> (K = 1) at u/V<sub>1</sub> = cos α<sub>1</sub>/2</td><td>2cos²α<sub>1</sub>/(1 + cos²α<sub>1</sub>) at u/V<sub>1</sub> = cos α<sub>1</sub></td></tr></table>
  <p><b>Why a drum rotor:</b> the pressure drop per stage is small, so many stages are needed and every stage has nearly the same diameter. The fixed blades sit in the casing and the moving blades on one drum, so no diaphragms are needed. A drum is simple, light and short compared with a stack of discs. Its stepped ends also form the dummy piston that balances the large axial thrust of a reaction turbine (Unit II slides 2 and 3).</p>`,
  [18], 'Jun 2023, Q21(a); Jun 2025, Q16(a); Mar 2026, Q21(a)'),

mcq('1.8.1', 'If the angle of the inlet absolute velocity (α<sub>1</sub>) equals the angle of the outlet relative velocity (β<sub>2</sub>) in a steam turbine\'s moving blade, the turbine is known as',
  ['De Laval turbine', 'Curtis turbine', 'Rateau turbine', 'Parson turbine'], 3,
  'α<sub>1</sub> = β<sub>2</sub> (and β<sub>1</sub> = α<sub>2</sub>) is the condition for symmetrical, mirror-image blading, which is the 50 % reaction Parsons turbine.',
  [18], 'Sep/Oct 2025, Q1'),

q('1.8.1', 4, '<p>Draw the velocity triangles for 0 % and 100 % reaction axial flow turbines. Label all vectors in these triangles.</p>',
  `<ul><li><b>Common labels:</b> V (absolute), V<sub>r</sub> (relative), u (blade speed), V<sub>w</sub> (whirl), V<sub>f</sub> (axial flow), α (absolute angle), β (relative angle); subscript 1 = rotor inlet, 2 = rotor outlet.</li>
  <li><b>0 % reaction (impulse):</b> no static enthalpy drop in the rotor, so V<sub>r2</sub> = V<sub>r1</sub> (equal in length when friction is ignored) and β<sub>2</sub> = β<sub>1</sub>. V<sub>1</sub> is large (all the drop took place in the nozzle) and V<sub>2</sub> is small.</li>
  <li><b>100 % reaction:</b> no static drop in the stator, so V<sub>1</sub> = V<sub>2</sub> in length (the exit absolute velocity is the mirror of the inlet one). The relative velocity rises sharply: V<sub>r2</sub> &gt; V<sub>r1</sub>, and all the work comes from V<sub>r2</sub>² − V<sub>r1</sub>².</li>
  <li>For both, the two triangles share the same base u, and R = (V<sub>f</sub>/2u)(cot β<sub>1</sub> + cot β<sub>2</sub>) gives R = 0 and R = 1 for the two angle sets.</li></ul>`,
  [18, 19], 'Sep/Oct 2025, Q19(a)'),

q('1.8.1', 4, '<p>Derive the relationship between the degree of reaction and the stage loading coefficient for a general zero-swirl turbine.</p>',
  `<ol><li>Zero swirl: the absolute velocity leaves the rotor axially, so V<sub>w3</sub> = 0, and take V<sub>f</sub> constant. Work per kg W = uV<sub>w2</sub>.</li>
  <li>Stage loading coefficient ψ = W/u² = V<sub>w2</sub>/u.</li>
  <li>Enthalpy drop of the stage = W (for a normal repeating stage, the stage inlet and exit velocities are equal).</li>
  <li>Drop in the stator = (V<sub>2</sub>² − V<sub>1</sub>²)/2, where V<sub>1</sub> = V<sub>f</sub> (the entry is axial) and V<sub>2</sub>² = V<sub>f</sub>² + V<sub>w2</sub>², so the drop is V<sub>w2</sub>²/2.</li>
  <li>1 − R = (stator drop)/W = (V<sub>w2</sub>²/2)/(uV<sub>w2</sub>) = V<sub>w2</sub>/2u = ψ/2.</li></ol>
  <p><b>Result: R = 1 − ψ/2</b>, or ψ = 2(1 − R).</p>
  <p class="small">Checks: R = 0.5 gives ψ = 1 (symmetrical triangles, V<sub>w2</sub> = u); R = 0 gives ψ = 2 (the impulse stage, V<sub>w2</sub> = 2u).</p>`,
  [18, 19], 'Sep/Oct 2025, Q20(b)')
];

/* ======================= UNIT II ======================= */
MTM.pyq.u2 = [
mcq('2.6', 'What is the most important reason for compounding of the steam turbines?',
  ['For increasing the power output', 'For limiting the turbine RPM', 'To reduce the steam wastage', 'For increasing turbine efficiency'], 1,
  'Expanding the whole pressure drop in one nozzle gives a very high steam velocity, and the best blade speed is about half of it, far too high for a rotor. Splitting the drop over several stages (compounding) brings the speed down to a workable value. Better efficiency follows from this, but the speed limit is the primary reason.',
  [20, 21, 22, 83, 84], 'Jun 2023, Q1; Mar 2026, Q1'),

mcq('2.6', 'Compounding of a steam turbine is done to',
  ['Balance the rotor', 'Reduce the blade friction', 'Reduce the rotor speed', 'Connect the shaft of one turbine to that of another'], 2,
  'Compounding divides the stage pressure drop, so the steam velocity and the ideal blade speed fall to a practical value.',
  [20, 21, 22, 83, 84], 'Dec 2023, Q2'),

mcq('2.6', 'The steam turbines are compounded to',
  ['Increase efficiency', 'Decrease turbine speed', 'Increase blade speed ratio', 'Decrease axial thrust'], 1,
  'Dividing the pressure drop into stages lowers the steam velocity, and so the turbine speed. The blade speed ratio u/V<sub>1</sub> is kept near its best value as a result, not increased on purpose.',
  [20, 21, 22, 83, 84], 'Jun 2024, Q2'),

q('2.6', 2, '<p>Why are steam turbines compounded?</p>',
  `<ul><li>One stage with the full pressure drop gives a nozzle exit velocity of about 1000 m/s or more. The best blade speed is about u = V<sub>1</sub> cos α<sub>1</sub>/2, which is far above what a rotor can take (stress, bearings, vibration) and needs a huge reduction in gearing.</li>
  <li>Compounding shares the total drop over several stages (velocity, pressure or pressure-velocity compounding), so each stage has a moderate velocity and a practical rotor speed.</li>
  <li>Each stage can then run near its best u/V<sub>1</sub>, which improves the efficiency and reduces the leaving loss.</li></ul>`,
  [20, 21, 22, 83, 84], 'Dec 2023, Q11'),

mcq('2.7', 'What is a Curtis stage?',
  ['Pressure compounded impulse turbine', 'Impulse - reaction turbine', 'Velocity compounded impulse turbine', 'Pressure and velocity compounded impulse turbine'], 2,
  'A Curtis stage has one nozzle ring followed by two (or more) rows of moving blades with fixed guide blades between them. The pressure drops only in the nozzle and the velocity is taken out in steps: velocity compounding. A Curtis wheel used as the first stage ahead of Rateau stages is the pressure-velocity arrangement.',
  [22, 23, 85, 86], 'Jun 2023, Q2; Mar 2026, Q2; also Jun 2024, Q1'),

mcq('2.5', 'Which type of turbine is usually equipped with "end tight" blades?',
  ['Impulse reaction turbine', 'Velocity compounded impulse turbine', 'Pressure compounded impulse turbine', 'None of these'], 0,
  'In the reaction (impulse-reaction) turbine the pressure falls across the moving blades, so steam leaking over the blade ends is a big loss. The blade ends are made "end tight", with very small radial clearance, to cut it. Draft answer: please confirm the key.',
  [60, 61], 'Jun 2023, Q3; Mar 2026, Q3'),

mcq('2.8', 'Holes are usually made in the discs of a Rateau stage',
  ['To improve dynamic balancing', 'To reduce weight', 'To facilitate lifting out the disc for maintenance', 'To prevent build-up of pressure on one side'], 3,
  'The pressure is higher upstream of a Rateau wheel than downstream. Balance holes let steam leak through the disc and equalise the pressure on both faces, so there is no end thrust from the disc.',
  [112, 113], 'Jun 2023, Q4; Mar 2026, Q4'),

mcq('2.5.2', 'Maximum efficiency for an impulse reaction turbine can be written as',
  ['cos α', '2cos²α / (1 + cos²α)', '(1 + cos²α) / cos²α', 'cos α / (2 + cos²α)'], 1,
  'For the 50 % reaction (Parsons) stage the blade (diagram) efficiency is η<sub>b</sub> = 2cos²α<sub>1</sub> / (1 + cos²α<sub>1</sub>), at u/V<sub>1</sub> = cos α<sub>1</sub>.',
  [66, 67, 68, 69, 70, 71], 'Jun 2023, Q8; Mar 2026, Q8'),

mcq('2.10', 'For a Parson\'s reaction turbine, if α<sub>1</sub> and α<sub>2</sub> are the fixed blade angles at inlet and exit and β<sub>1</sub> and β<sub>2</sub> are the moving blade angles at entrance and exit, then',
  ['α<sub>1</sub> = α<sub>2</sub> and β<sub>1</sub> = β<sub>2</sub>', 'α<sub>1</sub> = β<sub>1</sub> and α<sub>2</sub> = β<sub>2</sub>', 'α<sub>1</sub> &lt; β<sub>1</sub> and α<sub>2</sub> &gt; β<sub>2</sub>', 'α<sub>1</sub> = β<sub>2</sub> and β<sub>1</sub> = α<sub>2</sub>'], 3,
  'The Parsons stage is symmetrical: the fixed and moving blades are mirror images, so the velocity triangles repeat with α<sub>1</sub> = β<sub>2</sub> and β<sub>1</sub> = α<sub>2</sub>.',
  [118], 'Jun 2025, Q6'),

mcq('2.4', 'A single-stage impulse turbine is also known as',
  ['Curtis stage turbine', 'Reaction turbine', 'De Laval turbine', 'Rateau turbine'], 2,
  'The De Laval turbine is the simple one-stage, single-row impulse turbine, with the steam expanded fully in nozzles and one row of blades on a disc. It is also called the single rotor impulse turbine (Jun 2025, Q4, same answer).',
  [28, 29, 30, 31], 'Dec 2023, Q1; Jun 2025, Q4'),

mcq('2.4.3', 'For an impulse steam turbine with perfectly smooth and symmetrical blades, the maximum diagram efficiency is',
  ['cos²α<sub>1</sub>', 'cos²(α<sub>1</sub> + β<sub>2</sub>)', 'cos α<sub>1</sub>', '2cos²α<sub>1</sub> / (1 + cos²α<sub>1</sub>)'], 0,
  'With K = 1 and equal blade angles, η<sub>b</sub> = 4ρ(cos α<sub>1</sub> − ρ) with ρ = u/V<sub>1</sub>, and the maximum, at ρ = cos α<sub>1</sub>/2, is cos²α<sub>1</sub>. Option (d) is the reaction turbine.',
  [41, 42, 43, 44, 45, 46, 47, 48], 'Jun 2025, Q2; Sep/Oct 2025, Q2'),

q('2.4.3', 5, '<p>Derive the expression for the maximum efficiency of a simple impulse turbine. Use the usual nomenclature for velocity components and the associated angles.</p>',
  `<ol><li><b>Triangles:</b> nozzle exit V<sub>1</sub> at α<sub>1</sub>; V<sub>w1</sub> = V<sub>1</sub> cos α<sub>1</sub>; blade inlet V<sub>r1</sub> at β<sub>1</sub> with V<sub>r1</sub> cos β<sub>1</sub> = V<sub>1</sub> cos α<sub>1</sub> − u. Blade friction K = V<sub>r2</sub>/V<sub>r1</sub>, exit angle β<sub>2</sub>.</li>
  <li><b>Work per kg:</b> W = u(V<sub>r1</sub> cos β<sub>1</sub> + V<sub>r2</sub> cos β<sub>2</sub>) = u(V<sub>1</sub> cos α<sub>1</sub> − u)(1 + c), with c = K cos β<sub>2</sub>/cos β<sub>1</sub>.</li>
  <li><b>Energy supplied:</b> V<sub>1</sub>²/2. Diagram (blade) efficiency η<sub>b</sub> = 2u(V<sub>1</sub> cos α<sub>1</sub> − u)(1 + c)/V<sub>1</sub>².</li>
  <li>With ρ = u/V<sub>1</sub>: η<sub>b</sub> = 2(1 + c) ρ (cos α<sub>1</sub> − ρ).</li>
  <li><b>Maximise:</b> dη<sub>b</sub>/dρ = 0 gives cos α<sub>1</sub> − 2ρ = 0, so <b>u/V<sub>1</sub> = cos α<sub>1</sub>/2</b>.</li>
  <li>η<sub>b,max</sub> = (1 + c) cos²α<sub>1</sub>/2. For smooth, symmetrical blades (K = 1, β<sub>1</sub> = β<sub>2</sub>, c = 1): <b>η<sub>b,max</sub> = cos²α<sub>1</sub></b>.</li></ol>`,
  [41, 42, 43, 44, 45, 46, 47, 48], 'Dec 2023, Q20(a)'),

q('2.4.4', 10, '<p>In a stage of an impulse turbine provided with a single row wheel, the mean diameter of the blade ring is 800 mm and the speed of rotation is 3000 rpm. The steam issues from the nozzles with a velocity of 300 m/s and the nozzle angle is 20°. The rotor blades are equiangular and the blade friction factor is 0.86. What is the power developed in the blading when the axial thrust on the blades is 140 N?</p>',
  `<p class="small">Taken as K = V<sub>r2</sub>/V<sub>r1</sub> = 0.86 and β<sub>2</sub> = β<sub>1</sub>.</p>
  <ol><li>u = πDN/60 = π(0.8)(3000)/60 = <b>125.7 m/s</b>.</li>
  <li>V<sub>w1</sub> = 300 cos 20° = 281.9 m/s; V<sub>f1</sub> = 300 sin 20° = 102.6 m/s.</li>
  <li>Inlet triangle: V<sub>r1</sub> cos β<sub>1</sub> = 281.9 − 125.7 = 156.3; V<sub>r1</sub> sin β<sub>1</sub> = 102.6. So β<sub>1</sub> = 33.3° (= β<sub>2</sub>) and V<sub>r1</sub> = 186.9 m/s.</li>
  <li>V<sub>r2</sub> = 0.86 × 186.9 = 160.7 m/s; V<sub>f2</sub> = V<sub>r2</sub> sin β<sub>2</sub> = 88.2 m/s.</li>
  <li>Axial thrust per kg/s = V<sub>f1</sub> − V<sub>f2</sub> = 102.6 − 88.2 = 14.37 N. The thrust is 140 N, so ṁ = 140/14.37 = <b>9.74 kg/s</b>.</li>
  <li>ΔV<sub>w</sub> = V<sub>r1</sub> cos β<sub>1</sub> + V<sub>r2</sub> cos β<sub>2</sub> = 156.3 + 134.4 = 290.6 m/s.</li>
  <li>Work per kg = uΔV<sub>w</sub> = 125.7 × 290.6 = 36.5 kJ/kg.</li>
  <li><b>Power = ṁ × W = 9.74 × 125.66 × 290.63 = 355 711 W ≈ 355.7 kW</b>, as in the worked solution on slides 49 to 53.</li></ol>`,
  [49, 50, 51, 52, 53], 'Dec 2023, Q17; Jun 2025, Q17'),

q('2.7.2', 2, '<p>Why does the effectiveness of a Curtis stage decrease as the number of moving blade rows increases?</p>',
  `<ul><li>The work is shared very unequally: for two rows about 3 : 1, and for three rows about 5 : 3 : 1. The later rows add little work.</li>
  <li>Every extra row adds blade friction and incidence loss, and the guide rows add more. The steam entering the later rows is slow, so these losses are a large share of the little work they produce.</li>
  <li>Leakage and leaving losses add up with the number of rows, and the best u/V<sub>1</sub> falls (cos α<sub>1</sub>/2n), so the blade speed is further from the practical value.</li>
  <li>The net result is a lower stage efficiency. Two rows is the usual limit.</li></ul>`,
  [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], 'Dec 2023, Q14'),

q('2.7.2', 2, '<p>Draw a velocity triangle for the first row of a two-row velocity compounded impulse turbine stage. Use the optimum blade velocity for maximum efficiency and a suitable nozzle angle; the blade velocity coefficient is taken as unity. Label all vectors and show the change in whirl velocity and change in flow velocity.</p>',
  `<ul><li><b>Optimum blade speed (two rows):</b> u = V<sub>1</sub> cos α<sub>1</sub>/4. Choose α<sub>1</sub> = 16° to 20°.</li>
  <li><b>Construct:</b> draw V<sub>1</sub> at α<sub>1</sub> to the direction of motion; V<sub>w1</sub> = V<sub>1</sub> cos α<sub>1</sub>, V<sub>f1</sub> = V<sub>1</sub> sin α<sub>1</sub>. Subtract u to get V<sub>r1</sub> at β<sub>1</sub> (V<sub>r1</sub> cos β<sub>1</sub> = V<sub>w1</sub> − u = 0.75 V<sub>w1</sub>).</li>
  <li><b>Exit (K = 1, equiangular):</b> V<sub>r2</sub> = V<sub>r1</sub>, β<sub>2</sub> = β<sub>1</sub>. Add u to get V<sub>2</sub> and its whirl V<sub>w2</sub> = V<sub>r2</sub> cos β<sub>2</sub> − u.</li>
  <li><b>Change in whirl:</b> ΔV<sub>w</sub> = V<sub>r1</sub> cos β<sub>1</sub> + V<sub>r2</sub> cos β<sub>2</sub> = 2(V<sub>w1</sub> − u) = 1.5 V<sub>1</sub> cos α<sub>1</sub>.</li>
  <li><b>Change in flow velocity:</b> ΔV<sub>f</sub> = V<sub>f1</sub> − V<sub>f2</sub> = 0 (since V<sub>r2</sub> sin β<sub>2</sub> = V<sub>r1</sub> sin β<sub>1</sub>), so there is no axial thrust.</li></ul>`,
  [92, 93, 94, 95, 96, 97, 98, 99, 100], 'Jun 2023, Q14; Mar 2026, Q14'),

q('2.7.3', 10, '<p>The following particulars apply to a two-row velocity compounded impulse stage of a turbine: nozzle angle 17°; blade speed 125 m/s; exit angles of the first row of moving blades, fixed blades and the second row of moving blades 22°, 26° and 30° respectively. Take the blade velocity coefficient for each row of blades as 0.9, and assume that the absolute velocity of the steam leaving the stage is in the axial direction. (i) Draw the velocity diagram for both stages with a suitable scale. (ii) Calculate the absolute velocity of the steam leaving the velocity stage.</p>',
  `<p>Work backwards from the axial exit. The same problem is solved in full on slides 46 to 53.</p>
  <ol><li><b>Row 2 exit:</b> axial exit means V<sub>w4</sub> = 0, so V<sub>r4</sub> cos 30° = u and V<sub>r4</sub> = 125/cos 30° = 144.3 m/s.</li>
  <li><b>Leaving velocity:</b> V<sub>4</sub> = V<sub>f4</sub> = V<sub>r4</sub> sin 30° = <b>72.2 m/s (axial)</b>. This answers part (ii).</li>
  <li><b>Row 2 inlet:</b> V<sub>r3</sub> = V<sub>r4</sub>/0.9 = 160.4 m/s. With the guide-blade exit at 26° and V<sub>r3</sub>² = (V<sub>3</sub> sin 26°)² + (V<sub>3</sub> cos 26° − u)², V<sub>3</sub> = 263.1 m/s.</li>
  <li><b>Guide (fixed) blades:</b> V<sub>2</sub> = V<sub>3</sub>/0.9 = 292.3 m/s.</li>
  <li><b>Row 1 exit:</b> V<sub>r2</sub> at 22° with V<sub>2</sub>² = (V<sub>r2</sub> sin 22°)² + (V<sub>r2</sub> cos 22° − u)² gives V<sub>r2</sub> = 404.4 m/s; then V<sub>r1</sub> = V<sub>r2</sub>/0.9 = 449.4 m/s.</li>
  <li><b>Nozzle exit:</b> V<sub>r1</sub>² = (V<sub>1</sub> sin 17°)² + (V<sub>1</sub> cos 17° − u)² gives V<sub>1</sub> = 567.4 m/s.</li>
  <li><b>Diagram (part i):</b> draw the four triangles on a common base u = 125 m/s at one scale (for example 1 cm = 50 m/s): row 1 inlet (V<sub>1</sub>, V<sub>r1</sub>), row 1 exit (V<sub>r2</sub>, V<sub>2</sub>), row 2 inlet (V<sub>3</sub>, V<sub>r3</sub>) and row 2 exit (V<sub>r4</sub>, V<sub>4</sub>, axial).</li></ol>
  <p class="small">Check: V<sub>1</sub> = 567.4 m/s and V<sub>4</sub> = 72.2 m/s agree with the final answer on slide 53.</p>`,
  [104, 105, 106, 107, 108, 109, 110, 111], 'Sep/Oct 2025, Q22'),

q('2.9', 7, '<p>Draw and explain the schematic diagrams of the pressure-velocity variation in the different types of compounding in impulse (and reaction) turbines.</p>',
  `<p>Sketch the turbine axially, with pressure and velocity plotted against distance (slide 58).</p>
  <ul><li><b>Simple impulse (De Laval):</b> pressure falls only in the nozzle; velocity rises sharply in the nozzle and falls across the moving row.</li>
  <li><b>Velocity compounding (Curtis):</b> pressure falls only in the first nozzle, then stays constant over the moving, fixed and moving rows. Velocity peaks in the nozzle and steps down over each moving row, with only a small friction loss across the fixed guide row.</li>
  <li><b>Pressure compounding (Rateau):</b> the total drop is shared by a series of nozzle rings. Pressure falls in steps (constant over each moving row); velocity has a sawtooth pattern, rising in every nozzle and falling in every moving row.</li>
  <li><b>Pressure-velocity compounding:</b> a Curtis wheel as the first stage (large pressure drop, two velocity steps), then Rateau stages with smaller drops each.</li>
  <li><b>Reaction (Parsons):</b> the pressure falls steadily in both fixed and moving blades; velocity has a small sawtooth in each row.</li></ul>`,
  [26, 27, 115, 116], 'Dec 2023, Q16(b); Jun 2025, Q16(b); Sep/Oct 2025, Q16(a)'),

q('2.9', 5, '<p>A 4-stage combination turbine has a two-row Curtis wheel as the first stage followed by three stages of Rateau. The 3rd and 4th stages have a slightly higher mean blade radius than the 2nd stage. Show how the absolute steam pressure and velocity vary in the turbine, considering the facts mentioned.</p>',
  `<ul><li><b>Pressure:</b> a big drop in the first nozzle ring only (Curtis stage), then flat across its two moving rows and the guide row. Then three smaller steps, one across each Rateau nozzle ring, and flat across each moving row. The curve is a staircase that flattens as the pressure falls.</li>
  <li><b>Velocity:</b> a very high peak in the Curtis nozzle, stepping down over the two moving rows (and a small drop in the guide row). In each Rateau stage it rises in the nozzle to a lower peak and falls over the moving row.</li>
  <li><b>Larger radius in stages 3 and 4:</b> the steam is more expanded, so its specific volume is greater and it needs a larger flow area. A larger mean radius gives a higher blade speed, so these stages can take a slightly larger enthalpy drop: the later velocity peaks are somewhat higher than that of stage 2.</li>
  <li>Label both curves with stage numbers and mark the exhaust velocity as a residual loss.</li></ul>`,
  [26, 27, 115, 116], 'Jun 2023, Q17(b); Jun 2024, Q16(b); Mar 2026, Q17(b)'),

q('2.9', 3, '<p>Comment on incorporating a two-row Curtis wheel as the first stage in a multi-stage Rateau turbine or Parsons turbine.</p>',
  `<ul><li>A Curtis wheel takes a large enthalpy drop in its single nozzle ring, so the first stage absorbs a big share of the pressure and temperature fall. The rest of the turbine then handles lower pressure and temperature, so the casing is lighter and the number of stages falls: a short, compact HP end.</li>
  <li>The steam leaves the wheel much cooler, which lowers the stress on the HP casing and rotor. Governing by nozzle control is also easy at this wheel.</li>
  <li>Cost: the Curtis stage is less efficient than a Rateau or Parsons stage, so the efficiency is a little lower. It is accepted for the compactness and the lower casing temperature, mostly in small or marine units.</li></ul>`,
  [26, 27, 115, 116], 'Jun 2023, Q22(b); Mar 2026, Q22(b)'),

q('2.5.3', 5, '<p>A Parsons stage steam turbine receives steam from the fixed blades at 90 m/s. The mean blade height is 40 mm and the moving blade exit angle is 20°. The axial velocity is ¾ of the blade velocity at mean radius. Steam is supplied at 9000 kg/h at a specific volume of 0.669 m³/kg, and the effect of blade tip thickness on the annulus area can be neglected. Calculate (a) the rotational speed (revolutions per second) of the wheel, (b) the diagram power, (c) the enthalpy drop in a stage.</p>',
  `<p class="small">Parsons stage: symmetrical blades, so α<sub>1</sub> = β<sub>2</sub> = 20°, V<sub>1</sub> = 90 m/s, V<sub>r2</sub> = V<sub>1</sub>, V<sub>2</sub> = V<sub>r1</sub>.</p>
  <ol><li>V<sub>f</sub> = V<sub>1</sub> sin 20° = 30.78 m/s, and u = V<sub>f</sub>/0.75 = <b>41.04 m/s</b>.</li>
  <li>ṁ = 9000/3600 = 2.5 kg/s. Annulus area A = ṁv/V<sub>f</sub> = 2.5(0.669)/30.78 = 0.0543 m².</li>
  <li>A = πD<sub>m</sub>h, so D<sub>m</sub> = 0.0543/(π × 0.04) = 0.432 m.</li>
  <li><b>(a) Speed:</b> N = u/(πD<sub>m</sub>) = 41.04/(π × 0.432) = <b>30.2 rev/s</b> (about 1813 rpm).</li>
  <li>Triangles: V<sub>w1</sub> = 90 cos 20° = 84.57 m/s; V<sub>r1</sub> cos β<sub>1</sub> = 84.57 − 41.04 = 43.53, so V<sub>r1</sub> = 53.3 m/s and β<sub>1</sub> = 35.3°. ΔV<sub>w</sub> = 84.57 + 43.53 = 128.1 m/s.</li>
  <li><b>(b) Diagram power:</b> W = uΔV<sub>w</sub> = 41.04 × 128.1 = 5.26 kJ/kg; P = 2.5 × 5.26 = <b>13.1 kW</b>.</li>
  <li><b>(c) Enthalpy drop per stage:</b> Δh = (V<sub>1</sub>² − V<sub>r1</sub>²) = 8100 − 2841 = 5259 J/kg ≈ <b>5.26 kJ/kg</b>, equal to the diagram work, 2.63 kJ/kg in the fixed row and 2.63 kJ/kg in the moving row (R = 0.5).</li></ol>`,
  [72, 73, 74, 75], 'Jun 2024, Q17(b)'),

q('2.11', 7, '<p>What are the various types of internal and external losses that occur in a steam turbine?</p>',
  `<ul><li><b>Internal (aerodynamic) losses:</b> nozzle and fixed-blade friction; moving-blade (profile, incidence, end-wall) loss; residual (leaving) velocity loss at exhaust; disc or wheel friction (windage); partial admission loss; carry-over loss between stages; leakage over the blade tips and at diaphragm seals; wetness loss in the LP stages (drag on droplets, erosion).</li>
  <li><b>External losses:</b> gland steam leakage (outward at the HP end, air in at the LP end); mechanical losses in bearings, gears and governor and oil pumps; heat loss by radiation and convection to the surroundings.</li>
  <li>Say how each is reduced, for example by labyrinth glands, reheat against wetness, and insulation.</li></ul>`,
  [120, 121, 122, 123, 124, 125], 'Dec 2023, Q22(a)'),

q('2.11', 3, '<p>What do you understand by carry-over efficiency?</p>',
  `<ul><li>The steam leaves one stage with a kinetic energy V<sub>2</sub>²/2. If the next nozzle is close and sized for it, a part of this energy is used again in the next stage instead of being lost. This is the <b>carry-over</b> of kinetic energy.</li>
  <li>The carry-over (efficiency or coefficient) is the fraction of the leaving kinetic energy that is usefully carried into the next stage. It depends on the gap and the match of the flow areas; the rest is lost in eddies in the annular space between the stages.</li>
  <li>A high value means a lower leaving loss and a higher overall stage efficiency. It matters most in a multi-stage reaction turbine, where the stages are close together.</li></ul>`,
  [120, 121], 'Dec 2023, Q22(b)'),

mcq('2.11', 'The reheating of steam in a turbine',
  ['Increases the work done through the turbine', 'Increases the efficiency of the turbine', 'Reduces wear on the blades', 'All of the above'], 3,
  'Reheat adds heat at a higher temperature, so the work and the cycle efficiency rise. It also keeps the steam drier in the LP stages, which cuts droplet erosion and wetness loss (slide 66).',
  [124], 'Dec 2023, Q3'),

mcq('2.11', 'In steam turbines carry-over losses are due to',
  ['Increase in temperature', 'Formation of eddies in annular spaces', 'Decrease in pressure', 'None of the mentioned'], 1,
  'The kinetic energy that is not picked up again by the next stage is lost in eddies in the annular space between the stages.',
  [120, 121], 'Dec 2023, Q5'),

mcq('2.11', 'Carryover efficiency can be improved by',
  ['Using a steam dryer', 'Operating the boiler at a higher pressure', 'Using a chemical water treatment program', 'All of the above'], 3,
  'This question speaks of boiler carry-over (water and salts carried with the steam). A steam dryer and good water treatment cut it. Note for the teacher: option (b) is doubtful, since a higher boiler pressure tends to raise carry-over, so please confirm the key; (d) is the closest fit to the option set.',
  [124], 'Sep/Oct 2025, Q8'),

q('2.11', 2, '<p>With a simple sketch, explain the function of a labyrinth seal.</p>',
  `<ul><li>A labyrinth seal is a row of thin fins (strips) on the shaft or the casing, with a small radial clearance. The steam passing through it goes through a series of throttling gaps and expansion chambers.</li>
  <li>At each fin the steam speeds up in the gap and loses its kinetic energy in the next chamber, so the pressure falls step by step and the leakage is small. No rubbing contact, so no wear.</li>
  <li>Used at the diaphragm seals and at the shaft ends (glands): outward leak of HP steam is limited, and at the LP end, with sealing steam, air is kept from entering the vacuum.</li></ul>`,
  [122], 'Sep/Oct 2025, Q11'),

/* ----- construction questions (Part 1: 2.1.1 Parts of a steam turbine, 2.2 Guiding devices) ----- */
mcq('2.1.1', 'Rotating disks are subjected to',
  ['Mechanical stress', 'Thermal stress', 'Mechanical and thermal stress', 'None of the mentioned'], 2,
  'A rotating disc carries the centrifugal load of its blades and its own mass (mechanical stress) and has a temperature gradient from rim to hub (thermal stress).',
  [12], 'Dec 2023, Q6'),

mcq('2.1.1', 'Shrouding is done to ______ blades.',
  ['Small', 'Large', 'Every', 'None of the mentioned'], 0,
  'Short (small) blades of impulse turbines are joined at the tips by a shroud band, which stiffens the group and reduces tip leakage. Long blades use lacing wires instead.',
  [12], 'Dec 2023, Q7'),

q('2.1.1', 2, '<p>What is the purpose of using shrouding in steam turbine blades? What are lacing wires and shrouded blades?</p>',
  `<ul><li><b>Shrouding:</b> a thin band riveted over the tips of a group of short blades. It ties the blades into a rigid group, which raises the natural frequency and cuts vibration, and it keeps the steam from leaking over the tips (a seal ring may be added).</li>
  <li><b>Lacing wires:</b> wires passed through holes in the middle of long blades and brazed in. They tie the blades together, damp the vibration and reduce the flutter of long LP blades, where a shroud would be too heavy.</li></ul>`,
  [12], 'Jun 2023, Q15; Mar 2026, Q15; Jun 2025, Q15; Sep/Oct 2025, Q12'),

q('2.1.1', 5, '<p>Sketch and describe the methods of fixing blades on an impulse turbine rotor (five types).</p>',
  `<p>Sketch the root and slot of each:</p>
  <ul><li><b>T-root (and the double T):</b> a T-shaped root slides into a matching slot in the rim and is locked with a key piece; simple, common for short impulse blades.</li>
  <li><b>Fir-tree (serrated) root:</b> several serrations share the load in a tapered slot; used where the centrifugal load is high (LP or large blades).</li>
  <li><b>Bulb (pin) root and the side-entry types:</b> a bulb root in a groove, locked by a caulking piece.</li>
  <li><b>Fork (or straddle) root:</b> the blade root straddles a rim tongue and is held by rivets or pins.</li>
  <li><b>Dovetail root:</b> a dovetail in the rim, inserted at a gap and sealed by a locking piece or caulked.</li>
  <li>In each type blades are spaced by packing pieces and the tips are shrouded or laced. Say where each is used.</li></ul>`,
  [12], 'Jun 2023, Q21(b); Mar 2026, Q21(b); Jun 2024, Q16(a)'),

q('2.1.1', 2, '<p>Write short notes on blade fastening (any two types).</p>',
  `<ul><li><b>T-root:</b> a T-shaped root slides into a T-slot in the disc rim and is locked by a key; for impulse blades with moderate load.</li>
  <li><b>Fir-tree root:</b> serrated root that spreads the load over several teeth; fits high centrifugal loads and allows easy replacement.</li>
  <li>Other types: dovetail, bulb and fork roots. Blades are held by locking pieces and tied by shrouds or lacing wires.</li></ul>`,
  [12], 'Dec 2023, Q15; Jun 2025, Q12'),

q('2.1.1', 5, '<p>Write a short note on steam turbine diaphragms. Bring out the method of fixing and the expansion arrangement for impulse turbine diaphragms.</p>',
  `<ul><li><b>Function:</b> in a pressure-compounded (Rateau) turbine the diaphragm is a partition between two wheels. It carries the nozzles (fixed blades) of the next stage, separates the pressure zones and, with a labyrinth seal at the shaft, limits the leakage along the shaft.</li>
  <li><b>Construction:</b> two half-plates (split along the horizontal joint) with the nozzle blades cast or welded between an inner and outer ring; made of cast iron at low temperature and steel at high temperature.</li>
  <li><b>Fixing:</b> each half sits in a groove in the casing (or in a diaphragm carrier), held by a key or lug at the top and bottom so it is centred. The joint faces are kept steam tight.</li>
  <li><b>Expansion:</b> the diaphragm is free to expand radially (and slide at the groove) when it heats up, while the centre keys keep it concentric with the rotor, so the clearance of the shaft gland is kept. Thermal growth of the casing is accommodated the same way.</li></ul>`,
  [12], 'Jun 2023, Q17(a); Mar 2026, Q17(a); Jun 2024, Q17(a)'),

mcq('2.1.1', 'What is the primary function of a diaphragm in a steam turbine?',
  ['To hold the nozzles and seal the stages', 'To regulate the speed of the turbine shaft', 'To cool down the steam before entering the next stage', 'To reduce vibrations in the turbine casing'], 0,
  'The diaphragm carries the nozzle rings of a stage and, with its shaft seal, separates the pressure zones of adjacent stages.',
  [12], 'Sep/Oct 2025, Q5'),

q('2.2', 2, '<p>If steam is supplied to a C-D nozzle at 9 bar and 300 °C and it discharges to a space with a pressure of 1 bar, estimate the pressure of the steam at the throat of the nozzle. (The saturation temperature of steam at 9 bar is 175.38 °C.)</p>',
  `<ul><li>300 °C is above 175.38 °C, so the steam is <b>superheated</b> and the index of expansion is n = 1.3.</li>
  <li>Critical pressure ratio p*/p<sub>0</sub> = (2/(n + 1))<sup>n/(n−1)</sup> = (2/2.3)<sup>4.33</sup> = 0.546.</li>
  <li><b>p* = 0.546 × 9 ≈ 4.9 bar.</b></li>
  <li>The back pressure (1 bar) is below p*, so the nozzle is choked and a convergent-divergent nozzle is needed to expand further.</li></ul>`,
  [16, 17], 'Jun 2023, Q13; Mar 2026, Q13'),

q('2.1', 3, '<p>Explain a steam turbine with a schematic diagram.</p>',
  `<ul><li>A steam turbine turns the heat energy of steam into rotation. The boiler and superheater supply steam through stop and governing valves to the nozzles (or fixed blades), where the pressure energy becomes kinetic energy. The moving blades on the rotor take the momentum (and the reaction) of the jet and turn the shaft. The exhaust steam goes to the condenser.</li>
  <li>Parts to label: casing, rotor (discs or drum), nozzles, fixed and moving blades, glands, bearings (journal and thrust), governor, exhaust to the condenser.</li></ul>`,
  [1, 2, 3, 4, 5], 'Dec 2023, Q16(a)'),

q('2.1.1', 3, '<p>Write a short note on the construction and manufacturing process of an HP turbine rotor.</p>',
  `<ul><li><b>Construction:</b> a solid forged rotor (the shaft and discs in one piece) for HP and high-speed units; shrunk-on discs for LP rotors. A drum for reaction blading. It carries the blade roots in grooves, with journals and a thrust collar and the gland seats.</li>
  <li><b>Material:</b> a creep-resisting alloy steel (for example Cr-Mo-V) because of the temperature and the centrifugal stress.</li>
  <li><b>Manufacture:</b> forged from an ingot, rough-turned, heat treated, then tested ultrasonically and by magnetic particle inspection. Grooves are machined, the rotor is balanced at running speed in an over-speed (spin) pit, and the blades are fitted.</li></ul>`,
  [12], 'Jun 2023, Q21(c); Mar 2026, Q21(c)'),

q('2.1.1', 4, '<p>With the help of a neat sketch, explain the gland sealing arrangement for a cross-compounded marine propulsion turbine.</p>',
  `<ul><li><b>Where:</b> at the shaft ends of the HP and LP turbine casings. Each gland is a labyrinth (a set of fins on the shaft and the casing) with leak-off and sealing steam connections.</li>
  <li><b>HP turbine:</b> steam tends to leak out. The leak-off is piped away to a lower pressure stage or the gland steam system; the last chamber is vented to the gland condenser.</li>
  <li><b>LP turbine:</b> the casing is below atmospheric pressure, so air tends to enter. Sealing steam (at a pressure slightly above atmospheric) is fed into the gland to stop air entering the condenser vacuum. A gland steam condenser with an extraction fan takes the excess.</li>
  <li>A gland steam regulator keeps the pressure steady. Sketch the labyrinth, the connections and the gland condenser.</li></ul>`,
  [12, 14, 15], 'Jun 2023, Q22(a); Mar 2026, Q22(a)'),

q('2.5.1', 3, '<p>Write a short note on the turbine thrust bearing.</p>',
  `<ul><li>The axial thrust comes from the unbalanced pressure forces, mostly in reaction turbines (see slide 5) and from the helical gearing. It must be taken so that the rotor stays in its axial position with the small blade clearances.</li>
  <li><b>Michell (tilting-pad) bearing:</b> a thrust collar on the shaft runs against a ring of pivoted pads, fed with oil under pressure. The pads tilt to form an oil wedge, so there is no metal contact. Pads are on both sides to carry the thrust in either direction and to set the axial position (the thrust clearance).</li>
  <li>The bearing is cooled and lubricated by the oil system, with temperature and wear alarms. The dummy piston reduces the load on it.</li></ul>`,
  [63], 'Jun 2023, Q22(c); Mar 2026, Q22(c); Jun 2025, Q20(b)'),

q('2.3', 3, '<p>Justify the purpose of warming up a steam turbine before running it.</p>',
  `<ul><li>To heat the casing and rotor slowly and evenly, so that the thermal expansion is uniform and the thermal stress is small. A cold rotor in hot steam would be shocked.</li>
  <li>To avoid bowing of the rotor (it must be turned slowly on the turning gear), which would cause vibration and rubbing of the blades and glands.</li>
  <li>To keep the differential expansion between the rotor and the casing within the clearances.</li>
  <li>To drain the condensate before admitting steam (water in the blades causes erosion and damage) and to get the oil circulated and the bearings ready.</li></ul>`,
  [], 'Sep/Oct 2025, Q16(b)'),

q('2.1', 2, '<p>With a schematic diagram, define the stagger and camber angles for a typical reaction turbine blade.</p>',
  `<ul><li><b>Chord line:</b> the straight line from the leading edge to the trailing edge of the blade section.</li>
  <li><b>Stagger angle:</b> the angle between the chord line and the axial direction (the machine axis); it sets how far the blade is turned in the row.</li>
  <li><b>Camber angle:</b> the angle through which the mean (camber) line turns, which is the angle between the tangents to the camber line at the leading and trailing edges; it measures the curvature of the blade.</li>
  <li>Sketch the section with the chord, the camber line, the axial direction and the two angles marked.</li></ul>`,
  [9], 'Sep/Oct 2025, Q15'),

mcq('2.1', 'A ______ drawn from the head of a turbine blade to its tail is called the chord.',
  ['Curved axis', 'Straight line', 'Linear axis', 'None of the above'], 1,
  'The chord is the straight line joining the leading edge to the trailing edge of the blade section.',
  [9], 'Jun 2024, Q7')
];
})();
