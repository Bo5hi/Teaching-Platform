// Builds the Week 2 Cedar Creek lab pack (assets/cedarcreek/week2/) and its zip
// (assets/cedarcreek/cc-week2.zip, root folder cedarcreek-week2/).
// Deterministic: fixed keys (make_week2_pack_keys.js), fixed seeds, fixed dates.
// Run from anywhere: node docs/tools/make_week2_pack.js
// Prints the auto-check answers for Labs 2.1-2.4 and the Mock Secure File Exchange key
// (course-w2-labs.js and course-w2-mock.js must match them).
// node docs/tools/make_week2_pack.js --sign-inputs <dir>  writes the two files Tom Becker's GPG key signs
// (ECN-0457.txt and MANIFEST.sha256) so the signatures in make_week2_pack_keys.js can be remade.
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const KEYS = require('./make_week2_pack_keys.js');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week2');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week2.zip');
const ZIP_ROOT = 'cedarcreek-week2/';

function text(lines) { return lines.join('\n') + '\n'; }
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function bytes(n, seed) { const r = mulberry32(seed), b = Buffer.alloc(n); for (let i = 0; i < n; i++) b[i] = Math.floor(r() * 256); return b; }
const sha256 = b => crypto.createHash('sha256').update(b).digest('hex');
const md5 = s => crypto.createHash('md5').update(s).digest('hex');

const FILES = {};

// ---------------------------------------------------------------- README and memos
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'IT shared drive extract - Week 2 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'What this is',
  '------------',
  'Marcus Reyes copied these files for your second week as Cedar Creek\'s',
  'junior security analyst. This week is about cryptography: encryption,',
  'hashing, digital signatures, keys, and certificates.',
  '',
  'Cedar Creek Industries, Halvorsen Pump, Meridian Trust, and every person,',
  'key, and certificate in these files are fictional. They were made for',
  'MCCoE training labs. The keys in this pack protect nothing real.',
  '',
  'What is inside',
  '--------------',
  'memos/            Notes from Marcus, Priya, and Halvorsen about this week\'s job',
  'lab/encryption/   Lab 2.1: a file Dee encrypted, and a file to practice on',
  'lab/hashing/      Lab 2.2: firmware downloads and password hash exports',
  'lab/gpg/          Lab 2.3: Tom Becker\'s public key and a signed change notice',
  'lab/certs/        Lab 2.4: certificates from Cedar Creek systems',
  'exchange/         Mock Secure File Exchange: the Halvorsen drawing package,',
  '                  keys, certificates, and an email to look at',
  '',
  'How to use it',
  '-------------',
  'Each lab page tells you which folder to work in. Leave the original files',
  'as they are. Make your own files in ~/labs/work.'
]);

FILES['memos/assignment_from_marcus.txt'] = text([
  'From:    Marcus Reyes, IT Manager',
  'To:      Junior Security Analyst',
  'Cc:      Tom Becker, Engineering Manager',
  'Date:    Mon 2026-11-16',
  'Subject: Week 2 - sending drawings to Halvorsen the right way',
  '',
  'Welcome to week two. Good work on the control audit.',
  '',
  'Halvorsen Pump is one of our biggest customers. They have told every',
  'supplier that, starting December 1, drawings and models must be sent',
  'under their new Supplier Data Exchange rules (memos/halvorsen_sdx2.txt).',
  'Today we email drawings as a zipped attachment and put the zip password',
  'in the same email. Halvorsen says that is no longer acceptable, and I',
  'agree with them.',
  '',
  'Priya Nair in Engineering is releasing Rev C of drawing CCD-3318 (the',
  'HV-310 pump mounting bracket) this week. It is the first package that has',
  'to go out under the new rules. I want you to:',
  '',
  '  1. Check that the release package is exactly what Tom released.',
  '  2. Work out which tool does which job: hashing, encryption,',
  '     signatures, certificates.',
  '  3. Make sure we are using Halvorsen\'s real key and real portal.',
  '  4. Do a trial run of encrypting and signing the package.',
  '  5. Write a short procedure Priya and the other engineers can follow',
  '     every time.',
  '',
  'Everything you need is in exchange/. Do the labs first; they teach the',
  'commands.',
  '',
  'Marcus'
]);

FILES['memos/how_we_send_drawings_today.txt'] = text([
  'From:    Priya Nair, Design Engineer',
  'To:      Junior Security Analyst',
  'Date:    Fri 2026-11-13',
  'Subject: How we send drawings today',
  '',
  'You asked how we send drawings to customers now. Honestly:',
  '',
  '- We zip the files in Windows and set a zip password. Most of us use',
  '  the customer\'s name and the year, for example Halvorsen2026.',
  '- We email the zip to the customer\'s engineer and type the password in',
  '  the same email, "so they don\'t have to call."',
  '- If the files are too big for email, we use a personal Dropbox link.',
  '- Nobody checks that the files in the transfer folder are the ones Tom',
  '  signed off. We just grab whatever is in \\\\ENG-FS01\\Transfer.',
  '- Halvorsen\'s old FTP site still works, so sometimes we use that too.',
  '',
  'I know this is not great. Tell me what to do instead and I will do it.',
  '',
  'Priya'
]);

