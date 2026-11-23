// Week 3 labs. Shapes: docs/COURSE_V2.md
// Lab 3.3 auto-check answers come from docs/tools/make_week3_pack.js (run it to print them).
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['3.1'] = {
  id: "3.1", week: 3, title: "Linux accounts: users, groups, passwd, and shadow", mins: 45, env: "kali",
  goal: "Learn how Linux stores identities by reading /etc/passwd and /etc/shadow, then build a small Cedar Creek team in your Kali VM: groups, users, a password-aging rule, and a properly deprovisioned former employee. These are the same ideas you will check in Cedar Creek's Active Directory later today.",
  youNeed: [
    "Your Kali VM, started and logged in as kali",
    "A terminal (Ctrl + Alt + T)",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Who am I? whoami, id, and groups",
      body: [
        "Every process on Linux runs as some <strong>user</strong>. Each user has a number called the <strong>UID</strong> (user ID), a main group with a <strong>GID</strong> (group ID), and can belong to more groups. Linux checks these numbers, not names, when it decides what you may do.",
        "<code>whoami</code> prints your username. <code>id</code> prints your UID, your main group, and every group you are in. Look for a group called <strong>sudo</strong> in the list: membership in that group is what lets the kali user run commands as the administrator, root."
      ],
      cmd: "whoami\nid\ngroups",
      expect: "kali, then a line starting uid=1000(kali) gid=1000(kali) groups=1000(kali),... with sudo somewhere in the list, then the same group names on one line."
    },
    {
      title: "Read the user list: /etc/passwd",
      body: [
        "<code>/etc/passwd</code> is the list of every account on the system, one per line. Despite its name, it no longer holds passwords. Anyone can read it, because programs need it to turn UIDs into names.",
        "Each line has seven fields separated by colons: <strong>username : x : UID : GID : comment : home folder : shell</strong>. The <code>x</code> means \"the password hash is kept in /etc/shadow\". Accounts with UIDs below 1000 are <strong>system accounts</strong> used by services, not people. Most have the shell <code>/usr/sbin/nologin</code>, which means nobody can sign in to them interactively.",
        "Look at the first lines, your own line, and count how many accounts cannot log in."
      ],
      cmd: "head -3 /etc/passwd\ngrep '^kali:' /etc/passwd\nwc -l /etc/passwd\ngrep -c nologin /etc/passwd",
      expect: "root:x:0:0:root:/root:/usr/bin/zsh (or /bin/bash) first, then daemon and bin. Your line looks like kali:x:1000:1000:Kali,,,:/home/kali:/usr/bin/zsh. Then the number of accounts (around 50 to 60), and a slightly smaller number of nologin accounts.",
      tip: "The ^ in '^kali:' means \"at the start of the line\". Without it, grep would also match any line that merely contains kali: somewhere."
    },
    {
      title: "The protected file: /etc/shadow",
      body: [
        "The password hashes live in <code>/etc/shadow</code>. Compare the permissions of the two files. /etc/passwd is readable by everyone. /etc/shadow is readable only by root and the shadow group, because a stolen hash can be cracked offline.",
        "Try to read shadow as kali (it fails), then read your own line with sudo. The fields are: <strong>username : password hash : last change : minimum days : maximum days : warning days : inactive days : expiry date</strong>. The dates are counted in days since January 1, 1970.",
        "The hash starts with an ID between dollar signs that names the hashing method. Current Kali uses <code>$y$</code>, which is <strong>yescrypt</strong>, a slow, salted method built to resist cracking. Older systems show <code>$6$</code> (SHA-512 crypt). The random text after the next $ is the <strong>salt</strong>, so two users with the same password still get different hashes."
      ],
      cmd: "ls -l /etc/passwd /etc/shadow\ncat /etc/shadow\nsudo grep '^kali:' /etc/shadow",
      expect: "/etc/passwd is -rw-r--r-- root root. /etc/shadow is -rw-r----- root shadow. cat prints \"Permission denied\". After you type your password, sudo prints one long line starting kali:$y$ (or kali:$6$).",
      tip: "sudo asks for kali's password (the one you set in Lab 1.1). Nothing appears while you type it. That is normal."
    },
    {
      title: "Create Cedar Creek groups with groupadd",
      body: [
        "Permissions are easier to manage when you grant them to <strong>groups</strong> instead of to individual people. You add a person to a group and they get its access; you remove them and the access goes away. That is role-based thinking, and it is how Cedar Creek's Active Directory works too.",
        "Create three groups: engineering, hr, and ccstaff (everyone on staff). <code>getent group</code> looks a group up and prints its line from /etc/group: <strong>name : x : GID : members</strong>."
      ],
      cmd: "sudo groupadd engineering\nsudo groupadd hr\nsudo groupadd ccstaff\ngetent group engineering hr ccstaff",
      expect: "No output from groupadd (silence means success on Linux). getent prints three lines such as engineering:x:1001: with nothing after the last colon, because the groups have no members yet.",
      tip: "If groupadd says the group already exists, you ran this lab before. That is fine; continue."
    },
    {
      title: "Create users with useradd",
      body: [
        "<code>useradd</code> creates an account. The options: <code>-m</code> makes a home folder, <code>-s /bin/bash</code> sets the shell, <code>-c</code> adds a comment (the person's full name), and <code>-G</code> lists the extra groups to join.",
        "Create five people from Cedar Creek. Linux usernames here drop the dot that Cedar Creek's email addresses use. Brian Kessler is still an employee in this scenario for a few more minutes."
      ],
      cmd: "sudo useradd -m -s /bin/bash -c \"Tom Becker\" -G engineering,ccstaff tbecker\nsudo useradd -m -s /bin/bash -c \"Priya Nair\" -G engineering,ccstaff pnair\nsudo useradd -m -s /bin/bash -c \"Brian Kessler\" -G engineering,ccstaff bkessler\nsudo useradd -m -s /bin/bash -c \"Rosa Medina\" -G hr,ccstaff rmedina\nsudo useradd -m -s /bin/bash -c \"Jordan Pike\" -G ccstaff jpike\ntail -5 /etc/passwd\nid pnair",
      expect: "The last five lines of /etc/passwd are the new users with UIDs 1001 to 1005 (or higher if you made users before). id pnair shows her own group plus engineering and ccstaff."
    },
    {
      title: "Set lab passwords with chpasswd",
      body: [
        "A new account has no usable password until you set one. <code>chpasswd</code> reads lines of <code>user:password</code> and sets each one. The loop below gives all five lab users the same practice password so you can sign in as them later.",
        "This is only acceptable in a throwaway lab. In real life every person gets their own password, set by them, and nobody types passwords into a command line where they end up in the shell history."
      ],
      cmd: "for u in tbecker pnair bkessler rmedina jpike; do echo \"$u:CedarLab-2027-pw\" | sudo chpasswd; done\nsudo grep -E '^(pnair|jpike):' /etc/shadow",
      expect: "No output from the loop. The grep prints two shadow lines with different hashes, even though the password is the same. The salt makes the difference."
    },
    {
      title: "Password aging with chage",
      body: [
        "<code>chage</code> (change age) shows and sets the aging fields from /etc/shadow. Cedar Creek's 2019 memo says passwords change every 90 days. Current NIST guidance actually recommends against forced periodic changes unless there is a sign of compromise, but many companies and auditors still require them, so you need to know how to set the rule.",
        "<code>-M 90</code> sets the maximum days a password is valid. <code>-W 14</code> warns the user 14 days before it expires. Look before and after."
      ],
      cmd: "sudo chage -l pnair\nsudo chage -M 90 -W 14 pnair\nsudo chage -l pnair",
      expect: "The first listing shows Maximum number of days between password change: 99999 (in effect, never). The second shows 90, and the warning shows 14."
    },
    {
      title: "Brian leaves: lock, expire, and remove access",
      body: [
        "Brian Kessler's last day has arrived. <strong>Deprovisioning</strong> means removing a person's access when they leave. On Linux, do it in three moves. First <strong>lock</strong> the password (<code>usermod -L</code> puts a ! in front of the hash so no password can match). Second <strong>expire</strong> the account (<code>-e 1</code> sets the expiry to January 2, 1970, a date already in the past, so even key-based sign-ins are refused). Third <strong>remove him from groups</strong> (<code>gpasswd -d</code>), so if the account is ever turned back on by mistake it has no access.",
        "<code>passwd -S</code> shows a short status. The second field is <strong>P</strong> for a usable password, <strong>L</strong> for locked, or <strong>NP</strong> for no password.",
        "Notice what you do not do: you do not delete the account. Keeping a locked account preserves his files and the link between his username and the logs, which matters if anyone later asks what he did before he left. Deletion (<code>userdel</code>) comes later, after the retention period."
      ],
      cmd: "sudo passwd -S bkessler\nsudo usermod -L -e 1 bkessler\nsudo gpasswd -d bkessler engineering\nsudo passwd -S bkessler\nsudo grep '^bkessler:' /etc/shadow\nid bkessler",
      expect: "The first status line shows P. gpasswd prints Removing user bkessler from group engineering. The second status line shows L. The shadow line now has ! right after bkessler: and a 1 near the end (the expiry). id bkessler no longer lists engineering.",
      tip: "On Cedar Creek's Windows network the same steps are: disable the account, set an expiry, and remove it from groups. In Lab 3.3 you will find out whether anyone did that for the real Brian."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What is the kali user's UID, as shown by id?", kind: "number", answer: 1000 },
    { id: "c2", q: "Which group in kali's list gives it the right to run commands as root with sudo?", kind: "text", answer: ["sudo", "27(sudo)"] },
    { id: "c3", q: "What are the permissions of /etc/shadow, as shown at the start of the ls -l line?", kind: "text", answer: ["-rw-r-----", "rw-r-----", "-rw-r-----.", "640"] },
    { id: "c4", q: "What does the kali password hash in /etc/shadow start with (the method ID between the first two dollar signs, including them)?", kind: "text", answer: ["$y$", "y", "yescrypt", "$6$", "6"] },
    { id: "c5", q: "After your chage command, what is pnair's Maximum number of days between password change?", kind: "number", answer: 90 },
    { id: "c6", q: "After locking bkessler, which letter does passwd -S show in the second field?", kind: "text", answer: ["L", "LK"] },
    { id: "c7", q: "Paste the output of id pnair.", kind: "paste" }
  ],
  reflection: "Brian's Linux account is now locked, expired, and out of the engineering group, but still exists. Explain in your own words why each of those three steps matters, and why you did not delete the account. Then say who at Cedar Creek should start this process on a person's last day, and what document or message should trigger it."
};

