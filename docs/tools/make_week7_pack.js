// Builds the Week 7 Cedar Creek lab pack (assets/cedarcreek/week7/) and its zip
// (assets/cedarcreek/cc-week7.zip, root folder cedarcreek-week7/).
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week7_pack.js
// Prints the auto-check answers for Labs 7.1, 7.2 and 7.3 (course-w7-labs.js must match them).
// The story (the weekend of Fri 2026-12-18 to Sun 2026-12-20) is written down in docs/build/week7-notes.md.
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week7');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week7.zip');
const ZIP_ROOT = 'cedarcreek-week7/';

const text = lines => lines.join('\n') + '\n';
const FILES = {};

let seed = 70707;
function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = a => a[Math.floor(rnd() * a.length)];
const at = (d, h, m, s) => Date.UTC(2026, 11, d, h, m, s || 0);
const T0 = at(18, 16, 0, 0), END = at(20, 23, 59, 59);
const iso = ms => new Date(ms).toISOString().slice(0, 19);
const fastTs = ms => { const x = iso(ms); return x.slice(5, 7) + '/' + x.slice(8, 10) + '/' + x.slice(0, 4) + '-' + x.slice(11) + '.' + String(ri(0, 999999)).padStart(6, '0'); };

// ---------------------------------------------------------------- people and hosts
const NAT = '198.51.100.24';
const C2 = '203.0.113.45', C2NAME = 'telemetry-sync.example';
const PAYROLL = '192.0.2.80', PAYROLLNAME = 'app.tallgrasspayroll.com';
const SCANNER = '203.0.113.91';
const HOSTS = [
  ['10.20.1.10', 'IT-LT-03', 'm.reyes', 'IT'],
  ['10.20.1.11', 'IT-LT-01', 'd.ortiz', 'IT'],
  ['10.20.1.12', 'IT-LT-02', 'j.pike', 'IT'],
  ['10.20.6.41', 'FIN-LT-09', 'g.palmer', 'Finance'],
  ['10.20.6.43', 'FINANCE-07', 'd.reyes', 'Finance'],
  ['10.20.6.44', 'FIN-PC-03', 'amanda.singh', 'Finance'],
  ['10.20.6.20', 'HR-05', 't.greene', 'HR'],
  ['10.20.6.21', 'HR-PC-01', 'r.medina', 'HR'],
  ['10.20.8.37', 'MKT-LT-02', 'l.kim', 'Marketing'],
  ['10.20.8.38', 'MKT-PC-04', 'k.tran', 'Marketing'],
  ['10.20.30.14', 'ENG-14', 't.becker', 'Engineering'],
  ['10.20.30.9', 'ENG-09', 'o.gallagher', 'Engineering'],
  ['10.20.30.11', 'ENG-11', 'p.nair', 'Engineering'],
  ['10.20.10.50', 'CS-PC-06', 'j.dorsey', 'Customer Service'],
  ['10.20.10.51', 'CS-PC-02', 'g.lindqvist', 'Customer Service'],
  ['10.20.10.60', 'PUR-PC-01', 'm.alvarez', 'Purchasing']
];
const H = {}; HOSTS.forEach(h => { H[h[1]] = { ip: h[0], name: h[1], user: h[2], dept: h[3] }; });
const mac = i => '00:1b:21:7c:' + (0x10 + i).toString(16) + ':' + (0x40 + i * 3).toString(16).padStart(2, '0');
FILES['it/dhcp_leases.csv'] = text(['ip,hostname,mac,user,department'].concat(HOSTS.map((h, i) => [h[0], h[1], mac(i), h[2], h[3]].join(','))));

