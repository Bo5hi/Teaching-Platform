// Builds the Week 1 Cedar Creek lab pack (assets/cedarcreek/week1/) and its zip
// (assets/cedarcreek/cc-week1.zip, root folder cedarcreek-week1/).
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week1_pack.js
// Prints the auto-check answers for Labs 1.2 and 1.4 (course-w1-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week1');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week1.zip');
const ZIP_ROOT = 'cedarcreek-week1/';

function text(lines) { return lines.join('\n') + '\n'; }

const FILES = {};

FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'IT shared drive extract - Week 1 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'What this is',
  '------------',
  'Marcus Reyes (IT Manager) copied these files from the IT team\'s shared',
  'drive so you can get up to speed in your first week as Cedar Creek\'s',
  'junior security analyst. Treat them the way you would treat real company',
  'files: read them, take notes, and do not post them anywhere public.',
  '',
  'Cedar Creek Industries and every person, badge, and system named in',
  'these files are fictional. They were made for MCCoE training labs.',
  '',
  'What is inside',
  '--------------',
  'policies/   Company policies and procedures (some of them are old)',
  'memos/      Short notes and emails from the people you will work with',
  'it/         IT notes: a first try at an asset inventory, and the Wi-Fi list',
  'security/   An export from the badge access system (BADGE-CTRL)',
  '',
  'How to use it',
  '-------------',
  'Lab 1.2 shows you how to explore these folders from the Kali terminal.',
  'Lab 1.4 uses security/badge_log.csv.',
  'You will also use what you find here in the Week 1 Mock Control Audit.'
]);

FILES['policies/acceptable_use_policy.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'ACCEPTABLE USE POLICY (AUP)',
  '',
  'Policy owner:  Marcus Reyes, IT Manager',
  'Approved by:   Greg Palmer, CFO',
  'Last revised:  2018-03-14',
  '',
  '1. Purpose',
  'This policy explains how Cedar Creek computers, email, internet access,',
  'and data may be used. It applies to every employee, contractor, and',
  'temporary worker who uses a Cedar Creek system.',
  '',
  '2. Company property',
  'Computers, phones, email accounts, and files created at work belong to',
  'Cedar Creek Industries. The company may monitor how they are used.',
  '',
  '3. Acceptable use',
  '- Use company systems for company business. Limited personal use (for',
  '  example, a quick personal email at lunch) is allowed if it does not',
  '  get in the way of work.',
  '- Keep customer drawings and specifications inside Cedar Creek systems.',
  '- Lock your computer when you walk away from it.',
  '',
  '4. Not allowed',
  '- Sharing your password or login with anyone, including coworkers.',
  '- Installing software that IT has not approved.',
  '- Connecting personal USB drives or other removable media to company',
  '  computers without IT approval.',
  '- Sending customer drawings or specifications to personal email or',
  '  personal cloud storage.',
  '- Visiting illegal or offensive websites.',
  '',
  '5. Reporting',
  'Report lost equipment, suspicious emails, or anything that looks wrong',
  'to the IT Help Desk right away.',
  '',
  '6. Consequences',
  'Breaking this policy may lead to loss of access and to discipline, up to',
  'and including termination.',
  '',
  'Employees sign this policy when they are hired. There is no yearly',
  're-signing.'
]);

FILES['policies/visitor_procedure.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'VISITOR PROCEDURE (OFFICE BUILDING)',
  '',
  'Owner:         Nina Brooks, Office Coordinator',
  'Last revised:  2016-06-01',
  '',
  '1. All visitors enter through the main lobby.',
  '2. The visitor writes their name, company, the person they are visiting,',
  '   and the time in on the sign-in sheet at the front desk.',
  '3. The receptionist gives the visitor a VISITOR badge from the desk.',
  '4. The receptionist calls the employee being visited. The employee',
  '   meets the visitor in the lobby.',
  '5. Visitors should stay with the employee they are visiting while in',
  '   the office building.',
  '6. When leaving, the visitor writes the time out on the sign-in sheet',
  '   and returns the badge.',
  '',
  'Notes',
  '- Truck drivers and delivery drivers do not use this procedure. They',
  '  check in at the shipping window at the loading dock.',
  '- Contractors who work in the server room or the IT closet are taken',
  '  there by someone from IT.'
]);

