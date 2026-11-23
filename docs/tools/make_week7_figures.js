// Rebuilds the Week 7 lesson diagrams. Usage (repo root): node docs/tools/make_week7_figures.js course-w7-figures.js
// Same palette, fonts, and helpers as docs/tools/make_week1_figures.js. Figure ids start with w7- so they never clash with other weeks.
const fs = require('fs');
const OUT = process.argv[2];

const C = { bg: '#0d0d1f', panel: '#131329', text: '#e8e8e8', muted: '#a0a0ac', faint: '#3a3a5c', red: '#ee2207', cyan: '#00f5ff', green: '#33d17a', amber: '#ffc23d', orange: '#ff8a4c', pink: '#ff7aa2', purple: '#b794ff' };
const F = { r: 'Rajdhani, Segoe UI, sans-serif', i: 'Inter, Segoe UI, sans-serif', m: 'Share Tech Mono, Consolas, monospace' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function T(x, y, s, o = {}) {
  const f = o.f || 'i';
  const size = o.size || (f === 'r' ? 20 : 14);
  const w = o.w || (f === 'r' ? 700 : (f === 'i' ? 500 : 400));
  return '<text x="' + x + '" y="' + y + '" font-family="' + F[f] + '" font-size="' + size + '" font-weight="' + w + '" fill="' + (o.fill || C.text) + '" text-anchor="' + (o.a || 'middle') + '"' +
    (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + '>' + esc(s) + '</text>';
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
    (o.so != null ? ' stroke-opacity="' + o.so + '"' : '') + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
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

const FIG = {};

// 1. Firewall generations
(function () {
  const p = [];
  const cols = [
    [C.amber, 'Stateless filter', 'Each packet alone', [1, 1, 0, 0], ['Checks: addresses,', 'ports, protocol', 'No memory of sessions']],
    [C.cyan, 'Stateful (layer 4)', 'Packets + open sessions', [1, 1, 1, 0], ['Checks: headers plus', 'the state table', 'Drops packets with no session']],
    [C.green, 'NGFW (layer 7)', 'Application, user, content', [1, 1, 1, 1], ['Checks: what the app', 'is doing, who the user is', 'Often includes IPS + TLS inspection']]
  ];
  const w = 238, gap = 23, x0 = 20, y = 20, h = 250;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, c[0]));
    p.push(T(cx, y + 32, c[1], { f: 'r', size: 22, fill: c[0] }));
    p.push(T(cx, y + 54, c[2], { fill: C.muted }));
    p.push(tag(cx, y + 82, 'WHAT IT READS'));
    const segs = [['IP', 34], ['TCP', 40], ['State', 52], ['Payload', 74]];
    let sx = x + 19;
    segs.forEach((s, j) => {
      const on = c[3][j];
      p.push(R(sx, y + 94, s[1], 30, { rx: 4, fill: on ? c[0] : C.panel, fo: on ? 0.22 : 1, stroke: on ? c[0] : C.faint, sw: 1.5 }));
      p.push(T(sx + s[1] / 2, y + 114, s[0], { f: 'm', size: 12, fill: on ? C.text : C.faint }));
      sx += s[1] + 4;
    });
    p.push(L(x + 18, y + 142, x + w - 18, y + 142, { stroke: C.faint, sw: 1 }));
    c[4].forEach((t, j) => p.push(T(cx, y + 168 + j * 22, t, { size: 14, fill: j === 2 ? C.muted : C.text })));
    if (i < 2) p.push(arrow(x + w + 2, y + 109, x + w + gap - 2, y + 109, C.text, { so: 0.6, hl: 8, hw: 5 }));
  });
  p.push(T(400, 296, 'Each generation reads deeper into the traffic. Only the NGFW can tell what an allowed connection is doing.', { size: 13.5, fill: C.muted }));
  FIG['w7-fw-generations'] = svg(800, 312, 'Three firewall generations side by side. A stateless filter reads only the IP and TCP headers of each packet with no memory of sessions. A stateful (layer 4) firewall also reads its state table of open sessions and drops packets that belong to no session. A next-generation (layer 7) firewall also reads the payload: the application, the user, and the content, and often includes IPS and TLS inspection.', p);
})();