// web destinations for normal traffic (documentation addresses stand in for real services)
const SITES = [
  ['outlook.office365.com', '192.0.2.11'], ['login.microsoftonline.com', '192.0.2.12'], ['teams.microsoft.com', '192.0.2.13'],
  ['cedarcreekind-my.sharepoint.com', '192.0.2.14'], ['update.microsoft.com', '192.0.2.15'], ['www.bing.com', '192.0.2.16'],
  ['www.google.com', '192.0.2.17'], ['www.weather.gov', '192.0.2.18'], ['portal.acme-supply.example', '192.0.2.19'],
  ['cdn.office.net', '192.0.2.20'], ['www.linkedin.com', '192.0.2.21'], ['news.example', '192.0.2.22']
];

// ---------------------------------------------------------------- firewall log + DNS log
const fw = [], dns = [];
const lastQ = {};
function query(ms, client, name, ip) {
  const k = client + '|' + name;
  if (lastQ[k] != null && ms - lastQ[k] < 3600 * 1000) return;
  lastQ[k] = ms;
  dns.push({ t: ms - 1000, line: iso(ms - 1000) + ' client=' + client + ' query=' + name + ' type=A answer=' + ip });
}
function conn(ms, action, dir, proto, src, dst, dpt, bytes, rule) {
  const spt = dir === 'in' ? ri(32768, 60999) : ri(49152, 65535);
  fw.push({ t: ms, src, dst, dpt, bytes, action, dir, line: iso(ms) + ' FW-CORE action=' + action + ' dir=' + dir + ' proto=' + proto + ' src=' + src + ' spt=' + spt + ' dst=' + dst + ' dpt=' + dpt + ' bytes=' + bytes + ' rule=' + rule });
}

// 1. internet background scanning (blocked by Default-Deny). 203.0.113.77 stays excluded so the seeded draws match earlier builds.
const SCANNERS = [];
for (let i = 0; i < 26; i++) {
  const ip = (i % 2 ? '192.0.2.' : '203.0.113.') + ri(100, 250);
  if ([SCANNER, '203.0.113.77', '203.0.113.190', '192.0.2.140'].includes(ip) || SCANNERS.includes(ip)) { i--; continue; }
  SCANNERS.push(ip);
}
const PORTW = [[3389, 8], [22, 6], [445, 4], [23, 3], [1433, 2], [5900, 2], [8080, 2], [21, 2], [25, 1], [3306, 1], [80, 1]];
const weighted = () => { let n = rnd() * PORTW.reduce((a, p) => a + p[1], 0); for (const p of PORTW) { n -= p[1]; if (n < 0) return p[0]; } return 3389; };
SCANNERS.forEach(ip => {
  const hits = ri(2, 9);
  for (let k = 0; k < hits; k++) conn(T0 + ri(0, END - T0 - 1000), 'DENY', 'in', 'TCP', ip, NAT, weighted(), 0, 'Default-Deny');
});
// 2. the port sweep: 40 ports, one second apart
const SWEEP = [21, 22, 23, 25, 53, 80, 110, 111, 135, 139, 143, 161, 389, 445, 465, 587, 636, 993, 995, 1433, 1521, 1723, 2049, 2222, 3306, 3389, 5060, 5432, 5900, 5985, 6379, 8000, 8008, 8080, 8081, 8443, 8888, 9000, 9200, 10000];
if (SWEEP.length !== 40) throw new Error('sweep must be 40 ports');
SWEEP.forEach((p, i) => conn(at(19, 3, 12, 5) + i * 1000, 'DENY', 'in', 'TCP', SCANNER, NAT, p, 0, 'Default-Deny'));
// 3. VPN users (allowed in on 443)
[[at(19, 9, 2, 14), '192.0.2.140'], [at(19, 9, 40, 51), '192.0.2.140'], [at(20, 20, 15, 3), '203.0.113.190']].forEach(v =>
  conn(v[0], 'ALLOW', 'in', 'TCP', v[1], NAT, 443, ri(800000, 9000000), 'Inbound-SSL-VPN'));
