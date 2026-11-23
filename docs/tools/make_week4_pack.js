// Builds the Week 4 Cedar Creek lab pack (assets/cedarcreek/week4/) and its zip
// (assets/cedarcreek/cc-week4.zip, root folder cedarcreek-week4/).
// Deterministic: same input, same files. Run from anywhere: node docs/tools/make_week4_pack.js
// Prints the auto-check answers for Labs 4.1, 4.2 and 4.3 (course-w4-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week4');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week4.zip');
const ZIP_ROOT = 'cedarcreek-week4/';

const text = lines => lines.join('\n') + '\n';
const FILES = {};

// ---------------------------------------------------------------- README
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'IT shared drive extract - Week 4 lab pack (networks)',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'Cedar Creek Industries and every person, address, and system named in',
  'these files are fictional. They were made for MCCoE training labs.',
  '',
  'What is inside',
  '--------------',
  'network/    The network map and Greg Palmer\'s written scan authorization',
  'firewall/   An export of the FW-CORE rule base (fw-core_rules.csv)',
  'scans/      Dee Ortiz\'s authorized internal Nmap scan (normal and greppable output)',
  'captures/   Jordan Pike\'s short packet capture from the plant switch',
  'memos/      Notes from Marcus and a vendor access request',
  '',
  'How to use it',
  '-------------',
  'Lab 4.1 (packets): captures/plant_span.pcap',
  'Lab 4.2 (firewall review): firewall/fw-core_rules.csv and network/network_map.txt',
  'Lab 4.3 (Nmap): scans/internal_scan_2026-11-30.nmap and .gnmap',
  '',
  'Do not scan or capture on any network you do not own or have written',
  'permission to test. Cedar Creek\'s own scan was authorized in writing:',
  'read network/scope_authorization.txt to see what that looks like.'
]);

// ---------------------------------------------------------------- network map
FILES['network/network_map.txt'] = text([
  'CEDAR CREEK INDUSTRIES - NETWORK MAP',
  'Maintained by: Dee Ortiz      Last updated: 2026-11-24',
  '',
  'All routing between internal zones goes through FW-CORE.',
  'There is no core router: if FW-CORE allows it, it gets through.',
  '',
  'ZONE      SUBNET            WHAT LIVES THERE',
  'OUTSIDE   internet          Public address (NAT) 198.51.100.24',
  'OFFICE    10.20.0.0/16      Office PCs and laptops (DHCP)',
  '                            10.20.6.x HR and Finance (FS-HR01 sits here too),',
  '                            10.20.30.x Engineering',
  'SERVERS   10.10.0.0/16      Core servers: domain controller and backups',
  '          10.30.0.0/16      Application and file servers',
  'PLANT     10.40.0.0/16      Plant floor: Lines 1-3, HMIs, PLCs, CNCs, printers,',
  '                            HVAC controller, and CC-PLANT Wi-Fi clients',
  'MGMT      10.99.0.0/24      Network devices, IT admin workstation, camera and badge systems',
  'GUEST     172.16.50.0/24    CC-GUEST Wi-Fi, internet only',
  'VPN       10.250.0.0/24     Remote access pool on FW-CORE',
  '                            10.250.0.0/25   staff (group VPN-STAFF = AD group VPN-Users)',
  '                            10.250.0.128/28 vendors (group VENDOR-HVAC)',
  '',
  'KEY HOSTS',
  'Name            Address        Zone     Notes',
  'FW-CORE         10.99.0.1      MGMT     Perimeter firewall, routes all zones, SSL VPN on 443',
  '                                        (profiles CC-REMOTE and CC-LEGACY, see Week 3)',
  '                                         (profiles CC-REMOTE and CC-LEGACY; see Week 3)',
  'CORE-SW1        10.99.0.2      MGMT     Office/server core switch',
  'NETMON-01       10.99.0.5      MGMT     Network monitor (SNMPv2c polling)',
  'IT-ADMIN-01     10.99.0.10     MGMT     IT admin workstation',
  'PLANT-SW1       10.99.0.12     MGMT     Plant switch (one flat plant VLAN)',
  'NVR-01          10.99.0.15     MGMT     Camera recorder (16 cameras)',
  'BADGE-CTRL      10.99.0.16     MGMT     Badge access controller',
  'IT-LT-04        10.20.1.77     OFFICE   Spare IT laptop (used for test scans)',
  'FS-HR01         10.20.6.15     OFFICE   HR file server, on the HR/Finance subnet',
  'FIN-LT-09       10.20.6.41     OFFICE   Finance laptop',
  'ENG-09          10.20.30.9     OFFICE   Engineering workstation',
  'DC01            10.10.1.10     SERVERS  Domain controller and DNS (cedarcreek.local)',
  'ENG-FS01        10.30.4.10     SERVERS  Engineering file server',
  'ENG-APP02       10.30.4.22     SERVERS  CAD license / product data, Windows Server 2012 R2',
  'LINE2-PLC       10.40.2.10     PLANT    Line 2 programmable logic controller (Modbus/TCP)',
  'PLANT-PC-07     10.40.2.57     PLANT    Line 2 HMI / operator PC',
  'LINE2-CNC03     10.40.2.63     PLANT    CNC machine, Line 2',
  'LINE2-CNC04     10.40.2.64     PLANT    CNC machine, Line 2',
  'LINE2-CNC05     10.40.2.65     PLANT    CNC machine, Line 2 (down for rebuild)',
  'LINE2-LABEL     10.40.2.70     PLANT    Line 2 label printer',
  'TIMECLOCK-01    10.40.0.20     PLANT    Badge time clock',
  'HVAC-CTRL       10.40.9.15     PLANT    Building HVAC controller (Riverbend Mechanical)',
  '(CC-PLANT Wi-Fi clients get 10.40.100.x addresses from DHCP)',
  '',
  'KNOWN ISSUES (from the Week 1 walk-through)',
  '- The plant and office zones can reach each other freely.',
  '- CC-PLANT is WPA2-Personal; the password is on the break room wall.'
]);

