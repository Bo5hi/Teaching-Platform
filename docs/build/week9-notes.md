# Week 9 build notes: SOC Operations, mock tickets

## Files
- `course-w9-lessons.js`: talks 9.1 to 9.4, plus `COURSE_QUIZ.w9` (10 questions, optional short quiz).
- `course-w9-practice.js`: `acro-w9a` (SOC and incidents) and `acro-w9b` (email, identity, evidence), 20 each, in `anytime`.
- `docs/build/week9.js`: the week plan.
- No labs, figures, mock page, or lab pack. The ticket board is the hands-on work.

## What the ticket bank really holds
The brief (and CLAUDE.md) say 15 tickets in 3 tiers. `TICKET_BANK` in `MCCoE_Student_Platform.html` now has **28 tickets in 4 tiers**:
- Easy (7): TCK-1001 to 1007
- Moderate (5): TCK-2001 to 2005
- Hard (13): TCK-3001 to 3005 (the 19 August chain) and TCK-4001 to 4008 (added later)
- Expert (3): TCK-5001, 5002, 5003 (large evidence sets, 300+ row logs, timeline work)

How the board works (what the talks teach): students see only tickets assigned to them in the tracker; status New / In Progress / Pending / Resolved / Closed; priority P1 to P4; work notes; each ticket has 2 to 10 evidence sources with a "How to read this log" box and a filter box. Resolving opens a close form: disposition (7 options) + Summary for Easy/Moderate, or Actions taken + Root cause + Recommendation for Hard/Expert. Submitting locks the ticket; the instructor can send it back. SLA (tracker `TK_SLA_HOURS`): P1 4 h, P2 8 h, P3 24 h, P4 72 h, measured from assignment time to `resolvedAt`, using the student's chosen priority. Pending does not pause the clock. Grading: 25 points, the 5-part `TK_RUBRIC`, which I copied into `mock.rubric`.

## Ticket plan (17 tickets in the week)
| Block | Tickets | Talk it follows | Minutes |
|---|---|---|---|
| D1 round 1, help desk | 1004, 1001, 1003 | 9.1 Triage, priority, SLAs | 70 |
| D1 round 2, sign-in alerts | 1005, 2001 | 9.2 Logs and notes | 50 |
| D1 round 3, access and data | 2003, 2005 | 9.2 | 45 |
| D1 round 4, network and endpoint | 2004, 1007 | 9.2 | 45 |
| D2 round 5, reported emails | 1002, 1006 | 9.3 Phishing | 55 |
| D2 round 6, malicious attachment | 2002 | 9.3 | 25 |
| D2 round 7 (P1) | 3003 BEC | 9.4 Escalation | 50 |
| D2 round 8 (P1) | 3001 ransomware (linked to 2002) | 9.4 | 45 |
| D2 round 9 (P1) | 3002 VPN password spray | 9.4 | 50 |

Day totals from the estimator: **Day 1 233 min, Day 2 260 min.**

**Stretch / not scheduled:** TCK-3004 (lateral movement, follows 3002) and TCK-3005 (exfiltration, follows 2005) are 85 min more and do not fit. They are listed in `anytime` as stretch tickets for fast students. TCK-4001 to 4008 (about 45-50 min each) and TCK-5001/5002/5003 (80, 120, 100 min) are not in the week at all. Suggestion: use them as early-finisher work in Week 9, or as optional practice during the capstone weeks.

**For Joey when running the week:** assign each round at the start of its block. The SLA clock starts at assignment, so assigning all three Day 2 P1 tickets at the start of the day would breach TCK-3002 (it would finish about 4.2 h after assignment). The block descriptions tell students this.

## Ticket time rates (new; please confirm)
COURSE_V2.md has no ticket rate, so I built one from the existing rates:
- Read all ticket text, log guides, and log cells at 140 wpm.
- One work note per evidence source, at the case-study short-answer rate: 3 min.
- Close-out: Easy/Moderate Summary = one long answer, 10 min. Hard/Expert Actions + Root cause + Recommendation = three long answers, 30 min.
- Priority + disposition picks: 2 x 0.75 min.

Results: Easy 20-30 min, Moderate 20-25, Hard 40-50, Expert 80-120. Every tool block's `basis` shows its arithmetic. The estimator does not know these rates. If you want it to measure ticket blocks, add a `ticket` estimate to `estimate_time.js` (a shared file, so I did not edit it). Last cohort needed an extra week here, so compare these numbers with the tracker's real resolve times (`resolvedAt` minus assignment time) after the cohort.

