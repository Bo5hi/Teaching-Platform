// Rebuilds the Week 2 lesson diagrams. Usage (repo root): node docs/tools/make_week2_figures.js course-w2-figures.js
// Same palette, fonts and helpers as docs/tools/make_week1_figures.js.
const fs = require('fs');
const crypto = require('crypto');
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
function keyTag(cx, y, label, color) {
  const w = Math.max(96, label.length * 7.4 + 34), x = cx - w / 2;
  return R(x, y, w, 26, { fill: color, fo: 0.12, stroke: color, sw: 1.5, rx: 13 }) +
    '<circle cx="' + (x + 15) + '" cy="' + (y + 13) + '" r="5" fill="none" stroke="' + color + '" stroke-width="2"/>' +
    L(x + 20, y + 13, x + 29, y + 13, { stroke: color, sw: 2 }) +
    T(x + 36, y + 18, label, { size: 12.5, w: 600, fill: color, a: 'start' });
}

const FIG = {};

// 1. Symmetric vs asymmetric
(function () {
  const p = [];
  const bw = 128, gap = 30, x0 = 20;
  const xs = [0, 1, 2, 3, 4].map(i => x0 + i * (bw + gap));
  function row(y, color, head, sub, items, keys, note) {
    p.push(tag(20, y - 14, head, { a: 'start', fill: color }));
    p.push(T(780, y - 14, sub, { size: 13, fill: C.muted, a: 'end' }));
    items.forEach((it, i) => {
      const x = xs[i], cx = x + bw / 2, op = i === 1 || i === 3;
      p.push(op ? R(x, y, bw, 64, { fill: color, fo: 0.1, stroke: color, sw: 2 }) : card(x, y, bw, 64, i === 2 ? C.amber : C.faint));
      p.push(T(cx, y + 28, it[0], { f: 'r', size: 19, fill: op ? color : C.text }));
      p.push(T(cx, y + 48, it[1], { size: 12.5, fill: C.muted }));
      if (i < 4) p.push(arrow(x + bw + 3, y + 32, x + bw + gap - 3, y + 32, C.text, { so: 0.7, hl: 8, hw: 5 }));
    });
    p.push(keyTag(xs[1] + bw / 2, y + 74, keys[0], keys[2]));
    p.push(keyTag(xs[3] + bw / 2, y + 74, keys[1], keys[3]));
    p.push(T(400, y + 128, note, { size: 13.5, fill: C.muted }));
  }
  row(40, C.cyan, 'SYMMETRIC: ONE SHARED KEY', 'AES (also DES, 3DES, RC4: weak)',
    [['Plaintext', 'drawing.pdf'], ['Encrypt', 'AES-256'], ['Ciphertext', 'unreadable'], ['Decrypt', 'AES-256'], ['Plaintext', 'drawing.pdf']],
    ['Shared key', 'Same shared key', C.cyan, C.cyan],
    'Fast enough for whole disks and backups. The catch: both sides need the same secret key.');
  row(232, C.purple, 'ASYMMETRIC: A KEY PAIR', 'RSA, ECC',
    [['Plaintext', 'drawing.pdf'], ['Encrypt', 'with a public key'], ['Ciphertext', 'unreadable'], ['Decrypt', 'with a private key'], ['Plaintext', 'drawing.pdf']],
    ["Halvorsen's public", "Halvorsen's private", C.green, C.red],
    'The public key can travel openly because it only locks. Slow, so it protects keys and signatures.');
  p.push(L(20, 200, 780, 200, { stroke: C.faint, sw: 1, dash: '4 6' }));
  FIG['sym-asym'] = svg(800, 392, 'Symmetric versus asymmetric encryption. Top row, symmetric: plaintext is encrypted with AES-256 and a shared key, becomes ciphertext, and is decrypted with the same shared key. It is fast, but both sides need the same secret key. Bottom row, asymmetric: plaintext is encrypted with Halvorsen\'s public key and can only be decrypted with Halvorsen\'s private key. The public key can travel openly; asymmetric encryption is slow, so it protects keys and signatures.', p);
})();

