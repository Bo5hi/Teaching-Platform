// Week 2 labs. Shapes: docs/COURSE_V2.md
// Lab pack: assets/cedarcreek/week2/ (zip: assets/cedarcreek/cc-week2.zip), built by docs/tools/make_week2_pack.js.
// Every auto-check answer below was computed from the generated pack (the generator prints them) and checked with
// real openssl 3, GnuPG 2.4 and sha256sum. Re-run the generator and re-check if the pack changes.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['2.1'] = {
  id: "2.1", week: 2, title: "Encrypt and decrypt files with OpenSSL", mins: 40, env: "kali",
  goal: "Download the Week 2 lab pack, then use <code>openssl</code> to make random keys, encrypt a file with AES-256, see why the same file never encrypts the same way twice, and decrypt a backup plan Dee Ortiz encrypted for you.",
  youNeed: [
    "Your Kali VM, logged in, with internet access",
    "The ~/labs folder from Week 1 (if it is missing, mkdir ~/labs creates it)",
    "About 40 minutes"
  ],
  steps: [
    {
      title: "Download and unpack the Week 2 lab pack",
      body: [
        "Marcus copied this week's files for you. Download the pack into your labs folder and unpack it, the same way you did in Lab 1.2. Paste the long command with Ctrl + Shift + V."
      ],
      cmd: "cd ~/labs\nwget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week2.zip\nunzip -q cc-week2.zip\ncd cedarcreek-week2\nls",
      expect: "Three folders (exchange, lab, memos) and README.txt.",
      tip: "If wget cannot resolve the host, check that Kali has internet (NAT adapter). If unzip says the files already exist, you unpacked it before; type A and press Enter to overwrite."
    },
    {
      title: "Read the brief",
      body: [
        "Read README.txt and Marcus's memo. They explain this week's job: sending Rev C of drawing CCD-3318 to Halvorsen Pump under Halvorsen's new rules."
      ],
      cmd: "cat README.txt\ncat memos/assignment_from_marcus.txt",
      expect: "The README lists the folders. Marcus's memo lists five things he wants from you."
    },
    {
      title: "Make a work folder",
      body: [
        "Keep the pack's files unchanged and do your experiments in a separate folder. <code>mkdir -p</code> creates a folder and does not complain if it already exists. <code>cp</code> copies a file."
      ],
      cmd: "mkdir -p ~/labs/work\ncp lab/encryption/sample_drawing_notes.txt ~/labs/work/\ncd ~/labs/work\ncat sample_drawing_notes.txt",
      expect: "Five lines of notes about the CCD-3318 bracket. This is your plaintext."
    },
    {
      title: "Generate random keys with openssl rand",
      body: [
        "<code>openssl rand</code> produces random bytes from the system's secure random source, the right way to make a key. <code>-hex 32</code> asks for 32 bytes and prints them as hexadecimal (hex). Each byte is two hex characters, and each byte is 8 bits.",
        "Run the first command twice. You get a different value every time. Then count the characters in one key."
      ],
      cmd: "openssl rand -hex 32\nopenssl rand -hex 32\nopenssl rand -hex 32 | tr -d '\\n' | wc -c",
      expect: "Two different long hex strings, then the number 64. That is 32 bytes, which is 32 x 8 = 256 bits: an AES-256 key."
    },
    {
      title: "Encrypt a file with AES-256",
      body: [
        "Now encrypt the notes with a password. <code>enc</code> is the symmetric encryption tool. <code>-aes-256-cbc</code> picks AES with a 256-bit key in CBC mode. <code>-pbkdf2</code> turns your password into the actual key with a slow, salted key-stretching function, exactly the idea from Lesson 2.2. <code>-in</code> and <code>-out</code> name the input and output files.",
        "openssl asks for a password twice. Use <strong>Bracket-Test-1</strong> and type carefully; nothing appears on screen while you type."
      ],
      cmd: "openssl enc -aes-256-cbc -pbkdf2 -in sample_drawing_notes.txt -out notes.enc\nls -l",
      expect: "No output from openssl. ls -l shows notes.enc next to the original, a little larger, because of the header and padding."
    },
    {
      title: "Look at the ciphertext",
      body: [
        "Ciphertext is not text, so <code>cat</code> would print garbage. <code>xxd</code> shows each byte as hex on the left and as characters on the right. <code>head -c 8</code> prints only the first 8 bytes.",
        "The first 8 bytes are a label openssl writes so it knows a salt follows. The next 8 bytes are the random <strong>salt</strong>. Everything after that is the encrypted data."
      ],
      cmd: "xxd notes.enc | head -5\nhead -c 8 notes.enc; echo",
      expect: "Rows of hex. The right-hand column of the first row starts with a readable 8-character label, and the head command prints that same label. Write it down for a checkpoint."
    },
    {
      title: "Encrypt the same file again and compare",
      body: [
        "Encrypt the same notes again, with the same password, into a second file. Then use <code>cmp</code> to compare the two encrypted files byte by byte."
      ],
      cmd: "openssl enc -aes-256-cbc -pbkdf2 -in sample_drawing_notes.txt -out notes2.enc\ncmp notes.enc notes2.enc",
      expect: "cmp reports that the files differ at byte 9, the first byte after the label. Same plaintext, same password, different ciphertext: openssl picked a new random salt, so the key and IV came out different."
    },
    {
      title: "Decrypt it, and try a wrong password",
      body: [
        "<code>-d</code> means decrypt. The first command restores the notes with the right password. <code>diff</code> compares two text files and prints nothing if they are identical.",
        "Then decrypt again and type a wrong password on purpose. <code>/dev/null</code> is a place to throw output away."
      ],
      cmd: "openssl enc -d -aes-256-cbc -pbkdf2 -in notes.enc -out notes_back.txt\ndiff sample_drawing_notes.txt notes_back.txt\nopenssl enc -d -aes-256-cbc -pbkdf2 -in notes.enc -out /dev/null",
      expect: "The diff prints nothing: the decrypted file matches the original exactly. With the wrong password, openssl prints an error that contains two words you should remember, plus a longer technical line."
    },
    {
      title: "Make an email-safe version with base64",
      body: [
        "Ciphertext is raw bytes, which some email and chat systems damage. <code>-a</code> adds <strong>base64</strong> encoding, which writes the bytes using only letters, digits, +, / and =. Base64 is an encoding, not encryption: anyone can reverse it without a key."
      ],
      cmd: "openssl enc -aes-256-cbc -pbkdf2 -a -in sample_drawing_notes.txt -out notes.b64\ncat notes.b64",
      expect: "A few lines of letters and digits starting with U2FsdGVkX1. That is the label you saw in xxd, written in base64."
    },
    {
      title: "Decrypt Dee's offsite backup plan",
      body: [
        "Dee Ortiz encrypted her draft plan for taking backup tapes offsite. She did not email you the password. She walked over and told you in person: <strong>Friday-Tapes-2027</strong>. Telling the key through a different channel from the file is the habit Halvorsen wants from Cedar Creek.",
        "Decrypt the plan into your work folder and read it."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/encryption\nls -l\nopenssl enc -d -aes-256-cbc -pbkdf2 -in offsite_backup_plan.txt.enc -out ~/labs/work/offsite_backup_plan.txt\ncat ~/labs/work/offsite_backup_plan.txt",
      expect: "Dee's draft: why the tapes need to leave the building, where they will go, how they travel, how they are encrypted, and where the tape key is kept.",
      tip: "If you see 'bad decrypt', the password was mistyped. It is case-sensitive, with two dashes."
    }
  ],
  checkpoints: [
    { id: "c1", q: "openssl rand -hex 32 makes a key of how many bits?", kind: "number", answer: 256 },
    { id: "c2", q: "What 8 characters does head -c 8 print at the start of notes.enc?", kind: "text", answer: ["Salted__"] },
    { id: "c3", q: "Why did notes.enc and notes2.enc come out different even though the file and password were the same?", kind: "choice",
      opts: ["The password was typed differently the second time", "openssl chose a new random salt, so the derived key and IV were different", "AES changes its algorithm on every run", "cmp compares file names, not contents"], answer: 1 },
    { id: "c4", q: "What error did openssl print when you used the wrong password?", kind: "choice",
      opts: ["permission denied", "bad decrypt", "file not found", "invalid certificate"], answer: 1 },
    { id: "c5", q: "What box number at the offsite vault does Dee's plan give?", kind: "number", answer: 1142 },
    { id: "c6", q: "What start date does the plan give? Use the format YYYY-MM-DD.", kind: "text", answer: ["2027-01-08", "1/8/2027", "01/08/2027", "January 8, 2027", "Jan 8, 2027", "Friday 2027-01-08"] },
    { id: "c7", q: "Paste the contents of notes.b64.", kind: "paste" }
  ],
  reflection: "Dee told you her passphrase in person. Priya's team types the zip password into the same email as the zip. In a few sentences, explain why one is safe and the other is not, using the words key, ciphertext, and channel. Then name one risk in Dee's own plan about where the tape key is kept."
};

