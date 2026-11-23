# Week 3 build notes: Identity, Access, and Data

Built 2026-11-23 against `docs/build/BRIEF.md`. Nothing committed.

## Files created
| File | What |
|---|---|
| `course-w3-lessons.js` | Lessons 3.1-3.5 (1,415-1,748 words each, 5-question checks, 2 diagrams each, 6 real-world callouts) + `COURSE_QUIZ.w3` (20 questions) |
| `course-w3-labs.js` | Lab 3.1 Linux users/groups/passwd/shadow, Lab 3.2 permissions + sudo, Lab 3.3 access review evidence (pack-based, auto-checked) |
| `course-w3-practice.js` | `access-w3` (model sorter, 20), `data-w3` (type + state sorter, 20), `acro-w3a`, `acro-w3b` (20 each) |
| `course-w3-figures.js` | 10 SVG diagrams (generated) |
| `course-w3-mock.js` | `window.MOCK_W3`: brief, rubric, option lists, `key`, `rubricNotes`, and a generated `evidence` block |
| `Mock_Access_Review.html` | Mock project page; saves to `mccoe_mockproj/{key}/w3` (copied identity, autosave, preview mode, submit flow from `Mock_Control_Audit.html`) |
| `assets/cedarcreek/week3/` + `assets/cedarcreek/cc-week3.zip` | Lab pack (AD export, groups, shares, VPN profiles and sessions, HR roster, 2 memos) |
| `docs/tools/make_week3_pack.js` | Builds the pack and zip, rewrites the evidence block in `course-w3-mock.js`, prints Lab 3.3 answers |
| `docs/tools/make_week3_figures.js` | Builds `course-w3-figures.js` (Week 1 palette and helpers) |
| `docs/build/week3.js` | Week plan (`COURSE_STAGING[3]`) |

Rebuild: `node docs/tools/make_week3_pack.js` then `node docs/tools/make_week3_figures.js course-w3-figures.js`. The pack generator is seeded; output is identical every run.

## Day plan (estimator, `node docs/tools/estimate_time.js 3`)
**Day 1, 258 min (4.3 h):** L3.1 Authentication 20 · Academy Password Checker (tool) 15 · Lab 3.1 45 · L3.2 Authorization 15 · Access Model Sorter 10 · Lab 3.2 50 · L3.3 Identity lifecycle and SSO 15 · Lab 3.3 50 · Mock part 1 35 · Daily survey 3

**Day 2, 255 min (4.3 h):** L3.4 Data types/classification/states 15 · Data Sorter 10 · L3.5 Data roles/privacy/retention 15 · Mock part 2 + submit 50 (due end of Day 2) · MITRE ATT&CK worksheet (tool) 65 · Read: Blount testimony 10 · Read: AA21-131A 10 · Read: CISA two years later 10 · Project 3 Colonial Deep Dive 50 (due start of Week 4) · Quiz 15 · Weekly check-in 5

Every `tool`, `read`, and `mock` block carries its arithmetic in `basis`. The estimator flags nothing.

Notes on the measured items:
- The MITRE worksheet is big (about 2,070 words across tabs 1-4 plus 20 answer boxes), so it honestly measures 65 minutes. Project 3's q3/q4 reuse its answers.
- Read blocks assign sections, not whole documents: Blount sections II, IV, V; AA21-131A pages 1-3. I extracted both PDFs to count words.
- Mock part 1 is set at 35 instead of the raw 42 because Lab 3.3 produces the candidate list just before it; the rest flows into part 2. Watch this one in class.

## Colonial Pipeline wording (checked against the sources)
- Blount's **written** testimony says: "we believe the attacker exploited a legacy virtual private network (VPN) profile that was not intended to be in use" and that they were "still trying to determine how the attackers gained the needed credentials." It does **not** mention MFA.
- The "no MFA" detail comes from his answers at the hearing as publicly reported. Every place I use it says "public reporting from the hearing said". The lesson callout, the mock key, the rubric note, and the Day 2 read block all use the cautious form ("believed", "reported").
- AA21-131A: DarkSide RaaS hit the IT network; no indication OT was directly affected; first mitigation listed is "Require multi-factor authentication for remote access to OT and IT networks"; it also names least privilege and privileged account management. The CISA 2023 article says nothing about how they got in.
- Other real-world callouts: Target (Fazio Mechanical credentials, per Krebs; about 40 million card accounts), Uber 2022 MFA fatigue (as Uber reported), SolarWinds forged SAML tokens (AA20-352A), Equifax (about 147 million people; FTC/CFPB/states settlement of at least $575 million, up to $700 million).

