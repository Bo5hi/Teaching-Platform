# Course v2 redesign: where we left off

Last updated: 2026-11-23 (end of day). Read this first, then:
- `docs/COURSE_V2.md` for structure, data shapes and time rules
- `docs/CEDAR_CREEK.md` for the scenario canon and the December timeline
- `docs/build/BRIEF.md` for the rules every week was built to

## The goal
Take everything from the original MCCoE Hub (5 pillars + cards) and reorganize it so students can follow it.
- Every week is **Day 1 and Day 2**, the two class days, with about 4 hours of real student work each.
- Each day is a numbered list of steps, and each step opens its tool directly. No pillars.

## Status
- **Branch `course-v2`**, committed on the work PC, **NOT pushed**. The live site (`main`) is unchanged.
  - Commits: 47cadc0, 2f6dd86, a9610d9, 7839507, 7857195.
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
2. **Tracker:** reorganize the 28 menu items around jobs (To-Do, Students, Gradebook, Course, Admin), with one grading queue. Mockup first.
3. **Cutover:** merge `course-v2` into `main` **between cohorts**. This changes the live Hub sign-in to land on This Week.

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
