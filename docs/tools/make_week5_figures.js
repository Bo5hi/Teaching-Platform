// Rebuilds the Week 5 lesson diagrams. Usage (repo root): node docs/tools/make_week5_figures.js course-w5-figures.js
// Same palette, fonts, and helpers as docs/tools/make_week1_figures.js.
const fs = require('fs');
const OUT = process.argv[2] || 'course-w5-figures.js';

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

// 1. Vulnerability management cycle
(function () {
  const p = [];
  const cx = 400, cy = 250, R0 = 175;
  const steps = [
    [C.cyan, 'Identify', 'Scan, audit, feeds', 'Dee runs Greenbone'],
    [C.amber, 'Analyze', 'Real? How bad here?', 'Finding 1021: false +'],
    [C.orange, 'Prioritize', 'Score + exposure + value', 'PLANT-PC-07 first'],
    [C.green, 'Remediate', 'Patch or compensate', 'Patch FS-HR01'],
    [C.purple, 'Validate', 'Rescan and verify', 'Rescan FS-HR01'],
    [C.pink, 'Report', 'Tell the risk owners', 'Monthly to Marcus']
  ];
  const pos = steps.map((s, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [cx + R0 * Math.cos(a) * 1.35, cy + R0 * Math.sin(a)]; });
  pos.forEach((q, i) => {
    const n = pos[(i + 1) % pos.length];
    const dx = n[0] - q[0], dy = n[1] - q[1], d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
    p.push(arrow(+(q[0] + ux * 95).toFixed(1), +(q[1] + uy * 52).toFixed(1), +(n[0] - ux * 95).toFixed(1), +(n[1] - uy * 52).toFixed(1), C.text, { so: 0.55 }));
  });
  steps.forEach((s, i) => {
    const [x, y] = pos[i];
    p.push(card(x - 92, y - 46, 184, 92, s[0]));
    p.push(T(x, y - 18, s[1], { f: 'r', size: 21, fill: s[0] }));
    p.push(T(x, y + 4, s[2], { size: 13 }));
    p.push(T(x, y + 26, s[3], { size: 13, fill: C.muted }));
  });
  p.push(T(cx, cy - 6, 'NEVER', { f: 'r', size: 22, ls: 2 }));
  p.push(T(cx, cy + 18, 'FINISHED', { f: 'r', size: 22, ls: 2 }));
  FIG['w5-vm-cycle'] = svg(800, 500, 'Vulnerability management cycle with six steps in a loop: Identify (scan, audit, threat feeds; Dee runs Greenbone), Analyze (is it real and how bad here; finding 1021 is a false positive), Prioritize (score plus exposure plus asset value; PLANT-PC-07 first), Remediate (patch or compensate; patch FS-HR01), Validate (rescan and verify), Report (tell the risk owners; monthly to Marcus), then back to Identify.', p);
})();

