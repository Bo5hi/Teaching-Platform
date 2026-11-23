# Week 15 build notes: Security+ Mock Exam

## Files
- `course-w15-lessons.js`: talks 15.1 (exam day: format, pacing, strategy) and 15.2 (learning from every miss, final plan). There is no `COURSE_QUIZ.w15`: the mock exam is the test.
- `course-w15-labs.js`: Lab 15.1 "Your final study plan" (browser worksheet, nothing auto-checked).
- `course-w15-practice.js`: `acro-w15a` (architecture and endpoints) and `acro-w15b` (attacks, intelligence, old protocols), 20 each, as Day 2 blocks. They have their own ids because Practice.html loads the practice file of the week the block sits in.
- `docs/build/week15.js`: the plan.

## Scope
The week follows the `week-tasks.js` week 12 list: retake the mock exam to 80% or higher, review every miss with the final PDF, and redo PBQ labs 1 to 10. It adds the final study plan, two short talks from the legacy week 12 lessons, and three legacy week 12 resource links as `read` blocks. There is no new teaching content.

## Plan (estimator totals: Day 1 233 min, Day 2 235 min)
- **Day 1:**
  1. Talk 15.1 (10)
  2. Mock exam retake (90)
  3. Talk 15.2 (10)
  4. Review misses (45)
  5. PBQ redo labs 1 to 8: 15, 5, 15, 5, 5, 10, 10, 10
  6. Survey (3)
- **Day 2:**
  1. PBQ redo 9 (5) and 10 (20)
  2. Mock exam final attempt (90)
  3. Review misses and final PDF (35)
  4. Read the SY0-701 objectives as a checklist (15)
  5. Acronyms set A (10)
  6. Messer pop quizzes (15)
  7. Acronyms set B (10)
  8. Read CompTIA exam experience (10)
  9. Read CompTIA ID requirements (5)
  10. Lab 15.1 (15)
  11. Weekly check-in (5)

Every earlier weekly quiz (1 to 9) and the Week 14 acronym sets are linked in `anytime`.

## Time bases
- **Mock exam:** same as Week 14 (formula 78, set to the 90-minute limit).
- **Review:** 2.7 min per miss.
  - Day 1 assumes the 80% target, so 17 misses = 45.
  - Day 2 assumes about 85% on a third attempt, so 13 misses = 35.
- **PBQ redo:** the Week 14 PBQ rate without the 1 min per task for finding the screen and without the explanation reading. Students know the screens now and read the explanation only if they miss something. Total 100 min for all ten, vs 145 on the first pass.
- **`read` blocks:** taken from the legacy resource notes ("about 15 / 8 / 4 minutes"; 8 -> 10 and 4 -> 5 by the 5-minute rounding).

## Legacy material absorbed (`weeks-data.js` week 12)
- **Lessons:** "What to Expect on Exam Day" and "Time Management and Test-Taking Strategy" became Talk 15.1. "How to Review Missed Questions" became Talk 15.2. All key terms are kept (PBQ, scaled score, diagnostic exam, flagging, elimination, key words, missed-question review, weak spot, focused study plan).
- **Labs and deliverable:** "complete the full-length exam under quiet, closed-note conditions" and "review every miss and record why" are covered by the mock and review blocks and Talk 15.2. "Group misses by domain" and "write a focused final study plan" became Lab 15.1, which reuses Lab 14.1's table. "This exam is diagnostic and does not count toward standing" is covered in Lab 14.1 and the overview.
- **Concepts:** all 10 are covered.
- **Quiz (30 questions):** 10 were rewritten into the talk checks: max questions, passing score, PBQ flagging, elimination, time almost up, reviewing misses, four crypto vs one firewall, lucky guess, domain weights, and one new question on memorized retakes.
  - **Dropped:** the other 20 (many repeat the same points), plus 5 single-domain review questions that Week 14's talks already cover.
- **Resources:**
  - **Kept:** objectives PDF, CompTIA in-person exam page, CompTIA ID requirements, Messer pop-quiz archive.
  - **Dropped:** five YouTube videos (Messer exam overview, FlashGenius PBQs, Pearson VUE, Messer FAQ, Messer study group). They are optional video content.
  - **Not re-checked:** I did not re-check the four kept URLs. They come from the legacy data, so please click them once.

## Facts used
These are SY0-701 facts I treated as well established: at most 90 questions, 90 minutes, 750 on a 100-900 scaled score, multiple choice plus PBQs, Pearson VUE test center or online. I made no claims about voucher prices, retake waiting periods, or exact ID rules; the ID check sends students to CompTIA's page. The note about SY0-801 in `week14-notes.md` applies here too.

## Design decisions to confirm
- **Third attempt on Day 2:** everyone takes it. Students below 80% use it to reach the target. Students who already passed take it to confirm, and are told to explain each answer before picking it. Talk 15.2 and Lab 15.1 warn that retakes of the same 86 shuffled questions can mean memorizing rather than understanding. If Joey prefers, students who already passed could skip it and do quiz retakes instead.
- **Real-world callouts:** the two Week 15 talks have none. They are exam-strategy talks, and a forced incident callout would be filler.

## Cedar Creek
No Cedar Creek content and no new facts.
