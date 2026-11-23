// Rebuilds the Week 8 lesson diagrams. Usage (repo root): node docs/tools/make_week8_figures.js course-w8-figures.js
// Same palette and helpers as make_week1_figures.js.
const fs = require('fs');
const OUT = process.argv[2] || 'course-w8-figures.js';

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

const FIG = {};

// 1. IR lifecycle loop (Lesson 8.1)
(function () {
  const p = [];
  const steps = [
    [C.cyan, 'Preparation', ['Plan, team, tools,', 'training, playbooks']],
    [C.amber, 'Detect + analyze', ['Is it real? How big?', 'How bad? What now?']],
    [C.red, 'Containment', ['Stop the spread;', 'keep the evidence']],
    [C.purple, 'Eradication', ['Remove the cause:', 'malware, accounts, flaw']],
    [C.green, 'Recovery', ['Restore clean systems;', 'watch closely']],
    [C.pink, 'Lessons learned', ['What worked, what', 'failed, what changes']]
  ];
  const pos = [[30, 30], [290, 30], [550, 30], [550, 200], [290, 200], [30, 200]];
  const w = 220, h = 116;
  steps.forEach((s, i) => {
    const [x, y] = pos[i], cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 24, 'STEP ' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 50, s[1], { f: 'r', size: 21 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 74 + j * 19, l, { size: 13.5, fill: C.muted })));
  });
  p.push(arrow(252, 88, 288, 88, C.text, { so: 0.7 }));
  p.push(arrow(512, 88, 548, 88, C.text, { so: 0.7 }));
  p.push(arrow(660, 148, 660, 198, C.text, { so: 0.7 }));
  p.push(arrow(548, 258, 512, 258, C.text, { so: 0.7 }));
  p.push(arrow(288, 258, 252, 258, C.text, { so: 0.7 }));
  p.push(arrow(140, 198, 140, 148, C.text, { so: 0.7 }));
  p.push(arrow(400, 198, 400, 148, C.amber, { so: 0.8, dash: '5 4' }));
  p.push(T(410, 178, 'new findings send you back', { size: 12.5, fill: C.amber, a: 'start' }));
  const y0 = 344;
  p.push(tag(30, y0, 'THE SAME WORK, GROUPED THREE WAYS', { a: 'start' }));
  const rows = [
    ['This course (6)', [[0, 1, 'Prep'], [1, 1, 'Detect + analyze'], [2, 1, 'Contain'], [3, 1, 'Eradicate'], [4, 1, 'Recover'], [5, 1, 'Lessons']]],
    ['Security+ (7)', [[0, 1, 'Prep'], [1, 0.5, 'Detect'], [1.5, 0.5, 'Analyze'], [2, 1, 'Contain'], [3, 1, 'Eradicate'], [4, 1, 'Recover'], [5, 1, 'Lessons']]],
    ['NIST 800-61r2 (4)', [[0, 1, 'Preparation'], [1, 1, 'Detection and|analysis'], [2, 3, 'Containment, eradication, and recovery'], [5, 1, 'Post-incident|activity']]]
  ];
  const cx0 = 190, cw = 100;
  rows.forEach((r, i) => {
    const y = y0 + 16 + i * 46;
    p.push(T(30, y + 25, r[0], { f: 'r', size: 17, a: 'start' }));
    r[1].forEach(seg => {
      const x = cx0 + seg[0] * cw + 2, ww = seg[1] * cw - 4;
      p.push(R(x, y, ww, 36, { fill: C.panel, stroke: C.text, sw: 1, so: 0.25, rx: 6 }));
      const parts = seg[2].split('|');
      if (parts.length > 1) parts.forEach((s, k) => p.push(T(x + ww / 2, y + 15 + k * 14, s, { size: 12 })));
      else p.push(T(x + ww / 2, y + 23, seg[2], { size: seg[1] < 1 ? 12 : (seg[2].length > 10 && seg[1] === 1 ? 12.5 : 13.5) }));
    });
  });
  FIG['ir-lifecycle'] = svg(800, 510, 'Incident response lifecycle. Six steps in a loop: 1 Preparation (plan, team, tools, training, playbooks), 2 Detection and analysis (is it real, how big, how bad), 3 Containment (stop the spread and keep the evidence), 4 Eradication (remove the cause: malware, accounts, flaw), 5 Recovery (restore clean systems and watch closely), 6 Lessons learned (what worked, what failed, what changes), which feeds back into Preparation. A dashed arrow from recovery back to detection shows that new findings send you back. Below, the same work is grouped three ways: this course uses six steps; Security+ uses seven by splitting detection and analysis; NIST SP 800-61 Revision 2 uses four phases, combining containment, eradication, and recovery into one phase and calling the last one post-incident activity.', p);
})();

