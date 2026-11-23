// Rebuilds the Week 6 lesson diagrams. Usage (repo root): node docs/tools/make_week6_figures.js course-w6-figures.js
// Same palette, fonts, and helpers as make_week1_figures.js.
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
  return L(x1, y1, +bx.toFixed(1), +by.toFixed(1), { stroke: color, sw: o.sw || 2, so: o.so, dash: o.dash }) + '<polygon points="' + p + '" fill="' + color + '"' + (o.so != null ? ' fill-opacity="' + o.so + '"' : '') + '/>';
}
function svg(w, h, label, parts) {
  return ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label) + '">', R(0, 0, w, h, { fill: C.bg, rx: 12 })].concat(parts, ['</svg>']);
}
const card = (x, y, w, h, color) => R(x, y, w, h, { stroke: color, sw: 2 });
const tag = (x, y, s, o = {}) => T(x, y, s, Object.assign({ f: 'm', size: 13, fill: C.muted, ls: 1.5 }, o));

const FIG = {};

// 1. Anatomy of a social engineering attack (Lesson 6.1)
(function () {
  const p = [];
  const steps = [
    [C.cyan, '1  Research', 'OSINT: website,', 'LinkedIn, news', 'Who approves', 'payments?'],
    [C.amber, '2  Pretext', 'A believable', 'story and identity', '"I am the CFO,', 'new vendor"'],
    [C.orange, '3  Lever', 'Pressure to skip', 'the checks', 'Authority +', 'urgency'],
    [C.pink, '4  The ask', 'Click, pay,', 'share, let me in', 'Wire $48,750,', '"don\'t call"']
  ];
  const w = 170, gap = 26, x0 = 20, y = 20, h = 176;
  steps.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(T(cx, y + 32, s[1], { f: 'r', size: 21, fill: s[0] }));
    p.push(T(cx, y + 56, s[2], { size: 13.5 }));
    p.push(T(cx, y + 74, s[3], { size: 13.5 }));
    p.push(L(x + 16, y + 90, x + w - 16, y + 90, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 110, 'AUGUST BEC'));
    p.push(T(cx, y + 133, s[4], { size: 14, w: 600 }));
    p.push(T(cx, y + 152, s[5], { size: 14, w: 600 }));
    if (i < 3) p.push(arrow(x + w + 3, y + h / 2, x + w + gap - 3, y + h / 2, C.text, { so: 0.7 }));
  });
  p.push(R(20, 216, 760, 46, { fill: C.green, fo: 0.08, stroke: C.green, sw: 1.5 }));
  p.push(T(400, 245, 'Break the chain at step 4: verify through a second channel you already trust, then report.', { size: 15, w: 600, fill: C.green }));
  FIG['se-anatomy'] = svg(800, 282, 'Four steps of a social engineering attack, with the August business email compromise attempt as the example. 1 Research: open-source intelligence such as the website, LinkedIn, and news, to learn who approves payments. 2 Pretext: a believable story and identity, I am the CFO with a new vendor. 3 Lever: pressure to skip the checks, here authority plus urgency. 4 The ask: click, pay, share, or let me in; here, wire $48,750 and do not call. The defense: break the chain at step 4 by verifying through a second channel you already trust, then report.', p);
})();

