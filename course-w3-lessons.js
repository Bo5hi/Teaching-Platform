// Week 3 lessons + quiz. Shapes: docs/COURSE_V2.md
window.COURSE_LESSONS = window.COURSE_LESSONS || {};
window.COURSE_QUIZ = window.COURSE_QUIZ || {};

COURSE_LESSONS['3.1'] = {
  id: '3.1', week: 3, title: 'Authentication: proving who you are', mins: 20, module: 'CertMaster Module 4',
  intro: "On your first day you saw a sticky note on the Finance laptop's monitor: 'VPN: Spring2024!'. Anyone who read it could connect to Cedar Creek's network from home, as Finance, with nothing else to prove. This week is about identity and access: who someone is, what they may do, and how the company protects its data. It starts with authentication, the step that decides whether a sign-in is really the person it claims to be.",
  sections: [
    {
      title: 'Identification, authentication, and credentials',
      body: [
        "Every sign-in has two parts. First you make a claim: 'I am d.ortiz.' That is <strong>identification</strong>. Then you prove the claim. That is <strong>authentication</strong>. The things you use to prove it are your <strong>credentials</strong>: a password, a code from your phone, a badge, a fingerprint.",
        "An <strong>identity</strong> is the person (or device, or service) behind the claim. An <strong>account</strong> is the record a system keeps for that identity: a username, group memberships, and settings. One person can have several accounts. Dee Ortiz has a Windows account, a Microsoft 365 account, and a badge. Each one must be authenticated, and each one must be removed when she leaves.",
        "Authentication is only as strong as the proof it asks for. A username is not secret; it is usually printed in the person's email address. So the strength of a sign-in depends almost entirely on the credential."
      ],
      keyTerms: [
        { term: 'Identification', definition: 'Claiming an identity, usually by entering a username.' },
        { term: 'Authentication', definition: 'Proving the claimed identity with one or more credentials.' },
        { term: 'Credential', definition: 'The proof offered during authentication, such as a password, a one-time code, a smart card, or a fingerprint.' }
      ]
    },
    {
      title: 'The authentication factors',
      figure: { id: 'auth-factors', caption: 'Four factor types. MFA means combining two or more different types, not two of the same.' },
      body: [
        "Credentials fall into <strong>factor</strong> types. Security+ uses four.",
        "<strong>Something you know</strong>: a password, a passphrase, a PIN (personal identification number), or the answer to a security question. It is cheap and easy, but it can be guessed, phished, or written on a sticky note.",
        "<strong>Something you have</strong>: a phone running an authenticator app, a hardware security key, a smart card, or a badge. An attacker has to steal or trick their way into the object, not just learn a secret.",
        "<strong>Something you are</strong>: a biometric, such as a fingerprint, face, iris, or voice. It cannot be forgotten, but it also cannot be changed if it is copied, so it is normally used to unlock something else (a phone or a security key) rather than sent across a network.",
        "<strong>Somewhere you are</strong>: location, such as being on the office network or in a particular country. It is weak alone, but it is useful as an extra check. A sign-in to Cedar Creek's Microsoft 365 from another continent at 3 AM deserves a closer look.",
        "<strong>Multifactor authentication (MFA)</strong> combines two or more <em>different</em> factor types. The server room door uses a badge (have) and a PIN (know), so it is MFA. A password plus a security question is still a single factor, because both are something you know."
      ],
      callout: { kind: 'exam', title: 'Count the factor types, not the steps', text: "A question may describe a long sign-in process and ask whether it is MFA. Count the different factor types. Password then PIN: one type (know). Smart card then PIN: two types (have, know). Fingerprint to unlock a phone that then approves a push: two types (are, have). Two passwords in a row are never MFA." }
    },
    {
      title: 'Passwords and password policy',
      body: [
        "Passwords will be around for years, so companies set rules for them in a <strong>password policy</strong>. The common settings are:",
        "<strong>Length</strong>: the minimum number of characters. Length matters more than anything else. Each extra character multiplies the number of guesses an attacker needs.",
        "<strong>Complexity</strong>: requiring a mix of uppercase, lowercase, numbers, and symbols. It helps less than people think, because humans meet the rule in predictable ways: a capital at the start and '1!' at the end.",
        "<strong>Age</strong>: how long a password lasts before it must change. <strong>History</strong> (or reuse): how many old passwords cannot be used again.",
        "Current guidance from the National Institute of Standards and Technology (NIST), in its digital identity guidelines (SP 800-63B), changed the old thinking. It favors long passwords and passphrases, checks new passwords against lists of passwords already leaked in breaches, and says not to force regular password changes unless there is evidence a password was compromised. Forced changes tend to produce 'Spring2024!' followed by 'Summer2024!'. Many companies and auditors still require periodic changes, so know both views.",
        "A <strong>password manager</strong> stores a different long, random password for every site in an encrypted vault, protected by one strong master password and MFA. It solves the real problem behind most password failures: people reuse the same few passwords everywhere. When one website is breached, attackers try those email and password pairs on other sites. That is called <strong>credential stuffing</strong>, and unique passwords defeat it.",
        "Systems should never store passwords themselves. They store a <strong>salted hash</strong>: the password plus random data (the salt) run through a slow one-way function. You saw this in /etc/shadow in Lab 3.1. Accounts should also have a <strong>lockout</strong> or delay after several wrong guesses, which slows online guessing."
      ],
      table: {
        head: ['Setting', "Cedar Creek's 2019 memo", 'A stronger choice today'],
        rows: [
          ['Minimum length', '8 characters', '14 or more, passphrases encouraged'],
          ['Complexity', 'One capital and one number', 'Block known breached and common passwords instead'],
          ['Age', 'Change every 90 days', 'Change when there is a sign of compromise'],
          ['Shared logins', "Plant 'operator' login allowed", 'Named accounts, or a documented exception with compensating controls'],
          ['Storage', 'Sticky notes forbidden (but used)', 'A company password manager for staff, a vault for admins']
        ]
      },
      callout: { kind: 'cedar', title: "'Spring2024!' meets every rule", text: "The VPN password on the Finance sticky note is 11 characters, has a capital letter, a number, and a symbol, so it passes the 2019 memo. It is also a season plus a year plus an exclamation mark, one of the first patterns any password-guessing tool tries. A policy that checks rules but not real-world guessability gives a false sense of safety. You will test this yourself in the Academy Password Checker." }
    },
    {
      title: 'MFA methods, from weakest to strongest',
      figure: { id: 'mfa-ladder', caption: 'Not all second factors are equal. Phishing-resistant methods sit at the top.' },
      body: [
        "Any MFA is far better than a password alone. But the methods differ a lot in how well they hold up.",
        "<strong>SMS codes</strong> send a one-time password (OTP) by text message. They are easy to roll out, but a criminal can talk a phone carrier into moving your number to their SIM card (SIM swapping), and an attacker's fake login page can simply ask you to type the code in.",
        "<strong>Authenticator app codes</strong> use the TOTP standard (time-based one-time password): the app and the server share a secret and both calculate a new six-digit code every 30 seconds. HOTP is the older counter-based version. Codes never travel by text message, but a fake login page can still ask for one and use it within the 30 seconds.",
        "<strong>Push notifications</strong> ask you to tap Approve on your phone. They are convenient, which is also their weakness: people approve prompts they did not start. Adding <strong>number matching</strong> (type the number shown on the login screen into the app) makes blind approval much harder.",
        "<strong>Hardware tokens and security keys</strong> are physical devices. A smart card such as the US government's CAC (Common Access Card) or PIV (Personal Identity Verification) card holds a certificate and needs a PIN. A FIDO2 security key plugs into USB or taps by NFC. These are the strongest common options."
      ],
      callout: { kind: 'real', title: 'MFA fatigue at Uber (2022)', text: "In September 2022, Uber reported that an attacker who had a contractor's password sent repeated MFA push requests to the contractor's phone until one was accepted. That gave the attacker access to internal systems. MFA was in place; it was beaten by wearing down a person. This is why number matching, limits on repeated prompts, and phishing-resistant keys matter." }
    },
    {
      title: 'Passwordless authentication',
      body: [
        "<strong>Passwordless</strong> sign-in removes the password entirely. The best-known form uses the FIDO2 standards (WebAuthn in the browser). When you register, your device creates a key pair. The private key stays on the device; the website stores only the public key. To sign in, the website sends a random challenge, your device signs it after you unlock it with a fingerprint, face, or PIN, and the website checks the signature with the public key.",
        "A <strong>passkey</strong> is this same idea, stored on a phone or computer and often synced to the user's other devices. Because the key pair is tied to the real website's address, a fake login page cannot use it. That makes FIDO2 and passkeys <strong>phishing-resistant</strong>. There is also no shared secret on the server for an attacker to steal.",
        "Passwordless is still multifactor in practice: the device is something you have, and the fingerprint or PIN that unlocks it is something you are or know."
      ],
      keyTerms: [
        { term: 'One-time password (OTP)', definition: 'A code that works once or for a short time. TOTP codes change every 30 seconds; HOTP codes change each time one is used.' },
        { term: 'FIDO2 / passkey', definition: 'A passwordless method where a device proves possession of a private key by signing a challenge from the real website. Phishing-resistant.' },
        { term: 'Credential stuffing', definition: 'Trying username and password pairs leaked from one site on other sites, which works when people reuse passwords.' }
      ]
    },
    {
      title: 'Remote access is where MFA matters most',
      body: [
        "A virtual private network (VPN) lets a person on the internet act as if they were plugged into the office network. That makes the VPN sign-in one of the most valuable doors a company has. If it accepts a password alone, any leaked, guessed, or reused password opens it, from anywhere in the world.",
        "Cedar Creek turned on MFA for its VPN in 2021 with a new profile, CC-REMOTE. But the old password-only profile, CC-LEGACY, was left running 'for a few weeks' and never removed. In the Mock Access Review you will find out who still uses it."
      ],
      callout: { kind: 'real', title: 'Colonial Pipeline (2021)', text: "In May 2021, DarkSide ransomware hit Colonial Pipeline's business (IT) network, and the company shut down its fuel pipeline for several days to keep the attack from spreading. In written testimony to the US Senate in June 2021, Colonial's CEO, Joseph Blount, said the company believed the attacker exploited a legacy VPN profile that was not intended to be in use, and that it was still working out how the attackers got the credentials. Public reporting from the hearing said that account was not protected by MFA. CISA's advisory on DarkSide lists requiring MFA for remote access as its first mitigation. Keep the wording careful: the sources say 'believed', and the investigation was ongoing when he testified." }
    }
  ],
  check: [
    { q: "A Cedar Creek engineer signs in with a password and then answers 'What was your first car?'. How many authentication factor types is that?", opts: ["Three", "One", "Two", "None, because a username was not entered"], ans: 1, why: "A password and a security question are both something you know. Two answers of the same type are still a single factor." },
    { q: "Which MFA method is phishing-resistant because the credential only works for the real website's address?", opts: ["SMS one-time code", "Authenticator app TOTP code", "FIDO2 security key or passkey", "Push notification without number matching"], ans: 2, why: "FIDO2 keys and passkeys sign a challenge tied to the site's origin, so a fake site cannot use them. Codes and simple pushes can be relayed or approved by mistake." },
    { q: "An attacker uses email and password pairs leaked from a shopping site to try signing in to Cedar Creek's Microsoft 365. What is this, and what defeats it?", opts: ["Credential stuffing; unique passwords from a password manager plus MFA", "Brute force; a longer lockout timer", "Phishing; a warning banner on email", "SIM swapping; switching to SMS codes"], ans: 0, why: "Reusing leaked pairs on another site is credential stuffing. Unique passwords mean the leaked one does not work elsewhere, and MFA stops a correct password from being enough." },
    { q: "According to current NIST guidance, when should users be forced to change a password?", opts: ["Every 30 days", "Every 90 days", "Never, under any circumstances", "When there is evidence the password may be compromised"], ans: 3, why: "NIST SP 800-63B recommends against routine forced changes and calls for a change when compromise is suspected. Many organizations still use periodic changes, so know both." },
    { q: "Why does the Colonial Pipeline case matter for Cedar Creek's CC-LEGACY VPN profile?", opts: ["Colonial's attackers broke the VPN's encryption", "Colonial's CEO testified the attacker is believed to have used a legacy VPN profile, reported to lack MFA; CC-LEGACY is a password-only profile left running", "Colonial was attacked through a lookalike email domain", "Colonial's VPN required a hardware key that was stolen"], ans: 1, why: "The public sources describe a forgotten legacy VPN profile that a password could open. CC-LEGACY is the same kind of forgotten, password-only door." }
  ]
};

