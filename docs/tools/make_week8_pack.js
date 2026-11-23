// Builds the Week 8 Cedar Creek lab pack (assets/cedarcreek/week8/) and its zip
// (assets/cedarcreek/cc-week8.zip, root folder cedarcreek-week8/).
// The pack is the evidence from incident CC-IR-2026-01: an overnight ransomware intrusion
// on ENG-FS01 (Wed 2026-12-23). Facts are listed in docs/build/week8-notes.md.
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week8_pack.js
// Prints the auto-check answers for Labs 8.2 and 8.3 (course-w8-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week8');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week8.zip');
const ZIP_ROOT = 'cedarcreek-week8/';

let seed = 80816;
function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = a => a[Math.floor(rnd() * a.length)];
const pad = n => String(n).padStart(2, '0');
function text(lines) { return lines.join('\n') + '\n'; }
const sha256 = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');

// Times. Local time at Cedar Creek is US Central (UTC-6 in December).
// t(day, 'HH:MM:SS') -> seconds from 2026-12-22 00:00 local. day 0 = Tue 12-22, day 1 = Wed 12-23.
const OFFSET = 6 * 3600;
const t = (d, hms) => { const [h, m, s] = hms.split(':').map(Number); return d * 86400 + h * 3600 + m * 60 + (s || 0); };
function stampLocal(sec) { const d = Math.floor(sec / 86400), r = sec % 86400; return '2026-12-' + pad(22 + d) + ' ' + pad(Math.floor(r / 3600)) + ':' + pad(Math.floor(r % 3600 / 60)) + ':' + pad(r % 60); }
function stampUTC(sec) { const u = sec + OFFSET, d = Math.floor(u / 86400), r = u % 86400; return '2026-12-' + pad(22 + d) + 'T' + pad(Math.floor(r / 3600)) + ':' + pad(Math.floor(r % 3600 / 60)) + ':' + pad(r % 60) + 'Z'; }

const FILES = {};

// ------------------------------------------------------------------ people and hosts
const REAL = ['g.palmer', 'm.reyes', 'd.ortiz', 'j.pike', 't.becker', 'r.medina', 'l.kim', 'amanda.singh', 'm.alvarez', 'g.lindqvist', 'w.henley', 'n.brooks',
  'd.reyes', 'j.dorsey', 'n.quinn', 'i.mcbride', 't.lund', 'p.nair', 'k.tran', 'r.doyle', 't.garza', 's.pruitt'];
const FAKE = ['admin', 'administrator', 'vpn', 'test', 'scanner', 'backup', 'it', 'helpdesk', 'support', 'training', 'guest', 'user', 'info', 'sales', 'hr', 'engineering'];
const ATTACKER = '203.0.113.77';
const EXFIL = '192.0.2.145';
const VPNIP = '10.250.0.37';
const HOSTS = { 'DC01': '10.10.1.10', 'ENG-FS01': '10.30.4.10', 'FS-HR01': '10.20.6.15', 'ENG-APP02': '10.30.4.22' };
const WS = { 't.becker': ['ENG-14', '10.20.30.14'], 'p.nair': ['ENG-11', '10.20.30.11'], 'amanda.singh': ['FIN-PC-03', '10.20.6.44'], 'd.reyes': ['FINANCE-07', '10.20.6.43'],
  'r.medina': ['HR-PC-01', '10.20.6.21'], 'l.kim': ['MKT-LT-02', '10.20.8.37'], 'k.tran': ['MKT-PC-04', '10.20.8.38'], 'g.lindqvist': ['CS-PC-02', '10.20.10.51'],
  'm.alvarez': ['PUR-PC-01', '10.20.10.60'], 'd.ortiz': ['IT-ADMIN-01', '10.99.0.10'], 'j.pike': ['IT-LT-02', '10.20.1.12'], 'n.brooks': ['RECEPTION-01', '10.20.12.3'] };
