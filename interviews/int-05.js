window.MCCOE_INTERVIEWS = window.MCCOE_INTERVIEWS || {};
window.MCCOE_INTERVIEWS["INT-05"] = {
  "id": "INT-05",
  "name": "Tunde Okafor",
  "role": "Warehouse Manager",
  "initials": "TO",
  "setting": "On site, warehouse office · Thursday 10 September 2026, 07:30",
  "minutes": 20,
  "opening": "Morning! Thanks for coming early. This is the quiet hour, so we have maybe twenty minutes before the trucks start. Go ahead.",
  "closing": "Sorry, the first truck is here. I need to be on the dock now. Come find me later if you need anything.",
  "topics": [
    {
      "id": "logins",
      "title": "Warehouse computers and shared logins",
      "opens": [
        "l1",
        "l2",
        "l3",
        "l4"
      ]
    },
    {
      "id": "software",
      "title": "Software and ScanPoint support",
      "opens": [
        "s1",
        "s2",
        "s3",
        "s4"
      ]
    },
    {
      "id": "mfa",
      "title": "MFA for warehouse staff",
      "opens": [
        "m1",
        "m2",
        "m3",
        "m4"
      ]
    },
    {
      "id": "downtime",
      "title": "When the systems go down",
      "opens": [
        "b1",
        "b2",
        "b3",
        "b4"
      ]
    },
    {
      "id": "network",
      "title": "Outside companies and the network",
      "opens": [
        "n1",
        "n2",
        "n3",
        "n4"
      ]
    },
    {
      "id": "people",
      "title": "Leavers and training",
      "opens": [
        "p1",
        "p2",
        "p3",
        "p4"
      ]
    },
    {
      "id": "wrap",
      "title": "Wrapping up",
      "opens": [
        "w1",
        "w2",
        "w3",
        "w4"
      ]
    }
  ],
  "questions": [
    {
      "id": "l1",
      "topic": "logins",
      "ask": "How do warehouse staff log in to the floor computers and the handheld scanners?",
      "type": "open",
      "answer": "The four PCs on the floor have one login per shift. Everybody on that shift uses it. The handheld scanners all use one login, WH-SCAN. That's easier, because people pick up whatever scanner is charged.",
      "next": [
        "l1a",
        "l1b",
        "l3",
        "l1d"
      ],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l1a",
      "topic": "logins",
      "ask": "How do people on the floor find out the WH-SCAN password when they need it?",
      "type": "followup",
      "answer": "It's on a label on the charging rack, next to the loading dock. Come, I'll show you. ... See? User name and password, right there. It hasn't changed since the scanners came in. Maybe 2023.",
      "next": [
        "l1a1",
        "l1a2",
        "l1a3",
        "l1a4"
      ],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l1a1",
      "topic": "logins",
      "ask": "Could anyone walking past the charging rack read the password on that label?",
      "type": "followup",
      "answer": "I guess so. Drivers wait by the dock sometimes. Visitors too. I never thought about it like that. That's all I can tell you.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l1a2",
      "topic": "logins",
      "ask": "Has anyone from IT talked to you about that label, and did anything change?",
      "type": "followup",
      "answer": "James said once it wasn't great. That's all. Nothing changed. If a new guy starts at 6 a.m. and can't log in, the trucks don't leave. I need it to work.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l1a3",
      "topic": "logins",
      "ask": "The label is only a temporary thing until IT sets up proper logins, right?",
      "type": "leading",
      "answer": "Yes, something like that. Temporary.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "l1a4",
      "topic": "logins",
      "ask": "Is there any written rule from IT about how the scanner password is handled?",
      "type": "evidence",
      "answer": "Written? No. Nothing like that. We just use the label.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l1b",
      "topic": "logins",
      "ask": "Who changes the shared passwords, and what happens to them when someone leaves?",
      "type": "followup",
      "answer": "For the shift PCs, James changed them after April, I think. For WH-SCAN, nobody, as far as I know. If we changed it, we'd have to change it on fourteen scanners and print a new label. When someone leaves the warehouse, we don't change anything. They still know it, I guess. But they don't have a badge any more, so they can't get into the building.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21",
        "Q20"
      ]
    },
    {
      "id": "l1d",
      "topic": "logins",
      "ask": "Each person on the floor has their own personal login for the PCs, correct?",
      "type": "leading",
      "answer": "Yes, pretty much. Everyone can log in, no problem.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "l2",
      "topic": "logins",
      "ask": "I assume the scanner password is kept private and only a few people know it?",
      "type": "leading",
      "answer": "Sure, sure. Only warehouse people know it.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "l3",
      "topic": "logins",
      "ask": "Could I see a list of who knows the shared logins and passwords?",
      "type": "evidence",
      "answer": "There's no list. Everyone on the shift knows them. If you want the accounts themselves, James would have that.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q21"
      ]
    },
    {
      "id": "l4",
      "topic": "logins",
      "ask": "Could you give me a general sense of how the warehouse computers are working?",
      "type": "vague",
      "answer": "They work. They're old, but they work. One of them is slow in the mornings.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "s1",
      "topic": "software",
      "ask": "Apart from email, what software does the warehouse use in a normal working day?",
      "type": "open",
      "answer": "The scanner software from ScanPoint. The pick-list printing. The shipping label program. And the old inventory reports from the legacy server.",
      "next": [
        "s1a",
        "s1b",
        "s3",
        "s1d"
      ],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1a",
      "topic": "software",
      "ask": "When something breaks, how does ScanPoint support you and get into the systems?",
      "type": "followup",
      "answer": "They connect remotely. Last year their support guy told me to download their remote-support program, so they could fix things faster. I installed it on PC 3, the one by the dock, where the scanners sync. It just stays running. So when I call them, they can connect straight away.",
      "next": [
        "s1a1",
        "s1a2",
        "s1a3",
        "s1a4"
      ],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1a1",
      "topic": "software",
      "ask": "Did IT review and approve that program before it was installed on PC 3?",
      "type": "followup",
      "answer": "Approve? No, I just did it. I didn't think it was a big deal. It's their software. James found out when he made his vendor list in May. He added ScanPoint to the list. He didn't tell me to remove it, so it's still there.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1a2",
      "topic": "software",
      "ask": "Is there an approval record or ticket for the ScanPoint program somewhere?",
      "type": "evidence",
      "answer": "Not from me. I didn't fill in anything. Maybe James wrote something on his vendor list. You'd have to ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1a3",
      "topic": "software",
      "ask": "The program only runs when you call ScanPoint and let them in, right?",
      "type": "leading",
      "answer": "Yes. They only connect when I call them.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "s1a4",
      "topic": "software",
      "ask": "Who at ScanPoint can connect, and do they need a code or password?",
      "type": "followup",
      "answer": "Their support team. I don't know the names. I think they just connect. I don't type anything in. That's all I know, honestly.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1b",
      "topic": "software",
      "ask": "Why does the warehouse still use the legacy server, when James wants it gone?",
      "type": "followup",
      "answer": "We still pull the monthly stock history reports from it. James wants to switch it off. But the new system doesn't have the old history, so I told him to wait.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s1d",
      "topic": "software",
      "ask": "All of that software was installed and set up by James, is that correct?",
      "type": "leading",
      "answer": "Most of it, yes. James does the computers.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "s2",
      "topic": "software",
      "ask": "IT checks and approves all the software on the warehouse PCs, is that right?",
      "type": "leading",
      "answer": "Yes, James looks after all that. I don't touch the computers.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "s3",
      "topic": "software",
      "ask": "Do you know of a written list of approved software for the warehouse PCs?",
      "type": "evidence",
      "answer": "Not from me. James would have that, if there is one.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "s4",
      "topic": "software",
      "ask": "Could you tell me a bit about technology in the warehouse, generally speaking?",
      "type": "vague",
      "answer": "It's fine. We have scanners, printers, four PCs on the floor. Nothing fancy.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "m1",
      "topic": "mfa",
      "ask": "How does MFA, the second check at email sign-in, work for your team?",
      "type": "open",
      "answer": "I have it, on my phone, by text message. My shift leads have it. For most of the guys on the floor, no. Maybe ten of us have it. Linda talked about buying those little USB keys, but I haven't heard anything since.",
      "next": [
        "m1a",
        "m1b",
        "m3",
        "m1d"
      ],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1a",
      "topic": "mfa",
      "ask": "So how do the other warehouse staff sign in to their email accounts?",
      "type": "followup",
      "answer": "Just the password. Most of them only check email for their payslip and HR stuff. Once a week, maybe.",
      "next": [
        "m1a1",
        "m1a2",
        "m1a3",
        "m1a4"
      ],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1a1",
      "topic": "mfa",
      "ask": "What happened to Linda's idea of buying USB keys for the warehouse staff?",
      "type": "followup",
      "answer": "I haven't heard anything since. She talked about it once. That's all I know. You'd have to ask Linda.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1a2",
      "topic": "mfa",
      "ask": "Can warehouse staff read their email from home or from their own phones?",
      "type": "followup",
      "answer": "Some do, I think. For the payslip. With just the password. I don't really know how many.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1a3",
      "topic": "mfa",
      "ask": "Those email accounts don't hold anything important, so the risk is low, right?",
      "type": "leading",
      "answer": "Right. It's just payslips and HR stuff.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "m1a4",
      "topic": "mfa",
      "ask": "Is there a written plan or date for getting the rest enrolled in MFA?",
      "type": "evidence",
      "answer": "Not that I've seen. Nobody gave me a date. Maybe James has something.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1b",
      "topic": "mfa",
      "ask": "Why don't more of the floor staff use the MFA app on their phones?",
      "type": "followup",
      "answer": "A lot of them don't have a company phone. And they don't want a work app on their own phone. I understand that. I wouldn't force them.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m1d",
      "topic": "mfa",
      "ask": "Your shift leads all use MFA, so the warehouse is covered, correct?",
      "type": "leading",
      "answer": "Yes, I'd say the important people are covered.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "m2",
      "topic": "mfa",
      "ask": "Everyone in the warehouse uses MFA now, like the rest of the company, correct?",
      "type": "leading",
      "answer": "Yes, mostly. James sorted all that out after April.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "m3",
      "topic": "mfa",
      "ask": "Do you have a list showing which warehouse staff have MFA set up?",
      "type": "evidence",
      "answer": "No. I only know from memory. James has the real report on his computer.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "m4",
      "topic": "mfa",
      "ask": "How do people in the warehouse feel about security, generally speaking?",
      "type": "vague",
      "answer": "They're fine with it. They just want to do their job and go home.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "b1",
      "topic": "downtime",
      "ask": "If the network or ordering system went down for a day, how would you keep working?",
      "type": "open",
      "answer": "Paper. We keep a box of blank order forms and printed customer and product lists in my office. Customer service phones in the orders. We write them on the forms, pick from the paper, and type everything in when the system is back. We did that for most of a day in 2024, when road works cut the internet line. It was slow, but the trucks left.",
      "next": [
        "b1a",
        "b1b",
        "b3",
        "b1d"
      ],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1a",
      "topic": "downtime",
      "ask": "Who else knows how the paper process works, and how old are the printed lists?",
      "type": "followup",
      "answer": "Me and my shift leads. It's all in our heads. The customer list printout is from... last year, I think. I should print a new one.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1b",
      "topic": "downtime",
      "ask": "How long could you work that way, and what if the whole company was down?",
      "type": "followup",
      "answer": "Two or three days, maybe. After that we'd lose track of stock. And if the whole company was down, the portal and email too, I don't know what the plan is. That's a question for Linda and James.",
      "next": [
        "b1b1",
        "b1b2",
        "b1b3",
        "b1b4"
      ],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1b1",
      "topic": "downtime",
      "ask": "After two or three days, what would you need to keep the trucks moving?",
      "type": "followup",
      "answer": "The stock numbers. Without the system, we'd lose track of what's on the shelves. We'd need IT back. That's really all I can say.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1b2",
      "topic": "downtime",
      "ask": "Has anyone from management talked to you about recovery priorities or time targets?",
      "type": "followup",
      "answer": "No. Nobody asked me. I don't think there's anything like that. That's a question for Linda.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1b3",
      "topic": "downtime",
      "ask": "I imagine IT could get everything back within a few hours, right?",
      "type": "leading",
      "answer": "Oh, sure. James is quick.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "b1b4",
      "topic": "downtime",
      "ask": "Could I read a recovery plan from IT or Linda that includes the warehouse?",
      "type": "evidence",
      "answer": "If there is, I've never seen it. Ask Linda or James.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b1d",
      "topic": "downtime",
      "ask": "So the paper process has been tested and works well every time, right?",
      "type": "leading",
      "answer": "Yes, it works. We did it in 2024.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "b2",
      "topic": "downtime",
      "ask": "I assume there's a written plan for when the ordering system goes down?",
      "type": "leading",
      "answer": "Yes, we have a plan. We know what to do.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "b3",
      "topic": "downtime",
      "ask": "Would you have a copy of the written steps for the paper fallback?",
      "type": "evidence",
      "answer": "Written? No. There's nothing written down. We just know it. Sorry.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "b4",
      "topic": "downtime",
      "ask": "How does the warehouse usually cope when things get busy or difficult?",
      "type": "vague",
      "answer": "We work hard. Everyone helps. We always get the trucks out.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "n1",
      "topic": "network",
      "ask": "Are there any other outside companies that connect to the warehouse systems?",
      "type": "open",
      "answer": "There was Oakline, the EDI company. They sent orders from a few big customers into the legacy server. We stopped using them last October, when the contract ended. I think I told James. I'm not sure anyone turned anything off on their side.",
      "next": [
        "n1a",
        "n1b",
        "n1c",
        "n4"
      ],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1a",
      "topic": "network",
      "ask": "How did Oakline connect, and what did they send into the legacy server?",
      "type": "followup",
      "answer": "Orders from a few big customers. Files, I think, into the legacy server. James knows the technical part. That's all I know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1b",
      "topic": "network",
      "ask": "Who did you tell when Oakline stopped, and did anyone confirm it was done?",
      "type": "followup",
      "answer": "I think I told James. Maybe in an email? Nobody got back to me. I'm not sure anyone turned anything off.",
      "next": [
        "n1b1",
        "n1b2",
        "n1b3",
        "n1b4"
      ],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1b1",
      "topic": "network",
      "ask": "Do you still have the email you sent James about Oakline ending?",
      "type": "evidence",
      "answer": "Maybe. I'd have to search. I'm not sure I even sent one. It might have been in the corridor.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1b2",
      "topic": "network",
      "ask": "Does anyone check the vendor list with you, to see who still needs access?",
      "type": "followup",
      "answer": "James asked about ScanPoint in May. Nobody asked me about Oakline. That's all I know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1b3",
      "topic": "network",
      "ask": "So Oakline definitely can't connect to anything at Northgate any more, correct?",
      "type": "leading",
      "answer": "I'd think so. The contract ended.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "n1b4",
      "topic": "network",
      "ask": "Apart from Oakline and ScanPoint, does any other company connect to warehouse systems?",
      "type": "followup",
      "answer": "The printer company, Ridgeview. They look after the printers. I don't think they touch anything else. That's all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "n1c",
      "topic": "network",
      "ask": "Could I see the contract or support agreement for ScanPoint, please?",
      "type": "evidence",
      "answer": "Finance has that. Helen pays them. Ask her.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "n2",
      "topic": "network",
      "ask": "What can the warehouse PCs reach on the network, and has that changed recently?",
      "type": "followup",
      "answer": "Everything we need, I think. Nothing is ever blocked. When the scanners came in, in 2023, James opened things up so the scanner software could set up. He said it was just for the setup. I don't think anything changed after that.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q28"
      ]
    },
    {
      "id": "n3",
      "topic": "network",
      "ask": "Could you give me a general idea of how the warehouse network is doing?",
      "type": "vague",
      "answer": "Yes, mostly fine. The Wi-Fi drops at the back of the building sometimes. Otherwise it's fine.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "n4",
      "topic": "network",
      "ask": "I assume all the old vendor connections were closed when their contracts ended?",
      "type": "leading",
      "answer": "Yes, I'm sure they were.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "p1",
      "topic": "people",
      "ask": "What happens to accounts and access when someone leaves the warehouse team?",
      "type": "open",
      "answer": "I tell Alicia. She does the paperwork and takes the badge. She tells IT, I think. Most of my people only have an email account and the shared logins, so there isn't much to switch off.",
      "next": [
        "p1a",
        "p1b",
        "p1c",
        "p1d"
      ],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "p1a",
      "topic": "people",
      "ask": "When someone leaves, does anyone change the shared PC or scanner passwords?",
      "type": "followup",
      "answer": "No. They still know it, I guess. But they don't have a badge any more, so they can't get into the building. That's all we do.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20",
        "Q21"
      ]
    },
    {
      "id": "p1b",
      "topic": "people",
      "ask": "How quickly does IT close a leaver's email account, as far as you know?",
      "type": "followup",
      "answer": "I don't know. I tell Alicia. She tells IT, I think. I never check.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "p1c",
      "topic": "people",
      "ask": "Is there a checklist you fill in when someone leaves the warehouse team?",
      "type": "evidence",
      "answer": "Not me. Alicia has a form, I think. I just tell her.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "p1d",
      "topic": "people",
      "ask": "So leavers lose all their access on the day they go, right?",
      "type": "leading",
      "answer": "Yes. Same day. Alicia takes the badge.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "p2",
      "topic": "people",
      "ask": "Did your team complete the security awareness training this year, and who missed it?",
      "type": "followup",
      "answer": "Yes. Alicia chased everybody. Two of my guys are on leave, and one started last week. Everyone else did it on the PCs during the quiet hour.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "p3",
      "topic": "people",
      "ask": "Could I get the training records for the warehouse team from you?",
      "type": "evidence",
      "answer": "Alicia has those. HR keeps the list. I only know who I sent to the PCs.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "p4",
      "topic": "people",
      "ask": "Everyone in the warehouse finished the security training this year, correct?",
      "type": "leading",
      "answer": "Yes, everybody. Alicia chased them all.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "w1",
      "topic": "wrap",
      "ask": "Before we finish, is there anything else you think we should know about?",
      "type": "closing",
      "answer": "Only that the warehouse always gets the leftovers. Old PCs, shared logins, no phones. If you want us to be more secure, we need the tools. Oh, one more thing. When I installed the ScanPoint program on PC 3, I was logged in as WH-SCAN. It asked for admin and it just worked. So I think WH-SCAN is an admin on that PC. I'm happy to help, anyway.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12",
        "Q21",
        "Q22"
      ]
    },
    {
      "id": "w2",
      "topic": "wrap",
      "ask": "Who else should we talk to about the warehouse systems and what we discussed?",
      "type": "open",
      "answer": "James, for the computers. Helen pays ScanPoint, so she has their paperwork. And Linda, for the big plans. Like what happens if everything goes down.",
      "next": [
        "w2a",
        "w2b",
        "w2c",
        "w2d"
      ],
      "evidence": [],
      "covers": []
    },
    {
      "id": "w2a",
      "topic": "wrap",
      "ask": "If you had the budget, what would you fix first in the warehouse?",
      "type": "followup",
      "answer": "Phones, or those USB keys, so everybody can have MFA. And proper logins for the scanners. That's my list.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "w2b",
      "topic": "wrap",
      "ask": "Is there anything on the warehouse floor that you think IT doesn't know about?",
      "type": "followup",
      "answer": "Hmm. Maybe the ScanPoint program. James knows it's there, but I don't think he looked at it closely. I can't think of anything else.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q12"
      ]
    },
    {
      "id": "w2c",
      "topic": "wrap",
      "ask": "I assume IT visits the warehouse often to check on the equipment?",
      "type": "leading",
      "answer": "Yes, James comes down when we call him.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "w2d",
      "topic": "wrap",
      "ask": "Could you give me a copy of the warehouse equipment list you keep?",
      "type": "evidence",
      "answer": "I don't keep one. James has the asset list. I just know what's on the floor.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "w3",
      "topic": "wrap",
      "ask": "Is there anything about the warehouse in general that you'd like to share?",
      "type": "vague",
      "answer": "It's a good team. Hard workers. They do a lot.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "w4",
      "topic": "wrap",
      "ask": "I think we've covered all the important warehouse topics today, would you agree?",
      "type": "leading",
      "answer": "Yes, I think so.",
      "next": [],
      "evidence": [],
      "covers": []
    }
  ]
};
