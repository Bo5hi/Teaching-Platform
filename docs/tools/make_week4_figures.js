// Rebuilds the Week 4 lesson diagrams. Usage (repo root): node docs/tools/make_week4_figures.js course-w4-figures.js
// Same palette, fonts and helpers as docs/tools/make_week1_figures.js.
const fs = require('fs');
const OUT = process.argv[2] || 'course-w4-figures.js';

const C = { bg: '#0d0d1f', panel: '#131329', text: '#e8e8e8', muted: '#a0a0ac', faint: '#3a3a5c', red: '#ee2207', cyan: '#00f5ff', green: '#33d17a', amber: '#ffc23d', orange: '#ff8a4c', pink: '#ff7aa2', purple: '#b794ff' };
const F = { r: 'Rajdhani, Segoe UI, sans-serif', i: 'Inter, Segoe UI, sans-serif', m: 'Share Tech Mono, Consolas, monospace' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function T(x, y, s, o = {}) {
  const f = o.f || 'i';
  const size = o.size || (f === 'r' ? 20 : 14);
  const w = o.w || (f === 'r' ? 700 : (f === 'i' ? 500 : 400));
  return '<text x="' + x + '" y="' + y + '" font-family="' + F[f] + '" font-size="' + size + '" font-weight="' + w + '" fill="' + (o.fill || C.text) + '" text-anchor="' + (o.a || 'middle') + '"' +
    (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + (o.tr ? ' transform="' + o.tr + '"' : '') + '>' + esc(s) + '</text>';
}
function R(x, y, w, h, o = {}) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.rx == null ? 10 : o.rx) + '" fill="' + (o.fill || C.panel) + '"' +
    (o.fo != null ? ' fill-opacity="' + o.fo + '"' : '') +
    (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 2) + '"' : '') +
    (o.so != null ? ' stroke-opacity="' + o.so + '"' : '') +
    (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
}
function L(x1, y1, x2, y2, o = {}) {
  return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" fill="none" stroke="' + (o.stroke || C.faint) + '" stroke-width="' + (o.sw || 2) + '"' +
    (o.so != null ? ' stroke-opacity="' + o.so + '"' : '') + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + (o.cap ? ' stroke-linecap="' + o.cap + '"' : '') + '/>';
}
function Circ(cx, cy, r, o = {}) {
  return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (o.fill || 'none') + '"' + (o.fo != null ? ' fill-opacity="' + o.fo + '"' : '') +
    (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 2) + '"' : '') + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
}
function arrow(x1, y1, x2, y2, color, o = {}) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
  const hl = o.hl || 11, hw = o.hw || 6;
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  const p = [[x2, y2], [bx - uy * hw, by + ux * hw], [bx + uy * hw, by - ux * hw]].map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
  return L(x1, y1, +bx.toFixed(1), +by.toFixed(1), { stroke: color, sw: o.sw || 2, so: o.so, dash: o.dash }) + '<polygon points="' + p + '" fill="' + color + '"' + (o.so != null ? ' fill-opacity="' + o.so + '"' : '') + '/>';
}
function svg(w, h, label, parts) {
  return ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label) + '">', R(0, 0, w, h, { fill: C.bg, rx: 12 })].concat(parts, ['</svg>']);
}
const card = (x, y, w, h, color) => R(x, y, w, h, { stroke: color, sw: 2 });
const tag = (x, y, s, o = {}) => T(x, y, s, Object.assign({ f: 'm', size: 13, fill: C.muted, ls: 1.5 }, o));
const cross = (x, y, s, color) => L(x - s, y - s, x + s, y + s, { stroke: color, sw: 3, cap: 'round' }) + L(x - s, y + s, x + s, y - s, { stroke: color, sw: 3, cap: 'round' });

const FIG = {};

