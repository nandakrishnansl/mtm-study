MTM Study Companion (UG11T5502 Marine Turbomachinery, IMU Chennai Campus)
=======================================================================

WHAT THIS IS
A static web app: just files, no server code and no database. All five units have slides, simple and
detailed explanations, flashcards, MCQs, match and order games, numericals, derivations, exam questions
and a mind map. Each student's progress is saved on their own device (browser storage).
Settings > Export / Import moves progress between devices.

THREE WAYS TO RUN IT
1. Straight from the folder (simplest, no internet needed)
   Unzip, then double-click index.html. It opens in the browser and everything works.
   Limits: no "install as app" and no offline caching, and progress is kept per browser on that computer.

2. Local server (best for a lab or classroom network)
   Open a terminal in this folder and run:   python3 -m http.server 8000
   Visit http://localhost:8000. Other computers on the same network can use http://<your-computer-IP>:8000
   (phones need https for the install option, so use option 3 for phones).

3. Online (so students open a link and "Add to Home screen")
   Any static host works. The folder can sit at the site root or in a sub-folder; all paths are relative.
   - Netlify: app.netlify.com/drop, drag this whole folder in. You get an https link at once.
   - GitHub Pages: upload the folder contents to a repository, then Settings > Pages > deploy from the main branch.
   - Cloudflare Pages, or the college web server: upload the folder as it is.
   On a phone: open the link in Chrome, menu > Install app / Add to Home screen. On an iPhone use Safari,
   Share > Add to Home Screen. After the first visit the slides you have viewed also work offline.

UPDATING AFTER YOU CHANGE ANY FILE
Raise the version name at the top of sw.js (V = 'mtm-v8' -> 'mtm-v9') so phones fetch the new copy.

BEFORE YOU SHARE IT
- Explanations, question outlines and numerical solutions written for the app show a
  "Draft: awaiting teacher review" note. When you have checked a unit, add  reviewed: true  to that unit
  in data/units.js and the note disappears for it.
- Items in the text that say "please confirm the key" need your decision (a few previous-year questions).
- Previous-year questions: data/pyq.js (Units I-II), data/pyq2.js (III-IV), data/pyq3.js (V).
  Each entry: [topic id, marks, question, answer outline, [slide numbers], 'Month YYYY, Q#'].
- Video cards that open a YouTube search (search_query in the address) are placeholders. Replace each with
  the video you want. They live in data/u1_q.js ... data/u4_q.js, data/u5_q2.js and data/tools.js.
- Your interactive models are in tools/ and the local video is in videos/.

THE COURSE CONTENT FILES
data/uN_slides.js   slide list for the unit (titles, topic ranges)
data/uN_a.js ...    per-slide explanations, key points, exam tips
data/uN_q.js        flashcards, match/order games, exam questions, videos, mind map, formula sheet
data/uN_r.js        extra MCQs (Unit IV)
data/uN_n.js        solved numericals and derivations
slides/uN/          slide images

COLOUR SCHEMES
Students choose a scheme from the palette button at the top, or in Settings > Colour scheme (Paper, Mist, Sky,
Lavender, Blush, Sepia, High contrast, Night, Dusk, Ember, or Match my device). The moon/sun button swaps between
their last light and last dark choice. To add a scheme, add a [data-theme=name] block in css/app.css and one line
in MTM.themes in js/core.js.

QUICK CHECKS
Students can switch the end-of-topic practice questions off with the "Quick checks" button on any study slide.

VISIT COUNTER (OPTIONAL, ANONYMOUS)
To see whether anyone is using the app: make a free site at goatcounter.com, then put its code (the part before
".goatcounter.com") between the quotes in js/stats.js (GOATCOUNTER_CODE = ''), raise the version in sw.js and upload.
It counts app opens, which section is opened (never slide numbers), and installs to the home screen. It records no names,
emails or progress, and it is off while the code is empty. Settings tells students when it is on.
Your own phone or laptop: open the app once with ?stats=off added to the address (for example
https://yourname.github.io/mtm-study/?stats=off) and that device is no longer counted. ?stats=on turns it back on.