FILES['memos/halvorsen_sdx2.txt'] = text([
  'HALVORSEN PUMP COMPANY',
  'Supplier Data Exchange Requirements (SDX-2)',
  'Effective: 2026-12-01',
  'Owner:     Halvorsen Supplier Quality',
  '',
  'These rules apply to every drawing, model, specification, and inspection',
  'plan a supplier sends to Halvorsen.',
  '',
  '1. Integrity',
  '   Send a SHA-256 manifest with every package: one line per file, in the',
  '   format produced by sha256sum. MD5 and SHA-1 are not accepted.',
  '',
  '2. Confidentiality',
  '   Encrypt the package with OpenPGP (for example GnuPG) to the Halvorsen',
  '   Supplier Data public key. Password-protected zip files are not',
  '   accepted. Never send a password or key in the same message as the',
  '   files.',
  '',
  '3. Origin',
  '   Sign the package with the sending engineer\'s OpenPGP key. Register',
  '   your signing key with Halvorsen Supplier Quality before your first',
  '   upload.',
  '',
  '4. Transport',
  '   Upload only to https://supplier.halvorsen-pump.com. The old FTP site',
  '   (ftp.halvorsen-pump.com) is retired. Before you upload, confirm the',
  '   site\'s certificate is valid and issued to supplier.halvorsen-pump.com.',
  '',
  '5. Key verification',
  '   Halvorsen will never send its public key by email alone. Get the key',
  '   from the portal or from your Halvorsen contact, then confirm its',
  '   fingerprint by phone, using the number in your supply contract.',
  '',
  'Questions: Erik Lund, Supplier Quality Engineer'
]);

// ---------------------------------------------------------------- Lab 2.1: openssl enc
// Same format as: openssl enc -aes-256-cbc -pbkdf2 (OpenSSL 3 defaults: SHA-256, 10000 iterations)
function opensslEnc(plain, pass, salt) {
  const dk = crypto.pbkdf2Sync(pass, salt, 10000, 48, 'sha256');
  const c = crypto.createCipheriv('aes-256-cbc', dk.subarray(0, 32), dk.subarray(32, 48));
  return Buffer.concat([Buffer.from('Salted__'), salt, c.update(plain), c.final()]);
}
const BACKUP_PASS = 'Friday-Tapes-2027';
const BACKUP_PLAN = text([
  'CEDAR CREEK INDUSTRIES - DRAFT',
  'Offsite backup plan (Dee Ortiz)    Draft 2026-11-10',
  '',
  'Problem: the weekly full backup tapes sit on a shelf inside the server',
  'room. A fire, a flood, or an attacker with physical access would take',
  'the servers and the backups at the same time.',
  '',
  'Plan:',
  '- Every Friday, take last week\'s full backup tape to the offsite vault.',
  '- Vault: Ozark Records Storage, Springfield, MO. Box number: 1142.',
  '- Tapes travel in a locked case. The case log is signed at both ends.',
  '- The backup software encrypts every tape with AES-256 before it leaves',
  '  the building. The tape key stays in the backup server\'s key store,',
  '  and a sealed paper copy goes in Marcus\'s safe.',
  '- Keep four weekly tapes in the vault. The oldest one comes back for reuse.',
  '',
  'Start date: Friday 2027-01-08'
]);
FILES['lab/encryption/offsite_backup_plan.txt.enc'] = opensslEnc(Buffer.from(BACKUP_PLAN), BACKUP_PASS, Buffer.from('7c3e91a05bd2468f', 'hex'));
FILES['lab/encryption/sample_drawing_notes.txt'] = text([
  'Drawing notes - CCD-3318 HV-310 pump mounting bracket',
  'Material: 6061-T6 aluminum, 6.35 mm plate',
  'Four mounting holes, 10.5 mm, on a 120 mm bolt circle',
  'Finish: clear anodize',
  'Customer: Halvorsen Pump (confidential)'
]);

// ---------------------------------------------------------------- Lab 2.2: hashing
const FW = bytes(8192, 52025);
const FW_MIRROR = Buffer.from(FW);
bytes(16, 991).copy(FW_MIRROR, 4096);
FILES['lab/hashing/nvr_firmware/vendor/NVR01_FW_5.7.2.bin'] = FW;
FILES['lab/hashing/nvr_firmware/mirror/NVR01_FW_5.7.2.bin'] = FW_MIRROR;
FILES['lab/hashing/nvr_firmware/SHA256SUMS'] = sha256(FW) + '  NVR01_FW_5.7.2.bin\n';
FILES['lab/hashing/nvr_firmware/download_note.txt'] = text([
  'From:    Jordan Pike, Help Desk',
  'Date:    Thu 2026-11-12',
  'Subject: NVR-01 firmware 5.7.2',
  '',
  'The camera recorder (NVR-01) needs firmware 5.7.2. The vendor\'s download',
  'site was crawling, so I also grabbed a copy from a forum mirror that a',
  'guy on a security-camera forum posted. Both copies are here:',
  '',
  '  vendor/NVR01_FW_5.7.2.bin   from the vendor\'s support site',
  '  mirror/NVR01_FW_5.7.2.bin   from the forum mirror (finished first)',
  '',
  'SHA256SUMS is the checksum file published on the vendor\'s site.',
  'Can you tell me which one is safe to install before I flash it?'
]);