// 1. OSI and TCP/IP
(function () {
  const p = [];
  const rows = [
    ['7', 'Application', 'Data', 'HTTP, DNS, FTP, Telnet, SSH, Modbus'],
    ['6', 'Presentation', 'Data', 'TLS encryption, encoding, formats'],
    ['5', 'Session', 'Data', 'Opening and keeping conversations'],
    ['4', 'Transport', 'Segment', 'TCP and UDP ports: 21, 23, 445, 502'],
    ['3', 'Network', 'Packet', 'IP addresses and routing; ICMP ping'],
    ['2', 'Data link', 'Frame', 'Ethernet, MAC addresses, ARP, Wi-Fi'],
    ['1', 'Physical', 'Bits', 'Cable, fiber, and radio signals']
  ];
  const tcpip = [[0, 3, C.cyan, 'Application'], [3, 1, C.green, 'Transport'], [4, 1, C.amber, 'Internet'], [5, 2, C.purple, 'Link']];
  const colOf = i => tcpip.find(t => i >= t[0] && i < t[0] + t[1])[2];
  const y0 = 50, rh = 52, g = 6;
  p.push(tag(150, 30, 'OSI MODEL'));
  p.push(tag(440, 30, 'WHAT YOU SEE IN THE LABS'));
  p.push(tag(690, 30, 'TCP/IP MODEL'));
  rows.forEach((r, i) => {
    const y = y0 + i * (rh + g), col = colOf(i);
    p.push(R(20, y, 260, rh, { stroke: col, sw: 2 }));
    p.push(T(44, y + 33, r[0], { f: 'r', size: 24, fill: col }));
    p.push(T(70, y + 33, r[1], { f: 'r', size: 21, a: 'start' }));
    p.push(tag(268, y + 32, r[2].toUpperCase(), { a: 'end', size: 12, ls: 1 }));
    p.push(R(292, y, 300, rh, { fill: C.panel, fo: 0.6 }));
    p.push(T(306, y + 31, r[3], { size: 13.5, a: 'start' }));
  });
  tcpip.forEach(t => {
    const y = y0 + t[0] * (rh + g), h = t[1] * rh + (t[1] - 1) * g;
    p.push(R(604, y, 176, h, { fill: t[2], fo: 0.10, stroke: t[2], sw: 2 }));
    p.push(T(692, y + h / 2 + 7, t[3], { f: 'r', size: 22, fill: t[2] }));
  });
  const yb = y0 + 7 * (rh + g) + 18;
  p.push(T(400, yb, 'Sending wraps the data in a header at each layer (encapsulation); receiving unwraps it.', { size: 13.5, fill: C.muted }));
  FIG['osi-tcpip'] = svg(800, yb + 16, 'The seven OSI layers beside the four TCP/IP layers. Layer 7 Application, 6 Presentation and 5 Session map to the TCP/IP Application layer (HTTP, DNS, FTP, Telnet, SSH, Modbus; TLS; sessions). Layer 4 Transport maps to Transport (TCP and UDP ports such as 21, 23, 445, 502; unit: segment). Layer 3 Network maps to Internet (IP addresses, routing, ICMP; unit: packet). Layers 2 Data link and 1 Physical map to Link (Ethernet, MAC, ARP, Wi-Fi, cables and radio; units: frame and bits).', p);
})();

// 2. TCP handshake vs UDP
(function () {
  const p = [];
  function lane(x1, x2, title, color) {
    p.push(T((x1 + x2) / 2, 28, title, { f: 'r', size: 22, fill: color }));
    p.push(R(x1 - 50, 44, 100, 34, { stroke: C.text, sw: 1.5, so: 0.5 })); p.push(T(x1, 66, 'Client'));
    p.push(R(x2 - 50, 44, 100, 34, { stroke: C.text, sw: 1.5, so: 0.5 })); p.push(T(x2, 66, 'Server'));
    p.push(L(x1, 78, x1, 300, { stroke: C.faint, sw: 2, dash: '4 4' }));
    p.push(L(x2, 78, x2, 300, { stroke: C.faint, sw: 2, dash: '4 4' }));
  }
  function msg(x1, x2, y, label, color, right) {
    p.push(arrow(right ? x1 : x2, y + 8, right ? x2 : x1, y + 28, color));
    p.push(T((x1 + x2) / 2, y - 2, label, { f: 'm', size: 13.5, fill: color }));
  }
  lane(80, 330, 'TCP: connection first', C.green);
  msg(80, 330, 100, '1. SYN', C.cyan, true);
  msg(80, 330, 142, '2. SYN-ACK', C.cyan, false);
  msg(80, 330, 184, '3. ACK', C.cyan, true);
  msg(80, 330, 230, 'Data (numbered, resent if lost)', C.green, true);
  p.push(L(400, 40, 400, 300, { stroke: C.faint, sw: 1 }));
  lane(480, 730, 'UDP: just send', C.amber);
  msg(480, 730, 100, 'DNS query', C.amber, true);
  msg(480, 730, 142, 'DNS answer', C.amber, false);
  p.push(T(605, 214, 'No handshake, no delivery check.', { size: 13.5, fill: C.muted }));
  p.push(T(605, 234, 'Fast; used by DNS, NTP, voice, video.', { size: 13.5, fill: C.muted }));
  p.push(T(400, 326, 'In tcpdump: Flags [S] = SYN, [S.] = SYN-ACK, [.] = ACK, [P.] = data, [F.] = FIN (closing).', { size: 13.5, fill: C.muted }));
  FIG['tcp-handshake'] = svg(800, 344, 'TCP versus UDP. TCP: the client sends SYN, the server replies SYN-ACK, the client sends ACK, then data flows with numbering and retransmission. UDP: a DNS query goes out and an answer comes back with no handshake and no delivery check. In tcpdump, Flags S is SYN, S dot is SYN-ACK, dot is ACK, P dot is data, F dot is FIN.', p);
})();