// 2. IR team (Lesson 8.1)
(function () {
  const p = [];
  p.push(R(290, 178, 220, 104, { stroke: C.red, sw: 2.5 }));
  p.push(tag(400, 202, 'INCIDENT LEAD', { fill: C.red }));
  p.push(T(400, 228, 'Marcus Reyes', { f: 'r', size: 22 }));
  p.push(T(400, 250, 'Runs the response, makes', { size: 13.5, fill: C.muted }));
  p.push(T(400, 268, 'the calls, keeps the log', { size: 13.5, fill: C.muted }));
  const roles = [
    [20, 20, C.cyan, 'TECHNICAL', 'Analyst + sysadmin', ['You and Dee Ortiz:', 'investigate, contain, fix']],
    [290, 20, C.purple, 'MANAGEMENT', 'Greg Palmer (CFO)', ['Approves big decisions:', 'shutdowns, spending']],
    [560, 20, C.amber, 'LEGAL', 'Outside counsel', ['Notification duties,', 'contracts, evidence']],
    [20, 330, C.green, 'HR', 'Rosa Medina', ['Insider cases and', 'staff communication']],
    [290, 330, C.pink, 'COMMUNICATIONS', 'One approved voice', ['Customers, staff,', 'media; no guessing']],
    [560, 330, C.orange, 'OUTSIDE HELP', 'Insurer, IR firm, FBI', ['Called through the', 'plan, not by panic']]
  ];
  const w = 220, h = 110;
  roles.forEach(r => {
    const [x, y, col, k, name, lines] = r, cx = x + w / 2;
    p.push(card(x, y, w, h, col));
    p.push(tag(cx, y + 22, k, { fill: col }));
    p.push(T(cx, y + 47, name, { f: 'r', size: 19 }));
    lines.forEach((l, j) => p.push(T(cx, y + 70 + j * 18, l, { size: 13.5, fill: C.muted })));
    const ex = cx, ey = y < 100 ? y + h : y;
    const tx = cx < 300 ? 320 : cx > 500 ? 480 : 400, ty = y < 100 ? 178 : 282;
    p.push(L(ex, ey, tx, ty, { stroke: col, so: 0.6, sw: 1.5, dash: '4 3' }));
  });
  FIG['ir-team'] = svg(800, 460, 'Incident response team at Cedar Creek. The incident lead, Marcus Reyes, sits in the center: he runs the response, makes the calls, and keeps the log. Around him: Technical (you and Dee Ortiz investigate, contain, and fix), Management (CFO Greg Palmer approves big decisions such as shutdowns and spending), Legal (outside counsel handles notification duties, contracts, and evidence), HR (Rosa Medina handles insider cases and staff communication), Communications (one approved voice to customers, staff, and media), and Outside help (insurer, incident response firm, FBI), called through the plan rather than in a panic.', p);
})();

