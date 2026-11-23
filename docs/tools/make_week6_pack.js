// Builds the Week 6 Cedar Creek lab pack (assets/cedarcreek/week6/) and its zip
// (assets/cedarcreek/cc-week6.zip, root folder cedarcreek-week6/).
// Deterministic: same seed, same files. Run from anywhere: node docs/tools/make_week6_pack.js
// Prints the auto-check answers for Labs 6.1, 6.2 and 6.5 (course-w6-labs.js must match them).
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..', '..');
const PACK = path.join(ROOT, 'assets', 'cedarcreek', 'week6');
const ZIP = path.join(ROOT, 'assets', 'cedarcreek', 'cc-week6.zip');
const ZIP_ROOT = 'cedarcreek-week6/';

function text(lines) { return lines.join('\n') + '\n'; }

const FILES = {};

// ---------------------------------------------------------------- README
FILES['README.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'Security team working files - Week 6 lab pack',
  'COMPANY CONFIDENTIAL - TRAINING DATA',
  '',
  'Cedar Creek Industries and every person, account, domain, address, and',
  'password in these files are fictional. They were made for MCCoE training',
  'labs. The IP addresses come from ranges reserved for documentation.',
  '',
  'What is inside',
  '--------------',
  'email/       Three messages staff reported with the Report button, plus',
  '             DNS records and domain lookups for the senders (Lab 6.1)',
  'audit/       The signed approval for a password audit and the password',
  '             hash export from DC01 (Lab 6.2)',
  'wordlists/   A short wordlist of common and company-themed passwords',
  '             (Lab 6.2)',
  'awareness/   The plan and the results of December\'s phishing simulation',
  '             (Lab 6.6)',
  'logs/        VPN, email, web, and sign-in logs (Labs 6.3 and 6.7)',
  '',
  'Handling rules',
  '--------------',
  'audit/dc01_hashes.txt is treated as Restricted. In real life it would',
  'never leave the audit workstation. Do not copy it anywhere else, and',
  'delete it when your lab is graded.'
]);

// ---------------------------------------------------------------- Lab 6.1: reported emails
FILES['email/report-01.eml'] = text([
  'Received: from BN8PR04MB6211.namprd04.prod.outlook.com (10.167.24.11) by',
  ' SA1PR04MB8890.namprd04.prod.outlook.com with HTTPS; Thu, 10 Dec 2026',
  ' 14:02:19 +0000',
  'Received: from BN1NAM04FT021.mail.protection.outlook.com (10.167.18.92) by',
  ' BN8PR04MB6211.namprd04.prod.outlook.com with SMTP; Thu, 10 Dec 2026',
  ' 14:02:18 +0000',
  'Received: from mail.cedarcreek-it.com (203.0.113.77) by',
  ' BN1NAM04FT021.mail.protection.outlook.com with ESMTP; Thu, 10 Dec 2026',
  ' 14:02:16 +0000',
  'Authentication-Results: spf=pass (sender IP is 203.0.113.77)',
  ' smtp.mailfrom=cedarcreek-it.com; dkim=pass (signature was verified)',
  ' header.d=cedarcreek-it.com; dmarc=pass action=none',
  ' header.from=cedarcreek-it.com; compauth=pass reason=100',
  'Received-SPF: Pass (protection.outlook.com: domain of cedarcreek-it.com',
  ' designates 203.0.113.77 as permitted sender)',
  'Return-Path: <servicedesk@cedarcreek-it.com>',
  'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=cedarcreek-it.com;',
  ' s=mail; h=from:to:subject:date:message-id;',
  ' bh=Qm9ndXNIYXNoRm9yVHJhaW5pbmdPbmx5MDAwMDAwMDA=;',
  ' b=VGhpcyBpcyBub3QgYSByZWFsIHNpZ25hdHVyZS4gVHJhaW5pbmcgZGF0YSBvbmx5Lg==',
  'From: "Cedar Creek IT Service Desk" <servicedesk@cedarcreek-it.com>',
  'To: Kevin Tran <k.tran@cedarcreek-ind.com>',
  'Subject: [Action Required] Your Microsoft 365 password expires in 4 hours',
  'Date: Thu, 10 Dec 2026 08:02:11 -0600',
  'Message-ID: <20261210140211.4471.servicedesk@mail.cedarcreek-it.com>',
  'X-Mailer: PHPMailer 6.8.1',
  'MIME-Version: 1.0',
  'Content-Type: text/html; charset="utf-8"',
  'Content-Transfer-Encoding: 7bit',
  '',
  '<html><body style="font-family:Segoe UI,Arial,sans-serif;font-size:14px">',
  '<p>Hi Kevin,</p>',
  '<p>Our records show that the password for <b>k.tran@cedarcreek-ind.com</b>',
  'expires <b>today at 12:00 PM CST</b>. After that time you will lose access',
  'to Outlook, Teams, and OneDrive until the Help Desk can reset it.</p>',
  '<p>To keep your current password, confirm it on the Microsoft 365 portal:</p>',
  '<p><a href="https://cedarcreek-it.com/m365/keep.php?u=k.tran"',
  'style="background:#0078d4;color:#ffffff;padding:8px 16px;text-decoration:none">',
  'https://portal.office.com/keep-password</a></p>',
  '<p>This takes less than one minute. Do not reply to this message.</p>',
  '<p>Thank you,<br>Jordan Pike<br>Help Desk, Cedar Creek Industries</p>',
  '</body></html>'
]);

FILES['email/report-02.eml'] = text([
  'Received: from DM6PR04MB5129.namprd04.prod.outlook.com (10.167.24.40) by',
  ' SA1PR04MB8890.namprd04.prod.outlook.com with HTTPS; Fri, 11 Dec 2026',
  ' 16:47:52 +0000',
  'Received: from BN1NAM04FT033.mail.protection.outlook.com (10.167.18.117) by',
  ' DM6PR04MB5129.namprd04.prod.outlook.com with SMTP; Fri, 11 Dec 2026',
  ' 16:47:51 +0000',
  'Received: from vps42.fastcloudhost.net (192.0.2.99) by',
  ' BN1NAM04FT033.mail.protection.outlook.com with ESMTP; Fri, 11 Dec 2026',
  ' 16:47:49 +0000',
  'Authentication-Results: spf=fail (sender IP is 192.0.2.99)',
  ' smtp.mailfrom=cedarcreek-ind.com; dkim=none (message not signed)',
  ' header.d=none; dmarc=fail action=none header.from=cedarcreek-ind.com;',
  ' compauth=fail reason=000',
  'Received-SPF: Fail (protection.outlook.com: domain of cedarcreek-ind.com',
  ' does not designate 192.0.2.99 as permitted sender)',
  'Return-Path: <g.palmer@cedarcreek-ind.com>',
  'From: "Greg Palmer" <g.palmer@cedarcreek-ind.com>',
  'Reply-To: "Greg Palmer" <g.palmer@cedarcreek-lnd.com>',
  'To: Amanda Singh <amanda.singh@cedarcreek-ind.com>',
  'Subject: Ozark Steel - updated remittance before Friday run',
  'Date: Fri, 11 Dec 2026 10:47:44 -0600',
  'Message-ID: <a81f2c09-77de-4b1e-9c51-0e2d61f0b7aa@vps42.fastcloudhost.net>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset="utf-8"',
  'Content-Transfer-Encoding: 7bit',
  '',
  'Amanda,',
  '',
  'Ozark Steel Supply changed banks this month. Please update their',
  'remittance details in the vendor file before today\'s payment run so',
  'their invoice does not bounce:',
  '',
  '  Bank:     First Meridian Trust',
  '  Routing:  000000000 (training data)',
  '  Account:  0000004417 (training data)',
  '',
  'I am in back-to-back meetings with the auditors all afternoon, so do',
  'not call. Just reply here to confirm once it is done.',
  '',
  'Thanks,',
  'Greg',
  '',
  'Sent from my iPhone'
]);