// 2. Screened subnet
(function () {
  const p = [];
  const y = 70, h = 150;
  p.push(card(16, y, 132, h, C.red));
  p.push(T(82, y + 58, 'Internet', { f: 'r', size: 22, fill: C.red }));
  p.push(T(82, y + 82, 'Untrusted', { fill: C.muted }));
  function fw(x, label) {
    p.push(R(x, y - 6, 54, h + 12, { fill: C.panel, stroke: C.amber, sw: 2, rx: 6 }));
    for (let k = 0; k < 6; k++) p.push(L(x + 6, y + 14 + k * 24, x + 48, y + 14 + k * 24, { stroke: C.amber, sw: 1, so: 0.45 }));
    p.push(tag(x + 27, y + h + 32, label, { size: 12, fill: C.amber, ls: 1 }));
  }
  fw(176, 'FIREWALL 1');
  p.push(card(258, y, 220, h, C.cyan));
  p.push(T(368, y + 32, 'Screened subnet (DMZ)', { f: 'r', size: 17, fill: C.cyan }));
  p.push(T(368, y + 52, 'Semi-trusted', { fill: C.muted }));
  [['Public web server', y + 84], ['Email gateway', y + 114]].forEach(s => { p.push(R(282, s[1] - 18, 172, 26, { rx: 5, fill: C.bg, stroke: C.cyan, sw: 1, so: 0.6 })); p.push(T(368, s[1], s[0], { size: 13.5 })); });
  fw(506, 'FIREWALL 2');
  p.push(card(588, y, 196, h, C.green));
  p.push(T(686, y + 32, 'Internal network', { f: 'r', size: 20, fill: C.green }));
  p.push(T(686, y + 52, 'Trusted', { fill: C.muted }));
  [['Office PCs', y + 84], ['File servers, DC', y + 114]].forEach(s => { p.push(R(610, s[1] - 18, 152, 26, { rx: 5, fill: C.bg, stroke: C.green, sw: 1, so: 0.6 })); p.push(T(686, s[1], s[0], { size: 13.5 })); });
  p.push(arrow(148, 44, 258, 44, C.text, { so: 0.7 }));
  p.push(T(203, 34, 'Allow 443 to web', { size: 12.5, fill: C.muted }));
  p.push(arrow(478, 44, 588, 44, C.text, { so: 0.7 }));
  p.push(T(533, 34, 'Only what web needs', { size: 12.5, fill: C.muted }));
  p.push(L(150, 22, 586, 22, { stroke: C.red, sw: 1.5, dash: '5 5' }));
  p.push(T(368, 16, 'Internet to internal: no direct path', { size: 12.5, fill: C.red }));
  p.push(T(400, 274, 'If the web server is taken over, the attacker still faces Firewall 2 before reaching office PCs and file servers.', { size: 13.5, fill: C.muted }));
  FIG['w7-screened-subnet'] = svg(800, 292, 'Screened subnet diagram. The internet (untrusted) connects through Firewall 1, which allows only port 443 to the public web server, into the screened subnet or DMZ (semi-trusted) holding the public web server and an email gateway. Firewall 2 allows only what the web server needs into the internal network (trusted) with office PCs, file servers, and the domain controller. There is no direct path from the internet to the internal network.', p);
})();

