# Course v2 redesign: where we left off

Last updated: 2026-11-24 (Tracker v2 built; lab/lesson key blocker found). Read this first, then:
- `docs/COURSE_V2.md` for structure, data shapes and time rules
- `docs/CEDAR_CREEK.md` for the scenario canon and the December timeline
- `docs/build/BRIEF.md` for the rules every week was built to

## NEXT BUILD — content changes Joey locked 2026-11-24 (spec agreed, NOT built yet)
This is the active task. All decisions below are final; don't re-ask. Build on `course-v2`. Start with **Week 4 Day 1 as one complete vertical slice** (scope gate + recon lesson + first drill on the local range) for Joey to review the pattern and look, then replicate across the other methods and weeks.

**1. Weeks 4–5 — rebuild the Mock Pentest as a real HackerOne engagement workbook.**
- The graded engagement is a **real, live HackerOne program**, tested strictly within its scope. **Whole class on ONE shared program.** The program is **not hard-coded** — it's set once in a **Day-1 config** (program name, scope URLs, out-of-scope list, rules: rate limits, forbidden techniques). Joey enters it per cohort.
- **Day-1 scope gate (graded, blocks all testing):** each student registers on HackerOne, reads the program policy, and logs in-scope assets / out-of-scope / rate limits / forbidden techniques (DoS, social engineering, etc.). A scope re-check sits in front of each technique. Authorization is the program's policy and binds each student individually — the instructor can't blanket-authorize.
- **"Claim your asset/area" board** so a shared live target doesn't produce collisions / duplicate reports.
- **Attack methods:** recon + scanning (subdomains, ffuf content discovery, nmap services, tech fingerprint); web / OWASP Top 10 (SQLi, XSS, access control/IDOR, SSRF, misconfig); API testing (auth, BOLA, rate limits); reporting + CVSS.
- **Readiness ladder — teach + hands-on drill each method on a SAFE LOCAL range BEFORE going live** (a student's first SQLi must not be against the live company): HTTP + Burp Suite intercept (by end of Week 3) → recon/scanning (Wk4 D1) → SQLi, XSS (Wk4) → access control/IDOR (Wk4–5) → SSRF + misconfig (Wk5) → API (Wk5) → reporting + CVSS (Wk5). Each rung = short lesson + a drill, then applied live.
- **Practice range = LOCAL in the student's Kali VM: OWASP Juice Shop (main; full OWASP Top 10 + REST API for the API drills) + DVWA (on-ramp, adjustable difficulty).** Free, offline, repeatable every cohort. Chosen over PortSwigger / Hacker101 because external sites aren't guaranteed up/available (Joey's reason). Fold the install into Week 1 Kali setup and ship it in the lab pack; offline after that.
- **Grading:** methodology + scope discipline + evidence + report quality. A valid "no exploitable vulns found — here's what I tested" write-up counts; a real finding is bonus, not required. Flows through the Tracker mock-project rubric for w4/w5.
- **Fit:** weave the readiness drills into Weeks 3–4, swapping the lightest Security+ practice sets; **keep 15 weeks.**
- Leave the old in-house Pentest Lab (`Pillar4_EthicalHacking.html`) in place but **unlinked** from Weeks 4–5.

**2. Weeks 9–15 — strip to hands-on only** (remove lessons, practice sets, quizzes):
- **Week 9:** ticket work only, ~10 tickets/day (Joey assigns as needed). Keep at most a one-line standup.
- **Weeks 10–13:** Northgate capstone deliverables only.
- **Weeks 14–15:** just make the **Security+ Mock Exam** and the **10 PBQ labs** accessible — nothing else (same shape as the current platform's weeks 11–12).
- These will fall under ~4 h/day of *measured* content (the time is now self-paced tool work). **Show Joey the new audit numbers; do not pad.**

**3. Ticket bank → 30 clean, canon-consistent Cedar Creek tickets** (last cohort needed ~30). Keep the student ticket board and the Tracker's `TRACKER_TICKET_BANK` in sync. (Also resolve the ticket-vs-canon mismatches already listed under "Needs Joey" item 2.)

Before any of this is tested live, the lab/lesson key blocker below (item 2 under "Next build steps") still applies.

## The goal
Take everything from the original MCCoE Hub (5 pillars + cards) and reorganize it so students can follow it.
- Every week is **Day 1 and Day 2**, the two class days, with about 4 hours of real student work each.
- Each day is a numbered list of steps, and each step opens its tool directly. No pillars.

## Status
- **Branch `course-v2`**, pushed to GitHub (backup; `origin/course-v2`). The live site (`main`) is unchanged. Merge to `main` only between cohorts.
  - Build commits: 47cadc0, 2f6dd86, a9610d9, 7839507, 7857195; Tracker v2: ca2b8c1.
- **All 15 weeks are built** in `course-data.js`: 312 steps.
  - Content: 66 lessons and talks, 46 labs, 40 practice sets, 13 quizzes, 83 diagrams.
  - Every day measures 3.8-4.4 hours with `docs/tools/estimate_time.js`.
  - `docs/tools/check_course.js` finds no broken steps.
- **Weeks 1-5:** new Security+ content at Cedar Creek.
  - Mock projects:
    - W1 Control Audit
    - W2 Secure File Exchange
    - W3 Access Review
    - W4-5 the existing Pentest Lab, phases 1-2 and 3-5 + capstone
  - Kali labs with lab packs: `assets/cedarcreek/weekN/` and `cc-weekN.zip`.
- **Weeks 6-8:** the legacy weeks plus Academy modules, rewritten into the new format.
  - Week 6 adds a password cracking lab and phishing labs.
  - Weeks 7-8 add the Blue Team Lab phases 1-3 and 4-5. Week 8 adds the CTF.
- **Week 9:** a full SOC ticket week. Short talks, then ticket work blocks.
- **Weeks 10-13:** the Northgate capstone over 4 weeks.
  - Short talks plus work blocks.
  - Deliverables are still submitted on the Student Platform `?week=9` / `?week=10` tabs. The legacy quiz is now optional there.
- **Weeks 14-15:** the mock exam, PBQ labs 1-10, quiz retakes, review talks, and a study plan.
- **Case studies:** Projects 1-8 sit on Day 2 of Weeks 1-8, with `read` steps for the official sources.
  - `Project.html` shows a "Real-world sources" box (`PROJECT_SOURCES` in `course-projects.js`).
  - Lessons carry "Real world" callouts.
- **Tracker:** the "Course v2 (weeks)" view has a week picker. It shows progress, lab answers and rubric grading for every week (`mccoe_mockproj/{key}/wN/grade`).
  - For Weeks 4-5 and 7-8 it also shows the student's Pentest or Blue Team phase links.
- **Deep links added:**
  - `Pillar4_EthicalHacking.html?phase=N` and `?setup=1`
  - `Pillar5_BlueTeam.html?phase=N`
  - `CyberSec_Academy.html?scr=soc|pw|ph|fc|quiz`
- **Preview (no Firebase, saves in the browser only), all 15 weeks:** https://claude.ai/artifact/RsS8mdWhNYj3UinWWHCMc7

## Decisions Joey has made (don't re-ask)
- **Cohort start:** Monday, January 11, 2027 (`COURSE.start`).
- **15 weeks:**

  | Weeks | What |
  |---|---|
  | 1-5 | Security+ at Cedar Creek |
  | 6 | Human Factors |
  | 7 | Defensive Tools |
  | 8 | Incident Response |
  | 9 | Mock tickets, full week |
  | 10-13 | Capstone, 4 weeks |
  | 14 | Security+ Review |
  | 15 | Mock Exam |

- **Light weeks:** weeks 9-13 are light-lecture, with short talks tied to that day's work.
- **Mock pentest:** stays 2 weeks (4-5) and IS the mock project for those weeks.
- **Case studies:** keep all 8. Each goes on Day 2 of Weeks 1-8.
- **Times are real human hours.** Never hand-guess minutes; run the estimator. Joey said earlier estimates ran long.
- **Content:** the platform carries all teaching; never copy CertMaster text. Linux is taught inside Kali labs.
- **Mock projects:** graded by rubric (25 points). The Hub becomes sign-in only. Students see the current and past weeks.

## Needs Joey
1. **Click through the preview** and give feedback, especially:
   - the Week 2-3 mock pages
   - the Week 9 and capstone pacing
   - any times that feel off
2. **Ticket bank vs canon:** the consistency pass did not edit the live ticket bank. These tickets disagree with the Cedar Creek canon; decide whether to change the tickets:
   - TCK-2004: plant firewall PLANT-FW at 10.40.2.1 (NAT 192.0.2.45). Week 9 schedules this ticket.
   - TCK-4008: plant network 10.50.8.0/24; canon is 10.40.0.0/16.
   - HR data on `\\SHARE-01\HR`; SHARE-01 isn't in canon.
   - FINANCE-07 at 10.20.14.37.
   - svc-backup from 10.99.0.23.
   - Usernames not in the Week 3 directory: dana.reyes, kevin.tran, marcus.hall, l.osei, h.brooks, j.owens, r.castillo (with a Sales department), s.whitfield.
   - TCK-3003's weekday is wrong (Tue 19 Aug 2026 is a Wednesday).
   - The ticket bank has 28 tickets in 4 tiers. Week 9 schedules tiers 1-3; 3004 and 3005 are stretch work. The 4xxx and Expert tickets are unscheduled. Keep it that way?
3. **Errors in the older tools** (found during the build, not changed):
   - Blue Team Lab phase 3 tells Colonial Pipeline as a vsftpd backdoor attack. The real entry, per public reporting, was a VPN account password. Week 7's grading key tells graders not to penalize students who point this out.
   - CTF flag 12 expects `78_days`, but its own hint adds up to 77.
   - Some CTF "Target" details (SQL injection) are fictional.
   - The Pentest Lab's exercise HTB machines differ from its setup table. Weeks 4-5 follow the setup table. Exercise 2b belongs in Week 5, and "Ubuntu AttackBox" should say HTB Pwnbox.
   - `interview.html` and the `materials/week9` pages still say "Week 9/10" and "12-Week".
4. **Run the Kali labs once on a real Kali VM before class.** The builders checked the commands in Git Bash and Node, not Kali. Most important:
   - Lab 6.2 (john)
   - Lab 5.2 (the `exec -a` disguised process)
   - Lab 3.2 (the sudo journal and shadow hash prefix)
   - Lab 2.4 (needs live cisa.gov / badssl.com)
5. **Before going live:**
   - Publish the Firebase rules `mccoe_course` and `mccoe_mockproj`.
   - Push, so the lab pack zips are on GitHub Pages; every lab `wget` depends on it.
   - Kali download: hand it out before Day 1 or on USB to save about 15-20 minutes.
6. **Outbrief (Week 13 Day 2):** 120 minutes assumes 6-7 presenters. A larger cohort needs a second room or more time.
7. **Mock exam labels:** the data says SY0-801; the review talks use SY0-701 domains. Decide the label.

## Next build steps
1. Apply Joey's feedback.
2. **Fix lab and lesson-check keys before going live (blocker).** `Lab.html` saves `CC.save('labs/' + lid)` and `Lesson.html` saves `CC.save('checks/' + lid)` with ids like `1.1`. The Firebase SDK throws on a key with a dot ("values argument contains an invalid key (1.1)", checked 2026-11-24 against a dummy database), so these saves will fail once `mccoe_course` is live. Store them as `1_1` (and read both in the Tracker's `cvOpen` and anything else that reads `labs`/`checks`). The Tracker v2 queue already reads `1_1` and `1.1`.
3. **Cutover:** merge `course-v2` into `main` **between cohorts**. This changes the live Hub sign-in to land on This Week, and the Tracker to its new five-job menu.

## Tracker v2 (done 2026-11-24)
The Tracker's 30 menu items now sit under five jobs: To-Do, Students, Gradebook, Course, Admin, with one grading queue. Joey approved the mockup (claude.ai design canvas "Tracker Reorganization Mockup"). Files: `tracker-v2.js`, `tracker-v2.css`; see CLAUDE.md "MCCoE_Student_Tracker.html". Differences from the mockup: clicking a queue item opens that item's existing grader (mock project review overlay, project grade modal, ticket grader, MITRE/NIST card) instead of a side panel, so the answer-key checks and Claude draft grades still work; the old Dashboard stays as To-Do > Class overview. Checked headless with Firebase writes blocked: every tab renders on live data with no script errors; graders open from the queue; cohort switch; phone width.

## How to resume
- **Repo:** `OneDrive\Documents\GitHub\Teaching-Platform`. Run `git switch course-v2`.
- **Tools:**
  - Portable git: `%LOCALAPPDATA%\mccoe-tools\git\cmd\git.exe`
  - node: `%LOCALAPPDATA%\mccoe-tools\node-v22.11.0-win-x64\node.exe`
- **Edit a week's plan:**
  1. Change `docs/build/weekN.js`.
  2. Run `node docs/tools/merge_staging.js N`. It rewrites that week in `course-data.js` and adds `&from=N` to steps a later week repeats.
  3. Run `node docs/tools/estimate_time.js N` and `node docs/tools/check_course.js`.
- **Rebuild a lab pack:** `node docs/tools/make_weekN_pack.js`. Diagrams: `make_weekN_figures.js`.
  - Week 2's keys are fixed in `make_week2_pack_keys.js` (fictional training keys). Changing signed files means new GPG keys and new answers.
- **Commit messages:** use `git commit -F <file>`. PowerShell 5.1 breaks `-m` messages that contain quotes.
- **Block ids are permanent**, because progress is stored by id. Add new ids; never renumber.
- **Local preview with real Firebase:** serve the repo folder (any static server, port 8080) and open `MCCoE_Home.html?preview=1`.

## Known small issues
- `course-projects.js` duplicates the Hub's project data. Remove the Hub's copy once the Hub is sign-in only.
- Week 2 certificates `intranet.pem` and `supplier_portal.pem` expire in 2028. Rebuild the Week 2 pack before then.
- About 85 background mailbox names in Week 6's phishing simulation aren't in the Week 3 directory (harmless).
- External links were checked on 2026-11-23. Still unchecked: TryHackMe (rate-limited), the CompTIA objectives PDF title, and the YouTube links carried over from the legacy weeks.
- GitHub may flag the fictional private keys in `docs/tools/make_week2_pack_keys.js` on push. They are training data; mark them as test data if push protection asks.