// 2. Social engineering by channel (Lesson 6.1)
(function () {
  const p = [];
  const cols = [
    [C.cyan, 'EMAIL', [['Phishing', 'many people, a brand'], ['Spear phishing', 'one person, details'], ['Whaling', 'an executive'], ['BEC', 'fake exec or vendor, $']]],
    [C.amber, 'TEXT AND CHAT', [['Smishing', 'SMS text, short link'], ['IM lures', 'Teams or chat'], ['Quishing', 'QR code to phone']]],
    [C.orange, 'VOICE', [['Vishing', 'phone call'], ['Pretexting', 'a made-up story'], ['Impersonation', 'IT, vendor, boss']]],
    [C.pink, 'IN PERSON', [['Tailgating', 'follows unnoticed'], ['Piggybacking', 'door held for them'], ['Shoulder surfing', 'watches you type'], ['Dumpster diving', 'searches trash']]],
    [C.purple, 'WEB AND MEDIA', [['Watering hole', 'infects a site you use'], ['Typosquatting', 'look-alike domain'], ['Brand imperson.', 'copied logo, style'], ['Baiting', 'USB drive left out']]]
  ];
  const w = 148, gap = 5, x0 = 16, y0 = 16;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(R(x, y0, w, 40, { fill: C.panel }));
    p.push(R(x, y0, w, 4, { fill: c[0], rx: 2 }));
    p.push(T(cx, y0 + 28, c[1], { f: 'm', size: 13, fill: c[0], ls: 1 }));
    c[2].forEach((it, j) => {
      const y = y0 + 48 + j * 62;
      p.push(R(x, y, w, 56, { fill: C.panel, stroke: c[0], sw: 1.5, so: 0.5 }));
      p.push(T(cx, y + 24, it[0], { f: 'r', size: 17 }));
      p.push(T(cx, y + 43, it[1], { size: 12.5, fill: C.muted }));
    });
  });
  p.push(T(400, 334, 'The clue in the question names the attack: who was targeted, and through which channel.', { size: 13.5, fill: C.muted }));
  FIG['se-types'] = svg(800, 352, 'Social engineering attacks grouped by channel. Email: phishing (many people, a brand), spear phishing (one person, personal details), whaling (an executive), business email compromise (fake executive or vendor asking for money). Text and chat: smishing (SMS with a short link), instant messaging lures (Teams or chat), quishing (QR code that moves the link to a phone). Voice: vishing (phone call), pretexting (a made-up story), impersonation (IT, a vendor, or a boss). In person: tailgating (follows unnoticed), piggybacking (door held for them), shoulder surfing (watches you type), dumpster diving (searches trash). Web and media: watering hole (infects a site you use), typosquatting (look-alike domain), brand impersonation (copied logo and style), baiting (USB drive left out).', p);
})();

// 3. Email path and Received headers (Lesson 6.2)
(function () {
  const p = [];
  const hops = [
    [C.red, 'Sending server', 'mail.cedarcreek-it.com', '203.0.113.77'],
    [C.amber, 'M365 filter', '...mail.protection', '.outlook.com'],
    [C.cyan, 'Mailbox server', '...prod.outlook.com', ''],
    [C.green, 'Kevin\'s inbox', 'k.tran@', 'cedarcreek-ind.com']
  ];
  const w = 170, gap = 26, x0 = 20, y = 20, h = 92;
  hops.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(T(cx, y + 28, s[1], { f: 'r', size: 18, fill: s[0] }));
    p.push(T(cx, y + 50, s[2], { f: 'm', size: 12.5 }));
    if (s[3]) p.push(T(cx, y + 68, s[3], { f: 'm', size: 12.5 }));
    if (i < 3) p.push(arrow(x + w + 3, y + h / 2, x + w + gap - 3, y + h / 2, C.text, { so: 0.7 }));
  });
  p.push(tag(20, 140, 'HEADERS IN THE SAVED MESSAGE (TOP OF FILE FIRST)', { a: 'start' }));
  const rows = [
    [C.cyan, 'Received: from ...prod.outlook.com by ...prod.outlook.com', 'added last (newest)', 2],
    [C.amber, 'Received: from ...mail.protection.outlook.com by ...prod...', 'added second', 1],
    [C.red, 'Received: from mail.cedarcreek-it.com (203.0.113.77) by ...', 'added first: the origin', 0]
  ];
  rows.forEach((r, i) => {
    const yy = 152 + i * 46;
    p.push(R(20, yy, 560, 38, { fill: C.panel, stroke: r[0], sw: 1.5, so: 0.6 }));
    p.push(T(34, yy + 24, r[1], { f: 'm', size: 12.5, a: 'start' }));
    p.push(T(596, yy + 24, r[2], { size: 13, a: 'start', fill: r[0] }));
  });
  p.push(arrow(770, 280, 770, 160, C.text, { so: 0.7 }));
  p.push(T(756, 230, 'read', { size: 13, a: 'end', fill: C.muted }));
  p.push(T(756, 248, 'bottom up', { size: 13, a: 'end', fill: C.muted }));
  p.push(T(400, 318, 'Each server adds its Received line on top. The lowest line your provider wrote is the first one you can trust.', { size: 13.5, fill: C.muted }));
  FIG['email-path'] = svg(800, 338, 'How an email travels and how the Received headers record it. The message goes from the sending server mail.cedarcreek-it.com at 203.0.113.77, to the Microsoft 365 filter, to the mailbox server, to Kevin Tran\'s inbox. In the saved message the Received headers appear newest first: the top line was added last by the mailbox server, the middle one by the filter, and the bottom one was added first and shows the origin, 203.0.113.77. Read them from the bottom up; the lowest line your own provider wrote is the first one you can trust.', p);
})();