FILES['policies/password_guidelines_2019.txt'] = text([
  'MEMO',
  '',
  'To:       All Cedar Creek staff',
  'From:     Marcus Reyes, IT Manager',
  'Date:     2019-02-11',
  'Subject:  Password guidelines',
  '',
  'Starting March 1, 2019, Windows passwords must follow these rules:',
  '',
  '- Minimum length: 8 characters',
  '- Include at least one capital letter and one number',
  '- Change your password every 90 days (Windows will remind you)',
  '- Do not reuse any of your last 4 passwords',
  '- Do not write your password down or tape it to your monitor',
  '- Do not tell anyone your password, including IT. IT will never ask',
  '  for it.',
  '',
  'Shared logins',
  'Plant operator PCs use the shared "operator" login so the lines are not',
  'interrupted at shift change. Shift supervisors keep that password.',
  '',
  'Forgotten passwords',
  'Call the Help Desk. We will call you back at your desk phone before we',
  'reset your password.'
]);

FILES['policies/badge_request_procedure.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'BADGE AND DOOR ACCESS REQUESTS',
  '',
  'Owner:         Jordan Pike, Help Desk (badge system)',
  'Last revised:  2021-09-20',
  '',
  'New badges',
  '1. HR emails the Help Desk with the new hire\'s name, department, and',
  '   start date.',
  '2. The Help Desk prints the badge on BADGE-CTRL and hands it to the',
  '   employee on their first day.',
  '3. Default access: LOBBY-IN plus the doors for that department (for',
  '   example, ENG-SUITE for Engineering or HR-OFFICE for HR).',
  '',
  'Extra door access (SERVER-ROOM, HR-OFFICE, ENG-SUITE, PLANT-GATE)',
  '1. The employee\'s manager emails the Help Desk and names the door.',
  '2. The Help Desk adds the door to the badge in BADGE-CTRL.',
  '',
  'Lost badges',
  'Call the Help Desk. We disable the old badge and print a new one.',
  '',
  'Doors on the badge system',
  'LOBBY-IN      Lobby into the office building',
  'ENG-SUITE     Engineering suite (office building, 2nd floor)',
  'HR-OFFICE     HR office',
  'SERVER-ROOM   Server room (badge + PIN)',
  'DOCK-SIDE     Side door from the loading dock into the plant',
  'PLANT-GATE    Vehicle gate into the plant yard',
  '',
  'Alarms',
  'If a badge door stays open longer than 30 seconds, BADGE-CTRL writes a',
  '"DOOR HELD OPEN" alarm to the log. The alarm row has no badge number.'
]);

FILES['memos/welcome_from_marcus.txt'] = text([
  'From:     Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'To:       New security analyst',
  'Date:     Mon, 9 Nov 2026 07:45',
  'Subject:  Welcome to Cedar Creek',
  '',
  'Welcome aboard. I\'m glad you\'re here.',
  '',
  'A little background. Cedar Creek has never had a security person. I have',
  'been here fourteen years, and my team (Dee, Jordan, and me) has always',
  'been busy just keeping things running. Security got whatever time was',
  'left over. Then in August someone almost talked Accounts Payable into',
  'wiring $48,750 to a fake vendor, and Greg decided it was time. That is',
  'where you come in.',
  '',
  'Today I want to walk the whole campus with you: the lobby, the office',
  'floor, the server room, the plant, and the dock. Bring a notebook. Write',
  'down every control you see and everything that bothers you. Nobody will',
  'be offended. That is the job.',
  '',
  'I copied some files off our shared drive for you: old policies, a few',
  'notes from the team, Dee\'s start on an asset list, and last week\'s badge',
  'log export. None of it is pretty. That is part of the point.',
  '',
  '- Marcus'
]);