// 3. IDS vs IPS placement
(function () {
  const p = [];
  function node(x, y, w, label, color) { p.push(R(x, y, w, 40, { rx: 8, fill: C.panel, stroke: color, sw: 2 })); p.push(T(x + w / 2, y + 26, label, { size: 14, w: 600 })); }
  // IDS row
  p.push(T(20, 34, 'IDS: PASSIVE', { f: 'm', size: 14, fill: C.cyan, a: 'start', ls: 1.5 }));
  node(20, 52, 120, 'Internet', C.red);
  node(260, 52, 120, 'Switch', C.text);
  node(520, 52, 140, 'Servers', C.green);
  p.push(arrow(140, 72, 258, 72, C.text, { so: 0.7 }));
  p.push(arrow(380, 72, 518, 72, C.text, { so: 0.7 }));
  p.push(T(450, 64, 'traffic flows on', { size: 12, fill: C.muted }));
  p.push(arrow(320, 92, 320, 140, C.cyan, { dash: '5 4' }));
  p.push(T(332, 122, 'copy (SPAN port or tap)', { size: 12.5, fill: C.cyan, a: 'start' }));
  node(255, 142, 130, 'IDS sensor', C.cyan);
  p.push(arrow(385, 162, 470, 162, C.amber));
  p.push(R(472, 146, 200, 32, { rx: 16, fill: C.amber, fo: 0.15, stroke: C.amber, sw: 1.5 }));
  p.push(T(572, 167, 'Alert. A person must act.', { size: 13, fill: C.amber }));
  p.push(L(20, 204, 780, 204, { stroke: C.faint, sw: 1 }));
  // IPS row
  p.push(T(20, 236, 'IPS: INLINE', { f: 'm', size: 14, fill: C.green, a: 'start', ls: 1.5 }));
  node(20, 254, 120, 'Internet', C.red);
  node(220, 254, 120, 'IPS', C.green);
  node(410, 254, 110, 'Switch', C.text);
  node(600, 254, 140, 'Servers', C.green);
  p.push(arrow(140, 274, 218, 274, C.text, { so: 0.7 }));
  p.push(arrow(340, 274, 408, 274, C.text, { so: 0.7 }));
  p.push(arrow(520, 274, 598, 274, C.text, { so: 0.7 }));
  p.push(L(268, 304, 292, 328, { stroke: C.red, sw: 3 })); p.push(L(292, 304, 268, 328, { stroke: C.red, sw: 3 }));
  p.push(T(304, 322, 'Drops the attack before it arrives', { size: 13, fill: C.red, a: 'start' }));
  p.push(T(400, 356, 'An IDS cannot slow the network but cannot stop anything. An IPS can block, and can also block by mistake.', { size: 13.5, fill: C.muted }));
  FIG['w7-ids-ips'] = svg(800, 374, 'IDS versus IPS placement. Top row: traffic flows from the internet through a switch to the servers, and a copy of the traffic goes from a SPAN port or tap to an IDS sensor, which only raises an alert that a person must act on. Bottom row: traffic flows from the internet through an inline IPS, then the switch, then the servers, and the IPS drops the attack before it arrives.', p);
})();

// 4. Alert outcome matrix
(function () {
  const p = [];
  const x0 = 170, y0 = 64, cw = 300, ch = 120;
  p.push(T(x0 + cw / 2, 40, 'Attack really happened', { f: 'r', size: 18 }));
  p.push(T(x0 + cw + 10 + cw / 2, 40, 'Nothing bad happened', { f: 'r', size: 18 }));
  p.push(T(84, y0 + ch / 2 + 6, 'Alert raised', { f: 'r', size: 18 }));
  p.push(T(84, y0 + ch + 10 + ch / 2 + 6, 'No alert', { f: 'r', size: 18 }));
  const cells = [
    [0, 0, C.green, 'True positive', 'Real attack, real alert', 'Large upload alert on MKT-LT-02'],
    [1, 0, C.amber, 'False positive', 'Harmless, but alerted: noise', 'Payroll portal on port 8443'],
    [0, 1, C.red, 'False negative', 'Real attack, silence: worst case', 'Equifax: uninspected encrypted traffic'],
    [1, 1, C.green, 'True negative', 'Harmless, and quiet', 'Friday afternoon web browsing']
  ];
  cells.forEach(c => {
    const x = x0 + c[0] * (cw + 10), y = y0 + c[1] * (ch + 10), cx = x + cw / 2;
    p.push(R(x, y, cw, ch, { fill: c[2], fo: 0.08, stroke: c[2], sw: 2 }));
    p.push(T(cx, y + 34, c[3], { f: 'r', size: 22, fill: c[2] }));
    p.push(T(cx, y + 58, c[4]));
    p.push(tag(cx, y + 84, 'EXAMPLE', { size: 11 }));
    p.push(T(cx, y + 104, c[5], { size: 13.5, fill: C.muted }));
  });
  p.push(T(400, 344, 'Tuning reduces false positives without creating false negatives. Switching a rule off does the opposite.', { size: 13.5, fill: C.muted }));
  FIG['w7-alert-matrix'] = svg(800, 362, 'Alert outcome matrix with four boxes. True positive: a real attack and a real alert, for example the large upload alert on MKT-LT-02. False positive: harmless activity that raised an alert, for example the payroll portal on port 8443. False negative: a real attack with no alert, the worst case, for example Equifax\'s uninspected encrypted traffic. True negative: harmless activity and no alert, for example Friday afternoon web browsing.', p);
})();

