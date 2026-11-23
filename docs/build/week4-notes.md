# Week 4 build notes: Secure Networks and the Mock Pentest, part 1

Built 2026-11-23. Nothing committed. Aligned with Week 5 (`docs/build/week5-notes.md`) after it finished. See "Alignment with Week 5" below.

## Files
| File | What |
|---|---|
| `docs/build/week4.js` | Week plan (`COURSE_STAGING[4]`), 23 blocks, mock object `w4` with 5-criterion rubric |
| `course-w4-lessons.js` | Lessons 4.1-4.6 (1,400-1,480 words each, 5-question checks) and `COURSE_QUIZ.w4` (20 questions) |
| `course-w4-labs.js` | Lab 4.1 tcpdump/Wireshark, Lab 4.2 FW-CORE rule review, Lab 4.3 Nmap (all Kali) |
| `course-w4-practice.js` | `ports-w4` (sort, 23 items), `acro-w4a`, `acro-w4b` (22 each) |
| `course-w4-figures.js` | 11 diagrams (generated) |
| `course-w4-mock.js` | `MOCK_W4`: brief, phases, answer key per HTB machine, 5 rubricNotes (no mock page: the mock is the Pentest Lab) |
| `assets/cedarcreek/week4/`, `assets/cedarcreek/cc-week4.zip` | Lab pack (root folder `cedarcreek-week4/`): network map, scope authorization, FW-CORE rule export, Nmap scan (.nmap/.gnmap), plant packet capture (.pcap), memos |
| `docs/tools/make_week4_pack.js` | Builds the pack and zip (including a real pcap), prints every auto-check answer |
| `docs/tools/make_week4_figures.js` | `node docs/tools/make_week4_figures.js course-w4-figures.js` |

## Day plan (estimator: `node docs/tools/estimate_time.js 4`, no flags)
**Day 1 (258 min):** L4.1 How networks carry data 15 · Lab 4.1 tcpdump and Wireshark 45 · PBQ 5 ARP 10 · L4.2 Ports and secure protocols 15 · Port and Protocol Sorter 15 · L4.3 Secure network architecture 15 · Lab 4.2 FW-CORE rule review 35 · PBQ 8 pfSense 10 · L4.4 Remote access, NAC, wireless 15 · PBQ 4 switch port security 10 · PBQ 7 WPA2 WLAN 10 · L4.6 Recon and scanning 15 · Lab 4.3 Nmap 45 · Daily survey 3

**Day 2 (255 min):** Mock setup (`?setup=1`) 20 · Mock Phase 1 Recon (`?phase=0`, Meow + Fawn) 60 · Mock Phase 2 Scanning (`?phase=1`, Dancing + Redeemer, due end of Day 2) 65 · L4.5 Cloud, IoT, OT 15 · MITRE ATT&CK reference tool 10 · read: Blount testimony (optional re-read) 5 · Project 4 60 (due start of Week 5) · Quiz 15 · Weekly check-in 5

Anytime: acronym sets A and B.

- Lesson 4.6 sits on Day 1 so students learn Nmap and do Lab 4.3 before the HTB work; its last section is the Mock Pentest brief (scope, the five document sections that match the rubric, which links to paste, skip Exercise 2b).
- All `tool`, `read`, `pbq` and `mock` blocks carry a `basis`. PBQ estimates assume a first attempt plus reading the score report; the PBQ page itself budgets 6 minutes per lab.
- Lessons measure 15.0-16.3 minutes and round to 15. Lab 4.2 measures 32.7 and rounds to 35.

## Mock Pentest part 1 design
- The mock IS the Pentest Lab, phases 0 and 1, with the setup page first. Students keep one engagement document with five sections (scope/ROE, recon, scan table, evidence, findings with the Cedar Creek parallel) and paste the same link into Phase 1 and Phase 2. Week 5 continues in the same document and its capstone submits the whole Weeks 4-5 engagement.
- Machines follow the Pentest Lab **setup table** (Phase 1 Meow + Fawn, Phase 2 Dancing + Redeemer), the same rule Week 5 used. The page's Exercise 2 text mentions Fawn + Dancing, and Exercise 2b (Ignition, Bike) leads into exploitation; Lesson 4.6 tells students to skip 2b.
- Story framing matches Week 5: Cedar Creek plans its first outside penetration test, and Marcus wants the student able to scope it and read the report, so they practice on HTB.
- Grading: the Pentest Lab saves to `mccoe_pentest/{key}` (`phase0_link`, `phase1_link`), not `mccoe_mockproj`. `MOCK_W4.key` lists the expected open ports, weakness, fix and Cedar Creek parallel per machine. Versions (vsftpd 3.0.3, Redis 5.0.x, share WorkShares) are hedged: HTB can update machines.

