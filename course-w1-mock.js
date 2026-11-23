// Week 1 mock project: Mock Control Audit at Cedar Creek Industries.
// Source of truth: docs/CEDAR_CREEK.md, "Week 1 mock control audit: the walk-through".
// `areas` is what students read. `key` is the instructor answer key (read by the tracker to help grade).
window.MOCK_AUDIT_W1 = {
  id: 'w1',
  title: 'Mock Control Audit',

  categories: [
    { name: 'Technical', def: 'Enforced by technology: software or hardware settings such as screen locks, EDR, firewalls, and login requirements.' },
    { name: 'Managerial', def: 'Decisions and documents from management that set direction: policies, NDAs, risk assessments, classification rules.' },
    { name: 'Operational', def: 'Carried out by people as a routine: procedures, receptionists, guards, training, logs, and reviews.' },
    { name: 'Physical', def: 'Things you can touch that protect places and equipment: fences, locks, cameras, lighting, fire suppression.' }
  ],
  types: [
    { name: 'Preventive', def: 'Stops an incident before it happens (a locked door, a login prompt).' },
    { name: 'Deterrent', def: 'Discourages someone from trying (warning signs, bright lighting).' },
    { name: 'Detective', def: 'Notices or records an incident during or after it happens (cameras, logs, sensors, alerts).' },
    { name: 'Corrective', def: 'Limits the damage or restores normal operation after an incident (backups, fire suppression, a UPS).' },
    { name: 'Compensating', def: 'A substitute when the preferred control cannot be used (isolating a server that cannot be patched).' },
    { name: 'Directive', def: 'Tells people what they must or must not do (policies, "Authorized Personnel Only" signs, NDAs).' }
  ],
  classes: ['Public', 'Internal', 'Confidential', 'Restricted'],

  // Starter rows copied from Dee's stub (assets/cedarcreek/week1/it/asset_inventory_stub.csv), so the inventory is not empty.
  assetsSeed: [
    { name: 'DC01', what: 'Domain controller / DNS', loc: 'Server room', owner: 'Dee Ortiz', cls: '', notes: 'From Dee\'s starter list' },
    { name: 'FS-HR01', what: 'HR file server', loc: 'Server room', owner: 'Rosa Medina', cls: 'Confidential', notes: 'From Dee\'s starter list: payroll exports here' },
    { name: 'FW-CORE', what: 'Firewall', loc: 'Server room', owner: 'Marcus Reyes', cls: '', notes: 'From Dee\'s starter list' }
  ],

  brief: [
    'Welcome to Cedar Creek. Nobody here has ever looked at our security as a whole, so that is your first job. Walk the campus with me today and tomorrow. In every area, write down what is protecting us and what is not.',
    'I need four things from you: an inventory of the assets you see (what it is, where it lives, who owns it, how sensitive it is), a register of every control you find with its category and type, the gaps that worry you with a fix for each, and a short summary Greg Palmer (our CFO) can read in two minutes. Greg is paying for this program and wants plain answers.'
  ],

  areas: [
    {
      id: 'a1', number: 1, part: 1, name: 'Perimeter and parking',
      short: 'Fence line, vehicle gate, lot lighting, and the outside of the buildings.',
      observe: [
        'Marcus meets me in the parking lot at 7:45. An 8-foot chain-link fence runs all the way around the plant yard. A pickup pulls up to the vehicle gate, the driver holds a badge to a reader on a post, and the gate rolls open. LED pole lights stand throughout the lot.',
        'Every entrance has the same sign: "Private Property. Video Surveillance in Use." I count two cameras mounted on the corners of the office building, aimed at the lot.',
        'We follow the fence toward the loading dock. There is a smaller pedestrian side gate in the fence here, and it is propped open with a brick. Marcus sighs. "Every week, somebody." Just past it, one of the pole lights by the dock is dark. "Bulb\'s been out a while," he says.'
      ],
      assetsHere: ['Exterior cameras (record to NVR-01)', 'Vehicle gate badge reader (BADGE-CTRL)']
    },
    {
      id: 'a2', number: 2, part: 1, name: 'Main lobby',
      short: 'Front desk and visitor process in the office building.',
      observe: [
        'Nina Brooks runs the front desk. She is here from 7:30 to 4:30. A man in a polo shirt arrives ahead of us, writes his name and company on the paper sign-in sheet on the counter, and picks a plastic "VISITOR" badge out of a bowl. Nina smiles and waves him to a chair. Nobody asks to see his ID.',
        'I glance at the sign-in sheet. I can read every visitor\'s name and company above his, going back more than a week. The visitor badges have no number, name, or date on them. Nina says people "usually remember" to drop them back in the bowl on the way out.',
        'The doors from the lobby into the office need a badge; Marcus badges us through. On the whiteboard behind Nina\'s desk, in green marker: the guest Wi-Fi name, CC-GUEST, and its password. Nina mentions she takes lunch from 12:00 to 12:45. While she is out, the desk is empty.'
      ],
      assetsHere: ['Guest Wi-Fi (CC-GUEST)', 'Visitor sign-in sheet (paper record of visitors)']
    },
    {
      id: 'a3', number: 3, part: 1, name: 'Office floor (Finance, HR, Marketing)',
      short: 'Open-plan desks for Finance, HR, and Marketing.',
      observe: [
        'Upstairs is open-plan: Finance by the windows, HR in the corner, Marketing in the middle. As we pass an empty desk, the screen goes to the lock screen. Marcus says every workstation locks after 15 minutes idle. The HR monitors have privacy filters; from the aisle, I just see dark glass.',
        'There is a locked shred bin next to each printer. A poster by the copier summarizes the Acceptable Use Policy.',
        'In Finance, FIN-LT-09 sits in its dock. A yellow sticky note on the docking monitor reads "VPN: Spring2024!". In HR, the tall filing cabinet with personnel files is unlocked, and the key is still in the lock. On the way out I check the shared printer: a payroll summary is sitting in the tray, printed this morning and not picked up.'
      ],
      assetsHere: ['FIN-LT-09 (Finance laptop)', 'HR personnel files (filing cabinet)', 'Shared printer']
    },
    {
      id: 'a4', number: 4, part: 1, name: 'Server room',
      short: 'Ground floor of the office building. Servers, firewall, backups.',
      observe: [
        'The server room door has a badge reader and a PIN keypad, and a camera covers the hallway outside it. Today, though, the door is propped open with a rubber wedge. Dee Ortiz, our systems administrator, shrugs: "The AC can\'t keep up. If we close it, the room cooks."',
        'Inside, Dee walks me down the rack: DC01 (domain controller, Active Directory and DNS, hers), FW-CORE (the perimeter firewall, Marcus\'s), FS-HR01 (the HR file server, personnel files and payroll exports; Rosa Medina\'s data), ENG-FS01 (Engineering\'s file server with CAD drawings and customer specs; Tom Becker\'s), and ENG-APP02 (the CAD license and product data server, also Tom\'s).',
        'Overhead are the nozzles for a clean-agent (FM-200) fire suppression system. A UPS rack hums in the corner, and Dee says a diesel generator outside takes over in a long outage. Temperature and water sensors email IT if anything goes wrong. On a shelf by the door sits this month\'s stack of backup tapes, the weekly full backups.',
        'Jordan Pike, who also runs the badge system, pulls up the access list: 23 people can badge into this room. Marcus frowns. "Four people need to be in here. Maybe." I ask how vendor visits are recorded. Dee: "They\'re not. We just let them in."'
      ],
      assetsHere: ['DC01', 'FW-CORE', 'FS-HR01', 'ENG-FS01', 'ENG-APP02', 'Backup tapes (LTO)', 'UPS and generator']
    },
    {
      id: 'a5', number: 5, part: 1, name: 'IT office',
      short: 'Where the 3-person IT team works. Admin workstation and the equipment closet.',
      observe: [
        'The IT office is tight: three desks and a closet. A wall monitor shows the EDR console with every office PC reporting in. Pinned next to it is a printed patch schedule: "2nd Tuesday + 7 days." A whiteboard has a flow chart for password resets; the last box says to call the user back on their desk phone before resetting anything.',
        'In the closet, Jordan shows me NVR-01, the recorder for all 16 cameras, and BADGE-CTRL, the badge access controller and the badge database. Both are his. Marcus adds that a lot of our data lives in the cloud: the Microsoft 365 tenant (email, OneDrive, Teams), which he owns, and the cloud payroll service HR uses, which belongs to Rosa.',
        'IT-ADMIN-01, Marcus\'s admin workstation, sits on his desk. Next to its keyboard is a spiral notebook. Opened to the first page: the shared admin account "ccadmin" and its password. As we leave, Dee mentions an engineer who left last spring. "His account? Probably never got turned off."'
      ],
      assetsHere: ['IT-ADMIN-01', 'NVR-01', 'BADGE-CTRL', 'EDR console', 'Payroll service (cloud)', 'Microsoft 365 tenant']
    },
    {
      id: 'a6', number: 6, part: 2, name: 'Engineering area',
      short: 'Engineering offices and the plotter room. The company\'s crown jewels live here.',
      observe: [
        'Tom Becker, the Engineering Manager, meets us at the plotter room. Fresh drawings come off the plotter stamped "CONFIDENTIAL - Cedar Creek Proprietary". Tom says every engineer signs an NDA when they are hired. "Our customers\' specs are the business. If those walk out the door, so do the customers."',
        'The drawings live on ENG-FS01, and Tom shows me that the shares ask for a domain login before they open. Then an engineer walks past us, pulls a personal USB drive from her pocket, and copies a folder onto it. "For the shop floor," she says. "The Wi-Fi out there is slow." Tom says that is how they all do it.',
        'I ask about ENG-APP02. Tom winces. It still runs Windows Server 2012 R2 because the CAD license server "won\'t run on anything newer," and the vendor wants a fortune to upgrade.'
      ],
      assetsHere: ['ENG-FS01 (CAD drawings, customer specs)', 'ENG-APP02', 'Engineering drawings / customer specs (data)']
    },
    {
      id: 'a7', number: 7, part: 2, name: 'Plant floor (Line 2)',
      short: 'Production Lines 1 to 3. We stop at Line 2 and its control room.',
      observe: [
        'Through the covered walkway and into the noise. Walt Henley, the Plant Manager, walks with us. Cameras hang over each production line. The Line 2 control room has safety signs and an "Authorized Personnel Only" sign on the door. At the plant entrance, workers badge in at a time-clock kiosk, TIMECLOCK-01; Walt says HR (Rosa) owns it.',
        'PLANT-PC-07 is the Line 2 HMI, the operator PC that runs the line. It is logged in as "operator", and the password is on a label stuck to the bottom of the monitor. Walt is firm that the screen never locks: "If that screen locks mid-run, the line stops, and a stopped line costs us money every minute."',
        'Marcus points across to the plant break room, where the CC-PLANT Wi-Fi password is printed on the wall. It is WPA2 with a shared password that has not changed since 2019. He adds, quietly, that the plant network and the office network can reach each other freely. "We never split them."'
      ],
      assetsHere: ['PLANT-PC-07 (Line 2 HMI)', 'TIMECLOCK-01', 'Plant Wi-Fi (CC-PLANT)', 'Line cameras (record to NVR-01)']
    },
    {
      id: 'a8', number: 8, part: 2, name: 'Loading dock and shipping',
      short: 'Truck bays, the shipping window, and the doors into the plant.',
      observe: [
        'A camera above the dock records the truck bays. Drivers walk up to the shipping window, check in, and sign a log before anyone touches their load.',
        'At the end of the dock, a side door into the plant is propped open. Marcus: "That\'s for the smokers. They don\'t want to badge back in every time."',
        'While we stand there, a person in a delivery uniform with a box on one shoulder walks up right behind an employee, and follows her through the dock door into the plant. He never badges. Nobody says anything.'
      ],
      assetsHere: ['Dock camera (records to NVR-01)', 'Driver check-in log']
    },
    {
      id: 'a9', number: 9, part: 2, name: 'Break room',
      short: 'The plant break room, last stop of the walk.',
      observe: [
        'Coffee, vending machines, long tables. On the wall, a poster for the annual security awareness training shows the completion rate: 61%. Next to it: "Report phishing with the Report button in Outlook." By the door is a fire evacuation map. And by the coffee maker, the CC-PLANT Wi-Fi password I noticed from the floor.',
        'Marcus sits down and is honest with me. "Here\'s the big picture. Apart from that Acceptable Use Policy, we have no written security policy. Engineering stamps its drawings, but nobody else labels anything, and we have never written down what counts as confidential. We have never had an asset inventory; you are building the first one. There is no incident response plan. If something happened tonight, people would just call me."',
        '"And for security staff, we have Earl Dawson, a contract guard at the plant gate. Nights only, 6 PM to 6 AM. During the day, nobody."'
      ],
      assetsHere: []
    }
  ],

  // Instructor answer key. cat/type arrays list every accepted answer; the first is the preferred one.
  // kw = words to look for when matching a student's free-text row to a key item.
  key: {
    areas: {
      a1: {
        controls: [
          { text: 'Perimeter fence (8-ft chain-link)', cat: ['Physical'], type: ['Preventive'], kw: ['fence'] },
          { text: 'Badge-controlled vehicle gate', cat: ['Physical'], type: ['Preventive'], kw: ['vehicle gate', 'gate', 'badge reader'] },
          { text: 'LED pole lighting', cat: ['Physical'], type: ['Deterrent'], kw: ['light'] },
          { text: '"Private Property. Video Surveillance in Use." signs', cat: ['Physical'], type: ['Deterrent', 'Directive'], kw: ['sign'] },
          { text: 'Exterior cameras on the office building', cat: ['Physical'], type: ['Detective', 'Deterrent'], kw: ['camera', 'cctv', 'video'] }
        ],
        gaps: [
          { text: 'Pedestrian side gate propped open with a brick (defeats the fence)', sev: 'High', kw: ['side gate', 'brick', 'propped'],
            risk: 'Anyone can walk into the plant yard without a badge, which makes the fence pointless.',
            fix: { text: 'Self-closing hinge and latch on the gate, a gate-held-open alarm, and a rule that gates are never propped', cat: ['Physical', 'Technical'], type: ['Preventive', 'Detective'] } },
          { text: 'Burned-out pole light by the dock', sev: 'Low', kw: ['light', 'bulb', 'burned'],
            risk: 'A dark spot next to the dock and the open gate, where someone can approach unseen and cameras see less.',
            fix: { text: 'Replace it now; add a monthly lighting check to facilities rounds', cat: ['Operational', 'Physical'], type: ['Corrective', 'Preventive'] } }
        ]
      },
      a2: {
        controls: [
          { text: 'Receptionist at the front desk (Nina Brooks, 7:30-4:30)', cat: ['Operational'], type: ['Preventive', 'Detective'], kw: ['receptionist', 'nina', 'front desk'] },
          { text: 'Visitor sign-in sheet', cat: ['Operational'], type: ['Detective'], kw: ['sign-in', 'sign in', 'log', 'sheet'] },
          { text: 'Visitor badges (weak: reusable, unnumbered)', cat: ['Operational'], type: ['Preventive'], kw: ['visitor badge', 'badge'] },
          { text: 'Badge-locked doors from lobby into the office', cat: ['Physical'], type: ['Preventive'], kw: ['door', 'badge'] }
        ],
        gaps: [
          { text: 'No ID check for visitors', sev: 'Medium', kw: ['id', 'identification'],
            risk: 'Anyone can claim to be anyone; a social engineer gets a VISITOR badge just by writing a fake name.',
            fix: { text: 'Check photo ID at sign-in and confirm the visit with the host employee', cat: ['Operational'], type: ['Preventive'] } },
          { text: 'Reusable, unnumbered visitor badges that are not collected', sev: 'Medium', kw: ['badge', 'unnumbered', 'collect', 'bowl'],
            risk: 'Badges leave the building and can be reused; nobody can tell which visitor had which badge or whether all came back.',
            fix: { text: 'Numbered, dated, expiring visitor badges logged against each visitor and collected at exit; escort visitors', cat: ['Operational', 'Physical'], type: ['Preventive', 'Detective'] } },
          { text: 'Lobby unattended 12:00-12:45 at lunch', sev: 'Medium', kw: ['lunch', 'unattended', 'empty'],
            risk: 'For 45 minutes a day nobody sees who walks in or follows someone through the badge doors.',
            fix: { text: 'Scheduled lunch coverage, or a locked outer door with a call button during lunch', cat: ['Operational', 'Physical'], type: ['Preventive'] } },
          { text: 'Sign-in sheet exposes every prior visitor\'s name and company (privacy)', sev: 'Low', kw: ['privacy', 'sheet', 'names'],
            risk: 'Any visitor can read who else has visited (customers, vendors, candidates): a privacy leak and free recon for an attacker.',
            fix: { text: 'Individual sign-in cards or an electronic visitor system that hides earlier entries', cat: ['Operational', 'Technical'], type: ['Preventive'] } }
        ],
        notes: 'Guest Wi-Fi password on the whiteboard is NOT a required gap: CC-GUEST is internet-only (Public). Give credit if the student argues for rotating it or not posting it in view.'
      },
      a3: {
        controls: [
          { text: 'Automatic screen lock after 15 minutes idle', cat: ['Technical'], type: ['Preventive'], kw: ['screen lock', 'lock', '15'] },
          { text: 'Privacy filters on HR monitors', cat: ['Physical'], type: ['Preventive'], kw: ['privacy filter', 'filter'] },
          { text: 'Locked shred bins by each printer', cat: ['Physical', 'Operational'], type: ['Preventive'], kw: ['shred'] },
          { text: 'Acceptable Use Policy poster', cat: ['Managerial'], type: ['Directive'], kw: ['acceptable use', 'aup', 'policy'] }
        ],
        gaps: [
          { text: 'VPN password on a sticky note on FIN-LT-09\'s monitor', sev: 'High', kw: ['sticky', 'vpn', 'password', 'spring2024'],
            risk: 'Anyone walking past (cleaner, visitor) can log in to the company VPN as a Finance user.',
            fix: { text: 'Remove the note and reset the password now; MFA on the VPN; password manager; clean desk policy', cat: ['Technical', 'Managerial'], type: ['Preventive', 'Directive'] } },
          { text: 'HR filing cabinet unlocked with the key in it', sev: 'High', kw: ['cabinet', 'key', 'hr'],
            risk: 'Personnel files (confidential employee data) are open to anyone on the floor.',
            fix: { text: 'Lock the cabinet and keep the key with HR; key control', cat: ['Physical', 'Operational'], type: ['Preventive'] } },
          { text: 'Uncollected payroll summary in the shared printer tray (no clean desk / secure print)', sev: 'Medium', kw: ['printer', 'payroll', 'print'],
            risk: 'Payroll data seen or taken by anyone who uses the printer.',
            fix: { text: 'Secure (pull) printing that releases jobs only at a badge or PIN; clean desk policy', cat: ['Technical', 'Managerial'], type: ['Preventive', 'Directive'] } }
        ]
      },
      a4: {
        controls: [
          { text: 'Badge reader plus PIN keypad on the door (two factors)', cat: ['Physical'], type: ['Preventive'], kw: ['pin', 'keypad', 'badge'] },
          { text: 'Camera covering the hallway outside the door', cat: ['Physical'], type: ['Detective'], kw: ['camera', 'hallway'] },
          { text: 'Clean-agent (FM-200) fire suppression', cat: ['Physical'], type: ['Corrective'], kw: ['fire', 'fm-200', 'fm200', 'suppression'] },
          { text: 'UPS rack and diesel generator', cat: ['Physical'], type: ['Corrective', 'Compensating'], kw: ['ups', 'generator', 'power'] },
          { text: 'Temperature and water sensors that email IT', cat: ['Technical', 'Physical'], type: ['Detective'], kw: ['sensor', 'temperature', 'water', 'environmental'] }
        ],
        gaps: [
          { text: 'Server room door wedged open', sev: 'High', kw: ['wedge', 'propped', 'door'],
            risk: 'Badge + PIN protect nothing while the door is open; anyone in the building can reach every server.',
            fix: { text: 'Fix the cooling, then a door-held-open alarm; rule that the door stays closed', cat: ['Physical', 'Technical'], type: ['Preventive', 'Detective'] } },
          { text: '23 people have server room access; about 4 need it (least privilege)', sev: 'High', kw: ['23', 'access list', 'least privilege', 'too many'],
            risk: 'Every extra badge is another person (or lost badge) who can tamper with servers unnoticed.',
            fix: { text: 'Cut access to the people who need it and review the list every quarter', cat: ['Operational', 'Managerial'], type: ['Preventive', 'Detective'] } },
          { text: 'Backup tapes stored in the same room as the servers (no offsite copy)', sev: 'High', kw: ['backup', 'tape', 'offsite'],
            risk: 'A fire, flood, theft, or ransomware event takes out the servers and the backups together.',
            fix: { text: 'Keep a copy offsite or in the cloud (3-2-1 rule) and test restores', cat: ['Operational', 'Technical'], type: ['Corrective'] } },
          { text: 'No vendor or visitor log for the server room', sev: 'Medium', kw: ['vendor', 'visitor log', 'log'],
            risk: 'No record of who was in the room if something goes missing or breaks.',
            fix: { text: 'Server room access log plus escort for every vendor', cat: ['Operational'], type: ['Detective', 'Preventive'] } }
        ]
      },
      a5: {
        controls: [
          { text: 'EDR on all office PCs', cat: ['Technical'], type: ['Detective', 'Preventive'], kw: ['edr', 'endpoint'] },
          { text: 'Patch management schedule ("2nd Tuesday + 7 days")', cat: ['Operational', 'Managerial'], type: ['Preventive'], kw: ['patch'] },
          { text: 'Help desk callback verification for password resets', cat: ['Operational'], type: ['Preventive'], kw: ['callback', 'call back', 'password reset'] }
        ],
        gaps: [
          { text: 'Shared admin account "ccadmin" with its password written in a notebook', sev: 'High', kw: ['ccadmin', 'shared', 'admin', 'notebook'],
            risk: 'Anyone who reads the notebook owns the whole network, and no action can be tied to one person (no accountability, non-repudiation fails).',
            fix: { text: 'Named admin accounts for each IT person, a password vault / PAM, and retire ccadmin', cat: ['Technical'], type: ['Preventive'] } },
          { text: 'Former engineer\'s account possibly still active (orphaned account)', sev: 'High', kw: ['former', 'orphan', 'account', 'left', 'deprovision'],
            risk: 'An ex-employee, or anyone who has their password, can still log in.',
            fix: { text: 'Disable it today; offboarding checklist tied to HR; regular account reviews', cat: ['Operational', 'Managerial'], type: ['Preventive', 'Detective'] } }
        ]
      },
      a6: {
        controls: [
          { text: 'Drawings stamped "CONFIDENTIAL - Cedar Creek Proprietary" (data labels)', cat: ['Managerial', 'Operational'], type: ['Directive'], kw: ['label', 'stamp', 'confidential'] },
          { text: 'NDA signed at hire', cat: ['Managerial'], type: ['Directive', 'Deterrent'], kw: ['nda', 'non-disclosure'] },
          { text: 'ENG-FS01 shares require a domain login', cat: ['Technical'], type: ['Preventive'], kw: ['login', 'authentic', 'share', 'domain'] }
        ],
        gaps: [
          { text: 'Engineers move files on personal USB drives', sev: 'High', kw: ['usb', 'removable', 'flash'],
            risk: 'Crown-jewel drawings can be lost or stolen on a pocket drive, and USB drives carry malware onto the network.',
            fix: { text: 'Block personal removable media (device control), provide an approved way to get files to the floor, and a written rule', cat: ['Technical', 'Managerial'], type: ['Preventive', 'Directive'] } },
          { text: 'ENG-APP02 runs Windows Server 2012 R2 (end of support)', sev: 'High', kw: ['2012', 'eng-app02', 'unsupported', 'end of support', 'legacy'],
            risk: 'No more security patches; any new vulnerability stays open on a server holding product data.',
            fix: { text: 'Isolate it on its own network segment with only the needed connections allowed; plan the replacement', cat: ['Technical'], type: ['Compensating'] } }
        ]
      },
      a7: {
        controls: [
          { text: 'Cameras over each production line', cat: ['Physical'], type: ['Detective'], kw: ['camera'] },
          { text: '"Authorized Personnel Only" and safety signs at the control room', cat: ['Physical', 'Managerial'], type: ['Directive', 'Deterrent'], kw: ['authorized', 'sign'] },
          { text: 'Badge time clock (TIMECLOCK-01) records', cat: ['Technical', 'Operational'], type: ['Detective'], kw: ['time clock', 'timeclock', 'clock'] }
        ],
        gaps: [
          { text: 'Shared "operator" login on PLANT-PC-07 with the password on a label', sev: 'High', kw: ['operator', 'label', 'plant-pc-07', 'hmi', 'shared'],
            risk: 'Anyone on the floor can use the PC that runs Line 2, and nobody can tell who did what.',
            fix: { text: 'Remove the label and change the password; individual or role logins where the line allows', cat: ['Technical'], type: ['Preventive'] } },
          { text: 'HMI screen never locks', sev: 'Medium', kw: ['lock', 'never locks', 'screen'],
            risk: 'An unattended, logged-in PC that controls production.',
            fix: { text: 'Kiosk mode so the HMI can only run the line software, on a separate plant network', cat: ['Technical'], type: ['Compensating'] } },
          { text: 'CC-PLANT Wi-Fi password posted on the break room wall and unchanged since 2019', sev: 'High', kw: ['wi-fi', 'wifi', 'cc-plant', 'wireless', '2019'],
            risk: 'Every current and former worker and visitor can join the plant network, which reaches the office network.',
            fix: { text: 'Change it now, stop posting it, and move to WPA2/WPA3-Enterprise (per-user logins)', cat: ['Technical'], type: ['Preventive'] } },
          { text: 'Plant network can reach the office network freely (no segmentation; covered in Week 4)', sev: 'Medium', kw: ['segment', 'vlan', 'network', 'reach'],
            risk: 'A compromise on the plant side can spread to office servers, and the reverse.',
            fix: { text: 'Segment plant and office networks with firewall rules between them', cat: ['Technical'], type: ['Preventive'] } }
        ],
        notes: 'The Wi-Fi password is on the break room wall (area 9). Accept it logged under area 7 or 9.'
      },
      a8: {
        controls: [
          { text: 'Dock camera recording the bays', cat: ['Physical'], type: ['Detective'], kw: ['camera'] },
          { text: 'Driver check-in log at the shipping window', cat: ['Operational'], type: ['Detective'], kw: ['log', 'check-in', 'check in', 'driver'] }
        ],
        gaps: [
          { text: 'Side door to the plant propped open for smokers', sev: 'High', kw: ['propped', 'side door', 'smok'],
            risk: 'An unlocked, unwatched way into the plant.',
            fix: { text: 'Door-held-open alarm on the door and a smoking area that does not need a propped door', cat: ['Technical', 'Physical'], type: ['Detective', 'Preventive'] } },
          { text: 'Tailgating: a delivery person followed an employee in without badging', sev: 'High', kw: ['tailgat', 'piggyback', 'followed'],
            risk: 'Unknown people inside the plant with no record they are there.',
            fix: { text: 'Access control vestibule (mantrap) or turnstile at the dock door, plus training staff to challenge or report followers', cat: ['Physical', 'Operational'], type: ['Preventive'] } }
        ]
      },
      a9: {
        controls: [
          { text: 'Annual security awareness training', cat: ['Operational'], type: ['Preventive'], kw: ['training', 'awareness'] },
          { text: 'Phishing reporting process (Report button in Outlook)', cat: ['Operational'], type: ['Detective'], kw: ['phish', 'report'] },
          { text: 'Fire evacuation plan / map', cat: ['Operational', 'Managerial'], type: ['Directive'], kw: ['evacuation', 'fire'] }
        ],
        gaps: [
          { text: '39% of staff have not completed security awareness training', sev: 'Medium', kw: ['39', '61', 'training', 'completion'],
            risk: 'Four in ten people have not been taught to spot phishing, the attack that already almost worked (the BEC attempt).',
            fix: { text: 'Make training required with a deadline, manager follow-up, and completion tracking', cat: ['Managerial', 'Operational'], type: ['Directive', 'Preventive'] } }
        ]
      }
    },

    // Campus-wide gaps (good gap-analysis answers; log under "Campus-wide").
    overall: [
      { text: 'No written information security policy beyond the AUP', kw: ['security policy', 'policy'],
        fix: { text: 'Write and approve an information security policy', cat: ['Managerial'], type: ['Directive'] } },
      { text: 'No data classification policy (labels exist only in Engineering)', kw: ['classification', 'label'],
        fix: { text: 'Data classification policy with labels for every department', cat: ['Managerial'], type: ['Directive'] } },
      { text: 'No asset inventory', kw: ['inventory'],
        fix: { text: 'Keep the inventory the student started and review it regularly', cat: ['Operational', 'Managerial'], type: ['Preventive', 'Detective'] } },
      { text: 'No incident response plan', kw: ['incident response', 'ir plan', 'incident'],
        fix: { text: 'Write and test an incident response plan', cat: ['Managerial', 'Operational'], type: ['Corrective', 'Directive'] } },
      { text: 'Only one guard, nights only (6 PM - 6 AM)', kw: ['guard', 'security staff'],
        fix: { text: 'Daytime guard or staffed check at the plant gate, or compensate with monitored cameras and door alarms', cat: ['Operational', 'Physical'], type: ['Preventive', 'Detective', 'Compensating'] } }
    ],

    // Canonical asset list (docs/CEDAR_CREEK.md, Systems and assets). Classification is the expected answer.
    assets: [
      { name: 'FS-HR01', what: 'HR file server (personnel files, payroll exports)', loc: 'Server room', owner: 'Rosa Medina', cls: 'Confidential', area: 'a4' },
      { name: 'ENG-FS01', what: 'Engineering file server (CAD drawings, customer specs)', loc: 'Server room', owner: 'Tom Becker', cls: 'Confidential', area: 'a4' },
      { name: 'ENG-APP02', what: 'CAD license + product data server, Windows Server 2012 R2 (end of support)', loc: 'Server room', owner: 'Tom Becker', cls: 'Confidential', area: 'a4' },
      { name: 'DC01', what: 'Domain controller (Active Directory, DNS)', loc: 'Server room', owner: 'Dee Ortiz', cls: 'Restricted', area: 'a4' },
      { name: 'FW-CORE', what: 'Perimeter firewall', loc: 'Server room', owner: 'Marcus Reyes', cls: 'Restricted', area: 'a4' },
      { name: 'NVR-01', what: 'Camera recorder (16 cameras)', loc: 'IT office closet', owner: 'Jordan Pike', cls: 'Internal', area: 'a5' },
      { name: 'BADGE-CTRL', what: 'Badge access controller + badge database', loc: 'IT office closet', owner: 'Jordan Pike', cls: 'Internal', area: 'a5' },
      { name: 'IT-ADMIN-01', what: 'IT admin workstation', loc: 'IT office', owner: 'Marcus Reyes', cls: 'Restricted', area: 'a5' },
      { name: 'FIN-LT-09', what: 'Finance laptop', loc: 'Finance area', owner: 'Greg Palmer (dept.)', cls: 'Confidential', area: 'a3' },
      { name: 'PLANT-PC-07', what: 'Line 2 HMI / operator PC', loc: 'Plant floor, Line 2', owner: 'Walt Henley', cls: 'Internal', area: 'a7' },
      { name: 'TIMECLOCK-01', what: 'Badge time-clock kiosk', loc: 'Plant entrance', owner: 'Rosa Medina', cls: 'Internal', area: 'a7' },
      { name: 'Backup tapes', what: 'Weekly full backups (LTO tapes)', loc: 'Shelf inside server room', owner: 'Dee Ortiz', cls: 'Confidential', area: 'a4' },
      { name: 'Plant Wi-Fi (CC-PLANT)', what: 'WPA2-Personal, password unchanged since 2019', loc: 'Plant', owner: 'Marcus Reyes', cls: 'Internal', area: 'a7' },
      { name: 'Guest Wi-Fi (CC-GUEST)', what: 'Internet-only guest network', loc: 'Office', owner: 'Marcus Reyes', cls: 'Public', area: 'a2' },
      { name: 'Microsoft 365 tenant', what: 'Email, OneDrive, Teams', loc: 'Cloud', owner: 'Marcus Reyes', cls: 'Confidential', area: 'a5' },
      { name: 'Payroll service', what: 'Cloud payroll provider (SaaS)', loc: 'Cloud', owner: 'Rosa Medina', cls: 'Confidential', area: 'a5' }
    ],

    // What a strong submission looks like, per rubric criterion (same order as COURSE.weeks[0].mock.rubric).
    rubricNotes: [
      'Full marks: 10+ real assets with a sensible owner and classification. Servers holding HR or engineering data = Confidential; DC01, FW-CORE, IT-ADMIN-01 = Restricted; guest Wi-Fi = Public. Extra observed items (cameras, HR files, printer) are fine.',
      'Full marks: 15+ controls that were actually present, spread across most areas. Do not credit gaps logged as controls.',
      'Full marks: category and type match the key (any listed alternative earns credit) for nearly every control.',
      'Full marks: 5+ real gaps with a stated risk; the highest risks (wedged server room door, shared ccadmin + written password, orphaned account, backups in the same room, unsupported ENG-APP02, tailgating / propped doors, posted passwords) ranked near the top.',
      'Full marks: each fix fits the gap (compensating control for ENG-APP02 and the HMI), and the summary is plain-language: what is working, top risks, what to fix first.'
    ]
  }
};
