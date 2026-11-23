// Builds the Week 5 Cedar Creek lab pack (assets/cedarcreek/week5/) and its zip
// (assets/cedarcreek/cc-week5.zip, root folder cedarcreek-week5/).
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week5_pack.js
// Prints the auto-check answers for Labs 5.1 and 5.2 (course-w5-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week5');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week5.zip');
const ZIP_ROOT = 'cedarcreek-week5/';

let seed = 50511;
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const ri = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const pick = a => a[Math.floor(rnd() * a.length)];
const pad = n => String(n).padStart(2, '0');
const stamp = (day, secs) => '2026-12-' + pad(day) + 'T' + pad(Math.floor(secs / 3600)) + ':' + pad(Math.floor(secs / 60) % 60) + ':' + pad(secs % 60);
const text = lines => lines.join('\n') + '\n';
const sha256 = s => crypto.createHash('sha256').update(Buffer.from(s, 'utf8')).digest('hex');

const FILES = {};

FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'Week 5 lab pack: vulnerability scan and threat hunting files',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'Cedar Creek Industries and every person, host, and address named in these',
  'files are fictional. They were made for MCCoE training labs. Attacker and home',
  'IP addresses come from ranges reserved for documentation, and every',
  '"malicious" domain ends in example.net, example.org, or example.com, which',
  'are reserved names that cannot belong to anyone.',
  '',
  'What is inside',
  '--------------',
  'scans/       Dee\'s first vulnerability scan export and her notes (Lab 5.1)',
  'context/     What each scanned asset does and how exposed it is (Lab 5.1)',
  'intel/       Indicators of compromise shared by the Heartland Manufacturing ISAC (Lab 5.2)',
  'logs/        FW-CORE web proxy and VPN logs, and the DHCP lease list (Lab 5.2)',
  'quarantine/  Safe placeholder copies of files the EDR collected (Lab 5.2)',
  'sim/         A harmless process simulation for Lab 5.2. Run it only when the lab tells you to.',
  '',
  'Nothing in this pack is malware. The quarantine files are plain text.'
]);

// ---------------------------------------------------------------- Lab 5.1: scan export
const H = {
  DC01: '10.10.1.10', 'FS-HR01': '10.20.6.15', 'ENG-FS01': '10.30.4.10', 'ENG-APP02': '10.30.4.22',
  'PLANT-PC-07': '10.40.2.57', 'TIMECLOCK-01': '10.40.0.20', 'FW-CORE': '10.99.0.1', 'IT-ADMIN-01': '10.99.0.10',
  'NVR-01': '10.99.0.15', 'BADGE-CTRL': '10.99.0.16', 'FIN-LT-09': '10.20.6.41', 'FW-CORE-EXT': '198.51.100.24'
};
const F = (id, host, port, proto, sev, cvss, cve, exploit, finding, solution) =>
  [id, H[host], host === 'FW-CORE-EXT' ? 'FW-CORE' : host, port, proto, sev, cvss, cve, exploit, finding, solution];