// 3. Insecure to secure protocols
(function () {
  const p = [];
  const rows = [
    ['Telnet', '23', 'SSH', '22'],
    ['FTP', '20, 21', 'SFTP (in SSH) or FTPS (FTP + TLS)', '22 / TLS'],
    ['HTTP', '80', 'HTTPS (HTTP + TLS)', '443'],
    ['LDAP', '389', 'LDAPS', '636'],
    ['SNMP v1 / v2c', '161', 'SNMPv3 (login + encryption)', '161'],
    ['POP3 / IMAP', '110 / 143', 'POP3S / IMAPS', '995 / 993'],
    ['SMTP', '25', 'SMTPS, or STARTTLS on 25 / 587', '465 / 587'],
    ['DNS', '53', 'DNSSEC (signed); DoH or DoT', '53 / 443 / 853']
  ];
  p.push(tag(160, 30, 'CLEARTEXT', { fill: C.red }));
  p.push(tag(560, 30, 'SECURE REPLACEMENT', { fill: C.green }));
  const y0 = 46, rh = 42, g = 8;
  rows.forEach((r, i) => {
    const y = y0 + i * (rh + g);
    p.push(R(20, y, 280, rh, { stroke: C.red, sw: 1.5, so: 0.8 }));
    p.push(T(38, y + 27, r[0], { f: 'r', size: 19, a: 'start' }));
    p.push(T(286, y + 26, r[1], { f: 'm', size: 13.5, a: 'end', fill: C.muted }));
    p.push(arrow(306, y + rh / 2, 352, y + rh / 2, C.text, { so: 0.7, hl: 9, hw: 5 }));
    p.push(R(358, y, 422, rh, { stroke: C.green, sw: 1.5, so: 0.8 }));
    p.push(T(376, y + 27, r[2], { f: 'r', size: 18, a: 'start' }));
    p.push(T(766, y + 26, r[3], { f: 'm', size: 13.5, a: 'end', fill: C.muted }));
  });
  const yb = y0 + rows.length * (rh + g) + 14;
  p.push(T(400, yb, 'Use TLS 1.2 or 1.3. SSL and TLS 1.0 / 1.1 are deprecated.', { size: 13.5, fill: C.muted }));
  FIG['secure-protocols'] = svg(800, yb + 16, 'Cleartext protocols and their secure replacements: Telnet 23 to SSH 22; FTP 20 and 21 to SFTP (inside SSH) or FTPS (FTP with TLS); HTTP 80 to HTTPS 443; LDAP 389 to LDAPS 636; SNMP version 1 or 2c to SNMPv3; POP3 110 and IMAP 143 to POP3S 995 and IMAPS 993; SMTP 25 to SMTPS 465 or STARTTLS on 25 and 587; DNS 53 to DNSSEC for signed answers and DNS over HTTPS or TLS for encryption. Use TLS 1.2 or 1.3.', p);
})();