const OLD_USERS = [
  ['amanda.singh', 'Accounts Payable', 'Ledger#Spring77'],
  ['m.alvarez', 'Purchasing', 'Welcome1'],
  ['g.lindqvist', 'Customer Service', 'Welcome1'],
  ['k.tran', 'Marketing', 'Summer2025!'],
  ['l.kim', 'Marketing', 'Brand-Refresh-2026'],
  ['r.doyle', 'Customer Service', 'Welcome1'],
  ['d.reyes', 'Accounting', 'Accounts$Payable9'],
  ['p.nair', 'Engineering', 'Bracket.Design.88'],
  ['t.garza', 'Plant', 'Gate7-Morning-Shift'],
  ['n.brooks', 'Front Desk', 'Summer2025!'],
  ['s.pruitt', 'Maintenance', 'Maintenance4Ever'],
  ['w.henley', 'Plant', 'Line2-Uptime-First']
];
FILES['lab/hashing/passwords/old_parts_portal_users.csv'] = text(['username,department,password_md5'].concat(OLD_USERS.map(u => u[0] + ',' + u[1] + ',' + md5(u[2]))));
FILES['lab/hashing/passwords/common_passwords.txt'] = text(['password', '123456', 'letmein', 'Password1', 'qwerty123', 'Cedar2024', 'Spring2024!', 'Summer2025!', 'Welcome1', 'admin']);
const SHADOW = [
  ['m.alvarez', KEYS.shadow.alvarez],
  ['j.pike', KEYS.shadow.pike],
  ['d.ortiz', KEYS.shadow.ortiz],
  ['g.lindqvist', KEYS.shadow.lindqvist],
  ['k.tran', KEYS.shadow.tran]
];
FILES['lab/hashing/passwords/new_portal_shadow.txt'] = text(SHADOW.map(u => u[0] + ':' + u[1]));
FILES['lab/hashing/passwords/README.txt'] = text([
  'Two password exports, from Dee Ortiz.',
  '',
  'old_parts_portal_users.csv  The retired parts-request web portal (2019-2025).',
  '                            It stored each password as a plain MD5 hash.',
  'new_portal_shadow.txt       The new supplier portal (2026). It stores each',
  '                            password as a salted SHA-512 crypt hash ($6$).',
  '                            Format: username:$6$<salt>$<hash>',
  '',
  'Both exports are for the security review only. Delete your copies after.'
]);

// ---------------------------------------------------------------- Lab 2.3: GPG
const ECN = text([
  'CEDAR CREEK INDUSTRIES - ENGINEERING CHANGE NOTICE',
  'ECN number:   ECN-0457',
  'Date:         2026-11-11',
  'Drawing:      CCD-2875 Rev D, hydraulic elbow fitting',
  'Customer:     Halvorsen Pump',
  'Requested by: Priya Nair, Design Engineer',
  'Approved by:  Tom Becker, Engineering Manager',
  '',
  'Change',
  '------',
  'Bore diameter tolerance on section B-B changes',
  '  from +/- 0.05 mm',
  '  to   +/- 0.02 mm',
  '',
  'Reason',
  '------',
  'Customer testing showed seal leaks at the loose end of the old',
  'tolerance. The tighter tolerance matches the new O-ring supplier.',
  '',
  'Effect on production',
  '--------------------',
  'Line 1 must re-check the bore gauge before the next run of CCD-2875.',
  'Parts already in stock are not affected.'
]);
FILES['lab/gpg/ECN-0457.txt'] = ECN;
FILES['lab/gpg/ECN-0457.txt.asc'] = KEYS.gpg.ecnSig;
FILES['lab/gpg/ECN-0457_copy_from_share.txt'] = ECN.replace('  to   +/- 0.02 mm', '  to   +/- 0.20 mm');
FILES['lab/gpg/tom_becker_pubkey.asc'] = KEYS.gpg.tomPub;
FILES['lab/gpg/README.txt'] = text([
  'ECN-0457.txt                 The change notice Tom Becker approved.',
  'ECN-0457.txt.asc             Tom\'s detached OpenPGP signature for it.',
  'ECN-0457_copy_from_share.txt The copy that was sitting in \\\\ENG-FS01\\Transfer.',
  'tom_becker_pubkey.asc        Tom\'s public key. Its fingerprint is printed on',
  '                             the Engineering key list on Marcus\'s office wall.'
]);

// ---------------------------------------------------------------- X.509 (a small DER encoder; RSA PKCS#1 v1.5 signatures are deterministic)
function derLen(n) {
  if (n < 0x80) return Buffer.from([n]);
  const b = []; while (n > 0) { b.unshift(n & 0xff); n >>= 8; }
  return Buffer.from([0x80 | b.length].concat(b));
}
const tlv = (tag, body) => Buffer.concat([Buffer.from([tag]), derLen(body.length), body]);
const seq = (...a) => tlv(0x30, Buffer.concat(a));
const set = (...a) => tlv(0x31, Buffer.concat(a));
const ctx = (n, body) => tlv(0xa0 + n, body);
const octets = b => tlv(0x04, b);
const bool = v => tlv(0x01, Buffer.from([v ? 0xff : 0]));
const nul = () => Buffer.from([0x05, 0x00]);
function intHex(hex) { let b = Buffer.from(hex, 'hex'); if (b[0] & 0x80) b = Buffer.concat([Buffer.from([0]), b]); return tlv(0x02, b); }
function oid(s) {
  const p = s.split('.').map(Number), out = [40 * p[0] + p[1]];
  for (const v of p.slice(2)) { const t = []; let x = v; do { t.unshift(x & 0x7f); x = Math.floor(x / 128); } while (x > 0); for (let i = 0; i < t.length - 1; i++) t[i] |= 0x80; out.push(...t); }
  return tlv(0x06, Buffer.from(out));
}
const utf8 = s => tlv(0x0c, Buffer.from(s, 'utf8'));
const printable = s => tlv(0x13, Buffer.from(s, 'ascii'));
const ia5Ctx = (tag, s) => tlv(tag, Buffer.from(s, 'ascii'));
function utc(d) { return tlv(0x17, Buffer.from(d.replace(/[-:T]/g, '').slice(2, 14) + 'Z', 'ascii')); }
const bitstr = b => tlv(0x03, Buffer.concat([Buffer.from([0]), b]));
const ATTR = { C: '2.5.4.6', ST: '2.5.4.8', L: '2.5.4.7', O: '2.5.4.10', OU: '2.5.4.11', CN: '2.5.4.3' };
function name(n) { return seq(...n.map(([k, v]) => set(seq(oid(ATTR[k]), k === 'C' ? printable(v) : utf8(v))))); }
const SHA256RSA = seq(oid('1.2.840.113549.1.1.11'), nul());
function ext(id, critical, value) { return critical ? seq(oid(id), bool(true), octets(value)) : seq(oid(id), octets(value)); }
function keyId(pub) { return crypto.createHash('sha1').update(pub.export({ type: 'pkcs1', format: 'der' })).digest(); }
const PRIV = {}, PUB = {};
for (const k of Object.keys(KEYS.rsa)) { PRIV[k] = crypto.createPrivateKey(KEYS.rsa[k]); PUB[k] = crypto.createPublicKey(PRIV[k]); }