FILES['network/scope_authorization.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'AUTHORIZATION FOR INTERNAL NETWORK SCANNING AND PACKET CAPTURE',
  '',
  'Date:          2026-11-25',
  'Authorized by: Greg Palmer, CFO (security program sponsor)',
  'Requested by:  Marcus Reyes, IT Manager',
  'Testers:       Dee Ortiz (Systems Administrator), Jordan Pike (Help Desk),',
  '               and the junior security analyst',
  '',
  '1. Purpose',
  'Find out which plant and server systems can be reached from the office',
  'network, and what traffic crosses the plant network, before we change',
  'any firewall rules.',
  '',
  '2. In scope',
  '- Port and service scan from IT-LT-04 (10.20.1.77), a spare laptop on an',
  '  ordinary office port, so the results show what any office PC can reach.',
  '  Targets: the Line 2 devices 10.40.2.10, 10.40.2.57, 10.40.2.63-65 and',
  '  10.40.2.70, plus 10.40.9.15 (HVAC-CTRL) and 10.30.4.22 (ENG-APP02)',
  '- A 10-minute packet capture from a mirror (SPAN) port on PLANT-SW1',
  '- Review of the FW-CORE rule export',
  '',
  '3. Allowed techniques',
  'Host discovery, TCP port scanning, and service version detection only.',
  '',
  '4. Not allowed',
  '- Logging in to any system with found or guessed passwords',
  '- Exploits, password guessing, or denial-of-service tests',
  '- Writing anything to LINE2-PLC or the CNC machines',
  '- Microsoft 365 and the payroll service (third parties; they need',
  '  their own permission)',
  '',
  '5. When',
  'Scan: Monday 2026-11-30 after second shift ends at 11:00 PM (Walt',
  'Henley agreed). Capture: Tuesday 2026-12-01, morning.',
  '',
  '6. Stop conditions and contacts',
  'If the Line 2 HMI (PLANT-PC-07) shows any error during the scan, stop',
  'at once and call Walt Henley (plant) and Marcus Reyes (IT).',
  '',
  '7. Handling the results',
  'Scan output and captures are Confidential. They may contain passwords.',
  'Store them only on IT-ADMIN-01 and delete them after the review.',
  '',
  'Signed: Greg Palmer          Signed: Marcus Reyes'
]);

// ---------------------------------------------------------------- memos
FILES['memos/marcus_week4_tasks.txt'] = text([
  'From:    Marcus Reyes',
  'To:      Junior Security Analyst',
  'Date:    2026-11-30',
  'Subject: This week: the network',
  '',
  'Your walk-through said the plant can reach the office. Let\'s prove it',
  'and see how bad it is before Walt hears we want to change anything.',
  '',
  '1. Jordan mirrored a port on PLANT-SW1 Tuesday morning for a few minutes.',
  '   Look at what crosses the plant network (captures/plant_span.pcap).',
  '2. Review the FW-CORE rules (firewall/fw-core_rules.csv). Jordan and I',
  '   have added rules for years and never removed any.',
  '3. Dee ran the scan Greg approved (scans/). Tell me what is exposed.',
  '',
  'Greg will ask "are we OK?" Give me three things to fix first, in plain',
  'English.',
  '',
  '- Marcus'
]);

FILES['memos/riverbend_vendor_access.txt'] = text([
  'From:    service@riverbend-mech.example',
  'To:      Marcus Reyes',
  'Date:    2023-06-12',
  'Subject: Remote access for HVAC monitoring',
  '',
  'Marcus,',
  '',
  'To support the new building controller we need remote access so our',
  'technicians can check alarms and adjust setpoints without a site visit.',
  'We only need the controller\'s web page (HVAC-CTRL). Please create a VPN',
  'login for our team.',
  '',
  'Thanks,',
  'Riverbend Mechanical - Service Desk',
  '',
  '---- note added by Jordan Pike, 2023-06-14 ----',
  'Created VPN group VENDOR-HVAC (10.250.0.128/28). Firewall rule 12 lets',
  'them reach SERVERS and PLANT so we don\'t have to touch it again if',
  'they add more equipment. One shared login for all their techs.'
]);

