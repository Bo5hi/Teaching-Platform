# Week 7 build notes: Defensive Security and Tools

Built 2026-11-23. Nothing committed. Plan: `docs/build/week7.js` (`COURSE_STAGING[7]`).

## Files
| File | What |
|---|---|
| `course-w7-lessons.js` | Lessons 7.1-7.5 (1,450-1,730 words, 5-question check each) + `COURSE_QUIZ.w7` (20 questions) |
| `course-w7-labs.js` | Labs 7.1 (firewall log), 7.2 (SIEM-style correlation), 7.3 (patching: Kali + Cedar Creek report + NVD). All Kali. |
| `course-w7-practice.js` | `tools-w7` (sort, 24 items: tool x control type), `acro-w7a`, `acro-w7b` (20 each) |
| `course-w7-figures.js` | 8 diagrams, ids prefixed `w7-` (generated) |
| `course-w7-mock.js` | `window.MOCK_W7`: Blue Team phases 1-3, model answers per question, `rubricNotes` x5, accuracy notes for graders |
| `docs/tools/make_week7_pack.js` | Builds `assets/cedarcreek/week7/` + `cc-week7.zip` (deterministic) and prints every auto-check answer |
| `docs/tools/make_week7_figures.js` | Builds `course-w7-figures.js` (Week 1 palette and helpers) |
| `assets/cedarcreek/week7/`, `assets/cedarcreek/cc-week7.zip` | Lab pack (about 20 KB) |

No `Mock_*.html`: the mock is the existing Blue Team Lab page.

## Day plan (minutes from `node docs/tools/estimate_time.js 7`)
**Day 1, 238 min:** L7.1 Firewalls 20 · Lab 7.1 45 · L7.2 IDS/IPS 15 · SOC Simulator (tool) 15 · L7.3 SIEM 15 · Lab 7.2 50 · Blue Team phase 1 (mock) 45 · L7.4 Endpoint 15 · Tool Sorter 15 · survey 3

**Day 2, 260 min:** Blue Team phase 2 (mock) 55 · L7.5 Patching 15 · Lab 7.3 45 · Blue Team phase 3 (mock, due end of Day 2) 50 · read GAO-18-559 20 · read NVD CVE-2017-5638 5 · Project 7 50 (due start of Week 8) · quiz 15 · weekly check-in 5

Tool, read, and mock blocks carry their arithmetic in `basis`. Mock minutes use the case-study rates (long answer 10, short 3) on each phase's questions.

## The scenario (Cedar Creek, weekend of Fri 2026-12-18 to Sun 2026-12-20)
Week 7 is placed six weeks after the student's first day (Mon 2026-11-09), so "Monday" is 2026-12-21.
- Fri 16:53:10: Laura Kim opens `Q4_Invoice_Review.xlsm` on MKT-LT-02. EDR (Marketing on the **Detect** policy) alerts only. 16:53:41 `synchelper.exe` added to the Run key.
- From Fri 16:55:31: beacon to `telemetry-sync.example` / 203.0.113.45:8443 every 10 minutes (330 beacons), allowed by FW-CORE rule Copier-Test (anything outbound that is not 80/443); IPS (alert-only) raises one Priority 3 alert per hour (55).
- Sat 02:10:03-02:13:33: password spray from MKT-LT-02 against 31 accounts, one try each (30 x 4625). `svc-plotter` succeeds at 02:12:51, then signs in to ENG-FS01 at 02:31:07. EDR: archive `cc_q4.7z` created 02:35:18.
- Sat 02:47:12: one 1,288,490,188-byte upload to 203.0.113.45 (Priority 1 IPS alert at 03:06:40).
- Noise: internet scanning (26 sources, 3389 most targeted), port sweep from 203.0.113.91 (40 ports, Sat 03:12), HR-PC-01 to the Tallgrass Payroll portal on 8443 (false positive), CS-PC-02 SMB out blocked, EDR quarantines on ENG-14 and CS-PC-06.
- Week 8 could pick this up as its incident-response case (containment of MKT-LT-02 and svc-plotter, scoping what left ENG-FS01). Nobody in Week 7 says what data was in the archive.

