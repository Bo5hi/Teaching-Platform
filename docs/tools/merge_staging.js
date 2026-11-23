// Merge finished week plans from docs/build/weekN.js into course-data.js.
// Usage: node docs/tools/merge_staging.js 2 3 4      (or "all" for every docs/build/weekN.js)
// Rewrites course-data.js with one line per block. Week 1 and any week not listed are kept as they are.
const fs = require('fs');
const path = require('path');
global.window = global;
const repo = path.resolve(__dirname, '..', '..');
require(path.join(repo, 'course-data.js'));
const buildDir = path.join(repo, 'docs', 'build');
let weeks = process.argv.slice(2);
if (weeks[0] === 'all') weeks = fs.readdirSync(buildDir).map(f => (f.match(/^week(\d+)\.js$/) || [])[1]).filter(Boolean);
for (const n of weeks) require(path.join(buildDir, `week${n}.js`));

const S = window.COURSE_STAGING || {};
const ids = new Set();
for (const n of weeks.map(Number)) {
  const w = S[n];
  if (!w || !Array.isArray(w.days)) throw new Error(`week ${n}: no staged plan with days`);
  const i = COURSE.weeks.findIndex(x => x.num === n);
  w.num = n;
  COURSE.weeks[i] = w;
}
// A step page repeated in a later week (a quiz retake, a lesson re-read) gets &from=<week> so it is its own step
// there: its own done tick, breadcrumb and Next button. The step pages carry `from` through.
const firstWeek = {};
for (const w of COURSE.weeks) for (const d of w.days || []) for (const b of d.blocks) {
  if (ids.has(b.id)) throw new Error(`duplicate block id ${b.id}`);
  ids.add(b.id);
  if (/^(Quiz|Lesson|Lab|Practice|Project)\.html\?/.test(b.href || '') && !/[?&]from=/.test(b.href)) {
    if (firstWeek[b.href] && firstWeek[b.href] !== w.num) b.href += '&from=' + w.num;
    else firstWeek[b.href] = w.num;
  }
}

const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const val = v => typeof v === 'string' ? q(v) : Array.isArray(v) ? '[' + v.map(val).join(', ') + ']'
  : v && typeof v === 'object' ? '{ ' + Object.entries(v).map(([k, x]) => `${k}: ${val(x)}`).join(', ') + ' }' : String(v);
const ORDER = ['id', 'type', 'mins', 'title', 'desc', 'href', 'due', 'basis'];
const block = b => '{ ' + [...ORDER.filter(k => b[k] !== undefined), ...Object.keys(b).filter(k => !ORDER.includes(k))].map(k => `${k}: ${val(b[k])}`).join(', ') + ' }';

function week(w) {
  if (!w.days) return '    ' + val(w);
  const out = ['    {'];
  const head = Object.entries(w).filter(([k]) => !['days', 'mock', 'anytime'].includes(k));
  out.push('      ' + head.map(([k, v]) => `${k}: ${val(v)}`).join(',\n      ') + ',');
  if (w.anytime) out.push('      anytime: [\n' + w.anytime.map(a => '        ' + val(a)).join(',\n') + '\n      ],');
  out.push('      days: [');
  out.push(w.days.map(d => '        {\n          name: ' + q(d.name) + ', focus: ' + q(d.focus) + ',\n          blocks: [\n' +
    d.blocks.map(b => '            ' + block(b)).join(',\n') + '\n          ]\n        }').join(',\n'));
  out.push('      ]' + (w.mock ? ',' : ''));
  if (w.mock) {
    const { rubric, ...rest } = w.mock;
    out.push('      mock: {\n        ' + Object.entries(rest).map(([k, v]) => `${k}: ${val(v)}`).join(', ') +
      (rubric ? ',\n        rubric: [\n' + rubric.map(r => '          ' + val(r)).join(',\n') + '\n        ]' : '') + '\n      }');
  }
  out.push('    }');
  return out.join('\n');
}

const src = `// Course v2 map: Week > Day > numbered blocks. See docs/COURSE_V2.md.
// Block ids are permanent (student progress is stored by id). Add new ids; don't renumber old ones.
// legacy: N = this week still opens Week N of the current Student Platform.
// Weeks 2-15 were merged from docs/build/weekN.js by docs/tools/merge_staging.js.
window.COURSE = {
  start: ${q(COURSE.start)},
  weeks: [
${COURSE.weeks.map(week).join(',\n')}
  ]
};
`;
fs.writeFileSync(path.join(repo, 'course-data.js'), src);
console.log('merged weeks', weeks.join(', '), '| blocks', ids.size);