function cert(o) {
  const exts = [];
  if (o.ca) {
    exts.push(ext('2.5.29.19', true, seq(bool(true))));
    exts.push(ext('2.5.29.15', true, tlv(0x03, Buffer.from([0x01, 0x86]))));
  } else {
    exts.push(ext('2.5.29.19', true, seq()));
    exts.push(ext('2.5.29.15', true, tlv(0x03, Buffer.from([0x05, 0xa0]))));
    exts.push(ext('2.5.29.37', false, seq(oid('1.3.6.1.5.5.7.3.1'))));
  }
  exts.push(ext('2.5.29.14', false, octets(keyId(PUB[o.key]))));
  if (o.issuerKey !== o.key) exts.push(ext('2.5.29.35', false, seq(tlv(0x80, keyId(PUB[o.issuerKey])))));
  if (o.san) exts.push(ext('2.5.29.17', false, seq(...o.san.map(d => ia5Ctx(0x82, d)))));
  if (o.crl) exts.push(ext('2.5.29.31', false, seq(seq(ctx(0, ctx(0, ia5Ctx(0x86, o.crl)))))));
  if (o.ocsp) exts.push(ext('1.3.6.1.5.5.7.1.1', false, seq(seq(oid('1.3.6.1.5.5.7.48.1'), ia5Ctx(0x86, o.ocsp)))));
  const tbs = seq(
    ctx(0, tlv(0x02, Buffer.from([2]))),
    intHex(o.serial),
    SHA256RSA,
    name(o.issuer),
    seq(utc(o.from), utc(o.to)),
    name(o.subject),
    PUB[o.key].export({ type: 'spki', format: 'der' }),
    ctx(3, seq(...exts))
  );
  const sig = crypto.sign('sha256', tbs, PRIV[o.issuerKey]);
  const der = seq(tbs, SHA256RSA, bitstr(sig));
  const b64 = der.toString('base64').match(/.{1,64}/g).join('\n');
  return { der, pem: '-----BEGIN CERTIFICATE-----\n' + b64 + '\n-----END CERTIFICATE-----\n' };
}

