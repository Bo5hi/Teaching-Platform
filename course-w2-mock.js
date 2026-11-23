// Week 2 mock project: Mock Secure File Exchange at Cedar Creek Industries.
// Scenario facts: docs/CEDAR_CREEK.md plus the Week 2 additions in docs/build/week2-notes.md.
// Files, hashes, keys and certificates come from the lab pack (docs/tools/make_week2_pack.js prints every value in `key`).
// `key` is the instructor answer key (read by the tracker to help grade); `rubricNotes` tell the grader what full marks look like.
window.MOCK_W2 = {
  id: 'w2',
  title: 'Mock Secure File Exchange',

  brief: [
    'Halvorsen Pump will only accept drawings sent under its new Supplier Data Exchange rules (SDX-2) from December 1. Priya Nair has Rev C of drawing CCD-3318 ready, and it will be the first package to go out the new way. Before anything leaves the building, I want you to prove the package is exactly what Tom released, make sure we are using Halvorsen\'s real key and real portal, and do a trial run of encrypting and signing it.',
    'Then write the procedure Priya and the other engineers will follow every time, plus a short note to Tom and me on anything you found. Everything is in exchange/ in your Week 2 lab pack. The memos folder has Halvorsen\'s rules and Priya\'s honest description of how we send drawings today.'
  ],

  // Part 1 (Day 1): sections 1-3. Part 2 (Day 2): sections 4-6.
  files: ['CCD-3318-C_inspection_plan.csv', 'CCD-3318-C_model.step', 'CCD-3318-C_sheet1.pdf', 'CCD-3318-C_sheet2.pdf'],

  sdx: [
    { id: 'x1', rule: '1. Integrity', text: 'A SHA-256 manifest with every package. MD5 and SHA-1 not accepted.' },
    { id: 'x2', rule: '2. Confidentiality', text: 'OpenPGP encryption to the Halvorsen Supplier Data public key. No password-protected zips. Never send a password or key in the same message.' },
    { id: 'x3', rule: '3. Origin', text: 'Signed with the sending engineer\'s registered OpenPGP key.' },
    { id: 'x4', rule: '4. Transport', text: 'Upload only to https://supplier.halvorsen-pump.com after checking its certificate. The FTP site is retired.' },
    { id: 'x5', rule: '5. Key verification', text: 'Confirm Halvorsen\'s key fingerprint by phone, using the number in the supply contract. Halvorsen never sends a key by email alone.' }
  ],

  tools: ['Hashing (SHA-256 manifest)', 'Symmetric encryption (AES)', 'Asymmetric encryption (recipient\'s public key)', 'Digital signature (sender\'s private key)', 'Certificate check (TLS / PKI)', 'Fingerprint check by phone (out of band)', 'Password-protected zip', 'Tokenization', 'Steganography'],
  requirements: [
    { id: 'r1', text: 'Only Halvorsen can read the drawings, even if the upload is intercepted or sent to the wrong place.' },
    { id: 'r2', text: 'Halvorsen can tell whether any file changed after Tom released it.' },
    { id: 'r3', text: 'Halvorsen can prove the package came from our engineer, and the engineer cannot deny sending it.' },
    { id: 'r4', text: 'Priya uploads to Halvorsen\'s real portal, not a look-alike site.' },
    { id: 'r5', text: 'We encrypt to Halvorsen\'s real public key, not an attacker\'s key with the same name.' },
    { id: 'r6', text: 'Drawings waiting in \\\\ENG-FS01\\Transfer stay unreadable if the server\'s disks are stolen.' }
  ],

  keyFiles: [
    { id: 'k1', file: 'keys/halvorsen_supplier_data.asc', note: 'Saved by Tom from the supplier portal' },
    { id: 'k2', file: 'keys/halvorsen_key_from_email.asc', note: 'Attached to Friday\'s urgent email to Priya' }
  ],
  certFiles: [
    { id: 'c1', file: 'certs/supplier_portal.pem', note: 'Presented by supplier.halvorsen-pump.com' },
    { id: 'c2', file: 'certs/old_ftp_portal.pem', note: 'Presented by Halvorsen\'s old FTP site' },
    { id: 'c3', file: 'certs/portal_cert_from_email.pem', note: 'Attached to Friday\'s urgent email' }
  ],
  verifyResults: ['OK', 'error 10: certificate has expired', 'error 18: self-signed certificate', 'error 20: unable to get local issuer certificate', 'Other error'],

  // Commands shown in section 5 (trial run). Tested with GnuPG 2.4 and tar on Linux.
  trialCmds: [
    'mkdir -p ~/labs/work/mock && cd ~/labs/work/mock',
    'cp -r ~/labs/cedarcreek-week2/exchange/release/CCD-3318_RevC .',
    'tar -czf CCD-3318_RevC_trial.tar.gz CCD-3318_RevC',
    'sha256sum CCD-3318_RevC_trial.tar.gz',
    'gpg --import ~/labs/cedarcreek-week2/exchange/keys/halvorsen_supplier_data.asc',
    'gpg --fingerprint supplier-data@halvorsen-pump.com',
    'gpg --quick-lsign-key VERIFIED_FINGERPRINT',
    'gpg --sign --encrypt --armor --recipient VERIFIED_FINGERPRINT --output CCD-3318_RevC_trial.tar.gz.asc CCD-3318_RevC_trial.tar.gz',
    'gpg --list-packets CCD-3318_RevC_trial.tar.gz.asc'
  ],

  key: {
    files: {
      'CCD-3318-C_inspection_plan.csv': { manifest: '1dfd8d3f4e08caf3e8300d2260dff2da4afcc10876560b761fa3031e266a4336', actual: '1dfd8d3f4e08caf3e8300d2260dff2da4afcc10876560b761fa3031e266a4336', status: 'OK' },
      'CCD-3318-C_model.step': { manifest: 'c33bf8b65e3d622a924e5e61856d1a2087d14b57404fa72d7458ed82aefb3173', actual: 'c33bf8b65e3d622a924e5e61856d1a2087d14b57404fa72d7458ed82aefb3173', status: 'OK' },
      'CCD-3318-C_sheet1.pdf': { manifest: '1646f601dd71139e8c296898508e75855a6738e7550abb27c517b7ad919b1486', actual: '1646f601dd71139e8c296898508e75855a6738e7550abb27c517b7ad919b1486', status: 'OK' },
      'CCD-3318-C_sheet2.pdf': { manifest: 'b74e0a4cee481cfa759cf972f719da2ba5bcd130e8f5fad07dd950736cfe99a1', actual: 'f6f7b4d70bfe8c6f82091396931a87ecd86c585b0177330c2ecbf9e287a94164', status: 'FAILED' }
    },
    sheet2Change: 'Detail A slot width reads 12.50 mm in the transfer copy; the released sheet said 12.00 mm. The inspection plan (A3) still says 12.00, which supports the release.',
    manifestSig: 'Good signature from Tom Becker (key 0410 6E25 3563 878E 675A  EFFE 6D11 6115 3BF1 DF87), made Thu Nov 12 2026 10:30 CST. The manifest is genuine, so sheet 2 changed after release.',
    sdx: {
      x1: 'Not met today: no hashes at all, and nobody checks the transfer folder against Tom\'s release. Fix: SHA-256 manifest at release, signed by Tom; sha256sum -c before every send.',
      x2: 'Not met: password-protected zip, guessable password (customer name + year) in the same email; personal Dropbox links. Fix: gpg encrypt to Halvorsen\'s verified key; no passwords in email; no personal file-sharing accounts.',
      x3: 'Not met: nothing is signed and engineers have no keys. Fix: each sending engineer gets a gpg key (1-year expiry), registered with Halvorsen; sign every package.',
      x4: 'Not met: email, Dropbox, and the retired FTP site are all used. Fix: upload only to supplier.halvorsen-pump.com after checking its certificate; stop using FTP.',
      x5: 'Partly met: Tom confirmed the real key by phone on 11-12, but there is no written rule, and Priya received a fake key by email on 11-13. Fix: fingerprint confirmed by phone and recorded on the Engineering key list; never accept keys by email.'
    },
    methods: {
      r1: ['Asymmetric encryption (recipient\'s public key)'],
      r2: ['Hashing (SHA-256 manifest)'],
      r3: ['Digital signature (sender\'s private key)'],
      r4: ['Certificate check (TLS / PKI)'],
      r5: ['Fingerprint check by phone (out of band)'],
      r6: ['Symmetric encryption (AES)']
    },
    keys: {
      k1: { fpr: '79EB 39A3 C109 216D 82B9  499E C5A6 BCBA 55F1 E01B', matchesPhone: 'Yes', use: 'Use', encSubkey: '25E3EA95BB57E6BE', why: 'Fingerprint matches what Erik Lund read to Tom by phone (number from the supply contract). Created 2025-01-20.' },
      k2: { fpr: '7D30 B943 FD12 AE98 3336  9A93 B5A8 6ECF 8A07 CEA0', matchesPhone: 'No', use: 'Do not use', encSubkey: '19A93FC7892D8BDE', why: 'Same name, different fingerprint; created 2026-11-13, the day of the email; came by email from the look-alike domain halvorsen-pumps.com, which SDX-2 says Halvorsen never does. Report it as phishing.' }
    },
    certs: {
      c1: { cn: 'supplier.halvorsen-pump.com', issuer: 'Meridian Trust TLS CA 1', notAfter: '2028-09-01', verify: 'OK', trust: 'Trust', why: 'Chains to Meridian Trust Root CA (verify needs -untrusted meridian_trust_tls_ca1.pem), in date, SAN matches the SDX-2 portal name. Has CRL and OCSP locations.' },
      c2: { cn: 'ftp.halvorsen-pump.com', issuer: 'Meridian Trust TLS CA 1', notAfter: '2026-06-30', verify: 'error 10: certificate has expired', trust: 'Do not trust', why: 'Expired 2026-06-30, and SDX-2 says the FTP site is retired. Stop using it.' },
      c3: { cn: 'supplier.halvorsen-pump.com', issuer: 'supplier.halvorsen-pump.com (self-signed)', notAfter: '2027-11-10', verify: 'error 18: self-signed certificate', trust: 'Do not trust', why: 'Self-signed, so no CA vouches for it; its SAN is supplier-halvorsen-pump.com (hyphen), the look-alike site in the email. Installing it would make the fake site look trusted. Do not install; report.' }
    },
    trial: 'Package encrypted to the verified key: gpg --list-packets shows "encrypted with cv25519 key, ID 25E3EA95BB57E6BE" and "Halvorsen Pump Supplier Data", then "decryption failed: No secret key" (expected: only Halvorsen can decrypt). If it shows 19A93FC7892D8BDE, the student encrypted to the fake key. The recipient must be the fingerprint, because two keys share the same name. Best answers note that a real send must wait for a corrected sheet 2.',
    findings: [
      'Sheet 2 fails the signed manifest: do not send; Tom must check the transfer copy (slot width 12.50 vs 12.00) and re-release or restore the released file.',
      'Friday\'s email is phishing: look-alike domain halvorsen-pumps.com, fake key (fingerprint mismatch), self-signed certificate for a look-alike site, urgency. Report it; do not use the key or certificate; warn other engineers.',
      'The old FTP site\'s certificate expired 2026-06-30 and the site is retired: stop using it.',
      'Today\'s zip-and-email practice and personal Dropbox links break SDX-2 and leak the key with the data.'
    ],
    procedure: [
      'Get the release from Tom with its signed manifest; verify the manifest signature (gpg --verify) and the files (sha256sum -c). Stop on any FAILED or BAD.',
      'Package the files (tar) and keep the manifest with them.',
      'Encrypt to Halvorsen\'s key by its verified fingerprint, and sign with your own registered key (gpg --sign --encrypt).',
      'Check the portal certificate (valid, issued to supplier.halvorsen-pump.com, chains to a trusted CA) and upload only there. No email, Dropbox, or FTP.',
      'Never send passwords or keys in email; never accept a new key by email; confirm any key change by phone using the contract number.',
      'Record what was sent, when, and its hash; report anything suspicious to IT.'
    ]
  },

  rubricNotes: [
    'Full marks: the four SHA-256 values match the pack, sheet 2 is marked FAILED (the others OK), and the manifest signature is recorded as a Good signature from Tom, with the reasoning that the manifest is genuine so the file changed after release.',
    'Full marks: every SDX-2 rule compared with today\'s practice (Priya\'s memo). Rules 1-4 not met, rule 5 partly met; each gap has a practical fix that matches the rule.',
    'Full marks: r1 asymmetric, r2 hashing, r3 digital signature, r4 certificate check, r5 fingerprint by phone, r6 symmetric (encryption at rest), each with a reason that shows understanding (not just the tool name). Accept hybrid encryption for r1 if explained.',
    'Full marks: real key used (fingerprint matches the phone note), fake key rejected with reasons; portal certificate trusted, FTP certificate rejected as expired, emailed certificate rejected as self-signed and for a look-alike name; trial output shows encryption to subkey 25E3EA95BB57E6BE.',
    'Full marks: findings name the sheet 2 mismatch (do not send), the phishing email and fake key, and the retired FTP site; the procedure is ordered, uses the commands or plain steps an engineer can follow, and covers verify, encrypt to the verified key, sign, check the certificate, upload, and never sending keys or passwords by email.'
  ],

  rubric: [
    ['Release integrity', 'Correct SHA-256 for every file, the changed file found, and the manifest signature checked'],
    ['Gap check against SDX-2', 'Today\'s practice compared with each Halvorsen rule, with a practical fix for every gap'],
    ['Right tool for each job', 'The correct cryptographic tool for each requirement, with a reason that shows why'],
    ['Trust decisions and trial run', 'Real key and real portal certificate accepted, fake and expired ones rejected with reasons, and the trial package encrypted to the verified key and signed'],
    ['Findings and procedure', 'Clear findings for Tom and Marcus, and a step-by-step procedure an engineer could follow every time']
  ]
};