// ---------------------------------------------------------------- firewall rules
const RULES = [
  // id, name, enabled, src_zone, src, dst_zone, dst, service, action, log, hits_90d, comment
  [1, 'Admin-Workstation', 'yes', 'MGMT', '10.99.0.10', 'any', '10.0.0.0/8', 'ssh;https;rdp;smb', 'ALLOW', 'yes', 4112, 'IT-ADMIN-01 manages servers and network gear'],
  [2, 'Internal-DNS', 'yes', 'any', '10.0.0.0/8', 'SERVERS', '10.10.1.10', 'dns', 'ALLOW', 'no', 1893422, 'DC01 answers DNS for everyone'],
  [3, 'Office-to-AD', 'yes', 'OFFICE', '10.20.0.0/16', 'SERVERS', '10.10.1.10', 'kerberos;ldap;smb', 'ALLOW', 'no', 655210, 'Logons and group policy'],
  [4, 'Office-to-EngFiles', 'yes', 'OFFICE', '10.20.0.0/16', 'SERVERS', '10.30.4.10', 'smb', 'ALLOW', 'no', 402877, 'Engineering shares (FS-HR01 is on the office network)'],
  [5, 'Office-Web', 'yes', 'OFFICE', '10.20.0.0/16', 'OUTSIDE', 'any', 'http;https', 'ALLOW', 'no', 9120554, 'Web browsing and Microsoft 365'],
  [6, 'Plant-to-Office', 'yes', 'PLANT', '10.40.0.0/16', 'OFFICE', '10.20.0.0/16', 'any', 'ALLOW', 'no', 88341, 'TEMP: Line 2 label printing fix (2019)'],
  [7, 'Office-to-Plant', 'yes', 'OFFICE', '10.20.0.0/16', 'PLANT', '10.40.0.0/16', 'any', 'ALLOW', 'no', 120967, 'TEMP: Line 2 label printing fix (2019)'],
  [8, 'Plant-to-Servers', 'yes', 'PLANT', '10.40.0.0/16', 'SERVERS', '10.10.0.0/16;10.30.0.0/16', 'any', 'ALLOW', 'no', 230118, 'Plant PCs need DNS and drawings'],
  [9, 'EngFS-to-CNC-FTP', 'yes', 'SERVERS', '10.30.4.10', 'PLANT', '10.40.2.0/24', 'ftp', 'ALLOW', 'yes', 2210, 'ENG-FS01 sends CNC programs to Line 2'],
  [10, 'Office-Telnet-CNC03', 'yes', 'OFFICE', '10.20.30.0/24', 'PLANT', '10.40.2.63', 'telnet', 'ALLOW', 'yes', 0, 'Engineers check CNC03 status'],
  [11, 'VPN-Staff', 'yes', 'VPN', '10.250.0.0/25', 'OFFICE;SERVERS', '10.20.0.0/16;10.10.0.0/16;10.30.0.0/16', 'any', 'ALLOW', 'yes', 51309, 'Remote staff'],
  [12, 'VPN-Vendor-HVAC', 'yes', 'VPN', '10.250.0.128/28', 'SERVERS;PLANT', '10.10.0.0/16;10.30.0.0/16;10.40.0.0/16', 'any', 'ALLOW', 'no', 3877, 'Riverbend Mechanical HVAC support'],
  [13, 'Inbound-SSL-VPN', 'yes', 'OUTSIDE', 'any', 'FW-CORE', '198.51.100.24', 'https', 'ALLOW', 'yes', 77215, 'VPN portal'],
  [14, 'Inbound-RDP-ENGAPP02', 'yes', 'OUTSIDE', '203.0.113.60', 'SERVERS', '198.51.100.24:3389>10.30.4.22', 'rdp', 'ALLOW', 'no', 1986, 'CAD license vendor support (2021)'],
  [15, 'Inbound-SSH-FWCORE', 'yes', 'OUTSIDE', 'any', 'FW-CORE', '198.51.100.24', 'ssh', 'ALLOW', 'no', 61402, 'Remote admin of FW-CORE (M. Reyes)'],
  [16, 'ERP-Contractor-SSH', 'yes', 'OUTSIDE', '203.0.113.150', 'SERVERS', '10.30.4.40', 'ssh', 'ALLOW', 'yes', 0, 'ERP migration contractor - remove after go-live (2020)'],
  [17, 'Servers-Updates', 'yes', 'SERVERS', '10.10.0.0/16;10.30.0.0/16', 'OUTSIDE', 'any', 'https', 'ALLOW', 'no', 310442, 'Windows Update and vendor updates'],
  [18, 'Guest-Internet', 'yes', 'GUEST', '172.16.50.0/24', 'OUTSIDE', 'any', 'dns;http;https', 'ALLOW', 'no', 268003, 'CC-GUEST Wi-Fi'],
  [19, 'Guest-Block-Internal', 'yes', 'GUEST', '172.16.50.0/24', 'any', '10.0.0.0/8', 'any', 'DENY', 'yes', 1207, 'Keep guests off the internal network'],
  [20, 'NetMon-SNMP', 'yes', 'MGMT', '10.99.0.5', 'any', '10.0.0.0/8', 'snmp', 'ALLOW', 'no', 744019, 'NETMON-01 polling (SNMPv2c)'],
  [21, 'Copier-Test', 'yes', 'any', 'any', 'any', 'any', 'any', 'ALLOW', 'no', 1546208, 'Testing new copier scan-to-email - J. Pike 2025-03'],
  [22, 'Plant-Internet', 'no', 'PLANT', '10.40.0.0/16', 'OUTSIDE', 'any', 'http;https', 'ALLOW', 'no', 0, 'Disabled 2022: plant PCs should not browse'],
  [23, 'Block-SMB-Out', 'yes', 'any', '10.0.0.0/8', 'OUTSIDE', 'any', 'smb', 'DENY', 'yes', 0, 'Stop file sharing to the internet'],
  [24, 'Default-Deny', 'yes', 'any', 'any', 'any', 'any', 'any', 'DENY', 'yes', 0, 'Cleanup rule: deny everything else']
];
const RULE_HEAD = 'rule,name,enabled,src_zone,src,dst_zone,dst,service,action,log,hits_90d,comment';
FILES['firewall/fw-core_rules.csv'] = text([RULE_HEAD].concat(RULES.map(r => r.join(','))));
FILES['firewall/README_export.txt'] = text([
  'FW-CORE rule base export, taken 2026-11-30 08:12 by Jordan Pike.',
  '',
  'FW-CORE checks rules from the top (rule 1) down. The FIRST rule that',
  'matches a connection decides what happens; later rules are never read',
  'for that connection.',
  '',
  'Columns',
  '  rule       order number (top = 1)',
  '  enabled    yes = in use, no = switched off',
  '  src_zone / src   where the connection starts',
  '  dst_zone / dst   where it is going ("a:b>c" = public address a, port b,',
  '                   forwarded to inside address c)',
  '  service    ports allowed; several are separated by ;',
  '  action     ALLOW or DENY',
  '  log        yes = each match is written to the firewall log',
  '  hits_90d   how many connections matched the rule in the last 90 days'
]);