FILES['email/report-03.eml'] = text([
  'Received: from CH2PR04MB7001.namprd04.prod.outlook.com (10.167.24.73) by',
  ' SA1PR04MB8890.namprd04.prod.outlook.com with HTTPS; Mon, 14 Dec 2026',
  ' 15:10:06 +0000',
  'Received: from BN1NAM04FT058.mail.protection.outlook.com (10.167.18.140) by',
  ' CH2PR04MB7001.namprd04.prod.outlook.com with SMTP; Mon, 14 Dec 2026',
  ' 15:10:05 +0000',
  'Received: from out2.tallgrasspayroll.com (198.51.100.180) by',
  ' BN1NAM04FT058.mail.protection.outlook.com with ESMTPS; Mon, 14 Dec 2026',
  ' 15:10:03 +0000',
  'Authentication-Results: spf=pass (sender IP is 198.51.100.180)',
  ' smtp.mailfrom=tallgrasspayroll.com; dkim=pass (signature was verified)',
  ' header.d=tallgrasspayroll.com; dmarc=pass action=none',
  ' header.from=tallgrasspayroll.com; compauth=pass reason=100',
  'Received-SPF: Pass (protection.outlook.com: domain of tallgrasspayroll.com',
  ' designates 198.51.100.180 as permitted sender)',
  'Return-Path: <bounces@tallgrasspayroll.com>',
  'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=tallgrasspayroll.com;',
  ' s=tp2026; h=from:to:subject:date:message-id;',
  ' bh=VHJhaW5pbmdEYXRhQm9keUhhc2hOb3RSZWFsMDAwMDA=;',
  ' b=VHJhaW5pbmcgZGF0YS4gTm90IGEgcmVhbCBES0lNIHNpZ25hdHVyZS4=',
  'From: "Tallgrass Payroll" <notices@tallgrasspayroll.com>',
  'To: Walt Henley <w.henley@cedarcreek-ind.com>',
  'Subject: Your 2026 Form W-2 will be available in January',
  'Date: Mon, 14 Dec 2026 09:10:01 -0600',
  'Message-ID: <tp.20261214.88231.notice@tallgrasspayroll.com>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset="utf-8"',
  'Content-Transfer-Encoding: 7bit',
  '',
  'Hello Walt,',
  '',
  'Cedar Creek Industries uses Tallgrass Payroll to pay employees. Your',
  '2026 Form W-2 will be ready by January 25, 2027.',
  '',
  'There is nothing you need to do today. When it is ready, sign in the',
  'way you normally do at https://app.tallgrasspayroll.com and open',
  'Tax Documents. We will never ask for your password, your Social',
  'Security number, or bank details by email.',
  '',
  'Questions? Contact your HR department, Rosa Medina.',
  '',
  'Tallgrass Payroll',
  'This message was sent to w.henley@cedarcreek-ind.com because your',
  'employer uses Tallgrass Payroll.'
]);

FILES['email/dns_records.txt'] = text([
  'DNS TXT records, looked up by Jordan Pike on Mon, 14 Dec 2026',
  '(copied from dig output; one record per line)',
  '',
  '# Cedar Creek (our domain)',
  'cedarcreek-ind.com.          TXT  "v=spf1 include:spf.protection.outlook.com -all"',
  '_dmarc.cedarcreek-ind.com.   TXT  "v=DMARC1; p=none; rua=mailto:dmarc-reports@cedarcreek-ind.com"',
  '',
  '# Sender of report-01',
  'cedarcreek-it.com.           TXT  "v=spf1 ip4:203.0.113.77 -all"',
  '_dmarc.cedarcreek-it.com.    TXT  "v=DMARC1; p=none"',
  '',
  '# Reply-To domain in report-02',
  'cedarcreek-lnd.com.          TXT  "v=spf1 ip4:192.0.2.99 ~all"',
  '_dmarc.cedarcreek-lnd.com.   (no record)',
  '',
  '# Sender of report-03',
  'tallgrasspayroll.com.        TXT  "v=spf1 ip4:198.51.100.176/28 -all"',
  '_dmarc.tallgrasspayroll.com. TXT  "v=DMARC1; p=reject; rua=mailto:dmarc@tallgrasspayroll.com"'
]);

FILES['email/domain_lookups.txt'] = text([
  'Domain registration lookups (WHOIS), run by Jordan Pike on Mon, 14 Dec 2026',
  '',
  'Domain                 Created      Registrant',
  'cedarcreek-ind.com     2001-05-22   Cedar Creek Industries, Missouri, US',
  'cedarcreek-it.com      2026-12-09   REDACTED FOR PRIVACY',
  'cedarcreek-lnd.com     2026-08-12   REDACTED FOR PRIVACY',
  'tallgrasspayroll.com   2011-03-04   Tallgrass Payroll Inc., Kansas, US',
  '',
  'Note from Jordan: Rosa confirmed Tallgrass Payroll is our payroll',
  'provider and that she expected a W-2 notice to go out this week.'
]);

FILES['email/reporting_notes.txt'] = text([
  'From:     Jordan Pike <j.pike@cedarcreek-ind.com>',
  'To:       Security Analyst',
  'Cc:       Marcus Reyes <m.reyes@cedarcreek-ind.com>',
  'Date:     Mon, 14 Dec 2026 09:40',
  'Subject:  Three messages from the Report button',
  '',
  'Three people used the Report button in Outlook last week. I saved each',
  'message with its full headers so you can look at them:',
  '',
  '  report-01.eml  reported by Kevin Tran (Marketing)    Thu 10 Dec',
  '  report-02.eml  reported by Amanda Singh (AP)          Fri 11 Dec',
  '  report-03.eml  reported by Walt Henley (Plant)        Mon 14 Dec',
  '',
  'Kevin did not click. Amanda called Greg on his desk phone first, the way',
  'the August memo says, and he said he never sent it. Walt says the W-2',
  'one "looked like the scams in the training video".',
  '',
  'Can you tell me which are real, which are phishing, and what we should',
  'block? I also pulled the DNS records and domain lookups for the senders.',
  '',
  '- Jordan'
]);

