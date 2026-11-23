# Cedar Creek Industries: scenario reference

Weeks 1-9 of the course follow one fictional company. The student is a new **junior security analyst** at Cedar Creek. Every lesson example, lab file and mock project uses the facts below. The SOC Ticket Board (Week 9) is set at the same company. The ticket bank in `MCCoE_Student_Platform.html` is live graded data and was written before this canon; where it disagrees, the course weeks follow this file and the conflicts are listed at the end ("Ticket bank conflicts").

If a new fact is needed, add it here first, then use it. The merged facts from Weeks 2-9 (the `docs/build/weekN-notes.md` files) start at "Network", below the Week 1 sections. The consistency pass of 2026-11-23 decided every conflict between weeks; the decisions are listed in "Decisions from the consistency pass".

## The company
- **Cedar Creek Industries**: a family-founded manufacturer of precision metal parts (brackets, housings, hydraulic fittings) for farm and construction equipment makers.
- About **310 employees**: about 70 in the office building, about 240 in the plant across two shifts.
- One campus in **southwest Missouri** with two connected buildings: the **Office building** (2 floors) and the **Plant** (production Lines 1-3, warehouse, loading dock). A covered walkway joins them.
- Email domain: `cedarcreek-ind.com`. Microsoft 365 (Exchange Online, OneDrive, Teams). Internet egress NAT address: `198.51.100.24`.
- Customers send purchase orders and receive engineering drawings. Those drawings and customer specs are the company's most valuable data ("crown jewels"), followed by HR/payroll data.
- Cedar Creek has never had a security analyst. IT has been "keep the lights on". Leadership hired the student after a near-miss business email compromise (ticket bank **TCK-3003**): Amanda Singh in Accounts Payable got an email that appeared to be from CFO Greg Palmer asking for a $48,750 wire, with reply-to `g.palmer@cedarcreek-lnd.com` (lookalike domain). She reported it and sent no money.
- The IT team is three people: Marcus Reyes (manager), Dee Ortiz, and Jordan Pike.
- Windows Server 2012 R2 reached end of support in October 2023.
- The "break room" in the walk-through is the plant break room (area 9). The CC-PLANT Wi-Fi password is posted there.

## People (use these; do not invent conflicting roles)
| Name | Email | Role | Notes |
|---|---|---|---|
| Greg Palmer | g.palmer | CFO | Sponsor of the new security program. Busy, wants plain answers. |
| Marcus Reyes | m.reyes | IT Manager | **Student's manager.** 14 years at Cedar Creek, runs a 3-person IT team. |
| Dee Ortiz | d.ortiz | Systems Administrator | Manages servers, backups, AD. Knows where everything is. |
| Jordan Pike | j.pike | Help Desk Technician | First line support, also covers the badge system. |
| Tom Becker | t.becker | Engineering Manager | Owns ENG-FS01 and ENG-APP02 data. Engineers work late. |
| R. Medina (Rosa Medina) | r.medina | HR Manager | Owns FS-HR01 and personnel files. |
| Laura Kim | l.kim | Marketing Director | |
| Amanda Singh | amanda.singh | Accounts Payable | Received the BEC attempt. |
| Miguel Alvarez | m.alvarez | Purchasing Manager | Welcome1 since hire (Week 6). Added to VPN-Users 2026-12-01; entry account in the December ransomware (Week 8). |
| Gail Lindqvist | g.lindqvist | Customer Service Lead | Fastest phishing reporter (Weeks 6, 8). |
| Walt Henley | w.henley | Plant Manager | Cares about uptime above all. |
| Nina Brooks | n.brooks | Receptionist / Office Coordinator | Runs the lobby and visitor process. |
| Earl Dawson | (none) | Contract security guard | Night shift only (6 PM - 6 AM), plant gate. |

## Systems and assets
| Asset | What it is | Location | Owner | Classification |
|---|---|---|---|---|
| FS-HR01 | HR file server (personnel files, payroll exports) | Server room | Rosa Medina | Confidential |
| ENG-FS01 | Engineering file server (CAD drawings, customer specs) | Server room | Tom Becker | Confidential (proprietary) |
| ENG-APP02 | CAD license + product data server, **Windows Server 2012 R2 (end of support)** | Server room | Tom Becker | Confidential |
| DC01 | Domain controller (Active Directory, DNS) | Server room | Dee Ortiz | Restricted |
| FW-CORE | Perimeter firewall | Server room | Marcus Reyes | Restricted |
| NVR-01 | Camera recorder (16 cameras) | IT office closet | Jordan Pike | Internal |
| BADGE-CTRL | Badge access controller + badge database | IT office closet | Jordan Pike | Internal |
| IT-ADMIN-01 | IT admin workstation | IT office | Marcus Reyes | Restricted |
| FIN-LT-09 | Finance laptop | Finance area | Greg Palmer (dept.) | Confidential |
| PLANT-PC-07 | Line 2 HMI / operator PC | Plant floor, Line 2 | Walt Henley | Internal |
| TIMECLOCK-01 | Badge time-clock kiosk | Plant entrance | Rosa Medina | Internal |
| Backup tapes | Weekly full backups (LTO tapes) | Shelf inside server room | Dee Ortiz | Confidential |
| Plant Wi-Fi (`CC-PLANT`) | WPA2-Personal, password unchanged since 2019 | Plant | Marcus Reyes | Internal |
| Guest Wi-Fi (`CC-GUEST`) | Internet-only guest network | Office | Marcus Reyes | Public |
| Microsoft 365 tenant | Email, OneDrive, Teams | Cloud | Marcus Reyes | Confidential |
| Payroll service | Cloud payroll provider (SaaS) | Cloud | Rosa Medina | Confidential |

Networks (for Week 4): office users `10.20.0.0/16`, servers `10.10.0.0/16` (core: DC01, backups) and `10.30.0.0/16` (application and file servers), plant `10.40.0.0/16`, management `10.99.0.0/24`. **Today the plant and office VLANs can reach each other freely** (finding for Week 4). Full address plan under "Network" below.

