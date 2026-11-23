# Week 14 build notes: Security+ Review

## Files
- `course-w14-lessons.js`: review talks 14.1 to 14.5, one per SY0-701 domain. There is no `COURSE_QUIZ.w14`: students retake the earlier weekly quizzes instead.
- `course-w14-labs.js`: Lab 14.1 "Score your mock exam by domain" (browser worksheet, nothing auto-checked).
- `course-w14-practice.js`: `acro-w14a` (risk, resilience, governance) and `acro-w14b` (crypto, authentication, remote access), 20 each, in `anytime`.
- `docs/build/week14.js`: the plan.

## Scope (Joey's decision)
The week follows the `week-tasks.js` week 11 list: mock exam (first attempt), PBQ labs 1 to 10, and review of every miss (with the PDF report). On top of that list it has:
- the legacy week 11 domain lessons, rewritten as short review talks;
- acronym practice;
- retakes of earlier weekly quizzes (`Quiz.html?w=N`).

There is no new teaching content. The mock exam and review blocks are type `tool`, not `mock`: Home labels `mock` "Mock project" and looks up `mccoe_mockproj`. Week 14 has no `mock` object.

## Plan (estimator totals: Day 1 253 min, Day 2 260 min)
- **Day 1:**
  1. Mock exam, first attempt (90)
  2. Review every miss and PDF (80)
  3. Lab 14.1 (20)
  4. Talk 14.1 (10)
  5. PBQ 2 (10)
  6. PBQ 9 (10)
  7. Retake W1 quiz (15)
  8. Retake W2 quiz (15)
  9. Survey (3)
- **Day 2:**
  1. Talk 14.2 (10)
  2. PBQ 1 (25), PBQ 3 (20), PBQ 5 (10)
  3. Retake W5 and W6 quizzes (15 each)
  4. Talk 14.3 (10)
  5. PBQ 7 (10), PBQ 4 (10), PBQ 10 (25)
  6. Retake W4 quiz (15)
  7. Talk 14.4 (10)
  8. PBQ 6 (10), PBQ 8 (15)
  9. Retake W7 and W8 quizzes (15 each)
  10. Talk 14.5 (10)
  11. Retake W3 quiz (15)
  12. Weekly check-in (5)

Each domain talk is followed by the PBQ labs and weekly-quiz retakes for that domain. The W9 retake, the exam objectives PDF, and the Professor Messer index are in `anytime`.

## Time bases (blocks the estimator cannot measure)
- **Mock exam:**
  - The quiz rate gives 86 x 0.75 + 7,750 words / 140 x 0.25 = 78 min.
  - I set the block to the 90-minute time limit, because the exam is a timed sitting that auto-submits.
- **Review of misses:**
  - Each miss = re-read the question and options (avg 90 words) + the explanation (avg 146 words), 236 words / 140 = 1.7 min, plus a 1-minute note = 2.7 min.
  - This assumes about 65% on a first attempt (30 misses), which gives 80 min.
  - **Joey: check last cohort's first-attempt average** in the tracker mock view (`mccoe_mock`) and re-base this.
- **PBQ labs (new rate; please confirm):**
  - Reading scenario, tasks, and questions at 140 wpm.
  - Each value typed, setting chosen, lookup run, or email judged x 0.75 (command-line rate).
  - Each question x 1 (checkpoint rate).
  - 1 min per task to find the right screen in an unfamiliar simulated UI.
  - The explanation shown after scoring, at 140 wpm.
  - Totals: Lab 1 25, Lab 2 10, Lab 3 20, Lab 4 10, Lab 5 10, Lab 6 10, Lab 7 10, Lab 8 15, Lab 9 10, Lab 10 25, so **145 min for all ten on a first pass**. The PBQ page's own `mins` (5 to 10 each, 60 total) are exam-pace targets, not first-attempt beginner times.
- **Quiz retakes:** 20 questions each, measured like the Week 1 quiz = 15.

## Legacy material absorbed (`weeks-data.js` week 11)
- **Lessons:** all 4 domain lessons (Domain 1; Domain 2; Domains 3+4; Domain 5 + governance terms). I split Domains 3 and 4 into separate talks, so 4 lessons became 5 talks of 600 to 810 words each, with key terms carried into the text.
- **Concepts:** all 10 (SY0-701, CIA, control types, threat vs vulnerability, zero trust, GRC, risk assessment, residual risk, SIEM, IR) are covered in the talks.
- **Labs:** "Record your score per domain and write a short study plan for your two weakest domains" became Lab 14.1. The other legacy labs were "take the Mon to Fri practice tests"; see the drop list below.
- **Deliverable:** domain-by-domain checks + a study plan for the two weakest domains. Lab 14.1 and the retakes cover it.
- **Quiz:** the 5 "Domain Knowledge Check" questions, plus questions rewritten from the practice tests, went into the 25 knowledge-check questions in the talks.
- **Resources:** the CompTIA objectives PDF and Professor Messer's SY0-701 index are in `anytime`. The six YouTube videos (Messer 1.4, 2.4, 3.2, 4.6, 5.1) were dropped as day blocks. Joey said no new teaching content, and they are optional videos.

**Dropped:** the five legacy daily practice tests (`practiceSets`, 5 x 50 = 250 questions). They were already hidden from students when Joey made weeks 11 and 12 mock-exam + PBQ only (2026-11-06; `renderWeek(11|12)` returns early). Only about 25 of them were rewritten into talk checks. If Joey wants them back, they could become `COURSE_QUIZ.w14` (one 20-question quiz). Quiz.html supports only one quiz per week, so all 250 would need a page change.

## Real-world callouts
DigiNotar 2011 (14.1), WannaCry 2017 (14.2), Target 2013 (14.3), Colonial Pipeline 2021 (14.4), SolarWinds 2020 (14.5).

## Cedar Creek
No new facts. The talks recall canon only:
- PLANT-PC-07 kiosk compensating control
- the Week 1 threat actor profiles
- plant and office VLANs reaching each other
- the 2018 AUP and no other policies
- 61% training completion
- Brian Kessler's badge

## Things to check
- **SY0-701 vs SY0-801.** The brief says SY0-701. NEXT-STEPS and `secplus-mock-data.js` say SY0-801 / CertMaster V8, and the mock includes AI topics (lesson 8.5.x). The talks use SY0-701 domains and weights (12/22/18/28/20). If the cohort sits SY0-801, re-check the domain names and weights in 14.1 and Lab 14.1.
- **Lab 14.1 module-to-domain table.** It maps the mock exam's "lessons to review" module numbers (1 to 16) to domains and course weeks. The weeks for modules 10 (Week 7), 12 (Weeks 8-9), 14 (Week 5), and 15 (Weeks 10-13) are my best guess from COURSE_V2.md. Confirm them once weeks 5, 7, and 8 are final.
- **Talk 14.1's "course weeks to re-read" table** uses the same assumptions.

## Shared-file issues
- `Quiz.html`, `Lesson.html`, `CC.crumb` / `nextButton` / `blockFor` use the **first** block with a matching href. A Week 14 retake of `Quiz.html?w=1` therefore shows the Week 1 breadcrumb and "Next" button, not Week 14's. `markDoneFor` marks both blocks done, which is fine. Suggestion: prefer the block in the current week, or pass `&b=<blockId>`.
- Home `extra()` shows `rec.quiz['w' + state.week]` on quiz blocks, so retake blocks in Week 14 never show the student's best score. Suggestion: read the week from the block's href.
- Home's "Due this week" rail lists every quiz block. Week 14 has 8 retakes there.