// 4. SPF, DKIM, DMARC (Lesson 6.2)
(function () {
  const p = [];
  const cols = [
    [C.cyan, 'SPF', 'Is this server allowed', 'to send for the domain?', 'Checks: sending IP vs', 'list in DNS', 'Domain: Return-Path', 'spf=pass / fail'],
    [C.amber, 'DKIM', 'Was it signed by the', 'domain, and unchanged?', 'Checks: signature vs', 'public key in DNS', 'Domain: d= in signature', 'dkim=pass / none'],
    [C.purple, 'DMARC', 'Do SPF or DKIM pass for', 'the From domain?', 'Adds: alignment, a policy,', 'and reports', 'Domain: visible From', 'dmarc=fail action=none']
  ];
  const w = 240, gap = 20, x0 = 20, y = 20, h = 230;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, c[0]));
    p.push(T(cx, y + 34, c[1], { f: 'r', size: 26, fill: c[0] }));
    p.push(T(cx, y + 60, c[2], { size: 14, w: 600 }));
    p.push(T(cx, y + 79, c[3], { size: 14, w: 600 }));
    p.push(L(x + 18, y + 94, x + w - 18, y + 94, { stroke: C.faint, sw: 1 }));
    p.push(T(cx, y + 118, c[4], { size: 13.5, fill: C.muted }));
    p.push(T(cx, y + 137, c[5], { size: 13.5, fill: C.muted }));
    p.push(T(cx, y + 166, c[6], { size: 13.5 }));
    p.push(R(x + 30, y + 182, w - 60, 30, { fill: C.bg, stroke: c[0], sw: 1, so: 0.6 }));
    p.push(T(cx, y + 202, c[7], { f: 'm', size: 13 }));
  });
  const pol = [[C.muted, 'p=none', 'deliver, report only'], [C.amber, 'p=quarantine', 'send to junk'], [C.green, 'p=reject', 'refuse the mail']];
  p.push(tag(20, 284, 'DMARC POLICY', { a: 'start' }));
  pol.forEach((q, i) => {
    const x = 150 + i * 214;
    p.push(R(x, 266, 200, 30, { fill: C.panel, stroke: q[0], sw: 1.5 }));
    p.push(T(x + 100, 286, q[1] + ': ' + q[2], { size: 13.5, fill: q[0] === C.muted ? C.text : q[0] }));
  });
  p.push(T(400, 324, 'Cedar Creek publishes p=none today, so forged @cedarcreek-ind.com mail is still delivered.', { size: 13.5, fill: C.muted }));
  FIG['email-auth'] = svg(800, 344, 'The three email authentication checks. SPF asks whether this server is allowed to send for the domain, comparing the sending IP with a list in DNS for the Return-Path domain; result spf=pass or fail. DKIM asks whether the message was signed by the domain and is unchanged, checking the signature against a public key in DNS for the d= domain; result dkim=pass or none. DMARC asks whether SPF or DKIM passed for the visible From domain, and adds alignment, a policy, and reports; result for example dmarc=fail action=none. DMARC policies: p=none delivers and only reports, p=quarantine sends to junk, p=reject refuses the mail. Cedar Creek publishes p=none today.', p);
})();