// 2. CVSS vector decoded
(function () {
  const p = [];
  const m = [
    ['AV:N', 'Attack vector', 'Network', 'from anywhere it is reachable', C.cyan],
    ['AC:L', 'Attack complexity', 'Low', 'no special conditions', C.cyan],
    ['PR:N', 'Privileges required', 'None', 'no account needed', C.amber],
    ['UI:N', 'User interaction', 'None', 'nobody has to click', C.cyan],
    ['S:U', 'Scope', 'Unchanged', 'damage stays in the host', C.muted],
    ['C:H', 'Confidentiality', 'High', 'all data readable', C.red],
    ['I:H', 'Integrity', 'High', 'all data changeable', C.red],
    ['A:H', 'Availability', 'High', 'host can be stopped', C.red]
  ];
  p.push(tag(400, 30, 'CVE-2019-0708 (BLUEKEEP) ON PLANT-PC-07'));
  p.push(T(400, 62, 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H', { f: 'm', size: 19, fill: C.text }));
  const w = 186, h = 104, gx = 12, x0 = 16;
  m.forEach((r, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = x0 + col * (w + gx), y = 86 + row * (h + 14), cx = x + w / 2;
    p.push(card(x, y, w, h, r[4]));
    p.push(T(cx, y + 26, r[0], { f: 'm', size: 18, fill: r[4] }));
    p.push(T(cx, y + 48, r[1], { size: 13, fill: C.muted }));
    p.push(T(cx, y + 70, r[2], { f: 'r', size: 19 }));
    p.push(T(cx, y + 90, r[3], { size: 12.5, fill: C.muted }));
  });
  p.push(R(200, 336, 400, 54, { stroke: C.red, sw: 2.5 }));
  p.push(T(400, 370, 'Base score 9.8: Critical', { f: 'r', size: 24, fill: C.red }));
  p.push(T(400, 420, 'Change one metric, PR:N to PR:L (attacker needs a normal account), and the score drops to 8.8.', { size: 13.5, fill: C.muted }));
  p.push(T(400, 442, 'That is PrintNightmare on FS-HR01. Same impact, one more hurdle for the attacker.', { size: 13.5, fill: C.muted }));
  FIG['w5-cvss'] = svg(800, 462, 'CVSS vector for CVE-2019-0708 (BlueKeep) decoded into eight metrics: AV:N attack vector network, AC:L low complexity, PR:N no privileges required, UI:N no user interaction, S:U scope unchanged, and C:H, I:H, A:H high impact on confidentiality, integrity and availability. Base score 9.8 Critical. Changing PR:N to PR:L gives 8.8, the score of PrintNightmare.', p);
})();

// 3. SQL injection
(function () {
  const p = [];
  p.push(tag(24, 34, 'LOGIN FORM INPUT', { a: 'start' }));
  p.push(R(24, 46, 360, 40, { fill: C.bg, stroke: C.faint, sw: 1.5 }));
  p.push(T(36, 72, "User:  admin'#", { f: 'm', size: 17, a: 'start' }));
  p.push(R(416, 46, 360, 40, { fill: C.bg, stroke: C.faint, sw: 1.5 }));
  p.push(T(428, 72, 'Pass:  anything', { f: 'm', size: 17, a: 'start' }));

  p.push(card(24, 110, 752, 128, C.red));
  p.push(T(40, 138, 'VULNERABLE: input pasted into the query as code', { f: 'r', size: 19, fill: C.red, a: 'start' }));
  p.push(T(40, 170, "SELECT * FROM users WHERE name = 'admin'#' AND pass = '...'", { f: 'm', size: 16, a: 'start' }));
  p.push(L(380, 178, 394, 178, { stroke: C.red, sw: 3 }));
  p.push(L(402, 178, 560, 178, { stroke: C.muted, sw: 1.5, dash: '4 3' }));
  p.push(T(387, 198, "' closes the name", { size: 12.5, fill: C.red, a: 'end' }));
  p.push(T(400, 198, '# turns the rest into a comment', { size: 12.5, fill: C.muted, a: 'start' }));
  p.push(T(40, 226, 'Result: logged in as admin. The password check never ran.', { size: 14, a: 'start' }));

  p.push(card(24, 258, 752, 128, C.green));
  p.push(T(40, 286, 'SAFE: parameterized query keeps input as data', { f: 'r', size: 19, fill: C.green, a: 'start' }));
  p.push(T(40, 318, 'SELECT * FROM users WHERE name = ? AND pass = ?', { f: 'm', size: 16, a: 'start' }));
  p.push(T(40, 344, "values sent separately:  [ admin'#  ,  anything ]", { f: 'm', size: 15, fill: C.muted, a: 'start' }));
  p.push(T(40, 374, "Result: no user is literally named admin'#, so the login fails.", { size: 14, a: 'start' }));
  FIG['w5-sqli'] = svg(800, 404, "SQL injection diagram. Login input: user admin'# and any password. Vulnerable code pastes the input into the query, giving SELECT * FROM users WHERE name = 'admin'#' AND pass = '...'; the quote closes the name and # comments out the password check, so the attacker logs in as admin. Safe code uses a parameterized query with placeholders and sends the values separately, so the login fails.", p);
})();

// 4. Secure SDLC
(function () {
  const p = [];
  const ph = [
    [C.cyan, 'Plan', ['Security', 'requirements', 'abuse cases']],
    [C.cyan, 'Design', ['Threat', 'modeling', 'design review']],
    [C.amber, 'Build', ['Secure coding', 'code review', 'SAST']],
    [C.amber, 'Test', ['DAST', 'fuzzing', 'pentest']],
    [C.green, 'Deploy', ['Hardening', 'secrets mgmt', 'code signing']],
    [C.purple, 'Maintain', ['Patching', 'vuln scans', 'monitoring']]
  ];
  const w = 118, gap = 12, x0 = 16, y = 70, h = 150;
  ph.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 22, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 50, s[1], { f: 'r', size: 21 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 80 + j * 20, l, { size: 13.5 })));
    if (i < ph.length - 1) p.push(arrow(x + w + 1, y + h / 2, x + w + gap - 1, y + h / 2, C.text, { so: 0.6, hl: 7, hw: 4 }));
  });
  p.push(arrow(700, 36, 100, 36, C.red, { sw: 3, hl: 14, hw: 8 }));
  p.push(T(400, 28, 'SHIFT LEFT: find flaws earlier, where they cost less to fix', { f: 'm', size: 13, fill: C.red, ls: 1 }));
  p.push(T(400, 252, 'DevSecOps runs these checks automatically in the build pipeline.', { size: 13.5, fill: C.muted }));
  FIG['w5-sdlc'] = svg(800, 272, 'Secure software development life cycle in six phases with a security activity at each: Plan (security requirements and abuse cases), Design (threat modeling and design review), Build (secure coding, code review, SAST), Test (DAST, fuzzing, pentest), Deploy (hardening, secrets management, code signing), Maintain (patching, vulnerability scans, monitoring). An arrow labelled shift left shows security moving earlier.', p);
})();