// 4. normal outbound web traffic
const OFFICE = HOSTS.map(h => h[1]).filter(n => n !== 'MKT-LT-02');
function browse(host, from, to, n) {
  for (let k = 0; k < n; k++) {
    const ms = from + ri(0, to - from), s = pick(SITES), port = rnd() < 0.85 ? 443 : 80;
    query(ms, H[host].ip, s[0], s[1]);
    conn(ms, 'ALLOW', 'out', 'TCP', H[host].ip, s[1], port, ri(1200, 900000), 'Office-Web');
  }
}
OFFICE.forEach(h => browse(h, T0, at(18, 18, 30), ri(4, 9)));
['ENG-14', 'CS-PC-06', 'IT-LT-03', 'ENG-09', 'FINANCE-07', 'CS-PC-02'].forEach(h => { browse(h, at(19, 0, 0), at(19, 23, 59), ri(2, 5)); browse(h, at(20, 0, 0), at(20, 23, 59), ri(2, 5)); });
browse('ENG-14', at(19, 10, 5), at(19, 13, 30), 6);
browse('CS-PC-06', at(20, 11, 20), at(20, 12, 40), 5);
// MKT-LT-02's own normal Friday browsing (before and after the macro)
['MKT-LT-02'].forEach(h => browse(h, T0, at(18, 16, 50), 4));
// 5. payroll portal on 8443 (legitimate; the false positive)
const PAYTIMES = [];
for (let k = 0; k < 6; k++) { const ms = at(18, 16, 5, 10) + k * 6 * 60000 + ri(0, 50) * 1000; PAYTIMES.push(ms); query(ms, H['HR-PC-01'].ip, PAYROLLNAME, PAYROLL); conn(ms, 'ALLOW', 'out', 'TCP', H['HR-PC-01'].ip, PAYROLL, 8443, ri(20000, 400000), 'Copier-Test'); }
// 6. outbound SMB blocked (harmless misconfigured mapped drive)
for (let k = 0; k < 4; k++) conn(at(18, 16, 30, 2) + k * 61000, 'DENY', 'out', 'TCP', H['CS-PC-02'].ip, '203.0.113.12', 445, 0, 'Block-SMB-Out');
// 7. the beacon: every 10 minutes (plus a few seconds of jitter) from 16:55:31 Friday
const BEACON = [];
for (let ms = at(18, 16, 55, 31); ms <= END; ms += 600000 + ri(0, 4) * 1000) {
  query(ms, H['MKT-LT-02'].ip, C2NAME, C2);
  conn(ms, 'ALLOW', 'out', 'TCP', H['MKT-LT-02'].ip, C2, 8443, ri(1600, 2400), 'Copier-Test');
  BEACON.push(ms);
}
// 8. the big upload
const EXFIL = at(19, 2, 47, 12), EXFIL_BYTES = 1288490188;
conn(EXFIL, 'ALLOW', 'out', 'TCP', H['MKT-LT-02'].ip, C2, 8443, EXFIL_BYTES, 'Copier-Test');

const bySort = (a, b) => a.t - b.t || (a.line < b.line ? -1 : 1);
fw.sort(bySort); dns.sort(bySort);
FILES['logs/fw-core.log'] = text(fw.map(r => r.line));
FILES['logs/dns-queries.log'] = text(dns.map(r => r.line));

