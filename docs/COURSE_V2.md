# Course v2: Week > Day layout (replaces the 5 pillars)

Status: Week 1 pilot on branch `course-v2`. Not linked from the live Hub yet. Goes live before the next cohort.

## Decisions (Joey, 2026-11-23)
- Students land on **This Week**: Week N > Day 1 and Day 2 (class meets 2 days a week, about 4 hours of work per day). Numbered steps in the order to do them. Each step opens its tool directly.
- Menu has 3 tabs: **This Week**, **My Work** (tickets, grades, XP), **Resources** (tools and docs). The Portfolio card goes away; XP, the Scoreboard and HTB stay.
- Students see the current week and past weeks; future weeks are hidden.
- Weeks 1-5 teach Security+ (CertMaster Perform V8 / SY0-801) through the **Cedar Creek Industries** scenario (`docs/CEDAR_CREEK.md`). The platform carries all of the teaching content; students don't need CertMaster. Weeks 1-5 cover the modules weeks 6-10 don't: 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 16.
- Linux/Kali is taught inside the labs. Students run a Kali VM on their PCs, plus browser simulations.
- Each week ends in a **mock hands-on project**, graded by rubric in the tracker (25 pts, 5 criteria x 5), with Claude draft grades like the SOC tickets.
- Lesson and quiz duplicates (Student Platform week vs Academy module) merge into one lesson set and one quiz per week.

| Week | Day 1 | Day 2 | Mock project |
|---|---|---|---|
| 1 Foundations | Mod 1 concepts & controls; Kali setup | Mod 2 threat actors & vectors; Mod 7 physical & assets | Mock Control Audit |
| 2 Cryptography | Mod 3 symmetric/asymmetric/hashing | Mod 3 PKI & certificates (PBQ 2, 9) | Mock Secure File Exchange |
| 3 Identity & Data | Mod 4 authentication, MFA, AD | Mod 4 authorization; Mod 16 data protection | Mock Access Review |
| 4 Secure Networks | Mod 5 architecture; Mod 6 cloud (PBQ 4, 5) | Mod 9 secure config & wireless; Mod 11 (PBQ 7, 8) | Mock Firewall & Network Review |
| 5 Vulnerabilities & Attacks | Mod 8 vulnerability management (PBQ 6) | Mod 13 attacks & indicators; Mod 14 change mgmt (PBQ 1) | Mock Vulnerability Triage |

## Files
| File | Purpose |
|---|---|
| `MCCoE_Home.html` | Student home: This Week / My Work / Resources |
| `Lesson.html?l=1.1` | Lesson reader + 5-question knowledge check |
| `Lab.html?l=1.1` | Guided lab: steps, copyable commands, checkpoints, reflection |
| `Practice.html?p=controls` | Auto-scored practice (sort / flashcards) |
| `Quiz.html?w=1` | Weekly quiz |
| `Mock_Control_Audit.html` | Week 1 mock project |
| `course.css`, `course.js` | Shared look, Firebase, student identity, progress helpers |
| `course-data.js` | `COURSE.weeks[]`: weeks, days, blocks |
| `course-w1-lessons.js` | Week 1 lessons + quiz (`COURSE_LESSONS`, `COURSE_QUIZ`) |
| `course-w1-labs.js` | Week 1 labs (`COURSE_LABS`) |
| `course-w1-practice.js` | Week 1 practice sets (`COURSE_PRACTICE`) |
| `assets/cedarcreek/week1/` | Lab pack students download into Kali |

Every page loads, in order: Firebase 8.10.1 (app + database), `course.css`, `course.js`, `course-data.js`, then the week content files it needs. No build step, no frameworks. No emojis.

## Student identity
Same as the rest of the platform: `?name=&id=` from the Hub, falling back to `localStorage` `hub_name` / `hub_id`. `CC.student()` returns `{name, id, key}` where `key` is the Firebase-safe id. `CC.link(url)` appends name/id to an internal URL.

## Firebase paths (add both to `database.rules.json` and publish in the Firebase console)
- `mccoe_course/{key}` = `{ name, id, lastActivity, done: {blockId: iso}, checks: {lessonId: {score, total, at}}, labs: {labId: {answers: {cpId: value}, correct: n, auto: n, reflection, status: 'saved'|'submitted', at}}, quiz: {w1: {best, last, attempts, at, missed: []}}, practice: {pid: {best, last, at}} }`
- `mccoe_mockproj/{key}/w{N}` = `{ name, id, status: 'draft'|'submitted', savedAt, submittedAt, data: {...project-specific...}, grade: {rubric: [5 numbers], score, max: 25, feedback, gradedBy, gradedAt} }`

## Data shapes

### `course-data.js`
```js
COURSE.weeks = [{
  num: 1, title, sub, modules: 'CertMaster Modules 1, 2, 7', overview,
  days: [{ name: 'Day 1', focus, blocks: [
    { id: 'w1d1-b1', type: 'lesson'|'lab'|'practice'|'mock'|'quiz'|'checkin'|'pbq',
      mins, title, desc, href: 'Lesson.html?l=1.0', due? }
  ]}],
  mock: { id: 'w1', title, href, rubric: [[name, description] x5] }
}]
```
A week without `days` is shown as "coming soon".

### `COURSE_LESSONS['1.1']`
```js
{ id: '1.1', week: 1, title, mins, module: 'CertMaster Module 1',
  intro: 'Why this matters at Cedar Creek (1 paragraph)',
  sections: [{ title, body: ['paragraph', ...],
               list?: ['bullet', ...],
               table?: { head: [...], rows: [[...], ...] },
               keyTerms?: [{ term, definition }],
               callout?: { kind: 'cedar'|'exam'|'tip', title, text } }],
  check: [{ q, opts: [4 strings], ans: index, why }] }   // 5 questions
```

### `COURSE_QUIZ.w1`
`{ title, pass: 80, questions: [{ q, opts, ans, why, lesson: '1.2' }] }` (20 questions, shuffled per attempt)

### `COURSE_LABS['1.1']`
```js
{ id: '1.1', week: 1, title, mins, env: 'kali'|'browser',
  goal, youNeed: ['...'],
  steps: [{ title, body: ['paragraph'], cmd?: 'command(s)', expect?: 'what you should see', tip? }],
  checkpoints: [{ id: 'c1', q, kind: 'text'|'number'|'choice'|'paste', opts?, answer? }],
  // answer present = auto-checked (number exact, choice index, text case-insensitive match against answer or answer[]); no answer = instructor reads it
  reflection: 'prompt' }
```

### `COURSE_PRACTICE['controls']`
`{ title, kind: 'sort', instructions, dims: [{key, label, options}], items: [{ text, answers: {category: ['Physical'], type: ['Preventive']}, why }] }`
or `{ kind: 'flash', items: [{ term, definition }] }`
