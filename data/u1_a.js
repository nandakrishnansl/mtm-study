/* Unit I content, slides 1-24 (DRAFT, teacher to verify).
   i = importance (3 must-know, 2 important, 1 good to know); s = simple; d = detailed; k = key points; t = exam tip; tv = text-view override
   Equations follow the teacher's Unit I slides and handout (Venkanna notation: V, Vr, Vw, Vf, u, alpha, beta). */
window.MTM = window.MTM || {c: {}};
MTM.c.u1 = MTM.c.u1 || {sl: {}};
(function () {
  Object.assign(MTM.c.u1.sl, {
    1: {i: 3,
      s: `A turbomachine is a machine where a spinning wheel (the rotor) changes the energy of a fluid that keeps flowing through it. Ships use them because they give a lot of smooth power from a small, light machine.`,
      d: `<b>Definition.</b> A turbomachine is a power- or head-generating machine that uses the <i>dynamic action</i> of a rotating element (the rotor) to change the energy level of a <i>continuously flowing</i> fluid. Turbines, compressors, blowers and fans all belong to this family.<br><b>Why ships use them:</b> (1) <b>High power and speed</b>, beyond what reciprocating engines can give a large vessel; (2) <b>compactness</b>, with a much lower weight-to-power ratio (up to half the weight of a reciprocating engine); (3) <b>smooth operation</b>, because direct rotary motion gives uniform torque with no reciprocating balance or vibration problems; (4) <b>reliability</b>, since there is almost no internal lubrication (so no oil gets into the boiler feed water) and few rubbing parts, so wear is negligible.`,
      k: [`Turbomachine = rotor acting dynamically on a continuously flowing fluid`, `Examples: turbines, compressors, blowers, fans`, `Marine advantages: power and speed, compact, smooth torque, reliable`, `No internal lubrication, so no oil in boiler feed water`],
      t: `A definition plus the four marine advantages is a classic 2-mark or 5-mark opener. Learn the four bold headings.`},

    2: {i: 1,
      s: `A photograph of marine turbomachinery: the open casing of a turbine with its rotor and many rows of blades.`,
      d: `The figure shows the lower half of a casing with a bladed rotor lying in it. Every ring of blades you can see is one row; the fixed rows belong to the casing and the moving rows to the rotor. Keep this picture in mind when the next slides talk about rotor, stator and casing.`,
      k: [`Bladed rotor lying in its casing`, `Many rows of blades = multistage machine`]},

    3: {i: 3,
      s: `Every turbomachine has three main parts: a rotor that moves and exchanges energy with the fluid, a stator that stands still and reshapes the flow, and a casing that holds everything and guides the fluid.`,
      d: `<b>Rotor (moving element):</b> an impeller or a bladed wheel. It is the only part that actually transfers energy to or from the fluid. <b>Stator (stationary element):</b> nozzles, diffusers or guide vanes. They <i>transform</i> the fluid's energy without doing external work: in a turbine a nozzle turns pressure into kinetic energy, in a compressor a diffuser turns kinetic energy into static pressure. <b>Casing:</b> the outer shell (a volute, scroll or cylinder) that contains the pressure, guides the fluid into the rotor and collects it on exit.<br>Remember the difference between the two key words: <b>transformation</b> happens in the stator, <b>transfer</b> happens at the rotor.`,
      k: [`Rotor: transfers energy (does the work)`, `Stator: transforms energy (nozzles, diffusers, guide vanes)`, `Casing: holds pressure, guides fluid in, collects it out`, `Transformation = stator; transfer = rotor`],
      t: `If asked for the parts of a turbomachine, name all three and give one function of each. Add a labelled sketch (next slide) for full marks.`},

    4: {i: 2,
      s: `A sectional sketch labelling the inlet, stator casing, stator blades, rotor, rotor blades, shaft, blade tip and exit of an axial machine.`,
      d: `Trace the fluid from the <b>inlet</b> through the alternate rows of <b>stator blades</b> (fixed to the casing) and <b>rotor blades</b> (fixed to the rotor) to the <b>exit</b>. The <b>shaft</b> carries the rotor and delivers or receives the mechanical power. This is the sketch to reproduce when a question says "name and label the parts".`,
      k: [`Inlet → stator blades → rotor blades → exit`, `Shaft carries the rotor`, `Blade tip is the outer end of a rotor blade`]},

    5: {i: 3,
      s: `Turbomachines handle a continuous flow at high speed using the fluid's motion; positive-displacement machines trap a fixed volume of fluid and push it, so they are slower and handle less flow.`,
      d: `<b>Operating principle:</b> a positive-displacement machine traps fluid in a closed space and uses static pressure to do work; a turbomachine uses the dynamic force and velocity energy of a continuous flow. <b>Flow and speed:</b> reciprocating masses limit positive-displacement machines to low speed and small flow; turbomachines run much faster and take far larger flows. <b>Mechanical friction:</b> positive-displacement machines need connecting links to convert reciprocating into rotary motion, so they have more friction and wear; turbomachines act directly on a rotating element. <b>Volumetric efficiency:</b> close to 100 % for turbomachines; lower for positive-displacement machines because of clearances and leakage.`,
      k: [`Dynamic action, continuous flow vs static pressure, trapped volume`, `Turbomachine: high speed, large flow`, `Turbomachine: no linkages, low friction`, `Volumetric efficiency about 100 % vs lower`],
      t: `Present this as a four-row table (principle, flow and speed, friction, volumetric efficiency). A table scores better than a paragraph.`,
      tv: `<table><tr><th>Feature</th><th>Positive-displacement machine</th><th>Turbomachine</th></tr>
 <tr><td>Operating principle</td><td>Traps fluid in a confined space and uses static pressure energy to do work</td><td>Continuous flow process using the dynamic force and velocity energy of the fluid</td></tr>
 <tr><td>Flow rate and speed</td><td>Inherently low speed and smaller flow rates, because of mechanical limitations</td><td>Much higher speeds and much larger flow rates</td></tr>
 <tr><td>Mechanical friction</td><td>Needs connecting links to turn reciprocating into rotary motion, so internal friction is high</td><td>Applies force directly to a rotating element, avoiding complex linkages</td></tr>
 <tr><td>Volumetric efficiency</td><td>Generally lower, because of mechanical clearances</td><td>Close to 100 %, generally superior</td></tr></table>`},

    6: {i: 3,
      s: `Turbomachines are sorted by the direction the fluid flows (axial, radial, mixed), by how the energy is converted (impulse, reaction, or both), by the number of stages, and by operating features such as shafts, governing and service.`,
      d: `<b>1. Flow direction:</b> <i>axial</i> (parallel to the shaft), <i>radial</i> (perpendicular to the shaft) or <i>mixed</i> (both components). <b>2. Action of the fluid:</b> <i>impulse</i> (the whole pressure drop is in the fixed nozzles), <i>reaction</i> (the drop is shared between fixed and moving blades) or a <i>combination</i> of both. <b>3. Stages:</b> single-stage or multistage, depending on the total pressure drop or rise needed. <b>4. Operating features:</b> the number of shafts, the method of governing (throttle, nozzle, bypass), the application (stationary or non-stationary, such as ships) and the inlet steam or gas conditions.`,
      k: [`By flow: axial, radial, mixed`, `By action: impulse, reaction, impulse-reaction`, `By stages: single or multistage`, `By operation: shafts, governing, use, inlet conditions`],
      t: `Use the four headings (flow, action, stages, operation) as a skeleton: examiners reward a classification that is clearly organised.`},

    7: {i: 2,
      s: `The Euler equation starts from Newton's laws: a force equals the rate of change of momentum, and the fluid pushes back on the blade with an equal and opposite force.`,
      d: `Newton's second law: the sum of the forces on a control volume in a direction equals the rate of change of linear momentum, ΣF = ṁ(V<sub>2</sub> − V<sub>1</sub>); the same statement as an impulse is ΣF·dt = m(V<sub>2</sub> − V<sub>1</sub>). When fluid strikes a vane or blade it changes momentum, so the surface exerts the force F = ṁ(V<sub>2</sub> − V<sub>1</sub>) on the fluid. By Newton's third law the fluid pushes back on the surface with the equal and opposite force F = ṁ(V<sub>1</sub> − V<sub>2</sub>). In a turbomachine we do not need the force itself but the <b>torque</b>, which comes from the change of <i>angular</i> momentum.`,
      k: [`ΣF = ṁ(V<sub>2</sub> − V<sub>1</sub>) (Newton's 2nd law)`, `Force of the fluid on the blade = ṁ(V<sub>1</sub> − V<sub>2</sub>) (3rd law)`, `Torque comes from the change of angular momentum`],
      tv: `<p>Newton's second law: the sum of the forces on a control volume in a direction equals the rate of change of linear momentum.</p>
 <div class="eqbox">ΣF = m(V<sub>2</sub> − V<sub>1</sub>)/dt = ṁ(V<sub>2</sub> − V<sub>1</sub>) &nbsp;&nbsp; or &nbsp;&nbsp; ΣF·dt = m(V<sub>2</sub> − V<sub>1</sub>) &nbsp;(impulse-momentum equation)</div>
 <p>When a flowing fluid with velocity V<sub>1</sub> is obstructed by a solid boundary the momentum changes. The force of the surface on the fluid is F = ṁ(V<sub>2</sub> − V<sub>1</sub>).</p>
 <p>By Newton's third law the fluid exerts the equal and opposite force on the surface: <b>F = ṁ(V<sub>1</sub> − V<sub>2</sub>)</b>.</p>`},

    8: {i: 2,
      s: `Picture a rotor spinning about its shaft. Fluid enters at point 1, goes through the rotor by any path and leaves at point 2. Its velocity at each point can be split into three directions.`,
      d: `The figure shows a generalised rotor with axis a–a, rotating at angular speed ω. Fluid enters at <b>1</b> with absolute velocity V<sub>1</sub> and leaves at <b>2</b> with V<sub>2</sub>. The path inside the rotor does not matter for the Euler equation: only the conditions at entry and exit do. That is why one equation covers pumps, compressors and turbines of every shape.`,
      k: [`Point 1 = rotor inlet, point 2 = rotor exit`, `The path through the rotor does not matter`, `Only the inlet and exit velocity triangles are needed`]},

    9: {i: 2,
      s: `The velocity is split into axial, radial and whirl (tangential) parts. Only the whirl part produces torque. Two assumptions keep the derivation simple: the fluid follows the blade exactly, and there is no friction.`,
      d: `<b>Components of the absolute velocity V:</b> axial V<sub>a</sub> (along the shaft; its force goes to the thrust bearing), radial V<sub>R</sub> (along the radius; its force goes to the journal bearings) and tangential, or whirl, V<sub>w</sub> (along the blade motion). Only V<sub>w</sub> gives a torque on the rotor.<br><b>Assumptions:</b> (1) the fluid enters and leaves the vane in a direction tangential to the vane tip, so it follows the blade at inlet and outlet (shock-free); (2) there is no frictional resistance as the fluid flows over the vane. Suffix 1 means rotor inlet, suffix 2 rotor outlet.`,
      k: [`V resolves into V<sub>a</sub>, V<sub>R</sub>, V<sub>w</sub>`, `Only V<sub>w</sub> produces torque`, `Assumption 1: flow tangential to the vane at entry and exit`, `Assumption 2: no friction`],
      t: `When you derive Euler's equation, state these two assumptions before you start. It is an easy mark.`},

    10: {i: 3,
      s: `Torque is the change in angular momentum, power is torque times speed, and that gives the Euler equation: work per kg = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub>.`,
      d: `<b>Step 1.</b> Angular momentum per second at entry = ṁV<sub>w1</sub>r<sub>1</sub>/g<sub>c</sub> and at exit = ṁV<sub>w2</sub>r<sub>2</sub>/g<sub>c</sub> (N·m).<br><b>Step 2.</b> Torque on the rotor = net rate of change of angular momentum: T = ṁ(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub> (N·m).<br><b>Step 3.</b> Power P = Tω = ṁω(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub>. Put u = ωr: P = ṁ(u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> (W).<br><b>Step 4.</b> Work done per kg of fluid, W.D. = P/ṁ = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> J/kg. This is <b>Eq. (1.1) and (1.2), the Euler turbomachinery equation</b>. It applies to every turbomachine: pumps, fans, blowers, compressors and gas, steam or water turbines. In SI units g<sub>c</sub> = 1 kg·m/(N·s²), so it can be left out.`,
      k: [`T = ṁ(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub>`, `P = Tω = ṁ(u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub>`, `W.D. = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> J/kg`, `u = ωr = πDN/60`, `Valid for every turbomachine`],
      t: `This derivation has appeared in Dec 2023 (4 marks) and Jun 2025 (6 marks). Write it in the four steps above and end with the boxed equation.`,
      tv: `<p>Tangential momentum at entry and exit, with ṁ the mass flow rate, u = ωr and g<sub>c</sub> = 1 kg·m/(N·s²) in SI:</p>
 <div class="eqbox">Angular momentum at entry = ṁV<sub>w1</sub>r<sub>1</sub>/g<sub>c</sub> &nbsp;(N·m)<br>Angular momentum at outlet = ṁV<sub>w2</sub>r<sub>2</sub>/g<sub>c</sub> &nbsp;(N·m)</div>
 <div class="eqbox">Torque T = ṁ(V<sub>w1</sub>r<sub>1</sub> − V<sub>w2</sub>r<sub>2</sub>)/g<sub>c</sub> &nbsp;(N·m)<br>Power P = Tω = ṁ(u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> &nbsp;(W)</div>
 <div class="eqbox hot"><b>Euler turbomachinery equation</b><br>W.D. = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> &nbsp;J/kg &nbsp;— (1.1), (1.2)</div>
 <p>Equations (1.1) and (1.2) are the forms of the Euler turbine equation. They apply to all turbomachines: pumps, fans, blowers, turbines (gas, steam, water) and compressors.</p>`},

    11: {i: 2,
      s: `The sign of the Euler work tells you the kind of machine: positive means a turbine, negative means a pump, fan, compressor or blower. If the exit whirl points the opposite way, the two terms add.`,
      d: `<b>Turbine:</b> if u<sub>1</sub>V<sub>w1</sub> &gt; u<sub>2</sub>V<sub>w2</sub> the right-hand side of Eq. (1.2) is positive: the fluid gives work to the rotor. <b>Pump, fan, compressor or blower:</b> if u<sub>2</sub>V<sub>w2</sub> &gt; u<sub>1</sub>V<sub>w1</sub> the result is negative: the rotor gives work to the fluid (a minus sign here just means energy is going <i>into</i> the fluid).<br><b>Opposed whirl:</b> if V<sub>w2</sub> points opposite to V<sub>w1</sub> (so V<sub>w2</sub> is negative), then W.D. = (u<sub>1</sub>V<sub>w1</sub> − (−u<sub>2</sub>V<sub>w2</sub>))/g<sub>c</sub> = (u<sub>1</sub>V<sub>w1</sub> + u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> J/kg, Eq. (1.2a). This is the situation in a reaction turbine blade, where the exit whirl is against the blade motion, and it is why <i>ΔV<sub>w</sub></i> = V<sub>w1</sub> + V<sub>w2</sub> in many numerical problems.`,
      k: [`u<sub>1</sub>V<sub>w1</sub> &gt; u<sub>2</sub>V<sub>w2</sub> → turbine`, `u<sub>2</sub>V<sub>w2</sub> &gt; u<sub>1</sub>V<sub>w1</sub> → pump, fan, compressor, blower`, `Opposed exit whirl: W.D. = (u<sub>1</sub>V<sub>w1</sub> + u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> (1.2a)`],
      t: `In a numerical, decide first whether the exit whirl is with or against the blade motion; it decides whether you subtract or add.`,
      tv: `<p>If V<sub>w1</sub>u<sub>1</sub> &gt; V<sub>w2</sub>u<sub>2</sub>, the right-hand side of Eq. (1.2) is positive and the machine is called a <b>turbine</b>.</p>
 <p>If V<sub>w2</sub>u<sub>2</sub> &gt; V<sub>w1</sub>u<sub>1</sub>, the right-hand side is negative and the machine is called a <b>pump, fan, compressor or blower</b>.</p>
 <p>If V<sub>w1</sub>u<sub>1</sub> &gt; V<sub>w2</sub>u<sub>2</sub> and V<sub>w2</sub> is negative (opposite to V<sub>w1</sub>), Eq. (1.2) becomes</p>
 <div class="eqbox hot">W.D. = [V<sub>w1</sub>u<sub>1</sub> − (−V<sub>w2</sub>u<sub>2</sub>)]/g<sub>c</sub> = (V<sub>w1</sub>u<sub>1</sub> + V<sub>w2</sub>u<sub>2</sub>)/g<sub>c</sub> &nbsp;J/kg &nbsp;— (1.2a)</div>`},

    12: {i: 2,
      s: `To get a more useful form of the Euler equation we draw the inlet and outlet velocity triangles and name every velocity in them.`,
      d: `<b>Definitions:</b> V = absolute velocity of the fluid; V<sub>r</sub> = velocity relative to the rotor; V<sub>f</sub> = flow velocity, the component of V perpendicular to u (it is the <i>radial</i> velocity in a radial machine and the <i>axial</i> velocity in an axial machine); V<sub>w</sub> = whirl, the tangential component of V; u = blade speed. At each point the three vectors close into a triangle: V = u + V<sub>r</sub> (vector sum). Figure 4 shows the inlet triangle (A, B, C, D) and the outlet triangle (E, F, G) on a common construction line, with angles α (between V and u) and β (between V<sub>r</sub> and u).`,
      k: [`V = absolute, V<sub>r</sub> = relative, u = blade speed`, `V<sub>f</sub> = flow (axial or radial); V<sub>w</sub> = whirl`, `α: V to u; β: V<sub>r</sub> to u`, `V = u + V<sub>r</sub> (vector sum)`],
      t: `Always measure α and β from the direction of u. A wrong reference direction is the commonest error in velocity-triangle drawings.`},

    13: {i: 3,
      s: `Use the triangle geometry to replace the product uV<sub>w</sub> by squares of velocities. The Euler work then becomes three easy-to-read terms.`,
      d: `<b>Step 1.</b> Inlet triangle ABD: V<sub>f1</sub>² = V<sub>1</sub>² − V<sub>w1</sub>² (Eq. 1.3).<br><b>Step 2.</b> Triangle BCD: V<sub>f1</sub>² = V<sub>r1</sub>² − (u<sub>1</sub> − V<sub>w1</sub>)² = V<sub>r1</sub>² − u<sub>1</sub>² − V<sub>w1</sub>² + 2u<sub>1</sub>V<sub>w1</sub> (Eq. 1.4).<br><b>Step 3.</b> Equate (1.3) and (1.4): V<sub>1</sub>² = V<sub>r1</sub>² − u<sub>1</sub>² + 2u<sub>1</sub>V<sub>w1</sub>, so <b>u<sub>1</sub>V<sub>w1</sub> = (V<sub>1</sub>² + u<sub>1</sub>² − V<sub>r1</sub>²)/2</b> (1.5). Similarly at exit, u<sub>2</sub>V<sub>w2</sub> = (V<sub>2</sub>² + u<sub>2</sub>² − V<sub>r2</sub>²)/2 (1.6).<br><b>Step 4.</b> Put these into W.D. = (u<sub>1</sub>V<sub>w1</sub> − u<sub>2</sub>V<sub>w2</sub>)/g<sub>c</sub> and regroup: <b>W.D. = [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub></b> (1.7).`,
      k: [`u<sub>1</sub>V<sub>w1</sub> = (V<sub>1</sub>² + u<sub>1</sub>² − V<sub>r1</sub>²)/2`, `W.D. = [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub>`, `This is the three-component form (1.7)`, `It comes from the cosine rule on the velocity triangle`],
      t: `A favourite follow-up to the Euler derivation: "obtain the alternate form". Show both triangles, then Steps 1 to 4.`,
      tv: `<p>From the inlet triangle ABD (Figure 4):</p>
 <div class="eqbox">V<sub>f1</sub>² = V<sub>1</sub>² − V<sub>w1</sub>² &nbsp;— (1.3)</div>
 <p>From triangle BCD:</p>
 <div class="eqbox">V<sub>f1</sub>² = V<sub>r1</sub>² − (u<sub>1</sub> − V<sub>w1</sub>)² = V<sub>r1</sub>² − u<sub>1</sub>² − V<sub>w1</sub>² + 2u<sub>1</sub>V<sub>w1</sub> &nbsp;— (1.4)</div>
 <p>Equating (1.3) and (1.4):</p>
 <div class="eqbox">u<sub>1</sub>V<sub>w1</sub> = (V<sub>1</sub>² + u<sub>1</sub>² − V<sub>r1</sub>²)/2 &nbsp;— (1.5) &nbsp;&nbsp; and similarly &nbsp;&nbsp; u<sub>2</sub>V<sub>w2</sub> = (V<sub>2</sub>² + u<sub>2</sub>² − V<sub>r2</sub>²)/2 &nbsp;— (1.6)</div>
 <p>Substituting (1.5) and (1.6) in (1.2):</p>
 <div class="eqbox hot">W.D. = [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)] / 2g<sub>c</sub> &nbsp;J/kg &nbsp;— (1.7)</div>`},

    14: {i: 3,
      s: `The Euler work has three parts: the change in the fluid's own kinetic energy, the effect of the fluid changing radius (centrifugal), and the change in its speed relative to the blades.`,
      d: `Eq. (1.7) is made up of three components. <b>First (V<sub>1</sub>² − V<sub>2</sub>²)/2g<sub>c</sub>:</b> change in the absolute kinetic energy of the fluid, that is, the change in its dynamic head. <b>Second (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub>:</b> the energy change due to the fluid moving to a different radius of rotation; this is the <b>centrifugal effect</b> and it changes the static head across the rotor. <b>Third (V<sub>r2</sub>² − V<sub>r1</sub>²)/2g<sub>c</sub>:</b> the change in the relative kinetic energy, caused by the fluid accelerating or diffusing inside the blade passages; this also changes the static head.<br>So: the first term is <b>dynamic</b>, the second and third are <b>static</b>.`,
      k: [`I: (V<sub>1</sub>² − V<sub>2</sub>²)/2g<sub>c</sub> — change in dynamic head`, `II: (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> — centrifugal, static head`, `III: (V<sub>r2</sub>² − V<sub>r1</sub>²)/2g<sub>c</sub> — relative KE, static head`, `II and III together change the static pressure across the rotor`],
      t: `Name each term, say what it physically means, and say whether it is dynamic or static. That is the whole answer.`,
      tv: `<p>Equation (1.7) is made up of three components:</p>
 <div class="eqbox"><b>First component</b> (V<sub>1</sub>² − V<sub>2</sub>²)/2g<sub>c</sub> represents the change in the <b>absolute kinetic energy</b> of the fluid (its dynamic head).</div>
 <div class="eqbox"><b>Second component</b> (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> represents the effect of the <b>rotation of the fluid</b> (change of radius). This causes a change in the static head of the fluid through the rotor.</div>
 <div class="eqbox"><b>Third component</b> (V<sub>r2</sub>² − V<sub>r1</sub>²)/2g<sub>c</sub> represents the <b>change in the relative kinetic energy</b>, and causes a change in the static head of the fluid across the rotor.</div>`},

    15: {i: 3,
      s: `Axial machines keep the same radius through the rotor, so they have no centrifugal term. Radial machines change radius, so the centrifugal term helps them make a much bigger pressure change in one stage.`,
      d: `<b>Axial flow:</b> the fluid moves parallel to the axis with no significant change of radius, so u<sub>1</sub> ≈ u<sub>2</sub> and the centrifugal term (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> is zero. All the energy transfer comes from the change of absolute and relative kinetic energy: W<sub>axial</sub> = [(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub>, Eq. (1.4).<br><b>Radial flow:</b> the fluid moves outward (centrifugal compressors and pumps) or inward (inward-flow radial turbines), so r<sub>1</sub> ≠ r<sub>2</sub>, u<sub>1</sub> ≠ u<sub>2</sub> and the centrifugal term is finite. This extra static pressure change is why a radial machine gives a much higher pressure ratio <b>per stage</b>; an axial machine needs many stages for the same total ratio, but handles a larger flow per unit frontal area.`,
      k: [`Axial: u<sub>1</sub> ≈ u<sub>2</sub>, centrifugal term = 0`, `W<sub>axial</sub> = [(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub>`, `Radial: u<sub>1</sub> ≠ u<sub>2</sub>, extra static pressure change`, `Radial: higher pressure ratio per stage; axial: larger mass flow`],
      t: `Link this to Unit IV: it explains why a centrifugal compressor gives a high pressure ratio in one stage while an axial compressor needs many.`,
      tv: `<ul><li><b>Core difference:</b> energy transfer differs according to how the centrifugal component of the Euler equation is handled.</li>
 <li><b>Axial-flow machines:</b> the fluid flows parallel to the axis with no significant change in radius (u<sub>1</sub> ≈ u<sub>2</sub>), so the centrifugal component (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> is zero. Energy transfer relies purely on changes in absolute and relative kinetic energy:
 <div class="eqbox">W<sub>axial</sub> = [(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub> &nbsp;— (1.4)</div></li>
 <li><b>Radial-flow machines:</b> the flow moves radially outward or inward, so there is a substantial change in radius (u<sub>1</sub> ≠ u<sub>2</sub>); the centrifugal component creates a finite change in energy level.</li>
 <li><b>Key advantage:</b> this additional static pressure generation allows radial machines to achieve a much higher pressure ratio per stage than axial machines.</li></ul>`},

    16: {i: 1,
      s: `A Kaplan turbine, an axial-flow water turbine, shown as a photograph and as a labelled cut-away.`,
      d: `Fig. 5 and Fig. 6 give a real example of an axial machine. Water enters through the wicket gates (the stator, which sets the whirl), passes the turbine blades (the rotor) and drives the shaft, which turns the generator. The flow is parallel to the shaft at the runner, which is exactly the "axial flow, u<sub>1</sub> ≈ u<sub>2</sub>" case on the previous slide.`,
      k: [`Kaplan turbine = axial-flow water turbine`, `Wicket gates = stator; runner blades = rotor`, `Drives a generator`]},

    17: {i: 2,
      s: `A summary of the three energy components and what each one does to the pressure of the fluid. The first is dynamic; the second and third are static.`,
      d: `<b>Ideal work done:</b> W.D. = Eq. (1.7). <b>Component I (absolute kinetic energy):</b> (V<sub>1</sub>² − V<sub>2</sub>²)/2g<sub>c</sub> is the change of dynamic head or dynamic pressure. <b>Component II (centrifugal energy):</b> (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> causes a static pressure change because the radius of rotation changes. <b>Component III (relative kinetic energy):</b> (V<sub>r2</sub>² − V<sub>r1</sub>²)/2g<sub>c</sub> changes the static pressure as the fluid accelerates or decelerates through the blade passage. <b>Static enthalpy change across the rotor</b> Δh<sub>rotor</sub> is governed strictly by Components II and III, which is the key to the degree of reaction on the next slides.`,
      k: [`I = dynamic head change`, `II = centrifugal, changes static pressure`, `III = relative KE, changes static pressure`, `Δh<sub>rotor</sub> comes only from II and III`],
      t: `"Δh<sub>rotor</sub> = II + III" is the link to the degree of reaction. Say it in your answer.`,
      tv: `<ul><li>The ideal work done: W.D. = [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2g<sub>c</sub> &nbsp;— (1.7)</li>
 <li><b>Component I (absolute kinetic energy):</b> (V<sub>1</sub>² − V<sub>2</sub>²)/2g<sub>c</sub> represents the change in the fluid's dynamic head or dynamic pressure.</li>
 <li><b>Component II (centrifugal energy):</b> (u<sub>1</sub>² − u<sub>2</sub>²)/2g<sub>c</sub> causes a static pressure change due to shifts in the radius of rotation.</li>
 <li><b>Component III (relative kinetic energy):</b> (V<sub>r2</sub>² − V<sub>r1</sub>²)/2g<sub>c</sub> alters the static pressure as the fluid accelerates or decelerates through the blade passages.</li>
 <li><b>Static enthalpy change (Δh<sub>rotor</sub>):</b> governed strictly by the static-pressure components II and III.</li></ul>`},

    18: {i: 3,
      s: `The degree of reaction R says how much of a stage's pressure (enthalpy) drop happens in the moving blades. R = 0 is impulse, R = 0.5 is the symmetrical Parsons stage, and R = 1 is pure reaction.`,
      d: `<b>Definition:</b> R = (static enthalpy change in the rotor)/(static enthalpy change in the whole stage, stator plus rotor) = Δh<sub>rotor</sub>/Δh<sub>stage</sub>. In terms of the three components, R = [(u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)] / [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)], Eq. (1.5): static components over the total.<br><b>Impulse (R = 0):</b> the whole pressure drop is in the fixed nozzles; V<sub>r1</sub> = V<sub>r2</sub> and u<sub>1</sub> = u<sub>2</sub>, so the work comes entirely from the jet's kinetic energy. <b>Reaction (R &gt; 0):</b> the pressure falls in both fixed and moving blades. <b>50 % reaction (R = 0.5):</b> Δh<sub>stator</sub> = Δh<sub>rotor</sub>; in an axial machine this gives symmetrical blades for the fixed and moving rows (V<sub>1</sub> = V<sub>r2</sub>, V<sub>2</sub> = V<sub>r1</sub>).`,
      k: [`R = Δh<sub>rotor</sub>/Δh<sub>stage</sub>`, `R = (II + III)/(I + II + III)`, `R = 0: impulse; R = 0.5: Parsons; R = 1: pure reaction`, `50 %: symmetrical triangles, identical fixed and moving blades`],
      t: `Dec 2023 asked "How is the degree of reaction defined? What is a 50 % reaction turbine?" (2 marks). Give the ratio, the velocity form, and the symmetry of the triangles.`,
      tv: `<ul><li><b>Degree of reaction (R)</b> is the ratio of the static pressure (or static enthalpy) change in the rotor to the change across the entire stage (stator plus rotor):
 <div class="eqbox hot">R = Δh<sub>rotor</sub>/Δh<sub>stage</sub> = [(u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)] / [(V<sub>1</sub>² − V<sub>2</sub>²) + (u<sub>1</sub>² − u<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)] &nbsp;— (1.8)</div></li>
 <li><b>Impulse machine (R = 0):</b> the entire pressure drop occurs in the stationary nozzles. The relative velocity remains constant across the rotor (V<sub>r1</sub> = V<sub>r2</sub>), and energy transfer relies completely on the fluid jet's kinetic energy.</li>
 <li><b>Reaction machine:</b> pressure changes continuously in both the fixed nozzles and the moving rotor blades.</li>
 <li><b>50 % reaction stage (R = 0.5):</b> the enthalpy drop is shared equally between stator and rotor. In axial machines, this design uses perfectly symmetrical blades for both components.</li></ul>`},

    19: {i: 2,
      s: `A chart showing, for an axial machine, how the work splits between the "absolute kinetic energy" part and the "relative kinetic energy" part as the degree of reaction goes from 0 to 1. The centrifugal part is zero for axial machines.`,
      d: `Read the figure from left to right. At <b>R = 0</b> (pure impulse) all the work comes from the change in absolute kinetic energy. At <b>R = 0.5</b> (Parsons) the two parts are equal in size. At <b>R = 1</b> (pure reaction) all the work comes from the change in relative kinetic energy. The dashed line at zero is the centrifugal component, which is 0 % for an axial machine because u<sub>1</sub> = u<sub>2</sub>.<br><i>Check with the equations:</i> for an axial stage, W = [(V<sub>1</sub>² − V<sub>2</sub>²) + (V<sub>r2</sub>² − V<sub>r1</sub>²)]/2 and the second part equals R × W.`,
      k: [`R = 0: all work from absolute KE change`, `R = 0.5: half from each`, `R = 1: all work from relative KE change`, `Centrifugal part = 0 for axial machines`]},

    20: {i: 3,
      s: `The utilization factor (blade efficiency) tells you how much of the kinetic energy supplied to the blades is turned into shaft work. For a simple impulse stage it is best when the blade speed is about half of the jet speed times cos α<sub>1</sub>, and the best value is cos² α<sub>1</sub>.`,
      d: `<b>Definition (slide, Eq. 1.9):</b> ε = ideal shaft work / total kinetic energy supplied = W.D./(V<sub>1</sub>²/2). For an axial impulse stage (u<sub>1</sub> = u<sub>2</sub> = u): ε = 2u(V<sub>w1</sub> − V<sub>w2</sub>)/V<sub>1</sub>². It judges the <i>rotor blades</i> only, so do not confuse it with the overall stage efficiency.<br><b>Optimum for a simple impulse stage:</b> with equiangular blades and no friction, ΔV<sub>w</sub> = 2(V<sub>1</sub>cos α<sub>1</sub> − u), so ε = 4(u/V<sub>1</sub>)(cos α<sub>1</sub> − u/V<sub>1</sub>). Setting dε/d(u/V<sub>1</sub>) = 0 gives <b>(u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>/2</b> and <b>ε<sub>max</sub> = cos² α<sub>1</sub></b>. (The optimum speed ratio is proportional to cos α<sub>1</sub>; it is the maximum <i>efficiency</i> that equals cos² α<sub>1</sub>.)<br><b>For a 50 % reaction stage</b> the energy supplied to the rotor also includes its relative-KE gain, so ε = W/(W + V<sub>2</sub>²/2); the optimum is (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub> and ε<sub>max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>), at a higher blade speed.`,
      k: [`ε = W.D./(V<sub>1</sub>²/2) for the impulse stage`, `Impulse: (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>/2, ε<sub>max</sub> = cos² α<sub>1</sub>`, `50 % reaction: (u/V<sub>1</sub>)<sub>opt</sub> = cos α<sub>1</sub>, ε<sub>max</sub> = 2cos² α<sub>1</sub>/(1 + cos² α<sub>1</sub>)`, `Smaller α<sub>1</sub> gives a higher ε<sub>max</sub>`],
      t: `Utilization factor and its optimum appear in numericals later (Unit II). Be ready to derive ε<sub>max</sub> = cos² α<sub>1</sub> in four lines.`,
      tv: `<ul><li><b>Utilization factor (ε):</b> also known as blade efficiency; measures how effectively the rotor blades convert the supplied kinetic energy into mechanical work.</li>
 <li><b>Key distinction:</b> it evaluates blade performance specifically, avoiding confusion with the overall thermodynamic stage efficiency.</li>
 <li><b>Definition:</b> the ratio of the ideal shaft work to the total kinetic energy supplied to the rotor blades:
 <div class="eqbox hot">ε = (ideal shaft work)/(total kinetic energy supplied) = W.D./(V<sub>1</sub>²/2) &nbsp;— (1.9)</div></li>
 <li><b>Optimization example:</b> to achieve maximum utilization (diagram efficiency) in a simple impulse turbine, the optimum blade-speed ratio is u/V<sub>1</sub> = cos α<sub>1</sub>/2, giving ε<sub>max</sub> = cos² α<sub>1</sub> (α<sub>1</sub> is the nozzle angle).</li></ul>
 <p>The utilization factor measures how good the rotor blades are at their one specific job: catching the kinetic energy (dynamic pressure) of the fluid and turning it into mechanical spinning work.</p>`},

    21: {i: 1,
      s: `A list of past-paper questions on Unit I: definitions, the Euler equation, energy components, the degree of reaction and the utilization factor.`,
      d: `These slides list the Unit I questions from June 2023, December 2023 and June 2024 (here: June 2023 Q9 on the radial turbine principle, December 2023 Q4 on a velocity diagram, and December 2023 Q13 on the degree of reaction). Worked answers to each one are in <b>Exam questions</b>; the same questions are also flagged at the topic they belong to.`,
      k: [`Radial turbine principle`, `Identify a velocity diagram`, `Define degree of reaction, 50 % reaction turbine`]},

    22: {i: 1,
      s: `More past-paper questions: deriving Euler's equation, specific speed, labelling the velocity diagram of a 50 % reaction blade, and the definition of degree of reaction as a heat-drop ratio.`,
      d: `This slide covers December 2023 Q19(a) (derive the Euler equation, 4 marks), December 2023 Q20(b) (specific speed and its ranges, which is Unit III material), June 2024 Q11 (label the 50 % reaction velocity diagram) and June 2025 Q7 (degree of reaction as a heat-drop ratio). The Euler derivation is the most repeated question in this unit.`,
      k: [`Euler's equation derivation (4 marks)`, `Specific speed (see Unit III)`, `Label a 50 % reaction diagram`, `Degree of reaction = moving-blade heat drop / stage heat drop`]},

    23: {i: 1,
      s: `Past-paper questions on impulse versus reaction turbines, the Euler equation again, and the velocity triangles for 0 % and 100 % reaction.`,
      d: `This slide covers June 2025 Q16(a) (six differences between impulse and reaction turbines), June 2025 Q19(a) (derive Euler's equation, 6 marks), September/October 2025 Q1 (α<sub>1</sub> = β<sub>2</sub> means symmetrical blading, so the answer is the Parsons turbine; see Exam questions) and Q19(a) (draw the 0 % and 100 % reaction velocity triangles).`,
      k: [`Six differences: impulse vs reaction`, `Euler derivation (6 marks)`, `α<sub>1</sub> = β<sub>2</sub> type question`, `0 % and 100 % reaction triangles`]},

    24: {i: 1,
      s: `The last past-paper slide: R and the stage loading coefficient for a zero-swirl turbine, and ten differences between impulse and impulse-reaction turbines.`,
      d: `This slide covers September/October 2025 Q20(b) (relation between R and the stage loading coefficient for zero swirl; the answer is R = 1 − ψ/2) and March/April 2026 Q9 (radial turbine principle again) and Q21(a) (ten differences between an impulse and an impulse-reaction turbine, and why impulse-reaction turbines usually have a drum-type rotor). The repeated "radial turbine" MCQ has appeared in June 2023 and March/April 2026.`,
      k: [`R = 1 − ψ/2 for zero swirl`, `Ten differences: impulse vs impulse-reaction`, `Why a drum rotor in impulse-reaction turbines`, `Radial turbine MCQ repeated (Jun 2023, Mar/Apr 2026)`]}
  });
})();