// ---------------------------------------------------------------- IPS alerts (FW-CORE IPS module, alert-only mode), fast.log style
const ips = [];
function alert(ms, sid, msg, cls, pri, proto, src, spt, dst, dpt) {
  ips.push({ t: ms, src, msg, pri, line: fastTs(ms) + '  [**] [1:' + sid + ':1] ' + msg + ' [**] [Classification: ' + cls + '] [Priority: ' + pri + '] {' + proto + '} ' + src + ':' + spt + ' -> ' + dst + ':' + dpt });
}
const NSP = 'CC-LOCAL POLICY Outbound TLS on non-standard port 8443';
alert(at(19, 3, 12, 24), 1000101, 'CC-LOCAL SCAN Inbound TCP port sweep', 'Attempted Information Leak', 2, 'TCP', SCANNER, ri(32768, 60999), NAT, 2049);
alert(PAYTIMES[0] + 1000, 1000210, NSP, 'Potential Corporate Privacy Violation', 3, 'TCP', H['HR-PC-01'].ip, ri(49152, 65535), PAYROLL, 8443);
let lastA = -Infinity;
BEACON.forEach(ms => { if (ms - lastA >= 3600000) { alert(ms + 1000, 1000210, NSP, 'Potential Corporate Privacy Violation', 3, 'TCP', H['MKT-LT-02'].ip, ri(49152, 65535), C2, 8443); lastA = ms; } });
alert(at(18, 16, 30, 3), 1000305, 'CC-LOCAL POLICY Outbound SMB to the internet', 'Potential Corporate Privacy Violation', 3, 'TCP', H['CS-PC-02'].ip, ri(49152, 65535), '203.0.113.12', 445);
alert(at(19, 3, 6, 40), 1000420, 'CC-LOCAL POLICY Large outbound session (over 500 MB)', 'Potential Corporate Privacy Violation', 1, 'TCP', H['MKT-LT-02'].ip, ri(49152, 65535), C2, 8443);
ips.sort(bySort);
FILES['logs/ips-alerts.log'] = text(ips.map(r => r.line));

// ---------------------------------------------------------------- EDR alerts
const EDR = [
  ['2026-12-18T16:12:09', 'ENG-14', 't.becker', 'LOW', 'Protect', 'Potentially unwanted application (browser toolbar)', 'C:\\Users\\t.becker\\Downloads\\freepdf_setup.exe', 'Quarantined'],
  ['2026-12-18T16:53:10', 'MKT-LT-02', 'l.kim', 'HIGH', 'Detect', 'Office document macro launched PowerShell with an encoded command', 'C:\\Users\\l.kim\\Downloads\\Q4_Invoice_Review.xlsm', 'Alert only'],
  ['2026-12-18T16:53:41', 'MKT-LT-02', 'l.kim', 'MEDIUM', 'Detect', 'Unsigned program added to the Run key (starts at every logon)', 'C:\\Users\\l.kim\\AppData\\Roaming\\SyncHelper\\synchelper.exe', 'Alert only'],
  ['2026-12-19T02:10:05', 'MKT-LT-02', 'l.kim', 'MEDIUM', 'Detect', 'Process attempted many network logons to the domain controller', 'C:\\Users\\l.kim\\AppData\\Roaming\\SyncHelper\\synchelper.exe', 'Alert only'],
  ['2026-12-19T02:35:18', 'MKT-LT-02', 'l.kim', 'HIGH', 'Detect', 'Large archive created from files on a network share', 'C:\\Users\\l.kim\\AppData\\Local\\Temp\\cc_q4.7z', 'Alert only'],
  ['2026-12-20T11:31:52', 'CS-PC-06', 'j.dorsey', 'LOW', 'Protect', 'Adware bundled with a free software installer', 'C:\\Users\\j.dorsey\\Downloads\\video_converter.exe', 'Quarantined']
];
FILES['logs/edr-alerts.csv'] = text(['time,host,user,severity,policy,threat,file,action'].concat(EDR.map(r => r.join(','))));