const SCAN = [
  F(1001, 'PLANT-PC-07', 445, 'tcp', 'High', '8.1', 'CVE-2017-0144', 'yes', 'MS17-010 SMBv1 remote code execution (EternalBlue)', 'Apply Microsoft update MS17-010 and disable SMBv1'),
  F(1002, 'PLANT-PC-07', 3389, 'tcp', 'Critical', '9.8', 'CVE-2019-0708', 'yes', 'Remote Desktop Services remote code execution (BlueKeep)', 'Apply the May 2019 Microsoft update; disable RDP or require Network Level Authentication'),
  F(1003, 'PLANT-PC-07', 0, 'tcp', 'Critical', '10.0', '', 'no', 'Microsoft Windows 7 unsupported version detected', 'Upgrade to a supported operating system or isolate the host'),
  F(1004, 'PLANT-PC-07', 445, 'tcp', 'Medium', '5.3', '', 'no', 'SMB version 1 protocol enabled', 'Disable SMBv1'),
  F(1005, 'ENG-APP02', 0, 'tcp', 'Critical', '10.0', '', 'no', 'Microsoft Windows Server 2012 R2 unsupported version detected', 'Upgrade to a supported operating system or isolate the host'),
  F(1006, 'ENG-APP02', 445, 'tcp', 'Medium', '5.3', '', 'no', 'SMB signing not required', 'Require SMB signing by Group Policy'),
  F(1007, 'ENG-APP02', 3389, 'tcp', 'Medium', '6.5', '', 'no', 'TLS 1.0 enabled on Remote Desktop', 'Disable TLS 1.0 and TLS 1.1'),
  F(1008, 'FS-HR01', 445, 'tcp', 'High', '8.8', 'CVE-2021-34527', 'yes', 'Windows Print Spooler remote code execution (PrintNightmare)', 'Apply the July 2021 Microsoft update; stop and disable the Print Spooler service if the server does not print'),
  F(1009, 'FS-HR01', 445, 'tcp', 'Medium', '5.3', '', 'no', 'SMB signing not required', 'Require SMB signing by Group Policy'),
  F(1010, 'ENG-FS01', 445, 'tcp', 'Medium', '5.3', '', 'no', 'SMB signing not required', 'Require SMB signing by Group Policy'),
  F(1011, 'DC01', 0, 'icmp', 'Low', '2.1', 'CVE-1999-0524', 'no', 'ICMP timestamp request remote date disclosure', 'Block ICMP timestamp requests at the host firewall'),
  F(1012, 'DC01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Print Spooler service running on a domain controller', 'Disable the Print Spooler service on domain controllers'),
  F(1013, 'NVR-01', 80, 'tcp', 'Critical', '9.8', '', 'yes', 'Web admin login accepts default credentials (admin with a blank password)', 'Set a strong unique admin password; allow the web interface only from the management network'),
  F(1014, 'NVR-01', 443, 'tcp', 'High', '7.5', 'CVE-2014-0160', 'yes', 'OpenSSL heartbeat information disclosure (Heartbleed)', 'Update the recorder firmware; ask the vendor for a fixed version'),
  F(1015, 'NVR-01', 80, 'tcp', 'Medium', '4.3', '', 'no', 'Web login page served over cleartext HTTP', 'Serve the web interface over HTTPS only'),
  F(1016, 'BADGE-CTRL', 80, 'tcp', 'Medium', '5.3', '', 'no', 'Web login page served over cleartext HTTP', 'Serve the web interface over HTTPS only'),
  F(1017, 'BADGE-CTRL', 23, 'tcp', 'Medium', '6.5', '', 'no', 'Telnet service enabled', 'Disable Telnet; use SSH for remote management'),
  F(1018, 'TIMECLOCK-01', 23, 'tcp', 'Medium', '6.5', '', 'no', 'Telnet service enabled', 'Disable Telnet; use SSH for remote management'),
  F(1019, 'TIMECLOCK-01', 161, 'udp', 'High', '7.5', '', 'yes', 'SNMP agent uses the default community name public', 'Change the community name or disable SNMP; use SNMPv3'),
  F(1020, 'FW-CORE-EXT', 443, 'tcp', 'Medium', '6.5', '', 'no', 'SSL VPN portal accepts TLS 1.0 and TLS 1.1', 'Disable TLS 1.0 and TLS 1.1 on the VPN portal'),
  F(1021, 'FW-CORE-EXT', 22, 'tcp', 'Medium', '5.3', '', 'no', 'SSH banner reports an outdated OpenSSH version (banner check only)', 'Confirm the installed version with the vendor; update the firewall firmware'),
  F(1022, 'FIN-LT-09', 0, 'tcp', 'Critical', '10.0', '', 'no', 'Microsoft Office 2016 unsupported version detected', 'Upgrade to a supported version of Microsoft Office'),
  F(1023, 'IT-ADMIN-01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Operating system identified: Windows 11 Pro', 'None'),
  F(1030, 'DC01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1031, 'FS-HR01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1032, 'ENG-FS01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1033, 'ENG-APP02', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1034, 'IT-ADMIN-01', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1035, 'FIN-LT-09', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks succeeded', 'None'),
  F(1036, 'PLANT-PC-07', 0, 'tcp', 'Info', '0.0', '', 'no', 'Credentialed checks not attempted (plant safe-scan rule)', 'None')
];
SCAN.forEach(r => r.forEach(c => { if (String(c).includes(',')) throw new Error('comma in field: ' + c); }));
FILES['scans/cc_scan_2026-12-04.csv'] = text(['id,ip,host,port,proto,severity,cvss,cve,exploit,finding,solution'].concat(SCAN.map(r => r.join(','))));