// ---------------------------------------------------------------- Lab 6.2: password audit
FILES['audit/authorization.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'AUTHORIZATION FOR INTERNAL PASSWORD AUDIT',
  '',
  'Date:            2026-12-14',
  'Requested by:    Marcus Reyes, IT Manager',
  'Approved by:     Greg Palmer, CFO (security program sponsor)',
  'Performed by:    Security Analyst, with Dee Ortiz (Systems Administrator)',
  '',
  'Scope',
  '-----',
  'Dee Ortiz will export the NT password hashes of 25 Active Directory',
  'accounts on DC01: every privileged, shared and service account, plus a',
  'sample of staff accounts chosen by Marcus. The security analyst may run',
  'offline password cracking against that export, on the analyst\'s lab',
  'virtual machine only, between 2026-12-15 and 2026-12-18.',
  '',
  'Rules',
  '-----',
  '1. No online guessing against DC01, Microsoft 365, or any live system.',
  '2. Cracked passwords are not shared with anyone, including managers.',
  '   The report lists account names and weakness patterns only.',
  '3. Every account whose password is cracked gets a forced password',
  '   change. Greg has scheduled the resets for Monday 2027-01-04, after',
  '   the year-end change freeze, because ccadmin and operator are wired',
  '   into scripts and the Line 2 HMI.',
  '4. The hash export and the cracking results are deleted when the',
  '   report is accepted.',
  '',
  'Why',
  '---',
  'The 2019 password memo still sets an 8-character minimum with 90-day',
  'changes. Before we change the policy, we want evidence of how strong',
  'our passwords really are.',
  '',
  'Signed:  Greg Palmer     Marcus Reyes'
]);

// --- MD4 (for NT hashes; Node's OpenSSL 3 build may not offer md4) ---
function md4(input) {
  const ml = input.length;
  const r = (ml + 1) % 64;
  const padLen = r <= 56 ? 56 - r : 120 - r;
  const total = ml + 1 + padLen + 8;
  const m = Buffer.alloc(total);
  input.copy(m); m[ml] = 0x80;
  const bits = ml * 8;
  m.writeUInt32LE(bits >>> 0, total - 8);
  m.writeUInt32LE(Math.floor(bits / 4294967296), total - 4);
  let a = 0x67452301, b = 0xefcdab89, c = 0x98badcfe, d = 0x10325476;
  const rotl = (x, n) => (x << n) | (x >>> (32 - n));
  const F = (x, y, z) => (x & y) | (~x & z);
  const G = (x, y, z) => (x & y) | (x & z) | (y & z);
  const H = (x, y, z) => x ^ y ^ z;
  for (let off = 0; off < total; off += 64) {
    const X = [];
    for (let i = 0; i < 16; i++) X.push(m.readUInt32LE(off + i * 4));
    const aa = a, bb = b, cc = c, dd = d;
    const r1 = (p, q, s, t, k, n) => rotl((p + F(q, s, t) + X[k]) | 0, n);
    for (const i of [0, 4, 8, 12]) { a = r1(a, b, c, d, i, 3); d = r1(d, a, b, c, i + 1, 7); c = r1(c, d, a, b, i + 2, 11); b = r1(b, c, d, a, i + 3, 19); }
    const r2 = (p, q, s, t, k, n) => rotl((p + G(q, s, t) + X[k] + 0x5a827999) | 0, n);
    for (const i of [0, 1, 2, 3]) { a = r2(a, b, c, d, i, 3); d = r2(d, a, b, c, i + 4, 5); c = r2(c, d, a, b, i + 8, 9); b = r2(b, c, d, a, i + 12, 13); }
    const r3 = (p, q, s, t, k, n) => rotl((p + H(q, s, t) + X[k] + 0x6ed9eba1) | 0, n);
    for (const i of [0, 2, 1, 3]) { a = r3(a, b, c, d, i, 3); d = r3(d, a, b, c, i + 8, 9); c = r3(c, d, a, b, i + 4, 11); b = r3(b, c, d, a, i + 12, 15); }
    a = (a + aa) | 0; b = (b + bb) | 0; c = (c + cc) | 0; d = (d + dd) | 0;
  }
  const out = Buffer.alloc(16);
  [a, b, c, d].forEach((v, i) => out.writeUInt32LE(v >>> 0, i * 4));
  return out.toString('hex');
}
const nt = pw => md4(Buffer.from(pw, 'utf16le'));
if (md4(Buffer.from('')) !== '31d6cfe0d16ae931b73c59d7e0c089c0' || md4(Buffer.from('abc')) !== 'a448017aaf21d8525fc10ae87aa6729d' || nt('password') !== '8846f7eaee8fb117ad06bdd830b7586c') {
  throw new Error('MD4 self-test failed');
}

// Account, RID, password. Passwords exist only here, to compute the hashes and the answers.
const ACCOUNTS = [
  ['Administrator', 500, 'vR7#qL2!xT9@mW4$kP6z'],
  ['krbtgt', 502, 'Zt3$9wQ!pL0#vN8^bX2&cM5*hJ7(eR4)'],
  ['ccadmin', 1104, 'CedarCreek1'],
  ['operator', 1105, 'Operator1'],
  ['svc-backup', 1106, 'g8Hk2mPq9vW4xT7nZ3rL'],
  ['vendor.cad', 1107, 'cadlicense'],
  ['m.reyes', 1110, 'rusty-anchor-velvet-moon-42'],
  ['d.ortiz', 1111, 'Qx9!tape-library-in-the-dark'],
  ['j.pike', 1112, 'Winter2025!'],
  ['g.palmer', 1120, 'harvest tractor maple gravel'],
  ['amanda.singh', 1121, 'Bluebird-Kayak-Lantern-19'],
  ['d.reyes', 1122, 'Password1'],
  ['r.medina', 1130, 'Sunflower.Ledger.Cobalt.88'],
  ['t.becker', 1140, 'Summer2026!'],
  ['p.nair', 1141, 'tidal-orbit-copper-violin'],
  ['b.kessler', 1142, 'Fall2025!'],
  ['l.kim', 1150, 'Fall2026!'],
  ['k.tran', 1151, 'Marketing1'],
  ['m.alvarez', 1160, 'Welcome1'],
  ['g.lindqvist', 1170, 'Spring2026!'],
  ['r.doyle', 1171, 'Welcome1'],
  ['n.brooks', 1180, 'Welcome1'],
  ['w.henley', 1190, 'Tractor1'],
  ['s.pruitt', 1191, '504218'],
  ['t.garza', 1192, '072291']
];
const LM_EMPTY = 'aad3b435b51404eeaad3b435b51404ee';
FILES['audit/dc01_hashes.txt'] = text(ACCOUNTS.map(([u, rid, pw]) => u + ':' + rid + ':' + LM_EMPTY + ':' + nt(pw) + ':::'));

