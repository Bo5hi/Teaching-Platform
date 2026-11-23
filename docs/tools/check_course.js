// Check every step in course-data.js points at something that exists.
// Usage: node docs/tools/check_course.js        (prints problems, then the external links to click once)
const fs = require('fs');
const path = require('path');
global.window = global;
const repo = path.resolve(__dirname, '..', '..');
const load = f => { const p = path.join(repo, f); if (fs.existsSync(p)) { require(p); return true; } return false; };
load('course-data.js'); load('course-projects.js');
for (let n = 1; n <= 15; n++) ['lessons', 'labs', 'practice', 'figures', 'mock'].forEach(k => load(`course-w${n}-${k}.js`));

const problems = [], external = new Map();
const qp = (href, k) => (String(href).match(new RegExp('[?&]' + k + '=([^&#]*)')) || [])[1];
const figs = window.COURSE_FIGURES || {};
for (const w of COURSE.weeks) {
  if (!w.days) { problems.push(`week ${w.num}: no days`); continue; }
  for (const d of w.days) for (const b of d.blocks) {
    const where = `w${w.num} ${b.id}`;
    const h = b.href || '';
    if (!b.mins || b.mins < 1) problems.push(`${where}: no minutes`);
    if (/^https?:/.test(h)) { external.set(h, where); continue; }
    const file = h.split(/[?#]/)[0];
    if (!fs.existsSync(path.join(repo, file))) { problems.push(`${where}: missing page ${file}`); continue; }
    if (/^Lesson\.html/.test(h) && !(COURSE_LESSONS[qp(h, 'l')])) problems.push(`${where}: lesson ${qp(h, 'l')} not found`);
    if (/^Lab\.html/.test(h) && !(COURSE_LABS[qp(h, 'l')])) problems.push(`${where}: lab ${qp(h, 'l')} not found`);
    if (/^Practice\.html/.test(h) && !(COURSE_PRACTICE[qp(h, 'p')])) problems.push(`${where}: practice ${qp(h, 'p')} not found`);
    if (/^Quiz\.html/.test(h)) { const z = COURSE_QUIZ['w' + qp(h, 'w')]; if (!z) problems.push(`${where}: quiz w${qp(h, 'w')} not found`); }
    if (/^Project\.html/.test(h) && !HUB_PROJECTS[qp(h, 'p')]) problems.push(`${where}: project ${qp(h, 'p')} not found`);
  }
  for (const a of w.anytime || []) {
    if (/^https?:/.test(a.href)) external.set(a.href, `w${w.num} anytime`);
    else if (/^Practice\.html/.test(a.href) && !COURSE_PRACTICE[qp(a.href, 'p')]) problems.push(`w${w.num} anytime: practice ${qp(a.href, 'p')} not found`);
  }
}
// Lesson figures and lesson/lab ids that sit in the wrong week's file.
for (const [id, l] of Object.entries(window.COURSE_LESSONS || {})) {
  for (const s of l.sections || []) if (s.figure && !figs[s.figure.id]) problems.push(`lesson ${id}: figure ${s.figure.id} missing`);
  const wk = id.split('.')[0];
  if (!fs.readFileSync(path.join(repo, `course-w${wk}-lessons.js`), 'utf8').includes(`'${id}'`) &&
      !fs.readFileSync(path.join(repo, `course-w${wk}-lessons.js`), 'utf8').includes(`"${id}"`)) problems.push(`lesson ${id} is not in course-w${wk}-lessons.js`);
}
console.log(problems.length ? 'PROBLEMS:\n  ' + problems.join('\n  ') : 'No problems found.');
console.log(`\nWeeks ${COURSE.weeks.length}, lessons ${Object.keys(COURSE_LESSONS).length}, labs ${Object.keys(COURSE_LABS).length}, practice sets ${Object.keys(COURSE_PRACTICE).length}, quizzes ${Object.keys(COURSE_QUIZ).length}, figures ${Object.keys(figs).length}`);
console.log(`\nExternal links (${external.size}):`);
for (const [u, w] of external) console.log(`  ${w}  ${u}`);
