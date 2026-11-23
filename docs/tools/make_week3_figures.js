// Rebuilds the Week 3 lesson diagrams. Usage (repo root): node docs/tools/make_week3_figures.js course-w3-figures.js
// Same palette, fonts, and helpers as docs/tools/make_week1_figures.js.
const fs = require('fs');
const OUT = process.argv[2] || 'course-w3-figures.js';

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

// 1. Authentication factors
(function () {
  const p = [];
  const f = [
    [C.cyan, 'Something you know', ['Password, passphrase,', 'PIN, security answer'], 'Weak spot: guessed,', 'phished, written down', 'PIN on the server room keypad'],
    [C.green, 'Something you have', ['Phone app, security key,', 'smart card, badge'], 'Weak spot: stolen, or', 'tricked into approving', 'Badge on the server room door'],
    [C.amber, 'Something you are', ['Fingerprint, face,', 'iris, voice'], 'Weak spot: cannot be', 'changed if copied', 'Fingerprint unlocking a phone'],
    [C.purple, 'Somewhere you are', ['Network, country,', 'GPS location'], 'Weak alone; good as', 'an extra check', 'Flag a 3 AM foreign sign-in']
  ];
  const w = 182, gap = 14, x0 = 20, y = 20, h = 250;
  f.forEach((it, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, it[0]));
    p.push(T(cx, y + 32, it[1], { f: 'r', size: 16.5, fill: it[0] }));
    it[2].forEach((l, j) => p.push(T(cx, y + 60 + j * 19, l, { size: 13.5 })));
    p.push(L(x + 16, y + 112, x + w - 16, y + 112, { stroke: C.faint, sw: 1 }));
    p.push(T(cx, y + 136, it[3], { size: 13, fill: C.muted }));
    p.push(T(cx, y + 154, it[4], { size: 13, fill: C.muted }));
    p.push(L(x + 16, y + 172, x + w - 16, y + 172, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 196, 'CEDAR CREEK', { size: 12 }));
    const words = it[5].split(' '); let a = '', b = '';
    words.forEach(wd => { if ((a + ' ' + wd).length < 20 && !b) a = (a ? a + ' ' : '') + wd; else b = (b ? b + ' ' : '') + wd; });
    p.push(T(cx, y + 218, a, { size: 13.5, w: 600 }));
    p.push(T(cx, y + 236, b, { size: 13.5, w: 600 }));
  });
  p.push(R(20, 290, 760, 64, { stroke: C.red, sw: 2 }));
  p.push(T(400, 316, 'MFA = two or more DIFFERENT factor types', { f: 'r', size: 20, fill: C.red }));
  p.push(T(400, 340, 'Badge + PIN is MFA (have + know). Password + security question is not (know + know).', { size: 13.5, fill: C.muted }));
  FIG['auth-factors'] = svg(800, 372, 'Authentication factors diagram. Four cards: something you know (password, passphrase, PIN; weak because it can be guessed or phished; Cedar Creek example: the PIN on the server room keypad), something you have (phone app, security key, smart card, badge; can be stolen or approved by mistake; example: the server room badge), something you are (fingerprint, face, iris, voice; cannot be changed if copied; example: a fingerprint unlocking a phone), and somewhere you are (network, country, location; weak alone but a good extra check; example: flagging a 3 AM sign-in from abroad). A banner states that MFA means two or more different factor types: badge plus PIN is MFA, password plus security question is not.', p);
})();

