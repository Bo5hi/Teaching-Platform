// Rebuilds the Week 1 lesson diagrams. Usage (repo root): node docs/tools/make_week1_figures.js course-w1-figures.js
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
  return L(x1, y1, +bx.toFixed(1), +by.toFixed(1), { stroke: color, sw: o.sw || 2, so: o.so }) + '<polygon points="' + p + '" fill="' + color + '"' + (o.so != null ? ' fill-opacity="' + o.so + '"' : '') + '/>';
}
function svg(w, h, label, parts) {
  return ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label) + '">', R(0, 0, w, h, { fill: C.bg, rx: 12 })].concat(parts, ['</svg>']);
}
const card = (x, y, w, h, color) => R(x, y, w, h, { stroke: color, sw: 2 });
const tag = (x, y, s, o = {}) => T(x, y, s, Object.assign({ f: 'm', size: 13, fill: C.muted, ls: 1.5 }, o));

const FIG = {};

// 1. CIA triad
(function () {
  const p = [];
  p.push('<polygon points="400,82 170,398 630,398" fill="' + C.panel + '" fill-opacity="0.55" stroke="' + C.text + '" stroke-opacity="0.22" stroke-width="2"/>');
  p.push(T(400, 284, 'CIA TRIAD', { f: 'r', size: 26, ls: 2 }));
  p.push(T(400, 308, 'Weigh all three', { fill: C.muted }));
  p.push(T(400, 326, 'for every system', { fill: C.muted }));
  function node(cx, cy, color, head, q, ex) {
    const x = cx - 150, y = cy - 62;
    p.push(card(x, y, 300, 124, color));
    p.push(T(cx, y + 30, head, { f: 'r', size: 22, fill: color }));
    p.push(T(cx, y + 53, q, { fill: C.muted }));
    p.push(L(x + 20, y + 66, x + 280, y + 66, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 87, 'CEDAR CREEK'));
    p.push(T(cx, y + 109, ex, { size: 15, w: 600 }));
  }
  node(400, 82, C.cyan, 'Confidentiality', 'Can only the right people read it?', 'Engineering drawings leaked');
  node(170, 398, C.amber, 'Integrity', 'Is it accurate and unchanged?', 'Payroll bank account altered');
  node(630, 398, C.green, 'Availability', 'Is it there when it is needed?', 'Line 2 HMI (PLANT-PC-07) down');
  FIG['cia-triad'] = svg(800, 480, 'CIA triad diagram. A triangle with Confidentiality at the top (only the right people can read it; Cedar Creek example: engineering drawings leaked), Integrity at the lower left (accurate and unchanged; example: a payroll bank account altered), and Availability at the lower right (there when needed; example: the Line 2 HMI, PLANT-PC-07, down).', p);
})();

// 2. AAA flow
(function () {
  const p = [];
  const items = [
    [C.cyan, 'Authentication', 'Who are you?', 'Badge (have) + PIN (know)', 'at the server room door'],
    [C.amber, 'Authorization', 'What may you do?', 'Server room access list', 'decides who may enter'],
    [C.green, 'Accounting', 'What did you do?', 'BADGE-CTRL logs every', 'swipe with a timestamp']
  ];
  const w = 228, gap = 38, x0 = 20, y = 20, h = 156;
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, it[0]));
    p.push(T(cx, y + 34, it[1], { f: 'r', size: 22, fill: it[0] }));
    p.push(T(cx, y + 59, it[2], { size: 15, w: 600 }));
    p.push(L(x + 18, y + 74, x + w - 18, y + 74, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 96, 'CEDAR CREEK'));
    p.push(T(cx, y + 118, it[3]));
    p.push(T(cx, y + 137, it[4]));
    if (i < 2) p.push(arrow(x + w + 4, y + h / 2, x + w + gap - 4, y + h / 2, C.text, { so: 0.7 }));
  });
  p.push(T(400, 212, 'Always in this order: prove identity, then check permissions, then record the action.', { fill: C.muted }));
  p.push(T(400, 234, 'Shared logins such as ccadmin break accounting: the log shows the account, not the person.', { fill: C.muted }));
  FIG['aaa-flow'] = svg(800, 256, 'AAA flow diagram. Authentication (who are you? Cedar Creek: badge plus PIN at the server room door) leads to Authorization (what may you do? the server room access list decides who may enter) which leads to Accounting (what did you do? BADGE-CTRL logs every swipe with a timestamp).', p);
})();