FILES['scans/cvss_vectors.txt'] = text([
  'CVSS v3.x base vectors for the findings that have a CVE (copied from the NVD entries)',
  'Scores below 4.0 or without a CVE are scored by the scanner and have no vector here.',
  '',
  'CVE-2017-0144   8.1  CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H',
  'CVE-2019-0708   9.8  CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
  'CVE-2021-34527  8.8  CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
  'CVE-2014-0160   7.5  CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N',
  '',
  'Key: AV attack vector (N network, A adjacent, L local, P physical)',
  '     AC attack complexity (L low, H high)',
  '     PR privileges required (N none, L low, H high)',
  '     UI user interaction (N none, R required)',
  '     S  scope (U unchanged, C changed)',
  '     C/I/A impact on confidentiality, integrity, availability (H high, L low, N none)'
]);

FILES['scans/scan_notes_dee.txt'] = text([
  'From: Dee Ortiz <d.ortiz@cedarcreek-ind.com>',
  'To: you',
  'Cc: Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Date: Fri, 4 Dec 2026 17:52',
  'Subject: First vulnerability scan - export attached',
  '',
  'Here is our first real vulnerability scan. I ran Greenbone (OpenVAS) from the',
  'scanner VM, VULN-SCAN01 (10.99.0.50), on the management network.',
  '',
  'Scope:',
  '- Servers, management devices, and two sample PCs (IT-ADMIN-01, FIN-LT-09).',
  '- PLANT-PC-07 and TIMECLOCK-01 on the plant network. Walt approved this only',
  '  if I used "safe checks" and no logins, after second shift ended. So those',
  '  two were scanned without credentials.',
  '- One external scan of our internet address, 198.51.100.24 (FW-CORE).',
  '',
  'Credentialed scans log in to the host and read the installed software and',
  'patches directly, so they are more accurate. Uncredentialed scans can only',
  'guess from what the host shows on the network, such as a version banner.',
  '',
  'Things I already know:',
  '- Finding 1021 on FW-CORE: the vendor told me firmware 7.2.5 (what we run)',
  '  keeps the old OpenSSH version number in its banner but includes the fixes.',
  '  See context/fw-core_vendor_reply.txt. I think the scanner is wrong there.',
  '- Servers are not on the "2nd Tuesday + 7 days" schedule. That schedule is for',
  '  office PCs through WSUS. I patch servers by hand when I can get a window.',
  '  Some have slipped. I know.',
  '- PLANT-PC-07 runs the Line 2 HMI software on a Windows 7 image the line',
  '  vendor certified. Walt says the vendor will not support it if we patch it',
  '  ourselves. Their technician uses Remote Desktop when he is on site.',
  '',
  'Can you triage this for Marcus? He wants the top five things to fix first, and',
  'why, not just the list sorted by score.',
  '',
  'Dee'
]);

