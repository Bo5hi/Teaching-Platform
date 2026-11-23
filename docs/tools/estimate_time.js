// Estimate real student time for each block in a week, from the content itself.
// Usage: node docs/tools/estimate_time.js 1        (week number)
// Prints each block's estimate next to the `mins` in course-data.js, plus day totals.
// The rates are for beginner adult learners working alone. They are written down in
// docs/COURSE_V2.md ("Time estimates"). Change them there and here together.
const path = require('path');
const fs = require('fs');
global.window = global;
const repo = path.resolve(__dirname, '..', '..');
const week = Number(process.argv[2] || 1);
const load = f => { const p = path.join(repo, f); if (fs.existsSync(p)) require(p); };
['course-data.js', `docs/build/week${week}.js`, 'course-projects.js', `course-w${week}-lessons.js`, `course-w${week}-labs.js`,
 `course-w${week}-practice.js`, `course-w${week}-mock.js`].forEach(load);

const RATE = {
  wpm: 140,          // careful reading of new technical material
  figure: 1,         // per diagram
  question: 0.75,    // per knowledge-check or quiz question
  cmdLine: 0.75,     // per command line typed, run, and output read
  checkpoint: 1,     // per lab checkpoint answer
  reflection: 4,     // lab reflection paragraph
  sortItem: 0.6,     // practice sort item (pick category and type)
  flashCard: 0.25,
  control: 1.5,      // mock audit: one control row
  gap: 2.5,          // mock audit: one gap row with risk and fix
  asset: 1,          // mock audit: one asset row
  summary: 15,       // mock audit: the written summary
  coverage: 0.8,     // share of the answer key a typical student logs
  longAnswer: 10,    // case study written answer
  shortAnswer: 3,
  pdfPage: 2.5
};

const strip = s => String(s).replace(/<[^>]+>/g, ' ');
const SKIP = /^(id|svg|href|fig|figure|type|cmd|answer|accept|kw|mins|waitMins|week|module)$/;
const words = v => v == null ? 0
  : typeof v === 'string' ? strip(v).split(/\s+/).filter(Boolean).length
  : Array.isArray(v) ? v.reduce((a, x) => a + words(x), 0)
  : typeof v === 'object' ? Object.entries(v).reduce((a, [k, x]) => a + (SKIP.test(k) ? 0 : words(x)), 0)
  : 0;
const read = n => n / RATE.wpm;
const q = s => new URLSearchParams(String(s).split('?')[1] || '');

function lesson(id) {
  const l = (window.COURSE_LESSONS || {})[id]; if (!l) return null;
  const figs = (JSON.stringify(l.sections || []).match(/"fig(ure)?"\s*:/g) || []).length;
  return read(words({ intro: l.intro, sections: l.sections })) + figs * RATE.figure + (l.check || []).length * RATE.question;
}
function lab(id) {
  const b = (window.COURSE_LABS || {})[id]; if (!b) return null;
  const cmds = (b.steps || []).reduce((a, s) => a + (s.cmd ? s.cmd.split('\n').filter(x => x.trim()).length : 0), 0);
  const cps = Array.isArray(b.checkpoints) ? b.checkpoints.length : 0;
  return read(words(b)) + cmds * RATE.cmdLine + cps * RATE.checkpoint + (b.reflection ? RATE.reflection : 0) + (b.waitMins || 0);
}
function practice(id) {
  const p = (window.COURSE_PRACTICE || {})[id]; if (!p) return null;
  const n = (p.items || p.cards || []).length;
  return n * ((p.kind || p.mode) === 'flash' ? RATE.flashCard : RATE.sortItem);
}
function quiz() {
  const z = (window.COURSE_QUIZ || {})['w' + week]; if (!z) return null;
  const qs = Array.isArray(z) ? z : z.questions || [];
  return qs.length * RATE.question + read(words(qs)) * 0.25;
}
function mock(part) {
  const M = window['MOCK_AUDIT_W' + week]; if (!M || !M.areas) return null;
  let t = 0;
  for (const a of M.areas) {
    if (a.part !== part) continue;
    const k = (M.key && M.key.areas && M.key.areas[a.id]) || {};
    t += read(words(a)) + RATE.coverage * ((k.controls || []).length * RATE.control + (k.gaps || []).length * RATE.gap);
  }
  if (part === 2) {
    const assets = M.areas.reduce((n, a) => n + (a.assetsHere || []).length, 0);
    t += RATE.coverage * assets * RATE.asset + RATE.summary + read(words(M.brief));
  }
  return t;
}
function project(n) {
  const P = (window.HUB_PROJECTS || {})[n]; if (!P) return null;
  const f = P.fields || [];
  return f.filter(x => x.ta).length * RATE.longAnswer + f.filter(x => !x.ta).length * RATE.shortAnswer + 4 * RATE.pdfPage;
}

function estimate(b) {
  const href = b.href || '';
  if ((b.type === 'lesson' || b.type === 'talk') && /^Lesson\.html/.test(href)) return lesson(q(href).get('l'));
  if (b.type === 'lab') return lab(q(href).get('l'));
  if (b.type === 'practice') return practice(q(href).get('p'));
  if (b.type === 'quiz') return quiz();
  if (b.type === 'project') return project(q(href).get('p'));
  if (b.type === 'mock' && /Mock_Control_Audit/.test(href)) return mock(/part 2/i.test(b.title) ? 2 : 1);
  return null;   // check-ins, tools, sources, other mocks: keep the set time (show the arithmetic in b.basis)
}

// A week being built lives in docs/build/weekN.js (window.COURSE_STAGING[N]) until it is merged into course-data.js.
const W = (window.COURSE_STAGING || {})[week] || COURSE.weeks.find(w => w.num === week);
const r5 = m => Math.max(5, Math.round(m / 5) * 5);
for (const [i, d] of (W.days || []).entries()) {
  let set = 0, est = 0;
  console.log(`\nDay ${i + 1}: ${d.title || ''}`);
  for (const b of d.blocks) {
    const e = estimate(b);
    const m = e == null ? b.mins : r5(e);
    set += b.mins; est += m;
    const flag = e != null && Math.abs(m - b.mins) >= Math.max(10, b.mins * 0.2) ? '  <-- change' : '';
    const how = e == null ? (b.basis ? `  [set: ${b.basis}]` : '  [set, no basis given]') : '';
    console.log(`  ${String(b.mins).padStart(3)} set | ${String(m).padStart(3)} est  ${b.id.padEnd(9)} ${b.title}${flag}${how}`);
  }
  console.log(`  ${String(set).padStart(3)} set | ${String(est).padStart(3)} est  = ${(est / 60).toFixed(1)} hours estimated`);
}