// 3. NIST CSF 2.0 wheel
(function () {
  const p = [];
  const cx = 400, cy = 240, RO = 215, RI = 92, RM = 160;
  const pt = (a, r) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  const f = n => n.toFixed(1);
  const segs = [
    [-90, C.cyan, 'Identify', 'Know your assets'],
    [-18, C.green, 'Protect', 'Add safeguards'],
    [54, C.amber, 'Detect', 'Spot problems fast'],
    [126, C.orange, 'Respond', 'Act on incidents'],
    [198, C.pink, 'Recover', 'Restore service']
  ];
  segs.forEach(s => {
    const a0 = s[0] - 34, a1 = s[0] + 34;
    const o0 = pt(a0, RO), o1 = pt(a1, RO), i1 = pt(a1, RI), i0 = pt(a0, RI);
    p.push('<path d="M' + f(o0[0]) + ' ' + f(o0[1]) + ' A' + RO + ' ' + RO + ' 0 0 1 ' + f(o1[0]) + ' ' + f(o1[1]) + ' L' + f(i1[0]) + ' ' + f(i1[1]) + ' A' + RI + ' ' + RI + ' 0 0 0 ' + f(i0[0]) + ' ' + f(i0[1]) + ' Z" fill="' + s[1] + '" fill-opacity="0.13" stroke="' + s[1] + '" stroke-width="2"/>');
    const l = pt(s[0], RM);
    p.push(T(f(l[0]), f(l[1] - 2), s[2], { f: 'r', size: 22, fill: s[1] }));
    p.push(T(f(l[0]), f(l[1] + 19), s[3]));
  });
  p.push(Circ(cx, cy, 80, { fill: C.panel, stroke: C.purple }));
  p.push(T(cx, cy - 8, 'Govern', { f: 'r', size: 24, fill: C.purple }));
  p.push(T(cx, cy + 14, 'Strategy, policy,', { size: 13.5 }));
  p.push(T(cx, cy + 32, 'and oversight', { size: 13.5 }));
  FIG['nist-csf'] = svg(800, 480, 'NIST Cybersecurity Framework 2.0 wheel. Govern (strategy, policy, and oversight) sits in the center. Around it are Identify (know your assets), Protect (add safeguards), Detect (spot problems fast), Respond (act on incidents), and Recover (restore service).', p);
})();