FILES['context/asset_context.csv'] = text([
  'host,ip,role,owner,criticality,exposure,notes',
  'FW-CORE,10.99.0.1 / 198.51.100.24,Perimeter firewall and SSL VPN portal,Marcus Reyes,Critical,Internet-facing,VPN portal is open to the internet for remote staff',
  'DC01,10.10.1.10,Domain controller (Active Directory and DNS),Dee Ortiz,Critical,Internal,Every login depends on it',
  'ENG-FS01,10.30.4.10,Engineering file server (CAD drawings and customer specs),Tom Becker,Critical,Internal,Crown jewels',
  'ENG-APP02,10.30.4.22,CAD license and product data server,Tom Becker,Critical,Internal,Windows Server 2012 R2; CAD license server will not run on a newer OS yet',
  'FS-HR01,10.20.6.15,HR file server (personnel files and payroll exports),Rosa Medina,High,Internal,Any domain user can reach its shares',
  'PLANT-PC-07,10.40.2.57,Line 2 HMI and operator PC,Walt Henley,Critical,Internal (plant network; reachable from office network),Vendor-certified Windows 7 image; downtime stops Line 2',
  'TIMECLOCK-01,10.40.0.20,Badge time-clock kiosk,Rosa Medina,Medium,Internal (plant network),Feeds hours to payroll',
  'NVR-01,10.99.0.15,Camera recorder (16 cameras),Jordan Pike,Medium,Internal (management network; reachable from office network),Holds the only copy of camera footage',
  'BADGE-CTRL,10.99.0.16,Badge access controller and badge database,Jordan Pike,High,Internal (management network; reachable from office network),Controls every badge door on campus',
  'IT-ADMIN-01,10.99.0.10,IT admin workstation,Marcus Reyes,Critical,Internal,Used for domain admin work',
  'FIN-LT-09,10.20.6.41,Finance laptop,Greg Palmer (dept.),High,Leaves the building; connects by VPN,Used for payments and wire approvals'
]);

FILES['context/fw-core_vendor_reply.txt'] = text([
  'From: support@fw-vendor.example.com',
  'To: d.ortiz@cedarcreek-ind.com',
  'Date: Thu, 3 Dec 2026 14:10',
  'Subject: RE: Case 88213 - SSH version banner',
  '',
  'Hello Dee,',
  '',
  'Firmware 7.2.5 keeps the original OpenSSH version string in the SSH banner for',
  'compatibility. The security fixes for that OpenSSH version were backported into',
  'the 7.2.5 build. Scanners that judge only by the banner will report the old',
  'version as vulnerable. You can confirm the build in the management console under',
  'System > Firmware: 7.2.5 build 3311 or later includes the fixes.',
  '',
  'Separately, we recommend that SSH management not be reachable from the internet.',
  '',
  'Regards,',
  'Vendor Support'
]);

// ---------------------------------------------------------------- Lab 5.2: intel, logs, quarantine, sim
const Q = {
  'chrome_update_131.exe.sample': 'MCCoE TRAINING PLACEHOLDER - NOT MALWARE\nStands in for the file the EDR quarantined on ENG-12 on 2026-12-07 at 10:44.\nOriginal name: chrome_update_131.exe\nSource URL: http://browser-update-cdn.example.net/chrome_update_131.exe\n',
  'drawing_viewer_setup.msi.sample': 'MCCoE TRAINING PLACEHOLDER - NOT MALWARE\nStands in for a CAD viewer installer an engineer downloaded from the vendor site.\nThe EDR flagged it as unsigned. It is a known, approved tool.\n',
  'invoice_88231.htm.sample': 'MCCoE TRAINING PLACEHOLDER - NOT MALWARE\nStands in for an email attachment reported by Accounts Payable.\nIt opened a fake sign-in page. The web filter blocked the page.\n',
  'line2_recipe_backup.zip.sample': 'MCCoE TRAINING PLACEHOLDER - NOT MALWARE\nStands in for a recipe backup copied from PLANT-PC-07 by the line vendor.\nThe EDR flagged it because it was copied from a USB drive.\n'
};
for (const [n, body] of Object.entries(Q)) FILES['quarantine/' + n] = body;
const LOADER_HASH = sha256(Q['chrome_update_131.exe.sample']);
const EICAR = '275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f';
const FAKE_HASH = sha256('ironlatch encryptor sample 2026-11 (not in this pack)');

FILES['intel/isac_ironlatch_iocs_2026-12-07.txt'] = text([
  '# Heartland Manufacturing ISAC - IRONLATCH indicator update',
  '# TLP:AMBER - share only inside your organization, with people who need it',
  '# Date: 2026-12-07   Confidence: high',
  '# Affiliates now also use fake browser-update downloads, besides VPN password spraying.',
  '# One indicator per line. Lines that start with # are comments.',
  '',
  '# SHA-256 hashes',
  LOADER_HASH,
  FAKE_HASH,
  '# The next hash is the EICAR anti-malware test file, added so members can test their tools.',
  EICAR,
  '',
  '# Domains',
  'browser-update-cdn.example.net',
  'secure-docshare.example.org',
  'pay-ironlatch.example.com',
  '',
  '# IP addresses',
  '203.0.113.45',
  '203.0.113.77',
  '203.0.113.130'
]);