const COMMON = [
  '123456', 'password', '12345678', 'qwerty', '123456789', '12345', '1234', '111111', '1234567', 'dragon',
  '123123', 'baseball', 'abc123', 'football', 'monkey', 'letmein', 'shadow', 'master', '666666', 'qwertyuiop',
  '123321', 'mustang', '1234567890', 'michael', '654321', 'superman', '1qaz2wsx', '7777777', '121212', '000000',
  'qazwsx', '123qwe', 'killer', 'trustno1', 'jordan', 'jennifer', 'zxcvbnm', 'asdfgh', 'hunter', 'buster',
  'soccer', 'harley', 'batman', 'andrew', 'tigger', 'sunshine', 'iloveyou', 'charlie', 'robert', 'thomas',
  'hockey', 'ranger', 'daniel', 'starwars', '112233', 'george', 'computer', 'michelle', 'jessica', 'pepper',
  '1111', 'zxcvbn', '555555', '11111111', '131313', 'freedom', '777777', 'pass', 'maggie', '159753',
  'aaaaaa', 'ginger', 'princess', 'joshua', 'cheese', 'amanda', 'summer', 'love', 'ashley', 'nicole',
  'chelsea', 'matthew', 'access', 'yankees', '987654321', 'dallas', 'austin', 'thunder', 'taylor', 'matrix',
  'welcome', 'Welcome1', 'Welcome123', 'Password1', 'Password123', 'P@ssw0rd', 'Passw0rd', 'Changeme1', 'changeme', 'Letmein1',
  'Qwerty123', 'Admin123', 'admin', 'administrator', 'Summer1', 'Winter1', 'Spring1', 'Football1', 'Baseball1', 'Monkey1',
  'Iloveyou1', 'Sunshine1', 'Princess1', 'Charlie1', 'Shadow1', 'Master1', 'Dragon1', 'Michael1', 'Jordan23', 'Superman1',
  'cedarcreek', 'CedarCreek', 'CedarCreek1', 'Cedarcreek1', 'cedarcreek1', 'Cedar2026', 'CedarCreek2026', 'cedar', 'Cedar1', 'Creek1',
  'operator', 'Operator1', 'tractor', 'Tractor1', 'Tractor2026', 'Marketing1', 'Engineering1', 'Shipping1', 'Finance1', 'Payroll1',
  'cadlicense', 'Line2', 'Plant1', 'Missouri1', 'Ozark1', 'Springfield1', 'Backup1', 'Service1', 'Helpdesk1', 'Scanner1'
];
FILES['wordlists/common-plus-company.txt'] = text(COMMON);

// ---------------------------------------------------------------- Lab 6.5: phishing simulation
FILES['awareness/campaign_plan.txt'] = text([
  'CEDAR CREEK INDUSTRIES',
  'PHISHING SIMULATION PLAN - DECEMBER 2026',
  '',
  'Approved by:   Marcus Reyes (IT Manager), Greg Palmer (CFO)',
  'Run by:        Security Analyst',
  'Sent:          Wed, 16 Dec 2026, 09:00 (one send to every mailbox)',
  'Closed:        Fri, 18 Dec 2026, 17:00',
  '',
  'The lure',
  '--------',
  'Subject: "Your 2026 holiday bonus statement is ready"',
  'From:    "Cedar Creek HR" <hr-notices@cedarcreek-benefits.com>',
  'A button opens a fake sign-in page that looks like Microsoft 365. Any',
  'password typed there is thrown away; the page only records that',
  'something was submitted. Anyone who submits sees a page explaining',
  'that it was a test and showing the red flags they missed.',
  '',
  'What we measure (columns in phish_sim_results.csv)',
  '--------------------------------------------------',
  'email        the mailbox the test was sent to',
  'department   from the HR roster',
  'building     office or plant',
  'trained      yes = finished annual security awareness training',
  'opened       yes = opened the email (images loaded)',
  'clicked      yes = clicked the button',
  'submitted    yes = typed something into the fake sign-in page',
  'reported     yes = used the Report button in Outlook',
  'report_min   minutes from the send to the report (blank if not reported)',
  '',
  'Ground rules',
  '------------',
  '- Results are used to target training, not to punish anyone.',
  '- Managers get department totals, not lists of names.',
  '- Rosa Medina (HR) approved the wording: no real bonus amounts.'
]);

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const DEPTS = [
  // department, building, mailbox count, named people (canon), click weight
  ['Finance', 'office', 9, ['g.palmer', 'amanda.singh', 'd.reyes'], 1.0],
  ['HR', 'office', 5, ['r.medina'], 0.8],
  ['IT', 'office', 3, ['m.reyes', 'd.ortiz', 'j.pike'], 0],
  ['Engineering', 'office', 18, ['t.becker', 'p.nair'], 0.9],
  ['Marketing', 'office', 6, ['l.kim', 'k.tran'], 1.0],
  ['Customer Service', 'office', 10, ['g.lindqvist', 'r.doyle'], 1.5],
  ['Purchasing', 'office', 6, ['m.alvarez'], 1.0],
  ['Office Admin', 'office', 2, ['n.brooks'], 1.0],
  ['Production', 'plant', 30, ['w.henley'], 1.3],
  ['Quality', 'plant', 8, [], 1.0],
  ['Maintenance', 'plant', 7, ['s.pruitt'], 1.2],
  ['Shipping', 'plant', 10, [], 1.6]
];
const FIRST = ['james', 'mary', 'robert', 'linda', 'david', 'susan', 'mark', 'karen', 'paul', 'lisa', 'steven', 'nancy', 'brian', 'donna', 'kevin', 'carol', 'jason', 'sharon', 'eric', 'michelle', 'adam', 'laura', 'travis', 'heather', 'cody', 'tara', 'dustin', 'megan', 'shawn', 'brandi', 'luis', 'rosa', 'hung', 'mai', 'omar', 'fatima', 'ivan', 'olga', 'tyler', 'jenna'];
const LAST = ['miller', 'davis', 'wilson', 'moore', 'taylor', 'anderson', 'thomas', 'jackson', 'white', 'harris', 'martin', 'thompson', 'garcia', 'clark', 'lewis', 'walker', 'hall', 'allen', 'young', 'king', 'wright', 'scott', 'green', 'baker', 'adams', 'nelson', 'hill', 'campbell', 'mitchell', 'roberts', 'carter', 'phillips', 'evans', 'turner', 'torres', 'parker', 'collins', 'edwards', 'stewart', 'morris', 'nguyen', 'murphy', 'rivera', 'cook', 'rogers', 'morgan', 'peterson', 'cooper', 'reed', 'bailey'];
const RESERVED = new Set(['g.palmer', 'm.reyes', 'd.ortiz', 'j.pike', 't.becker', 'r.medina', 'l.kim', 'amanda.singh', 'm.alvarez', 'g.lindqvist', 'w.henley', 'n.brooks', 'p.nair', 'd.reyes', 'k.tran', 'r.doyle', 's.pruitt', 't.garza', 'b.kessler', 'l.vance', 'h.ruiz', 'e.dawson']);

