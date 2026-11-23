// Week 6 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['6.1'] = {
  id: '6.1', week: 6, title: 'Social engineering: how attackers hack people', mins: 15, module: 'Security+ objective 2.2',
  intro: "In August, nobody broke into a Cedar Creek server. Someone wrote a short email, pretended to be the CFO, and asked Amanda Singh to send $48,750. That is social engineering, and it is how most attacks start. No firewall blocks a convincing phone call, and no antivirus stops a worried employee from handing over a password. This lesson names the tricks, explains why they work on smart people, and gives you the one habit that defeats almost all of them.",
  sections: [
    {
      title: 'What social engineering is',
      body: [
        "<strong>Social engineering</strong> is manipulating people into doing something that helps an attacker: revealing a password, opening a file, holding a door, or sending money. It attacks the person instead of the computer.",
        "It works because it uses normal, helpful behavior. People want to help a coworker, obey a boss, fix a problem quickly, and avoid trouble. An attacker builds a situation where the helpful choice is the harmful one.",
        "Social engineering is cheap, needs little technical skill, and is hard to block with technology alone. That is why it is the first step in so many attacks, from simple fraud to nation-state espionage. Recall from Week 1 that people are part of the <strong>attack surface</strong>: every employee with an inbox, a phone, or a badge is a possible way in."
      ],
      keyTerms: [
        { term: 'Social engineering', definition: 'Manipulating people into revealing information or taking actions that help an attacker.' },
        { term: 'Pretext', definition: 'The made-up story or identity an attacker uses to make a request seem normal.' }
      ]
    },
    {
      title: 'How an attack is built',
      figure: { id: 'se-anatomy', caption: 'Most social engineering follows the same four steps. The August BEC attempt fits every one.' },
      body: [
        "Most social engineering attacks follow four steps. First, the attacker does <strong>research</strong>, often using open-source intelligence (OSINT): information anyone can find, such as the company website, job postings, social media, and press releases. Second, they choose a <strong>pretext</strong>, a believable story and identity. Third, they pull a psychological <strong>lever</strong> to rush or pressure the target. Fourth, they make <strong>the ask</strong>: click, pay, share, or let me in.",
        "The levers are well known. Security trainers often call them the principles of influence. Learn to notice them, because they show up in almost every attack."
      ],
      table: {
        head: ['Lever', 'What it sounds like', 'Why it works'],
        rows: [
          ['Authority', '"This is the CFO." "I\'m from corporate IT."', 'People follow instructions from people above them.'],
          ['Urgency', '"Before today\'s payment run." "Your password expires in 4 hours."', 'Rushed people skip checks.'],
          ['Intimidation', '"Your account will be reported to the authorities."', 'Fear pushes people to comply quickly.'],
          ['Scarcity', '"Only three bonus slots left."', 'People act fast when something seems limited.'],
          ['Consensus (social proof)', '"Everyone in your department has already updated."', 'People copy what others seem to be doing.'],
          ['Familiarity and trust', 'Using a coworker\'s name, a vendor you use, an inside detail', 'People relax with names and details they recognize.']
        ]
      }
    },
    {
      title: 'Email and message attacks',
      body: [
        "<strong>Phishing</strong> is a fraudulent message, usually email, sent to many people at once and pretending to come from a trusted brand or service. Its goal is to steal passwords or payment details or to install malware. Fake bank, shipping, and password-expiry notices are classic examples.",
        "<strong>Spear phishing</strong> is phishing aimed at one person or a small group, using personal details: their name, manager, current project, or vendors. Because it is researched, it is far more convincing. <strong>Whaling</strong> is spear phishing aimed at senior executives such as the CEO, CFO, or general counsel, whose approval can move large sums or reveal sensitive plans.",
        "<strong>Business email compromise (BEC)</strong> uses email that impersonates an executive or a trusted vendor to trick staff into sending money or changing payment details. The attacker may spoof an address, use a look-alike domain, or take over a real mailbox. BEC often has no link or attachment at all, so email filters have little to catch.",
        "<strong>Smishing</strong> is phishing by Short Message Service (SMS) text message, such as a fake delivery notice with a short link. Attackers also use instant messaging and collaboration tools such as Teams, where a message from an outside account can look like it came from a coworker."
      ],
      callout: { kind: 'cedar', title: 'August was BEC, with a dash of whaling', text: "The August email to Amanda claimed to be from Greg Palmer, asked for an urgent wire to a new vendor, and gave a reason not to call. It used a look-alike reply address on cedarcreek-lnd.com, a domain owned by the PAPERWIRE fraud ring. That is business email compromise. It used the CFO's authority and urgency as its levers. Amanda stopped it by doing the one thing the attacker asked her not to do: she called." }
    },
    {
      title: 'Voice and in-person attacks',
      body: [
        "<strong>Vishing</strong> (voice phishing) uses phone calls. A caller pretends to be IT support, a bank's fraud team, or a vendor, and asks for a password, a one-time code, or remote access to a PC. Caller ID can be faked, so a familiar number proves nothing.",
        "<strong>Pretexting</strong> is building a false scenario to justify a request: 'I'm the new auditor and need a list of admin accounts,' or 'I'm a new hire and forgot my password on my first day.' <strong>Impersonation</strong> is pretending to be a specific person or role, such as a delivery driver, a technician, or a known executive.",
        "Some attacks happen face to face. <strong>Tailgating</strong> is following an authorized person through a secured door without their knowledge. <strong>Piggybacking</strong> is the same thing when the employee knowingly holds the door, often for someone carrying boxes or wearing a uniform. <strong>Shoulder surfing</strong> is watching someone type a password or PIN. <strong>Dumpster diving</strong> is searching trash for papers, drives, or notes with useful information."
      ],
      callout: { kind: 'cedar', title: 'Cedar Creek already has two good habits', text: "The help desk calls a user back on their desk phone before any password reset, which defeats most vishing aimed at Jordan. And the badge log you searched in Week 1 showed a tailgate at the dock door on November 4, matching what Marcus saw on the walk-through. Good habits exist here. They just are not everywhere yet." }
    },
    {
      title: 'Traps and look-alikes',
      figure: { id: 'se-types', caption: 'Social engineering attacks grouped by the channel they use, with the clue that names each one.' },
      body: [
        "<strong>Baiting</strong> leaves something tempting for the victim to pick up: a USB drive labeled 'Payroll Q4' in the parking lot, or a 'free' download. Curiosity does the rest. In a 2016 study at the University of Illinois, researchers dropped about 300 USB drives around campus, and people opened files on nearly half of them.",
        "A <strong>watering hole attack</strong> infects a website the targets are known to visit, such as an industry association or supplier portal, and waits for them to come. <strong>Brand impersonation</strong> copies the logos, colors, and wording of a trusted company in emails or fake websites. <strong>Typosquatting</strong> registers domain names that differ from a real one by a typo or a swapped character, such as cedarcreek-lnd.com in place of cedarcreek-ind.com. A fake free Wi-Fi hotspot with a trusted-sounding name, called an <strong>evil twin</strong>, lures people in the same way.",
        "<strong>Misinformation</strong> is false information spread without intent to harm. <strong>Disinformation</strong> is false information spread on purpose, for example a fake press release about a company recall, posted to damage its reputation or move its stock. Both can be part of influence campaigns that target a whole organization or the public."
      ]
    },
    {
      title: 'Red flags, and the one habit that beats them',
      body: [
        "Every attack above leaves clues. Watch for these:"
      ],
      list: [
        "An unexpected request for money, passwords, codes, gift cards, or changes to bank details.",
        "Pressure: a deadline, a threat, or a reason you cannot check ('I'm in meetings, don't call').",
        "A sender, domain, or caller that is almost right, or a reply address that differs from the sender.",
        "Links whose real destination does not match the text, and unexpected attachments.",
        "Someone without a badge who wants to follow you through a door."
      ],
      callout: { kind: 'real', title: 'Target: it started with an email to a vendor', text: "The 2013 Target breach exposed about 40 million payment cards. Reporting by Brian Krebs in 2014 said the attackers first got into Fazio Mechanical, Target's heating and air conditioning (HVAC) contractor, reportedly through a phishing email that installed malware. They then used the contractor's network login to get into Target. One email to a small vendor opened the door to a retailer." }
    },
    {
      title: 'Verify through a second channel',
      body: [
        "The habit that beats almost every social engineering attack is <strong>out-of-band verification</strong>: confirming a request through a different channel that you already trust, not one the requester gave you. If an email asks for a wire, call the person on the number in the company directory. If a caller says they are from IT, hang up and call the help desk number you know. If a vendor's 'new bank details' arrive by email, call the vendor contact on file.",
        "The second habit is <strong>reporting</strong>. Cedar Creek's Outlook has a Report button. A report from one person lets the security team pull the same message from every mailbox before someone else falls for it. Reporting a real message by mistake costs nothing; missing a phish can cost a great deal."
      ],
      callout: { kind: 'exam', title: 'Name the attack from the clue', text: "Questions usually hide the answer in one detail. Many people, generic brand: phishing. One named person, personal details: spear phishing. A CEO or CFO as the target: whaling. Fake executive or vendor asking for payment: BEC. Phone call: vishing. Text message: smishing. A made-up story to justify a request: pretexting. USB drive left out: baiting. Infected site the victims visit: watering hole. Look-alike domain: typosquatting. Following through a door: tailgating, or piggybacking if the employee knowingly holds it." }
    }
  ],
  check: [
    { q: "An attacker studies Cedar Creek's website and LinkedIn to learn who approves payments, then emails only that person by name about a real vendor. What is this?", opts: ["Phishing", "Watering hole", "Smishing", "Spear phishing"], ans: 3, why: "A researched, personalized message aimed at one person is spear phishing. Generic messages sent to many people are phishing." },
    { q: "A caller says he is from Microsoft support, claims Kevin's PC is sending virus alerts, and asks for remote access to fix it. Which attack is this?", opts: ["Vishing", "Baiting", "Typosquatting", "Tailgating"], ans: 0, why: "Social engineering over a voice call is vishing. The fake support story is also a pretext." },
    { q: "Which psychological lever does 'Your password expires in 4 hours' mainly use?", opts: ["Consensus", "Scarcity", "Urgency", "Familiarity"], ans: 2, why: "A short deadline creates urgency, which pushes people to act before they check." },
    { q: "Someone registers cedarcreek-lnd.com to send email that looks like it came from cedarcreek-ind.com. What is this technique called?", opts: ["Evil twin", "Typosquatting", "Pretexting", "Dumpster diving"], ans: 1, why: "Registering a domain that differs from the real one by a small typo or swapped character is typosquatting." },
    { q: "An email that appears to be from Greg asks Amanda to change a vendor's bank details and not to call him. What is the best response?", opts: ["Reply to the email to confirm it is really Greg", "Make the change, since the email uses Greg's name", "Forward it to the vendor and ask them", "Call Greg on the number in the company directory before doing anything, and report the email"], ans: 3, why: "Out-of-band verification through a channel you already trust defeats the attack. Replying goes straight back to the attacker." }
  ]
};

