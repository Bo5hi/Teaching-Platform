# Week 2 build notes: Cryptography and PKI

Built 2026-11-23 against `docs/build/BRIEF.md`. Nothing committed.

## Files written
| File | What |
|---|---|
| `docs/build/week2.js` | Week plan (`COURSE_STAGING[2]`), 18 blocks, mock rubric |
| `course-w2-lessons.js` | Lessons 2.1-2.4 (1,460-1,570 words each, 5-question checks) + `COURSE_QUIZ.w2` (20 questions) |
| `course-w2-labs.js` | Labs 2.1-2.5 (Kali) |
| `course-w2-practice.js` | `crypto-w2` (24-item sort), `acro-w2a` (20), `acro-w2b` (22) |
| `course-w2-figures.js` | 7 diagrams, generated |
| `course-w2-mock.js` | `window.MOCK_W2`: data, answer `key`, `rubricNotes`, `rubric` |
| `Mock_Secure_File_Exchange.html` | Mock page (identity, autosave, preview mode, submit flow copied from `Mock_Control_Audit.html`) |
| `docs/tools/make_week2_pack.js` | Builds `assets/cedarcreek/week2/` + `cc-week2.zip` (52 files, 62 KB) and prints every answer |
| `docs/tools/make_week2_pack_keys.js` | Fixed key material so the pack rebuilds byte-for-byte (see below) |
| `docs/tools/make_week2_figures.js` | `node docs/tools/make_week2_figures.js course-w2-figures.js` |
| `assets/cedarcreek/week2/`, `assets/cedarcreek/cc-week2.zip` | Lab pack |

## Day plan (estimator, `node docs/tools/estimate_time.js 2`)
**Day 1 (233 min, 3.9 h):** L2.1 Encryption 15 · Lab 2.1 OpenSSL enc 40 · L2.2 Hashing/salting/signatures 15 · Lab 2.2 Hashing 45 · PBQ 2 MD5 hash 10 · Lab 2.3 GnuPG 40 · Crypto Tool Sorter 15 · Mock part 1 50 · Daily survey 3

**Day 2 (260 min, 4.3 h):** L2.3 PKI 15 · Lab 2.4 Certificates 35 · PBQ 9 CA 10 · L2.4 Key management and data 15 · Lab 2.5 Hide, mask, chain 35 · Mock part 2 60 (due end of Day 2) · Krebs read 10 · Project 2 60 (due start of Week 3) · Week 2 Quiz 15 · Weekly check-in 5

`basis` arithmetic is on the PBQ, read, and both mock blocks. Block ids: `w2d1-b1..b9`, `w2d2-b1..b7`, `w2d2-b9`, `w2d2-r1`, `w2d2-p1`. The mock page marks `w2d1-b8` (Finish part 1) and `w2d2-b5` (submit).

Real-world callouts (`kind:'real'`): DES brute force, EFF 1998 (2.1); SHA-1 collision, Google/CWI 2017 (2.2); SolarWinds validly signed update (2.2); Equifax expired certificate on its traffic-inspection device (2.3); Target card data taken from register memory before encryption (2.4). I left out details I was not sure of, such as how long the Equifax certificate had been expired.

## How the pack was verified
Every auto-check answer in the labs and every value in the mock `key` was compared with the generator's printed output (all matched). The unzipped pack was also run through real OpenSSL 3.2, GnuPG 2.4.5 and coreutils:
- `openssl enc -d` decrypts the backup plan, and a wrong password gives `bad decrypt`.
- `sha256sum -c` gives OK/FAILED as intended.
- `gpg --verify` gives Good/BAD as intended, and `--quick-lsign-key` makes the result `[full]`.
- `openssl verify` gives OK, error 10 (expired) and error 18 (self-signed).
- `python3 -m zipfile -l` finds the hidden file.
- The trial `gpg --sign --encrypt` with `--list-packets` works.

Both generators were run twice and gave byte-identical output. Lesson 2.3 and the mock page were screenshot with headless Edge from localhost:8080, and both render.