// 4. Controls grid
(function () {
  const p = [];
  const types = [['Preventive', 'Stops it', C.cyan], ['Deterrent', 'Discourages', C.amber], ['Detective', 'Finds it', C.green], ['Corrective', 'Restores', C.orange], ['Compensating', 'Substitutes', C.purple], ['Directive', 'Tells people', C.pink]];
  const cats = [['Technical', 'A system', 'enforces it'], ['Managerial', 'A written', 'decision'], ['Operational', 'People follow', 'a process'], ['Physical', 'You can', 'touch it']];
  const cells = [
    [[['Screen lock', 'after 15 min'], ['ENG-FS01', 'share login']], [], [['EDR on', 'office PCs'], ['Temp + water', 'sensors']], [], [['Isolate', 'ENG-APP02', '~recommended']], []],
    [[], [['Engineer', 'NDA']], [], [], [], [['Acceptable', 'Use Policy'], ['Data labels']]],
    [[['Help desk', 'callback'], ['Awareness', 'training']], [], [['Sign-in', 'sheet'], ['Phishing', 'reports']], [], [], [['Evacuation', 'plan']]],
    [[['8-ft fence'], ['Badge + PIN', 'server door']], [['Pole lights'], ['Warning', 'signs']], [['Hallway and', 'dock cameras']], [['FM-200 fire', 'suppression'], ['UPS +', 'generator']], [], [['Authorized', 'Personnel', 'Only signs']]]
  ];
  const m = 12, hw = 128, gap = 4, cw = 104, hh = 62, lh = 19, exGap = 9;
  const colX = i => m + hw + gap + i * (cw + gap);
  p.push(tag(m + 8, m + 26, 'ROWS: CATEGORY', { a: 'start', ls: 0.5 }));
  p.push(tag(m + 8, m + 46, 'COLUMNS: TYPE', { a: 'start', ls: 0.5 }));
  types.forEach((t, i) => {
    const x = colX(i);
    p.push(R(x, m, cw, hh, { fill: C.panel }));
    p.push(R(x, m, cw, 4, { fill: t[2], rx: 2 }));
    p.push(T(x + cw / 2, m + 30, t[0], { f: 'r', size: 18, fill: t[2] }));
    p.push(T(x + cw / 2, m + 50, t[1], { size: 13, fill: C.muted }));
  });
  let y = m + hh + gap;
  cats.forEach((c, r) => {
    const blocks = cells[r].map(ex => ex.reduce((n, e) => n + e.length, 0) * lh + Math.max(0, ex.length - 1) * exGap);
    const h = Math.max(84, Math.max.apply(null, blocks) + 26);
    p.push(R(m, y, hw, h, { fill: C.panel }));
    p.push(R(m, y, 4, h, { fill: C.text, fo: 0.5, rx: 2 }));
    p.push(T(m + 18, y + h / 2 - 8, c[0], { f: 'r', size: 20, a: 'start' }));
    p.push(T(m + 18, y + h / 2 + 12, c[1], { size: 13, fill: C.muted, a: 'start' }));
    p.push(T(m + 18, y + h / 2 + 29, c[2], { size: 13, fill: C.muted, a: 'start' }));
    cells[r].forEach((ex, i) => {
      const x = colX(i);
      if (!ex.length) { p.push(R(x, y, cw, h, { fill: '#0a0a18', stroke: '#ffffff', sw: 1, so: 0.06 })); return; }
      p.push(R(x, y, cw, h, { fill: C.panel, stroke: types[i][2], sw: 1.5, so: 0.55 }));
      let ty = y + (h - blocks[i]) / 2 + 14;
      ex.forEach(e => {
        e.forEach(line => {
          const mut = line[0] === '~';
          p.push(T(x + cw / 2, ty, mut ? line.slice(1) : line, mut ? { size: 13, fill: C.muted } : { f: 'r', size: 16, w: 600 }));
          ty += lh;
        });
        ty += exGap;
      });
    });
    y += h + gap;
  });
  p.push(T(400, y + 22, 'Filled cells: Cedar Creek controls from the walk-through. Blank cells: no example there.', { size: 13.5, fill: C.muted }));
  p.push(T(400, y + 42, 'Some controls earn a second type: cameras also deter, and the NDA is also directive.', { size: 13.5, fill: C.muted }));
  FIG['controls-grid'] = svg(800, y + 58, 'Security controls grid. Rows are the four categories (Technical, Managerial, Operational, Physical); columns are the six types (Preventive, Deterrent, Detective, Corrective, Compensating, Directive). Cedar Creek examples: Technical preventive: screen lock and ENG-FS01 share login; technical detective: EDR and temperature and water sensors; technical compensating: isolating ENG-APP02 (recommended). Managerial deterrent: engineer NDA; managerial directive: Acceptable Use Policy and data labels. Operational preventive: help desk callback and awareness training; operational detective: sign-in sheet and phishing reports; operational directive: evacuation plan. Physical preventive: 8-foot fence and badge plus PIN server door; physical deterrent: pole lights and warning signs; physical detective: cameras; physical corrective: FM-200 fire suppression and UPS plus generator; physical directive: Authorized Personnel Only signs.', p);
})();

