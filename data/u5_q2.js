/* Unit V pilot: games, numericals, derivations, practice questions, videos, mind map (DRAFT, teacher to verify) */
Object.assign(MTM.c.u5, {
/* match: [topic, instruction, [[left,right],...], slide, explanation] */
match:[
['5.7.1',`Match each propulsion code with its meaning.`,[[`CODOG`,`Diesel or gas turbine`],[`CODAG`,`Diesel and gas turbine together`],[`COGAG`,`Gas turbine and gas turbine`],[`COGOG`,`Gas turbine or gas turbine`],[`COGES`,`Gas turbine, electric and steam`]],57,`A = and (together), O = or (one at a time).`],
['5.2.2',`Match each combustion zone with its job.`,[[`Primary (15–20 %)`,`Near-stoichiometric burning, flame held by swirl or baffle`],[`Secondary (about 30 %)`,`Completes the burning`],[`Tertiary / dilution (about 50 %)`,`Cools the gas to turbine inlet temperature`]],27,`Air is added in stages so the flame is not chilled.`],
['5.4.2',`Match each blade cooling method with how it works.`,[[`Film cooling`,`Small surface holes give a thin insulating film of air`],[`Transpiration`,`Air seeps through a porous wall`],[`Convection`,`Air flows in passages from root to tip`],[`Impingement`,`Jets strike the inside of the leading and trailing edges`]],45,`Film and transpiration are external; convection and impingement are internal.`],
['5.5.2',`Match each starting method with its feature.`,[[`Electric`,`Motor through a reduction gear and clutch`],[`Air starter motor`,`Needs an air receiver and compressor`],[`Hydraulic`,`Pump and accumulator drive a hydraulic motor`],[`Cartridge`,`Burning charge; military aircraft only`]],50,`Only the electric and air methods are described in the books.`],
['5.3.5',`Match each blade root with its fixing feature.`,[[`Bulb root`,`Held by steel pins, end movement stopped by swaging`],[`Tee / double tee`,`Slides into a T-slot, locked by a wedge`],[`Anchor pin`,`Pin through wheel and root, secured by a nut`],[`Fir tree`,`Tapered, distributed contact; most gas turbines today`],[`Grub screw`,`Dovetail root secured by screws against end movement`]],42,`The fir tree is the common one for gas turbines.`],
['5.2.4',`Match each chamber type with its description.`,[[`Tubular (can)`,`Easy to replace; pressure loss factor about 35`],[`Turbo-annular`,`Cans inside a common annular casing; about 25`],[`Annular`,`Compact, least pressure loss; about 18`],[`Single large chamber`,`Heavy industrial plant, long life`]],32,`Cans suit centrifugal compressors; annular suits axial compressors.`],
['5.4.1',`Match each blade material with its temperature capability or note.`,[[`Steel`,`Moderate: compressor and cool stages`],[`Titanium alloy`,`Up to about 550 °C; half the density of steel`],[`Nickel-base alloy`,`Up to about 925 °C; chromium oxide layer`],[`Ceramic`,`Brittle; not used for blades`]],43,`Nickel alloys are the main choice for hot turbine blades.`],
['5.7.1',`Match each marine engine with its key fact.`,[[`LM2500`,`16-stage compressor, p<sub>R</sub> 18:1`],[`GT35 (SGT-500)`,`17 300 kW, 33 %`],[`WR-21`,`ICR engine, about 205 g/kWh`],[`MT30`,`Up to 36 000 kW from a 25 t package`],[`Marine Spey`,`Royal Navy since 1985; 65.5 kg/s at 480 °C exhaust`]],56,`These engines are examples from Pounder, Ch. 27.`],
['5.8.2',`Match each reversing method with how it works.`,[[`Reversing water jet`,`Jet direction is reversed, engine unchanged`],[`Controllable-pitch propeller`,`Blade pitch is reversed`],[`Reversing gear`,`Clutches and an extra gear train`],[`Electric drive`,`The propulsion motor is reversed`]],68,`The gas turbine itself never reverses.`]
],
/* order: [topic, instruction, [items in correct order], slide, explanation] */
order:[
['5.1.1',`Put the processes of the ideal gas turbine cycle in order.`,[`Compression (1–2)`,`Heat addition at constant pressure (2–3)`,`Expansion in the turbine (3–4)`,`Heat rejection at constant pressure (4–1)`],3,`C-C-T-E: Compress, Combust, Turbine, Exhaust.`],
['5.5.1',`Arrange the starting sequence.`,[`Starter accelerates the compressor`,`Ignition on and fuel fed to the burners`,`Flame lights round from can to can`,`Starter disengaged by clutch or cut-out`,`Igniters switched off; combustion self-sustaining`],49,`Starter must stay engaged until the turbine produces more power than the compressor needs.`],
['5.7.6',`Arrange the lubricating oil circuit.`,[`Oil tank`,`Pressure pump`,`Filter`,`Oil cooler`,`Bearings, gears and drives`,`Scavenge pumps`,`De-aerator and breather`],66,`The oil returns to the tank after the scavenge pumps.`],
['5.8.4',`Arrange the fuel system chain.`,[`Fuel tank`,`Filter`,`HP fuel pump`,`Throttle valve (fuel control)`,`Manifold`,`Injectors`],70,`The valve sets the pressure and the pressure sets the flow.`],
['5.7.2',`Arrange the three-stage marine intake filter.`,[`Vane separator (large droplets)`,`Coalescer / dust filter (small droplets and salt)`,`Second vane separator (re-entrained liquid)`],60,`Salt-laden water would damage the compressor.`],
['5.1.3',`Arrange the air path of a marine gas turbine.`,[`Air intake and filter`,`Compressor`,`Combustion chamber`,`Compressor (HP) turbine`,`Power turbine`,`Exhaust volute and uptake`],23,`The power turbine takes the energy left after the HP turbine.`],
['5.2.2',`Arrange the combustion chamber zones from the flame front to the turbine.`,[`Primary zone (burning)`,`Secondary zone (completes burning)`,`Tertiary / dilution zone (cooling)`],27,`15–20 % → about 30 % → about 50 % of the air.`],
['5.1.2',`Arrange the marine gas turbine efficiency milestones in time order, earliest first.`,[`1960: about 25 %`,`1970s: near 35 %`,`Today: over 40 % (large simple-cycle units)`],18,`Efficiency has risen steadily, yet below about 5 MW gas turbines are still less efficient than diesels.`]
],
/* numericals */
num:[
{id:'N1',topic:'5.1.1',marks:8,title:`Simple Brayton cycle: work and efficiency`,
 q:`A simple ideal gas turbine takes in air at 288 K with a pressure ratio of 8. The maximum cycle temperature is 1200 K. Take γ = 1.4 and c<sub>p</sub> = 1.005 kJ/kg K. Find the compressor work, turbine work, net work, heat supplied and thermal efficiency per kg of air.`,
 given:[`p<sub>R</sub> = 8`,`T<sub>1</sub> = 288 K`,`T<sub>3</sub> = 1200 K`,`γ = 1.4`,`c<sub>p</sub> = 1.005 kJ/kg K`],
 find:`W<sub>C</sub>, W<sub>T</sub>, W<sub>N</sub>, Q, η`,
 steps:[
 {h:`Step 1: temperature ratio x`,b:`For an isentropic process T<sub>2</sub>/T<sub>1</sub> = p<sub>R</sub><sup>(γ−1)/γ</sup>. Here (γ−1)/γ = 0.4/1.4 = 0.2857, so x = 8<sup>0.2857</sup> = <b>1.811</b>.<br><i>Why:</i> an isentropic compression follows pV<sup>γ</sup> = constant, which links temperature to pressure by this power.`},
 {h:`Step 2: compressor outlet temperature T<sub>2</sub>`,b:`T<sub>2</sub> = T<sub>1</sub>x = 288 × 1.811 = <b>521.7 K</b>.`},
 {h:`Step 3: turbine outlet temperature T<sub>4</sub>`,b:`The turbine expansion ratio is the same as the compression ratio (no pressure loss), so T<sub>3</sub>/T<sub>4</sub> = x. T<sub>4</sub> = 1200/1.811 = <b>662.5 K</b>.`},
 {h:`Step 4: work and heat per kg`,b:`W<sub>C</sub> = c<sub>p</sub>(T<sub>2</sub> − T<sub>1</sub>) = 1.005 × (521.7 − 288) = <b>234.9 kJ/kg</b><br>W<sub>T</sub> = c<sub>p</sub>(T<sub>3</sub> − T<sub>4</sub>) = 1.005 × (1200 − 662.5) = <b>540.2 kJ/kg</b><br>W<sub>N</sub> = W<sub>T</sub> − W<sub>C</sub> = <b>305.4 kJ/kg</b><br>Q = c<sub>p</sub>(T<sub>3</sub> − T<sub>2</sub>) = 1.005 × (1200 − 521.7) = <b>681.7 kJ/kg</b>`},
 {h:`Step 5: thermal efficiency`,b:`η = W<sub>N</sub>/Q = 305.4/681.7 = <b>44.8 %</b>.<br><i>Check with Eq. 5.12:</i> η = 1 − 1/x = 1 − 1/1.811 = 0.448 ✓.`},
 {h:`Step 6: a useful extra check`,b:`The back work ratio W<sub>C</sub>/W<sub>T</sub> = 234.9/540.2 = 43.5 %. More than 40 % of the turbine work is used just to drive the compressor, which is typical of gas turbines.`}],
 ans:`W<sub>C</sub> = 234.9, W<sub>T</sub> = 540.2, W<sub>N</sub> = 305.4 kJ/kg; Q = 681.7 kJ/kg; η = 44.8 %`,slides:[4],tool:'brayton'},
{id:'N2',topic:'5.1.1',marks:6,title:`Pressure ratio for maximum specific work`,
 q:`For an ideal simple gas turbine with T<sub>1</sub> = 288 K and T<sub>3</sub> = 1152 K (γ = 1.4, c<sub>p</sub> = 1.005), find the pressure ratio for maximum net work, the maximum net work and the efficiency at that point.`,
 given:[`T<sub>1</sub> = 288 K`,`T<sub>3</sub> = 1152 K`,`γ = 1.4`,`c<sub>p</sub> = 1.005 kJ/kg K`],find:`p<sub>R</sub>, W<sub>N,max</sub>, η`,
 steps:[
 {h:`Step 1: t`,b:`t = T<sub>3</sub>/T<sub>1</sub> = 1152/288 = <b>4</b>.`},
 {h:`Step 2: condition for maximum work`,b:`From Eq. 5.13, p<sub>R</sub><sup>(γ−1)/γ</sup> = √t. So x = √4 = <b>2</b>.<br><i>Why:</i> W<sub>N</sub>/(c<sub>p</sub>T<sub>1</sub>) = t(1 − 1/x) − (x − 1). Differentiating with respect to x gives t/x² − 1 = 0, so x² = t.`},
 {h:`Step 3: pressure ratio`,b:`p<sub>R</sub> = x<sup>γ/(γ−1)</sup> = 2<sup>3.5</sup> = <b>11.31</b>.`},
 {h:`Step 4: maximum net work`,b:`W<sub>N,max</sub> = c<sub>p</sub>T<sub>1</sub>[t(1 − 1/x) − (x − 1)] = 1.005 × 288 × [4 × 0.5 − 1] = <b>289.4 kJ/kg</b>.`},
 {h:`Step 5: efficiency at this point`,b:`η = 1 − 1/x = 1 − 1/2 = <b>50 %</b>.<br>At this point T<sub>2</sub> = 288 × 2 = 576 K and T<sub>4</sub> = 1152/2 = 576 K, so T<sub>2</sub> = T<sub>4</sub> ✓.`}],
 ans:`p<sub>R</sub> = 11.31; W<sub>N,max</sub> = 289.4 kJ/kg; η = 50 %`,slides:[5],tool:'brayton'},
{id:'N3',topic:'5.1.1',marks:8,title:`Effect of an ideal heat exchanger`,
 q:`Using the data of N1 (p<sub>R</sub> = 8, T<sub>1</sub> = 288 K, T<sub>3</sub> = 1200 K), an ideal heat exchanger is added. Find the new efficiency and the percentage saving of heat input. Then find the pressure ratio above which a heat exchanger gives no benefit.`,
 given:[`p<sub>R</sub> = 8, T<sub>1</sub> = 288 K, T<sub>3</sub> = 1200 K`,`T<sub>2</sub> = 521.7 K, T<sub>4</sub> = 662.5 K (from N1)`],find:`η, saving, limiting p<sub>R</sub>`,
 steps:[
 {h:`Step 1: is a heat exchanger useful here?`,b:`Check T<sub>4</sub> > T<sub>2</sub>: 662.5 K > 521.7 K ✓. Exhaust gas is hotter than the compressor air, so it can heat it.`},
 {h:`Step 2: ideal heat exchanger efficiency`,b:`t = 1200/288 = 4.167. η = 1 − x/t = 1 − 1.811/4.167 = <b>56.5 %</b> (Eq. 5.19).<br>Compare: simple cycle was 44.8 %.`},
 {h:`Step 3: heat input saved`,b:`With an ideal exchanger T<sub>5</sub> = T<sub>4</sub>, so Q′ = c<sub>p</sub>(T<sub>3</sub> − T<sub>4</sub>) = 1.005 × (1200 − 662.5) = 540.2 kJ/kg. Without it Q = 681.7 kJ/kg.<br>Saving = (681.7 − 540.2)/681.7 = <b>20.8 %</b>. The work output is unchanged at 305.4 kJ/kg.`},
 {h:`Step 4: limiting pressure ratio`,b:`The heat exchanger stops helping when T<sub>2</sub> = T<sub>4</sub>, i.e. x = √t = √4.167 = 2.041. p<sub>R</sub> = 2.041<sup>3.5</sup> = <b>12.15</b>.<br>Above this p<sub>R</sub> the compressor air is hotter than the exhaust. For example at p<sub>R</sub> = 16, T<sub>2</sub> = 636 K but T<sub>4</sub> = 543 K, so a heat exchanger would cool the air.`}],
 ans:`η = 56.5 %; heat saving = 20.8 %; limiting p<sub>R</sub> = 12.15`,slides:[8,9],tool:'brayton'},
{id:'N4',topic:'5.2.2',marks:5,title:`Apportioning the air in a combustion chamber`,
 q:`A combustion chamber receives 40 kg/s of air and burns fuel at an overall air–fuel ratio of 80:1. Primary air is 18 % and secondary air is 30 %. Find the fuel flow, the air in each zone and the primary-zone air–fuel ratio. Comment on the result.`,
 given:[`ṁ<sub>air</sub> = 40 kg/s`,`Overall AFR = 80:1`,`Primary 18 %, secondary 30 %`],find:`ṁ<sub>f</sub>, zone air, primary AFR`,
 steps:[
 {h:`Step 1: fuel flow`,b:`ṁ<sub>f</sub> = ṁ<sub>air</sub>/AFR = 40/80 = <b>0.5 kg/s</b>.`},
 {h:`Step 2: zone airflows`,b:`Primary = 0.18 × 40 = <b>7.2 kg/s</b>. Secondary = 0.30 × 40 = <b>12.0 kg/s</b>. Tertiary (the rest) = 40 − 7.2 − 12 = <b>20.8 kg/s</b> (52 %).`},
 {h:`Step 3: primary-zone air–fuel ratio`,b:`AFR<sub>primary</sub> = 7.2/0.5 = <b>14.4:1</b>.`},
 {h:`Step 4: comment`,b:`Complete burning needs about 15:1 (stoichiometric). 14.4:1 is very close, so the primary zone burns almost stoichiometrically, as the slides say. The remaining air is added later to complete the burning and to cool the gas to the turbine inlet temperature.`}],
 ans:`ṁ<sub>f</sub> = 0.5 kg/s; 7.2, 12.0, 20.8 kg/s; primary AFR = 14.4:1`,slides:[26,27]},
{id:'N5',topic:'5.7.4',marks:4,title:`Part-load operation: propeller law`,
 q:`A ship's gas turbine produces 25 000 kW at full speed. Assuming propeller power P ∝ n³, find the power at 80 %, 70 % and 50 % of full propeller speed.`,
 given:[`P<sub>max</sub> = 25 000 kW`,`P ∝ n³`],find:`Power at 80 %, 70 %, 50 % speed`,
 steps:[
 {h:`Step 1: the law`,b:`P/P<sub>max</sub> = (n/n<sub>max</sub>)³. The cube law comes from the fact that the water resistance rises with speed squared and power is force times speed.`},
 {h:`Step 2: 80 % speed`,b:`(0.8)³ = 0.512, so P = 0.512 × 25 000 = <b>12 800 kW</b>.`},
 {h:`Step 3: 70 % speed`,b:`(0.7)³ = 0.343, so P = <b>8 575 kW</b> (34.3 % of full power).`},
 {h:`Step 4: 50 % speed`,b:`(0.5)³ = 0.125, so P = <b>3 125 kW</b> (12.5 %).`},
 {h:`Step 5: what it means`,b:`A ship at 70 % speed uses only about a third of full power, which is where a simple-cycle gas turbine has a high sfc (5.1.2). This is why CODOG, CODAG or an ICR cycle is used.`}],
 ans:`12 800 kW, 8 575 kW, 3 125 kW`,slides:[63,18]},
{id:'N6',topic:'5.8.1',marks:4,title:`Reduction gear ratio`,
 q:`A power turbine runs at 3300 rev/min and the propeller at 150 rev/min. Find the gear ratio. If a double-reduction gear has two equal stages, find the ratio of each stage.`,
 given:[`N<sub>PT</sub> = 3300 rpm`,`N<sub>prop</sub> = 150 rpm`],find:`i, stage ratio`,
 steps:[
 {h:`Step 1: overall ratio`,b:`i = N<sub>PT</sub>/N<sub>prop</sub> = 3300/150 = <b>22</b>.`},
 {h:`Step 2: two equal stages`,b:`i = i<sub>1</sub> × i<sub>2</sub> = i<sub>1</sub>², so i<sub>1</sub> = √22 = <b>4.69</b> per stage.<br>For the Marine Spey (5000 rpm) at a propeller speed of 120 rpm, the ratio would be 41.7.`}],
 ans:`i = 22; each stage 4.69`,slides:[67]},
{id:'N7',topic:'5.7.3',marks:4,title:`Duct pressure loss`,
 q:`An exhaust duct of diameter 1.2 m is replaced by one of 1.5 m for the same mass flow. By what percentage does the pressure loss change? (Δp ∝ 1/d⁴)`,
 given:[`d<sub>1</sub> = 1.2 m`,`d<sub>2</sub> = 1.5 m`,`Δp ∝ 1/d⁴`],find:`Change in Δp`,
 steps:[
 {h:`Step 1: ratio`,b:`Δp<sub>2</sub>/Δp<sub>1</sub> = (d<sub>1</sub>/d<sub>2</sub>)⁴ = (1.2/1.5)⁴ = 0.8⁴ = <b>0.4096</b>.<br><i>Why 1/d⁴:</i> Δp ∝ ṁ²/(A²ρ) and the area A ∝ d², so Δp ∝ 1/d⁴.`},
 {h:`Step 2: percentage`,b:`The loss falls to 41 % of the old value, a <b>59 % reduction</b>. A modest increase in diameter has a large effect on losses.`}],
 ans:`Pressure loss falls by 59 %`,slides:[62]},
{id:'N8',topic:'5.8.4',marks:4,title:`Injector flow range`,
 q:`A swirl injector follows ṁ<sub>f</sub> ∝ √p. If the engine needs a 5 : 1 range of fuel flow, find the pressure range needed. If 6 MPa gives full flow, what pressure gives 20 % flow?`,
 given:[`ṁ<sub>f</sub> ∝ √p`,`Flow range 5:1`,`p<sub>full</sub> = 6 MPa`],find:`Pressure ratio and p at 20 %`,
 steps:[
 {h:`Step 1: pressure ratio`,b:`ṁ<sub>f</sub> ∝ √p, so p ∝ ṁ<sub>f</sub>². For a 5:1 flow range, p<sub>max</sub>/p<sub>min</sub> = 5² = <b>25</b>.`},
 {h:`Step 2: pressure at 20 % flow`,b:`p<sub>20</sub> = 6/25 = <b>0.24 MPa</b>.<br>At such a low pressure the spray quality is poor, which is why a duplex burner opens a second port at a set pressure to widen the range.`}],
 ans:`Pressure range 25 : 1; 0.24 MPa`,slides:[33,70]},
{id:'N9',topic:'5.1.2',marks:4,title:`Gas constant of working gases`,
 q:`Using R = c<sub>p</sub>(γ − 1)/γ, find R for argon (c<sub>p</sub> = 0.515, γ = 1.66), helium (5.191, 1.66) and hydrogen (14.186, 1.408), all c<sub>p</sub> in kJ/kg K.`,
 given:[`R = c<sub>p</sub>(γ − 1)/γ`],find:`R for Ar, He, H<sub>2</sub>`,
 steps:[
 {h:`Step 1: argon`,b:`R = 0.515 × 0.66/1.66 = <b>0.205 kJ/kg K</b>.`},
 {h:`Step 2: helium`,b:`R = 5.191 × 0.66/1.66 = <b>2.064 kJ/kg K</b>.`},
 {h:`Step 3: hydrogen`,b:`R = 14.186 × 0.408/1.408 = <b>4.111 kJ/kg K</b>.`},
 {h:`Step 4: note`,b:`These match the recomputed values in the slide, which corrects the misprints (0.151, 10.050, 59.934) in Ganesan's Table 4.1.`}],
 ans:`0.205, 2.064, 4.111 kJ/kg K`,slides:[16]},
{id:'N10',topic:'5.1.1',marks:5,title:`Mass flow along the engine`,
 q:`An engine takes in 60 kg/s of air. The overall air–fuel ratio is 80:1, and 2 % of the compressor air is bled for blade cooling and returned to the gas path in the turbine. Find the mass flow at the combustor air inlet, at the combustor exit and at the exhaust.`,
 given:[`ṁ<sub>air</sub> = 60 kg/s`,`AFR = 80:1`,`Bleed = 2 %`],find:`Flow at three sections`,
 steps:[
 {h:`Step 1: fuel`,b:`ṁ<sub>f</sub> = 60/80 = <b>0.75 kg/s</b>.`},
 {h:`Step 2: air entering the chamber`,b:`The bleed (2 % of 60 = 1.2 kg/s) does not pass through the chamber. So chamber air = 60 − 1.2 = <b>58.8 kg/s</b>.`},
 {h:`Step 3: gas leaving the chamber`,b:`58.8 + 0.75 = <b>59.55 kg/s</b>.`},
 {h:`Step 4: exhaust`,b:`The cooling air rejoins in the turbine: 59.55 + 1.2 = <b>60.75 kg/s</b>.<br>Check: air + fuel = 60 + 0.75 = 60.75 ✓. The exhaust flow equals the air flow plus the fuel flow, as slide 7 says.`}],
 ans:`58.8, 59.55 and 60.75 kg/s`,slides:[7]}
],
/* derivations */
der:[
{id:'D1',topic:'5.1.1',title:`Work and efficiency of the simple (Brayton) cycle`,slides:[4],tool:'brayton',
 steps:[
 {h:`Step 1: write the work and heat per kg`,b:`W<sub>C</sub> = c<sub>p</sub>(T<sub>2</sub> − T<sub>1</sub>), W<sub>T</sub> = c<sub>p</sub>(T<sub>3</sub> − T<sub>4</sub>), Q = c<sub>p</sub>(T<sub>3</sub> − T<sub>2</sub>), W<sub>N</sub> = W<sub>T</sub> − W<sub>C</sub>. Each is a constant-pressure or steady-flow energy balance with perfect-gas enthalpy change c<sub>p</sub>ΔT.`},
 {h:`Step 2: use isentropic relations`,b:`T<sub>2</sub>/T<sub>1</sub> = p<sub>R</sub><sup>(γ−1)/γ</sup> = x and T<sub>3</sub>/T<sub>4</sub> = x (same pressure ratio across the turbine, no losses). Also define t = T<sub>3</sub>/T<sub>1</sub>.`},
 {h:`Step 3: express everything with T<sub>1</sub>, x, t`,b:`T<sub>2</sub> = xT<sub>1</sub>, T<sub>3</sub> = tT<sub>1</sub>, T<sub>4</sub> = tT<sub>1</sub>/x. So W<sub>C</sub> = c<sub>p</sub>T<sub>1</sub>(x − 1) and W<sub>T</sub> = c<sub>p</sub>T<sub>1</sub>t(1 − 1/x).`},
 {h:`Step 4: net work (Eq. 5.9)`,b:`W<sub>N</sub>/(c<sub>p</sub>T<sub>1</sub>) = t(1 − 1/x) − (x − 1).`},
 {h:`Step 5: heat supplied`,b:`Q = c<sub>p</sub>(T<sub>3</sub> − T<sub>2</sub>) = c<sub>p</sub>T<sub>1</sub>(t − x).`},
 {h:`Step 6: efficiency (Eq. 5.12)`,b:`η = W<sub>N</sub>/Q = [t(1 − 1/x) − (x − 1)]/(t − x). Expanding (t − x)(x − 1)/x gives t − t/x − x + 1, which is exactly the numerator. So the (t − x) cancels and η = (x − 1)/x = <b>1 − 1/x = 1 − 1/p<sub>R</sub><sup>(γ−1)/γ</sup></b>.`}]},
{id:'D2',topic:'5.1.1',title:`Pressure ratio for maximum specific work`,slides:[5],tool:'brayton',
 steps:[
 {h:`Step 1: start from Eq. 5.9`,b:`W<sub>N</sub>/(c<sub>p</sub>T<sub>1</sub>) = t(1 − 1/x) − (x − 1), where x = p<sub>R</sub><sup>(γ−1)/γ</sup>. For a fixed t (fixed T<sub>1</sub> and T<sub>3</sub>) the work depends only on x.`},
 {h:`Step 2: differentiate`,b:`d/dx [t − t/x − x + 1] = t/x² − 1.`},
 {h:`Step 3: set to zero`,b:`t/x² − 1 = 0, so x² = t and <b>x = √t</b>, that is p<sub>R</sub><sup>(γ−1)/γ</sup> = √t (Eq. 5.13).`},
 {h:`Step 4: meaning`,b:`With x = √t: T<sub>2</sub> = xT<sub>1</sub> = √t T<sub>1</sub> and T<sub>4</sub> = T<sub>3</sub>/x = tT<sub>1</sub>/√t = √t T<sub>1</sub>. So <b>T<sub>2</sub> = T<sub>4</sub></b>.`},
 {h:`Step 5: check it is a maximum`,b:`The second derivative −2t/x³ is negative, so this is a maximum.`}]},
{id:'D3',topic:'5.1.1',title:`Efficiency of the ideal heat-exchange cycle`,slides:[9],tool:'brayton',
 steps:[
 {h:`Step 1: heat input with an ideal heat exchanger`,b:`Ideally T<sub>5</sub> = T<sub>4</sub>, so Q = c<sub>p</sub>(T<sub>3</sub> − T<sub>5</sub>) = c<sub>p</sub>(T<sub>3</sub> − T<sub>4</sub>).`},
 {h:`Step 2: net work is unchanged`,b:`W<sub>N</sub> = c<sub>p</sub>[(T<sub>3</sub> − T<sub>4</sub>) − (T<sub>2</sub> − T<sub>1</sub>)].`},
 {h:`Step 3: efficiency`,b:`η = W<sub>N</sub>/Q = 1 − (T<sub>2</sub> − T<sub>1</sub>)/(T<sub>3</sub> − T<sub>4</sub>).`},
 {h:`Step 4: substitute temperatures`,b:`T<sub>2</sub> − T<sub>1</sub> = T<sub>1</sub>(x − 1) and T<sub>3</sub> − T<sub>4</sub> = T<sub>3</sub>(1 − 1/x) = T<sub>3</sub>(x − 1)/x.`},
 {h:`Step 5: simplify (Eq. 5.19)`,b:`η = 1 − T<sub>1</sub>(x − 1)·x/[T<sub>3</sub>(x − 1)] = <b>1 − x/t = 1 − p<sub>R</sub><sup>(γ−1)/γ</sup>/t</b>.`},
 {h:`Step 6: crossover with the simple cycle`,b:`Set 1 − 1/x = 1 − x/t, so x² = t. Beyond x = √t the heat-exchange cycle is no better, because T<sub>4</sub> < T<sub>2</sub>.`}]},
{id:'D4',topic:'5.1.2',title:`Gas constant from c<sub>p</sub> and γ`,slides:[16],
 steps:[
 {h:`Step 1: start`,b:`For a perfect gas c<sub>p</sub> − c<sub>v</sub> = R and γ = c<sub>p</sub>/c<sub>v</sub>.`},
 {h:`Step 2: eliminate c<sub>v</sub>`,b:`c<sub>v</sub> = c<sub>p</sub>/γ, so R = c<sub>p</sub> − c<sub>p</sub>/γ.`},
 {h:`Step 3: result`,b:`<b>R = c<sub>p</sub>(γ − 1)/γ</b>, which is the relation used to correct Table 4.1.`}]},
{id:'D5',topic:'5.7.3',title:`Duct pressure loss varies as 1/d⁴`,slides:[62],
 steps:[
 {h:`Step 1: continuity`,b:`ṁ = ρAV<sub>f</sub>, so V<sub>f</sub> = ṁ/(ρA).`},
 {h:`Step 2: pressure loss varies with dynamic pressure`,b:`Δp ∝ ρV<sub>f</sub>² (loss is a multiple of the dynamic head ½ρV²).`},
 {h:`Step 3: substitute`,b:`Δp ∝ ρ[ṁ/(ρA)]² = ṁ²/(A²ρ).`},
 {h:`Step 4: circular duct`,b:`A = πd²/4, so A² ∝ d⁴ and <b>Δp ∝ 1/d⁴</b> for a given ṁ and ρ.`}]},
{id:'D6',topic:'5.8.4',title:`Fuel flow through an injector (Eq. 10.3)`,slides:[70],
 steps:[
 {h:`Step 1: pressure to velocity (Bernoulli)`,b:`The injection pressure p becomes the velocity head: p = ½ρV², so V = √(2p/ρ).`},
 {h:`Step 2: mass flow`,b:`ṁ<sub>f</sub> = ρAV = ρA√(2p/ρ) = A√(2ρp).`},
 {h:`Step 3: real nozzle`,b:`Include a discharge coefficient k (friction, contraction): <b>ṁ<sub>f</sub> = kA√(2ρp)</b>. Flow varies as √p.`}]}
],
/* practice questions (NOT previous-year questions): [topic, marks, question, model answer outline (HTML), slides] */
iq:[
['5.1.1',10,`Draw the p–V and T–s diagrams of the ideal gas turbine cycle and derive its thermal efficiency in terms of the pressure ratio.`,`<ul><li>Sketch: 1–2 isentropic compression, 2–3 constant-pressure heating, 3–4 isentropic expansion, 4–1 constant-pressure cooling.</li><li>State the assumptions (perfect gas, constant c<sub>p</sub>, γ, no losses, fuel mass neglected).</li><li>W<sub>C</sub>, W<sub>T</sub>, Q per kg (c<sub>p</sub>ΔT).</li><li>Use x = p<sub>R</sub><sup>(γ−1)/γ</sup> to reach η = 1 − 1/x.</li><li>Comment: η depends on p<sub>R</sub> and γ only.</li></ul>`,[3,4]],
['5.1.1',8,`Show that the net work of the simple cycle is a maximum when p<sub>R</sub><sup>(γ−1)/γ</sup> = √t. State what happens to T<sub>2</sub> and T<sub>4</sub>.`,`<ul><li>Write Eq. 5.9; differentiate with respect to x.</li><li>Set the derivative to zero: x = √t.</li><li>T<sub>2</sub> = T<sub>4</sub> at this condition.</li><li>Comment on higher t giving more work and the blade temperature limit.</li></ul>`,[4,5]],
['5.1.1',10,`Explain the heat-exchange cycle. Derive its efficiency and state when a heat exchanger is beneficial.`,`<ul><li>Layout and T–s diagram with 4–5 and 2–6 lines.</li><li>η = 1 − x/t; work unchanged.</li><li>η rises with t and falls with p<sub>R</sub>.</li><li>Useful only if T<sub>4</sub> > T<sub>2</sub> (low p<sub>R</sub>); crossover at x = √t.</li></ul>`,[8,9]],
['5.1.2',10,`Classify gas turbine cycles. Explain intercooling and reheating and state their effect on the cycle.`,`<ul><li>Bases: open/closed, shaft arrangement, heat exchanger, intercooling and reheating, compounding, combined cycles.</li><li>Intercooling reduces compressor work; reheating raises turbine work.</li><li>Each alone lowers efficiency; they pay with a heat exchanger.</li><li>Cost: complexity and size.</li></ul>`,[10,13]],
['5.1.2',6,`Why is a twin-shaft (free power turbine) gas turbine used for marine propulsion? Compare it with a single-shaft arrangement.`,`<ul><li>Power turbine runs at its own speed, suits variable load.</li><li>Only the gas generator is turned at start; small starting power.</li><li>Single shaft: fixed speed and load (generators).</li></ul>`,[11,38]],
['5.1.2',8,`With a sketch, describe the intercooled-recuperated (ICR) cycle. Why is it suited to ships?`,`<ul><li>Sketch IPC, intercooler, HPC, recuperator, combustor, HPT, IPT, power turbine.</li><li>Intercooler: less compressor work; recuperator: less fuel.</li><li>VAN hold power-turbine entry temperature at part load.</li><li>Flat sfc across the load range; example WR-21 about 205 g/kWh.</li></ul>`,[19,20]],
['5.2.1',6,`State the requirements of a gas turbine combustion chamber and explain why they are difficult to meet.`,`<ul><li>Complete combustion, low pressure loss, no carbon deposit, reliable ignition, controlled outlet temperature, small and durable.</li><li>Air 30–60 m/s vs flame 2–5 m/s.</li><li>Overall AFR 60:1–120:1 vs about 15:1.</li></ul>`,[26]],
['5.2.2',8,`Explain how the airflow is apportioned in a combustion chamber. How is the flame stabilised in the primary zone?`,`<ul><li>Primary 15–20 %, secondary about 30 %, tertiary about 50 %.</li><li>Why staged air addition.</li><li>Recirculation by swirl vanes, baffles, Lucas or G.E. type.</li></ul>`,[27,28,29]],
['5.2.3',6,`Describe the methods of cooling the flame tube.`,`<ul><li>Heating by convection and radiation.</li><li>Film cooling with wiggle strips; hole and splash ring.</li><li>Effusion cooling above about 1500 K.</li></ul>`,[30]],
['5.2.4',6,`Compare tubular, turbo-annular and annular combustion chambers.`,`<ul><li>Advantages, disadvantages and pressure loss factors about 35, 25 and 18.</li><li>Cans suit centrifugal compressors; annular suits axial compressors.</li></ul>`,[31,32]],
['5.3.1',6,`Distinguish between impulse and reaction stages of a gas turbine with sketches of pressure and velocity variation.`,`<ul><li>Impulse: all pressure drop in nozzles. Reaction: in nozzle and rotor.</li><li>Degree of reaction definition; 50 % gives symmetrical blades.</li></ul>`,[35,36]],
['5.3.5',5,`Describe any three methods of fixing blades to the turbine disc.`,`<ul><li>Fir tree (most common), bulb root, tee root, anchor pin, grub screw, welding.</li><li>Sketch and one line each.</li></ul>`,[41,42]],
['5.4.1',6,`What properties are required of a turbine blade material? Explain creep.`,`<ul><li>Strength at temperature, low creep, oxidation, corrosion and fatigue resistance, workability.</li><li>Nickel alloys up to about 925 °C; titanium to about 550 °C.</li><li>Creep: slow stretching under load above about 650–800 °C; blade lengthens and rubs the casing.</li></ul>`,[43,44]],
['5.4.2',10,`Why are gas turbine blades cooled? Describe the methods of blade cooling with sketches.`,`<ul><li>Higher inlet temperature gives more power and efficiency; blades limit.</li><li>Cooling air from the HP compressor, 1–3 % per row.</li><li>External: film, transpiration. Internal: convection, impingement.</li><li>Z factor and multi-pass blades (Tyne, Conway).</li></ul>`,[45,46,47,48]],
['5.5.1',6,`Describe the sequence of starting a gas turbine and the methods of starting.`,`<ul><li>Starter, ignition, light-round, starter off, igniters off.</li><li>Electric, air starter motor, hydraulic, cartridge.</li></ul>`,[49,50,51]],
['5.6.2',6,`Explain the sources of gas turbine noise and the methods of noise suppression on a ship.`,`<ul><li>External jet noise and internal machinery and combustion noise.</li><li>Exhaust velocity, liners, blade design, enclosure, silencers.</li></ul>`,[52,53]],
['5.7.1',6,`List the merits and demerits of gas turbines for ship propulsion.`,`<ul><li>Power-to-weight, low noise, modular, low NOx and SOx, fast start.</li><li>Part-load sfc, distillate fuel, large ducts.</li></ul>`,[54]],
['5.7.1',6,`Explain the terms CODOG, CODAG, COGAG and COGES.`,`<ul><li>Decode the letters; one line on use of each.</li><li>COGES: steam turbine adds 15–18 % efficiency.</li></ul>`,[57,58]],
['5.7.2',5,`Describe the air intake filter of a marine gas turbine.`,`<ul><li>Three stages: vane separator, coalescer, vane separator.</li><li>Why salt is dangerous; low pressure loss when wet.</li></ul>`,[60]],
['5.7.6',5,`Draw the lubrication oil circuit of a marine gas turbine and state the properties of the oil.`,`<ul><li>Tank → pump → filter → cooler → bearings → scavenge pumps → tank.</li><li>Synthetic oil, resists over 200 °C, low coking.</li></ul>`,[66]],
['5.8.2',5,`How is a ship driven by a gas turbine reversed?`,`<ul><li>The turbine cannot reverse.</li><li>Reversing water jets, CPP, reversing gear, electric drive.</li></ul>`,[68]]
],
/* video and extra-resource suggestions. kind: 'yt' = YouTube search link (teacher to replace with a chosen video), 'page' = web page */
vid:[
{topic:'5.1.1',title:`Gas turbine: how it works (animation)`,ch:`Search YouTube: “how a gas turbine works animation”`,kind:'yt',url:`https://www.youtube.com/results?search_query=how+a+gas+turbine+works+animation`,why:`A short animation of compressor, combustor and turbine is the quickest way to see the cycle.`},
{topic:'5.1.1',title:`Animated gas turbine parts (NASA Glenn)`,ch:`NASA Glenn Research Center`,kind:'page',url:`https://www.grc.nasa.gov/WWW/k-12/airplane/Animation/turbpar/enex.html`,why:`Computer animation that pulls an engine apart so you can see how the parts fit.`},
{topic:'5.1.1',title:`Joule or Brayton cycle (NPTEL lecture notes)`,ch:`NPTEL`,kind:'page',url:`https://archive.nptel.ac.in/content/storage2/courses/112104117/chapter_4/4_1a.html`,why:`A clear written derivation of the same efficiency result; good for revising Eq. 5.12.`},
{topic:'5.1.1',title:`Brayton cycle with regeneration`,ch:`Search YouTube: “Brayton cycle regeneration explained”`,kind:'yt',url:`https://www.youtube.com/results?search_query=Brayton+cycle+regeneration+explained`,why:`Helpful when the heat-exchange cycle feels dry.`},
{topic:'5.1.2',title:`Intercooling and reheating in gas turbines`,ch:`Search YouTube: “gas turbine intercooling reheating regeneration”`,kind:'yt',url:`https://www.youtube.com/results?search_query=gas+turbine+intercooling+reheating+regeneration+explained`,why:`Shows where the extra heat exchangers sit in the cycle.`},
{topic:'5.1.2',title:`Marine propulsion: CODOG, CODAG, COGAG`,ch:`Search YouTube: “CODOG CODAG COGAG COGES explained”`,kind:'yt',url:`https://www.youtube.com/results?search_query=CODOG+CODAG+COGAG+COGES+explained+marine+propulsion`,why:`Makes the plant codes easier to remember.`},
{topic:'5.2.2',title:`Combustion chamber types and airflow zones`,ch:`Search YouTube: “gas turbine combustion chamber animation”`,kind:'yt',url:`https://www.youtube.com/results?search_query=gas+turbine+combustion+chamber+animation+primary+secondary+dilution`,why:`Animated view of primary, secondary and dilution air.`},
{topic:'5.2.4',title:`Burner types: can, annular and can-annular (NASA)`,ch:`NASA Glenn Research Center`,kind:'page',url:`https://www.grc.nasa.gov/WWW/K-12/BGP/burner.html`,why:`Short, simple page comparing the three chamber layouts.`},
{topic:'5.4.2',title:`Turbine blade cooling methods`,ch:`Search YouTube: “turbine blade cooling film impingement”`,kind:'yt',url:`https://www.youtube.com/results?search_query=turbine+blade+cooling+film+impingement+convection+explained`,why:`Sketch-based explanations of film, convection and impingement cooling.`},
{topic:'5.4.1',title:`Creep in turbine blades`,ch:`Search YouTube: “creep turbine blade explained”`,kind:'yt',url:`https://www.youtube.com/results?search_query=creep+in+turbine+blades+explained`,why:`A visual explanation of slow stretching at high temperature.`},
{topic:'5.7.1',title:`Marine gas turbines: LM2500 and MT30`,ch:`Search YouTube: “marine gas turbine LM2500 MT30”`,kind:'yt',url:`https://www.youtube.com/results?search_query=marine+gas+turbine+LM2500+MT30+module`,why:`See the real modules discussed in Pounder, Ch. 27.`},
{topic:'5.7.1',title:`COGES: combined gas turbine, electric and steam`,ch:`Search YouTube: “COGES cruise ship gas turbine steam”`,kind:'yt',url:`https://www.youtube.com/results?search_query=COGES+cruise+ship+gas+turbine+steam+turbine+generator`,why:`How exhaust heat becomes steam for electricity.`}
],
/* mind map: t = text, s = slide to open, c = children */
mm:{t:`Gas Turbines`,c:[
 {t:`5.1 Cycles and layouts`,c:[
  {t:`Brayton cycle`,s:3,c:[{t:`η = 1 − 1/x`,s:4},{t:`Max work: x = √t`,s:5},{t:`Mass flow along engine`,s:7}]},
  {t:`Heat exchange`,s:8,c:[{t:`η = 1 − x/t`,s:9},{t:`Needs T4 > T2`,s:9}]},
  {t:`Classification`,s:10,c:[{t:`Single / twin shaft`,s:11},{t:`Series / parallel flow`,s:12},{t:`Intercool / reheat`,s:13},{t:`Twin spool`,s:14},{t:`Closed cycle`,s:15}]},
  {t:`Marine cycles`,s:17,c:[{t:`sfc at part load`,s:18},{t:`ICR cycle`,s:19},{t:`WR-21`,s:20}]},
  {t:`Structure`,s:22,c:[{t:`LM2500`,s:22},{t:`GT35`,s:23},{t:`Components`,s:24},{t:`Exhaust nozzle`,s:25}]}]},
 {t:`5.2 Combustion`,c:[
  {t:`Requirements`,s:26},
  {t:`Airflow zones`,s:27,c:[{t:`Primary 15–20 %`,s:27},{t:`Secondary ~30 %`,s:27},{t:`Tertiary ~50 %`,s:27},{t:`Flame stabilisation`,s:28}]},
  {t:`Liner cooling`,s:30},
  {t:`Chamber types`,s:31,c:[{t:`Tubular`,s:32},{t:`Turbo-annular`,s:32},{t:`Annular`,s:32}]},
  {t:`Fuel injection`,s:33},{t:`Performance`,s:34}]},
 {t:`5.3 Turbine`,c:[
  {t:`Stage`,s:35,c:[{t:`Impulse`,s:36},{t:`Reaction`,s:36}]},
  {t:`Arrangements`,s:37,c:[{t:`Free power turbine`,s:38}]},
  {t:`Nozzle guide vanes`,s:39},{t:`Blades`,s:40},{t:`Root fixings`,s:41,c:[{t:`Fir tree`,s:42}]}]},
 {t:`5.4 Materials and cooling`,c:[
  {t:`Materials`,s:43},{t:`Creep`,s:44},
  {t:`Cooling`,s:45,c:[{t:`Film / transpiration`,s:46},{t:`Convection / impingement`,s:47},{t:`Z factor`,s:48}]}]},
 {t:`5.5 Starting`,c:[{t:`Sequence`,s:49},{t:`Methods`,s:50},{t:`Ignition`,s:51}]},
 {t:`5.6 Noise`,c:[{t:`Sources`,s:52},{t:`Suppression`,s:53}]},
 {t:`5.7 Ship propulsion`,c:[
  {t:`Applications`,s:54,c:[{t:`Examples`,s:55},{t:`Modules`,s:56}]},
  {t:`Plant codes`,s:57,c:[{t:`CODOG / CODAG`,s:57},{t:`COGAG / COGOG`,s:57},{t:`COGES`,s:58}]},
  {t:`General arrangement`,s:59,c:[{t:`Air intake`,s:60},{t:`Exhaust uptake`,s:61}]},
  {t:`Duct losses`,s:62},{t:`Load requirements`,s:63},{t:`Service`,s:64},{t:`Selection`,s:65},{t:`Lubrication`,s:66}]},
 {t:`5.8 Gear and fuel`,c:[{t:`Reduction gear`,s:67},{t:`Reversing`,s:68},{t:`Accessories`,s:69},{t:`Fuel system`,s:70},{t:`Filters and silencers`,s:71}]}
]}
});
