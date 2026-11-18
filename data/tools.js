/* interactive models built by the lecturer; each file lives in site/tools/ */
window.MTM = window.MTM || {c: {}};
MTM.extTools = [
  {id: 'turbograph', file: 'turbograph.html', unit: 'u2', title: 'Turbograph: velocity triangle drafting table', desc: 'Draw and measure the velocity triangles of De Laval, Curtis, Rateau and Parsons stages, or draw your own vectors on a grid.'},
  {id: 'vt-assembly', file: 'velocity-triangles.html', unit: 'u1', title: 'Velocity triangle assembly', desc: 'Watch the inlet and outlet triangles slide onto the common blade-speed line to form the combined diagram. Change u, V1, the angles and the blade coefficient.'},
  {id: 'profiles', file: 'turbine-profiles.html', unit: 'u2', title: 'Turbine pressure and velocity profiles', desc: 'Pressure and velocity along the flow path for De Laval, Curtis, Rateau and Parsons turbines.'},
  {id: 'cc-parts', file: 'centrifugal-compressor-parts.html', unit: 'u4', title: 'Centrifugal compressor parts', desc: 'Select a part, or take the tour from the inlet pipe to the outlet, with the numbering of Venkanna Fig. 4.1.'}
];

/* extra video suggestions for units that have no MTM.c content block yet (kept apart so the unit does not switch to "full content" mode).
   kind: 'local' = file in site/videos, 'yt' = YouTube search link (teacher to replace with a chosen video) */
MTM.xvid = {
  u1: [
    {topic: '1.8.1', title: 'Impulse and reaction turbines compared', kind: 'yt', url: 'https://www.youtube.com/results?search_query=impulse+vs+reaction+turbine+animation', why: 'A short animation of the two blade types and how the steam velocity and pressure change.'},
    {topic: '1.5', title: 'Velocity triangles for turbine blades', kind: 'yt', url: 'https://www.youtube.com/results?search_query=turbine+velocity+triangles+explained', why: 'Useful before the Euler work equation: how the inlet and outlet triangles are drawn.'}
  ],
  u2: [
    {topic: '2.1', title: 'How does a steam turbine work? (video named on slide 3)', kind: 'yt', url: 'https://www.youtube.com/watch?v=SPg7hOxFItI', why: 'The video your teacher points to on slide 3: the whole turbine, from nozzle to exhaust.'},
    {topic: '2.3', title: 'Astern steam turbine animation (video named on slide 19)', kind: 'yt', url: 'https://www.youtube.com/shorts/Hf615lH_2_8', why: 'Your teacher\u2019s link on slide 19: how a ship\u2019s astern turbine reverses the propeller.'},
    {topic: '2.7', title: 'How Curtis turbines tame supersonic steam', kind: 'local', url: 'videos/curtis-turbine.mp4', why: 'Your teacher’s video on the velocity-compounded (Curtis) stage. The file is about 8 MB, so it plays best on Wi-Fi.'},
    {topic: '2.6', title: 'Pressure and velocity compounding', kind: 'yt', url: 'https://www.youtube.com/results?search_query=steam+turbine+compounding+animation', why: 'A quick look at why a single stage is split into several.'},
    {topic: '2.1.1', title: 'Steam turbine construction', kind: 'yt', url: 'https://www.youtube.com/results?search_query=steam+turbine+construction+rotor+casing+diaphragm', why: 'Rotor, casing, diaphragms and blades, shown in one place.'}
  ],
  u3: [
    {topic: '3.2', title: 'Dimensional analysis and similarity', kind: 'yt', url: 'https://www.youtube.com/results?search_query=dimensional+analysis+buckingham+pi+theorem+turbomachines', why: 'Buckingham pi theorem worked through step by step.'},
    {topic: '3.5', title: 'Specific speed and machine type', kind: 'yt', url: 'https://www.youtube.com/results?search_query=specific+speed+pump+turbine+explained', why: 'How the specific speed points to the shape of a pump or turbine.'}
  ],
  u4: [
    {topic: '4.1.1', title: 'How a centrifugal compressor works', kind: 'yt', url: 'https://www.youtube.com/results?search_query=centrifugal+compressor+how+it+works+animation', why: 'Inlet, impeller, diffuser and volute in one animation.'},
    {topic: '4.3.1', title: 'How an axial compressor works', kind: 'yt', url: 'https://www.youtube.com/results?search_query=axial+compressor+how+it+works+animation', why: 'Rotor and stator rows and the rise of pressure stage by stage.'},
    {topic: '4.1.8', title: 'Compressor surge and stall', kind: 'yt', url: 'https://www.youtube.com/results?search_query=compressor+surge+and+stall+explained', why: 'What surge looks and sounds like, and why it is avoided.'}
  ]
};
MTM.vids = uid => ((MTM.cont(uid) || {}).vid || []).concat((MTM.xvid || {})[uid] || []);