// Home addresses from the Week 3 VPN sessions (docs/CEDAR_CREEK.md). CC-REMOTE users sign in with a push; CC-LEGACY with a password alone.
const HOME = { 'l.kim': '192.0.2.78', 't.becker': '192.0.2.118', 'v.chu': '192.0.2.67', 'd.ortiz': '203.0.113.38', 'r.dempsey': '203.0.113.240' };
const PROFILE = { 'l.kim': 'CC-REMOTE', 'v.chu': 'CC-REMOTE', 'd.ortiz': 'CC-REMOTE', 'r.dempsey': 'CC-REMOTE', 't.becker': 'CC-LEGACY' };
const mfaOf = u => PROFILE[u] === 'CC-REMOTE' ? 'mfa=push profile=CC-REMOTE' : 'mfa=none profile=CC-LEGACY';

// ------------------------------------------------------------------ FW-CORE VPN and admin log (UTC)
const vpn = [];
const LEGIT = {};
// Legitimate remote sessions Tuesday evening (the ri() calls keep the random sequence the pack was built with)
[['l.kim', '18:42:10', 1], ['t.becker', '19:05:33', 0], ['v.chu', '20:11:02', 0], ['d.ortiz', '21:30:47', 0], ['r.dempsey', '22:14:19', 1]].forEach(([u, hms, typo]) => {
  const s = t(0, hms); ri(10, 200); ri(2, 250); const ip = HOME[u];
  if (typo) vpn.push([s - ri(20, 50), `FW-CORE sslvpn: AUTH_FAIL user=${u} src=${ip} reason=bad_password`]);
  const a = '10.250.0.' + ri(11, 30);
  LEGIT[u] = a;
  vpn.push([s, `FW-CORE sslvpn: AUTH_OK user=${u} src=${ip} assigned=${a} ${mfaOf(u)}`]);
  vpn.push([s + ri(1200, 5400), `FW-CORE sslvpn: SESSION_END user=${u} assigned=${a}`]);
});
// The password spray: rounds through 38 usernames, one attempt each, about 11 s apart, from one address.
const SPRAY = REAL.concat(FAKE);
let sprayT = t(1, '01:12:04'), sprayFails = 0, sprayUsers = new Set();
let okAt = null;
for (let round = 1; round <= 4 && !okAt; round++) {
  const order = SPRAY.slice().sort(() => rnd() - 0.5);
  if (round === 4) { const i = order.indexOf('m.alvarez'); order.splice(i, 1); order.splice(29, 0, 'm.alvarez'); }
  for (const u of order) {
    sprayUsers.add(u);
    if (round === 4 && u === 'm.alvarez') { okAt = sprayT; break; }
    vpn.push([sprayT, `FW-CORE sslvpn: AUTH_FAIL user=${u} src=${ATTACKER} reason=${FAKE.includes(u) ? 'no_such_user' : 'bad_password'}`]);
    sprayFails++;
    sprayT += ri(9, 13);
  }
}
// Line the success up with 01:41:58 local
const okTime = t(1, '01:41:58');
const shift = okTime - okAt;
for (const r of vpn) if (r[1].includes(ATTACKER)) r[0] += shift;
vpn.push([okTime, `FW-CORE sslvpn: AUTH_OK user=m.alvarez src=${ATTACKER} assigned=${VPNIP} mfa=none profile=CC-LEGACY`]);
// Morning response
vpn.push([t(1, '06:19:12'), `FW-CORE admin: CONFIG_CHANGE by=d.ortiz sslvpn profile CC-LEGACY disabled; CC-REMOTE limited to users m.reyes,d.ortiz,j.pike`]);
vpn.push([t(1, '06:19:13'), `FW-CORE sslvpn: SESSION_END user=m.alvarez assigned=${VPNIP} reason=admin_disconnect`]);
vpn.push([t(1, '06:26:40'), `FW-CORE admin: CONFIG_CHANGE by=d.ortiz block added src=${ATTACKER}`]);
vpn.push([t(1, '06:27:05'), `FW-CORE admin: CONFIG_CHANGE by=d.ortiz block added dst=${EXFIL}`]);
vpn.sort((a, b) => a[0] - b[0]);
FILES['logs/fw-core_vpn.log'] = text(vpn.map(r => stampUTC(r[0]) + ' ' + r[1]));