FILES['memos/server_room_ac.txt'] = text([
  'From:     Dee Ortiz <d.ortiz@cedarcreek-ind.com>',
  'To:       Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Date:     Wed, 28 Oct 2026 15:12',
  'Subject:  Server room AC again',
  '',
  'Marcus,',
  '',
  'The server room hit 86 F this afternoon. The temperature sensor sent its',
  'email alert at 2:40. The small AC unit cannot keep up when the sun is on',
  'that wall.',
  '',
  'Until facilities gets the new unit in, I have been propping the door open',
  'with a rubber wedge in the afternoons so the hallway air helps. It works,',
  'but the badge system complains about it (door held open alarms). Jordan',
  'says he can turn that alarm off if we want.',
  '',
  'Also: this month\'s backup tapes are on the shelf next to the rack again.',
  'I know we talked about taking them offsite. I just have not had time.',
  '',
  '- Dee'
]);

FILES['memos/badge_access_list.txt'] = text([
  'From:     Jordan Pike <j.pike@cedarcreek-ind.com>',
  'To:       Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Date:     Thu, 5 Nov 2026 10:03',
  'Subject:  RE: who can get into the server room?',
  '',
  'Hi Marcus,',
  '',
  'I pulled the access list from BADGE-CTRL. 23 badges can open SERVER-ROOM',
  'right now. Most were added years ago when someone needed in "just once",',
  'and we never took them back off. Some examples:',
  '- all three of us in IT',
  '- Tom Becker and two of his engineers',
  '- the maintenance techs (for the AC and the UPS)',
  '- Greg Palmer (he asked for it after the 2022 tour)',
  '- the two spare cards in my desk drawer, IT SPARE 2 and IT SPARE 3',
  '',
  'The spare cards are for vendors. We do not have a sign-out sheet, so I',
  'cannot tell you who has them right now. I will look.',
  '',
  'The full list is on BADGE-CTRL if you want me to print it.',
  '',
  '- Jordan'
]);

FILES['memos/plant_wifi_note.txt'] = text([
  'From:     Walt Henley <w.henley@cedarcreek-ind.com>',
  'To:       Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Cc:       Dee Ortiz <d.ortiz@cedarcreek-ind.com>',
  'Date:     Tue, 13 Oct 2026 06:58',
  'Subject:  Please do NOT change the plant Wi-Fi password',
  '',
  'Marcus,',
  '',
  'I heard you might change the CC-PLANT Wi-Fi password. Please don\'t, or at',
  'least not during a run. Every handheld scanner, both label printers, and',
  'the Line 2 tablet would have to be re-entered by hand. The last time we',
  'did it (2019) we lost half a shift.',
  '',
  'The password is printed on the wall in the break room so second shift can',
  'reconnect the scanners themselves. That has worked fine for years.',
  '',
  'Uptime is what pays everybody. Talk to me first.',
  '',
  '- Walt'
]);

FILES['memos/hr_staff_changes_october.txt'] = text([
  'From:     Rosa Medina <r.medina@cedarcreek-ind.com>',
  'To:       Help Desk <helpdesk@cedarcreek-ind.com>',
  'Cc:       Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Date:     Fri, 30 Oct 2026 16:20',
  'Subject:  October separations',
  '',
  'Help Desk,',
  '',
  'For your records, these employees left Cedar Creek in October:',
  '',
  '  Name            Department      Last day',
  '  Lori Vance      Plant, Line 1   2026-10-09',
  '  Brian Kessler   Engineering     2026-10-16',
  '  Hector Ruiz     Shipping        2026-10-23',
  '',
  'Please make sure all of their access is removed. I emailed after each of',
  'them left too, but I do not think I ever got a reply.',
  '',
  'Thanks,',
  'Rosa'
]);