## Week 1 mock control audit: the walk-through (ground truth)
The student walks the campus with Marcus Reyes on their first day. Each area below lists what the student **observes**. Students must find the **controls** (and classify them) and the **gaps**. This table is the answer key; the tracker shows it to the instructor.

Control categories: **Technical, Managerial, Operational, Physical**. Control types: **Preventive, Deterrent, Detective, Corrective, Compensating, Directive**. Where two answers are defensible, both are listed and either earns credit.

### 1. Perimeter and parking
Observations: an 8-ft chain-link fence surrounds the plant yard; the vehicle gate opens with a badge reader. LED pole lights cover the lot. Signs at each entrance: "Private Property. Video Surveillance in Use." Two cameras on the office building corners. Near the loading dock, a pedestrian side gate in the fence is propped open with a brick. One pole light by the dock is burned out.
- Controls: fence (Physical, Preventive); badge-controlled vehicle gate (Physical, Preventive); lighting (Physical, Deterrent); warning signs (Physical, Deterrent; Directive also accepted); exterior cameras (Physical, Detective; Deterrent also accepted).
- Gaps: side gate propped open (defeats the fence); burned-out light by the dock.

### 2. Main lobby (office building)
Observations: Nina Brooks staffs the desk 7:30-4:30. Visitors write their name on a paper sign-in sheet and get a plastic "VISITOR" badge from a bowl. Nobody checks ID. Doors from the lobby into the office need a badge. A whiteboard behind the desk shows the guest Wi-Fi password. Nina takes lunch 12:00-12:45 and the desk is empty.
- Controls: receptionist (Operational, Preventive/Detective); visitor sign-in sheet (Operational, Detective); visitor badges (Operational, Preventive... weak); badge-locked interior doors (Physical, Preventive).
- Gaps: no ID check; reusable unnumbered visitor badges, not collected; lobby unattended at lunch; sign-in sheet shows every prior visitor's name and company (privacy).

### 3. Office floor (Finance, HR, Marketing)
Observations: workstations lock after 15 minutes idle. HR monitors have privacy filters. Locked shred bins by each printer. A poster summarizes the Acceptable Use Policy. A sticky note on FIN-LT-09's docking monitor reads "VPN: Spring2024!". The HR filing cabinet is unlocked with the key in it. The shared printer tray holds an uncollected payroll summary.
- Controls: screen lock (Technical, Preventive); privacy filters (Physical, Preventive); shred bins (Physical, Preventive; Operational accepted); Acceptable Use Policy (Managerial, Directive).
- Gaps: password on sticky note; unlocked HR cabinet; uncollected sensitive printouts (no clean desk / secure print).

### 4. Server room (office building, ground floor)
Observations: the door has a badge reader plus PIN keypad. A camera covers the hallway outside the door. Clean-agent fire suppression (FM-200), a UPS rack, and a diesel generator outside. Temperature and water sensors email IT. **The door is propped open with a rubber wedge** "because the AC can't keep up". Jordan says 23 people have server room access; Marcus thinks only 4 need it. A shelf holds this month's backup tapes. There is no visitor log for vendors.
- Controls: badge + PIN (Physical, Preventive: two factors); hallway camera (Physical, Detective); fire suppression (Physical, Corrective); UPS + generator (Physical, Corrective; Compensating accepted); environmental sensors (Technical, Detective; Physical accepted).
- Gaps: door wedged open; excessive access list (least privilege); backups stored in the same room as the servers (no offsite copy); no vendor/visitor log.

### 5. IT office
Observations: an EDR console shows all office PCs reporting. A printed patch schedule is pinned up ("2nd Tuesday + 7 days"). A whiteboard flow chart for password resets requires a callback to the user's desk phone. A spiral notebook beside IT-ADMIN-01 lists the shared admin account `ccadmin` and its password. Dee mentions a former engineer's account was "probably never turned off". (Week 3 shows there are two: Neil Brandt, who left in April, and Brian Kessler, who left in October.)
- Controls: EDR (Technical, Detective; Preventive accepted); patch management schedule (Operational, Preventive; Managerial accepted for the documented procedure); help desk callback verification (Operational, Preventive).
- Gaps: shared admin account + written password (no accountability, non-repudiation fails); possible orphaned account of a former employee (deprovisioning gap; leads to Week 3).

### 6. Engineering area
Observations: drawings in the plotter room are stamped "CONFIDENTIAL - Cedar Creek Proprietary". Engineers sign an NDA at hire. ENG-FS01 shares require a domain login. Engineers move files to the shop floor on personal USB drives. ENG-APP02 still runs Windows Server 2012 R2 because the CAD license server "won't run on anything newer".
- Controls: data labels (Managerial, Directive; Operational accepted); NDA (Managerial, Directive/Deterrent); authenticated file shares (Technical, Preventive).
- Gaps: personal USB drives (data loss + malware vector); unsupported OS on ENG-APP02 (vulnerable software; a compensating control such as isolating it is the right recommendation).

### 7. Plant floor (Line 2)
Observations: cameras over each line. Safety and "Authorized Personnel Only" signs at the control room. PLANT-PC-07 (Line 2 HMI) is logged in as `operator` with the password on a label on the monitor; the screen never locks so the line is not interrupted. The `CC-PLANT` Wi-Fi password is printed on the break room wall. Badge time clock at the entrance.
- Controls: line cameras (Physical, Detective); "Authorized Personnel Only" signs (Physical/Managerial, Directive; Deterrent accepted); time clock badge records (Technical/Operational, Detective).
- Gaps: shared operator login with posted password; no screen lock (a compensating control such as restricting the HMI to a kiosk mode and a separate network is the expected recommendation); plant Wi-Fi password posted and unchanged since 2019; plant network can reach the office network (note for Week 4).

### 8. Loading dock and shipping
Observations: the dock camera records the bays. Truck drivers check in at a shipping window and sign a log. A side door to the plant is propped open for smokers. During the walk, a person in a delivery uniform follows an employee through the dock door into the plant without badging.
- Controls: dock camera (Physical, Detective); driver check-in log (Operational, Detective).
- Gaps: propped side door; tailgating (no anti-tailgating control such as an access control vestibule or staff challenge training).