// 3. Triage matrix (Lesson 8.2)
(function () {
  const p = [];
  const x0 = 200, y0 = 70, cw = 190, ch = 92;
  const cols = [['NARROW', 'One user or host,', 'not spreading'], ['WIDE OR SPREADING', 'Many hosts, active', 'attacker, data leaving']];
  const rows = [['HIGH IMPACT', 'Crown jewels, production,', 'money, personal data'], ['MEDIUM IMPACT', 'Normal business systems', 'or one important user'], ['LOW IMPACT', 'No sensitive data,', 'no business effect']];
  const cells = [[['P2', 'High', C.orange], ['P1', 'Critical', C.red]], [['P3', 'Medium', C.amber], ['P2', 'High', C.orange]], [['P4', 'Low', C.green], ['P3', 'Medium', C.amber]]];
  p.push(tag(x0 + cw, 30, 'SCOPE: HOW FAR DOES IT REACH?'));
  cols.forEach((c, i) => {
    const x = x0 + i * (cw + 6), cx = x + cw / 2;
    p.push(R(x, y0 - 12, cw, 4, { fill: C.text, fo: 0.4, rx: 2 }));
    p.push(T(cx, y0 + 12, c[0], { f: 'r', size: 17 }));
    p.push(T(cx, y0 + 30, c[1], { size: 12.5, fill: C.muted }));
    p.push(T(cx, y0 + 45, c[2], { size: 12.5, fill: C.muted }));
  });
  rows.forEach((r, j) => {
    const y = y0 + 58 + j * (ch + 6);
    p.push(T(x0 - 14, y + 34, r[0], { f: 'r', size: 17, a: 'end' }));
    p.push(T(x0 - 14, y + 53, r[1], { size: 12.5, a: 'end', fill: C.muted }));
    p.push(T(x0 - 14, y + 69, r[2], { size: 12.5, a: 'end', fill: C.muted }));
    cells[j].forEach((c, i) => {
      const x = x0 + i * (cw + 6), cx = x + cw / 2;
      p.push(R(x, y, cw, ch, { fill: c[2], fo: 0.12, stroke: c[2], sw: 2 }));
      p.push(T(cx, y + 46, c[0], { f: 'r', size: 34, fill: c[2] }));
      p.push(T(cx, y + 70, c[1], { size: 14 }));
    });
  });
  const lx = 600;
  p.push(tag(lx, 98, 'CEDAR CREEK TARGETS', { a: 'start' }));
  [['P1', 'Critical', '4 hours', C.red], ['P2', 'High', '8 hours', C.orange], ['P3', 'Medium', '24 hours', C.amber], ['P4', 'Low', '72 hours', C.green]].forEach((s, i) => {
    const y = 120 + i * 50;
    p.push(R(lx, y, 186, 42, { stroke: s[3], sw: 1.5 }));
    p.push(T(lx + 14, y + 27, s[0], { f: 'r', size: 20, fill: s[3], a: 'start' }));
    p.push(T(lx + 50, y + 27, s[1], { size: 13.5, a: 'start' }));
    p.push(T(lx + 174, y + 27, s[2], { size: 13.5, a: 'end', fill: C.muted }));
  });
  p.push(T(lx + 93, 340, 'Time to resolve or hand', { size: 12.5, fill: C.muted }));
  p.push(T(lx + 93, 357, 'off, from the ticket board', { size: 12.5, fill: C.muted }));
  p.push(T(400, 452, 'Anything linked to an active P1 incident joins that P1, even if it looks small on its own.', { size: 13.5, fill: C.muted }));
  FIG['triage-matrix'] = svg(800, 474, 'Triage matrix. Rows are impact (high: crown jewels, production, money, or personal data; medium: normal business systems or one important user; low: no sensitive data and no business effect). Columns are scope (narrow: one user or host, not spreading; wide or spreading: many hosts, an active attacker, or data leaving). High impact and wide scope is P1 Critical; high and narrow is P2 High; medium and wide is P2 High; medium and narrow is P3 Medium; low and wide is P3 Medium; low and narrow is P4 Low. Cedar Creek targets from the ticket board: P1 4 hours, P2 8 hours, P3 24 hours, P4 72 hours. Anything linked to an active P1 incident joins that P1.', p);
})();

