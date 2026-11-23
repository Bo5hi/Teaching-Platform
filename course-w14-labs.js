// Week 14 lab: score the first mock exam attempt by domain and plan the review. Shapes: docs/COURSE_V2.md
// From the legacy weeks-data.js week 11 lab "Record your score per domain and write a short study plan
// for your two weakest domains" and its deliverable. Answers are personal, so nothing is auto-checked.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['14.1'] = {
  id: '14.1', week: 14, title: 'Score your mock exam by domain', mins: 20, env: 'browser',
  goal: "Turn your first mock exam attempt into a map of your strong and weak Security+ domains, then write a short plan for your two weakest domains. You will use this map for the rest of Week 14 and again in Week 15.",
  youNeed: [
    "Your first Security+ Mock Exam attempt submitted, with its review screen open (or your PDF report)",
    "Scrap paper or a notes file to tally your misses",
    "About 20 minutes"
  ],
  steps: [
    {
      title: 'Save your report',
      body: [
        "On the mock exam results screen, write down your <strong>score</strong> and how many questions were <strong>correct</strong>, <strong>partly correct</strong>, <strong>incorrect</strong>, and <strong>unanswered</strong>. Then download your <strong>PDF report</strong> and keep it somewhere you can find it in Week 15. You will compare your Week 15 retake against it.",
        "A <strong>diagnostic exam</strong> measures readiness; it is not a grade. A low first score is normal and useful: it tells you exactly where to spend your time."
      ]
    },
    {
      title: 'Sort every miss into a domain',
      body: [
        "Count partly correct answers as misses. For each miss, look at the <strong>lessons to review</strong> line. The first number is a module number. Use the table below to find its Security+ domain and the course week that taught it. If a question has no lesson number, decide the domain from the topic.",
        "Keep a tally: five columns, one per domain, one mark per miss."
      ],
      tip: "Some modules cover topics from two domains. The table gives the domain most of that module's questions belong to, with the exceptions in brackets. If a question clearly fits the bracketed domain, count it there."
    },
    {
      title: 'Module to domain table',
      body: [
        "<table><thead><tr><th>Module</th><th>Topics</th><th>Domain</th><th>Re-read</th></tr></thead><tbody>" +
        "<tr><td>1</td><td>Security concepts and controls</td><td>1</td><td>Week 1</td></tr>" +
        "<tr><td>2</td><td>Threat actors and attack strategy</td><td>2</td><td>Week 1</td></tr>" +
        "<tr><td>3</td><td>Cryptography and PKI</td><td>1</td><td>Week 2</td></tr>" +
        "<tr><td>4</td><td>Identity and access management</td><td>4</td><td>Week 3</td></tr>" +
        "<tr><td>5</td><td>Network architecture</td><td>3</td><td>Week 4</td></tr>" +
        "<tr><td>6</td><td>Cloud, ICS, and architecture models</td><td>3</td><td>Week 4</td></tr>" +
        "<tr><td>7</td><td>Resilience, physical security, asset tracking</td><td>3 (physical: 1; assets and destruction: 4)</td><td>Week 1</td></tr>" +
        "<tr><td>8</td><td>Vulnerability management, threat feeds, AI risks</td><td>4 (threat intelligence: 2)</td><td>Week 5</td></tr>" +
        "<tr><td>9</td><td>Wireless and secure configuration</td><td>4</td><td>Week 4</td></tr>" +
        "<tr><td>10</td><td>Endpoint and mobile security</td><td>4</td><td>Week 7</td></tr>" +
        "<tr><td>11</td><td>Network and application security tools</td><td>4</td><td>Week 4</td></tr>" +
        "<tr><td>12</td><td>Incident response, forensics, logs</td><td>4</td><td>Weeks 8 and 9</td></tr>" +
        "<tr><td>13</td><td>Indicators of malicious activity</td><td>2</td><td>Week 5</td></tr>" +
        "<tr><td>14</td><td>Governance, change management, automation</td><td>5 (change management: 1; automation: 4)</td><td>Week 5</td></tr>" +
        "<tr><td>15</td><td>Risk management, agreements, assessments</td><td>5</td><td>Weeks 10 to 13</td></tr>" +
        "<tr><td>16</td><td>Data protection, privacy, sovereignty</td><td>5 (protection methods: 3)</td><td>Week 3</td></tr>" +
        "</tbody></table>"
      ]
    },
    {
      title: 'Find your two weakest domains',
      body: [
        "Your two weakest domains are the two with the most misses. If two domains tie, choose the one with the larger exam weight: Domain 4 is 28%, Domain 2 is 22%, Domain 5 is 20%, Domain 3 is 18%, and Domain 1 is 12%.",
        "Then look across all your misses for <strong>topics you missed more than once</strong>, such as certificate revocation, cloud service models, or risk treatments. A repeated topic is a gap; a single miss may just be a careless read."
      ]
    },
    {
      title: 'Write the plan',
      body: [
        "For each of your two weakest domains, write a plan you can finish this week. Name the review talk (14.1 to 14.5), the weekly quizzes you will retake, the PBQ labs that practice it, and one lesson you will re-read. Be specific: 'Re-read the Week 2 lesson on certificates, retake the Week 2 quiz, redo PBQ Lab 9' beats 'study crypto'.",
        "Also review any question you <strong>guessed</strong> and got right. A lucky guess is still a weak spot."
      ]
    }
  ],
  checkpoints: [
    { id: 'score', q: "Your first-attempt score, as a percentage.", kind: 'number' },
    { id: 'missed', q: "How many questions did you miss or get only partly right?", kind: 'number' },
    { id: 'd1', q: "Misses in Domain 1 (General Security Concepts).", kind: 'number' },
    { id: 'd2', q: "Misses in Domain 2 (Threats, Vulnerabilities, and Mitigations).", kind: 'number' },
    { id: 'd3', q: "Misses in Domain 3 (Security Architecture).", kind: 'number' },
    { id: 'd4', q: "Misses in Domain 4 (Security Operations).", kind: 'number' },
    { id: 'd5', q: "Misses in Domain 5 (Security Program Management and Oversight).", kind: 'number' },
    { id: 'weak', q: "Your two weakest domains, and how you decided.", kind: 'text' },
    { id: 'repeat', q: "Topics you missed more than once (list up to five).", kind: 'text' },
    { id: 'plan1', q: "Plan for your weakest domain: talk, quizzes to retake, PBQ labs, and one lesson to re-read.", kind: 'text' },
    { id: 'plan2', q: "Plan for your second weakest domain, in the same format.", kind: 'text' }
  ],
  reflection: "Which result surprised you most, and why do you think you missed those questions: not knowing the topic, misreading the question, or running out of time?"
};