// ------------------------------------------------------------------ Windows security events (SIEM export, local time)
const win = [];
const W = (s, id, acct, ip, comp, detail) => win.push([s, id, acct, ip, comp, detail]);
// Tuesday business day background
Object.entries(WS).forEach(([u, [ws, ip]]) => {
  const start = t(0, pad(ri(6, 8)) + ':' + pad(ri(0, 59)) + ':' + pad(ri(0, 59)));
  if (rnd() < 0.3) W(start - ri(10, 40), 4625, u, ip, 'DC01', 'Failed logon (bad password)');
  W(start, 4624, u, ip, 'DC01', 'Logon type 3 (network)');
  if (u === 't.becker' || u === 'p.nair') W(start + ri(60, 600), 4624, u, ip, 'ENG-FS01', 'Logon type 3 (network)');
  if (u === 'r.medina') W(start + ri(60, 600), 4624, u, ip, 'FS-HR01', 'Logon type 3 (network)');
  W(t(0, pad(ri(16, 17)) + ':' + pad(ri(0, 59)) + ':' + pad(ri(0, 59))), 4634, u, ip, 'DC01', 'Logoff');
});
W(t(0, '07:02:11'), 5145, 't.becker', WS['t.becker'][1], 'DC01', 'Share \\\\*\\NETLOGON file map_drives.bat ReadData');
W(t(0, '07:44:51'), 5145, 'amanda.singh', WS['amanda.singh'][1], 'DC01', 'Share \\\\*\\NETLOGON file map_drives.bat ReadData');
W(t(0, '21:31:20'), 4624, 'd.ortiz', LEGIT['d.ortiz'], 'DC01', 'Logon type 3 (network)');
// The intrusion
W(t(1, '01:42:10'), 4624, 'm.alvarez', VPNIP, 'DC01', 'Logon type 3 (network)');
W(t(1, '01:49:12'), 5145, 'm.alvarez', VPNIP, 'DC01', 'Share \\\\*\\NETLOGON file logon_banner.txt ReadData');
W(t(1, '01:49:33'), 5145, 'm.alvarez', VPNIP, 'DC01', 'Share \\\\*\\NETLOGON file map_drives.bat ReadData');
W(t(1, '01:49:51'), 5145, 'm.alvarez', VPNIP, 'DC01', 'Share \\\\*\\NETLOGON file printers.vbs ReadData');
W(t(1, '01:53:05'), 4624, 'ccadmin', VPNIP, 'DC01', 'Logon type 3 (network)');
W(t(1, '01:53:06'), 4672, 'ccadmin', VPNIP, 'DC01', 'Special privileges assigned to new logon');
W(t(1, '01:58:41'), 4624, 'ccadmin', VPNIP, 'ENG-FS01', 'Logon type 10 (RemoteInteractive / RDP)');
W(t(1, '02:03:17'), 4720, 'ccadmin', VPNIP, 'DC01', 'A user account was created: svc_update');
W(t(1, '02:04:02'), 4728, 'ccadmin', VPNIP, 'DC01', 'Member added to security-enabled global group Domain Admins: svc_update');
// Tom Becker mistyping his new password at his desk (Lab 8.1, alert AL-10: a false positive)
[12, 19, 27, 36, 44].forEach(s => W(t(1, '06:00:00') + s, 4625, 't.becker', WS['t.becker'][1], 'DC01', 'Failed logon (bad password)'));
W(t(1, '06:01:05'), 4624, 't.becker', WS['t.becker'][1], 'DC01', 'Logon type 2 (interactive) at ENG-14');
// Response
W(t(1, '06:20:44'), 4725, 'd.ortiz', '10.99.0.10', 'DC01', 'A user account was disabled: m.alvarez');
W(t(1, '06:21:15'), 4725, 'd.ortiz', '10.99.0.10', 'DC01', 'A user account was disabled: svc_update');
W(t(1, '06:24:02'), 4724, 'd.ortiz', '10.99.0.10', 'DC01', 'An attempt was made to reset an account password: ccadmin');
win.sort((a, b) => a[0] - b[0]);
FILES['logs/windows_security.csv'] = text(['time_local,event_id,account,source_ip,computer,detail'].concat(win.map(r => [stampLocal(r[0]), r[1], r[2], r[3], r[4], r[5]].join(','))));

