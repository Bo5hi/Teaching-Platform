// Week 6 labs. Shapes: docs/COURSE_V2.md
// Auto-check answers come from docs/tools/make_week6_pack.js (it prints them).
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['6.1'] = {
  id: "6.1", week: 6, title: "Phishing header analysis", mins: 45, env: "kali",
  goal: "Three Cedar Creek employees used the Report button last week. Read the full headers of each message in Kali, decide which ones are phishing, and write Jordan a short verdict he can act on.",
  youNeed: [
    "Your Kali VM, logged in, with internet access",
    "Lesson 6.2 (reading an email's headers) finished",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Download the Week 6 lab pack",
      body: [
        "Open a terminal. Move into the labs folder you made in Week 1, download this week's pack, and unpack it. If the labs folder is missing, run <code>mkdir ~/labs</code> first.",
        "The pack holds files for three labs this week. This lab uses the <code>email</code> folder."
      ],
      cmd: "cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week6.zip\nunzip cc-week6.zip\ncd cedarcreek-week6/email\nls",
      expect: "unzip lists the folders audit, awareness, email, and wordlists. ls in the email folder shows three .eml files and three .txt files.",
      tip: "If unzip asks whether to replace files, you have unpacked it before. Type A and press Enter to replace all."
    },
    {
      title: "Read Jordan's note",
      body: [
        "Start with the context. Jordan saved each reported message as a <strong>.eml</strong> file. An .eml file is the raw message exactly as the mail server received it: every header line first, then one blank line, then the body.",
        "Note who reported each message and what they did. Reporting is the behavior Cedar Creek wants, so Kevin, Amanda, and Walt all did the right thing, even if one of the messages turns out to be real."
      ],
      cmd: "cat reporting_notes.txt",
      expect: "Jordan's note listing report-01 (Kevin Tran), report-02 (Amanda Singh), and report-03 (Walt Henley)."
    },
    {
      title: "Look at a whole message once",
      body: [
        "Open the first report in <code>less</code>. Scroll through the headers to the blank line, then read the body. Press <strong>q</strong> to quit.",
        "Most of what you see at the top never shows in Outlook. The headers record every server the message passed through and the results of the sender checks. Lines that start with a space belong to the header line above them; long headers are folded onto several lines this way."
      ],
      cmd: "less report-01.eml",
      expect: "About 30 header lines (Received, Authentication-Results, From, To, Subject, and more), a blank line, then an HTML body that mentions a password expiring today."
    },
    {
      title: "Print only the headers with sed",
      body: [
        "<code>sed -n '1,/^$/p'</code> prints from line 1 up to the first empty line, which is the end of the headers. This is a quick way to see the headers without the body.",
        "Then pull out the headers a person would see in Outlook: From, To, Subject, and Date, plus two hidden ones that matter: <strong>Reply-To</strong> (where a reply really goes) and <strong>Return-Path</strong> (where bounces go, also called the envelope sender). <code>grep -E</code> lets you match several names at once; the <code>^</code> means the start of a line."
      ],
      cmd: "sed -n '1,/^$/p' report-01.eml\ngrep -E '^(From|To|Subject|Date|Reply-To|Return-Path):' report-01.eml",
      expect: "First the full header block, then six or fewer lines. The From line shows the display name Cedar Creek IT Service Desk, but the address ends in cedarcreek-it.com, not cedarcreek-ind.com."
    },
    {
      title: "Trace the path with the Received headers",
      body: [
        "Every mail server that handles a message adds a <strong>Received</strong> header at the <em>top</em>. So the list reads newest first, and the <strong>bottom</strong> Received header shows where the message entered the Microsoft 365 system. That bottom one names the sending server and its IP address.",
        "<code>grep -c</code> counts the Received headers. <code>grep -A2</code> prints each match plus the two lines After it, because each Received header here is folded onto three lines."
      ],
      cmd: "grep -c '^Received:' report-01.eml\ngrep -A2 '^Received:' report-01.eml",
      expect: "A count, then each Received header in full. The last one reads 'from mail.cedarcreek-it.com (203.0.113.77)'.",
      tip: "Received headers that were added before the message reached Microsoft 365 can be forged by the sender. The ones added by servers you trust (here, the outlook.com servers) are the reliable part of the chain."
    },
    {
      title: "Read the sender checks: SPF, DKIM, and DMARC",
      body: [
        "The receiving server records its checks in the <strong>Authentication-Results</strong> header. <strong>spf=</strong> says whether the sending IP is allowed to send for the envelope domain. <strong>dkim=</strong> says whether the message carries a valid digital signature from a domain. <strong>dmarc=</strong> says whether those results line up with the domain in the visible From address, and <strong>action=</strong> says what the receiver did about it.",
        "Look carefully at which domain passed. All three checks pass, but they pass for <em>cedarcreek-it.com</em>. The attacker owns that domain, so of course it passes. These checks prove a message really came from the domain it names. They do not prove the domain is honest."
      ],
      cmd: "grep -A4 '^Authentication-Results:' report-01.eml",
      expect: "spf=pass, dkim=pass, and dmarc=pass, each for cedarcreek-it.com, then compauth=pass."
    },
    {
      title: "Find where the button really goes",
      body: [
        "In HTML email, the text you see on a link and the address it opens are separate. The address is in the <code>href</code> attribute. <code>grep -o</code> prints only the part of each line that matches, so this command prints every link target and nothing else.",
        "Compare it with the text on the button, which says portal.office.com. Hovering over a link in Outlook shows the same thing as this command."
      ],
      cmd: "grep -o 'href=\"[^\"]*\"' report-01.eml\ngrep -i 'portal.office.com' report-01.eml",
      expect: "One href pointing to https://cedarcreek-it.com/m365/keep.php?u=k.tran, and one line where portal.office.com appears only as the visible link text."
    },
    {
      title: "Check the sender's domain age and records",
      body: [
        "Jordan ran a <strong>WHOIS</strong> lookup (the public registration record of a domain) and a DNS lookup for each sender. A domain registered a day or two before it sends you a password warning is a very strong phishing sign. Real IT departments do not buy a new domain to email their own staff.",
        "<code>grep</code> with two file names searches both and prints the file name in front of each match."
      ],
      cmd: "grep cedarcreek-it domain_lookups.txt dns_records.txt",
      expect: "domain_lookups.txt shows cedarcreek-it.com created 2026-12-09 with the owner hidden. dns_records.txt shows its SPF record allows only 203.0.113.77."
    },
    {
      title: "Report 02: the spoofed CFO",
      body: [
        "Now run the same checks on Amanda's message. This one uses Cedar Creek's real domain in the From line. Look at three things: the Reply-To address, the sending server at the bottom of the Received chain, and the Authentication-Results.",
        "Then look up Cedar Creek's own DMARC record. The <strong>p=</strong> value is the policy Cedar Creek publishes, telling receiving servers what to do with mail that fails DMARC: <code>none</code> (deliver it and just send reports), <code>quarantine</code> (send it to junk), or <code>reject</code> (refuse it)."
      ],
      cmd: "grep -E '^(From|Reply-To|Return-Path|To|Subject):' report-02.eml\ngrep -A2 '^Received:' report-02.eml | tail -3\ngrep -A4 '^Authentication-Results:' report-02.eml\ngrep dmarc dns_records.txt",
      expect: "From g.palmer@cedarcreek-ind.com but Reply-To g.palmer@cedarcreek-lnd.com, sent from vps42.fastcloudhost.net (192.0.2.99). spf=fail, dkim=none, dmarc=fail action=none. Cedar Creek's DMARC record ends in p=none.",
      tip: "tail -3 prints the last three lines of whatever is piped into it, which here is the bottom Received header."
    },
    {
      title: "Read the body of report 02",
      body: [
        "Print the body only. <code>sed -n '/^$/,$p'</code> prints from the first empty line to the end of the file.",
        "Compare it with the August attempt in Week 1: a request to change where money goes, a reason not to call, and a reply address on cedarcreek-lnd.com. That domain belongs to the PAPERWIRE fraud ring you profiled in Lab 1.3. Amanda did exactly what Greg's memo asked: she called him on a number she already knew."
      ],
      cmd: "sed -n '/^$/,$p' report-02.eml\ngrep cedarcreek-lnd domain_lookups.txt",
      expect: "A short request to update Ozark Steel Supply's bank details before today's payment run, ending 'Sent from my iPhone'. The lookup shows cedarcreek-lnd.com was created 2026-08-12, one week before the August attempt."
    },
    {
      title: "Report 03: the W-2 notice",
      body: [
        "W-2 and tax messages are a favorite phishing theme, so Walt was right to be careful. Check this one the same way, and decide on the evidence, not the topic.",
        "The loop below prints the sender checks for all three messages so you can compare them side by side. <code>for f in report-0*.eml</code> runs the commands once for each file that matches the pattern."
      ],
      cmd: "grep -E '^(From|Reply-To|Return-Path):' report-03.eml\ngrep -o 'https://[^ ]*' report-03.eml\ngrep tallgrass domain_lookups.txt dns_records.txt\nfor f in report-0*.eml; do echo \"== $f\"; grep -A4 '^Authentication-Results:' \"$f\"; done",
      expect: "Report 03 comes from tallgrasspayroll.com with matching Return-Path, its only link stays on tallgrasspayroll.com, the domain dates from 2011 with a published owner and a p=reject DMARC policy, and all checks pass for the same domain as the From address. Jordan's note says Rosa confirmed it."
    },
    {
      title: "Write your verdict",
      body: [
        "Give Jordan a verdict for each message and one or two actions. Good actions are specific: block a domain at the mail gateway, search every mailbox for other messages from it, reset a password if anyone clicked, or change a DNS record.",
        "Think about what would have stopped report 02 before Amanda ever saw it. Cedar Creek's own DMARC policy decides what other mail servers, including Microsoft 365, do with mail that fakes the cedarcreek-ind.com address."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many Received headers does report-01.eml have?", kind: "number", answer: 3 },
    { id: "c2", q: "What IP address sent report-01 into Microsoft 365 (the bottom Received header)?", kind: "text", answer: "203.0.113.77" },
    { id: "c3", q: "Report-01's button says portal.office.com. Which domain does it really open?", kind: "text", answer: ["cedarcreek-it.com", "https://cedarcreek-it.com", "cedarcreek-it.com/m365/keep.php"] },
    { id: "c4", q: "What was report-01's SPF result?", kind: "choice", opts: ["pass", "fail", "softfail", "none"], answer: 0 },
    { id: "c5", q: "How many days old was the sender's domain when report-01 arrived?", kind: "number", answer: 1 },
    { id: "c6", q: "What is the Reply-To address in report-02?", kind: "text", answer: ["g.palmer@cedarcreek-lnd.com", "<g.palmer@cedarcreek-lnd.com>"] },
    { id: "c7", q: "What IP address sent report-02?", kind: "text", answer: "192.0.2.99" },
    { id: "c8", q: "What DMARC policy (the p= value) does cedarcreek-ind.com publish?", kind: "text", answer: ["none", "p=none"] },
    { id: "c9", q: "Report-02 failed DMARC. Why did it still reach Amanda's inbox?", kind: "choice",
      opts: ["SPF passed, which overrides DMARC", "Cedar Creek's DMARC policy is p=none, which tells receivers to deliver failing mail anyway", "The message was digitally signed by DKIM", "Microsoft 365 never checks DMARC"], answer: 1 },
    { id: "c10", q: "What is your verdict on report-03?", kind: "choice", opts: ["Phishing", "Legitimate"], answer: 1 },
    { id: "c11", q: "Write your reply to Jordan: a one-line verdict for each report and the two actions you recommend first.", kind: "text" }
  ],
  reflection: "Report-01 passed every sender check and was still phishing. Explain to a coworker in plain words why SPF, DKIM, and DMARC passing does not make an email safe, and name the two clues in report-01 that gave it away."
};

COURSE_LABS['6.2'] = {
  id: "6.2", week: 6, title: "Password audit: crack the DC01 hash export with John the Ripper", mins: 60, env: "kali",
  waitMins: 5, // two 5-second john benchmarks, short cracking runs, and the optional rockyou run (1-2 min)
  goal: "Run Cedar Creek's first authorized password audit. Crack the NT hashes Dee exported from DC01 with John the Ripper, using a wordlist, a pattern list you build yourself, and a brute-force mask. Find out which passwords fall, which survive, and why.",
  youNeed: [
    "Your Kali VM, logged in",
    "The Week 6 lab pack in ~/labs/cedarcreek-week6 (Lab 6.1, step 1)",
    "Lesson 6.3 (password attacks) finished",
    "About 60 minutes"
  ],
  steps: [
    {
      title: "Read the authorization first",
      body: [
        "Cracking passwords without permission is a crime in most places, including under the U.S. Computer Fraud and Abuse Act (CFAA). A real audit starts with written approval that says what you may do, where, and when. Read Greg and Marcus's approval and note the rules.",
        "Notice rule 1: no online guessing against live systems. This lab is an <strong>offline</strong> attack. You work on a copy of the hashes in your own VM, so there is no account lockout and no log on DC01 to warn anyone. That is why stolen hash files are so dangerous."
      ],
      cmd: "cd ~/labs/cedarcreek-week6\ncat audit/authorization.txt",
      expect: "The signed authorization: scope (a DC01 export of 25 accounts, your lab VM only, December 15 to 18), four rules (cracked accounts get a forced change, scheduled for January 4 after the year-end change freeze), and the reason for the audit."
    },
    {
      title: "Look at the hash export",
      body: [
        "Dee exported the accounts in <strong>pwdump format</strong>, the layout most Windows hash tools produce. Each line has fields separated by colons: <code>username:RID:LM hash:NT hash:::</code>. The RID is the account's number inside the domain; 500 is always the built-in Administrator.",
        "The <strong>NT hash</strong> is how Windows stores a password: the MD4 hash of the password, with no salt. The LM hash field holds a fixed value that means 'no LM hash stored', because the old LM format is turned off.",
        "Count the accounts, then print just the usernames with <code>cut</code>."
      ],
      cmd: "head -5 audit/dc01_hashes.txt\nwc -l audit/dc01_hashes.txt\ncut -d: -f1 audit/dc01_hashes.txt",
      expect: "Lines like Administrator:500:aad3b435b51404eeaad3b435b51404ee:<32 hex characters>:::, a count of 25, then 25 usernames including ccadmin, operator, the svc-backup service account, the CAD vendor login vendor.cad, and b.kessler."
    },
    {
      title: "Spot shared passwords before cracking anything",
      body: [
        "Because NT hashes are not salted, the same password always gives the same hash. You can find accounts that share a password without cracking a thing: pull out field 4 (the NT hash), count each value, and sort.",
        "Any count above 1 means several people use the identical password. A salted system would hide this, because each account's hash would be different."
      ],
      cmd: "cut -d: -f4 audit/dc01_hashes.txt | sort | uniq -c | sort -nr | head -3",
      expect: "The top line shows one hash with a count of 3. The other lines show a count of 1."
    },
    {
      title: "Check John the Ripper and benchmark it",
      body: [
        "<strong>John the Ripper</strong> (the command is <code>john</code>) is a password cracker that comes with Kali. It hashes candidate passwords and compares them with the hashes you give it. When a hash matches, John has found the password.",
        "Run two short benchmarks. The first measures how many NT hashes per second your VM can compute. The second does the same for <strong>sha512crypt</strong>, a salted hash built to be slow. Write both numbers down; the difference is the point of the next lesson section on slow hashes."
      ],
      cmd: "john --test=5 --format=NT\njohn --test=5 --format=sha512crypt",
      expect: "Each benchmark runs about 5 seconds and prints a speed in c/s (candidates per second), often with a K (thousand) or M (million). The NT number is far larger than the sha512crypt number, usually by a factor of a thousand or more.",
      tip: "Your numbers depend on your PC. Only the comparison matters."
    },
    {
      title: "Attack 1: a wordlist of common passwords",
      body: [
        "A <strong>dictionary attack</strong> tries every word in a list. Dee's list has the 150 or so passwords seen most often in public breaches, plus words people at Cedar Creek are likely to use, such as the company name.",
        "<code>--format=NT</code> tells John the hash type. <code>--wordlist=</code> names the list. John prints each password it finds, with the account in brackets. It saves every crack in its <strong>pot file</strong> (~/.john/john.pot), so it never cracks the same hash twice.",
        "<code>--show</code> lists every cracked account from the pot file. Piping it into <code>grep -c ':'</code> counts the account lines (the summary line has no colon)."
      ],
      cmd: "wc -l wordlists/common-plus-company.txt\njohn --format=NT --wordlist=wordlists/common-plus-company.txt audit/dc01_hashes.txt\njohn --show --format=NT audit/dc01_hashes.txt\njohn --show --format=NT audit/dc01_hashes.txt | grep -c ':'",
      expect: "John reports the hashes it loaded, then finishes within a second or two and prints several cracked passwords. --show lists each cracked account as username:password:... and ends with a line like 'N password hashes cracked, M left'.",
      tip: "John may say it loaded 23 hashes, not 25. Identical unsalted hashes are loaded once, so the three accounts with the same password count as one. --show still lists every account."
    },
    {
      title: "Read what fell",
      body: [
        "Look at the cracked list. The shared admin account <code>ccadmin</code> uses the company name plus a digit. The shared plant login <code>operator</code> is just as weak. Three people use the same default password the help desk gives out at hire, and never changed it.",
        "Every one of these meets the 2019 memo: 8 or more characters, with a capital letter and a number. Complexity rules did not make them strong, because people satisfy them in predictable ways."
      ]
    },
    {
      title: "Attack 2: build a pattern list from the password policy",
      body: [
        "The 2019 memo forces a password change every 90 days. When people must change passwords that often, many fall back on a season and a year with a symbol on the end, then change only the season each time. Attackers know this pattern well.",
        "Build your own targeted list. The loop below writes every combination of four seasons and four years with ! on the end. <code>printf '%s%s!\\n'</code> prints the season, the year, and an exclamation mark, then a new line. The single quotes stop the shell from treating ! as a special character. <code>&gt;</code> sends all of it into a new file.",
        "Then run John with your list."
      ],
      cmd: "for s in Spring Summer Fall Winter; do for y in 2023 2024 2025 2026; do printf '%s%s!\\n' \"$s\" \"$y\"; done; done > wordlists/seasons.txt\nwc -l wordlists/seasons.txt\nhead -4 wordlists/seasons.txt\njohn --format=NT --wordlist=wordlists/seasons.txt audit/dc01_hashes.txt\njohn --show --format=NT audit/dc01_hashes.txt | grep -c ':'",
      expect: "wc -l prints 16. head shows Spring2023! to Spring2026!. John cracks several more accounts in under a second, and the --show count goes up.",
      tip: "If wc -l shows 0 or the file has odd characters, check the quotes. Copy the command from this page rather than typing it."
    },
    {
      title: "Attack 3: brute force short numeric passwords with a mask",
      body: [
        "A <strong>brute-force attack</strong> tries every possible combination in a defined space. A <strong>mask</strong> describes that space one character at a time. <code>?d</code> means any digit (0 to 9), <code>?l</code> any lowercase letter, <code>?u</code> uppercase, and <code>?s</code> a symbol.",
        "<code>?d?d?d?d?d?d</code> means every six-digit number: 10 &times; 10 &times; 10 &times; 10 &times; 10 &times; 10 = 1,000,000 candidates. For a fast hash like NT, a million guesses takes well under a second. Keep the mask in single quotes so the shell does not treat the question marks as wildcards."
      ],
      cmd: "john --format=NT --mask='?d?d?d?d?d?d' audit/dc01_hashes.txt\njohn --show --format=NT audit/dc01_hashes.txt",
      expect: "John finishes almost instantly and cracks two six-digit passwords. The final --show summary line gives the total cracked and the number left."
    },
    {
      title: "Optional: the real rockyou list, with rules",
      body: [
        "Kali ships the rockyou.txt list, compressed, in /usr/share/wordlists. It holds about 14 million real passwords from the RockYou breach. <code>gunzip -k</code> unpacks a copy and keeps the original. <code>--rules</code> turns on John's default word-mangling rules, which try each word with capital letters, digits, and symbols added: a <strong>hybrid attack</strong>.",
        "John skips the 16 hashes already in its pot file and works only on the 9 survivors. It tries hundreds of millions of candidates, so give it a minute or two. Watch whether any survivor falls."
      ],
      cmd: "ls -lh /usr/share/wordlists/\nsudo gunzip -k /usr/share/wordlists/rockyou.txt.gz\njohn --format=NT --wordlist=/usr/share/wordlists/rockyou.txt --rules audit/dc01_hashes.txt\njohn --show --format=NT audit/dc01_hashes.txt | tail -1",
      expect: "rockyou.txt unpacks to about 134 MB. John runs for a minute or two and cracks nothing new. The summary still says 16 password hashes cracked, 9 left: long random passwords and passphrases are not in any breach list.",
      tip: "If ls already shows rockyou.txt without .gz, skip the gunzip line. If /usr/share/wordlists is missing, install it with sudo apt install -y wordlists."
    },
    {
      title: "See what survived",
      body: [
        "<code>--show=left</code> lists the accounts John could <em>not</em> crack. Look at who they are. The built-in Administrator, krbtgt (the account Active Directory uses to sign Kerberos tickets), and the backup service account have long random passwords. Several people use long passphrases: four or more words strung together.",
        "None of the survivors needed special characters to resist this audit. They needed length and unpredictability."
      ],
      cmd: "john --show=left --format=NT audit/dc01_hashes.txt | cut -d: -f1",
      expect: "Nine usernames, including Administrator, krbtgt, svc-backup, g.palmer, and m.reyes. John may add a summary line at the end."
    },
    {
      title: "Why salting matters: see it for yourself",
      body: [
        "Kali stores your own login password in /etc/shadow using <strong>yescrypt</strong>, a slow, salted hash (the line shows <code>$y$</code>). The <strong>salt</strong> is a random value stored with the hash and mixed into it, so two accounts with the same password get different hashes.",
        "<code>openssl passwd -6</code> makes a sha512crypt hash. Run it twice for the same password with two different salts and compare. Then run the NT-style comparison you did earlier in your head: in the DC01 export, the three Welcome1 accounts had identical hashes."
      ],
      cmd: "sudo grep '^kali:' /etc/shadow | cut -c1-30\nopenssl passwd -6 -salt CCsalt01 'Welcome1'\nopenssl passwd -6 -salt CCsalt02 'Welcome1'",
      expect: "Your shadow line starts with kali:$y$. The two openssl lines both start with $6$, then show their salt, then completely different hash text, even though the password is the same.",
      tip: "sudo asks for your Kali password (kali, unless you changed it). Nothing shows while you type it."
    },
    {
      title: "How strong is a six-digit password?",
      body: [
        "<strong>Entropy</strong> measures how unpredictable a password is, in bits. For a password picked at random, entropy = length &times; log2(size of the character set). One random digit is log2(10), about 3.32 bits, so six random digits give about 19.9 bits. Each extra bit doubles the attacker's work.",
        "Compare a random passphrase of four words picked from a list of 7,776 words (the size of a common Diceware list): each word gives log2(7,776), about 12.9 bits, so four words give about 51.7 bits. That is roughly 2 to the power of 32, or over 4 billion, times more guesses than six digits.",
        "Kali's calculator <code>bc</code> can check the math. <code>-l</code> loads the math library, where <code>l()</code> is the natural log, so log2(x) is l(x)/l(2)."
      ],
      cmd: "echo '6 * l(10)/l(2)' | bc -l\necho '4 * l(7776)/l(2)' | bc -l",
      expect: "About 19.93 for six digits and about 51.70 for four Diceware words.",
      tip: "Entropy only describes passwords chosen at random. Summer2026! looks like it has 11 characters of mixed types, but an attacker who guesses the pattern needs only 16 tries."
    },
    {
      title: "Clean up as the authorization requires",
      body: [
        "Rule 4 says the results must not outlive the audit. Clear John's pot file so the cracked passwords are no longer stored in your VM. Keep the hash file until your lab is graded, then delete it as the README says."
      ],
      cmd: "rm ~/.john/john.pot\njohn --show --format=NT audit/dc01_hashes.txt | tail -1",
      expect: "No output from rm, then '0 password hashes cracked, 25 left' because the pot file is gone."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many accounts are in the DC01 export?", kind: "number", answer: 25 },
    { id: "c2", q: "How many accounts share the most common NT hash (before you crack anything)?", kind: "number", answer: 3 },
    { id: "c3", q: "After Attack 1 (the common wordlist), how many accounts does --show list?", kind: "number", answer: 9 },
    { id: "c4", q: "What is the password shared by those accounts?", kind: "text", answer: "Welcome1" },
    { id: "c5", q: "What is the password of the shared admin account ccadmin?", kind: "text", answer: "CedarCreek1" },
    { id: "c6", q: "After Attack 2 (your seasons list), how many accounts does --show list in total?", kind: "number", answer: 14 },
    { id: "c7", q: "Which cracked account belongs to someone who no longer works at Cedar Creek? Give the username.", kind: "text", answer: ["b.kessler", "bkessler", "Brian Kessler"] },
    { id: "c8", q: "How many candidates are in the mask ?d?d?d?d?d?d?", kind: "number", answer: 1000000 },
    { id: "c9", q: "After all three attacks, how many accounts were cracked?", kind: "number", answer: 16 },
    { id: "c10", q: "How many accounts survived the audit uncracked?", kind: "number", answer: 9 },
    { id: "c11", q: "Your two benchmarks: write the NT speed and the sha512crypt speed John reported, with units.", kind: "text" },
    { id: "c12", q: "Paste the output of john --show=left --format=NT audit/dc01_hashes.txt | cut -d: -f1", kind: "paste" }
  ],
  reflection: "Write the three findings you would put at the top of the password audit report for Marcus and Greg. Follow rule 2: name accounts and patterns, never the passwords themselves. For each finding, give the risk in plain words and one fix (for example a policy change, a technical control, or retiring an account)."
};

COURSE_LABS['6.3'] = {
  id: "6.3", week: 6, title: "Spot password spraying in the VPN log", mins: 40, env: "kali",
  goal: "Search a weekend of VPN sign-ins from FW-CORE with grep, sort, and uniq. Tell apart three online password attacks (spraying, brute force, and credential stuffing) by their patterns, and find the one that got in.",
  youNeed: [
    "Your Kali VM, logged in",
    "The Week 6 lab pack in ~/labs/cedarcreek-week6 (Lab 6.1, step 1)",
    "Lesson 6.3 (password attacks) and Lab 6.2 finished",
    "About 40 minutes"
  ],
  steps: [
    {
      title: "Open the logs folder",
      body: [
        "On Monday morning Marcus forwarded you the weekend's VPN log from FW-CORE, the perimeter firewall that also runs Cedar Creek's VPN. He says only: 'Lots of red over the weekend. Anything real?'",
        "Read the README first. Two facts matter: the lockout policy, and the fact that this export covers only the CC-LEGACY VPN profile you met in Week 3, which takes a domain password alone with no MFA. Then look at the first lines and count them."
      ],
      cmd: "cd ~/labs/cedarcreek-week6/logs\ncat README_logs.txt\nhead -5 vpn_auth.log\nwc -l vpn_auth.log",
      expect: "The README lists five log files and says the export is the CC-LEGACY profile only (password alone, no MFA, open to any VPN-Users member), and that 10 failed passwords locks an account for 30 minutes. The log lines look like 2026-12-11T18:22:18 FW-CORE vpn-auth: user=p.nair src=203.0.113.47 result=SUCCESS."
    },
    {
      title: "Read the key=value format",
      body: [
        "Each line has a timestamp, the device (FW-CORE), the event type, and then fields written as <strong>key=value</strong>: <code>user=</code> the account, <code>src=</code> the source IP address, <code>result=</code> SUCCESS, FAIL, or LOCKED, and for failures a <code>reason=</code>. vpn-session lines record a logout and how long the session lasted.",
        "Count failures and successes. <code>grep -c</code> counts matching lines."
      ],
      cmd: "grep -c 'result=FAIL' vpn_auth.log\ngrep -c 'result=SUCCESS' vpn_auth.log\ngrep -o 'reason=[^ ]*' vpn_auth.log | sort | uniq -c",
      expect: "A failure count, a much smaller success count, then three failure reasons with counts: account_locked, bad_password, and unknown_user."
    },
    {
      title: "Failures by source and by user",
      body: [
        "<code>grep -o 'src=[^ ]*'</code> prints only the src= field from each line: the pattern means 'src=' followed by any characters that are not a space. Count failures per source IP, then per user.",
        "A big count for one source can mean several things. You need a second view to tell them apart."
      ],
      cmd: "grep 'result=FAIL' vpn_auth.log | grep -o 'src=[^ ]*' | sort | uniq -c | sort -nr | head -5\ngrep 'result=FAIL' vpn_auth.log | grep -o 'user=[^ ]*' | sort | uniq -c | sort -nr | head -5",
      expect: "By source: 192.0.2.77 and 203.0.113.200 have the most failures, followed by several 192.0.2.15x addresses. By user: m.reyes has far more failures than anyone else."
    },
    {
      title: "The spraying view: how many different users did each source try?",
      body: [
        "Password spraying tries one password against many accounts, once each. Brute force tries many passwords against one account. So the question that separates them is: how many <em>different</em> usernames did each source try?",
        "This pipeline keeps each user-and-source pair once (<code>sort -u</code>), then counts the pairs per source. A source with many different users and about one try each is spraying."
      ],
      cmd: "grep 'result=FAIL' vpn_auth.log | grep -o 'user=[^ ]* src=[^ ]*' | sort -u | grep -o 'src=[^ ]*' | sort | uniq -c | sort -nr | head -5",
      expect: "203.0.113.200 is on top with 20 different usernames. The 192.0.2.15x addresses follow with 5 each. 192.0.2.77 tried only one username."
    },
    {
      title: "Follow the spraying source's whole trail",
      body: [
        "Now look at every line from 203.0.113.200, not just the failures. Note the time, the gap between attempts (about two minutes, slow enough to avoid lockout), and the order of the accounts.",
        "Then count every username it tried, including any success."
      ],
      cmd: "grep 'src=203.0.113.200' vpn_auth.log\ngrep 'src=203.0.113.200' vpn_auth.log | grep vpn-auth | grep -o 'user=[^ ]*' | sort -u | wc -l",
      expect: "Failures every couple of minutes from just after 2 AM on Saturday, one per account, then one SUCCESS followed by a logout 47 minutes later. The count of usernames tried is 21.",
      tip: "The attacker guessed Cedar Creek's username format (first initial, a dot, last name) from public email addresses. That is OSINT at work."
    },
    {
      title: "Whose account was it?",
      body: [
        "Look closely at the account that let the attacker in. You have seen it twice before: Dee said in Week 1 that a former engineer's account was 'probably never turned off', and in Lab 6.2 its password fell to your seasons list.",
        "A former employee's account, still enabled, with a season-and-year password, on a VPN profile that needs no MFA. That is the same mix that let attackers into Colonial Pipeline in 2021: one forgotten VPN account and a password without a second factor."
      ],
      cmd: "grep 'b.kessler' vpn_auth.log",
      expect: "Two lines: a SUCCESS from 203.0.113.200 at 02:37 on Saturday, December 12, and a logout 47 minutes later. No other activity on that account all weekend.",
      tip: "Why was it still enabled after your Week 3 access review? Rosa asked IT to keep the account until HR's legal hold on Brian's files was in place. A legal hold preserves data; it never needs a working sign-in. Dee disabled b.kessler on Monday, December 14, right after this review."
    },
    {
      title: "The brute force and the lockout",
      body: [
        "Now 192.0.2.77. It hammered a single account on Sunday afternoon. Count its bad password attempts, find the LOCKED line, and then look at the end of that account's history.",
        "Lockout stopped the guessing, which is good. But look at Sunday evening: the real owner could not sign in either. Aggressive lockout lets an attacker lock people out on purpose, which is a small denial of service."
      ],
      cmd: "grep 'src=192.0.2.77' vpn_auth.log | head -12\ngrep 'src=192.0.2.77' vpn_auth.log | grep -c 'reason=bad_password'\ngrep 'result=LOCKED' vpn_auth.log\ngrep 'm.reyes' vpn_auth.log | tail -3",
      expect: "Ten bad_password failures a few seconds apart, then a LOCKED line, then account_locked failures. The last lines show m.reyes failing from his home address at 7:12 PM because the account was locked."
    },
    {
      title: "Credential stuffing from a breach list",
      body: [
        "The 192.0.2.150 to .157 addresses look different. They used full email addresses as usernames, many of which do not exist at Cedar Creek (reason=unknown_user). That is what <strong>credential stuffing</strong> looks like: someone is testing email and password pairs from a breach at another site, spread across several IP addresses to stay quiet.",
        "Count the attempts and the source addresses. Then list the real Cedar Creek addresses that appeared. Those people's email addresses, and probably an old password, are in someone's breach list."
      ],
      cmd: "grep -c 'reason=unknown_user' vpn_auth.log\ngrep 'reason=unknown_user' vpn_auth.log | grep -o 'src=[^ ]*' | sort -u | wc -l\ngrep '@cedarcreek-ind.com' vpn_auth.log | grep 'reason=bad_password' | grep -o 'user=[^ ]*'",
      expect: "34 unknown-user attempts from 8 source addresses, and six real Cedar Creek email addresses that failed with bad_password."
    },
    {
      title: "Decide and escalate",
      body: [
        "One of the three attacks succeeded. This is no longer a log review; it is a security incident. Week 8 covers incident response in depth. For now, decide the first steps and write Marcus a short note.",
        "Think about the account, the session, the source address, the six people in the breach list, and the two missing controls the README points out."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many FAIL lines are in the log?", kind: "number", answer: 90 },
    { id: "c2", q: "Which source IP tried the most different usernames?", kind: "text", answer: ["203.0.113.200", "src=203.0.113.200"] },
    { id: "c3", q: "How many different usernames did that source try in total, including the one that worked?", kind: "number", answer: 21 },
    { id: "c4", q: "Which account did it sign in to?", kind: "text", answer: ["b.kessler", "user=b.kessler", "Brian Kessler", "kessler"] },
    { id: "c5", q: "At what time did that sign-in happen? (HH:MM:SS)", kind: "text", answer: ["02:37:09", "2:37:09", "2026-12-12T02:37:09", "02:37:09 AM", "2:37:09 AM"] },
    { id: "c6", q: "What kind of attack came from 203.0.113.200?", kind: "choice", opts: ["Brute force", "Password spraying", "Credential stuffing", "Phishing"], answer: 1 },
    { id: "c7", q: "Which account was brute-forced until it locked?", kind: "text", answer: ["m.reyes", "user=m.reyes", "Marcus Reyes"] },
    { id: "c8", q: "How many bad passwords did 192.0.2.77 send before the account locked?", kind: "number", answer: 10 },
    { id: "c9", q: "How many different source IPs did the credential stuffing (unknown_user) come from?", kind: "number", answer: 8 },
    { id: "c10", q: "What should happen first?", kind: "choice",
      opts: ["Wait until Monday's meeting to discuss it", "Disable b.kessler, end any of its VPN sessions, block 203.0.113.200, and report it to Marcus as a security incident", "Reset m.reyes's password because it had the most failures", "Delete the log so it does not fill the disk"], answer: 1 },
    { id: "c11", q: "Write Marcus a note of 4 to 6 lines: what happened, which account, what you did or recommend now, and the two controls that would have stopped it.", kind: "text" }
  ],
  reflection: "The account lockout policy stopped one attack but not the other two. Explain why lockout could not stop password spraying or credential stuffing, and name the controls that would."
};

COURSE_LABS['6.4'] = {
  id: "6.4", week: 6, title: "Rewrite Cedar Creek's password policy", mins: 15, env: "browser",
  goal: "Use the audit results, the Password Checker, and current NIST guidance to replace Cedar Creek's 2019 password memo with rules that would have stopped what you cracked.",
  youNeed: [
    "Lab 6.2 finished (you need its results)",
    "Lesson 6.4 (strong passwords and better authentication) finished",
    "A browser. No Kali needed.",
    "About 15 minutes"
  ],
  steps: [
    {
      title: "Recall the 2019 rules",
      body: [
        "The 2019 memo you read in Week 1 sets four rules: at least 8 characters; upper case, lower case, and a number; a change every 90 days; and one shared operator login on the plant floor that 'everyone knows'. It also requires a help desk callback before any reset, which is a good control worth keeping.",
        "Your audit cracked 16 of 25 accounts. Every cracked password except the two six-digit ones met the length and complexity rules. Season-and-year passwords are a direct result of forced 90-day changes."
      ]
    },
    {
      title: "Test five password strategies in the Password Checker",
      body: [
        "Open the Password Checker in the CyberSec Academy: <a href=\"CyberSec_Academy.html?scr=pw\" target=\"_blank\" rel=\"noopener\">CyberSec_Academy.html?scr=pw</a>. Do <strong>not</strong> type any password you really use. Make up examples of each strategy below.",
        "Try: (1) a common word with a capital and a digit, like the ones you cracked; (2) a season, year, and symbol; (3) a 12-character string of random letters, digits, and symbols; (4) a passphrase of four random, unrelated words; (5) the same passphrase with one word swapped for a made-up word.",
        "For each one, note the score and what the tool says improved it. Then ask: would Lab 6.2's attacks have cracked it?"
      ]
    },
    {
      title: "Optional: check whether your email appears in a breach",
      body: [
        "Have I Been Pwned (<a href=\"https://haveibeenpwned.com/\" target=\"_blank\" rel=\"noopener\">haveibeenpwned.com</a>) lists public data breaches. You can enter <strong>your own</strong> email address to see which breaches it appears in and what data was exposed. Only check addresses that belong to you.",
        "Its Pwned Passwords service lets password systems check whether a password appears in known breach data without sending the password itself: the system sends only the first five characters of the password's hash and compares the results locally. This is how a 'blocklist' of breached passwords works in practice. You do not need to enter any password for this lab."
      ]
    },
    {
      title: "Compare the old rules with NIST guidance",
      body: [
        "NIST Special Publication 800-63B is the U.S. government's guidance on passwords and other authenticators. Its current version says, in short: require length rather than composition rules; allow long passwords and spaces; check every new password against a blocklist of common, expected, and breached passwords; do not force periodic changes, but force a change when there is evidence a password was compromised; and limit failed login attempts.",
        "It also sets minimum lengths. The 2025 revision asks for at least 15 characters when a password is the only factor, and at least 8 when the password is used together with another factor (MFA).",
        "For each 2019 rule, decide: keep, change, or drop. Answer the checkpoints, then write your new policy."
      ]
    },
    {
      title: "Handle the accounts that are not people",
      body: [
        "Policies must also cover <strong>shared and service accounts</strong>. ccadmin lets anyone with the notebook act as an administrator, and the logs cannot say who. operator keeps Line 2 running, so it cannot simply be switched off. vendor.cad, the CAD vendor's support login, cracked in seconds, while svc-backup survived with a long random password.",
        "Think about what each one needs: named admin accounts for each IT person, a kiosk setup for the plant PC, and long random service account passwords stored in a password vault."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "The 2019 memo requires upper case, lower case, and a number. Based on the audit, what should happen to that rule?", kind: "choice",
      opts: ["Keep it, it made the passwords strong", "Replace it with a longer minimum length and a blocklist of common and breached passwords", "Add a symbol requirement", "Require changes every 30 days instead"], answer: 1 },
    { id: "c2", q: "What should replace the forced 90-day change?", kind: "choice",
      opts: ["Change every 60 days", "Never change a password for any reason", "Change only when there is evidence of compromise, such as an audit crack or a breach", "Change every year on the employee's hire date"], answer: 2 },
    { id: "c3", q: "Under NIST's 2025 revision, what is the minimum length for a password used as the only factor?", kind: "number", answer: 15 },
    { id: "c4", q: "Which of your five Password Checker strategies scored best, and would Lab 6.2's three attacks have cracked it? Explain in two or three sentences.", kind: "text" },
    { id: "c5", q: "What should happen to the shared ccadmin account?", kind: "choice",
      opts: ["Give it a longer password and keep the notebook locked", "Retire it: give each IT person a named admin account, store any remaining break-glass password in a vault, and log its use", "Rename it so attackers cannot guess it", "Share it only with Marcus and Dee"], answer: 1 },
    { id: "c6", q: "Write Cedar Creek's new password policy: 5 to 8 short numbered rules covering length, blocklist, changes, MFA, password managers, shared accounts, and service accounts.", kind: "text" }
  ],
  reflection: "Walt Henley will push back on any change that could stop Line 2. Write the two sentences you would say to him about the operator account, explaining the risk and a fix that keeps the line running."
};

COURSE_LABS['6.5'] = {
  id: "6.5", week: 6, title: "Zero Trust access decisions", mins: 20, env: "browser",
  goal: "Act as Cedar Creek's policy engine. For eight real access requests, decide whether to allow, deny, or allow with conditions, using identity, device health, context, and least privilege. Then apply the same thinking to SolarWinds.",
  youNeed: [
    "Lesson 6.5 (Zero Trust and least privilege) finished",
    "A browser. No Kali needed.",
    "About 20 minutes"
  ],
  steps: [
    {
      title: "How to decide",
      body: [
        "In Zero Trust, every request is judged on its own. Ask four questions each time. <strong>Who</strong> is asking, and how sure are we (strength of authentication)? <strong>From what device</strong>, and is it managed and healthy? <strong>In what context</strong>: time, location, and behavior compared with normal? <strong>For what</strong>: does this exact resource and this level of access match the job?",
        "Then pick the smallest access that lets the work happen. 'Allow with conditions' often means: only this one system, read-only, for a limited time, with MFA, and with the session logged."
      ]
    },
    {
      title: "Request 1: engineer working from home",
      body: [
        "Priya Nair (Engineering) signs in from home at 7:40 PM on her Cedar Creek laptop. The laptop is managed, fully patched, and EDR is healthy. She passed MFA. She asks to open the Engineering project share on ENG-FS01 to finish a drawing due tomorrow. Engineers often work late."
      ]
    },
    {
      title: "Request 2: same engineer, personal PC",
      body: [
        "The next night Priya's laptop is at the office. She tries to reach the same share from her personal home PC. Cedar Creek does not manage it, and nobody knows its patch level or whether it has malware. She passes MFA."
      ]
    },
    {
      title: "Request 3: the CAD vendor",
      body: [
        "The CAD software vendor needs to install a license-server fix on ENG-APP02 (the Windows Server 2012 R2 machine) on Thursday afternoon. Today the vendor has a permanent VPN account that can reach the whole server network."
      ]
    },
    {
      title: "Request 4: a service account at 2 AM",
      body: [
        "At 2:14 AM, the svc-backup account tries an interactive sign-in (a person-style desktop login) on FIN-LT-09, the finance laptop. svc-backup normally only runs backup jobs on the servers and has never signed in to a laptop."
      ]
    },
    {
      title: "Request 5: the plant HMI",
      body: [
        "PLANT-PC-07, the Line 2 operator PC on the plant network, tries to open a connection to FS-HR01, the HR file server. Nothing about running Line 2 needs HR files. Today, plant and office networks can reach each other freely."
      ]
    },
    {
      title: "Request 6: an HR coordinator and payroll",
      body: [
        "A new HR coordinator starts Monday. Rosa says she needs to look up employees' pay rates to answer questions, and she will never run payroll. Payroll exports live on FS-HR01, and the payroll service has admin, payroll-processor, and read-only reporting roles."
      ]
    },
    {
      title: "Request 7: Tom's old admin rights",
      body: [
        "Tom Becker, the Engineering Manager, asks to keep his domain admin rights 'just in case'. They were set up years ago for the CAD license server project, and he almost never uses them. His account also signs in to the VPN through the password-only CC-LEGACY profile you found in Week 3."
      ]
    },
    {
      title: "Request 8: SolarWinds, through a Zero Trust lens",
      body: [
        "In 2020, a trojanized update to SolarWinds Orion network monitoring software gave attackers a foothold inside thousands of networks. Monitoring tools are usually trusted with wide network access and powerful accounts so they can watch everything.",
        "Think about which Zero Trust principle would have limited the damage most once the bad update was installed, and what that would look like for a monitoring server."
      ]
    }
  ],
  checkpoints: [
    { id: "r1", q: "Request 1 (Priya, managed laptop, MFA, Engineering share):", kind: "choice",
      opts: ["Deny: no remote access after hours", "Allow, limited to the Engineering share she works in, and keep checking the session", "Allow full access to every server so she is not blocked", "Allow only if Tom Becker calls IT first"], answer: 1 },
    { id: "r2", q: "Request 2 (Priya, unmanaged personal PC):", kind: "choice",
      opts: ["Allow, because she passed MFA", "Deny direct access; offer only a limited option such as a browser-based or virtual desktop session that keeps files off the PC", "Allow, but email her a reminder about antivirus", "Allow read and write, but only until midnight"], answer: 1 },
    { id: "r3", q: "Request 3 (CAD vendor, ENG-APP02):", kind: "choice",
      opts: ["Keep the permanent VPN account; vendors need to be able to work any time", "Just-in-time access: an account enabled only for Thursday's window, reaching only ENG-APP02, with MFA and a recorded or watched session", "Give the vendor Dee's admin password for the day", "Deny: vendors may never touch Cedar Creek systems"], answer: 1 },
    { id: "r4", q: "Request 4 (svc-backup, interactive login on a laptop at 2 AM):", kind: "choice",
      opts: ["Allow, service accounts need flexibility", "Deny and alert: a service account should never log in interactively, so this is a sign it may be compromised", "Allow, but log it for review next week", "Ask the user of FIN-LT-09 in the morning"], answer: 1 },
    { id: "r5", q: "Request 5 (PLANT-PC-07 to FS-HR01):", kind: "choice",
      opts: ["Allow: it is inside the company network, so it is trusted", "Deny: there is no business need, and the plant network should not have an implicit trust path to HR data", "Allow during first shift only", "Allow, but only if the operator account is signed in"], answer: 1 },
    { id: "r6", q: "Request 6: list exactly what access the HR coordinator should have, and what she should NOT have.", kind: "text" },
    { id: "r7", q: "Request 7 (Tom's unused domain admin rights):", kind: "choice",
      opts: ["Keep them, he is a department manager", "Remove them; if he ever needs elevated access, grant it just in time with approval", "Keep them but change his password every 30 days", "Move them to another engineer's account"], answer: 1 },
    { id: "r8", q: "Request 8: which Zero Trust principle would most have limited the SolarWinds damage, and what would it look like for a monitoring server? Answer in three or four sentences.", kind: "text" },
    { id: "r9", q: "In these decisions you acted as the component that evaluates policy and decides. What is that component called?", kind: "choice",
      opts: ["Policy enforcement point", "Policy engine", "Implicit trust zone", "Subject"], answer: 1 }
  ],
  reflection: "Pick one of today's eight decisions that would annoy the person asking. Explain how you would explain the decision to them, and what you would offer so they can still get their work done."
};

COURSE_LABS['6.6'] = {
  id: "6.6", week: 6, title: "Phishing simulation results", mins: 35, env: "kali",
  goal: "Analyze the results of Cedar Creek's December phishing simulation with grep, cut, sort, uniq, and awk. Measure click, credential, and report rates, find where training would help most, and turn the numbers into an awareness plan.",
  youNeed: [
    "Your Kali VM, logged in",
    "The Week 6 lab pack in ~/labs/cedarcreek-week6 (Lab 6.1, step 1)",
    "Lesson 6.6 (security awareness) finished",
    "About 35 minutes"
  ],
  steps: [
    {
      title: "Read the campaign plan",
      body: [
        "A phishing simulation sends a realistic but harmless phishing email to staff, with management's approval, and records what people do. The goal is to measure risk and target training, not to catch people out.",
        "Read the plan, especially the lure, the columns, and the ground rules."
      ],
      cmd: "cd ~/labs/cedarcreek-week6/awareness\ncat campaign_plan.txt",
      expect: "The December plan: a fake 'holiday bonus statement' from cedarcreek-benefits.com sent on December 16, the meaning of each column, and the rule that managers get department totals, not names."
    },
    {
      title: "Look at the data",
      body: [
        "Check the header and a few rows, and count the lines. One line is the header, so the number of mailboxes is one less than wc -l prints.",
        "The columns are numbered from 1: email (1), department (2), building (3), trained (4), opened (5), clicked (6), submitted (7), reported (8), report_min (9)."
      ],
      cmd: "head -5 phish_sim_results.csv\nwc -l phish_sim_results.csv",
      expect: "The header line, four data rows of yes and no values, then 115 phish_sim_results.csv."
    },
    {
      title: "Meet awk",
      body: [
        "<code>awk</code> reads a file line by line, splits each line into fields, and lets you test and print them. <code>-F,</code> sets the comma as the separator. <code>$6</code> means field 6. <code>'$6==\"yes\"'</code> keeps only lines where field 6 is exactly yes.",
        "Count the people who clicked, then print who clicked and their department. Field numbers work just like <code>cut -f</code>, but awk can compare values, which cut cannot."
      ],
      cmd: "awk -F, '$6==\"yes\"' phish_sim_results.csv | wc -l\nawk -F, '$6==\"yes\" {print $1, $2}' phish_sim_results.csv",
      expect: "A count, then one line per clicker with their email address and department."
    },
    {
      title: "The three numbers every campaign reports",
      body: [
        "Report three counts: <strong>clicked</strong> the link, <strong>submitted</strong> something into the fake sign-in page (the worst outcome, because a real attacker would now have a password), and <strong>reported</strong> the email with the Report button (the best outcome).",
        "Divide each by the number of mailboxes to get a rate. For example, 23 clicks out of 200 mailboxes is 23 / 200 = 0.115, or about 12%. Round to a whole percent."
      ],
      cmd: "awk -F, '$7==\"yes\"' phish_sim_results.csv | wc -l\nawk -F, '$8==\"yes\"' phish_sim_results.csv | wc -l\nawk -F, '$7==\"yes\" {print $1, $2, \"trained=\" $4}' phish_sim_results.csv",
      expect: "The submitted count, the reported count, then the few people who submitted, with their department and training status.",
      tip: "One of the people who submitted is m.alvarez. In Lab 6.2 that same account had a password cracked from the common wordlist. In a real attack, the stolen password and the weak password would point to the same account."
    },
    {
      title: "Clicks by department: counts and rates",
      body: [
        "Count clicks per department with the pattern you used on the badge log in Week 1: pull the field, sort, count, sort by count.",
        "A big department will have more clicks just because it has more people. To compare fairly, you need the <strong>rate</strong>. The second command counts mailboxes and clicks per department and prints the rate. Inside awk, <code>n[$2]++</code> adds one to a counter named after the department, and the <code>END</code> block runs after the last line to print the totals. <code>NR&gt;1</code> skips the header line (NR is the line number)."
      ],
      cmd: "awk -F, '$6==\"yes\" {print $2}' phish_sim_results.csv | sort | uniq -c | sort -nr\nawk -F, 'NR>1 {n[$2]++; if ($6==\"yes\") c[$2]++} END {for (d in n) printf \"%-17s %2d of %2d clicked (%d%%)\\n\", d, c[d], n[d], 100*c[d]/n[d]}' phish_sim_results.csv | sort -t'(' -k2 -nr",
      expect: "First a ranked count with Production on top. Then every department with its rate, sorted from highest rate to lowest. Customer Service and Maintenance have the highest rates even though Production has the most clicks.",
      tip: "Copy the long awk command from this page. The %% prints a percent sign, and %-17s pads the department name so the columns line up."
    },
    {
      title: "Report rates by department",
      body: [
        "Clicks show risk; reports show engagement. Use the same counter pattern on field 8 to get each department's report rate, and save it to a file you could send to managers. <code>| tee dept_reports.txt</code> shows the output on screen and writes it to a file at the same time."
      ],
      cmd: "awk -F, 'NR>1 {n[$2]++; if ($8==\"yes\") r[$2]++} END {for (d in n) printf \"%-17s %2d of %2d reported (%d%%)\\n\", d, r[d], n[d], 100*r[d]/n[d]}' phish_sim_results.csv | sort -t'(' -k2 -nr | tee dept_reports.txt",
      expect: "Every department with its report rate, highest first. IT is on top, as you would hope, followed by Finance. A file named dept_reports.txt now holds the same table."
    },
    {
      title: "Does training make a difference?",
      body: [
        "Field 4 says whether the person finished the annual awareness training. Compare the click rate of trained and untrained people with the same counter trick, this time grouped by field 4."
      ],
      cmd: "awk -F, 'NR>1 {n[$4]++; if ($6==\"yes\") c[$4]++} END {for (t in n) printf \"trained=%s: %d of %d clicked (%d%%)\\n\", t, c[t], n[t], 100*c[t]/n[t]}' phish_sim_results.csv",
      expect: "Two lines. The untrained group clicked at a rate several times higher than the trained group.",
      tip: "This is a correlation, not proof. People who finish training on time may also be more careful in general. It is still strong evidence for getting the untrained staff through the course."
    },
    {
      title: "How fast did reports come in?",
      body: [
        "Speed matters. In a real attack, the first report is the security team's alarm bell: the sooner it rings, the sooner the team can pull the message from every mailbox and block the sender. Print the report times, sort them numerically, and look at the first few."
      ],
      cmd: "awk -F, '$8==\"yes\" {print $9, $1}' phish_sim_results.csv | sort -n | head -5",
      expect: "The five fastest reports, in minutes after the 9:00 AM send, each with the reporter's email address. The fastest came in just a few minutes after the send."
    },
    {
      title: "Office versus plant",
      body: [
        "Most plant workers share kiosks and read email less often than office staff, so their risks and the right training differ. Compare the two buildings."
      ],
      cmd: "awk -F, 'NR>1 {n[$3]++; if ($6==\"yes\") c[$3]++; if ($4==\"yes\") t[$3]++} END {for (b in n) printf \"%s: %d mailboxes, %d clicked, %d trained\\n\", b, n[b], c[b], t[b]}' phish_sim_results.csv",
      expect: "Two lines, office and plant. The plant has more clicks and fewer trained people than the office."
    },
    {
      title: "Turn numbers into a plan",
      body: [
        "Use what you found to plan the next quarter. A good awareness plan names who gets what training, how you will measure it, and what you will report to leadership. Remember the ground rules: department totals for managers, no public lists of names, and nobody is punished for clicking a test."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many mailboxes received the simulation?", kind: "number", answer: 114 },
    { id: "c2", q: "How many people clicked the link?", kind: "number", answer: 12 },
    { id: "c3", q: "What was the overall click rate, to the nearest whole percent?", kind: "text", answer: ["11", "11%", "11 %", "11 percent"] },
    { id: "c4", q: "How many people submitted something into the fake sign-in page?", kind: "number", answer: 4 },
    { id: "c5", q: "How many people reported the email?", kind: "number", answer: 32 },
    { id: "c6", q: "Which department had the most clicks (by count)?", kind: "text", answer: ["Production"] },
    { id: "c7", q: "Which department had the highest click rate?", kind: "text", answer: ["Customer Service", "CustomerService", "Customer Service (30%)"] },
    { id: "c8", q: "What was the click rate of untrained staff, to the nearest whole percent?", kind: "text", answer: ["26", "26%", "26 %", "25", "25%", "25.7", "25.7%"] },
    { id: "c9", q: "How many minutes after the send did the fastest report arrive?", kind: "number", answer: 3 },
    { id: "c9b", q: "Not counting IT, which department had the highest report rate?", kind: "text", answer: ["Finance"] },
    { id: "c10", q: "Write a 4 to 6 line awareness plan for next quarter: who gets which training first, one plant-specific change, how you will reward reporting, and the two numbers you will track.", kind: "text" }
  ],
  reflection: "Greg Palmer asks: 'Our click rate was only 11%. Are we fine?' Answer him in a short paragraph. Use at least two other numbers from your analysis and explain why one click can be enough for an attacker."
};

COURSE_LABS['6.7'] = {
  id: "6.7", week: 6, title: "Follow up on a phish: who received it, who clicked, who is compromised", mins: 40, env: "kali",
  goal: "Kevin reported report-01 and did not click. Did anyone else? Use the Microsoft 365 message trace, the FW-CORE web log, and the Microsoft 365 sign-in log to find every recipient, every click, and every account the attacker got into, then write the containment list.",
  youNeed: [
    "Your Kali VM, logged in",
    "The Week 6 lab pack in ~/labs/cedarcreek-week6 (Lab 6.1, step 1)",
    "Lab 6.1 (report-01) and Lesson 6.6 finished",
    "About 40 minutes"
  ],
  steps: [
    {
      title: "Three logs, one question",
      body: [
        "In Lab 6.1 you decided report-01 was phishing from the look-alike domain cedarcreek-it.com. One report rarely means one recipient. Jordan blocked the domain on FW-CORE's web filter at 10:15 AM on Thursday, but the email arrived at 8:02 AM. What happened in those two hours?",
        "You have three exports, all in Cedar Creek local time: the <strong>message trace</strong> (every email Microsoft 365 handled that day), the <strong>web log</strong> (every website office PCs visited through FW-CORE), and the <strong>sign-in log</strong> (every Microsoft 365 sign-in). Look at the first lines of each."
      ],
      cmd: "cd ~/labs/cedarcreek-week6/logs\nhead -3 message_trace.csv\nhead -3 fw_web.log\nhead -3 m365_signins.csv",
      expect: "The message trace has date_time, sender, recipient, subject, status. The web log uses key=value fields like the VPN log. The sign-in log has date_time, user, ip, result, mfa_detail."
    },
    {
      title: "Who received it?",
      body: [
        "Search the message trace for the attacker's domain. Count all the messages, then split them by status. <strong>Delivered</strong> reached an inbox; <strong>Quarantined</strong> was held by the filter and never reached the user."
      ],
      cmd: "grep -c 'cedarcreek-it.com' message_trace.csv\ngrep 'cedarcreek-it.com' message_trace.csv | cut -d, -f5 | sort | uniq -c\ngrep 'cedarcreek-it.com' message_trace.csv | grep Delivered | cut -d, -f3 | head",
      expect: "31 messages: 27 Delivered and 4 Quarantined, all sent within about a minute of 8:02 AM, then the first ten delivered recipients."
    },
    {
      title: "Who clicked?",
      body: [
        "Now the web log. Each phishing link carried the recipient's name in <code>?u=</code>, but the user= field (from the PC's sign-in) is more reliable. Keep only visits to the attacker's host that were allowed, and list each user once.",
        "<strong>GET</strong> means the browser loaded the page. <strong>POST</strong> means the browser sent data back, here the fake sign-in form. A POST to a phishing page almost always means a password was typed in."
      ],
      cmd: "grep 'host=cedarcreek-it.com' fw_web.log\ngrep 'host=cedarcreek-it.com' fw_web.log | grep 'action=allowed' | grep 'method=GET' | grep -o 'user=[^ ]*' | sort -u\ngrep 'host=cedarcreek-it.com' fw_web.log | grep 'method=POST' | grep -o 'user=[^ ]*'",
      expect: "Five users loaded the page between about 8:10 and 8:25 AM. Two of them also sent a POST. One last visit at 10:20 AM shows action=blocked, so Jordan's block worked."
    },
    {
      title: "Did the attacker use the stolen passwords?",
      body: [
        "The phishing server was 203.0.113.77 (you found it in report-01's headers). Attackers often sign in from the same infrastructure. Search the sign-in log for that address.",
        "Read the <code>mfa_detail</code> column carefully. The attacker had the password, so Microsoft 365 sent an MFA push to the real user's phone. Each 'denied' means the user said no. Watch what happens after several pushes in a row."
      ],
      cmd: "grep '203.0.113.77' m365_signins.csv",
      expect: "Six lines. One user denied three pushes and then approved the fourth, giving the attacker a Success. The other user denied two pushes, and the attacker gave up.",
      tip: "You have seen 203.0.113.77 before: it is one of the IRONLATCH addresses in the Heartland ISAC update you swept in Week 5. The ransomware crew is now working on Cedar Creek's people directly. Add that to your note for Marcus."
    },
    {
      title: "MFA fatigue",
      body: [
        "Sending push after push until a tired or confused user taps Approve is called <strong>MFA fatigue</strong> or push bombing. MFA did its job for one user and failed for the other, because a simple yes/no push can be approved by mistake.",
        "Stronger options make this attack much harder: <strong>number matching</strong> (the user must type a number shown on the sign-in screen, which the attacker cannot see), and <strong>phishing-resistant MFA</strong> such as passkeys and security keys, which only work on the real Microsoft site. Training matters too: 'If you get a push you did not start, deny it and report it.'"
      ]
    },
    {
      title: "Check that nothing else is unusual",
      body: [
        "Cedar Creek's own internet address is 198.51.100.24, so normal office sign-ins come from it. <code>awk</code> can print every line whose IP (field 3) is something else. If only the attacker's lines appear, there is no other sign of the attacker in this log."
      ],
      cmd: "awk -F, 'NR>1 && $3!=\"198.51.100.24\"' m365_signins.csv\ngrep -c '198.51.100.24' m365_signins.csv",
      expect: "Only the six 203.0.113.77 lines, then the count of normal sign-ins from the company's address."
    },
    {
      title: "What did the attacker do once inside?",
      body: [
        "The Microsoft 365 audit log records what each account did: mail it read, rules it created, and files it opened or downloaded. Search it for the attacker's address.",
        "Two things matter most. An <strong>inbox rule</strong> that forwards mail to an outside address and deletes the original lets the attacker keep reading the mailbox even after the password is changed, and hides replies from the real user. <strong>FileDownloaded</strong> lines show data leaving: here, engineering files from customer folders, which are Cedar Creek's crown jewels."
      ],
      cmd: "grep '203.0.113.77' m365_audit.csv\ngrep '203.0.113.77' m365_audit.csv | grep -c 'FileDownloaded'\ngrep 'New-InboxRule' m365_audit.csv | cut -d, -f5",
      expect: "Nine lines from 203.0.113.77: the mailbox opened, a new inbox rule two minutes later, then seven downloads of customer drawings and specs over about half an hour. The rule forwards mail to an outside address and deletes the original.",
      tip: "Customer drawings leaving the company may trigger contract or legal duties to tell those customers. That decision belongs to leadership, with the incident response process you study in Week 8."
    },
    {
      title: "Repeat clickers",
      body: [
        "Six days later, on December 16, Cedar Creek ran its phishing simulation (Lab 6.6). Did any of the five people who clicked the real phish click the simulation too? <code>grep -E</code> with <code>|</code> matches any of several names, and the <code>^</code> anchors each one to the start of the line."
      ],
      cmd: "grep -E '^(g.rankin|y.upton|f.hester|u.beckett|n.nolan)@' ../awareness/phish_sim_results.csv | cut -d, -f1,2,4,6",
      expect: "Five lines showing email, department, trained, and clicked. Only one of the five clicked again, and that person had not finished awareness training."
    },
    {
      title: "Build the containment list",
      body: [
        "Sort everyone into groups, because each group needs a different action.",
        "The <strong>compromised</strong> account: password reset, revoke all active sessions, delete the forwarding rule, review sent items and file access, and treat it as an incident. Customer drawings have already left the company.",
        "The account whose password was <strong>stolen but not used</strong>: password reset now, because the attacker still has it.",
        "Users who <strong>clicked but did not submit</strong>: a quick check of their PCs and a short training moment.",
        "Everyone who <strong>received</strong> it: remove the message from every mailbox, block the domain and IP address, and thank Kevin for the report."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many mailboxes did the phishing email reach (Delivered)?", kind: "number", answer: 27 },
    { id: "c2", q: "How many copies did the filter quarantine?", kind: "number", answer: 4 },
    { id: "c3", q: "How many different users loaded the phishing page before the block?", kind: "number", answer: 5 },
    { id: "c4", q: "How many users submitted the fake sign-in form (POST)?", kind: "number", answer: 2 },
    { id: "c5", q: "Which account did the attacker sign in to successfully? Give the username.", kind: "text", answer: ["g.rankin", "g.rankin@cedarcreek-ind.com"] },
    { id: "c6", q: "How many MFA pushes did that user deny before approving one?", kind: "number", answer: 3 },
    { id: "c7", q: "At what time did the attacker's sign-in succeed? (HH:MM:SS)", kind: "text", answer: ["08:19:55", "8:19:55", "2026-12-10T08:19:55", "08:19:55 AM", "8:19:55 AM"] },
    { id: "c8", q: "What is the attack called when someone sends push after push until the user approves one?", kind: "choice", opts: ["MFA fatigue (push bombing)", "Pass-the-hash", "SIM swapping", "Credential stuffing"], answer: 0 },
    { id: "c9", q: "Which user's password must be reset even though the attacker never got in? Give the username.", kind: "text", answer: ["y.upton", "y.upton@cedarcreek-ind.com"] },
    { id: "c10", q: "What outside address does the attacker's inbox rule forward mail to?", kind: "text", answer: ["gr.archive@freemail-box.net", "forward_to=gr.archive@freemail-box.net"] },
    { id: "c11", q: "How many files did the attacker download?", kind: "number", answer: 7 },
    { id: "c12", q: "Which of the five clickers also clicked the December 16 simulation? Give the username.", kind: "text", answer: ["g.rankin", "g.rankin@cedarcreek-ind.com"] },
    { id: "c13", q: "Write the containment list: for each group (compromised, password stolen, clicked only, received), name the users or the count and the actions. Include the inbox rule.", kind: "text" }
  ],
  reflection: "Write the two-sentence message you would add to Cedar Creek's next monthly awareness tip about unexpected MFA prompts, and name one technical change that would have stopped this attack even after the user approved the push."
};