// 5. Threat actors chart
(function () {
  const p = [];
  const x0 = 120, x1 = 780, y0 = 24, y1 = 430, mid = 450;
  p.push(R(x0, y0, mid - x0, y1 - y0, { fill: C.green, fo: 0.04, rx: 0 }));
  p.push(R(mid, y0, x1 - mid, y1 - y0, { fill: C.cyan, fo: 0.04, rx: 0 }));
  p.push(L(mid, y0, mid, y1, { stroke: C.text, so: 0.18, sw: 1.5, dash: '6 6' }));
  p.push(arrow(x0, y1, x0, y0 - 4, C.text, { so: 0.6 }));
  p.push(arrow(x0, y1, x1 + 6, y1, C.text, { so: 0.6 }));
  p.push(T(x0 - 10, y0 + 18, 'High', { f: 'r', size: 17, a: 'end', fill: C.muted }));
  p.push(T(x0 - 10, y1 - 4, 'Low', { f: 'r', size: 17, a: 'end', fill: C.muted }));
  p.push(T(60, 227, 'RESOURCES AND SOPHISTICATION', { f: 'm', size: 14, fill: C.muted, ls: 1.5, tr: 'rotate(-90 60 227)' }));
  p.push(T(x0 + 6, y1 + 26, 'INTERNAL', { f: 'r', size: 18, a: 'start', fill: C.green }));
  p.push(T(x0 + 6, y1 + 45, 'Already has some access', { size: 13.5, a: 'start', fill: C.muted }));
  p.push(T(x1, y1 + 26, 'EXTERNAL', { f: 'r', size: 18, a: 'end', fill: C.cyan }));
  p.push(T(x1, y1 + 45, 'Must find a way in', { size: 13.5, a: 'end', fill: C.muted }));
  function actor(x, y, name, note, side, mark) {
    if (mark === 'top') p.push(Circ(x, y, 17, { stroke: C.red, sw: 3 }));
    if (mark === 'maybe') p.push(Circ(x, y, 17, { stroke: C.amber, sw: 2.5, dash: '5 4' }));
    p.push(Circ(x, y, 8, { fill: C.text }));
    const tx = side === 'r' ? x + 26 : x - 26, a = side === 'r' ? 'start' : 'end';
    p.push(T(tx, y - 3, name, { f: 'r', size: 19, a: a }));
    p.push(T(tx, y + 16, note, { size: 13.5, a: a, fill: C.muted }));
  }
  actor(690, 70, 'Nation-state', 'Espionage, war (APTs)', 'l', 'maybe');
  actor(610, 160, 'Organized crime', 'Ransomware, BEC', 'r', 'top');
  actor(570, 290, 'Hacktivist', 'A political cause', 'r');
  actor(680, 388, 'Unskilled attacker', 'Runs ready-made tools', 'l');
  actor(220, 230, 'Insider threat', 'Has access; skill varies', 'r', 'top');
  actor(220, 385, 'Shadow IT', 'Unapproved tools, no intent', 'r');
  const ly = 502;
  p.push(Circ(186, ly - 5, 10, { stroke: C.red, sw: 3 }));
  p.push(T(204, ly, 'Top concern at Cedar Creek (ransomware, BEC, ex-employee access)', { size: 13.5, a: 'start' }));
  p.push(Circ(186, ly + 21, 10, { stroke: C.amber, sw: 2.5, dash: '5 4' }));
  p.push(T(204, ly + 26, 'Possible: espionage against the engineering drawings', { size: 13.5, a: 'start' }));
  FIG['threat-actors'] = svg(800, 546, 'Threat actor chart. The horizontal axis runs from internal (already has access) to external (must find a way in); the vertical axis runs from low to high resources and sophistication. Nation-state is external and highest. Organized crime is external and high. Hacktivist is external and moderate. Unskilled attacker is external and low. Insider threat is internal with varying skill. Shadow IT is internal and low. Organized crime and insider threat are marked as top concerns for Cedar Creek; nation-state espionage against the drawings is marked as possible.', p);
})();