COURSE_LESSONS['3.2'] = {
  id: '3.2', week: 3, title: 'Authorization: access control models and least privilege', mins: 15, module: 'CertMaster Module 4',
  intro: "Authentication answers 'who are you?'. Authorization answers the next question: 'what may you do?'. At Cedar Creek, 23 badges can open the server room, seven accounts are Domain Admins, and the Customer Specs share can be read by everyone. None of that is an authentication problem. Every one of those people proved who they were. The problem is how much they were allowed to do afterward.",
  sections: [
    {
      title: 'Permissions, rights, and access control lists',
      body: [
        "<strong>Authorization</strong> is the decision, made after authentication, about what an account may reach and do. The thing being protected (a file, a folder, a printer, a database) is called an <strong>object</strong>. The account or process asking for it is the <strong>subject</strong>.",
        "<strong>Permissions</strong> are attached to objects: read this folder, change that file. <strong>Rights</strong> (or privileges) are attached to subjects: sign in to a server, change the system time, reset other users' passwords.",
        "Many systems store permissions in an <strong>access control list (ACL)</strong>: a list on each object naming who may do what. The share permissions export you will review this week is a set of ACLs, for example 'ENG-Share-RW: Modify' on \\\\ENG-FS01\\Drawings.",
        "Good access control starts from <strong>implicit deny</strong>: if nothing explicitly allows an action, it is refused. A firewall rule list ends with an implicit deny, and so does a well-built file share."
      ],
      keyTerms: [
        { term: 'Authorization', definition: 'Deciding what an authenticated subject may access and what actions it may take.' },
        { term: 'Access control list (ACL)', definition: 'A list attached to an object that names which subjects are allowed or denied which actions.' },
        { term: 'Implicit deny', definition: 'Anything not explicitly allowed is refused.' }
      ]
    },
    {
      title: 'The five access control models',
      figure: { id: 'access-models', caption: 'Five ways to decide who gets access, and who makes the decision in each.' },
      body: [
        "An <strong>access control model</strong> is the overall method a system uses to make authorization decisions. Security+ expects you to recognize five.",
        "<strong>Discretionary access control (DAC)</strong>: the owner of an object decides who may use it. Linux file permissions and Windows file sharing work this way. If Tom Becker owns a folder, he can grant Priya access to it. DAC is flexible, but it depends on every owner choosing well, and access tends to spread.",
        "<strong>Mandatory access control (MAC)</strong>: the system decides, based on labels. Every object gets a classification label (such as Secret) and every subject gets a clearance. Owners cannot override it. Government and military systems use MAC; on Linux, SELinux can enforce it. MAC is strict and hard to manage, which is why businesses rarely use it everywhere.",
        "<strong>Role-based access control (RBAC)</strong>: permissions are given to roles, and people are placed in roles. An 'Engineering' role gets the drawings share; Priya joins the role on her first day and leaves it on her last. Cedar Creek's groups (ENG-Share-RW, HR-Share-RW) are RBAC. It scales well, as long as someone keeps the role memberships accurate.",
        "<strong>Rule-based access control</strong>: global rules set by an administrator apply to everyone, whatever their role. 'No VPN sign-ins between midnight and 5 AM' or a firewall rule list are rule-based.",
        "<strong>Attribute-based access control (ABAC)</strong>: the decision weighs several attributes of the subject, the object, and the situation at once. 'Allow if the user's department is Engineering, the file's label is Confidential, the device is company-managed, and the sign-in comes from the United States.' It is the most fine-grained model and the basis of many zero trust designs."
      ],
      table: {
        head: ['Model', 'Who decides', 'Cedar Creek example'],
        rows: [
          ['DAC', 'The owner of the object', 'Tom grants an engineer access to a folder he owns'],
          ['MAC', 'The system, from labels and clearances', 'Not used at Cedar Creek; typical of classified government systems'],
          ['RBAC', 'Administrators, through roles or groups', 'Members of ENG-Share-RW can modify \\\\ENG-FS01\\Drawings'],
          ['Rule-based', 'Administrators, through global rules', 'A rule blocking VPN sign-ins outside business hours'],
          ['ABAC', 'A policy weighing many attributes', 'Allow Confidential files only on managed laptops, from inside the US']
        ]
      },
      callout: { kind: 'exam', title: 'Spot the model from one word', text: "'Owner' or 'at the owner's discretion' points to DAC. 'Labels', 'clearance', or 'classification levels' points to MAC. 'Job function' or 'role' points to RBAC. 'Time of day' or a rule applied to everyone points to rule-based. Several conditions combined (department, device, location) points to ABAC. Remember that MAC also stands for media access control address in networking questions; read the context." }
    },
    {
      title: 'Linux permissions: DAC you can see',
      figure: { id: 'linux-perms', caption: 'Reading a Linux mode: three sets of read, write, and execute, and their octal numbers.' },
      body: [
        "In Lab 3.2 you built a share with Linux permissions. Each file has an owner, a group, and a mode such as <code>rwxr-x---</code>: three sets of read (r), write (w), and execute (x) for the owner, the group, and everyone else. Each permission has a number (read 4, write 2, execute 1), so <code>rwxr-x---</code> is 750.",
        "<code>chmod</code> changes the mode, <code>chown</code> changes the owner and group, and <code>sudo</code> lets an allowed user run one command as root, the all-powerful administrator account. A mode of 777 means anyone can read, change, or run the file, which is almost never what you want. 600 means only the owner can read and write: the right setting for a private key.",
        "Because the owner decides, this is DAC. Adding a group to the folder and managing who is in the group adds an RBAC layer on top."
      ]
    },
    {
      title: 'Least privilege, need to know, and separation of duties',
      body: [
        "<strong>Least privilege</strong> means every account gets only the access its job requires, and only for as long as it needs it. If an account is stolen, least privilege limits what the attacker can do with it. That limit is often called the <strong>blast radius</strong>.",
        "<strong>Need to know</strong> applies the same idea to information: even someone with the right clearance or role sees only the data their task requires. The HR manager needs personnel files; the payroll coordinator needs payroll; the AR clerk needs neither.",
        "<strong>Separation of duties</strong> splits a sensitive task so no single person can complete it alone. The person who adds a new vendor's bank account should not also be the person who approves payments to it. Greg Palmer's August memo, requiring a phone call to confirm any change of bank details, adds a similar check.",
        "Over time, access tends to grow. People change jobs and keep their old permissions. A one-time request becomes permanent. This is <strong>privilege creep</strong>, and it is why access must be reviewed on a schedule, not only granted."
      ],
      callout: { kind: 'cedar', title: '23 badges, 7 domain admins', text: "Jordan's memo said 23 badges can open the server room, mostly because someone needed in 'just once' and was never taken off the list. The Active Directory export shows the same pattern: the Domain Admins group includes the help desk technician, the Engineering Manager, a backup service account, and a shared account called ccadmin. Each was probably added for a good reason on a busy day. Least privilege means asking, for each one, 'does this job need this today?'" }
    },
    {
      title: 'Privileged access management',
      body: [
        "Administrator accounts, root, service accounts, and network device logins are <strong>privileged accounts</strong>: they can change the system itself. Attackers who get into a network go looking for them first. <strong>Privileged access management (PAM)</strong> is the set of practices and tools that keep them under control:",
        "<strong>Separate admin accounts</strong>. Marcus should read email as m.reyes and administer servers as a different account, used only from IT-ADMIN-01. A phishing link opened from his everyday account then cannot run with domain admin rights.",
        "<strong>A password vault</strong>. Privileged passwords are stored in a vault, checked out when needed, and changed (rotated) automatically after use. Nobody needs to know them, and nothing is written in a notebook.",
        "<strong>Just-in-time (JIT) access</strong>. Instead of being an admin all the time, a person requests elevated rights for a set task and window, and the rights expire on their own. The same approach suits vendors: enable the CAD vendor's account for a scheduled support session, then disable it.",
        "<strong>Monitoring and recording</strong>. Privileged sessions are logged, and sometimes recorded, so every change can be traced to a named person.",
        "<strong>Service accounts</strong> run software, not people. They should have only the rights the software needs, should be denied interactive and VPN sign-in, and should use long passwords that are rotated, ideally by the system itself. One built-in administrator account can be kept for emergencies as a <strong>break-glass</strong> account: long random password, kept in the vault, every use reviewed."
      ],
      callout: { kind: 'real', title: 'Target (2013): a vendor account was the way in', text: "Investigative reporting by Brian Krebs in 2014 found that the attackers behind the Target breach first got in with network credentials stolen from Fazio Mechanical, a heating and refrigeration contractor that had access to Target's systems for billing and project work. From there they reached the payment systems. Third-party accounts are privileged doors: they need least privilege, MFA, and access only when it is needed." }
    }
  ],
  check: [
    { q: "Cedar Creek places every engineer in the ENG-Share-RW group, and that group has Modify access to the drawings share. Which access control model is this?", opts: ["Mandatory access control", "Role-based access control", "Discretionary access control", "Rule-based access control"], ans: 1, why: "Access comes from membership in a group that matches a job function: a role. That is RBAC." },
    { q: "A system grants access only if the user is in Finance, the device is company-managed, and the sign-in is from inside the United States. Which model?", opts: ["ABAC", "MAC", "DAC", "RBAC"], ans: 0, why: "Several attributes of the user, device, and location are evaluated together. That is attribute-based access control." },
    { q: "What is the octal form of rw-r----- ?", opts: ["644", "750", "640", "600"], ans: 2, why: "rw- is 4 + 2 = 6, r-- is 4, and --- is 0, so 640." },
    { q: "Dana Reyes moved from HR to Accounting 20 months ago but can still open the HR personnel share. What is this called?", opts: ["Separation of duties", "Implicit deny", "Privilege creep", "Federation"], ans: 2, why: "Keeping access from an old role after changing jobs is privilege creep. Access reviews and a mover process prevent it." },
    { q: "Which PAM practice gives a vendor elevated access only for a scheduled support window and removes it automatically afterward?", opts: ["Just-in-time access", "Password history", "Discretionary access control", "Single sign-on"], ans: 0, why: "Just-in-time access grants privileges for a limited task and time, then removes them." }
  ]
};

