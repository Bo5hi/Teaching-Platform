// Week 6 practice sets. Shapes: docs/COURSE_V2.md
window.COURSE_PRACTICE = window.COURSE_PRACTICE || {};

COURSE_PRACTICE['attacks-w6'] = {
  title: 'Attack Identifier',
  kind: 'sort',
  instructions: 'Read each scenario and name the attack. Social engineering and password attacks are mixed together, the way they appear on the exam. Look for the one detail that decides it: who was targeted, through which channel, and how the guessing was done. Aim for 90% or higher, and read every explanation.',
  dims: [
    { key: 'attack', label: 'Attack', options: ['Phishing', 'Spear phishing', 'Whaling', 'Business email compromise', 'Vishing', 'Smishing', 'Pretexting', 'Tailgating', 'Piggybacking', 'Baiting', 'Watering hole', 'Typosquatting', 'Shoulder surfing', 'Brute force', 'Dictionary attack', 'Password spraying', 'Credential stuffing', 'Rainbow table'] }
  ],
  items: [
    { text: 'Thousands of people receive the same "Your package could not be delivered, pay $2.99 to reschedule" email with a link to a fake shipping site.', answers: { attack: ['Phishing'] }, why: 'A generic message to many people that impersonates a known brand is phishing. Nothing in it is personalized.' },
    { text: 'Tom Becker receives an email that names his current customer project and his engineer Priya, asking him to review an attached "revised spec" from a customer he really works with.', answers: { attack: ['Spear phishing'] }, why: 'Personal details aimed at one person make it spear phishing. Tom is a manager, not a top executive, so whaling is not the best fit.' },
    { text: 'Cedar Creek\'s CEO gets a carefully written email, apparently from outside legal counsel, about a confidential acquisition that needs an urgent wire.', answers: { attack: ['Whaling', 'Business email compromise'] }, why: 'Spear phishing aimed at a top executive is whaling. Because it asks for a payment while impersonating a trusted party, BEC is also accepted.' },
    { text: 'Accounts Payable receives an email that appears to be from a long-time steel supplier, saying its bank changed and future invoices should be paid to a new account.', answers: { attack: ['Business email compromise'] }, why: 'Impersonating a vendor or executive by email to redirect payments is business email compromise. Always verify bank changes by phone with a known contact.' },
    { text: 'A caller says he is from the bank\'s fraud team and asks Greg to read back the one-time code that was just texted to his phone.', answers: { attack: ['Vishing'] }, why: 'Social engineering by phone call is vishing. Asking for a one-time code is a common way to get past MFA.' },
    { text: 'Employees get a text message: "Cedar Creek HR: your direct deposit is on hold. Confirm your details at cc-hr-pay.co".', answers: { attack: ['Smishing'] }, why: 'Phishing delivered by SMS text message is smishing.' },
    { text: 'A visitor tells Nina he is the new auditor from the bank, shows a business card, and asks to sit in an empty office and use a network jack "for the review".', answers: { attack: ['Pretexting'] }, why: 'A made-up but believable story used to justify a request is pretexting. Verify with the person who supposedly arranged the visit.' },
    { text: 'A man in a delivery uniform walks into the plant right behind an employee who badged in. The employee never noticed him.', answers: { attack: ['Tailgating'] }, why: 'Following someone through a secured door without their knowledge is tailgating.' },
    { text: 'A woman carrying a tray of coffees asks a Cedar Creek employee to hold the office door for her, and he does. She has no badge.', answers: { attack: ['Piggybacking', 'Tailgating'] }, why: 'When the employee knowingly lets the person in, it is piggybacking. Some sources call both tailgating, so either is accepted.' },
    { text: 'Three USB drives labeled "Payroll Q4 - Confidential" are found in the parking lot.', answers: { attack: ['Baiting'] }, why: 'Leaving a tempting item for the victim to pick up and plug in is baiting.' },
    { text: 'Attackers plant malicious code on the website of a regional manufacturing association that many Cedar Creek engineers visit.', answers: { attack: ['Watering hole'] }, why: 'Infecting a site the targets are known to visit and waiting for them is a watering hole attack.' },
    { text: 'Someone registers cedarcreek-lnd.com, one letter away from Cedar Creek\'s real domain.', answers: { attack: ['Typosquatting'] }, why: 'Registering a look-alike domain that differs by a typo or swapped character is typosquatting.' },
    { text: 'At a coffee shop, a man at the next table watches Laura Kim type her laptop password.', answers: { attack: ['Shoulder surfing'] }, why: 'Watching someone enter a password or PIN is shoulder surfing. Privacy filters and awareness help.' },
    { text: 'A tool tries every possible combination of six digits, from 000000 to 999999, against a stolen hash.', answers: { attack: ['Brute force'] }, why: 'Trying every possible combination in a space is brute force. Six digits is only one million guesses.' },
    { text: 'An attacker runs the rockyou.txt list of real leaked passwords against a stolen hash file.', answers: { attack: ['Dictionary attack'] }, why: 'Trying words from a list of likely passwords is a dictionary attack.' },
    { text: 'The VPN log shows one failed login for each of 250 accounts, all with the password "Winter2025!", spread over two hours.', answers: { attack: ['Password spraying'] }, why: 'One common password tried across many accounts, slowly, to stay under the lockout threshold is password spraying.' },
    { text: 'Email and password pairs leaked from a fitness app breach are tried, unchanged, against Cedar Creek\'s Microsoft 365 sign-in page.', answers: { attack: ['Credential stuffing'] }, why: 'Reusing leaked pairs from one breach on another service is credential stuffing. Unique passwords and MFA stop it.' },
    { text: 'An attacker looks up stolen unsalted hashes in a huge precomputed table of hashes and their matching passwords.', answers: { attack: ['Rainbow table'] }, why: 'Precomputed hash-to-password lookups are rainbow tables. Salting defeats them.' },
    { text: 'A Teams message from an outside account using the Cedar Creek logo and the name "IT Service Desk" asks staff to sign in to a "new security portal". It went to everyone.', answers: { attack: ['Phishing'] }, why: 'A generic lure sent to everyone that impersonates a trusted service is phishing, even when it arrives by chat instead of email.' },
    { text: 'Someone calls Jordan pretending to be Laura Kim, says she is locked out before a big presentation, and asks for a reset with the new password read over the phone.', answers: { attack: ['Vishing', 'Pretexting'] }, why: 'It is a phone call (vishing) built on a made-up urgent story (pretexting). Either is accepted. Jordan\'s callback rule defeats it.' },
    { text: 'An attacker emails Amanda from a look-alike address, pretending to be Greg, asking her to buy gift cards for a client event and send him the codes.', answers: { attack: ['Business email compromise'] }, why: 'Impersonating an executive by email to get money or its equivalent is business email compromise. Gift card requests are a well-known variant.' },
    { text: 'A program tries "Password", then "Password1", "Password!", "P@ssword", and "Password2026" against a stolen hash, applying the same changes to every word in a list.', answers: { attack: ['Dictionary attack', 'Brute force'] }, why: 'A wordlist with rules that mutate each word is a hybrid dictionary attack. It is still word-based, so dictionary attack is the best answer.' },
    { text: 'Every employee at Cedar Creek receives an email from "Microsoft 365" saying their mailbox is full, with a link to a fake sign-in page.', answers: { attack: ['Phishing'] }, why: 'Mass, untargeted, brand impersonation: phishing.' },
    { text: 'A caller claiming to be from the CAD software vendor asks Dee to install a "license patch" from a download link he will read out over the phone.', answers: { attack: ['Vishing', 'Pretexting'] }, why: 'A phone-based attack with a believable vendor story. Vishing and pretexting are both accepted. Verify by calling the vendor\'s known support number.' }
  ]
};