FILES['memos/wire_fraud_near_miss.txt'] = text([
  'From:     Greg Palmer <g.palmer@cedarcreek-ind.com>',
  'To:       All Office Staff',
  'Date:     Thu, 20 Aug 2026 08:30',
  'Subject:  Thank you, Amanda - and a reminder about payment requests',
  '',
  'On August 19, Accounts Payable received an email that looked like it came',
  'from me. It asked for an urgent $48,750 wire to "Northwind Fabrication',
  'LLC" for a project called Northwind. It was fake. The sender\'s address',
  'ended in cedarcreek-lnd.com (a lowercase L where the i should be).',
  '',
  'Amanda Singh thought the request was unusual and called me to check.',
  'Because she did, we did not lose any money. Thank you, Amanda.',
  '',
  'From now on:',
  '- Any new payment, or any change to a vendor\'s bank details, must be',
  '  confirmed by a phone call to a number we already have on file. Never',
  '  use the phone number in the email.',
  '- I will never ask for a wire by email alone.',
  '',
  'We are also hiring a security analyst. More on that soon.',
  '',
  '- Greg'
]);

FILES['it/asset_inventory_stub.csv'] = text([
  'asset,what_it_is,location,owner,classification,notes',
  'DC01,domain controller / DNS,server room,Dee,,',
  'FS-HR01,HR file server,Server Rm,R. Medina,confidential,payroll exports here',
  'eng-fs01,engineering files (CAD),server room,Tom B?,,',
  'ENG-APP02,CAD license server,server room,Tom,,Win 2012 R2 - cant upgrade',
  'FW-CORE,firewall,server room,Marcus,,',
  'NVR-01,camera recorder - 16 cams,IT closet,Jordan,,',
  'BADGE-CTRL,badge system,IT closet,Jordan,,',
  'backup tapes,LTO weekly fulls,server room shelf,Dee,,should go offsite?'
]);

FILES['it/wifi_networks.txt'] = text([
  'CEDAR CREEK WIRELESS NETWORKS',
  'Maintained by: Marcus Reyes (last edited 2023-05-02)',
  '',
  'SSID:      CC-PLANT',
  'Where:     Plant floor, warehouse, loading dock',
  'Security:  WPA2-Personal (one shared password for every device)',
  'Password:  set in 2019 (talk to Walt before changing it)',
  'Used by:   handheld scanners, label printers, Line 2 tablet',
  '',
  'SSID:      CC-GUEST',
  'Where:     Office building (lobby and conference rooms)',
  'Security:  WPA2-Personal, internet only, no access to company systems',
  'Password:  written on the lobby whiteboard for visitors',
  'Used by:   visitors and personal phones'
]);

// ---------------------------------------------------------------- badge log
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261102);
const ri = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));
const chance = p => rand() < p;

const DAYS = ['2026-11-02', '2026-11-03', '2026-11-04', '2026-11-05', '2026-11-06', '2026-11-07', '2026-11-08'];
const pad = n => String(n).padStart(2, '0');
// secs = seconds after midnight of day d (may exceed 86400 to roll into next day)
function stamp(d, secs) {
  while (secs >= 86400) { secs -= 86400; d++; }
  return DAYS[d] + 'T' + pad(Math.floor(secs / 3600)) + ':' + pad(Math.floor(secs / 60) % 60) + ':' + pad(secs % 60);
}
const hm = (h, m, s) => h * 3600 + m * 60 + (s || 0);
const win = (h1, m1, h2, m2) => ri(hm(h1, m1), hm(h2, m2));

const rows = [];
function add(d, secs, badge, door, result, fixed) {
  rows.push({ d, secs, ts: stamp(d, secs), id: badge.id, name: badge.name, door, result: result || 'GRANTED', fixed: !!fixed });
}