function buildSim(seed) {
  const rand = mulberry32(seed);
  const used = new Set();
  const rows = [];
  for (const [dept, bld, n, named, w] of DEPTS) {
    const people = named.slice();
    while (people.length < n) {
      const e = FIRST[Math.floor(rand() * FIRST.length)][0] + '.' + LAST[Math.floor(rand() * LAST.length)];
      if (RESERVED.has(e) || used.has(e) || people.includes(e)) continue;
      people.push(e);
    }
    for (const e of people) {
      used.add(e);
      const isIT = dept === 'IT';
      const trained = isIT || ['amanda.singh', 'g.lindqvist', 'r.medina', 'g.palmer', 't.becker', 'k.tran'].includes(e) ? true : rand() < (bld === 'office' ? 0.72 : 0.5);
      const opened = isIT || rand() < 0.78;
      const pClick = (trained ? 0.07 : 0.3) * w;
      const clicked = !isIT && opened && !['amanda.singh', 'g.lindqvist', 'r.medina', 'k.tran'].includes(e) && rand() < pClick;
      const submitted = clicked && rand() < 0.6;
      const pReport = trained ? 0.45 : 0.12;
      const reported = opened && (isIT || ['amanda.singh', 'g.lindqvist', 'k.tran'].includes(e) || rand() < pReport);
      let mins = '';
      if (reported) mins = e === 'g.lindqvist' ? 3 : e === 'j.pike' ? 6 : 8 + Math.floor(rand() * 170);
      rows.push({ email: e + '@cedarcreek-ind.com', dept, bld, trained, opened, clicked, submitted, reported, mins });
    }
  }
  return rows;
}
const tally = arr => arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {});
const top = m => Object.entries(m).sort((a, b) => b[1] - a[1]);
function simOk(rows) {
  const byDept = top(tally(rows.filter(r => r.clicked).map(r => r.dept)));
  const mins = rows.filter(r => r.reported).map(r => r.mins).sort((a, b) => a - b);
  const tr = rows.filter(r => r.trained), un = rows.filter(r => !r.trained);
  const rate = g => g.filter(r => r.clicked).length / g.length;
  return byDept.length > 1 && byDept[0][1] > byDept[1][1] && mins[0] === 3 && mins[1] > 3 && rate(un) > 2.5 * rate(tr) && rows.filter(r => r.dept === 'IT' && r.clicked).length === 0;
}
let seed = 20261216, SIM = buildSim(seed);
while (!simOk(SIM)) SIM = buildSim(++seed);
// Consistency pass: the generated names that matter to the story become real people from the Week 3 directory.
const RENAME = { 'e.baker': 'g.rankin', 'r.thompson': 'y.upton', 'm.evans': 'f.hester', 'd.stewart': 'u.beckett', 'o.allen': 'n.nolan' };
for (const r of SIM) { const u = r.email.split('@')[0]; if (RENAME[u]) r.email = RENAME[u] + '@cedarcreek-ind.com'; }
const yn = b => b ? 'yes' : 'no';
FILES['awareness/phish_sim_results.csv'] = text(['email,department,building,trained,opened,clicked,submitted,reported,report_min']
  .concat(SIM.map(r => [r.email, r.dept, r.bld, yn(r.trained), yn(r.opened), yn(r.clicked), yn(r.submitted), yn(r.reported), r.mins].join(','))));

// ---------------------------------------------------------------- shared log helpers (local Central time, no zone)
const pad = n => String(n).padStart(2, '0');
const fmt = ms => { const d = new Date(ms); return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()); };
const at = (y, mo, d, h, mi, s) => Date.UTC(y, mo - 1, d, h, mi, s || 0);