const CC_ROOT = [['C', 'US'], ['ST', 'Missouri'], ['O', 'Cedar Creek Industries'], ['CN', 'CedarCreek-Root-CA']];
const CC_ISS = [['C', 'US'], ['ST', 'Missouri'], ['O', 'Cedar Creek Industries'], ['CN', 'CedarCreek-Issuing-CA']];
const MT_ROOT = [['C', 'US'], ['O', 'Meridian Trust'], ['CN', 'Meridian Trust Root CA']];
const MT_TLS = [['C', 'US'], ['O', 'Meridian Trust'], ['CN', 'Meridian Trust TLS CA 1']];
const CERTS = {
  'lab/certs/cedarcreek_root_ca.pem': cert({ serial: '01', issuer: CC_ROOT, subject: CC_ROOT, key: 'ccRoot', issuerKey: 'ccRoot', ca: true, from: '2023-01-01T00:00:00', to: '2043-01-01T00:00:00' }),
  'lab/certs/cedarcreek_issuing_ca.pem': cert({ serial: '1000', issuer: CC_ROOT, subject: CC_ISS, key: 'ccIssuing', issuerKey: 'ccRoot', ca: true, from: '2023-01-15T00:00:00', to: '2033-01-15T00:00:00' }),
  'lab/certs/intranet.pem': cert({ serial: '6e1a2f0c55d3', issuer: CC_ISS, subject: [['C', 'US'], ['ST', 'Missouri'], ['O', 'Cedar Creek Industries'], ['OU', 'IT'], ['CN', 'intranet.cedarcreek.local']], key: 'ccIntranet', issuerKey: 'ccIssuing', san: ['intranet.cedarcreek.local', 'intranet', 'wiki.cedarcreek.local'], from: '2026-06-01T00:00:00', to: '2028-06-01T00:00:00' }),
  'lab/certs/timeclock01.pem': cert({ serial: '3b90c41d7a02', issuer: CC_ISS, subject: [['C', 'US'], ['ST', 'Missouri'], ['O', 'Cedar Creek Industries'], ['OU', 'HR'], ['CN', 'timeclock01.cedarcreek.local']], key: 'ccTimeclock', issuerKey: 'ccIssuing', san: ['timeclock01.cedarcreek.local'], from: '2023-07-01T00:00:00', to: '2025-07-01T00:00:00' }),
  'lab/certs/nvr01.pem': cert({ serial: '5cdb2a10', issuer: [['O', 'NVR Manufacturer Default'], ['CN', '192.168.1.108']], subject: [['O', 'NVR Manufacturer Default'], ['CN', '192.168.1.108']], key: 'ccNvr', issuerKey: 'ccNvr', from: '2019-05-14T00:00:00', to: '2029-05-11T00:00:00' }),
  'exchange/certs/meridian_trust_root_ca.pem': cert({ serial: '4d54524f4f54', issuer: MT_ROOT, subject: MT_ROOT, key: 'hvRoot', issuerKey: 'hvRoot', ca: true, from: '2020-01-01T00:00:00', to: '2040-01-01T00:00:00' }),
  'exchange/certs/meridian_trust_tls_ca1.pem': cert({ serial: '4d54544c5331', issuer: MT_ROOT, subject: MT_TLS, key: 'hvIssuing', issuerKey: 'hvRoot', ca: true, from: '2022-03-01T00:00:00', to: '2032-03-01T00:00:00' }),
  'exchange/certs/supplier_portal.pem': cert({ serial: '0a7f3c9e2b4d6e81', issuer: MT_TLS, subject: [['C', 'US'], ['ST', 'Wisconsin'], ['O', 'Halvorsen Pump Company'], ['CN', 'supplier.halvorsen-pump.com']], key: 'hvPortal', issuerKey: 'hvIssuing', san: ['supplier.halvorsen-pump.com'], crl: 'http://crl.meridian-trust.example/tlsca1.crl', ocsp: 'http://ocsp.meridian-trust.example', from: '2026-09-01T00:00:00', to: '2028-09-01T00:00:00' }),
  'exchange/certs/old_ftp_portal.pem': cert({ serial: '0a7f3c9e2b4d1102', issuer: MT_TLS, subject: [['C', 'US'], ['ST', 'Wisconsin'], ['O', 'Halvorsen Pump Company'], ['CN', 'ftp.halvorsen-pump.com']], key: 'hvOldFtp', issuerKey: 'hvIssuing', san: ['ftp.halvorsen-pump.com'], crl: 'http://crl.meridian-trust.example/tlsca1.crl', ocsp: 'http://ocsp.meridian-trust.example', from: '2024-06-30T00:00:00', to: '2026-06-30T00:00:00' }),
  'exchange/certs/portal_cert_from_email.pem': cert({ serial: '1f2e3d4c', issuer: [['C', 'US'], ['O', 'Halvorsen Pump Co'], ['CN', 'supplier.halvorsen-pump.com']], subject: [['C', 'US'], ['O', 'Halvorsen Pump Co'], ['CN', 'supplier.halvorsen-pump.com']], key: 'hvFake', issuerKey: 'hvFake', san: ['supplier-halvorsen-pump.com'], from: '2026-11-10T00:00:00', to: '2027-11-10T00:00:00' })
};
for (const [k, v] of Object.entries(CERTS)) FILES[k] = v.pem;
FILES['lab/certs/README.txt'] = text([
  'Certificates Dee exported from Cedar Creek systems.',
  '',
  'cedarcreek_root_ca.pem     CedarCreek-Root-CA. Kept offline; it only signs the issuing CA.',
  'cedarcreek_issuing_ca.pem  CedarCreek-Issuing-CA. Issues server and VPN user certificates.',
  'intranet.pem               The intranet web server.',
  'timeclock01.pem            The web admin page of TIMECLOCK-01.',
  'nvr01.pem                  The web admin page of NVR-01, the camera recorder.'
]);