## New Cedar Creek facts (please merge into `docs/CEDAR_CREEK.md`)
- **SIEM and alerts:** a SIEM exists; it and the EDR mail alerts to `siem-alerts@cedarcreek-ind.com` (consistent with the ticket bank). Nobody watches it on weekends; no on-call.
- **EDR:** SentinelOne (from TCK-2002). Policies **Protect** and **Detect**. Dee moved Marketing (MKT-LT-02, MKT-PC-04) to Detect on 2026-11-30 because it quarantined the font manager FontVault; reminder to revert 2026-12-14, not done.
- **FW-CORE:** IPS module in alert-only mode since March 2024 (blocking mode once cut off the payroll portal on a payday). Rules seen in the log: `allow-vpn` (in, 443 to 198.51.100.24), `default-deny-in`, `out-any` (all outbound), `deny-out-smb`. Firmware 9.4.2 last patched 2026-09-02; vendor advisory 2026-12-10, Critical VPN portal flaw, fixed in 9.4.5. A FW-CORE reboot drops the plant about 10 minutes (Walt approves windows). **Week 4 builder:** if your FW-CORE rule set differs, one of us should reconcile.
- **Account lockout:** 10 bad passwords in 30 minutes (consistency pass; was 5 in 15).
- **Accounts:** `svc-plotter` (plotter scan-to-folder service account, weak password, access to ENG-FS01), plus `svc-print`, `svc-scan`, `svc-sql` (spray targets only). Spray list also uses existing names: administrator, ccadmin, ticket-bank users (h.brooks, j.owens, l.osei, marcus.hall, s.whitfield, svc-backup) and canon staff.
- **Hosts and IPs (office 10.20.0.0/16, from `it/dhcp_leases.csv`):** IT-ADMIN-01 10.20.1.10 (m.reyes), IT-LT-01 .1.11 (d.ortiz), IT-LT-02 .1.12 (j.pike), FIN-LT-09 .3.14 (g.palmer), FINANCE-07 .3.15 (d.reyes), FIN-PC-03 .3.16 (amanda.singh), HR-05 .4.20 (e.foster), HR-PC-01 .4.21 (r.medina), **MKT-LT-02 .5.37 (l.kim, new)**, MKT-PC-04 .5.38 (k.tran), ENG-14 .6.40 (t.becker), ENG-09 .6.41 (p.nguyen), ENG-11 .6.42 (p.nair), SALES-06 .7.50 (r.castillo), CS-PC-02 .7.51 (g.lindqvist), PUR-PC-01 .8.60 (m.alvarez). No server IPs were assigned (servers appear by name only).
- **Outside addresses:** C2 203.0.113.45 `telemetry-sync.example`; payroll provider portal `portal.payroll-provider.example` 192.0.2.80:8443; scanner 203.0.113.77. All documentation ranges / `.example`.
- **Patching:** Windows = Patch Tuesday + 7 days (December: 12-08, so 12-15); servers by hand on Saturdays; firmware "when we get to it". OS facts: DC01 Server 2019, FS-HR01 Server 2016, ENG-FS01 Server 2019 (skipped December for a customer deadline), **PLANT-PC-07 Windows 10 22H2 (end of support 2025-10-14; HMI vendor has not certified Windows 11)**, office PCs Windows 11, NVR-01 firmware 4.1 (last 2024-03-02), BADGE-CTRL firmware 2.8. Full table in `it/patch_status.csv`. **Week 5 builder:** check PLANT-PC-07's OS against your scan export.