// 6. Attack surface map
(function () {
  const p = [];
  const fam = { msg: [C.cyan, 'Message-based'], dev: [C.amber, 'Device, software, system'], net: [C.purple, 'Network'], sup: [C.green, 'Supply chain'] };
  const bw = 236, bh = 100;
  const boxes = [
    [16, 16, 'msg', 'MESSAGE: EMAIL (BEC)', 'Lookalike CFO email', 'Fake $48,750 wire request', 'from cedarcreek-lnd.com', [134, 116], [330, 200]],
    [282, 16, 'dev', 'REMOVABLE DEVICE', 'Personal USB drives', 'Engineers carry drawings', 'to the shop floor', [400, 116], [400, 200]],
    [548, 16, 'dev', 'UNSUPPORTED SYSTEM', 'ENG-APP02', 'Windows Server 2012 R2,', 'no updates since Oct 2023', [666, 116], [470, 200]],
    [16, 230, 'dev', 'DEFAULT / SHARED LOGINS', 'ccadmin and operator', 'ccadmin in a notebook,', 'operator login on a label', [252, 280], [292, 280]],
    [548, 230, 'sup', 'SUPPLY CHAIN', 'Vendors and cloud', 'Microsoft 365, payroll SaaS,', 'unlogged server room visits', [548, 280], [508, 280]],
    [16, 444, 'net', 'UNSECURE WIRELESS', 'CC-PLANT Wi-Fi', 'Password on the break room', 'wall, unchanged since 2019', [134, 444], [330, 360]],
    [282, 444, 'net', 'UNSECURE WIRED', 'Flat internal network', 'Plant and office networks', 'reach each other freely', [400, 444], [400, 360]],
    [548, 444, 'net', 'REMOTE ACCESS / PORTS', 'VPN and open ports', 'VPN password on a sticky', 'note; FW-CORE open ports', [666, 444], [470, 360]]
  ];
  boxes.forEach(b => p.push(arrow(b[7][0], b[7][1], b[8][0], b[8][1], fam[b[2]][0], { so: 0.75 })));
  boxes.forEach(b => {
    const x = b[0], y = b[1], cx = x + bw / 2, col = fam[b[2]][0];
    p.push(card(x, y, bw, bh, col));
    p.push(tag(cx, y + 22, b[3], { fill: col, ls: 1 }));
    p.push(T(cx, y + 46, b[4], { f: 'r', size: 20 }));
    p.push(T(cx, y + 68, b[5]));
    p.push(T(cx, y + 87, b[6]));
  });
  p.push(R(292, 200, 216, 160, { stroke: C.red, sw: 2.5 }));
  p.push(T(400, 238, 'CEDAR CREEK', { f: 'r', size: 26, ls: 1.5 }));
  p.push(tag(400, 258, 'WHAT ATTACKERS WANT'));
  p.push(L(316, 272, 484, 272, { stroke: C.faint, sw: 1 }));
  p.push(T(400, 296, 'Drawings and specs'));
  p.push(T(400, 316, 'Payroll data'));
  p.push(T(400, 336, 'Line 2 uptime'));
  const ly = 580;
  [['msg', 110], ['dev', 262], ['net', 470], ['sup', 592]].forEach(l => {
    p.push(R(l[1], ly - 12, 14, 14, { fill: fam[l[0]][0], rx: 3 }));
    p.push(T(l[1] + 22, ly, fam[l[0]][1], { size: 13.5, a: 'start', fill: C.muted }));
  });
  FIG['attack-surface'] = svg(800, 600, 'Cedar Creek attack surface map. Cedar Creek (drawings and specs, payroll data, Line 2 uptime) sits in the center with eight threat vectors pointing at it: business email compromise from cedarcreek-lnd.com; personal USB drives in Engineering; ENG-APP02 on unsupported Windows Server 2012 R2; shared ccadmin and operator logins; vendors and cloud services such as Microsoft 365 and the payroll provider; the CC-PLANT Wi-Fi password posted on the break room wall; a flat network where plant and office reach each other; and remote access, with a VPN password on a sticky note and FW-CORE open ports.', p);
})();