// 4. Alert outcomes (Lesson 8.2)
(function () {
  const p = [];
  const x0 = 220, y0 = 74, cw = 270, ch = 128;
  p.push(tag(x0 + cw, 30, 'WHAT REALLY HAPPENED'));
  p.push(T(x0 + cw / 2, 58, 'Attack', { f: 'r', size: 19 }));
  p.push(T(x0 + cw + 6 + cw / 2, 58, 'Normal activity', { f: 'r', size: 19 }));
  p.push(T(x0 - 16, y0 + 60, 'Alert fired', { f: 'r', size: 19, a: 'end' }));
  p.push(T(x0 - 16, y0 + ch + 6 + 60, 'No alert', { f: 'r', size: 19, a: 'end' }));
  p.push(T(60, 214, 'WHAT THE TOOL SAID', { f: 'm', size: 13, fill: C.muted, ls: 1.5, tr: 'rotate(-90 60 214)' }));
  const cells = [
    [0, 0, C.green, 'TRUE POSITIVE', 'Real attack, caught.', 'Investigate and respond.'],
    [1, 0, C.amber, 'FALSE POSITIVE', 'Alarm on normal work.', 'Close it, tune the rule.'],
    [0, 1, C.red, 'FALSE NEGATIVE', 'Real attack, missed.', 'The most dangerous box.'],
    [1, 1, C.cyan, 'TRUE NEGATIVE', 'Normal work, quiet.', 'What you want most days.']
  ];
  cells.forEach(c => {
    const x = x0 + c[0] * (cw + 6), y = y0 + c[1] * (ch + 6), cx = x + cw / 2;
    p.push(R(x, y, cw, ch, { fill: c[2], fo: 0.1, stroke: c[2], sw: 2 }));
    p.push(T(cx, y + 42, c[3], { f: 'r', size: 22, fill: c[2], ls: 1 }));
    p.push(T(cx, y + 72, c[4], { size: 14.5 }));
    p.push(T(cx, y + 94, c[5], { size: 13.5, fill: C.muted }));
  });
  p.push(T(400, 362, 'Too many false positives cause alert fatigue, and tired analysts start missing true positives.', { size: 13.5, fill: C.muted }));
  FIG['alert-outcomes'] = svg(800, 384, 'Alert outcomes grid. Columns show what really happened (an attack or normal activity); rows show what the tool said (alert fired or no alert). An attack with an alert is a true positive: investigate and respond. Normal activity with an alert is a false positive: close it and tune the rule. An attack with no alert is a false negative, the most dangerous box. Normal activity with no alert is a true negative. Too many false positives cause alert fatigue, and tired analysts start missing true positives.', p);
})();

// 5. Containment by incident type (Lesson 8.3)
(function () {
  const p = [];
  const cols = [
    [C.red, 'RANSOMWARE / MALWARE', ['Isolate the host with', 'EDR or the switch port', '', 'Block the C2 address', 'at the firewall', '', 'Protect backups: take', 'them offline now'], ['Leave it powered on', 'until memory is saved']],
    [C.amber, 'STOLEN ACCOUNT / PHISH', ['Disable the account or', 'reset password + MFA', '', 'End active sessions', 'and revoke tokens', '', 'Block the sender and', 'pull the email back'], ['Check what else the', 'account touched']],
    [C.purple, 'DATA LEAVING', ['Block the destination', 'at the firewall', '', 'Cut the source host', 'or account off', '', 'Measure what left', 'and when'], ['Call legal early:', 'notice may be required']],
    [C.cyan, 'INSIDER', ['Quietly remove access', 'with HR and legal', '', 'Preserve mail, files,', 'and logs (legal hold)', '', 'Recover company', 'devices and badges'], ['Do not tip them off', 'before access is gone']]
  ];
  const w = 186, gap = 10, x0 = 12, y = 16;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, 222, c[0]));
    p.push(tag(cx, y + 26, c[1], { fill: c[0], size: 12, ls: 0.8 }));
    p.push(L(x + 14, y + 40, x + w - 14, y + 40, { stroke: C.faint, sw: 1 }));
    c[2].forEach((l, j) => { if (l) p.push(T(cx, y + 66 + j * 19, l, { size: 13.5 })); });
    p.push(R(x, y + 236, w, 62, { fill: C.bg, stroke: c[0], sw: 1.5, so: 0.6, dash: '5 4' }));
    c[3].forEach((l, j) => p.push(T(cx, y + 262 + j * 19, l, { size: 13, fill: C.muted })));
  });
  p.push(tag(400, 344, 'SHORT TERM (MINUTES TO HOURS) FIRST, THEN LONG TERM (DAYS): PATCH, SEGMENT, ADD LOGGING'));
  FIG['containment-types'] = svg(800, 362, 'Containment by incident type. Ransomware or malware: isolate the host with EDR or at the switch port, block the command-and-control address at the firewall, and take backups offline now; leave the host powered on until memory is saved. Stolen account or phishing: disable the account or reset the password and MFA, end active sessions and revoke tokens, block the sender and pull the email back; check what else the account touched. Data leaving: block the destination at the firewall, cut off the source host or account, and measure what left and when; call legal early because notice may be required. Insider: quietly remove access with HR and legal, preserve mail, files, and logs under legal hold, and recover company devices and badges; do not tip them off before access is gone. Short-term containment comes first, then long-term containment such as patching, segmenting, and adding logging.', p);
})();