**Fixed key material** (`make_week2_pack_keys.js`):
- RSA keys made once with node.
- GPG keys and signatures made once with GnuPG 2.4.5, using `--faked-system-time` so the dates fit the story: Tom's key 2024-03-04, Halvorsen 2025-01-20, fake key 2026-11-13, ECN signed 2026-11-11, manifest signed 2026-11-12.
- `$6$` hashes from `openssl passwd -6`.
- One small JPEG.

To remake the signatures, run `make_week2_pack.js --sign-inputs <dir>`, sign the two files with Tom's key, and paste the results in. The GPG secret keys were not kept, so a content change to `ECN-0457.txt` or the release files means new keys and new fingerprints, and those flow into the labs and the mock key.

**Dates that will need a rebuild:** `intranet.pem` expires 2028-06-01 and `supplier_portal.pem` expires 2028-09-01. After those dates `openssl verify` will report them as expired.

## Absorbed from the original Hub
- **`weeks-data.js`:** there is no cryptography week. The crypto questions in the Security+ review lesson quizzes (around lines 2640-4890: symmetric/AES, hash purpose, signature verify key, salting, CA, CRL/OCSP, tokenization, DH, avalanche, wildcard, HSM, TPM, masking, IV, MD5 collisions, self-signed, key stretching, PFS, HMAC, key escrow) were rewritten into the Week 2 quiz and lesson checks. They stay in weeks 14-15 as review.
- **Legacy week 6** salting and rainbow-table material is covered in L2.2 and Lab 2.2. The Week 6 builder can keep it there as review.
- **CyberSec Academy:** there is no crypto curriculum module. All 10 quiz-bank "Cryptography" items are covered: symmetric, AES, HTTPS/TLS, hash, PKI, MD5 weakness, end-to-end encryption (L2.4, OpenPGP/S/MIME), signature, RSA, salt.
- **`week-tasks.js`:** the Hub's week 2 checklist (Network Fundamentals, Academy module 2, SOC sim) belongs to Week 4. From it, Week 2 takes only Project 2 and PBQ labs 2 and 9.
- **Acronyms:** 42 crypto acronyms from the Student Platform drill list.
- **Dropped:**
  - The Academy's "AES-256 is quantum-resistant for now" claim, because it is not established enough to teach.
  - Its "Colonial paid $4.4M" aside, which is off topic for this week.
  - The legacy "SSL" and "TLS" items, folded into one card each.

