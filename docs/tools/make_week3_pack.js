// Builds the Week 3 Cedar Creek lab pack (assets/cedarcreek/week3/) and its zip
// (assets/cedarcreek/cc-week3.zip, root folder cedarcreek-week3/), and writes the same
// evidence into the generated block at the end of course-w3-mock.js so the Mock Access
// Review page and the Kali lab always show identical data.
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week3_pack.js
// Prints the auto-check answers for Lab 3.3 (course-w3-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week3');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week3.zip');
const MOCK = path.join(ROOT, 'course-w3-mock.js');
const ZIP_ROOT = 'cedarcreek-week3/';
const EXPORT_DAY = '2026-11-23';
const DORMANT_BEFORE = '2026-08-25';   // 90 days before the export

function text(lines) { return lines.join('\n') + '\n'; }
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20261123);
const ri = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));
const pick = a => a[Math.floor(rand() * a.length)];
const pad = n => String(n).padStart(2, '0');
function addDays(iso, n) { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
const hhmm = (h, m) => pad(h) + ':' + pad(m);

// ---------------------------------------------------------------- people with computer accounts
// [sam, display name, department, title, hire date, extra]
// Names reuse the Week 1 badge roster (make_week1_pack.js) and docs/CEDAR_CREEK.md.
const STAFF = [
  ['g.palmer', 'Greg Palmer', 'Finance', 'Chief Financial Officer', '2012-04-02'],
  ['amanda.singh', 'Amanda Singh', 'Finance', 'Accounts Payable Specialist', '2019-06-10'],
  ['d.reyes', 'Dana Reyes', 'Finance', 'Staff Accountant', '2022-01-10', { desc: 'Moved from HR to Accounting 2025-03-03' }],
  ['r.dempsey', 'Ross Dempsey', 'Finance', 'Senior Accountant', '2016-09-19'],
  ['g.rowe', 'Gina Rowe', 'Finance', 'Accounts Receivable Clerk', '2021-03-08'],
  ['c.benson', 'Carla Benson', 'Finance', 'Payroll Coordinator', '2017-06-05'],
  ['m.reyes', 'Marcus Reyes', 'IT', 'IT Manager', '2012-05-14'],
  ['d.ortiz', 'Dee Ortiz', 'IT', 'Systems Administrator', '2015-02-09'],
  ['j.pike', 'Jordan Pike', 'IT', 'Help Desk Technician', '2022-01-17'],
  ['r.medina', 'Rosa Medina', 'HR', 'HR Manager', '2011-04-18'],
  ['t.greene', 'Tasha Greene', 'HR', 'HR Generalist', '2020-02-24'],
  ['p.whitaker', 'Paul Whitaker', 'HR', 'Benefits Specialist', '2018-11-12'],
  ['t.becker', 'Tom Becker', 'Engineering', 'Engineering Manager', '2009-08-03'],
  ['v.chu', 'Victor Chu', 'Engineering', 'Lead Engineer', '2015-05-18'],
  ['p.nair', 'Priya Nair', 'Engineering', 'Mechanical Engineer I', '2026-08-24'],
  ['s.ortega', 'Sam Ortega', 'Engineering', 'Design Engineer', '2018-03-12'],
  ['l.fischer', 'Lena Fischer', 'Engineering', 'Manufacturing Engineer', '2019-09-09'],
  ['o.gallagher', 'Owen Gallagher', 'Engineering', 'CAD Technician', '2021-06-14'],
  ['r.imes', 'Rachel Imes', 'Engineering', 'Quality Engineer', '2020-10-05'],
  ['m.holt', 'Megan Holt', 'Engineering', 'Design Engineer', '2022-04-18'],
  ['l.kim', 'Laura Kim', 'Marketing', 'Marketing Director', '2016-01-11'],
  ['k.tran', 'Kevin Tran', 'Marketing', 'Marketing Specialist', '2023-05-01'],
  ['j.ford', 'Jasmine Ford', 'Marketing', 'Graphic Designer', '2022-09-06'],
  ['g.lindqvist', 'Gail Lindqvist', 'Customer Service', 'Customer Service Lead', '2013-03-04'],
  ['r.doyle', 'Ryan Doyle', 'Customer Service', 'Customer Service Representative', '2024-02-12'],
  ['i.mcbride', 'Ian McBride', 'Customer Service', 'Customer Service Representative', '2021-11-01'],
  ['n.quinn', 'Nora Quinn', 'Customer Service', 'Customer Service Representative', '2023-07-17'],
  ['t.lund', 'Tracy Lund', 'Customer Service', 'Order Entry Clerk', '2019-04-22'],
  ['m.alvarez', 'Miguel Alvarez', 'Purchasing', 'Purchasing Manager', '2014-06-16'],
  ['d.hale', 'Derek Hale', 'Purchasing', 'Buyer', '2020-08-03'],
  ['n.brooks', 'Nina Brooks', 'Administration', 'Receptionist / Office Coordinator', '2017-01-09'],
  ['p.archer', 'Phil Archer', 'Facilities', 'Facilities Coordinator', '2015-07-27'],
  ['b.sato', 'Ben Sato', 'Quality', 'Quality Manager', '2016-04-04'],
  ['w.henley', 'Walt Henley', 'Plant', 'Plant Manager', '2004-02-09'],
  ['j.moran', 'Jesse Moran', 'Plant - Line 1', 'Line 1 Supervisor', '2013-09-16', { last: '2026-06-02 06:12' }],
  ['l.barron', 'Luke Barron', 'Plant - Line 3', 'Line 3 Supervisor', '2017-02-13'],
  ['r.somers', 'Rick Somers', 'Shipping', 'Shipping Lead', '2012-10-22'],
  ['t.garza', 'Tina Garza', 'Shipping', 'Shipping Clerk', '2021-05-03'],
  ['s.pruitt', 'Shane Pruitt', 'Maintenance', 'Maintenance Technician', '2018-08-27']
];

// Extra office staff, generated once from fixed lists (seeded, so always the same people).
const FIRST = ['Adam', 'Beth', 'Caleb', 'Diane', 'Eli', 'Fiona', 'Grant', 'Holly', 'Isaac', 'Joan', 'Kyle', 'Lisa', 'Mason', 'Nadia', 'Oscar', 'Paige', 'Quentin', 'Rita', 'Seth', 'Tara', 'Uriel', 'Vera', 'Wade', 'Yvonne', 'Zach', 'Amber', 'Brent', 'Cora', 'Dylan', 'Erin', 'Felix', 'Gwen', 'Hugo', 'Ivy', 'Jared', 'Kendra', 'Leon', 'Maya', 'Noel', 'Olive', 'Perry', 'Renee', 'Simon', 'Tessa', 'Vince', 'Wanda', 'Xavier', 'Yolanda', 'Abby', 'Boyd', 'Cindy', 'Doug', 'Elena', 'Floyd', 'Gloria', 'Hal', 'Irene', 'Jake', 'Kathy', 'Lyle', 'Mona', 'Ned', 'Opal', 'Pete', 'Rhonda', 'Stan', 'Trudy', 'Vic', 'Wendy', 'Roy', 'Sue', 'Ray', 'June', 'Ted', 'Ruth', 'Carl', 'Dot', 'Gus', 'Lou', 'Bea'];
const LAST = ['Abbott', 'Baird', 'Carver', 'Dunlap', 'Easton', 'Farris', 'Gentry', 'Hollis', 'Ingram', 'Jarvis', 'Keller', 'Lowry', 'Madden', 'Norris', 'Oakes', 'Pruett', 'Quarles', 'Rankin', 'Sawyer', 'Tatum', 'Underwood', 'Vaughn', 'Wheeler', 'Yates', 'Zeller', 'Ashby', 'Beckett', 'Cobb', 'Dorsey', 'Ellison', 'Fenton', 'Garrison', 'Hensley', 'Irwin', 'Jessup', 'Kirby', 'Lattimer', 'Mercer', 'Nolan', 'Ortman', 'Parrish', 'Rhodes', 'Stroud', 'Tillman', 'Upton', 'Voss', 'Whitley', 'Yoder', 'Ammons', 'Bledsoe', 'Crane', 'Dillard', 'Eckert', 'Frye', 'Goins', 'Harmon', 'Inman', 'Judd', 'Kemp', 'Lyle', 'Mabry', 'Nance', 'Overby', 'Pate', 'Rowland', 'Seay', 'Tull', 'Vick', 'Walls', 'Yount', 'Bost', 'Cagle', 'Duvall', 'Estes', 'Fugate', 'Gantt', 'Hester', 'Isom', 'Jett', 'Kidd'];
const RESERVED = new Set(['Kessler', 'Vance', 'Ruiz', 'Brandt', 'Voss', 'Whitaker', 'Lund', 'Reyes', 'Ortiz', 'Pike', 'Palmer', 'Becker', 'Medina', 'Pruitt', 'Pruett']);
const usedNames = new Set(STAFF.map(s => s[1]));
const usedSams = new Set(STAFF.map(s => s[0]));
function newPerson() {
  for (;;) {
    const f = pick(FIRST), l = pick(LAST);
    const name = f + ' ' + l, sam = (f[0] + '.' + l).toLowerCase();
    if (RESERVED.has(l) || usedNames.has(name) || usedSams.has(sam)) continue;
    usedNames.add(name); usedSams.add(sam);
    return { name, sam };
  }
}
const EXTRA_PLAN = [
  ['Customer Service', 'Customer Service Representative', 4], ['Finance', 'Accounting Clerk', 2],
  ['Engineering', 'Design Engineer', 2], ['Engineering', 'CAD Technician', 1], ['Quality', 'Quality Technician', 3],
  ['Purchasing', 'Buyer', 1], ['Production Planning', 'Production Planner', 3], ['Marketing', 'Marketing Coordinator', 1],
  ['Shipping', 'Logistics Coordinator', 1], ['HR', 'HR Assistant', 1], ['Administration', 'Office Assistant', 1]
];
let LEAVE = null;
for (const [dept, title, n] of EXTRA_PLAN) {
  for (let i = 0; i < n; i++) {
    const p = newPerson();
    const extra = {};
    if (!LEAVE && dept === 'Customer Service') { LEAVE = p.name; extra.status = 'Leave'; extra.last = '2026-09-30 16:58'; }
    STAFF.push([p.sam, p.name, dept, title, addDays('2015-01-05', ri(0, 3500)), extra]);
  }
}

// Former employees and non-person accounts (the planted findings).
// status/term are used for the HR roster; enabled etc. for the AD export.
const FORMER = [
  { sam: 'b.kessler', name: 'Brian Kessler', dept: 'Engineering', title: 'Design Engineer', hire: '2021-05-10', term: '2026-10-16',
    enabled: 'True', last: '2026-11-01 22:41', pwd: '2026-08-30 08:14', pne: 'False', desc: '' },
  { sam: 'n.brandt', name: 'Neil Brandt', dept: 'Engineering', title: 'Manufacturing Engineer', hire: '2019-01-14', term: '2026-04-17',
    enabled: 'True', last: '2026-04-16 16:37', pwd: '2026-02-20 07:55', pne: 'False', desc: '' },
  { sam: 'l.vance', name: 'Lori Vance', dept: 'Plant - Line 1', title: 'Line 1 Lead', hire: '2018-06-04', term: '2026-10-09',
    enabled: 'True', last: '2026-10-08 05:52', pwd: '2026-09-02 05:47', pne: 'False', desc: '' },
  { sam: 'h.ruiz', name: 'Hector Ruiz', dept: 'Shipping', title: 'Shipping Clerk', hire: '2020-03-16', term: '2026-10-23',
    enabled: 'False', last: '2026-10-22 13:20', pwd: '2026-08-11 06:30', pne: 'False', desc: 'Disabled 2026-10-26 per HR email' },
  { sam: 'g.voss', name: 'Gary Voss', dept: 'Finance', title: 'Senior Accountant', hire: '2009-02-02', term: '2025-06-30',
    enabled: 'True', last: '2025-06-27 15:02', pwd: '2023-01-04 09:12', pne: 'True', desc: '' }
];
const NONPERSON = [
  { sam: 'Administrator', name: 'Administrator', dept: '', title: '', enabled: 'True', last: '2024-02-14 10:21', pwd: '2016-04-02 13:40', pne: 'True', created: '2012-03-19', desc: 'Built-in account for administering the domain' },
  { sam: 'Guest', name: 'Guest', dept: '', title: '', enabled: 'False', last: '', pwd: '', pne: 'True', created: '2012-03-19', desc: 'Built-in account for guest access' },
  { sam: 'krbtgt', name: 'krbtgt', dept: '', title: '', enabled: 'False', last: '', pwd: '2012-03-19 09:02', pne: 'False', created: '2012-03-19', desc: 'Key Distribution Center Service Account' },
  { sam: 'ccadmin', name: 'CC Admin', dept: 'IT', title: '', enabled: 'True', last: '2026-11-20 14:03', pwd: '2017-01-09 10:15', pne: 'True', created: '2013-06-03', desc: 'Shared IT admin account' },
  { sam: 'operator', name: 'Plant Operator', dept: 'Plant', title: '', enabled: 'True', last: '2026-11-22 22:58', pwd: '2019-03-01 06:00', pne: 'True', created: '2016-05-09', desc: 'Shared HMI login for PLANT-PC-07' },
  { sam: 'svc-backup', name: 'Backup Service', dept: 'IT', title: '', enabled: 'True', last: '2026-11-23 01:00', pwd: '2018-06-12 11:47', pne: 'True', created: '2018-06-12', desc: 'Backup software service account' },
  { sam: 'svc-scan', name: 'Scan to Folder', dept: 'IT', title: '', enabled: 'True', last: '2026-11-21 10:34', pwd: '2020-02-10 09:20', pne: 'True', created: '2020-02-10', desc: 'Copier scan-to-folder account' },
  { sam: 'vendor.cad', name: 'CAD Vendor Support', dept: 'Engineering', title: '', enabled: 'True', last: '2026-10-05 13:12', pwd: '2019-07-15 10:02', pne: 'True', created: '2019-07-15', desc: 'CAD license vendor remote support' },
  { sam: 'intern.eng', name: 'Engineering Intern', dept: 'Engineering', title: 'Summer Intern', enabled: 'True', last: '2025-08-15 15:48', pwd: '2025-06-02 08:05', pne: 'False', created: '2025-06-02', desc: 'Summer intern 2025 - Tom\'s team' }
];

// ---------------------------------------------------------------- AD user export
function recentLogon() { return pick(['2026-11-17', '2026-11-18', '2026-11-19', '2026-11-20']) + ' ' + hhmm(ri(6, 16), ri(0, 59)); }
function recentPwd() { return addDays(EXPORT_DAY, -ri(3, 85)) + ' ' + hhmm(ri(7, 16), ri(0, 59)); }
const AD = [];
for (const s of STAFF) {
  const x = s[5] || {};
  AD.push({ sam: s[0], name: s[1], dept: s[2], title: s[3], enabled: 'True', last: x.last || recentLogon(), pwd: recentPwd(), pne: 'False',
    created: s[4], desc: x.desc || '' });
}
for (const f of FORMER) AD.push({ sam: f.sam, name: f.name, dept: f.dept, title: f.title, enabled: f.enabled, last: f.last, pwd: f.pwd, pne: f.pne, created: f.hire, desc: f.desc });
for (const n of NONPERSON) AD.push(n);
// Walt's and the operator's logons happen on plant hours; the canon dates above win.
AD.sort((a, b) => a.sam.toLowerCase() < b.sam.toLowerCase() ? -1 : 1);
const AD_HEAD = 'SamAccountName,DisplayName,Department,Title,Enabled,LastLogonDate,PasswordLastSet,PasswordNeverExpires,Created,Description';
const adCsv = text([AD_HEAD].concat(AD.map(a => [a.sam, a.name, a.dept, a.title, a.enabled, a.last, a.pwd, a.pne, a.created, a.desc].join(','))));

// ---------------------------------------------------------------- groups
const byDept = d => STAFF.filter(s => s[2] === d).map(s => s[0]);
const GROUPS = {
  'Domain Admins': ['Administrator', 'ccadmin', 'd.ortiz', 'j.pike', 'm.reyes', 'svc-backup', 't.becker'],
  'VPN-Users': ['b.kessler', 'd.ortiz', 'g.palmer', 'j.pike', 'k.tran', 'l.kim', 'm.reyes', 'n.brandt', 'p.nair', 'r.dempsey', 's.ortega', 'svc-backup', 't.becker', 'v.chu', 'vendor.cad', 'w.henley'],
  'VPN-MFA-Users': ['d.ortiz', 'j.pike', 'k.tran', 'l.kim', 'm.reyes', 'p.nair', 'r.dempsey', 's.ortega', 'v.chu', 'w.henley'],
  'ENG-Share-RW': byDept('Engineering').concat(['b.kessler', 'n.brandt', 'intern.eng']),
  'ENG-APP02-Admins': ['d.ortiz', 't.becker', 'vendor.cad'],
  'HR-Share-RW': byDept('HR').concat(['d.reyes']),
  'Finance-Share-RW': byDept('Finance').concat(['g.voss']),
  'Plant-Leads': ['w.henley', 'j.moran', 'l.barron', 'r.somers', 's.pruitt', 'l.vance', 'h.ruiz']
};
for (const g of Object.keys(GROUPS)) GROUPS[g] = [...new Set(GROUPS[g])].sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
const groupCsv = text(['Group,Member'].concat(...Object.keys(GROUPS).map(g => GROUPS[g].map(m => g + ',' + m))));

// ---------------------------------------------------------------- shares
const SHARES = [
  { id: 's1', path: '\\\\ENG-FS01\\Drawings', holds: 'Customer CAD drawings and revision history', perms: [['ENG-Share-RW', 'Modify'], ['Domain Admins', 'Full Control']] },
  { id: 's2', path: '\\\\ENG-FS01\\CustomerSpecs', holds: 'Customer specifications and quality requirements sent with purchase orders', perms: [['ENG-Share-RW', 'Modify'], ['Everyone', 'Read']] },
  { id: 's3', path: '\\\\ENG-FS01\\ShopFloor', holds: 'Released work instructions and setup sheets for Lines 1-3', perms: [['ENG-Share-RW', 'Modify'], ['Plant-Leads', 'Read']] },
  { id: 's4', path: '\\\\FS-HR01\\Personnel', holds: 'Personnel files: offer letters; reviews; I-9 forms; home addresses', perms: [['HR-Share-RW', 'Modify']] },
  { id: 's5', path: '\\\\FS-HR01\\Payroll', holds: 'Payroll exports with Social Security numbers; pay rates; bank account numbers', perms: [['HR-Share-RW', 'Modify'], ['Finance-Share-RW', 'Read']] },
  { id: 's6', path: '\\\\FS-HR01\\Benefits', holds: 'Health plan enrollment forms and leave paperwork', perms: [['HR-Share-RW', 'Modify']] },
  { id: 's7', path: '\\\\FS-HR01\\Company', holds: 'Employee handbook; holiday schedule; Acceptable Use Policy; blank forms', perms: [['Domain Users', 'Read'], ['HR-Share-RW', 'Modify']] },
  { id: 's8', path: '\\\\DC01\\IT$', holds: 'IT scripts; FW-CORE configuration backups; setup notes with service account passwords', perms: [['Domain Admins', 'Full Control'], ['Domain Users', 'Read']] },
  { id: 's9', path: 'SharePoint: Marketing - Published', holds: 'Released product brochures and the line card posted on the website', perms: [['Anyone with the link', 'View'], ['Marketing (M365 group)', 'Edit']] }
];
const shareCsv = text(['Share,Contents (from Dee),Principal,Access'].concat(...SHARES.map(s => s.perms.map(p => [s.path, s.holds, p[0], p[1]].join(',')))));

// ---------------------------------------------------------------- HR roster (about 310 active employees)
const PLANT_DEPTS = [['Plant - Line 1', 'Machine Operator', 56], ['Plant - Line 2', 'Machine Operator', 54], ['Plant - Line 3', 'Machine Operator', 52],
  ['Warehouse', 'Material Handler', 28], ['Shipping', 'Dock Worker', 16], ['Maintenance', 'Maintenance Technician', 9], ['Quality', 'Inspector', 12]];
const W1_PLANT = ['Hank Lutz', 'Luis Carrera', 'Bev Tolliver', 'Jamal Pierce', 'Cody Ames', 'Dolores Price', 'Andre Wills', 'Wes Harlan', 'Kim Ostrander',
  'Alma Ruiz', 'Troy Banks', 'Deb Wilder', 'Marco Silva', 'Kara Lindell', 'Ned Pruett', 'Faye Collins', 'Sonia Vega', 'Dale Hixon', 'Mia Torres'];
const ROSTER = [];
let eid = 4100;
const FIXED_ID = { 'Priya Nair': '4719', 'Dana Reyes': '4471' };   // employee IDs from the ticket bank (TCK-1004, TCK-1001)
const nextId = name => FIXED_ID[name] || String(eid++);
for (const s of STAFF) ROSTER.push([nextId(s[1]), s[1], s[2], s[3], (s[5] && s[5].status) || 'Active', s[4], '']);
ROSTER.push([nextId('Earl Dawson'), 'Earl Dawson', 'Security (contract)', 'Night Guard (contractor)', 'Contractor', '2023-04-03', '']);
for (const n of W1_PLANT) { usedNames.add(n); ROSTER.push([nextId(n), n, pick(['Plant - Line 1', 'Plant - Line 2', 'Shipping', 'Warehouse']), 'Plant Associate', 'Active', addDays('2010-01-04', ri(0, 5000)), '']); }
for (const [dept, title, n] of PLANT_DEPTS) {
  for (let i = 0; i < n; i++) {
    let name;
    do { name = pick(FIRST) + ' ' + pick(LAST); } while (usedNames.has(name) || RESERVED.has(name.split(' ')[1]));
    usedNames.add(name);
    ROSTER.push([nextId(name), name, dept, title, 'Active', addDays('2008-01-07', ri(0, 6700)), '']);
  }
}
for (const f of FORMER) ROSTER.push([nextId(f.name), f.name, f.dept, f.title, 'Terminated', f.hire, f.term]);
ROSTER.push([nextId('Ethan Park'), 'Ethan Park', 'Engineering', 'Summer Intern', 'Terminated', '2025-06-02', '2025-08-15']);
for (let i = 0; i < 6; i++) {
  let name; do { name = pick(FIRST) + ' ' + pick(LAST); } while (usedNames.has(name) || RESERVED.has(name.split(' ')[1]));
  usedNames.add(name);
  ROSTER.push([nextId(name), name, pick(['Plant - Line 1', 'Plant - Line 2', 'Plant - Line 3', 'Warehouse']), 'Machine Operator', 'Terminated', addDays('2019-01-07', ri(0, 1800)), addDays('2026-01-09', ri(0, 300))]);
}
ROSTER.sort((a, b) => a[1].split(' ').reverse().join(' ') < b[1].split(' ').reverse().join(' ') ? -1 : 1);
const rosterCsv = text(['EmployeeID,Name,Department,Title,Status,HireDate,TermDate'].concat(ROSTER.map(r => r.join(','))));

// ---------------------------------------------------------------- VPN profiles and sessions
const vpnProfiles = text([
  'FW-CORE REMOTE ACCESS VPN - PROFILE SUMMARY',
  'Exported by: Dee Ortiz, 2026-11-23',
  '',
  'Profile:        CC-REMOTE',
  'Created:        2021-04-12 (Marcus Reyes)',
  'Who can use it: members of VPN-MFA-Users',
  'Sign-in:        company VPN certificate + domain password + push approval',
  '                in the authenticator app (multifactor authentication)',
  'Status:         In use',
  '',
  'Profile:        CC-LEGACY',
  'Created:        2017-03-01',
  'Who can use it: members of VPN-Users',
  'Sign-in:        domain password only (no certificate, no MFA)',
  'Status:         "Temporary" since 2021-04-12. Kept for people who had not',
  '                set up the authenticator app yet.',
  '',
  'Notes from Dee:',
  '- Every member of VPN-Users can connect with CC-LEGACY, even people who',
  '  also have CC-REMOTE. The firewall does not stop them.',
  '- Sessions log: vpn_sessions.csv (2026-10-01 to 2026-11-22).'
]);
const SESS = [];
function sess(date, h, m, user, profile, ip, result, dur) { SESS.push([date, hhmm(h, m), user, profile, ip, result, result === 'SUCCESS' ? dur : 0]); }
const DAYS = []; for (let d = '2026-10-01'; d <= '2026-11-22'; d = addDays(d, 1)) DAYS.push(d);
const HOME = {};
const ipFor = u => HOME[u] || (HOME[u] = (rand() < 0.5 ? '203.0.113.' : '192.0.2.') + ri(10, 250));
HOME['b.kessler'] = '203.0.113.58'; HOME['g.palmer'] = '192.0.2.41'; HOME['t.becker'] = '192.0.2.118'; HOME['vendor.cad'] = '192.0.2.200';
for (const u of GROUPS['VPN-MFA-Users']) {
  const n = ri(1, 6);
  for (let i = 0; i < n; i++) sess(pick(DAYS), ri(6, 21), ri(0, 59), u, 'CC-REMOTE', ipFor(u), 'SUCCESS', ri(15, 240));
}
for (let i = 0; i < 5; i++) sess(pick(DAYS), ri(19, 21), ri(0, 59), 'g.palmer', 'CC-LEGACY', HOME['g.palmer'], 'SUCCESS', ri(10, 60));
for (let i = 0; i < 9; i++) sess(pick(DAYS), ri(18, 22), ri(0, 59), 't.becker', 'CC-LEGACY', HOME['t.becker'], 'SUCCESS', ri(30, 150));
sess('2026-10-19', 20, 3, 't.becker', 'CC-LEGACY', HOME['t.becker'], 'FAILED', 0);
sess('2026-10-05', 13, 2, 'vendor.cad', 'CC-LEGACY', HOME['vendor.cad'], 'SUCCESS', 74);
for (const [d, h, m, dur] of [['2026-10-02', 20, 12, 65], ['2026-10-07', 21, 5, 48], ['2026-10-13', 19, 40, 92]]) sess(d, h, m, 'b.kessler', 'CC-LEGACY', HOME['b.kessler'], 'SUCCESS', dur);
sess('2026-10-24', 21, 14, 'b.kessler', 'CC-LEGACY', HOME['b.kessler'], 'SUCCESS', 95);
sess('2026-11-01', 22, 40, 'b.kessler', 'CC-LEGACY', HOME['b.kessler'], 'SUCCESS', 130);
SESS.sort((a, b) => (a[0] + a[1]) < (b[0] + b[1]) ? -1 : (a[0] + a[1]) > (b[0] + b[1]) ? 1 : (a[2] < b[2] ? -1 : 1));
const sessCsv = text(['Date,Time,User,Profile,SourceIP,Result,Minutes'].concat(SESS.map(r => r.join(','))));

// ---------------------------------------------------------------- memos
const FILES = {};
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'Access review evidence - Week 3 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'What this is',
  '------------',
  'Dee Ortiz exported these files on Monday, November 23, 2026, so you can',
  'run Cedar Creek\'s first access review. Rosa Medina in HR sent the roster.',
  'Treat them like real company records: they name real (fictional) people.',
  '',
  'Cedar Creek Industries and every person, account, and system named in',
  'these files are fictional. They were made for MCCoE training labs.',
  '',
  'What is inside',
  '--------------',
  'it/ad_users_export.csv       Every Active Directory user account',
  'it/ad_group_membership.csv   Members of the groups that matter most',
  'it/share_permissions.csv     Who can open each file share',
  'it/vpn_profiles.txt          How the FW-CORE remote access VPN signs people in',
  'it/vpn_sessions.csv          VPN sessions, 2026-10-01 to 2026-11-22',
  'hr/hr_roster.csv             HR roster: every employee, with status',
  'memos/                       Notes from Marcus',
  '',
  'How to use it',
  '-------------',
  'Lab 3.3 shows you how to compare these files from the Kali terminal.',
  'You will use what you find in the Week 3 Mock Access Review.'
]);
FILES['memos/access_review_request.txt'] = text([
  'From:     Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'To:       Security Analyst',
  'Cc:       Dee Ortiz <d.ortiz@cedarcreek-ind.com>',
  'Date:     Mon, 23 Nov 2026 07:40',
  'Subject:  Access review - who can get into what',
  '',
  'Last week on the walk, Dee said a former engineer\'s account was',
  '"probably never turned off." Your badge log work then showed that Brian',
  'Kessler\'s badge still opened doors after his last day. That tells me we',
  'have never checked who still has access to our systems.',
  '',
  'So this week I want our first access review. Dee pulled the Active',
  'Directory accounts, the group memberships, the share permissions, and',
  'the VPN logs. Rosa sent the HR roster. Please compare them and tell me:',
  '',
  '  1. Which accounts belong to people who no longer work here.',
  '  2. Which accounts have more access than the job needs, and which',
  '     accounts are shared by several people.',
  '  3. Who can reach our network from home without MFA.',
  '  4. What is on each file share and how sensitive it is.',
  '',
  'Do not disable anything yourself. Bring me the list with a recommended',
  'action for each item, and I will get Dee to make the changes. If you',
  'find something that looks like someone is actively using an account',
  'they should not have, tell me right away instead of waiting.',
  '',
  'Greg wants a short summary by Thursday.',
  '',
  '- Marcus'
]);
FILES['memos/vpn_mfa_rollout_2021.txt'] = text([
  'From:     Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'To:       IT Team',
  'Date:     Mon, 12 Apr 2021 16:05',
  'Subject:  VPN now has MFA',
  '',
  'Team,',
  '',
  'The new VPN profile, CC-REMOTE, is live. It needs the company',
  'certificate, the domain password, and a push approval in the',
  'authenticator app. Please move everyone over this month.',
  '',
  'I am leaving the old password-only profile (CC-LEGACY) on for a few',
  'weeks for people who have not set up the app yet. We will shut it off',
  'once everyone has moved. Tom asked to stay on the old one until his',
  'phone is replaced, and the CAD vendor says their support staff cannot',
  'use our app.',
  '',
  '- Marcus'
]);
FILES['it/ad_users_export.csv'] = adCsv;
FILES['it/ad_group_membership.csv'] = groupCsv;
FILES['it/share_permissions.csv'] = shareCsv;
FILES['it/vpn_profiles.txt'] = vpnProfiles;
FILES['it/vpn_sessions.csv'] = sessCsv;
FILES['hr/hr_roster.csv'] = rosterCsv;

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms), same writer as Week 1
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (11 << 5) | 23;
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