const P = (id, name) => ({ id, name });
const OFFICE = [
  P('B1002', 'Greg Palmer'), P('B1004', 'Marcus Reyes'), P('B1011', 'Dee Ortiz'), P('B1019', 'Jordan Pike'),
  P('B1031', 'Laura Kim'), P('B1035', 'Amanda Singh'), P('B1041', 'Dana Reyes'), P('B1044', 'Nina Brooks'),
  P('B1050', 'Kevin Tran'), P('B1060', 'Carla Benson'), P('B1062', 'Ross Dempsey'), P('B1071', 'Jasmine Ford'),
  P('B1073', 'Ian McBride'), P('B1076', 'Ryan Doyle'), P('B1080', 'Derek Hale'), P('B1082', 'Nora Quinn'),
  P('B1090', 'Phil Archer'), P('B1092', 'Tracy Lund'), P('B1094', 'Ben Sato'), P('B1096', 'Gina Rowe')
];
const HR = [P('B1023', 'Rosa Medina'), P('B1024', 'Tasha Greene'), P('B1026', 'Paul Whitaker')];
const ENG = [
  P('B1027', 'Tom Becker'), P('B2031', 'Priya Nair'), P('B2036', 'Sam Ortega'), P('B2039', 'Lena Fischer'),
  P('B2042', 'Owen Gallagher'), P('B2044', 'Rachel Imes'), P('B2049', 'Victor Chu'), P('B2051', 'Megan Holt')
];
const KESSLER = P('B2047', 'Brian Kessler');
const SPARE3 = P('B9003', 'IT SPARE 3');
const ALARM = P('NONE', 'DOOR HELD OPEN');
const WALT = P('B3001', 'Walt Henley');
const EARL = P('B3090', 'Earl Dawson');
const SHANE = P('B3015', 'Shane Pruitt');
const SHIFT1_YARD = [P('B3010', 'Hank Lutz'), SHANE, P('B3017', 'Luis Carrera'), P('B3020', 'Bev Tolliver')];
const SHIP1 = [P('B3040', 'Rick Somers'), P('B3042', 'Tina Garza'), P('B3044', 'Jamal Pierce'), P('B3046', 'Cody Ames')];
const SHIFT2_YARD = [P('B3012', 'Dolores Price'), P('B3022', 'Andre Wills')];
const SHIP2 = [P('B3048', 'Wes Harlan'), P('B3050', 'Kim Ostrander')];
const OPS1 = [P('B3101', 'Jesse Moran'), P('B3102', 'Alma Ruiz'), P('B3103', 'Troy Banks'), P('B3104', 'Deb Wilder'),
  P('B3105', 'Marco Silva'), P('B3106', 'Kara Lindell'), P('B3107', 'Ned Pruett'), P('B3108', 'Faye Collins')];
const OPS2 = [P('B3121', 'Luke Barron'), P('B3122', 'Sonia Vega'), P('B3123', 'Dale Hixon'), P('B3124', 'Mia Torres')];

function entry(d, secs, b, door) {
  if (chance(0.03)) add(d, secs - ri(3, 9), b, door, 'DENIED');
  add(d, secs, b, door);
}