// ---------------------------------------------------------------- DC01 authentication events (office network only)
const dc = [];
function ev(ms, id, status, acct, host, type, target) { dc.push({ t: ms, id, acct, host, line: [iso(ms), id, status, acct, host, H[host].ip, type, target].join(',') }); }
const FS = { HR: 'FS-HR01', Engineering: 'ENG-FS01' };
OFFICE.concat(['MKT-LT-02']).forEach(n => {
  const h = H[n];
  const target = FS[h.dept] || 'DC01';
  for (let k = 0; k < ri(1, 3); k++) ev(T0 + ri(0, 2.4 * 3600000), 4624, 'Success', h.user, n, 3, target);
});
ev(at(18, 16, 41, 2), 4625, 'Bad password', 'k.tran', 'MKT-PC-04', 2, 'MKT-PC-04');
ev(at(18, 16, 41, 19), 4625, 'Bad password', 'k.tran', 'MKT-PC-04', 2, 'MKT-PC-04');
ev(at(18, 16, 41, 40), 4624, 'Success', 'k.tran', 'MKT-PC-04', 2, 'MKT-PC-04');
ev(at(19, 10, 4, 51), 4624, 'Success', 't.becker', 'ENG-14', 2, 'ENG-14');
ev(at(19, 10, 6, 13), 4624, 'Success', 't.becker', 'ENG-14', 3, 'ENG-FS01');
ev(at(20, 11, 18, 30), 4625, 'Bad password', 'j.dorsey', 'CS-PC-06', 2, 'CS-PC-06');
ev(at(20, 11, 18, 52), 4624, 'Success', 'j.dorsey', 'CS-PC-06', 2, 'CS-PC-06');
const SPRAY = ['administrator', 'amanda.singh', 'ccadmin', 'd.ortiz', 'd.reyes', 't.greene', 'g.lindqvist', 'g.palmer', 'i.mcbride', 'g.rowe', 'j.pike', 'k.tran', 'n.quinn',
  'm.alvarez', 'm.reyes', 't.lund', 'n.brooks', 'p.nair', 'o.gallagher', 'j.dorsey', 'r.doyle', 'r.medina', 'c.benson', 'svc-backup', 'svc-plotter', 'svc-print',
  'svc-scan', 'svc-sql', 't.becker', 't.garza', 'w.henley'];
SPRAY.forEach((a, i) => {
  const ms = at(19, 2, 10, 3) + i * 7000;
  if (a === 'svc-plotter') ev(ms, 4624, 'Success', a, 'MKT-LT-02', 3, 'DC01');
  else ev(ms, 4625, 'Bad password', a, 'MKT-LT-02', 3, 'DC01');
});
ev(at(19, 2, 31, 7), 4624, 'Success', 'svc-plotter', 'MKT-LT-02', 3, 'ENG-FS01');
dc.sort(bySort);
FILES['logs/dc01-auth.csv'] = text(['time,event_id,status,account,source_host,source_ip,logon_type,target'].concat(dc.map(r => r.line)));