// ---------------------------------------------------------------- Lab 6.3: VPN authentication log (weekend of Dec 11-13)
const vr = mulberry32(20261212);
const vri = (lo, hi) => lo + Math.floor(vr() * (hi - lo + 1));
const VPN = [];
const vpn = (ms, user, src, result, reason) => VPN.push([ms, fmt(ms) + ' FW-CORE vpn-auth: user=' + user + ' src=' + src + ' result=' + result + (reason ? ' reason=' + reason : '')]);
const vpnEnd = (ms, user, src, mins) => VPN.push([ms, fmt(ms) + ' FW-CORE vpn-session: user=' + user + ' src=' + src + ' event=logout duration_min=' + mins]);
const HOMES = { 'd.ortiz': '203.0.113.38', 'm.reyes': '192.0.2.244', 'j.pike': '203.0.113.11', 't.becker': '192.0.2.118', 'p.nair': '203.0.113.47', 'g.palmer': '192.0.2.41', 'r.medina': '198.51.100.129', 'l.kim': '192.0.2.78', 'amanda.singh': '198.51.100.150', 'w.henley': '192.0.2.216' };
const DAYS6 = [[12, 11], [12, 12], [12, 13]];
for (const [user, ip] of Object.entries(HOMES)) {
  const n = vri(1, 3);
  for (let i = 0; i < n; i++) {
    const day = user === 'm.reyes' ? DAYS6[vri(0, 1)] : DAYS6[vri(0, 2)];
    const startH = day[1] === 11 ? vri(18, 21) : user === 'm.reyes' && day[1] === 13 ? vri(8, 12) : vri(7, 21);
    let t = at(2026, day[0], day[1], startH, vri(0, 59), vri(0, 59));
    if (vr() < 0.25) { vpn(t, user, ip, 'FAIL', 'bad_password'); t += vri(15, 70) * 1000; }
    vpn(t, user, ip, 'SUCCESS');
    const mins = vri(12, 150);
    vpnEnd(t + mins * 60000, user, ip, mins);
  }
}
const SPRAY_IP = '203.0.113.200', SPRAY_USERS = ACCOUNTS.map(a => a[0]).filter(u => !/^(Administrator|krbtgt|svc-|vendor\.cad$)/.test(u));
const sprayOrder = SPRAY_USERS.slice().sort((a, b) => (a.charCodeAt(2) * 7 + a.length * 13) % 29 - (b.charCodeAt(2) * 7 + b.length * 13) % 29 || a.localeCompare(b));
let st = at(2026, 12, 12, 2, 4, 10), sprayHit = null;
for (const u of sprayOrder) {
  if (u === 'b.kessler') { vpn(st, u, SPRAY_IP, 'SUCCESS'); sprayHit = { user: u, time: fmt(st) }; vpnEnd(st + 47 * 60000, u, SPRAY_IP, 47); }
  else vpn(st, u, SPRAY_IP, 'FAIL', 'bad_password');
  st += vri(95, 140) * 1000;
}
let bt = at(2026, 12, 13, 14, 2, 0);
for (let i = 0; i < 10; i++) { vpn(bt, 'm.reyes', '192.0.2.77', 'FAIL', 'bad_password'); bt += vri(6, 14) * 1000; }
vpn(bt, 'm.reyes', '192.0.2.77', 'LOCKED', 'too_many_failures');
for (let i = 0; i < 14; i++) { bt += vri(6, 14) * 1000; vpn(bt, 'm.reyes', '192.0.2.77', 'FAIL', 'account_locked'); }
vpn(at(2026, 12, 13, 19, 12, 41), 'm.reyes', HOMES['m.reyes'], 'FAIL', 'account_locked');
vpn(at(2026, 12, 13, 19, 13, 30), 'm.reyes', HOMES['m.reyes'], 'FAIL', 'account_locked');
const STUFF_IPS = [150, 151, 152, 153, 154, 155, 156, 157].map(n => '192.0.2.' + n);
const STUFF_REAL = ['l.kim', 'k.tran', 'amanda.singh', 'd.reyes', 'p.nair', 'r.doyle'].map(u => u + '@cedarcreek-ind.com');
const STUFF_FAKE = ['kevin.tran', 'laura.kim', 'lkim1979', 'amanda.s', 'asingh', 'dana.reyes', 'priya.nair', 'pnair88', 'ryan.doyle', 'rdoyle', 'greg.palmer', 'gpalmer', 'tom.becker', 'tbecker', 'rosa.medina', 'rmedina', 'walt.henley', 'whenley', 'nina.brooks', 'nbrooks', 'marcus.reyes', 'mreyes', 'dee.ortiz', 'dortiz', 'jordan.pike', 'jpike', 'shane.pruitt', 'tina.garza', 'mike.alvarez', 'malvarez', 'gina.lindqvist', 'glindqvist', 'info', 'sales'].map(u => u + '@cedarcreek-ind.com');
const stuffList = STUFF_REAL.concat(STUFF_FAKE);
let ft = at(2026, 12, 12, 20, 0, 5);
stuffList.forEach((u, i) => {
  vpn(ft, u, STUFF_IPS[i % STUFF_IPS.length], 'FAIL', STUFF_REAL.includes(u) ? 'bad_password' : 'unknown_user');
  ft += vri(90, 160) * 1000;
});
VPN.sort((a, b) => a[0] - b[0]);
FILES['logs/vpn_auth.log'] = text(VPN.map(x => x[1]));
FILES['logs/README_logs.txt'] = text([
  'Log exports for the Week 6 labs (times are Cedar Creek local time, Central)',
  '',
  'vpn_auth.log       FW-CORE VPN sign-ins, Fri 11 Dec 18:00 to Sun 13 Dec 23:59 (Lab 6.3)',
  '                   Profile CC-LEGACY only: domain password alone, no MFA. Any VPN-Users',
  '                   member can use it. CC-REMOTE sign-ins (certificate + push) are in',
  '                   a separate log and are not part of this export.',
  '                   Lockout policy: 10 failed passwords locks an account for 30 minutes.',
  '                   The VPN accepts a username or an email address.',
  'message_trace.csv  Microsoft 365 message trace, Thu 10 Dec (Lab 6.7)',
  'fw_web.log         FW-CORE web filter log, Thu 10 Dec, office network 10.20.0.0/16 (Lab 6.7)',
  'm365_audit.csv     Microsoft 365 audit log: mailbox and SharePoint activity, Thu 10 Dec (Lab 6.7)',
  'm365_signins.csv   Microsoft 365 sign-in log, Thu 10 Dec (Lab 6.7)',
  '                   198.51.100.24 is Cedar Creek\'s own internet address.'
]);

// ---------------------------------------------------------------- Lab 6.7: follow-up on report-01 (Thu Dec 10)
const fr = mulberry32(20261210);
const fri = (lo, hi) => lo + Math.floor(fr() * (hi - lo + 1));
const pick = arr => arr[Math.floor(fr() * arr.length)];
const userOf = e => e.split('@')[0];
const officeUsers = SIM.filter(r => r.bld === 'office' && r.dept !== 'IT').map(r => userOf(r.email));
const pool = officeUsers.filter(u => u !== 'k.tran');
const recips = ['k.tran'];
while (recips.length < 31) { const u = pick(pool); if (!recips.includes(u)) recips.push(u); }
const quarantined = [];
while (quarantined.length < 4) { const u = pick(recips.slice(1)); if (!quarantined.includes(u)) quarantined.push(u); }
const delivered = recips.filter(u => !quarantined.includes(u));
const clickPool = delivered.filter(u => u !== 'k.tran' && !RESERVED.has(u));
const clickers = [];
while (clickers.length < 5) { const u = pick(clickPool); if (!clickers.includes(u)) clickers.push(u); }
const submitters = clickers.slice(0, 2);
const PHISH_SUBJ = '[Action Required] Your Microsoft 365 password expires in 4 hours';
const MT = [];
let mt = at(2026, 12, 10, 8, 2, 11);
recips.forEach(u => { MT.push([mt, [fmt(mt), 'servicedesk@cedarcreek-it.com', u + '@cedarcreek-ind.com', PHISH_SUBJ, quarantined.includes(u) ? 'Quarantined' : 'Delivered'].join(',')]); mt += fri(0, 2) * 1000; });
const NOISE_MAIL = [['w.henley@cedarcreek-ind.com', 'Line 2 schedule for Friday'], ['m.alvarez@cedarcreek-ind.com', 'PO 44871 confirmation'], ['w.henley@cedarcreek-ind.com', 'Weekly safety huddle notes'], ['t.becker@cedarcreek-ind.com', 'RE: drawing rev C for bracket 7731'], ['r.medina@cedarcreek-ind.com', 'Lunch and learn next Tuesday'], ['orders@ozarksteelsupply.com', 'Invoice 20931 attached'], ['orders@ozarksteelsupply.com', 'Updated price list'], ['m.alvarez@cedarcreek-ind.com', 'RE: quote request'], ['notices@tallgrasspayroll.com', 'Timecard reminder'], ['r.medina@cedarcreek-ind.com', 'Holiday schedule'], ['g.palmer@cedarcreek-ind.com', 'RE: customer visit Monday'], ['j.pike@cedarcreek-ind.com', 'Printer on 2nd floor fixed']];
for (let i = 0; i < 70; i++) {
  const t = at(2026, 12, 10, fri(7, 16), fri(0, 59), fri(0, 59));
  const nm = pick(NOISE_MAIL);
  MT.push([t, [fmt(t), nm[0], pick(officeUsers) + '@cedarcreek-ind.com', nm[1], 'Delivered'].join(',')]);
}
MT.sort((a, b) => a[0] - b[0]);
FILES['logs/message_trace.csv'] = text(['date_time,sender,recipient,subject,status'].concat(MT.map(x => x[1])));

