// Week 10 practice sets (capstone week 1). Shapes: docs/COURSE_V2.md. Ids contain w10 so Practice.html can find this file.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['csf-sort-w10'] = {
  title: 'CSF Function Sorter',
  kind: 'sort',
  instructions: 'For each security practice, choose the NIST CSF 2.0 function it belongs to. These are the same kinds of practices the Northgate questionnaire asks about, so knowing the function by sight will speed up your fieldwork. Aim for 90% or higher.',
  dims: [
    { key: 'fn', label: 'Function', options: ['Govern', 'Identify', 'Protect', 'Detect', 'Respond', 'Recover'] }
  ],
  items: [
    { text: 'Leadership approves a written security policy and shares it with all staff.', answers: { fn: ['Govern'] }, why: 'Written, approved policy is the Policy category (GV.PO) of Govern.' },
    { text: 'The CEO decides and writes down how much cyber risk the company is willing to accept.', answers: { fn: ['Govern'] }, why: 'Risk appetite is a leadership decision in Risk Management Strategy (GV.RM).' },
    { text: 'A named person is given the authority, time, and budget to run the security program.', answers: { fn: ['Govern'] }, why: 'Roles, responsibilities, and authorities (GV.RR) sit in Govern.' },
    { text: 'Vendor contracts require MFA, breach notification, and the right to audit.', answers: { fn: ['Govern'] }, why: 'Managing supplier risk through contracts is Supply Chain Risk Management (GV.SC), part of Govern.' },
    { text: 'IT keeps a complete, current list of every server, computer, and network device.', answers: { fn: ['Identify'] }, why: 'You cannot protect what you have not listed. Asset Management (ID.AM) is Identify.' },
    { text: 'A vulnerability scan runs every month and someone reviews the results.', answers: { fn: ['Identify'] }, why: 'Finding weaknesses and understanding their risk is Risk Assessment (ID.RA).' },
    { text: 'A current network diagram shows where finance data is stored and how it moves.', answers: { fn: ['Identify'] }, why: 'Knowing your systems and data flows is Asset Management in Identify.' },
    { text: 'Actions from a post-incident review are tracked until each one is done.', answers: { fn: ['Identify'] }, why: 'Turning lessons into tracked changes is the Improvement category (ID.IM), which CSF 2.0 places in Identify.' },
    { text: 'Every user account must pass MFA to sign in.', answers: { fn: ['Protect'] }, why: 'Authentication and access control (PR.AA) are safeguards that prevent harm.' },
    { text: 'All company laptops use full-disk encryption.', answers: { fn: ['Protect'] }, why: 'Protecting stored data is Data Security (PR.DS) in Protect.' },
    { text: 'Security patches are installed on a fixed monthly schedule.', answers: { fn: ['Protect'] }, why: 'Keeping systems updated is Platform Security (PR.PS) in Protect.' },
    { text: 'All staff complete phishing awareness training every year.', answers: { fn: ['Protect'] }, why: 'Awareness and Training (PR.AT) is a Protect category.' },
    { text: 'Warehouse PCs can reach only the servers they need, and nothing else.', answers: { fn: ['Protect'] }, why: 'Dividing and filtering the network is Technology Infrastructure Resilience (PR.IR) in Protect.' },
    { text: 'Logs from the servers and the firewall are collected in one central place.', answers: { fn: ['Detect'] }, why: 'Collecting and watching logs is Continuous Monitoring (DE.CM).' },
    { text: 'An alert fires when someone creates a new admin account on a server.', answers: { fn: ['Detect'] }, why: 'Alerting on attack activity is Continuous Monitoring in Detect.' },
    { text: 'A responsible person reviews every security alert the same day.', answers: { fn: ['Detect'] }, why: 'Looking at and understanding alerts is Adverse Event Analysis (DE.AE).' },
    { text: 'An approved incident response plan names who leads and who makes decisions.', answers: { fn: ['Respond'] }, why: 'Incident Management (RS.MA) is in Respond.' },
    { text: 'During an incident, logs and disk images are preserved so the cause can be found.', answers: { fn: ['Respond'] }, why: 'Investigating what happened during an incident is Incident Analysis (RS.AN).' },
    { text: 'The company knows when it must notify customers, regulators, and its insurer after a breach.', answers: { fn: ['Respond'] }, why: 'Incident reporting and communication (RS.CO) is part of Respond.' },
    { text: 'IT restores a backup as a test every quarter and records the result.', answers: { fn: ['Recover'] }, why: 'Proving you can restore is Incident Recovery Plan Execution (RC.RP).' },
    { text: 'A continuity plan sets which systems come back first and how fast.', answers: { fn: ['Recover'] }, why: 'Recovery priorities and time targets belong to Recover.' },
    { text: 'Staff and customers get regular updates while systems are being restored.', answers: { fn: ['Recover'] }, why: 'Incident Recovery Communication (RC.CO) is in Recover. Telling people about the incident itself is Respond; updates during recovery are Recover.' }
  ]
};