// ---------------------------------------------------------------- Mock: the Halvorsen exchange
const REL = 'exchange/release/CCD-3318_RevC/';
function fakePdf(sheet, lines, seed) {
  const pad = bytes(1536, seed).toString('base64').match(/.{1,76}/g).join('\n');
  return Buffer.from(['%PDF-1.4', '% Cedar Creek Industries - drawing CCD-3318 Rev C - sheet ' + sheet + ' of 2', '% TRAINING FILE: not a real drawing']
    .concat(lines.map(l => '% ' + l), ['% stream', pad, '%%EOF', ''].join('\n').split('\n')).join('\n'));
}
const SHEET1 = fakePdf(1, ['Title: HV-310 pump mounting bracket', 'Material: 6061-T6 aluminum, 6.35 mm plate', 'Mounting holes: 4 x 10.5 mm on 120 mm bolt circle', 'Released: 2026-11-12  Approved: T. Becker'], 3318101);
const SHEET2_RELEASED = fakePdf(2, ['Detail A: slot width 12.00 mm +/- 0.10', 'Detail B: bend radius 6.0 mm', 'Finish: clear anodize, Class 2', 'Released: 2026-11-12  Approved: T. Becker'], 3318102);
const SHEET2_NOW = fakePdf(2, ['Detail A: slot width 12.50 mm +/- 0.10', 'Detail B: bend radius 6.0 mm', 'Finish: clear anodize, Class 2', 'Released: 2026-11-12  Approved: T. Becker'], 3318102);
const STEP = Buffer.from(text([
  'ISO-10303-21;',
  'HEADER;',
  "FILE_DESCRIPTION(('Cedar Creek Industries CCD-3318 Rev C 3D model - TRAINING FILE'),'2;1');",
  "FILE_NAME('CCD-3318-C_model.step','2026-11-12T10:14:00',('P. Nair'),('Cedar Creek Industries'),'','','');",
  "FILE_SCHEMA(('AUTOMOTIVE_DESIGN'));",
  'ENDSEC;',
  'DATA;',
  "#10=PRODUCT('CCD-3318','HV-310 pump mounting bracket','Rev C',(#20));",
  "#20=PRODUCT_CONTEXT('',#30,'mechanical');",
  "#30=APPLICATION_CONTEXT('automotive design');"
].concat(Array.from({ length: 40 }, (_, i) => '#' + (100 + i) + "=CARTESIAN_POINT('',(" + [(i * 3.175).toFixed(3), ((i * 7) % 120).toFixed(3), '6.350'].join(',') + '));'), ['ENDSEC;', 'END-ISO-10303-21;'])));
const PLAN = Buffer.from(text([
  'feature,characteristic,nominal_mm,tolerance_mm,method,frequency',
  'A1,mounting hole diameter,10.50,0.05,pin gauge,every part',
  'A2,bolt circle,120.00,0.10,CMM,first and last of lot',
  'A3,slot width (detail A),12.00,0.10,caliper,1 in 10',
  'A4,bend radius (detail B),6.00,0.25,radius gauge,1 in 10',
  'A5,plate thickness,6.35,0.10,micrometer,1 in 25',
  'A6,anodize thickness,0.010,0.005,eddy current,1 per lot'
]));
const RELEASED = {
  'CCD-3318-C_inspection_plan.csv': PLAN,
  'CCD-3318-C_model.step': STEP,
  'CCD-3318-C_sheet1.pdf': SHEET1,
  'CCD-3318-C_sheet2.pdf': SHEET2_RELEASED
};
const MANIFEST = Object.keys(RELEASED).sort().map(f => sha256(RELEASED[f]) + '  ' + f).join('\n') + '\n';
FILES[REL + 'CCD-3318-C_inspection_plan.csv'] = PLAN;
FILES[REL + 'CCD-3318-C_model.step'] = STEP;
FILES[REL + 'CCD-3318-C_sheet1.pdf'] = SHEET1;
FILES[REL + 'CCD-3318-C_sheet2.pdf'] = SHEET2_NOW;
FILES[REL + 'MANIFEST.sha256'] = MANIFEST;
FILES[REL + 'MANIFEST.sha256.asc'] = KEYS.gpg.manifestSig;
FILES['exchange/release/release_signoff.txt'] = text([
  'CEDAR CREEK INDUSTRIES - ENGINEERING RELEASE',
  'Drawing:    CCD-3318 Rev C, HV-310 pump mounting bracket',
  'Customer:   Halvorsen Pump',
  'Released:   Thu 2026-11-12, 10:30 AM',
  'Drawn by:   Priya Nair',
  'Approved:   Tom Becker, Engineering Manager',
  '',
  'Files released: 4 (listed in MANIFEST.sha256)',
  'Tom signed MANIFEST.sha256 with his OpenPGP key at release',
  '(signature: MANIFEST.sha256.asc).',
  '',
  'This folder is a copy taken from \\\\ENG-FS01\\Transfer on Mon 2026-11-16.'
]);
FILES['exchange/keys/halvorsen_supplier_data.asc'] = KEYS.gpg.hvPub;
FILES['exchange/keys/halvorsen_key_from_email.asc'] = KEYS.gpg.hvFakePub;
FILES['exchange/keys/tom_becker_pubkey.asc'] = KEYS.gpg.tomPub;
const fp4 = f => f.match(/.{4}/g).slice(0, 5).join(' ') + '  ' + f.match(/.{4}/g).slice(5).join(' ');
FILES['exchange/phone_call_notes.txt'] = text([
  'Phone call notes - Tom Becker',
  'Date:        Thu 2026-11-12, 2:40 PM',
  'Called:      Halvorsen Pump main line (number from our supply contract)',
  'Spoke with:  Erik Lund, Supplier Quality Engineer',
  '',
  'Erik read the fingerprint of the Halvorsen Supplier Data OpenPGP key',
  'over the phone. I wrote it down in groups of four:',
  '',
  '  ' + fp4(KEYS.gpg.fpr.hv),
  '',
  'Erik says the key file is on the supplier portal under Downloads. I',
  'saved it as exchange/keys/halvorsen_supplier_data.asc.',
  'Erik also said Halvorsen will never send a new key by email.'
]);
FILES['exchange/email/urgent_new_key.eml'] = text([
  'Return-Path: <bounce@halvorsen-pumps.com>',
  'From: "Halvorsen Supplier Quality" <supplier-quality@halvorsen-pumps.com>',
  'To: p.nair@cedarcreek-ind.com',
  'Date: Fri, 13 Nov 2026 16:52:10 -0600',
  'Subject: URGENT: new supplier key and portal certificate',
  '',
  'Hello Priya,',
  '',
  'Because of a security upgrade, Halvorsen has replaced its Supplier Data',
  'key and portal certificate. Please use the attached key for all files',
  'from now on, and install the attached certificate so your computer',
  'trusts our new portal at https://supplier-halvorsen-pump.com.',
  '',
  'Your Rev C package for CCD-3318 is overdue. Please upload it today.',
  '',
  'Attachments: halvorsen_key_from_email.asc, portal_cert_from_email.pem',
  '(saved by IT to exchange/keys and exchange/certs)',
  '',
  'Erik Lund',
  'Supplier Quality Engineer'
]);
FILES['exchange/README.txt'] = text([
  'MOCK SECURE FILE EXCHANGE - working folder',
  '',
  'release/CCD-3318_RevC/   The package Priya wants to send, copied from',
  '                         \\\\ENG-FS01\\Transfer, with Tom\'s signed manifest.',
  'release/release_signoff.txt  Tom\'s release record.',
  'keys/                    OpenPGP public keys: Tom, and two keys that both',
  '                         claim to be Halvorsen Supplier Data.',
  'certs/                   Certificates for Halvorsen\'s sites, and the',
  '                         Meridian Trust CA certificates.',
  'email/                   An email Priya received on Friday.',
  'phone_call_notes.txt     Tom\'s notes from his call with Halvorsen.',
  '',
  'Open Mock_Secure_File_Exchange.html on the course site for your tasks.'
]);

