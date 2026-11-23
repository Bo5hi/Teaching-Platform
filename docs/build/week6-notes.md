# Week 6 build notes: Human Factors

Built 2026-11-23. Not committed.

## Files
| File | What |
|---|---|
| `docs/build/week6.js` | Week plan (`COURSE_STAGING[6]`), 21 blocks |
| `course-w6-lessons.js` | Lessons 6.1-6.6 and `COURSE_QUIZ.w6` (20 questions) |
| `course-w6-labs.js` | Labs 6.1-6.7 |
| `course-w6-practice.js` | `attacks-w6` (sort, 24 items), `acro-w6a`, `acro-w6b` (20 each) |
| `course-w6-figures.js` | 10 diagrams (generated) |
| `docs/tools/make_week6_pack.js` | Builds `assets/cedarcreek/week6/` and `cc-week6.zip`; prints every auto-check answer |
| `docs/tools/make_week6_figures.js` | Builds `course-w6-figures.js` (Week 1 palette and helpers) |
| `assets/cedarcreek/week6/`, `assets/cedarcreek/cc-week6.zip` | Lab pack: 18 files |

No mock project and no `mock` key this week, as Joey decided. The labs carry the hands-on work.

Rebuild: `node docs/tools/make_week6_pack.js` and `node docs/tools/make_week6_figures.js course-w6-figures.js`.

## Day plan (minutes = estimator output)
**Day 1: Social engineering, phishing, and password attacks** (253)
Lesson 6.1 (15), Phishing Spotter tool (15), Lesson 6.2 (15), Lab 6.1 headers (45), Lesson 6.3 (15), Lab 6.2 John the Ripper (60), Lab 6.3 VPN spraying (40), Lesson 6.4 (15), Lab 6.4 password policy (15), Attack Identifier (15), daily survey (3).

**Day 2: Zero Trust, awareness, and SolarWinds** (230)
Lesson 6.5 (15), Lab 6.5 Zero Trust decisions (20), Lesson 6.6 (15), Lab 6.6 phishing simulation (35), Lab 6.7 phish follow-up (40), NIST CSF tool (15), AA20-352A read (10), Project 6 (60), quiz (15), weekly check-in (5).

The `basis` arithmetic for the tool and read blocks is in `week6.js`. I measured the NIST CSF Function Breakdown tab at 1,073 words. The AA20-352A sections I assigned come to about 1,040 words: Summary and Key Takeaways about 420, Overview about 100, Initial Infection Vectors about 520.

Block id `w6d1-b11` (Lab 6.3) and `w6d2-b8` (Lab 6.7) were added after the first estimate, so they are not in numeric order. Ids are permanent, so I left them as they are.

## Absorbed from the original Hub
- **Legacy `weeks-data.js` week 6**
  - All 6 objectives and objectiveDetails:
    - Social engineering types: Lesson 6.1.
    - Password attacks: Lesson 6.3.
    - Entropy: Lesson 6.4. The 37.6-bit and 78.8-bit examples, the pool sizes, and passphrases are kept.
    - Zero Trust and its 3 pillars plus MFA everywhere: Lesson 6.5.
    - Least privilege, JIT, access reviews, service accounts, and separation of duties: Lesson 6.5.
    - Phishing Spotter red flags: Lesson 6.2 and the tool block.
  - All 10 concepts appear in the lessons. All 10 quiz questions were rewritten into the Week 6 quiz, except evil twin (see below).
  - Labs:
    - HIBP check and Password Checker 5 strategies: Lab 6.4.
    - Phishing Spotter: Day 1 tool block.
    - "Zero Trust vs SolarWinds": Lab 6.5 r8.
    - "HR employee and payroll least privilege": Lab 6.5 r6.
  - The resources (TryHackMe, HIBP, Google quiz, KnowBe4) are not linked. See "Dropped" below.
- **Academy module 4 (Human Factors)**
  - Overview, objectives, both concept tables (8 social engineering attacks and 5 password attacks with their defenses), and activities are covered.
  - The assessment ("Attack ID", 8 scenarios) became the 24-item Attack Identifier sort.
  - The "list every red flag" assessment is covered by Lab 6.1.
- **Academy quiz bank**: the Social Engineering items, plus the lockout, salt, and password-manager items, were rewritten into the lesson checks and the quiz.
- **`week-tasks.js` week 6**
  - Study content and the Week 6 quiz: lessons and `COURSE_QUIZ.w6`.
  - Acronym drill: `acro-w6a/b`, drawn from the Student Platform drill list. I avoided Week 1 duplicates.
  - Lab activity: Labs 6.1-6.7.
  - Curriculum module 4: the lessons.
  - Quiz: Social Engineering: merged into the quiz.
  - Phishing Spotter, Project 6, the NIST CSF tool, and AA20-352A: blocks on Day 1 and Day 2.

### Dropped or changed (and why)
- **Legacy facts I could not confirm as written:**
  - The legacy USB drop example ("297 drives in corporate parking lots, 98 plugged in") mixes up the University of Illinois 2016 campus study. It is restated cautiously: about 300 drives, files opened on nearly half.
  - The legacy claim that Colonial Pipeline was "classic credential stuffing" is restated as reported: a legacy VPN account without MFA, whose password was reportedly found in leaked password data.
  - The Academy's "91% of attacks start with phishing" and "$43B BEC losses" figures are omitted. I am not sure of them.