// 5. SIEM pipeline
(function () {
  const p = [];
  const srcs = ['Firewall', 'IDS / IPS', 'EDR', 'DNS', 'DC01 sign-ins', 'Apps / cloud'];
  p.push(tag(70, 30, 'LOG SOURCES'));
  srcs.forEach((s, i) => {
    const y = 42 + i * 38;
    p.push(R(14, y, 112, 30, { rx: 6, fill: C.panel, stroke: C.faint, sw: 1.5 }));
    p.push(T(70, y + 20, s, { size: 13 }));
    p.push(L(126, y + 15, 150, 144, { stroke: C.faint, sw: 1.2 }));
  });
  const stages = [
    [C.cyan, 'Collect', ['Agents, syslog,', 'API pulls']],
    [C.purple, 'Normalize', ['Parse formats,', 'common fields,', 'NTP time']],
    [C.amber, 'Correlate', ['Rules across', 'sources, time,', 'host, account']],
    [C.red, 'Alert', ['Dashboard,', 'ticket, on-call', 'analyst']]
  ];
  const w = 132, gap = 22, x0 = 156, y = 82, h = 124;
  stages.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(T(cx, y + 32, s[1], { f: 'r', size: 21, fill: s[0] }));
    s[2].forEach((t, j) => p.push(T(cx, y + 60 + j * 19, t, { size: 13 })));
    if (i < 3) p.push(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, C.text, { so: 0.7, hl: 8, hw: 5 }));
  });
  p.push(R(x0, 226, 4 * w + 3 * gap, 34, { rx: 8, fill: C.panel, stroke: C.green, sw: 1.5 }));
  p.push(T(x0 + (4 * w + 3 * gap) / 2, 248, 'Retain: keep logs searchable for weeks and archived for longer, because breaches are found late', { size: 13 }));
  p.push(T(400, 290, 'A SIEM detects and alerts. People and playbooks (SOAR) do the responding.', { size: 13.5, fill: C.muted }));
  FIG['w7-siem-pipeline'] = svg(800, 308, 'SIEM pipeline. Log sources (firewall, IDS or IPS, EDR, DNS, DC01 sign-ins, apps and cloud) feed four stages: Collect (agents, syslog, API pulls), Normalize (parse formats into common fields with NTP time), Correlate (rules across sources by time, host, and account), and Alert (dashboard, ticket, on-call analyst). Underneath, Retain keeps logs searchable for weeks and archived for longer, because breaches are found late.', p);
})();