const DHCP = [
  ['10.20.6.41', 'FIN-LT-09'], ['10.20.6.22', 'HR-03'], ['10.20.6.24', 'AP-02'], ['10.20.6.27', 'FIN-04'],
  ['10.20.30.9', 'ENG-09'], ['10.20.30.12', 'ENG-12'], ['10.20.30.14', 'ENG-14'], ['10.20.30.17', 'ENG-17'], ['10.20.30.21', 'ENG-21'],
  ['10.20.8.11', 'MKT-01'], ['10.20.8.13', 'MKT-03'], ['10.20.10.5', 'CS-02'], ['10.20.10.7', 'CS-04'], ['10.20.10.9', 'PUR-01'],
  ['10.20.12.3', 'RECEPTION-01'], ['10.20.12.8', 'CONF-RM-1'], ['10.20.14.20', 'SHIP-01'], ['10.20.14.21', 'SHIP-02'],
  ['10.20.16.4', 'PLANT-OFFICE-01'], ['10.20.16.6', 'PLANT-OFFICE-02']
];
FILES['logs/dhcp_leases_2026-12-07.csv'] = text(['ip,hostname,mac,lease_start'].concat(DHCP.map(([ip, h], i) =>
  [ip, h, '3c:52:82:' + pad(10 + i) + ':' + pad(ri(10, 99)) + ':' + pad(ri(10, 99)), '2026-12-07T0' + ri(6, 8) + ':' + pad(ri(0, 59)) + ':' + pad(ri(0, 59))].join(','))));

const NORMAL = [
  ['outlook.office.com', '/mail/', '13.107.42.11'], ['teams.microsoft.com', '/api/chat', '52.112.0.9'], ['cedarcreek.sharepoint.com', '/sites/eng/', '13.107.136.9'],
  ['www.weather.gov', '/sgf/', '23.200.0.17'], ['www.autodesk.com', '/support/', '18.160.10.4'], ['login.microsoftonline.com', '/common/oauth2', '20.190.151.7'],
  ['www.google.com', '/search', '142.250.0.100'], ['www.linkedin.com', '/feed/', '13.107.42.14'], ['update.microsoft.com', '/v6/', '13.107.4.50'],
  ['www.fedex.com', '/tracking', '23.40.0.12'], ['www.ups.com', '/track', '23.41.0.20'], ['app.tallgrasspayroll.com', '/login', '192.0.2.80']
];
const proxy = [];
for (let i = 0; i < 260; i++) {
  const secs = ri(7 * 3600, 17 * 3600);
  const [ip] = pick(DHCP);
  const [host, p, dst] = pick(NORMAL);
  proxy.push({ secs, line: `src=${ip} method=GET url=https://${host}${p} dst_ip=${dst} status=200 bytes=${ri(800, 90000)} action=allowed` });
}
proxy.push({ secs: 10 * 3600 + 41 * 60 + 7, line: 'src=10.20.30.12 method=GET url=http://browser-update-cdn.example.net/chrome_update_131.exe dst_ip=203.0.113.77 status=200 bytes=482304 action=allowed' });
proxy.push({ secs: 10 * 3600 + 42 * 60 + 39, line: 'src=10.20.30.12 method=POST url=http://browser-update-cdn.example.net/api/check dst_ip=203.0.113.77 status=200 bytes=312 action=allowed' });
proxy.push({ secs: 13 * 3600 + 18 * 60 + 52, line: 'src=10.20.6.41 method=GET url=https://secure-docshare.example.org/inv/88231/login dst_ip=203.0.113.130 status=403 bytes=0 action=blocked category=phishing' });
proxy.sort((a, b) => a.secs - b.secs);
FILES['logs/proxy_2026-12-07.log'] = text(proxy.map(r => stamp(7, r.secs) + ' FW-CORE webfilter: ' + r.line));