### 9. Break room
Observations: posters for annual security awareness training (completion rate posted: 61%), and "Report phishing with the Report button in Outlook". A fire evacuation map.
- Controls: security awareness training (Operational, Preventive); phishing reporting process (Operational, Detective); evacuation plan (Operational/Managerial, Directive).
- Gap: 39% of staff have not completed training.

### Overall: what's missing everywhere (good gap-analysis answers)
No written information security policy beyond the AUP; no data classification policy (labels exist only in Engineering); no asset inventory (the student is building the first one); no incident response plan; only one guard, nights only.

## Facts added while building Week 1 (labs and lab pack)
- **Dates:** the student's first day is Mon 2026-11-09. The badge log covers 2026-11-02 to 11-08. The BEC attempt was 2026-08-19 (a Wednesday; the ticket bank's "Tue, 19 Aug 2026" has the wrong weekday). Greg's thank-you memo is dated 2026-08-20.
- **Former engineer:** Brian Kessler, Engineering, badge B2047, last day 2026-10-16. He resigned after being passed over for lead engineer; his badge was never disabled, and the badge log shows it used 4 times after he left. Other October leavers: Lori Vance (Line 1, 10-09) and Hector Ruiz (Shipping, 10-23).
- **Badge system:**
  - Doors: LOBBY-IN, ENG-SUITE (2nd floor), HR-OFFICE, SERVER-ROOM, DOCK-SIDE (side door from the dock into the plant), PLANT-GATE (vehicle gate).
  - Results: GRANTED, DENIED, and ALARM ("DOOR HELD OPEN", badge NONE, after 30 seconds open).
  - Badge IDs look like B####.
  - The 23 people with server room access include spare cards "IT SPARE 2" and "IT SPARE 3" (B9003) with no sign-out sheet, Greg Palmer (since a 2022 tour), the maintenance techs, and Tom Becker plus two engineers.
- **Badge log findings:**
  - B9003 (IT SPARE 3) entered the server room after hours 5 times.
  - Ryan Doyle (Customer Service, B1076) was denied at HR-OFFICE 9 times.
  - DOCK-SIDE has 12 door-held alarms; one is a tailgate on 2026-11-04 at 10:42, right after Tina Garza's swipe.
  - The server room's afternoon alarms match the door wedge.
- **Policies:**
  - The AUP was last revised 2018-03-14 (owner Marcus, approved by Greg) and is not re-signed yearly.
  - The visitor procedure was last revised 2016-06-01 and has no ID check.
  - Password memo 2019-02-11: 8 characters minimum, 90-day changes, the shared "operator" login, and the help desk callback.
  - The badge request procedure, last revised 2021-09-20, has no access-removal step.
- **Memos:** Dee's AC memo is dated 2026-10-28 (the room hit 86 F, the door is wedged in the afternoons, backup tapes are on the shelf). Walt's 2026-10-13 memo says not to change CC-PLANT.
- **Wi-Fi:** only CC-PLANT and CC-GUEST exist. There is no separate corporate office Wi-Fi.
- **Threat intel (Lab 1.3):**
  - IRONLATCH: ransomware.
  - PAPERWIRE: BEC; it owns `cedarcreek-lnd.com`.
  - TIDEGLASS: state espionage after CAD drawings.
  - Cedar Creek belongs to the regional "Heartland Manufacturing ISAC".
- **Badge roster names that matter to findings:** Ryan Doyle, Tina Garza, Shane Pruitt (maintenance). Many other names appear only as background in `badge_log.csv`. Names reused from the ticket bank: Priya Nair (Engineering), Dana Reyes (Accounting), Kevin Tran (Marketing).
- The pack is rebuilt with `node docs/tools/make_week1_pack.js`, which also prints every auto-check answer.

## Week 1 lab pack: `assets/cedarcreek/week1/`
Downloaded in Kali with `wget` (URL on the lab page). It contains the files the student explores in the Linux labs and uses as evidence in the audit: badge log CSV, a few policy and memo text files, the IT asset spreadsheet stub, and a `README.txt`. The lab pack must agree with the ground truth above (for example, the badge log shows tailgating at the dock and after-hours server room entries).

---

# Merged canon, Weeks 2-9

Everything below was merged from `docs/build/week2-notes.md` to `week9-notes.md` on 2026-11-23 and checked against every week. Where two weeks disagreed, the decision is in "Decisions from the consistency pass" and the week content was changed to match.

## Network
All routing between zones goes through **FW-CORE** (there is no core router and no separate plant firewall). Internet egress for every zone is NAT `198.51.100.24`. AD domain `cedarcreek.local`.

| Zone | Subnet | What lives there |
|---|---|---|
| OUTSIDE | internet | NAT 198.51.100.24; SSL VPN portal on 443 |
| OFFICE | 10.20.0.0/16 | Office PCs (DHCP). 10.20.1.x IT, 10.20.6.x HR/Finance/AP (FS-HR01 sits here too: a Week 4 finding), 10.20.8.x Marketing, 10.20.10.x Customer Service and Purchasing, 10.20.12.x reception and conference rooms, 10.20.14.x Shipping office, 10.20.16.x plant office PCs, 10.20.30.x Engineering |
| SERVERS | 10.10.0.0/16 | Core servers: DC01, backups |
| SERVERS | 10.30.0.0/16 | Application and file servers |
| PLANT | 10.40.0.0/16 | One flat VLAN: Lines 1-3, HMIs, PLCs, CNCs, printers, HVAC controller. CC-PLANT Wi-Fi clients get 10.40.100.x |
| MGMT | 10.99.0.0/24 | Network devices, IT-ADMIN-01, NVR-01, BADGE-CTRL, VULN-SCAN01 |
| GUEST | 172.16.50.0/24 | CC-GUEST Wi-Fi, internet only |
| VPN | 10.250.0.0/24 | 10.250.0.0/25 staff (FW-CORE address group VPN-STAFF, which is the AD group VPN-Users); 10.250.0.128/28 vendor (VENDOR-HVAC) |

**Hosts**