// ------------------------------------------------------------------ EDR events for ENG-FS01 (local time)
const edr = [];
const E = (s, user, sev, ev, detail) => edr.push([s, 'ENG-FS01', user, sev, ev, detail]);
[['t.becker', '08:12:40'], ['p.nair', '08:31:05'], ['t.becker', '13:02:17'], ['p.nair', '15:48:51']].forEach(([u, hms]) => E(t(0, hms), u, 'INFO', 'file_open', 'D:\\Projects share opened over SMB'));
E(t(0, '03:00:00') + 86400 * 0, 'SYSTEM', 'INFO', 'agent', 'EDR agent heartbeat; policy=detect-only');
E(t(0, '12:00:00'), 'SYSTEM', 'INFO', 'agent', 'EDR agent heartbeat; policy=detect-only');
E(t(0, '22:00:00'), 'SYSTEM', 'INFO', 'agent', 'EDR agent heartbeat; policy=detect-only');
E(t(0, '23:10:02'), 'SYSTEM', 'INFO', 'process_start', 'vssadmin.exe create shadow /for=D: (scheduled shadow copy)');
E(t(1, '01:58:44'), 'ccadmin', 'INFO', 'session_start', 'RDP session from ' + VPNIP);
E(t(1, '02:09:12'), 'ccadmin', 'INFO', 'file_create', 'C:\\ProgramData\\rc\\rclone.exe');
E(t(1, '02:09:30'), 'ccadmin', 'INFO', 'file_create', 'C:\\ProgramData\\rc\\rclone.conf');
E(t(1, '02:14:05'), 'ccadmin', 'LOW', 'process_start', 'rclone.exe copy D:\\Projects ccx:drop --transfers 8');
E(t(1, '03:29:51'), 'ccadmin', 'INFO', 'process_end', 'rclone.exe exit code 0');
E(t(1, '03:31:02'), 'ccadmin', 'HIGH', 'process_start', 'vssadmin.exe delete shadows /all /quiet');
E(t(1, '03:31:40'), 'ccadmin', 'HIGH', 'process_start', 'wbadmin.exe delete catalog -quiet');
E(t(1, '03:34:55'), 'ccadmin', 'INFO', 'file_create', 'C:\\ProgramData\\cc_upd.exe');
E(t(1, '03:35:20'), 'ccadmin', 'MEDIUM', 'process_start', 'cc_upd.exe -path D:\\Projects');
E(t(1, '03:36:02'), 'ccadmin', 'CRITICAL', 'behavior', 'Ransomware behavior: mass file rename to .latch by cc_upd.exe');
const JOBS = ['J24-087', 'J24-102', 'J24-118', 'J24-131', 'J25-004', 'J25-019', 'J25-033', 'J25-047', 'J25-058', 'J25-071', 'J25-090', 'J25-112', 'J26-006', 'J26-021', 'J26-044', 'J26-063'];
let encTotal = 0, rt = t(1, '03:36:30');
const batches = [];
JOBS.forEach(j => {
  const n = ri(140, 360);
  encTotal += n;
  batches.push(n);
  E(rt, 'ccadmin', 'INFO', 'file_rename_batch', `folder=D:\\Projects\\${j} renamed=${n} ext=.latch note=README_LATCH.txt`);
  rt += ri(420, 640);
});
E(t(1, '06:14:30'), 'd.ortiz', 'HIGH', 'response', 'Network isolation applied to ENG-FS01');
E(t(1, '06:15:02'), 'd.ortiz', 'HIGH', 'response', 'Process cc_upd.exe killed');
E(t(1, '06:31:10'), 'd.ortiz', 'INFO', 'process_start', 'winpmem.exe acquire memory to E:\\CC-IR-2026-01-E2\\ENG-FS01_mem.raw');
E(t(1, '06:44:52'), 'd.ortiz', 'INFO', 'process_start', 'tasklist /v and netstat -ano saved to F:\\CC-IR-2026-01-E1');
edr.sort((a, b) => a[0] - b[0]);
FILES['logs/edr_eng-fs01.csv'] = text(['time_local,host,user,severity,event,detail'].concat(edr.map(r => [stampLocal(r[0]), r[1], r[2], r[3], r[4], r[5]].join(','))));