COURSE_LESSONS['3.3'] = {
  id: '3.3', week: 3, title: 'Identity lifecycle, directories, and single sign-on', mins: 15, module: 'CertMaster Module 4',
  intro: "On October 30, Rosa Medina emailed the help desk a list of October leavers and asked for their access to be removed. She had emailed after each departure too, and never got a reply. Brian Kessler's badge kept working. This lesson covers the life of an identity from first day to last day, the directory that holds it, and the single sign-on systems that let one identity open many applications. When the lifecycle breaks, every one of those doors stays open.",
  sections: [
    {
      title: 'Identity and access management and the directory',
      body: [
        "<strong>Identity and access management (IAM)</strong> is the whole system of people, processes, and tools that creates identities, gives them access, checks that access, and removes it. Its core is a <strong>directory</strong>: one database of accounts, groups, and computers that other systems trust.",
        "At Cedar Creek the directory is Microsoft <strong>Active Directory (AD)</strong>, running on DC01. Windows computers ask AD to check passwords and group memberships. Applications can query it with <strong>LDAP</strong> (Lightweight Directory Access Protocol), the standard language for reading and searching a directory; LDAPS is the same protocol protected by TLS encryption. Inside the network, AD uses <strong>Kerberos</strong> to sign people in: after one sign-in, a Key Distribution Center (KDC) on the domain controller issues tickets that prove who you are to file servers and printers without sending your password again.",
        "Network devices and VPNs often check sign-ins through an <strong>AAA server</strong> using RADIUS (Remote Authentication Dial-In User Service) or TACACS+ (Terminal Access Controller Access-Control System Plus). TACACS+ is common for administrator logins to routers and switches because it can authorize and log each command separately."
      ],
      keyTerms: [
        { term: 'Directory service', definition: 'A central database of accounts, groups, and devices, such as Active Directory, that other systems use to authenticate and authorize.' },
        { term: 'LDAP', definition: 'Lightweight Directory Access Protocol, used to query and update a directory. LDAPS adds TLS encryption.' },
        { term: 'Kerberos', definition: 'A ticket-based authentication protocol used by Active Directory, so users sign in once and reach many network services.' }
      ]
    },
    {
      title: 'Kinds of accounts',
      body: [
        "Not every account is a person. An access review sorts them first.",
        "<strong>User accounts</strong> belong to one named person. <strong>Administrator (privileged) accounts</strong> can change systems and should be separate from the person's everyday account. <strong>Service accounts</strong> run software, such as svc-backup for the backup software. <strong>Shared or generic accounts</strong> are used by several people, such as ccadmin or the plant's 'operator' login; they break accountability because the logs cannot say which person acted. <strong>Guest accounts</strong> give anonymous access and should be disabled. <strong>Third-party or vendor accounts</strong> belong to outside companies, such as vendor.cad for the CAD software's support staff. <strong>Device accounts</strong> represent computers and appliances.",
        "Shared accounts sometimes have a real reason to exist, as on the plant floor where a shift change cannot interrupt Line 2. Then they need a documented exception and compensating controls: allow sign-in on one machine only, no email or file share access, and a password that is changed and not printed on the monitor."
      ]
    },
    {
      title: 'The lifecycle: joiners, movers, and leavers',
      figure: { id: 'identity-lifecycle', caption: 'Joiner, mover, leaver: each event should start an access change, and reviews catch what was missed.' },
      body: [
        "<strong>Provisioning</strong> is creating an account and granting its access. <strong>Deprovisioning</strong> is removing it. Between them, the account changes every time the person's job does. IAM teams call the three events <strong>joiner</strong>, <strong>mover</strong>, and <strong>leaver</strong>.",
        "<strong>Joiner</strong>: HR confirms the hire, and IT creates the account with the role's standard access, nothing extra. Temporary staff and interns get an <strong>expiration date</strong> on the account from day one.",
        "<strong>Mover</strong>: when someone changes jobs, they gain the new role's access and lose the old one. Skipping the 'lose' step is how privilege creep happens.",
        "<strong>Leaver</strong>: on the last day, before or as the person walks out, the account is disabled, its groups removed, its VPN and email access cut, and its badge turned off. Disable first, delete later: the account and its files may be needed for an investigation or for handing work over.",
        "The trigger matters as much as the steps. The process works when HR's system automatically notifies IT of every hire, move, and departure, and IT confirms each change. It fails when it depends on an email someone might not read.",
        "Finally, an <strong>access review</strong> (also called recertification or attestation) checks the result on a schedule. Managers and data owners confirm, list by list, that each person still needs each access. Reviews catch what the lifecycle missed. This week's Mock Access Review is Cedar Creek's first one.",
        "A useful review compares two independent sources. The directory says who has an account; HR says who works here and in which job. Every enabled account must match a current employee in a matching role, or be a documented service, device, or vendor account with a named owner. Anything else is a finding. Reviews also look at the most powerful groups first, such as Domain Admins and remote access, because a mistake there costs the most."
      ],
      callout: { kind: 'cedar', title: 'The leaver process that was never written', text: "Cedar Creek's badge procedure, last revised in 2021, explains how to add a badge and how to replace a lost one. It has no step for removing access when someone leaves. Rosa's emails went to a shared help desk mailbox with no follow-up. The fix is a written leaver checklist that HR starts and IT signs off, covering Active Directory, VPN, Microsoft 365, the badge, and any vendor or SaaS accounts." }
    },
    {
      title: 'Account policies and restrictions',
      body: [
        "Beyond passwords, directories can limit how and where an account is used. <strong>Account expiration</strong> disables an account on a set date. <strong>Lockout</strong> blocks an account after repeated failed sign-ins. <strong>Time-of-day restrictions</strong> allow sign-in only during set hours. <strong>Location-based restrictions</strong> (sometimes called geofencing) allow or block sign-ins by network, country, or GPS position. <strong>Logon workstation restrictions</strong> let an account sign in only on named computers, which is exactly the compensating control the plant's 'operator' account needs.",
        "<strong>Impossible travel</strong> detection flags an account that signs in from two places too far apart for the time between them, a sign the password is being used by someone else."
      ]
    },
    {
      title: 'Single sign-on and federation',
      figure: { id: 'sso-flow', caption: 'SAML single sign-on: the application trusts a signed assertion from the identity provider instead of checking a password itself.' },
      body: [
        "<strong>Single sign-on (SSO)</strong> lets a person authenticate once and then use many applications without signing in again. It means fewer passwords to reuse or write down, and one place to enforce MFA and to cut off a leaver. The risk is the flip side: one stolen SSO session opens everything, so the SSO sign-in must be the strongest one the company has.",
        "SSO uses two roles. The <strong>identity provider (IdP)</strong> authenticates the user and vouches for them. At Cedar Creek that is the Microsoft 365 sign-in. The <strong>service provider (SP)</strong> is the application that trusts the IdP, such as the cloud payroll service.",
        "<strong>Federation</strong> extends that trust across organizations. A customer's engineers could sign in to a Cedar Creek supplier portal with their own company accounts, because Cedar Creek trusts their company's IdP. Neither side has to manage the other's passwords.",
        "Three standards carry this trust. <strong>SAML</strong> (Security Assertion Markup Language) passes a digitally signed XML assertion from the IdP to the SP through the user's browser. It is common for business web applications. <strong>OAuth</strong> (Open Authorization) is about authorization, not authentication: it lets one application get a limited access token to act for you somewhere else, such as letting a scheduling app read your calendar without ever seeing your password. <strong>OpenID Connect (OIDC)</strong> adds an authentication layer on top of OAuth, with an ID token that says who the user is. 'Sign in with Microsoft' or 'Sign in with Google' buttons usually use OIDC."
      ],
      keyTerms: [
        { term: 'Identity provider (IdP)', definition: 'The system that authenticates users and issues signed assertions or tokens that applications trust.' },
        { term: 'Service provider (SP)', definition: 'The application that relies on the identity provider instead of checking passwords itself.' },
        { term: 'Federation', definition: 'Trust between the identity systems of separate organizations, so users of one can sign in to the other with their own accounts.' }
      ],
      callout: { kind: 'exam', title: 'SAML, OAuth, or OIDC?', text: "If the question is about a signed XML assertion for enterprise web SSO, the answer is SAML. If an app needs permission to access your data in another service without your password (a token with limited scopes), the answer is OAuth. If an app needs to know who you are using a modern, OAuth-based sign-in, the answer is OpenID Connect. OAuth alone is authorization, not authentication." }
    },
    {
      title: 'Why the identity provider is a crown jewel',
      body: [
        "Every SP that trusts an IdP accepts whatever the IdP signs. If attackers can make the IdP issue tokens, or can steal the key that signs them, they can become anyone in every connected application, often without triggering MFA at all, because the application never sees a sign-in."
      ],
      callout: { kind: 'real', title: 'SolarWinds (2020): forged SAML tokens', text: "CISA's advisory AA20-352A on the SolarWinds Orion compromise described how, in some victim networks, the attackers obtained the keys used to sign SAML tokens and then forged tokens to reach cloud resources as legitimate users. You will study SolarWinds in Week 5. For now, the lesson is that SSO and federation concentrate trust, so the identity provider and its signing keys need the strongest protection in the company." }
    }
  ],
  check: [
    { q: "An employee moves from HR to Accounting. Which step is most often missed, causing privilege creep?", opts: ["Creating the new account", "Removing the access from the old role", "Resetting the password", "Enrolling in MFA"], ans: 1, why: "Movers get their new access but rarely lose the old. Removing old access is the step that prevents privilege creep." },
    { q: "Brian Kessler leaves on Friday. What should IT do to his account first?", opts: ["Delete it immediately", "Leave it enabled until his manager asks", "Disable it and remove its group memberships and remote access", "Change its password and give it to his manager"], ans: 2, why: "Disable first and strip access, then delete later after any needed review. Deleting at once can destroy evidence and files; leaving it enabled is the problem this week is about." },
    { q: "A scheduling app asks for permission to read your Microsoft 365 calendar and receives a limited token, never your password. Which standard is this?", opts: ["SAML", "Kerberos", "LDAP", "OAuth"], ans: 3, why: "OAuth delegates limited access to another application through a token. It is about authorization, not proving identity." },
    { q: "In single sign-on, what is the identity provider?", opts: ["The system that authenticates the user and vouches for them to applications", "The application the user wants to use", "The firewall in front of the application", "The user's web browser"], ans: 0, why: "The IdP authenticates the user and issues the signed assertion or token. The service provider is the application that trusts it." },
    { q: "The plant's shared 'operator' account must stay for now. Which restriction best limits the damage if its password leaks?", opts: ["A time-of-day restriction for business hours only", "Allow sign-in only on PLANT-PC-07, with no email, file share, or VPN access", "A longer password history", "Moving it into Domain Admins so IT can watch it"], ans: 1, why: "A logon workstation restriction and removing other access mean the account is useless anywhere except the one HMI it exists for. Time-of-day would stop the second shift." }
  ]
};