| Host | Address | Notes |
|---|---|---|
| FW-CORE | 10.99.0.1 (plant side 10.40.0.1) | Firmware 7.2.5 (last patched 2026-09-02). IPS module in alert-only mode since March 2024. Vendor advisory 2026-12-10: Critical VPN portal flaw, fixed in 7.2.8, not yet applied (a FW-CORE reboot drops the plant for about 10 minutes; Walt must approve a window). SSL VPN portal accepts TLS 1.0/1.1. |
| CORE-SW1 | 10.99.0.2 | Office/server core switch |
| NETMON-01 | 10.99.0.5 | SNMPv2c poller |
| IT-ADMIN-01 | 10.99.0.10 | IT admin workstation (Windows 11 Pro), Marcus's; IT uses it for admin work |
| PLANT-SW1 | 10.99.0.12 | Plant switch |
| NVR-01 | 10.99.0.15 | Firmware 4.1 (2024-03-02); Jordan downloaded 5.7.2 in November (Week 2: the vendor copy verifies, the forum-mirror copy is tampered) but has not installed it; blank admin password, Heartbleed-era OpenSSL, HTTP login; factory self-signed cert CN 192.168.1.108 |
| BADGE-CTRL | 10.99.0.16 | Firmware 2.8; HTTP login, Telnet on |
| VULN-SCAN01 | 10.99.0.50 | Greenbone (OpenVAS) scanner |
| DC01 | 10.10.1.10 | Windows Server 2019; AD + DNS; NETLOGON scripts |
| ENG-FS01 | 10.30.4.10 | Windows Server 2019 (December patches skipped for a customer deadline). Disk folder `D:\Projects` (job folders J24-087 ... J26-063, about 41,900 files) is published as `\\ENG-FS01\Drawings`. Other shares: CustomerSpecs, ShopFloor, Transfer, Scans. EDR agent in a detect-only server policy. Nightly shadow copy 23:10. |
| ENG-APP02 | 10.30.4.22 | Windows Server 2012 R2 (end of support), IIS 8.5; RDP forwarded from the CAD vendor's 203.0.113.60 (rule 14) |
| FS-HR01 | 10.20.6.15 | Windows Server 2016, on the office HR/Finance subnet; missing the PrintNightmare fix |
| PRINT01 | (servers) | Print server (Office-1F, Office-2F queues) |
| IT-LT-01 / -02 / -03 / -04 | 10.20.1.11 / .12 / .10 / .77 | Laptops: Dee, Jordan, Marcus, spare (scan box in Week 4) |
| FIN-LT-09 | 10.20.6.41 | Greg's finance laptop, Office 2016 |
| HR-05, HR-PC-01 | 10.20.6.20, .21 | Tasha Greene, Rosa Medina |
| HR-03, AP-02, FIN-04 | 10.20.6.22, .24, .27 | Background PCs (Week 5) |
| FINANCE-07, FIN-PC-03 | 10.20.6.43, .44 | Dana Reyes, Amanda Singh |
| MKT-01, MKT-03 | 10.20.8.11, .13 | Background (Week 5) |
| MKT-LT-02, MKT-PC-04 | 10.20.8.37, .38 | Laura Kim, Kevin Tran (EDR policy Detect since 2026-11-30) |
| CS-02, CS-04, PUR-01 | 10.20.10.5, .7, .9 | Background (Week 5) |
| CS-PC-06, CS-PC-02, PUR-PC-01 | 10.20.10.50, .51, .60 | Jared Dorsey, Gail Lindqvist, Miguel Alvarez |
| RECEPTION-01, CONF-RM-1 | 10.20.12.3, .8 | |
| SHIP-01, SHIP-02 | 10.20.14.20, .21 | |
| PLANT-OFFICE-01, -02 | 10.20.16.4, .6 | |
| ENG-09, ENG-11, ENG-12, ENG-14, ENG-17, ENG-21 | 10.20.30.9, .11, .12, .14, .17, .21 | ENG-09 Owen Gallagher, ENG-11 Priya Nair, ENG-14 Tom Becker (matches the ticket bank) |
| LINE2-PLC | 10.40.2.10 | Modbus/TCP 502, web on 80 |
| PLANT-PC-07 | 10.40.2.57 | Line 2 HMI. **Vendor-certified Windows 7 image** (out of support since 2020-01-14), missing MS17-010, RDP open (BlueKeep). The line vendor's technician uses RDP on site; the vendor will not support the PC if IT patches it. Shared `operator` login. |
| LINE2-CNC03 / 04 / 05 | 10.40.2.63 / .64 / .65 | CNC03 FTP + Telnet (`cncadmin`/`Cnc#2019`, `cncload`/`Line2load!`); CNC05 down for rebuild |
| LINE2-LABEL | 10.40.2.70 | Label printer |
| TIMECLOCK-01 | 10.40.0.20 | Telnet on, SNMP `public`; web cert expired 2025-07-01 |
| HVAC-CTRL | 10.40.9.15 | Riverbend Mechanical; HTTP Basic login `riverbend`/`Chill3r!` |

The Week 7 DHCP list (10.20.x hosts above) and the Week 5 DHCP list are both partial; every address above is unique.