## Talks (each tied only to that day's tickets)
- 9.1 Triage, priority, and SLAs: board walkthrough, statuses, impact x urgency, the P1-P4 SLA table with examples that are not from the queue, dispositions, true/false positive/negative. Real-world: Target 2013 missed alerts.
- 9.2 Reading logs and writing ticket notes: the five questions every log row answers, log source to question table, Windows event IDs 4624/4625/4740/4723/4634 and logon types 2/3/7/10, legacy IMAP/POP and MFA, a log-reading method, time zones (Central = UTC-5 summer, UTC-6 winter), the four-part note, a weak vs strong note. Real-world: Equifax expired inspection certificate (GAO-18-559).
- 9.3 Phishing and email analysis: header fields, SPF/DKIM/DMARC (what each does and does not prove), lookalike domains, links, attachments and lures, message-trace scoping, BEC verification by callback. Real-world: the fake-invoice scheme against Google and Facebook (more than $100 million, guilty plea).
- 9.4 Escalation and incident tickets: event vs incident, Marcus's interim escalation list, containment trade-offs, evidence before reboot (order of volatility), the three-part Hard close-out. Real-world: Colonial Pipeline legacy VPN without MFA.

The talks teach method only. None of them gives away a ticket's answer. Examples use documentation IPs (203.0.113.x) and made-up accounts (t.sample).

## New Cedar Creek facts (to merge into CEDAR_CREEK.md)
1. **Week 9 framing:** the ticket bank is a replay queue. Before the analyst was hired, the August to October 2026 tickets were worked in a hurry by the 3-person IT team. Marcus reopened them as the analyst's training queue, to be worked as if new.
2. **Marcus's interim escalation list** (Cedar Creek still has no IR plan):
   - Any P1 or suspected P1: call Marcus right away.
   - Containment on servers, AD, or backups: Dee, through Marcus.
   - Decisions that stop production or cost money: Greg Palmer, through Marcus.
   - Current or former employee involved: Rosa Medina (HR). Never contact the employee directly.
   - Possible wire or bank-detail fraud: Greg Palmer and the bank's fraud line.
   - Likely breach, ransomware, or crime: Marcus and Greg decide on outside IR help, legal advice, and law enforcement.
3. **Marcus's notes rule:** write the fact first, then the guess, and never mix them.
4. **Time zone:** Cedar Creek logs are in U.S. Central time (UTC-5 in summer, UTC-6 in winter).

## Ticket bank vs canon conflicts (for whoever owns the Student Platform / canon)
- TCK-4008 puts the Plant network at `10.50.8.0/24`. Canon has plant = `10.40.0.0/16`.
- The TCK-1001 DC log shows `n.brooks` (receptionist) unlocking PLANT-PC-07 (`10.40.2.57`). This is odd but not a contradiction.
- TCK-1003's reporter is `marcus.hall@`, but the logs use `m.hall`. This is fine, just inconsistent.
- The known TCK-3003 weekday issue is still there ("Tue, 19 Aug 2026" in headers).
- CLAUDE.md and the brief say "15 tickets in 3 tiers". The bank has 28 tickets in 4 tiers.

## Legacy material
- There is no legacy `weeks-data.js` week for the tickets. The brief's only source was the ticket bank, and all of the original 15 tickets plus 1006 and 1007 are scheduled, except 3004 and 3005 (stretch).
- Rule 5 asks for a sort/flash set. I did not add a triage sorter. This is a light week, and the tickets are the practice. Two acronym sets are in `anytime`.

## Shared-file requests
- `estimate_time.js`: `practice()` checks `p.mode === 'flash'`, but practice sets use `kind: 'flash'`. Flash sets are therefore measured at the sort rate (0.6 min/card, not 0.25). This affects every week, including Week 1.
- Optional: a ticket estimator (see the rates above).

## Consistency pass (2026-11-23)
Changed here: the example note in Talk 9.2 used 203.0.113.45 (an IRONLATCH address from Week 5) and 10.20.30.14 (Tom Becker's ENG-14); they are now 203.0.113.88 and 10.20.30.88. Talk 9.4 now says writing an IR plan became Marcus's first project after the December ransomware (Week 8). The ticket bank conflicts are listed at the end of `docs/CEDAR_CREEK.md`.
