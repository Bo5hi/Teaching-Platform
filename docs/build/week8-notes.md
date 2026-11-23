# Week 8 build notes: Incident Response

Built 2026-11-23. Not committed. Week plan: `docs/build/week8.js` (`COURSE_STAGING[8]`).

## Files
| File | What |
|---|---|
| `course-w8-lessons.js` | Lessons 8.1-8.6 (1,418-1,600 words each, 5-question checks, 10 diagrams, 7 real-world callouts) + `COURSE_QUIZ.w8` (20 questions) |
| `course-w8-labs.js` | Labs 8.1 (triage, browser), 8.4 (phishing playbook, browser), 8.2 (Kali investigation), 8.3 (incident report, browser) |
| `course-w8-practice.js` | `ir-w8` (24-item IR step sorter), `acro-w8a`, `acro-w8b` (20 acronyms each) |
| `course-w8-figures.js` | Built by `docs/tools/make_week8_figures.js` (Week 1 palette/helpers) |
| `course-w8-mock.js` | `MOCK_W8`: brief, Equifax + phase 5 answer key, 5 `rubricNotes` for the grader. No new mock page: the mock is the existing Blue Team Lab. |
| `assets/cedarcreek/week8/`, `assets/cedarcreek/cc-week8.zip` | Incident CC-IR-2026-01 evidence pack (logs, NETLOGON copy, evidence + hashes + custody sheet, notes) |
| `docs/tools/make_week8_pack.js` | Deterministic pack + zip builder; prints every auto-check answer |
| `docs/tools/make_week8_figures.js` | Diagram builder |

## Day plan (estimator, `node docs/tools/estimate_time.js 8`)
Day 1 (248 min): L8.1 15, SOC Simulator tool 15, L8.2 15, Lab 8.1 30, L8.3 15, IR Step Sorter 15, Lab 8.4 20, L8.4 15, Lab 8.2 65, L8.5 15, Lab 8.3 25, survey 3.
Day 2 (260 min): L8.6 15, Blue Team Phase 4 mock 50, CTF tool 40, Blue Team Phase 5 mock 60 (due end of Day 2), FTC read 10, GAO read 5, Project 8 60 (due start of Week 9), quiz 15, weekly check-in 5.
Tool/read/mock minutes have their arithmetic in `basis`.

## Verification done
- `node --check` on all 8 JS files.
- Loaded everything in node: every block's lesson/lab/practice/quiz/project exists, lab and lesson `mins` match blocks, all answer indexes valid, every figure id resolves, practice ids contain `w8`, Day 1 ends with the survey, Day 2 ends quiz + check-in, mock id `w8` with 5 rubric rows.
- Lab 8.2/8.3 auto-check answers compared with the pack generator's output, and the Lab 8.2 commands were run in bash against the pack: 143 fails, 38 users, m.alvarez 07:41:58Z (01:41:58 local), 10.20.250.37, 9 Windows lines, 5 HIGH/CRITICAL, 4,174 files, 77 flows, 6.6 GB, ENG-FS01_netconns.txt FAILED; RPO 99 h, restore 16 h.
- Headless Edge: Lesson 8.4 (with figure) and Lab 8.2 render correctly from localhost:8080. Lesson checks were rebalanced so answers are spread over A-D (quiz options are shuffled by Quiz.html anyway).

## What was absorbed from the original Hub
- **weeks-data.js week 8**
  - Objectives 1-5 map to lessons 8.1 (lifecycle), 8.2 (P1-P4 triage, TP/FP), 8.3 (containment for malware, phishing, and data breach; containment before eradication; evidence before wiping), 8.6 (IR vs DR vs BCP, RTO/RPO, 3-2-1), and 8.5 (the incident report fields: ID, UTC timestamps, detection method, affected systems, timeline, root cause, actions).
  - All 10 concepts are covered in those lessons.
  - The 4 resources are in a "Going further" section at the end of Lesson 8.3.
  - Legacy lab 2 (triage 5 alerts) became Lab 8.1, with the same alert kinds moved to Cedar Creek.
  - Legacy lab 3 (incident report for a credential attack) became Lab 8.3.
  - Legacy lab 4 (3-2-1, RTO/RPO with an older backup) is covered by the Lab 8.3 recovery math and Lesson 8.6.
  - Legacy lab 5 (phishing playbook across the phases) became Lab 8.4.
  - All 10 legacy quiz questions were rewritten into the week quiz.
