# Course v2 redesign: where we left off

Last updated: 2026-11-23. Read this first, then `docs/COURSE_V2.md` (structure, data shapes, decisions) and `docs/CEDAR_CREEK.md` (scenario reference).

## The goal
Take everything from the original MCCoE Hub (5 pillars + cards) and reorganize it so students can follow it easily. Each week is split into **Day 1 and Day 2**, the two class days, with about 4 hours of work each. Each day is a numbered list of steps, and each step opens its tool directly. There are no pillars.

## Status
- **Branch `course-v2`**, committed on the work PC, **NOT pushed**. The live site (`main`) is unchanged.
- **Week 1 is fully built** as the pilot:
  - **Lessons:** 6, with 8 diagrams.
  - **Labs:** 4 (Kali + browser), using the Cedar Creek lab pack.
  - **Practice:** the Control Sorter and 2 acronym sets.
  - **Quiz:** 20 questions.
  - **Mock Control Audit:** a clickable campus map with 9 areas, graded by a 25-point rubric.
  - **Project 1** (Target case study).
- **Weeks 2-5** show "being built" notes. **Weeks 6-15** open the old Student Platform week for now (`legacy` in `course-data.js`).
- **Tracker:** new view "Course Week 1 (pilot)" with progress per student, lab answers, and audit grading. It pre-checks against the answer key and suggests scores for the first three rubric criteria.
- **Hub:** after sign-in, students now go straight to `MCCoE_Home.html` (This Week). `MCCoE_Hub.html?classic=1` still shows the old card Hub.
- **Preview for Joey (no Firebase, saves in the browser only):** https://claude.ai/artifact/RsS8mdWhNYj3UinWWHCMc7

## Decisions Joey has made (don't re-ask)
- **15-week course:**

  | Weeks | What |
  |---|---|
  | 1-5 | Security+ at Cedar Creek |
  | 6 | Human Factors |
  | 7 | Defensive Tools |
  | 8 | Incident Response |
  | **9** | **Mock tickets, full week** (+1 week) |
  | **10-13** | **Capstone mock assessment, Northgate** (was 2 weeks, now 4) |
  | 14 | Security+ Review |
  | 15 | Security+ Mock Exam |

  The last cohort said they needed the extra ticket and capstone time.
- **Light weeks:** weeks 9-13 are light-lecture. Mostly work time, plus one short daily talk tied only to that day's work.
- **Mock pentest:** stays **2 weeks in Weeks 4-5**, as on the old Hub. It IS the mock project for those weeks: Week 4 recon and scanning, Week 5 exploitation, post-exploitation and report. The firewall review and vulnerability triage ideas become smaller labs inside it.
- **Security+ coverage:** weeks 1-5 teach Security+ (CertMaster Perform V8 / SY0-801) modules 1-9, 11, 13, 14 and 16, the ones later weeks don't cover. **The platform carries all teaching content**; students don't use CertMaster. Never copy CertMaster text.
- **Scenario:** **Cedar Creek Industries** for weeks 1-5. It is the same company as the SOC tickets.
- **Linux:** taught inside the Kali labs. Students install Kali in VirtualBox on their own PCs.
- **Mock projects:** graded by a rubric in the tracker (25 points, 5 criteria), like the SOC tickets.
- **Case studies:** keep all **8** (Target, Colonial, SolarWinds, Equifax). Each gets a **60-75 minute block on Day 2** of weeks 1-8 (Project N in Week N). Students finish the write-up at home if needed.
- **Merge duplicates:** the Student Platform week and the Academy module become one lesson set and one quiz per week.
- **Students see** the current and past weeks only. `?preview=1` shows all weeks.
- **Menu:** This Week | My Work (grades, tickets, XP) | Resources. The Portfolio card is removed; XP, the Scoreboard and HTB stay.
- **Look:** "Up next" card at the top of This Week; more diagrams in lessons.
- **Cohort start:** **Monday, January 11, 2027** (confirmed). `COURSE.start = '2027-01-11'` in `course-data.js`.
- **Times are real human hours.** Joey said earlier estimates ran long (Claude would say 2 hours for something that took 30 minutes). Every `mins` value comes from `node docs/tools/estimate_time.js <week>`; the rates are in `docs/COURSE_V2.md` under "Time estimates". Run it for every new week and don't hand-guess minutes.