// 6. Antivirus vs EDR
(function () {
  const p = [];
  p.push(card(16, 20, 330, 270, C.amber));
  p.push(T(181, 52, 'Antivirus', { f: 'r', size: 24, fill: C.amber }));
  p.push(T(181, 74, 'Does this file match something known?', { fill: C.muted }));
  p.push(R(46, 96, 270, 34, { rx: 6, fill: C.bg, stroke: C.faint, sw: 1.5 }));
  p.push(T(181, 118, 'Q4_Invoice_Review.xlsm', { f: 'm', size: 14 }));
  p.push(arrow(181, 132, 181, 156, C.text, { so: 0.7 }));
  p.push(R(46, 158, 270, 34, { rx: 6, fill: C.bg, stroke: C.faint, sw: 1.5 }));
  p.push(T(181, 180, 'hash 9f2c...  vs  signature list', { f: 'm', size: 13 }));
  p.push(arrow(181, 194, 181, 218, C.text, { so: 0.7 }));
  p.push(T(181, 238, 'No match: new file, allowed to run', { size: 14, w: 600, fill: C.red }));
  p.push(T(181, 266, 'Blind to zero-days and changed files', { size: 13, fill: C.muted }));

  p.push(card(366, 20, 418, 270, C.cyan));
  p.push(T(575, 52, 'EDR', { f: 'r', size: 24, fill: C.cyan }));
  p.push(T(575, 74, 'What is this program doing?', { fill: C.muted }));
  const chain = [['EXCEL.EXE opens the document', C.text], ['powershell.exe -enc ...', C.amber], ['synchelper.exe added to Run key', C.amber], ['Connects out every 10 minutes', C.red]];
  chain.forEach((c, i) => {
    const y = 92 + i * 38, x = 392 + i * 16;
    p.push(R(x, y, 300, 28, { rx: 6, fill: C.bg, stroke: c[1], sw: 1.5, so: 0.8 }));
    p.push(T(x + 150, y + 19, c[0], { f: 'm', size: 12.5 }));
    if (i < 3) p.push(L(x + 10, y + 28, x + 10, y + 38, { stroke: C.faint, sw: 1.5 }));
  });
  p.push(R(392, 248, 176, 30, { rx: 6, fill: C.green, fo: 0.12, stroke: C.green, sw: 1.5 }));
  p.push(T(480, 268, 'Protect: kill + isolate', { size: 13, fill: C.green }));
  p.push(R(584, 248, 176, 30, { rx: 6, fill: C.amber, fo: 0.12, stroke: C.amber, sw: 1.5 }));
  p.push(T(672, 268, 'Detect: alert only', { size: 13, fill: C.amber }));
  p.push(T(400, 316, 'The same macro: antivirus sees an unknown file; EDR sees a chain of suspicious behavior.', { size: 13.5, fill: C.muted }));
  FIG['w7-av-vs-edr'] = svg(800, 334, 'Antivirus versus EDR. Antivirus hashes the file Q4_Invoice_Review.xlsm and compares it with a signature list; with no match the new file is allowed to run, so antivirus is blind to zero-days and changed files. EDR watches behavior: Excel opens the document, PowerShell runs an encoded command, synchelper.exe is added to the Run key, and the laptop connects out every 10 minutes. Under a Protect policy EDR kills the process and isolates the host; under Detect it only alerts.', p);
})();

