# Week 5 build notes: Vulnerabilities, Attacks, and the Mock Pentest, part 2

Built 2026-11-23. Nothing committed.

## Files
| File | What |
|---|---|
| `docs/build/week5.js` | Week plan (`COURSE_STAGING[5]`), 22 blocks, mock object `w5` with 5-criterion rubric |
| `course-w5-lessons.js` | Lessons 5.1-5.5 (1,390-1,650 words each, 5-question checks) and `COURSE_QUIZ.w5` (20 questions) |
| `course-w5-labs.js` | Lab 5.1 Vulnerability triage, Lab 5.2 Malware hunt and IOC sweep (both Kali) |
| `course-w5-practice.js` | `attacks-w5` (sort, 20 items), `acro-w5a`, `acro-w5b` (20 each) |
| `course-w5-figures.js` | 9 diagrams, ids prefixed `w5-` (generated) |
| `course-w5-mock.js` | `MOCK_W5`: phases, answer key, 5 rubricNotes for the tracker (no mock page: the mock is the Pentest Lab) |
| `assets/cedarcreek/week5/`, `assets/cedarcreek/cc-week5.zip` | Lab pack (root folder `cedarcreek-week5/`) |
| `docs/tools/make_week5_pack.js` | Builds the pack and zip, prints every auto-check answer |
| `docs/tools/make_week5_figures.js` | `node docs/tools/make_week5_figures.js course-w5-figures.js` |

## Day plan (estimator: `node docs/tools/estimate_time.js 5`)
**Day 1 (265 min):** L5.1 Vulnerability management 15 · Lab 5.1 Vulnerability triage 50 · PBQ 6 10 · L5.2 Application attacks and secure development 15 · PBQ 1 17 · Mock Phase 3 Exploitation (`?phase=2`) 75 · L5.3 Malware, password attacks, indicators 15 · Lab 5.2 Malware hunt and IOC sweep 55 · Attack Sorter 10 · Daily survey 3

**Day 2 (265 min):** L5.4 Network attacks and threat intelligence 15 · SOC Simulator (`?scr=soc`) 14 · L5.5 Exploitation, post-exploitation, report 15 · Mock Phase 4 Post-exploitation (`?phase=3`) 55 · Mock Phase 5 Reporting (`?phase=4`) 45 · Mock Capstone (`?phase=5`, due end of Day 2) 20 · NIST CSF tool 13 · read AA20-352A 12 · read ED 21-01 6 · Project 5 50 (due start of Week 6) · Quiz 15 · Weekly check-in 5

Anytime: acronym sets A and B, Academy flash cards (`?scr=fc`), Pentest Lab setup (`?setup=1`).

Both days sit at the top of the 230-265 band. All `tool`, `read`, `pbq` and `mock` blocks carry a `basis`. Lesson 5.1 measures 17.47 min and rounds to 15; if the rates change it will tip to 20.

### Mock pentest design
- The Pentest Lab page has contradictory machine lists. Its setup table says Phase 3 = Preignition + Appointment and Phase 4 = Sequel + Mongod, but Exercise 3 says Appointment + Sequel and Exercise 4 says Blue + Unified. I followed the setup table (all free Starting Point machines). Blue is a retired machine and may need VIP. Suggest editing the page so Exercise 3/4 match the setup table.
- The capstone page asks for a new target end to end plus a 3-page report. That does not fit in a day that also carries Project 5, so the capstone block (20 min) is "assemble and submit the whole Weeks 4-5 engagement"; Crocodile end to end is an optional stretch at home. Lesson 5.5 has a table that tells students this.
- Students keep one engagement-log document and submit the same link on each phase page (the page stores one link per phase in `mccoe_pentest/{key}`).
- The Pentest Lab "Real-World Connection" for Equifax says "69 days after the patch". From March 7 to May 13 is 67 days. I did not repeat the number anywhere.