COURSE_LESSONS['3.4'] = {
  id: '3.4', week: 3, title: 'Data types, classification, and data states', mins: 15, module: 'CertMaster Module 16',
  intro: "Attackers rarely want a server for its own sake. They want what is on it: customer drawings, payroll records, bank account numbers, or the ability to stop Line 2. Before Cedar Creek can protect its data, it has to know what kinds of data it holds, how sensitive each kind is, and where the data is at any moment. This lesson gives you the vocabulary. Tomorrow's share review puts it to work.",
  sections: [
    {
      title: 'Types of data',
      body: [
        "Security+ groups data by what it is and what rules apply to it.",
        "<strong>Regulated data</strong> is covered by a law or industry standard that says how it must be protected. <strong>Personally identifiable information (PII)</strong> is anything that identifies a person, alone or combined: name, home address, Social Security number, date of birth, bank account number. <strong>Protected health information (PHI)</strong> is health information tied to a person, such as health plan enrollment or medical leave paperwork. <strong>Financial data</strong> includes bank accounts, payroll, and payment card data; card data is governed by the Payment Card Industry Data Security Standard (PCI DSS).",
        "<strong>Trade secrets</strong> are business information that has value because competitors do not know it, such as Cedar Creek's machining methods or pricing. <strong>Intellectual property (IP)</strong> is the wider family of creative and technical work, including designs and drawings. Cedar Creek also holds its customers' IP: their drawings and specifications, which it promised to protect.",
        "<strong>Legal information</strong> includes contracts, NDAs, and records connected to lawsuits. <strong>Human-readable</strong> data can be read by a person (a PDF report). <strong>Non-human-readable</strong> data needs software to interpret it, such as a CAD file, a database, or a barcode. Non-human-readable data can still be sensitive; data loss tools must be able to recognize it."
      ],
      table: {
        head: ['Data type', 'Cedar Creek example', 'Where it lives'],
        rows: [
          ['Customer IP', 'Customer drawings and specifications', '\\\\ENG-FS01\\Drawings and \\\\ENG-FS01\\CustomerSpecs'],
          ['PII', 'Personnel files, home addresses, I-9 forms', '\\\\FS-HR01\\Personnel'],
          ['PII + financial', 'Payroll exports with SSNs and bank accounts', '\\\\FS-HR01\\Payroll and the cloud payroll service'],
          ['Health information', 'Health plan enrollment and leave forms', '\\\\FS-HR01\\Benefits'],
          ['Trade secrets', 'Pricing and process know-how', 'Engineering and Finance files'],
          ['Public', 'Released brochures and the line card', 'Marketing SharePoint site']
        ]
      },
      keyTerms: [
        { term: 'PII', definition: 'Personally identifiable information: data that identifies a specific person, alone or combined with other data.' },
        { term: 'PHI', definition: 'Protected health information: health data linked to an identifiable person.' },
        { term: 'Regulated data', definition: 'Data whose handling is required by law or an industry standard, such as PII, PHI, or payment card data.' }
      ]
    },
    {
      title: 'Data classification',
      figure: { id: 'data-classes', caption: "Cedar Creek's draft classification levels, from least to most sensitive, with examples and handling rules." },
      body: [
        "<strong>Data classification</strong> sorts data into levels by how much harm its exposure would cause, then sets handling rules for each level. Without it, every employee guesses. With it, a label tells everyone how to treat a file: who may see it, whether it may be emailed, whether it must be encrypted.",
        "Businesses usually use three to five levels. Common names are <strong>public</strong>, <strong>internal</strong> (or private), <strong>confidential</strong> (or sensitive), and <strong>restricted</strong> (or critical). Government systems use their own scale, such as Unclassified, Confidential, Secret, and Top Secret. Cedar Creek's draft policy uses four levels:",
        "<strong>Public</strong>: approved for anyone. <strong>Internal</strong>: for employees; little harm if it leaked. <strong>Confidential</strong>: would harm the company, its customers, or its employees if it leaked, such as customer drawings, personnel files, and payroll. <strong>Restricted</strong>: could hand an attacker control of company systems or cause severe harm, such as passwords, firewall configurations, and admin tools.",
        "Classification is decided by the <strong>data owner</strong> (you will meet that role in the next lesson), not by IT, and not by the name of a folder. A share named 'Company' can still be internal-only. A share named 'Public' could contain confidential files that someone saved in the wrong place.",
        "Labels only help if they show up where people work: a header on documents, a sensitivity label in Microsoft 365, a stamp on drawings. Engineering already stamps drawings 'CONFIDENTIAL - Cedar Creek Proprietary'. The rest of the company has no labels at all."
      ],
      callout: { kind: 'cedar', title: 'The share that says "Everyone"', text: "The share export shows \\\\ENG-FS01\\CustomerSpecs, which holds customer specifications, readable by the group Everyone. Under the draft policy those specs are Confidential, so any employee, contractor, or compromised account on the network can read data the company promised to protect. Classification turns that from a matter of opinion into a clear finding." }
    },
    {
      title: 'Data states: at rest, in transit, in use',
      figure: { id: 'data-states', caption: 'The same payroll data in three states, and the main protection for each.' },
      body: [
        "Data is always in one of three <strong>states</strong>, and each needs different protection.",
        "<strong>Data at rest</strong> is stored: on a disk, a backup tape, a USB drive, or in cloud storage. Protect it with permissions and encryption, such as full-disk encryption on laptops and encrypted backups. Cedar Creek's backup tapes sitting on an open shelf are data at rest with no protection beyond the room door.",
        "<strong>Data in transit</strong> (or in motion) is moving across a network: a payroll file uploaded to the payroll service, an email, a VPN session. Protect it with encryption in transit, such as TLS for websites and an encrypted VPN tunnel for remote access.",
        "<strong>Data in use</strong> is being processed: open in an application, held in memory, shown on a screen. It is the hardest state to protect, because the data must be readable to be used. Controls include access restrictions, screen privacy filters, memory protections, and newer techniques that process encrypted data inside protected hardware areas."
      ],
      keyTerms: [
        { term: 'Data at rest', definition: 'Stored data, on disks, tapes, USB drives, or cloud storage.' },
        { term: 'Data in transit', definition: 'Data moving across a network, such as an upload, an email, or a VPN session.' },
        { term: 'Data in use', definition: 'Data being processed by an application, held in memory, or shown on a screen.' }
      ]
    },
    {
      title: 'Ways to protect data',
      body: [
        "Encryption is not the only tool. Security+ lists several methods, each suited to a different problem.",
        "<strong>Encryption</strong> makes data unreadable without the key (Week 2). <strong>Hashing</strong> creates a one-way fingerprint, useful for checking integrity and storing passwords. <strong>Masking</strong> hides part of a value when it is displayed: a payroll screen shows ***-**-6789 instead of the full SSN. <strong>Tokenization</strong> swaps a sensitive value for a random stand-in token and keeps the real value in a secure vault; payment systems use it so the store never holds real card numbers. <strong>Obfuscation</strong> is any method of making data hard to understand, including masking and tokenization.",
        "<strong>Segmentation</strong> keeps sensitive data on separate systems or networks with tighter controls. <strong>Permission restrictions</strong> limit who can open it, which is what the share review is about. <strong>Geographic restrictions</strong> limit where data may be stored or accessed from, which leads to data sovereignty in the next lesson."
      ],
      table: {
        head: ['Method', 'What it does', 'Cedar Creek use'],
        rows: [
          ['Masking', 'Shows only part of a value', 'Show the last four digits of SSNs on payroll screens'],
          ['Tokenization', 'Replaces a value with a meaningless token', 'Let the payroll service hold bank numbers; Cedar Creek keeps tokens'],
          ['Encryption', 'Unreadable without the key', 'Encrypt backup tapes and the Finance laptop'],
          ['Permission restrictions', 'Only named groups can open it', 'Remove Everyone from CustomerSpecs'],
          ['Segmentation', 'Separate systems and networks', 'Keep HR data on FS-HR01, away from shared folders']
        ]
      }
    },
    {
      title: 'Data loss prevention',
      body: [
        "<strong>Data loss prevention (DLP)</strong> tools watch for sensitive data leaving where it belongs and then alert, block, or encrypt. They recognize data by patterns (nine digits in the shape of an SSN, card numbers that pass a check-digit test), by keywords, by labels, or by fingerprints of known files.",
        "<strong>Endpoint DLP</strong> runs on computers and can block copying a Confidential drawing to a personal USB drive, the exact habit you saw in Engineering in Week 1. <strong>Network DLP</strong> inspects traffic leaving the company, such as email attachments. <strong>Cloud DLP</strong> watches cloud storage and sharing links, such as a OneDrive folder shared with 'anyone with the link'.",
        "DLP depends on classification. A tool cannot protect Confidential data if nobody has decided what Confidential means.",
        "DLP also needs tuning. A rule that blocks every nine-digit number will stop part numbers and purchase orders too, and people quickly learn to work around a tool that gets in their way. Most companies start DLP in monitor-only mode, study the alerts for a few weeks, then turn on blocking for the clearest cases, such as SSNs leaving by email or labeled drawings going to USB drives."
      ],
      callout: { kind: 'real', title: 'Target (2013): payment card data', text: "Target announced in December 2013 that about 40 million credit and debit card accounts were affected after attackers placed malware on its point-of-sale systems. Card data is regulated financial data under PCI DSS. Methods covered in this lesson, such as encrypting card data from the moment it is read and tokenizing it afterward, exist so that stolen data from a store's systems is useless to the thief. You will analyze the full Target case in Weeks 1 and 2." }
    }
  ],
  check: [
    { q: "A Benefits folder holds health plan enrollment forms with employees' names. What type of data is this?", opts: ["Public information", "Trade secret", "Health information (PHI) and PII", "Non-human-readable data only"], ans: 2, why: "Health information tied to a named person is PHI, and the names and details are PII as well." },
    { q: "A payroll file is being uploaded to the cloud payroll service over HTTPS. What state is the data in, and what protects it?", opts: ["At rest; full-disk encryption", "In transit; TLS encryption", "In use; a privacy filter", "At rest; tokenization"], ans: 1, why: "Moving across a network is data in transit. HTTPS uses TLS to encrypt it on the way." },
    { q: "The payroll screen shows SSNs as ***-**-6789. Which data protection method is this?", opts: ["Masking", "Hashing", "Tokenization", "Segmentation"], ans: 0, why: "Hiding part of a value when it is displayed is masking. The full value still exists behind it." },
    { q: "Under Cedar Creek's draft policy, how should a share holding FW-CORE configuration backups and service account passwords be classified?", opts: ["Public", "Internal", "Confidential", "Restricted"], ans: 3, why: "Passwords and security configurations could give an attacker control of company systems, which is the Restricted level." },
    { q: "Which tool could stop an engineer from copying a Confidential drawing onto a personal USB drive?", opts: ["Network DLP", "Endpoint DLP", "A SAML identity provider", "A password manager"], ans: 1, why: "Endpoint DLP runs on the computer and can block or alert on copying labeled or recognized data to removable media." }
  ]
};

