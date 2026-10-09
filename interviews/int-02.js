/* INT-02 James Chen, IT Manager. Interview simulator data, format v2. Agrees with tools/northgate_truth.py. */
window.MCCOE_INTERVIEWS = window.MCCOE_INTERVIEWS || {};
window.MCCOE_INTERVIEWS["INT-02"] = {
  "id": "INT-02",
  "name": "James Chen",
  "role": "IT Manager",
  "initials": "JC",
  "setting": "Video call · Wednesday 9 September 2026, 10:00",
  "minutes": 30,
  "opening": "Hi, thanks for fitting me in. I've got about half an hour, then another call. It's just me in IT, so... it's a busy week. What do you need?",
  "closing": "Sorry, I have to jump. Email me if you need anything else. I'll send the files over this afternoon.",
  "topics": [
    {
      "id": "role",
      "title": "Role and responsibilities",
      "opens": [
        "role-1",
        "role-2",
        "role-v",
        "role-close"
      ]
    },
    {
      "id": "assets",
      "title": "Assets and software",
      "opens": [
        "as-1",
        "as-2",
        "as-3",
        "as-l"
      ]
    },
    {
      "id": "access",
      "title": "Accounts, MFA and remote access",
      "opens": [
        "acc-1",
        "acc-2",
        "acc-3",
        "acc-l"
      ]
    },
    {
      "id": "systems",
      "title": "Patching and endpoint protection",
      "opens": [
        "sys-1",
        "sys-2",
        "sys-3",
        "sys-l"
      ]
    },
    {
      "id": "detect",
      "title": "Logging and alerts",
      "opens": [
        "det-1",
        "det-2",
        "det-3",
        "det-l"
      ]
    },
    {
      "id": "incident",
      "title": "Incident response and the April incident",
      "opens": [
        "inc-1",
        "inc-2",
        "inc-3",
        "inc-v"
      ]
    },
    {
      "id": "backups",
      "title": "Backups and recovery",
      "opens": [
        "bak-1",
        "bak-2",
        "bak-3",
        "bak-l"
      ]
    }
  ],
  "questions": [
    {
      "id": "role-1",
      "topic": "role",
      "ask": "What is your role here, and who is responsible for cybersecurity at Northgate?",
      "type": "open",
      "answer": "I'm the IT Manager. Eight years now. Security? That's me, I guess. Nobody ever made it official. My job description just says 'IT support and systems'. But everyone comes to me, so... yes, it's me.",
      "next": [
        "role-1a",
        "role-1b",
        "role-1c",
        "role-1d"
      ],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "role-1a",
      "topic": "role",
      "ask": "How much of your week goes to security, and is there a budget for it?",
      "type": "followup",
      "answer": "Security is maybe a day a week. When nothing else is on fire. There's no security budget line. I ask Linda when I need something, and she usually says yes. Look, it's just me here. I do what I can with what I have.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "role-1b",
      "topic": "role",
      "ask": "Would you send me the security policy and the risk register you work from?",
      "type": "evidence",
      "answer": "Sure. The policy is from 2022. Linda signed it. I meant to update it after April. It's on my list. The risk register is a spreadsheet. I'll send both.",
      "next": [],
      "evidence": [
        "EV-01",
        "EV-02"
      ],
      "covers": [
        "Q7",
        "Q8",
        "Q3"
      ]
    },
    {
      "id": "role-1c",
      "topic": "role",
      "ask": "So you have clear authority and your own budget for security, is that right?",
      "type": "leading",
      "answer": "Yes, basically. Linda backs me up. If I need something, I ask, and she says yes.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "role-1d",
      "topic": "role",
      "ask": "Who covers security for you when you are sick or away on vacation?",
      "type": "followup",
      "answer": "Priya, kind of. She's our contractor, about 16 hours a week. She can do the servers, but she doesn't have everything. Honestly, a lot of it is in my head.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5",
        "Q32"
      ]
    },
    {
      "id": "role-2",
      "topic": "role",
      "ask": "How do you decide which security risks to work on first, and who reviews that?",
      "type": "open",
      "answer": "We have a risk register. I review it every year. Well... the last review was November last year. I haven't updated it since April, no. I tell Linda when something comes up, but there's no regular report.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q3",
        "Q6"
      ]
    },
    {
      "id": "role-v",
      "topic": "role",
      "ask": "Could you give me a general sense of how security is going here these days?",
      "type": "vague",
      "answer": "Oh, pretty good. We take it seriously, especially after April. We've done a lot of work.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "role-close",
      "topic": "role",
      "ask": "Before we finish, is there anything else we should know, or anything that worries you?",
      "type": "closing",
      "answer": "Honestly? The old legacy box. ng-legacy01. It should be gone by now, but it's still humming in the rack. The warehouse still needs some old reports from it, Tunde says. I don't patch it. I'm scared it won't come back up. I don't think it's in the backups. And Oakline used to drop their order files on it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q11",
        "Q26",
        "Q38"
      ]
    },
    {
      "id": "as-1",
      "topic": "assets",
      "ask": "How do you keep track of your servers, computers, and network devices today?",
      "type": "open",
      "answer": "I keep an asset list in a spreadsheet. All the servers are in there, every PC, the laptops, the firewall and switches. It's pretty complete.",
      "next": [
        "as-1a",
        "as-1b",
        "as-1c",
        "as-1d"
      ],
      "evidence": [],
      "covers": [
        "Q11"
      ]
    },
    {
      "id": "as-1a",
      "topic": "assets",
      "ask": "Would you export that asset spreadsheet so we can compare it with our scan?",
      "type": "evidence",
      "answer": "Yes, no problem. I'll export it after the call.",
      "next": [],
      "evidence": [
        "EV-03"
      ],
      "covers": [
        "Q11"
      ]
    },
    {
      "id": "as-1b",
      "topic": "assets",
      "ask": "The client brief mentions ng-legacy01. Is that old server on your asset list?",
      "type": "followup",
      "answer": "Oh... legacy01. That might not be on the list, actually. I keep meaning to turn it off, but Tunde says the warehouse still needs some old reports from it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q11"
      ]
    },
    {
      "id": "as-1c",
      "topic": "assets",
      "ask": "Could you tell me a little about how the IT side of things works here?",
      "type": "vague",
      "answer": "It's busy. Lots of small requests, printers, passwords. The usual. We keep it running.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "as-1d",
      "topic": "assets",
      "ask": "How often is the list updated, and what happens when a machine is retired?",
      "type": "followup",
      "answer": "I add things when I buy them. Retired ones... I should change the status. There might be a few old PCs still marked Active. I'd have to check.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q11"
      ]
    },
    {
      "id": "as-2",
      "topic": "assets",
      "ask": "How do you track the software and cloud services people use, and approve new ones?",
      "type": "open",
      "answer": "There's no list. But I know what we use. It's a small company. People are supposed to ask me before they install anything. The policy says so.",
      "next": [
        "as-2a",
        "as-2b",
        "as-2c",
        "as-2d"
      ],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "as-2a",
      "topic": "assets",
      "ask": "What about the warehouse? Is there any software there that IT did not install?",
      "type": "followup",
      "answer": "Well... ScanPoint connects for the scanners. They have a remote-support tool. Tunde put that on warehouse PC 3 himself. I found it in May. I haven't had time to deal with it. So no, I didn't really approve it. That's all I know. Tunde can tell you more.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12",
        "Q9"
      ]
    },
    {
      "id": "as-2b",
      "topic": "assets",
      "ask": "Could you send me the written list of approved software and cloud services?",
      "type": "evidence",
      "answer": "Hmm. We don't have that written down. It's in my head, honestly.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "as-2c",
      "topic": "assets",
      "ask": "So nobody here can install software without asking you first, is that right?",
      "type": "leading",
      "answer": "Right. The policy says they have to ask me first.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "as-2d",
      "topic": "assets",
      "ask": "Which cloud services does the company use, for example for email and file sharing?",
      "type": "followup",
      "answer": "Email and the office suite are in the cloud. The website is on our own server. Sales uses... a couple of other things, I think. I'd have to ask them.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "as-3",
      "topic": "assets",
      "ask": "Do you have a network diagram that shows how everything connects that we could see?",
      "type": "evidence",
      "answer": "There's a diagram. It's from a while ago, but the network hasn't changed much. It's a PDF on the file server. I'll send it.",
      "next": [],
      "evidence": [
        "EV-12"
      ],
      "covers": [
        "Q13"
      ]
    },
    {
      "id": "as-l",
      "topic": "assets",
      "ask": "I assume your asset list includes every server and device on the network, correct?",
      "type": "leading",
      "answer": "Yes, everything's in there. I keep it up to date.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "acc-1",
      "topic": "access",
      "ask": "How do staff sign in to email and systems, and how are those accounts protected?",
      "type": "open",
      "answer": "Everyone has a Northgate account. After April we pushed MFA hard. So everyone has MFA now.",
      "next": [
        "acc-1a",
        "acc-1b",
        "acc-1c",
        "acc-1d"
      ],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "acc-1a",
      "topic": "access",
      "ask": "Is there an MFA enrollment report in the admin console that I could look at?",
      "type": "evidence",
      "answer": "Sure, I'll export it now. It's pretty much everyone. I'd have to check the exact number.",
      "next": [
        "acc-1a1",
        "acc-1a2",
        "acc-1a3",
        "acc-1a4"
      ],
      "evidence": [
        "EV-04"
      ],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "acc-1a1",
      "topic": "access",
      "ask": "How many of the warehouse staff are actually enrolled in MFA at this point?",
      "type": "followup",
      "answer": "OK... the warehouse is harder. A lot of them don't have company phones, and some don't want the app on their own phone. So most of the warehouse isn't enrolled yet. Linda is thinking about hardware keys. That's where it stands.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "acc-1a2",
      "topic": "access",
      "ask": "Which groups must use MFA, and for which groups is it only a recommendation?",
      "type": "followup",
      "answer": "It's required for admins and Finance. For everybody else it's strongly encouraged. That's the setting right now.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "acc-1a3",
      "topic": "access",
      "ask": "These numbers look complete to me, so MFA is basically done, would you agree?",
      "type": "leading",
      "answer": "Yes, I'd say so. Pretty much everyone is on it.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "acc-1a4",
      "topic": "access",
      "ask": "Do you have a written MFA rule that tells staff they must enroll?",
      "type": "evidence",
      "answer": "Not written down, no. The policy is from 2022, before we had MFA. Updating it is on my list.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18",
        "Q8"
      ]
    },
    {
      "id": "acc-1b",
      "topic": "access",
      "ask": "What happens when a warehouse worker has no phone to set up MFA with?",
      "type": "followup",
      "answer": "Ah. Some of them don't have smartphones, or don't want work apps on them. We talked about USB keys, but that stalled. So for now they just use a password.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "acc-1c",
      "topic": "access",
      "ask": "Could you describe your general approach to passwords and account security here?",
      "type": "vague",
      "answer": "We take it seriously. Good passwords, MFA, the training. Alicia runs the training. It's all pretty normal.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "acc-1d",
      "topic": "access",
      "ask": "Does anyone share an account, for example in the warehouse or at a vendor?",
      "type": "followup",
      "answer": "The warehouse PCs use one login per shift, and the scanners use one account. It's easier for them. And Bluebird has one login for their developers.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "acc-2",
      "topic": "access",
      "ask": "How do staff and vendors connect to your systems from outside the office?",
      "type": "open",
      "answer": "VPN only now. I deleted that old port-forward the morning of the incident, and I added a deny-everything rule. After April I also made a list of every vendor that can connect. It's all cleaned up.",
      "next": [
        "acc-2a",
        "acc-2b",
        "acc-2c",
        "acc-2d"
      ],
      "evidence": [],
      "covers": [
        "Q19",
        "Q9"
      ]
    },
    {
      "id": "acc-2a",
      "topic": "access",
      "ask": "Would you export the firewall rules so we can check the remote access paths?",
      "type": "evidence",
      "answer": "Yes. I'll export the config and take out the passwords and keys first.",
      "next": [],
      "evidence": [
        "EV-05"
      ],
      "covers": [
        "Q19",
        "Q28",
        "Q9"
      ]
    },
    {
      "id": "acc-2b",
      "topic": "access",
      "ask": "Which vendors can still connect, and do their VPN accounts use MFA like yours?",
      "type": "followup",
      "answer": "Bluebird for the website, ScanPoint, the printer company, and Priya. MFA for Bluebird... no, not yet. And Oakline... hmm. Their contract ended last October, I think. Their account might still be there. I have a note to check with Tunde. Here, I'll send you my vendor list.",
      "next": [],
      "evidence": [
        "EV-10"
      ],
      "covers": [
        "Q9",
        "Q19"
      ]
    },
    {
      "id": "acc-2c",
      "topic": "access",
      "ask": "Could you tell me generally how people work from home or on the road?",
      "type": "vague",
      "answer": "Some do, some don't. Sales travel a lot. It works OK. People don't complain much.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "acc-2d",
      "topic": "access",
      "ask": "What else changed on the firewall after April, for example between the internal networks?",
      "type": "followup",
      "answer": "Between networks, not much. Servers, office, and warehouse are on separate VLANs with rules between them. There's a temporary warehouse rule from 2023 I need to clean up. I haven't really reviewed the internal rules since.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q28",
        "Q19"
      ]
    },
    {
      "id": "acc-3",
      "topic": "access",
      "ask": "Is there a log showing when you disabled the accounts of people who left?",
      "type": "evidence",
      "answer": "Not on my side. Alicia has the HR checklist. She emails me when someone leaves, and I remove their accounts. Usually within a few days. It depends how busy I am.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "acc-l",
      "topic": "access",
      "ask": "After April, I understand everyone at Northgate now has MFA, is that right?",
      "type": "leading",
      "answer": "Yes, everyone has MFA now. We pushed it hard.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "sys-1",
      "topic": "systems",
      "ask": "How do you keep servers and computers updated and protected from malware?",
      "type": "open",
      "answer": "The servers get updates about once a month. Windows PCs update themselves. There's no written schedule. Antivirus is on every Windows PC, and I can see them all in the console.",
      "next": [
        "sys-1a",
        "sys-1b",
        "sys-1c",
        "sys-1d"
      ],
      "evidence": [],
      "covers": [
        "Q26",
        "Q31"
      ]
    },
    {
      "id": "sys-1a",
      "topic": "systems",
      "ask": "Are there any systems that don't get updates or don't have antivirus?",
      "type": "followup",
      "answer": "Hmm. The Linux servers don't have anything, no. No antivirus there. And the legacy box... no. I don't touch it. I'm scared it won't come back up.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q26",
        "Q31"
      ]
    },
    {
      "id": "sys-1b",
      "topic": "systems",
      "ask": "Could you export the patch status and antivirus reports from your management consoles?",
      "type": "evidence",
      "answer": "Sure, they both come out of the consoles. Give me a minute.",
      "next": [],
      "evidence": [
        "EV-16",
        "EV-17"
      ],
      "covers": [
        "Q26",
        "Q31",
        "Q22"
      ]
    },
    {
      "id": "sys-1c",
      "topic": "systems",
      "ask": "Could you give me an overview of how the computers are managed day to day?",
      "type": "vague",
      "answer": "Pretty standard. Windows, a console, automatic updates. It mostly runs itself.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "sys-1d",
      "topic": "systems",
      "ask": "Do any normal users have administrator rights on their own computers?",
      "type": "followup",
      "answer": "Normal users aren't admins. Well... Sales needed it for some software. So the Sales people, yes.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q22"
      ]
    },
    {
      "id": "sys-2",
      "topic": "systems",
      "ask": "How do you find vulnerabilities in your systems, and how do you hear about threats?",
      "type": "open",
      "answer": "We've never really done scanning. I don't have a scanner, and I wouldn't have time to read the results anyway. Your scan will be the first one. For threats, I get emails from some vendors, the firewall company and the backup software. I read them when I have time. A government alert service? I've heard of it. I'm not signed up. And I don't track what I did. If it looks bad, I patch.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q15",
        "Q16"
      ]
    },
    {
      "id": "sys-3",
      "topic": "systems",
      "ask": "Is there a laptop encryption report I could look at, device by device?",
      "type": "evidence",
      "answer": "Here you go. Most of them are encrypted. A few older ones aren't.",
      "next": [],
      "evidence": [
        "EV-18"
      ],
      "covers": [
        "Q24"
      ]
    },
    {
      "id": "sys-l",
      "topic": "systems",
      "ask": "All the laptops are encrypted, so a lost laptop isn't a big problem, right?",
      "type": "leading",
      "answer": "Right. All the laptops are encrypted.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "det-1",
      "topic": "detect",
      "ask": "What logs do you collect, where do they go, and what alerts do you get?",
      "type": "open",
      "answer": "All the servers and the firewall send logs to a central syslog on the backup server. We keep 90 days. After April I added a real-time alert for big outbound transfers. That's basically how I caught the attacker, so now it's instant. If someone tried that again, we'd see it.",
      "next": [
        "det-1a",
        "det-1b",
        "det-3",
        "det-1d"
      ],
      "evidence": [],
      "covers": [
        "Q29",
        "Q30"
      ]
    },
    {
      "id": "det-1a",
      "topic": "detect",
      "ask": "Would you get an alert if someone created a new admin account on a server?",
      "type": "followup",
      "answer": "That's on the list. Not done yet. Same for admin group changes.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q30"
      ]
    },
    {
      "id": "det-1b",
      "topic": "detect",
      "ask": "When was the most recent alert, and what did you do about it?",
      "type": "followup",
      "answer": "There was one last weekend, I think. The 6th? The big-transfer one. I saw it, but I haven't looked into it yet. It's probably a backup or something.",
      "next": [
        "det-1b1",
        "det-1b2",
        "det-1b3",
        "det-1b4"
      ],
      "evidence": [],
      "covers": [
        "Q32",
        "Q30"
      ]
    },
    {
      "id": "det-1b1",
      "topic": "detect",
      "ask": "Which computer sent that data, and where did the data go, do you know?",
      "type": "followup",
      "answer": "One of the office PCs, I think. To a file-sharing site. I haven't checked whose PC it is. That's really all I know right now.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q32"
      ]
    },
    {
      "id": "det-1b2",
      "topic": "detect",
      "ask": "Can you show me a ticket or note that records who looked into it?",
      "type": "evidence",
      "answer": "No. There's no ticket. Nobody has looked at it yet. That's on me.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q32"
      ]
    },
    {
      "id": "det-1b3",
      "topic": "detect",
      "ask": "It was most likely just a backup job, so nothing to worry about, right?",
      "type": "leading",
      "answer": "Yeah, probably a backup. I'll check it when I get a minute.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "det-1b4",
      "topic": "detect",
      "ask": "Does anyone else get the alerts, in case you miss one like that one?",
      "type": "followup",
      "answer": "Just me. Priya doesn't get them. So if I miss it, nobody sees it. That's the setup.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q32"
      ]
    },
    {
      "id": "det-1d",
      "topic": "detect",
      "ask": "Could you tell me in general how you keep an eye on things here?",
      "type": "vague",
      "answer": "I keep an eye on things. After April I'm a lot more careful. I check my email all the time.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "det-2",
      "topic": "detect",
      "ask": "Who watches for problems at night, at weekends, or when you are away?",
      "type": "open",
      "answer": "The alerts come to my email. I check my phone. If I'm on vacation... I check my phone. (laughs)",
      "next": [
        "det-2a",
        "det-2b",
        "det-2c",
        "det-1b"
      ],
      "evidence": [],
      "covers": [
        "Q32"
      ]
    },
    {
      "id": "det-2a",
      "topic": "detect",
      "ask": "Who else could respond if an alert came in while you were on a plane?",
      "type": "followup",
      "answer": "Priya, kind of. But she doesn't get the alerts. And she's only about 16 hours a week. So... nobody, really.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q32",
        "Q5"
      ]
    },
    {
      "id": "det-2b",
      "topic": "detect",
      "ask": "I'd like to see your written schedule for reviewing the logs, if there is one.",
      "type": "evidence",
      "answer": "There's no schedule written down. I look when an alert comes in, or when something feels wrong.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q32",
        "Q29"
      ]
    },
    {
      "id": "det-2c",
      "topic": "detect",
      "ask": "So alerts are always checked within an hour or so, even at weekends, correct?",
      "type": "leading",
      "answer": "Yes, usually. I'm pretty quick with my phone.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "det-3",
      "topic": "detect",
      "ask": "Please forward the logging settings and the full list of alert rules, too.",
      "type": "evidence",
      "answer": "Yes. I'll export the settings and the alert rules. The alert history is in there too.",
      "next": [],
      "evidence": [
        "EV-07"
      ],
      "covers": [
        "Q29",
        "Q30",
        "Q32"
      ]
    },
    {
      "id": "det-l",
      "topic": "detect",
      "ask": "If an attacker came back, you would see it right away now, wouldn't you?",
      "type": "leading",
      "answer": "Yes, we'd see it. The alert is instant now.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "inc-1",
      "topic": "incident",
      "ask": "Could you walk me through how you investigated the April incident, step by step?",
      "type": "open",
      "answer": "I saw strange outbound traffic in the morning email and started digging. I copied the logs off the server before I cleaned anything up. Then I built a timeline, hour by hour. Two weeks later we had a meeting and made a list of actions. Most are done.",
      "next": [
        "inc-1a",
        "inc-1b",
        "inc-3",
        "inc-1d"
      ],
      "evidence": [],
      "covers": [
        "Q37",
        "Q17"
      ]
    },
    {
      "id": "inc-1a",
      "topic": "incident",
      "ask": "Is there a written procedure for keeping evidence, or did you work it out yourself?",
      "type": "followup",
      "answer": "No, there's no written procedure. I just did what made sense.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q37"
      ]
    },
    {
      "id": "inc-1b",
      "topic": "incident",
      "ask": "Did any outside experts help you, and is anyone on call for next time?",
      "type": "followup",
      "answer": "No one helped. We don't have anyone on call. Maybe the insurance would give us someone? I don't know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q37",
        "Q2"
      ]
    },
    {
      "id": "inc-1d",
      "topic": "incident",
      "ask": "So all the actions from the April review are finished by now, right?",
      "type": "leading",
      "answer": "Pretty much, yes. Most of them are done.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "inc-2",
      "topic": "incident",
      "ask": "If something happened again tomorrow, what would you do, and who would you call?",
      "type": "open",
      "answer": "I wrote an incident response plan after April. It's basically done. In April we had to scramble to find the insurance number. I still need to fill in some of those contacts. Linda and the lawyer did the notification part.",
      "next": [
        "inc-2a",
        "inc-2b",
        "inc-2c",
        "inc-2d"
      ],
      "evidence": [],
      "covers": [
        "Q34",
        "Q2"
      ]
    },
    {
      "id": "inc-2a",
      "topic": "incident",
      "ask": "Has that plan been approved or tested yet, and could I read the draft?",
      "type": "followup",
      "answer": "Not yet. Linda hasn't had time to approve it. We want to do a practice run this fall. Sure, I'll send you the draft.",
      "next": [],
      "evidence": [
        "EV-08"
      ],
      "covers": [
        "Q34",
        "Q35",
        "Q33",
        "Q2"
      ]
    },
    {
      "id": "inc-2b",
      "topic": "incident",
      "ask": "Could you send me the contact list with the insurer's claims hotline number on it?",
      "type": "evidence",
      "answer": "I don't have that. It's still TBD in the plan. Linda has the insurance policy. Ask her.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2"
      ]
    },
    {
      "id": "inc-2c",
      "topic": "incident",
      "ask": "So everyone at Northgate knows the plan and their role in it, correct?",
      "type": "leading",
      "answer": "Yes, I think so. Linda knows it, and I know it.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "inc-2d",
      "topic": "incident",
      "ask": "Who takes over as incident lead if you are not available when it happens?",
      "type": "followup",
      "answer": "That's... TBD. Priya, probably. We haven't decided.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "inc-3",
      "topic": "incident",
      "ask": "May I have a copy of the April timeline and the list of actions?",
      "type": "evidence",
      "answer": "Sure. It's all in the post-incident review I wrote. The action tracker is at the bottom.",
      "next": [],
      "evidence": [
        "EV-11"
      ],
      "covers": [
        "Q37",
        "Q17",
        "Q30"
      ]
    },
    {
      "id": "inc-v",
      "topic": "incident",
      "ask": "Could you tell me in general what the company learned from the April incident?",
      "type": "vague",
      "answer": "A lot. We were lucky, I think. Everybody is more careful now.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bak-1",
      "topic": "backups",
      "ask": "How are your servers and data backed up, and how often does that happen?",
      "type": "open",
      "answer": "Every server is backed up every night to the backup server. The report comes to me every morning, and it's all green. The website goes to the cloud too. Backups are solid. They weren't touched in April.",
      "next": [
        "bak-1a",
        "bak-1b",
        "bak-3",
        "bak-1d"
      ],
      "evidence": [],
      "covers": [
        "Q38",
        "Q25"
      ]
    },
    {
      "id": "bak-1a",
      "topic": "backups",
      "ask": "Where exactly is the file server backup kept? Is any copy offline or offsite?",
      "type": "followup",
      "answer": "The file server copy... the cloud storage got full, early last year, and I turned that off. It's on my list. So right now it's on the backup server's disk. Same network, yes.",
      "next": [
        "bak-1a1",
        "bak-1a2",
        "bak-1a3",
        "bak-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q25"
      ]
    },
    {
      "id": "bak-1a1",
      "topic": "backups",
      "ask": "What would stop ransomware from deleting or encrypting that copy on the backup server?",
      "type": "followup",
      "answer": "Hmm. Nothing, really, if they got admin. The disk is always connected. That's really all I can say. It's on my list.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q25"
      ]
    },
    {
      "id": "bak-1a2",
      "topic": "backups",
      "ask": "Has anyone written down a plan for turning the offsite copy back on?",
      "type": "evidence",
      "answer": "Not written down. I asked Linda about more cloud storage once. It's on my list.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q25"
      ]
    },
    {
      "id": "bak-1a3",
      "topic": "backups",
      "ask": "But the website's cloud copy protects the file server data too, doesn't it?",
      "type": "leading",
      "answer": "Yes, more or less. We're covered.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bak-1a4",
      "topic": "backups",
      "ask": "Is any server or storage device left out of the nightly backup jobs?",
      "type": "followup",
      "answer": "Legacy01 doesn't have a job. I don't think there's anything else. That's all I know of.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q38"
      ]
    },
    {
      "id": "bak-1b",
      "topic": "backups",
      "ask": "When was the last time someone actually tested a restore from the backups?",
      "type": "followup",
      "answer": "Hmm. I restored a few files for people after April, but I didn't write that down. The last proper test... honestly, it was a while ago. June last year? The policy says every quarter. I know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q39"
      ]
    },
    {
      "id": "bak-1d",
      "topic": "backups",
      "ask": "Could you tell me generally how comfortable you feel about your backups these days?",
      "type": "vague",
      "answer": "Pretty comfortable. They're solid. I sleep OK.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bak-2",
      "topic": "backups",
      "ask": "If the file server died today, how long would it take to get it back?",
      "type": "open",
      "answer": "I'd rebuild it from backup. A day? Two days? We don't have that written down. There's no recovery plan as such.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bak-3",
      "topic": "backups",
      "ask": "Would you forward the latest backup job report, including the restore history?",
      "type": "evidence",
      "answer": "Sure, I'll forward you the latest daily report. It has the jobs and the restore history.",
      "next": [],
      "evidence": [
        "EV-09"
      ],
      "covers": [
        "Q38",
        "Q25",
        "Q39"
      ]
    },
    {
      "id": "bak-l",
      "topic": "backups",
      "ask": "I assume the backups are tested on a regular schedule, is that right?",
      "type": "leading",
      "answer": "Yes, all good. We test restores.",
      "next": [],
      "evidence": [],
      "covers": []
    }
  ]
};
