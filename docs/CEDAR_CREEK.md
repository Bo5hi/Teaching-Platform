# Cedar Creek Industries: scenario reference

Weeks 1-5 of the course follow one fictional company. The student is a new **junior security analyst** at Cedar Creek. Every lesson example, lab file and mock project uses the facts below. The SOC Ticket Board (later in the course) is set at the same company, so anything here must not contradict the ticket bank in `MCCoE_Student_Platform.html` / `MCCoE_Student_Tracker.html`.

If a new fact is needed, add it here first, then use it.

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
| M. Alvarez | m.alvarez | Purchasing | |
| G. Lindqvist | g.lindqvist | Customer Service | |
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

Networks (for Week 4): office users `10.20.0.0/16`, servers `10.30.0.0/16`, plant `10.40.0.0/16`, management `10.99.0.0/24`. **Today the plant and office VLANs can reach each other freely** (finding for Week 4).

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
Observations: an EDR console shows all office PCs reporting. A printed patch schedule is pinned up ("2nd Tuesday + 7 days"). A whiteboard flow chart for password resets requires a callback to the user's desk phone. A spiral notebook beside IT-ADMIN-01 lists the shared admin account `ccadmin` and its password. Dee mentions a former engineer's account was "probably never turned off".
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