const STAFF = ['g.palmer', 'm.reyes', 'd.ortiz', 'j.pike', 'l.kim', 'amanda.singh', 'd.reyes', 'n.brooks', 'k.tran', 'c.benson', 'r.dempsey',
  'j.ford', 'i.mcbride', 'r.doyle', 'd.hale', 'n.quinn', 'p.archer', 't.lund', 'b.sato', 'g.rowe', 'r.medina', 't.greene', 'p.whitaker',
  't.becker', 'p.nair', 's.ortega', 'l.fischer', 'o.gallagher', 'r.imes', 'v.chu', 'm.holt', 'w.henley', 'm.alvarez', 'g.lindqvist'];
const vpn = [];
// normal remote work, Sun 6 Dec evening and Mon 7 Dec early morning.
// Only VPN-Users members (Week 3, plus the three added 2026-12-01), from their home addresses (docs/CEDAR_CREEK.md).
// CC-REMOTE needs a push approval; CC-LEGACY takes a password alone.
const VPN_HOME = {
  'd.ortiz': '203.0.113.38', 'j.pike': '203.0.113.11', 'k.tran': '192.0.2.197', 'l.kim': '192.0.2.78', 'm.reyes': '192.0.2.244',
  'p.nair': '203.0.113.47', 'r.dempsey': '203.0.113.240', 's.ortega': '203.0.113.233', 'v.chu': '192.0.2.67', 'w.henley': '192.0.2.216',
  'g.palmer': '192.0.2.41', 't.becker': '192.0.2.118', 'm.alvarez': '198.51.100.137', 'r.medina': '198.51.100.129', 'amanda.singh': '198.51.100.150'
};
const LEGACY_USERS = ['g.palmer', 't.becker', 'm.alvarez', 'r.medina', 'amanda.singh'];
const VPN_STAFF = Object.keys(VPN_HOME);
for (let i = 0; i < 46; i++) {
  const day = rnd() < 0.5 ? 6 : 7;
  const secs = day === 6 ? ri(17 * 3600, 23 * 3600) : ri(5 * 3600, 8 * 3600);
  const u = pick(VPN_STAFF);
  ri(10, 250);
  const src = VPN_HOME[u];
  const how = LEGACY_USERS.includes(u) ? 'profile=CC-LEGACY mfa=none' : 'profile=CC-REMOTE mfa=push';
  if (rnd() < 0.12) vpn.push({ day, secs: secs - ri(20, 90), line: `login failed user=${u} src=${src} reason=bad_password` });
  vpn.push({ day, secs, line: `login ok user=${u} src=${src} ${how}` });
}
// password spray: one attempt per account, many accounts, one source
const SPRAY_USERS = STAFF.filter((u, i) => i % 3 !== 1).concat(['b.kessler']).concat(['admin', 'test', 'scanner', 'helpdesk', 'j.smith']);
const sprayed = SPRAY_USERS.slice().sort(() => rnd() - 0.5);
let t = 2 * 3600 + 3 * 60;
for (const u of sprayed) {
  t += ri(35, 75);
  const known = STAFF.includes(u) || u === 'b.kessler';
  vpn.push({ day: 7, secs: t, line: `login failed user=${u} src=203.0.113.45 reason=${known ? 'bad_password' : 'unknown_user'}` });
}
// brute force: one account, many tries, another source
let t2 = 3 * 3600 + 30 * 60;
for (let i = 0; i < 24; i++) { t2 += ri(2, 6); vpn.push({ day: 7, secs: t2, line: 'login failed user=vpnadmin src=203.0.113.201 reason=unknown_user' }); }
vpn.sort((a, b) => a.day - b.day || a.secs - b.secs);
FILES['logs/vpn_auth_2026-12-06_07.log'] = text(vpn.map(r => stamp(r.day, r.secs) + ' FW-CORE sslvpn: ' + r.line));