// 2. Hybrid encryption
(function () {
  const p = [];
  const sx = 20, sw = 236, rx = 544, rw = 236;
  p.push(tag(sx + sw / 2, 30, 'CEDAR CREEK (SENDER)', { fill: C.cyan }));
  p.push(tag(rx + rw / 2, 30, 'HALVORSEN (RECIPIENT)', { fill: C.purple }));
  const left = [
    [58, C.amber, '1. Make a session key', ['Random, one-time AES key']],
    [148, C.cyan, '2. Encrypt the files', ['AES-256 with the session key', '(fast, any size)']],
    [238, C.green, '3. Lock the session key', ["With Halvorsen's PUBLIC key", '(slow, but the key is tiny)']]
  ];
  left.forEach((b, i) => {
    p.push(card(sx, b[0], sw, 74, b[1]));
    p.push(T(sx + sw / 2, b[0] + 28, b[2], { f: 'r', size: 19, fill: b[1] }));
    b[3].forEach((l, j) => p.push(T(sx + sw / 2, b[0] + 48 + j * 17, l, { size: 13 })));
    if (i < 2) p.push(arrow(sx + sw / 2, b[0] + 76, sx + sw / 2, b[0] + 88, C.text, { so: 0.7, hl: 7, hw: 5 }));
  });
  p.push(R(296, 128, 208, 150, { stroke: C.amber, sw: 2.5 }));
  p.push(tag(400, 152, 'THE PACKAGE (.gpg)', { fill: C.amber }));
  p.push(R(314, 166, 172, 40, { fill: C.cyan, fo: 0.1, stroke: C.cyan, sw: 1.5, rx: 6 }));
  p.push(T(400, 191, 'Encrypted files', { size: 13.5, w: 600 }));
  p.push(R(314, 216, 172, 40, { fill: C.green, fo: 0.1, stroke: C.green, sw: 1.5, rx: 6 }));
  p.push(T(400, 241, 'Locked session key', { size: 13.5, w: 600 }));
  p.push(arrow(sx + sw + 4, 275, 294, 236, C.text, { so: 0.7 }));
  p.push(arrow(sx + sw + 4, 185, 294, 186, C.text, { so: 0.7 }));
  p.push(arrow(506, 203, 540, 203, C.text, { so: 0.7 }));
  p.push(T(523, 192, 'upload', { size: 12.5, fill: C.muted }));
  const right = [
    [118, C.red, '4. Unlock the session key', ["With Halvorsen's PRIVATE key", '(only Halvorsen has it)']],
    [208, C.cyan, '5. Decrypt the files', ['AES-256 with the recovered', 'session key']]
  ];
  right.forEach((b, i) => {
    p.push(card(rx, b[0], rw, 74, b[1]));
    p.push(T(rx + rw / 2, b[0] + 28, b[2], { f: 'r', size: 19, fill: b[1] }));
    b[3].forEach((l, j) => p.push(T(rx + rw / 2, b[0] + 48 + j * 17, l, { size: 13 })));
    if (i < 1) p.push(arrow(rx + rw / 2, b[0] + 76, rx + rw / 2, b[0] + 88, C.text, { so: 0.7, hl: 7, hw: 5 }));
  });
  p.push(T(400, 344, 'GnuPG files and TLS connections both work this way: symmetric for speed,', { size: 13.5, fill: C.muted }));
  p.push(T(400, 364, 'asymmetric to get the session key safely to the right person.', { size: 13.5, fill: C.muted }));
  FIG['hybrid-exchange'] = svg(800, 388, 'Hybrid encryption. Cedar Creek, the sender: 1, makes a random one-time AES session key; 2, encrypts the files with AES-256 using the session key; 3, locks the session key with Halvorsen\'s public key. The package holds the encrypted files and the locked session key and is uploaded. Halvorsen, the recipient: 4, unlocks the session key with Halvorsen\'s private key; 5, decrypts the files with the session key. GnuPG files and TLS connections both work this way.', p);
})();