// ---------------------------------------------------------------- Lab 2.5: hide, mask, chain
const JPEG = Buffer.from(KEYS.picnicJpeg, 'base64');
const HIDDEN = text([
  'HV-310 bracket - key dimensions (copied from CCD-3318 Rev C)',
  'Plate: 6061-T6, 6.35 mm',
  'Mounting holes: 4 x 10.5 mm on 120 mm bolt circle',
  'Slot width (detail A): 12.00 mm +/- 0.10',
  'Bend radius (detail B): 6.0 mm'
]);
FILES['lab/protect/picnic_original.jpg'] = JPEG;
FILES['lab/protect/picnic_from_email.jpg'] = Buffer.concat([JPEG, makeZip([{ name: 'HV-310_dims.txt', data: Buffer.from(HIDDEN) }])]);
const HR = [
  ['Rosa Medina', 'HR', '900-31-4417', '2011-04-18'],
  ['Tom Becker', 'Engineering', '900-27-0381', '2009-08-03'],
  ['Priya Nair', 'Engineering', '900-55-1290', '2026-08-24'],
  ['Walt Henley', 'Plant', '900-62-7734', '2004-02-09'],
  ['Amanda Singh', 'Accounts Payable', '900-18-5562', '2019-06-10'],
  ['Jordan Pike', 'IT', '900-44-9026', '2022-01-17']
];
FILES['lab/protect/hr_export.csv'] = text(['employee,department,ssn,hire_date'].concat(HR.map(r => r.join(','))));
const LEDGER = [
  ['2026-09-14T09:00:00', 'Release log started', 'Dee Ortiz'],
  ['2026-10-05T14:10:00', 'Released CCD-2875 Rev D (hydraulic elbow fitting)', 'Tom Becker'],
  ['2026-10-21T11:45:00', 'Released CCD-3318 Rev B (HV-310 pump mounting bracket), slot width 12.00 mm', 'Tom Becker'],
  ['2026-11-11T15:20:00', 'Approved ECN-0457 (bore tolerance on CCD-2875 to +/- 0.02 mm)', 'Tom Becker'],
  ['2026-11-12T10:30:00', 'Released CCD-3318 Rev C (HV-310 pump mounting bracket)', 'Tom Becker']
];
let prevHash = '0'.repeat(64);
const BLOCKS = LEDGER.map((b, i) => {
  const body = text(['block: ' + (i + 1), 'time:  ' + b[0], 'event: ' + b[1], 'by:    ' + b[2], 'prev:  ' + prevHash]);
  prevHash = sha256(body);
  return body;
});
BLOCKS[2] = BLOCKS[2].replace('slot width 12.00 mm', 'slot width 12.50 mm');
BLOCKS.forEach((b, i) => { FILES['lab/protect/ledger/block' + (i + 1) + '.txt'] = b; });
FILES['lab/protect/README.txt'] = text([
  'picnic_original.jpg    The company picnic photo from the newsletter.',
  'picnic_from_email.jpg  The "same" photo, attached to an outgoing personal email',
  '                       that the mail filter flagged on Friday.',
  'hr_export.csv          A test export from the HR system. The SSNs are fake',
  '                       (900-series numbers are never issued).',
  'ledger/                Dee\'s prototype tamper-evident release log. Each block',
  '                       records the SHA-256 of the block before it (prev).'
]);