const DEPT_NET = { Finance: 6, HR: 6, IT: 1, Engineering: 30, Marketing: 8, 'Customer Service': 10, Purchasing: 10, 'Office Admin': 12 };
const deptOf = {}; SIM.forEach(r => { deptOf[userOf(r.email)] = r.dept; });
const lanIp = u => { let h = 0; for (const ch of u) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return '10.20.' + (DEPT_NET[deptOf[u]] || 12) + '.' + (100 + (h >>> 8) % 100); };
const WEB = [];
const web = (ms, u, method, host, p, action) => WEB.push([ms, fmt(ms) + ' FW-CORE web: src=' + lanIp(u) + ' user=' + u + ' method=' + method + ' host=' + host + ' path=' + p + ' action=' + action]);
const NOISE_HOSTS = [['outlook.office.com', '/mail/'], ['login.microsoftonline.com', '/common/oauth2/authorize'], ['teams.microsoft.com', '/'], ['app.tallgrasspayroll.com', '/login'], ['www.weather.gov', '/sgf/'], ['www.ozarksteelsupply.com', '/catalog'], ['cedarcreekind.sharepoint.com', '/sites/engineering']];
for (let i = 0; i < 90; i++) {
  const t = at(2026, 12, 10, fri(7, 16), fri(0, 59), fri(0, 59));
  const h = pick(NOISE_HOSTS);
  web(t, pick(officeUsers), 'GET', h[0], h[1], 'allowed');
}
const clickTimes = {};
let ct = at(2026, 12, 10, 8, 9, 0);
clickers.forEach((u, i) => {
  ct += fri(60, 420) * 1000;
  clickTimes[u] = ct;
  web(ct, u, 'GET', 'cedarcreek-it.com', '/m365/keep.php?u=' + u, 'allowed');
  if (i < 2) web(ct + fri(25, 70) * 1000, u, 'POST', 'cedarcreek-it.com', '/m365/keep.php', 'allowed');
});
const blockAt = at(2026, 12, 10, 10, 15, 0);
web(blockAt + 5 * 60000, pick(clickPool.filter(u => !clickers.includes(u))), 'GET', 'cedarcreek-it.com', '/m365/keep.php', 'blocked');
WEB.sort((a, b) => a[0] - b[0]);
FILES['logs/fw_web.log'] = text(WEB.map(x => x[1]));

const SIGN = [];
const sign = (ms, u, ip, result, detail) => SIGN.push([ms, [fmt(ms), u + '@cedarcreek-ind.com', ip, result, detail].join(',')]);
for (let i = 0; i < 60; i++) {
  const t = at(2026, 12, 10, fri(7, 16), fri(0, 59), fri(0, 59));
  sign(t, pick(officeUsers), '198.51.100.24', 'Success', fr() < 0.7 ? 'Previously satisfied' : 'MFA completed (app push)');
}
const victim = submitters[0], second = submitters[1];
let vt = clickTimes[victim] + 4 * 60000;
sign(vt, victim, '203.0.113.77', 'Failure', 'MFA push denied by user'); vt += 70000;
sign(vt, victim, '203.0.113.77', 'Failure', 'MFA push denied by user'); vt += 85000;
sign(vt, victim, '203.0.113.77', 'Failure', 'MFA push denied by user'); vt += 95000;
sign(vt, victim, '203.0.113.77', 'Success', 'MFA push approved');
const victimIn = fmt(vt);
let wt = clickTimes[second] + 5 * 60000;
sign(wt, second, '203.0.113.77', 'Failure', 'MFA push denied by user'); wt += 80000;
sign(wt, second, '203.0.113.77', 'Failure', 'MFA push denied by user');
SIGN.sort((a, b) => a[0] - b[0]);
FILES['logs/m365_signins.csv'] = text(['date_time,user,ip,result,mfa_detail'].concat(SIGN.map(x => x[1])));

const AUD = [];
const aud = (ms, u, ip, op, detail) => AUD.push([ms, [fmt(ms), u + '@cedarcreek-ind.com', ip, op, detail].join(',')]);
const SP = ['/sites/engineering/Projects/7731-bracket/drawing-revC.pdf', '/sites/finance/AP/vendor-list.xlsx', '/sites/hr/Policies/holiday-schedule-2027.pdf', '/sites/engineering/Standards/weld-spec-04.pdf', '/sites/marketing/Brochures/hydraulic-fittings.pdf', '/sites/purchasing/Quotes/Q-2026-118.xlsx'];
for (let i = 0; i < 50; i++) {
  const t = at(2026, 12, 10, fri(7, 16), fri(0, 59), fri(0, 59));
  const op = pick(['FileAccessed', 'FileAccessed', 'FileModified', 'MailItemsAccessed']);
  aud(t, pick(officeUsers), '198.51.100.24', op, op === 'MailItemsAccessed' ? 'folder=Inbox' : 'path=' + pick(SP));
}
const vIn = Date.parse(victimIn + 'Z');
aud(vIn + 95000, victim, '203.0.113.77', 'MailItemsAccessed', 'folder=Inbox');
aud(vIn + 190000, victim, '203.0.113.77', 'New-InboxRule', 'name=.;forward_to=gr.archive@freemail-box.net;delete_after_forward=true');
const STOLEN = ['Customers/Harlan-Equipment/HE-4410-housing-spec.pdf', 'Customers/Harlan-Equipment/HE-4410-housing-revB.dwg', 'Customers/Prairie-Ag/PA-220-bracket-revD.dwg', 'Customers/Prairie-Ag/PA-220-tolerances.xlsx', 'Customers/Tri-County-Hydraulics/TCH-90-fitting.dwg', 'Customers/Tri-County-Hydraulics/TCH-90-spec.pdf', 'Projects/7731-bracket/drawing-revC.pdf'];
let dl = vIn + 6 * 60000;
STOLEN.forEach(p => { aud(dl, victim, '203.0.113.77', 'FileDownloaded', 'path=/sites/engineering/' + p); dl += fri(180, 330) * 1000; });
AUD.sort((a, b) => a[0] - b[0]);
FILES['logs/m365_audit.csv'] = text(['date_time,user,ip,operation,detail'].concat(AUD.map(x => x[1])));

// ---------------------------------------------------------------- write files
fs.rmSync(PACK, { recursive: true, force: true });
for (const [name, body] of Object.entries(FILES)) {
  const p = path.join(PACK, name);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body);
}