// ------------------------------------------------------------------ FW-CORE egress flows (UTC)
const fw = [];
const NAMES = [['192.0.2.11', 'outlook.office365.com'], ['192.0.2.13', 'teams.microsoft.com'], ['192.0.2.15', 'update.microsoft.com'], ['192.0.2.80', 'app.tallgrasspayroll.com'],
  ['198.51.100.90', 'cad-license.example'], ['203.0.113.15', 'news.example'], ['203.0.113.41', 'supplier.halvorsen-pump.com']];
const SRCS = Object.values(WS).map(x => x[1]);
for (let i = 0; i < 140; i++) {
  const s = t(0, pad(ri(7, 17)) + ':' + pad(ri(0, 59)) + ':' + pad(ri(0, 59)));
  const [ip, name] = pick(NAMES);
  fw.push([s, pick(SRCS), ip, name, 443, 'tcp', ri(2, 900) * 1000, ri(5, 9000) * 1000, 'ALLOW']);
}
fw.push([t(0, '23:20:11'), HOSTS['ENG-FS01'], '192.0.2.15', 'update.microsoft.com', 443, 'tcp', 41000, 2210000, 'ALLOW']);
fw.push([t(1, '02:10:40'), HOSTS['ENG-FS01'], EXFIL, '-', 443, 'tcp', 3100, 9800, 'ALLOW']);
let exfilBytes = 3100, exfilRows = 1;
for (let s = t(1, '02:14:20'); s < t(1, '03:29:40'); s += 60) {
  const b = ri(68, 104) * 1000000 + ri(0, 999999);
  fw.push([s, HOSTS['ENG-FS01'], EXFIL, '-', 443, 'tcp', b, ri(200, 900) * 1000, 'ALLOW']);
  exfilBytes += b; exfilRows++;
}
for (let i = 0; i < 6; i++) {
  const s = t(1, '05:' + pad(ri(30, 59)) + ':' + pad(ri(0, 59)));
  fw.push([s, pick(SRCS), '192.0.2.11', 'outlook.office365.com', 443, 'tcp', ri(2, 90) * 1000, ri(5, 900) * 1000, 'ALLOW']);
}
fw.sort((a, b) => a[0] - b[0]);
FILES['logs/fw-core_egress.csv'] = text(['time_utc,src_ip,dst_ip,dst_name,dst_port,proto,bytes_out,bytes_in,action'].concat(fw.map(r => [stampUTC(r[0])].concat(r.slice(1)).join(','))));

// ------------------------------------------------------------------ IT share copy (the script the attacker read)
FILES['it/netlogon_copy/map_drives.bat'] = text([
  '@echo off',
  'rem Maps department drives at logon. Written 2017. Do not edit without asking IT.',
  'rem Fixed the HR mapping after the server move - DO',
  'net use H: \\\\FS-HR01\\Company /persistent:no',
  'net use P: \\\\ENG-FS01\\Drawings /persistent:no',
  'rem Older PCs lose the mapping, so map as the IT account:',
  'net use S: \\\\ENG-FS01\\Scans /user:CEDARCREEK\\ccadmin [PASSWORD REMOVED FROM LAB PACK] /persistent:no',
  'exit'
]);
FILES['it/netlogon_copy/logon_banner.txt'] = text(['Cedar Creek Industries systems are for authorized business use only.', 'Activity is monitored. See the Acceptable Use Policy.']);
FILES['it/netlogon_copy/printers.vbs'] = text(['\' Adds the office printers at logon', 'Set net = CreateObject("WScript.Network")', 'net.AddWindowsPrinterConnection "\\\\PRINT01\\Office-2F"', 'net.AddWindowsPrinterConnection "\\\\PRINT01\\Office-1F"']);