// ---------------------------------------------------------------- patch report (Lab 7.3)
const PATCH = [
  ['DC01', 'Windows Server 2019', 'Supported', 'Dee Ortiz', '2026-12-16', 0, 0, 'Manual', 'Patched in the December window'],
  ['FS-HR01', 'Windows Server 2016', 'Supported', 'Rosa Medina', '2026-12-16', 0, 1, 'Manual', ''],
  ['ENG-FS01', 'Windows Server 2019', 'Supported', 'Tom Becker', '2026-11-17', 2, 3, 'Manual', 'Engineering asked to skip the December window (customer deadline)'],
  ['ENG-APP02', 'Windows Server 2012 R2', 'EOL', 'Tom Becker', '2023-10-10', 0, 0, 'Manual', 'No security updates since end of support so the console reports nothing missing'],
  ['FW-CORE', 'Firewall firmware 7.2.5', 'Supported', 'Marcus Reyes', '2026-09-02', 1, 0, 'Manual', 'Vendor advisory 2026-12-10: Critical flaw in the VPN portal; fixed in 7.2.8'],
  ['NVR-01', 'Camera recorder firmware 4.1', 'Supported', 'Jordan Pike', '2024-03-02', 1, 2, 'Manual', '5.7.2 downloaded and verified in November (Week 2); not installed yet'],
  ['BADGE-CTRL', 'Badge controller firmware 2.8', 'Supported', 'Jordan Pike', '2025-06-11', 0, 1, 'Manual', ''],
  ['PLANT-PC-07', 'Windows 7 SP1 (line vendor image)', 'EOL', 'Walt Henley', '2020-01-14', 0, 0, 'Off', 'Line 2 HMI; vendor-certified image; vendor will not support it if IT patches it'],
  ['IT-ADMIN-01', 'Windows 11', 'Supported', 'Marcus Reyes', '2026-12-15', 0, 0, 'On', ''],
  ['IT-LT-01', 'Windows 11', 'Supported', 'Dee Ortiz', '2026-12-15', 0, 0, 'On', ''],
  ['IT-LT-02', 'Windows 11', 'Supported', 'Jordan Pike', '2026-12-15', 0, 0, 'On', ''],
  ['FIN-LT-09', 'Windows 11', 'Supported', 'Greg Palmer', '2026-12-15', 0, 0, 'On', ''],
  ['FINANCE-07', 'Windows 11', 'Supported', 'Greg Palmer', '2026-12-16', 0, 0, 'On', ''],
  ['HR-PC-01', 'Windows 11', 'Supported', 'Rosa Medina', '2026-12-15', 0, 0, 'On', ''],
  ['MKT-LT-02', 'Windows 11', 'Supported', 'Laura Kim', '2026-11-10', 4, 2, 'On', 'Office updates failing since November (disk full)'],
  ['MKT-PC-04', 'Windows 11', 'Supported', 'Laura Kim', '2026-12-16', 0, 0, 'On', ''],
  ['ENG-14', 'Windows 11', 'Supported', 'Tom Becker', '2026-12-15', 0, 1, 'On', ''],
  ['ENG-09', 'Windows 11', 'Supported', 'Tom Becker', '2026-12-16', 0, 0, 'On', ''],
  ['CS-PC-06', 'Windows 11', 'Supported', 'Gail Lindqvist', '2026-12-15', 0, 0, 'On', ''],
  ['CS-PC-02', 'Windows 11', 'Supported', 'Gail Lindqvist', '2026-12-16', 0, 0, 'On', '']
];
FILES['it/patch_status.csv'] = text(['host,os,support,owner,last_patched,missing_critical,missing_high,auto_update,notes'].concat(PATCH.map(r => r.join(','))));

// ---------------------------------------------------------------- README and memos
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'Weekend log exports - Week 7 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'What this is',
  '------------',
  'Marcus Reyes exported these logs on Monday morning, 2026-12-21, so you can',
  'review the weekend before the 10:00 IT meeting. They cover Friday 2026-12-18',
  '16:00 to Sunday 2026-12-20 23:59. Start with memos/monday_note_from_marcus.txt.',
  '',
  'Cedar Creek Industries and every person, host, account and address in these',
  'files are fictional. Every outside IP address uses a range reserved for',
  'documentation (192.0.2.x and 203.0.113.x), and outside names ending in',
  '.example are reserved too, so nothing here points at a real system.',
  '',
  'What is inside',
  '--------------',
  'logs/fw-core.log        Every connection FW-CORE allowed or denied between the',
  '                        internet and Cedar Creek. One line per connection.',
  'logs/ips-alerts.log     Alerts from FW-CORE\'s intrusion prevention module.',
  'logs/dns-queries.log    DNS lookups the office PCs sent to DC01.',
  'logs/edr-alerts.csv     Alerts from the EDR console.',
  'logs/dc01-auth.csv      Sign-in events DC01 recorded for office PCs (10.20.0.0/16).',
  'it/dhcp_leases.csv      Which office PC had which IP address this weekend.',
  'it/patch_status.csv     This morning\'s report from the patch console.',
  'memos/                  Notes from Marcus and Dee.',
  '',
  'Times',
  '-----',
  'All times are Cedar Creek local time. Most files write them as',
  '2026-12-19T02:10:03. The IPS writes them as 12/19/2026-02:10:03.123456.',
  '',
  'How to use it',
  '-------------',
  'Lab 7.1 uses logs/fw-core.log and it/dhcp_leases.csv.',
  'Lab 7.2 uses every file in logs/.',
  'Lab 7.3 uses it/patch_status.csv and memos/patch_report_note.txt.'
]);

