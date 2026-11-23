// Week 15 short talks (Security+ Mock Exam). Shapes: docs/COURSE_V2.md
// Built from the legacy weeks-data.js week 12 lessons and quiz. Week 15 has no quiz of its own:
// the mock exam is the test this week.
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['15.1'] = {
  id: '15.1', week: 15, title: 'Exam day: format, pacing, and strategy', mins: 10, module: 'Security+ SY0-701 exam preparation',
  intro: "This is the last week of the course. Today you retake the full mock exam, and this time you take it the way you will take the real one: timed, closed-note, start to finish. This talk covers what the real exam looks like, how to pace yourself, and the habits that turn what you know into points.",
  sections: [
    {
      title: 'What the real exam looks like',
      body: [
        "The CompTIA Security+ SY0-701 exam has <strong>at most 90 questions</strong> and gives you <strong>90 minutes</strong>. Scores run from 100 to 900, and you need <strong>750 to pass</strong>. That is a <strong>scaled score</strong>: CompTIA converts your raw result to the 100-900 scale, so 750 does not mean 75% correct. You can take it at a Pearson VUE test center or online with a webcam.",
        "Most questions are multiple choice, some with more than one correct answer. A few are <strong>performance-based questions</strong> (PBQs): hands-on tasks such as configuring a firewall rule, matching attacks to their descriptions, or reading a log. PBQs take longer than multiple-choice questions."
      ],
      table: {
        head: ['', 'Real exam (SY0-701)', 'Our mock exam'],
        rows: [
          ['Questions', 'Up to 90, including PBQs', '86 multiple-choice and matching'],
          ['Time', '90 minutes', '90 minutes, auto-submits'],
          ['Passing', '750 on a 100-900 scale', '80% (the course target)'],
          ['Retakes', 'Each attempt needs an exam voucher', 'Unlimited; questions and options reshuffle each time']
        ]
      },
      callout: { kind: 'tip', title: 'Practice PBQs in the labs', text: "Our mock exam has no PBQs, so it runs a little faster than the real thing. Your PBQ labs are where you practice the hands-on questions. Aim to finish each one at the exam pace shown on the lab page." }
    },
    {
      title: 'Why a full, timed sitting',
      list: [
        "<strong>Stamina.</strong> Focusing for 90 minutes is a skill. You build it by doing it.",
        "<strong>True weak spots.</strong> Under time pressure you find what you really know, which can differ from how you feel while studying.",
        "<strong>Less anxiety.</strong> The real exam feels familiar once you have practiced the format."
      ],
      body: [
        "Make the conditions real: a quiet place, notes closed, phone away, and no looking things up. A score earned with your notes open tells you nothing about exam day."
      ]
    },
    {
      title: 'Pacing',
      body: [
        "You have about <strong>one minute per question</strong>. Check the clock at the halfway point: with 45 minutes left you want to be past question 43 of the mock exam. Never let one hard question eat five minutes while easy points wait further on."
      ],
      list: [
        "<strong>Flag and move.</strong> If a question or PBQ looks slow, make your best guess, flag it, and come back after the faster ones.",
        "<strong>Save time at the end.</strong> Keep five to ten minutes to return to flagged questions.",
        "<strong>Answer everything.</strong> There is no penalty for guessing. A blank is always wrong; a guess might be right."
      ]
    },
    {
      title: 'Reading the question',
      body: [
        "Many wrong answers are true statements that do not answer the question asked. Read the last sentence first, then the scenario, and watch for the words that change what the right answer must be."
      ],
      table: {
        head: ['Key word', 'What it means for your answer'],
        rows: [
          ['BEST', 'Several answers may work; pick the one that fits this exact scenario and constraint (cost, speed, size of the company).'],
          ['FIRST / NEXT', 'Put the answers in order and pick the earliest correct step. In incident response, containment usually comes before eradication.'],
          ['MOST LIKELY', 'Pick the explanation the evidence points to, not the scariest one.'],
          ['NOT / EXCEPT / LEAST', 'You are looking for the one that does not fit. Slow down: this is where people misread.']
        ]
      },
      callout: { kind: 'exam', title: 'Eliminate first', text: "Cross out the answers you know are wrong. Often two go quickly, and choosing between the last two doubles your odds even when you are unsure." }
    },
    {
      title: 'Managing nerves',
      body: [
        "If you freeze on a question, take one slow breath, pick your best answer, flag it, and keep moving. One hard question is worth exactly as much as one easy question. Sleep and food the day before matter more than one more hour of cramming."
      ]
    }
  ],
  check: [
    { q: "What is the maximum number of questions on the Security+ SY0-701 exam?", opts: ["60", "75", "90", "120"], ans: 2, why: "SY0-701 has at most 90 questions, including performance-based questions, in 90 minutes." },
    { q: "On the SY0-701 scale of 100 to 900, what score is needed to pass?", opts: ["600", "700", "750", "800"], ans: 2, why: "The passing score is 750 on the scaled 100-900 range." },
    { q: "Early in the exam, a performance-based question looks like it will take a long time. What is the best plan?", opts: ["Finish it no matter how long it takes", "Make a best guess, flag it, and return after the faster questions", "Skip it and never come back", "End the exam early"], ans: 1, why: "Flagging protects your time for the questions you can answer quickly, and you still get back to it." },
    { q: "You are sure two of the four answers are wrong, so you choose between the last two. What technique is this?", opts: ["Flagging", "Scaled scoring", "Time boxing", "Process of elimination"], ans: 3, why: "Removing answers you know are wrong improves your chance of picking the right one." },
    { q: "Time is almost up and three questions are still blank. What should you do?", opts: ["Leave them blank to avoid a penalty", "Change earlier answers instead", "Pick an answer for each one", "Ask the proctor for more time"], ans: 2, why: "There is no penalty for guessing. A blank is always wrong; a guess may be right." }
  ]
};