// 2. MFA ladder
(function () {
  const p = [];
  const steps = [
    [C.red, 'Password only', 'Any leaked or guessed password works', 'CC-LEGACY VPN profile'],
    [C.orange, 'SMS code', 'SIM swapping; code typed into fake pages', 'Not used at Cedar Creek'],
    [C.amber, 'App code (TOTP) or push', 'Relayed codes; MFA fatigue approvals', 'CC-REMOTE push approval'],
    [C.green, 'Push with number matching', 'Blind approvals blocked', 'Recommended next step'],
    [C.cyan, 'FIDO2 key or passkey', 'Phishing-resistant: bound to the real site', 'Goal for admins and the CFO']
  ];
  const x0 = 120, bw = 560, bh = 58, gap = 12, y0 = 20;
  steps.forEach((s, i) => {
    const y = y0 + (steps.length - 1 - i) * (bh + gap), indent = i * 8;
    p.push(R(x0 + indent, y, bw - indent * 2, bh, { stroke: s[0], sw: 2 }));
    p.push(R(x0 + indent, y, 6, bh, { fill: s[0], rx: 3 }));
    p.push(T(x0 + indent + 22, y + 25, s[1], { f: 'r', size: 19, a: 'start', fill: s[0] }));
    p.push(T(x0 + indent + 22, y + 45, s[2], { size: 13, a: 'start', fill: C.muted }));
    p.push(T(x0 + bw - indent - 16, y + 35, s[3], { size: 13, a: 'end', w: 600 }));
  });
  const yTop = y0, yBot = y0 + 5 * (bh + gap) - gap;
  p.push(arrow(70, yBot, 70, yTop + 4, C.text, { so: 0.6 }));
  p.push(T(46, (yTop + yBot) / 2, 'STRONGER', { f: 'm', size: 13, fill: C.muted, ls: 2, tr: 'rotate(-90 46 ' + (yTop + yBot) / 2 + ')' }));
  FIG['mfa-ladder'] = svg(800, yBot + 22, 'MFA strength ladder, weakest at the bottom. Password only: any leaked or guessed password works (Cedar Creek: the CC-LEGACY VPN profile). SMS code: vulnerable to SIM swapping and fake pages. App code or push: codes can be relayed and pushes approved through fatigue (Cedar Creek: CC-REMOTE push). Push with number matching: blocks blind approvals (recommended next step). FIDO2 key or passkey at the top: phishing-resistant because it is bound to the real site (goal for admins and the CFO).', p);
})();

// 3. Access control models
(function () {
  const p = [];
  const m = [
    [C.cyan, 'DAC', 'Discretionary', 'The OWNER decides', 'Tom shares his folder', 'Linux chmod / chown'],
    [C.pink, 'MAC', 'Mandatory', 'The SYSTEM decides', 'from labels + clearance', 'SELinux, classified gov.'],
    [C.green, 'RBAC', 'Role-based', 'The ROLE decides', 'join group = get access', 'ENG-Share-RW'],
    [C.amber, 'RULE', 'Rule-based', 'A GLOBAL RULE decides', 'same for everyone', 'No VPN midnight-5 AM'],
    [C.purple, 'ABAC', 'Attribute-based', 'MANY ATTRIBUTES decide', 'user + device + place', 'Managed laptop, in US']
  ];
  const w = 144, gap = 10, x0 = 20, y = 20, h = 236;
  m.forEach((it, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, it[0]));
    p.push(T(cx, y + 40, it[1], { f: 'r', size: 30, fill: it[0], ls: 1 }));
    p.push(T(cx, y + 62, it[2], { size: 13, fill: C.muted }));
    p.push(L(x + 14, y + 78, x + w - 14, y + 78, { stroke: C.faint, sw: 1 }));
    p.push(T(cx, y + 104, it[3].split(' ').slice(0, 2).join(' '), { size: 13.5, w: 700 }));
    p.push(T(cx, y + 122, it[3].split(' ').slice(2).join(' '), { size: 13.5, w: 700 }));
    p.push(T(cx, y + 146, it[4], { size: 12.5, fill: C.muted }));
    p.push(L(x + 14, y + 166, x + w - 14, y + 166, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 190, 'EXAMPLE', { size: 11.5 }));
    p.push(T(cx, y + 212, it[5], { size: 12.5, w: 600 }));
  });
  p.push(T(400, 284, 'Flexible and easy (DAC) ............................................ strict and fine-grained (MAC, ABAC)', { size: 13, fill: C.muted }));
  FIG['access-models'] = svg(800, 302, 'Five access control models. DAC, discretionary: the owner decides, for example Tom sharing his folder with Linux chmod and chown. MAC, mandatory: the system decides from labels and clearances, as in SELinux or classified government systems. RBAC, role-based: the role decides, joining a group grants access, as with ENG-Share-RW. Rule-based: a global rule decides for everyone, such as no VPN from midnight to 5 AM. ABAC, attribute-based: many attributes of user, device, and place decide, such as a managed laptop inside the US.', p);
})();