// 4. Cedar Creek network today
(function () {
  const p = [];
  const fw = [330, 196, 140, 72];
  const fx = fw[0] + fw[2] / 2, fy = fw[1] + fw[3] / 2;
  const zones = [
    [300, 16, 200, 64, C.text, 'OUTSIDE', ['Internet, NAT 198.51.100.24'], [400, 80], true],
    [20, 16, 230, 64, C.muted, 'GUEST', ['172.16.50.0/24, internet only'], [250, 64]],
    [550, 16, 230, 64, C.pink, 'VPN', ['Staff + HVAC vendor (one login)'], [550, 64], true],
    [20, 176, 230, 112, C.cyan, 'OFFICE', ['10.20.0.0/16', 'Office PCs, engineering', 'workstations, FS-HR01'], [250, 232], true],
    [550, 176, 230, 112, C.amber, 'SERVERS', ['10.10.0.0/16, 10.30.0.0/16', 'DC01, ENG-FS01,', 'ENG-APP02 (2012 R2)'], [550, 232], true],
    [20, 364, 360, 96, C.green, 'PLANT (one flat VLAN)', ['10.40.0.0/16: HMI, PLC, CNCs, HVAC-CTRL,', 'printers, and CC-PLANT Wi-Fi clients'], [330, 364], true],
    [420, 364, 360, 96, C.purple, 'MGMT', ['10.99.0.0/24: FW-CORE, switches,', 'IT-ADMIN-01, NVR-01, BADGE-CTRL'], [470, 364]]
  ];
  zones.forEach(z => p.push(L(z[7][0], z[7][1], fx, fy, { stroke: z[8] ? C.red : C.faint, sw: z[8] ? 3 : 2 })));
  zones.forEach(z => {
    p.push(card(z[0], z[1], z[2], z[3], z[4]));
    p.push(T(z[0] + 16, z[1] + 26, z[5], { f: 'r', size: 19, fill: z[4], a: 'start' }));
    z[6].forEach((s, i) => p.push(T(z[0] + 16, z[1] + 47 + i * 19, s, { size: 13.5, a: 'start' })));
  });
  p.push(R(fw[0], fw[1], fw[2], fw[3], { fill: C.panel, stroke: C.red, sw: 3 }));
  p.push(T(fx, fy - 4, 'FW-CORE', { f: 'r', size: 22 }));
  p.push(tag(fx, fy + 18, 'ROUTES ALL ZONES', { size: 11, ls: 1 }));
  const notes = [
    'Rules 6 and 7: plant and office reach each other on any port, both ways.',
    'Rule 8: the plant reaches every server on any port.',
    'Rule 12: the vendor VPN login reaches SERVERS and PLANT on any port.',
    'Rule 14: RDP from one vendor internet address is forwarded to ENG-APP02.',
    'Rule 21: any source to any destination, above Default-Deny. No working implicit deny.'
  ];
  p.push(R(20, 478, 760, 30 + notes.length * 21, { fill: C.red, fo: 0.07, stroke: C.red, sw: 1.5 }));
  p.push(tag(36, 500, 'RED LINKS: WHAT THE RULES ALLOW TODAY', { a: 'start', fill: C.red, ls: 1 }));
  notes.forEach((n, i) => p.push(T(36, 524 + i * 21, n, { size: 13.5, a: 'start' })));
  FIG['cc-network-today'] = svg(800, 478 + 30 + notes.length * 21 + 16, 'Cedar Creek network today. FW-CORE in the center routes all zones: OUTSIDE (internet, NAT 198.51.100.24), GUEST Wi-Fi, VPN (staff and the HVAC vendor on one login), OFFICE 10.20.0.0/16 including FS-HR01, SERVERS 10.10.0.0/16 and 10.30.0.0/16 including DC01 and ENG-APP02 on Windows Server 2012 R2, PLANT 10.40.0.0/16 as one flat VLAN with HMI, PLC, CNCs, HVAC controller, printers and plant Wi-Fi clients, and MGMT 10.99.0.0/24 with IT-ADMIN-01, NVR-01 and BADGE-CTRL. Red notes: rule 14 forwards RDP from one vendor internet address to ENG-APP02; rule 12 gives the vendor VPN any-port access to servers and plant; rules 6 and 7 let plant and office reach each other on any port; rule 8 lets the plant reach all servers; rule 21 allows any to any above Default-Deny.', p);
})();

