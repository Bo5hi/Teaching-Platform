/* INT-01 Linda Harper, CEO. Interview simulator data, format v2. Agrees with tools/northgate_truth.py and the INT-01 record. */
window.MCCOE_INTERVIEWS = window.MCCOE_INTERVIEWS || {};
window.MCCOE_INTERVIEWS["INT-01"] = {
  "id": "INT-01",
  "name": "Linda Harper",
  "role": "Chief Executive Officer (CEO)",
  "initials": "LH",
  "setting": "In person, Linda's office · Tuesday 8 September 2026, 09:00",
  "minutes": 20,
  "opening": "Good morning, come in. I'm glad you're here. I have a board call later, so I can give you about twenty minutes. Where do you want to start?",
  "closing": "I'm sorry, I have to stop there. My next call is waiting. Send me a list of the documents you need, and I'll ask people to help.",
  "topics": [
    {
      "id": "business",
      "title": "The business and who owns security",
      "opens": [
        "biz-1",
        "gov-1",
        "biz-ev",
        "biz-v"
      ]
    },
    {
      "id": "board",
      "title": "Risk appetite and board reporting",
      "opens": [
        "brd-1",
        "brd-2",
        "brd-pol",
        "brd-v"
      ]
    },
    {
      "id": "incident",
      "title": "Incident response plan",
      "opens": [
        "ir-1",
        "ir-2",
        "ir-ev",
        "ir-l"
      ]
    },
    {
      "id": "april",
      "title": "April: outside contacts and notification",
      "opens": [
        "apr-1",
        "apr-2",
        "apr-ev",
        "apr-v"
      ]
    },
    {
      "id": "continuity",
      "title": "Continuity, communication and wrap-up",
      "opens": [
        "bc-1",
        "bc-2",
        "bc-close",
        "bc-v"
      ]
    }
  ],
  "questions": [
    {
      "id": "biz-1",
      "topic": "business",
      "ask": "What does Northgate do, and which parts of the business matter most to you?",
      "type": "open",
      "answer": "We sell restaurant and cleaning supplies to hundreds of customers. Restaurants, schools, hotels, cleaning companies. Three things keep us alive: the online ordering portal, the warehouse getting orders out the door, and Finance getting invoices out and paying our suppliers. If one of those stops for more than a day or two, we start losing customers.",
      "next": [
        "biz-1a",
        "biz-1b",
        "biz-ev",
        "biz-v"
      ],
      "evidence": [],
      "covers": [
        "Q1"
      ]
    },
    {
      "id": "biz-1a",
      "topic": "business",
      "ask": "Which systems do those three services depend on, and who knows the details?",
      "type": "followup",
      "answer": "The portal is our website. Bluebird built it. Finance uses the file server and the accounting software. The warehouse has its scanners. Which server does what? That's James. It's in his head, and some of it is in mine. We have the org chart, of course. But nothing that says 'these are our critical services'.",
      "next": [
        "biz-1a1",
        "biz-1a2",
        "gov-jd",
        "biz-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q1"
      ]
    },
    {
      "id": "biz-1a1",
      "topic": "business",
      "ask": "Do you have a business impact analysis, or anything that ranks those services by importance?",
      "type": "evidence",
      "answer": "A business impact analysis? No. We've never done one. There's nothing like that written down.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q1"
      ]
    },
    {
      "id": "biz-1a2",
      "topic": "business",
      "ask": "If James left tomorrow, who else would know which server does what?",
      "type": "followup",
      "answer": "Honestly? Nobody. Priya a little, maybe. That worries me, to be honest. That's really all I can say about it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q1",
        "Q5"
      ]
    },
    {
      "id": "biz-1a4",
      "topic": "business",
      "ask": "I suppose James keeps a full written list of those systems somewhere, is that right?",
      "type": "leading",
      "answer": "Yes, I'm sure he does. James knows everything about our systems.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "biz-1b",
      "topic": "business",
      "ask": "How long could each of those three services stop before you start losing customers?",
      "type": "followup",
      "answer": "A day, maybe two. The portal is the worst. Schools order online now. After two days, customers start calling our competitors. But nobody has ever measured it properly. That's just my feeling.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q1",
        "Q40"
      ]
    },
    {
      "id": "biz-ev",
      "topic": "business",
      "ask": "Could I see a written list of your critical services and the systems behind them?",
      "type": "evidence",
      "answer": "No, there's nothing like that written down. It's in my head, and James knows the servers.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q1"
      ]
    },
    {
      "id": "biz-v",
      "topic": "business",
      "ask": "Could you give me a general picture of how the company is doing these days?",
      "type": "vague",
      "answer": "Oh, where do I start? We've been around a long time. Sixty-two people now. Good customers, good team. It's been a busy year, with the school contract and everything. We're growing, slowly.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "gov-1",
      "topic": "business",
      "ask": "Who at Northgate is responsible for cybersecurity, and how was that decided?",
      "type": "open",
      "answer": "James. James Chen, our IT Manager. He is our security person. Nobody really decided it. He does IT, so security was part of that.",
      "next": [
        "gov-1a",
        "gov-jd",
        "gov-2b",
        "gov-l"
      ],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-1a",
      "topic": "business",
      "ask": "How much of James's time goes to security, and does he have a budget?",
      "type": "followup",
      "answer": "Well, he does everything in IT, so security is part of that. There's no separate security budget. If he needs something, he asks me, and I usually say yes. After April he asked for more licenses so we could turn on MFA, and the board approved that in May. Priya helps him part-time. Honestly, James is stretched. I know that.",
      "next": [
        "gov-2a",
        "gov-1b",
        "gov-2e",
        "gov-2d"
      ],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-2a",
      "topic": "business",
      "ask": "Who approves security spending, and how much can James spend without asking you?",
      "type": "followup",
      "answer": "He can buy small things himself. Up to a thousand dollars, I think. Anything bigger comes to me. Really big items go to the board, like the MFA licenses in May. That's all there is to it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-1b",
      "topic": "business",
      "ask": "If James were away for two weeks, who would take care of security?",
      "type": "followup",
      "answer": "Priya, I suppose. She knows the servers. But she's a contractor, two days a week, so she isn't here every day. And I'm not sure she has all the passwords. We have never really tested that. James takes short holidays, and he checks his phone.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-2e",
      "topic": "business",
      "ask": "Has anyone written down who covers James's duties when he is away?",
      "type": "evidence",
      "answer": "No, nothing written. We would call Priya, I suppose. Or call James.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-2d",
      "topic": "business",
      "ask": "I assume security is clearly written into James's job description, is that right?",
      "type": "leading",
      "answer": "Oh yes, it must be. He's our IT Manager. Security is part of IT.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "gov-jd",
      "topic": "business",
      "ask": "Does James's job description say anything about security, or what he can decide alone?",
      "type": "followup",
      "answer": "Hmm, I don't remember. It's an old one, from when we hired him in 2019. Here, I'll ask Alicia to send you the org chart and his job description. You can read it yourself.",
      "next": [],
      "evidence": [
        "EV-20"
      ],
      "covers": [
        "Q5",
        "Q1"
      ]
    },
    {
      "id": "gov-2b",
      "topic": "business",
      "ask": "May I see this year's security budget, if it's kept as a separate line?",
      "type": "evidence",
      "answer": "There isn't one. IT comes out of the 'office and IT' line. Helen manages that. She could show you the numbers.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    },
    {
      "id": "gov-l",
      "topic": "business",
      "ask": "I assume James has the full authority and budget he needs for security, correct?",
      "type": "leading",
      "answer": "Yes, absolutely. Whatever James needs, he gets. I trust him completely.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "brd-1",
      "topic": "board",
      "ask": "How do you and the board hear about cyber risk during a normal year?",
      "type": "open",
      "answer": "James tells me when there is a problem. At the board... we talked about it a lot in May, after the incident. That was a long meeting. Before that it wasn't really on the agenda. It isn't a regular item now either. Maybe it should be.",
      "next": [
        "brd-1a",
        "brd-1b",
        "brd-ev",
        "brd-1d"
      ],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-1a",
      "topic": "board",
      "ask": "What did the board discuss and decide about security at the May meeting?",
      "type": "followup",
      "answer": "James and I explained the incident. The board asked if it could happen again. James said the big gap was MFA. So they approved the new email licenses, about eight thousand a year. And they agreed we should hire an outside firm to assess us. That's you.",
      "next": [
        "brd-1a1",
        "brd-1a2",
        "brd-1a3",
        "brd-1d"
      ],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-1a1",
      "topic": "board",
      "ask": "Did the board ask for any follow-up reports on security after the May meeting?",
      "type": "followup",
      "answer": "I was supposed to update them if anything new happened. Nothing came up, so... no. August was about results and the school contract. That's really all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-1a2",
      "topic": "board",
      "ask": "Has anyone on the board asked what happens if you lose a key person like James?",
      "type": "followup",
      "answer": "Denise asked about succession planning for key roles. That was in February. I'm supposed to bring a short paper. I haven't written it yet.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5",
        "Q6"
      ]
    },
    {
      "id": "brd-1a3",
      "topic": "board",
      "ask": "Could I see the security reports James gives you, monthly or every quarter?",
      "type": "evidence",
      "answer": "There aren't any regular reports. He tells me when something is wrong. Usually in the corridor.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-1b",
      "topic": "board",
      "ask": "When is the next board meeting, and is security on the agenda for it?",
      "type": "followup",
      "answer": "The 16th of November. The agenda isn't done yet. Probably results and the busy season. I could add security, I suppose. Nobody has asked.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-ev",
      "topic": "board",
      "ask": "Would you be able to share the board meeting minutes from the last year?",
      "type": "evidence",
      "answer": "Sure. I can give you the excerpts from November to August. That's four meetings. Helen takes the minutes, so they're quite complete.",
      "next": [],
      "evidence": [
        "EV-19"
      ],
      "covers": [
        "Q4",
        "Q6"
      ]
    },
    {
      "id": "brd-1d",
      "topic": "board",
      "ask": "So the board gets regular security updates from James these days, is that correct?",
      "type": "leading",
      "answer": "Yes, James keeps us informed. The board knows what's going on.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "brd-2",
      "topic": "board",
      "ask": "Has the leadership team ever agreed how much cyber risk Northgate is willing to accept?",
      "type": "open",
      "answer": "How much risk we accept? Hmm. I don't think we have ever talked about it like that. We decide things case by case. If it's cheap and James says it's important, we do it.",
      "next": [
        "brd-2a",
        "brd-2b",
        "brd-pol",
        "brd-2d"
      ],
      "evidence": [],
      "covers": [
        "Q4"
      ]
    },
    {
      "id": "brd-2a",
      "topic": "board",
      "ask": "After the April incident, how did you decide which problems to fix first?",
      "type": "followup",
      "answer": "We had the lessons-learned meeting, and James made a list of actions. I approved whatever he asked for: MFA licenses, the training Alicia ran, and hiring you. I didn't really rank them. I trusted James to know.",
      "next": [
        "brd-2a1",
        "brd-2a2",
        "brd-2a3",
        "brd-v"
      ],
      "evidence": [],
      "covers": [
        "Q4",
        "Q6"
      ]
    },
    {
      "id": "brd-2a1",
      "topic": "board",
      "ask": "Were any of James's requests turned down or delayed because of the cost?",
      "type": "followup",
      "answer": "No, I don't think so. Everything he asked for was small next to the cost of April. The lawyer alone was about six and a half thousand.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q4"
      ]
    },
    {
      "id": "brd-2a2",
      "topic": "board",
      "ask": "May I have a copy of the action list James made after the lessons-learned meeting?",
      "type": "evidence",
      "answer": "That's James's list. He tracks it. I don't have my own copy. Ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q6"
      ]
    },
    {
      "id": "brd-2a3",
      "topic": "board",
      "ask": "Did you or the board rank those actions by risk, or only by cost?",
      "type": "followup",
      "answer": "Neither, really. We didn't rank them. I trusted James to know what was most important. That's all I can tell you.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q4"
      ]
    },
    {
      "id": "brd-2b",
      "topic": "board",
      "ask": "Would you accept losing a day of orders to save money on security?",
      "type": "followup",
      "answer": "Hmm. That's a hard question. It depends. A day, maybe. A week, no. But we've never said anything like that out loud.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q4"
      ]
    },
    {
      "id": "brd-pol",
      "topic": "board",
      "ask": "Is there a written risk appetite statement, or a security strategy the board approved?",
      "type": "evidence",
      "answer": "No. Nothing like that. We've never written one.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q4"
      ]
    },
    {
      "id": "brd-2d",
      "topic": "board",
      "ask": "I assume the board has set clear limits on how much cyber risk is acceptable?",
      "type": "leading",
      "answer": "Yes, broadly. The board is very careful with money and risk.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "brd-v",
      "topic": "board",
      "ask": "Could you give me a general sense of how the board feels about security?",
      "type": "vague",
      "answer": "They care. Everybody cares now, after April. Raymond asks good questions. We're in a much better place.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "ir-1",
      "topic": "incident",
      "ask": "If a serious security incident happened tomorrow, what would people here actually do?",
      "type": "open",
      "answer": "We have a plan now. James wrote an incident response plan after April, so everybody knows what to do. That was one of the big lessons.",
      "next": [
        "ir-1a",
        "ir-1b",
        "ir-2a2",
        "ir-l"
      ],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-1a",
      "topic": "incident",
      "ask": "Have you read the incident response plan yourself, and did you formally approve it?",
      "type": "followup",
      "answer": "He sent it to me in the summer. I haven't signed anything, I think. I have read parts of it. But it exists, and James knows it, and he's the one who would run things anyway.",
      "next": [
        "ir-1a1",
        "ir-1a2",
        "ir-ev",
        "ir-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-1a1",
      "topic": "incident",
      "ask": "Do you remember which version James sent you, and whether it was marked draft?",
      "type": "followup",
      "answer": "I think it said draft on the front. Version zero point something. I meant to go through it properly. It's still in my inbox.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-1a2",
      "topic": "incident",
      "ask": "Does the plan name a backup person for James if he's not available?",
      "type": "followup",
      "answer": "I'm not sure. I only read parts of it. I'd hope so. You'd have to check with James. That's all I know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-1a4",
      "topic": "incident",
      "ask": "I take it the plan is basically final, and only needs your signature now?",
      "type": "leading",
      "answer": "Yes, pretty much. It's just a formality.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "ir-1b",
      "topic": "incident",
      "ask": "Has anyone practised using the plan, for example in a tabletop exercise?",
      "type": "followup",
      "answer": "Not yet. James wants to do one this fall.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34",
        "Q35"
      ]
    },
    {
      "id": "ir-ev",
      "topic": "incident",
      "ask": "Is there a signed copy of the incident response plan I could look at?",
      "type": "evidence",
      "answer": "A signed copy? No, I haven't signed it. I don't have a copy handy, sorry. James has the latest version. Ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-l",
      "topic": "incident",
      "ask": "So after April, I take it everyone knows what to do in an incident?",
      "type": "leading",
      "answer": "Yes. We have a plan now. Everybody knows what to do.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "ir-2",
      "topic": "incident",
      "ask": "Who would lead the response if the file server was attacked again tomorrow?",
      "type": "open",
      "answer": "James, of course. He handled April, and he did a good job. I would deal with the business side: customers, the board, the money.",
      "next": [
        "ir-2a",
        "ir-2b",
        "ir-ev",
        "ir-2d"
      ],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-2a",
      "topic": "incident",
      "ask": "And if James was on holiday that day, who would take over from him?",
      "type": "followup",
      "answer": "Priya, I suppose. Or we'd phone James. He always answers. We haven't really agreed that.",
      "next": [
        "ir-2a1",
        "ir-2a2",
        "ir-2a3",
        "ir-l"
      ],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-2a1",
      "topic": "incident",
      "ask": "Does Priya have the passwords and access she would need to respond alone?",
      "type": "followup",
      "answer": "I'm not sure she has all the passwords. We have never tested that. You'd have to ask James.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34",
        "Q5"
      ]
    },
    {
      "id": "ir-2a2",
      "topic": "incident",
      "ask": "Do you have an emergency call list with phone numbers for key staff?",
      "type": "evidence",
      "answer": "Alicia has everyone's numbers in HR. There's no special emergency list, no.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-2a3",
      "topic": "incident",
      "ask": "Who has the authority to take the portal offline during an emergency?",
      "type": "followup",
      "answer": "James, I guess. Or me. We never wrote that down. In April James just did what he had to, and told me after.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-2b",
      "topic": "incident",
      "ask": "What exactly would your own role be during an incident, apart from customers?",
      "type": "followup",
      "answer": "Deciding things, I suppose. Paying for help. Talking to the board. Last time I mostly made phone calls.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q34"
      ]
    },
    {
      "id": "ir-2d",
      "topic": "incident",
      "ask": "Could you give me a general sense of how ready Northgate is for incidents?",
      "type": "vague",
      "answer": "Much more ready than in April. We learned a lot. People are more careful.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "apr-1",
      "topic": "april",
      "ask": "Thinking back to April, who did you contact outside the company, and in what order?",
      "type": "open",
      "answer": "That was the hard part. On the first morning we honestly did not know whom to call. Do you call the police? The bank? The insurance company? James was looking for the insurance number, and I was calling my own lawyer. He does contracts, not this kind of thing. He found someone else for us after a few days.",
      "next": [
        "apr-1a",
        "apr-1b",
        "apr-2a2",
        "apr-v"
      ],
      "evidence": [],
      "covers": [
        "Q2",
        "Q36"
      ]
    },
    {
      "id": "apr-1a",
      "topic": "april",
      "ask": "Are those outside contacts written down now, somewhere people could find them quickly?",
      "type": "followup",
      "answer": "I think they're in James's plan now. I haven't checked, to be honest. I'd call my lawyer again, and he'd know.",
      "next": [
        "apr-ev",
        "apr-1a2",
        "apr-1a3",
        "apr-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q2"
      ]
    },
    {
      "id": "apr-1a2",
      "topic": "april",
      "ask": "Do you know the name of the breach lawyer your own lawyer found for you?",
      "type": "followup",
      "answer": "It was a firm he found for us. I don't remember the name now. Helen paid the invoices, so she'd know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2"
      ]
    },
    {
      "id": "apr-1a3",
      "topic": "april",
      "ask": "Did anyone contact the police or the FBI about the stolen vendor data?",
      "type": "followup",
      "answer": "No, I don't think so. We talked about it, but nobody was sure it was worth it. Maybe we should have. That's all I remember.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2",
        "Q36"
      ]
    },
    {
      "id": "apr-1a4",
      "topic": "april",
      "ask": "I assume the insurer's hotline number is now saved where everyone can find it?",
      "type": "leading",
      "answer": "Yes, I'm sure James has put it somewhere.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "apr-1b",
      "topic": "april",
      "ask": "Why did you call your own lawyer first, rather than a data breach specialist?",
      "type": "followup",
      "answer": "Because he's the lawyer I know. I didn't know breach lawyers existed, honestly. He found someone else for us after a few days.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2"
      ]
    },
    {
      "id": "apr-ev",
      "topic": "april",
      "ask": "May I see the cyber insurance policy summary, with the claim hotline number?",
      "type": "evidence",
      "answer": "It's somewhere in my files, but I can't find it right now. Helen deals with the insurance broker. She'll have a clean copy.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2",
        "Q36"
      ]
    },
    {
      "id": "apr-v",
      "topic": "april",
      "ask": "Could you tell me generally how April went for the business as a whole?",
      "type": "vague",
      "answer": "It was a hard month. Very stressful. But we got through it. Everyone worked very hard, and people pulled together.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "apr-2",
      "topic": "april",
      "ask": "When was the insurance company told about the incident, and who told them?",
      "type": "open",
      "answer": "I told them, once we knew what had happened, and after the lawyer said we should. So... early May, I think. About three weeks after. I didn't know there was a deadline, if that's what you're asking. I think there's a hotline number in the policy somewhere. Nobody knew about it at the time.",
      "next": [
        "apr-2a",
        "apr-2b",
        "apr-ev",
        "apr-2d"
      ],
      "evidence": [],
      "covers": [
        "Q2",
        "Q36"
      ]
    },
    {
      "id": "apr-2a",
      "topic": "april",
      "ask": "Did anyone check whether the law required Northgate to notify customers or the state?",
      "type": "followup",
      "answer": "The lawyer handled the vendor letters, because it was their bank details that were taken. Those went out in the middle of May. For customers, or the state, I don't think anyone checked. It was mostly vendor data, so we assumed it was fine. I'm not sure, to be honest.",
      "next": [
        "apr-2a1",
        "apr-2a2",
        "apr-2a3",
        "apr-2a4"
      ],
      "evidence": [],
      "covers": [
        "Q36"
      ]
    },
    {
      "id": "apr-2a1",
      "topic": "april",
      "ask": "Whose data was in the files that were taken, only vendors or also staff?",
      "type": "followup",
      "answer": "Vendors mostly. Bank details of about 140 vendors. I don't think staff data was in there. James would know exactly.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q36"
      ]
    },
    {
      "id": "apr-2a2",
      "topic": "april",
      "ask": "Could I have a copy of the letter the lawyer sent to the vendors?",
      "type": "evidence",
      "answer": "The lawyer has it. Or Helen. I didn't keep a copy myself, sorry.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q36"
      ]
    },
    {
      "id": "apr-2a3",
      "topic": "april",
      "ask": "Next time, who would decide whether a breach must be reported to the state?",
      "type": "followup",
      "answer": "Me, I suppose. With a lawyer. We don't have a rule for it. That's really all I can say.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q36"
      ]
    },
    {
      "id": "apr-2a4",
      "topic": "april",
      "ask": "I assume the lawyer confirmed that you met every legal deadline, is that right?",
      "type": "leading",
      "answer": "Yes. I think he'd have told us if we hadn't.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "apr-2b",
      "topic": "april",
      "ask": "Did the insurer say anything about the three weeks it took to tell them?",
      "type": "followup",
      "answer": "They asked why it took so long. Helen is dealing with the claim. She'd know where it stands now.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q2",
        "Q36"
      ]
    },
    {
      "id": "apr-2d",
      "topic": "april",
      "ask": "I suppose the insurance policy has no deadline for reporting an incident, right?",
      "type": "leading",
      "answer": "I don't think so. Nobody told us about one.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bc-1",
      "topic": "continuity",
      "ask": "If the ordering portal stopped for a week, how would the business keep running?",
      "type": "open",
      "answer": "We would figure it out. We're a practical team. Tunde's people can do orders on paper, they have done that before. James would restore from backups. I don't have a written plan for that, no. How long would it take? I would have to ask James.",
      "next": [
        "bc-1a",
        "bc-1b",
        "bc-3",
        "bc-v"
      ],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-1a",
      "topic": "continuity",
      "ask": "Which system would you need back first, and how quickly would you need it?",
      "type": "followup",
      "answer": "The portal, I think. Or maybe the file server, for Finance. I'd want everything back in a day. How long would it really take? I'd have to ask James.",
      "next": [
        "bc-1a1",
        "bc-1a2",
        "bc-1a3",
        "bc-v"
      ],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-1a1",
      "topic": "continuity",
      "ask": "Has James ever told you how long a full restore from backup would take?",
      "type": "followup",
      "answer": "No. We never asked. I assume a day or so. That's all I know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-1a2",
      "topic": "continuity",
      "ask": "Realistically, how long could the warehouse keep taking orders on paper?",
      "type": "followup",
      "answer": "A few days, I think. After that it gets messy. You should ask Tunde, he'd know better.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-1a3",
      "topic": "continuity",
      "ask": "Could I get a copy of the paper order form the warehouse would use?",
      "type": "evidence",
      "answer": "Tunde would have that. Ask him. I've never seen it myself.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-1b",
      "topic": "continuity",
      "ask": "Has the business ever practised running without its systems, even for a morning?",
      "type": "followup",
      "answer": "No, never on purpose. Only in April, and that wasn't practice.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-3",
      "topic": "continuity",
      "ask": "Is there a written continuity or recovery plan that I could take a look at?",
      "type": "evidence",
      "answer": "No. Nothing written down. We would figure it out on the day. I suppose that's something you'll tell me we need.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q40"
      ]
    },
    {
      "id": "bc-v",
      "topic": "continuity",
      "ask": "Could you give me a general sense of whether the business is ready for a disaster?",
      "type": "vague",
      "answer": "I think we're in good shape. We got through April, didn't we? We're practical people. We'd manage.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bc-2",
      "topic": "continuity",
      "ask": "In April, how did you communicate with customers, vendors, and your own staff?",
      "type": "open",
      "answer": "I sent an email to customers the next Monday, the 20th. Five days later. I wrote it myself with Helen. Helen and her team phoned our biggest vendors that first week, to warn them about fake bank-change emails. Staff heard from me at a meeting. It worked out, I think, but we made it up as we went.",
      "next": [
        "bc-2a",
        "bc-2b",
        "bc-3",
        "bc-2d"
      ],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2a",
      "topic": "continuity",
      "ask": "Who would write and send those messages next time, and is there a template?",
      "type": "followup",
      "answer": "Me, I suppose, with Helen. No template. I'd probably copy the April email.",
      "next": [
        "bc-2e",
        "bc-2a2",
        "bc-2a3",
        "bc-2a4"
      ],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2e",
      "topic": "continuity",
      "ask": "Would you forward me the email you sent to customers on the 20th?",
      "type": "evidence",
      "answer": "I'd have to dig for it. Helen might find it faster. It was only a short email.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2a2",
      "topic": "continuity",
      "ask": "How did staff find out, and what were they told to say to customers?",
      "type": "followup",
      "answer": "I told them at a meeting. I said, if customers ask, send them to me. That was it, really.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2a3",
      "topic": "continuity",
      "ask": "Why did it take five days before customers got the email from you?",
      "type": "followup",
      "answer": "We didn't know what to say. We waited for James to understand what happened. And for the lawyer. That's all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2a4",
      "topic": "continuity",
      "ask": "I assume customers were happy with how you handled the communication, correct?",
      "type": "leading",
      "answer": "Yes. Nobody complained much. I think so.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bc-2b",
      "topic": "continuity",
      "ask": "Who phoned the vendors, and how did they decide which ones to call first?",
      "type": "followup",
      "answer": "Helen and her team. The biggest ones first, the ones we pay most. Helen would know the details.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q41"
      ]
    },
    {
      "id": "bc-2d",
      "topic": "continuity",
      "ask": "So you already have a ready-made message for customers if this happens again?",
      "type": "leading",
      "answer": "Yes, more or less. We have the April email.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "bc-close",
      "topic": "continuity",
      "ask": "Is there anything that worries you that we haven't asked about yet today?",
      "type": "closing",
      "answer": "Two things. First, the insurance renewal in November. They asked about MFA, tested backups, and an incident plan. I want to say yes to all three and mean it. Second... James. If he left, I don't know who would know how everything works.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q5"
      ]
    }
  ]
};