FILES['sim/start_sim.sh'] = text([
  '#!/bin/bash',
  '# MCCoE Lab 5.2 training simulation. Harmless.',
  '# It starts one background loop that writes a line of text to a log file every 5 seconds.',
  '# It sends nothing over the network and changes nothing outside /tmp/.cache-upd.',
  'mkdir -p /tmp/.cache-upd',
  "cat > /tmp/.cache-upd/.u.sh <<'EOF'",
  'while true; do',
  '  echo "$(date +%Y-%m-%dT%H:%M:%S) check-in to browser-update-cdn.example.net/api/check (simulated: nothing is sent)" >> /tmp/.cache-upd/upd.log',
  '  sleep 5',
  'done',
  'EOF',
  "nohup bash -c \"exec -a '[kworker/u8:3]' bash /tmp/.cache-upd/.u.sh\" >/dev/null 2>&1 &",
  'echo "Simulation started. Go back to the lab page."'
]);
FILES['sim/stop_sim.sh'] = text([
  '#!/bin/bash',
  '# Stops the Lab 5.2 simulation and removes its files.',
  "pkill -f '/tmp/.cache-upd/.u.sh'",
  'rm -rf /tmp/.cache-upd',
  'echo "Simulation stopped and cleaned up."'
]);

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms)
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (12 << 5) | 4;
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
const lines = f => FILES[f].split('\n').slice(0, -1);
const scan = lines('scans/cc_scan_2026-12-04.csv');
const rows = scan.slice(1).map(l => l.split(','));
const tally = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
const top = m => Object.entries(m).sort((a, b) => b[1] - a[1]);
const iocClean = lines('intel/isac_ironlatch_iocs_2026-12-07.txt').filter(l => l && !l.startsWith('#'));
const hit = (l) => iocClean.some(p => l.includes(p));
const proxyL = lines('logs/proxy_2026-12-07.log');
const vpnL = lines('logs/vpn_auth_2026-12-06_07.log');
const field = (l, k) => (l.match(new RegExp(k + '=(\\S+)')) || [])[1];
const failedBySrc = top(tally(vpnL.filter(l => l.includes('login failed')).map(l => field(l, 'src'))));
const out = {
  '5.1': {
    wc_l: scan.length,
    findings: rows.length,
    by_severity: top(tally(rows.map(r => r[5]))),
    cvss_ge_9: rows.filter(r => +r[6] >= 9).map(r => r[0] + ' ' + r[2]),
    distinct_cves: [...new Set(rows.map(r => r[7]).filter(Boolean))],
    by_host: top(tally(rows.map(r => r[2]))),
    exploit_yes_ge7: rows.filter(r => r[8] === 'yes' && +r[6] >= 7).map(r => r[0] + ' ' + r[2]),
    telnet_hosts: rows.filter(r => r[3] === '23').map(r => r[2]),
    smb_signing: rows.filter(r => /SMB signing/.test(r[9])).length,
    non_info: rows.filter(r => r[5] !== 'Info').length
  },
  '5.2': {
    ioc_clean_count: iocClean.length,
    loader_hash: LOADER_HASH,
    hash_match_files: Object.keys(Q).filter(n => iocClean.includes(sha256(Q[n]))),
    proxy_lines: proxyL.length,
    proxy_hits: proxyL.filter(hit),
    proxy_hit_srcs: [...new Set(proxyL.filter(hit).map(l => field(l, 'src')))],
    vpn_lines: vpnL.length,
    vpn_hits_count: vpnL.filter(hit).length,
    failed_by_src_top3: failedBySrc.slice(0, 3),
    spray_distinct_users: new Set(vpnL.filter(l => l.includes('src=203.0.113.45')).map(l => field(l, 'user'))).size,
    spray_ok: vpnL.filter(l => l.includes('src=203.0.113.45') && l.includes('login ok')).length,
    spray_bad_password_users: vpnL.filter(l => l.includes('src=203.0.113.45') && l.includes('bad_password')).length,
    spray_first_last: [vpnL.find(l => l.includes('203.0.113.45')), vpnL.filter(l => l.includes('203.0.113.45')).pop()],
    brute_count: vpnL.filter(l => l.includes('203.0.113.201')).length,
    ok_logins: vpnL.filter(l => l.includes('login ok')).length,
    kessler: vpnL.filter(l => l.includes('b.kessler'))
  }
};
console.log(JSON.stringify(out, null, 2));