// 5. Cedar Creek segmented design
(function () {
  const p = [];
  const fw = [330, 214, 140, 64];
  const fx = fw[0] + fw[2] / 2, fy = fw[1] + fw[3] / 2;
  const zones = [
    [20, 16, 230, 104, C.muted, 'GUEST', ['Internet only.', 'Isolated from everything', 'inside.']],
    [285, 16, 230, 104, C.text, 'SCREENED SUBNET', ['VPN portal and any public', 'service. Internet reaches', 'only this zone.']],
    [550, 16, 230, 104, C.pink, 'VPN (MFA required)', ['Staff: named accounts.', 'Vendor: HVAC-CTRL on', 'HTTPS only, per-tech login.']],
    [20, 194, 250, 104, C.cyan, 'OFFICE', ['To SERVERS: DNS, logon,', 'file shares only.', 'No direct path to the plant.']],
    [530, 194, 250, 104, C.amber, 'SERVERS', ['ENG-APP02 reachable only', 'from engineering PCs.', 'No RDP from the internet.']],
    [20, 372, 360, 110, C.green, 'PLANT / OT', ['Reached only from the jump host and', 'ENG-FS01 (SFTP to the CNCs). Plant Wi-Fi', 'on 802.1X, in its own segment.']],
    [420, 372, 360, 110, C.purple, 'MGMT + JUMP HOST', ['Admins: VPN + MFA, then the jump host,', 'then devices over SSH or HTTPS.', 'Every session logged.']]
  ];
  zones.forEach(z => {
    const zx = z[0] + z[2] / 2, zy = z[1] + z[3] / 2;
    const ex = zx < fw[0] ? z[0] + z[2] : zx > fw[0] + fw[2] ? z[0] : zx;
    const ey = zy < fw[1] ? z[1] + z[3] : zy > fw[1] + fw[3] ? z[1] : zy;
    p.push(L(ex, ey, fx, fy, { stroke: C.green, sw: 2, so: 0.55 }));
  });
  zones.forEach(z => {
    p.push(card(z[0], z[1], z[2], z[3], z[4]));
    p.push(T(z[0] + 16, z[1] + 26, z[5], { f: 'r', size: 19, fill: z[4], a: 'start' }));
    z[6].forEach((s, i) => p.push(T(z[0] + 16, z[1] + 49 + i * 19, s, { size: 13.5, a: 'start' })));
  });
  p.push(R(fw[0], fw[1], fw[2], fw[3], { fill: C.panel, stroke: C.green, sw: 3 }));
  p.push(T(fx, fy + 1, 'FW-CORE', { f: 'r', size: 22 }));
  p.push(tag(fx, fy + 20, 'DEFAULT DENY', { size: 11, ls: 1, fill: C.green }));
  p.push(T(400, 510, 'Every allow rule names a source, destination, and port, has an owner, and is logged.', { size: 13.5, fill: C.muted }));
  FIG['cc-network-zones'] = svg(800, 528, 'A segmented design for Cedar Creek with FW-CORE enforcing default deny in the center. GUEST: internet only. Screened subnet: the VPN portal and public services, the only zone the internet reaches. VPN with MFA: staff on named accounts, the HVAC vendor only to HVAC-CTRL over HTTPS with a login per technician. OFFICE: DNS, logon and file shares on the servers, no direct path to the plant. SERVERS: ENG-APP02 reachable only from engineering PCs, no RDP from the internet. PLANT and OT: reached only from the jump host and from ENG-FS01 using SFTP to the CNCs; plant Wi-Fi on 802.1X in its own segment. MGMT and jump host: admins use VPN with MFA, then the jump host, then SSH or HTTPS, all logged.', p);
})();

// 6. Full vs split tunnel
(function () {
  const p = [];
  function panel(x, title, split) {
    p.push(T(x + 185, 30, title, { f: 'r', size: 22, fill: split ? C.amber : C.cyan }));
    p.push(R(x, 92, 96, 56, { stroke: C.text, sw: 1.5, so: 0.6 })); p.push(T(x + 48, 117, 'Remote')); p.push(T(x + 48, 136, 'laptop'));
    p.push(R(x + 250, 52, 120, 56, { stroke: C.cyan, sw: 2 })); p.push(T(x + 310, 77, 'Company')); p.push(T(x + 310, 96, 'network'));
    p.push(R(x + 250, 178, 120, 56, { stroke: C.muted, sw: 2 })); p.push(T(x + 310, 203, 'Internet')); p.push(T(x + 310, 222, 'sites'));
    p.push('<path d="M' + (x + 96) + ' 112 C ' + (x + 170) + ' 112, ' + (x + 180) + ' 80, ' + (x + 250) + ' 80" fill="none" stroke="' + C.cyan + '" stroke-width="12" stroke-opacity="0.25"/>');
    p.push(arrow(x + 96, 112, x + 248, 80, C.cyan));
    p.push(tag(x + 160, 70, 'ENCRYPTED TUNNEL', { size: 11, ls: 1, fill: C.cyan }));
    if (split) {
      p.push(arrow(x + 96, 130, x + 248, 206, C.amber, { dash: '6 5' }));
      p.push(T(x + 150, 196, 'Direct', { size: 13, fill: C.amber, a: 'end' }));
    } else {
      p.push(arrow(x + 310, 108, x + 310, 176, C.cyan));
      p.push(T(x + 318, 146, 'via company', { size: 13, fill: C.cyan, a: 'start' }));
    }
  }
  panel(20, 'Full tunnel', false);
  panel(420, 'Split tunnel', true);
  p.push(L(400, 20, 400, 240, { stroke: C.faint, sw: 1 }));
  p.push(T(205, 268, 'All traffic can be inspected and filtered.', { size: 13.5, fill: C.muted }));
  p.push(T(605, 268, 'Faster, but web traffic skips company controls.', { size: 13.5, fill: C.muted }));
  FIG['vpn-tunnels'] = svg(800, 288, 'Full tunnel versus split tunnel VPN. In a full tunnel, the remote laptop sends all traffic through the encrypted tunnel to the company network, and internet traffic leaves from there, so it can be inspected. In a split tunnel, only company traffic uses the tunnel and internet traffic goes directly from the laptop, which is faster but skips company controls.', p);
})();