## Legacy material absorbed
- **`weeks-data.js` week 7 objectives 1-5** -> Lessons 7.1 (firewalls), 7.2 (IDS/IPS), 7.3 (SIEM), 7.4 (endpoint), 7.5 (patching). All objectiveDetails key points are in the lessons, including the hospital firewall design, the smoke alarm vs sprinkler analogy, the three-log SIEM example, CEF/syslog normalization, 30-90+ day retention, product names (Snort, Suricata, Splunk, Sentinel, Elastic, CrowdStrike, SentinelOne, Defender), application allow listing, FDE, the CVSS patch timelines (presented as an example policy, not a standard), and EternalBlue.
- **Concepts table (10 rows):** all covered in lessons, sorter, and acronyms.
- **Resources:** TryHackMe SOC Level 1, Snort, Microsoft Sentinel docs -> `anytime`; NVD -> Lab 7.3 and a `read` block.
- **Labs:** (1) EternalBlue NVD lookup -> Lab 7.3 steps + checkpoint; (2) SIEM correlation rule for credential stuffing -> Lab 7.2 c13 (password spraying); (3) IDS vs IPS comparison -> Lab 7.2 c14 (2 situations each instead of 3, to keep time real); (4) look up versions of software you run at NVD -> Lab 7.3 `apt list --upgradable` / `apt-cache policy` on Kali plus two NVD lookups; (5) TryHackMe Intro to SIEM -> optional `anytime` link.
- **Legacy quiz (10):** all ten rewritten into `COURSE_QUIZ.w7`. Fixed: "147 million records" -> GAO's "at least 145.5 million"; "public exploit available for 78 days" -> about two months (fix early March, intrusion May 13).
- **Academy "Defensive Security" quiz (10):** IDS/IPS, EDR, SIEM sources, segmentation, WAF, patching, DLP, baselines used. **3-2-1 backups** left for Week 8 (backups are in its brief). **Zero Trust** left for Week 6 (in its brief).
- **`week-tasks.js` week 7:** study content, quiz, acronym drill, lab activity, Defensive Security quiz, SOC Simulator (`tool` block), Project 7, Blue Team phases 1-3: all present. **Academy Module 7 "Secure Development" (cur 6)** is not repeated here: the build brief assigns it to Week 5.
- **Acronyms:** the Student Platform's week 7 drill list is alphabetical (PTZ to SIEM), not topical. I picked 40 topical acronyms from the whole 292-item list instead.

## Requests for shared files
1. **`course-data.js`:** replace `{ num: 7, title: 'Defensive Security & Tools', legacy: 7 }` with `COURSE_STAGING[7]`.
2. **`docs/CEDAR_CREEK.md`:** add the facts above.
3. **Tracker:** grade Week 7 from `mccoe_blueteam/{key}` (`phase0_link`..`phase2_link`, `phase0`..`phase2`) with `MOCK_W7.key` and `rubricNotes`. Note the Blue Team page writes no status/submittedAt; a phase counts as submitted when `phaseN` is true.
4. **`Pillar5_BlueTeam.html` accuracy (for Joey):** phase 3 tells the Colonial Pipeline story through a vsftpd 2.3.4 backdoor, which did not happen at Colonial (the real entry was a VPN password with no MFA). Phase 1's Target log is a reconstruction. My block text calls them "training reconstruction" and the mock key tells graders not to penalize students who point this out. Consider a one-line note on the page itself.
5. **`PROJECT_SOURCES[7]`** in `course-projects.js` already lists GAO-18-559; consider adding NVD CVE-2017-5638.

## Facts checked against sources
- GAO-18-559 (PDF text): US-CERT notice March 2017 went to an out-of-date list; scan a week later missed it; attackers in from May 13, 2017; about 76 days; expired certificate "about 10 months before the breach", traffic not inspected; detected July 29, portal offline July 30; 48 more databases via unencrypted credentials; about 9,000 queries with no rate limit; at least 145.5 million; announced September 7, 2017.
- NVD API: CVE-2017-5638 CVSS 3.1 9.8 CRITICAL; CVE-2017-0144 CVSS 3.1 8.8 HIGH (Lab 7.3 auto-checks the severity word, not the number).
- From well-known public record: Target (Fazio Mechanical credentials, about 40 million cards, alerts not acted on per the Senate Commerce staff report), WannaCry (MS17-010 March 2017, EternalBlue leaked April, WannaCry May 12, 2017), SolarWinds signed DLL (CISA AA20-352A).