// 5. Malware map
(function () {
  const p = [];
  const colA = [['Virus', 'Rides in a file; spreads when it is opened'], ['Worm', 'Spreads itself over the network'], ['Trojan', 'Disguised as useful software'], ['Fileless', 'Lives in memory, uses built-in tools']];
  const colB = [['RAT', 'Remote control for the attacker'], ['Ransomware', 'Encrypts files, demands payment'], ['Spyware / keylogger', 'Watches and records the user'], ['Rootkit', 'Hides itself and other malware'], ['Logic bomb', 'Waits for a trigger'], ['Cryptominer', 'Steals CPU to mine coins']];
  p.push(T(200, 34, 'HOW IT GETS IN OR SPREADS', { f: 'm', size: 14, fill: C.cyan, ls: 1.5 }));
  p.push(T(600, 34, 'WHAT IT DOES ONCE INSIDE', { f: 'm', size: 14, fill: C.red, ls: 1.5 }));
  const row = (x, y, a, color) => { p.push(card(x, y, 352, 58, color)); p.push(T(x + 16, y + 25, a[0], { f: 'r', size: 19, fill: color, a: 'start' })); p.push(T(x + 16, y + 46, a[1], { size: 13.5, a: 'start' })); };
  colA.forEach((a, i) => row(24, 50 + i * 72, a, C.cyan));
  colB.forEach((a, i) => row(424, 50 + i * 72, a, C.red));
  p.push(R(24, 352, 352, 130, { fill: C.bg, stroke: C.amber, sw: 1.5, dash: '5 4' }));
  p.push(T(40, 380, 'REAL SAMPLES COMBINE TYPES', { f: 'm', size: 13, fill: C.amber, a: 'start', ls: 1 }));
  p.push(T(40, 406, 'WannaCry: a worm that delivered', { size: 14, a: 'start' }));
  p.push(T(40, 426, 'ransomware.', { size: 14, a: 'start' }));
  p.push(T(40, 452, 'IRONLATCH: a trojan "browser update"', { size: 14, a: 'start' }));
  p.push(T(40, 472, 'that loads ransomware later.', { size: 14, a: 'start' }));
  FIG['w5-malware'] = svg(800, 498, 'Malware map. How it gets in or spreads: virus (rides in a file, spreads when opened), worm (spreads itself over the network), trojan (disguised as useful software), fileless (lives in memory using built-in tools). What it does once inside: RAT (remote control), ransomware (encrypts files, demands payment), spyware or keylogger (watches and records the user), rootkit (hides itself), logic bomb (waits for a trigger), cryptominer (steals CPU). Real samples combine types: WannaCry was a worm that delivered ransomware; IRONLATCH uses a trojan browser update that loads ransomware.', p);
})();

