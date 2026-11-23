// Week 11 practice sets. Shapes: docs/COURSE_V2.md. Ids contain 'w11' so Practice.html finds this file.
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['levels-w11'] = {
  title: 'Response Level Calibration',
  kind: 'sort',
  instructions: 'Every item comes from a <strong>practice client</strong>, not Northgate, so you can calibrate before you score the real questionnaire. Read the evidence and pick the response level it supports. Some items have two defensible answers, and either earns credit. Read each explanation: the reasoning is what you will use on Q1 to Q17 today.',
  dims: [
    { key: 'level', label: 'Level', options: ['Fully (100%)', 'Almost (75%)', 'Mostly (50%)', 'Somewhat (25%)', 'Not Compliant (0%)'] }
  ],
  items: [
    { text: 'Question: Is there an approved security policy shared with all staff? Evidence: a policy signed by the CEO this year, plus acknowledgement records for every current employee.', answers: { level: ['Fully (100%)'] }, why: 'Written, approved, current, and every person has acknowledged it. The record proves it, so Fully.' },
    { text: 'Question: Is MFA required for all accounts? Evidence: the IT lead says "everyone has MFA". No report was provided after two requests.', answers: { level: ['Not Compliant (0%)', 'Somewhat (25%)'] }, why: 'A claim with no record earns no credit. Somewhat is defensible only if something else shows MFA is partly in use; with nothing at all, Not Compliant.' },
    { text: 'Question: Is MFA required for all accounts? Evidence: the enrollment export shows 57 of 60 accounts enrolled; the 3 missing are new hires due to enroll this week.', answers: { level: ['Almost (75%)'] }, why: 'The control is in place and working, with a small, known gap that has a plan. That is Almost.' },
    { text: 'Question: Are backups restore-tested at planned intervals? Evidence: policy says quarterly. The backup report shows two successful restore tests in the last 12 months.', answers: { level: ['Mostly (50%)'] }, why: 'Testing is real and recent, but it happens half as often as the client\'s own policy requires. Mostly.' },
    { text: 'Question: Is there a current hardware inventory? Evidence: an inventory updated last month that lists every server and PC, but no switches, access points, or printers.', answers: { level: ['Mostly (50%)', 'Almost (75%)'] }, why: 'The inventory is real and recent but leaves out whole classes of devices. Most assessors would say Mostly; Almost is arguable if the missing devices are low risk.' },
    { text: 'Question: Is there an approved incident response plan with named roles and backups? Evidence: an approved plan, signed this year, with named roles, but no backup person for any role.', answers: { level: ['Mostly (50%)', 'Almost (75%)'] }, why: 'The plan is real and approved, but one absent person stops the whole response. Mostly is the usual call; Almost if the client has only a few roles to fill.' },
    { text: 'Question: Is the IR plan tested at least once a year? Evidence: notes from a tabletop exercise held eight months ago, with an action list and owners.', answers: { level: ['Fully (100%)'] }, why: 'A dated test record inside the last year, with follow-up actions, is exactly what the question asks for.' },
    { text: 'Question: Do all staff complete annual security awareness training? Evidence: the export shows every office employee completed it, but the 40 warehouse staff (about 40% of the company) were never assigned the course.', answers: { level: ['Mostly (50%)', 'Somewhat (25%)'] }, why: 'Training runs, but a large group is left out entirely. Mostly, or Somewhat if the warehouse staff handle sensitive systems.' },
    { text: 'Question: Are logs from key systems collected centrally and kept long enough to investigate? Evidence: every server and the firewall send logs to one place, but logs are deleted after 7 days.', answers: { level: ['Mostly (50%)'] }, why: 'Collection is complete, but a week is rarely long enough to investigate; many attacks are found weeks later. Mostly.' },
    { text: 'Question: Are policies reviewed at planned intervals? Evidence: the policy set says "review every 12 months"; meeting minutes show the last review 11 months ago, with changes made.', answers: { level: ['Fully (100%)'] }, why: 'The cycle is written down and followed, and the minutes prove it. Fully.' },
    { text: 'Question: Are vendor accounts reviewed? Evidence: a vendor access review is signed off each quarter; one review last year was two weeks late. No stale accounts were found.', answers: { level: ['Almost (75%)'] }, why: 'The practice works and is recorded, with one small slip. Almost.' },
    { text: 'Question: Is there a defined patch schedule? Evidence: workstations update automatically each month; servers are patched by hand "when there is time", with no schedule or record.', answers: { level: ['Mostly (50%)', 'Somewhat (25%)'] }, why: 'Half the estate has a real schedule; the most important half does not. Mostly, or Somewhat if the servers carry most of the risk.' },
    { text: 'Question: Is the network divided into zones, with only needed traffic allowed? Evidence: every device, server, and printer sits on one flat network with no internal firewall rules.', answers: { level: ['Not Compliant (0%)'] }, why: 'There are no zones at all, so the practice is missing. Not Compliant.' },
    { text: 'Question: Does leadership receive regular cybersecurity reports? Evidence: the CEO says "IT tells me if something is wrong". There are no reports or minutes, and nothing was provided.', answers: { level: ['Somewhat (25%)', 'Not Compliant (0%)'] }, why: 'Reporting is informal and reactive, with no record. Somewhat if you credit the informal contact; Not Compliant on the evidence alone.' }
  ]
};