// 7. Physical security layers
(function () {
  const p = [];
  const rings = [
    [16, 16, 500, 468, C.green, 'PERIMETER', 'Fence, pole lights, badge gate, cameras, signs'],
    [56, 96, 420, 348, C.cyan, 'BUILDING', 'Badge doors, reception desk, visitor sign-in'],
    [96, 176, 340, 228, C.amber, 'SERVER ROOM', 'Badge + PIN, hallway camera, sensors']
  ];
  rings.forEach((r, i) => {
    p.push(R(r[0], r[1], r[2], r[3], { fill: r[4], fo: 0.05, stroke: r[4], sw: 2, rx: 18 - i * 3 }));
    p.push(T(r[0] + 20, r[1] + 30, r[5], { f: 'r', size: 20, fill: r[4], a: 'start', ls: 1 }));
    p.push(T(r[0] + 20, r[1] + 54, r[6], { a: 'start' }));
  });
  p.push(R(146, 256, 240, 108, { stroke: C.purple, sw: 2 }));
  p.push(T(266, 288, 'THE ASSETS', { f: 'r', size: 20, fill: C.purple, ls: 1 }));
  p.push(T(266, 312, 'DC01, FS-HR01, ENG-FS01,'));
  p.push(T(266, 332, 'ENG-APP02, backup tapes'));
  p.push(tag(540, 156, 'GAPS FROM THE WALK', { a: 'start' }));
  const callouts = [
    [170, 86, 436, 'Door wedged open', ['Server room door, because', 'the AC cannot keep up']],
    [266, 120, 476, 'Tailgating at the dock', ['A driver follows an employee', 'in: one badge, two people.', 'Fix: access control vestibule', 'or a challenge culture']],
    [396, 86, 516, 'Gate propped open', ['Side gate by the dock, held', 'open with a brick']]
  ];
  callouts.forEach(c => {
    const y = c[0], h = c[1], dy = y + h / 2, ex = c[2];
    p.push(L(ex, dy, 540, dy, { stroke: C.red, sw: 1.5, so: 0.8, dash: '4 3' }));
    p.push(L(ex, dy - 13, ex, dy + 13, { stroke: C.red, sw: 6, cap: 'round' }));
    p.push(R(540, y, 244, h, { stroke: C.red, sw: 2 }));
    p.push(T(556, y + 27, c[3], { f: 'r', size: 19, fill: C.red, a: 'start' }));
    c[4].forEach((s, i) => p.push(T(556, y + 50 + i * 19, s, { size: 14, a: 'start' })));
  });
  FIG['physical-layers'] = svg(800, 500, 'Physical security layers at Cedar Creek. Nested layers from outside in: the perimeter (fence, pole lights, badge gate, cameras, signs), the building (badge doors, reception desk, visitor sign-in), the server room (badge plus PIN, hallway camera, sensors), and the assets (DC01, FS-HR01, ENG-FS01, ENG-APP02, backup tapes). Three gaps from the walk-through are marked: the server room door wedged open, tailgating at the dock door (fix with an access control vestibule or a challenge culture), and the dock side gate propped open with a brick.', p);
})();

// 8. Asset lifecycle
(function () {
  const p = [];
  const steps = [
    [C.cyan, 'Acquire', ['Vet the vendor;', 'confirm it gets', 'security updates'], ['ENG-APP02 is', 'stuck on 2012 R2']],
    [C.green, 'Assign owner', ['One person is', 'accountable and', 'decides access'], ['Tom Becker owns', 'ENG-FS01']],
    [C.amber, 'Classify', ['Public, Internal,', 'Confidential,', 'or Restricted'], ['FS-HR01 is', 'Confidential']],
    [C.purple, 'Track', ['Keep an inventory;', 'scan to find', 'unknown devices'], ['You build the', 'first inventory']],
    [C.orange, 'Dispose', ['Sanitize or', 'destroy, then', 'certify it'], ['Shred drives,', 'keep certificate']]
  ];
  const w = 136, gap = 20, x0 = 20, y = 20, h = 132;
  steps.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 24, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 50, s[1], { f: 'r', size: 20 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 74 + j * 19, l, { size: 13.5 })));
    if (i < 4) p.push(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, C.text, { so: 0.7, hl: 8, hw: 5 }));
    p.push(R(x, 190, w, 62, { fill: C.bg, stroke: s[0], sw: 1.5, so: 0.5, dash: '5 4' }));
    s[3].forEach((l, j) => p.push(T(cx, 216 + j * 19, l, { size: 13.5 })));
  });
  p.push(tag(x0, 178, 'AT CEDAR CREEK', { a: 'start' }));
  FIG['asset-lifecycle'] = svg(800, 270, 'Asset lifecycle in five steps: Acquire (vet the vendor and confirm security updates; ENG-APP02 is stuck on 2012 R2), Assign owner (Tom Becker owns ENG-FS01), Classify (FS-HR01 is Confidential), Track (keep an inventory and scan for unknown devices), and Dispose (sanitize or destroy, then certify; shred drives and keep the certificate).', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 1 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  const parts = FIG[id];
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + parts.map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