// 7. Patch cycle
(function () {
  const p = [];
  const cx = 400, cy = 190, rr = 132;
  const steps = [
    [C.cyan, 'Inventory', 'Know every system'],
    [C.purple, 'Monitor', 'Advisories, KEV'],
    [C.amber, 'Prioritize', 'Severity + exposure'],
    [C.orange, 'Test', 'Pilot, rollback plan'],
    [C.green, 'Deploy', 'Waves, change mgmt'],
    [C.pink, 'Verify + report', 'Rescan, exceptions']
  ];
  const pts = steps.map((s, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [cx + rr * 1.55 * Math.cos(a), cy + rr * Math.sin(a)]; });
  p.push('<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rr * 1.55) + '" ry="' + rr + '" fill="none" stroke="' + C.faint + '" stroke-width="2" stroke-dasharray="6 6"/>');
  steps.forEach((s, i) => {
    const [x, y] = pts[i];
    p.push(R(x - 82, y - 30, 164, 60, { fill: C.panel, stroke: s[0], sw: 2 }));
    p.push(T(x, y - 4, (i + 1) + '. ' + s[1], { f: 'r', size: 19, fill: s[0] }));
    p.push(T(x, y + 17, s[2], { size: 13, fill: C.muted }));
  });
  for (let i = 0; i < 6; i++) {
    const a = (-90 + i * 60 + 30) * Math.PI / 180;
    const x = cx + rr * 1.55 * Math.cos(a), y = cy + rr * Math.sin(a);
    const t = [-Math.sin(a) * rr * 1.55, Math.cos(a) * rr]; const n = Math.hypot(t[0], t[1]);
    p.push(arrow(+(x - t[0] / n * 12).toFixed(1), +(y - t[1] / n * 12).toFixed(1), +(x + t[0] / n * 12).toFixed(1), +(y + t[1] / n * 12).toFixed(1), C.text, { so: 0.7, hl: 9, hw: 5 }));
  }
  p.push(T(cx, cy - 6, 'Patch management', { f: 'r', size: 22 }));
  p.push(T(cx, cy + 16, 'repeats every month', { fill: C.muted }));
  FIG['w7-patch-cycle'] = svg(800, 380, 'Patch management cycle with six steps around a loop: 1 Inventory (know every system), 2 Monitor (vendor advisories and the CISA KEV catalog), 3 Prioritize (severity plus exposure), 4 Test (pilot group and a rollback plan), 5 Deploy (in waves, through change management), 6 Verify and report (rescan and record exceptions), then back to inventory. The cycle repeats every month.', p);
})();

// 8. Two 2017 timelines
(function () {
  const p = [];
  const x0 = 110, x1 = 770;
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const mx = m => x0 + (x1 - x0) * m / 6.5;
  months.forEach((m, i) => { p.push(L(mx(i), 40, mx(i), 286, { stroke: C.faint, sw: 1, so: 0.5 })); p.push(T(mx(i) + 4, 30, m + ' 2017', { size: 12, fill: C.muted, a: 'start' })); });
  function lane(y, color, name, events) {
    p.push(T(14, y + 5, name, { f: 'r', size: 19, fill: color, a: 'start' }));
    p.push(L(x0, y, x1, y, { stroke: color, sw: 3, so: 0.5 }));
    events.forEach(e => {
      const x = mx(e[0]);
      p.push(Circ(x, y, 7, { fill: e[3] || color, stroke: C.bg, sw: 2 }));
      e[1].forEach((t, j) => p.push(T(x, y + (e[2] > 0 ? 26 + j * 17 : -16 - (e[1].length - 1 - j) * 17), t, { size: 12.5, fill: j === 0 ? C.text : C.muted })));
    });
  }
  lane(110, C.cyan, 'WannaCry', [
    [0.45, ['MS17-010 released', 'patch available'], 1, C.green],
    [1.45, ['EternalBlue', 'exploit leaked'], -1],
    [2.38, ['WannaCry spreads', 'May 12'], 1, C.red]
  ]);
  lane(232, C.amber, 'Equifax', [
    [0.2, ['Struts fix + US-CERT', 'notice (early March)'], -1, C.green],
    [2.42, ['Attackers in portal', 'May 13'], 1, C.red],
    [4.94, ['Intrusion detected', 'July 29'], -1],
    [6.2, ['Announced', 'Sept 7'], 1]
  ]);
  p.push(T(400, 312, 'Green: the fix was available. Red: the damage started. Both gaps were about two months.', { size: 13.5, fill: C.muted }));
  FIG['w7-patch-timelines'] = svg(800, 330, 'Two 2017 timelines from March to September. WannaCry: Microsoft released patch MS17-010 in March, the EternalBlue exploit was leaked in April, and WannaCry spread on May 12. Equifax: the Apache Struts fix and the US-CERT notice came in early March, attackers entered the dispute portal on May 13, the intrusion was detected on July 29, and the breach was announced on September 7. In both cases the fix was available about two months before the damage started.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 7 lesson diagrams (inline SVG strings). Built by docs/tools/make_week7_figures.js. Used by Lesson.html via section.figure = { id, caption }.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  const parts = FIG[id];
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + parts.map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