COURSE_PRACTICE['acro-w11'] = {
  title: 'Acronyms: Week 11',
  kind: 'flash',
  items: [
    { term: 'CVE', definition: 'Common Vulnerabilities and Exposures. A public list that gives each known vulnerability an ID, such as CVE-2017-5638.' },
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System. A 0.0 to 10.0 severity score: 9.0 and up Critical, 7.0-8.9 High, 4.0-6.9 Medium, 0.1-3.9 Low.' },
    { term: 'SSH', definition: 'Secure Shell. Encrypted remote login to a server, usually on port 22/tcp. The April attacker used it through an old port-forward.' },
    { term: 'SMB', definition: 'Server Message Block. Windows-style file sharing, port 445/tcp. Workstations and file servers show it in scans.' },
    { term: 'SNMP', definition: 'Simple Network Management Protocol. Lets tools read device details, port 161/udp. A default community name lets anyone read them.' },
    { term: 'FTP', definition: 'File Transfer Protocol. Old file transfer on port 21/tcp that sends usernames and passwords without encryption.' },
    { term: 'FTPS', definition: 'File Transfer Protocol Secure. FTP wrapped in TLS so logins and files are encrypted.' },
    { term: 'RDP', definition: 'Remote Desktop Protocol. Remote control of a Windows desktop, port 3389/tcp. Exposed RDP is a common ransomware way in.' },
    { term: 'HTTP', definition: 'Hypertext Transfer Protocol. Unencrypted web traffic, usually port 80/tcp.' },
    { term: 'HTTPS', definition: 'Hypertext Transfer Protocol Secure. Web traffic encrypted with TLS, usually port 443/tcp.' },
    { term: 'TLS', definition: 'Transport Layer Security. The protocol that encrypts HTTPS and many others. TLS 1.0 and 1.1 are outdated; use 1.2 or 1.3.' },
    { term: 'SSL', definition: 'Secure Sockets Layer. The older protocol TLS replaced. People still say "SSL certificate" for a TLS certificate.' },
    { term: 'TCP', definition: 'Transmission Control Protocol. Connection-based transport. Nmap lists ports as number/tcp, for example 443/tcp.' },
    { term: 'UDP', definition: 'User Datagram Protocol. Connectionless transport used by DNS, SNMP, and VPNs such as IPsec on 500/udp.' },
    { term: 'DNS', definition: 'Domain Name System. Turns names like ng-web01.northgate-supply.example into IP addresses.' },
    { term: 'EDR', definition: 'Endpoint Detection and Response. Software on each computer that watches for and responds to malicious activity.' },
    { term: 'SIEM', definition: 'Security Information and Event Management. Collects logs in one place, correlates them, and raises alerts.' },
    { term: 'SOC', definition: 'Security Operations Center. The team that watches alerts and responds to incidents, often around the clock.' },
    { term: 'FDE', definition: 'Full-Disk Encryption. Encrypts a whole drive so a lost laptop does not expose its data.' },
    { term: 'IoC', definition: 'Indicator of Compromise. Evidence that an attack happened, such as a malicious IP address, file hash, or unknown account.' }
  ]
};
