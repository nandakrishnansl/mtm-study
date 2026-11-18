/* Unit V formula sheet. Each entry: t title, e equation, n note, s slide, q equation number in Ganesan where the slide gives it */
window.MTM = window.MTM || {c: {}}; MTM.c.u5 = MTM.c.u5 || {sl: {}};
MTM.c.u5.formulas = [
 {t: 'Temperature ratio and t', e: 'x = T<sub>2</sub>/T<sub>1</sub> = T<sub>3</sub>/T<sub>4</sub> = p<sub>R</sub><sup>(γ−1)/γ</sup>, &nbsp; t = T<sub>3</sub>/T<sub>1</sub>', n: 'Ideal simple cycle; same pressure ratio across compressor and turbine.', s: 4},
 {t: 'Compressor work per kg', e: 'W<sub>C</sub> = c<sub>p</sub>(T<sub>2</sub> − T<sub>1</sub>)', n: '', s: 4},
 {t: 'Turbine work per kg', e: 'W<sub>T</sub> = c<sub>p</sub>(T<sub>3</sub> − T<sub>4</sub>)', n: '', s: 4},
 {t: 'Net work and heat supplied', e: 'W<sub>N</sub> = W<sub>T</sub> − W<sub>C</sub>, &nbsp; Q = c<sub>p</sub>(T<sub>3</sub> − T<sub>2</sub>)', n: 'Per kg of air.', s: 4},
 {t: 'Specific net work (Eq. 5.9)', e: 'W<sub>N</sub>/(c<sub>p</sub>T<sub>1</sub>) = t(1 − 1/x) − (x − 1)', n: 'Dimensionless; multiply by c<sub>p</sub>T<sub>1</sub>.', s: 4},
 {t: 'Efficiency, simple cycle (Eq. 5.12)', e: 'η = 1 − 1/x = 1 − 1/p<sub>R</sub><sup>(γ−1)/γ</sup>', n: 'Depends on p<sub>R</sub> and γ only, not on T<sub>3</sub>.', s: 4},
 {t: 'Maximum work (Eq. 5.13)', e: 'x = √t, &nbsp; i.e. T<sub>2</sub> = T<sub>4</sub>; &nbsp; W<sub>N,max</sub> = c<sub>p</sub>T<sub>1</sub>(√t − 1)<sup>2</sup>', n: 'The W<sub>N,max</sub> form follows from Eq. 5.9 with x = √t (derivation D2).', s: 5},
 {t: 'Efficiency, heat-exchange cycle (Eq. 5.19)', e: 'η = 1 − x/t = 1 − p<sub>R</sub><sup>(γ−1)/γ</sup>/t', n: 'Specific work unchanged. Better than the simple cycle only at low p<sub>R</sub> (T<sub>4</sub> > T<sub>2</sub>).', s: 9},
 {t: 'Combustion efficiency', e: 'η<sub>b</sub> = actual total-head temperature rise ÷ theoretical total-head temperature rise', n: 'Slide gives it in words and symbols (ΔT<sub>0</sub>).', s: 34},
 {t: 'Pressure loss factor (Eq. 10.2)', e: 'PLF = K<sub>1</sub> + K<sub>2</sub>', n: 'K<sub>1</sub> cold loss (friction, turbulence); K<sub>2</sub> hot loss (heat addition).', s: 34},
 {t: 'Coolant geometric parameter (Eq. 14.1)', e: 'Z = (S<sub>c</sub>/C)<sup>1.2</sup> × (C<sup>2</sup>/A<sub>c</sub>)', n: 'High Z means a cooler blade. Z &gt; 150 needed; little gain beyond 250.', s: 48},
 {t: 'Duct pressure loss', e: 'Δp ∝ ṁ<sup>2</sup>/(A<sup>2</sup>ρ) ∝ 1/d<sup>4</sup>', n: 'Halving the duct diameter gives 16 times the loss.', s: 62},
 {t: 'Propeller power law', e: 'P ∝ n<sup>3</sup>', n: 'Why a ship’s gas turbine spends much time at part load.', s: 63},
 {t: 'Reduction gear ratio', e: 'i = N<sub>power turbine</sub> / N<sub>propeller</sub> &nbsp; (&gt; 1)', n: 'For a double reduction with equal stages, each stage is about √i.', s: 67},
 {t: 'Fuel flow through an injector (Eq. 10.3)', e: 'ṁ<sub>f</sub> = k A √(2ρp)', n: 'Flow varies as √p.', s: 70},
 {t: 'Gas relation used in the numericals', e: 'c<sub>p</sub> = γR/(γ − 1), &nbsp; R = c<sub>p</sub>(γ − 1)/γ', n: 'Standard thermodynamics (not on a slide). Air: γ = 1.4, c<sub>p</sub> = 1.005 kJ/kg K.', s: 0}
];