COURSE_LABS['3.2'] = {
  id: "3.2", week: 3, title: "Permissions and sudo: build a least-privilege file share", mins: 50, env: "kali",
  goal: "Turn your Kali VM into a small Cedar Creek file server. Give each folder the right owner, group, and permissions, prove that people outside a group are kept out, find and fix a dangerous chmod 777, and give the help desk a narrow sudo rule instead of full admin rights.",
  youNeed: [
    "Your Kali VM, with the users and groups from Lab 3.1 (tbecker, pnair, bkessler, rmedina, jpike; engineering, hr, ccstaff)",
    "The lab password you set in Lab 3.1: CedarLab-2027-pw",
    "About 50 minutes"
  ],
  steps: [
    {
      title: "Read a permission string",
      body: [
        "Run <code>ls -l</code> on a few files. The first ten characters are the <strong>mode</strong>. The first character is the type: <code>-</code> for a file, <code>d</code> for a directory. The other nine are three sets of three: the <strong>owner</strong> (user), the <strong>group</strong>, and <strong>others</strong> (everyone else).",
        "In each set, <code>r</code> is read, <code>w</code> is write, <code>x</code> is execute, and <code>-</code> means not allowed. On a directory, r lets you list the names inside, w lets you create and delete files there, and x lets you enter it at all.",
        "Each permission has a number: r = 4, w = 2, x = 1. Add them for each set to get the octal (base-8) form. So <code>rwx</code> = 7, <code>r-x</code> = 5, <code>rw-</code> = 6, <code>r--</code> = 4, and <code>---</code> = 0. <code>rwxr-xr-x</code> is 755 and <code>rw-r-----</code> is 640."
      ],
      cmd: "ls -l /etc/passwd /etc/shadow\nls -ld /home/kali /tmp",
      expect: "-rw-r--r-- (644) for passwd, -rw-r----- (640) for shadow. /home/kali is drwx------ or drwxr-xr-x depending on your Kali version. /tmp is drwxrwxrwt: everyone can write there, and the t (sticky bit) means you can only delete your own files.",
      tip: "Read the nine characters in groups of three, out loud: \"owner rw-, group r--, others ---\". It stops you from mixing up the sets."
    },
    {
      title: "Create the share folders",
      body: [
        "Make a folder tree under /srv (the standard place for data a server serves): one folder for Engineering, one for HR, and one for company-wide documents. <code>mkdir -p</code> creates parent folders as needed."
      ],
      cmd: "sudo mkdir -p /srv/cc/engineering /srv/cc/hr /srv/cc/company\nls -l /srv/cc",
      expect: "Three directories, each drwxr-xr-x root root. Right now everyone on the system could list and read them."
    },
    {
      title: "Set the group owner with chown",
      body: [
        "<code>chown owner:group path</code> changes who owns a file or folder. Keep root as the owner (so normal users cannot change the permissions themselves) and set the group to the team that uses each folder. Giving access through a group, not through named people, is exactly what Cedar Creek's ENG-Share-RW and HR-Share-RW groups do."
      ],
      cmd: "sudo chown root:engineering /srv/cc/engineering\nsudo chown root:hr /srv/cc/hr\nsudo chown root:ccstaff /srv/cc/company\nls -l /srv/cc",
      expect: "The group column now reads ccstaff, engineering, and hr. The permissions have not changed yet."
    },
    {
      title: "Set the permissions with chmod",
      body: [
        "<code>chmod</code> changes the mode. Engineering and HR get <code>770</code>: the owner and the group can do everything, and others get nothing at all. The company folder gets <code>750</code>: staff can read it, only root can change it, and outsiders get nothing.",
        "This is <strong>least privilege</strong> and <strong>need to know</strong> on a file system: each folder is open only to the people whose job needs it."
      ],
      cmd: "sudo chmod 770 /srv/cc/engineering /srv/cc/hr\nsudo chmod 750 /srv/cc/company\nls -l /srv/cc",
      expect: "drwxr-x--- for company and drwxrwx--- for engineering and hr."
    },
    {
      title: "Put some data in each folder",
      body: [
        "Create one file in each folder. <code>tee</code> writes what it receives into a file, and running it with sudo lets it write into folders kali cannot. Then set the payroll file the way HR would want it: owned by Rosa, readable by the hr group, and closed to everyone else (640)."
      ],
      cmd: "echo \"Bracket drawing rev C - CONFIDENTIAL\" | sudo tee /srv/cc/engineering/bracket_revC.txt\necho \"Payroll export 2026-11 - CONFIDENTIAL\" | sudo tee /srv/cc/hr/payroll_2026-11.csv\necho \"Holiday schedule 2027\" | sudo tee /srv/cc/company/holidays_2027.txt\nsudo chown rmedina:hr /srv/cc/hr/payroll_2026-11.csv\nsudo chmod 640 /srv/cc/hr/payroll_2026-11.csv\nsudo ls -l /srv/cc/hr",
      expect: "Each tee prints its line back. The last listing shows -rw-r----- rmedina hr for payroll_2026-11.csv."
    },
    {
      title: "Test access as other people with sudo -u",
      body: [
        "<code>sudo -u name command</code> runs one command as another user, so you can test what each person can reach without signing in as them. Run each line and read the result before you run the next.",
        "Priya is in engineering, so she can read the drawing but not payroll. Rosa is in hr. Jordan is only in ccstaff. Brian was removed from engineering in Lab 3.1, so his access to the drawings is gone, which is the whole point of removing departing staff from groups."
      ],
      cmd: "sudo -u pnair cat /srv/cc/engineering/bracket_revC.txt\nsudo -u pnair cat /srv/cc/hr/payroll_2026-11.csv\nsudo -u rmedina cat /srv/cc/hr/payroll_2026-11.csv\nsudo -u jpike ls /srv/cc/company\nsudo -u jpike ls /srv/cc/engineering\nsudo -u bkessler ls /srv/cc/engineering",
      expect: "Priya reads the drawing line. Her payroll attempt ends in Permission denied. Rosa reads the payroll line. Jordan lists holidays_2027.txt but gets Permission denied on engineering. Brian gets Permission denied.",
      tip: "sudo -u still works for bkessler even though his password is locked, because root is choosing to run the command as him. A locked account stops sign-ins, not root."
    },
    {
      title: "Find and fix a chmod 777",
      body: [
        "Somebody could not open the drawing from a script and \"fixed\" it the way people often do: <code>chmod 777</code>, read, write, and execute for everyone. Make that mistake on purpose, then hunt for it the way an auditor would.",
        "<code>find /srv/cc -type f -perm -o+w</code> lists every regular file that others can write to. Then fix it with the symbolic form of chmod: <code>ug-x</code> removes execute from the owner and the group (a drawing is not a program), and <code>o-rwx</code> removes everything from others, which leaves 660. Run find again to prove it is clean.",
        "<code>stat -c '%a %U:%G %n'</code> prints the octal mode, owner, group, and name, which makes a tidy audit record. The last command lets find hand every folder and file to stat, because kali itself is not allowed to list the HR and Engineering folders."
      ],
      cmd: "sudo chmod 777 /srv/cc/engineering/bracket_revC.txt\nsudo find /srv/cc -type f -perm -o+w\nsudo chmod ug-x,o-rwx /srv/cc/engineering/bracket_revC.txt\nsudo find /srv/cc -type f -perm -o+w\nsudo find /srv/cc -exec stat -c '%a %U:%G %n' {} +",
      expect: "The first find prints /srv/cc/engineering/bracket_revC.txt. The second find prints nothing. stat prints one line per folder and file, for example 770 root:hr /srv/cc/hr and 660 root:root /srv/cc/engineering/bracket_revC.txt.",
      tip: "The engineering folder itself is 770, so outsiders could not reach the 777 file anyway. That is defense in depth: two layers, and the inner one had failed. Fix it anyway; folders get moved and permissions get copied."
    },
    {
      title: "Who can be root? sudo -l and the sudo group",
      body: [
        "<strong>sudo</strong> (superuser do) runs one command with root's power and records it. On Kali, anyone in the sudo group can run any command as root. <code>sudo -l</code> lists what you may run; <code>(ALL : ALL) ALL</code> means everything.",
        "Full sudo is the Linux version of Domain Admins. Jordan, on the help desk, should not have it. He only needs to read system logs when helping users."
      ],
      cmd: "sudo -l\ngetent group sudo",
      expect: "sudo -l ends with (ALL : ALL) ALL. getent shows sudo:x:27:kali, so kali is the only member."
    },
    {
      title: "Give the help desk one command, not root",
      body: [
        "Rules for sudo live in /etc/sudoers and in small files under /etc/sudoers.d/. The rule below says: jpike, on any host, may run /usr/bin/journalctl as root, and nothing else. Set the file to 440 (read-only) as sudo expects, then let <code>visudo -c</code> check the syntax. A broken sudoers file can lock everyone out of sudo, so always check.",
        "<code>sudo -l -U jpike</code> lists another user's sudo rights without signing in as them."
      ],
      cmd: "echo 'jpike ALL=(root) /usr/bin/journalctl' | sudo tee /etc/sudoers.d/helpdesk\nsudo chmod 440 /etc/sudoers.d/helpdesk\nsudo visudo -c\nsudo -l -U jpike",
      expect: "visudo prints /etc/sudoers: parsed OK and the same for /etc/sudoers.d/helpdesk. The last command ends with (root) /usr/bin/journalctl."
    },
    {
      title: "Test the rule as Jordan",
      body: [
        "Switch to Jordan with <code>su - jpike</code> (type the lab password CedarLab-2027-pw). Your prompt changes to jpike. Run the two sudo commands one at a time; sudo asks for Jordan's password the first time. The log command works. Reading /etc/shadow is refused. Then <code>exit</code> to return to kali.",
        "Type these one line at a time, not as a pasted block, because su starts a new shell."
      ],
      cmd: "su - jpike\nsudo journalctl -n 3 --no-pager\nsudo cat /etc/shadow\nexit",
      expect: "Three log lines, then: Sorry, user jpike is not allowed to execute '/usr/bin/cat /etc/shadow' as root on kali. After exit, the prompt shows kali again."
    },
    {
      title: "Accounting: sudo writes everything down",
      body: [
        "Every sudo command, allowed or refused, is logged with the real user's name. That is <strong>accounting</strong>, the third A in AAA, and it is why named accounts with sudo beat a shared root password (or Cedar Creek's shared ccadmin account): the log says who did it.",
        "Search the system journal for sudo's entries."
      ],
      cmd: "sudo journalctl _COMM=sudo -n 15 --no-pager | grep jpike",
      expect: "Lines showing jpike running journalctl, and one line containing jpike : command not allowed ; ... COMMAND=/usr/bin/cat /etc/shadow."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What is the octal number for the permission string rwxr-x--- ?", kind: "number", answer: 750 },
    { id: "c2", q: "What error did pnair get when she tried to read the payroll file? Type the last two words of the message.", kind: "text", answer: ["Permission denied", "permission denied."] },
    { id: "c3", q: "What octal mode does stat show for /srv/cc/hr?", kind: "number", answer: 770 },
    { id: "c4", q: "What is the full path of the file the first find command reported?", kind: "text", answer: ["/srv/cc/engineering/bracket_revC.txt", "bracket_revC.txt"] },
    { id: "c5", q: "After your chmod ug-x,o-rwx fix, what octal mode does that file have?", kind: "number", answer: 660 },
    { id: "c6", q: "What single command does sudo -l -U jpike allow? Give the full path.", kind: "text", answer: ["/usr/bin/journalctl", "(root) /usr/bin/journalctl"] },
    { id: "c7", q: "Paste the journal line that shows jpike's refused command.", kind: "paste" }
  ],
  reflection: "Cedar Creek has seven members in Domain Admins, including the help desk technician and a shared ccadmin account. Using what you did in this lab, explain how least privilege would change that list: who should keep full admin rights, what Jordan actually needs instead, and how the sudo log you just read shows why a shared admin account is a problem."
};

COURSE_LABS['3.3'] = {
  id: "3.3", week: 3, title: "Access review evidence: compare accounts with the HR roster", mins: 50, env: "kali",
  goal: "Download Cedar Creek's account, group, VPN, and HR exports into Kali and use awk, sort, comm, and grep to find the accounts that should not exist, the accounts with too much access, and the remote access that skips MFA. Your results become the evidence for the Mock Access Review.",
  youNeed: [
    "Your Kali VM with internet access",
    "Your ~/labs folder from Week 1",
    "About 50 minutes"
  ],
  steps: [
    {
      title: "Download and unpack the Week 3 pack",
      body: [
        "Dee exported the evidence on Monday morning. Download it into your labs folder, unpack it, and look at the folder tree. <code>ls -R</code> lists folders and everything inside them."
      ],
      cmd: "cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week3.zip\nunzip cc-week3.zip\ncd cedarcreek-week3\nls -R",
      expect: "Three folders (hr, it, memos) and README.txt. it holds ad_group_membership.csv, ad_users_export.csv, share_permissions.csv, vpn_profiles.txt, and vpn_sessions.csv.",
      tip: "If ~/labs does not exist, run mkdir ~/labs first. If wget cannot resolve the host, check the VM's NAT adapter as in Lab 1.2."
    },
    {
      title: "Read the request and number the columns",
      body: [
        "Read Marcus's request first so you know what you are looking for. Then look at the account export. It has ten columns, and you will refer to them by number. The second command turns the header into a numbered list: <code>tr ',' '\\n'</code> swaps each comma for a new line, and <code>cat -n</code> numbers the lines."
      ],
      cmd: "cat memos/access_review_request.txt\nhead -1 it/ad_users_export.csv | tr ',' '\\n' | cat -n\nwc -l it/ad_users_export.csv",
      expect: "Marcus's email, then 1 SamAccountName, 2 DisplayName, 3 Department, 4 Title, 5 Enabled, 6 LastLogonDate, 7 PasswordLastSet, 8 PasswordNeverExpires, 9 Created, 10 Description. Then the line count (the header plus one line per account)."
    },
    {
      title: "Filter rows with awk",
      body: [
        "<code>awk</code> reads a file line by line and splits each line into fields. <code>-F,</code> says fields are separated by commas. <code>$5</code> is field 5. The part in quotes is <strong>pattern {action}</strong>: for every line where the pattern is true, do the action.",
        "List the disabled accounts (Enabled is False), then count them."
      ],
      cmd: "awk -F, '$5==\"False\" {print $1, $2, $10}' it/ad_users_export.csv\nawk -F, '$5==\"False\"' it/ad_users_export.csv | wc -l",
      expect: "A short list of disabled accounts, including two built-in Windows accounts and one former employee whose description says when he was disabled. Then the count."
    },
    {
      title: "Build two lists: enabled accounts and active employees",
      body: [
        "An access review asks one question first: does every enabled account belong to a current employee? Make two sorted name lists. <code>NR&gt;1</code> skips the header (NR is the line number). The HR roster's Status is field 5 there too.",
        "Save both lists in ~/labs so you can reuse them."
      ],
      cmd: "awk -F, 'NR>1 && $5==\"True\" {print $2}' it/ad_users_export.csv | sort > ~/labs/ad_enabled.txt\nawk -F, '$5==\"Active\" {print $2}' hr/hr_roster.csv | sort > ~/labs/hr_active.txt\nwc -l ~/labs/ad_enabled.txt ~/labs/hr_active.txt",
      expect: "About 70 enabled accounts and about 300 active employees. Most employees work on the plant floor and have no computer account, so the HR list is much longer."
    },
    {
      title: "Compare the lists with comm",
      body: [
        "<code>comm</code> compares two sorted files and prints three columns: lines only in the first file, lines only in the second, and lines in both. <code>-23</code> hides columns 2 and 3, leaving only the names that are in the account list but <strong>not</strong> on the active roster. Both files must be sorted the same way, which is why you used sort.",
        "Every name this prints needs an explanation. Some are not people at all (service, shared, and built-in accounts). Some are people who left. Save the list as evidence."
      ],
      cmd: "comm -23 ~/labs/ad_enabled.txt ~/labs/hr_active.txt\ncomm -23 ~/labs/ad_enabled.txt ~/labs/hr_active.txt | wc -l\ncomm -23 ~/labs/ad_enabled.txt ~/labs/hr_active.txt > ~/labs/access_review_evidence.txt",
      expect: "A list of display names such as Administrator, Backup Service, Brian Kessler, CAD Vendor Support, and CC Admin, then the count."
    },
    {
      title: "Check each person against the HR roster",
      body: [
        "For the real names on the list, look up their HR status and last day. <code>grep -E</code> with <code>|</code> matches any of several names at once. One person on the list is still employed but not Active; the second command finds them."
      ],
      cmd: "grep -E \"Brian Kessler|Neil Brandt|Lori Vance|Gary Voss|Ethan Park\" hr/hr_roster.csv\ngrep \",Leave,\" hr/hr_roster.csv",
      expect: "Five Terminated rows with their last days (Ethan Park was the 2025 summer intern; his account is the generic Engineering Intern). Then one row with the status Leave."
    },
    {
      title: "Find dormant accounts and passwords that never expire",
      body: [
        "A <strong>dormant</strong> account is enabled but unused. Cedar Creek's export is dated 2026-11-23, so 90 days earlier is 2026-08-25. Because the dates are written year-month-day, awk can compare them as plain text: \"2026-04-16\" sorts before \"2026-08-25\".",
        "Field 8 says whether the password never expires. Accounts that never change their password are prized by attackers, because a password stolen years ago still works."
      ],
      cmd: "awk -F, 'NR>1 && $5==\"True\" && $6 < \"2026-08-25\" {print $1, $6}' it/ad_users_export.csv\nawk -F, '$8==\"True\" {print $1, $7}' it/ad_users_export.csv",
      expect: "A handful of accounts with an old last sign-in, then the accounts whose passwords never expire, with the date each password was last set. Some are close to ten years old."
    },
    {
      title: "Who are the domain admins?",
      body: [
        "Domain Admins can do anything to every Windows computer and account at Cedar Creek. It should be a very short list of IT people using separate admin accounts. List it and count it."
      ],
      cmd: "grep \"^Domain Admins,\" it/ad_group_membership.csv\ngrep -c \"^Domain Admins,\" it/ad_group_membership.csv",
      expect: "The members, one per line, then the count. Compare them with their job titles in the account export."
    },
    {
      title: "Who can use the VPN without MFA?",
      body: [
        "Read how the VPN signs people in. Then make two sorted lists, members of VPN-Users and members of VPN-MFA-Users, and use comm again to show who is allowed on the VPN but has never enrolled in MFA."
      ],
      cmd: "cat it/vpn_profiles.txt\ngrep \"^VPN-Users,\" it/ad_group_membership.csv | cut -d, -f2 | sort > ~/labs/vpn_users.txt\ngrep \"^VPN-MFA-Users,\" it/ad_group_membership.csv | cut -d, -f2 | sort > ~/labs/vpn_mfa.txt\ncomm -23 ~/labs/vpn_users.txt ~/labs/vpn_mfa.txt",
      expect: "The profile summary (CC-REMOTE with MFA, CC-LEGACY with a password only), then the accounts in VPN-Users that are not in VPN-MFA-Users."
    },
    {
      title: "Who actually used CC-LEGACY, and when?",
      body: [
        "Count CC-LEGACY sessions per user. Then pull every session for b.kessler and compare the dates with his last day in the HR roster. Look at the source IP address too."
      ],
      cmd: "grep CC-LEGACY it/vpn_sessions.csv | cut -d, -f3 | sort | uniq -c | sort -nr\ngrep b.kessler it/vpn_sessions.csv",
      expect: "Four accounts used CC-LEGACY. Brian's rows show several sessions before his last day and some after it, all from the same address.",
      tip: "This is the moment Marcus asked about: an account in active use by someone who should not have it. In real work you would stop and tell your manager now, before finishing the review."
    },
    {
      title: "Spot a mover who kept old access",
      body: [
        "People who change jobs inside the company often keep the access from their old job. That is called <strong>privilege creep</strong>. List the HR share group, then check the department of anyone who looks out of place."
      ],
      cmd: "grep \"^HR-Share-RW,\" it/ad_group_membership.csv\ngrep \"^d.reyes,\" it/ad_users_export.csv",
      expect: "Five members. One works in Finance, and her account description says when she moved."
    },
    {
      title: "Add to your evidence file",
      body: [
        "Append the other results to the evidence file you started, with a heading before each one, then print it. <code>&gt;&gt;</code> adds to the end of a file. You will use this file in the Mock Access Review."
      ],
      cmd: "echo \"== VPN-Users without MFA ==\" >> ~/labs/access_review_evidence.txt\ncomm -23 ~/labs/vpn_users.txt ~/labs/vpn_mfa.txt >> ~/labs/access_review_evidence.txt\necho \"== b.kessler VPN sessions ==\" >> ~/labs/access_review_evidence.txt\ngrep b.kessler it/vpn_sessions.csv >> ~/labs/access_review_evidence.txt\ncat ~/labs/access_review_evidence.txt",
      expect: "The enabled-but-not-active names, then the VPN list, then Brian's sessions."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many accounts are in the export? (wc -l minus the header line)", kind: "number", answer: 73 },
    { id: "c2", q: "How many accounts are disabled (Enabled is False)?", kind: "number", answer: 3 },
    { id: "c3", q: "How many names does comm -23 print (enabled accounts with no matching Active employee)?", kind: "number", answer: 12 },
    { id: "c4", q: "One name on that list belongs to someone who still works at Cedar Creek. Who is it?", kind: "text", answer: ["June Vick", "Vick"] },
    { id: "c5", q: "How many enabled accounts have no sign-in since before 2026-08-25?", kind: "number", answer: 5 },
    { id: "c6", q: "How many members does Domain Admins have?", kind: "number", answer: 7 },
    { id: "c7", q: "How many VPN-Users members are not in VPN-MFA-Users?", kind: "number", answer: 6 },
    { id: "c8", q: "How many VPN sessions did b.kessler have after his last day (2026-10-16)?", kind: "number", answer: 2 },
    { id: "c9", q: "Which HR-Share-RW member does not work in HR? Give the account name.", kind: "text", answer: ["d.reyes", "Dana Reyes"] },
    { id: "c10", q: "Paste the output of your comm -23 command for the account and HR lists.", kind: "paste" }
  ],
  reflection: "Brian Kessler's account connected through the VPN after his last day, from the same address he used while he worked here. Write the short message you would send Marcus right now. Stick to the facts the files show (dates, account, profile, address, what the account can reach), say what you recommend doing first, and avoid accusing anyone: the files show an account was used, not who used it."
};