FILES['memos/monday_note_from_marcus.txt'] = text([
  'From:     Marcus Reyes, IT Manager',
  'To:       Security Analyst',
  'Date:     2026-12-21 07:40',
  'Subject:  Weekend alerts - need your eyes before 10:00',
  '',
  'Morning. The firewall and the EDR console sent a pile of alert emails to',
  'the siem-alerts@cedarcreek-ind.com mailbox over the weekend. Nobody watches',
  'that mailbox on weekends, and most weeks it is the usual noise, so I have',
  'not opened them.',
  '',
  'I exported everything from Friday 4 PM to last night into logs/. Before our',
  '10:00 meeting, tell me:',
  '  1. Is anything here real, or is it all noise?',
  '  2. If something is real: which PC, which account, and what (if anything)',
  '     left the building?',
  '',
  'Two things you should know:',
  '- The IPS module on FW-CORE has run in alert-only mode since we turned it',
  '  on in March 2024. In blocking mode it cut off the payroll portal on a',
  '  payday, so I switched it to alert-only and never switched it back.',
  '- Outbound, office PCs get web ports (80 and 443) from rule Office-Web.',
  '  Anything else falls through to Copier-Test, the any-to-any allow rule',
  '  you flagged in your Week 4 review. Jordan has not removed it yet: he is',
  '  waiting for the copier vendor to say what scan-to-email needs. On 12-02',
  '  he moved Block-SMB-Out above it (the only outbound block, for Windows',
  '  file sharing) and turned on logging for every rule, so these logs are',
  '  the first full picture we have.',
  '',
  'Marcus'
]);

FILES['memos/edr_policy_change.txt'] = text([
  'From:     Dee Ortiz, Systems Administrator',
  'To:       IT team',
  'Date:     2026-11-30',
  'Subject:  Marketing EDR policy moved to Detect (temporary)',
  '',
  'The EDR quarantined FontVault, the font manager the Marketing design team',
  'uses, twice last week during the catalog deadline. Laura asked for it to',
  'stop. I moved the Marketing group (MKT-LT-02 and MKT-PC-04) from the',
  'Protect policy to the Detect policy.',
  '',
  'Protect = the EDR kills and quarantines threats on its own.',
  'Detect  = the EDR only raises an alert. It does not stop anything.',
  '',
  'This is temporary until the vendor sends the allow-list exception for',
  'FontVault. I set a reminder to move Marketing back to Protect on',
  '2026-12-14.',
  '',
  'Dee'
]);

FILES['memos/patch_report_note.txt'] = text([
  'From:     Dee Ortiz, Systems Administrator',
  'To:       Security Analyst',
  'Date:     2026-12-21',
  'Subject:  Patch status for your review',
  '',
  'it/patch_status.csv is this morning\'s export from the patch console.',
  '',
  'How we patch today:',
  '- Windows PCs and servers: Patch Tuesday (the 2nd Tuesday of the month)',
  '  plus 7 days for testing. December\'s Patch Tuesday was 2026-12-08, so',
  '  every machine on the normal cycle should show 2026-12-15 or later.',
  '- Servers are patched by hand in a Saturday window.',
  '- Firmware (FW-CORE, NVR-01, BADGE-CTRL) is patched "when we get to it".',
  '',
  'Things I am worried about:',
  '- FW-CORE: the vendor rated the VPN portal flaw in its 2026-12-10 advisory',
  '  Critical. Updating means a reboot, and a FW-CORE reboot drops the plant',
  '  for about 10 minutes, so Walt has to approve a window.',
  '- ENG-APP02 still runs Windows Server 2012 R2. No more patches will come.',
  '- PLANT-PC-07 runs the line vendor\'s certified Windows 7 image. Windows 7',
  '  went out of support on 2020-01-14, and the vendor will not support the',
  '  PC if we patch it.',
  '',
  'Tell me what you would patch first and why.',
  '',
  'Dee'
]);

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms), same writer as Week 1
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (12 << 5) | 21;
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

