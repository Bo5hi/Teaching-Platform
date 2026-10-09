/* INT-03 Alicia Brown, HR Manager. Interview simulator data, format v2. Agrees with tools/northgate_truth.py and the INT-03 record. */
window.MCCOE_INTERVIEWS = window.MCCOE_INTERVIEWS || {};
window.MCCOE_INTERVIEWS["INT-03"] = {
  "id": "INT-03",
  "name": "Alicia Brown",
  "role": "HR Manager",
  "initials": "AB",
  "setting": "In person, meeting room next to HR · Tuesday 8 September 2026, 14:00",
  "minutes": 20,
  "opening": "Hello, come in, sit down. Nadia is covering the office, so I have about twenty minutes. Ask me anything.",
  "closing": "Oh, is that the time? I have an interview with a new driver. If you need any HR papers, just email me or Nadia.",
  "topics": [
    {
      "id": "policy",
      "title": "Security policy and acknowledgements",
      "opens": [
        "pol-1",
        "pol-2",
        "pol-ev",
        "pol-v"
      ]
    },
    {
      "id": "joiners",
      "title": "New hires and job changes",
      "opens": [
        "new-1",
        "new-2",
        "new-4",
        "new-l"
      ]
    },
    {
      "id": "leavers",
      "title": "Leavers and account removal",
      "opens": [
        "off-1",
        "off-4",
        "off-3",
        "off-l"
      ]
    },
    {
      "id": "hrdata",
      "title": "Where HR data is kept",
      "opens": [
        "data-1",
        "data-3",
        "data-ev",
        "data-l"
      ]
    },
    {
      "id": "training",
      "title": "Security awareness training",
      "opens": [
        "trn-1",
        "trn-4",
        "trn-3",
        "trn-v"
      ]
    },
    {
      "id": "wrapup",
      "title": "Wrap-up",
      "opens": [
        "end-1",
        "staff-ev",
        "end-v",
        "end-l"
      ]
    }
  ],
  "questions": [
    {
      "id": "pol-1",
      "topic": "policy",
      "ask": "How do new employees learn about the security policy when they first join?",
      "type": "open",
      "answer": "It's in the employee handbook. On the first day, every new hire gets the handbook, and they sign an acknowledgement page. It says they read the policies, including the information security policy. I keep those signed records. Almost everyone has signed. The two newest people still need to. One of them only started last week.",
      "next": [
        "pol-1a",
        "pol-1b",
        "pol-ev",
        "pol-1d"
      ],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-1a",
      "topic": "policy",
      "ask": "Has the security policy changed at all since most people signed for it?",
      "type": "followup",
      "answer": "I don't think so. James wrote it a few years ago and Linda approved it. Some of it is a bit old. It still says to change your password every 90 days, and people complain about that. But the handbook version is the one everyone has.",
      "next": [
        "pol-1a1",
        "pol-1a2",
        "pol-1a3",
        "pol-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q7",
        "Q8"
      ]
    },
    {
      "id": "pol-1a1",
      "topic": "policy",
      "ask": "When was the handbook last reissued, and did everyone sign again at that time?",
      "type": "followup",
      "answer": "In 2022, when the new policy came in. Everyone re-signed then. Since then, only new people sign. That's all there is to it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-1a2",
      "topic": "policy",
      "ask": "Do you have a newer draft of the policy, updated after the April incident?",
      "type": "evidence",
      "answer": "No. Nothing has changed. If anyone is updating it, that would be James. You'd have to ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q8"
      ]
    },
    {
      "id": "pol-1a3",
      "topic": "policy",
      "ask": "What do staff say about the 90-day password rule, and do they follow it?",
      "type": "followup",
      "answer": "They complain a lot. Whether they really change them, I don't know. That's James's side, not mine.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-1a4",
      "topic": "policy",
      "ask": "I assume James reviews the policy every year and tells you about any changes?",
      "type": "leading",
      "answer": "Yes, I think he looks at it. He'd tell me if something changed.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "pol-1b",
      "topic": "policy",
      "ask": "Who are the two people who haven't signed yet, and when will they?",
      "type": "followup",
      "answer": "Rafael in the warehouse, he started in April, and Sam, who started on 1 September. Sam has only just started. Rafael's page never came back. I need to chase him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-ev",
      "topic": "policy",
      "ask": "Could I get a copy of the signed acknowledgement records for all staff?",
      "type": "evidence",
      "answer": "Yes, I have a list with everyone's name and the date they signed. The signed pages are scanned into the HR folder. I'll print the list for you.",
      "next": [],
      "evidence": [
        "EV-13"
      ],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-1d",
      "topic": "policy",
      "ask": "So every single member of staff has signed for the current policy, correct?",
      "type": "leading",
      "answer": "Yes, everyone. Well, nearly everyone.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "pol-v",
      "topic": "policy",
      "ask": "Could you give me a general overview of what HR does here day to day?",
      "type": "vague",
      "answer": "Well, HR is me and Nadia. We do a bit of everything. Hiring, payroll changes, benefits, leavers, questions from staff. Sixty-two people, so we know almost everyone by name. It's a friendly company.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "pol-2",
      "topic": "policy",
      "ask": "How are staff told when a security rule changes, or when a new rule is added?",
      "type": "open",
      "answer": "Usually James sends an email to everyone. After April, Linda talked to all the staff about MFA and phishing. But the handbook itself hasn't changed.",
      "next": [
        "pol-2a",
        "pol-2b",
        "pol-2c",
        "pol-2d"
      ],
      "evidence": [],
      "covers": [
        "Q7",
        "Q8"
      ]
    },
    {
      "id": "pol-2a",
      "topic": "policy",
      "ask": "Do staff have to confirm they read those emails, or sign anything new?",
      "type": "followup",
      "answer": "No. Only the handbook page when they start. We don't track the emails.",
      "next": [
        "pol-2a1",
        "pol-ev",
        "pol-2a3",
        "pol-v"
      ],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-2a1",
      "topic": "policy",
      "ask": "Where can staff find the current policy if they want to read it again?",
      "type": "followup",
      "answer": "In the handbook. And there's a copy in the HR folder on the file server. Everyone in the office can open that folder. That's really all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7",
        "Q14"
      ]
    },
    {
      "id": "pol-2a3",
      "topic": "policy",
      "ask": "Who approved the policy in the handbook, and in what year was that?",
      "type": "followup",
      "answer": "Linda approved it. In 2022, when James wrote it. That's really all I know about it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-2b",
      "topic": "policy",
      "ask": "Did the April incident lead to any new written rules for staff to follow?",
      "type": "followup",
      "answer": "Not written, no. Just the training and MFA. The policy is the same as before.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q8"
      ]
    },
    {
      "id": "pol-2c",
      "topic": "policy",
      "ask": "May I see the emails James sent staff about the new security rules?",
      "type": "evidence",
      "answer": "I don't keep those. Ask James, they came from him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q7"
      ]
    },
    {
      "id": "pol-2d",
      "topic": "policy",
      "ask": "So staff always know the latest rules, because the handbook is kept up to date?",
      "type": "leading",
      "answer": "Yes. The handbook is what everyone has.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "new-1",
      "topic": "joiners",
      "ask": "What happens when a new person starts, and how do they get system access?",
      "type": "open",
      "answer": "The checklist has a joiner part. Before they start, I email James their name, start date, job, and manager. He creates the email account and gives them the folders their team uses. On day one I sit with them, they sign the handbook page, and I show them how to set up MFA on their phone. At least, office people. The warehouse is different. A lot of them don't have work phones. And since May, I assign the security course in the first week.",
      "next": [
        "new-1a",
        "new-1b",
        "new-4",
        "new-1d"
      ],
      "evidence": [],
      "covers": [
        "Q23",
        "Q18"
      ]
    },
    {
      "id": "new-1a",
      "topic": "joiners",
      "ask": "How does James know which folders and systems a new person should have?",
      "type": "followup",
      "answer": "I tell him the team, and he gives them what the others in that team have. I think. He doesn't ask me for more.",
      "next": [
        "new-1a1",
        "new-1a2",
        "new-1a3",
        "new-1a4"
      ],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "new-1a1",
      "topic": "joiners",
      "ask": "Does anyone check later that the new person's access is still correct?",
      "type": "followup",
      "answer": "No, I don't think so. Not HR, anyway. Maybe James does. I don't know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "new-1a2",
      "topic": "joiners",
      "ask": "Could you show me the email you sent James for your most recent starter?",
      "type": "evidence",
      "answer": "I'd have to look for it. It only says the name, start date, job, and manager. Nothing about access. James decides that.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "new-1a3",
      "topic": "joiners",
      "ask": "How much notice does James usually get before a new person's first day?",
      "type": "followup",
      "answer": "About a week, usually. The checklist says three days. Sometimes managers tell me late, so it's shorter. That's all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "new-1a4",
      "topic": "joiners",
      "ask": "So a new person can never open folders that belong to another team, correct?",
      "type": "leading",
      "answer": "Correct. They only get their own team's folders.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "new-1b",
      "topic": "joiners",
      "ask": "How do warehouse staff without work phones set up MFA on their first day?",
      "type": "followup",
      "answer": "Honestly, I don't know. I don't do it with them. James said he would sort something out for the warehouse. You should ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "new-1d",
      "topic": "joiners",
      "ask": "Could you give me a general sense of how onboarding usually goes for people?",
      "type": "vague",
      "answer": "Pretty smoothly. People are nice here. We help them settle in.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "new-2",
      "topic": "joiners",
      "ask": "When someone changes jobs inside the company, what happens to their old access?",
      "type": "open",
      "answer": "Hmm. I tell James if it's a big change, like moving from the warehouse to the office. Small changes, probably not. I don't think anyone removes the old folders. We haven't had many.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "new-4",
      "topic": "joiners",
      "ask": "Do you have a report showing which staff have actually finished setting up MFA?",
      "type": "evidence",
      "answer": "No, that's James's area. He can see it in the admin console. I only show people how to set it up.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q18"
      ]
    },
    {
      "id": "new-l",
      "topic": "joiners",
      "ask": "I assume new staff get exactly the access they need and nothing more, right?",
      "type": "leading",
      "answer": "Yes. James gives them their team's folders. That's all they get.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "off-1",
      "topic": "leavers",
      "ask": "Walk me through what happens, step by step, when someone leaves the company.",
      "type": "open",
      "answer": "We have an offboarding checklist. On their last day, I collect the badge, the keys, and the laptop or phone if they have one. I do the exit paperwork. Then I email James, and he turns off their accounts.",
      "next": [
        "off-2",
        "off-1b",
        "off-3",
        "off-v"
      ],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-2",
      "topic": "leavers",
      "ask": "After you email IT, how quickly are the leaver's accounts actually turned off?",
      "type": "followup",
      "answer": "The same day. IT disables them the same day. James is very good about that. I've never had a problem.",
      "next": [
        "off-6",
        "off-2b",
        "off-2c",
        "off-2d"
      ],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-6",
      "topic": "leavers",
      "ask": "How do you know the accounts were turned off? Does IT confirm it?",
      "type": "followup",
      "answer": "Well... I send the email and I trust James. He doesn't usually reply, he's so busy. There's a line on the checklist for IT, but honestly I tick the whole checklist myself when I close the file. I suppose I don't actually check. But I've never heard of a problem.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-2b",
      "topic": "leavers",
      "ask": "Who was the last office person to leave, and was their account closed?",
      "type": "followup",
      "answer": "Keith Bell, from Customer Service. He left on 2 January. I emailed James the same day, and I closed the file a week later. So yes, it would be closed.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-2c",
      "topic": "leavers",
      "ask": "Could I see a list of this year's leavers with the date each account closed?",
      "type": "evidence",
      "answer": "I keep the leaver log with the leaving dates, yes. But the date each account was closed? That would be James. He'd have to check his system.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-2d",
      "topic": "leavers",
      "ask": "So you've never had a leaver whose account stayed open afterwards, is that right?",
      "type": "leading",
      "answer": "Never. Not that I know of.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "off-1b",
      "topic": "leavers",
      "ask": "What happens to a leaver's computer and files once they have gone?",
      "type": "followup",
      "answer": "Their manager takes any files they need. The computer goes back to James. What he does with it after that, I don't know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-3",
      "topic": "leavers",
      "ask": "Could I have the offboarding checklist and your log of this year's leavers?",
      "type": "evidence",
      "answer": "Of course. The leaver log for 2026 is attached to the checklist. It's short. One person from the office who left on 2 January, and a few from the warehouse. You can see it all in there.",
      "next": [],
      "evidence": [
        "EV-14"
      ],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-v",
      "topic": "leavers",
      "ask": "Could you give me a general sense of how leavers are usually handled here?",
      "type": "vague",
      "answer": "Carefully, I think. We're a small company. We know everyone, so nobody slips through.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "off-l",
      "topic": "leavers",
      "ask": "I assume IT always disables leavers' accounts on their last day, is that right?",
      "type": "leading",
      "answer": "Yes, always. The same day. James is great.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "off-4",
      "topic": "leavers",
      "ask": "What happens with contractors or vendors who stop working with Northgate? Who handles that?",
      "type": "open",
      "answer": "That's not me. HR only handles employees. Vendors are James, or whoever manages the contract.",
      "next": [
        "off-7",
        "off-4b",
        "off-4c",
        "off-4d"
      ],
      "evidence": [],
      "covers": [
        "Q20",
        "Q9"
      ]
    },
    {
      "id": "off-7",
      "topic": "leavers",
      "ask": "Would you have a list of the vendor accounts that were closed this year?",
      "type": "evidence",
      "answer": "No, I don't keep anything like that. Ask James. He'd know which vendors still have accounts.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20",
        "Q9"
      ]
    },
    {
      "id": "off-4b",
      "topic": "leavers",
      "ask": "Are temporary warehouse workers handled like employees, with the same leaver checklist?",
      "type": "followup",
      "answer": "If we employ them ourselves, yes, same checklist. If they come from an agency, I'm not sure. Ask Tunde.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "off-4c",
      "topic": "leavers",
      "ask": "Who at Northgate manages the vendor contracts, like the website company's contract?",
      "type": "followup",
      "answer": "James, I think, for IT things. Helen pays the invoices. Not HR, anyway.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q9"
      ]
    },
    {
      "id": "off-4d",
      "topic": "leavers",
      "ask": "I assume vendor accounts are closed as soon as their contract ends, right?",
      "type": "leading",
      "answer": "I would think so. James is careful about those things.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "data-1",
      "topic": "hrdata",
      "ask": "Where are HR records stored, for example personnel files and salary information?",
      "type": "open",
      "answer": "Paper files are in a locked cabinet in my office. The electronic ones are in the HR folder on the file server. There are forms in there, holiday requests, the handbook, and a subfolder with the personnel files and the salary spreadsheet.",
      "next": [
        "data-2",
        "data-1b",
        "data-ev",
        "data-1d"
      ],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-2",
      "topic": "hrdata",
      "ask": "Who can open that HR folder on the file server, and who decided that?",
      "type": "followup",
      "answer": "Everybody in the office, I think. James set it up that way years ago, so people could get the forms without asking me. The personnel files are in a subfolder, so you'd have to go looking for them. Nobody would do that. We trust each other here.",
      "next": [
        "data-2a",
        "data-2b",
        "data-2c",
        "data-2d"
      ],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-2a",
      "topic": "hrdata",
      "ask": "Does that include warehouse and delivery staff, or only the people in the office?",
      "type": "followup",
      "answer": "Only office people, I think. The warehouse doesn't use the file server much. But I'm not completely sure.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-2b",
      "topic": "hrdata",
      "ask": "Has anyone ever suggested moving the personnel files somewhere more private?",
      "type": "followup",
      "answer": "No. It never came up. It's been like that for years. That's all I can tell you.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-2c",
      "topic": "hrdata",
      "ask": "Is there a record showing who opened the salary spreadsheet in recent months?",
      "type": "evidence",
      "answer": "A record? I wouldn't know. That's a question for James.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-2d",
      "topic": "hrdata",
      "ask": "I suppose the salary spreadsheet at least has its own separate password, correct?",
      "type": "leading",
      "answer": "Yes, I'm sure it does. It must have.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "data-1b",
      "topic": "hrdata",
      "ask": "Who has keys to the locked cabinet with the paper personnel files?",
      "type": "followup",
      "answer": "Me and Nadia. Nobody else needs them.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-1d",
      "topic": "hrdata",
      "ask": "Could you tell me in general how HR looks after people's private information?",
      "type": "vague",
      "answer": "Very carefully. We take privacy seriously. Everyone knows HR files are private.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "data-ev",
      "topic": "hrdata",
      "ask": "May I see a list of the people who have access to the HR folder?",
      "type": "evidence",
      "answer": "I don't have that. James set up the permissions. He could print it for you.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-l",
      "topic": "hrdata",
      "ask": "I take it only HR staff can open the personnel files, is that correct?",
      "type": "leading",
      "answer": "Yes, of course. Those are private. The paper files are locked in my office.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "data-3",
      "topic": "hrdata",
      "ask": "Does Northgate label documents by how sensitive they are, for example 'confidential'?",
      "type": "open",
      "answer": "I think the policy talks about levels. But no, we don't really mark anything. Everyone knows HR files are private.",
      "next": [
        "data-3a",
        "data-3b",
        "data-3c",
        "data-1d"
      ],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-3a",
      "topic": "hrdata",
      "ask": "What levels of sensitivity does the policy define, as far as you remember?",
      "type": "followup",
      "answer": "Public, internal, and confidential, I think. Something like that. We don't use them.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-3b",
      "topic": "hrdata",
      "ask": "Do you have a list of which HR documents count as confidential?",
      "type": "evidence",
      "answer": "No, nothing like that. We just know.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "data-3c",
      "topic": "hrdata",
      "ask": "When you send personal details to payroll or James, how do you send them?",
      "type": "followup",
      "answer": "Just normal email. Sometimes as an attachment. Is that a problem?",
      "next": [],
      "evidence": [],
      "covers": [
        "Q14"
      ]
    },
    {
      "id": "trn-1",
      "topic": "training",
      "ask": "You ran security awareness training this year. How did it go, in your view?",
      "type": "open",
      "answer": "It went well, actually. After April, Linda asked me to organise it. We bought an online course, about 45 minutes on phishing, passwords, and MFA. I assigned it to everyone at the start of May, and it was due at the end of June. Fifty-nine of sixty-two finished on time. Two people are on leave, and they have 30 days after they come back. One is a new hire from 1 September. Her due date is the end of this month.",
      "next": [
        "trn-2",
        "trn-1c",
        "trn-3",
        "trn-1d"
      ],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-2",
      "topic": "training",
      "ask": "Did you check whether the training actually worked, for example with a phishing test?",
      "type": "followup",
      "answer": "Yes. James and I sent a fake phishing email in July. Most people reported it or ignored it. Four people clicked. It's all in the training log. Here, I'll print it for you.",
      "next": [
        "trn-2a",
        "trn-2b",
        "trn-2c",
        "trn-2d"
      ],
      "evidence": [
        "EV-06"
      ],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-2a",
      "topic": "training",
      "ask": "What happened with the four people who clicked the fake phishing link?",
      "type": "followup",
      "answer": "Each of them did a short extra lesson, and I checked that they finished it. Nobody was punished. That's really all.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-2b",
      "topic": "training",
      "ask": "Will you run another phishing test, and who decides when it happens?",
      "type": "followup",
      "answer": "James and I talked about doing one more before Christmas. Nothing is booked yet.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-2c",
      "topic": "training",
      "ask": "Could I see the fake phishing email itself, the one you sent in July?",
      "type": "evidence",
      "answer": "James made it. He'd have a copy. I just got it in my inbox like everyone else.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-2d",
      "topic": "training",
      "ask": "So nobody at Northgate would click on a phishing email now, would you agree?",
      "type": "leading",
      "answer": "Yes, I think people are much too careful now.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "trn-1c",
      "topic": "training",
      "ask": "Who chose this training course, and did anyone check it against your security policy?",
      "type": "followup",
      "answer": "I picked it from a list the vendor sent, and Linda approved the cost. Nobody compared it with the policy, honestly. James had a quick look at it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-1d",
      "topic": "training",
      "ask": "So everyone at Northgate has now completed the security training, is that correct?",
      "type": "leading",
      "answer": "Yes, everyone. It went really well.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "trn-3",
      "topic": "training",
      "ask": "May I see the training records from earlier years, before this new course?",
      "type": "evidence",
      "answer": "There aren't any, really. Before this year there was only a slide about passwords in the new-hire session. This is the first proper course, so there are no older records.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-4",
      "topic": "training",
      "ask": "Will you repeat the course every year, and is that written down anywhere?",
      "type": "open",
      "answer": "Yes, we plan to repeat it every year now. Is it written down? Hmm. Not yet. It's just our plan. Linda agreed to it.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q23"
      ]
    },
    {
      "id": "trn-v",
      "topic": "training",
      "ask": "Could you give me a general sense of how security awareness is going here?",
      "type": "vague",
      "answer": "Oh yes, I think it's good. People are much more careful since April. Everybody talks about it.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "end-1",
      "topic": "wrapup",
      "ask": "Is there anything else about HR and security that you think we should know?",
      "type": "closing",
      "answer": "People are much more careful since April. Staff forward me strange emails now, and I send them to James. Oh, and one thing. James gave me user administrator rights in the email system a couple of years ago. So I can reset passwords when he's out.",
      "next": [
        "end-2",
        "end-1b",
        "end-1c",
        "end-1d"
      ],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "end-2",
      "topic": "wrapup",
      "ask": "With those admin rights, could you disable a leaver's account yourself if needed?",
      "type": "followup",
      "answer": "I could probably disable an account too, but I've never done it. That's IT's job. I'd be afraid of breaking something.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "end-1b",
      "topic": "wrapup",
      "ask": "Who else has admin rights in the email system, apart from you and James?",
      "type": "followup",
      "answer": "I don't know. Maybe Priya. You'd have to ask James.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "end-1c",
      "topic": "wrapup",
      "ask": "Is there a record of when James gave you those admin rights, and why?",
      "type": "evidence",
      "answer": "I don't think so. He just set it up one afternoon. Ask him.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "end-1d",
      "topic": "wrapup",
      "ask": "I assume you use MFA on that admin account, like everyone else, right?",
      "type": "leading",
      "answer": "Yes, of course. I use the app on my phone.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "staff-ev",
      "topic": "wrapup",
      "ask": "Would you have a current staff list I could compare with the user accounts?",
      "type": "evidence",
      "answer": "Nadia can print one from payroll. I don't have one here. Give her a call this afternoon.",
      "next": [],
      "evidence": [],
      "covers": [
        "Q20"
      ]
    },
    {
      "id": "end-v",
      "topic": "wrapup",
      "ask": "Could you give me a general sense of how HR and IT work together here?",
      "type": "vague",
      "answer": "Very well. James is lovely. We work closely together. No problems at all.",
      "next": [],
      "evidence": [],
      "covers": []
    },
    {
      "id": "end-l",
      "topic": "wrapup",
      "ask": "So HR and IT have never had any problems working together, is that correct?",
      "type": "leading",
      "answer": "Never. James is great. Very reliable.",
      "next": [],
      "evidence": [],
      "covers": []
    }
  ]
};