## FW-CORE rules
The rule base export of 2026-11-30 (Week 4, 24 rules, first match wins) is canon:
- 1 Admin-Workstation; 2 Internal-DNS; 3 Office-to-AD; 4 Office-to-EngFiles; **5 Office-Web** (office to internet on 80/443); **6/7** plant and office reach each other on any port ("temporary" label printer fix, 2019); **8** plant to all servers; 9 ENG-FS01 FTP to Line 2; 10 Telnet to CNC03 (shadowed); 11 VPN-Staff (pool to office and servers, any port); **12** VPN-Vendor-HVAC (vendor pool to servers and plant, any port); **13 Inbound-SSL-VPN**; **14** RDP from 203.0.113.60 to ENG-APP02, no log; **15** SSH to FW-CORE from any internet address; **16** stale ERP contractor SSH (203.0.113.150 to 10.30.4.40); 17 servers to internet; 18-19 guest; **20** NETMON-01 SNMPv2c to 10.0.0.0/8; **21 Copier-Test** any-any ALLOW (J. Pike, 2025-03); 22 disabled; **23 Block-SMB-Out**; **24 Default-Deny**. 15 ALLOW rules did not log.
- **2026-12-02** (after the student's Week 4 review): Jordan moved Block-SMB-Out above Copier-Test and turned on logging for every rule. Copier-Test stays until the copier vendor confirms what scan-to-email needs. Office traffic on 80/443 matches Office-Web; anything else outbound (for example TCP 8443) falls through to Copier-Test.
- **2026-12-08** (after the Week 5 external scan): Marcus disabled rule 15; FW-CORE is now managed only from inside.
- The IRONLATCH IP addresses from the 2026-12-07 ISAC update were **never added** to FW-CORE (Jordan's change was waiting for the holiday window). The three IRONLATCH domains went into the web filter on 12-07.
- In Week 7 logs the rules appear by name: Office-Web, Copier-Test, Inbound-SSL-VPN, Block-SMB-Out, Default-Deny.

## Accounts, groups and authentication
- Usernames are first initial, a dot, last name (same as email). Exception: `amanda.singh`. The Week 3 AD export (Mon 2026-11-23, 73 accounts) is the complete directory; later weeks only use names from it (plus accounts created after it, listed here).
- **Hire dates** (Week 2 HR export): Priya Nair 2026-08-24, Rosa Medina 2011-04-18, Tom Becker 2009-08-03, Walt Henley 2004-02-09, Amanda Singh 2019-06-10, Jordan Pike 2022-01-17. Marcus Reyes 2012-05-14 (14 years). Other hire dates are in the Week 3 roster.
- **People added in Weeks 2-3:** Victor Chu (Lead Engineer; the job Kessler was passed over for), Neil Brandt (Manufacturing Engineer, left 2026-04-17, still enabled), Gary Voss (Senior Accountant, left 2025-06-30, still enabled, password never expires, still in Finance-Share-RW), Lori Vance (Line 1 Lead), Hector Ruiz (disabled 2026-10-26), Jesse Moran (Line 1 Supervisor, no sign-in since 2026-06-02), June Vick (Customer Service, on leave), Ethan Park (2025 summer intern, `intern.eng` still enabled). Dana Reyes moved HR to Accounting 2025-03-03 and kept HR-Share-RW. Finance: Ross Dempsey, Gina Rowe, Carla Benson, Simon Dorsey, Vic Tillman. HR: Tasha Greene, Paul Whitaker, Noel Lyle. Engineering: Sam Ortega, Lena Fischer, Owen Gallagher, Rachel Imes, Megan Holt, Fiona Hester, Grant Rankin, Uriel Beckett. Marketing: Kevin Tran, Jasmine Ford, Seth Hollis. Customer Service: Ian McBride, Nora Quinn, Tracy Lund, Jared Dorsey, Gwen Farris, Nadia Nolan. Purchasing: Derek Hale, Yolanda Upton. Others: Phil Archer (Facilities), Ben Sato (Quality Manager), Luke Barron (Line 3 Supervisor), Rick Somers (Shipping Lead), Tina Garza, Shane Pruitt. HR roster: 318 rows, 304 active; employee IDs 4-digit (Priya 4719, Dana 4471).
- **Non-person accounts:** Administrator (last used 2024-02-14), Guest and krbtgt (disabled), `ccadmin` (shared, Domain Admins, password set 2017-01-09 and also written in plain text in `\\DC01\NETLOGON\map_drives.bat`, 2017), `operator` (PLANT-PC-07), `svc-backup` (Domain Admins + VPN-Users, 2018), `svc-scan` (copier scan-to-folder), `vendor.cad` (CAD vendor, VPN-Users without MFA, ENG-APP02-Admins, last used 2026-10-05 from 192.0.2.200), `intern.eng`. **`svc-plotter`** was created 2026-12-03 by Jordan for the new Engineering large-format plotter (scan to `\\ENG-FS01\Scans`), with a weak password; it is not in the Week 3 export because it did not exist yet.
- **Groups:** Domain Admins (7): Administrator, ccadmin, d.ortiz, j.pike, m.reyes, svc-backup, t.becker. VPN-Users (16 on 11-23): b.kessler, d.ortiz, g.palmer, j.pike, k.tran, l.kim, m.reyes, n.brandt, p.nair, r.dempsey, s.ortega, svc-backup, t.becker, v.chu, vendor.cad, w.henley. VPN-MFA-Users (10): d.ortiz, j.pike, k.tran, l.kim, m.reyes, p.nair, r.dempsey, s.ortega, v.chu, w.henley. ENG-Share-RW (Engineering + b.kessler, n.brandt, intern.eng). ENG-APP02-Admins (d.ortiz, t.becker, vendor.cad). HR-Share-RW (+ d.reyes). Finance-Share-RW (+ g.voss). Plant-Leads.
- **2026-12-01:** Jordan added **m.alvarez, r.medina and amanda.singh** to VPN-Users for year-end work from home (a help desk ticket; none enrolled in MFA, so they can only use CC-LEGACY). VPN-Users is now 19.
- **Lockout:** 10 bad passwords locks an AD account for 30 minutes. The VPN checks passwords against AD, so the same limit applies to VPN sign-ins. Sprays stay under it.
- **Password audit (Week 6):** DC01 hash export of 25 accounts (every privileged, shared and service account plus a sample of staff) taken Mon 2026-12-14; 16 of 25 cracked. Default new-hire password Welcome1, never changed by m.alvarez, r.doyle, n.brooks. Resets of cracked accounts were **scheduled for Mon 2027-01-04**, after the year-end change freeze (ccadmin and operator are wired into scripts and Line 2).
- **MFA:** Microsoft 365 requires push MFA (authenticator app, simple approve/deny, no number matching) for office mailboxes. The VPN does **not** require MFA in practice: see below.

## VPN (FW-CORE SSL VPN, 198.51.100.24:443)
- **CC-REMOTE** (2021-04-12): company certificate + domain password + push approval. For VPN-MFA-Users.
- **CC-LEGACY** (2017-03-01): **domain password only, no MFA.** Any VPN-Users member can pick it, including people enrolled in MFA. "Temporary" since 2021, kept for Tom and the CAD vendor.
- So every week says the same thing: **the VPN can be entered with a password alone, through CC-LEGACY.** Logs that show `mfa=none` are CC-LEGACY sign-ins; CC-REMOTE sign-ins show `mfa=push`.
- Staff home addresses (Week 3 sessions, reused in later logs): b.kessler 203.0.113.58, d.ortiz 203.0.113.38, j.pike 203.0.113.11, p.nair 203.0.113.47, r.dempsey 203.0.113.240, s.ortega 203.0.113.233, g.palmer 192.0.2.41, k.tran 192.0.2.197, l.kim 192.0.2.78, m.reyes 192.0.2.244, t.becker 192.0.2.118, v.chu 192.0.2.67, w.henley 192.0.2.216, vendor.cad 192.0.2.200. December additions: m.alvarez 198.51.100.137, r.medina 198.51.100.129, amanda.singh 198.51.100.150.

## Shares (Week 3 export, plus later)
`\\ENG-FS01\Drawings` (folder D:\Projects; ENG-Share-RW + Domain Admins), `\\ENG-FS01\CustomerSpecs` (Everyone: Read, a finding), `\\ENG-FS01\ShopFloor` (Plant-Leads read; the approved alternative to USB drives), `\\ENG-FS01\Transfer` (Week 2), `\\ENG-FS01\Scans` (scan-to-folder for the copier and plotter; mapped as S: by map_drives.bat with the ccadmin password; not in the Week 3 review), `\\FS-HR01\Personnel`, `\\FS-HR01\Payroll` (Finance read, a finding), `\\FS-HR01\Benefits`, `\\FS-HR01\Company` (Domain Users read), `\\DC01\IT$` (Domain Users read; holds FW-CORE config backups and service account passwords), SharePoint "Marketing - Published" (anyone with the link), the Engineering SharePoint/Teams site (working copies of drawings shared with customers).
Draft classification policy: Public, Internal, Confidential (customer IP, personnel, payroll, health), Restricted (passwords, security configs, admin tools).

## Vendors, customers and outside parties
- **Halvorsen Pump Company** (Wisconsin) customer: `halvorsen-pump.com`, portal `supplier.halvorsen-pump.com`, old `ftp.halvorsen-pump.com`; Erik Lund, Supplier Quality Engineer; rules SDX-2 effective 2026-12-01; OpenPGP key `79EB 39A3 C109 216D 82B9 499E C5A6 BCBA 55F1 E01B`. Look-alike `halvorsen-pumps.com` (fake key) and `supplier-halvorsen-pump.com` (fake site).
- Other customers: Harlan Equipment (HE-4410), Prairie Ag (PA-220), Tri-County Hydraulics (TCH-90), bracket 7731.
- **Ozark Steel Supply** (`ozarksteelsupply.com`), steel vendor (PAPERWIRE target, Week 6).
- **Tallgrass Payroll** (`tallgrasspayroll.com`, Kansas), the cloud payroll service: DMARC p=reject, mail from 198.51.100.176/28 (out2 = 198.51.100.180), portal `app.tallgrasspayroll.com` at 192.0.2.80 on TCP 8443. W-2s ready 2027-01-25.
- **Riverbend Mechanical**, HVAC contractor: VPN since 2023-06-12, one shared login, rule 12.
- **CAD license vendor:** `vendor.cad` account; RDP source 203.0.113.60.
- **Ozark Records Storage**, Springfield MO, box 1142: Dee's draft offsite tape plan (weekly Friday rotation from 2027-01-08; AES-256 tapes, key in Marcus's safe). A plan only.
- **Meridian Trust** (fictional public CA). Internal PKI: CedarCreek-Root-CA (offline, 2023-2043), CedarCreek-Issuing-CA (2023-2033); `intranet.cedarcreek.local` (SANs intranet, wiki).
- **ERP migration contractor** (2020): 203.0.113.150.
- **Heartland Manufacturing ISAC.** Cyber insurance in place; some customer contracts require notice when drawings are exposed.
- **EDR:** SentinelOne, policies Protect and Detect. Alerts and the SIEM mail to `siem-alerts@cedarcreek-ind.com`; nobody watches it nights or weekends.

## Threat actors and their infrastructure (all documentation addresses)
- **IRONLATCH** (ransomware, double extortion, `.latch`, note README_LATCH.txt). Known infrastructure: **203.0.113.45** (VPN spray 12-07; C2 `telemetry-sync.example` on 8443 in Week 7), **203.0.113.77** (`browser-update-cdn.example.net` download/C2 12-07; sender of the `cedarcreek-it.com` phish 12-10; VPN spray and entry 12-22/23), **203.0.113.130** (`secure-docshare.example.org`), `pay-ironlatch.example.com`; exfil server 192.0.2.145 (Week 8).
- **PAPERWIRE** (BEC): `cedarcreek-lnd.com` (registered 2026-08-12), sending VPS `vps42.fastcloudhost.net` **192.0.2.99**.
- **TIDEGLASS** (state espionage after CAD drawings). Not seen at Cedar Creek yet.
- Unattributed: VPN spray 203.0.113.200 (12-12), brute force 192.0.2.77 (12-13), credential stuffing 192.0.2.150-157 (12-12), `vpnadmin` brute force 203.0.113.201 (12-07), internet port sweep 203.0.113.91 (12-19).
- Brian Kessler's own sessions after leaving came from his home address 203.0.113.58.

## Email and DNS
`cedarcreek-ind.com` registered 2001-05-22; SPF `include:spf.protection.outlook.com -all`; DMARC `p=none` (a finding). Phishing simulation lure domain `cedarcreek-benefits.com` (company-run). A real look-alike, `cedarcreek-benefits.net`, sent the "Holiday bonus schedule" phish on 12-23 (Week 8, AL-09).

## Incidents
| Date | What | Week |
|---|---|---|
| 2026-08-19 | PAPERWIRE BEC attempt on Amanda (TCK-3003), $48,750, no loss | 1, 9 |
| Aug-Oct 2026 | The ticket bank queue (worked in a hurry by IT, replayed in Week 9) | 9 |
| 10-24, 11-01 | Brian Kessler uses CC-LEGACY after his last day (10-16) | 3 |
| 11-13 | Halvorsen key/certificate phish (look-alike domain) | 2 |
| 12-07 | IRONLATCH: VPN spray (none succeeded, includes b.kessler), fake update on ENG-12 (quarantined), phishing page blocked on FIN-LT-09 | 5 |
| 12-10 | Credential phish from cedarcreek-it.com: Grant Rankin (Engineering) approves the 4th MFA push at 08:19:55; inbox forwarding rule; 7 customer drawings downloaded from the Engineering SharePoint; Yolanda Upton's password stolen but not used | 6 |
| 12-11 | PAPERWIRE BEC on Ozark Steel bank details; Amanda verifies by phone | 6 |
| 12-12 | VPN spray from 203.0.113.200 gets into **b.kessler** (Fall2025!) at 02:37:09, 47-minute session, no other activity. Account disabled Mon 12-14. | 6 |
| 12-18/19 | Weekend intrusion: macro on MKT-LT-02, beacon to 203.0.113.45, spray from MKT-LT-02, svc-plotter to ENG-FS01, 1.2 GB upload. Found Monday 12-21 | 7 |
| 12-22/23 | **CC-IR-2026-01**, ransomware on ENG-FS01 (first formally declared incident) | 8 |

## Timeline, January-December 2026 (as the course tells it)
- 2026-01 to 07: Neil Brandt leaves 04-17 (account left enabled). Jesse Moran's last sign-in 06-02. Gary Voss left 2025-06-30.
- 2026-08-12: PAPERWIRE registers `cedarcreek-lnd.com`. 08-18 to 08-19: the ticket bank's busiest days (TCK-1001 to 3005), including the BEC attempt 08-19 (a Wednesday). 08-20 Greg's thank-you memo. 08-24 Priya Nair hired.
- 2026-09-02: FW-CORE last patched. 09-14 Dee starts the hash-chained release log. 09-30 June Vick goes on leave.
- 2026-10: Lori Vance leaves 10-09; Walt's CC-PLANT memo 10-13; **Brian Kessler's last day 10-16**; Hector Ruiz leaves 10-23 (disabled 10-26); Kessler's after-hours VPN sessions 10-24 and 11-01; Dee's AC memo 10-28.
- 2026-11-02 to 11-08: Week 1 badge log. **Mon 11-09: the student's first day (Week 1).**
- 11-10 Dee's offsite tape plan draft. 11-11 ECN-0457 approved. 11-12 CCD-3318 Rev C released 10:30; Tom calls Halvorsen 2:40 PM. 11-13 look-alike phish to Priya. Mon 11-16 Marcus's Week 2 memo.
- Mon 11-23: access review export (Week 3). Greg wants the summary Thursday. 11-24 network map updated. 11-25 Greg signs the scan authorization.
- Mon 11-30: Greg approves the access review fixes for the January change window. Rosa asks IT to keep Kessler's account until HR's legal hold on his files is set up (a mistake: preserving data does not need a working sign-in). FW-CORE rule export 08:12; Dee's Nmap scan 23:20-23:46 from IT-LT-04 (Week 4). Dee moves Marketing's EDR to Detect.
- Tue 12-01: Jordan's 10-minute plant capture (Week 4). m.alvarez, r.medina, amanda.singh added to VPN-Users.
- 12-02: Block-SMB-Out moved above Copier-Test; logging on for every rule. 12-03: svc-plotter created.
- Fri 12-04: Dee's first Greenbone scan, including the external scan of 198.51.100.24 (Week 5).
- Sun 12-06 evening to Mon 12-07: VPN log for Lab 5.2. Mon 12-07 02:03-02:30 IRONLATCH spray from 203.0.113.45; 03:30 vpnadmin brute force; ISAC IRONLATCH update; 10:41 ENG-12 fake update; 13:18 FIN-LT-09 phishing page blocked. Domains added to the web filter; IP blocks queued, never applied.
- Tue 12-08: Patch Tuesday (normal cycle due 12-15); rule 15 disabled. Thu 12-10: FW-CORE vendor advisory; 08:02 cedarcreek-it.com phish (Week 6), Jordan blocks the domain 10:15. Fri 12-11: PAPERWIRE BEC to Amanda; weekly tape.
- Sat 12-12 02:37 b.kessler VPN session; 20:00 credential stuffing. Sun 12-13 14:03 m.reyes locked out by brute force.
- Mon 12-14: report-03 (W-2 notice) from Walt; password audit authorized; hash export; b.kessler disabled after the student's Lab 6.3 review; the Marketing EDR revert reminder is ignored.
- 12-15 to 12-18: password audit. Wed 12-16 09:00 phishing simulation (closes Fri 12-18 17:00). Fri 12-18: audit report; resets scheduled for 2027-01-04.
- **Fri 12-18 16:53** Laura Kim opens Q4_Invoice_Review.xlsm on MKT-LT-02; beacon from 16:55. Weekly tape runs 22:00-23:47 (the last good backup of ENG-FS01).
- **Sat 12-19** 02:10 spray from MKT-LT-02; 02:12:51 svc-plotter succeeds; 02:31 svc-plotter on ENG-FS01; 02:35 cc_q4.7z; 02:47 1.29 GB upload to 203.0.113.45; 03:12 port sweep from 203.0.113.91.
- **Mon 12-21** (Week 7): the student reviews the weekend logs. Same day Dee reimages MKT-LT-02, resets svc-plotter, moves Marketing back to Protect and blocks 203.0.113.45. It is handled as a cleanup, not a declared incident, and nobody asks how else the attacker could get back in. Marcus starts a 6 AM early rotation.
- **Tue 12-22 to Wed 12-23** (Week 8): CC-IR-2026-01. about 01:15-01:41 spray from 203.0.113.77 (143 failures, 38 names); 01:41:58 m.alvarez on CC-LEGACY, assigned 10.250.0.37; 01:49 NETLOGON map_drives.bat read; 01:53 ccadmin; 01:58 RDP to ENG-FS01; 02:03-02:04 svc_update created, added to Domain Admins; 02:09 rclone; 02:14-03:29 about 6.6 GB to 192.0.2.145; 03:31 shadow copies and backup catalog deleted; 03:35 cc_upd.exe; from 03:36 4,174 files renamed `.latch`; ransom $650,000, victim ID CC-7Q2M-91XA. 06:05 the student triages; 06:14 Dee isolates ENG-FS01; 06:19 CC-LEGACY disabled and the VPN limited to IT; 06:20-06:24 m.alvarez and svc_update disabled, ccadmin reset; 06:26-06:27 blocks on 203.0.113.77 and 192.0.2.145; 06:31 memory (E2); 06:44-06:52 triage files (E1); 07:10 E1 to Jordan without a signature; 07:35 Marcus's handoff; 16:40 E1 found on the help desk counter. RPO 99 h from the Fri 12-18 tape; restore 16 h; Tom's RTO 24 h.
- After the course story: 2027-01-04 password resets; 2027-01-08 first offsite tape rotation.

## Decisions from the consistency pass (2026-11-23)
1. **December order.** Week 8's ransomware moved from Dec 15-16 to **Tue Dec 22 - Wed Dec 23** (same weekdays and clock times, so every RPO and timeline answer still works). Week 7's weekend (Dec 18-20) now comes first, the Week 6 VPN spray (Dec 12) and the Week 5 sweep (Dec 7) before it. The last good tape is now Fri Dec 18.
2. **One campaign.** 203.0.113.45 and 203.0.113.77 are IRONLATCH addresses from the Week 5 ISAC list; Week 6's phish, Week 7's C2 and Week 8's spray reuse them on purpose, because the IP blocks were never applied. Kessler's home address moved from 203.0.113.77 to 203.0.113.58 (Week 3) so it does not collide.
3. **PLANT-PC-07** runs the vendor-certified **Windows 7** image (Week 5, earlier). Week 7's patch report changed from Windows 10.
4. **VPN/MFA.** The VPN can always be entered with a password alone through CC-LEGACY. Weeks 4-8 say so; logs mark CC-LEGACY sign-ins `mfa=none`. Microsoft 365 push MFA (Week 6) does not contradict Week 3.
5. **VPN membership.** m.alvarez, r.medina and amanda.singh joined VPN-Users on 12-01, which is why they appear in Week 5, 6 and 8 VPN logs.
6. **Addresses.** Weeks 4-5 are canon. Week 7's DHCP list and Week 8's hosts, VPN pool (was 10.20.250.0/24) and workstation names were rewritten to this plan. Ticket-bank-only names were replaced with Week 3 directory names in Weeks 7-8.
7. **Lockout** is 10 bad passwords / 30 minutes everywhere (Week 7 said 5 in 15).
8. **FW-CORE** firmware is 7.2.5 (Week 5); Week 7's advisory now says fixed in 7.2.8. Week 7 logs use the Week 4 rule names.
9. **Payroll** provider is Tallgrass Payroll everywhere.
10. **Service account names** use hyphens (`svc-backup`); Week 6's `svc_cad` is `vendor.cad`. `svc_update` (Week 8) is the attacker's account and keeps its underscore.
11. **Hire dates** follow Week 2's HR export.
12. **PAPERWIRE's VPS** moved from 192.0.2.45 to 192.0.2.99, because the ticket bank uses 192.0.2.45 as a Cedar Creek NAT address.
13. **Password resets** after the Week 6 audit were deferred to 2027-01-04, so m.alvarez still had Welcome1 and ccadmin still matched the NETLOGON script on Dec 22.
14. **Kessler** stayed enabled after the access review because of HR's legal hold request (11-30) and was disabled 12-14.

## Ticket bank conflicts (not changed; the bank is live graded data)
Week 9 schedules TCK-1001 to 1007, 2001 to 2005 and 3001 to 3003 (3004, 3005 stretch). The bank disagrees with this canon in these places; Joey decides whether to edit the bank:
1. **Separate plant firewall.** TCK-2004 evidence routes the plant through "PLANT-FW" (10.40.2.1) with its own NAT 192.0.2.45. Canon: FW-CORE routes every zone; NAT is 198.51.100.24. (Week 9 schedules TCK-2004, so students will see it.)
2. **Plant network.** TCK-4008 puts the plant on 10.50.8.0/24. Canon: 10.40.0.0/16.
3. **DC01 10.10.1.10.** Now consistent: canon added 10.10.0.0/16 as the core server range.
4. **HR file server.** The bank keeps HR data on `\\SHARE-01\HR` and calls SHARE-01 "the main file server" (TCK-3001, 4xxx). Canon has no SHARE-01; HR files are on FS-HR01 (10.20.6.15, office subnet), engineering files on ENG-FS01. Another ticket uses `\\fileserver\Engineering\Projects\Halvorsen-Pump`.
5. **FINANCE-07** is 10.20.14.37 in the bank (and TCK-1005 uses 10.20.14.0/24 for an office user). Canon: 10.20.14.x is the Shipping office; FINANCE-07 is 10.20.6.43.
6. **svc-backup source 10.99.0.23** (TCK-3004): canon puts backups in 10.10.0.0/16; 10.99.0.23 would be a MGMT address. Minor.
7. **People not in the Week 3 directory:** dana.reyes and kevin.tran (canon usernames d.reyes, k.tran), marcus.hall / m.hall, l.osei, h.brooks, j.owens, r.castillo (and a Sales department), s.whitfield.
8. **August ransomware.** TCK-3001 (.ckl0ck on SHARE-01, 08-19) and the 08-19 VPN spray that succeeded on svc-backup and j.owens (TCK-3002) are consistent with Week 9's framing (worked informally, never declared), so Week 8 can still call CC-IR-2026-01 the first formally declared incident. Worth a sentence in Week 9 if Joey wants it explicit.
9. TCK-3003 headers say "Tue, 19 Aug 2026"; 2026-08-19 is a Wednesday.
10. CLAUDE.md and the build brief say 15 tickets in 3 tiers; the bank has 28 in 4 tiers.