COURSE_LESSONS['15.2'] = {
  id: '15.2', week: 15, title: 'Learning from every miss, and your final plan', mins: 10, module: 'Security+ SY0-701 exam preparation',
  intro: "The review after a mock exam is where most of the learning happens. Reading the right letter takes ten seconds and teaches you almost nothing. This talk shows you how to review a miss so it stays fixed, how to tell real progress from a memorized retake, and how to turn your results into a short final study plan.",
  sections: [
    {
      title: 'Three questions for every miss',
      body: [
        "For each question you missed or only partly got right, write a short note that answers three questions:"
      ],
      list: [
        "<strong>Why is the right answer right?</strong> Say it in your own words, not the explanation's.",
        "<strong>Why is my answer wrong?</strong> Was it false, or true but not the best fit for this scenario?",
        "<strong>What is this question really testing?</strong> Name the topic and the domain."
      ],
      table: {
        head: ['Part of the note', 'Example'],
        rows: [
          ['Right answer, in my words', 'OCSP, because the browser asks the CA about one certificate right now.'],
          ['Why mine was wrong', 'I picked CRL. A CRL also shows revocation, but it is a downloaded list, not a live check for one certificate.'],
          ['What it tests', 'Certificate revocation methods. Domain 1, cryptography and PKI (Week 2).']
        ]
      },
      callout: { kind: 'tip', title: 'Name the mistake type', text: "Mark each miss as one of three kinds: did not know it, misread the question, or ran out of time. Each needs a different fix: study the topic, slow down on key words, or practice pacing." }
    },
    {
      title: 'Group, then prioritize',
      body: [
        "Sort your misses by domain and topic, as you did in Lab 14.1. If you missed four cryptography questions and one firewall question, cryptography is the priority. When two domains have the same number of misses, give more time to the one with the larger exam weight: Security Operations (28%) before General Security Concepts (12%).",
        "Then go back to the course, not to random videos. Use the module-to-week table from Lab 14.1 to find the lesson that taught the topic, re-read it, and retake that week's quiz."
      ]
    },
    {
      title: 'Lucky guesses and memorized answers',
      body: [
        "A question you <strong>guessed</strong> and got right is still a weak spot. Treat it as a miss in your review.",
        "Be careful with retakes. Our mock exam reshuffles the same 86 questions, so a higher score on your second or third attempt can mean you remember the questions rather than understand the topics. The test is simple: cover the options and explain the answer out loud. If you cannot, you have memorized it, and the real exam will ask the same idea in different words."
      ]
    },
    {
      title: 'A focused final study plan',
      body: [
        "A <strong>focused study plan</strong> is short, specific, and dated. It targets only the topics your misses reveal. You write yours in Lab 15.1 at the end of the week."
      ],
      list: [
        "<strong>Pick a date.</strong> Book the exam, or set the date you will book it. A date turns 'someday' into a plan.",
        "<strong>Work your weakest domains first</strong>, in short daily sessions rather than one long cram.",
        "<strong>Mix in practice questions</strong> on those topics, and redo any PBQ lab you did not score 100% on.",
        "<strong>Plan the logistics:</strong> test center or online, how you will get there, and whether your ID meets CompTIA's rules (your name must match your registration).",
        "<strong>Plan the last day:</strong> light review, then rest."
      ],
      callout: { kind: 'exam', title: 'What the objectives are for', text: "CompTIA publishes the full SY0-701 exam objectives as a free PDF. Use it as your final checklist: read each line and ask whether you could explain it in one sentence. Any line you cannot explain goes in your plan." }
    }
  ],
  check: [
    { q: "When you review a question you missed, what should you do besides read the correct answer?", opts: ["Explain why the right answer is right, why yours was wrong, and what topic it tests", "Memorize the answer letter", "Skip it if the topic seems rare", "Retake the exam immediately"], ans: 0, why: "Understanding the reasoning and the topic turns a miss into a fixed gap. The letter changes when the questions are shuffled." },
    { q: "On your mock exam you missed four cryptography questions and one firewall question. What should you study first?", opts: ["Cryptography", "Firewalls", "Both equally", "Neither; retake the exam"], ans: 0, why: "Repeated misses in one topic show a real gap. Cryptography is the priority." },
    { q: "You guessed on a question and got it right. How should you treat it in your review?", opts: ["As a strength", "Ignore it", "As a weak spot to study", "Report it as an error"], ans: 2, why: "A lucky guess does not show understanding. Review it like a miss." },
    { q: "You missed three Security Operations questions and three General Security Concepts questions. Which deserves more study time?", opts: ["General Security Concepts, because it is the foundation", "Security Operations, because it carries more exam weight", "Neither, the counts are equal", "Whichever you like more"], ans: 1, why: "Security Operations is 28% of the exam and General Security Concepts is 12%, so the same improvement is worth more there." },
    { q: "Your mock exam score rose from 66% to 91% on the third attempt, but you cannot explain several answers without seeing the options. What does that suggest?", opts: ["You are fully ready", "The exam got easier", "The scoring changed", "You may have memorized the questions rather than learned the topics"], ans: 3, why: "Retakes reuse the same questions. If you cannot explain an answer without the options, the real exam's different wording may catch you." }
  ]
};