// 4. Linux permissions
(function () {
  const p = [];
  const cells = ['d', 'r', 'w', 'x', 'r', '-', 'x', '-', '-', '-'];
  const x0 = 110, cw = 56, y = 40, h = 62;
  const cols = [C.muted, C.cyan, C.cyan, C.cyan, C.green, C.green, C.green, C.amber, C.amber, C.amber];
  cells.forEach((c, i) => {
    const x = x0 + i * cw;
    p.push(R(x + 3, y, cw - 6, h, { stroke: cols[i], sw: 2, fill: C.panel }));
    p.push(T(x + cw / 2, y + 42, c, { f: 'm', size: 32, fill: c === '-' ? C.faint : C.text }));
  });
  p.push(T(x0 + cw / 2, y + h + 24, 'type', { size: 13, fill: C.muted }));
  p.push(T(x0 + cw / 2, y + h + 41, 'd = folder', { size: 12, fill: C.muted }));
  const grp = [[1, C.cyan, 'OWNER (user)', 'rwx = 4+2+1 = 7', 'root'], [4, C.green, 'GROUP', 'r-x = 4+0+1 = 5', 'engineering'], [7, C.amber, 'OTHERS', '--- = 0', 'everyone else']];
  grp.forEach(g => {
    const x = x0 + g[0] * cw + 3, w = cw * 3 - 6, cx = x + w / 2;
    p.push(L(x, y + h + 12, x + w, y + h + 12, { stroke: g[1], sw: 3, cap: 'round' }));
    p.push(T(cx, y + h + 34, g[2], { f: 'r', size: 18, fill: g[1] }));
    p.push(T(cx, y + h + 54, g[3], { f: 'm', size: 15 }));
    p.push(T(cx, y + h + 74, g[4], { size: 13, fill: C.muted }));
  });
  p.push(T(400, 26, 'ls -l /srv/cc   ->   drwxr-x---  root engineering  engineering', { f: 'm', size: 14, fill: C.muted }));
  const yb = 210;
  p.push(R(20, yb, 760, 128, { stroke: C.faint, sw: 1.5 }));
  p.push(tag(40, yb + 26, 'READ IT AS', { a: 'start' }));
  p.push(T(40, yb + 50, 'chmod 750 = owner rwx, group r-x, others nothing.', { a: 'start', size: 14.5 }));
  p.push(tag(40, yb + 80, 'COMMON MODES', { a: 'start' }));
  [['600', 'private key'], ['640', 'payroll file'], ['644', 'public config'], ['750', 'team folder'], ['770', 'team share'], ['777', 'never']].forEach((m, i) => {
    const x = 40 + i * 122;
    p.push(T(x, yb + 106, m[0], { f: 'm', size: 18, a: 'start', fill: m[0] === '777' ? C.red : C.text }));
    p.push(T(x + 40, yb + 106, m[1], { size: 12.5, a: 'start', fill: C.muted }));
  });
  FIG['linux-perms'] = svg(800, 356, 'Reading a Linux permission string. The string drwxr-x--- is split into the type (d means folder) and three sets: owner rwx equals 4 plus 2 plus 1 equals 7 (root), group r-x equals 5 (engineering), and others --- equals 0. So chmod 750 gives the owner everything, the group read and execute, and others nothing. Common modes: 600 for a private key, 640 for a payroll file, 644 for a public config file, 750 for a team folder, 770 for a shared team folder, and 777 never.', p);
})();

// 5. Identity lifecycle
(function () {
  const p = [];
  const st = [
    [C.green, 'JOINER', ['HR confirms the hire', 'Account with role access', 'Temp staff get an end date'], 'Priya Nair, Aug 2026'],
    [C.amber, 'MOVER', ['Add the new role', 'REMOVE the old role', 'Skip it = privilege creep'], 'Dana Reyes kept HR'],
    [C.red, 'LEAVER', ['Disable on the last day', 'Remove groups, VPN, badge', 'Delete later, after review'], 'Brian Kessler still on']
  ];
  const w = 232, gap = 32, x0 = 20, y = 20, h = 166;
  st.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(T(cx, y + 32, s[1], { f: 'r', size: 22, fill: s[0], ls: 2 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 62 + j * 21, l, { size: 13.5 })));
    p.push(L(x + 16, y + 128, x + w - 16, y + 128, { stroke: C.faint, sw: 1 }));
    p.push(T(cx, y + 152, s[3], { size: 13, fill: C.muted, w: 600 }));
    if (i < 2) p.push(arrow(x + w + 4, y + h / 2, x + w + gap - 4, y + h / 2, C.text, { so: 0.7 }));
  });
  p.push(R(170, 222, 460, 70, { stroke: C.cyan, sw: 2 }));
  p.push(T(400, 250, 'ACCESS REVIEW (every quarter)', { f: 'r', size: 19, fill: C.cyan }));
  p.push(T(400, 274, 'Owners confirm each person still needs each access', { size: 13.5 }));
  p.push(arrow(260, 222, 140, 192, C.cyan, { so: 0.6, dash: '5 4' }));
  p.push(arrow(400, 222, 400, 192, C.cyan, { so: 0.6, dash: '5 4' }));
  p.push(arrow(540, 222, 660, 192, C.cyan, { so: 0.6, dash: '5 4' }));
  p.push(T(400, 318, 'Trigger every step from HR, in writing, and have IT confirm it was done.', { size: 13.5, fill: C.muted }));
  FIG['identity-lifecycle'] = svg(800, 336, 'Identity lifecycle. Joiner: HR confirms the hire, the account gets role access, and temporary staff get an end date (Cedar Creek: Priya Nair, August 2026). Mover: add the new role and remove the old one; skipping removal causes privilege creep (Dana Reyes kept HR access). Leaver: disable on the last day, remove groups, VPN, and badge, and delete later after review (Brian Kessler is still enabled). A quarterly access review checks all three, with owners confirming each access. Every step should be triggered by HR in writing and confirmed by IT.', p);
})();