## Verification done
- `node --check` on all Week 7 JS; every block's lesson, lab, practice, quiz, and project id resolves; every lesson figure exists.
- Every Lab 7.1/7.2/7.3 command was run against the generated pack in bash (Git for Windows: GNU grep, gawk, sed, sort). All 27 auto-check answers match the pack. Kali's default awk is mawk; the awk used is POSIX, and the largest summed number (1,289,150,354) is below 2^31.
- Lesson 7.2, Lab 7.2, and the figures rendered in headless Edge from localhost:8080.

## Problems / open items
- `wget` of `cc-week7.zip` works only after the zip is on GitHub Pages (same as Week 1).
- Blue Team phases still require Google Doc links (existing page behavior).
- NVD scores can be revised; if NIST rescored either CVE, update Lab 7.3 c7/c8.
- Lab 7.3 runs `sudo apt full-upgrade`; on a VM not updated since Week 1 this can take longer than the 10 wait minutes. It runs in a second tab while students do the report and NVD steps.

## Consistency pass (2026-11-23)
Changed to match `docs/CEDAR_CREEK.md`. The facts in the sections above that disagree with this list are superseded.
- **Addresses and users (DHCP list):** IT-LT-03 10.20.1.10 (m.reyes; IT-ADMIN-01 is 10.99.0.10 in MGMT and stays in the patch report), FIN-LT-09 10.20.6.41, FINANCE-07 10.20.6.43, FIN-PC-03 10.20.6.44, HR-05 10.20.6.20 (t.greene), HR-PC-01 10.20.6.21, MKT-LT-02 10.20.8.37, MKT-PC-04 10.20.8.38, ENG-14 10.20.30.14, ENG-09 10.20.30.9 (o.gallagher), ENG-11 10.20.30.11, CS-PC-06 10.20.10.50 (j.dorsey; was SALES-06 / r.castillo), CS-PC-02 10.20.10.51, PUR-PC-01 10.20.10.60.
- **Spray list:** ticket-bank names replaced by Week 3 directory names (t.greene, i.mcbride, g.rowe, n.quinn, t.lund, o.gallagher, j.dorsey, c.benson). Still 31 accounts; svc-plotter still succeeds at 02:12:51.
- **Port sweep source:** 203.0.113.91 (203.0.113.77 is an IRONLATCH address). C2 stays 203.0.113.45, on purpose: it is on the Week 5 ISAC IRONLATCH list; Lab 7.2 has a tip saying so after the beacon is confirmed.
- **Firewall rules use Week 4's names:** Inbound-SSL-VPN, Default-Deny, Block-SMB-Out, Office-Web (outbound 80/443) and Copier-Test (everything else outbound, including the beacon and the 1.29 GB upload). On 2026-12-02 Jordan moved Block-SMB-Out above Copier-Test and turned on logging for every rule.
- **FW-CORE firmware** 7.2.5; advisory fixed in 7.2.8. **PLANT-PC-07** runs the line vendor's certified Windows 7 image (out of support 2020-01-14). **Payroll portal** is Tallgrass Payroll, app.tallgrasspayroll.com (192.0.2.80). **svc-plotter** was created 2026-12-03 for the Engineering plotter (scan to \\ENG-FS01\Scans).
- **Answers changed:** Lab 7.1 c3 203.0.113.91, c6 Copier-Test (question reworded), c8 10.20.8.37. All other counts (706, 197, 40, 3389, 59, 1, 30, 02:47:12, 20, 4, 2, 4) are unchanged. Minutes unchanged.
- **NVR-01** stays at firmware 4.1; patch-report note now says 5.7.2 was downloaded and verified in November (Week 2) but not installed.