## New Cedar Creek facts (to merge into `docs/CEDAR_CREEK.md`)
**Week 2 dates:** Mon 2026-11-16 (Marcus's memo). ECN-0457 was approved Wed 11-11. CCD-3318 Rev C was released Thu 11-12 at 10:30. Tom's phone call to Halvorsen was Thu 11-12 at 2:40 PM. The phishing email was Fri 11-13.

**Customer:**
- **Halvorsen Pump Company** (Wisconsin). Reuses the ticket bank's "Halvorsen-Pump" customer.
- Domain `halvorsen-pump.com`, supplier portal `supplier.halvorsen-pump.com`, retired `ftp.halvorsen-pump.com`.
- Contact: Erik Lund, Supplier Quality Engineer.
- Rules: Supplier Data Exchange Requirements **SDX-2**, effective 2026-12-01.
- OpenPGP key "Halvorsen Pump Supplier Data <supplier-data@halvorsen-pump.com>", fingerprint `79EB 39A3 C109 216D 82B9 499E C5A6 BCBA 55F1 E01B`.
- Fictional public CA: "Meridian Trust Root CA" and "Meridian Trust TLS CA 1" (meridian-trust.example).

**Phishing:**
- Look-alike domain `halvorsen-pumps.com` sent Priya a fake key (fingerprint `7D30 B943 ... 8A07 CEA0`) and a self-signed certificate.
- The certificate's SAN is the look-alike site `supplier-halvorsen-pump.com`.

**Engineering:**
- Drawing numbers use the CCD-#### format: CCD-3318 (HV-310 pump mounting bracket, Rev B and Rev C) and CCD-2875 (hydraulic elbow fitting, Rev D). ECN-0457 changed the CCD-2875 bore tolerance from ±0.05 to ±0.02 mm.
- Transfer share: `\\ENG-FS01\Transfer`.
- Today's practice: zip password = customer name + year (e.g. Halvorsen2026), sent in the same email; personal Dropbox links; the old FTP site.
- Priya Nair is a Design Engineer.
- Tom's OpenPGP fingerprint is `0410 6E25 3563 878E 675A EFFE 6D11 6115 3BF1 DF87`, and it appears on an "Engineering key list" on Marcus's wall.

**PKI (consistent with the ticket bank's CedarCreek-Issuing-CA):**
- CedarCreek-Root-CA is kept offline and valid 2023-2043. CedarCreek-Issuing-CA is valid 2023-2033.
- `intranet.cedarcreek.local` has SANs intranet and wiki.cedarcreek.local.
- TIMECLOCK-01's web certificate (`timeclock01.cedarcreek.local`) expired 2025-07-01.
- NVR-01 still uses its factory self-signed certificate, CN 192.168.1.108.

**IT:**
- NVR-01 firmware 5.7.2: Jordan downloaded a vendor copy and a forum-mirror copy. The mirror copy is tampered.
- Retired parts-request portal (2019-2025) stored unsalted MD5. m.alvarez, g.lindqvist and r.doyle used Welcome1; k.tran and n.brooks used Summer2025!. The new supplier portal (2026) uses `$6$` hashes, and m.alvarez and g.lindqvist still use Welcome1.
- New names in password exports (all canon or ticket-bank people): r.doyle, d.reyes, t.garza, s.pruitt, j.pike, d.ortiz.

**Dee's draft offsite backup plan (2026-11-10):**
- Ozark Records Storage, Springfield MO, box 1142.
- Weekly Friday rotation starting 2027-01-08.
- Tapes AES-256 encrypted, with a sealed key copy in Marcus's safe.
- This is a plan only; the Week 1 gap stays true.

**Data and logs:**
- HR test export with fake 900-series SSNs; hire dates Priya 2026-08-24, Rosa 2011-04-18, Tom 2009-08-03, Walt 2004-02-09, Amanda 2019-06-10, Jordan 2022-01-17.
- Dee's prototype hash-chained release log, started 2026-09-14.

**Open story thread (optional):**
- Three things show the same change, CCD-3318 slot width 12.00 → 12.50 mm: sheet 2 in the transfer copy, release-log block 3 (Rev B), and drawing dimensions hidden in a picnic photo emailed out on Fri 11-13.
- No culprit is named. A later week or the tickets can pick it up or leave it.
- Check that it does not clash with the ticket-bank Halvorsen exfiltration ticket before using it.

## Needs a change in shared files (not done)
1. **`course-data.js`:** replace the week 2 stub with `COURSE_STAGING[2]`. Lesson/Lab/Practice/Quiz pages already work for week 2. Home and next-step buttons need the merge.
2. **`docs/tools/estimate_time.js`:** `practice()` checks `p.mode === 'flash'`, but the practice data uses `kind: 'flash'`, so flash sets are timed at the sort rate. Week 2 acronyms are in `anytime`, so they are not affected.
3. **Student Platform acronym list:** DES is listed as "Digital Encryption Standard"; it should be Data Encryption Standard.
4. **`course-w1-lessons.js` 1.0 table:** still says Weeks 4-5 mocks are "Firewall & Network Review" and "Vulnerability Triage", but they are now the Mock Pentest.
5. **Tracker:** grading for `mccoe_mockproj/{key}/w2`. Data is stored by index: `files.f0..f3`, `sdx.x1..x5`, `methods.r1..r6`, `keys.k1..k2`, `certs.c1..c3`, plus `manifestSig`, `evidence1`, `trialOut`, `findings`, `procedure`. The `key` and `rubricNotes` are in `MOCK_W2`.

## Problems and caveats
- Lab 2.1's `wget` only works once `cc-week2.zip` is live on GitHub Pages, the same as Week 1.
- Lab 2.4 depends on live `www.cisa.gov` and `expired.badssl.com`. Those checkpoints are pasted and read by the instructor; a tip covers the sites being down.
- The Krebs `read` time is an estimate of the article's length (about 1,000-1,200 words). I did not fetch the page.
- The Day 1 mock does not need Lesson 2.3 material. Section 4 (keys and certificates) is on Day 2, after Lab 2.4.