// 3. Hash avalanche
(function () {
  const p = [];
  const h1 = crypto.createHash('sha256').update('Cedar Creek').digest('hex');
  const h2 = crypto.createHash('sha256').update('cedar Creek').digest('hex');
  function row(y, input, mark, h, color) {
    p.push(card(20, y, 170, 70, C.faint));
    p.push(tag(105, y + 22, 'INPUT'));
    p.push(T(52, y + 50, input.slice(0, 1), { f: 'm', size: 20, a: 'start', fill: mark ? C.red : C.text }));
    p.push(T(64, y + 50, input.slice(1), { f: 'm', size: 20, a: 'start' }));
    p.push(arrow(194, y + 35, 236, y + 35, C.text, { so: 0.7 }));
    p.push(R(240, y + 10, 92, 50, { fill: C.cyan, fo: 0.1, stroke: C.cyan, sw: 2 }));
    p.push(T(286, y + 41, 'SHA-256', { f: 'r', size: 18, fill: C.cyan }));
    p.push(arrow(336, y + 35, 378, y + 35, C.text, { so: 0.7 }));
    p.push(card(382, y, 398, 70, color));
    p.push(T(581, y + 30, h.slice(0, 32).match(/.{8}/g).join(' '), { f: 'm', size: 15.5 }));
    p.push(T(581, y + 52, h.slice(32).match(/.{8}/g).join(' '), { f: 'm', size: 15.5 }));
  }
  row(20, 'Cedar Creek', false, h1, C.green);
  row(110, 'cedar Creek', true, h2, C.amber);
  p.push(T(400, 214, 'One capital letter changed. The two hashes share no visible pattern: that is the avalanche effect.', { size: 13.5, fill: C.muted }));
  p.push(T(400, 236, 'SHA-256 always gives 256 bits (64 hex characters), whether the input is two words or a 4 GB disk image.', { size: 13.5, fill: C.muted }));
  FIG['hash-avalanche'] = svg(800, 256, 'Avalanche effect. The input "Cedar Creek" hashed with SHA-256 gives ' + h1 + '. The input "cedar Creek", with only the first letter changed to lowercase, gives ' + h2 + '. The two hashes share no visible pattern. SHA-256 output is always 256 bits, 64 hex characters.', p);
})();