// ---------------------------------------------------------------- answers (computed from the files, the way a student would)
const rows = f => FILES[f].split('\n').filter(Boolean);
const kv = (line, k) => (line.match(new RegExp('\\b' + k + '=(\\S+)')) || [])[1];
const tally = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
const top = m => Object.entries(m).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
const FW = rows('logs/fw-core.log');
const denyIn = FW.filter(l => l.includes('action=DENY dir=in'));
const toC2 = FW.filter(l => l.includes('dst=' + C2 + ' '));
const bytesByDst = {};
FW.filter(l => l.includes('dir=out')).forEach(l => { const d = kv(l, 'dst'); bytesByDst[d] = (bytesByDst[d] || 0) + Number(kv(l, 'bytes')); });
const IPS = rows('logs/ips-alerts.log');
const DC = rows('logs/dc01-auth.csv').slice(1).map(l => l.split(','));
const sprayFails = DC.filter(r => r[1] === '4625' && r[5] === H['MKT-LT-02'].ip);
const PS = rows('it/patch_status.csv').slice(1).map(l => l.split(','));
const out = {
  '7.1': {
    wc_l: FW.length,
    actions: top(tally(FW.map(l => kv(l, 'action')))),
    deny_in: denyIn.length,
    top_deny_src: top(tally(denyIn.map(l => kv(l, 'src')))).slice(0, 3),
    scanner_distinct_ports: new Set(denyIn.filter(l => kv(l, 'src') === SCANNER).map(l => kv(l, 'dpt'))).size,
    top_deny_ports: top(tally(denyIn.map(l => kv(l, 'dpt')))).slice(0, 4),
    allow_in_rules: top(tally(FW.filter(l => l.includes('action=ALLOW dir=in')).map(l => kv(l, 'rule')))),
    out_rules: top(tally(FW.filter(l => l.includes('dir=out')).map(l => kv(l, 'action') + ' ' + kv(l, 'rule')))),
    out_ports: top(tally(FW.filter(l => l.includes('action=ALLOW dir=out')).map(l => kv(l, 'dpt')))),
    port8443_pairs: top(tally(FW.filter(l => l.includes('dpt=8443')).map(l => kv(l, 'src') + ' ' + kv(l, 'dst')))),
    top_bytes_dst: top(bytesByDst).slice(0, 3),
    c2_connections: toC2.length
  },
  '7.2': {
    ips_total: IPS.length,
    ips_by_msg: top(tally(IPS.map(l => l.split('[**]')[1].replace(/\[1:\d+:1\]/, '').trim()))),
    ips_priority1: IPS.filter(l => l.includes('Priority: 1')).length,
    beacon_first_three: BEACON.slice(0, 3).map(iso),
    beacon_count: BEACON.length,
    c2_dns_first: (rows('logs/dns-queries.log').find(l => l.includes(C2NAME)) || '').slice(0, 19),
    spray_fail_rows: sprayFails.length,
    spray_distinct_accounts: new Set(sprayFails.map(r => r[3])).size,
    spray_window: [sprayFails[0][0], sprayFails[sprayFails.length - 1][0]],
    spray_success: DC.filter(r => r[1] === '4624' && r[5] === H['MKT-LT-02'].ip).map(r => r.join(',')),
    largest_upload: toC2.map(l => [Number(kv(l, 'bytes')), l.slice(0, 19)]).sort((a, b) => b[0] - a[0])[0]
  },
  '7.3': {
    hosts: PS.length,
    missing_critical_hosts: PS.filter(r => Number(r[5]) > 0).map(r => r[0] + ':' + r[5]),
    eol: PS.filter(r => r[2] === 'EOL').map(r => r[0]),
    behind_cycle_all: PS.filter(r => r[4] < '2026-12-15').map(r => r[0]),
    behind_cycle_windows: PS.filter(r => /Windows/.test(r[1]) && r[4] < '2026-12-15').map(r => r[0]),
    top_missing_critical: PS.slice().sort((a, b) => b[5] - a[5])[0][0]
  }
};
console.log(JSON.stringify(out, null, 1));