// 5. Online vs offline attacks (Lesson 6.3)
(function () {
  const p = [];
  function panel(x, color, title, sub, a, b, c, notes) {
    p.push(card(x, 16, 372, 246, color));
    p.push(T(x + 186, 46, title, { f: 'r', size: 22, fill: color }));
    p.push(T(x + 186, 68, sub, { size: 13.5, fill: C.muted }));
    const bx = [x + 18, x + 136, x + 254];
    [a, b, c].forEach((t, i) => {
      p.push(R(bx[i], 86, 100, 54, { fill: C.bg, stroke: C.text, sw: 1, so: 0.3 }));
      p.push(T(bx[i] + 50, 109, t[0], { size: 13, w: 600 }));
      p.push(T(bx[i] + 50, 127, t[1], { size: 12.5, fill: C.muted }));
      if (i < 2) p.push(arrow(bx[i] + 102, 113, bx[i] + 116, 113, C.text, { so: 0.7, hl: 8, hw: 5 }));
    });
    notes.forEach((n, i) => p.push(T(x + 30, 172 + i * 22, n, { size: 13.5, a: 'start' })));
  }
  panel(16, C.amber, 'ONLINE', 'Guessing against a live login', ['Attacker', 'many guesses'], ['Login page', 'VPN, M365'], ['Account', 'locks or slows'],
    ['- Each guess crosses the network', '- Logged, rate-limited, lockout', '- A few guesses per minute', '- Spraying and stuffing live here']);
  panel(412, C.red, 'OFFLINE', 'Cracking a stolen copy of the hashes', ['Hash file', 'stolen copy'], ['Cracker', 'John, GPUs'], ['Passwords', 'that match'],
    ['- No network, no logs, no lockout', '- Billions of fast guesses a second', '- Only length and slow hashes help', '- Protect hash files like passwords']);
  FIG['online-offline'] = svg(800, 278, 'Online versus offline password attacks. Online: an attacker sends many guesses to a live login page such as a VPN or Microsoft 365, and the account locks or slows; each guess crosses the network, is logged and rate-limited, only a few guesses per minute are possible, and spraying and credential stuffing happen here. Offline: an attacker takes a stolen copy of the hash file and runs a cracker such as John the Ripper on GPUs to find matching passwords; there is no network, no logs, and no lockout, billions of fast guesses per second are possible, only length and slow hashes help, so hash files must be protected like passwords.', p);
})();

// 6. Salted vs unsalted hashes (Lesson 6.3)
(function () {
  const p = [];
  p.push(card(16, 16, 372, 250, C.red));
  p.push(T(202, 46, 'NO SALT (Windows NT hash)', { f: 'r', size: 20, fill: C.red }));
  ['m.alvarez', 'r.doyle', 'n.brooks'].forEach((u, i) => {
    const y = 70 + i * 52;
    p.push(T(32, y + 22, u, { f: 'm', size: 13, a: 'start' }));
    p.push(T(120, y + 22, 'Welcome1', { f: 'm', size: 13, a: 'start', fill: C.muted }));
    p.push(arrow(196, y + 17, 222, y + 17, C.text, { so: 0.6, hl: 8, hw: 5 }));
    p.push(R(228, y, 148, 32, { fill: C.red, fo: 0.12, stroke: C.red, sw: 1 }));
    p.push(T(302, y + 21, 'hash A (same)', { f: 'm', size: 12.5 }));
  });
  p.push(T(202, 236, 'Same password, same hash: shared passwords', { size: 13, fill: C.muted }));
  p.push(T(202, 254, 'show up, and rainbow tables work.', { size: 13, fill: C.muted }));
  p.push(card(412, 16, 372, 250, C.green));
  p.push(T(598, 46, 'SALTED (sha512crypt, yescrypt)', { f: 'r', size: 20, fill: C.green }));
  [['salt Xq3', 'hash 9fK2...'], ['salt b7Lp', 'hash 2Rw8...'], ['salt M0az', 'hash eT5v...']].forEach((s, i) => {
    const y = 70 + i * 52;
    p.push(T(428, y + 14, 'Welcome1', { f: 'm', size: 13, a: 'start', fill: C.muted }));
    p.push(T(428, y + 31, '+ ' + s[0], { f: 'm', size: 13, a: 'start', fill: C.amber }));
    p.push(arrow(526, y + 17, 552, y + 17, C.text, { so: 0.6, hl: 8, hw: 5 }));
    p.push(R(558, y, 210, 32, { fill: C.green, fo: 0.1, stroke: C.green, sw: 1 }));
    p.push(T(663, y + 21, s[1] + ' (unique)', { f: 'm', size: 12.5 }));
  });
  p.push(T(598, 236, 'Every stored hash is different. Precomputed', { size: 13, fill: C.muted }));
  p.push(T(598, 254, 'tables fail, and each account is attacked alone.', { size: 13, fill: C.muted }));
  FIG['salted-hashes'] = svg(800, 282, 'Unsalted versus salted password hashes. Left, no salt, as in Windows NT hashes: three accounts, m.alvarez, r.doyle, and n.brooks, all use Welcome1 and all get the same hash, so shared passwords show up and rainbow tables work. Right, salted, as in sha512crypt and yescrypt: the same password Welcome1 combined with three different random salts gives three different hashes, so precomputed tables fail and each account must be attacked on its own. Hash values shown are illustrative.', p);
})();