// ------------------------------------------------------------------ evidence collected from ENG-FS01
const ransom = text([
  '----------  IRONLATCH  ----------',
  '',
  'Your files on this server are encrypted. The extension is .latch.',
  'Do not rename them, do not run recovery tools, do not call the police.',
  'We also COPIED your project files before we started. Your customers\' drawings',
  'will be posted on our news site if you do not contact us within 72 hours.',
  '',
  'Price for the key and for deleting our copy: 650,000 USD in bitcoin.',
  'Contact us at the address in the attached file.  [contact details removed for training]',
  '',
  'Your ID: CC-7Q2M-91XA'
]);
const procs = text([
  'Collected 2026-12-23 06:44 by d.ortiz (tasklist /v, trimmed)',
  'Image Name                     PID Session Name   User Name',
  '========================= ======== ============== ====================',
  'System                           4 Services       NT AUTHORITY\\SYSTEM',
  'lsass.exe                      712 Services       NT AUTHORITY\\SYSTEM',
  'svchost.exe                   1044 Services       NT AUTHORITY\\NETWORK SERVICE',
  'edr-agent.exe                 2210 Services       NT AUTHORITY\\SYSTEM',
  'rdpclip.exe                   5120 RDP-Tcp#3      CEDARCREEK\\ccadmin',
  'explorer.exe                  5388 RDP-Tcp#3      CEDARCREEK\\ccadmin',
  'cmd.exe                       6012 RDP-Tcp#3      CEDARCREEK\\ccadmin',
  'tasklist.exe                  7440 Console        CEDARCREEK\\d.ortiz'
]);
const netOrig = text([
  'Collected 2026-12-23 06:44 by d.ortiz (netstat -ano, trimmed)',
  '  Proto  Local Address          Foreign Address        State           PID',
  '  TCP    10.30.4.10:445         0.0.0.0:0              LISTENING       4',
  '  TCP    10.30.4.10:3389        0.0.0.0:0              LISTENING       1044',
  '  TCP    10.30.4.10:3389        10.250.0.37:51544      CLOSE_WAIT      1044'
]);
const netEdited = netOrig + 'checked this - looks fine. JP\n';
const sample = text(['TRAINING PLACEHOLDER. This is not malware.', 'In the real incident this file was cc_upd.exe, copied from C:\\ProgramData on ENG-FS01.', 'Real malware samples are stored in a password-protected archive and never opened on a normal PC.']);
FILES['evidence/README_LATCH.txt'] = ransom;
FILES['evidence/ENG-FS01_processes.txt'] = procs;
FILES['evidence/ENG-FS01_netconns.txt'] = netEdited;
FILES['evidence/cc_upd.exe.placeholder.txt'] = sample;
FILES['evidence/SHA256SUMS.txt'] = text([
  sha256(ransom) + '  README_LATCH.txt',
  sha256(procs) + '  ENG-FS01_processes.txt',
  sha256(netOrig) + '  ENG-FS01_netconns.txt',
  sha256(sample) + '  cc_upd.exe.placeholder.txt'
]);
FILES['evidence/chain_of_custody_CC-IR-2026-01.txt'] = text([
  'CEDAR CREEK INDUSTRIES - EVIDENCE CHAIN OF CUSTODY',
  'Incident: CC-IR-2026-01 (ransomware, ENG-FS01)',
  '',
  'ITEM E1: USB drive, SanDisk 32 GB, serial 4C53 0001 7712, labeled CC-IR-2026-01-E1',
  '  Contents: ENG-FS01_processes.txt, ENG-FS01_netconns.txt, README_LATCH.txt, copy of cc_upd.exe',
  '  Hashes recorded at collection: SHA256SUMS.txt (on the drive)',
  'ITEM E2: External hard drive, WD 2 TB, serial WX42A1, labeled CC-IR-2026-01-E2',
  '  Contents: ENG-FS01_mem.raw (memory image, 16 GB)',
  '',
  'Date        Time   Item  Released by         Received by         Purpose                         Signatures',
  '----------  -----  ----  ------------------  ------------------  ------------------------------  ----------',
  '2026-12-23  06:31  E2    (collected)         Dee Ortiz           Memory image of ENG-FS01        DO',
  '2026-12-23  06:52  E1    (collected)         Dee Ortiz           Triage files from ENG-FS01      DO',
  '2026-12-23  07:10  E1    Dee Ortiz           Jordan Pike         Review on help desk PC          DO / (blank)',
  '2026-12-23  07:15  E2    Dee Ortiz           Marcus Reyes        Lock in IT office safe          DO / MR',
  '2026-12-23  16:45  E1    (not recorded)      Marcus Reyes        Lock in IT office safe          MR',
  '',
  'Notes:',
  '- E1 was found on the help desk counter at 16:40 by Marcus.',
  '- Jordan says he opened the files on the help desk PC to "take a look".'
]);