// 7. 802.1X
(function () {
  const p = [];
  const boxes = [
    [20, C.cyan, 'Supplicant', ['Laptop or phone', 'asking to connect']],
    [290, C.amber, 'Authenticator', ['Switch port or', 'wireless access point']],
    [560, C.green, 'Auth server', ['RADIUS: checks the', 'credentials and decides']]
  ];
  boxes.forEach(b => {
    p.push(card(b[0], 40, 220, 100, b[1]));
    p.push(T(b[0] + 110, 72, b[2], { f: 'r', size: 21, fill: b[1] }));
    b[3].forEach((s, i) => p.push(T(b[0] + 110, 98 + i * 19, s, { size: 13.5 })));
  });
  p.push(arrow(242, 70, 288, 70, C.text, { so: 0.8 })); p.push(T(265, 60, 'EAP', { f: 'm', size: 12, fill: C.muted }));
  p.push(arrow(512, 70, 558, 70, C.text, { so: 0.8 })); p.push(T(535, 60, 'RADIUS', { f: 'm', size: 12, fill: C.muted }));
  p.push(arrow(558, 112, 512, 112, C.green)); p.push(T(535, 160, 'Accept', { f: 'm', size: 12, fill: C.green }));
  p.push(arrow(288, 112, 242, 112, C.green)); p.push(T(265, 160, 'Port opens', { f: 'm', size: 12, fill: C.green }));
  const steps = [
    '1. The port is blocked except for EAP messages.',
    '2. The supplicant sends its credentials (EAP-TLS: a certificate; PEAP: a password inside TLS).',
    '3. The authenticator relays them to RADIUS and waits.',
    '4. RADIUS says accept or reject; NAC may also check posture and pick a VLAN.'
  ];
  steps.forEach((s, i) => p.push(T(40, 198 + i * 22, s, { size: 13.5, a: 'start', fill: i === 3 ? C.text : C.muted })));
  FIG['dot1x-flow'] = svg(800, 288, '802.1X network access control. The supplicant (a laptop or phone) sends EAP credentials to the authenticator (a switch port or wireless access point), which relays them over RADIUS to the authentication server. The server checks them and answers accept or reject; on accept the port opens. Steps: the port is blocked except for EAP; the supplicant sends credentials (a certificate with EAP-TLS or a password inside TLS with PEAP); the authenticator relays them; RADIUS decides, and NAC may also check posture and assign a VLAN.', p);
})();

// 8. Shared responsibility
(function () {
  const p = [];
  const layers = ['Data', 'Identities and access', 'Applications', 'Runtime and middleware', 'Operating system', 'Virtualization', 'Servers, storage, network', 'Physical data center'];
  const cols = [['On-premises', 8, 'Cedar Creek server room'], ['IaaS', 5, 'Rented virtual machines'], ['PaaS', 3, 'Platform for your code'], ['SaaS', 2, 'Microsoft 365, payroll']];
  const x0 = 200, cw = 145, gap = 5, y0 = 52, rh = 36, g = 4;
  layers.forEach((l, i) => p.push(T(x0 - 12, y0 + i * (rh + g) + 23, l, { size: 13.5, a: 'end' })));
  cols.forEach((c, j) => {
    const x = x0 + j * (cw + gap);
    p.push(T(x + cw / 2, 30, c[0], { f: 'r', size: 20 }));
    layers.forEach((l, i) => {
      const cust = i < c[1];
      const y = y0 + i * (rh + g);
      p.push(R(x, y, cw, rh, { fill: cust ? C.cyan : C.amber, fo: cust ? 0.16 : 0.12, stroke: cust ? C.cyan : C.amber, sw: 1.2, so: 0.6, rx: 6 }));
      p.push(T(x + cw / 2, y + 23, cust ? 'Customer' : 'Provider', { size: 13, fill: cust ? C.cyan : C.amber, w: 600 }));
    });
    p.push(T(x + cw / 2, y0 + 8 * (rh + g) + 16, c[2], { size: 12.5, fill: C.muted }));
  });
  const ly = y0 + 8 * (rh + g) + 46;
  p.push(T(400, ly, 'Data and access settings are always the customer\'s job, in every model.', { size: 13.5, w: 600 }));
  FIG['shared-responsibility'] = svg(800, ly + 18, 'Shared responsibility by service model. Layers from top: data, identities and access, applications, runtime and middleware, operating system, virtualization, servers storage and network, physical data center. On-premises: the customer manages all eight. IaaS: the customer manages data through the operating system; the provider manages virtualization, hardware and the data center. PaaS: the customer manages data, identities and applications. SaaS (for example Microsoft 365 and the payroll service): the customer manages data and identities and access; the provider runs everything else.', p);
})();