- **Academy "Incident Response" (10) and "Security Operations" (10) quiz items**: each one is either rewritten into the quiz or taught in a lesson. That covers first phase, containment, chain of custody, eradication, tabletop, MTTR, documenting from detection, post-incident review, RAM before shutdown, lateral-movement logs, SOC role, correlation, threat intel, false positives, playbooks, SIEM, Kill Chain, SOAR, enrichment, and MTTD.
- **week-tasks.js week 8**: Study/Quiz/Acronym/Lab items are replaced by the lessons, quiz, acronym sets and labs. The two Academy quizzes are merged into the quiz. The SOC Simulator is a `tool` block. Project 8 is a Day 2 project. Blue Team Phases 4-5 are the mock.
- **Legacy "CTF challenges"**: `MCCoE_CTF.html` is a Day 2 `tool` block.
- **Added (new)**: forensics basics in Lesson 8.4 (order of volatility, legal hold, e-discovery, acquisition, write blockers, hashing, chain of custody, first-responder rules, timelines and NTP) and the evidence hash and custody review in Lab 8.2.

## Dropped, and why
- **Legacy lab 1 (map Colonial to the six phases).** Lesson 8.1 now does this as a worked example, and Blue Team Phase 4 has students do the same mapping for Equifax.
- **Legacy "hospital ransomware" example** ($1.3M ransom, 48 hours vs 2 weeks). The numbers looked invented, so the idea is taught without them in Lesson 8.6.
- **Legacy Colonial details** that I could not confirm ("MFA mandated immediately after", "restored after 6 days"). These were replaced with established facts: the May 7 shutdown, the restart beginning May 12, about 75 BTC (about $4.4M), and the DOJ recovering about 63.7 BTC (about $2.3M).
- **week-tasks "Curriculum Module 8: Penetration Testing Methodology" (`cur:7`).** This is pentest content and belongs with the Week 4-5 Mock Pentest. Week 5's builder should absorb it.

## New Cedar Creek facts (merged into docs/CEDAR_CREEK.md)
**Consistency pass (2026-11-23):** the incident moved one week later (Tue 12-22 into Wed 12-23, same weekdays and clock times) so it follows the Week 7 weekend intrusion (Dec 18-20). Addresses, host names, the VPN pool and ticket-bank-only user names were changed to the canon; the VPN log now shows profiles (CC-REMOTE `mfa=push`, CC-LEGACY `mfa=none`). The proposed-address table below is superseded by `docs/CEDAR_CREEK.md`. Rebuilt answers are unchanged except the VPN address (10.250.0.37) and the dates (2026-12-23T07:41:58Z).

**Incident CC-IR-2026-01**: ransomware on ENG-FS01, P1, the company's first formally declared incident (the Week 6 Kessler VPN login and the Week 7 weekend intrusion were handled as cleanups). It ran overnight Tue 2026-12-22 into Wed 2026-12-23. All times below are local Central (UTC-6).

**How the attacker got in**
- 01:15-01:41: password spray against the FW-CORE SSL VPN from 203.0.113.77, a foreign hosting provider. It made 143 failed attempts against 38 usernames: 22 real accounts and 16 generic names that do not exist (admin, vpn, test, and so on).
- 01:41:58: the attacker logged in as `m.alvarez` (Miguel Alvarez, Purchasing) on the password-only CC-LEGACY profile (`mfa=none`). The VPN assigned the session 10.250.0.37. Miguel was added to VPN-Users on 2026-12-01 and never enrolled in MFA; his password was still Welcome1 (cracked in Week 6, resets deferred to 2027-01-04). 203.0.113.77 was on the Week 5 IRONLATCH list but never blocked. No lockout (10 bad passwords / 30 min) stopped the spray.

**Getting admin rights and staying in**
- 01:49: the attacker read `\\*\NETLOGON\map_drives.bat`. Written in 2017, it contains the `ccadmin` password in plain text (the password is not defined in the pack). Every domain user runs it at logon.
- 01:53: logged on as `ccadmin`.
- 01:58: opened an RDP session to ENG-FS01.
- 02:03-02:04: created `svc_update` and added it to Domain Admins.