// ---------------------------------------------------------------- --sign-inputs mode
const si = process.argv.indexOf('--sign-inputs');
if (si > 0) {
  const dir = process.argv[si + 1];
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'ECN-0457.txt'), ECN);
  fs.writeFileSync(path.join(dir, 'MANIFEST.sha256'), MANIFEST);
  console.log('wrote ECN-0457.txt and MANIFEST.sha256 to', dir);
  process.exit(0);
}

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [rel, body] of Object.entries(FILES)) {
  const p = path.join(PACK, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms), same writer as Week 1
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (11 << 5) | 16;
  const locals = [], centrals = [];
  let offset = 0;
  for (const e of entries) {
    const nm = Buffer.from(e.name, 'utf8');
    const isDir = e.data === null;
    const raw = isDir ? Buffer.alloc(0) : e.data;
    const comp = isDir ? raw : zlib.deflateRawSync(raw, { level: 9 });
    const crc = isDir ? 0 : zlib.crc32(raw);
    const method = isDir ? 0 : 8;
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0); lh.writeUInt16LE(20, 4); lh.writeUInt16LE(0, 6); lh.writeUInt16LE(method, 8);
    lh.writeUInt16LE(time, 10); lh.writeUInt16LE(date, 12); lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(comp.length, 18); lh.writeUInt32LE(raw.length, 22); lh.writeUInt16LE(nm.length, 26); lh.writeUInt16LE(0, 28);
    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0); ch.writeUInt16LE(0x031E, 4); ch.writeUInt16LE(20, 6); ch.writeUInt16LE(0, 8);
    ch.writeUInt16LE(method, 10); ch.writeUInt16LE(time, 12); ch.writeUInt16LE(date, 14); ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(comp.length, 20); ch.writeUInt32LE(raw.length, 24); ch.writeUInt16LE(nm.length, 28);
    ch.writeUInt32LE(isDir ? ((0o40755 << 16) | 0x10) >>> 0 : (0o100644 << 16) >>> 0, 38);
    ch.writeUInt32LE(offset, 42);
    locals.push(lh, nm, comp);
    centrals.push(ch, nm);
    offset += lh.length + nm.length + comp.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat(locals.concat([cd, end]));
}
const names = Object.keys(FILES).sort();
const dirs = new Set();
names.forEach(n => { const parts = n.split('/'); for (let i = 1; i < parts.length; i++) dirs.add(parts.slice(0, i).join('/') + '/'); });
const entries = [{ name: ZIP_ROOT, data: null }]
  .concat([...dirs].sort().map(d => ({ name: ZIP_ROOT + d, data: null })))
  .concat(names.map(n => ({ name: ZIP_ROOT + n, data: Buffer.isBuffer(FILES[n]) ? FILES[n] : Buffer.from(FILES[n], 'utf8') })));
fs.writeFileSync(ZIP, makeZip(entries));

// ---------------------------------------------------------------- answers (computed the way a student would)
const X = {};
for (const [k, v] of Object.entries(CERTS)) {
  const x = new crypto.X509Certificate(v.der);
  X[k] = { subject: x.subject.replace(/\n/g, ', '), issuer: x.issuer.replace(/\n/g, ', '), validFrom: x.validFrom, validTo: x.validTo, san: x.subjectAltName || '', sha256: x.fingerprint256 };
}
const hashTally = OLD_USERS.reduce((m, u) => (m[md5(u[2])] = (m[md5(u[2])] || 0) + 1, m), {});
const topHash = Object.entries(hashTally).sort((a, b) => b[1] - a[1])[0];
const out = {
  '2.1': {
    passphrase: BACKUP_PASS,
    box_number: (BACKUP_PLAN.match(/Box number: (\d+)/) || [])[1],
    start_date: (BACKUP_PLAN.match(/Start date: \w+ (\S+)/) || [])[1],
    first8: FILES['lab/encryption/offsite_backup_plan.txt.enc'].subarray(0, 8).toString('latin1'),
    enc_size: FILES['lab/encryption/offsite_backup_plan.txt.enc'].length
  },
  '2.2': {
    vendor_sha256: sha256(FW), vendor_first8: sha256(FW).slice(0, 8),
    mirror_sha256: sha256(FW_MIRROR), vendor_md5: md5(FW),
    cedar_creek_sha256: sha256('Cedar Creek'), lower_cedar_creek_sha256: sha256('cedar Creek'),
    top_md5: topHash[0], top_md5_count: topHash[1],
    top_md5_password: OLD_USERS.find(u => md5(u[2]) === topHash[0])[2],
    welcome1_users_old: OLD_USERS.filter(u => u[2] === 'Welcome1').map(u => u[0]),
    shadow_welcome1: ['m.alvarez', 'g.lindqvist']
  },
  '2.3': {
    tom_fpr: KEYS.gpg.fpr.tom, tom_last4: KEYS.gpg.fpr.tom.slice(-4),
    modified_line: '  to   +/- 0.20 mm'
  },
  '2.4': {
    intranet: X['lab/certs/intranet.pem'], timeclock: X['lab/certs/timeclock01.pem'], nvr: X['lab/certs/nvr01.pem'],
    intranet_san_count: X['lab/certs/intranet.pem'].san.split(',').length
  },
  '2.5': {
    jpeg_bytes: JPEG.length, email_jpeg_bytes: FILES['lab/protect/picnic_from_email.jpg'].length,
    hidden_file: 'HV-310_dims.txt',
    priya_masked: 'XXX-XX-' + HR[2][2].slice(-4),
    ledger: BLOCKS.map((b, i) => 'block' + (i + 1) + ' sha256=' + sha256(b).slice(0, 12) + ' prev=' + b.match(/prev:\s+(\w+)/)[1].slice(0, 12)),
    broken_block: BLOCKS.findIndex((b, i) => i < BLOCKS.length - 1 && sha256(b) !== BLOCKS[i + 1].match(/prev:\s+(\w+)/)[1]) + 1
  },
  mock: {
    manifest: MANIFEST.trim().split('\n'),
    actual: Object.keys(RELEASED).sort().map(f => sha256(FILES[REL + f]) + '  ' + f + (sha256(FILES[REL + f]) === sha256(RELEASED[f]) ? '  OK' : '  FAILED')),
    hv_fpr: KEYS.gpg.fpr.hv, fake_fpr: KEYS.gpg.fpr.fake,
    supplier_portal: X['exchange/certs/supplier_portal.pem'],
    old_ftp: X['exchange/certs/old_ftp_portal.pem'],
    from_email: X['exchange/certs/portal_cert_from_email.pem']
  },
  files: names.length
};
console.log(JSON.stringify(out, null, 2));