## Absorbed from the original Hub
- **Legacy week 3 (Threat Landscape):** intel levels (L5.4 + figure), 9 malware types (L5.3 table + figure + sorter), MITRE ATT&CK tactics/techniques (L5.4), IOCs (L5.3, Lab 5.2), SOC Simulator (Day 2 tool block), VirusTotal (Lab 5.2 optional step, by hash search). Quiz items rewritten: ransomware, trojan, worm/SMB, rootkit, keylogger, zero-day, fileless, cryptominer, botnet (L5.4 DDoS/Mirai), polymorphic (L5.3 sentence).
- **Legacy week 5 (Kali):** grep/sed/awk/cut/sort/uniq (Lab 5.1), processes with ps/pgrep/top/kill (Lab 5.2), a bash script with shebang, variables, `$(...)`, chmod +x, redirection and tee (Lab 5.1 `triage.sh`), CFAA rule (L5.5 + quiz).
- **Academy Threat Landscape:** intel table, malware table, CISA advisories (AA20-352A read).
- **Academy Secure Development:** OWASP Top 10 (2021), SDLC phase activities (L5.2 + figure), shift left / DevSecOps, SAST/DAST, input validation.
- **Academy Pentest Methodology:** 5 phases, ROE, report sections and audiences (L5.5 + figures), capstone.
- **Academy quiz bank:** Threat Landscape, Web App Security, Kali & Pentesting items rewritten into L5.2-L5.5 checks and the quiz (SQLi, XSS, CSRF, directory traversal, CVE, pentest phase order, Metasploit/Hydra/Burp).
- **Hub week-tasks week 5:** Project 5, NIST CSF tool, AA20-352A, ED 21-01, Pentest Phases 3-5.

### Dropped, and why
- SolarWinds CEO Senate testimony link (week-tasks week 5): not in the brief's verified URL list. Easy to add as a third `read` if Joey wants it.
- TryHackMe Linux Fundamentals 1-3, OverTheWire Bandit, `find`/`locate`/`history`: covered in Week 1 labs. Bandit would make a good anytime item if wanted.
- `ifconfig`/`netstat -tulpn` and the Nmap/Wireshark/Recon-ng quiz items: network content for Week 4.
- `chmod` numeric notation: Week 3 (Linux permissions).
- Aircrack-ng quiz item: wireless, Week 4.
- "Find a recent CISA advisory and list its IOCs" and "T1486 detection opportunities": replaced by the ISAC IOC sweep (Lab 5.2) and the AA20-352A read; ATT&CK mapping work lives in Weeks 3-4.
- "Submit a renamed .txt file to VirusTotal": replaced by a hash search. Uploading files to a public service is a habit we tell students not to form.
- OWASP WebGoat install and "review 3 vulnerable code snippets": no time; SQL injection is practiced in PBQ 1, Appointment and PortSwigger.
- Full Metasploitable 2 pentest and the 15-minute oral client debrief: replaced by the HTB machines; the oral debrief would fit the Weeks 10-13 capstone outbrief.
- Academy line "Approximately 90% of security incidents exploit software vulnerabilities": unsourced, not used.

## New Cedar Creek facts (please merge into `docs/CEDAR_CREEK.md`)
**Network addresses.** I matched the ticket bank where it already names a host: ENG-FS01 10.30.4.10, ENG-APP02 10.30.4.22, PLANT-PC-07 10.40.2.57, FS-HR01 10.20.6.15, DC01 10.10.1.10, ENG-09 10.20.30.9, ENG-14 10.20.30.14. New: FW-CORE management 10.99.0.1, IT-ADMIN-01 10.99.0.10, NVR-01 10.99.0.15, BADGE-CTRL 10.99.0.16, VULN-SCAN01 10.99.0.50, TIMECLOCK-01 10.40.0.20, FIN-LT-09 10.20.6.41, ENG-12 10.20.30.12. The Week 4 builder should use the same addresses.