// 6. Order of volatility (Lesson 8.4)
(function () {
  const p = [];
  const rows = [
    ['CPU registers and cache', 'Gone in nanoseconds; rarely collected', 680],
    ['Memory (RAM): processes, connections, keys', 'Gone at power-off. Capture first.', 620],
    ['Swap / page file and temporary files', 'Overwritten as the system keeps running', 560],
    ['Disk: files, logs, deleted data', 'Survives power-off; image it bit for bit', 500],
    ['Remote logs: SIEM, firewall, EDR console', 'Kept for days or months, then rotated', 440],
    ['Backups and archives (tapes, offsite)', 'Kept the longest; least volatile', 360]
  ];
  const cols = [C.red, C.orange, C.amber, C.green, C.cyan, C.purple];
  rows.forEach((r, i) => {
    const y = 20 + i * 64, w = r[2], x = 440 - w / 2;
    p.push(R(x, y, w, 54, { fill: cols[i], fo: 0.12, stroke: cols[i], sw: 2 }));
    p.push(T(440, y + 24, r[0], { f: 'r', size: 19 }));
    p.push(T(440, y + 44, r[1], { size: 13, fill: C.muted }));
  });
  p.push(arrow(20, 30, 20, 390, C.text, { so: 0.6 }));
  p.push(T(34, 46, 'Collect', { size: 13, a: 'start', fill: C.muted }));
  p.push(T(34, 62, 'first', { size: 13, a: 'start', fill: C.muted }));
  p.push(T(34, 372, 'Collect', { size: 13, a: 'start', fill: C.muted }));
  p.push(T(34, 388, 'last', { size: 13, a: 'start', fill: C.muted }));
  FIG['order-volatility'] = svg(800, 410, 'Order of volatility, from most volatile (collect first) to least volatile (collect last): CPU registers and cache, gone in nanoseconds and rarely collected; memory (RAM) with running processes, network connections, and keys, gone at power-off, so capture it first; swap or page file and temporary files, overwritten as the system keeps running; disk with files, logs, and deleted data, which survives power-off and is imaged bit for bit; remote logs in the SIEM, firewall, and EDR console, kept for days or months and then rotated; and backups and archives, kept the longest.', p);
})();

// 7. Chain of custody (Lesson 8.4)
(function () {
  const p = [];
  const steps = [
    [C.cyan, 'Collect', ['Copy or image;', 'note time, place,', 'who, and how']],
    [C.amber, 'Hash', ['SHA-256 of each', 'item, written on', 'the form']],
    [C.green, 'Label + seal', ['Unique item ID;', 'tamper-evident', 'bag or seal']],
    [C.purple, 'Transfer', ['Every hand-off', 'logged and', 'signed by both']],
    [C.orange, 'Store', ['Locked, limited', 'access; examine', 'copies only']]
  ];
  const w = 136, gap = 20, x0 = 20, y = 20, h = 132;
  steps.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 24, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 50, s[1], { f: 'r', size: 20 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 74 + j * 19, l, { size: 13.5 })));
    if (i < 4) p.push(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, C.text, { so: 0.7, hl: 8, hw: 5 }));
  });
  p.push(tag(20, 186, 'EVERY LINE OF THE CUSTODY FORM ANSWERS', { a: 'start' }));
  const fields = ['Which item?', 'When (date and time)?', 'Released by whom?', 'Received by whom?', 'Why (purpose)?', 'Both signatures'];
  fields.forEach((f, i) => {
    const x = 20 + (i % 3) * 256, yy = 200 + Math.floor(i / 3) * 46;
    p.push(R(x, yy, 244, 36, { fill: C.panel, stroke: C.text, sw: 1, so: 0.2, rx: 6 }));
    p.push(T(x + 122, yy + 23, f, { size: 14 }));
  });
  p.push(T(400, 318, 'A gap in the record lets the other side argue the evidence was changed. Hashes prove it was not.', { size: 13.5, fill: C.muted }));
  FIG['chain-custody'] = svg(800, 340, 'Chain of custody in five steps: 1 Collect (copy or image, and note the time, place, who, and how), 2 Hash (SHA-256 of each item, written on the form), 3 Label and seal (unique item ID and a tamper-evident bag or seal), 4 Transfer (every hand-off logged and signed by both people), 5 Store (locked, limited access, and examine copies only). Every line of the custody form answers: which item, when, released by whom, received by whom, why, and both signatures. A gap in the record lets the other side argue the evidence was changed; hashes prove it was not.', p);
})();