// 6. SAML SSO flow
(function () {
  const p = [];
  const box = (x, y, w, h, col, t1, t2, t3) => {
    p.push(card(x, y, w, h, col));
    p.push(T(x + w / 2, y + 30, t1, { f: 'r', size: 20, fill: col }));
    p.push(T(x + w / 2, y + 52, t2, { size: 13.5 }));
    if (t3) p.push(T(x + w / 2, y + 71, t3, { size: 12.5, fill: C.muted }));
  };
  box(20, 120, 180, 90, C.text, 'User', 'Web browser', 'Carla in Payroll');
  box(310, 20, 200, 90, C.green, 'Service provider', 'The application', 'Cloud payroll service');
  box(310, 230, 200, 90, C.cyan, 'Identity provider', 'Authenticates + signs', 'Microsoft 365 sign-in');
  box(610, 120, 170, 90, C.amber, 'Trust', 'Set up once', 'SP has the IdP\'s cert');
  const step = (n, x, y) => { p.push(Circ(x, y, 12, { fill: C.bg, stroke: C.red, sw: 2 })); p.push(T(x, y + 5, String(n), { f: 'r', size: 15 })); };
  p.push(arrow(200, 140, 308, 80, C.text, { so: 0.75 })); step(1, 240, 103);
  p.push(T(214, 84, 'opens the app', { size: 12.5, a: 'start', fill: C.muted }));
  p.push(arrow(330, 112, 330, 228, C.text, { so: 0.75, dash: '5 4' })); step(2, 330, 170);
  p.push(T(316, 158, 'redirected', { size: 12.5, a: 'end', fill: C.muted })); p.push(T(316, 175, 'to sign in', { size: 12.5, a: 'end', fill: C.muted }));
  p.push(arrow(308, 270, 200, 200, C.text, { so: 0.75 })); step(3, 240, 247);
  p.push(T(150, 262, 'password + MFA', { size: 12.5, fill: C.muted }));
  p.push(arrow(490, 228, 490, 112, C.cyan, { so: 0.85 })); step(4, 490, 170);
  p.push(T(504, 160, 'signed assertion', { size: 12.5, a: 'start', fill: C.cyan }));
  p.push(T(504, 178, '(via the browser)', { size: 12, a: 'start', fill: C.muted }));
  p.push(L(608, 165, 512, 70, { stroke: C.amber, sw: 1.5, dash: '4 4', so: 0.7 }));
  p.push(L(608, 165, 512, 270, { stroke: C.amber, sw: 1.5, dash: '4 4', so: 0.7 }));
  p.push(T(400, 352, 'The app never sees the password. Protect the IdP and its signing key above everything else.', { size: 13.5, fill: C.muted }));
  FIG['sso-flow'] = svg(800, 372, 'SAML single sign-on flow. 1: the user opens the application (the service provider, such as the cloud payroll service). 2: the application redirects the browser to the identity provider (the Microsoft 365 sign-in). 3: the user authenticates there with password and MFA. 4: the identity provider sends a signed assertion back through the browser to the application, which trusts it because the two were set up in advance with the identity provider\'s certificate. The application never sees the password, so the identity provider and its signing key must be protected above everything else.', p);
})();