// 6. Intelligence levels
(function () {
  const p = [];
  const lv = [
    [C.purple, 'Strategic', 'Executives', 'Long term', '"Ransomware groups are targeting', 'Midwest manufacturers like us."'],
    [C.cyan, 'Operational', 'IR and threat hunters', 'This campaign', '"IRONLATCH affiliates are pushing fake', 'browser updates this week."'],
    [C.amber, 'Tactical', 'Security managers', 'Months', '"They get in by spraying VPN passwords;', 'MFA on the VPN stops it."'],
    [C.green, 'Technical', 'SOC analysts, firewalls', 'Hours to days', '"Block 203.0.113.45 and', 'browser-update-cdn.example.net."']
  ];
  p.push(tag(110, 30, 'LEVEL')); p.push(tag(300, 30, 'AUDIENCE')); p.push(tag(590, 30, 'IRONLATCH, WRITTEN FOR THEM'));
  lv.forEach((l, i) => {
    const y = 44 + i * 92;
    p.push(R(16, y, 768, 80, { stroke: l[0], sw: 1.5, so: 0.7 }));
    p.push(R(16, y, 6, 80, { fill: l[0], rx: 3 }));
    p.push(T(110, y + 36, l[1], { f: 'r', size: 22, fill: l[0] }));
    p.push(T(110, y + 58, l[3], { size: 13, fill: C.muted }));
    p.push(T(300, y + 46, l[2], { size: 14.5 }));
    p.push(T(590, y + 34, l[4], { size: 14, fill: C.text }));
    p.push(T(590, y + 56, l[5], { size: 14, fill: C.text }));
  });
  FIG['w5-intel-levels'] = svg(800, 420, 'Four levels of threat intelligence, each with its audience and an IRONLATCH example. Strategic, for executives, long term: ransomware groups are targeting Midwest manufacturers like us. Operational, for incident responders and threat hunters, this campaign: IRONLATCH affiliates are pushing fake browser updates this week. Tactical, for security managers, months: they get in by spraying VPN passwords, and MFA on the VPN stops it. Technical, for SOC analysts and firewalls, hours to days: block 203.0.113.45 and browser-update-cdn.example.net.', p);
})();

// 7. Pyramid of pain
(function () {
  const p = [];
  const tiers = [
    ['TTPs', 'Tough', C.red],
    ['Tools', 'Challenging', C.orange],
    ['Network / host artifacts', 'Annoying', C.amber],
    ['Domain names', 'Simple', C.green],
    ['IP addresses', 'Easy', C.cyan],
    ['Hash values', 'Trivial', C.purple]
  ];
  const top = 30, h = 62, cx = 300, baseW = 540;
  tiers.forEach((t, i) => {
    const y = top + i * h, w0 = baseW * (i / tiers.length), w1 = baseW * ((i + 1) / tiers.length);
    const pts = [[cx - w0 / 2, y], [cx + w0 / 2, y], [cx + w1 / 2, y + h - 4], [cx - w1 / 2, y + h - 4]].map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
    p.push('<polygon points="' + pts + '" fill="' + t[2] + '" fill-opacity="0.16" stroke="' + t[2] + '" stroke-width="2"/>');
    p.push(T(cx, y + (i === 0 ? 44 : 36), t[0], { f: 'r', size: i === 0 ? 18 : 19, fill: t[2] }));
    p.push(T(640, y + 36, t[1], { f: 'r', size: 19, fill: t[2], a: 'start' }));
    p.push(L(cx + w1 / 2 + 8, y + 30, 628, y + 30, { stroke: t[2], sw: 1, so: 0.5, dash: '3 3' }));
  });
  p.push(arrow(760, top + 6 * h - 10, 760, top + 4, C.text, { so: 0.6 }));
  p.push(T(782, 220, 'COST TO THE ATTACKER TO CHANGE', { f: 'm', size: 12, fill: C.muted, ls: 1, tr: 'rotate(-90 782 220)' }));
  p.push(T(300, 420, 'Block the bottom quickly. Detect the top: it lasts.', { size: 14, fill: C.muted }));
  FIG['w5-pyramid'] = svg(800, 440, 'Pyramid of pain, from bottom to top: hash values (trivial for the attacker to change), IP addresses (easy), domain names (simple), network and host artifacts (annoying), tools (challenging), and tactics, techniques and procedures (tough). Block the bottom quickly; detecting the top lasts longer.', p);
})();

