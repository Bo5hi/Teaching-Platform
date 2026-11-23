// Week 13 practice sets (capstone). Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['deliverables-w13'] = {
  title: 'Where does it go? The deliverable pack',
  kind: 'sort',
  instructions: 'Each item is a piece of content from your Northgate assessment. Choose the document where it mainly belongs. Some items fit in two places, and either accepted answer earns credit. Read each explanation: knowing which reader needs what is the point of this drill.',
  dims: [
    { key: 'doc', label: 'Belongs in', options: ['Executive Summary', 'CSA report', 'Briefing deck', 'Questionnaire workbook', 'Risk register', 'POA&M'] }
  ],
  items: [
    { text: 'All 41 response levels, each with evidence IDs and a one- or two-sentence reason.', answers: { doc: ['Questionnaire workbook'] }, why: 'The workbook is the full record. Every other document summarizes it.' },
    { text: 'A one-line headline a CEO can repeat, plus five next steps for leaders to approve.', answers: { doc: ['Executive Summary'] }, why: 'The Executive Summary is the leaders\' page: headline first, then risks and decisions.' },
    { text: 'Two or three sentences per CSF function on what is strong and what is missing, with evidence IDs.', answers: { doc: ['CSA report'] }, why: 'Section 4 of the CSA, Results by Function, gives managers and IT staff the detail they need to act.' },
    { text: 'Each risk\'s likelihood, impact, rating, CSF category, and owner.', answers: { doc: ['Risk register'] }, why: 'The risk register says what could go wrong and how bad it would be.' },
    { text: 'For each gap: the recommended action, owner, milestone, and effort.', answers: { doc: ['POA&M'] }, why: 'The POA&M is the action plan: what will be done, by whom, and by when.' },
    { text: 'A picture of the heat map shown on screen while you explain the top risks.', answers: { doc: ['Briefing deck', 'CSA report'] }, why: 'It goes on deck slide 8 for the outbrief, and the CSA risk assessment section also includes the heat map.' },
    { text: 'How the team handled contradictions between what people said and what the evidence showed.', answers: { doc: ['CSA report'] }, why: 'This is part of the Method section (section 3) of the CSA report.' },
    { text: 'The three things leadership should approve today.', answers: { doc: ['Briefing deck', 'Executive Summary'] }, why: 'Deck slide 10 asks for these decisions. The Executive Summary\'s next steps carry the same message in writing.' },
    { text: 'Weighted compliance, CMM level, and hygiene rating calculated for each function.', answers: { doc: ['Questionnaire workbook'] }, why: 'The Dashboard sheet of the workbook calculates them. Other documents copy the numbers from there.' },
    { text: 'A count of how many risks fall in each likelihood and impact cell.', answers: { doc: ['Risk register'] }, why: 'The Heat Map sheet in the risk register and POA&M workbook counts the register\'s risks for you.' },
    { text: 'A plain explanation of NIST CSF 2.0 and the 1-to-5 CMM scale.', answers: { doc: ['CSA report'] }, why: 'Section 2 of the CSA, Assessment Overview, explains the framework and the maturity scale.' },
    { text: 'One or two sentences on what you assessed and what you could not check.', answers: { doc: ['Executive Summary', 'CSA report'] }, why: 'The Executive Summary ends with a Note on Scope. The CSA method section also states the scope.' },
    { text: 'What you plan to say for each slide, kept out of sight of the audience.', answers: { doc: ['Briefing deck'] }, why: 'Speaker notes live under each slide in the deck. They keep paragraphs off the screen.' },
    { text: 'Actions grouped into 0-30, 31-90, and 91-180 days.', answers: { doc: ['CSA report', 'Briefing deck'] }, why: 'The remediation roadmap is section 6 of the CSA and slide 9 of the deck.' },
    { text: 'The questionnaire number (Q#) and CSF category each fix comes from.', answers: { doc: ['POA&M'] }, why: 'Each POA&M row names its CSF category and Q#, so the fix can be traced back to the score.' },
    { text: 'Your completed questionnaire results attached at the end of the report.', answers: { doc: ['CSA report'] }, why: 'Appendix A of the CSA report holds the questionnaire results.' }
  ]
};

COURSE_PRACTICE['acro-w13'] = {
  title: 'Acronyms: capstone review',
  kind: 'flash',
  items: [
    { term: 'NIST', definition: 'National Institute of Standards and Technology. The US agency that publishes the Cybersecurity Framework (CSF 2.0) you used to assess Northgate.' },
    { term: 'CISA', definition: 'Cybersecurity and Infrastructure Security Agency. The US agency that publishes free guidance such as the Cross-Sector Cybersecurity Performance Goals and the Zero Trust Maturity Model.' },
    { term: 'ZTA', definition: 'Zero Trust Architecture. A design where no user or device is trusted by default and every access request is verified.' },
    { term: 'MFA', definition: 'Multifactor Authentication. A sign-in that needs two or more kinds of proof, such as a password plus a code from a phone app.' },
    { term: 'VPN', definition: 'Virtual Private Network. An encrypted connection that lets remote users reach internal systems as if they were on site.' },
    { term: 'VLAN', definition: 'Virtual Local Area Network. A separate network segment on the same switches, such as Northgate\'s server, office, and warehouse networks.' },
    { term: 'SSH', definition: 'Secure Shell. An encrypted remote login protocol on TCP port 22. In April, it was reachable from the internet through an old port-forward.' },
    { term: 'SMB', definition: 'Server Message Block. The Windows file-sharing protocol on TCP port 445, used to reach shared folders on a file server.' },
    { term: 'SNMP', definition: 'Simple Network Management Protocol. Used to monitor and manage devices such as printers and switches, on UDP port 161.' },
    { term: 'FTP', definition: 'File Transfer Protocol. An old file transfer service on TCP port 21 that sends usernames and passwords without encryption.' },
    { term: 'TLS', definition: 'Transport Layer Security. The protocol that encrypts web traffic (HTTPS). Versions 1.0 and 1.1 are outdated; 1.2 and 1.3 are current.' },
    { term: 'CVE', definition: 'Common Vulnerabilities and Exposures. A public ID for a known vulnerability, such as CVE-2017-5638 in the Equifax breach.' },
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System. A 0 to 10 severity score: 9.0 to 10.0 is Critical, 7.0 to 8.9 High, 4.0 to 6.9 Medium, 0.1 to 3.9 Low.' },
    { term: 'EDR', definition: 'Endpoint Detection and Response. Software on computers and servers that watches for suspicious activity and helps respond to it.' },
    { term: 'SIEM', definition: 'Security Information and Event Management. A system that collects logs in one place, correlates them, and raises alerts.' },
    { term: 'IRP', definition: 'Incident Response Plan. The approved document that says who does what, and who to call, during a security incident.' },
    { term: 'BCP', definition: 'Business Continuity Plan. How the business keeps its most important work going during a disruption.' },
    { term: 'RTO', definition: 'Recovery Time Objective. The longest a system can be down before the business is seriously harmed.' },
    { term: 'RPO', definition: 'Recovery Point Objective. The most data, measured in time, the business can afford to lose. It sets how often backups must run.' },
    { term: 'SLA', definition: 'Service-Level Agreement. A contract term that sets the service a vendor must deliver, such as response times.' }
  ]
};