**Scan and assets**
- Dee ran Cedar Creek's first vulnerability scan on Fri 2026-12-04 with Greenbone (OpenVAS) from VULN-SCAN01. She scanned servers and management devices with credentials, plus IT-ADMIN-01 and FIN-LT-09 as sample PCs. The plant PCs got non-credentialed "safe checks" after second shift, with Walt's approval. She also ran one external scan of 198.51.100.24.
- Servers are not on the "2nd Tuesday + 7 days" schedule, which covers office PCs through WSUS. Dee patches servers by hand.
- Operating systems and software:
  - PLANT-PC-07 runs a vendor-certified Windows 7 image. It is missing MS17-010 and has RDP open (BlueKeep). The line vendor's technician uses RDP on site, and the vendor will not support the PC if IT patches it.
  - IT-ADMIN-01 runs Windows 11 Pro.
  - FIN-LT-09 has Office 2016.
- Device findings:
  - NVR-01 accepts admin with a blank password, has an old OpenSSL (Heartbleed), and serves its login over HTTP.
  - BADGE-CTRL serves its login over HTTP and has Telnet enabled.
  - TIMECLOCK-01 has Telnet enabled and the SNMP community string "public".
- Server findings: FS-HR01 is missing the PrintNightmare fix, and FS-HR01, ENG-FS01 and ENG-APP02 do not require SMB signing.
- FW-CORE runs firmware 7.2.5. The SSL VPN portal accepts TLS 1.0 and 1.1, and SSH management is reachable from the internet. The OpenSSH banner finding is a false positive (vendor case 88213).
- Every VPN login shows `mfa=none`.

**IRONLATCH / Lab 5.2 (Mon 2026-12-07)**
- The ISAC update (TLP:AMBER) says IRONLATCH affiliates now also use fake browser-update downloads.
- IOCs:
  - Domains: browser-update-cdn.example.net, secure-docshare.example.org, pay-ironlatch.example.com.
  - IP addresses: 203.0.113.45 (VPN spray source), 203.0.113.77 (download/C2), 203.0.113.130.
  - Hashes: the loader hash, plus the EICAR test hash.