// ---------------------------------------------------------------- nmap scan (Dee, 2026-11-30)
const NMAP_CMD = 'nmap -sS -sV -p- --open -T4 -oA internal_scan_2026-11-30 10.40.2.10 10.40.2.57 10.40.2.63-65 10.40.2.70 10.40.9.15 10.30.4.22';
const HOSTS = [
  { ip: '10.40.2.10', name: 'line2-plc.cedarcreek.local', lat: '0.0012s', ports: [[80, 'http', 'Embedded HTTP server'], [502, 'modbus', 'Modbus TCP']] },
  { ip: '10.40.2.57', name: 'plant-pc-07.cedarcreek.local', lat: '0.00087s', win: true, ports: [[135, 'msrpc', 'Microsoft Windows RPC'], [139, 'netbios-ssn', 'Microsoft Windows netbios-ssn'], [445, 'microsoft-ds', 'Microsoft Windows 7 - 10 microsoft-ds'], [3389, 'ms-wbt-server', 'Microsoft Terminal Services']] },
  { ip: '10.40.2.63', name: 'line2-cnc03.cedarcreek.local', lat: '0.0015s', ports: [[21, 'ftp', 'Embedded FTP server'], [23, 'telnet', 'BusyBox telnetd']] },
  { ip: '10.40.2.64', name: 'line2-cnc04.cedarcreek.local', lat: '0.0014s', ports: [[21, 'ftp', 'Embedded FTP server']] },
  { ip: '10.40.2.70', name: 'line2-label.cedarcreek.local', lat: '0.0019s', ports: [[80, 'http', 'Embedded HTTP server'], [9100, 'jetdirect', '']] },
  { ip: '10.40.9.15', name: 'hvac-ctrl.cedarcreek.local', lat: '0.0021s', ports: [[80, 'http', 'Embedded HTTP server (HVAC controller login page)']] },
  { ip: '10.30.4.22', name: 'eng-app02.cedarcreek.local', lat: '0.00052s', win: true, ws2012: true, ports: [[80, 'http', 'Microsoft IIS httpd 8.5'], [135, 'msrpc', 'Microsoft Windows RPC'], [139, 'netbios-ssn', 'Microsoft Windows netbios-ssn'], [445, 'microsoft-ds', 'Microsoft Windows Server 2008 R2 - 2012 microsoft-ds'], [3389, 'ms-wbt-server', 'Microsoft Terminal Services']] }
];
const SCANNED = 8;
const START = 'Mon Nov 30 23:20:12 2026', END = 'Mon Nov 30 23:46:47 2026', SECS = '1595.22';
(function () {
  const pad = (s, n) => (s + ' '.repeat(n)).slice(0, Math.max(n, s.length));
  const n = ['# Nmap 7.95 scan initiated ' + START + ' as: ' + NMAP_CMD];
  for (const h of HOSTS) {
    n.push('Nmap scan report for ' + h.name + ' (' + h.ip + ')');
    n.push('Host is up (' + h.lat + ' latency).');
    n.push('Not shown: ' + (65535 - h.ports.length) + ' closed tcp ports (reset)');
    const w1 = Math.max(4, ...h.ports.map(p => (p[0] + '/tcp').length)) + 1;
    const w3 = Math.max(7, ...h.ports.map(p => p[1].length)) + 1;
    n.push(pad('PORT', w1) + 'STATE ' + pad('SERVICE', w3) + 'VERSION');
    for (const p of h.ports) n.push((pad(p[0] + '/tcp', w1) + 'open  ' + pad(p[1], w3) + p[2]).replace(/\s+$/, ''));
    if (h.ws2012) n.push('Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows');
    else if (h.win) n.push('Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows');
    n.push('');
  }
  n.push('Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .');
  n.push('# Nmap done at ' + END + ' -- ' + SCANNED + ' IP addresses (' + HOSTS.length + ' hosts up) scanned in ' + SECS + ' seconds');
  FILES['scans/internal_scan_2026-11-30.nmap'] = text(n);

  const g = ['# Nmap 7.95 scan initiated ' + START + ' as: ' + NMAP_CMD];
  for (const h of HOSTS) {
    g.push('Host: ' + h.ip + ' (' + h.name + ')\tStatus: Up');
    g.push('Host: ' + h.ip + ' (' + h.name + ')\tPorts: ' + h.ports.map(p => p[0] + '/open/tcp//' + p[1] + '//' + p[2] + '/').join(', ') + '\tIgnored State: closed (' + (65535 - h.ports.length) + ')');
  }
  g.push('# Nmap done at ' + END + ' -- ' + SCANNED + ' IP addresses (' + HOSTS.length + ' hosts up) scanned in ' + SECS + ' seconds');
  FILES['scans/internal_scan_2026-11-30.gnmap'] = text(g);
})();