// 7. Entropy bars (Lesson 6.4)
(function () {
  const p = [];
  const rows = [
    ['6 random digits', 19.9, C.red, '1 million guesses'],
    ['8 random lowercase', 37.6, C.red, 'seconds offline'],
    ['4 random words (Diceware)', 51.7, C.amber, ''],
    ['6 random words (Diceware)', 77.5, C.green, ''],
    ['12 random, all 95 types', 78.8, C.green, ''],
    ['20 random (password manager)', 131.4, C.cyan, '']
  ];
  const x0 = 250, maxW = 470, max = 140, y0 = 40, bh = 30, gap = 14;
  p.push(tag(20, 26, 'ENTROPY IN BITS (RANDOM CHOICE ONLY)', { a: 'start' }));
  [0, 20, 40, 60, 80, 100, 120, 140].forEach(v => {
    const x = x0 + v / max * maxW;
    p.push(L(x, y0 - 6, x, y0 + rows.length * (bh + gap), { stroke: C.faint, sw: 1, so: 0.6 }));
    p.push(T(x, y0 + rows.length * (bh + gap) + 16, String(v), { f: 'm', size: 12, fill: C.muted }));
  });
  rows.forEach((r, i) => {
    const y = y0 + i * (bh + gap), w = r[1] / max * maxW;
    p.push(T(x0 - 12, y + 20, r[0], { size: 14, a: 'end' }));
    p.push(R(x0, y, w, bh, { fill: r[2], fo: 0.75, rx: 4 }));
    p.push(T(x0 + w + 8, y + 20, r[1].toFixed(1) + (r[3] ? '  ' + r[3] : ''), { f: 'm', size: 13, a: 'start' }));
  });
  const yb = y0 + rows.length * (bh + gap) + 34;
  p.push(R(20, yb, 760, 52, { fill: C.red, fo: 0.07, stroke: C.red, sw: 1.5 }));
  p.push(T(400, yb + 21, 'Summer2026! looks like 11 mixed characters (about 72 bits by the formula),', { size: 13.5 }));
  p.push(T(400, yb + 40, 'but it follows a pattern an attacker tries in 16 guesses. Patterns, not formulas, decide real strength.', { size: 13.5 }));
  FIG['entropy-bars'] = svg(800, yb + 68, 'Bar chart of entropy in bits for randomly chosen passwords: 6 random digits 19.9 bits (one million guesses); 8 random lowercase letters 37.6 bits (seconds offline); 4 random Diceware words 51.7 bits; 6 random Diceware words 77.5 bits; 12 random characters from all 95 types 78.8 bits; 20 random characters from a password manager 131.4 bits. Note: Summer2026! looks like 11 mixed characters, about 72 bits by the formula, but it follows a pattern an attacker tries in 16 guesses.', p);
})();