COURSE_LABS['2.2'] = {
  id: "2.2", week: 2, title: "Hashing: verify downloads and find weak password storage", mins: 45, env: "kali",
  goal: "Use <code>sha256sum</code> to see the avalanche effect and decide which of two firmware downloads is safe to install. Then compare an old password table stored as plain MD5 with a new one stored as salted SHA-512, and see for yourself why salt matters.",
  youNeed: [
    "Your Kali VM and the Week 2 lab pack from Lab 2.1 in ~/labs/cedarcreek-week2",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Hash a phrase and watch the avalanche effect",
      body: [
        "<code>sha256sum</code> prints the SHA-256 hash of its input. <code>echo -n</code> prints text without adding a newline at the end; a hidden newline would change the hash.",
        "Hash 'Cedar Creek', then the same phrase with a lowercase c. Compare the two outputs. The dash at the end of each line means the input came from the pipe, not a file."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/hashing\necho -n \"Cedar Creek\" | sha256sum\necho -n \"cedar Creek\" | sha256sum",
      expect: "Two 64-character hashes with no visible pattern in common. The first starts with 7fa7. These are the same values shown in the Lesson 2.2 diagram."
    },
    {
      title: "Compare hash lengths",
      body: [
        "Each algorithm always gives the same length, whatever the input. Run three algorithms on the same phrase, then count the characters in the SHA-256 hash. <code>cut -d' ' -f1</code> keeps only the hash, and <code>tr -d '\\n'</code> removes the newline before counting."
      ],
      cmd: "echo -n \"Cedar Creek\" | md5sum\necho -n \"Cedar Creek\" | sha1sum\necho -n \"Cedar Creek\" | sha512sum\necho -n \"Cedar Creek\" | sha256sum | cut -d' ' -f1 | tr -d '\\n' | wc -c",
      expect: "MD5 is 32 hex characters, SHA-1 is 40, SHA-512 is 128, and the last command prints the length of a SHA-256 hash."
    },
    {
      title: "Read Jordan's firmware note",
      body: [
        "Jordan needs to update the camera recorder, NVR-01. He downloaded the same firmware twice: once from the vendor and once from a forum mirror. SHA256SUMS is the checksum file the vendor publishes. Its format is the hash, two spaces, and the file name, which is exactly what <code>sha256sum</code> prints."
      ],
      cmd: "cat nvr_firmware/download_note.txt\ncat nvr_firmware/SHA256SUMS\nls -l nvr_firmware/vendor nvr_firmware/mirror",
      expect: "Jordan's note, one line of SHA256SUMS, and two files with the same name and the same size, 8192 bytes."
    },
    {
      title: "Hash both downloads",
      body: [
        "Same name and same size prove nothing. Hash both copies and compare them with the vendor's value. Look at the first 8 characters of each."
      ],
      cmd: "sha256sum nvr_firmware/vendor/NVR01_FW_5.7.2.bin\nsha256sum nvr_firmware/mirror/NVR01_FW_5.7.2.bin",
      expect: "Two different hashes. Only one of them matches the line in SHA256SUMS."
    },
    {
      title: "Let sha256sum -c do the comparing",
      body: [
        "Comparing 64 characters by eye invites mistakes. <code>sha256sum -c</code> reads a checksum file, hashes each file it lists, and prints OK or FAILED. It looks for the file name in the folder you are in, so move into each folder first. <code>..</code> means the folder above."
      ],
      cmd: "cd nvr_firmware/vendor\nsha256sum -c ../SHA256SUMS\ncd ../mirror\nsha256sum -c ../SHA256SUMS\ncd ../..",
      expect: "One folder prints 'NVR01_FW_5.7.2.bin: OK'. The other prints FAILED and a warning that 1 computed checksum did NOT match."
    },
    {
      title: "Find where the two files differ",
      body: [
        "<code>cmp</code> compares two files byte by byte and stops at the first difference. A few changed bytes in the middle of a firmware image is exactly what a tampered or corrupted file looks like."
      ],
      cmd: "cmp nvr_firmware/vendor/NVR01_FW_5.7.2.bin nvr_firmware/mirror/NVR01_FW_5.7.2.bin",
      expect: "A line saying the files differ, with a byte number a little past the middle of the file."
    },
    {
      title: "Look at the old portal's password table",
      body: [
        "Dee exported the user table from Cedar Creek's retired parts-request portal. The third column is each password's MD5 hash, with no salt."
      ],
      cmd: "cd passwords\ncat README.txt\nhead -5 old_parts_portal_users.csv",
      expect: "The README, then the header line (username,department,password_md5) and four users."
    },
    {
      title: "Find accounts that share a password",
      body: [
        "Without salt, the same password always gives the same hash. Count how often each hash appears with the pipeline you learned in Lab 1.4. Ignore the line for the header word.",
        "Then use grep with the start of the top hash to see whose accounts they are."
      ],
      cmd: "cut -d, -f3 old_parts_portal_users.csv | sort | uniq -c | sort -nr | head -3\ngrep b56e0b4e old_parts_portal_users.csv",
      expect: "The top hash appears several times. The grep shows the usernames that share it."
    },
    {
      title: "Crack the shared hash with a word list",
      body: [
        "Attackers do not reverse a hash. They hash guesses and look for a match. A <strong>rainbow table</strong> is the same idea done in advance for billions of passwords. Here you do it for ten common passwords.",
        "The loop reads each password from the file, prints it, and prints its MD5 hash. The grep keeps only the line whose hash matches the shared one. Type the loop as one line."
      ],
      cmd: "while read -r p; do echo \"$p $(echo -n \"$p\" | md5sum)\"; done < common_passwords.txt\nwhile read -r p; do echo \"$p $(echo -n \"$p\" | md5sum)\"; done < common_passwords.txt | grep b56e0b4e",
      expect: "First, ten passwords with their hashes. Second, one line: the password whose hash matches the shared hash. Every account with that hash uses that password."
    },
    {
      title: "Look at the new portal's salted hashes",
      body: [
        "The new supplier portal stores passwords as salted SHA-512 crypt hashes. Each line reads <code>username:$6$salt$hash</code>. <code>$6$</code> means SHA-512 crypt, the next part up to the dollar sign is the salt, and the rest is the hash.",
        "You already know m.alvarez used Welcome1 on the old portal and kept it. Look at his line, then rebuild his hash yourself: <code>openssl passwd -6 -salt</code> hashes a password with a salt you choose."
      ],
      cmd: "cat new_portal_shadow.txt\ngrep m.alvarez new_portal_shadow.txt\nopenssl passwd -6 -salt q8Rt2mVx Welcome1",
      expect: "Five users, every hash different. The openssl output is exactly the same as m.alvarez's stored value: same password plus same salt gives the same hash."
    },
    {
      title: "Test the other accounts for Welcome1",
      body: [
        "Did anyone else reuse Welcome1? You cannot spot it by looking, because each account has its own salt. Try Welcome1 with each of the other four salts and compare each result with that user's line."
      ],
      cmd: "openssl passwd -6 -salt Hy3uKe9s Welcome1\nopenssl passwd -6 -salt Bn6sQa1r Welcome1\nopenssl passwd -6 -salt Lp0wZc7N Welcome1\nopenssl passwd -6 -salt Rk5dWm8e Welcome1",
      expect: "Exactly one result matches another user's stored hash. Salting did not stop a targeted guess, but it forced you to test each account separately, and a slow algorithm makes each test expensive."
    },
    {
      title: "Add a secret key: HMAC",
      body: [
        "An HMAC mixes a shared secret key into the hash. <code>openssl dgst -sha256 -hmac</code> computes one. Run the three commands: the original message, the same message with a different key, and a changed message with the original key."
      ],
      cmd: "echo -n \"Ship 400 brackets to Halvorsen\" | openssl dgst -sha256 -hmac \"cc-shared-key-1\"\necho -n \"Ship 400 brackets to Halvorsen\" | openssl dgst -sha256 -hmac \"wrong-key\"\necho -n \"Ship 900 brackets to Halvorsen\" | openssl dgst -sha256 -hmac \"cc-shared-key-1\"",
      expect: "Three completely different values. Without the right key, nobody can produce the right HMAC, and any change to the message changes it."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What are the first 8 characters of the SHA-256 hash of Cedar Creek (capital C)?", kind: "text", answer: ["7fa70abc"] },
    { id: "c2", q: "How many hex characters long is a SHA-256 hash?", kind: "number", answer: 64 },
    { id: "c3", q: "Which firmware copy is safe to install on NVR-01?", kind: "choice",
      opts: ["The vendor copy: its SHA-256 matches SHA256SUMS", "The mirror copy: it finished downloading first", "Either one: they have the same name and size", "Neither: firmware cannot be checked with a hash"], answer: 0 },
    { id: "c4", q: "In the old portal table, how many accounts share the most common password hash?", kind: "number", answer: 3 },
    { id: "c5", q: "What password produces that shared hash?", kind: "text", answer: ["Welcome1"] },
    { id: "c6", q: "Besides m.alvarez, which username in new_portal_shadow.txt also uses Welcome1?", kind: "text", answer: ["g.lindqvist", "lindqvist"] },
    { id: "c7", q: "Why do m.alvarez and that user have different stored hashes in the new portal even though their passwords are the same?", kind: "choice",
      opts: ["The new portal encrypts passwords with a public key", "Each account has its own random salt", "SHA-512 hashes are random", "The passwords were changed"], answer: 1 },
    { id: "c8", q: "What does a correct HMAC prove that a plain SHA-256 hash does not?", kind: "choice",
      opts: ["That the message was encrypted", "That the sender cannot deny sending it", "That the message came from someone who holds the shared secret key", "That the message is short"], answer: 2 }
  ],
  reflection: "Write two or three sentences to Jordan about the NVR-01 firmware: which file to install, how you know, and what he should do with the other copy. Then write two sentences to Dee about what the old portal table shows and why the new portal's design is better."
};

COURSE_LABS['2.3'] = {
  id: "2.3", week: 2, title: "Keys and signatures with GnuPG", mins: 40, env: "kali",
  goal: "Create your own OpenPGP key pair with GnuPG, confirm Tom Becker's public key by its fingerprint, verify his signature on a change notice, catch a tampered copy, and then sign and encrypt a file yourself.",
  youNeed: [
    "Your Kali VM and the Week 2 lab pack in ~/labs/cedarcreek-week2",
    "A passphrase you will remember for your new key (write it down somewhere safe)",
    "About 40 minutes"
  ],
  steps: [
    {
      title: "Meet GnuPG",
      body: [
        "<strong>GnuPG</strong> (the <code>gpg</code> command) implements the OpenPGP standard: key pairs, signatures, and hybrid encryption for files and email. It comes with Kali.",
        "Move into the gpg folder of the lab pack and read what is there."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/gpg\ngpg --version | head -2\ncat README.txt",
      expect: "A version line such as gpg (GnuPG) 2.2 or 2.4, then the README describing four files."
    },
    {
      title: "Create your own key pair",
      body: [
        "Change the name and email in the command to your own name, using the Cedar Creek domain. <code>default default</code> picks GnuPG's current default algorithms (an ed25519 signing key and a cv25519 encryption subkey, both elliptic curve). <code>1y</code> makes the key expire in one year, so a forgotten key does not stay valid forever.",
        "A window asks for a passphrase twice. This passphrase protects your private key on disk. Choose a long one you will remember."
      ],
      cmd: "gpg --quick-gen-key \"Your Name <your.name@cedarcreek-ind.com>\" default default 1y\ngpg --list-keys",
      expect: "Lines ending with 'public and secret key created and signed', then your key listed with pub, uid, and sub lines and an expiry date one year out.",
      tip: "If gpg says the key already exists, you made one before; skip ahead. If no passphrase window appears, check behind the terminal."
    },
    {
      title: "Import Tom's public key and check its fingerprint",
      body: [
        "Tom gave IT his public key. Anyone could make a key called 'Tom Becker', so a name proves nothing. The fingerprint does. Marcus keeps an Engineering key list on his office wall, and Tom's entry reads:",
        "<code>0410 6E25 3563 878E 675A  EFFE 6D11 6115 3BF1 DF87</code>",
        "Import the key and print its fingerprint. Compare every group of four."
      ],
      cmd: "gpg --import tom_becker_pubkey.asc\ngpg --fingerprint t.becker@cedarcreek-ind.com",
      expect: "'public key \"Tom Becker <t.becker@cedarcreek-ind.com>\" imported', then the key with a fingerprint line under pub. It should match the wall list exactly."
    },
    {
      title: "Verify Tom's signature on the change notice",
      body: [
        "ECN-0457.txt is an engineering change notice Tom approved. ECN-0457.txt.asc is his <strong>detached signature</strong>: the signature lives in its own file. To verify, give gpg the signature first and the file second."
      ],
      cmd: "cat ECN-0457.txt\ngpg --verify ECN-0457.txt.asc ECN-0457.txt",
      expect: "'Good signature from \"Tom Becker <t.becker@cedarcreek-ind.com>\"', followed by a WARNING that the key is not certified with a trusted signature. The signature is good; the warning means you have not yet told gpg that you checked this key."
    },
    {
      title: "Check the copy from the transfer share",
      body: [
        "Someone left a copy of the change notice on \\\\ENG-FS01\\Transfer. Verify it against Tom's same signature, then use <code>diff</code> to see what is different."
      ],
      cmd: "gpg --verify ECN-0457.txt.asc ECN-0457_copy_from_share.txt\ndiff ECN-0457.txt ECN-0457_copy_from_share.txt",
      expect: "'BAD signature from \"Tom Becker\"'. diff shows one line that differs: the new bore tolerance. A machinist working from the copy would make every part wrong."
    },
    {
      title: "Certify Tom's key on your keyring",
      body: [
        "You checked Tom's fingerprint against a trusted source, so you can now <strong>certify</strong> his key: sign it with your own key to record that you verified it. <code>--quick-lsign-key</code> makes a local signature that stays on your computer. gpg asks for your passphrase.",
        "Verify the change notice again. The warning is gone."
      ],
      cmd: "gpg --quick-lsign-key 04106E253563878E675AEFFE6D1161153BF1DF87\ngpg --verify ECN-0457.txt.asc ECN-0457.txt",
      expect: "The lsign command shows Tom's key and fingerprint and says the signature will be marked as non-exportable (it stays on your computer). The verify output now shows Good signature with [full] after the name and no WARNING lines."
    },
    {
      title: "Sign a file of your own",
      body: [
        "Make a working folder and a short note. <code>--armor</code> writes the signature as text you can paste into email. <code>--detach-sign</code> puts the signature in a separate .asc file and leaves the note unchanged. gpg asks for your passphrase, because signing uses your private key.",
        "Then verify your own signature. Copy the verify output for a checkpoint."
      ],
      cmd: "mkdir -p ~/labs/work/gpg\ncd ~/labs/work/gpg\necho \"Trial note from the Cedar Creek security analyst\" > note.txt\ngpg --armor --detach-sign note.txt\nls\ngpg --verify note.txt.asc note.txt",
      expect: "ls shows note.txt and note.txt.asc. The verify says Good signature from your name, marked [ultimate] because it is your own key."
    },
    {
      title: "Encrypt a file and decrypt it",
      body: [
        "Encrypt the note so only you can read it. <code>--recipient</code> (or <code>-r</code>) names whose public key to use. Change the email to the one in your key. <code>--output</code> names the encrypted file.",
        "Behind the scenes this is hybrid encryption: gpg made a random session key, encrypted the note with it, and locked the session key with your public key. Decrypting needs your private key, so gpg may ask for your passphrase."
      ],
      cmd: "gpg --armor --encrypt --recipient your.name@cedarcreek-ind.com --output note_secret.asc note.txt\nhead -3 note_secret.asc\ngpg --decrypt note_secret.asc",
      expect: "A text block starting with -----BEGIN PGP MESSAGE-----, then the decrypted note printed back to the screen."
    },
    {
      title: "Look inside the encrypted file",
      body: [
        "<code>gpg --list-packets</code> shows the parts an OpenPGP message is built from. Find two of them. The <strong>pubkey enc packet</strong> holds the one-time session key, locked with your public key; its keyid is your encryption subkey. The <strong>encrypted data</strong> packet holds the note itself, encrypted with that session key using a symmetric cipher. This is the hybrid encryption diagram from Lesson 2.1, in a real file."
      ],
      cmd: "gpg --list-packets note_secret.asc",
      expect: "A line starting :pubkey enc packet: with a keyid, and a later packet whose name includes 'encrypted data'. Because you hold the private key, gpg also shows the decrypted literal data packet with the file name note.txt."
    },
    {
      title: "Export your public key",
      body: [
        "To receive encrypted files, or to let someone check your signatures, you give out your public key. Halvorsen's rules require every sending engineer to register a signing key this way. Your private key never leaves your machine."
      ],
      cmd: "gpg --armor --export your.name@cedarcreek-ind.com > my_pubkey.asc\nhead -3 my_pubkey.asc",
      expect: "-----BEGIN PGP PUBLIC KEY BLOCK----- followed by base64 text. This file is safe to share."
    }
  ],
  checkpoints: [
    { id: "c1", q: "Type the last 4 characters of Tom Becker's key fingerprint as gpg prints it.", kind: "text", answer: ["DF87"] },
    { id: "c2", q: "Which file does Tom's signature match?", kind: "choice",
      opts: ["ECN-0457.txt", "ECN-0457_copy_from_share.txt", "Both files", "Neither file"], answer: 0 },
    { id: "c3", q: "What bore tolerance, in mm, does the copy from the share show? Type just the number.", kind: "number", answer: 0.2 },
    { id: "c4", q: "Which key did gpg use to verify Tom's signature?", kind: "choice",
      opts: ["Tom's private key", "Tom's public key", "Your private key", "A shared password"], answer: 1 },
    { id: "c5", q: "Before you certified Tom's key, gpg printed 'Good signature' and also a WARNING. What did the warning mean?", kind: "choice",
      opts: ["The file had been changed", "The signature had expired", "You had not yet confirmed that the key really belongs to Tom", "Tom's key had been revoked"], answer: 2 },
    { id: "c6", q: "Paste the output of gpg --verify note.txt.asc note.txt.", kind: "paste" },
    { id: "c7", q: "To encrypt drawings so that only Halvorsen can read them, which key does Cedar Creek use?", kind: "choice",
      opts: ["Halvorsen's public key", "Halvorsen's private key", "The sending engineer's private key", "The sending engineer's public key"], answer: 0 },
    { id: "c8", q: "In gpg --list-packets, what does the pubkey enc packet carry?", kind: "choice",
      opts: ["The whole note, encrypted with your public key", "The one-time session key, locked with your public key", "Your private key", "A hash of the note"], answer: 1 }
  ],
  reflection: "The copy on the transfer share differed from Tom's approved change notice by one character. In a few sentences, explain how a signed manifest or signed file would protect the Halvorsen drawings in the same way, and what an engineer should do when gpg prints BAD signature."
};

COURSE_LABS['2.4'] = {
  id: "2.4", week: 2, title: "Read and verify certificates with OpenSSL", mins: 35, env: "kali",
  goal: "Read Cedar Creek certificates field by field, verify a chain of trust, catch an expired certificate and a self-signed one, create a certificate signing request, and check a live website's certificate the way a browser does.",
  youNeed: [
    "Your Kali VM and the Week 2 lab pack in ~/labs/cedarcreek-week2",
    "Internet access in Kali for the last two steps",
    "About 35 minutes"
  ],
  steps: [
    {
      title: "Look at a certificate file",
      body: [
        "Dee exported the certificates of three Cedar Creek systems and the two Cedar Creek CA certificates. They are in <strong>PEM</strong> format: base64 text between BEGIN and END lines. The text is not readable yet; openssl decodes it."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/certs\ncat README.txt\nhead -3 intranet.pem",
      expect: "The README, then -----BEGIN CERTIFICATE----- and two lines of base64."
    },
    {
      title: "Read the subject, issuer, and dates",
      body: [
        "<code>openssl x509</code> works with certificates. <code>-noout</code> stops it from printing the base64 again. The other options pick the fields to show."
      ],
      cmd: "openssl x509 -in intranet.pem -noout -subject -issuer -dates",
      expect: "subject= ending in CN=intranet.cedarcreek.local, issuer= ending in the CN of the CA that signed it, then notBefore= and notAfter= dates."
    },
    {
      title: "Read the extensions",
      body: [
        "<code>-ext</code> prints named extensions. <strong>subjectAltName</strong> (SAN) lists every name the certificate is valid for. <strong>keyUsage</strong> and <strong>extendedKeyUsage</strong> say what the key may do. Count the DNS names in the SAN."
      ],
      cmd: "openssl x509 -in intranet.pem -noout -ext subjectAltName,keyUsage,extendedKeyUsage",
      expect: "A Subject Alternative Name line with several DNS: entries, Key Usage of Digital Signature and Key Encipherment, and Extended Key Usage of TLS Web Server Authentication."
    },
    {
      title: "See the whole certificate",
      body: [
        "<code>-text</code> prints every field. Read the first screen: version, serial number, signature algorithm, issuer, validity, subject, and the public key's algorithm and size."
      ],
      cmd: "openssl x509 -in intranet.pem -noout -text | head -20",
      expect: "Version: 3, a serial number, sha256WithRSAEncryption, and Public-Key: (2048 bit)."
    },
    {
      title: "Walk up the chain",
      body: [
        "Look at the two CA certificates. The root's subject and issuer are the same: it is self-signed. The issuing CA was signed by the root.",
        "Then let openssl verify the chain. <code>-CAfile</code> names the root you trust. <code>-untrusted</code> supplies the intermediate certificate so openssl can build the chain, without trusting it on its own."
      ],
      cmd: "openssl x509 -in cedarcreek_root_ca.pem -noout -subject -issuer\nopenssl x509 -in cedarcreek_issuing_ca.pem -noout -subject -issuer\nopenssl verify -CAfile cedarcreek_root_ca.pem -untrusted cedarcreek_issuing_ca.pem intranet.pem",
      expect: "The root shows the same name twice. The issuing CA's issuer is the root. The last line reads intranet.pem: OK."
    },
    {
      title: "Check TIMECLOCK-01",
      body: [
        "Run the same checks on the time clock's certificate. <code>-checkend 0</code> asks whether the certificate is still valid right now."
      ],
      cmd: "openssl x509 -in timeclock01.pem -noout -subject -issuer -dates\nopenssl x509 -in timeclock01.pem -noout -checkend 0\nopenssl verify -CAfile cedarcreek_root_ca.pem -untrusted cedarcreek_issuing_ca.pem timeclock01.pem",
      expect: "A notAfter date in the past, 'Certificate will expire', then an error with a number and the words certificate has expired."
    },
    {
      title: "Check NVR-01",
      body: [
        "Now the camera recorder. Compare its subject and issuer, then try to verify it against Cedar Creek's root."
      ],
      cmd: "openssl x509 -in nvr01.pem -noout -subject -issuer -dates\nopenssl verify -CAfile cedarcreek_root_ca.pem nvr01.pem",
      expect: "Subject and issuer are the same factory name and IP address. verify reports error 18: self-signed certificate."
    },
    {
      title: "Print a certificate fingerprint",
      body: [
        "A certificate's fingerprint is a hash of the whole certificate. Administrators compare fingerprints to be sure two copies are the same certificate, the same idea as checking Tom's key fingerprint."
      ],
      cmd: "openssl x509 -in intranet.pem -noout -fingerprint -sha256",
      expect: "sha256 Fingerprint= followed by 32 pairs of hex characters separated by colons, starting 6C:73:AF."
    },
    {
      title: "Create a certificate signing request",
      body: [
        "Cedar Creek needs a certificate for a future file server. In one command you generate a new 2048-bit RSA key pair and a CSR. <code>-nodes</code> leaves the private key file unencrypted for this lab; on a real server you would protect it. <code>-subj</code> fills in the subject so openssl does not ask questions.",
        "Then check the CSR. <code>-verify</code> confirms the CSR is signed by the matching private key."
      ],
      cmd: "mkdir -p ~/labs/work/certs\ncd ~/labs/work/certs\nopenssl req -new -newkey rsa:2048 -nodes -keyout files.key -out files.csr -subj \"/C=US/ST=Missouri/O=Cedar Creek Industries/CN=files.cedarcreek-ind.com\"\nopenssl req -in files.csr -noout -subject -verify\nls -l",
      expect: "A line of dots and plus signs while the key is made, then 'Certificate request self-signature verify OK' (or 'verify OK') and the subject. ls shows files.csr, which goes to the CA, and files.key, which never leaves the server."
    },
    {
      title: "Check a live website's certificate",
      body: [
        "<code>openssl s_client</code> connects to a server the way a browser does and shows the certificate chain it receives. <code>-servername</code> tells the server which site you want. The <code>echo |</code> at the start closes the connection as soon as the handshake is done.",
        "Check the CISA website, then a test site whose certificate has expired on purpose."
      ],
      cmd: "echo | openssl s_client -connect www.cisa.gov:443 -servername www.cisa.gov 2>&1 | grep -E \"depth=|Verify return code\"\necho | openssl s_client -connect expired.badssl.com:443 -servername expired.badssl.com 2>&1 | grep -E \"depth=|Verify return code\"",
      expect: "For CISA, depth lines from the root (highest depth) down to depth=0, the site itself, and 'Verify return code: 0 (ok)'. For the test site, 'Verify return code: 10 (certificate has expired)'.",
      tip: "If a command hangs, press Ctrl + C and check your internet connection. badssl.com is a public test site; if it is down, note that in your answer and move on."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What is the CN of the CA that issued intranet.pem?", kind: "text", answer: ["CedarCreek-Issuing-CA"] },
    { id: "c2", q: "How many DNS names are in intranet.pem's Subject Alternative Name?", kind: "number", answer: 3 },
    { id: "c3", q: "On what date did timeclock01.pem expire? Use the format YYYY-MM-DD.", kind: "text", answer: ["2025-07-01", "7/1/2025", "07/01/2025", "July 1, 2025", "Jul 1, 2025", "Jul 1 2025"] },
    { id: "c4", q: "What error number did openssl verify give for timeclock01.pem?", kind: "number", answer: 10 },
    { id: "c5", q: "Which certificate is self-signed by its manufacturer rather than issued by a Cedar Creek CA?", kind: "choice",
      opts: ["intranet.pem", "timeclock01.pem", "nvr01.pem", "cedarcreek_issuing_ca.pem"], answer: 2 },
    { id: "c6", q: "Paste the output of openssl req -in files.csr -noout -subject -verify.", kind: "paste" },
    { id: "c7", q: "Paste the two Verify return code lines from the live site checks.", kind: "paste" },
    { id: "c8", q: "A browser wants to know right now whether intranet.pem has been revoked, without downloading a whole list. What does it use?", kind: "choice",
      opts: ["A CRL", "OCSP", "A CSR", "The SAN"], answer: 1 }
  ],
  reflection: "Users at Cedar Creek click through browser warnings on TIMECLOCK-01 and NVR-01 every day. In a few sentences, explain to Marcus why that habit is dangerous, and recommend a fix for each system using what you learned about CAs and expiry."
};

COURSE_LABS['2.5'] = {
  id: "2.5", week: 2, title: "Hide, mask, and chain: steganography, masking, and a tamper-evident log", mins: 35, env: "kali",
  goal: "Find data hidden inside a photo that someone tried to email out, hide a message yourself, mask Social Security numbers in an HR export, and use SHA-256 to find the altered entry in a hash-chained log, the idea behind blockchain.",
  youNeed: [
    "Your Kali VM and the Week 2 lab pack in ~/labs/cedarcreek-week2",
    "About 35 minutes"
  ],
  steps: [
    {
      title: "Compare the two picnic photos",
      body: [
        "On Friday the mail filter flagged an outgoing personal email with a photo from the company picnic attached. Dee saved it next to the original from the newsletter. Compare the two files. <code>file</code> identifies a file by its contents, not its name."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/protect\ncat README.txt\nls -l *.jpg\nfile *.jpg\nsha256sum *.jpg",
      expect: "Both files are JPEG images, 360 x 220 pixels, but they have different sizes and different hashes. The emailed copy is a few hundred bytes larger."
    },
    {
      title: "Look for hidden data",
      body: [
        "If you open both photos in an image viewer, they look identical. Image viewers stop reading at the end of the picture data, so anything added after it is invisible. A zip archive is read from its end, so a zip stuck onto the end of a JPEG still works as a zip.",
        "Python's built-in zip tool can list and extract it. <code>-l</code> lists, <code>-e</code> extracts into a folder."
      ],
      cmd: "python3 -m zipfile -l picnic_from_email.jpg\nmkdir -p ~/labs/work/found\npython3 -m zipfile -e picnic_from_email.jpg ~/labs/work/found\ncat ~/labs/work/found/*.txt",
      expect: "One hidden text file is listed, then its contents: key dimensions copied from the CCD-3318 drawing. Someone tried to send drawing data out of the company inside a picnic photo."
    },
    {
      title: "Hide a message yourself",
      body: [
        "Make a small zip with a note in it, then join the original photo and the zip into a new file with <code>cat</code>. The result still opens as the picnic photo.",
        "This is the crudest form of <strong>steganography</strong>. Real steganography tools hide bits inside the pixel values themselves, so the file size barely changes. Defenders look for size and hash differences from known originals, unusual attachments, and data loss prevention (DLP) alerts."
      ],
      cmd: "cd ~/labs/work\necho \"Meet at the loading dock at 3\" > msg.txt\npython3 -m zipfile -c msg.zip msg.txt\ncat ~/labs/cedarcreek-week2/lab/protect/picnic_original.jpg msg.zip > my_picnic.jpg\nfile my_picnic.jpg\npython3 -m zipfile -l my_picnic.jpg",
      expect: "file still reports a JPEG image, and the zip listing shows msg.txt inside it."
    },
    {
      title: "Mask Social Security numbers",
      body: [
        "Rosa Medina wants to give a developer the HR export to test a new report, but the developer must not see real Social Security numbers. <strong>Masking</strong> hides most of each value and keeps the last four digits, which is enough to tell records apart.",
        "<code>sed -E</code> finds and replaces text using a pattern. The pattern matches three digits, a dash, two digits, a dash, and four digits, and keeps the last four (the part in parentheses, written back as \\1). The numbers in this file are fake: no SSN starting with 900 is ever issued."
      ],
      cmd: "cd ~/labs/cedarcreek-week2/lab/protect\nhead -3 hr_export.csv\nsed -E 's/[0-9]{3}-[0-9]{2}-([0-9]{4})/XXX-XX-\\1/' hr_export.csv > ~/labs/work/hr_masked.csv\ncat ~/labs/work/hr_masked.csv",
      expect: "Every SSN in the new file reads XXX-XX- followed by four digits. The original file is unchanged.",
      tip: "Why not just hash the SSNs? There are only about a billion possible SSNs, so an attacker can hash every one of them and look the hashes up. Hashing small, predictable values is not a safe way to hide them."
    },
    {
      title: "Walk the hash chain",
      body: [
        "Dee is testing a tamper-evident release log. Each block records an event plus <strong>prev</strong>: the SHA-256 hash of the whole block before it. If anyone edits an old block, its hash changes and no longer matches the prev value stored in the next block. This is the core idea of a blockchain.",
        "Read the first two blocks, then list every block's hash and every prev value."
      ],
      cmd: "cat ledger/block1.txt ledger/block2.txt\nsha256sum ledger/block*.txt\ngrep prev ledger/block*.txt",
      expect: "Block 1's prev is all zeros because nothing came before it. Each other block's prev should equal the sha256sum of the block before it."
    },
    {
      title: "Find the altered block",
      body: [
        "Compare in order: the hash of block1.txt with the prev in block 2, the hash of block 2 with the prev in block 3, and so on. The first pair that does not match tells you which block was changed after it was written. Then read that block."
      ],
      cmd: "sha256sum ledger/block*.txt | cut -c1-16\ngrep prev ledger/block*.txt | cut -c1-40",
      expect: "Four of the links match on their first characters. One does not: the block before that broken link was edited. Read it with cat and compare its event with what you saw in the Mock Secure File Exchange."
    }
  ],
  checkpoints: [
    { id: "c1", q: "How many bytes larger is picnic_from_email.jpg than picnic_original.jpg?", kind: "number", answer: 295 },
    { id: "c2", q: "What is the name of the file hidden inside picnic_from_email.jpg?", kind: "text", answer: ["HV-310_dims.txt"] },
    { id: "c3", q: "Why does file still call picnic_from_email.jpg an ordinary JPEG image?", kind: "choice",
      opts: ["The hidden zip was encrypted", "The hidden data sits after the picture data, which image tools ignore", "file only reads the file name", "The zip replaced part of the picture"], answer: 1 },
    { id: "c4", q: "What does Priya Nair's SSN look like in your masked file?", kind: "text", answer: ["XXX-XX-1290"] },
    { id: "c5", q: "Which block number was changed after it was written?", kind: "number", answer: 3 },
    { id: "c6", q: "In a public blockchain, what would an attacker need to do to hide a change to an old block?", kind: "choice",
      opts: ["Nothing; changes are invisible", "Recompute every later block and get most of the independent copies to accept the rewritten chain", "Encrypt the changed block", "Change the file name"], answer: 1 },
    { id: "c7", q: "A developer needs realistic HR data to test a report but must not see real SSNs. Which method fits best?", kind: "choice",
      opts: ["Steganography", "Data masking", "Full-disk encryption", "A digital signature"], answer: 1 }
  ],
  reflection: "The altered ledger block and sheet 2 of the Rev C package both show the same change. In a few sentences, say what that suggests, who you would tell, and which controls from this week would detect or stop the next attempt (think about signed manifests, the hash-chained log, and watching outgoing attachments)."
};