## Absorbed from the original Hub
- **Legacy week 4 (Core Classes):** `ls -la`, `chmod`, `chown`, `grep "root" /etc/passwd`, and the chmod 755 quiz question went into Labs 3.1-3.2 and the quiz.
- **Legacy week 5 (Kali Fundamentals):** the permissions objective (owner/group/others, numeric and symbolic chmod, 644/600/777 risks) is Lab 3.2 plus the `linux-perms` diagram. `whoami` and `cat /etc/passwd` are in Lab 3.1, and `awk` (field extraction) is in Lab 3.3.
- **Academy "Access Control" quiz (all 10):** RBAC, SSO, biometrics, ACL, PAM, password manager, lockout, LDAP, TOTP, and federation are all taught in Lessons 3.1-3.3. Most were rewritten into the quiz or knowledge checks.
- **Academy items from other categories:**
  - OS & Linux: chmod, root, /etc/passwd vs /etc/shadow, sudo.
  - Cyber Foundations: least privilege.
  - Defensive Security: DLP.
  - Cryptography: salt.
- **Academy Password Checker:** the Day 1 `tool` block. The block desc gives the six passwords to test.
- **Hub week 3 checklist:** Project 3, the MITRE tool, and the 3 source docs are all on Day 2. The Hub week 4 "Quiz: Access Control" item is absorbed here.

## Dropped, and why
- **Not this week's topic.** Legacy week 4 Kali install, the 7 tool categories, OverTheWire Bandit, CFAA, processes, and ifconfig/netstat; legacy week 5 sed, processes, bash scripting, and netstat. The install is Week 1; the brief gives the rest to Week 4 or 5.
- **Belongs to Week 5.** Hub week 3 "Academy module 3: Threat Landscape" and its quiz; the brief assigns them to Week 5.
- **Tools content for later weeks.** The legacy week 5 quiz questions about Nmap, Wireshark, Metasploit, Hydra, Aircrack, and Dirb are tools content for Weeks 4-6.

## New Cedar Creek facts (merge into `docs/CEDAR_CREEK.md`)
**Directory and accounts**
- DC01 runs the Active Directory domain. Usernames are first initial, a dot, then the last name, the same as email. amanda.singh is the canon exception.
- The access review export is dated Mon 2026-11-23 (Week 3, day 1). Greg wants a summary by Thursday.
- Non-person accounts:
  - Administrator: built-in; last sign-in 2024-02-14; password set 2016-04-02; never expires.
  - Guest: disabled.
  - krbtgt: disabled.
  - ccadmin: shared, in Domain Admins; password set 2017-01-09; never expires; last used 2026-11-20.
  - operator: the PLANT-PC-07 shared login; password set 2019-03-01; never expires.
  - svc-backup: backup software; in Domain Admins and VPN-Users; password set 2018-06-12; never expires. This fits the ticket bank, where TCK-3002/3004 involve svc-backup.
  - svc-scan: copier scan-to-folder account.
  - vendor.cad: CAD vendor support; created 2019-07-15; password never expires; in VPN-Users without MFA; in ENG-APP02-Admins; last used 2026-10-05 from 192.0.2.200.
  - intern.eng: generic account for the 2025 summer intern, Ethan Park (2025-06-02 to 2025-08-15). Still enabled.
- **Groups:**
  - Domain Admins (7): Administrator, ccadmin, d.ortiz, j.pike, m.reyes, svc-backup, t.becker.
  - VPN-Users (16) and VPN-MFA-Users (10). The six in VPN-Users who are not enrolled in MFA: b.kessler, g.palmer, n.brandt, svc-backup, t.becker, vendor.cad.
  - ENG-Share-RW: all of Engineering, plus b.kessler, n.brandt, intern.eng.
  - ENG-APP02-Admins: d.ortiz, t.becker, vendor.cad.
  - HR-Share-RW: HR, plus d.reyes.
  - Finance-Share-RW: Finance, plus g.voss.
  - Plant-Leads: w.henley, j.moran, l.barron, r.somers, s.pruitt, l.vance, h.ruiz.