// ---------------------------------------------------------------- evidence for the mock page (generated block in course-w3-mock.js)
const EVIDENCE = {
  exportDay: EXPORT_DAY,
  adHead: AD_HEAD.split(','),
  ad: AD.map(a => [a.sam, a.name, a.dept, a.title, a.enabled, a.last, a.pwd, a.pne, a.created, a.desc]),
  groups: GROUPS,
  shares: SHARES,
  roster: ROSTER,
  vpnProfiles: FILES['it/vpn_profiles.txt'],
  vpnSessions: SESS,
  memos: { request: FILES['memos/access_review_request.txt'], rollout: FILES['memos/vpn_mfa_rollout_2021.txt'] }
};
if (fs.existsSync(MOCK)) {
  const src = fs.readFileSync(MOCK, 'utf8');
  const A = '// ---- BEGIN GENERATED EVIDENCE (docs/tools/make_week3_pack.js) ----', B = '// ---- END GENERATED EVIDENCE ----';
  const i = src.indexOf(A), j = src.indexOf(B);
  if (i < 0 || j < 0) throw new Error('course-w3-mock.js has no generated-evidence markers');
  const block = A + '\nwindow.MOCK_W3.evidence = ' + JSON.stringify(EVIDENCE) + ';\n' + B;
  fs.writeFileSync(MOCK, src.slice(0, i) + block + src.slice(j + B.length));
}