COURSE_LESSONS['6.2'] = {
  id: '6.2', week: 6, title: 'Phishing up close: red flags and email headers', mins: 15, module: 'Security+ objectives 2.2, 4.5',
  intro: "Three Cedar Creek employees clicked the Report button last week. Now someone has to decide what each message really is, and that someone is you. Outlook shows a friendly name and a subject line. Underneath, every email carries headers that record where it came from and whether it passed the sender checks. This lesson teaches you to read the visible red flags and the hidden headers, so you can give Jordan a verdict in Lab 6.1.",
  sections: [
    {
      title: 'Red flags you can see',
      body: [
        "Before you open any headers, read the message the way a careful employee would. Most phishing fails at least one of these checks."
      ],
      list: [
        "<strong>The real sender address.</strong> The display name ('Cedar Creek IT Service Desk') can say anything. The address after it is what counts, and the domain is the part after the @.",
        "<strong>Look-alike domains.</strong> paypa1.com with a number 1, microsoft-support.net, cedarcreek-it.com. Read domains slowly, right to left from the last dot.",
        "<strong>Links that lie.</strong> Hover over a link before clicking. If the address that appears does not match the text or the claimed sender, stop.",
        "<strong>Pressure and threats.</strong> 'Suspended in 24 hours', 'permanent closure', 'legal action'.",
        "<strong>Requests for secrets or money.</strong> Real IT departments and banks do not ask for your password by email.",
        "<strong>Risky attachments.</strong> Unexpected .zip, .html, .exe, .iso, or macro-enabled Office files (.docm, .xlsm). QR codes in email are a newer trick, called quishing, that moves the link to your phone, out of reach of the company's filters.",
        "<strong>Generic greetings and odd timing.</strong> 'Dear Valued Customer', or a 'CEO' writing at 3 AM from a phone."
      ],
      callout: { kind: 'tip', title: 'Practice with the Phishing Spotter', text: "The Phishing Spotter in the CyberSec Academy has three practice emails with 16 red flags between them. Aim to find all 16. It trains the same eye you will use on real reports." }
    },
    {
      title: 'Header and body, envelope and letter',
      figure: { id: 'email-path', caption: 'Each server adds a Received header on top. Read them from the bottom up to trace the path.' },
      body: [
        "An email has two parts: the <strong>headers</strong> (lines like From:, To:, Subject:, and many more) and the <strong>body</strong> (the message itself). Most email programs hide all but a few headers. In Outlook you can see them with File, Properties; in Kali you can read a saved .eml file directly.",
        "Email also has two kinds of sender, like a letter in an envelope. The <strong>envelope sender</strong>, recorded as <strong>Return-Path</strong>, is the address the sending server gave and where bounces go. The <strong>From</strong> header is the letter inside, the address people see. They can differ, and an attacker controls both. A third header, <strong>Reply-To</strong>, sets where replies go. A different Reply-To is a classic BEC trick: the From shows the real executive, but your reply goes to the attacker.",
        "Each server that passes the message along adds a <strong>Received</strong> header at the top. So the list reads newest first, and the <strong>bottom</strong> Received header is the oldest. Find the bottom header that your own provider added: it names the server and IP address that handed the message to you. Anything below that line was written before the message reached a server you trust, so it can be faked."
      ],
      keyTerms: [
        { term: 'Return-Path', definition: 'The envelope sender address, used for bounces. It is the domain SPF checks.' },
        { term: 'Reply-To', definition: 'The address replies are sent to. Attackers set it to their own mailbox.' },
        { term: 'Received header', definition: 'A line each mail server adds to record that it handled the message, when, and from where.' }
      ]
    },
    {
      title: 'SPF, DKIM, and DMARC',
      figure: { id: 'email-auth', caption: 'Three checks, three questions. DMARC ties the other two to the From address and tells receivers what to do.' },
      body: [
        "Three standards let a receiving server check whether a message really came from the domain it claims. Each domain owner publishes its rules in DNS (the Domain Name System, the internet's directory).",
        "<strong>Sender Policy Framework (SPF)</strong> lists the servers allowed to send mail for a domain. The receiver compares the sending IP address with that list for the envelope (Return-Path) domain. The result is pass, fail, softfail, or none.",
        "<strong>DomainKeys Identified Mail (DKIM)</strong> adds a digital signature to each message, made with the sending domain's private key. The receiver checks it with the public key published in DNS. A valid signature shows the message came from that domain and was not changed on the way.",
        "<strong>Domain-based Message Authentication, Reporting, and Conformance (DMARC)</strong> does two jobs. It checks <strong>alignment</strong>: did SPF or DKIM pass for the same domain that appears in the visible From address? And it publishes a <strong>policy</strong> telling receivers what to do with mail that fails: <code>p=none</code> (deliver it anyway and just send reports), <code>p=quarantine</code> (send it to junk), or <code>p=reject</code> (refuse it). The receiver records the results in the <strong>Authentication-Results</strong> header."
      ],
      callout: { kind: 'cedar', title: 'Cedar Creek publishes p=none', text: "Cedar Creek's DMARC record says p=none. That means anyone can send mail with a forged @cedarcreek-ind.com From address, fail DMARC, and still be delivered. Moving to quarantine and then reject, after checking that every real sender (Microsoft 365, the payroll provider, the marketing tool) passes, is one of the cheapest fixes on your list." }
    },
    {
      title: 'What passing does not prove',
      body: [
        "SPF, DKIM, and DMARC answer one question: did this message really come from the domain it names? They do not answer: is that domain honest? An attacker who registers cedarcreek-it.com can publish SPF and DKIM records for it, and the mail will pass every check. The checks only stop <em>exact</em> forgeries of a protected domain.",
        "They also cannot help when the attacker sends from a real, compromised mailbox. If a vendor's own email account is taken over, messages from it pass everything, because they truly come from the vendor. This is sometimes called vendor email compromise, and it is one reason payment changes must be verified by phone no matter how clean the email looks.",
        "So treat the checks as one piece of evidence. A fail is a strong warning. A pass means only that you must look at who the domain is, how old it is, and what the message asks you to do."
      ],
      callout: { kind: 'real', title: 'BEC losses are real money', text: "In 2015, the network equipment maker Ubiquiti disclosed in a filing with the U.S. Securities and Exchange Commission that it had lost tens of millions of dollars to criminals who impersonated its employees and sent fraudulent payment requests to its finance department. The FBI has reported business email compromise as one of the costliest types of cybercrime every year since." }
    },
    {
      title: 'Defending email at scale',
      body: [
        "One person checking headers cannot protect 300 employees. Organizations layer controls:"
      ],
      list: [
        "<strong>Email filtering</strong> at the gateway scores each message for spam, malware, and impersonation, and quarantines the worst.",
        "<strong>Link and attachment protection</strong> rewrites links so they are checked when clicked and opens attachments in a sandbox (an isolated test machine) first.",
        "<strong>External sender banners</strong> label mail from outside the company, which makes a fake 'internal' message stand out.",
        "<strong>DMARC at reject</strong> stops exact forgeries of your own domain at every receiver that honors it.",
        "<strong>The Report button</strong> turns every employee into a sensor, and <strong>training</strong> makes the reports more accurate."
      ],
      callout: { kind: 'exam', title: 'Keep the three checks straight', text: "SPF: which servers may send for a domain (IP list in DNS). DKIM: a digital signature that proves the domain sent it and it was not altered. DMARC: alignment with the From address plus a policy (none, quarantine, reject) and reporting. If a question asks which one tells receivers to reject failing mail, the answer is DMARC. S/MIME and PGP are different: they sign or encrypt the message for the person, not the domain." }
    },
    {
      title: 'Working a reported message',
      body: [
        "When a report comes in, follow the same steps every time so nothing is missed. Lab 6.1 has you do the analysis part on three real-looking reports."
      ],
      list: [
        "<strong>Preserve</strong> the message with full headers (an .eml file), not a screenshot or a forward.",
        "<strong>Analyze</strong>: From, Reply-To, Return-Path, the bottom trusted Received header, Authentication-Results, link destinations, attachment names, and the domain's age.",
        "<strong>Decide</strong>: phishing, spam, or legitimate. Write down the evidence.",
        "<strong>Contain</strong>: search all mailboxes for the same sender or subject and remove it, block the domain, and reset the password of anyone who entered it.",
        "<strong>Close the loop</strong>: thank the reporter and tell them the verdict. People who hear back keep reporting."
      ]
    }
  ],
  check: [
    { q: "An email's From line shows g.palmer@cedarcreek-ind.com, but its Reply-To is g.palmer@cedarcreek-lnd.com. What does that mean?", opts: ["Replies will go to a different, look-alike mailbox, a common BEC trick", "The message was encrypted", "Greg has two approved mailboxes", "The message passed DKIM"], ans: 0, why: "Reply-To decides where your answer goes. A look-alike Reply-To sends the conversation to the attacker while the From still looks real." },
    { q: "A message has five Received headers. Which one shows the server that first handed it to your mail provider?", opts: ["The top one", "The bottom one your own provider added", "The one with the newest time", "Received headers do not show this"], ans: 1, why: "Each server adds a Received header on top, so the oldest is at the bottom. The lowest one your own provider wrote is the first trustworthy hop." },
    { q: "Which standard publishes a policy telling receiving servers to quarantine or reject mail that fails authentication?", opts: ["SPF", "DKIM", "DMARC", "S/MIME"], ans: 2, why: "DMARC adds alignment with the From domain, a policy (none, quarantine, reject), and reporting." },
    { q: "A phishing email from cedarcreek-it.com shows spf=pass, dkim=pass, dmarc=pass. What is the right conclusion?", opts: ["The email is safe because it passed", "DMARC is broken", "The email came from Cedar Creek's real servers", "The email really came from cedarcreek-it.com, but that says nothing about whether the domain is honest"], ans: 3, why: "The checks prove the message came from the domain it names. An attacker can set them up on a look-alike domain they own." },
    { q: "Cedar Creek's DMARC record is p=none. What happens to a message that forges @cedarcreek-ind.com and fails DMARC?", opts: ["It is delivered, and a report is sent to Cedar Creek", "It goes to junk", "It is rejected", "It is deleted from every mailbox"], ans: 0, why: "p=none asks receivers to take no action beyond reporting, so forged mail can still reach the inbox." }
  ]
};