## Absorbed from the original Hub
- **Legacy week 2 (Network Fundamentals):** all six objectives. OSI layers with protocols and attacks per layer (L4.1 table and figure), mnemonics, encapsulation with a worked web-request example, Wireshark capture, display filters (`dns`, `ftp || telnet`, Follow TCP Stream), the TCP handshake (Lab 4.1 checkpoint), defense in depth with the 8 layers (L4.3). Its 10 quiz questions were rewritten into the quiz and checks (Layer 3 routing, UDP for video, 443, DMZ, stateless filter, SYN burst = port scan, VPN, defense in depth, Layer 4 attacks).
- **Academy Network Fundamentals (cur 1):** OSI table with attacks, the 15-protocol layer sort (as the OSI figure, Wireshark layer checkpoint and quiz items), encapsulation.
- **Academy Network Reconnaissance (cur 5):** every Nmap option in its table (L4.6 table), port states (figure), NSE, -oN/-oG/-oA, CFAA legal note, "interpret a printed Nmap output" (Lab 4.3 on Dee's scan, L4.6 "Reading a scan report"), "write a scanning report" (the mock's scan table and findings).
- **Academy quiz bank:** Network Security (TCP, 443, subnet mask, OSI, DNS, VLAN, NAT, sniffer, proxy, DHCP), Kali & Pentesting (Nmap, Wireshark, recon, -sS, phase order, Aircrack-ng as wireless context), Cloud Security (shared responsibility, IaaS/PaaS/SaaS, multi-tenancy, CASB, IaC, zero trust) rewritten into lesson text, checks and quiz.
- **Hub week-tasks week 4:** Project 4, MITRE reference tool, the Colonial source (one optional `read`; the other two are in Project.html's sources box), Pentest Phases 1-2. **Week 2 list:** Network Fundamentals module and Network Security quiz.
- **PBQ labs 4, 5, 7, 8** as `pbq` blocks, each placed after the lesson that teaches it.

### Dropped, and why
- Hub week 2 "SOC Simulator": Week 5 uses it.
- Hub week 4 Academy cur 4 (Kali Basics) and the "OS & Linux" / "Access Control" quizzes: Kali basics are Weeks 1 and 5; access control is Week 3.
- Academy "Scan your Metasploitable 2 VM" and `nmap --script vuln`: replaced by scanning services on the student's own Kali plus the HTB machines; vulnerability scanning is Week 5.
- Legacy "draw the OSI model / defense in depth from memory" activities: kept as content and quiz items, not as separate blocks (no time on Day 1).
- Resource links (TryHackMe OSI room, Professor Messer, NetworkChuck, Nmap book): not added as blocks. Good candidates for a Resources page.
- Legacy quiz "nslookup / which protocol resolves hostnames": covered in L4.1 and Lab 4.1, not as a quiz question.
- Academy cloud items on CSPM, S3 buckets and DevSecOps: S3-style misconfiguration is covered through the Capital One callout; DevSecOps belongs to Week 5 (Secure Development).
- CertMaster Module 11B (secure coding, input validation, code signing): left to Week 5, which absorbed the Academy Secure Development module. Week 4 covers Module 11A (protocols, email security, DNS security and filtering).

## New Cedar Creek facts (please merge into `docs/CEDAR_CREEK.md`)
**Addresses (Week 5's addresses reused; new ones marked new).** DC01 10.10.1.10, FS-HR01 10.20.6.15 (on the office HR/Finance subnet), FIN-LT-09 10.20.6.41, ENG-09 10.20.30.9, ENG-FS01 10.30.4.10, ENG-APP02 10.30.4.22, PLANT-PC-07 10.40.2.57, TIMECLOCK-01 10.40.0.20, FW-CORE 10.99.0.1, IT-ADMIN-01 10.99.0.10, NVR-01 10.99.0.15, BADGE-CTRL 10.99.0.16. New: CORE-SW1 10.99.0.2, NETMON-01 10.99.0.5 (SNMPv2c poller), PLANT-SW1 10.99.0.12, IT-LT-04 10.20.1.77 (spare IT laptop), LINE2-PLC 10.40.2.10 (Modbus/TCP 502, web on 80), LINE2-CNC03 10.40.2.63 (FTP and Telnet), LINE2-CNC04 10.40.2.64 (FTP), LINE2-CNC05 10.40.2.65 (down for rebuild), LINE2-LABEL 10.40.2.70 (label printer), HVAC-CTRL 10.40.9.15 (building HVAC controller, HTTP login). FW-CORE's plant interface is 10.40.0.1.

**Zones (all routed through FW-CORE):** OUTSIDE; OFFICE 10.20.0.0/16 (10.20.6.x HR/Finance, 10.20.30.x Engineering); SERVERS 10.10.0.0/16 (core: DC01, backups) and 10.30.0.0/16; PLANT 10.40.0.0/16 as one flat VLAN, CC-PLANT Wi-Fi clients get 10.40.100.x; MGMT 10.99.0.0/24; GUEST 172.16.50.0/24 (CC-GUEST, internet only); VPN pool 10.250.0.0/24 (staff 10.250.0.0/25 group VPN-STAFF, vendors 10.250.0.128/28 group VENDOR-HVAC). AD domain `cedarcreek.local` (as in the ticket bank).

**Vendor:** Riverbend Mechanical, HVAC contractor. Asked on 2023-06-12 for VPN access to HVAC-CTRL only; Jordan created one shared login and FW-CORE rule 12 giving the vendor pool any-port access to SERVERS and PLANT. Its technician logs in to HVAC-CTRL over plain HTTP Basic auth (`riverbend` / `Chill3r!`). HVAC-CTRL showed the server room zone at 81 F with a high-temperature alarm (fits Dee's AC memo).

**FW-CORE rule base (export 2026-11-30, 24 rules, first match wins):**
- 6 and 7: plant and office reach each other on any port ("temporary" Line 2 label printing fix, 2019).
- 8: plant to all servers, any port.
- 10: office engineering to CNC03 Telnet (shadowed by 7, 0 hits).
- 12: the vendor rule above.
- 14: RDP from one CAD-vendor address (203.0.113.60) forwarded to ENG-APP02, no logging.
- 15: SSH to FW-CORE's management from any internet address (matches Week 5's "SSH management reachable from the internet").
- 16: stale SSH rule for an ERP migration contractor (203.0.113.150 to 10.30.4.40, 2020, 0 hits).
- 20: NETMON-01 SNMPv2c to all of 10.0.0.0/8.
- 21: "Copier-Test" any-any ALLOW (J. Pike, 2025-03), above 23 Block-SMB-Out and 24 Default-Deny, so there is no working implicit deny.
- 22: disabled.
- 15 ALLOW rules do not log.

**Scan:** Greg Palmer signed a scan/capture authorization on 2026-11-25. Dee ran `nmap -sS -sV -p- --open` from IT-LT-04 on an office port on Mon 2026-11-30 after second shift (23:20-23:46).
- 8 addresses, 7 up, 17 open ports.
- PLANT-PC-07 shows 135/139/445/3389 ("Windows 7 - 10").
- ENG-APP02 shows IIS 8.5 plus 135/139/445/3389.

**Capture:** Jordan mirrored PLANT-SW1 on Tue 2026-12-01, about 10:14-10:22 AM (116 packets). It contains:
- Modbus polling from PLANT-PC-07 to LINE2-PLC.
- FTP from ENG-FS01 to CNC03 (`cncload` / `Line2load!`, file `BRK-4471_revC.nc`, program O4471 marked customer confidential).
- Telnet from ENG-09 to CNC03 (`cncadmin` / `Cnc#2019`).
- A CC-PLANT Wi-Fi client 10.40.100.37 completing a TCP connection to FS-HR01:445.
- The vendor's HTTP Basic login.
- DNS lookups to DC01.

## Alignment with Week 5 (coordinator request) and conflicts found
- **Host IPs:** changed Week 4 to Week 5's addresses throughout (pack, labs, lessons, figures). Moving IT-ADMIN-01 into MGMT meant the "what can an office PC reach" scan now runs from a new spare laptop, IT-LT-04 (10.20.1.77).
- **External exposure conflict, fixed:** my first FW-CORE export forwarded RDP from *any* internet address to ENG-APP02 and port 8000 to NVR-01. Week 5's external scan of 198.51.100.24 (Dec 4) reports only 443 and 22, so I limited rule 14 to one vendor source address (the scan would see 3389 as filtered) and replaced the NVR rule with the SSH-management rule Week 5 found.
- **IP collision, fixed:** I had used 203.0.113.77 for the ERP contractor; Week 5 uses it as an IRONLATCH C2 IOC. Changed to 203.0.113.150.
- **VPN:** Week 4 says the VPN uses passwords alone (no MFA) and does not mention individual accounts, so there is no conflict with Week 5's `mfa=none` lines or the spray on Brian Kessler's still-active account.
- **PLANT-PC-07:** Week 5 says it runs Windows 7 with RDP open; my scan shows 3389 open and SMB as "Windows 7 - 10". I removed VNC from it so Week 5's findings list stays complete.
- **Ticket bank vs canon (not mine to fix, needs Joey):**
  - The ticket bank has a separate "PLANT-FW" at 10.40.2.1 with its own plant ISP and NAT 192.0.2.45. Canon (and Weeks 4-5) say FW-CORE routes every zone and all traffic leaves as 198.51.100.24.
  - DC01 is 10.10.1.10, outside the canon /16s. I added 10.10.0.0/16 to the SERVERS zone.
  - FS-HR01 is 10.20.6.15, on the office network. Week 4 treats this as a finding.
  - Many generic plant PCs use 10.40.2.x in August tickets. Dee's scan targets an explicit list of Line 2 devices instead of a /24 so it does not contradict them.

## Changes needed in shared files (not made)
1. **`course-data.js`:** merge `COURSE_STAGING[4]`. The week 4 stub's `mockTitle` can become "Mock Pentest, part 1: Reconnaissance and Scanning".
2. **`docs/CEDAR_CREEK.md`:** add the facts above and settle the PLANT-FW / 10.10.x / FS-HR01 questions.
3. **`Pillar4_EthicalHacking.html`:**
   - Make Exercise 2 match the setup table (Dancing + Redeemer).
   - Mark Exercise 2b as Week 5.
   - The setup page calls HTB's browser machine an "Ubuntu AttackBox". HTB calls it Pwnbox, and I believe it runs Parrot OS, not Ubuntu.
   - The Phase 2 Colonial box says "17 states for six days". I did not repeat that number.
4. **Tracker:** grade Week 4 from `mccoe_pentest` `phase0_link` / `phase1_link` with `MOCK_W4.key` and `rubricNotes`. Write the grade where the tracker keeps mock grades.
5. **`estimate_time.js`:** the flash/sort `mode` vs `kind` issue Week 5 noted. It does not affect Week 4 (acronym sets are anytime only).
6. **Lesson 1.0:** its week table still says Week 4 "Mock Firewall & Network Review". It should be Mock Pentest part 1.

## Checks run
- `node --check` passes on every Week 4 JS file. A load script confirmed that:
  - every block's lesson, lab, practice, quiz and project id resolves;
  - every figure id exists, and lesson/lab `mins` equal block `mins`;
  - each check has 5 questions and the quiz has 20;
  - answer positions are balanced at 13/13/12/12. Six naturally ordered option lists (layers, numbers, Nmap commands) were left in order.
- The estimator shows no flags: 258 / 255.
- Every auto-check answer matches the pack generator's printed answers.
- The pcap was parsed independently: 116 packets, IP/TCP/UDP checksums valid, TCP sequence numbers continuous, cleartext credentials present.
- Lesson 4.3 and Lab 4.2 render at http://localhost:8080 (headless Edge). All 11 figures were checked visually.
- **Not tested on Kali:**
  - tcpdump/Wireshark against the generated pcap. Wireshark's `mbtcp` filter should decode Modbus on 502.
  - The `tcp[tcpflags] == tcp-syn` filter.
  - VirtualBox NAT host discovery: the lab hedges this.
  - The scanme.nmap.org step.
  - Run Labs 4.1 and 4.3 once on a current Kali VM.
- `wget` of the pack only works once `cc-week4.zip` is on GitHub Pages.

## Real-world facts used (spot-check list)
- Target 2013: credentials stolen from Fazio Mechanical Services (refrigeration/HVAC contractor, access for billing and project work); POS malware; about 40 million cards; a U.S. Senate committee report pointed to weak segmentation.
- Colonial 2021: DarkSide; the CEO's Senate testimony says the entry was a legacy VPN profile with a complex password and no MFA; ransomware hit IT systems; the whole roughly 5,500-mile pipeline was shut down as a precaution for several days.
- WannaCry, May 2017: SMB on port 445 via EternalBlue; patch released two months earlier; NHS disruption.
- Mirai: Telnet plus factory-default passwords; DDoS on Dyn in October 2016.
- Capital One, disclosed 2019: about 100 million people in the U.S.; a misconfigured web application firewall was used to get credentials and read cloud storage.
- Nmap first released 1997. IIS 8.5 ships with Windows Server 2012 R2.

## Consistency pass (2026-11-23)
Merged into `docs/CEDAR_CREEK.md`; Weeks 4-5 addresses are canon. Changed here: Lesson 4.4's Colonial callout now says Cedar Creek's password-only door is the CC-LEGACY profile from Week 3 (any VPN user can pick it). The network map says VPN-STAFF is the AD group VPN-Users and names both VPN profiles. Pack rebuilt; every printed answer unchanged. Later canon changes to this rule base: 2026-12-02 Block-SMB-Out moved above Copier-Test and logging turned on for every rule; 2026-12-08 rule 15 disabled. Week 7's logs use these rule names.