**VPN (on FW-CORE)**
- **CC-REMOTE:** created 2021-04-12. Sign-in is company certificate + password + authenticator push. Allowed for VPN-MFA-Users. This matches the ticket bank's VPN-Users + VPN-MFA-Users groups and certificate-based VPN.
- **CC-LEGACY:** created 2017-03-01. Password only. Any VPN-Users member can use it, including people enrolled in MFA. It has been "temporary" since 2021.
- Marcus's 2021-04-12 memo kept CC-LEGACY for Tom (until his phone was replaced) and for the CAD vendor.
- The session log covers 2026-10-01 to 11-22. Four accounts used CC-LEGACY: g.palmer, t.becker, vendor.cad, b.kessler.

**People and former employees**
- **Brian Kessler**
  - His AD account is still enabled, with last sign-in 2026-11-01 22:41.
  - CC-LEGACY sessions from 203.0.113.77 (his home IP while employed): 10-02, 10-07, 10-13, then **after his last day** on 10-24 at 21:14 (95 min) and 11-01 at 22:40 (130 min).
  - He is still in ENG-Share-RW. This lines up with his badge being used after he left (Week 1).
  - Victor Chu is the Lead Engineer, the job Brian was passed over for.
- **Neil Brandt:** Manufacturing Engineer, left 2026-04-17. Still enabled, dormant. He is "the engineer who left last spring" from Dee's Week 1 remark. That remark contradicted Kessler's October date; Brandt reconciles it.
- **Gary Voss:** Senior Accountant, left 2025-06-30. Still enabled, password never expires, still in Finance-Share-RW.
- **Lori Vance:** her title is Line 1 Lead.
- **Hector Ruiz:** his account was disabled 2026-10-26, so the process worked once.
- **Jesse Moran:** Line 1 Supervisor; no sign-in since 2026-06-02.
- **June Vick:** Customer Service; HR status Leave (generated name).
- **Dana Reyes:** moved from HR to Accounting on 2025-03-03 and kept HR-Share-RW.
- **New titles for canon or Week 1 badge names:**
  - Finance: Ross Dempsey (Senior Accountant), Gina Rowe (AR Clerk), Carla Benson (Payroll Coordinator).
  - HR: Tasha Greene (HR Generalist), Paul Whitaker (Benefits Specialist).
  - Engineering: Sam Ortega, Lena Fischer, Owen Gallagher, Rachel Imes, Megan Holt.
  - Marketing: Kevin Tran (Marketing Specialist), Jasmine Ford (Graphic Designer).
  - Customer Service: Ian McBride and Nora Quinn (CSRs), Tracy Lund (Order Entry).
  - Purchasing: Derek Hale (Buyer).
  - Other: Phil Archer (Facilities), Ben Sato (Quality Manager), Luke Barron (Line 3 Supervisor), Rick Somers (Shipping Lead), Tina Garza (Shipping Clerk), Shane Pruitt (Maintenance Technician).
- **First names added:** "G. Lindqvist" is now **Gail** Lindqvist (Customer Service Lead), and "M. Alvarez" is now **Miguel** Alvarez (Purchasing Manager). Change these if the tracker or ticket bank already uses other first names.
- **About 20 more office staff** are generated (seeded) in the pack. The HR roster has 318 rows, 304 of them Active. Employee IDs are 4-digit numbers; Priya Nair is 4719 and Dana Reyes is 4471, matching the ticket bank.

**Shares (in `it/share_permissions.csv`)**

| Share | Access | Key |
|---|---|---|
| `\\ENG-FS01\Drawings` | ENG-Share-RW, Domain Admins | Confidential; includes leavers |
| `\\ENG-FS01\CustomerSpecs` | **Everyone: Read** | Confidential; too open |
| `\\ENG-FS01\ShopFloor` | Plant-Leads: Read | Internal; the approved alternative to USB drives |
| `\\FS-HR01\Personnel` | HR-Share-RW | Confidential |
| `\\FS-HR01\Payroll` | HR-Share-RW, plus Finance-Share-RW Read | Confidential or Restricted; too open |
| `\\FS-HR01\Benefits` | HR-Share-RW | Health information |
| `\\FS-HR01\Company` | Domain Users: Read | Internal |
| `\\DC01\IT$` | **Domain Users: Read**; holds FW-CORE config backups and notes with service account passwords | Restricted; too open (new share) |
| SharePoint "Marketing - Published" | Anyone with the link | Public |