for (let d = 0; d < 5; d++) {
  // Office building
  for (const b of OFFICE.concat(HR, ENG)) {
    if (chance(0.05) && b.id !== 'B1076') continue;
    const isEng = ENG.includes(b), isHR = HR.includes(b);
    let arrive = b.id === 'B1044' ? win(7, 14, 7, 27) : isEng ? win(6, 50, 8, 15) : win(7, 25, 8, 50);
    entry(d, arrive, b, 'LOBBY-IN');
    if (isEng) add(d, arrive + ri(50, 200), b, 'ENG-SUITE');
    if (isHR) add(d, arrive + ri(50, 300), b, 'HR-OFFICE');
    if (chance(0.45)) {
      const back = win(12, 0, 13, 15);
      entry(d, back, b, 'LOBBY-IN');
      if (isEng) add(d, back + ri(50, 200), b, 'ENG-SUITE');
      if (isHR) add(d, back + ri(50, 300), b, 'HR-OFFICE');
    }
    if (isEng && chance(0.5)) add(d, win(14, 0, 16, 0), b, 'ENG-SUITE');
    if (isEng && chance(0.3)) {
      const late = chance(0.15) ? win(20, 5, 20, 40) : win(17, 30, 19, 40);
      add(d, late, b, 'LOBBY-IN');
      add(d, late + ri(50, 200), b, 'ENG-SUITE');
    }
    if (isHR) { const n = ri(1, 2); for (let i = 0; i < n; i++) add(d, win(9, 30, 16, 0), b, 'HR-OFFICE'); }
  }
  // Server room, business hours
  const DEE = OFFICE[2], MARCUS = OFFICE[1], JORDAN = OFFICE[3];
  const n = ri(1, 3);
  for (let i = 0; i < n; i++) add(d, win(8, 30, 16, 30), DEE, 'SERVER-ROOM');
  if (chance(0.5)) add(d, win(9, 0, 16, 0), MARCUS, 'SERVER-ROOM');
  if (chance(0.5)) add(d, win(9, 0, 16, 0), JORDAN, 'SERVER-ROOM');

  // Plant
  add(d, win(6, 30, 6, 55), WALT, 'PLANT-GATE');
  for (const b of SHIFT1_YARD.concat(SHIP1)) {
    if (chance(0.04)) continue;
    entry(d, win(5, 25, 5, 56), b, 'PLANT-GATE');
    if (chance(0.25)) add(d, win(11, 30, 12, 30), b, 'PLANT-GATE');
  }
  for (const b of SHIFT2_YARD.concat(SHIP2)) {
    if (chance(0.04)) continue;
    entry(d, win(13, 55, 14, 25), b, 'PLANT-GATE');
  }
  for (const b of SHIP1) { const k = ri(2, 4); for (let i = 0; i < k; i++) entry(d, win(6, 30, 14, 20), b, 'DOCK-SIDE'); }
  for (const b of OPS1) {
    if (chance(0.3)) entry(d, win(9, 0, 9, 40), b, 'DOCK-SIDE');
    if (chance(0.5)) entry(d, win(11, 30, 12, 15), b, 'DOCK-SIDE');
  }
  for (const b of SHIP2.concat(OPS2, [SHIFT2_YARD[1]])) { const k = ri(1, 3); for (let i = 0; i < k; i++) entry(d, win(15, 0, 22, 30), b, 'DOCK-SIDE'); }
}
// Saturday overtime crew
for (const b of [SHIFT1_YARD[0], SHIP1[0], SHIP1[1]]) {
  add(5, win(5, 30, 5, 55), b, 'PLANT-GATE');
  const k = ri(1, 2); for (let i = 0; i < k; i++) add(5, win(7, 0, 11, 30), b, 'DOCK-SIDE');
}
for (const b of OPS1.slice(0, 3)) add(5, win(7, 0, 11, 30), b, 'DOCK-SIDE');
// Night guard, every evening
for (let d = 0; d < 7; d++) add(d, win(17, 40, 17, 58), EARL, 'PLANT-GATE');

// ---- planted findings (fixed rows) ----
const OF = (n) => OFFICE.find(b => b.name === n);
// Normal-looking server room visits by others on the 23-person list
add(2, hm(10, 17, 42), ENG[0], 'SERVER-ROOM', 'GRANTED', true);
add(3, hm(10, 15, 8), SHANE, 'SERVER-ROOM', 'GRANTED', true);
// Legitimate after-hours IT work
add(0, hm(20, 10, 31), OF('Jordan Pike'), 'LOBBY-IN', 'GRANTED', true);
add(0, hm(20, 12, 4), OF('Jordan Pike'), 'SERVER-ROOM', 'GRANTED', true);
add(2, hm(20, 38, 12), OF('Dee Ortiz'), 'LOBBY-IN', 'GRANTED', true);
add(2, hm(20, 41, 55), OF('Dee Ortiz'), 'SERVER-ROOM', 'GRANTED', true);
add(4, hm(21, 2, 47), OF('Dee Ortiz'), 'LOBBY-IN', 'GRANTED', true);
add(4, hm(21, 5, 13), OF('Dee Ortiz'), 'SERVER-ROOM', 'GRANTED', true);
// Finding 1: spare vendor card in the server room late at night
const spare = [[0, hm(23, 14, 9)], [1, hm(25, 47, 36)], [2, hm(22, 31, 2)], [3, hm(26, 12, 50)], [5, hm(0, 58, 21)]];
for (const [d, s] of spare) {
  add(d, s - ri(70, 160), SPARE3, 'LOBBY-IN', 'GRANTED', true);
  add(d, s, SPARE3, 'SERVER-ROOM', 'GRANTED', true);
}
// Finding 2: former engineer's badge still works
add(1, hm(18, 47, 3), KESSLER, 'LOBBY-IN', 'GRANTED', true);
add(1, hm(18, 49, 26), KESSLER, 'ENG-SUITE', 'GRANTED', true);
add(3, hm(19, 21, 40), KESSLER, 'LOBBY-IN', 'GRANTED', true);
add(3, hm(19, 23, 15), KESSLER, 'ENG-SUITE', 'GRANTED', true);
// Finding 3: repeated denials at HR-OFFICE (mostly while HR is at lunch)
const RYAN = OF('Ryan Doyle');
for (const [d, s] of [[0, hm(12, 14, 20)], [0, hm(12, 15, 2)], [1, hm(12, 22, 47)], [2, hm(12, 8, 11)], [2, hm(12, 9, 3)],
  [2, hm(12, 31, 38)], [3, hm(17, 12, 26)], [4, hm(12, 18, 5)], [4, hm(12, 19, 40)]]) add(d, s, RYAN, 'HR-OFFICE', 'DENIED', true);