COURSE_PRACTICE['questions-w10'] = {
  title: 'Interview Question Sorter',
  kind: 'sort',
  instructions: 'The Northgate interview simulator scores every question you ask. Sort each question into the type the simulator would see. Open, follow-up, proof, and closing questions earn evidence; too broad and leading questions waste the clock. Aim for 90% or higher.',
  dims: [
    { key: 'type', label: 'Question type', options: ['Open', 'Follow-up', 'Request for proof', 'Closing', 'Too broad', 'Leading or yes/no'] }
  ],
  items: [
    { text: '"How does a new employee get access to the file server?"', answers: { type: ['Open'] }, why: 'It asks how a process works and needs a full answer.' },
    { text: '"Tell me about what happened on the night of the April incident."', answers: { type: ['Open'] }, why: '"Tell me about" invites a full story.' },
    { text: '"What happens when a backup job fails?"', answers: { type: ['Open'] }, why: 'It asks for a process, not a yes or no.' },
    { text: 'After James says Finance uses MFA: "How many Finance staff are enrolled today?"', answers: { type: ['Follow-up'] }, why: 'It digs into the last answer with a number you can check.' },
    { text: 'After James explains restores: "Who else can restore a server when you are on vacation?"', answers: { type: ['Follow-up'] }, why: 'It follows the last answer to find a gap: one-person dependency.' },
    { text: 'After a backup answer: "When was the last time you tested a restore?"', answers: { type: ['Follow-up', 'Open'] }, why: 'Asking "when was the last time" pins a claim to a date. It works as a follow-up, and it is also open.' },
    { text: '"Could you send me the MFA enrollment report?"', answers: { type: ['Request for proof'] }, why: 'It asks for the record that proves the claim.' },
    { text: '"Can I see the current version of the incident response plan?"', answers: { type: ['Request for proof'] }, why: 'It asks to see the document, not just hear about it.' },
    { text: '"Can you show me the firewall rule that blocks SSH from the internet?"', answers: { type: ['Request for proof'] }, why: 'It asks for the configuration that proves the change was made.' },
    { text: '"Before we finish, is there anything that worries you that I have not asked about?"', answers: { type: ['Closing'] }, why: 'Closing questions often bring out the most useful surprise of the interview.' },
    { text: '"Is there anyone else we should speak to about this?"', answers: { type: ['Closing'] }, why: 'It closes the topic and points you to other sources.' },
    { text: '"How is security going overall?"', answers: { type: ['Too broad'] }, why: 'It gets a general answer you cannot score.' },
    { text: '"Can you give me a general picture of IT here?"', answers: { type: ['Too broad'] }, why: 'Too wide to produce anything specific or checkable.' },
    { text: '"You remove leavers\' accounts the same day, right?"', answers: { type: ['Leading or yes/no'] }, why: 'It suggests the answer, so people tend to agree.' },
    { text: '"I assume everyone has done the security training?"', answers: { type: ['Leading or yes/no'] }, why: '"I assume" invites a simple yes.' },
    { text: '"Do you have backups?"', answers: { type: ['Leading or yes/no'] }, why: 'A yes/no question. Ask how backups run and when one was last restored instead.' },
    { text: '"Is everything patched?"', answers: { type: ['Leading or yes/no', 'Too broad'] }, why: 'It is both yes/no and too broad. Ask how patches are scheduled and request the patch status report.' }
  ]
};

COURSE_PRACTICE['acro-w10'] = {
  title: 'Acronyms: Week 10',
  kind: 'flash',
  items: [
    { term: 'ZTA', definition: 'Zero Trust Architecture. A design where no user or device is trusted by default and every access request is checked.' },
    { term: 'NIST', definition: 'National Institute of Standards and Technology. The US agency that publishes the Cybersecurity Framework and many security guides.' },
    { term: 'CISA', definition: 'Cybersecurity and Infrastructure Security Agency. The US agency that publishes alerts, advisories, and guides such as the Zero Trust Maturity Model.' },
    { term: 'MFA', definition: 'Multifactor Authentication. Signing in with two or more kinds of proof, such as a password and a code from a phone app.' },
    { term: 'VPN', definition: 'Virtual Private Network. An encrypted tunnel that lets remote users reach the company network safely.' },
    { term: 'VLAN', definition: 'Virtual Local Area Network. A way to split one physical network into separate zones, such as Northgate\'s server, office, and warehouse networks.' },
    { term: 'NAT', definition: 'Network Address Translation. The firewall changes addresses as traffic passes; a port-forward is a NAT rule that sends outside traffic to an inside host.' },
    { term: 'ACL', definition: 'Access Control List. A list of rules that allows or denies traffic or access.' },
    { term: 'NGFW', definition: 'Next-Generation Firewall. A firewall that also understands applications and users, not just ports and addresses.' },
    { term: 'UTM', definition: 'Unified Threat Management. One device that combines firewall, intrusion prevention, antivirus, and web filtering.' },
    { term: 'WAF', definition: 'Web Application Firewall. A filter in front of a website that blocks attacks such as SQL injection.' },
    { term: 'IAM', definition: 'Identity and Access Management. The processes and tools for creating accounts, proving identity, and granting access.' },
    { term: 'PAM', definition: 'Privileged Access Management. Tools and rules that control and record the use of admin accounts.' },
    { term: 'SSO', definition: 'Single Sign-On. One sign-in that gives access to many applications.' },
    { term: 'RBAC', definition: 'Role-Based Access Control. Access granted by job role, so a payroll clerk gets payroll access and nothing more.' },
    { term: 'AUP', definition: 'Acceptable Use Policy. The rules for how staff may use company computers, email, and networks.' },
    { term: 'MSP', definition: 'Managed Service Provider. An outside company that runs part of another company\'s IT.' },
    { term: 'SOW', definition: 'Statement of Work. The document that defines what a contractor or assessor will deliver, by when.' },
    { term: 'NDA', definition: 'Non-Disclosure Agreement. A contract that requires someone to keep information confidential.' },
    { term: 'SLA', definition: 'Service-Level Agreement. A contract term that sets the level of service a provider must deliver, such as response time.' }
  ]
};