// 8. Pentest phases and weeks
(function () {
  const p = [];
  const ph = [
    [C.cyan, 'Recon', 'Phase 1', ['Meow', 'Fawn']],
    [C.cyan, 'Scanning', 'Phase 2', ['Dancing', 'Redeemer']],
    [C.red, 'Exploitation', 'Phase 3', ['Preignition', 'Appointment', 'PortSwigger labs']],
    [C.orange, 'Post-exploit', 'Phase 4', ['Sequel', 'Mongod']],
    [C.green, 'Reporting', 'Phase 5 + capstone', ['Your whole', 'engagement']]
  ];
  const w = 146, gap = 8, x0 = 16, y = 62, h = 70;
  ph.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    const pts = [[x, y], [x + w - 14, y], [x + w, y + h / 2], [x + w - 14, y + h], [x, y + h], [x + (i ? 14 : 0), y + h / 2]].map(q => q.join(',')).join(' ');
    p.push('<polygon points="' + pts + '" fill="' + s[0] + '" fill-opacity="0.14" stroke="' + s[0] + '" stroke-width="2"/>');
    p.push(T(cx + 4, y + 32, s[1], { f: 'r', size: 19, fill: s[0] }));
    p.push(T(cx + 4, y + 54, s[2], { size: 12.5, fill: C.muted }));
    p.push(tag(cx, 160, 'TARGETS'));
    s[3].forEach((t, j) => p.push(T(cx, 184 + j * 20, t, { size: 14 })));
  });
  p.push(L(20, 36, 306, 36, { stroke: C.cyan, sw: 2 })); p.push(T(163, 28, 'WEEK 4', { f: 'm', size: 13, fill: C.cyan, ls: 2 }));
  p.push(L(328, 36, 780, 36, { stroke: C.red, sw: 2 })); p.push(T(554, 28, 'WEEK 5 (THIS WEEK)', { f: 'm', size: 13, fill: C.red, ls: 2 }));
  p.push(T(400, 262, 'All targets are HackTheBox Starting Point machines or PortSwigger labs: authorized practice systems.', { size: 13.5, fill: C.muted }));
  FIG['w5-pentest-phases'] = svg(800, 282, 'The five pentest phases and their targets. Week 4: Recon (Phase 1, Meow and Fawn) and Scanning (Phase 2, Dancing and Redeemer). Week 5: Exploitation (Phase 3, Preignition, Appointment and the PortSwigger labs), Post-exploitation (Phase 4, Sequel and Mongod), and Reporting (Phase 5 and the capstone, covering the whole engagement). All targets are authorized practice systems.', p);
})();

// 9. Anatomy of a finding
(function () {
  const p = [];
  p.push(card(16, 16, 768, 448, C.red));
  p.push(T(36, 50, 'F-03  SQL injection allows login without a password', { f: 'r', size: 22, a: 'start' }));
  p.push(R(36, 64, 92, 26, { fill: C.red, fo: 0.2, stroke: C.red, sw: 1.5, rx: 6 }));
  p.push(T(82, 82, 'CRITICAL', { f: 'm', size: 13, fill: C.red, ls: 1 }));
  p.push(T(142, 82, 'CVSS 9.8   Target: Appointment (HTB)   Found: Phase 3', { f: 'm', size: 13, fill: C.muted, a: 'start' }));
  const rows = [
    ['DESCRIPTION', ['The login form builds its database query from the user name field', 'without parameters, so a single quote changes the query.']],
    ['EVIDENCE', ["User name admin'# with any password logged in as admin.", 'Screenshot 3a: welcome page and flag, 10.129.x.x, 14:22.']],
    ['BUSINESS IMPACT', ['Anyone on the internet could sign in as the administrator', 'and read or change every record the application holds.']],
    ['REMEDIATION', ['1. Use parameterized queries for every database call.', '2. Validate input with an allow list.  3. Retest to confirm.']]
  ];
  rows.forEach((r, i) => {
    const y = 112 + i * 86;
    p.push(L(36, y, 764, y, { stroke: C.faint, sw: 1 }));
    p.push(T(36, y + 26, r[0], { f: 'm', size: 13, fill: C.amber, a: 'start', ls: 1.5 }));
    r[1].forEach((l, j) => p.push(T(36, y + 50 + j * 21, l, { size: 14.5, a: 'start' })));
  });
  FIG['w5-finding'] = svg(800, 480, "Anatomy of one detailed pentest finding. Title: F-03, SQL injection allows login without a password. Severity Critical, CVSS 9.8, target Appointment on HackTheBox, found in Phase 3. Description: the login form builds its query from the user name without parameters. Evidence: user name admin'# with any password logged in as admin, with a screenshot reference. Business impact: anyone could sign in as administrator and read or change every record. Remediation: parameterized queries, allow-list input validation, and a retest.", p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 5 lesson diagrams (inline SVG strings). Built by docs/tools/make_week5_figures.js. Used by Lesson.html via section.figure = { id, caption }.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + FIG[id].map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