// 8. Incident report anatomy (Lesson 8.5)
(function () {
  const p = [];
  p.push(R(20, 20, 360, 440, { stroke: C.text, sw: 1.5, so: 0.35 }));
  p.push(tag(200, 46, 'INCIDENT REPORT CC-IR-2026-01'));
  const secs = [
    [C.red, 'Executive summary', 'What, impact, status: 5 plain sentences'],
    [C.amber, 'Classification', 'Type, priority, incident ID, owner'],
    [C.cyan, 'Detection', 'How and when it was found'],
    [C.green, 'Timeline (UTC + local)', 'Facts in order, each with its source'],
    [C.purple, 'Scope and impact', 'Systems, accounts, data, downtime'],
    [C.orange, 'Root cause', 'Why it was possible, not just what'],
    [C.pink, 'Actions taken', 'Who did what, and when'],
    [C.cyan, 'Recommendations', 'Fixes with owners and dates']
  ];
  secs.forEach((s, i) => {
    const y = 64 + i * 48;
    p.push(R(40, y, 6, 36, { fill: s[0], rx: 3 }));
    p.push(T(58, y + 16, s[1], { f: 'r', size: 18, a: 'start' }));
    p.push(T(58, y + 33, s[2], { size: 12.5, a: 'start', fill: C.muted }));
  });
  p.push(tag(420, 46, 'WHO READS WHICH PART', { a: 'start' }));
  const readers = [
    ['Greg Palmer (CFO)', 'Executive summary, impact, cost', C.red],
    ['Insurer and lawyers', 'Timeline, scope, data involved', C.green],
    ['Customers (if told)', 'What of theirs was affected', C.purple],
    ['Marcus and IT', 'Root cause, actions, fixes', C.orange],
    ['Next year\'s responder', 'Everything: it is the playbook', C.cyan]
  ];
  readers.forEach((r, i) => {
    const y = 64 + i * 78;
    p.push(card(420, y, 360, 64, r[2]));
    p.push(T(440, y + 28, r[0], { f: 'r', size: 19, a: 'start' }));
    p.push(T(440, y + 49, r[1], { size: 13.5, a: 'start', fill: C.muted }));
  });
  FIG['report-anatomy'] = svg(800, 480, 'Anatomy of an incident report, with eight sections: executive summary (what, impact, and status in five plain sentences), classification (type, priority, incident ID, owner), detection (how and when it was found), timeline in UTC and local time (facts in order, each with its source), scope and impact (systems, accounts, data, downtime), root cause (why it was possible, not just what happened), actions taken (who did what and when), and recommendations (fixes with owners and dates). Readers: the CFO reads the summary, impact, and cost; the insurer and lawyers read the timeline, scope, and data involved; customers, if told, read what of theirs was affected; IT reads root cause, actions, and fixes; next year\'s responder reads everything.', p);
})();