// 7. Data classification levels
(function () {
  const p = [];
  const lv = [
    [C.green, 'PUBLIC', 'Approved for anyone', 'Brochures, line card', 'No special handling'],
    [C.cyan, 'INTERNAL', 'Staff only; little harm if leaked', 'Handbook, holiday schedule', 'Do not post outside'],
    [C.amber, 'CONFIDENTIAL', 'Would harm the company, customers, or staff', 'Drawings, specs, personnel, payroll', 'Need-to-know groups; encrypt to send'],
    [C.red, 'RESTRICTED', 'Could hand over control of systems', 'Passwords, FW-CORE configs', 'Named admins only; vault, log every use']
  ];
  const x0 = 20, w = 760, h = 72, gap = 10;
  lv.forEach((l, i) => {
    const y = 20 + (3 - i) * (h + gap);
    p.push(R(x0, y, w, h, { stroke: l[0], sw: 2 }));
    p.push(R(x0, y, 8, h, { fill: l[0], rx: 3 }));
    p.push(T(x0 + 28, y + 30, l[1], { f: 'r', size: 21, a: 'start', fill: l[0], ls: 1.5 }));
    p.push(T(x0 + 28, y + 52, l[2], { size: 13, a: 'start', fill: C.muted }));
    p.push(tag(x0 + 360, y + 26, 'EXAMPLES', { a: 'start', size: 11.5 }));
    p.push(T(x0 + 360, y + 48, l[3], { size: 13.5, a: 'start', w: 600 }));
    p.push(tag(x0 + 600, y + 26, 'HANDLING', { a: 'start', size: 11.5 }));
    const hw = l[4].split('; ');
    hw.forEach((t, j) => p.push(T(x0 + 600, y + 46 + j * 17, t, { size: 12.5, a: 'start' })));
  });
  FIG['data-classes'] = svg(800, 20 + 4 * (h + gap) + 10, 'Cedar Creek draft data classification levels from most to least sensitive. Restricted: could hand over control of systems, such as passwords, FW-CORE configurations, and admin tools; named admins only, kept in a vault, every use logged. Confidential: would harm the company, customers, or staff, such as drawings, specs, personnel, and payroll; need-to-know groups and encryption to send. Internal: staff only, little harm if leaked, such as the handbook and holiday schedule; do not post outside. Public: approved for anyone, such as brochures and the line card; no special handling.', p);
})();

// 8. Data states
(function () {
  const p = [];
  const st = [
    [C.cyan, 'AT REST', 'Stored', ['FS-HR01 payroll share', 'Backup tapes on the shelf'], ['Permissions (ACLs)', 'Encryption: disk, backups']],
    [C.amber, 'IN TRANSIT', 'Moving on a network', ['Upload to payroll service', 'VPN session from home'], ['TLS (HTTPS)', 'Encrypted VPN tunnel']],
    [C.green, 'IN USE', 'Being processed', ['Payroll open on Carla\'s', 'screen and in memory'], ['Access control, screen', 'lock, privacy filter']]
  ];
  const w = 236, gap = 26, x0 = 20, y = 20, h = 232;
  st.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(T(cx, y + 34, s[1], { f: 'r', size: 23, fill: s[0], ls: 2 }));
    p.push(T(cx, y + 56, s[2], { size: 13.5, fill: C.muted }));
    p.push(L(x + 16, y + 72, x + w - 16, y + 72, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 94, 'CEDAR CREEK PAYROLL', { size: 11.5 }));
    s[3].forEach((l, j) => p.push(T(cx, y + 116 + j * 19, l, { size: 13.5, w: 600 })));
    p.push(L(x + 16, y + 154, x + w - 16, y + 154, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 176, 'MAIN PROTECTION', { size: 11.5 }));
    s[4].forEach((l, j) => p.push(T(cx, y + 198 + j * 19, l, { size: 13.5 })));
    if (i < 2) p.push(arrow(x + w + 3, y + h / 2, x + w + gap - 3, y + h / 2, C.text, { so: 0.6, hl: 8, hw: 5 }));
  });
  p.push(T(400, 282, 'The same data moves through all three states. Each state needs its own protection.', { size: 13.5, fill: C.muted }));
  FIG['data-states'] = svg(800, 300, 'Data states using Cedar Creek payroll. At rest (stored): the FS-HR01 payroll share and the backup tapes; protected by permissions and encryption of disks and backups. In transit (moving on a network): the upload to the payroll service and VPN sessions from home; protected by TLS and the encrypted VPN tunnel. In use (being processed): payroll open on screen and in memory; protected by access control, screen lock, and privacy filters. The same data moves through all three states.', p);
})();