// ---------------------------------------------------------------- answers (computed the way a student would)
const csvRows = s => s.split('\n').filter(Boolean).slice(1).map(l => l.split(','));
const ad = csvRows(adCsv), hr = csvRows(rosterCsv), gm = csvRows(groupCsv), vs = csvRows(sessCsv);
const enabledNames = new Set(ad.filter(r => r[4] === 'True').map(r => r[1]));
const activeNames = new Set(hr.filter(r => r[4] === 'Active').map(r => r[1]));
const noActive = [...enabledNames].filter(n => !activeNames.has(n)).sort();
const members = g => gm.filter(r => r[0] === g).map(r => r[1]);
const vpnNoMfa = members('VPN-Users').filter(u => !members('VPN-MFA-Users').includes(u)).sort();
const out = {
  '3.3': {
    wc_l_ad: adCsv.split('\n').length - 1,
    accounts: ad.length,
    disabled: ad.filter(r => r[4] === 'False').map(r => r[0]),
    enabled_not_active_hr: { count: noActive.length, names: noActive },
    dormant_enabled: ad.filter(r => r[4] === 'True' && r[5] < DORMANT_BEFORE).map(r => r[0] + ' ' + r[5]),
    pne_true: { count: ad.filter(r => r[7] === 'True').length, sams: ad.filter(r => r[7] === 'True').map(r => r[0]) },
    domain_admins: { count: members('Domain Admins').length, members: members('Domain Admins') },
    vpn_no_mfa: { count: vpnNoMfa.length, members: vpnNoMfa },
    legacy_users: [...new Set(vs.filter(r => r[3] === 'CC-LEGACY').map(r => r[2]))].sort(),
    legacy_by_user: Object.entries(vs.filter(r => r[3] === 'CC-LEGACY').reduce((m, r) => (m[r[2]] = (m[r[2]] || 0) + 1, m), {})),
    kessler_after_last_day: vs.filter(r => r[2] === 'b.kessler' && r[0] > '2026-10-16').map(r => r.join(' ')),
    hr_share_members: members('HR-Share-RW'),
    hr_share_not_hr: members('HR-Share-RW').filter(u => (ad.find(r => r[0] === u) || [])[2] !== 'HR'),
    roster_rows: hr.length, roster_active: hr.filter(r => r[4] === 'Active').length,
    leave_person: LEAVE,
    sessions: vs.length
  }
};
console.log(JSON.stringify(out, null, 2));