add(1, hm(10, 5, 33), OF('Kevin Tran'), 'HR-OFFICE', 'DENIED', true);
// Finding 4: door held open alarms. Server room = the wedge. Dock side = propped door + one tailgate.
for (const [d, s] of [[0, hm(14, 22, 10)], [1, hm(15, 5, 47)], [3, hm(13, 48, 30)], [4, hm(14, 37, 2)]]) add(d, s, ALARM, 'SERVER-ROOM', 'ALARM', true);
const TAILGATE = { d: 2, swipe: hm(10, 42, 5), alarm: hm(10, 42, 41) };
add(TAILGATE.d, TAILGATE.swipe, SHIP1[1], 'DOCK-SIDE', 'GRANTED', true);
const dockAlarms = [[0, hm(9, 21, 10)], [0, hm(14, 52, 30)], [1, hm(9, 34, 2)], [1, hm(19, 48, 15)], [2, TAILGATE.alarm],
  [2, hm(12, 5, 44)], [3, hm(9, 27, 51)], [3, hm(14, 47, 9)], [3, hm(20, 16, 33)], [4, hm(9, 30, 20)], [4, hm(12, 11, 5)], [5, hm(9, 15, 40)]];
for (const [d, s] of dockAlarms) add(d, s, ALARM, 'DOCK-SIDE', 'ALARM', true);

// Keep the alarm story clean: no random DOCK-SIDE swipe in the 3 minutes before any dock alarm,
// so the only alarm that follows a swipe within a minute is the tailgate.
const abs = r => r.d * 86400 + r.secs;
const alarmAbs = dockAlarms.map(([d, s]) => d * 86400 + s);
let log = rows.filter(r => {
  if (r.fixed || r.door !== 'DOCK-SIDE') return true;
  const t = abs(r);
  return !alarmAbs.some(a => t >= a - 180 && t <= a + 5);
});
// Random rows never use after-hours SERVER-ROOM (only the fixed ones do).
log.sort((a, b) => abs(a) - abs(b) || (a.ts < b.ts ? -1 : 1));
// de-duplicate identical timestamps by nudging forward one second
for (let i = 1; i < log.length; i++) {
  if (abs(log[i]) <= abs(log[i - 1])) { const t = abs(log[i - 1]) + 1; log[i].d = Math.floor(t / 86400); log[i].secs = t % 86400; log[i].ts = stamp(log[i].d, log[i].secs); }
}
FILES['security/badge_log.csv'] = text(['timestamp,badge_id,name,door,result'].concat(log.map(r => [r.ts, r.id, r.name, r.door, r.result].join(','))));

