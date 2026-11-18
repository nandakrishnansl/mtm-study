/* Unit III content, slides 26-50 (DRAFT, teacher to verify).
   Physical significance of the pi terms, pi theorem for turbomachines, performance coefficients, specific speed, figures. */
window.MTM = window.MTM || {c: {}};
MTM.c.u3 = MTM.c.u3 || {sl: {}};
(function () {
  Object.assign(MTM.c.u3.sl, {
    26: {i: 3,
      s: `Each π term is a ratio of two forces. The first one, t/d, is geometry. In all the others the combination ρV² stands for the inertia force per unit area.`,
      d: `<b>1. π<sub>1</sub> = t/d</b> simply states the geometrical relationship.<br><b>2. Inertia force.</b> The other π terms contain ρV or ρV². The term ρV² = ρV(V) is proportional to the <b>inertia force</b>, the force needed to accelerate a mass. Inertia force F<sub>I</sub> ∝ ma ∝ ṁV. Since ṁ = AρV, F<sub>I</sub> ∝ AρV². So ρV² ∝ F<sub>I</sub>/A ∝ F<sub>I</sub>/d², where d is a characteristic dimension.<br>Each of the next five slides substitutes this into one π term.`,
      k: [`π₁ = t/d: geometry`, `F_I ∝ ṁV = AρV²`, `ρV² ∝ F_I/d²`],
      tv: `<div class="eqbox">π<sub>1</sub> = t/d &nbsp;(geometrical relationship)</div>
 <div class="eqbox">Inertia force: F<sub>I</sub> ∝ m a ∝ ṁ V</div>
 <div class="eqbox">ṁ = A V ρ &nbsp;⟹ &nbsp;F<sub>I</sub> ∝ A V² ρ</div>
 <div class="eqbox hot">ρV² ∝ F<sub>I</sub> / A ∝ F<sub>I</sub> / d²</div>
 <p>where d is a characteristic dimension.</p>`},

    27: {i: 3,
      s: `π<sub>2</sub> = Δp/(ρV²) is the ratio of the pressure force to the inertia force.`,
      d: `Substitute ρV² ∝ F<sub>I</sub>/d² into Eq. (1.2): π<sub>2</sub> = Δp/(ρV²) ∝ Δp·d²/F<sub>I</sub> = <b>pressure force / inertia force</b> — (1.7). The pressure force is Δp times an area (∝ d²). In fluid mechanics this ratio is the Euler number.`,
      k: [`π₂ = Δp/(ρV²) ∝ Δp d²/F_I`, `Pressure force ÷ inertia force (Eq. 1.7)`],
      tv: `<div class="eqbox hot">π<sub>2</sub> = Δp/(ρV²) ∝ Δp d² / F<sub>I</sub> = <b>Pressure force / Inertia force</b> &nbsp;— (1.7)</div>
 <p>π<sub>2</sub> is the ratio of the force due to a change in pressure to the inertia force due to the motion of the fluid.</p>`},

    28: {i: 3,
      s: `The Reynolds number is the ratio of the inertia force to the viscous force.`,
      d: `From Eq. (1.3), π<sub>3</sub> = ρVd/μ — (1.8). The viscous shear stress is μ times the rate of shear, so μ = (shear per unit area)/(unit rate of shear) ∝ (F<sub>V</sub>/d²)/(V/d) ∝ F<sub>V</sub>/(Vd). Substituting, with ρVd ∝ F<sub>I</sub>/(dV):<br>π<sub>3</sub> = ρVd/μ ∝ (F<sub>I</sub>/(Vd)) × (Vd/F<sub>V</sub>) ∝ <b>inertia force / viscous force</b> — (1.9).<br><b>Conclusion:</b> π<sub>3</sub> is the Reynolds number.`,
      k: [`μ ∝ F_V/(Vd)`, `Re = ρVd/μ ∝ F_I/F_V`, `Inertia force ÷ viscous force (Eq. 1.9)`],
      tv: `<div class="eqbox">π<sub>3</sub> = ρVd/μ &nbsp;— (1.8)</div>
 <div class="eqbox">μ = (viscous shear per unit area)/(unit rate of shear) ∝ (F<sub>V</sub>/d²)/(V/d) ∝ F<sub>V</sub>/(V d)</div>
 <div class="eqbox hot">π<sub>3</sub> = ρVd/μ ∝ (F<sub>I</sub>/V d) × (V d/F<sub>V</sub>) = <b>Inertia force / Viscous force</b> &nbsp;— (1.9)</div>
 <p><b>Conclusion:</b> π<sub>3</sub> is the Reynolds number and expresses the ratio of inertia force to viscous force.</p>`,
      t: `"Explain the physical significance of the Reynolds number" needs one line: inertia force ÷ viscous force, with the working above.`},

    29: {i: 3,
      s: `The Weber number is the ratio of the inertia force to the surface-tension force.`,
      d: `From Eq. (1.4), π<sub>4</sub> = ρV²d/σ. Surface tension σ ∝ F<sub>S</sub>/d (force per unit length). With ρV² ∝ F<sub>I</sub>/d²: π<sub>4</sub> ∝ (F<sub>I</sub>/d²)(d)(d/F<sub>S</sub>) ∝ F<sub>I</sub>/F<sub>S</sub> = <b>inertia force / surface tension force</b> — (1.10).<br>π<sub>4</sub> is the Weber number. It matters only for very small scales (droplets, thin films, capillary effects).`,
      k: [`σ ∝ F_S/d`, `We = ρV²d/σ ∝ F_I/F_S`, `Inertia ÷ surface tension (Eq. 1.10)`],
      tv: `<div class="eqbox">π<sub>4</sub> = ρV²d/σ, &nbsp;σ ∝ F<sub>S</sub>/d (tension force/length)</div>
 <div class="eqbox hot">π<sub>4</sub> ∝ (F<sub>I</sub>/d²)(d)(d/F<sub>S</sub>) ∝ F<sub>I</sub>/F<sub>S</sub> = <b>Inertia force / Surface tension force</b> &nbsp;— (1.10)</div>
 <p>π<sub>4</sub> is the Weber number: the ratio of inertia force to surface tension force.</p>`},

    30: {i: 3,
      s: `π<sub>5</sub> is the ratio of inertia force to elastic force, and it equals the square of the Mach number, (velocity ÷ sound speed)².`,
      d: `From Eq. (1.5), π<sub>5</sub> = ρV²/e. The elasticity (bulk modulus) is e ∝ F<sub>e</sub>/d² ∝ Δp/(ΔV/V) (elastic force per unit area). Then π<sub>5</sub> ∝ (F<sub>I</sub>/d²)(d²/F<sub>e</sub>) ∝ <b>inertia force / elastic force</b>.<br>Also e/ρ is the square of the sound speed, a² = e/ρ, so π<sub>5</sub> = ρV²/e = V²/a² = <b>M²</b>. With a = sound velocity and M = Mach number:<br><b>M = V/a = fluid velocity / sound velocity</b> — (1.11).<br>Mach number matters for compressible flow: gases, steam and compressors.`,
      k: [`e ∝ F_e/d²`, `π₅ = ρV²/e ∝ F_I/F_e`, `a² = e/ρ, so π₅ = V²/a² = M²`, `M = V/a (Eq. 1.11)`],
      tv: `<div class="eqbox">e ∝ elastic force per unit area ∝ F<sub>e</sub>/d² ∝ Δp/(ΔV/V)</div>
 <div class="eqbox">π<sub>5</sub> = ρV²/e ∝ (F<sub>I</sub>/d²) × (d²/F<sub>e</sub>) ∝ F<sub>I</sub>/F<sub>e</sub> = Inertia force / Elastic force</div>
 <div class="eqbox hot">π<sub>5</sub> = ρV²/e ∝ V²/(e/ρ) ∝ V²/a² = M² &nbsp;(a = sound velocity, M = Mach number)<br>M = V/a = Fluid velocity / Sound velocity &nbsp;— (1.11)</div>
 <p>π<sub>5</sub> is also known as the square of the Mach number.</p>`,
      t: `Give both meanings: a force ratio (inertia ÷ elastic) and M². Mach number governs compressible machines such as compressors.`},

    31: {i: 3,
      s: `π<sub>6</sub> is the ratio of the inertia force to the gravitational force: the Froude number group.`,
      d: `From Eq. (1.6), π<sub>6</sub> = ρV²/(wd). The specific weight times a length is wd = wd³/d² ∝ (weight)/d² ∝ F<sub>g</sub>/d². So π<sub>6</sub> ∝ (F<sub>I</sub>/d²)(d²/F<sub>g</sub>) ∝ <b>inertia force / gravitational force</b>.<br><b>Conclusion:</b> π<sub>6</sub> is the Froude number (strictly its square, since w = ρg gives ρV²/(wd) = V²/(gd), exactly as π<sub>5</sub> is M²).<br>For a ship model, inertia, gravity (wave making) and viscous (friction) forces all act, which is why the Froude number is matched in towing tests while friction is corrected separately.`,
      k: [`wd ∝ F_g/d²`, `π₆ = ρV²/(wd) ∝ F_I/F_g`, `Froude number group (V²/gd)`, `Ships: Froude matched, friction corrected`],
      tv: `<div class="eqbox">π<sub>6</sub> = ρV²/(wd) ∝ (F<sub>I</sub>/d²) × (1/(wd))</div>
 <div class="eqbox">wd = w d³/d² ∝ Weight/d² ∝ F<sub>g</sub>/d²</div>
 <div class="eqbox hot">π<sub>6</sub> ∝ (F<sub>I</sub>/d²)(d²/F<sub>g</sub>) = <b>Inertia force / Gravitational force</b></div>
 <p><b>Conclusion:</b> π<sub>6</sub> is known as the Froude number. It expresses the ratio of the inertia force to the gravitational force of the fluid.</p>`,
      t: `Learn the whole set: π₂ pressure, π₃ Re viscous, π₄ We surface tension, π₅ Mach elastic, π₆ Fr gravity; each is "inertia force ÷ something".`},

    32: {i: 3,
      s: `Now the same method for an incompressible-flow turbomachine. The variables are flow rate Q, speed N, power P, specific energy gH, density ρ, viscosity μ and diameter d.`,
      d: `Consider a control volume through which an incompressible fluid flows. The variables and units:<br>Flow rate <b>Q</b> (m³/s); speed <b>N</b> (rps); power <b>P</b> (W); head or energy per unit mass <b>H (gH)</b> (m²/s²); fluid density <b>ρ</b> (kg/m³); fluid viscosity <b>μ</b> (N·s/m²); diameter <b>d</b> (m).<br>Note that H here is the specific energy gH, in m²/s²: this makes its dimensions L²/T², so the derived coefficient is dimensionless.`,
      k: [`Q (m³/s), N (rps), P (W)`, `H or gH (m²/s²)`, `ρ (kg/m³), μ (N·s/m²), d (m)`],
      tv: `<table><tr><th>Variable</th><th>Symbol</th><th>Unit</th></tr>
 <tr><td>Flow rate</td><td>Q</td><td>m³/s</td></tr>
 <tr><td>Speed</td><td>N</td><td>rps</td></tr>
 <tr><td>Power</td><td>P</td><td>W</td></tr>
 <tr><td>Head or energy per unit mass (specific energy)</td><td>H (gH)</td><td>m²/s²</td></tr>
 <tr><td>Fluid density</td><td>ρ</td><td>kg/m³</td></tr>
 <tr><td>Fluid viscosity</td><td>μ</td><td>N·s/m²</td></tr>
 <tr><td>Diameter</td><td>d</td><td>m</td></tr></table>`},

    33: {i: 3,
      s: `Figure 1 shows a generalised turbomachine inside a control surface: flow Q in and out, head H, shaft speed N and shaft power P. Power is written as a function of the other six variables.`,
      d: `Figure 1: a generalised turbomachine for dimensional analysis. A control surface encloses the machine. Fluid enters and leaves at flow rate Q, the specific energy (head) H is exchanged, and the shaft turns at speed N delivering (or absorbing) power P.<br><b>Functional relationship.</b> The dependent variable is the power: <b>P = f[ρ, N, μ, d, Q, H]</b> — (1.12).`,
      k: [`Fig. 1: control surface, Q, H, N, P`, `P = f[ρ, N, μ, d, Q, H] (Eq. 1.12)`],
      tv: `<p>Figure 1 shows the control surface with flow Q in and out, head H, shaft speed N and shaft power P.</p>
 <div class="eqbox hot">P = f[ρ, N, μ, d, Q, H] &nbsp;— (1.12)</div>`},

    34: {i: 3,
      s: `Seven variables and three dimensions give four π terms. The repeating variables are d, N and ρ. π<sub>1</sub> joins them to the flow rate Q.`,
      d: `Counting the dependent and independent variables: <b>n = 7</b>. Fundamental dimensions M, L, T: <b>m = 3</b>, so three repeating variables, chosen as <b>d, N, ρ</b> (geometry, flow speed, fluid property). Number of π terms: n − m = 7 − 3 = <b>4</b>.<br><b>π<sub>1</sub>:</b> combine d, N, ρ with Q: π<sub>1</sub> = d<sup>a₁</sup>N<sup>b₁</sup>ρ<sup>c₁</sup>Q. Dimensions: M⁰L⁰T⁰ = [L]<sup>a₁</sup>[T⁻¹]<sup>b₁</sup>[ML⁻³]<sup>c₁</sup>[L³T⁻¹].`,
      k: [`n = 7, m = 3 → 4 π terms`, `Repeating variables: d, N, ρ`, `π₁ = d^a₁ N^b₁ ρ^c₁ Q`],
      tv: `<div class="eqbox">n = 7, &nbsp;m = 3 &nbsp;⟹ &nbsp;(n − m) = 4 π terms<br>Repeating variables: <b>d, N, ρ</b></div>
 <div class="eqbox">π<sub>1</sub> = d<sup>a₁</sup> N<sup>b₁</sup> ρ<sup>c₁</sup> Q</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₁</sup> [T⁻¹]<sup>b₁</sup> [ML⁻³]<sup>c₁</sup> [L³T⁻¹]</div>`,
      t: `Quote the choice "d, N, ρ" and the count "7 − 3 = 4" before you start any turbomachine π-theorem derivation.`},

    35: {i: 3,
      s: `Solving the power equations gives c₁ = 0, b₁ = −1, a₁ = −3, so π<sub>1</sub> = Q/(Nd³): the flow (capacity) coefficient.`,
      d: `Equate the powers: <b>M:</b> c₁ = 0. <b>L:</b> a₁ − 3c₁ + 3 = 0. <b>T:</b> −b₁ − 1 = 0. Solving: c₁ = 0, b₁ = −1, a₁ = −3.<br>Substituting: π<sub>1</sub> = d⁻³N⁻¹ρ⁰Q = <b>Q/(Nd³)</b> — (1.13).`,
      k: [`c₁ = 0, b₁ = −1, a₁ = −3`, `π₁ = Q/(Nd³) (Eq. 1.13)`],
      tv: `<div class="eqbox">For M: c₁ = 0<br>For L: a₁ − 3c₁ + 3 = 0<br>For T: −b₁ − 1 = 0</div>
 <div class="eqbox">c₁ = 0, &nbsp;b₁ = −1, &nbsp;a₁ = −3</div>
 <div class="eqbox hot">π<sub>1</sub> = d⁻³ N⁻¹ ρ⁰ Q = <b>Q/(N d³)</b> &nbsp;— (1.13)</div>`},

    36: {i: 3,
      s: `π<sub>2</sub> joins d, N, ρ to the head H. The equations give c₂ = 0, b₂ = −2, a₂ = −2, so π<sub>2</sub> = H/(N²d²): the head coefficient.`,
      d: `π<sub>2</sub> = d<sup>a₂</sup>N<sup>b₂</sup>ρ<sup>c₂</sup>H, with H of dimension L²T⁻². M⁰L⁰T⁰ = [L]<sup>a₂</sup>[T⁻¹]<sup>b₂</sup>[ML⁻³]<sup>c₂</sup>[L²T⁻²].<br><b>M:</b> c₂ = 0. <b>L:</b> a₂ − 3c₂ + 2 = 0. <b>T:</b> −b₂ − 2 = 0.<br>Solving: c₂ = 0, b₂ = −2, a₂ = −2. Therefore <b>π<sub>2</sub> = H/(N²d²)</b> — (1.14). The density drops out because H is per unit mass.`,
      k: [`H has dimension L²/T²`, `c₂ = 0, b₂ = −2, a₂ = −2`, `π₂ = H/(N²d²) (Eq. 1.14)`],
      tv: `<div class="eqbox">π<sub>2</sub> = d<sup>a₂</sup> N<sup>b₂</sup> ρ<sup>c₂</sup> H</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₂</sup> [T⁻¹]<sup>b₂</sup> [ML⁻³]<sup>c₂</sup> [L²T⁻²]</div>
 <div class="eqbox">For M: c₂ = 0<br>For L: a₂ − 3c₂ + 2 = 0<br>For T: −b₂ − 2 = 0</div>
 <div class="eqbox">c₂ = 0, &nbsp;b₂ = −2, &nbsp;a₂ = −2</div>
 <div class="eqbox hot">π<sub>2</sub> = d⁻² N⁻² ρ⁰ H = <b>H/(N² d²)</b> &nbsp;— (1.14)</div>`},

    37: {i: 3,
      s: `π<sub>3</sub> joins d, N, ρ to the power P. The equations give c₃ = −1, b₃ = −3 and a₃ = −5.`,
      d: `π<sub>3</sub> = d<sup>a₃</sup>N<sup>b₃</sup>ρ<sup>c₃</sup>P, with P of dimension ML²T⁻³. M⁰L⁰T⁰ = [L]<sup>a₃</sup>[T⁻¹]<sup>b₃</sup>[ML⁻³]<sup>c₃</sup>[ML²T⁻³].<br><b>M:</b> c₃ + 1 = 0. <b>L:</b> a₃ − 3c₃ + 2 = 0. <b>T:</b> −b₃ − 3 = 0.<br>Solving: c₃ = −1, b₃ = −3, a₃ = −5.`,
      k: [`P has dimension ML²/T³`, `c₃ = −1, b₃ = −3, a₃ = −5`],
      tv: `<div class="eqbox">π<sub>3</sub> = d<sup>a₃</sup> N<sup>b₃</sup> ρ<sup>c₃</sup> P</div>
 <div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₃</sup> [T⁻¹]<sup>b₃</sup> [ML⁻³]<sup>c₃</sup> [ML²T⁻³]</div>
 <div class="eqbox">For M: c₃ + 1 = 0<br>For L: a₃ − 3c₃ + 2 = 0<br>For T: −b₃ − 3 = 0</div>
 <div class="eqbox hot">c₃ = −1, &nbsp;b₃ = −3, &nbsp;a₃ = −5</div>`},

    38: {i: 3,
      s: `Substituting gives π<sub>3</sub> = P/(ρN³d⁵): the power coefficient. π<sub>4</sub> is then set up with the viscosity μ.`,
      d: `π<sub>3</sub> = d⁻⁵N⁻³ρ⁻¹P = <b>P/(ρN³d⁵)</b> — (1.15), the power coefficient.<br><b>Setup of π<sub>4</sub>:</b> combine the repeating variables with the fluid viscosity: π<sub>4</sub> = d<sup>a₄</sup>N<sup>b₄</sup>ρ<sup>c₄</sup>μ.`,
      k: [`π₃ = P/(ρN³d⁵) (Eq. 1.15)`, `π₄ = d^a₄ N^b₄ ρ^c₄ μ`],
      tv: `<div class="eqbox hot">π<sub>3</sub> = d⁻⁵ N⁻³ ρ⁻¹ P = <b>P/(ρ N³ d⁵)</b> &nbsp;— (1.15)</div>
 <p>Fourth term: combine the repeating variables with the fluid viscosity.</p>
 <div class="eqbox">π<sub>4</sub> = d<sup>a₄</sup> N<sup>b₄</sup> ρ<sup>c₄</sup> μ</div>`},

    39: {i: 3,
      s: `For π<sub>4</sub>: c₄ = −1, b₄ = −1 and a₄ = −2.`,
      d: `Dimensions: M⁰L⁰T⁰ = [L]<sup>a₄</sup>[T⁻¹]<sup>b₄</sup>[ML⁻³]<sup>c₄</sup>[ML⁻¹T⁻¹].<br><b>M:</b> c₄ + 1 = 0. <b>L:</b> a₄ − 3c₄ − 1 = 0. <b>T:</b> −b₄ − 1 = 0.<br>Solving: c₄ = −1, b₄ = −1, a₄ = −2.`,
      k: [`μ has dimension M/(LT)`, `c₄ = −1, b₄ = −1, a₄ = −2`],
      tv: `<div class="eqbox">M⁰L⁰T⁰ = [L]<sup>a₄</sup> [T⁻¹]<sup>b₄</sup> [ML⁻³]<sup>c₄</sup> [ML⁻¹T⁻¹]</div>
 <div class="eqbox">For M: c₄ + 1 = 0<br>For L: a₄ − 3c₄ − 1 = 0<br>For T: −b₄ − 1 = 0</div>
 <div class="eqbox hot">c₄ = −1, &nbsp;b₄ = −1, &nbsp;a₄ = −2</div>`},

    40: {i: 3,
      s: `Substituting, π<sub>4</sub> = μ/(ρNd²); inverted, ρNd²/μ, which is a Reynolds number. The four results are the flow, head and power coefficients and the Reynolds number.`,
      d: `π<sub>4</sub> = d⁻²N⁻¹ρ⁻¹μ = μ/(ρNd²). Inverted: <b>π<sub>4</sub> = ρNd²/μ</b> — (1.17), a Reynolds number (slide 44).<br><b>Result of the analysis:</b> P/(ρN³d⁵) = f[Q/(Nd³), H/(N²d²), ρNd²/μ]. For two geometrically similar machines the groups must be equal for similar operation. The next slides give each a name.`,
      k: [`π₄ = μ/(ρNd²) → ρNd²/μ (Eq. 1.17)`, `P/(ρN³d⁵) = f[Q/(Nd³), H/(N²d²), ρNd²/μ]`],
      tv: `<div class="eqbox">π<sub>4</sub> = d⁻² N⁻¹ ρ⁻¹ μ = μ/(ρ N d²)</div>
 <div class="eqbox hot">π<sub>4</sub> = ρ N d² / μ &nbsp;— (1.17)</div>
 <div class="eqbox">Summary: &nbsp;π<sub>1</sub> = Q/(Nd³) &nbsp;|&nbsp; π<sub>2</sub> = H/(N²d²) &nbsp;|&nbsp; π<sub>3</sub> = P/(ρN³d⁵) &nbsp;|&nbsp; π<sub>4</sub> = ρNd²/μ</div>`,
      t: `For the 5- or 6-mark derivation write: n and m, repeating variables, the M, L, T equations, the four results (1.13, 1.14, 1.15, 1.17). Do the exponents quickly but show them.`},

    41: {i: 3,
      s: `π<sub>1</sub> = Q/(Nd³) is the flow (capacity) coefficient. It is the same for a model and its prototype, so it fixes the shape of the velocity triangle.`,
      d: `The first term is the <b>capacity (flow) coefficient: π<sub>1</sub> = Q/(Nd³)</b> — (1.18). Using Q ∝ AV ∝ d²V, Nd ∝ u (blade speed) and Nd³ = Nd(d²) ∝ ud²: π<sub>1</sub> ∝ d²V/(Nd³) ∝ V/(Nd) ∝ V/u ∝ 1/φ — (1.18a), where φ is the speed ratio, runner tangential speed divided by the theoretical jet spouting speed.<br><b>Meaning.</b> For a given π<sub>1</sub>, the ratio of blade velocity to jet velocity is fixed, so the shape of the velocity triangle is the same for any machine with that value. The flow of a machine of unit diameter at unit speed is the same for model and prototype: the flow coefficient is constant for similar rotors.`,
      k: [`π₁ = Q/(Nd³) ∝ V/u ∝ 1/φ`, `Fixes the blade-speed to jet-speed ratio`, `Fixes the velocity-triangle shape`, `Constant for similar rotors`],
      tv: `<div class="eqbox hot">π<sub>1</sub> = Q/(N d³) = <b>capacity coefficient</b> &nbsp;— (1.18)</div>
 <p>With Q ∝ A V ∝ d²V, &nbsp;N d ∝ u, &nbsp;N d³ = N d (d²) ∝ u d²:</p>
 <div class="eqbox">π<sub>1</sub> = Q/(N d³) ∝ d²V/(N d³) ∝ V/(N d) ∝ V/u ∝ 1/φ &nbsp;— (1.18a)</div>
 <p>φ is the speed ratio: runner tangential speed ÷ theoretical jet spouting speed.</p>
 <p>For a given value of π<sub>1</sub> the ratio of blade velocity to jet velocity is fixed, so the shape of the velocity triangle is fixed. The volume flow through machines of unit diameter at unit speed is the same for model and prototype.</p>`,
      t: `Say three things: the formula, "ratio of blade speed to jet speed is fixed", and "same for model and prototype".`},

    42: {i: 3,
      s: `Q/(d²√H) is the specific discharge. π<sub>2</sub> = H/(N²d²) is the head coefficient: head compared with the kinetic energy of the rotor.`,
      d: `<b>Specific discharge.</b> Since Nd(d²) ∝ ud² ∝ Vd² ∝ d²√H: π<sub>1</sub> = Q/(Nd³) ∝ <b>Q/(d²√H)</b> — (1.19). It is the same for model and prototype when operated at unit head and unit characteristic dimension.<br><b>Head coefficient (specific head).</b> <b>π<sub>2</sub> = H/(N²d²)</b> ∝ H/u² ∝ H/V² ∝ H/(uV) — (1.20). It is the ratio of the fluid head to the kinetic energy of the rotor. For incompressible fluids H = Δp/ρg ∝ Δp/ρ, so π<sub>2</sub> = H/(N²d²) = Δp/(ρV²) — (1.21), which confirms π<sub>2</sub> expresses the dynamic flow condition.<br>In axial-machine language the same quantity is the <b>stage loading</b>, ψ = work per kg ÷ u² (Δh<sub>0</sub>/u²).`,
      k: [`Specific discharge Q/(d²√H) (Eq. 1.19)`, `Head coefficient H/(N²d²) ∝ H/u² (Eq. 1.20)`, `= Δp/(ρV²) (Eq. 1.21)`, `Stage loading ψ = Δh₀/u²`],
      tv: `<p>Since N d (d²) ∝ u d² ∝ V d² ∝ d²√H:</p>
 <div class="eqbox">π<sub>1</sub> = Q/(N d³) ∝ Q/(d² √H) = <b>specific discharge</b> &nbsp;— (1.19)</div>
 <p>Specific discharge is the same for model and prototype at unit head and unit characteristic dimension.</p>
 <div class="eqbox hot">π<sub>2</sub> = H/(N² d²) ∝ H/u² ∝ H/V² ∝ H/(u V) = <b>head coefficient</b> &nbsp;— (1.20)</div>
 <p>It is the ratio of the fluid head to the kinetic energy of the rotor. Using H = Δp/(ρg) ∝ Δp/ρ:</p>
 <div class="eqbox">π<sub>2</sub> = H/(N² d²) = Δp/(ρ V²) &nbsp;— (1.21)</div>`,
      t: `The Jun 2024 MCQ "stage loading = Δh₀ ÷ (mean blade speed)²" comes from this idea: the head coefficient compares the work with u².`},

    43: {i: 3,
      s: `The power coefficient is π<sub>3</sub> = P/(ρN³d⁵). It also equals π<sub>1</sub> × π<sub>2</sub> when the power is written as P = ρQgH.`,
      d: `<b>Power coefficient (specific power).</b> It can also be got by multiplying π<sub>1</sub> and π<sub>2</sub>: π<sub>3</sub> = π<sub>1</sub> × π<sub>2</sub> = Q/(Nd³) × H/(Nd)². With P = H × ṁ = ρQgH (H here the specific energy gH): π<sub>3</sub> = (Q/(Nd³)) × (P/(ṁ(Nd)²)) ∝ <b>P/(ρN³d⁵)</b> — (1.22).<br>Using N³d⁵ ∝ d²H<sup>3/2</sup> (since N ∝ √H/d): π<sub>3</sub> ∝ <b>P/(ρd²H<sup>3/2</sup>)</b> — (1.23).<br>For water turbines the density ρ is constant and can be dropped: π<sub>3</sub> ∝ <b>P/(d²H<sup>3/2</sup>)</b> — (1.23a).`,
      k: [`π₃ = π₁ × π₂`, `P = ρQgH`, `P/(ρN³d⁵) ∝ P/(ρd²H^{3/2})`, `Water turbines: ρ dropped (Eq. 1.23a)`],
      tv: `<p>The power coefficient can also be obtained by multiplying π<sub>1</sub> and π<sub>2</sub>:</p>
 <div class="eqbox">π<sub>3</sub> = π<sub>1</sub> × π<sub>2</sub> = Q/(N d³) × H/(N d)²</div>
 <p>Knowing P = H × ṁ = ρ Q g H:</p>
 <div class="eqbox hot">π<sub>3</sub> = Q/(N d³) × P/(ṁ (N d)²) ∝ <b>P/(ρ N³ d⁵)</b> &nbsp;— (1.22)</div>
 <p>Using the kinematic relation N³d⁵ ∝ d² H<sup>3/2</sup>:</p>
 <div class="eqbox">π<sub>3</sub> = P/(ρ N³ d⁵) ∝ P/(ρ d² H<sup>3/2</sup>) &nbsp;— (1.23)</div>
 <div class="eqbox">Water turbines (ρ constant, omitted): π<sub>3</sub> ∝ P/(d² H<sup>3/2</sup>) &nbsp;— (1.23a)</div>`,
      t: `Remember the "unit" quantities: unit speed N_u = N/√H, unit power P_u = P/H^(3/2) and unit flow Q_u = Q/√H follow from these groups.`},

    44: {i: 2,
      s: `π<sub>4</sub> is a Reynolds number. Large machines using water or air run far above the critical Re, so viscosity matters little there; for small machines the efficiency is corrected with a size formula.`,
      d: `<b>Reynolds number (π<sub>4</sub>).</b> π<sub>4</sub> = ρNd²/μ ∝ ρVd/μ — (1.24). Since Nd ∝ u ∝ V, π<sub>4</sub> is fundamentally the Reynolds number.<br><b>Effect of Reynolds number.</b> Re governs laminar or turbulent pipe flow, but turbomachines usually run well above the critical value with low-viscosity fluids (air, water). So viscous action has little effect on the power of large machines, though it remains important for small pumps and fans, whose performance improves as Re increases.<br><b>Efficiency and size.</b> The change of efficiency with size is modelled as<br><b>η = 1 − (1 − η′)(d′/d)<sup>1/5</sup></b>.<br>The slide does not define the primes; the usual convention is that primed quantities belong to the model and unprimed to the prototype, so a larger machine is more efficient.`,
      k: [`π₄ = ρNd²/μ ∝ ρVd/μ = Re`, `Large machines: viscous effect small`, `Small pumps and fans: Re matters`, `η = 1 − (1 − η′)(d′/d)^{1/5}`],
      tv: `<div class="eqbox">π<sub>4</sub> = ρ N d² / μ ∝ ρ V d / μ &nbsp;— (1.24)</div>
 <p>Since N d ∝ u ∝ V, π<sub>4</sub> is fundamentally the Reynolds number.</p>
 <p><b>Effect of Reynolds number.</b> Turbomachines usually operate well above the critical Re with low-viscosity fluids (air, water). Viscous action therefore has little effect on the power of large machines, but remains important for small pumps and fans, where performance improves with increasing Re.</p>
 <p>Efficiency change due to size can be modelled as:</p>
 <div class="eqbox hot">η = { 1 − (1 − η′) (d′/d)<sup>1/5</sup> }</div>
 <p><small>Primes are not defined on the slide; the usual convention is model (primed) and prototype (unprimed).</small></p>`,
      t: `Used in the "dynamic similarity" 5-marker as the scale-effect correction. In numericals, say which machine is the model.`},

    45: {i: 3,
      s: `Specific speed N<sub>s</sub> combines the flow and head coefficients so that the diameter disappears. It is the key number that tells you the shape of a pump, fan or compressor.`,
      d: `Combining π<sub>1</sub> and π<sub>2</sub> gives the specific speed, the most important parameter for incompressible machines because it contains <b>no linear dimension d</b>:<br>π<sub>5</sub> = √π<sub>1</sub>/(π<sub>2</sub>)<sup>3/4</sup> = [Q/(Nd³)]<sup>1/2</sup> × [N²d²/H]<sup>3/4</sup> — (1.25).<br>Simplifying, the powers of d and N cancel the way required: <b>N<sub>S</sub> = Q<sup>1/2</sup>N/H<sup>3/4</sup></b> — (1.26).<br>For pumps, fans and compressors: <b>N<sub>SP</sub> = N√Q/H<sup>3/4</sup></b> — (1.27), where H stands for gH in the dimensionless form: N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup>.`,
      k: [`N_s = √π₁/π₂^{3/4}: no diameter`, `N_S = N Q^{1/2}/H^{3/4} (Eq. 1.26)`, `Pumps, fans, compressors: N√Q/H^{3/4} (Eq. 1.27)`],
      tv: `<p>Combining π<sub>1</sub> and π<sub>2</sub> gives the specific speed, the most important parameter for incompressible machines, because it does not contain the linear dimension d:</p>
 <div class="eqbox">π<sub>5</sub> = √π<sub>1</sub> / (π<sub>2</sub>)<sup>3/4</sup> = [Q/(N d³)]<sup>1/2</sup> × [N² d²/H]<sup>3/4</sup> &nbsp;— (1.25)</div>
 <div class="eqbox hot">N<sub>S</sub> = Q<sup>1/2</sup> N / H<sup>3/4</sup> = <b>Specific speed</b> &nbsp;— (1.26)</div>
 <p>For pumps, fans and compressors:</p>
 <div class="eqbox">N<sub>SP</sub> = N √Q / H<sup>3/4</sup> &nbsp;— (1.27)</div>
 <p><small>In the dimensionless form H is replaced by gH: N<sub>s</sub> = N√Q/(gH)<sup>3/4</sup> (slide 6).</small></p>`,
      t: `Show the cancellation: d³ᐟ² in the numerator from π₂, d⁻³ᐟ² from π₁ and N⁻¹ᐟ² × N³ᐟ² = N.`},

    46: {i: 3,
      s: `The turbine specific speed N<sub>ST</sub> combines π<sub>1</sub> and π<sub>3</sub> (or π<sub>2</sub> and π<sub>3</sub>) so d disappears: N<sub>ST</sub> = N√P/(ρ<sup>1/2</sup>H<sup>5/4</sup>). It is the speed of a similar turbine giving unit power under unit head.`,
      d: `<b>Specific speed of turbines.</b> Combining the power and head coefficients: π<sub>6</sub> = N<sub>ST</sub> = (π<sub>3</sub>)<sup>1/2</sup>/(π<sub>2</sub>)<sup>5/4</sup> = [P/(ρN³d⁵)]<sup>1/2</sup> × [N²d²/H]<sup>5/4</sup> — (1.28), so <b>N<sub>ST</sub> = N√P/(ρ<sup>1/2</sup>H<sup>5/4</sup>)</b>. For water turbines the density is omitted: <b>N<sub>ST</sub> = N√P/H<sup>5/4</sup></b> — (1.29).<br><b>Definition.</b> The speed of a geometrically similar turbine working under unit head and developing unit power.<br><b>Derivation.</b> P ∝ H<sup>5/2</sup>/N² (from P ∝ d²H<sup>3/2</sup> and d ∝ √H/N), so N ∝ H<sup>5/4</sup>/√P, i.e. <b>N = kH<sup>5/4</sup>/√P</b> — (1.30).`,
      k: [`N_ST = π₃^{1/2}/π₂^{5/4}`, `N_ST = N√P/(ρ^{1/2}H^{5/4}) (1.28)`, `Water turbines: N√P/H^{5/4} (1.29)`, `Definition: unit head, unit power`, `N = kH^{5/4}/√P (1.30)`],
      tv: `<p>Another specific speed can be obtained by combining π<sub>1</sub> and π<sub>3</sub> (the slide uses the power and head coefficients):</p>
 <div class="eqbox">π<sub>6</sub> = N<sub>ST</sub> = π<sub>3</sub><sup>1/2</sup> / π<sub>2</sub><sup>5/4</sup> = [P/(ρ N³ d⁵)]<sup>1/2</sup> × [N² d²/H]<sup>5/4</sup> &nbsp;— (1.28)</div>
 <div class="eqbox">N<sub>ST</sub> = N √P / (ρ<sup>1/2</sup> H<sup>5/4</sup>)</div>
 <div class="eqbox hot">Water turbines (ρ omitted): N<sub>ST</sub> = N √P / H<sup>5/4</sup> &nbsp;— (1.29)</div>
 <p><b>Definition:</b> the speed of a geometrically similar turbine working under unit head and developing unit power.</p>
 <p><b>Derivation:</b> P ∝ H<sup>5/2</sup>/N² &nbsp;⟹ &nbsp;N ∝ H<sup>5/4</sup>/√P</p>
 <div class="eqbox">N = k H<sup>5/4</sup> / √P &nbsp;— (1.30)</div>`,
      t: `A classic 5 or 6-mark question: "Define and derive the specific speed of a turbine." Write the definition, then P ∝ H^(5/2)/N², then put H = 1, P = 1.`},

    47: {i: 3,
      s: `Put H = 1 and P = 1: N then equals N<sub>ST</sub> = k, giving N<sub>ST</sub> = N√P/H<sup>5/4</sup>. For pumps the same idea with Q = 1 and H = 1 gives N<sub>SP</sub>.`,
      d: `<b>Turbine, completing the proof.</b> If H = 1 and P = 1 then N = N<sub>ST</sub> = k — (1.31). Substituting k back into N = kH<sup>5/4</sup>/√P: <b>N<sub>ST</sub> = N√P/H<sup>5/4</sup></b> — (1.32).<br><b>Specific speed of pumps.</b> Definition: the speed of a geometrically similar centrifugal pump delivering unit quantity (1 m³/s) of liquid against a head of one metre.<br><b>Derivation.</b> Q = area × velocity ∝ d²√H<sub>m</sub>. From geometric similarity (d ∝ √H/N): <b>Q = kH<sub>m</sub><sup>3/2</sup>/N²</b> — (1.33). If H<sub>m</sub> = 1 m and Q = 1 m³/s, then N = N<sub>SP</sub>, so 1 = k/N<sub>SP</sub>², i.e. N<sub>SP</sub>² = k.`,
      k: [`H = 1, P = 1 → N = N_ST = k`, `N_ST = N√P/H^{5/4} (1.32)`, `Pump: Q = kH_m^{3/2}/N² (1.33)`, `H_m = 1, Q = 1 → N_SP² = k`],
      tv: `<div class="eqbox">If H = 1 and P = 1, then N = N<sub>ST</sub> = k &nbsp;— (1.31)</div>
 <div class="eqbox hot">N<sub>ST</sub> = k · 1<sup>5/4</sup>/√1 = k &nbsp;⟹ &nbsp;<b>N<sub>ST</sub> = N √P / H<sup>5/4</sup></b> &nbsp;— (1.32)</div>
 <p><b>Specific speed of pumps.</b> The speed of a geometrically similar centrifugal pump delivering unit quantity (1 m³/s) of liquid against a head of one metre.</p>
 <p>Derivation: Q = area × velocity ∝ d² √H<sub>m</sub>. From geometric similarity:</p>
 <div class="eqbox">Q = k H<sub>m</sub><sup>3/2</sup> / N² &nbsp;— (1.33)</div>
 <div class="eqbox">If H<sub>m</sub> = 1 m and Q = 1 m³/s, then N = N<sub>SP</sub>: &nbsp;1 = k·1<sup>3/2</sup>/N<sub>SP</sub>² &nbsp;⟹ &nbsp;N<sub>SP</sub>² = k</div>`},

    48: {i: 3,
      s: `Substituting k = N<sub>SP</sub>² back gives the pump specific speed: N<sub>SP</sub> = N√Q/H<sub>m</sub><sup>3/4</sup>.`,
      d: `Substituting k = N<sub>SP</sub>² into Q = kH<sub>m</sub><sup>3/2</sup>/N²: Q = N<sub>SP</sub>²H<sub>m</sub><sup>3/2</sup>/N². Rearranging, N<sub>SP</sub> = √(QN²/H<sub>m</sub><sup>3/2</sup>), so<br><b>N<sub>SP</sub> = N√Q/H<sub>m</sub><sup>3/4</sup></b> — (1.34).<br>This agrees with Eq. (1.27) obtained from the π terms. Turbine and pump specific speeds are therefore both obtained either from the dimensionless groups or from the "unit" definition.`,
      k: [`Q = N_SP² H_m^{3/2}/N²`, `N_SP = N√Q/H_m^{3/4} (1.34)`, `Same as Eq. 1.27 from the π terms`],
      tv: `<div class="eqbox">Q = N<sub>SP</sub>² H<sub>m</sub><sup>3/2</sup> / N²</div>
 <div class="eqbox hot">N<sub>SP</sub> = √( Q N² / H<sub>m</sub><sup>3/2</sup> ) = <b>N √Q / H<sub>m</sub><sup>3/4</sup></b> &nbsp;— (1.34)</div>`,
      t: `Both specific speeds are often asked in one question: write both definitions, both final formulae, and the unit-head, unit-power (or unit-flow) argument.`},

    49: {i: 3,
      s: `Figure 2 plots head coefficient against flow coefficient. Lines of constant specific speed fan out from the origin, and each pump type sits at its own specific speed: centrifugal low, mixed flow in the middle, axial high.`,
      d: `Figure 2 (contours of specific speed). Axes: head coefficient ψ (0 to 0.2) against flow coefficient Φ (0 to 0.2). The dotted contours are N<sub>s</sub> = 0.5, 0.75, 1, 1.25, 1.5, 2, 3 and 5. The marked curves are pump characteristics, with the peak-efficiency point shown as a small circle.<br><b>Centrifugal pump:</b> high head, low flow (top left, roughly N<sub>s</sub> ≈ 0.5). <b>Mixed-flow pump:</b> middle (roughly N<sub>s</sub> ≈ 1.5). <b>Axial-flow pump:</b> low head, high flow (bottom right, roughly N<sub>s</sub> ≈ 5).<br>This is the idea behind the <b>Cordier diagram</b>: the best-efficiency points of good machines follow one trend, so N<sub>s</sub> (and the matching specific diameter) can be used to choose the machine type and estimate its size.`,
      k: [`Head coefficient ψ vs flow coefficient Φ`, `Contours of constant N_s radiate from the origin`, `Centrifugal: low N_s; mixed: middle; axial: high`, `Peak-efficiency points follow one trend (Cordier)`],
      tv: `<p><b>Figure 2: head coefficient against flow coefficient</b> (slide image). Lines of constant specific speed N<sub>s</sub> = 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 5 fan out from the origin.</p>
 <table><tr><th>Pump type</th><th>Position on the plot</th><th>Approximate N<sub>s</sub></th></tr>
 <tr><td>Centrifugal</td><td>High head, low flow (top left)</td><td>about 0.5</td></tr>
 <tr><td>Mixed flow</td><td>Middle</td><td>about 1.5</td></tr>
 <tr><td>Axial flow</td><td>Low head, high flow (bottom right)</td><td>about 5</td></tr></table>
 <p>Peak-efficiency points are marked with a small circle. N<sub>s</sub> values are read approximately from the contour lines.</p>`,
      t: `For "What is the Cordier diagram?" say: best-efficiency points of many good machines lie on one curve of N_s against specific diameter D_s; use it to choose the type and estimate the size.`},

    50: {i: 3,
      s: `Figure 3 shows the range of specific speed for each type of turbomachine. Low N<sub>s</sub> machines are radial (Pelton, centrifugal pumps); high N<sub>s</sub> machines are axial (Kaplan, propeller pumps, axial compressors).`,
      d: `Figure 3 (read from the plot, N<sub>s</sub> = NQ<sup>1/2</sup>/(gH)<sup>3/4</sup>). Approximate ranges:<br><b>Pelton wheel:</b> single jet up to about 0.15; multijet about 0.1 to 0.3. <b>Francis turbines:</b> about 0.23 to 1.9. <b>Kaplan turbines:</b> about 2 to 6. <b>Propeller turbines:</b> about 2 to 3.5.<br><b>Centrifugal pumps (radial):</b> about 0.2 to 1.2. <b>Mixed-flow pumps:</b> about 1.3 to 2.8. <b>Propeller pumps (axial):</b> about 2.9 to 7.5.<br><b>Centrifugal compressors and fans:</b> about 0.5 to 2. <b>Axial-flow compressors, blowers and ventilators:</b> from about 1.5 upward. <b>Axial-flow steam and gas turbines:</b> about 0.4 to 2.<br><b>Trend:</b> as N<sub>s</sub> rises, the machine changes from radial (large diameter, high head, small flow) through mixed to axial (small diameter, low head, large flow). These values correspond to N in rad/s; with N in rps they are smaller by 2π.`,
      k: [`Low N_s: Pelton, centrifugal pump`, `Middle: Francis, mixed-flow pump`, `High: Kaplan, propeller, axial compressor`, `Marine steam and gas turbines: about 0.4 to 2`],
      tv: `<p><b>Figure 3: range of specific speeds</b> (values read from the plot, N<sub>s</sub> = N Q<sup>1/2</sup>/(gH)<sup>3/4</sup>)</p>
 <table><tr><th>Machine</th><th>N<sub>s</sub> range (approx.)</th></tr>
 <tr><td>Pelton wheel, single jet</td><td>up to about 0.15</td></tr>
 <tr><td>Pelton wheel, multijet</td><td>0.1 to 0.3</td></tr>
 <tr><td>Francis turbines</td><td>0.23 to 1.9</td></tr>
 <tr><td>Kaplan turbines</td><td>2 to 6</td></tr>
 <tr><td>Propeller turbines</td><td>2 to 3.5</td></tr>
 <tr><td>Centrifugal pumps (radial)</td><td>0.2 to 1.2</td></tr>
 <tr><td>Mixed-flow pumps</td><td>1.3 to 2.8</td></tr>
 <tr><td>Propeller pumps (axial)</td><td>2.9 to 7.5</td></tr>
 <tr><td>Centrifugal compressors and fans</td><td>0.5 to 2</td></tr>
 <tr><td>Axial compressors, blowers, ventilators</td><td>1.5 and above</td></tr>
 <tr><td>Axial-flow steam and gas turbines</td><td>0.4 to 2</td></tr></table>`,
      t: `You are not expected to quote exact numbers, but give the order: Pelton lowest, then centrifugal pump, Francis, mixed flow, Kaplan and axial machines highest.`}
  });
})();