COURSE_LESSONS['6.3'] = {
  id: '6.3', week: 6, title: 'Password attacks: how hashes fall', mins: 15, module: 'Security+ objectives 2.4, 1.4',
  intro: "Greg Palmer has approved a password audit. Before you run it in Lab 6.2, you need to know how passwords are stored, how attackers recover them, and why some fall in seconds while others survive for centuries. The answer is rarely clever math. It is people choosing passwords that are short or predictable, and systems storing them in ways that make guessing cheap.",
  sections: [
    {
      title: 'How systems store passwords',
      body: [
        "A well-built system never stores your password itself. It stores a <strong>hash</strong>: the output of a one-way function that turns any input into a fixed-length string. When you log in, the system hashes what you typed and compares the result with the stored hash. If they match, you typed the right password. Nobody, not even an administrator, should be able to turn the hash back into the password.",
        "So how do attackers 'crack' a hash? They cannot reverse it. Instead they <strong>guess</strong>: hash a candidate password, compare, and repeat, millions or billions of times. Cracking is guessing at machine speed. Two things decide how long it takes: how many guesses are needed (the password's strength) and how fast each guess is (the hash's speed).",
        "Windows stores domain passwords as <strong>NT hashes</strong>: an MD4 hash of the password, with no salt. Linux systems like Kali store salted, deliberately slow hashes in /etc/shadow. You will compare the two in Lab 6.2."
      ],
      keyTerms: [
        { term: 'Hash', definition: 'The fixed-length output of a one-way function. The same input always gives the same hash.' },
        { term: 'Password cracking', definition: 'Recovering passwords by hashing guesses and comparing them with stolen hashes.' },
        { term: 'NT hash', definition: 'The unsalted MD4-based hash Windows uses to store account passwords.' }
      ]
    },
    {
      title: 'Online and offline attacks',
      figure: { id: 'online-offline', caption: 'Online guessing is slow, noisy, and limited. Offline cracking of a stolen hash file has no limits at all.' },
      body: [
        "An <strong>online attack</strong> guesses against a live login page or service: the VPN portal, Microsoft 365, or a server's remote login. Every guess travels over the network, can be logged, and can trigger <strong>account lockout</strong> (locking an account after a number of failed tries) or rate limiting. Online attacks are slow and noisy.",
        "An <strong>offline attack</strong> works on a copy of the password hashes that the attacker has stolen, for example from a domain controller backup or a breached website's database. There is no lockout, no log, and no limit except the attacker's hardware. A single modern graphics card (GPU) can try billions of fast hashes per second.",
        "This is why the hashes themselves must be protected like the passwords. Anyone who gets a copy of DC01's account database can attack every Cedar Creek password at leisure, without anyone noticing."
      ],
      callout: { kind: 'cedar', title: 'Why the audit is offline', text: "The authorization for your audit forbids online guessing against DC01 or Microsoft 365. Guessing against live systems could lock out real users and stop work on the plant floor. Dee instead exported the hashes, and you will crack them on your own VM, which is also exactly what an attacker who stole them would do." }
    },
    {
      title: 'Brute force and masks',
      body: [
        "A <strong>brute-force attack</strong> tries every possible combination of characters up to some length. It always succeeds eventually; the question is when. The number of possibilities, called the <strong>keyspace</strong>, is the size of the character set raised to the power of the length.",
        "Six digits give 10<sup>6</sup> = 1,000,000 possibilities, which a laptop tries against NT hashes in well under a second. Eight lowercase letters give 26<sup>8</sup>, about 209 billion: seconds to minutes on one GPU. Twelve characters drawn from all 95 printable keyboard characters give 95<sup>12</sup>, about 540 sextillion (5.4 &times; 10<sup>23</sup>), which is far beyond any attacker's budget if the password is truly random.",
        "A <strong>mask attack</strong> is a smarter brute force that follows a known shape, such as 'one capital, five lowercase, two digits'. Because people build passwords in predictable shapes, masks cut the keyspace dramatically. Against an online login, brute force is stopped by lockout and rate limits. Offline, only length and a slow hash stop it."
      ],
      table: {
        head: ['Password type', 'Keyspace', 'Rough time offline against a fast hash'],
        rows: [
          ['6 digits', '10^6 = 1 million', 'Instant'],
          ['8 lowercase letters', '26^8 = about 2 x 10^11', 'Seconds to minutes'],
          ['8 characters, all 95 types', '95^8 = about 6.6 x 10^15', 'Hours to days'],
          ['12 characters, all 95 types, random', '95^12 = about 5.4 x 10^23', 'Out of reach']
        ]
      }
    },
    {
      title: 'Dictionary and hybrid attacks',
      body: [
        "Most people do not choose random strings. A <strong>dictionary attack</strong> tries words from a list of likely passwords instead of every combination. The most famous list, rockyou.txt, ships with Kali. It comes from the 2009 breach of a company called RockYou, which had stored about 32 million user passwords in plain text. Those real choices became the attacker's best guide to what people pick.",
        "A <strong>hybrid attack</strong> combines a wordlist with rules that change each word the way people do: capitalize the first letter, add a year, add '!' at the end, swap 'a' for '@'. 'Password' becomes 'Password1', 'P@ssword', and 'Password2026!'. Attackers also build <strong>targeted wordlists</strong> from the victim: the company name, products, sports teams, and local places, which is why 'CedarCreek1' and 'Tractor1' are in Dee's list.",
        "Dictionary and hybrid attacks are why a password can meet every complexity rule and still fall in a second."
      ],
      callout: { kind: 'real', title: 'SolarWinds and a guessable password', text: "In 2019, a security researcher reported to SolarWinds that a password for its software update server had been left in a public GitHub repository. News reports later said the password was 'solarwinds123'. SolarWinds fixed it after the report. Nobody has shown that this password was how the 2020 attackers got in, but it shows how a guessable password can sit in the open at a company that ships software to thousands of customers." }
    },
    {
      title: 'Password spraying and credential stuffing',
      body: [
        "Two online attacks are built to get around lockout.",
        "<strong>Password spraying</strong> flips brute force around. Instead of many passwords against one account, it tries one or two very common passwords ('Welcome1', 'Winter2025!') against every account, slowly enough to stay under the lockout threshold. With hundreds of accounts, a few usually match. Watch for it in logs as failed logins spread across many accounts from the same source. In Lab 6.3 you will find one in Cedar Creek's own VPN log.",
        "<strong>Credential stuffing</strong> takes username and password pairs leaked from one breach and tries them on other sites, betting that people reuse passwords. It needs no guessing at all. The defenses are a unique password for every site, multifactor authentication (MFA), and checking new passwords against lists of breached ones."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline: one old account, no MFA', text: "Colonial Pipeline's CEO told the U.S. Senate in June 2021 that the ransomware attackers got in through a legacy virtual private network (VPN) account that did not use multifactor authentication. Investigators were reported to have found that account's password among leaked passwords on the dark web, which suggests it had been exposed or reused elsewhere. A password alone, already known to criminals, was enough." }
    },
    {
      title: 'Rainbow tables, salt, and slow hashes',
      figure: { id: 'salted-hashes', caption: 'Without salt, the same password gives the same hash everywhere. A random salt makes every stored hash unique.' },
      body: [
        "If the same password always gives the same hash, an attacker can do the work once and reuse it forever. A <strong>rainbow table</strong> is a large precomputed table that maps hashes back to passwords, so cracking becomes a lookup. Unsalted hashes, like Windows NT hashes, are exposed to this.",
        "A <strong>salt</strong> is a random value, different for every account, mixed into the password before hashing and stored next to the hash. Salting does not make one password harder to guess, but it means every stored hash is unique. Precomputed tables become useless, identical passwords no longer look identical, and the attacker must attack each account separately.",
        "<strong>Key stretching</strong> makes each guess expensive by running the hash many thousands of times. Algorithms built for password storage, such as bcrypt, scrypt, PBKDF2 (Password-Based Key Derivation Function 2), Argon2, and yescrypt, combine a salt with deliberate slowness. In Lab 6.2's benchmark, a slow salted hash runs thousands of times slower than NT, which turns hours of cracking into years."
      ],
      callout: { kind: 'exam', title: 'Match the attack to its defense', text: "Brute force: length plus lockout (online) or slow hashes (offline). Dictionary or hybrid: block common and breached passwords. Spraying: block common passwords, MFA, and alert on many accounts failing from one source. Credential stuffing: unique passwords per site and MFA. Rainbow tables: salt. If a question says 'one password tried against many accounts', it is spraying. 'Pairs from another breach' is stuffing." }
    }
  ],
  check: [
    { q: "An attacker copies the account database from a domain controller and tries billions of guesses on their own machine. What kind of attack is this?", opts: ["Online attack", "Password spraying", "Offline attack", "Vishing"], ans: 2, why: "Working on stolen hashes away from the live system is an offline attack. Lockout and logging cannot stop it." },
    { q: "Failed logins appear for 180 different Cedar Creek accounts, two attempts each, all trying 'Winter2025!'. What is happening?", opts: ["Brute force against one account", "Password spraying", "Credential stuffing", "A rainbow table attack"], ans: 1, why: "One common password tried across many accounts, slowly enough to avoid lockout, is password spraying." },
    { q: "What does adding a unique random salt to each password before hashing defeat?", opts: ["Shoulder surfing", "Weak passwords that are easy to guess", "Phishing", "Precomputed rainbow tables, and identical passwords looking identical"], ans: 3, why: "Salt makes every stored hash unique, so precomputed tables fail. It does not make a weak password harder to guess one account at a time." },
    { q: "Leaked username and password pairs from a shopping site breach are tried against Cedar Creek's Microsoft 365 logins. What is this attack, and which defense helps most?", opts: ["Credential stuffing; MFA and unique passwords", "Brute force; longer passwords", "Rainbow tables; salting", "Whaling; awareness training"], ans: 0, why: "Reusing breached pairs on another service is credential stuffing. MFA and unique passwords per site break it." },
    { q: "How many possible combinations does a six-digit numeric password have?", opts: ["60", "1,000", "1,000,000", "6,000,000"], ans: 2, why: "Ten digits per position, six positions: 10 to the power of 6 is 1,000,000. A computer tries that many fast hashes in under a second." }
  ]
};

COURSE_LESSONS['6.4'] = {
  id: '6.4', week: 6, title: 'Strong passwords and better authentication', mins: 15, module: 'Security+ objectives 4.6, 2.4',
  intro: "Your audit cracked 16 of Cedar Creek's 25 passwords, and almost all of them met the 2019 rules. That is not because the staff are careless. It is because the rules asked for the wrong things. This lesson explains what actually makes a password strong, why complexity and forced changes backfire, and what a modern policy looks like, so you can rewrite Cedar Creek's policy in Lab 6.4.",
  sections: [
    {
      title: 'Strength is length and unpredictability',
      figure: { id: 'entropy-bars', caption: 'Entropy in bits for random passwords of different kinds. Each extra bit doubles the guessing work.' },
      body: [
        "<strong>Entropy</strong> measures how unpredictable a password is, in bits. For a password chosen at random, entropy = length &times; log2(pool size), where the pool is the set of characters it could be drawn from. Each additional bit doubles the number of guesses an attacker needs.",
        "The pool grows as you add character types: 10 digits, 26 lowercase letters, 52 with uppercase, 62 with digits, and about 95 with symbols. But length multiplies everything. Eight random lowercase letters give 8 &times; 4.7 = about 37.6 bits, crackable in seconds offline. Twelve random characters from all 95 give 12 &times; 6.57 = about 78.8 bits, which would take any real attacker an impractical amount of time.",
        "A passphrase of four words chosen at random from a 7,776-word list (the Diceware method, which uses dice to pick words) gives about 51.7 bits. Six words give about 77.5 bits, close to the 12-character random string, and much easier to remember."
      ],
      table: {
        head: ['Pool', 'Characters', 'Bits per character'],
        rows: [
          ['Digits only', '10', '3.32'],
          ['Lowercase letters', '26', '4.70'],
          ['Upper and lowercase', '52', '5.70'],
          ['Letters and digits', '62', '5.95'],
          ['All printable keyboard characters', '95', '6.57'],
          ['One word from a 7,776-word list', '7,776', '12.9 per word']
        ]
      },
      keyTerms: [
        { term: 'Entropy', definition: 'A measure of unpredictability in bits. For a random password, length times log2 of the pool size.' },
        { term: 'Passphrase', definition: 'A password made of several words, ideally chosen at random, that is long but memorable.' }
      ]
    },
    {
      title: 'Why the formula lies about human passwords',
      body: [
        "The entropy formula only works when every character is chosen at random. People do not choose that way. 'Summer2026!' has 11 characters with upper case, lower case, digits, and a symbol, so the formula would credit it with about 72 bits. But an attacker who knows the season-year-symbol pattern needs only a handful of guesses. Its real strength is close to zero.",
        "<strong>Complexity rules</strong> (must contain an uppercase letter, a digit, a symbol) push people toward the same few tricks: capitalize the first letter, put a digit or '!' at the end, swap 'o' for '0'. Cracking rules undo those tricks first. <strong>Forced periodic changes</strong> make it worse. When a password must change every 90 days, people pick a base and change one small part: Spring to Summer, 1 to 2. An attacker who cracks one old password can often predict the next."
      ],
      callout: { kind: 'cedar', title: 'The pattern on the sticky note', text: "On your first walk-through you found 'VPN: Spring2024!' on a sticky note on FIN-LT-09's monitor. In the audit, five accounts used the same season-year-! pattern, including the former engineer's account that was never turned off. The 2019 memo's 90-day rule did not make Cedar Creek safer. It taught staff a pattern any attacker can guess." }
    },
    {
      title: 'Passphrases and password managers',
      body: [
        "Two habits fix most of the problem. The first is <strong>long passphrases</strong> for the few passwords a person must remember, such as their computer login: several unrelated words, ideally picked at random. Length does the work, and nobody has to remember where the symbols go.",
        "The second is a <strong>password manager</strong>: an application that generates a long random password for every site, stores them all in an encrypted vault, and fills them in. The user remembers one strong passphrase to unlock the vault. Every other password can be 20 or more random characters and unique, which defeats credential stuffing, because a breach at one site exposes nothing anywhere else.",
        "Companies can offer an enterprise password manager with shared vaults for teams. That is the right home for the few credentials a group really must share, with access logged, instead of a spiral notebook beside the admin workstation."
      ]
    },
    {
      title: 'What a modern policy says',
      body: [
        "NIST Special Publication 800-63B, the U.S. government's guidance on authentication, changed password advice sharply in 2017, and its 2025 revision goes further. In short:"
      ],
      list: [
        "<strong>Require length, not composition.</strong> At least 15 characters when the password is the only factor, and at least 8 when it is used together with another factor. Allow long passwords, spaces, and all characters.",
        "<strong>Block bad passwords.</strong> Check every new password against a list of common, expected, and breached passwords, including the company name.",
        "<strong>Do not force periodic changes.</strong> Force a change only when there is evidence of compromise, such as a breach or an audit crack.",
        "<strong>Limit guessing.</strong> Rate-limit or lock out repeated failed logins.",
        "<strong>Support password managers</strong> by allowing paste into password fields."
      ],
      callout: { kind: 'exam', title: 'The exam still lists the classic settings', text: "Security+ expects you to know the classic password policy settings: length, complexity, reuse (password history), expiration (maximum age), and minimum age (which stops people cycling straight back to an old password). Know what each one does. If a question asks for the best modern practice, prefer length, blocklists, password managers, and MFA over frequent forced changes." }
    },
    {
      title: 'Backstops: MFA, lockout, and passwordless',
      body: [
        "Even a strong password can be phished or stolen from another site. That is why passwords should rarely stand alone. <strong>Multifactor authentication (MFA)</strong> requires something besides the password, such as a code from an app, a push approval, or a hardware key. You studied MFA in Week 3. The key point here: MFA turns most stolen or cracked passwords into dead ends, which is exactly what was missing on Colonial Pipeline's VPN account. MFA can still be attacked. In <strong>MFA fatigue</strong> (push bombing), an attacker who has the password sends push after push until a tired user taps Approve. <strong>Number matching</strong>, where the user types a number shown on the real sign-in screen, and <strong>phishing-resistant MFA</strong> such as passkeys and security keys make that much harder.",
        "<strong>Account lockout and throttling</strong> slow online guessing. Set them carefully: lockout that is too aggressive lets an attacker lock everyone out on purpose. Monitoring should also look for spraying patterns across many accounts.",
        "<strong>Passwordless</strong> sign-in, such as passkeys and security keys, replaces the password with a cryptographic key stored on a device and unlocked with a PIN or fingerprint. There is no password to phish, spray, or crack. Microsoft 365 supports it, and it is a good long-term goal for Cedar Creek's office staff."
      ]
    },
    {
      title: 'Shared, service, and default accounts',
      body: [
        "Some of the weakest passwords in the audit did not belong to people. Policies must cover these accounts too."
      ],
      list: [
        "<strong>Shared accounts</strong> such as ccadmin break accountability, because the logs show the account, not the person. Replace them with named accounts. Keep any unavoidable emergency ('break-glass') credential in a vault and log every use.",
        "<strong>Service accounts</strong> run software, not people. Give them long random passwords stored in a vault, the least privilege the service needs, and deny interactive logins. Privileged access management (PAM) tools can rotate these passwords automatically.",
        "<strong>Default credentials</strong> on devices such as cameras, printers, and controllers must be changed at installation.",
        "<strong>Kiosk and shop-floor logins</strong> such as operator need a design answer, not just a stronger password: a locked-down kiosk mode, a separate network, and badge or PIN unlock."
      ],
      callout: { kind: 'real', title: 'Where rockyou.txt came from', text: "The wordlist attackers use most comes from a real breach. In 2009, the social app company RockYou was breached, and its roughly 32 million user passwords had been stored in plain text, with no hashing at all. The list showed how people really choose passwords, and it still cracks a large share of weak passwords today. Storing passwords properly, and choosing ones that are not on such lists, are two sides of the same lesson." }
    }
  ],
  check: [
    { q: "Which password is strongest against an offline attacker who knows common patterns?", opts: ["Summer2026!", "P@ssw0rd1", "Four random unrelated words such as 'gravel lantern cobalt violin'", "CedarCreek#1"], ans: 2, why: "Four randomly chosen words give about 52 bits of real entropy. The others follow patterns that cracking rules try first." },
    { q: "Why do forced 90-day password changes tend to weaken passwords?", opts: ["They make passwords longer", "They stop password managers from working", "They require MFA", "People make small predictable changes, such as moving from Spring2025! to Summer2025!"], ans: 3, why: "Frequent forced changes push people to reuse a base and change one small part, which attackers can predict." },
    { q: "What is the entropy of an 8-character password chosen at random from 26 lowercase letters?", opts: ["About 8 bits", "About 26 bits", "About 37.6 bits", "About 78.8 bits"], ans: 2, why: "Length times log2(pool): 8 times 4.7 is about 37.6 bits." },
    { q: "Which password policy setting stops a user from changing a password and then immediately changing it back to the old one?", opts: ["Complexity", "Maximum password age", "Minimum password age", "Account lockout"], ans: 2, why: "Minimum age forces a wait before the next change, so password history cannot be cycled to reuse an old password." },
    { q: "Which change would best protect Cedar Creek's VPN even if a user's password is cracked or phished?", opts: ["Requiring a symbol in every password", "Requiring MFA on the VPN", "Changing passwords every 30 days", "Hiding the VPN login page"], ans: 1, why: "MFA means a stolen password alone is not enough to sign in." }
  ]
};

COURSE_LESSONS['6.5'] = {
  id: '6.5', week: 6, title: 'Zero Trust and least privilege', mins: 15, module: 'Security+ objectives 1.2, 4.6',
  intro: "Cedar Creek's network was built on an old assumption: anything inside the building is friendly. The plant can reach HR, a vendor's VPN account can reach every server, and the CFO's badge still opens the server room after a tour in 2022. Phishing, cracked passwords, and supply chain attacks all put an attacker inside that trusted space. Zero Trust replaces the assumption with a rule: verify every request, every time, and give each one only what it needs.",
  sections: [
    {
      title: 'The castle and the moat',
      figure: { id: 'trust-models', caption: 'Perimeter trust lets anyone inside go anywhere. Zero Trust checks every request at the resource.' },
      body: [
        "Traditional security was built like a castle: a strong wall (the firewall) and a moat (the VPN) around a network where everyone inside was trusted. Once you were in, you could reach almost anything.",
        "That model fails in three ways. First, attackers get inside easily, through a phished employee, a cracked password, or a trusted vendor. Second, once inside, nothing stops them moving sideways from system to system, which is called <strong>lateral movement</strong>. Third, the walls have moved: staff work from home, data lives in Microsoft 365 and the payroll provider's cloud, and vendors connect from their own networks.",
        "<strong>Zero Trust</strong> is a security model that removes implicit trust based on network location. Being on the office network earns nothing. Every request to every resource is checked on its own merits."
      ],
      callout: { kind: 'cedar', title: 'Cedar Creek is a castle with no inner walls', text: "Today the plant network and the office network can reach each other freely, the CAD vendor keeps a permanent VPN account that reaches the whole server network, and 23 badges open the server room. Each of these trusts a location or a long-ago decision instead of a current, checked need." }
    },
    {
      title: 'The core principles',
      body: [
        "Zero Trust is usually summed up as <strong>never trust, always verify</strong>. In practice it rests on three principles."
      ],
      list: [
        "<strong>Verify explicitly.</strong> Decide each request using every signal available: who the user is and how strongly they proved it (MFA), the health of their device (managed, patched, EDR running), location, time, and whether the behavior is normal for them.",
        "<strong>Use least privilege access.</strong> Grant only the access needed for the task, for only as long as it is needed. Prefer just-in-time access over standing rights.",
        "<strong>Assume breach.</strong> Design as if an attacker is already inside. Segment networks, encrypt traffic, log and monitor everything, and limit the blast radius: how far damage can spread from any one compromised account or system."
      ],
      callout: { kind: 'tip', title: 'MFA everywhere, not just at the front door', text: "Zero Trust applies MFA to the VPN, to Microsoft 365, to administrator consoles, and to sensitive internal applications, not just to the first login of the day. A cracked password from Lab 6.2 should not open anything on its own." }
    },
    {
      title: 'The Zero Trust architecture',
      figure: { id: 'zt-model', caption: 'The control plane decides; the data plane enforces. Every request passes a policy enforcement point.' },
      body: [
        "Security+ describes Zero Trust in terms of two planes, the same split used in network equipment.",
        "The <strong>control plane</strong> makes decisions. The <strong>policy engine</strong> evaluates each request against policy and signals and decides to grant, deny, or revoke access. The <strong>policy administrator</strong> carries out that decision, for example by creating a session token or telling the enforcement point to open a path. Three ideas guide the decisions: <strong>adaptive identity</strong> (trust in an identity changes with context and risk, so an unusual sign-in may need extra verification), <strong>threat scope reduction</strong> (shrink what any one identity or system can reach), and <strong>policy-driven access control</strong> (access comes from written, consistent rules, not one-off exceptions).",
        "The <strong>data plane</strong> carries the actual traffic. A <strong>subject</strong> (a user) or <strong>system</strong> (a device or service) makes a request. The <strong>policy enforcement point (PEP)</strong> sits in front of the resource and allows or blocks the connection as the control plane decides. An <strong>implicit trust zone</strong> is the area behind the PEP where traffic is trusted; Zero Trust keeps those zones as small as possible, ideally one resource each."
      ],
      callout: { kind: 'exam', title: 'Which plane, which part?', text: "Control plane: adaptive identity, threat scope reduction, policy-driven access control, policy administrator, policy engine. Data plane: implicit trust zones, subject/system, policy enforcement point. The engine decides, the administrator executes the decision, and the enforcement point is the gate the traffic passes through." }
    },
    {
      title: 'Least privilege in practice',
      body: [
        "The <strong>principle of least privilege</strong> means every user, system, and application gets only the minimum access its job requires, and nothing more. It limits what an attacker can do with any one stolen account.",
        "Least privilege takes ongoing work:"
      ],
      list: [
        "<strong>Base access on the job</strong>, not on seniority, tenure, or convenience. Role-based access control (RBAC) makes this manageable: permissions go to roles, and people get roles.",
        "<strong>Just-in-time (JIT) access</strong> grants elevated rights only when needed, for a limited time, often with approval, and removes them automatically.",
        "<strong>Review access regularly</strong>, especially when people change roles or leave. The former engineer's account in your audit shows what happens otherwise.",
        "<strong>Give service accounts the least of all</strong>, and never let them log in interactively.",
        "<strong>Separate duties</strong> so no single person can both request and approve a sensitive action, such as adding a vendor and paying it."
      ],
      callout: { kind: 'real', title: 'Target: a vendor login that reached too far', text: "In the 2013 Target breach, the attackers' first foothold was a network login belonging to an HVAC contractor. That login existed so the vendor could work with Target's systems, yet the attackers were able to move from it to the point-of-sale systems that process payment cards. Narrow vendor access and strong segmentation, both least privilege ideas, would have given that stolen login far less to reach." }
    },
    {
      title: 'Assume breach: limit the blast radius',
      body: [
        "Assume breach changes the question from 'how do we keep them out?' to 'when they get in, how far can they go and how fast will we see them?'",
        "<strong>Segmentation</strong> divides the network into zones with controlled paths between them, such as plant, office, servers, and management. <strong>Microsegmentation</strong> goes further, putting policy around individual workloads so even two servers in the same room cannot talk unless a rule allows it. <strong>Continuous monitoring</strong> watches for behavior that does not fit, such as a service account signing in to a laptop at 2 AM.",
        "Least privilege and assume breach work together: small permissions mean a compromised account can do little, and good monitoring means it is noticed quickly."
      ],
      callout: { kind: 'real', title: 'SolarWinds: when trusted software turns', text: "In 2020, attackers inserted a backdoor into updates of SolarWinds Orion, network monitoring software used by thousands of organizations, including U.S. government agencies. Customers installed the updates because they trusted the vendor. Monitoring tools like Orion are often given wide network access and powerful accounts. A Zero Trust approach would still have let the bad update in, but would have limited what the Orion server could reach and flagged its unusual outbound connections, shrinking the blast radius." }
    },
    {
      title: 'A Zero Trust roadmap for Cedar Creek',
      body: [
        "Zero Trust is a direction, not a product you buy. A small company starts with the steps that remove the most implicit trust for the least cost:"
      ],
      list: [
        "MFA on every remote access path and every administrator account.",
        "Device health checks, so only managed, patched computers reach company data.",
        "Separate the plant network from the office and server networks, with only the paths production needs.",
        "Remove standing admin rights; use named admin accounts and just-in-time elevation.",
        "Replace the vendor's permanent VPN account with time-limited access to ENG-APP02 only.",
        "Log access decisions and review them."
      ],
      callout: { kind: 'tip', title: 'Coming up in Lab 6.5', text: "In Lab 6.5 you act as Cedar Creek's policy engine and decide eight real access requests, from an engineer working late to a service account behaving strangely, then apply the same thinking to SolarWinds." }
    }
  ],
  check: [
    { q: "Which statement best describes Zero Trust?", opts: ["Trust everything inside the firewall", "Trust users after their first login of the day", "Block all remote access", "Never trust based on network location; verify every request explicitly"], ans: 3, why: "Zero Trust removes implicit trust based on location and checks each request with identity, device, and context." },
    { q: "In a Zero Trust architecture, which component evaluates a request against policy and decides to allow or deny it?", opts: ["Policy engine", "Policy enforcement point", "Implicit trust zone", "Subject"], ans: 0, why: "The policy engine in the control plane makes the decision. The policy administrator carries it out, and the enforcement point applies it to the traffic." },
    { q: "The CAD vendor needs to patch ENG-APP02 on Thursday. Which approach follows least privilege?", opts: ["A permanent VPN account to the server network", "Access enabled only for Thursday's window, reaching only ENG-APP02, with MFA", "Dee's admin password for the day", "A shared vendor account used by all vendors"], ans: 1, why: "Time-limited, narrowly scoped access with strong authentication is just-in-time least privilege." },
    { q: "Which Zero Trust principle says to design security as if attackers are already inside, segmenting and monitoring to limit damage?", opts: ["Verify explicitly", "Adaptive identity", "Assume breach", "Separation of duties"], ans: 2, why: "Assume breach focuses on limiting blast radius and detecting attackers who have already got in." },
    { q: "Which of these belongs to the data plane in Security+'s Zero Trust model?", opts: ["Policy engine", "Adaptive identity", "Policy administrator", "Policy enforcement point"], ans: 3, why: "The data plane holds the subject or system, the policy enforcement point, and implicit trust zones. The others are control plane parts." }
  ]
};

COURSE_LESSONS['6.6'] = {
  id: '6.6', week: 6, title: 'Security awareness that changes behavior', mins: 15, module: 'Security+ objective 5.6',
  intro: "Cedar Creek's break room poster says 61% of staff finished this year's security awareness training. That number measures attendance, not safety. What matters is what people do on a busy Friday when a convincing email arrives. This lesson covers what a real awareness program teaches, how phishing simulations measure behavior, and which numbers tell leadership whether the program is working. You will analyze Cedar Creek's first simulation in Lab 6.6.",
  sections: [
    {
      title: 'Awareness is a control',
      body: [
        "<strong>Security awareness training</strong> teaches staff to recognize and respond to threats. In Week 1 you classified it as an operational, preventive control: people carry it out, and it aims to stop attacks before they succeed. Reporting is its detective side.",
        "Good programs aim for changed behavior, not completed slides. A once-a-year video that people click through satisfies an auditor but does little. Short, frequent, relevant training, practice with realistic examples, and quick feedback change what people do.",
        "Awareness does not replace technical controls; it covers the gaps they leave. Filters miss some phishing, and nothing technical stops a caller who talks his way past a busy receptionist."
      ]
    },
    {
      title: 'What to teach',
      body: [
        "Security+ lists the topics a user guidance and training program should cover. Each one maps to something you have seen at Cedar Creek."
      ],
      table: {
        head: ['Topic', 'What staff learn', 'Cedar Creek example'],
        rows: [
          ['Policy and handbooks', 'What the rules are and where to find them', 'The Acceptable Use Policy, last revised in 2018'],
          ['Situational awareness', 'Notice what is out of place around you', 'A stranger in a delivery uniform following someone in at the dock'],
          ['Insider threat', 'Recognize and report warning signs, without accusing', 'The former engineer who said the company would \'find out what it lost\''],
          ['Password management', 'Passphrases, password managers, never share or post passwords', 'Passwords on a sticky note, a label, and the break room wall'],
          ['Removable media and cables', 'Do not plug in unknown USB drives or charging cables', 'Engineers moving drawings on personal USB drives'],
          ['Social engineering', 'Phishing, vishing, smishing, pretexting, and how to verify', 'The August BEC attempt'],
          ['Operational security', 'Do not post details attackers can use', 'Posting the payment-run schedule or vendor names online'],
          ['Hybrid and remote work', 'Secure home Wi-Fi, privacy in public, company devices only', 'Engineers who work late from home']
        ]
      }
    },
    {
      title: 'Recognizing anomalous behavior',
      body: [
        "Staff are often the first to notice something wrong. Security+ groups the behavior worth reporting into three kinds.",
        "<strong>Risky</strong> behavior knowingly increases risk, such as disabling antivirus to make a program run, or sharing a password with a coworker. <strong>Unexpected</strong> behavior does not fit the normal pattern, such as a coworker downloading large amounts of drawings late at night, or an account signing in from another country. <strong>Unintentional</strong> behavior is an honest mistake, such as emailing payroll data to the wrong person or clicking a link before thinking.",
        "Training should make reporting easy and safe. People hide mistakes when they fear punishment, and a hidden mistake gives an attacker hours or days. A clear message, 'report it, even if you clicked, and you will not be in trouble', gets reports in minutes."
      ],
      callout: { kind: 'cedar', title: 'Amanda is the model', text: "Amanda Singh got a convincing request from the 'CFO', noticed something was off, verified by phone, and reported it. When report-02 arrived in December, she did it again. Greg thanked her in a company-wide memo. Praising good reports in public is one of the cheapest and strongest awareness tools there is." }
    },
    {
      title: 'Phishing campaigns',
      figure: { id: 'awareness-cycle', caption: 'An awareness program is a cycle: measure, train, test, report, and improve.' },
      body: [
        "A <strong>phishing simulation</strong>, or phishing campaign, sends realistic but harmless phishing emails to staff, with management's approval, and records who opens, clicks, enters credentials, and reports. It measures behavior directly.",
        "Run campaigns ethically. Get written approval, keep lures realistic but not cruel (no fake layoffs or medical news), show anyone who clicks a short lesson on the red flags they missed, and report department totals to managers rather than lists of names. The goal is learning, not catching people.",
        "Campaigns also teach the two skills Security+ names: <strong>recognizing a phishing attempt</strong>, and <strong>responding to reported suspicious messages</strong>. The second belongs to the security team: when the Report button is used, someone must analyze the message, act on it, and tell the reporter the result. You started that work in Lab 6.1, and in Lab 6.7 you follow report-01 through the logs to find everyone it reached."
      ],
      keyTerms: [
        { term: 'Phishing simulation', definition: 'An approved, harmless test phishing email used to measure and train staff behavior.' },
        { term: 'Report rate', definition: 'The share of recipients who reported a phishing email. Often more useful than the click rate.' }
      ]
    },
    {
      title: 'Reporting and monitoring',
      body: [
        "Security+ separates <strong>initial</strong> reporting, the first baseline when a program starts, from <strong>recurring</strong> reporting, the regular measurements that show change over time. Cedar Creek's December simulation is its baseline.",
        "Track a few numbers and watch the trend:"
      ],
      list: [
        "<strong>Training completion</strong>, by department.",
        "<strong>Click rate</strong> and <strong>credential submission rate</strong>: lower is better.",
        "<strong>Report rate</strong>: higher is better. A falling click rate can just mean people ignore email; a rising report rate means they are engaged.",
        "<strong>Time to first report</strong>: how fast the alarm rings in a real attack.",
        "<strong>Repeat clickers</strong>, who get personal coaching rather than blame."
      ],
      callout: { kind: 'real', title: 'Twitter, 2020: a phone call to employees', text: "In July 2020, attackers took over high-profile Twitter accounts and used them to promote a cryptocurrency scam. Twitter later said the attackers had used a 'phone spear phishing attack' on a small number of employees to get credentials for internal tools. No malware was needed. Awareness training that covers phone-based attacks, and processes that verify callers, address exactly this." }
    },
    {
      title: 'A first-year plan for Cedar Creek',
      body: [
        "A small company does not need an expensive platform to start. It needs a plan that fits its people and a few numbers it can track. A realistic first year at Cedar Creek could look like this:"
      ],
      list: [
        "<strong>Onboarding:</strong> every new hire completes a short course in the first week, including the verification rule for payments and password resets.",
        "<strong>Catch-up:</strong> the 39% who have not finished this year's training complete it this quarter, starting with the departments with the highest click rates.",
        "<strong>Monthly:</strong> one five-minute topic by email for the office and at shift meetings for the plant, using real Cedar Creek examples.",
        "<strong>Quarterly:</strong> a phishing simulation with a different lure each time, and results reported to Greg as department totals and trends.",
        "<strong>Always:</strong> the Report button, a thank-you for every report, and a reply with the verdict."
      ],
      callout: { kind: 'tip', title: 'Coming up in Lab 6.6', text: "In Lab 6.6 you analyze Cedar Creek's December simulation in Kali with awk, find which departments and groups need help first, and write the plan for next quarter." }
    },
    {
      title: 'Making it stick',
      body: [
        "Programs that work share a few habits. Training is short and frequent, a few minutes a month rather than an hour a year. It uses the company's own examples. It reaches people where they work: plant staff on second shift will not sit at a desk for an online course, so a five-minute talk at a shift meeting may do more. Anyone who clicks a simulation gets a short lesson right then, while the mistake is fresh.",
        "Leadership matters most. When Greg Palmer completes the training first, praises reporters, and follows the verification rule himself, everyone else takes it seriously. When executives skip it, so does everyone else.",
        "Finally, awareness work feeds the rest of the security program. Reports reveal real attacks, simulation results show where filters and MFA matter most, and the questions people ask show which policies are unclear."
      ]
    }
  ],
  check: [
    { q: "Which metric best shows that staff are actively engaged in defending against phishing?", opts: ["Report rate", "Training completion rate", "Number of emails sent", "Number of filters installed"], ans: 0, why: "A rising report rate means people notice phishing and act. A low click rate alone can just mean people ignore email." },
    { q: "A coworker begins downloading large numbers of engineering drawings late at night, which is not part of their job. Which kind of anomalous behavior is this?", opts: ["Risky", "Unintentional", "Unexpected", "Normal"], ans: 2, why: "Behavior that does not fit the person's normal pattern is unexpected, and worth reporting." },
    { q: "Cedar Creek runs its first phishing simulation to set a baseline before training changes. What kind of reporting is this?", opts: ["Recurring", "Initial", "Compliance", "Executive"], ans: 1, why: "The first measurement that sets the baseline is initial reporting. Later measurements that track change are recurring." },
    { q: "Which practice makes a phishing simulation ethical and effective?", opts: ["Publishing a list of everyone who clicked", "Using fake layoff notices to get high click rates", "Disciplining anyone who clicks twice", "Getting written approval, giving clickers immediate feedback, and reporting department totals"], ans: 3, why: "Approval, instant teaching, and aggregate reporting keep the focus on learning and keep people willing to report." },
    { q: "Which awareness topic covers not plugging in unknown USB drives or charging cables?", opts: ["Removable media and cables", "Operational security", "Hybrid work", "Policy and handbooks"], ans: 0, why: "Security+ lists removable media and cables as a training topic, because they can carry malware in and data out." }
  ]
};

COURSE_QUIZ.w6 = {
  title: 'Week 6 Quiz',
  pass: 80,
  questions: [
    { lesson: '6.1', q: "An employee receives an email from 'IT-HelpDesk@company-support.net' asking her to verify her VPN password before 5 PM or her account will be locked. The same email went to the whole company. What is this attack?", opts: ["Vishing", "Spear phishing", "Phishing", "Pretexting"], ans: 2, why: "A generic message sent to many people that impersonates a trusted service to steal credentials is phishing. Spear phishing would be aimed at a specific person with personal details." },
    { lesson: '6.1', q: "An attacker reads the CFO's LinkedIn profile, learns her assistant's name and a current project, and sends her a targeted email pretending to be the assistant. What is this?", opts: ["Phishing", "Spear phishing", "Smishing", "Watering hole"], ans: 1, why: "A researched, personalized email aimed at one person is spear phishing. Because the target is an executive, whaling would also be defensible, but it is not offered." },
    { lesson: '6.1', q: "A CEO receives an email impersonating outside legal counsel, asking for an urgent $250,000 wire to close a confidential acquisition. Which attack specifically targets executives like this?", opts: ["Smishing", "Whaling", "Vishing", "Baiting"], ans: 1, why: "Whaling is spear phishing aimed at senior executives, whose approval can move large sums." },
    { lesson: '6.1', q: "Someone calls Cedar Creek's help desk claiming to be a new employee who forgot her password on her first day, and gives a fake employee ID. Which technique is this?", opts: ["Tailgating", "Pretexting", "Smishing", "Typosquatting"], ans: 1, why: "A made-up story that justifies the request is pretexting. Jordan's callback to the user's desk phone defeats it." },
    { lesson: '6.1', q: "A person carrying two heavy boxes waits by the plant door, and an employee holds it open for him. He has no badge. What is this, and what is the cheapest fix?", opts: ["Shoulder surfing; privacy filters", "Piggybacking; training staff to challenge or escort anyone without a badge", "Baiting; blocking USB drives", "Dumpster diving; shredding"], ans: 1, why: "When an employee knowingly lets someone through, it is piggybacking (tailgating if the employee does not notice). A challenge culture is the low-cost fix; an access control vestibule is the stronger physical one." },
    { lesson: '6.1', q: "An employee receives a text that appears to come from her bank, asking her to confirm her account number through a short link. What attack type is this?", opts: ["Phishing", "Vishing", "Smishing", "Pretexting"], ans: 2, why: "Phishing by SMS text message is smishing." },
    { lesson: '6.1', q: "Attackers compromise the website of a regional manufacturing association that Cedar Creek's engineers visit often, so it infects visitors' browsers. What is this called?", opts: ["Watering hole attack", "Brand impersonation", "Credential stuffing", "Evil twin"], ans: 0, why: "Infecting a site the targets are known to visit and waiting for them is a watering hole attack." },
    { lesson: '6.2', q: "An email shows From: g.palmer@cedarcreek-ind.com and Reply-To: g.palmer@cedarcreek-lnd.com, and asks Accounts Payable to update a vendor's bank account. What category of attack is this?", opts: ["Business email compromise", "Smishing", "Watering hole", "Password spraying"], ans: 0, why: "Impersonating an executive by email to redirect payments is business email compromise. The look-alike Reply-To is a common BEC trick." },
    { lesson: '6.2', q: "Which email authentication standard adds a digital signature that lets the receiver confirm the sending domain and that the message was not changed?", opts: ["SPF", "DKIM", "DMARC", "SMTP"], ans: 1, why: "DKIM signs messages with the domain's private key; receivers verify with the public key in DNS. SPF lists allowed sending servers, and DMARC adds alignment and a policy." },
    { lesson: '6.2', q: "Forged emails using Cedar Creek's exact domain keep reaching inboxes at other companies. Which change would most directly stop them?", opts: ["Raise Cedar Creek's DMARC policy from p=none to p=reject, after confirming real senders pass", "Add a longer email signature", "Turn on external sender banners in Cedar Creek's own mailboxes", "Require password changes every 30 days"], ans: 0, why: "DMARC with p=reject tells receivers to refuse mail that fails authentication for your domain. Banners only help Cedar Creek's own users." },
    { lesson: '6.3', q: "An attacker runs a tool that tries every possible combination of characters until it finds a match. What is this attack?", opts: ["Dictionary attack", "Brute-force attack", "Credential stuffing", "Rainbow table attack"], ans: 1, why: "Trying every possible combination is brute force. It always succeeds eventually; length and slow hashing decide how long it takes." },
    { lesson: '6.3', q: "Logs show one failed login each for 200 different accounts within an hour, all using the password 'Welcome1'. What attack is this?", opts: ["Brute force", "Password spraying", "Credential stuffing", "Pass-the-hash"], ans: 1, why: "One common password tried across many accounts, under the lockout threshold, is password spraying." },
    { lesson: '6.3', q: "A breach at a shopping site leaks email addresses and passwords. Days later, attackers use those exact pairs to sign in to employees' work accounts. What is this attack?", opts: ["Credential stuffing", "Dictionary attack", "Rainbow table attack", "Spear phishing"], ans: 0, why: "Reusing leaked pairs from one breach on another service is credential stuffing. Unique passwords and MFA defeat it." },
    { lesson: '6.3', q: "Which defense makes precomputed rainbow tables useless?", opts: ["Account lockout", "Salting each password before hashing", "Longer usernames", "Encrypting the network"], ans: 1, why: "A unique random salt per account makes every stored hash different, so precomputed hash-to-password tables no longer match." },
    { lesson: '6.4', q: "Which password would take an offline attacker longest to crack, assuming the attacker knows common human patterns?", opts: ["Tractor2026!", "P@ssw0rd!", "A 20-character random password from a password manager", "CedarCreek#1"], ans: 2, why: "A long random password has very high real entropy. The others follow patterns that hybrid attacks try early." },
    { lesson: '6.4', q: "Cedar Creek wants to stop staff from using passwords that appear in public breach lists. Which control fits current NIST guidance?", opts: ["Require a symbol in every password", "Force changes every 60 days", "Check every new password against a blocklist of common and breached passwords", "Ban passphrases"], ans: 2, why: "NIST SP 800-63B calls for screening new passwords against lists of common, expected, and compromised values instead of composition rules." },
    { lesson: '6.4', q: "Why is a password manager recommended for most staff?", opts: ["It removes the need for MFA", "It lets people use a long, unique random password for every site", "It stores passwords in a readable text file", "It shares one password across all sites"], ans: 1, why: "Unique random passwords per site defeat credential stuffing and guessing. MFA is still recommended alongside it." },
    { lesson: '6.5', q: "Under Zero Trust, which principle requires using identity, device health, location, and behavior to decide every access request?", opts: ["Assume breach", "Verify explicitly", "Implicit trust", "Separation of duties"], ans: 1, why: "Verify explicitly means every request is authenticated and authorized using all available signals." },
    { lesson: '6.5', q: "An HR coordinator needs to look up employees' pay rates but will never run payroll. Which access follows least privilege?", opts: ["Payroll administrator rights", "Read-only access to the pay rate reports she needs, with no ability to change payroll or bank details", "The same access as the HR manager", "Full access to FS-HR01 for convenience"], ans: 1, why: "Least privilege gives exactly what the job needs. Read-only reporting access covers her task without letting her change pay." },
    { lesson: '6.6', q: "After a phishing simulation, 23% of employees clicked the link. Which control is the most effective first step to reduce that number?", opts: ["Deploy a new firewall", "Run regular, short security awareness training with feedback, then measure again", "Block all external email", "Disable every user's internet access"], ans: 1, why: "Simulation results are a behavior problem. Targeted, recurring awareness training is the control that changes behavior, and re-testing shows whether it worked." }
  ]
};