// ------------------------------------------------------------------ notes
FILES['notes/marcus_handoff.txt'] = text([
  'From: Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Sent: Wednesday, December 23, 2026 07:35',
  'Subject: ENG-FS01 - incident CC-IR-2026-01 - please build the timeline',
  '',
  'Thanks for catching this at 6. Here is where we are.',
  '',
  '- Dee isolated ENG-FS01 at 06:14 and killed the encryption process.',
  '- CC-LEGACY is off and the VPN is IT-only until further notice. Accounts',
  '  m.alvarez and svc_update are disabled. The ccadmin password was reset.',
  '- This one is a declared incident, not a cleanup like last weekend\'s',
  '  laptop. It is our first: CC-IR-2026-01.',
  '- Dee took a memory image and some triage files before touching anything',
  '  else (items E1 and E2, see the custody sheet in evidence/).',
  '- Greg wants a plain-English summary by 3 PM. I have to call our insurance',
  '  company and probably the FBI.',
  '',
  'I need from you:',
  '1. A timeline: how they got in, what they touched, what they took, and when.',
  '2. Check that the evidence files have not been changed since Dee hashed them.',
  '3. Look over the custody sheet. Jordan was helping and I do not think he',
  '   knew the rules.',
  '',
  'Log times: FW-CORE logs are in UTC. The Windows and EDR exports are in local',
  'time (Central, which is UTC-6 in December). Keep that straight.',
  '',
  'Marcus'
]);
FILES['notes/backup_status.txt'] = text([
  'ENG-FS01 backup status - Dee Ortiz, 2026-12-23 08:05',
  '',
  'Weekly full backup to LTO tape every Friday at 22:00.',
  'Last good tape: Friday 2026-12-18, job finished 23:47. Verified OK.',
  'The tape was on the shelf in the server room, not in the drive, so the',
  'attacker could not reach it. It is our only clean copy.',
  '',
  'Windows shadow copies on D: (taken nightly at 23:10) were deleted by the',
  'attacker at 03:31. The backup catalog was also deleted (wbadmin).',
  '',
  'D:\\Projects holds about 41,900 files.',
  '',
  'Restore plan:',
  '  Rebuild ENG-FS01 from a clean image ............ about 5 hours',
  '  Restore D:\\Projects from the Friday tape ........ about 9 hours',
  '  Copy back files changed since Friday that were',
  '  NOT encrypted, after a malware scan ............. about 2 hours',
  '',
  'Tom Becker says Engineering can work from paper and local copies for one',
  'day at most. After 24 hours, Line 2 starts running out of released drawings.'
]);
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'Incident CC-IR-2026-01 - evidence pack - Week 8 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'Overnight on Wednesday, December 23, 2026, files on the engineering file',
  'server ENG-FS01 were encrypted by ransomware. This pack holds the logs and',
  'evidence the IT team collected that morning.',
  '',
  'Cedar Creek Industries and every person, address, and system named in',
  'these files are fictional. They were made for MCCoE training labs.',
  'All IP addresses are from ranges reserved for documentation and testing.',
  'No file in this pack is malware.',
  '',
  'What is inside',
  '--------------',
  'notes/      Marcus\'s handoff email and Dee\'s backup status note',
  'logs/       fw-core_vpn.log       VPN logins and firewall changes (UTC)',
  '            windows_security.csv  Windows security events (local time)',
  '            edr_eng-fs01.csv      EDR events from ENG-FS01 (local time)',
  '            fw-core_egress.csv    Outbound traffic through FW-CORE (UTC)',
  'it/         A copy of the NETLOGON scripts every user runs at logon',
  'evidence/   Triage files from ENG-FS01, their hashes, and the custody sheet',
  '',
  'Lab 8.2 walks you through the investigation. Lab 8.3 uses your findings',
  'to write the incident report.'
]);