// 9. Data roles
(function () {
  const p = [];
  p.push(R(290, 128, 220, 84, { stroke: C.text, sw: 2.5 }));
  p.push(T(400, 160, 'PAYROLL DATA', { f: 'r', size: 22, ls: 1.5 }));
  p.push(T(400, 184, 'SSNs, pay rates, bank accounts', { size: 13, fill: C.muted }));
  const roles = [
    [20, 20, C.amber, 'OWNER', 'Rosa Medina', 'Decides access, class, retention', [290, 150]],
    [560, 20, C.cyan, 'CUSTODIAN', 'Dee Ortiz', 'Runs FS-HR01, backups, ACLs', [510, 150]],
    [20, 228, C.green, 'CONTROLLER', 'Cedar Creek Industries', 'Decides why data is processed', [290, 190]],
    [560, 228, C.purple, 'PROCESSOR', 'Cloud payroll service', 'Processes on Cedar Creek\'s orders', [510, 190]]
  ];
  roles.forEach(r => {
    const [x, y, col, t, who, what, end] = r, w = 220, h = 92;
    p.push(card(x, y, w, h, col));
    p.push(T(x + w / 2, y + 28, t, { f: 'r', size: 19, fill: col, ls: 1.5 }));
    p.push(T(x + w / 2, y + 52, who, { size: 14.5, w: 600 }));
    p.push(T(x + w / 2, y + 74, what, { size: 12.5, fill: C.muted }));
    p.push(L(x < 300 ? x + w : x, y + h / 2, end[0], end[1], { stroke: col, sw: 1.8, so: 0.75 }));
  });
  p.push(R(290, 252, 220, 46, { stroke: C.pink, sw: 2 }));
  p.push(T(400, 274, 'SUBJECT: each employee', { f: 'r', size: 16, fill: C.pink }));
  p.push(T(400, 291, 'the person the data describes', { size: 12, fill: C.muted }));
  p.push(L(400, 212, 400, 252, { stroke: C.pink, sw: 1.8, so: 0.75 }));
  FIG['data-roles'] = svg(800, 340, 'Data roles around Cedar Creek payroll data (SSNs, pay rates, bank accounts). Owner: Rosa Medina, who decides access, classification, and retention. Custodian: Dee Ortiz, who runs FS-HR01, backups, and permissions. Controller: Cedar Creek Industries, which decides why the data is processed. Processor: the cloud payroll service, which processes it on Cedar Creek\'s instructions. Subject: each employee the data describes.', p);
})();

// 10. Data lifecycle
(function () {
  const p = [];
  const st = [[C.green, 'Create', 'or collect'], [C.cyan, 'Store', 'classify, protect'], [C.amber, 'Use', 'need-to-know'], [C.purple, 'Share', 'approved ways'], [C.orange, 'Archive', 'per retention'], [C.red, 'Destroy', 'sanitize, certify']];
  const w = 112, gap = 18, x0 = 20, y = 30, h = 92;
  st.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 24, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 52, s[1], { f: 'r', size: 20 }));
    p.push(T(cx, y + 74, s[2], { size: 12.5, fill: C.muted }));
    if (i < 5) p.push(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, C.text, { so: 0.7, hl: 8, hw: 5 }));
  });
  p.push(R(20, 150, 760, 102, { stroke: C.faint, sw: 1.5 }));
  p.push(tag(40, 176, 'RETENTION DECIDES HOW LONG STEPS 2-5 LAST', { a: 'start' }));
  p.push(T(40, 202, 'Set by the data owner with HR and legal advice. Keeping data longer than needed adds risk and cost.', { size: 13.5, a: 'start' }));
  p.push(T(40, 226, 'A legal hold pauses step 6 for records tied to a lawsuit or investigation.', { size: 13.5, a: 'start' }));
  p.push(T(40, 244, 'Destroy: overwrite, cryptographic erase, degauss, or shred, then keep the certificate of destruction.', { size: 12.5, a: 'start', fill: C.muted }));
  FIG['data-lifecycle'] = svg(800, 270, 'Data lifecycle in six steps: create or collect, store (classify and protect), use (need-to-know), share (approved ways only), archive (per retention), and destroy (sanitize and certify). Retention, set by the data owner with HR and legal advice, decides how long data stays; keeping it longer adds risk and cost. A legal hold pauses destruction for records tied to a lawsuit or investigation. Destruction methods: overwrite, cryptographic erase, degauss, or shred, then keep the certificate of destruction.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 3 lesson diagrams (inline SVG strings). Built by docs/tools/make_week3_figures.js. Used by Lesson.html via section.figure = { id, caption }.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + FIG[id].map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
