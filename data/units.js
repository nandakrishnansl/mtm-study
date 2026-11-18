/* units registry: titles and hours from the syllabus (UG11T5502). ready = slides and content built. */
window.MTM = window.MTM || {c: {}};
MTM.units = [
  {id: 'u1', no: 'I', title: 'Fundamentals of Turbo Machines', hours: 8, ready: true},
  {id: 'u2', no: 'II', title: 'Marine Steam Turbines', hours: 20, ready: true},
  {id: 'u3', no: 'III', title: 'Dimensional Analysis: Similitude for Turbo Machinery', hours: 10, ready: true},
  {id: 'u4', no: 'IV', title: 'Turbo-Compressor', hours: 12, ready: true},
  {id: 'u5', no: 'V', title: 'Gas Turbines', hours: 10, ready: true}
];
MTM.course = {code: 'UG11T5502', title: 'Marine Turbo Machinery', school: 'IMU Chennai Campus'};
MTM.pyq = MTM.pyq || {u1: [], u2: [], u3: [], u4: [], u5: []};
/* Previous-year questions are added here, one array per unit:
   [topicId, marks, 'question html', 'answer outline html', [slide numbers], 'Month Year, Q no.']
   Example: ['5.1.1', 10, 'Derive the efficiency of ...', '<ul><li>...</li></ul>', [4], 'Nov 2024, Q3(a)'] */