- **Evil twin quiz question:** dropped from the quiz. It is a wireless attack covered in Week 4. Evil twin is still defined in Lesson 6.1.
- **External practice links** (TryHackMe phishing room, Google Phishing Quiz, KnowBe4): not linked, because the platform now carries the teaching. They could go in Resources if Joey wants them.

## Real-world callouts
Target and HVAC phishing (Krebs 2014, phrased "reportedly") appears in 6.1. The other cases:
- 6.2: Ubiquiti BEC loss ("tens of millions", from its SEC filing).
- 6.3:
  - SolarWinds update-server password left in a public GitHub repo, reported in 2019. The callout says news reports gave it as "solarwinds123", and that nobody has shown it was the 2020 entry point.
  - Colonial Pipeline legacy VPN without MFA (CEO Senate testimony, June 2021).
- 6.4: RockYou 2009, about 32 million plaintext passwords.
- 6.5: Target vendor access, and SolarWinds through a Zero Trust lens.
- 6.6: Twitter July 2020 "phone spear phishing".

## New Cedar Creek facts (please merge into `docs/CEDAR_CREEK.md`)
**Scenario dates.** These dates and the timeline are my choice. Weeks 2-5 may set their own.
- Week 6 events fall on 2026-12-10 to 2026-12-18.
- Password audit authorized 2026-12-14 by Greg Palmer and Marcus Reyes, running Dec 15-18. Forced resets of cracked accounts are scheduled for Mon 2027-01-04, after the year-end change freeze (changed in the consistency pass so Week 8 stays consistent).

**Email and DNS**
- DMARC: `_dmarc.cedarcreek-ind.com` is `p=none` (a finding). SPF is `include:spf.protection.outlook.com -all`.
- `cedarcreek-ind.com` was registered 2001-05-22.
- `cedarcreek-lnd.com` (PAPERWIRE) was registered 2026-08-12. Its SPF allows 192.0.2.99.
- Look-alike domain `cedarcreek-it.com`: registered 2026-12-09, sending server 203.0.113.77 (an IRONLATCH address from the Week 5 ISAC list; Lab 6.7 now points this out in a tip).
- Phishing simulation lure domain: `cedarcreek-benefits.com`.

**Reported emails** (Lab 6.1, `email/`)
- report-01: credential phish to Kevin Tran, Thu Dec 10 08:02. Kevin did not click.
- report-02: PAPERWIRE BEC to Amanda Singh, Fri Dec 11. It asks to change **Ozark Steel Supply**'s bank details. It came from vps42.fastcloudhost.net (192.0.2.99). Amanda verified by phone.
- report-03: a legitimate W-2 notice reported by Walt Henley.

**Vendors and customers**
- Payroll provider: **Tallgrass Payroll** (`tallgrasspayroll.com`, Kansas, DMARC p=reject, sending range 198.51.100.176/28, portal app.tallgrasspayroll.com). W-2s are ready by 2027-01-25.
- Vendor **Ozark Steel Supply** (`ozarksteelsupply.com`).
- Customer folders: **Harlan Equipment**, **Prairie Ag**, and **Tri-County Hydraulics**. Part numbers HE-4410, PA-220, TCH-90, and bracket 7731.

**Active Directory accounts** (DC01 export of 25 accounts, pwdump format: every privileged, shared and service account plus a sample of staff; Week 3 has the full directory of 73)
- Accounts and RIDs:
  - Administrator 500, krbtgt 502
  - Shared and service accounts: ccadmin 1104, operator 1105, svc-backup 1106, vendor.cad 1107
  - Named staff: m.reyes 1110, d.ortiz 1111, j.pike 1112, g.palmer 1120, amanda.singh 1121, d.reyes 1122, r.medina 1130, t.becker 1140, p.nair 1141, b.kessler 1142, l.kim 1150, k.tran 1151, m.alvarez 1160, g.lindqvist 1170, r.doyle 1171, n.brooks 1180, w.henley 1190, s.pruitt 1191, t.garza 1192
- The help desk's default new-hire password is Welcome1. Three people never changed it: m.alvarez, r.doyle, n.brooks.
- Cracked: 16 of 25. The passwords live only in the generator.
- **b.kessler is still enabled in December** and its password is Fall2025!. Canon: HR asked IT on 11-30 to keep the account for a legal hold; Dee disables it Mon 12-14 after Lab 6.3 (tip in Lab 6.3).