// 8. Perimeter trust vs Zero Trust (Lesson 6.5)
(function () {
  const p = [];
  p.push(card(16, 16, 372, 262, C.red));
  p.push(T(202, 44, 'PERIMETER TRUST', { f: 'r', size: 20, fill: C.red }));
  p.push(R(40, 60, 324, 170, { fill: 'none', stroke: C.text, sw: 4, so: 0.35, rx: 16 }));
  p.push(tag(202, 78, 'FIREWALL + VPN', { size: 11.5 }));
  const n1 = [[90, 120, 'Plant'], [202, 110, 'Office'], [314, 120, 'Servers'], [130, 190, 'HR'], [274, 190, 'ENG']];
  for (let i = 0; i < n1.length; i++) for (let j = i + 1; j < n1.length; j++) p.push(L(n1[i][0], n1[i][1], n1[j][0], n1[j][1], { stroke: C.green, sw: 1, so: 0.35 }));
  n1.forEach(n => { p.push(Circ(n[0], n[1], 26, { fill: C.panel, stroke: C.green })); p.push(T(n[0], n[1] + 4, n[2], { size: 11.5 })); });
  p.push(Circ(166, 150, 9, { fill: C.red }));
  p.push(T(202, 254, 'Inside = trusted. One phished login reaches everything.', { size: 13, fill: C.muted }));
  p.push(card(412, 16, 372, 262, C.green));
  p.push(T(598, 44, 'ZERO TRUST', { f: 'r', size: 20, fill: C.green }));
  const n2 = [[470, 110, 'Plant'], [598, 100, 'Office'], [726, 110, 'Servers'], [520, 190, 'HR'], [676, 190, 'ENG']];
  n2.forEach(n => {
    p.push(Circ(n[0], n[1], 26, { fill: C.panel, stroke: C.cyan }));
    p.push(T(n[0], n[1] + 4, n[2], { size: 11.5 }));
    p.push(R(n[0] - 9, n[1] - 46, 18, 14, { fill: C.amber, rx: 3 }));
  });
  p.push(Circ(598, 150, 9, { fill: C.red }));
  p.push(arrow(590, 156, 532, 180, C.red, { so: 0.7, dash: '4 4' }));
  p.push(T(560, 160, 'x', { f: 'r', size: 18, fill: C.red }));
  p.push(T(598, 236, 'Gate (amber) at every resource:', { size: 13, fill: C.muted }));
  p.push(T(598, 254, 'identity, device, and context checked each time.', { size: 13, fill: C.muted }));
  FIG['trust-models'] = svg(800, 294, 'Perimeter trust versus Zero Trust. Left: a firewall and VPN wall surrounds plant, office, servers, HR, and engineering, which all connect freely; inside means trusted, so an attacker with one phished login, shown as a red dot, can reach everything. Right: Zero Trust puts a gate in front of every resource and checks identity, device, and context on each request, so the attacker\'s attempt to move from the office to HR is blocked.', p);
})();

// 9. Zero Trust architecture (Lesson 6.5)
(function () {
  const p = [];
  p.push(R(16, 16, 768, 176, { fill: C.purple, fo: 0.06, stroke: C.purple, sw: 2 }));
  p.push(tag(32, 38, 'CONTROL PLANE: DECIDES', { a: 'start', fill: C.purple }));
  p.push(card(300, 52, 200, 70, C.purple));
  p.push(T(400, 82, 'Policy engine', { f: 'r', size: 19, fill: C.purple }));
  p.push(T(400, 104, 'grant, deny, revoke', { size: 13, fill: C.muted }));
  p.push(card(560, 52, 200, 70, C.purple));
  p.push(T(660, 82, 'Policy administrator', { f: 'r', size: 19, fill: C.purple }));
  p.push(T(660, 104, 'carries out the decision', { size: 13, fill: C.muted }));
  p.push(arrow(502, 87, 556, 87, C.purple));
  ['Identity + MFA', 'Device health', 'Context, time, place', 'Threat intel'].forEach((s, i) => {
    p.push(R(32, 52 + i * 26, 210, 22, { fill: C.panel, rx: 5 }));
    p.push(T(137, 68 + i * 26, s, { size: 12.5 }));
  });
  p.push(arrow(244, 87, 296, 87, C.text, { so: 0.6 }));
  p.push(T(32, 176, 'Guided by adaptive identity, threat scope reduction, policy-driven access control', { size: 12.5, fill: C.muted, a: 'start' }));
  p.push(R(16, 202, 768, 150, { fill: C.cyan, fo: 0.05, stroke: C.cyan, sw: 2 }));
  p.push(tag(32, 224, 'DATA PLANE: ENFORCES', { a: 'start', fill: C.cyan }));
  p.push(card(40, 252, 190, 70, C.text));
  p.push(T(135, 282, 'Subject / system', { f: 'r', size: 19 }));
  p.push(T(135, 304, 'Priya on her laptop', { size: 13, fill: C.muted }));
  p.push(card(305, 252, 190, 70, C.amber));
  p.push(T(400, 282, 'Policy enforcement', { f: 'r', size: 19, fill: C.amber }));
  p.push(T(400, 304, 'point (PEP)', { size: 13, fill: C.muted }));
  p.push(R(560, 238, 210, 98, { fill: 'none', stroke: C.green, sw: 1.5, dash: '6 5' }));
  p.push(tag(665, 256, 'IMPLICIT TRUST ZONE', { size: 11, fill: C.green }));
  p.push(card(580, 268, 170, 56, C.green));
  p.push(T(665, 294, 'Resource', { f: 'r', size: 19, fill: C.green }));
  p.push(T(665, 314, 'ENG-FS01 share', { size: 13, fill: C.muted }));
  p.push(arrow(232, 287, 301, 287, C.text, { so: 0.8 }));
  p.push(arrow(497, 287, 576, 296, C.text, { so: 0.8 }));
  p.push(arrow(700, 124, 478, 248, C.purple, { so: 0.8, dash: '6 4' }));
  p.push(T(626, 186, 'open or block', { size: 12.5, fill: C.purple, a: 'start' }));
  FIG['zt-model'] = svg(800, 368, 'Zero Trust architecture. The control plane decides: signals (identity and MFA, device health, context such as time and place, threat intelligence) feed the policy engine, which grants, denies, or revokes access; the policy administrator carries out the decision. It is guided by adaptive identity, threat scope reduction, and policy-driven access control. The data plane enforces: a subject or system, such as Priya on her laptop, sends a request to the policy enforcement point, which the policy administrator tells to open or block the path to the resource, the ENG-FS01 share, inside a small implicit trust zone.', p);
})();