// ---------------------------------------------------------------- packet capture (Jordan, 2026-12-01, SPAN on PLANT-SW1)
const MAC = {
  gw: '00:1a:8c:40:00:01',          // FW-CORE plant interface 10.40.0.1
  '10.40.2.10': '00:0e:8c:22:10:0a',
  '10.40.2.57': '3c:52:82:07:2a:11',
  '10.40.2.63': '00:1b:4f:33:c0:21',
  '10.40.9.15': '00:50:c2:9f:15:0f',
  '10.40.100.37': 'a4:83:e7:5d:91:37',
  bcast: 'ff:ff:ff:ff:ff:ff',
  zero: '00:00:00:00:00:00'
};
const inPlant = ip => ip.startsWith('10.40.');
const macOf = ip => (inPlant(ip) && MAC[ip]) || MAC.gw;
const ttlOf = (ip, win) => (inPlant(ip) ? 0 : -1) + (win ? 128 : 64);
const WIN = new Set(['10.40.2.57', '10.10.1.10', '10.20.6.15', '10.30.4.10', '10.20.30.9', '10.40.100.37']);

const macB = m => Buffer.from(m.split(':').map(h => parseInt(h, 16)));
const ipB = s => Buffer.from(s.split('.').map(Number));
function csum(buf) {
  let s = 0;
  for (let i = 0; i < buf.length; i += 2) s += (buf[i] << 8) + (i + 1 < buf.length ? buf[i + 1] : 0);
  while (s >> 16) s = (s & 0xffff) + (s >> 16);
  return (~s) & 0xffff;
}
let ipId = 0x3a10;
function ipv4(src, dst, proto, payload, ttl) {
  const h = Buffer.alloc(20);
  h[0] = 0x45; h[1] = 0; h.writeUInt16BE(20 + payload.length, 2); h.writeUInt16BE(ipId++ & 0xffff, 4);
  h.writeUInt16BE(0x4000, 6); h[8] = ttl; h[9] = proto; ipB(src).copy(h, 12); ipB(dst).copy(h, 16);
  h.writeUInt16BE(csum(h), 10);
  return Buffer.concat([h, payload]);
}
function l4sum(src, dst, proto, seg) {
  const ph = Buffer.alloc(12);
  ipB(src).copy(ph, 0); ipB(dst).copy(ph, 4); ph[9] = proto; ph.writeUInt16BE(seg.length, 10);
  return csum(Buffer.concat([ph, seg]));
}
function tcpSeg(src, dst, sp, dp, seq, ack, flags, data) {
  const h = Buffer.alloc(20);
  h.writeUInt16BE(sp, 0); h.writeUInt16BE(dp, 2); h.writeUInt32BE(seq >>> 0, 4); h.writeUInt32BE(ack >>> 0, 8);
  h[12] = 5 << 4; h[13] = flags; h.writeUInt16BE(64240, 14);
  const seg = Buffer.concat([h, data]);
  seg.writeUInt16BE(l4sum(src, dst, 6, seg), 16);
  return seg;
}
function udpSeg(src, dst, sp, dp, data) {
  const h = Buffer.alloc(8);
  h.writeUInt16BE(sp, 0); h.writeUInt16BE(dp, 2); h.writeUInt16BE(8 + data.length, 4);
  const seg = Buffer.concat([h, data]);
  seg.writeUInt16BE(l4sum(src, dst, 17, seg) || 0xffff, 6);
  return seg;
}
function eth(dstMac, srcMac, type, payload) {
  const h = Buffer.alloc(14);
  macB(dstMac).copy(h, 0); macB(srcMac).copy(h, 6); h.writeUInt16BE(type, 12);
  let f = Buffer.concat([h, payload]);
  if (f.length < 60) f = Buffer.concat([f, Buffer.alloc(60 - f.length)]);
  return f;
}

const PKTS = [];          // { t (seconds), frame }
const T0 = Date.UTC(2026, 11, 1, 16, 14, 3) / 1000;   // 10:14:03 AM Central = 16:14:03 UTC
function push(t, frame) { PKTS.push({ t, frame }); }
function ipFrame(t, src, dst, proto, seg) {
  push(t, eth(macOf(dst), macOf(src), 0x0800, ipv4(src, dst, proto, seg, ttlOf(src, WIN.has(src)))));
}

const F = { FIN: 1, SYN: 2, RST: 4, PSH: 8, ACK: 16 };
// A TCP conversation. ops: ['c'|'s', text|Buffer, gapSeconds]
function tcpConv(cli, cport, srv, sport, t, ops, opt = {}) {
  let cs = opt.cisn >>> 0, ss = opt.sisn >>> 0;
  const step = opt.rtt || 0.0009;
  const send = (fromC, flags, data) => {
    const d = data ? Buffer.from(data) : Buffer.alloc(0);
    if (fromC) { ipFrame(t, cli, srv, 6, tcpSeg(cli, srv, cport, sport, cs, ss, flags, d)); cs += d.length + ((flags & (F.SYN | F.FIN)) ? 1 : 0); }
    else { ipFrame(t, srv, cli, 6, tcpSeg(srv, cli, sport, cport, ss, cs, flags, d)); ss += d.length + ((flags & (F.SYN | F.FIN)) ? 1 : 0); }
  };
  // handshake
  { const d = Buffer.alloc(0); ipFrame(t, cli, srv, 6, tcpSeg(cli, srv, cport, sport, cs, 0, F.SYN, d)); cs += 1; }
  t += step; send(false, F.SYN | F.ACK); t += step; send(true, F.ACK);
  for (let i = 0; i < ops.length; i++) {
    const [who, data, gap] = ops[i];
    t += gap == null ? 0.05 : gap;
    send(who === 'c', F.PSH | F.ACK, data);
    const next = ops[i + 1];
    if (!next || next[0] === who || (next[2] || 0) > 0.2) { t += step; send(who !== 'c', F.ACK); }
  }
  if (opt.close !== false) {
    t += opt.closeGap || 0.2; send(true, F.FIN | F.ACK); t += step; send(false, F.FIN | F.ACK); t += step; send(true, F.ACK);
  }
  return t;
}