// 9. RPO and RTO timeline (Lesson 8.6)
(function () {
  const p = [];
  const y = 100, xa = 110, xb = 420, xc = 690;
  p.push(L(40, y, 770, y, { stroke: C.text, so: 0.4, sw: 2 }));
  p.push(R(xa, y - 34, xb - xa, 26, { fill: C.amber, fo: 0.18, stroke: C.amber, sw: 1.5, rx: 4 }));
  p.push(T((xa + xb) / 2, y - 16, 'DATA AT RISK: limited by RPO', { f: 'm', size: 13, fill: C.amber, ls: 1 }));
  p.push(R(xb, y + 8, xc - xb, 26, { fill: C.cyan, fo: 0.18, stroke: C.cyan, sw: 1.5, rx: 4 }));
  p.push(T((xb + xc) / 2, y + 26, 'DOWNTIME: limited by RTO', { f: 'm', size: 13, fill: C.cyan, ls: 1 }));
  [[xa, C.green, 'Last good backup', 'Fri 12-18, 23:47'], [xb, C.red, 'Incident', 'Wed 12-23, 03:36'], [xc, C.purple, 'Service restored', 'goal: within 24 h']].forEach(m => {
    p.push(Circ(m[0], y, 9, { fill: m[1] }));
    p.push(T(m[0], y - 62, m[2], { f: 'r', size: 19, fill: m[1] }));
    p.push(T(m[0], y - 44, m[3], { size: 13.5, fill: C.muted }));
  });
  p.push(T(30, y + 72, 'RPO: how much data can we afford', { size: 14, a: 'start' }));
  p.push(T(30, y + 91, 'to lose? (the age of the backup)', { size: 14, a: 'start' }));
  p.push(T(770, y + 72, 'RTO: how long can we afford', { size: 14, a: 'end' }));
  p.push(T(770, y + 91, 'to be down?', { size: 14, a: 'end' }));
  p.push(T(400, y + 132, 'Weekly tapes mean Cedar Creek\'s real RPO is up to 7 days. Engineering wants 1 day.', { size: 14, fill: C.muted }));
  p.push(T(400, y + 154, 'MTTR = average repair time. MTBF = average time between failures.', { size: 14, fill: C.muted }));
  FIG['rpo-rto'] = svg(800, 274, 'RPO and RTO on a timeline. On the left, the last good backup (Friday 12-18 at 23:47). In the middle, the incident (Wednesday 12-23 at 03:36). On the right, service restored, with a goal of within 24 hours. The span between the last backup and the incident is data at risk, limited by the recovery point objective (RPO): how much data can we afford to lose, measured as backup age. The span between the incident and restoration is downtime, limited by the recovery time objective (RTO): how long can we afford to be down. Weekly tapes mean Cedar Creek\'s real RPO is up to 7 days, while Engineering wants 1 day. MTTR is the average repair time; MTBF is the average time between failures.', p);
})();

// 10. 3-2-1 backups (Lesson 8.6)
(function () {
  const p = [];
  const cols = [
    [C.cyan, '3', 'COPIES OF THE DATA', ['The live data plus', 'two backups'], 'ENG-FS01 + tape +', 'cloud or second tape'],
    [C.amber, '2', 'DIFFERENT MEDIA', ['So one failure type', 'cannot hit them all'], 'Disk + LTO tape', ''],
    [C.green, '1', 'OFFSITE OR OFFLINE', ['Out of reach of fire,', 'theft, and ransomware'], 'A tape that leaves', 'the building weekly']
  ];
  const w = 240, gap = 20, x0 = 20, y = 20;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, 190, c[0]));
    p.push(T(cx, y + 70, c[1], { f: 'r', size: 64, fill: c[0] }));
    p.push(tag(cx, y + 100, c[2], { fill: c[0] }));
    c[3].forEach((l, j) => p.push(T(cx, y + 128 + j * 19, l, { size: 14 })));
    p.push(R(x, y + 206, w, 64, { fill: C.bg, stroke: c[0], sw: 1.5, so: 0.5, dash: '5 4' }));
    p.push(T(cx, y + (c[5] ? 232 : 242), c[4], { size: 13.5 }));
    if (c[5]) p.push(T(cx, y + 251, c[5], { size: 13.5 }));
  });
  p.push(tag(20, 316, 'TODAY AT CEDAR CREEK', { a: 'start' }));
  p.push(T(20, 340, 'One weekly tape on a shelf in the same room as the servers: offline (it survived the ransomware),', { size: 13.5, a: 'start', fill: C.muted }));
  p.push(T(20, 360, 'but not offsite (a fire takes both) and only one week deep. Test restores prove a backup is real.', { size: 13.5, a: 'start', fill: C.muted }));
  FIG['backup-321'] = svg(800, 380, 'The 3-2-1 backup rule. 3 copies of the data: the live data plus two backups (at Cedar Creek: ENG-FS01, a tape, and a cloud copy or second tape). 2 different media, so one failure type cannot hit them all (disk and LTO tape). 1 copy offsite or offline, out of reach of fire, theft, and ransomware (a tape that leaves the building weekly). Today Cedar Creek keeps one weekly tape on a shelf in the same room as the servers: it is offline, so it survived the ransomware, but it is not offsite and only one week deep. Test restores prove a backup is real.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 8 lesson diagrams (inline SVG strings). Built by docs/tools/make_week8_figures.js. Used by Lesson.html via section.figure = { id, caption }.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + FIG[id].map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
