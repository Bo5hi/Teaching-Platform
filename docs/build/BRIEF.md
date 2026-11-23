# Build brief: Course v2, Weeks 2-15

You are building one or more weeks of the MCCoE Course v2 on the Teaching-Platform repo, branch `course-v2`. Week 1 is finished and is your model. Copy its patterns exactly.

**Read first:**
- `docs/NEXT-STEPS.md`
- `docs/COURSE_V2.md` (data shapes, and the "Time estimates" section)
- `docs/CEDAR_CREEK.md` (the scenario canon)
- Week 1 itself: the `course-data.js` week 1 entry, `course-w1-lessons.js`, `course-w1-labs.js`, `course-w1-practice.js`, `course-w1-figures.js`, `course-w1-mock.js` with `Mock_Control_Audit.html`, `docs/tools/make_week1_pack.js` and `docs/tools/make_week1_figures.js`.

Repo root: `C:\Users\JoeyHarbour\OneDrive - Missouri Cybersecurity Center of Excellence\Documents\GitHub\Teaching-Platform`
- node: `%LOCALAPPDATA%\mccoe-tools\node-v22.11.0-win-x64\node.exe`
- A static server is usually running on http://localhost:8080 for this folder. Headless Edge screenshots are optional.

## Who it is for
Joey Harbour teaches a 15-week cybersecurity associate cohort (Security+ SY0-701 / CertMaster Perform V8) starting **Mon Jan 11, 2027**. The students are adult beginners, many changing careers.
- Class meets **2 days a week**, so every week is **Day 1 + Day 2**, each about **4 hours of real student work**, with lots of hands-on work.
- The platform carries all the teaching. Students do not use CertMaster.
- **Never copy CertMaster text.** Write original content aligned to the SY0-701 objectives.

## Rules (hard)
1. **Only write your own files**:
   - `course-wN-lessons.js`, `course-wN-labs.js`, `course-wN-practice.js`, `course-wN-figures.js`, `course-wN-mock.js`
   - your week's mock page, if it has one (`Mock_<Name>.html`)
   - `assets/cedarcreek/weekN/` and `assets/cedarcreek/cc-weekN.zip`
   - `docs/tools/make_weekN_*.js`
   - `docs/build/weekN.js` and `docs/build/weekN-notes.md`

   **Do not edit** `course-data.js`, `course.js`, `course.css`, the step pages (Lesson/Lab/Practice/Quiz/Project.html), `MCCoE_Home.html`, the tracker, the Student Platform, `docs/CEDAR_CREEK.md`, or another week's files. If you need a change there, write it in your notes file. Do not commit or push.
2. **Week plan goes in `docs/build/weekN.js`**, not in `course-data.js`:
   ```js
   window.COURSE_STAGING = window.COURSE_STAGING || {};
   window.COURSE_STAGING[N] = { num: N, title, modules, sub, overview, anytime: [...], days: [ {name:'Day 1', focus, blocks:[...]}, {name:'Day 2', ...} ], mock: { id:'wN', title, href, rubric: [[name, description] x5] } };
   ```
   - Block ids are `wNdD-bK`, for example `w2d1-b1`.
   - Block types: `lesson`, `lab`, `practice`, `mock`, `project`, `quiz`, `checkin`, `pbq`, `read` (a real-world source, external URL), `tool` (an older platform tool), `talk` (a short talk, which is a Lesson.html lesson).
   - Fields: `{ id, type, mins, title, desc, href, due?, basis? }`.
3. **Real human minutes.** Joey's main complaint is padded time estimates.
   - Run `node docs/tools/estimate_time.js N`. It measures lessons, talks, labs, practice, quiz and case studies from your content.
   - Set every `mins` to its estimate.
   - For blocks it can't measure (`tool`, `read`, `pbq`, non-Week-1 mocks), work the minutes out with the same rates (in COURSE_V2.md) and put the arithmetic in `basis`, for example `basis: '12 rows x 2.5 min + 6 min reading + 15 min summary = 51 -> 50'`.
   - **Target 230-265 minutes per day.** If a day is short, add hands-on work, not filler reading.
4. **Day pattern, as in Week 1:**
   - Day 1 ends with the daily survey: `{type:'checkin', mins:3, title:'Daily survey', desc:'How did today go?', href:'MCCoE_Student_Platform.html?open=survey'}`.
   - Day 2 ends with the week quiz, then the weekly check-in: `{type:'checkin', mins:5, title:'Weekly check-in', desc:'What you learned, how you feel, and your goal for next week.', href:'MCCoE_Student_Platform.html?open=surveys'}`.
   - The mock project is due at the end of Day 2; the case study is due at the start of next week.
   - Alternate reading and hands-on work. Never put two lessons back to back if a lab can sit between them.