// ---------------------------------------------------------------- zip (forward-slash paths, Unix perms)
function makeZip(entries) {
  const time = (8 << 11), date = ((2026 - 1980) << 9) | (12 << 5) | 14;
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
  .concat(names.map(n => ({ name: ZIP_ROOT + n, data: Buffer.from(FILES[n], 'utf8') })));
fs.writeFileSync(ZIP, makeZip(entries));

// ---------------------------------------------------------------- answers (computed the way a student would)
const hdr = f => FILES[f].split('\n\n')[0];
const SEASONS = [];
for (const s of ['Spring', 'Summer', 'Fall', 'Winter']) for (const y of [2023, 2024, 2025, 2026]) SEASONS.push(s + y + '!');
const commonSet = new Set(COMMON), seasonSet = new Set(SEASONS);
const stage1 = ACCOUNTS.filter(a => commonSet.has(a[2]));
const stage2 = ACCOUNTS.filter(a => commonSet.has(a[2]) || seasonSet.has(a[2]));
const stage3 = ACCOUNTS.filter(a => commonSet.has(a[2]) || seasonSet.has(a[2]) || /^\d{6}$/.test(a[2]));
const hashCounts = top(tally(ACCOUNTS.map(a => nt(a[2]))));
const rows = SIM;
const pct = (a, b) => Math.round(a / b * 100);
const clicked = rows.filter(r => r.clicked), tr = rows.filter(r => r.trained), un = rows.filter(r => !r.trained);
const out = {
  '6.1': {
    received_01: (hdr('email/report-01.eml').match(/^Received:/gm) || []).length,
    origin_ip_01: '203.0.113.77',
    href_01: (FILES['email/report-01.eml'].match(/href="https:\/\/([^/"]+)/) || [])[1],
    spf_01: (hdr('email/report-01.eml').match(/spf=(\w+)/) || [])[1],
    reply_to_02: (hdr('email/report-02.eml').match(/^Reply-To:.*<([^>]+)>/m) || [])[1],
    spf_02: (hdr('email/report-02.eml').match(/spf=(\w+)/) || [])[1],
    dmarc_02: (hdr('email/report-02.eml').match(/dmarc=(\w+) action=(\w+)/) || []).slice(1),
    origin_ip_02: '192.0.2.99',
    cc_dmarc_policy: (FILES['email/dns_records.txt'].match(/_dmarc\.cedarcreek-ind\.com\.\s+TXT\s+"[^"]*p=(\w+)/) || [])[1],
    domain_age_days_01: (Date.parse('2026-12-10') - Date.parse('2026-12-09')) / 86400000
  },
  '6.2': {
    accounts: ACCOUNTS.length,
    shared_hash_top: hashCounts[0][1],
    shared_password: ACCOUNTS.find(a => nt(a[2]) === hashCounts[0][0])[2],
    unique_hashes: hashCounts.length,
    wordlist_lines: COMMON.length,
    show_after_wordlist: stage1.length,
    ccadmin_pw: ACCOUNTS.find(a => a[0] === 'ccadmin')[2],
    seasons_lines: SEASONS.length,
    show_after_seasons: stage2.length,
    mask_keyspace: Math.pow(10, 6),
    show_after_mask: stage3.length,
    left: ACCOUNTS.length - stage3.length,
    uncracked: ACCOUNTS.filter(a => !stage3.includes(a)).map(a => a[0]),
    stage2_new: stage2.filter(a => !stage1.includes(a)).map(a => a[0] + '=' + a[2]),
    stage3_new: stage3.filter(a => !stage2.includes(a)).map(a => a[0] + '=' + a[2])
  },
  '6.3': (() => {
    const L = FILES['logs/vpn_auth.log'].trim().split('\n');
    const fails = L.filter(l => l.includes('result=FAIL'));
    const distinctBySrc = top(tally([...new Set(fails.map(l => (l.match(/user=\S+ src=\S+/) || [])[0]))].map(s => s.split(' ')[1])));
    return {
      lines: L.length,
      fails: fails.length,
      success: L.filter(l => l.includes('result=SUCCESS')).length,
      distinct_fail_users_by_src_top3: distinctBySrc.slice(0, 3),
      spray_ip_all_users: new Set(L.filter(l => l.includes('src=' + SPRAY_IP) && l.includes('vpn-auth')).map(l => l.match(/user=(\S+)/)[1])).size,
      spray_hit: sprayHit,
      fails_by_user_top3: top(tally(fails.map(l => l.match(/user=(\S+)/)[1]))).slice(0, 3),
      locked_lines: L.filter(l => l.includes('result=LOCKED')),
      bad_pw_before_lock: L.filter(l => l.includes('src=192.0.2.77') && l.includes('reason=bad_password')).length,
      unknown_user_fails: fails.filter(l => l.includes('unknown_user')).length,
      unknown_user_srcs: new Set(fails.filter(l => l.includes('unknown_user')).map(l => l.match(/src=(\S+)/)[1])).size,
      account_locked_fails: fails.filter(l => l.includes('account_locked')).length
    };
  })(),
  '6.7': {
    recipients: recips.length, delivered: delivered.length, quarantined: quarantined.length,
    clickers, submitters, victim, victimIn, second,
    allowed_gets: WEB.filter(w => w[1].includes('host=cedarcreek-it.com') && w[1].includes('method=GET') && w[1].includes('action=allowed')).length,
    posts: WEB.filter(w => w[1].includes('host=cedarcreek-it.com') && w[1].includes('method=POST')).length,
    blocked: WEB.filter(w => w[1].includes('action=blocked')).map(w => w[1]),
    attacker_signins: SIGN.filter(s => s[1].includes('203.0.113.77')).length,
    audit_attacker_lines: AUD.filter(a => a[1].includes('203.0.113.77')).length,
    audit_downloads: AUD.filter(a => a[1].includes('203.0.113.77') && a[1].includes('FileDownloaded')).length,
    audit_rule: AUD.filter(a => a[1].includes('New-InboxRule')).map(a => a[1]),
    mt_lines: MT.length + 1, web_lines: WEB.length, sign_lines: SIGN.length + 1
  },
  '6.5': {
    seed,
    wc_l: rows.length + 1,
    sent: rows.length,
    opened: rows.filter(r => r.opened).length,
    clicked: clicked.length,
    click_rate_pct: pct(clicked.length, rows.length),
    submitted: rows.filter(r => r.submitted).length,
    reported: rows.filter(r => r.reported).length,
    report_rate_pct: pct(rows.filter(r => r.reported).length, rows.length),
    clicks_by_dept: top(tally(clicked.map(r => r.dept))),
    fastest_reports: rows.filter(r => r.reported).sort((a, b) => a.mins - b.mins).slice(0, 3).map(r => r.mins + ' ' + r.email),
    trained: tr.length, trained_clicked: tr.filter(r => r.clicked).length, trained_rate_pct: pct(tr.filter(r => r.clicked).length, tr.length),
    untrained: un.length, untrained_clicked: un.filter(r => r.clicked).length, untrained_rate_pct: pct(un.filter(r => r.clicked).length, un.length),
    by_building: ['office', 'plant'].map(b => { const g = rows.filter(r => r.bld === b); return b + ' ' + g.filter(r => r.clicked).length + '/' + g.length; }),
    training_completion_pct: pct(tr.length, rows.length)
  }
};
console.log(JSON.stringify(out, null, 2));