// ARP
function arp(t, op, smac, sip, tmac, tip, dstMac) {
  const a = Buffer.alloc(28);
  a.writeUInt16BE(1, 0); a.writeUInt16BE(0x0800, 2); a[4] = 6; a[5] = 4; a.writeUInt16BE(op, 6);
  macB(smac).copy(a, 8); ipB(sip).copy(a, 14); macB(tmac).copy(a, 18); ipB(tip).copy(a, 24);
  push(t, eth(dstMac, smac, 0x0806, a));
}
// DNS
function dnsName(n) { return Buffer.concat(n.split('.').map(l => Buffer.concat([Buffer.from([l.length]), Buffer.from(l)])).concat([Buffer.from([0])])); }
function dns(t, cli, cport, name, answer, id) {
  const srv = '10.10.1.10';
  const q = Buffer.concat([dnsName(name), Buffer.from([0, 1, 0, 1])]);
  const hq = Buffer.alloc(12); hq.writeUInt16BE(id, 0); hq.writeUInt16BE(0x0100, 2); hq.writeUInt16BE(1, 4);
  ipFrame(t, cli, srv, 17, udpSeg(cli, srv, cport, 53, Buffer.concat([hq, q])));
  const hr = Buffer.alloc(12); hr.writeUInt16BE(id, 0); hr.writeUInt16BE(0x8580, 2); hr.writeUInt16BE(1, 4); hr.writeUInt16BE(1, 6);
  const an = Buffer.alloc(16); an.writeUInt16BE(0xc00c, 0); an.writeUInt16BE(1, 2); an.writeUInt16BE(1, 4); an.writeUInt32BE(1200, 6); an.writeUInt16BE(4, 10); ipB(answer).copy(an, 12);
  ipFrame(t + 0.0011, srv, cli, 17, udpSeg(srv, cli, 53, cport, Buffer.concat([hr, q, an])));
}

// 1. ARP at the start
arp(T0 + 0.10, 1, MAC['10.40.2.57'], '10.40.2.57', MAC.zero, '10.40.2.10', MAC.bcast);
arp(T0 + 0.1004, 2, MAC['10.40.2.10'], '10.40.2.10', MAC['10.40.2.57'], '10.40.2.57', MAC['10.40.2.57']);
arp(T0 + 61.20, 1, MAC['10.40.100.37'], '10.40.100.37', MAC.zero, '10.40.0.1', MAC.bcast);
arp(T0 + 61.2003, 2, MAC.gw, '10.40.0.1', MAC['10.40.100.37'], '10.40.100.37', MAC['10.40.100.37']);

// 2. Modbus/TCP polling: PLANT-PC-07 (HMI) reads 10 holding registers from LINE2-PLC every 45 seconds
(function () {
  const ops = [];
  for (let i = 0; i < 12; i++) {
    const req = Buffer.alloc(12);
    req.writeUInt16BE(0x0100 + i, 0); req.writeUInt16BE(0, 2); req.writeUInt16BE(6, 4); req[6] = 1; req[7] = 3; req.writeUInt16BE(40, 8); req.writeUInt16BE(10, 10);
    const res = Buffer.alloc(9 + 20);
    res.writeUInt16BE(0x0100 + i, 0); res.writeUInt16BE(0, 2); res.writeUInt16BE(3 + 20, 4); res[6] = 1; res[7] = 3; res[8] = 20;
    const vals = [1, 4471, 3, 1180 + i * 7, 652, 0, 18, 72, 1, 0];
    vals.forEach((v, k) => res.writeUInt16BE(v, 9 + k * 2));
    ops.push(['c', req, i === 0 ? 0.02 : 45], ['s', res, 0.004]);
  }
  tcpConv('10.40.2.57', 50211, '10.40.2.10', 502, T0 + 0.11, ops, { cisn: 0x6b1e0042, sisn: 0x0007d3a1, close: false });
})();

// 3. DNS lookups through DC01
dns(T0 + 12.41, '10.40.2.57', 61822, 'eng-fs01.cedarcreek.local', '10.30.4.10', 0x51a2);
dns(T0 + 58.90, '10.40.100.37', 52011, 'fs-hr01.cedarcreek.local', '10.20.6.15', 0x0c3d);
dns(T0 + 140.33, '10.40.2.57', 61901, 'time.windows.com', '203.0.113.123', 0x51b7);
dns(T0 + 305.02, '10.40.100.37', 52044, 'outlook.office365.com', '203.0.113.40', 0x0c58);

// 4. Plant Wi-Fi client reaches the HR file server on SMB (445): the connection is accepted
tcpConv('10.40.100.37', 52100, '10.20.6.15', 445, T0 + 61.25, [], { cisn: 0x1f00a9c4, sisn: 0x77e01b20, closeGap: 4.6, rtt: 0.0012 });