**VPN** (Lab 6.3)
- The export is the CC-LEGACY profile only (domain password alone, no MFA, open to any VPN-Users member); CC-REMOTE sign-ins are in a separate log. The VPN accepts a username or an email address.
- Lockout: 10 failures locks an account for 30 minutes.
- Home IPs (Week 3 canon): d.ortiz 203.0.113.38, m.reyes 192.0.2.244, j.pike 203.0.113.11, t.becker 192.0.2.118, p.nair 203.0.113.47, g.palmer 192.0.2.41, l.kim 192.0.2.78, w.henley 192.0.2.216; r.medina 198.51.100.129 and amanda.singh 198.51.100.150 (added to VPN-Users 2026-12-01).
- Weekend of Dec 11-13, three attacks:
  - Password spraying from 203.0.113.200: 21 accounts tried. It **got into b.kessler on Sat 2026-12-12 at 02:37:09**, and the session lasted 47 minutes.
  - Brute force from 192.0.2.77 locked out m.reyes on Sun at 14:03. Marcus was locked out at 19:12.
  - Credential stuffing from 192.0.2.150-157.

**Phish follow-up** (Lab 6.7)
- FW-CORE has a web filter log with user names. Office PCs use the canon department subnets (10.20.6/8/10/12/30.x, host part 100-199).
- Jordan blocked cedarcreek-it.com at 10:15 on Dec 10.
- report-01 went to 31 mailboxes: 27 delivered and 4 quarantined.
- 5 users clicked: g.rankin, y.upton, f.hester, u.beckett, n.nolan (Week 3 directory people; were e.baker, r.thompson, m.evans, d.stewart, o.allen before the consistency pass).
- 2 submitted the form: g.rankin and y.upton.
- **g.rankin (Grant Rankin, Engineering) was compromised by MFA fatigue at 08:19:55:**
  - Three pushes denied, then one approved.
  - The attacker added an inbox rule forwarding to `gr.archive@freemail-box.net`.
  - The attacker downloaded 7 customer drawings and specs from the Engineering SharePoint.
- y.upton (Yolanda Upton, Purchasing) denied both pushes.
- Microsoft 365 uses push MFA for office users. Checked against Week 3 in the consistency pass: no conflict.

**Phishing simulation** (Lab 6.6)
- Sent Wed 2026-12-16 09:00 to 114 mailboxes.
- Results: 12 clicked (11%), 4 submitted, 32 reported. The fastest report was g.lindqvist at 3 minutes.
- Training completion among mailbox holders is 69%. The canon 61% covers all 310 staff.
- g.rankin clicked again.
- The other ~90 mailbox names, such as k.bailey, are generated background names. Like the Week 1 badge log, they are not canon people.

## Changes needed in shared files
1. **`course-data.js`:** replace `{ num: 6, title: 'Human Factors', legacy: 6 }` with the staged week. Add a `caseStudy` field: `week6.js` has one.
2. **`MCCoE_Home.html` My Work:** a week with no `mock` shows "Not started" in the Mock project column. It should show a dash when `w.mock` is missing.
3. **`Lab.html`:** steps support only `body`, `cmd`, `expect`, and `tip`; `expect` and `tip` are escaped plain text. I wrote around this. A `list` field for steps would help.
4. **`docs/tools/estimate_time.js`:** `practice()` checks `p.mode === 'flash'`, but practice sets use `kind: 'flash'`. Flash sets are therefore timed at the sort rate. This does not affect Week 6's day totals, because the acronym sets are "anytime".
5. **`docs/CEDAR_CREEK.md`:** merge the facts above.

## Problems and cautions
- `wget` of `cc-week6.zip` only works once the zip is live on GitHub Pages, as in Week 1.
- John commands were written for current Kali John jumbo:
  - `--format=NT`, `--mask`, `--show=left`, `--test=5`, and the `~/.john/john.pot` path.
  - I verified the hashes with an MD4 self-test, but I could not run John here. Please run Lab 6.2 once in Kali before class.
  - Watch especially the `--show` counts (9, 14, 16) and that the rockyou `--rules` run cracks nothing new.
- The season loop uses `printf '%s%s!\n'` in single quotes so `!` is safe in zsh, Kali's default shell.
- The awk rate output truncates (`%d`), so untrained shows 25% where rounding gives 26%. The checkpoint accepts both.
- Lesson 6.1 is 1,811 words including its check, just over the 1,800 guideline.
- The lesson checks do not shuffle their options, so I rebalanced the answer positions across A-D. The quiz shuffles its options itself.

## Consistency pass (2026-11-23)
Changed to match docs/CEDAR_CREEK.md: svc_backup/svc_cad -> svc-backup/vendor.cad (spray order unchanged); authorization says 25 accounts and resets on 2027-01-04; VPN home IPs from Week 3; CC-LEGACY wording; PAPERWIRE VPS 192.0.2.45 -> 192.0.2.99; the five Lab 6.7 clickers renamed to Week 3 directory people (mapped after generation, so every count is unchanged); web-log office IPs follow the department subnets; Lab 6.5 Request 7 is now Tom Becker's domain admin rights (Greg is not a Domain Admin in Week 3); Lesson 6.5 intro uses Greg's server room badge instead; Lab 6.3 tip on why b.kessler was still enabled; Lab 6.7 tip that 203.0.113.77 is an IRONLATCH address. Changed auto answers: 6.1 c7 192.0.2.99; 6.7 c5/c12 g.rankin, c9 y.upton, c10 gr.archive@freemail-box.net. Minutes unchanged.