**Data theft**
- 02:09: dropped `rclone` into `C:\ProgramData\rc\`.
- 02:14-03:29: copied `D:\Projects` to 192.0.2.145:443, 77 flows, about 6.6 GB.

**Destroying backups and encrypting**
- 03:31: deleted the shadow copies (`vssadmin`) and the backup catalog (`wbadmin`). Normally a shadow copy is taken nightly at 23:10.
- 03:35: started `C:\ProgramData\cc_upd.exe`.
- From 03:36: renamed 4,174 files in 16 job folders (`D:\Projects\J24-087` ... `J26-063`) to `.latch`. D:\Projects holds about 41,900 files.
- The ransom note `README_LATCH.txt` is signed IRONLATCH. It demands $650,000 in bitcoin (within the canon range), threatens to leak the drawings, and gives the victim ID CC-7Q2M-91XA.

**Response**
- 06:05: the student, on Marcus's new 6 AM early rotation, triages the queue.
- 06:08: calls Dee.
- 06:14: Dee isolates ENG-FS01 through EDR.
- 06:15: kills the process.
- 06:19: CC-LEGACY disabled; VPN limited to IT staff (m.reyes, d.ortiz, j.pike).
- 06:20-06:24: `m.alvarez` and `svc_update` disabled; `ccadmin` password reset.
- 06:26-06:27: firewall blocks on both attacker addresses.
- 06:31: memory captured with winpmem (evidence item E2).
- 06:44-06:52: triage files collected (evidence item E1).
- 07:35: Marcus's handoff email.

**Evidence handling**
- E1 is a USB drive, SanDisk 32 GB, serial 4C53 0001 7712. E2 is a WD 2 TB drive, serial WX42A1.
- 07:10: E1 was handed to Jordan Pike with no receiving signature. He opened the files on the help desk PC and appended "checked this - looks fine. JP" to `ENG-FS01_netconns.txt`, so its hash fails.
- 16:40: E1 was found on the help desk counter.
- 16:45: Marcus logged E1 in with no "released by". E2 is locked in the IT office safe.

**Backups and recovery targets**
- Weekly full LTO tape every Friday at 22:00.
- The last good tape finished Fri 2026-12-18 23:47. It survived because it was offline on the shelf.
- Restore plan: rebuild 5 h + tape restore 9 h + copy-back 2 h = 16 h.
- Tom Becker: Engineering can last 24 h without the server (RTO 24 h) and wants an RPO of 1 day.

**Other new facts**
- **No overnight monitoring.** EDR now runs on ENG-FS01 with a server policy of detect-only. Alerts go to siem-alerts@ and nobody is on call overnight. Marcus started the 6 AM early rotation on Mon 12-21 after the Week 7 weekend.
- **Marcus's call list.** For a P1, call Dee (she can isolate hosts remotely), then Marcus, then Greg.
- **Contracts and insurance.** Cedar Creek has cyber insurance, and some customer contracts require notice when drawings are exposed. No personal data was in D:\Projects, and FS-HR01 was not touched.

**Addresses and names (superseded; canon now used in the pack)**
DC01 10.10.1.10, ENG-FS01 10.30.4.10, FS-HR01 10.20.6.15, ENG-APP02 10.30.4.22, IT-ADMIN-01 10.99.0.10 (Dee's response actions), VPN pool 10.250.0.0/25, workstations ENG-14 (Tom), ENG-11 (Priya), FIN-PC-03 (Amanda), FINANCE-07 (Dana), HR-PC-01, MKT-LT-02, MKT-PC-04, CS-PC-02, PUR-PC-01 (Miguel), IT-LT-02, RECEPTION-01. Spray list and VPN users use Week 3 directory names (d.reyes, j.dorsey, n.quinn, i.mcbride, t.lund, v.chu, r.dempsey) with Week 3 home addresses. map_drives.bat maps `\\FS-HR01\Company`, `\\ENG-FS01\Drawings` (D:\Projects) and `\\ENG-FS01\Scans`. Egress uses app.tallgrasspayroll.com (192.0.2.80) and supplier.halvorsen-pump.com (203.0.113.41). The original proposal was:

| Item | Value |
|---|---|
| DC01 | 10.30.0.10 |
| ENG-FS01 | 10.30.1.21 |
| FS-HR01 | 10.30.1.22 |
| ENG-APP02 | 10.30.1.30 |
| IT-ADMIN-01 | 10.20.1.10 |
| VPN pool | 10.20.250.0/24 |
| Workstation names | `DEPT-WS-NN`, for example ENG-WS-01 (Tom Becker) at 10.20.3.11, PUR-WS-01 (M. Alvarez), FIN-WS-02 (Amanda Singh) |
| PRINT01 | print server |
| Staff home addresses | 100.64.0.0/10 |

- Usernames `p.nair`, `k.tran`, `r.doyle`, `t.garza`, `s.pruitt` follow the initial.last pattern.
- The attacker addresses 203.0.113.77 and 192.0.2.145 are documentation ranges.

**Lab 8.1 queue (Wed 06:05)**
- AL-01: blocked SSH scans.
- AL-02 to AL-06: the attack.
- AL-07: clean AV scan on FIN-LT-09.
- AL-08: unknown SanDisk USB on PLANT-PC-07 at 05:40. First shift starts 05:30.
- AL-09: "Holiday bonus schedule" phish from hr-notice@cedarcreek-benefits.net to 14 people, 0 clicks, reported by G. Lindqvist.
- AL-10: Tom Becker mistyped his new password 5 times at 06:00. This one is also in the pack's Windows log.

## Needed in shared files (I did not edit these)
1. **Merge `COURSE_STAGING[8]`** into `course-data.js` (replacing `{ num: 8, legacy: 8 }`).
2. **MCCoE_Home.html `extra()`** reads mock status from `mccoe_mockproj/{key}/w8`, but the Blue Team Lab saves to `mccoe_blueteam/{key}` (`phase3`, `phase4`, `*_link`). For w7 and w8, read `mccoe_blueteam` instead. The tracker grading view needs the same change; `MOCK_W8.key` and `rubricNotes` are ready for it.
3. **Pillar5_BlueTeam.html**: the header link goes back to `MCCoE_Hub.html`. A "Back to This Week" link would help, and so would a `?phase=` that also scrolls to the submit box.
4. **MCCoE_CTF.html bugs**: please fix these, not my file.
   - CTF-12 accepts `MCCoE{78_days}`, but May 13 to July 29 is 77 days, and the page's own hint adds up to 77.
   - Several CTF "facts" are fictional or wrong and students may repeat them: Target POS SQL injection (CTF-02), the vsftpd backdoor at Colonial (CTF-04/05), Colonial's VPN password "password" (CTF-06).
   - Blue Team Phase 3's "Colonial" capture is the same vsftpd scenario. The real Colonial entry point was a legacy VPN account without MFA.
   - Consider labeling these scenarios "based on" the case.
5. **`docs/tools/estimate_time.js`** treats a practice set as flash cards only when `p.mode === 'flash'`, but practice files use `kind: 'flash'`. That doesn't affect Week 8, because acronym sets are `anytime`, not blocks.
6. **Week 7 overlap**: Week 7 also lists the Academy SOC Simulator. If Week 7 uses it, drop `w8d1-b2` and add about 15 minutes of hands-on work elsewhere on Day 1 (Day 1 would be 233 without it).

## Problems and cautions
- Lab 8.2's `wget` works only after `cc-week8.zip` is live on GitHub Pages (same as Week 1).
- The estimator counts 1 minute per checkpoint. Labs 8.3 and 8.4 are writing-heavy (report sections, playbook steps) and may run 10-15 minutes longer in class. Please compare with real times.
- Blue Team Phase 5 assumes phases 1-3 were done in Week 7.
- Real-world facts used:
  - Colonial: dates, ransom, DOJ seizure, and the VPN without MFA from Blount's testimony.
  - Equifax: July 29 detection, Sept 7 announcement, about 147 million people, the equifaxsecurity2017.com site and the social posts that pointed to a fake site, the 2019 settlement of up to $700M and $425M, the expired certificate, the February 2020 PLA indictment.
  - Target: ignored malware alerts.
  - SolarWinds: ED 21-01.
  - Maersk/NotPetya: the Ghana domain controller.
  - Notification and payment rules: GDPR 72 h, SEC 4 business days, OFAC ransomware advisory.
  - Specific numbers I was unsure of, such as Equifax dwell days and the Maersk device counts, were left out.