5. **Content size, matching Week 1:**
   - **Lessons:** 1,400-1,800 words, 5-question knowledge check, 1-3 diagrams per lesson (SVG strings in `course-wN-figures.js`; use the Week 1 figure generator's palette and style).
   - **Lesson extras:** Cedar Creek callouts (`kind:'cedar'`), exam callouts (`kind:'exam'`), and **real-world callouts (`kind:'real'`)**.
   - **Labs:** steps with copyable commands, `expect`, `tip`, checkpoints (auto-checked where possible, with answers taken from your generated lab pack), and a reflection. Kali labs must use commands that work on current Kali. Set `waitMins` on a lab for any download, install or scan waiting time.
   - **Quiz:** `COURSE_QUIZ.wN` with 20 questions (in `course-wN-lessons.js`). Draw on and rewrite the matching legacy quiz questions (`weeks-data.js` week `quiz`) and the CyberSec Academy quiz bank, plus new scenario questions.
   - **Practice:** 1 sort or flash set, plus 2 acronym sets of about 20 each. Take the acronyms from the Student Platform acronym drill list (in `MCCoE_Student_Platform.html`) that fit your topics. **Practice ids must contain `wN`**, for example `ports-w4` or `acro-w4a`, because `Practice.html` finds the file by that.
6. **Plain English.** Short sentences. Define every term the first time it appears. No emojis. No marketing tone.
7. **Real-world facts:** use only well-established public facts. Don't invent numbers, dates or quotes. If you are unsure of a detail, leave it out.
8. **Cedar Creek** is the scenario for weeks 1-5 and the Week 9 tickets. Weeks 6-8 labs may use Cedar Creek for continuity.
   - Use canon names, systems and networks from `docs/CEDAR_CREEK.md`. Never contradict it.
   - List every new fact you add (accounts, IPs, files, people) in `docs/build/weekN-notes.md` so it can be merged into the canon.
9. **Absorb the original Hub material** listed for your week below. That means the legacy `weeks-data.js` week (objectives, objectiveDetails, concepts, labs, quiz), the CyberSec Academy curriculum module for that topic (in `CyberSec_Academy.html`), and the Hub checklist items in `week-tasks.js`. Merge them into one lesson set, labs and one quiz. Joey wants nothing from the original Hub lost, only organized. In your notes, list any legacy item you chose to drop and why.
10. **Verify before you finish:**
    - `node --check` every JS file, then load your files in node and confirm every block's lesson, lab, practice and quiz id exists.
    - Run the estimator and fix any flagged blocks.
    - Make sure every lab auto-check answer matches the generated pack.
    - If the server is up, open one lesson and one lab in a browser or headless Edge to confirm they render.

## Links into the older tools (these deep links exist)
- **Pentest Lab:**
  - `Pillar4_EthicalHacking.html?setup=1` (lab setup)
  - `?phase=0` Recon, `?phase=1` Scanning, `?phase=2` Exploitation, `?phase=3` Persistence/Post-exploitation, `?phase=4` Reporting, `?phase=5` Capstone
  - It saves to `mccoe_pentest` and uses HTB Pwnbox. Read the page before you write around it.
- **Blue Team Lab:** `Pillar5_BlueTeam.html?phase=0` Log Analysis, `?phase=1` Threat Detection, `?phase=2` Packet Analysis, `?phase=3` Incident Response, `?phase=4` Defensive Report. It saves to `mccoe_blueteam`.
- **CyberSec Academy:** `CyberSec_Academy.html?scr=soc` (SOC Simulator), `?scr=pw` (Password Checker), `?scr=ph` (Phishing Spotter), `?scr=fc` (flash cards), `?scr=quiz` (quiz bank).
- **Other tools:**
  - `MITRE_Attack_Map.html?panel=techniques` (Colonial ATT&CK mapping; tab 4 is a submitted worksheet)
  - `NIST_CSF_Map.html` (SolarWinds NIST CSF analysis)
  - `MCCoE_CTF.html`
  - `interview.html` (Northgate interview simulator)
  - `SecPlus_PBQ_Labs.html?lab=1..10`
  - `SecPlus_Mock_Exam.html`
  - SOC Ticket Board: `MCCoE_Student_Platform.html?open=tickets`
- **Case studies:** `Project.html?p=N` (questions, rubric, PDF, and a "Real-world sources" box from `PROJECT_SOURCES` in `course-projects.js`).

## Case studies and real-world sources (every week 1-8 must carry these)
Each case study goes on **Day 2** as a `project` block. Its measured time comes from the estimator: about 50 minutes for a Deep Dive and about 65 for Frameworks.

Add `read` blocks for the source documents listed below, placed **just before** the project block. Use these exact URLs; they have been checked:

| Week | Case study block | Real-world source blocks (type `read`) |
|---|---|---|
| 2 | Project 2: Target, Frameworks & Writing (100 pts), `Project.html?p=2` | Krebs: https://krebsonsecurity.com/2014/02/target-hackers-broke-in-via-hvac-company/ |
| 3 | Project 3: Colonial Pipeline, Deep Dive (50 pts) | CISA AA21-131A: https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf ; CEO testimony: https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/Testimony-Blount-2021-06-08.pdf ; CISA two years later: https://www.cisa.gov/news-events/news/attack-colonial-pipeline-what-weve-learned-what-weve-done-over-past-two-years . Plus a `tool` block: MITRE ATT&CK mapping worksheet (`MITRE_Attack_Map.html?panel=techniques`) |
| 4 | Project 4: Colonial Pipeline, Frameworks & Writing (100 pts) | `tool` block: MITRE ATT&CK reference (`MITRE_Attack_Map.html?panel=techniques`); sources as week 3 (optional re-read, short) |
| 5 | Project 5: SolarWinds, Deep Dive (50 pts) | CISA AA20-352A: https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a ; CISA ED 21-01: https://www.cisa.gov/news-events/directives/ed-21-01-mitigate-solarwinds-orion-code-compromise-closed . Plus a `tool` block: NIST CSF 2.0 tool, SolarWinds analysis (`NIST_CSF_Map.html`) |
| 6 | Project 6: SolarWinds, Frameworks & Writing (100 pts) | AA20-352A (reference) + `tool` NIST CSF 2.0 (`NIST_CSF_Map.html`) |
| 7 | Project 7: Equifax, Deep Dive (50 pts) | GAO-18-559: https://www.gao.gov/products/gao-18-559 ; NVD CVE-2017-5638: https://nvd.nist.gov/vuln/detail/CVE-2017-5638 |
| 8 | Project 8: Equifax, Frameworks & Writing (100 pts) | FTC settlement: https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement ; GAO-18-559 (reference) |

Also weave the real incidents into the lessons with `kind:'real'` callouts wherever a concept fits: Target, Colonial Pipeline, SolarWinds and Equifax first, then other well-known cases like WannaCry/EternalBlue or MOVEit. Each lesson set should have at least 3 real-world callouts.

## The 15 weeks (who builds what)
| Week | Focus | Hands-on project | Absorb from the original Hub |
|---|---|---|---|
| 1 | DONE | Mock Control Audit | |
| 2 | Cryptography & PKI (CertMaster Mod 3): crypto concepts, symmetric/asymmetric, hashing and salting, digital signatures, PKI/CAs/certs, CRL/OCSP, key management (HSM/TPM/escrow), encryption at rest/in transit/in use, obfuscation (steganography, tokenization, masking), blockchain basics | **Mock Secure File Exchange** (`Mock_Secure_File_Exchange.html`, saves to `mccoe_mockproj/{key}/w2`): Cedar Creek must send controlled engineering drawings to a customer. Students hash, encrypt, sign, verify certificates and write a short procedure. Kali labs: sha256sum, openssl enc, gpg, openssl x509/s_client | PBQ labs 2 (MD5 hash) and 9 (CA certificates) as `pbq` blocks; Project 2 |
| 3 | Identity, Access & Data (Mods 4, 16): authentication factors, MFA, passwords and password managers, passwordless, SSO/federation (SAML, OAuth, OIDC), access control models (DAC/MAC/RBAC/ABAC/rule-based), least privilege, PAM, provisioning/deprovisioning; data types and classification, data states, sovereignty, privacy, DLP, data roles, retention and destruction | **Mock Access Review** (`Mock_Access_Review.html`, `.../w3`): review a Cedar Creek account/group export against the HR roster. Find orphaned accounts (canon: former engineer Brian Kessler), excess privilege, shared accounts, and VPN without MFA (the Colonial parallel); classify shares. Kali labs: Linux users, groups, sudo, chmod/chown, /etc/passwd and /etc/shadow | Legacy week 4/5 access-control and permissions material, Academy Password Checker (`?scr=pw`), Academy "Access Control" quiz; Project 3 + MITRE tool + Colonial sources |
| 4 | Secure Networks (Mods 5, 6, 9, 11) + **Mock Pentest part 1**: OSI/TCP-IP refresher, ports and protocols, secure protocols, segmentation/VLAN/DMZ, firewalls and ACLs, IDS/IPS placement, VPN/remote access, NAC, wireless security (WPA2/WPA3), cloud, IoT/ICS/OT | **Mock Pentest part 1 = Pentest Lab phases 1-2** (`?setup=1`, `?phase=0`, `?phase=1`), with Kali prep labs (nmap, Wireshark/tcpdump) and a firewall rule review lab. The mock rubric covers recon and scanning. | Legacy week 2 (Network Fundamentals: OSI, Wireshark, defense in depth), Academy modules Network Fundamentals and Network Reconnaissance/Nmap; PBQ labs 4, 5, 7, 8; Project 4 + MITRE reference |
| 5 | Vulnerabilities & Attacks (Mods 8, 13, 14) + **Mock Pentest part 2**: vulnerability scanning, CVE/CVSS, patch and remediation workflow; malware types; indicators of network, password and application attacks (SQLi, XSS); threat intelligence and IOCs | **Mock Pentest part 2 = Pentest Lab phases 3-5 + capstone** (`?phase=2`, `?phase=3`, `?phase=4`, `?phase=5`), with a vulnerability triage lab (Cedar Creek scan export) | Legacy week 3 (Threat Landscape: intel types, malware, MITRE, IOCs, VirusTotal), legacy week 5 Kali (grep/sed/awk, permissions, processes, bash script), Academy modules Threat Landscape, Secure Development and Pentest Methodology, Academy SOC Simulator (`?scr=soc`), flash cards; PBQ labs 1 and 6; Project 5 + NIST CSF tool + SolarWinds sources |
| 6 | Human Factors: social engineering types, password attacks, entropy, Zero Trust, least privilege, security awareness | Kali labs: crack a Cedar Creek hash dump with john (weak vs strong passwords), phishing email header analysis | Legacy week 6 + Academy Human Factors module, Phishing Spotter (`?scr=ph`); Project 6 + NIST CSF tool |
| 7 | Defensive Security & Tools: firewall types, IDS vs IPS, SIEM, EDR/antivirus, patch management | **Blue Team Lab phases 1-3** (`Pillar5_BlueTeam.html?phase=0..2`) | Legacy week 7, Academy SOC Simulator; Project 7 + Equifax sources |
| 8 | Incident Response: NIST IR lifecycle, P1-P4 triage, containment, forensics basics (order of volatility, chain of custody), IR vs DR vs BCP, 3-2-1 backups, incident report | **Blue Team Lab phases 4-5** (`?phase=3`, `?phase=4`) + CTF (`MCCoE_CTF.html`) | Legacy week 8 + Academy IR/Security Operations quiz items; legacy "week 9 CTF challenges"; Project 8 + Equifax sources |
| 9 | **SOC Operations: mock tickets, full week (light lecture)** | SOC Ticket Board, Cedar Creek tickets | Ticket bank in `MCCoE_Student_Platform.html` |
| 10-13 | **Capstone: Northgate mock assessment, 4 weeks (light lecture)** | Northgate fieldwork, scoring, risk register/POA&M, report, outbrief | Legacy weeks 9 and 10 in `weeks-data.js` (lessons, labs, deliverables, `materials/week9/`), `interview.html` |
| 14 | Security+ Review | PBQ labs 1-10, first mock exam attempt, review | Legacy week 11 and the `week-tasks.js` week 11 list |
| 15 | Security+ Mock Exam | Mock exam retake to 80%+, PBQ redo, final study plan | Legacy week 12 and the `week-tasks.js` week 12 list |

**Light weeks (9-13):** each day has one or two **short talks** (type `talk`: a Lesson.html lesson of about 600-1,000 words with a 3-5 question check, about 10-15 min) tied **only** to that day's work. The rest of the day is work blocks. Lesson ids follow the week (`9.1`, `10.1`, and so on).

## Mock project data shape (weeks 2-3)
`course-wN-mock.js` sets `window.MOCK_WN = { id:'wN', title, brief:[...], ..., key:{...answer key...}, rubricNotes:[5 strings, one per rubric criterion, telling the grader what full marks looks like] }`.

The page saves to `mccoe_mockproj/{key}/wN` = `{ name, id, status:'draft'|'submitted', savedAt, submittedAt, submitCount, changedSinceSubmit, data:{...} }`. Never write `grade`; the tracker does. Copy `Mock_Control_Audit.html` for identity, autosave, local preview mode (no Firebase or no student means localStorage only), and the submit flow. The tracker grading view will be generalized later from your `key` and `rubricNotes`.

## When you finish
Reply with:
- The files you created.
- Each day's block list with minutes and the day totals from the estimator.
- What you absorbed from the legacy material, and anything you dropped.
- New Cedar Creek facts.
- Anything you need changed in shared files.
- Any problems.

Keep the reply under 400 words. The details belong in `docs/build/weekN-notes.md`.