COURSE_PRACTICE['acro-w6a'] = {
  title: 'Acronyms: Week 6, set A (messages and email)',
  kind: 'flash',
  items: [
    { term: 'SMS', definition: 'Short Message Service. Ordinary text messaging on phones, and the channel used in smishing attacks.' },
    { term: 'SMTP', definition: 'Simple Mail Transfer Protocol. The protocol mail servers use to send and relay email to each other.' },
    { term: 'SPF', definition: 'Sender Policy Framework. A DNS record listing the servers allowed to send email for a domain.' },
    { term: 'DKIM', definition: 'DomainKeys Identified Mail. A digital signature on each message, checked with a public key in DNS, that shows which domain sent it and that it was not changed.' },
    { term: 'DMARC', definition: 'Domain-based Message Authentication, Reporting, and Conformance. Checks that SPF or DKIM align with the From domain, and publishes a policy of none, quarantine, or reject.' },
    { term: 'S/MIME', definition: 'Secure/Multipurpose Internet Mail Extensions. Uses certificates to digitally sign and encrypt individual email messages.' },
    { term: 'PGP', definition: 'Pretty Good Privacy. A system for signing and encrypting messages and files with public and private keys.' },
    { term: 'IMAP', definition: 'Internet Message Access Protocol. Lets an email client read mail that stays stored on the server.' },
    { term: 'POP', definition: 'Post Office Protocol. Lets an email client download mail from the server, usually removing it from the server.' },
    { term: 'DNS', definition: 'Domain Name System. The internet\'s directory that turns names into addresses, and where SPF, DKIM, and DMARC records are published.' },
    { term: 'URL', definition: 'Uniform Resource Locator. A web address. In phishing, the real URL behind a link often differs from the text shown.' },
    { term: 'URI', definition: 'Uniform Resource Identifier. The general name for a string that identifies a resource; a URL is one kind of URI.' },
    { term: 'HTML', definition: 'Hypertext Markup Language. The code used to build web pages and formatted email, where link text and link targets can differ.' },
    { term: 'VBA', definition: 'Visual Basic for Applications. The macro language in Microsoft Office, often abused in malicious document attachments.' },
    { term: 'IM', definition: 'Instant Messaging. Real-time chat tools such as Teams, which attackers also use to deliver lures.' },
    { term: 'VoIP', definition: 'Voice over Internet Protocol. Phone calls carried over a data network, which makes faking caller ID easy for vishing.' },
    { term: 'SIM', definition: 'Subscriber Identity Module. The chip that ties a phone to a number. In SIM swapping, an attacker talks a carrier into moving a victim\'s number to steal text-message codes.' },
    { term: 'SMTPS', definition: 'Simple Mail Transfer Protocol Secure. SMTP protected with TLS encryption, so mail between servers cannot be read in transit.' },
    { term: 'TLS', definition: 'Transport Layer Security. Encrypts connections such as HTTPS and mail transfer. A padlock proves encryption, not that the site is honest; phishing sites use TLS too.' },
    { term: 'CAPTCHA', definition: 'Completely Automated Public Turing Test to Tell Computers and Humans Apart. A challenge that slows automated attacks such as credential stuffing.' }
  ]
};