COURSE_LESSONS['3.5'] = {
  id: '3.5', week: 3, title: 'Data roles, privacy, retention, and destruction', mins: 15, module: 'CertMaster Module 16',
  intro: "Who decides who may open the payroll share? Not Dee, even though she runs FS-HR01. Not you, even though you found the problem. The answer is the person accountable for the data. This lesson covers the roles people play around data, the privacy rights of the people the data describes, where data is allowed to live, how long it should be kept, and how to get rid of it safely when the time comes.",
  sections: [
    {
      title: 'Data roles',
      figure: { id: 'data-roles', caption: "Who does what with Cedar Creek's payroll data." },
      body: [
        "Clear roles stop data from becoming everybody's job and therefore nobody's.",
        "The <strong>data owner</strong> is a senior person accountable for a set of data. The owner decides its classification, who may access it, and how long it is kept. At Cedar Creek, Rosa Medina owns HR and payroll data, and Tom Becker owns engineering data. Owners approve access requests and confirm access during reviews.",
        "The <strong>data custodian</strong> handles the data day to day under the owner's rules: running the server, applying permissions, taking backups. Dee Ortiz is the custodian of FS-HR01. A <strong>data steward</strong> looks after the data's quality and correct labeling, often inside the business department.",
        "Privacy law adds two more roles. The <strong>data controller</strong> is the organization that decides why and how personal data is processed. Cedar Creek is the controller for its employees' data. The <strong>data processor</strong> processes personal data on the controller's behalf and follows its instructions. The cloud payroll provider is a processor. The controller stays responsible for choosing a trustworthy processor and putting the rules in a contract.",
        "The person the data describes is the <strong>data subject</strong>. Larger organizations, and some required by law, appoint a <strong>data protection officer (DPO)</strong> to oversee privacy compliance."
      ],
      table: {
        head: ['Role', 'Responsibility', 'Cedar Creek payroll example'],
        rows: [
          ['Owner', 'Accountable; sets classification and approves access', 'Rosa Medina, HR Manager'],
          ['Custodian', 'Operates and protects it day to day', 'Dee Ortiz, Systems Administrator'],
          ['Controller', 'Decides why and how personal data is processed', 'Cedar Creek Industries'],
          ['Processor', 'Processes data on the controller\'s instructions', 'The cloud payroll service'],
          ['Subject', 'The person the data is about', 'Each employee']
        ]
      },
      callout: { kind: 'exam', title: 'Owner versus custodian', text: "If the question asks who decides access, classification, or retention, the answer is the data owner. If it asks who implements backups, permissions, or encryption, the answer is the custodian. Controller versus processor follows the same split for personal data: the controller decides, the processor carries out." }
    },
    {
      title: 'Privacy and the rights of data subjects',
      body: [
        "Privacy is about how personal data is collected, used, shared, and kept, and what say the person has in it. Security protects the data; privacy decides what is fair to do with it.",
        "The best-known privacy law is the European Union's <strong>General Data Protection Regulation (GDPR)</strong>. It applies to organizations that process the personal data of people in the EU, wherever the organization is based. It gives data subjects rights, including access to their data and erasure in many cases (often called the <strong>right to be forgotten</strong>). It requires a lawful basis, such as consent or a contract, for processing. It requires notifying the regulator of many personal data breaches within 72 hours of becoming aware of them.",
        "The United States has no single national privacy law. Instead there are sector laws, such as HIPAA for health information held by health plans and providers and GLBA for financial institutions, plus a growing set of state privacy and breach notification laws. A Missouri manufacturer like Cedar Creek mainly deals with state breach notification rules for employee data, contract terms from customers, and the privacy terms of its processors.",
        "Two privacy habits apply everywhere. <strong>Data minimization</strong>: collect and keep only what you need. <strong>Purpose limitation</strong>: use data only for the reason it was collected. The visitor sign-in sheet that shows every earlier visitor's name to the next visitor fails both."
      ],
      keyTerms: [
        { term: 'Data controller', definition: 'The organization that decides why and how personal data is processed.' },
        { term: 'Data processor', definition: 'An organization that processes personal data on behalf of the controller, following its instructions.' },
        { term: 'Right to be forgotten', definition: 'A data subject\'s right, under laws such as GDPR, to have their personal data erased in many circumstances.' }
      ]
    },
    {
      title: 'Data sovereignty and geolocation',
      body: [
        "<strong>Data sovereignty</strong> means data is subject to the laws of the country where it is stored or processed. If Cedar Creek's payroll provider kept data in another country, that country's laws and courts could reach it. Some laws also limit moving personal data out of a region; GDPR, for example, restricts transfers of EU personal data to countries without similar protections.",
        "Cloud providers let customers choose the <strong>region</strong> where data is stored, and many customer contracts say where their data may go. Before Cedar Creek moves engineering files to a new cloud service, Tom Becker as data owner should confirm the storage region meets every customer's contract."
      ]
    },
    {
      title: 'Data inventory and retention',
      figure: { id: 'data-lifecycle', caption: 'The data lifecycle. Retention decides how long data stays before it is destroyed.' },
      body: [
        "A <strong>data inventory</strong> lists what data the company holds, where it is, who owns it, and how it is classified. It is the data version of the asset inventory you built in Week 1, and the share review this week is the start of it.",
        "A <strong>retention policy</strong> sets how long each kind of data is kept. Some periods are set by law or contract, such as tax and payroll records; others are business choices. The data owner, with HR and legal advice, sets the schedule. Keeping data longer than needed is not free: every old record is something that can be stolen, must be searched in a lawsuit, and costs money to store and protect.",
        "A <strong>legal hold</strong> suspends normal deletion when data may be needed for a lawsuit or investigation. If Cedar Creek's lawyers asked IT to preserve Brian Kessler's account and VPN logs, those records could not be deleted on schedule until the hold was lifted. This is one more reason to disable leavers' accounts rather than delete them at once."
      ],
      callout: { kind: 'cedar', title: 'Seventeen months of Gary Voss', text: "Gary Voss left Finance in June 2025, and his account is still enabled, with a password that never expires and read access to payroll. Nothing in his account is needed by anyone. If the retention schedule says what to keep from a leaver's account and for how long, IT can archive that, disable the rest on the last day, and delete on a known date instead of never." }
    },
    {
      title: 'Destruction and sanitization',
      body: [
        "When data reaches the end of its retention period, or its storage leaves the company, it must be destroyed so it cannot be recovered. Week 1 introduced the idea; here are the methods Security+ expects you to know.",
        "<strong>Sanitization</strong> removes data so the media can be reused. <strong>Overwriting</strong> (wiping) writes new data over every part of a drive. <strong>Cryptographic erase</strong> destroys the encryption key of a drive that was encrypted from the start, which makes the data unreadable almost instantly; it is the practical choice for SSDs and cloud storage. <strong>Degaussing</strong> uses a strong magnetic field to erase magnetic media such as hard disks and LTO tapes, which also ruins the media.",
        "<strong>Physical destruction</strong> ends the media's life: shredding, drilling, pulverizing, or incinerating. It is the right choice for failed drives that cannot be wiped and for the most sensitive media.",
        "When a vendor destroys media, Cedar Creek should get a <strong>certificate of destruction</strong> listing what was destroyed, how, and when. Paper needs the same care: the locked shred bins on the office floor are part of the destruction process."
      ],
      keyTerms: [
        { term: 'Sanitization', definition: 'Removing data from media so it cannot be recovered, while the media can still be reused.' },
        { term: 'Cryptographic erase', definition: 'Destroying the encryption key of encrypted media so the data on it can no longer be read.' },
        { term: 'Certificate of destruction', definition: 'A record from the person or vendor who destroyed media, listing what was destroyed, how, and when.' }
      ]
    },
    {
      title: 'What happens when it goes wrong',
      body: [
        "Failing to protect regulated data has consequences beyond the breach itself: <strong>fines and penalties</strong> from regulators, <strong>lawsuits</strong> and settlements, <strong>loss of contracts</strong> or licenses, required audits, and <strong>reputational damage</strong> that drives customers away. For Cedar Creek, the biggest risk is the last two: a customer whose drawings leaked may never send another order."
      ],
      callout: { kind: 'real', title: 'Equifax (2017): the cost of exposed data', text: "The 2017 Equifax breach exposed personal information of about 147 million people. In its 2019 settlement with the Federal Trade Commission, the Consumer Financial Protection Bureau, and the states, Equifax agreed to pay at least $575 million and up to $700 million. You will study the case in Weeks 7 and 8. Data that is minimized, classified, and protected in every state costs far less to lose." }
    }
  ],
  check: [
    { q: "Who should approve a request for read access to the Payroll share?", opts: ["Dee Ortiz, the custodian who runs FS-HR01", "Rosa Medina, the data owner", "The person asking for access", "Any member of the help desk"], ans: 1, why: "The data owner decides who may access the data. The custodian carries out the decision." },
    { q: "Cedar Creek sends employee data to a cloud payroll company that runs payroll according to Cedar Creek's instructions. What is the payroll company's role?", opts: ["Data controller", "Data subject", "Data processor", "Data owner"], ans: 2, why: "An organization that processes personal data on behalf of the controller, following its instructions, is a processor. Cedar Creek is the controller." },
    { q: "Cedar Creek's lawyers tell IT to preserve all records about a former employee because of a possible lawsuit. What is this called?", opts: ["Legal hold", "Data minimization", "Cryptographic erase", "Purpose limitation"], ans: 0, why: "A legal hold suspends normal deletion so records needed for legal matters are preserved." },
    { q: "Which method makes data on an encrypted SSD unreadable almost instantly by destroying the key?", opts: ["Degaussing", "Overwriting", "Pulverizing", "Cryptographic erase"], ans: 3, why: "Cryptographic erase destroys the encryption key, so the encrypted data can no longer be read. Degaussing does not work on SSDs." },
    { q: "A customer's contract says its drawings must be stored only in the United States. Which concept is the contract addressing?", opts: ["Data sovereignty and geolocation", "Tokenization", "Separation of duties", "Data masking"], ans: 0, why: "Where data is stored decides which country's laws apply to it. Restricting the storage location addresses data sovereignty." }
  ]
};