- 10:41: ENG-12 (10.20.30.12) downloaded chrome_update_131.exe from browser-update-cdn.example.net and checked in once at 10:42. The EDR quarantined the file at 10:44.
- 13:18: FIN-LT-09 tried to open a phishing page on secure-docshare.example.org (from the invoice_88231 attachment reported by Accounts Payable). The web filter blocked it.
- 02:03-02:30: 203.0.113.45 sprayed 29 VPN user names. 24 are real accounts, including b.kessler (Brian Kessler's VPN account still exists). None succeeded.
- 03:30: 203.0.113.201 tried to brute-force the non-existent account vpnadmin 24 times.
- User-name format is first initial.last, with amanda.singh as the canon exception. VPN users in the log reuse the Week 1 badge-roster names.
- Other workstation names from the DHCP list (background only): HR-03, AP-02, FIN-04, ENG-17, ENG-21, MKT-01, MKT-03, CS-02, CS-04, PUR-01, RECEPTION-01, CONF-RM-1, SHIP-01, SHIP-02, PLANT-OFFICE-01, PLANT-OFFICE-02.
- Story framing: Marcus wants the student ready to scope and read Cedar Creek's first outside penetration test. Practice is on HackTheBox. Please reconcile this with the Week 4 framing.

## Changes needed in shared files (not made)
1. **`course-data.js`:** merge `COURSE_STAGING[5]` into week 5.
2. **`estimate_time.js`:**
   - Flash sets are timed at the sort rate because the script checks `p.mode === 'flash'` while the data uses `kind: 'flash'`. That doesn't affect this week (the acronym sets are anytime only), but it would mis-time any flash block.
   - `mock()` only handles `MOCK_AUDIT_W{n}`.
3. **`docs/CEDAR_CREEK.md`:**
   - Add the facts above.
   - Fix the network list: the ticket bank puts DC01 at 10.10.1.10, which is outside the canon /16s, and FS-HR01 at 10.20.6.15, which is in the office range. Either add 10.10.0.0/16 as a core-server range or change the ticket bank.
4. **`Pillar4_EthicalHacking.html`:** align Exercise 3/4 machines with the setup table.
5. **Lesson 1.0:** its "Your five weeks" table still says Week 4 "Mock Firewall & Network Review" and Week 5 "Mock Vulnerability Triage". It should now say Mock Pentest parts 1 and 2.
6. **Tracker:** grade Week 5 from `mccoe_pentest` phases 2-5 links using `MOCK_W5.rubricNotes`.

## Checks run
- `node --check` passes on all 8 JS files.
- Every block's lesson, lab, practice, quiz and project id resolves, and every figure id exists.
- Each lesson check has 5 questions with 4 options.
- Answer positions are balanced at 11/11/11/12 across the checks and the quiz.
- The estimator shows no flags: 265 / 265.
- The pack generator's printed answers match every auto-check.
- I ran every Lab 5.1 and 5.2 text-processing command in bash (Git for Windows) against the unzipped `cc-week5.zip`. All outputs matched the checkpoints.
- **Not tested on Kali:** the `exec -a` process disguise and `pgrep -a`. Run Lab 5.2 steps 1-5 once on a current Kali VM.
- Lesson 5.1 and Lab 5.2 render correctly at http://localhost:8080.
- `wget` of the pack only works once `cc-week5.zip` is on GitHub Pages.

## Real-world facts used (spot-check list)
- Equifax: CVE-2017-5638, fix released March 2017; GAO says a later scan missed it; attackers in May 2017; about 147 million people.
- WannaCry: May 2017; EternalBlue against SMBv1 (CVE-2017-0144); MS17-010 released March 2017; NHS affected; attributed by the US and UK to North Korea.
- MOVEit: Cl0p, SQL injection zero-day CVE-2023-34362, May-June 2023.
- Mirai: default passwords; DDoS on Dyn in October 2016.
- SolarWinds:
  - SUNBURST in signed Orion updates; "fewer than 18,000" customers downloaded an affected version.
  - SAML signing certificate theft (per AA20-352A).
  - FireEye found it in December 2020.
  - ED 21-01 ordered Orion disconnected or powered down.
  - Attributed to Russia's SVR in April 2021.
- Colonial: DarkSide, May 2021; the CEO's testimony says entry was a legacy VPN account without MFA.
- Target: credentials stolen from Fazio Mechanical; lateral movement to POS; about 40 million cards.
- CVSS base scores: 0144 = 8.1, 0708 = 9.8, 34527 = 8.8, 0160 = 7.5. CVSS 4.0 was published in 2023.
- TLP 2.0 labels. OWASP Top 10 2021. ATT&CK IDs T1110.003, T1036, T1195. EICAR SHA-256 275a021b...fd0f.

## Consistency pass (2026-11-23)
Merged into `docs/CEDAR_CREEK.md`. Changed here: normal VPN logins in `vpn_auth_2026-12-06_07.log` now come only from VPN-Users members (Week 3, plus m.alvarez, r.medina and amanda.singh, added 2026-12-01) from their canon home addresses, and each success shows its profile: `profile=CC-REMOTE mfa=push` or `profile=CC-LEGACY mfa=none`. The spray and brute-force lines are byte-identical, so every Lab 5.2 answer is unchanged (108 lines, 29 users, 0 successes, 24 tries). The proxy's payroll site is Tallgrass Payroll (`app.tallgrasspayroll.com`, 192.0.2.80) instead of 192.0.2.200, which is vendor.cad's address. Lesson 5.3's callout and the Lab 5.2 text and reflection now say the password-only door is CC-LEGACY. PLANT-PC-07's Windows 7 image is canon (Week 7 changed to match). 203.0.113.45 and .77 are reused on purpose in Weeks 6-8 as IRONLATCH infrastructure; the IP blocks were never applied.