## Needs Joey
1. **Click through the preview** and give feedback on Week 1: day order, reading length, lab difficulty, the audit. Joey's first reaction (2026-11-23): "looking pretty good."
2. **Before going live, publish two Firebase rules** in the console: `mccoe_course` and `mccoe_mockproj`. Both are already in `database.rules.json`.
3. **Kali download:** decide whether students download the Kali image before Day 1, or you hand it out on USB. That would save about 15-20 minutes of Day 1.

## Next build steps (in order)
1. Apply Joey's Week 1 feedback.
2. **Weeks 2-5**, built the same way as Week 1. Weeks 4-5 wrap the Pillar 4 pentest phases.
   - The content files are `course-wN-lessons.js`, `-labs.js`, `-practice.js`, `-figures.js`, plus a mock page and a lab pack under `assets/cedarcreek/weekN/`.
   - Add every new scenario fact to `docs/CEDAR_CREEK.md` first.
3. **Weeks 6-8:** move into Day 1 / Day 2.
   - Reuse `weeks-data.js` weeks 6-8 and the merged Academy modules.
   - Blue Team phases 1-3 go in Week 7 and phases 4-5 in Week 8.
   - Projects 6-8 go on Day 2.
4. **Week 9 SOC Operations:** a full week built around the existing SOC Ticket Board.
5. **Weeks 10-13 capstone:** spread the existing Week 9-10 Northgate content over 4 weeks with short talks tied to the work.
6. **Weeks 14-15:** the existing Security+ Review, Mock Exam and PBQ labs.
7. **Tracker:** reorganize the 28 menu items around jobs (To-Do, Students, Gradebook, Course, Admin), with one grading queue. Make a mockup first, as with the student side.
8. **Cutover:** merge `course-v2` into `main` **between cohorts**. Merging changes the live Hub sign-in to land on This Week.

## How to resume
- **Repo:** `OneDrive\Documents\GitHub\Teaching-Platform`. Run `git switch course-v2`, then `git pull` if it was ever pushed.
- **Tools:**
  - Portable git: `%LOCALAPPDATA%\mccoe-tools\git\cmd\git.exe`
  - node: `%LOCALAPPDATA%\mccoe-tools\node-v22.11.0-win-x64\node.exe`
- **Local preview with real Firebase:** run `node <serve.js> <repo> 8080`, then open `http://localhost:8080/MCCoE_Home.html?preview=1`. Any small static server works; the one used before was a throwaway script. Signed out, the new pages save only in the browser. Signed in, they write to real Firebase.
- **Check the times:** `node docs/tools/estimate_time.js 1`
- **Rebuild the lab pack:** `node docs/tools/make_week1_pack.js` (it also prints every auto-check answer).
- **Rebuild the Week 1 diagrams:** `node docs/tools/make_week1_figures.js course-w1-figures.js`
- **Commit messages:** use `git commit -F <file>`. Windows PowerShell 5.1 breaks `-m` messages that contain quote characters.
- **Block ids** in `course-data.js` are permanent, because student progress is stored by id. Add new ids; never renumber old ones.

## Files added on the branch
| File | Purpose |
|---|---|
| `MCCoE_Home.html` | This Week / My Work / Resources. Has the "Up next" card. |
| `Lesson.html`, `Lab.html`, `Practice.html`, `Quiz.html`, `Project.html`, `Mock_Control_Audit.html` | The step pages. |
| `course.css`, `course.js`, `course-data.js` | Shared look, helpers, and the course map. |
| `course-w1-lessons.js`, `course-w1-labs.js`, `course-w1-practice.js`, `course-w1-figures.js`, `course-w1-mock.js` | Week 1 content. |
| `course-projects.js` | The 8 case-study projects, copied from the Hub. |
| `assets/cedarcreek/` | Week 1 lab pack and zip. |
| `docs/COURSE_V2.md`, `docs/CEDAR_CREEK.md`, `docs/tools/` | Docs and generators. |

Changed files:
- `MCCoE_Hub.html`: redirect after sign-in.
- `MCCoE_Student_Platform.html`: `?open=survey|surveys|tickets|leaderboard|dashboard`.
- `MCCoE_Student_Tracker.html`: the pilot view.
- `database.rules.json`: the two new paths.

## Known small issues
- Ticket bank TCK-3003 says "Tue, 19 Aug 2026", but that date is a Wednesday.
- `course-projects.js` duplicates the Hub's project data. Once the Hub is sign-in only, remove the Hub's copy.
- Lab 1.2's `wget` only works after the zip is live on GitHub Pages.