// ------------------------------------------------------------------ write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ------------------------------------------------------------------ zip (forward-slash paths, Unix perms), same writer as Week 1
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (12 << 5) | 23;
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
const dirs = [...new Set(names.filter(n => n.includes('/')).flatMap(n => { const p = n.split('/'); const out = []; for (let i = 1; i < p.length; i++) out.push(p.slice(0, i).join('/') + '/'); return out; }))].sort();
const entries = [{ name: ZIP_ROOT, data: null }]
  .concat(dirs.map(d => ({ name: ZIP_ROOT + d, data: null })))
  .concat(names.map(n => ({ name: ZIP_ROOT + n, data: Buffer.from(FILES[n], 'utf8') })));
fs.writeFileSync(ZIP, makeZip(entries));

// ------------------------------------------------------------------ answers (computed the way a student would)
const lines = f => FILES[f].split('\n').filter(Boolean);
const vpnL = lines('logs/fw-core_vpn.log');
const atk = vpnL.filter(l => l.includes(ATTACKER));
const okLine = vpnL.find(l => l.includes('AUTH_OK') && l.includes(ATTACKER));
const edrL = lines('logs/edr_eng-fs01.csv');
const fwL = lines('logs/fw-core_egress.csv').slice(1).map(l => l.split(','));
const sumOut = fwL.filter(r => r[2] === EXFIL).reduce((a, r) => a + Number(r[6]), 0);
const renamed = edrL.filter(l => l.includes('file_rename_batch')).reduce((a, l) => a + Number((l.match(/renamed=(\d+)/) || [])[1]), 0);
const check = Object.entries(FILES).filter(([n]) => n.startsWith('evidence/') && !/SHA256SUMS|chain_of/.test(n))
  .map(([n, body]) => { const name = n.split('/')[1]; const want = (FILES['evidence/SHA256SUMS.txt'].split('\n').find(l => l.endsWith('  ' + name)) || '').split(' ')[0]; return name + ': ' + (want === sha256(body) ? 'OK' : 'FAILED'); });
const out = {
  '8.2': {
    vpn_lines: vpnL.length,
    auth_fail_all: vpnL.filter(l => l.includes('AUTH_FAIL')).length,
    attacker_fails: atk.filter(l => l.includes('AUTH_FAIL')).length,
    attacker_users_distinct: new Set(atk.filter(l => l.includes('AUTH_FAIL')).map(l => l.match(/user=(\S+)/)[1])).size,
    spray_first: atk[0].slice(0, 20), spray_ok: okLine,
    no_such_user_distinct: new Set(atk.filter(l => l.includes('no_such_user')).map(l => l.match(/user=(\S+)/)[1])).size,
    vpnip_windows_lines: lines('logs/windows_security.csv').filter(l => l.includes(VPNIP)).length,
    exfil_rows: fwL.filter(r => r[2] === EXFIL).length,
    exfil_bytes: sumOut, exfil_gb_1dp: (sumOut / 1e9).toFixed(1),
    encrypted_files: renamed, folders: JOBS.length,
    edr_high_or_critical: edrL.filter(l => /,(HIGH|CRITICAL),/.test(l)).length,
    sha256_check: check
  },
  '8.3': {
    rpo_hours_floor: Math.floor((t(1, '03:36:02') - (t(0, '23:47:00') - 4 * 86400)) / 3600),
    restore_hours: 5 + 9 + 2,
    pct_encrypted: (renamed / 41900 * 100).toFixed(1)
  }
};
console.log(JSON.stringify(out, null, 2));
