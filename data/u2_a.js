/* Unit II content, slides 1-35 (DRAFT, teacher to verify). Notation follows the teacher's slides: V, Vr, Vw, Vf, u, alpha, beta, K = Vr2/Vr1, rho = u/V1. */
window.MTM = window.MTM || {c: {}};
MTM.c.u2 = MTM.c.u2 || {sl: {}};
(function () {
  Object.assign(MTM.c.u2.sl, {
    1: {i: 3,
      s: `A steam turbine takes high-pressure, hot steam and turns its heat and pressure into the spinning of a shaft, by first making the steam move very fast through nozzles.`,
      d: `<b>Definition:</b> a prime mover that converts the thermal and potential (pressure) energy of high-pressure, high-temperature steam into mechanical energy.<br><b>Energy path:</b> thermal and potential energy → kinetic energy → mechanical energy.<br><b>Mechanism:</b> the steam expands through stationary <b>nozzles</b> into high-velocity jets; the jets are directed onto <b>rotating blades</b>, which turn them into shaft work. Figure 1 labels the parts of a general marine steam turbine.`,
      k: [`Prime mover: steam energy → shaft work`, `Thermal/pressure → kinetic → mechanical`, `Nozzles make the jet; moving blades take the work`],
      t: `"Define a steam turbine and state the energy conversion" is a one-mark/two-mark question: quote the energy path in one line.`},

    2: {i: 1,
      s: `A photograph of a marine steam turbine.`,
      d: `Use the picture to see what the parts on the next slides look like in the real machine: casing, rotor, bearings and the connections to the gearing and the steam pipes.`,
      k: [`A real marine steam turbine`]},

    3: {i: 1,
      s: `Another view of a marine steam turbine. The slide also points to a short video on how a steam turbine works.`,
      d: `Watch the video named on this slide (also listed under <b>Videos</b>) before you go on: it shows the steam path from nozzle to exhaust in one animation, which makes the next slides much easier to follow.`,
      k: [`Video: How does a steam turbine work?`, `Follow the steam from nozzle to exhaust`]},

    4: {i: 3,
      s: `In a simple impulse turbine the steam expands completely in a set of nozzles, so it leaves them very fast. The moving blades then bend the jet, and the push from this change of direction turns the rotor.`,
      d: `<b>Simple impulse turbine:</b> the whole expansion takes place in <i>one</i> set of nozzles. A single-stage impulse turbine has just nozzles and moving blades.<br><b>In the nozzle:</b> steam at boiler pressure p<sub>b</sub> expands down to the low back (condenser) pressure; pressure energy becomes kinetic energy and the velocity rises greatly.<br><b>On the blades:</b> the fast jet meets blades shaped to change the direction of the flow. The change of momentum gives an <b>impulse force</b> that moves the blades.`,
      k: [`Impulse: all expansion in the nozzles`, `Nozzle: pressure energy → kinetic energy`, `Blades only change the direction of the jet`, `Impulse force = change of momentum`],
      t: `Always say where the pressure drops. For impulse: only in the nozzles.`},

    5: {i: 3,
      s: `Over the moving blades of an impulse turbine the pressure does not change at all; only the speed falls as the steam gives up its energy. A single stage wastes a lot of energy because the steam still leaves fast.`,
      d: `<b>Pressure and velocity on the blades:</b> as the steam passes over the blades and gives up kinetic energy its velocity falls, but its pressure stays constant: the outlet pressure equals the inlet pressure of the blade row (R = 0).<br><b>Staging:</b> expansion and change of direction can happen once or several times in succession.<br><b>Limitation:</b> in a single-stage turbine the exit velocity is still large, so there is a considerable <b>leaving (carry-over) loss</b> of kinetic energy.`,
      k: [`Blade row: pressure constant, velocity falls`, `p at blade outlet = p at blade inlet`, `Single stage: large leaving loss`],
      t: `Connect this slide to compounding (slides 20 to 27): compounding exists to cure the leaving loss and the very high speed.`},

    6: {i: 2,
      s: `A figure of an impulse turbine, showing the nozzles, the blades, and how pressure and velocity change along the flow.`,
      d: `Read the figure in two parts: <b>in the nozzle</b> the pressure drops sharply while the velocity rises; <b>over the blades</b> the pressure line is flat and the velocity falls. This one picture is a standard answer for "show the pressure and velocity variation in an impulse turbine".`,
      k: [`Nozzle: p falls, V rises`, `Blades: p constant, V falls`]},

    7: {i: 2,
      s: `A figure of a pure reaction turbine, where the steam expands in the moving blades themselves, so the blades are pushed by the steam leaving them.`,
      d: `In a pure reaction turbine all the pressure drop occurs in the moving blades. The moving blades are shaped like nozzles, so as the steam speeds up through them, the reaction of the jet drives the rotor (like a rotating lawn sprinkler). The degree of reaction is 1.`,
      k: [`Pure reaction: R = 1`, `Expansion in the moving blades`, `Reaction of the leaving jet drives the rotor`]},

    8: {i: 2,
      s: `A figure of an impulse-reaction turbine, where the pressure falls in both the fixed blades and the moving blades.`,
      d: `Fixed blades act as nozzles and produce part of the pressure drop and the velocity rise; the moving blades then give the rest of the expansion while taking work from the steam. The common case is 50 % reaction, the Parsons turbine (R = 0.5): equal pressure drops in the fixed and the moving rows.`,
      k: [`Pressure falls in fixed AND moving rows`, `Parsons: R = 0.5`, `Fixed blades act as nozzles`]},

    9: {i: 2,
      s: `Cross-sections of an impulse blade and a reaction blade. The impulse blade is a symmetrical curved bucket; the reaction blade is an aerofoil with a narrowing passage.`,
      d: `<b>(a) Impulse blade:</b> symmetrical, constant passage area, inlet and outlet angles equal: it changes the direction but does not accelerate the steam. <b>(b) Reaction blade:</b> aerofoil shape; the passage between neighbouring blades converges, so the steam accelerates and the pressure falls inside the moving blades.`,
      k: [`Impulse blade: symmetrical, constant passage`, `Reaction blade: aerofoil, converging passage`],
      t: `Blade shapes are an easy item in "differences between impulse and reaction turbines".`},

    10: {i: 3,
      s: `Steam turbines are classified by how the steam acts (impulse, reaction or both), by the number of pressure stages, by the flow direction and use, and by the steam conditions at the inlet and exhaust.`,
      d: `<b>Action of steam:</b> impulse (pressure drops entirely in the fixed nozzles; blades change the jet momentum), reaction (continuous expansion across fixed and moving blades) or a combination. <b>Pressure stages:</b> single-stage (for auxiliary machines) to multistage (progressive expansion for higher efficiency). <b>Flow direction and use:</b> axial or radial; stationary (power plants) or non-stationary (marine, railway). <b>Operating conditions:</b> by inlet parameters (low, medium, high or supercritical pressure) and by exhaust arrangement (condensing, back-pressure or topping). Figure 8 on the next slide gives a detailed chart with examples.`,
      k: [`Action: impulse / reaction / combination`, `Stages: single or multistage`, `Flow: axial or radial; stationary or marine`, `Inlet: low to supercritical; exhaust: condensing, back-pressure, topping`],
      t: `Classification is a standard 5-mark answer. Use the four headings and give one example of each.`,
      tv: `<ul><li><b>Action of steam:</b> impulse (pressure drops entirely in the fixed nozzles; blades change the jet momentum), reaction (continuous expansion and pressure drop across fixed and moving blades), or a combination.</li>
 <li><b>Number of pressure stages:</b> from single-stage (auxiliary machinery) to multistage (progressive expansion to maximise thermodynamic efficiency).</li>
 <li><b>Flow direction and usage:</b> axial or radial flow; stationary (power plants) or non-stationary (marine, railway).</li>
 <li><b>Operating conditions:</b> inlet parameters (low, medium, high or supercritical pressure) and exhaust configuration (condensing, back-pressure or topping).</li></ul>`},

    11: {i: 2,
      s: `A classification chart of marine steam turbines with an example under each branch.`,
      d: `Use it as a revision map: follow each branch of the chart from the main criterion (action, stages, flow, use, conditions) down to a named example.`,
      k: [`Chart of types with examples`]},

    12: {i: 3,
      s: `The main parts of a steam turbine are the rotor, the diaphragms, the casing, the blades and the labyrinth glands. Each has one clear job.`,
      d: `<b>Rotor:</b> shaft plus bladed discs that deliver the work; built-up (discs shrunk on the shaft) or solid (one forging, very rigid at high temperature). <b>Diaphragm:</b> divides an impulse turbine into pressure stages; a stationary, horizontally split disc carrying the fixed nozzle blades, strong against axial deflection and sealed against leakage. <b>Casing (cylinder):</b> the pressure enclosure that directs the steam; HP/IP casings are low-alloy steel castings (creep resistant), LP casings are mild steel plate; double casings reduce thermal stress. <b>Blades:</b> aerofoil parts that make the torque; long LP blades are taper-twisted to allow for centrifugal force and to keep the axial velocity uniform. <b>Labyrinth gland:</b> non-contact seal of stepped fins that stops steam leaking out and air leaking in; the steam is throttled through the tortuous path and its kinetic energy is lost as heat by turbulence.`,
      k: [`Rotor: built-up or solid`, `Diaphragm: separates stages, carries nozzles`, `Casing: HP/IP alloy steel, LP mild steel`, `Blades: taper-twisted in long LP stages`, `Labyrinth gland: non-contact seal, throttles the leak`],
      t: `Name the five parts with one function each, then sketch the labyrinth seal. This question has appeared several times.`},

    13: {i: 2,
      s: `A cut-away view of a marine steam turbine, to see where the parts from the previous slide sit.`,
      d: `Find in the picture: the casing, the rotor with its discs and blades, the diaphragms between the discs, the bearings and the glands at each end of the shaft.`,
      k: [`Locate rotor, casing, diaphragms, glands`]},

    14: {i: 3,
      s: `A schematic of a labyrinth seal: a row of thin fins forces the steam through a twisting, narrow path so that very little of it leaks.`,
      d: `Steam must squeeze past each fin and expand into the space behind it. At every fin the pressure drops and the kinetic energy of the jet is destroyed by turbulence. After a number of fins almost all of the pressure difference is used up, so the leak is small. Because the fins do not touch the shaft there is no friction and no wear.`,
      k: [`Fins and spaces: throttle, expand, repeat`, `Non-contact: no rubbing, no wear`, `Used at shaft ends and at diaphragm bores`],
      t: `Draw the stepped fins and show the steam path as a zig-zag arrow.`},

    15: {i: 2,
      s: `A second view of the labyrinth sealing arrangement in a steam turbine, showing where the glands sit on the shaft.`,
      d: `At the HP end the gland stops steam escaping to the engine room; at the LP end (which is below atmospheric pressure) it stops air entering the condenser. Gland steam is supplied to the LP glands for this purpose.`,
      k: [`HP gland: stops steam leaking out`, `LP gland: stops air leaking in`]},

    16: {i: 3,
      s: `Nozzles are where the steam's heat is turned into speed. A convergent nozzle is enough at small pressure drops, but below the critical pressure a divergent part must be added after the throat.`,
      d: `<b>Convergent-divergent nozzle:</b> converts enthalpy into kinetic energy. If the exhaust pressure falls below the critical pressure (0.55 to 0.58 of the inlet pressure) the expansion in an ordinary nozzle is uncontrolled; a divergent section after the throat accommodates the growing specific volume and gives an efficient supersonic jet.<br><b>Guide vanes:</b> fixed blades that form the actual nozzle passages, shaped and angled for steady acceleration; in impulse turbines they are cast or welded into diaphragm segments.<br><b>Nozzle efficiency:</b> η<sub>n</sub> = actual enthalpy drop (kinetic energy gained)/isentropic enthalpy drop. It covers friction and turbulence and fixes the real steam velocity V<sub>1</sub> on the rotor.`,
      k: [`Critical pressure ratio about 0.55 to 0.58`, `Below it: convergent-divergent nozzle`, `η<sub>n</sub> = actual Δh/isentropic Δh`, `Guide vanes form nozzle passages`],
      t: `Nozzle efficiency η<sub>n</sub> = V<sub>1</sub>²/2g<sub>c</sub>(Δh)<sub>theoretical</sub> returns on slide 38.`},

    17: {i: 2,
      s: `Two figures of nozzles: one as used in reaction turbines (blade passages) and one as used in impulse turbines (diaphragm nozzles).`,
      d: `In a reaction turbine the fixed blades themselves are the nozzles, so the nozzle passage is simply the gap between fixed blades. In an impulse turbine the nozzles are separate passages in the diaphragm, with a narrowing (and often a diverging) shape.`,
      k: [`Reaction: fixed blades = nozzles`, `Impulse: nozzles cut in the diaphragm`]},

    18: {i: 3,
      s: `A ship's turbine must change speed and load often, so it must be robust against heating and cooling. Its high speed is reduced to a slow propeller speed by double-reduction gearing.`,
      d: `<b>Marine versus stationary:</b> land plants run mostly at base load; ships manoeuvre, so speed and load change quickly. The turbine never settles at steady temperature, so a robust design is needed to resist rapid thermal changes and to avoid rotor sag or distortion. Single-cylinder or double-casing impulse turbines are favoured where power changes often.<br><b>Gearing:</b> the turbine and the propeller each run at their own best speed, joined by reduction gears. The ratio is 30:1 up to 80:1 (e.g. 50.0 rev/s turbine to 1.667 rev/s propeller = 30:1). To keep the gearcase narrow in the thwartship direction the ratio is split into two stages: double-reduction gearing.`,
      k: [`Marine: frequent manoeuvring, thermal cycling`, `Robust design against rotor sag`, `Gear ratio 30:1 to 80:1`, `Double reduction keeps gearcase narrow`],
      t: `A numerical check: 50.0 rev/s ÷ 1.667 rev/s = 30. Quote this example in the "need for gearing" answer.`},

    19: {i: 3,
      s: `Marine plants use HP, IP and LP turbines on one gear train, and a small astern turbine built into the exhaust casing to reverse the ship.`,
      d: `<b>Gearing and cylinders:</b> turbine speeds are far above propeller speeds, so double-helical, double-reduction gears are used. Expansion is divided into two or three cylinders (HP, IP, LP) coupled to the same gearing. The HP turbine runs very fast with small blades; the LP turbine runs slower to pass the huge steam volume.<br><b>Astern (reversing) turbines:</b> the main turbine can run in one direction only, so a separate astern turbine is fitted. It works only briefly during manoeuvring, so compactness matters more than efficiency. It sits inside the exhaust casing of the LP (sometimes the HP) turbine and is usually a simple two-row velocity-compounded (Curtis) wheel. The slide also names an astern turbine animation.`,
      k: [`HP, IP, LP cylinders on one gear train`, `HP: small blades, high speed; LP: large volume, lower speed`, `Astern turbine: two-row Curtis wheel`, `Fitted in the LP (sometimes HP) exhaust casing`],
      t: `"Why is an astern turbine a two-row Curtis wheel?" Because it must be compact and absorb a large energy drop in one wheel. Efficiency matters little.`},

    20: {i: 3,
      s: `Expanding steam fully in one stage gives a huge jet speed, a rotor speed of about 30 000 rpm, a large leaving loss and a danger of the blades flying apart. Compounding splits the work among several stages to avoid this.`,
      d: `<b>Drawbacks of a single stage:</b> (1) impractical speed: full expansion boiler to condenser gives a very high nozzle exit velocity and a turbine speed around 30 000 rpm; (2) most driven machines run at only a few thousand rpm, so very large gear trains are needed; (3) leaving loss: in a real De Laval turbine the leaving velocity is about 33 % of the nozzle exit velocity, so about 0.33² ≈ 11 % of the initial kinetic energy is lost; (4) structural risk: centrifugal stress is severe, and safe blade speeds are limited to about 400 m/s.<br><b>Compounding</b> is absorbing the inlet energy over several rows of moving blades, which lowers the speed and overcomes these disadvantages.`,
      k: [`Single stage: about 30 000 rpm`, `Leaving velocity about 33 % of V<sub>1</sub>, loss 0.33² ≈ 11 %`, `Safe blade speed about 400 m/s`, `Compounding = spread the energy over several rows`],
      t: `The numbers 30 000 rpm, 33 %, 11 % and 400 m/s make a good "drawbacks of simple impulse turbine" answer.`},

    21: {i: 3,
      s: `Compounding comes in two basic kinds: velocity compounding when the energy handed to the next stage is kinetic, and pressure compounding when it is pressure (enthalpy).`,
      d: `<b>Velocity compounding</b> is used when the energy entering the later stages is purely kinetic. <b>Pressure compounding</b> is used when it is in pressure (enthalpy) form.<br><b>Simple impulse turbine (e.g. De Laval):</b> all the expansion in one nozzle set, very high steam velocity, too high a blade and rotor speed, and a large carry-over loss.<br><b>Purpose of compounding:</b> lower the blade speed for a given total pressure drop so the tip speeds are safe. <b>Structure:</b> several rotors in series, keyed to one shaft. <b>Energy absorption:</b> the high jet velocity is taken up gradually in stages over successive rows of blades.`,
      k: [`Velocity compounding: kinetic energy handed on`, `Pressure compounding: pressure energy handed on`, `Result: lower blade speed for the same pressure drop`, `Several rotors keyed on one shaft`]},

    22: {i: 3,
      s: `There are three methods: velocity compounding (Curtis), pressure compounding (Rateau) and a mixture of both. In velocity compounding the whole pressure drop is in the first nozzles and the speed is absorbed row by row.`,
      d: `<b>Methods:</b> (1) velocity compounding, (2) pressure compounding, (3) pressure and velocity compounding.<br><b>Velocity compounding (Curtis stage or turbine):</b> stationary nozzles on the casing, then alternate rows of moving blades and <i>fixed guide blades</i>. The fixed blades only redirect the steam from one moving row to the next, with no appreciable change of velocity or pressure. The whole pressure drop occurs in the first set of nozzles; the resulting high kinetic energy is absorbed in succession by the moving rows; the steam leaves the last row axially with very low velocity, so the rotor speed is much reduced.`,
      k: [`Curtis: whole drop in first nozzles`, `Fixed guide blades only redirect the steam`, `KE absorbed in successive moving rows`, `Steam leaves the last row slowly, axially`],
      tv: `<p><b>Primary methods of compounding:</b> 1. velocity compounding, 2. pressure compounding, 3. pressure and velocity compounding.</p>
 <p><b>1. Velocity compounding (Curtis stage / turbine)</b></p>
 <ul><li><b>Arrangement:</b> stationary nozzles fitted to the casing, followed by alternating rows of moving blades and fixed guide blades.</li>
 <li><b>Function of the fixed blades:</b> directs steam from one moving row to the next without any appreciable change in velocity or pressure.</li>
 <li><b>Expansion and energy conversion:</b> the whole pressure drop occurs in the first set of stationary nozzles; the resulting high kinetic energy is absorbed successively across several moving rows.</li>
 <li><b>Outcome:</b> steam exits axially from the final row with very low velocity, significantly reducing the turbine rotor speed.</li></ul>`},

    23: {i: 2,
      s: `A figure of a velocity-compounded impulse turbine: one nozzle ring, then moving, fixed and moving rows, with the pressure and velocity curves below.`,
      d: `Read the curves: pressure drops only across the nozzle and is then flat all the way; velocity jumps up in the nozzle, falls in the first moving row, stays nearly the same in the fixed row (only the direction changes), then falls again in the second moving row to a low exit value.`,
      k: [`Pressure: one drop (nozzle), then flat`, `Velocity: up in the nozzle, down in steps`]},

    24: {i: 3,
      s: `In pressure compounding (Rateau) the pressure drop is shared among a series of simple impulse stages. Each stage has its own nozzle and moving blades, so each jet is slower and the blade speed can be lower.`,
      d: `<b>Definition:</b> several simple impulse stages (one nozzle row and one moving row each) in series on a common shaft. <b>Working:</b> the total pressure drop is divided between all the stages; the fixed rows between the stages act as nozzles. <b>In each stage:</b> the steam partly expands in the nozzle (pressure energy → kinetic energy); the moving blades take the kinetic energy at constant stage pressure; the steam, still at a higher pressure than the condenser, goes to the next nozzles. The cycle repeats until the steam leaves axially at condenser pressure. <b>Advantage:</b> small pressure drop per stage → low steam velocity → lower blade speed and safer rotational speed.`,
      k: [`Rateau: pressure drop shared among stages`, `Each stage = nozzle row + moving row`, `Moving blades work at constant stage pressure`, `Low velocity per stage → low blade speed`],
      t: `Pressure compounding, a velocity-compounding comparison, and pressure-velocity compounding are repeated 5-mark questions.`},

    25: {i: 2,
      s: `A figure of a pressure-compounded impulse turbine: the pressure falls in steps at each nozzle row, while the velocity rises and falls in a saw-tooth pattern.`,
      d: `The pressure curve is a staircase: each stage drops a share of the total pressure in its nozzle and is flat over its moving blades. The velocity curve rises in each nozzle and falls over each moving row, and its peak is low compared with a single-stage turbine.`,
      k: [`Pressure: staircase`, `Velocity: saw-tooth, low peaks`]},

    26: {i: 2,
      s: `Pressure-velocity compounding puts two or more velocity-compounded (Curtis) wheels in series. It is compact and simple but has lower efficiency.`,
      d: `<b>Concept:</b> several velocity-compounded stages in series (for example two stages, each a two-row velocity-compounded wheel). <b>Characteristics:</b> simple and compact construction, but a lower overall efficiency limits its use. <b>Stage I:</b> boiler steam drops part of its pressure in the first nozzles; the kinetic energy is absorbed in two steps by two moving rows with a fixed guide row between them. <b>Stage II:</b> intermediate-pressure steam goes to the second nozzle ring, the rest of the pressure drop occurs there and the kinetic energy is taken by the next two moving rows. <b>Exit:</b> steam leaves axially at condenser pressure with little kinetic energy lost.`,
      k: [`Two (or more) Curtis wheels in series`, `Compact, simple, lower efficiency`, `Pressure drops in steps; KE absorbed in two rows per stage`]},

    27: {i: 2,
      s: `A figure of a pressure- and velocity-compounded impulse turbine: two Curtis wheels, each with its own nozzle ring.`,
      d: `Pressure falls in steps (one at each nozzle ring) and is flat over the blade rows; velocity peaks in each nozzle ring and then falls in two steps across the two moving rows of that wheel.`,
      k: [`Pressure: two steps`, `Velocity: two peaks, each absorbed in two moving rows`]},

    28: {i: 3,
      s: `The De Laval turbine is the simplest impulse turbine: all the expansion in one nozzle, a jet that strikes the wheel blades, and a constant pressure in the wheel chamber.`,
      d: `<b>Mechanism:</b> steam expands completely, boiler pressure to condenser pressure, within a single set of stationary nozzles. <b>Pressure:</b> it falls entirely in the nozzles; the pressure in the wheel chamber is constant. <b>Energy conversion:</b> the nozzles make a high-velocity jet that strikes the rotor blades; the blades change the direction (momentum) of the steam without changing its pressure, so the kinetic energy of the jet becomes mechanical work on the wheel.`,
      k: [`De Laval = simple impulse (one nozzle set, one wheel)`, `Full expansion in the nozzle`, `Wheel chamber at constant pressure`, `Blades change direction, not pressure`]},

    29: {i: 1,
      s: `A schematic of the De Laval turbine to picture the concept.`,
      d: `This figure is a schematic for understanding the idea only. Use the textbook figure for examination answers; the key features to draw are the convergent-divergent nozzle, the jet striking the blades on the wheel, and the exhaust.`,
      k: [`Convergent-divergent nozzle`, `Jet on the wheel blades`, `Exhaust to the condenser`]},

    30: {i: 3,
      s: `To analyse a simple impulse stage we assume the pressure is constant over the moving blades (so R = 0), and that friction in the blade passage only reduces the relative velocity by the factor K.`,
      d: `<b>Constant pressure over the moving blades:</b> the whole pressure drop is in the nozzles; p<sub>1</sub> = p<sub>2</sub> across the blades.<br><b>Zero degree of reaction:</b> since there is no pressure drop in the blades, R = 0.<br><b>Constant relative velocity:</b> ideally, in a frictionless impulse stage, V<sub>r1</sub> = V<sub>r2</sub>. In practice blade-surface friction is covered by the blade velocity coefficient K, so V<sub>r2</sub> = K V<sub>r1</sub> with K slightly below 1.`,
      k: [`p<sub>1</sub> = p<sub>2</sub> over the blades`, `R = 0`, `Ideal: V<sub>r2</sub> = V<sub>r1</sub>; actual: V<sub>r2</sub> = K V<sub>r1</sub>`],
      tv: `<ul><li><b>Constant pressure across the moving blades:</b> the entire pressure drop occurs in the stationary nozzles; the pressure remains constant over the moving blades (p<sub>1</sub> = p<sub>2</sub>).</li>
 <li><b>Zero degree of reaction:</b> because no pressure drop occurs across the moving blades, R = 0.</li>
 <li><b>Constant relative velocity (ideal versus practical):</b> <i>ideal</i> – in a frictionless impulse stage, the relative velocity of steam is unchanged (V<sub>r2</sub> = V<sub>r1</sub>); <i>practical</i> – blade-surface friction is accounted for by the blade velocity coefficient K, so V<sub>r2</sub> = K V<sub>r1</sub>.</li></ul>`},

    31: {i: 3,
      s: `Two more assumptions: the axial (flow) velocity stays the same through the blades so that there is no axial thrust, and the blades are symmetrical, with equal inlet and outlet angles (β<sub>1</sub> = β<sub>2</sub>).`,
      d: `<b>Constant axial flow velocity:</b> V<sub>f1</sub> = V<sub>f2</sub>; the axial thrust, which comes from a change in axial momentum, is zero. <b>Symmetrical blade profile:</b> to get the best efficiency from a simple impulse stage without axial thrust, the moving blades are taken as symmetrical: the inlet and outlet blade angles are equal (β<sub>1</sub> = β<sub>2</sub>), the equiangular condition.`,
      k: [`V<sub>f1</sub> = V<sub>f2</sub> → no axial thrust`, `Equiangular: β<sub>1</sub> = β<sub>2</sub>`],
      tv: `<ul><li><b>Constant axial flow velocity:</b> to prevent axial thrust along the rotor shaft, the axial flow velocity (the component of the velocity along the shaft) is assumed constant: V<sub>f1</sub> = V<sub>f2</sub>.</li>
 <li><b>Symmetrical blade profiling:</b> to maximise efficiency in a simple impulse stage without inducing thrust, the moving blades are assumed symmetrical: the inlet and outlet blade angles are identical (β<sub>1</sub> = β<sub>2</sub>).</li></ul>`},

    32: {i: 3,
      s: `The names for the velocities in a turbine blade: V for the steam's own speed, V<sub>r</sub> for its speed relative to the moving blade, V<sub>w</sub> for the sideways (whirl) part, V<sub>f</sub> for the flow part, and u for the blade speed.`,
      d: `<b>V<sub>1</sub></b> absolute velocity at entry to the moving blade (the steam velocity leaving the nozzle); <b>V<sub>2</sub></b> absolute velocity at exit. <b>V<sub>r1</sub>, V<sub>r2</sub></b> velocity of the steam relative to the moving blade at entry and exit. <b>V<sub>w1</sub>, V<sub>w2</sub></b> tangential components (whirl) at entry and exit. <b>V<sub>f1</sub>, V<sub>f2</sub></b> flow velocity at entry and exit: axial for an axial turbine, radial for a radial turbine. <b>u</b> circumferential (tangential) velocity of the blade.`,
      k: [`V, V<sub>r</sub>: absolute and relative`, `V<sub>w</sub>: whirl; V<sub>f</sub>: flow`, `u: blade speed`],
      tv: `<table><tr><th>Symbol</th><th>Meaning</th></tr>
 <tr><td>V<sub>1</sub></td><td>Absolute velocity at the inlet of the moving blade, i.e. the steam velocity at the outlet from the nozzles</td></tr>
 <tr><td>V<sub>2</sub></td><td>Absolute velocity at the outlet of the moving blade</td></tr>
 <tr><td>V<sub>r1</sub>, V<sub>r2</sub></td><td>Velocity of the steam relative to the moving blade at entrance and at exit</td></tr>
 <tr><td>V<sub>w1</sub>, V<sub>w2</sub></td><td>Tangential component of the absolute velocity (velocity of whirl) at entrance and at outlet</td></tr>
 <tr><td>V<sub>f1</sub>, V<sub>f2</sub></td><td>Velocity of flow at entry and exit: radial for a radial turbine, axial for an axial turbine</td></tr>
 <tr><td>u</td><td>Circumferential or tangential velocity of the blade</td></tr></table>`},

    33: {i: 3,
      s: `The angles and other quantities used in the formulas: α for the nozzle angle, β for the blade angles, K for the blade velocity coefficient, and the speed ratio ρ = u/V<sub>1</sub>.`,
      d: `<b>α<sub>1</sub></b> angle of V<sub>1</sub> with the plane of the moving blades (the nozzle or jet angle). <b>α<sub>2</sub></b> angle of V<sub>2</sub> with the plane of the moving blades. <b>β<sub>1</sub>, β<sub>2</sub></b> blade angles at inlet and exit. <b>m<sub>s</sub></b> steam mass flow rate (kg/s). <b>d</b> mean diameter of the blade drum, <b>h</b> blade height. <b>ρ (the slide's r)</b> speed ratio u/V<sub>1</sub>. <b>g<sub>c</sub></b> = 1 kg·m/(N·s²). <b>K</b> blade velocity coefficient = V<sub>r2</sub>/V<sub>r1</sub>.`,
      k: [`α: nozzle angle; β: blade angles`, `K = V<sub>r2</sub>/V<sub>r1</sub>`, `Speed ratio ρ = u/V<sub>1</sub>`, `g<sub>c</sub> = 1 kg·m/(N·s²)`],
      tv: `<ul><li><b>α<sub>1</sub>:</b> angle made by the absolute velocity V<sub>1</sub> with the plane of the moving blades (nozzle or jet angle).</li>
 <li><b>α<sub>2</sub>:</b> angle made by the absolute velocity V<sub>2</sub> with the plane of the moving blades.</li>
 <li><b>β<sub>1</sub>, β<sub>2</sub>:</b> blade angle at inlet and at exit of the rotor.</li>
 <li><b>m<sub>s</sub>:</b> mass flow rate of steam, kg/s. <b>d:</b> mean diameter of the blade drum. <b>h:</b> blade height.</li>
 <li><b>Speed ratio</b> ρ = u/V<sub>1</sub> (written r on the slide). <b>g<sub>c</sub></b> = 1 kg·m/(N·s²).</li>
 <li><b>K:</b> blade velocity coefficient = V<sub>r2</sub>/V<sub>r1</sub>.</li></ul>`},

    34: {i: 3,
      s: `The inlet and outlet velocity triangles of an axial impulse stage, drawn with the nozzle angle α<sub>1</sub> and the equal blade angles β<sub>1</sub> = β<sub>2</sub>.`,
      d: `<b>Inlet triangle:</b> V<sub>1</sub> at α<sub>1</sub> to the blade motion; subtract u to get V<sub>r1</sub> at β<sub>1</sub>; V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>, V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub>. <b>Outlet triangle:</b> V<sub>r2</sub> = K V<sub>r1</sub> at β<sub>2</sub>; adding u (vector) gives V<sub>2</sub> at α<sub>2</sub>; V<sub>w2</sub> = V<sub>r2</sub>cos β<sub>2</sub> − u. Mind the direction of V<sub>w2</sub>: if it points against the blade motion the two whirls <i>add</i> in ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub>.`,
      k: [`V<sub>w1</sub> = V<sub>1</sub>cos α<sub>1</sub>, V<sub>f1</sub> = V<sub>1</sub>sin α<sub>1</sub>`, `V<sub>r2</sub> = K V<sub>r1</sub>, β<sub>2</sub> = β<sub>1</sub>`, `ΔV<sub>w</sub> = V<sub>w1</sub> + V<sub>w2</sub> (opposed whirls)`],
      t: `Reproduce this figure first in every impulse-stage numerical; the rest of the working follows from it.`},

    35: {i: 3,
      s: `The two triangles drawn back to back on the same base u give the combined velocity diagram, from which the whirl velocities and the change in whirl can be measured directly.`,
      d: `Put the inlet and outlet triangles on a common blade-speed line. The horizontal projections give V<sub>w1</sub> and V<sub>w2</sub>; their sum is the change of whirl ΔV<sub>w</sub> that appears in the work equation W = u ΔV<sub>w</sub>. The vertical heights give V<sub>f1</sub> and V<sub>f2</sub>, whose difference gives the axial thrust. You can also open the <b>Velocity triangle assembly</b> and <b>Turbograph</b> tools to see this being built.`,
      k: [`Combined diagram: common base u`, `ΔV<sub>w</sub> from horizontal projections`, `Axial thrust from the V<sub>f</sub> difference`],
      t: `In examinations, draw the combined diagram: it earns the marks for both triangles at once.`}
  });
})();