// 9. IT/OT zones
(function () {
  const p = [];
  const bands = [
    [C.text, 'INTERNET', 'Email, cloud, attackers'],
    [C.cyan, 'ENTERPRISE IT', 'Office PCs, file servers, email, ERP'],
    [C.purple, 'IT/OT DMZ', 'File transfer point, historian, jump host'],
    [C.amber, 'OT SUPERVISORY', 'HMIs such as PLANT-PC-07, engineering station'],
    [C.green, 'OT CONTROL', 'PLCs such as LINE2-PLC, CNC controllers'],
    [C.orange, 'PHYSICAL PROCESS', 'Line 2 motors, spindles, sensors']
  ];
  const x = 20, w = 560, y0 = 18, bh = 50, g = 20;
  bands.forEach((b, i) => {
    const y = y0 + i * (bh + g);
    p.push(R(x, y, w, bh, { fill: b[0], fo: 0.08, stroke: b[0], sw: 2 }));
    p.push(T(x + 16, y + 22, b[1], { f: 'r', size: 18, fill: b[0], a: 'start', ls: 1 }));
    p.push(T(x + 16, y + 41, b[2], { size: 13.5, a: 'start' }));
    if (i < 3) {
      const fy = y + bh + g / 2;
      p.push(L(x + 40, fy, x + w - 40, fy, { stroke: C.red, sw: 4, cap: 'round' }));
      p.push(R(x + w / 2 - 52, fy - 9, 104, 18, { fill: C.bg, rx: 4 }));
      p.push(T(x + w / 2, fy + 5, 'FIREWALL', { f: 'm', size: 12, fill: C.red, ls: 1.5 }));
    }
  });
  const ys = y0 + 1 * (bh + g) + bh / 2, ye = y0 + 4 * (bh + g) + bh / 2;
  p.push(arrow(640, ys, 640, ye, C.red, { dash: '7 5', sw: 2.5 }));
  p.push(L(600, ys, 640, ys, { stroke: C.red, sw: 2.5, dash: '7 5' }));
  p.push(T(652, ys + 70, 'Cedar Creek', { size: 13.5, a: 'start', fill: C.red, w: 600 }));
  p.push(T(652, ys + 89, 'today: an office', { size: 13.5, a: 'start', fill: C.red }));
  p.push(T(652, ys + 108, 'laptop reaches', { size: 13.5, a: 'start', fill: C.red }));
  p.push(T(652, ys + 127, 'the PLC directly', { size: 13.5, a: 'start', fill: C.red }));
  p.push(T(652, ys + 146, '(FW-CORE rule 7).', { size: 13.5, a: 'start', fill: C.red }));
  const yb = y0 + 6 * (bh + g) - 2;
  p.push(T(400, yb, 'Each level talks only to the level next to it. IT never talks to a PLC directly.', { size: 13.5, fill: C.muted }));
  FIG['it-ot-zones'] = svg(800, yb + 18, 'IT and OT separation in levels, top to bottom: internet; enterprise IT (office PCs, file servers, email, ERP); an IT/OT DMZ (file transfer point, historian, jump host); OT supervisory (HMIs such as PLANT-PC-07 and the engineering station); OT control (PLCs such as LINE2-PLC and CNC controllers); and the physical process (Line 2 motors, spindles, sensors). Firewalls separate internet, IT, the IT/OT DMZ and OT. A red dashed arrow shows Cedar Creek today: an office laptop reaches the PLC directly through FW-CORE rule 7.', p);
})();