**Draft data classification policy (4 levels)**
- Public.
- Internal.
- Confidential: customer IP, personnel, payroll, and health information.
- Restricted: passwords, security configurations, admin tools.

This is consistent with the Week 1 asset classifications.

**Documentation IPs**
- Home connections use 203.0.113.x and 192.0.2.x. The Cedar Creek egress address stays 198.51.100.24.

## Changes needed in shared files (not made)
1. **`course-data.js`:**
   - Replace the week 3 stub with `COURSE_STAGING[3]` from `docs/build/week3.js`.
   - Until that merge, `Practice.html` crumbs and the "Next" buttons won't find Week 3 blocks. Pages still load, because they look up the week by id.
2. **Tracker:**
   - Add a w3 grading view from `MOCK_W3.key` and `MOCK_W3.rubricNotes`.
   - `rubricNotes` is top level in `MOCK_W3`, as the brief specifies. In `MOCK_AUDIT_W1` it sits inside `key`.
   - Saved data shape: `data = { viewed[], findings[{acct,type,type2,sev,evidence,action,detail,rank}], vpn{notEnrolled[],usedLegacy[],enrolledCan,fix,colonial}, shares{s1..s9:{cls,data[],owner,verdict,fix}}, summary }`.
3. **`docs/CEDAR_CREEK.md`:** merge the facts above. Also edit the Week 1 area 5 line ("a former engineer's account") to note there are two former engineers: Brandt (spring) and Kessler (October).
4. **`Lesson 1.0`** (Week 1 file, not mine): its "Your five weeks" table still lists Week 4/5 mock names that changed to the Mock Pentest.
5. **`docs/tools/estimate_time.js`:** `practice()` checks `p.mode === 'flash'`, but practice sets use `kind: 'flash'`, so flash decks are timed at the sort rate. This doesn't affect Week 3 blocks, because the acronym decks are in `anytime`.
6. **Lab 3.3 `wget`:** only works once `cc-week3.zip` is published to GitHub Pages, the same issue as Week 1.

## Verification done
- **Syntax:** `node --check` passes on all JS files.
- **Staging check:** a script loaded the staging week and confirmed:
  - every lesson, lab, practice, quiz, and project id exists, and figure ids resolve
  - every check and quiz answer index is valid (quiz answer spread 5/5/6/4)
  - sort answers are among their options, and mock key accounts, types, actions, and shares exist in the evidence
  - the mock key's VPN lists match the generated data, and the rubric matches the week plan
- **Answers:** Lab 3.3 auto-check answers (73, 3, 12, June Vick, 5, 7, 6, 2, d.reyes) match the generator output.
- **Rendering:** Lesson 3.1, Lab 3.3, Practice data-w3, and the mock page render on localhost:8080 (headless Edge). All 10 diagrams were checked for overlaps.
- **Not tested:** the Kali commands were not run in a live Kali VM. Three points to watch:
  - Lab 3.1 accepts both `$y$` and `$6$` for the hash prefix.
  - Lab 3.2 assumes `/usr/bin/journalctl` and the sudo journal entries are present, which is standard on current Kali.
  - The lab users avoid dots in names, to be safe with `useradd`.

## Consistency pass (2026-11-23)
Merged into `docs/CEDAR_CREEK.md`. Changed here: Brian Kessler's home address is now **203.0.113.58** (203.0.113.77 is an IRONLATCH address in Weeks 5, 6 and 8). Hire dates now follow Week 2's HR export: Rosa Medina 2011-04-18, Tom Becker 2009-08-03, Walt Henley 2004-02-09, Amanda Singh 2019-06-10, Jordan Pike 2022-01-17. Pack and mock evidence rebuilt; Lab 3.3 answers unchanged. Later canon facts that build on this week: m.alvarez, r.medina and amanda.singh joined VPN-Users on 2026-12-01; Kessler stayed enabled after the review because of an HR legal-hold request and was disabled 2026-12-14; svc-plotter was created 2026-12-03, after this export.