// 10. Awareness program cycle (Lesson 6.6)
(function () {
  const p = [];
  const cx = 400, cy = 210, rr = 165;
  const nodes = [
    [-90, C.cyan, 'Assess', 'Baseline simulation,', 'completion rates'],
    [-18, C.amber, 'Train', 'Short, frequent,', 'Cedar Creek examples'],
    [54, C.orange, 'Test', 'Phishing campaigns,', 'instant feedback'],
    [126, C.pink, 'Report', 'Initial, then recurring:', 'click, report, time'],
    [198, C.green, 'Improve', 'Target departments,', 'coach repeat clickers']
  ];
  const pt = (a, r) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
  p.push(Circ(cx, cy, rr, { stroke: C.faint, sw: 2, dash: '6 6' }));
  nodes.forEach((n, i) => {
    const a0 = n[0] + 22, a1 = nodes[(i + 1) % 5][0] + (i === 4 ? 360 : 0) - 22;
    const s = pt(a0, rr), e = pt(a1, rr);
    p.push('<path d="M' + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + ' A' + rr + ' ' + rr + ' 0 0 1 ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1) + '" fill="none" stroke="' + C.text + '" stroke-opacity="0.5" stroke-width="2"/>');
  });
  nodes.forEach(n => {
    const q = pt(n[0], rr), w = 176, h = 70;
    p.push(R(q[0] - w / 2, q[1] - h / 2, w, h, { stroke: n[1], sw: 2 }));
    p.push(T(q[0], q[1] - 10, n[2], { f: 'r', size: 20, fill: n[1] }));
    p.push(T(q[0], q[1] + 9, n[3], { size: 12.5 }));
    p.push(T(q[0], q[1] + 25, n[4], { size: 12.5 }));
  });
  p.push(T(cx, cy - 4, 'Report button', { f: 'r', size: 18 }));
  p.push(T(cx, cy + 16, 'feeds every step', { size: 13, fill: C.muted }));
  FIG['awareness-cycle'] = svg(800, 410, 'Security awareness program cycle with five steps. Assess: a baseline simulation and completion rates. Train: short, frequent training with Cedar Creek examples. Test: phishing campaigns with instant feedback. Report: initial, then recurring reporting of click rate, report rate, and time to report. Improve: target departments and coach repeat clickers. Then back to assess. The Report button in the center feeds every step.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 6 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.\n';
out += '// Rebuild: node docs/tools/make_week6_figures.js course-w6-figures.js\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  const parts = FIG[id];
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + parts.map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