// ---------------------------------------------------------------- write files
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms)
// Windows PowerShell 5.1 Compress-Archive writes backslash paths, which makes Linux unzip print
// warnings, so the zip is written here instead.
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (11 << 5) | 9;
  const locals = [], centrals = [];
  let offset = 0;
  for (const e of entries) {
    const name = Buffer.from(e.name, 'utf8');
    const isDir = e.data === null;
    const raw = isDir ? Buffer.alloc(0) : e.data;
    const comp = isDir ? raw : zlib.deflateRawSync(raw, { level: 9 });
    const crc = isDir ? 0 : zlib.crc32(raw);
    const method = isDir ? 0 : 8;
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6); lh.writeUInt16LE(method, 8);
    lh.writeUInt16LE(time, 10); lh.writeUInt16LE(date, 12); lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(raw.length, 22); lh.writeUInt16LE(name.length, 26); lh.writeUInt16LE(0, 28);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(0x031E, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0, 8);
    ch.writeUInt16LE(method, 10); ch.writeUInt16LE(time, 12); ch.writeUInt16LE(date, 14); ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(comp.length, 20); ch.writeUInt32LE(raw.length, 24); ch.writeUInt16LE(name.length, 28);
    ch.writeUInt32LE(isDir ? ((0o40755 << 16) | 0x10) >>> 0 : (0o100644 << 16) >>> 0, 38);
    ch.writeUInt32LE(offset, 42);
    locals.push(lh, name, comp);
    centrals.push(ch, name);
    offset += lh.length + name.length + comp.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat(locals.concat([cd, end]));
}
const names = Object.keys(FILES).sort();
const dirs = [...new Set(names.filter(n => n.includes('/')).map(n => n.split('/')[0] + '/'))].sort();
const entries = [{ name: ZIP_ROOT, data: null }]
  .concat(dirs.map(d => ({ name: ZIP_ROOT + d, data: null })))
  .concat(names.map(n => ({ name: ZIP_ROOT + n, data: Buffer.from(FILES[n], 'utf8') })));
fs.writeFileSync(ZIP, makeZip(entries));

// ---------------------------------------------------------------- answers (computed the way a student would)
const lines = FILES['security/badge_log.csv'].split('\n').filter((l, i, a) => i < a.length - 1);
const data = lines.slice(1).map(l => l.split(','));
const AH = /T(2[0-3]|0[0-5]):/;
const tally = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
const top = m => Object.entries(m).sort((a, b) => b[1] - a[1]);
const ahServer = tally(lines.filter(l => l.includes('SERVER-ROOM') && AH.test(l)).map(l => l.split(',')[1]));
const out = {
  '1.2': {
    policies_files: Object.keys(FILES).filter(n => n.startsWith('policies/')).length,
    aup_revised: (FILES['policies/acceptable_use_policy.txt'].match(/Last revised:\s+(\S+)/) || [])[1],
    wedge_files: Object.keys(FILES).filter(n => /wedge/i.test(FILES[n])),
    asset_rows: FILES['it/asset_inventory_stub.csv'].split('\n').length - 2,
    guest_ssid_lines: FILES['it/wifi_networks.txt'].split('\n').filter(l => /guest/i.test(l)),
    min_pw_len: (FILES['policies/password_guidelines_2019.txt'].match(/Minimum length:\s*(\d+)/i) || [])[1],
    csv_files: Object.keys(FILES).filter(n => n.endsWith('.csv')).length,
    total_files: Object.keys(FILES).length
  },
  '1.4': {
    wc_l: lines.length,
    data_rows: data.length,
    denied: lines.filter(l => l.includes('DENIED')).length,
    after_hours_all: lines.filter(l => AH.test(l)).length,
    after_hours_server_by_badge: top(ahServer),
    server_granted_distinct: new Set(data.filter(r => r[3] === 'SERVER-ROOM' && r[4] === 'GRANTED').map(r => r[1])).size,
    hr_denied_by_name: top(tally(data.filter(r => r[3] === 'HR-OFFICE' && r[4] === 'DENIED').map(r => r[2]))),
    kessler_rows: lines.filter(l => l.includes('Brian Kessler')).length,
    vance_rows: lines.filter(l => l.includes('Lori Vance')).length,
    ruiz_rows: lines.filter(l => l.includes('Hector Ruiz')).length,
    alarms_by_door: top(tally(data.filter(r => r[4] === 'ALARM').map(r => r[3]))),
    door_counts: top(tally(data.map(r => r[3]))),
    result_counts: top(tally(data.map(r => r[4])))
  }
};
console.log(JSON.stringify(out, null, 2));