COURSE_PRACTICE['acro-w6b'] = {
  title: 'Acronyms: Week 6, set B (passwords and Zero Trust)',
  kind: 'flash',
  items: [
    { term: 'SAML', definition: 'Security Assertion Markup Language. A standard that lets an identity provider vouch for a user to other applications, used for single sign-on.' },
    { term: 'OTP', definition: 'One-Time Password. A code that works only once, often sent by text or generated by an app.' },
    { term: 'TOTP', definition: 'Time-Based One-Time Password. A code generated from a shared secret and the current time, usually changing every 30 seconds.' },
    { term: 'HOTP', definition: 'HMAC-Based One-Time Password. A one-time code generated from a shared secret and a counter that increases with each use.' },
    { term: 'PBKDF2', definition: 'Password-Based Key Derivation Function 2. A salted, deliberately slow hashing method used to store passwords and stretch keys.' },
    { term: 'MD5', definition: 'Message Digest 5. An old, fast hash function that is broken for security use and far too fast for storing passwords.' },
    { term: 'SHA', definition: 'Secure Hash Algorithm. A family of hash functions such as SHA-256. Fast on their own, so password storage adds salt and many rounds.' },
    { term: 'NTLM', definition: 'New Technology LAN Manager. An older Windows authentication protocol that uses the unsalted NT hash of the password.' },
    { term: 'GPU', definition: 'Graphics Processing Unit. A processor built for parallel math that can try billions of fast password hashes per second.' },
    { term: 'PAM', definition: 'Privileged Access Management. Tools and processes that vault, rotate, approve, and record the use of administrator and service account credentials.' },
    { term: 'SSO', definition: 'Single Sign-On. Signing in once to reach many applications. Convenient, but it makes that one sign-in very valuable to protect.' },
    { term: 'ZTA', definition: 'Zero Trust Architecture. A design that removes implicit trust based on network location and checks every access request.' },
    { term: 'RBAC', definition: 'Role-Based Access Control. Permissions are given to roles, and people get roles, which makes least privilege manageable.' },
    { term: 'OAuth', definition: 'Open Authorization. Lets a user grant an application limited access to an account without sharing the password. Fake consent prompts are a phishing trick.' },
    { term: 'IdP', definition: 'Identity Provider. The service that verifies a user\'s identity and vouches for it to other applications, such as Microsoft Entra ID.' },
    { term: 'LDAP', definition: 'Lightweight Directory Access Protocol. The protocol used to query and update directories such as Active Directory.' },
    { term: 'KDC', definition: 'Key Distribution Center. The Kerberos service on a domain controller that authenticates users and issues tickets.' },
    { term: 'PAP', definition: 'Password Authentication Protocol. An old protocol that sends passwords in clear text, so it should not be used.' },
    { term: 'PSK', definition: 'Pre-Shared Key. One shared password used by everyone, such as on WPA2-Personal Wi-Fi, which makes it impossible to tell users apart.' },
    { term: 'TGT', definition: 'Ticket Granting Ticket. The Kerberos ticket a user gets at sign-in, signed with the krbtgt account\'s key, used to request access to other services.' }
  ]
};