COURSE_QUIZ.w3 = {
  title: 'Week 3 Quiz',
  pass: 80,
  questions: [
    { lesson: '3.1', q: "Cedar Creek's server room door needs a badge and a PIN. A visitor badge alone opens the lobby. Which statement is correct?", opts: ["Both doors use MFA", "The server room uses MFA (have plus know); the lobby uses a single factor", "Neither door uses MFA because badges are not credentials", "The lobby uses MFA because it also has a receptionist"], ans: 1, why: "A badge is something you have and a PIN is something you know: two different types. A badge alone is one factor." },
    { lesson: '3.1', q: "A user approves an MFA push she did not start, after receiving a dozen of them late at night. Which control would most directly reduce this risk?", opts: ["Requiring a longer password", "Disabling account lockout", "Number matching in the authenticator app, or a FIDO2 security key", "Switching to SMS codes"], ans: 2, why: "Repeated push prompts wear people down (MFA fatigue). Number matching stops blind approvals, and FIDO2 keys cannot be approved remotely at all." },
    { lesson: '3.1', q: "Time-based one-time passwords (TOTP) from an authenticator app are:", opts: ["Codes that change every 30 seconds, calculated from a shared secret and the time", "Passwords that never expire", "Biometric templates stored on the phone", "Codes sent by text message"], ans: 0, why: "TOTP codes are calculated by the app and the server from a shared secret and the current time, typically every 30 seconds." },
    { lesson: '3.1', q: "Why are SMS codes considered the weakest common MFA method?", opts: ["They are too long to type", "They only work on smartphones", "They require a hardware token", "A phone number can be hijacked by SIM swapping, and codes can be relayed by fake login pages"], ans: 3, why: "Attackers can take over a phone number through the carrier, and a phishing page can ask the victim to type the code in." },
    { lesson: '3.1', q: "A password manager is recommended mainly because it:", opts: ["Removes the need for MFA", "Lets people use a unique, strong password for every site", "Stores passwords in a plain text file for easy recovery", "Shares one password across all of a team's accounts"], ans: 1, why: "Unique random passwords for every site stop one breach from unlocking other accounts. MFA is still needed." },
    { lesson: '3.1', q: "Which is an example of passwordless authentication?", opts: ["A passkey on a phone, unlocked with a fingerprint, signing a challenge from the website", "A password and a security question", "A password that never expires", "A shared account with a posted password"], ans: 0, why: "Passkeys use a private key on the device, unlocked locally, so no password is sent or stored on the server." },
    { lesson: '3.2', q: "On a Linux server, an engineer who owns a folder grants a coworker access to it. Which access control model allows this?", opts: ["MAC", "Rule-based", "DAC", "ABAC"], ans: 2, why: "In discretionary access control the owner decides who gets access. Linux file permissions are DAC." },
    { lesson: '3.2', q: "A government system lets a user open a document only if the user's clearance is at or above the document's classification label, and users cannot change the labels. Which model?", opts: ["DAC", "RBAC", "Rule-based", "MAC"], ans: 3, why: "Labels and clearances enforced by the system, which owners cannot override, define mandatory access control." },
    { lesson: '3.2', q: "A script is set with chmod 755. What does that allow?", opts: ["Owner can read only; others have no access", "Owner has full access; group and others can read and execute", "Everyone has full read, write, and execute", "Owner can write; group and others can read only"], ans: 1, why: "7 is rwx for the owner; 5 is r-x for the group and for others." },
    { lesson: '3.2', q: "Where does a modern Linux system store password hashes?", opts: ["/etc/shadow, readable only by root and the shadow group", "/etc/passwd, readable by everyone", "/etc/group", "The user's home folder"], ans: 0, why: "/etc/passwd lists accounts and is world-readable, so the hashes moved to /etc/shadow, which is protected." },
    { lesson: '3.2', q: "Cedar Creek's help desk technician only needs to reset passwords, but he is a member of Domain Admins. Which principle is being violated?", opts: ["Non-repudiation", "Implicit deny", "Least privilege", "Data minimization"], ans: 2, why: "Least privilege means giving only the access a job requires. Password resets need delegated rights, not full domain admin." },
    { lesson: '3.2', q: "Privileged access management (PAM) tools mainly:", opts: ["Encrypt email between users", "Monitor web application traffic", "Issue certificates to web servers", "Vault, rotate, and control the use of high-privilege credentials, and log their use"], ans: 3, why: "PAM keeps admin and service credentials in a vault, rotates them, grants them just in time, and records their use." },
    { lesson: '3.3', q: "Brian Kessler left on October 16. On November 1, the VPN log shows his account connecting from the same home address he used while employed. What should the analyst do first?", opts: ["Email Brian to ask if it was him", "Delete the account and its logs", "Wait for the quarterly access review", "Tell the manager immediately, recommend disabling the account now, and preserve the logs"], ans: 3, why: "Active use of a leaver's account is a possible incident. Escalate, cut off access, and keep the evidence. Contacting the person or deleting logs could damage an investigation." },
    { lesson: '3.3', q: "In SAML single sign-on, which component issues the signed assertion that the user has authenticated?", opts: ["The identity provider", "The service provider", "The user's browser", "The LDAP client"], ans: 0, why: "The identity provider authenticates the user and signs the assertion. The service provider trusts it." },
    { lesson: '3.3', q: "Which protocol is used to query and update a directory such as Active Directory?", opts: ["SAML", "LDAP", "OAuth", "SMTP"], ans: 1, why: "LDAP (Lightweight Directory Access Protocol) reads and writes directory data. LDAPS is the encrypted version." },
    { lesson: '3.3', q: "Two companies agree that each will accept sign-ins verified by the other's identity provider, so their staff can use a shared portal without new passwords. What is this?", opts: ["Privilege creep", "Kerberos", "Federation", "Tokenization"], ans: 2, why: "Federation is trust between identity systems of different organizations, usually carried by SAML or OIDC." },
    { lesson: '3.4', q: "A file containing employees' names, Social Security numbers, and bank account numbers is best described as:", opts: ["Public information", "PII and financial data, both regulated", "A trade secret", "Non-human-readable data"], ans: 1, why: "Names and SSNs identify people (PII), and bank accounts are financial data. Both are regulated." },
    { lesson: '3.4', q: "A store's payment system replaces each card number with a random value and keeps the real number in a separate secure vault. Which method is this?", opts: ["Masking", "Hashing", "Tokenization", "Degaussing"], ans: 2, why: "Tokenization swaps the sensitive value for a meaningless token and stores the real value elsewhere." },
    { lesson: '3.4', q: "A DLP alert shows an engineer's laptop copying 180 drawings labeled Confidential to a USB drive. Which type of DLP raised it?", opts: ["Endpoint DLP", "Network DLP", "Cloud DLP", "Email filtering"], ans: 0, why: "Copying to removable media happens on the computer, which endpoint DLP watches." },
    { lesson: '3.5', q: "Who is responsible for deciding how long payroll records are kept before they are destroyed?", opts: ["The data custodian", "The help desk", "The data owner, with HR and legal advice", "The backup software"], ans: 2, why: "The data owner sets the retention period, guided by laws, contracts, and legal advice. The custodian carries it out." }
  ]
};