// 4. Digital signature
(function () {
  const p = [];
  function box(x, y, w, head, sub, color, fill) {
    p.push(fill ? R(x, y, w, 62, { fill: color, fo: 0.1, stroke: color, sw: 2 }) : card(x, y, w, 62, color));
    p.push(T(x + w / 2, y + 27, head, { f: 'r', size: 18, fill: fill ? color : C.text }));
    if (sub) p.push(T(x + w / 2, y + 47, sub, { size: 12.5, fill: C.muted }));
  }
  p.push(tag(20, 30, 'SIGN: TOM BECKER, AT RELEASE', { a: 'start', fill: C.cyan }));
  box(20, 44, 140, 'MANIFEST', 'file to sign', C.faint);
  p.push(arrow(163, 75, 193, 75, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(196, 44, 120, 'SHA-256', 'hash it', C.cyan, true);
  p.push(arrow(319, 75, 349, 75, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(352, 44, 120, 'Digest', '7f3a...e2c1', C.faint);
  p.push(arrow(475, 75, 505, 75, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(508, 44, 120, 'Sign', 'the digest', C.red, true);
  p.push(keyTag(568, 112, "Tom's PRIVATE key", C.red));
  p.push(arrow(631, 75, 661, 75, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(664, 44, 116, 'Signature', '.asc file', C.amber);
  p.push(L(20, 158, 780, 158, { stroke: C.faint, sw: 1, dash: '4 6' }));
  p.push(tag(20, 184, 'VERIFY: HALVORSEN, OR YOU', { a: 'start', fill: C.purple }));
  box(20, 198, 140, 'File received', 'maybe changed?', C.faint);
  p.push(arrow(163, 229, 193, 229, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(196, 198, 120, 'SHA-256', 'hash it again', C.cyan, true);
  p.push(arrow(319, 229, 349, 229, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(352, 198, 120, 'New digest', '', C.faint);
  box(664, 198, 116, 'Signature', '.asc file', C.amber);
  p.push(arrow(661, 229, 631, 229, C.text, { so: 0.7, hl: 8, hw: 5 }));
  box(508, 198, 120, 'Check', 'signature', C.green, true);
  p.push(keyTag(568, 266, "Tom's PUBLIC key", C.green));
  p.push(arrow(505, 229, 475, 229, C.text, { so: 0.7, hl: 8, hw: 5 }));
  p.push(arrow(412, 262, 412, 304, C.text, { so: 0.7 }));
  p.push(R(170, 308, 284, 56, { fill: C.green, fo: 0.08, stroke: C.green, sw: 2 }));
  p.push(T(312, 332, 'Match: Good signature', { f: 'r', size: 18, fill: C.green }));
  p.push(T(312, 352, 'unchanged, and signed by Tom\'s key', { size: 12.5 }));
  p.push(R(470, 308, 284, 56, { fill: C.red, fo: 0.08, stroke: C.red, sw: 2 }));
  p.push(T(612, 332, 'No match: BAD signature', { f: 'r', size: 18, fill: C.red }));
  p.push(T(612, 352, 'file changed, or a different key signed', { size: 12.5 }));
  p.push(T(400, 392, 'Encryption uses the recipient\'s public key. Signing uses the sender\'s own private key.', { size: 13.5, fill: C.muted }));
  FIG['digital-signature'] = svg(800, 410, 'Digital signature flow. Signing, by Tom Becker at release: the manifest file is hashed with SHA-256, and the digest is signed with Tom\'s private key, producing a signature file. Verifying, by Halvorsen or you: the received file is hashed again, and the signature is checked with Tom\'s public key against the new digest. A match means a good signature: the file is unchanged and was signed by Tom\'s key. No match means a bad signature: the file changed, or a different key signed it. Encryption uses the recipient\'s public key; signing uses the sender\'s own private key.', p);
})();

// 5. Chain of trust
(function () {
  const p = [];
  const x = 140, w = 360;
  const tiers = [
    [24, C.purple, 'ROOT CA', 'CedarCreek-Root-CA', ['Self-signed: issuer = subject', 'Kept offline; signs only the issuing CA']],
    [160, C.cyan, 'INTERMEDIATE (ISSUING) CA', 'CedarCreek-Issuing-CA', ['Issuer: CedarCreek-Root-CA', 'Issues server and VPN user certificates']],
    [296, C.green, 'LEAF (END-ENTITY) CERTIFICATE', 'intranet.cedarcreek.local', ['Issuer: CedarCreek-Issuing-CA', 'Valid 2026-06-01 to 2028-06-01']]
  ];
  tiers.forEach((t, i) => {
    p.push(card(x, t[0], w, 104, t[1]));
    p.push(tag(x + w / 2, t[0] + 24, t[2], { fill: t[1] }));
    p.push(T(x + w / 2, t[0] + 50, t[3], { f: 'r', size: 21 }));
    t[4].forEach((l, j) => p.push(T(x + w / 2, t[0] + 72 + j * 19, l, { size: 13.5, fill: C.muted })));
    if (i < 2) {
      p.push(arrow(x - 30, t[0] + 70, x - 30, t[0] + 166, C.amber, { so: 0.85 }));
      p.push(T(x - 40, t[0] + 122, 'signs', { size: 13, a: 'end', fill: C.amber }));
      p.push(arrow(x + w + 30, t[0] + 166, x + w + 30, t[0] + 70, C.green, { so: 0.85 }));
      p.push(T(x + w + 40, t[0] + 122, 'verify', { size: 13, a: 'start', fill: C.green }));
    }
  });
  p.push(R(600, 24, 180, 104, { fill: C.purple, fo: 0.08, stroke: C.purple, sw: 1.5, dash: '5 4' }));
  p.push(tag(690, 48, 'TRUST STORE', { fill: C.purple }));
  p.push(T(690, 74, 'Root certificates', { size: 13.5 }));
  p.push(T(690, 93, 'your computer already', { size: 13.5 }));
  p.push(T(690, 112, 'trusts', { size: 13.5 }));
  p.push(arrow(598, 76, 504, 76, C.purple, { so: 0.7, dash: '5 4' }));
  p.push(T(400, 430, 'Verification passes only if every signature checks, every certificate is within its dates, and none is revoked.', { size: 13.5, fill: C.muted }));
  FIG['chain-of-trust'] = svg(800, 450, 'Chain of trust. At the top, the root CA, CedarCreek-Root-CA, is self-signed, kept offline, and sits in the trust store of computers that trust it. It signs the intermediate or issuing CA, CedarCreek-Issuing-CA, which issues server and VPN user certificates. The issuing CA signs the leaf certificate for intranet.cedarcreek.local, valid 2026-06-01 to 2028-06-01. Verification walks up from the leaf to the trusted root. It passes only if every signature checks, every certificate is within its dates, and none is revoked.', p);
})();

// 6. Certificate lifecycle
(function () {
  const p = [];
  const steps = [
    [C.cyan, 'Key pair', ['Server makes a', 'private and', 'public key']],
    [C.amber, 'CSR', ['Public key and', 'names, signed', 'by the server']],
    [C.purple, 'Validate', ['RA checks the', 'requester controls', 'the names']],
    [C.green, 'Issue', ['CA signs the', 'certificate with', 'its private key']],
    [C.orange, 'Use', ['Installed on the', 'server; clients', 'verify the chain']],
    [C.red, 'Renew/revoke', ['Renew before', 'notAfter; revoke', 'if compromised']]
  ];
  const w = 112, gap = 16, x0 = 24, y = 20, h = 130;
  steps.forEach((s, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, h, s[0]));
    p.push(tag(cx, y + 22, '0' + (i + 1), { fill: s[0] }));
    p.push(T(cx, y + 47, s[1], { f: 'r', size: 18 }));
    s[2].forEach((l, j) => p.push(T(cx, y + 72 + j * 18, l, { size: 12.5 })));
    if (i < 5) p.push(arrow(x + w + 2, y + h / 2, x + w + gap - 2, y + h / 2, C.text, { so: 0.7, hl: 7, hw: 5 }));
  });
  p.push(R(556, 172, 224, 64, { fill: C.bg, stroke: C.red, sw: 1.5, so: 0.6, dash: '5 4' }));
  p.push(T(668, 198, 'Revocation is published by', { size: 13 }));
  p.push(T(668, 218, 'CRL (a list) or OCSP (a query)', { size: 13 }));
  p.push(R(24, 172, 440, 64, { fill: C.bg, stroke: C.amber, sw: 1.5, so: 0.6, dash: '5 4' }));
  p.push(T(244, 198, 'The private key never leaves the server.', { size: 13 }));
  p.push(T(244, 218, 'Only the CSR (with the public key) goes to the CA.', { size: 13 }));
  FIG['cert-lifecycle'] = svg(800, 256, 'Certificate lifecycle in six steps: 1, the server makes a private and public key pair; 2, it creates a CSR containing the public key and names, signed by the server; 3, a registration authority validates that the requester controls the names; 4, the CA signs and issues the certificate; 5, the certificate is installed and clients verify the chain; 6, it is renewed before its notAfter date, or revoked if compromised, with revocation published through a CRL or OCSP. The private key never leaves the server.', p);
})();

// 7. Data states
(function () {
  const p = [];
  const cols = [
    [C.cyan, 'AT REST', 'Stored', ['Full-disk encryption', '(BitLocker + TPM)', 'Volume, file, database,', 'and record encryption'], ['Backup tapes, ENG-FS01,', 'Finance laptops']],
    [C.green, 'IN TRANSIT', 'Moving on a network', ['TLS (HTTPS), VPN (IPsec),', 'SSH and SFTP,', 'OpenPGP and S/MIME', 'for files and email'], ['Drawings uploaded to', "Halvorsen's portal"]],
    [C.amber, 'IN USE', 'Being processed in memory', ['Hardest to encrypt.', 'Secure enclaves,', 'memory protection, and', 'keeping attackers out'], ['A drawing open in CAD;', 'card data in a register (Target)']]
  ];
  const w = 240, gap = 20, x0 = 20, y = 20;
  cols.forEach((c, i) => {
    const x = x0 + i * (w + gap), cx = x + w / 2;
    p.push(card(x, y, w, 250, c[0]));
    p.push(T(cx, y + 34, c[1], { f: 'r', size: 24, fill: c[0], ls: 1 }));
    p.push(T(cx, y + 56, c[2], { size: 13.5, fill: C.muted }));
    p.push(L(x + 18, y + 70, x + w - 18, y + 70, { stroke: C.faint, sw: 1 }));
    p.push(tag(cx, y + 92, 'PROTECT WITH'));
    c[3].forEach((l, j) => p.push(T(cx, y + 115 + j * 19, l, { size: 14 })));
    p.push(R(x + 12, y + 192, w - 24, 48, { fill: C.bg, stroke: c[0], sw: 1.2, so: 0.5, dash: '5 4' }));
    c[4].forEach((l, j) => p.push(T(cx, y + 212 + j * 18, l, { size: 13 })));
  });
  FIG['data-states'] = svg(800, 290, 'The three states of data. At rest, meaning stored: protect with full-disk encryption such as BitLocker with a TPM, and volume, file, database, and record encryption; Cedar Creek examples are the backup tapes, ENG-FS01, and Finance laptops. In transit, meaning moving on a network: protect with TLS for HTTPS, VPNs such as IPsec, SSH and SFTP, and OpenPGP and S/MIME for files and email; example: drawings uploaded to Halvorsen\'s portal. In use, meaning being processed in memory: hardest to encrypt; secure enclaves, memory protection, and keeping attackers out; examples: a drawing open in CAD, and card data in a register memory as in the Target breach.', p);
})();

const jsq = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
let out = '// Week 2 lesson diagrams (inline SVG strings). Used by Lesson.html via section.figure = { id, caption }.\n';
out += '// Generated by docs/tools/make_week2_figures.js; edit the generator, not this file.\n';
out += 'window.COURSE_FIGURES = window.COURSE_FIGURES || {};\n';
Object.keys(FIG).forEach(id => {
  out += '\nCOURSE_FIGURES[' + jsq(id) + '] =\n  ' + FIG[id].map(jsq).join(' +\n  ') + ';\n';
});
fs.writeFileSync(OUT, out);
console.log('wrote', Object.keys(FIG).join(', '));