// 5. FTP: ENG-FS01 sends a CNC program to LINE2-CNC03 in cleartext
const FTP_USER = 'cncload', FTP_PASS = 'Line2load!', NC_FILE = 'BRK-4471_revC.nc';
const NC = text([
  '%',
  'O4471 (BRACKET BRK-4471 REV C - CUSTOMER CONFIDENTIAL)',
  '(CEDAR CREEK INDUSTRIES - LINE 2 - CNC03)',
  'G21 G90 G94',
  'T1 M06 (12MM END MILL)',
  'G54 G00 X0 Y0 S2400 M03',
  'G43 H01 Z25.0 M08',
  'G01 Z-4.0 F180',
  'G01 X118.5 Y0 F420',
  'G01 X118.5 Y62.0',
  'G01 X0 Y62.0',
  'G01 X0 Y0',
  'G00 Z25.0 M09',
  'M30',
  '%'
]);
(function () {
  let t = T0 + 196.40;
  const cli = '10.30.4.10', srv = '10.40.2.63';
  const ctrl1 = [
    ['s', '220 CNC03 FTP server ready.\r\n', 0.01],
    ['c', 'USER ' + FTP_USER + '\r\n', 0.03],
    ['s', '331 Password required for ' + FTP_USER + '.\r\n', 0.002],
    ['c', 'PASS ' + FTP_PASS + '\r\n', 0.03],
    ['s', '230 User ' + FTP_USER + ' logged in.\r\n', 0.004],
    ['c', 'TYPE I\r\n', 0.02],
    ['s', '200 Type set to I.\r\n', 0.002],
    ['c', 'PASV\r\n', 0.02],
    ['s', '227 Entering Passive Mode (10,40,2,63,195,80).\r\n', 0.002]
  ];
  // control connection part 1 (no close)
  let cs = 0x2c4a9e10, ss = 0x6e00f2b0;
  t = tcpConvPart(cli, 49733, srv, 21, t, ctrl1, cs, ss, true);
  // data connection to port 50000, then STOR on control, data, close
  const dataStart = t + 0.01;
  const tData = tcpConv(cli, 49734, srv, 50000, dataStart + 0.03, [['c', NC, 0.05]], { cisn: 0x2d11c000, sisn: 0x6f020a00, closeGap: 0.01 });
  tcpConvPart(cli, 49733, srv, 21, dataStart, [['c', 'STOR ' + NC_FILE + '\r\n', 0.0], ['s', '150 Opening BINARY mode data connection for ' + NC_FILE + '.\r\n', 0.004]], STATE.cs, STATE.ss, false);
  tcpConvPart(cli, 49733, srv, 21, tData + 0.01, [['s', '226 Transfer complete.\r\n', 0.0], ['c', 'QUIT\r\n', 0.04], ['s', '221 Goodbye.\r\n', 0.002]], STATE.cs, STATE.ss, false, true);
})();

// helper for a conversation split into parts (FTP control channel)
var STATE;
function tcpConvPart(cli, cport, srv, sport, t, ops, cs, ss, open, close) {
  const step = 0.0009;
  const send = (fromC, flags, data) => {
    const d = data ? Buffer.from(data) : Buffer.alloc(0);
    if (fromC) { ipFrame(t, cli, srv, 6, tcpSeg(cli, srv, cport, sport, cs, ss, flags, d)); cs += d.length + ((flags & (F.SYN | F.FIN)) ? 1 : 0); }
    else { ipFrame(t, srv, cli, 6, tcpSeg(srv, cli, sport, cport, ss, cs, flags, d)); ss += d.length + ((flags & (F.SYN | F.FIN)) ? 1 : 0); }
  };
  if (open) {
    ipFrame(t, cli, srv, 6, tcpSeg(cli, srv, cport, sport, cs, 0, F.SYN, Buffer.alloc(0))); cs += 1;
    t += step; send(false, F.SYN | F.ACK); t += step; send(true, F.ACK);
  }
  for (let i = 0; i < ops.length; i++) {
    const [who, data, gap] = ops[i];
    t += gap || 0;
    send(who === 'c', F.PSH | F.ACK, data);
    const next = ops[i + 1];
    if (!next || next[0] === who) { t += step; send(who !== 'c', F.ACK); }
  }
  if (close) { t += 0.01; send(false, F.FIN | F.ACK); t += step; send(true, F.FIN | F.ACK); t += step; send(false, F.ACK); }
  STATE = { cs, ss };
  return t;
}

// 6. Telnet: an engineering laptop in the office logs in to LINE2-CNC03 (cleartext)
const TEL_USER = 'cncadmin', TEL_PASS = 'Cnc#2019';
tcpConv('10.20.30.9', 51544, '10.40.2.63', 23, T0 + 372.80, [
  ['s', '\r\nLINE2-CNC03 login: ', 0.05],
  ['c', TEL_USER + '\r\n', 2.4],
  ['s', 'Password: ', 0.01],
  ['c', TEL_PASS + '\r\n', 3.1],
  ['s', '\r\nCNC03 controller shell\r\n$ ', 0.02],
  ['c', 'status\r\n', 4.2],
  ['s', 'SPINDLE: IDLE  PROGRAM: O4471  PARTS TODAY: 212  ALARMS: NONE\r\n$ ', 0.03],
  ['c', 'exit\r\n', 6.0]
], { cisn: 0x5a7712c0, sisn: 0x0091fe44, closeGap: 0.05, rtt: 0.0011 });

// 7. HTTP Basic authentication: the HVAC vendor (VPN 10.250.0.130) opens the controller page
const HVAC_USER = 'riverbend', HVAC_PASS = 'Chill3r!';
const B64 = Buffer.from(HVAC_USER + ':' + HVAC_PASS).toString('base64');
const HTML = '<html><head><title>HVAC-CTRL</title></head><body><h1>Building controller</h1><p>Zone 4 (server room): 81 F  ALARM: HIGH TEMP</p></body></html>';
tcpConv('10.250.0.130', 50877, '10.40.9.15', 80, T0 + 455.10, [
  ['c', 'GET /status.html HTTP/1.1\r\nHost: 10.40.9.15\r\nAuthorization: Basic ' + B64 + '\r\nUser-Agent: Mozilla/5.0\r\nAccept: text/html\r\n\r\n', 0.01],
  ['s', 'HTTP/1.1 200 OK\r\nServer: embedded-httpd\r\nContent-Type: text/html\r\nContent-Length: ' + HTML.length + '\r\n\r\n' + HTML, 0.03]
], { cisn: 0x0e3f5a00, sisn: 0x4b22c710, closeGap: 0.4, rtt: 0.031 });