// 10. Pentest phases
(function () {
  const p = [];
  const ph = [
    [C.cyan, 'Recon', ['OSINT, WHOIS,', 'DNS, job posts']],
    [C.cyan, 'Scanning', ['Nmap: hosts, ports,', 'services, versions']],
    [C.amber, 'Exploitation', ['Use a weakness', 'to gain access']],
    [C.amber, 'Post-exploit', ['Escalate, move,', 'show impact']],
    [C.amber, 'Reporting', ['Findings, risk,', 'and fixes']]
  ];
  const w = 140, gap = 15, x0 = 20, y = 64, h = 120;
  p.push(R(x0, 18, 2 * w + gap, 30, { fill: C.cyan, fo: 0.12, stroke: C.cyan, sw: 1.5, rx: 6 }));
  p.push(T(x0 + (2 * w + gap) / 2, 39, 'WEEK 4: MOCK PENTEST PART 1', { f: 'm', size: 12.5, fill: C.cyan, ls: 1 }));
  const x3 = x0 + 2 * (w + gap);
  p.push(R(x3, 18, 3 * w + 2 * gap, 30, { fill: C.amber, fo: 0.10, stroke: C.amber, sw: 1.5, rx: 6 }));
  p.push(T(x3 + (3 * w + 2 * gap) / 2, 39, 'WEEK 5: MOCK PENTEST PART 2', { f: 'm', size: 12.5, fill: C.amber, ls: 1 }));
  ph.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 24, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 52, s[1], { f: 'r', size: 20 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 78 + j * 19, l, { size: 13.5 })));
    if (i < 4) p.push(arrow(x + w + 1, y + h / 2, x + w + gap - 1, y + h / 2, C.text, { so: 0.7, hl: 7, hw: 4 }));
  });
  p.push(T(400, 214, 'Written authorization and rules of engagement come before phase 1.', { size: 13.5, fill: C.muted }));
  FIG['pentest-phases'] = svg(800, 232, 'The five phases of a penetration test: 1 reconnaissance (OSINT, WHOIS, DNS, job postings), 2 scanning (Nmap for hosts, ports, services and versions), 3 exploitation (use a weakness to gain access), 4 post-exploitation (escalate, move, show impact), and 5 reporting (findings, risk and fixes). Week 4 covers phases 1 and 2 as Mock Pentest part 1; Week 5 covers phases 3 to 5. Written authorization and rules of engagement come first.', p);
})();

// 11. Port states in a SYN scan
(function () {
  const p = [];
  const rows = [
    [C.green, 'OPEN', 'SYN-ACK', 'A service is listening. Nmap sends RST instead of finishing the handshake.'],
    [C.amber, 'CLOSED', 'RST', 'The host is there, but nothing listens on that port.'],
    [C.red, 'FILTERED', '', 'No reply at all, usually a firewall dropping the probe.']
  ];
  const nx = 150, tx = 520, y0 = 30, rh = 92;
  p.push(T(nx, 22, 'Nmap', { f: 'r', size: 18, fill: C.muted }));
  p.push(T(tx, 22, 'Target port', { f: 'r', size: 18, fill: C.muted }));
  rows.forEach((r, i) => {
    const y = y0 + i * rh + 10;
    p.push(T(20, y + 30, r[1], { f: 'r', size: 20, fill: r[0], a: 'start' }));
    p.push(arrow(nx, y + 12, r[2] ? tx - 6 : 396, y + 12, C.cyan, { sw: 2 }));
    p.push(T(r[2] ? (nx + tx) / 2 : (nx + 396) / 2, y + 6, 'SYN', { f: 'm', size: 12.5, fill: C.cyan }));
    if (r[2]) {
      p.push(arrow(tx - 6, y + 40, nx, y + 40, r[0], { sw: 2 }));
      p.push(T((nx + tx) / 2, y + 58, r[2], { f: 'm', size: 12.5, fill: r[0] }));
    } else {
      p.push(R(400, y - 4, 16, 34, { fill: C.red, fo: 0.25, stroke: C.red, sw: 1.5, rx: 3 }));
      p.push(T(408, y + 52, 'firewall', { f: 'm', size: 12, fill: C.red }));
      p.push(cross(408, y + 12, 7, C.red));
      p.push(T((nx + 390) / 2, y + 40, '... no answer (timeout)', { f: 'm', size: 12.5, fill: C.red }));
    }
    p.push(L(tx, y - 6, tx, y + 52, { stroke: C.faint, sw: 2 }));
    const words = r[3].split(' '), lines = [''];
    words.forEach(wd => { if ((lines[lines.length - 1] + ' ' + wd).trim().length > 30) lines.push(wd); else lines[lines.length - 1] = (lines[lines.length - 1] + ' ' + wd).trim(); });
    lines.forEach((ln, j) => p.push(T(548, y + 14 + j * 18, ln, { size: 13.5, a: 'start' })));
  });
  FIG['port-states'] = svg(800, y0 + 3 * rh + 6, 'How a SYN scan reads port states. Open: Nmap sends SYN and the port answers SYN-ACK, meaning a service is listening; Nmap sends RST instead of finishing the handshake. Closed: the port answers RST; the host is there but nothing listens. Filtered: no reply at all, usually because a firewall dropped the probe.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 4 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.\n';
out += '// Rebuild: node docs/tools/make_week4_figures.js course-w4-figures.js\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  const parts = FIG[id];
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + parts.map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
