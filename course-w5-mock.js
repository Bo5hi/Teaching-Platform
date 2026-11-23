// Week 5 mock project: the Pentest Lab (Pillar4_EthicalHacking.html), phases 3-5 and the capstone.
// There is no separate mock page. Students submit one engagement-log link per phase; the Pentest Lab saves to
// mccoe_pentest/{key} = { name, id, lastActivity, phase0..phase5 (bool), phase0_link..phase5_link, phasesCompleted }.
// Week 4 uses phase0 and phase1; Week 5 uses phase2 to phase5. This file gives the tracker what it needs to grade Week 5.
window.MOCK_W5 = {
  id: 'w5',
  title: 'Mock Pentest, part 2: Exploitation, Post-Exploitation, and Report',
  source: { path: 'mccoe_pentest', phases: [2, 3, 4, 5] },
  brief: [
    'Marcus wants you ready to scope and read Cedar Creek\'s first outside penetration test. You practice the whole engagement on authorized HackTheBox Starting Point machines and PortSwigger labs.',
    'Keep one document as your engagement log and report. Add a section for each phase and submit the same link on each Pentest Lab phase page.',
    'Gain access, do no damage: take a flag or screenshot as proof and stop. Do not crack hashes, copy data out, or install real persistence. Describe what an attacker could do instead.'
  ],
  phases: [
    { phase: 2, page: 'Pillar4_EthicalHacking.html?phase=2', name: 'Exploitation', targets: ['HTB Preignition', 'HTB Appointment', 'PortSwigger SQL injection lab 1 (WHERE clause, hidden data)', 'PortSwigger reflected XSS lab 1'],
      deliver: ['Flag and screenshot for each HTB machine', 'Vulnerability and access level gained, in plain words', 'Exact SQLi and XSS payloads and why they worked', 'Developer fix for each'] },
    { phase: 3, page: 'Pillar4_EthicalHacking.html?phase=3', name: 'Post-exploitation', targets: ['HTB Sequel', 'HTB Mongod'],
      deliver: ['Initial access level', 'Data and databases reachable', 'Credentials or hashes seen (documented, not cracked)', 'Other hosts or services visible', 'A described persistence and lateral movement path'] },
    { phase: 4, page: 'Pillar4_EthicalHacking.html?phase=4', name: 'Reporting', targets: ['All Week 4 and Week 5 targets'],
      deliver: ['Executive summary (one page, plain language)', 'Findings table with severity and CVSS', 'One detailed finding: description, evidence, CVSS, impact, remediation', 'Prioritized recommendations'] },
    { phase: 5, page: 'Pillar4_EthicalHacking.html?phase=5', name: 'Capstone', targets: ['The whole engagement (optional stretch: HTB Crocodile end to end)'],
      deliver: ['Phase-by-phase log', 'Overall risk rating with justification', 'Numbered remediation roadmap', 'Final report link submitted'] }
  ],
  key: {
    preignition: 'Hidden admin page found by directory brute forcing (gobuster); default credentials admin / admin. Finding: default credentials on an exposed admin page. Fix: change default passwords, remove or restrict admin pages.',
    appointment: 'SQL injection in the login form; a user name such as admin\'# bypasses the password check. Fix: parameterized queries, input validation.',
    portswigger_sqli: 'Payload such as \' OR 1=1-- in the category parameter returns hidden (unreleased) products. Fix: parameterized queries.',
    portswigger_xss: 'A script tag in the search parameter runs in the browser (for example <script>alert(1)</script>). Fix: output encoding; CSP as defense in depth.',
    sequel: 'MySQL on 3306 accepts the root account with no password from the network. Finding: unauthenticated database access. Fix: set a password, bind to localhost or restrict by firewall.',
    mongod: 'MongoDB on 27017 allows unauthenticated access; databases and collections can be listed and read. Fix: enable authentication, bind to localhost or restrict by firewall.',
    severity_guidance: 'Unauthenticated remote access to data or admin functions (Appointment SQLi, Sequel, Mongod, default admin credentials) should be rated High or Critical. Expect students to justify a rating, not match an exact CVSS number; misconfigurations have no CVE.'
  },
  rubricNotes: [
    'Full marks: both Preignition and Appointment have a flag and a screenshot with the target visible; each names the weakness (default credentials on a hidden admin page; SQL injection login bypass) and the access gained, in plain words a manager could follow.',
    'Full marks: exact payloads for the PortSwigger SQLi and reflected XSS labs (or Appointment), a correct explanation of why each changed the query or ran in the browser, and the right fix for each: parameterized queries for SQLi, output encoding for XSS.',
    'Full marks: for Sequel and Mongod, the access level, the databases or collections reachable, any credentials seen documented but not cracked, and a described (not performed) persistence method and lateral movement path, with how a defender would detect it.',
    'Full marks: a findings table covering the Week 4 and Week 5 targets, each with a severity and CVSS score or justified rating, ranked with the most dangerous first; one complete detailed finding with description, evidence, CVSS, business impact, and step-by-step remediation.',
    'Full marks: a one-page executive summary in plain language with scope, an overall risk rating, and the top three findings; a numbered remediation roadmap in priority order with specific actions; the capstone link is submitted by the end of Day 2.'
  ]
};