PKTS.sort((a, b) => a.t - b.t);
(function () {
  const gh = Buffer.alloc(24);
  gh.writeUInt32LE(0xa1b2c3d4, 0); gh.writeUInt16LE(2, 4); gh.writeUInt16LE(4, 6); gh.writeUInt32LE(0, 8); gh.writeUInt32LE(0, 12);
  gh.writeUInt32LE(65535, 16); gh.writeUInt32LE(1, 20);
  const recs = PKTS.map(p => {
    const sec = Math.floor(p.t), usec = Math.round((p.t - sec) * 1e6);
    const r = Buffer.alloc(16);
    r.writeUInt32LE(sec, 0); r.writeUInt32LE(Math.min(usec, 999999), 4); r.writeUInt32LE(p.frame.length, 8); r.writeUInt32LE(p.frame.length, 12);
    return Buffer.concat([r, p.frame]);
  });
  FILES['captures/plant_span.pcap'] = Buffer.concat([gh].concat(recs));
  FILES['captures/capture_notes.txt'] = text([
    'Capture: plant_span.pcap',
    'Taken by: Jordan Pike, 2026-12-01, about 10:14 to 10:22 AM',
    'Where: mirror (SPAN) port on PLANT-SW1, copying all plant VLAN traffic',
    'Approved in: network/scope_authorization.txt',
    '',
    'Handle as Confidential: plant captures can contain passwords.'
  ]);
})();

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms), same writer as Week 1
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (11 << 5) | 30;
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
  .concat(names.map(n => ({ name: ZIP_ROOT + n, data: Buffer.isBuffer(FILES[n]) ? FILES[n] : Buffer.from(FILES[n], 'utf8') })));
fs.writeFileSync(ZIP, makeZip(entries));

// ---------------------------------------------------------------- answers (computed the way a student would)
const rules = FILES['firewall/fw-core_rules.csv'].trim().split('\n').slice(1).map(l => l.split(','));
const gnmap = FILES['scans/internal_scan_2026-11-30.gnmap'];
const pktText = PKTS.map(p => p.frame.toString('latin1')).join('\n');
const out = {
  '4.1': {
    tcpdump_packet_lines: PKTS.length,
    ftp_user: FTP_USER, ftp_pass: FTP_PASS, ftp_file: NC_FILE,
    telnet_user: TEL_USER, telnet_pass: TEL_PASS,
    smb_client: '10.40.100.37', smb_server: '10.20.6.15',
    basic_b64: B64, basic_decoded: HVAC_USER + ':' + HVAC_PASS,
    modbus_port: 502,
    dns_queries: 4,
    cleartext_check: ['USER ' + FTP_USER, 'PASS ' + FTP_PASS, TEL_PASS, B64].map(s => [s, pktText.includes(s)])
  },
  '4.2': {
    wc_l: rules.length + 1,
    rules: rules.length,
    disabled: rules.filter(r => r[2] === 'no').map(r => r[0]),
    plant_to_office_any: rules.filter(r => r[3] === 'PLANT' && r[5] === 'OFFICE' && r[7] === 'any').map(r => r[0]),
    inbound_from_outside: rules.filter(r => r[3] === 'OUTSIDE').map(r => r[0] + ':' + r[7]),
    rdp_inbound: rules.filter(r => r[3] === 'OUTSIDE' && r[7] === 'rdp').map(r => r[0]),
    any_any_any_allow: rules.filter(r => r[4] === 'any' && r[6] === 'any' && r[7] === 'any' && r[8] === 'ALLOW').map(r => r[0]),
    zero_hits_enabled: rules.filter(r => r[2] === 'yes' && r[10] === '0').map(r => r[0]),
    zero_hits_all: rules.filter(r => r[10] === '0').map(r => r[0]),
    allow_no_log: rules.filter(r => r[8] === 'ALLOW' && r[9] === 'no').length,
    allow_no_log_enabled: rules.filter(r => r[2] === 'yes' && r[8] === 'ALLOW' && r[9] === 'no').length,
    grep_any_any: FILES['firewall/fw-core_rules.csv'].split('\n').filter(l => l.includes(',any,any,any,any,any,')).map(l => l.split(',')[0])
  },
  '4.3': {
    hosts_up: (gnmap.match(/Status: Up/g) || []).length,
    open_ports_total: (gnmap.match(/\/open\//g) || []).length,
    telnet_hosts: gnmap.split('\n').filter(l => l.includes('23/open/tcp')).map(l => l.split(' ')[1]),
    ftp_hosts: gnmap.split('\n').filter(l => l.includes('21/open/tcp')).map(l => l.split(' ')[1]),
    
    rdp_hosts: gnmap.split('\n').filter(l => l.includes('3389/open')).map(l => l.split(' ')[1]),
    http_80_hosts: gnmap.split('\n').filter(l => l.includes(' 80/open') || l.includes('\tPorts: 80/open')).map(l => l.split(' ')[1]),
    iis: (gnmap.match(/Microsoft IIS httpd ([\d.]+)/) || [])[1],
    scanned: SCANNED
  },
  files: names
};
console.log(JSON.stringify(out, null, 2));
