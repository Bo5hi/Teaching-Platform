// Week 1 labs. Shapes: docs/COURSE_V2.md
// Lab pack: assets/cedarcreek/week1/ (zip: assets/cedarcreek/cc-week1.zip), built by docs/tools/make_week1_pack.js.
// Auto-check answers for 1.2 and 1.4 were computed from the generated pack; re-run the generator and re-check if the pack changes.
window.COURSE_LABS = window.COURSE_LABS || {};

COURSE_LABS['1.1'] = {
  id: "1.1", week: 1, title: "Build your Kali Linux lab", mins: 70, env: "kali",
  waitMins: 40, // download (~15), extract (~5), full-upgrade (~20): time spent waiting, used by docs/tools/estimate_time.js
  goal: "Install VirtualBox on your Windows PC, add the official Kali Linux virtual machine, update it, and save a clean snapshot. This Kali machine is the lab you will use for the rest of the course.",
  youNeed: [
    "A Windows 10 or 11 PC where you can install software (you need administrator rights)",
    "At least 8 GB of RAM (16 GB is better)",
    "At least 60 GB of free disk space",
    "A good internet connection (the Kali download is about 3 GB)",
    "About 70 minutes. Around 40 of that is waiting for the download, extraction, and update, so start the download first"
  ],
  steps: [
    {
      title: "Check that your PC is ready",
      body: [
        "A <strong>virtual machine</strong> (VM) is a complete computer that runs inside a window on your real computer. Your real computer is called the <strong>host</strong>. The VM is called the <strong>guest</strong>. To run a VM well, the host needs enough memory, enough disk space, and a CPU feature called <strong>virtualization</strong> turned on.",
        "Press <strong>Ctrl + Shift + Esc</strong> to open Task Manager. Click <strong>Performance</strong>, then <strong>CPU</strong>. In the lower right, find the line <strong>Virtualization</strong>. Then click <strong>Memory</strong> and note the total (for example, 16.0 GB).",
        "Open <strong>File Explorer</strong>, click <strong>This PC</strong>, and check how much free space your C: drive (or another drive) has."
      ],
      expect: "Virtualization: Enabled, at least 8 GB of memory, and at least 60 GB free on one drive.",
      tip: "If Virtualization says Disabled, stop here and read the troubleshooting step near the end of this lab before you go on."
    },
    {
      title: "Install VirtualBox",
      body: [
        "VirtualBox is free software from Oracle that runs virtual machines.",
        "Go to <strong>https://www.virtualbox.org/wiki/Downloads</strong> and click <strong>Windows hosts</strong>. Open the file when it finishes downloading.",
        "Click <strong>Next</strong> on each screen and keep the default choices. One screen warns that your network will disconnect for a moment while VirtualBox installs its network drivers. That is normal; click <strong>Yes</strong>. If Windows asks whether to install device software from Oracle, click <strong>Install</strong>.",
        "When it finishes, leave <strong>Start Oracle VirtualBox after installation</strong> checked and click <strong>Finish</strong>."
      ],
      expect: "The Oracle VirtualBox Manager window opens. Its list of machines is empty.",
      tip: "If the installer says a Microsoft Visual C++ Redistributable is missing, download the x64 version from https://aka.ms/vs/17/release/vc_redist.x64.exe, run it, and then run the VirtualBox installer again. If it warns about missing Python packages, click Yes to continue; you do not need them."
    },
    {
      title: "Download the official Kali VirtualBox image",
      body: [
        "Kali Linux is a free Linux system built for security work. Kali publishes a ready-made VirtualBox machine, so you do not have to install Linux from scratch. Always download it from kali.org, not from another site. A copy from anywhere else could be tampered with.",
        "Go to <strong>https://www.kali.org/get-kali/#kali-virtual-machines</strong>. Find the <strong>VirtualBox</strong> box and click the download button (the arrow). Keep the 64-bit (amd64) version.",
        "The file name ends in <strong>.7z</strong> and is about 3 GB. While it downloads, go on to the next step."
      ],
      expect: "A file named like kali-linux-2026.x-virtualbox-amd64.7z in your Downloads folder.",
      tip: "Next to the download button is a sum link that shows the file's SHA256 hash, a fingerprint of the file. The next step (optional) shows how to check it. You will learn why hashes matter in Week 2."
    },
    {
      title: "Optional: check the download's hash (Windows PowerShell)",
      body: [
        "Open the Start menu, type <strong>PowerShell</strong>, and open <strong>Windows PowerShell</strong>. Paste the command below and press Enter. It reads the whole file and prints its SHA256 fingerprint."
      ],
      cmd: "Get-FileHash $env:USERPROFILE\\Downloads\\kali-linux-*-virtualbox-amd64.7z -Algorithm SHA256",
      expect: "A line that starts with SHA256 followed by a long string of letters and numbers. Compare it with the sum shown on kali.org. They must match exactly."
    },
    {
      title: "Extract the Kali image",
      body: [
        "A .7z file is a compressed archive. You must extract it before VirtualBox can use it.",
        "Make a folder for your VMs, for example <strong>C:\\VMs</strong>, on the drive with the most free space. Move the .7z file into it.",
        "Newer versions of Windows 11 can open .7z files directly: right-click the file and choose <strong>Extract All</strong>. If you do not see that option, install the free 7-Zip program from <strong>https://www.7-zip.org</strong> (choose the 64-bit x64 download). Then right-click the .7z file, choose <strong>Show more options</strong>, then <strong>7-Zip</strong>, then <strong>Extract Here</strong>.",
        "Extracting takes a few minutes. The extracted files are much larger than the download (about 15 GB or more)."
      ],
      expect: "A new folder named like kali-linux-2026.x-virtualbox-amd64 that contains a .vbox file and a .vdi file.",
      tip: "When you have successfully added and started Kali, you can delete the .7z file to get back about 3 GB."
    },
    {
      title: "Add Kali to VirtualBox",
      body: [
        "The .vbox file describes the machine (memory, CPU, network). The .vdi file is its virtual hard disk.",
        "In VirtualBox Manager, click the <strong>Machine</strong> menu and choose <strong>Add...</strong> (or press <strong>Ctrl + A</strong>). Browse to the extracted folder, click the <strong>.vbox</strong> file, and click <strong>Open</strong>."
      ],
      expect: "A machine named kali-linux-2026.x-virtualbox-amd64 (or similar) appears in the list on the left, with the status Powered Off."
    },
    {
      title: "Set memory, CPUs, network, and clipboard",
      body: [
        "Click the Kali machine once, then click <strong>Settings</strong> (the orange gear).",
        "<strong>System</strong> &gt; <strong>Motherboard</strong>: set <strong>Base Memory</strong> to <strong>4096 MB</strong> if your PC has 8 GB of RAM or more. If your PC has less than 8 GB, use 2048 MB and tell your instructor.",
        "<strong>System</strong> &gt; <strong>Processor</strong>: set <strong>Processors</strong> to <strong>2</strong>.",
        "<strong>Network</strong> &gt; <strong>Adapter 1</strong>: make sure it is enabled and <strong>Attached to: NAT</strong>. NAT (Network Address Translation) lets Kali reach the internet through your PC while keeping Kali hidden from other devices on your home or school network.",
        "<strong>General</strong> &gt; <strong>Features</strong> (called Advanced in some versions): set <strong>Shared Clipboard</strong> to <strong>Bidirectional</strong>. This lets you copy commands from this page and paste them into Kali.",
        "Click <strong>OK</strong> to save."
      ],
      expect: "The Kali machine's summary on the right shows 4096 MB of memory, 2 processors, and a NAT network adapter.",
      tip: "If you cannot find a setting, look for a Basic/Expert switch at the top of the Settings window and choose Expert. It shows every option."
    },
    {
      title: "Start Kali and log in",
      body: [
        "Select the Kali machine and click the green <strong>Start</strong> arrow. A new window opens and Kali boots. This can take a minute the first time.",
        "At the login screen, the username is <strong>kali</strong> and the password is <strong>kali</strong>. Every Kali download in the world uses that same default password, which is exactly why you will change it in the next step.",
        "When you click inside the Kali window, it takes over your mouse and keyboard. To give them back to Windows, press the <strong>Right Ctrl</strong> key (VirtualBox calls it the Host key)."
      ],
      expect: "The Kali desktop with a dark background, a menu at the top left, and a toolbar along the top.",
      tip: "If the window shows an error about VT-x, AMD-V, or a hypervisor, go to the troubleshooting step."
    },
    {
      title: "Open a terminal and change the default password",
      body: [
        "A <strong>terminal</strong> is a window where you type commands. Open one by clicking the black terminal icon in the top toolbar, or by pressing <strong>Ctrl + Alt + T</strong>.",
        "The command <code>passwd</code> changes the password of the account you are logged in as. It asks for your current password (kali), then your new password twice.",
        "Linux does not show anything while you type a password. No dots, no stars. That is normal. Type carefully and press Enter.",
        "Pick a password you will remember. Write it somewhere safe outside the computer for now. You will need it for <code>sudo</code> in the next step."
      ],
      cmd: "passwd",
      expect: "passwd: password updated successfully"
    },
    {
      title: "Update Kali",
      body: [
        "Software gets security fixes all the time. Updating is the first thing you do on any new system.",
        "<code>sudo</code> runs one command as the administrator (called <strong>root</strong> in Linux). It asks for your password the first time. <code>apt</code> is Kali's package manager, the tool that installs and updates software. <code>apt update</code> downloads the latest list of available software. <code>apt -y full-upgrade</code> installs every available update and answers yes to the questions. The <code>&amp;&amp;</code> between them means: run the second command only if the first one worked.",
        "<strong>This can take 10 to 40 minutes</strong> depending on your internet speed. Let it run. Do not close the terminal or shut down the VM while it works.",
        "When it finishes, restart Kali with the second command and log back in with your new password."
      ],
      cmd: "sudo apt update && sudo apt -y full-upgrade\nsudo reboot",
      expect: "Many lines of Get:, Unpacking, and Setting up. It ends back at your prompt without the word Error. After the reboot, you are back at the Kali login screen.",
      tip: "If a colored box appears asking a question (for example, about restarting services or keeping a configuration file), press Enter to accept the default. If you see 'Could not get lock', another update is already running in the background; wait two minutes and try again."
    },
    {
      title: "Check Guest Additions and the shared clipboard",
      body: [
        "<strong>Guest Additions</strong> are drivers that help Kali work smoothly inside VirtualBox: the screen resizes with the window, the mouse moves freely, and copy and paste work between Windows and Kali. The official Kali VirtualBox image includes them.",
        "Test 1: drag a corner of the Kali window to make it bigger. The Kali desktop should resize to fill it.",
        "Test 2: copy the command below from this page (Ctrl + C in Windows). Click in the Kali terminal and paste with <strong>Ctrl + Shift + V</strong> (in the Linux terminal, paste is Ctrl + Shift + V, not Ctrl + V). Press Enter. <code>lsmod</code> lists the drivers that are loaded, and <code>grep vbox</code> keeps only the lines with vbox in them."
      ],
      cmd: "lsmod | grep vbox",
      expect: "At least one line that starts with vboxguest. The desktop resized when you resized the window, and the paste worked.",
      tip: "If paste does not work, open the Kali window's Devices menu and set Shared Clipboard to Bidirectional. If nothing prints and the screen will not resize, run: sudo apt install -y virtualbox-guest-x11 and then sudo reboot."
    },
    {
      title: "Record your system details",
      body: [
        "Run the two commands below and keep the output for the checkpoints. <code>uname -a</code> prints details about the Linux kernel, the core of the operating system. <code>cat /etc/os-release</code> prints a file that names the operating system, and <code>| head -3</code> keeps only its first three lines. The <code>|</code> symbol is called a <strong>pipe</strong>: it sends the output of one command into the next one. You will use pipes a lot this week.",
        "To copy from the Kali terminal, highlight the text with your mouse and press <strong>Ctrl + Shift + C</strong>."
      ],
      cmd: "uname -a\ncat /etc/os-release | head -3",
      expect: "uname -a prints one long line that starts with Linux kali and ends with x86_64 GNU/Linux. The second command prints PRETTY_NAME=\"Kali GNU/Linux Rolling\", NAME=\"Kali GNU/Linux\", and a VERSION_ID line."
    },
    {
      title: "Take a snapshot named clean-install",
      body: [
        "A <strong>snapshot</strong> saves the exact state of the VM at this moment. If a later lab breaks something, you can roll back to this point in about a minute instead of rebuilding Kali from scratch.",
        "First shut Kali down cleanly with the command below and wait until the window closes.",
        "In VirtualBox Manager, click the Kali machine. Click the small menu icon (three lines or dots) to the right of its name and choose <strong>Snapshots</strong>. Click <strong>Take</strong>. Name the snapshot exactly <strong>clean-install</strong>, add a description such as 'Updated, password changed', and click <strong>OK</strong>."
      ],
      cmd: "sudo poweroff",
      expect: "The snapshot list shows clean-install, with Current State below it.",
      tip: "You can also take a snapshot while Kali is running: in the Kali window, open the Machine menu and choose Take Snapshot."
    },
    {
      title: "Troubleshooting: the most common problems",
      body: [
        "<strong>Virtualization is disabled (VT-x or AMD-V errors).</strong> The CPU feature is turned off in your PC's firmware (BIOS or UEFI). In Windows, go to <strong>Settings &gt; System &gt; Recovery &gt; Advanced startup &gt; Restart now</strong>, then <strong>Troubleshoot &gt; Advanced options &gt; UEFI Firmware Settings &gt; Restart</strong>. Look for <strong>Intel Virtualization Technology</strong> (VT-x) or <strong>SVM Mode</strong> (AMD), set it to Enabled, then save and exit (usually F10). The menus are different on every brand of PC; search the web for your model plus 'enable virtualization'.",
        "<strong>Hyper-V conflicts (Kali is very slow, or you see a green turtle icon in the VM's status bar).</strong> Windows features such as Hyper-V, Virtual Machine Platform, Windows Hypervisor Platform, and Memory Integrity take over the virtualization feature, and VirtualBox has to run on top of them. To turn them off: open <strong>Windows Security &gt; Device security &gt; Core isolation</strong> and set <strong>Memory integrity</strong> to Off; then search Start for <strong>Turn Windows features on or off</strong> and uncheck Hyper-V, Virtual Machine Platform, and Windows Hypervisor Platform. Restart the PC. If you use WSL or Docker, or if this is a work or school PC, ask your instructor first.",
        "<strong>Low disk space.</strong> The Kali disk grows as you use it. If you get disk errors, move the whole Kali folder to a drive with more space (remove the machine from VirtualBox first, move the folder, then add the .vbox again), and delete the .7z download once Kali works.",
        "<strong>'Kernel driver not installed' error.</strong> Restart Windows. If it still happens, reinstall VirtualBox by right-clicking the installer and choosing Run as administrator.",
        "<strong>A Windows on ARM laptop</strong> (for example, Snapdragon) cannot run this Kali image. Tell your instructor."
      ]
    }
  ],
  checkpoints: [
    { id: "c1", q: "Paste the output of uname -a from your Kali terminal.", kind: "paste" },
    { id: "c2", q: "Paste the output of cat /etc/os-release | head -3.", kind: "paste" },
    { id: "c3", q: "What is the exact name of the snapshot you took?", kind: "text", answer: "clean-install" },
    { id: "c4", q: "Why is it worth taking a snapshot before you start doing labs in Kali?", kind: "choice",
      opts: [
        "It makes the virtual machine run faster",
        "It saves the VM's exact state, so you can roll back in minutes if an update or a lab breaks something",
        "It backs up your whole Windows PC to the cloud",
        "It encrypts the virtual disk so nobody else can read it"
      ], answer: 1 },
    { id: "c5", q: "What does sudo do in the command sudo apt update?", kind: "choice",
      opts: [
        "It updates the sudo program itself",
        "It runs apt update with administrator (root) privileges",
        "It runs the command in the background so you can keep typing",
        "It downloads the update from a faster server"
      ], answer: 1 }
  ],
  reflection: "Your Kali VM uses NAT, so it sits behind your PC instead of directly on your network. In a few sentences: why would a security team want its practice lab kept separate from the company network? And which part of the CIA triad (confidentiality, integrity, or availability) does a snapshot help protect, and how?"
};

COURSE_LABS['1.2'] = {
  id: "1.2", week: 1, title: "Linux first steps: explore the Cedar Creek file share", mins: 45, env: "kali",
  goal: "Learn the Linux commands you will use all course by downloading a copy of Cedar Creek's IT shared drive into Kali and exploring it. Every checkpoint answer is somewhere in those files.",
  youNeed: [
    "Your Kali VM from Lab 1.1, started and logged in",
    "Internet access in Kali (the NAT adapter from Lab 1.1)",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Where am I, and what is here?",
      body: [
        "Open a terminal (Ctrl + Alt + T). The line that ends in <code>$</code> is the <strong>prompt</strong>. It shows your username (kali), the computer name (kali), and the folder you are in. The <code>~</code> symbol is short for your <strong>home folder</strong>, your personal space on this system.",
        "<code>pwd</code> (print working directory) prints the full path of the folder you are in. <code>ls</code> (list) shows what is in it. <code>ls -la</code> shows more: <code>-l</code> means long format (permissions, owner, size, date) and <code>-a</code> means all, including hidden files whose names start with a dot.",
        "Type each command and press Enter. Linux commands are case-sensitive: <code>ls</code> works, <code>LS</code> does not."
      ],
      cmd: "pwd\nls\nls -la",
      expect: "pwd prints /home/kali. ls shows folders such as Desktop, Documents, and Downloads. ls -la shows the same folders plus hidden files such as .bashrc, one per line, each with permissions like drwxr-xr-x at the start."
    },
    {
      title: "Make a workspace with mkdir and move into it with cd",
      body: [
        "<code>mkdir</code> (make directory) creates a folder. <code>cd</code> (change directory) moves you into a folder. Keeping all course files in one folder makes them easy to find later.",
        "Run the three commands below. The last <code>pwd</code> proves you moved."
      ],
      cmd: "mkdir labs\ncd labs\npwd",
      expect: "/home/kali/labs, and your prompt now shows ~/labs.",
      tip: "If mkdir says 'File exists', the folder is already there. Just run cd labs. To go back up one folder at any time, use cd .. (two dots). To jump home from anywhere, use cd by itself."
    },
    {
      title: "Download the lab pack with wget",
      body: [
        "Marcus copied some files from Cedar Creek's IT shared drive for you. <code>wget</code> downloads a file from a web address into the folder you are in.",
        "Copy the command from this page and paste it into Kali with Ctrl + Shift + V. Typing long web addresses by hand invites mistakes."
      ],
      cmd: "wget https://bo5hi.github.io/Teaching-Platform/assets/cedarcreek/cc-week1.zip\nls -l",
      expect: "A progress bar, then a line ending in 'cc-week1.zip' saved. ls -l shows cc-week1.zip, about 15 KB.",
      tip: "If wget says it cannot resolve the host, Kali has no internet. Check that the VM's network adapter is set to NAT (Lab 1.1) and that your PC is online."
    },
    {
      title: "Unpack it with unzip",
      body: [
        "A .zip file bundles many files into one. <code>unzip</code> unpacks it into the current folder. Then <code>cd</code> into the new folder and list it."
      ],
      cmd: "unzip cc-week1.zip\ncd cedarcreek-week1\nls",
      expect: "unzip prints a 'creating:' line for each folder and an 'inflating:' line for each file. ls then shows four folders (it, memos, policies, security) and README.txt.",
      tip: "If you see 'unzip: command not found', install it with sudo apt install -y unzip and run the unzip command again."
    },
    {
      title: "Read the long listing with ls -la",
      body: [
        "Run <code>ls -la</code> here. Read each line from left to right. The first character is <code>d</code> for a directory (folder) or <code>-</code> for a regular file. The next nine characters are the <strong>permissions</strong>: who can read (r), write (w), and execute (x) it. Then come the owner, the group, the size in bytes, the date, and the name.",
        "The entries <code>.</code> and <code>..</code> mean this folder and the folder above it.",
        "Copy this output into the first checkpoint."
      ],
      cmd: "ls -la",
      expect: "Seven lines after the total line: . and .., four lines starting with d (it, memos, policies, security), and one line starting with - for README.txt."
    },
    {
      title: "Print a file with cat",
      body: [
        "<code>cat</code> prints a whole file to the screen. It is perfect for short files. Read the README to learn what is in the pack."
      ],
      cmd: "cat README.txt",
      expect: "The README text, starting with CEDAR CREEK INDUSTRIES and the line COMPANY CONFIDENTIAL - TRAINING DATA."
    },
    {
      title: "Count files with a pipe and wc -l",
      body: [
        "You can list a folder without going into it: <code>ls policies</code>.",
        "<code>wc -l</code> (word count, lines) counts lines. The pipe <code>|</code> sends the output of <code>ls</code> into <code>wc -l</code>. Because <code>ls</code> prints one name per line when its output goes into a pipe, the result is the number of files. Do the same for memos."
      ],
      cmd: "ls policies\nls policies | wc -l\nls memos | wc -l",
      expect: "The names of the policy files, then a single number for each wc -l command."
    },
    {
      title: "Page through a long file with less",
      body: [
        "<code>less</code> opens a file one screen at a time, which is better than cat for long files. Inside less: <strong>Space</strong> goes down a page, <strong>b</strong> goes back a page, the arrow keys move one line, <strong>/word</strong> then Enter searches for a word, <strong>n</strong> jumps to the next match, and <strong>q</strong> quits.",
        "Open the Acceptable Use Policy. Type <code>/revised</code> and press Enter to jump to the revision date. Write it down exactly as it appears. Then press q."
      ],
      cmd: "less policies/acceptable_use_policy.txt",
      expect: "The policy fills the screen. The search highlights the Last revised line near the top.",
      tip: "Press the Tab key while typing a file or folder name and Kali completes it for you. Type less pol and press Tab, then acc and press Tab."
    },
    {
      title: "See just the start or end with head and tail",
      body: [
        "<code>head</code> prints the first 10 lines of a file and <code>tail</code> prints the last 10. Add a number to change how many, for example <code>head -3</code>.",
        "For a spreadsheet file (CSV, comma-separated values), the first line is the <strong>header</strong> that names the columns. <code>head -3</code> shows the header and the first two rows."
      ],
      cmd: "head -3 it/asset_inventory_stub.csv\ntail -3 memos/welcome_from_marcus.txt",
      expect: "The CSV header (asset,what_it_is,location,owner,classification,notes) and two asset rows, then the last three lines of Marcus's welcome note."
    },
    {
      title: "Search inside a file with grep, -i, and -n",
      body: [
        "<code>grep</code> searches for text and prints every line that contains it. It is one of the most useful tools a security analyst has.",
        "By default grep is case-sensitive. <code>-i</code> ignores case, so 'minimum' also finds 'Minimum'. <code>-n</code> adds the line number in front of each match.",
        "Find the minimum password length in the 2019 password memo, then list every line that mentions a password."
      ],
      cmd: "grep -i \"minimum\" policies/password_guidelines_2019.txt\ngrep -n -i \"password\" policies/password_guidelines_2019.txt",
      expect: "The first command prints one line that contains the minimum length. The second prints several lines, each starting with its line number and a colon."
    },
    {
      title: "Search every file at once with grep -r",
      body: [
        "<code>-r</code> (recursive) makes grep search every file in a folder and all the folders inside it. The <code>.</code> means 'the folder I am in'. Each match is printed with the file name in front of it.",
        "During your walk-through, Marcus mentioned a door being propped open with a wedge. Find the memo that talks about it. Then search the IT folder for the guest Wi-Fi network."
      ],
      cmd: "grep -r -i \"wedge\" .\ngrep -r -i \"guest\" it/",
      expect: "The first command prints one line, starting with ./memos/ and the name of the memo, then a colon and the matching sentence. The second prints the line with the guest network's SSID (the network name)."
    },
    {
      title: "Find files by name with find",
      body: [
        "grep searches inside files. <code>find</code> searches for the files themselves. <code>find . -name \"*.csv\"</code> means: starting here, find every file whose name ends in .csv. The <code>*</code> is a wildcard that matches anything, and the quotes stop the shell from expanding it too early.",
        "<code>find . -type f</code> lists every regular file. Pipe it into <code>wc -l</code> to count them all."
      ],
      cmd: "find . -name \"*.csv\"\nfind . -type f | wc -l",
      expect: "A short list of .csv file paths, each starting with ./, then a single number: the total number of files in the pack."
    },
    {
      title: "Count rows in a CSV with wc -l",
      body: [
        "Dee started an asset inventory. How many assets did she list? <code>wc -l</code> counts every line, including the header line. So the number of assets is the wc -l number <strong>minus one</strong>.",
        "Then print the file with cat and look at it closely. Notice what is missing or inconsistent (blank classifications, a question mark for an owner, the same location written different ways). You will finish this inventory in the Mock Control Audit."
      ],
      cmd: "wc -l it/asset_inventory_stub.csv\ncat it/asset_inventory_stub.csv",
      expect: "A number followed by the file name, then the full CSV."
    },
    {
      title: "Get help with man",
      body: [
        "Every standard command has a manual page. <code>man grep</code> opens the manual for grep. It works like less: Space to page down, /word to search, q to quit. Search it for <code>-c</code> and read what that option does; you will use it in Lab 1.4.",
        "For a shorter summary, most commands also accept <code>--help</code>."
      ],
      cmd: "man grep\ngrep --help | head -20",
      expect: "The GREP(1) manual page opens. After you press q, the second command prints the first 20 lines of grep's built-in help."
    }
  ],
  checkpoints: [
    { id: "c1", q: "Paste the output of ls -la run inside the cedarcreek-week1 folder.", kind: "paste" },
    { id: "c2", q: "How many files are in the policies folder?", kind: "number", answer: 4 },
    { id: "c3", q: "What is the Last revised date in the Acceptable Use Policy? Type it exactly as it appears in the file.", kind: "text",
      answer: ["2018-03-14", "3/14/2018", "03/14/2018", "March 14, 2018", "March 14 2018", "14 March 2018"] },
    { id: "c4", q: "What is the file name of the memo that mentions the door wedge?", kind: "text",
      answer: ["server_room_ac.txt", "server_room_ac", "memos/server_room_ac.txt", "./memos/server_room_ac.txt"] },
    { id: "c5", q: "What minimum password length does the 2019 password memo require (number of characters)?", kind: "number", answer: 8 },
    { id: "c6", q: "What is the SSID (network name) of Cedar Creek's guest Wi-Fi, as found with grep?", kind: "text", answer: "CC-GUEST" },
    { id: "c7", q: "How many assets are listed in it/asset_inventory_stub.csv? Do not count the header line.", kind: "number", answer: 8 },
    { id: "c8", q: "How many .csv files does find . -name \"*.csv\" list?", kind: "number", answer: 2 }
  ],
  reflection: "You just read Cedar Creek's Acceptable Use Policy, its 2019 password memo, and notes from the IT team. Pick one thing in these files that worries you as the new security analyst. Name the file, say what worries you and why, and say which control category (technical, managerial, operational, or physical) the document itself belongs to."
};

COURSE_LABS['1.3'] = {
  id: "1.3", week: 1, title: "Threat actor profiles for Cedar Creek", mins: 40, env: "browser",
  goal: "Read four short threat intelligence notes about groups and people who could attack Cedar Creek, and build a profile of each one: who they are, what they want, what they can do, and how they would get in.",
  youNeed: [
    "Lesson 1.3 (threat actors and motivations) and Lesson 1.4 (attack surface and threat vectors) finished",
    "No Kali needed: this lab is all reading and thinking",
    "About 40 minutes"
  ],
  steps: [
    {
      title: "What goes into a threat actor profile",
      body: [
        "A <strong>threat actor</strong> is a person or group that might attack an organization. Security teams profile actors so they can spend their limited time and money defending against the ones most likely to show up. Security+ describes every actor with the same attributes:",
        "<strong>Type</strong>: nation-state, organized crime, hacktivist, unskilled attacker, insider threat, or shadow IT. <strong>Internal or external</strong>: does the actor have (or had) legitimate access, or are they an outsider? <strong>Resources and funding</strong>: how much money, time, and people they have. <strong>Level of sophistication</strong>: how skilled they are, from copying public tools to writing custom malware. <strong>Motivation</strong>: why they attack.",
        "The Security+ list of motivations includes financial gain, espionage, revenge, philosophical or political beliefs, service disruption, disruption or chaos, war, ethical reasons, data exfiltration, and blackmail. <strong>In this lab, choose the actor's main reason for attacking.</strong> Data exfiltration (stealing data) and blackmail are usually <em>how</em> an actor gets what it wants, not <em>why</em> it attacks, so they are not answer choices here.",
        "For each actor you will also name the Cedar Creek <strong>asset</strong> it would most likely go after (use the asset names from the lessons, such as ENG-FS01 or FIN-LT-09, when you can) and its most likely <strong>threat vector</strong>: the path it would use to get in."
      ]
    },
    {
      title: "How to read an intelligence note",
      body: [
        "Each note below is written the way real threat intelligence is shared between companies. All four are fictional, but they are based on how real groups operate.",
        "<strong>TLP</strong> (Traffic Light Protocol) tells you who you may share the note with. TLP:GREEN means you may share it within your community. TLP:AMBER means share it only inside your organization, with people who need it. <strong>Confidence</strong> tells you how sure the source is.",
        "An <strong>ISAC</strong> (Information Sharing and Analysis Center) is a group where companies in one industry share threat information. Cedar Creek joined a regional manufacturing ISAC the week you were hired.",
        "Read each note slowly. Underline the words that tell you type, resources, motivation, target, and vector. Then answer that actor's checkpoints."
      ]
    },
    {
      title: "Note A: IRONLATCH",
      body: [
        "<strong>TLP:AMBER. Source: Heartland Manufacturing ISAC. Confidence: high.</strong>",
        "Since March 2026, a ransomware group tracked as IRONLATCH has hit at least 11 manufacturers in Missouri, Kansas, Iowa, and Nebraska. IRONLATCH runs as a business. A core team writes the ransomware, runs the payment site, and even staffs a 'support desk' for victims. Partners called affiliates break into companies and split each ransom with the core team.",
        "Affiliates get in by <strong>password spraying VPN (virtual private network) portals that do not require MFA</strong> (multifactor authentication), and through <strong>RDP</strong> (Remote Desktop Protocol) left open to the internet. Once inside, they look for backups first and destroy them. They copy engineering and customer files to their own servers, then encrypt every file server they can reach, usually on a Friday night.",
        "Victims are told to pay $400,000 to $2 million in cryptocurrency or their customers' drawings will be published on IRONLATCH's leak site. IRONLATCH does not care who the victim is. Every choice it makes is about getting paid."
      ]
    },
    {
      title: "Note B: PAPERWIRE",
      body: [
        "<strong>TLP:GREEN. Source: fraud team at Cedar Creek's bank. Confidence: high.</strong>",
        "PAPERWIRE is a loosely organized fraud ring with members in several countries. It specializes in <strong>business email compromise</strong> (BEC): emails that pretend to come from an executive or a trusted vendor and ask for a payment.",
        "PAPERWIRE uses very little malware. Its skill is research and persuasion. Members study company websites, press releases, and LinkedIn to learn who approves payments and when executives travel. They register <strong>lookalike domains</strong> one letter off from the real one, then send short, urgent emails asking Accounts Payable to wire money to a 'new vendor' or to update a vendor's bank details. The money moves through money mule accounts within hours.",
        "The domain cedarcreek-lnd.com, used in the August 19 attempt against Amanda Singh that asked for $48,750 for 'Project Northwind', was registered by the same person behind more than 40 PAPERWIRE attempts in 2026. The bank expects Cedar Creek to be targeted again."
      ]
    },
    {
      title: "Note C: TIDEGLASS",
      body: [
        "<strong>TLP:AMBER. Source: federal law enforcement notice shared through the ISAC. Confidence: moderate.</strong>",
        "TIDEGLASS is a cyber espionage group <strong>run by a foreign government</strong>. For at least six years it has stolen design data from makers of farm and construction equipment and from their suppliers. Parts that match the stolen drawings later appear from state-owned factories overseas, priced well below the original makers.",
        "TIDEGLASS is patient and well funded. It writes its own malware, has used previously unknown vulnerabilities (zero-days), and has stayed hidden inside victim networks for more than a year. It often attacks <strong>small suppliers</strong> because they are easier to break into than the big equipment makers whose designs they hold.",
        "Its usual ways in are <strong>spear phishing emails to engineers</strong> with a fake request for quote (RFQ) attached, and <strong>old, unpatched servers</strong>. It wants CAD (computer-aided design) drawings and customer specifications. It has never tried to make money from a victim directly."
      ]
    },
    {
      title: "Note D: a former engineer",
      body: [
        "<strong>Internal note, not from an intelligence feed. From Rosa Medina (HR) and Tom Becker (Engineering), shared with you by Marcus. Name withheld while HR reviews it.</strong>",
        "A design engineer with nine years at Cedar Creek resigned in October 2026 after being passed over for the lead engineer job. In his exit interview he said the company 'will find out what it lost'. A coworker says he talked about wanting Tom 'to feel it'.",
        "He knows the Engineering file shares on ENG-FS01, the CAD license server, and which customers matter most. He was a capable engineer but not an IT expert, and he has no money or team behind him.",
        "Dee told you on your walk-through that a former engineer's account was 'probably never turned off'. Nobody has checked whether his badge still works. (You will check that yourself in Lab 1.4.)"
      ]
    },
    {
      title: "Fill in the profiles",
      body: [
        "Answer the checkpoints below, six for each actor. The type, internal or external, and motivation questions are checked automatically. Your instructor reads the rest.",
        "For <strong>resources and sophistication</strong>, write one or two sentences, for example: 'Very well funded and highly skilled: custom malware, stays hidden for months.'",
        "For the <strong>target asset</strong>, name the Cedar Creek asset or process the actor would go after first and why, for example: 'FIN-LT-09, because it holds finance data.'",
        "For the <strong>vector</strong>, be specific to Cedar Creek: not just 'email', but 'a spoofed email from the CFO to Accounts Payable'."
      ],
      tip: "A former employee who still has working access is an insider threat, even though they no longer work there. What makes someone an insider is legitimate access, not a current paycheck."
    },
    {
      title: "Compare and rank",
      body: [
        "Risk depends on two things: <strong>likelihood</strong> (how likely the actor is to try, and to succeed, at Cedar Creek) and <strong>impact</strong> (how much damage it would do). A very skilled actor that is unlikely to pick Cedar Creek can be a smaller risk than a less skilled one that already tried once.",
        "Before you write the reflection, rank the four actors from biggest to smallest risk. Think about what you saw on the campus walk and in the lab pack: a VPN password on a sticky note, the August BEC attempt, an unsupported server on the Engineering network, and an account that was never turned off."
      ]
    }
  ],
  checkpoints: [
    { id: "a-type", q: "IRONLATCH: what type of threat actor is it?", kind: "choice",
      opts: ["Nation-state", "Organized crime", "Hacktivist", "Unskilled attacker", "Insider threat", "Shadow IT"], answer: 1 },
    { id: "a-io", q: "IRONLATCH: internal or external?", kind: "choice", opts: ["Internal", "External"], answer: 1 },
    { id: "a-res", q: "IRONLATCH: describe its resources and funding, and its level of sophistication.", kind: "text" },
    { id: "a-mot", q: "IRONLATCH: what is its main motivation?", kind: "choice",
      opts: ["Financial gain", "Espionage", "Revenge", "Philosophical or political beliefs", "Service disruption", "Disruption or chaos", "War", "Ethical"], answer: 0 },
    { id: "a-asset", q: "IRONLATCH: which Cedar Creek asset is it most likely to go after, and why?", kind: "text" },
    { id: "a-vector", q: "IRONLATCH: what is its most likely threat vector into Cedar Creek?", kind: "text" },

    { id: "b-type", q: "PAPERWIRE: what type of threat actor is it?", kind: "choice",
      opts: ["Nation-state", "Organized crime", "Hacktivist", "Unskilled attacker", "Insider threat", "Shadow IT"], answer: 1 },
    { id: "b-io", q: "PAPERWIRE: internal or external?", kind: "choice", opts: ["Internal", "External"], answer: 1 },
    { id: "b-res", q: "PAPERWIRE: describe its resources and funding, and its level of sophistication.", kind: "text" },
    { id: "b-mot", q: "PAPERWIRE: what is its main motivation?", kind: "choice",
      opts: ["Financial gain", "Espionage", "Revenge", "Philosophical or political beliefs", "Service disruption", "Disruption or chaos", "War", "Ethical"], answer: 0 },
    { id: "b-asset", q: "PAPERWIRE: which Cedar Creek asset or process is it most likely to go after, and why?", kind: "text" },
    { id: "b-vector", q: "PAPERWIRE: what is its most likely threat vector into Cedar Creek?", kind: "text" },

    { id: "c-type", q: "TIDEGLASS: what type of threat actor is it?", kind: "choice",
      opts: ["Nation-state", "Organized crime", "Hacktivist", "Unskilled attacker", "Insider threat", "Shadow IT"], answer: 0 },
    { id: "c-io", q: "TIDEGLASS: internal or external?", kind: "choice", opts: ["Internal", "External"], answer: 1 },
    { id: "c-res", q: "TIDEGLASS: describe its resources and funding, and its level of sophistication.", kind: "text" },
    { id: "c-mot", q: "TIDEGLASS: what is its main motivation?", kind: "choice",
      opts: ["Financial gain", "Espionage", "Revenge", "Philosophical or political beliefs", "Service disruption", "Disruption or chaos", "War", "Ethical"], answer: 1 },
    { id: "c-asset", q: "TIDEGLASS: which Cedar Creek asset is it most likely to go after, and why?", kind: "text" },
    { id: "c-vector", q: "TIDEGLASS: what is its most likely threat vector into Cedar Creek?", kind: "text" },

    { id: "d-type", q: "The former engineer: what type of threat actor is he?", kind: "choice",
      opts: ["Nation-state", "Organized crime", "Hacktivist", "Unskilled attacker", "Insider threat", "Shadow IT"], answer: 4 },
    { id: "d-io", q: "The former engineer: internal or external?", kind: "choice", opts: ["Internal", "External"], answer: 0 },
    { id: "d-res", q: "The former engineer: describe his resources and funding, and his level of sophistication.", kind: "text" },
    { id: "d-mot", q: "The former engineer: what is his main motivation?", kind: "choice",
      opts: ["Financial gain", "Espionage", "Revenge", "Philosophical or political beliefs", "Service disruption", "Disruption or chaos", "War", "Ethical"], answer: 2 },
    { id: "d-asset", q: "The former engineer: which Cedar Creek asset is he most likely to go after, and why?", kind: "text" },
    { id: "d-vector", q: "The former engineer: what is his most likely threat vector into Cedar Creek?", kind: "text" }
  ],
  reflection: "Which of the four actors is the biggest risk to Cedar Creek over the next 12 months, and why? Use likelihood and impact in your answer, point to at least one thing you saw at Cedar Creek that makes this actor's job easier, and name one control that would reduce the risk."
};

COURSE_LABS['1.4'] = {
  id: "1.4", week: 1, title: "Badge log investigation", mins: 45, env: "kali",
  goal: "Use grep, cut, sort, uniq, and pipes in Kali to investigate one week of Cedar Creek's badge door log. You will find after-hours server room visits, a badge that should not work anymore, repeated denials at the HR office, and evidence of tailgating at the loading dock.",
  youNeed: [
    "Your Kali VM, logged in",
    "The lab pack from Lab 1.2 in ~/labs/cedarcreek-week1 (if it is missing, repeat the wget and unzip steps of Lab 1.2)",
    "About 45 minutes"
  ],
  steps: [
    {
      title: "Go to the badge log",
      body: [
        "Jordan exported last week's log (Monday, November 2 to Sunday, November 8, 2026) from BADGE-CTRL, the badge access controller. Every time someone holds a badge to a reader, the controller writes one line.",
        "Open a terminal and move into the security folder of the lab pack."
      ],
      cmd: "cd ~/labs/cedarcreek-week1/security\nls -l",
      expect: "One file: badge_log.csv.",
      tip: "If cd says 'no such file or directory', go back to Lab 1.2 and run its wget and unzip steps first."
    },
    {
      title: "Look at the first lines with head",
      body: [
        "Always look at a log before you analyze it. <code>head</code> shows the first 10 lines.",
        "The header names five columns, separated by commas: <strong>timestamp</strong>, <strong>badge_id</strong>, <strong>name</strong>, <strong>door</strong>, and <strong>result</strong>. The timestamp is written as date, the letter T, then the time on a 24-hour clock: <code>2026-11-02T05:32:16</code> means November 2, 2026 at 5:32:16 AM, and 23:14 would be 11:14 PM.",
        "The doors are listed in policies/badge_request_procedure.txt. The result is <strong>GRANTED</strong> (the door unlocked), <strong>DENIED</strong> (the badge is not allowed on that door), or <strong>ALARM</strong> (the door stayed open longer than 30 seconds)."
      ],
      cmd: "head badge_log.csv",
      expect: "The header line, then nine rows from early Monday morning. All of them are PLANT-GATE entries: first-shift workers and the plant manager driving into the plant yard."
    },
    {
      title: "Count the lines with wc -l",
      body: [
        "<code>wc -l</code> counts lines. One of those lines is the header, so the number of badge events is one less than the number wc -l prints. Write down the exact number wc -l prints for the first checkpoint."
      ],
      cmd: "wc -l badge_log.csv",
      expect: "A number followed by badge_log.csv."
    },
    {
      title: "Pull out one column with cut",
      body: [
        "<code>cut</code> pulls columns out of each line. <code>-d,</code> says the columns are separated by commas (the delimiter). <code>-f4</code> says to keep field 4, the door. Pipe it into <code>head</code> so you only see the first few lines."
      ],
      cmd: "cut -d, -f4 badge_log.csv | head",
      expect: "The word door (from the header), then a list of door names, one per line."
    },
    {
      title: "Count each value with sort and uniq -c",
      body: [
        "<code>uniq -c</code> collapses repeated lines into one and puts a count in front. It only collapses lines that are next to each other, so you always <code>sort</code> first to put identical lines together.",
        "The first command counts events per door. The second counts each result. Ignore the one line for the header word (door or result)."
      ],
      cmd: "cut -d, -f4 badge_log.csv | sort | uniq -c\ncut -d, -f5 badge_log.csv | sort | uniq -c",
      expect: "Six doors with a count in front of each, LOBBY-IN the busiest and SERVER-ROOM the quietest. Then three results: ALARM, DENIED, and GRANTED, each with its count."
    },
    {
      title: "Find the denials with grep -c and sort -nr",
      body: [
        "<code>grep -c DENIED</code> counts the lines that contain DENIED instead of printing them. That number goes in a checkpoint.",
        "Next, find out who was denied and where. The second command keeps only DENIED lines, cuts out fields 3 and 4 (name and door), counts them, and sorts the counts. <code>sort -nr</code> sorts numerically (<code>-n</code>) in reverse order (<code>-r</code>), so the biggest count is on top.",
        "A few scattered denials are normal: a badge read badly, or someone tried the wrong door once. One person denied at the same sensitive door again and again is not normal."
      ],
      cmd: "grep -c DENIED badge_log.csv\ngrep DENIED badge_log.csv | cut -d, -f3,4 | sort | uniq -c | sort -nr",
      expect: "A single number, then a ranked list. The top line is one person at HR-OFFICE with far more denials than anyone else.",
      tip: "Look at that person's denials with grep \"HR-OFFICE\" badge_log.csv | grep DENIED and check the times. HR is usually at lunch from noon to about 1 PM."
    },
    {
      title: "Filter by time: what counts as after hours?",
      body: [
        "For this investigation, <strong>after hours</strong> means 8:00 PM to 5:59 AM. You can match those hours with a pattern called a <strong>regular expression</strong>. <code>grep -E</code> turns on extended regular expressions.",
        "The pattern <code>T(2[0-3]|0[0-5]):</code> means: the letter T, then either 2 followed by a digit from 0 to 3 (hours 20 to 23) or 0 followed by a digit from 0 to 5 (hours 00 to 05), then a colon. It matches the hour part of every after-hours timestamp and nothing else.",
        "Count all after-hours events. The plant runs two shifts and has a night guard, so many of these are normal: first shift drives in before 6 AM, second shift works until 11 PM, and the guard patrols at night."
      ],
      cmd: "grep -E 'T(2[0-3]|0[0-5]):' badge_log.csv | wc -l",
      expect: "A number in the dozens. On its own it tells you very little, which is why you narrow it down next."
    },
    {
      title: "After-hours visits to the server room",
      body: [
        "The server room holds DC01, FS-HR01, ENG-FS01, and the backup tapes. Nobody should be in there at night without a reason IT knows about.",
        "The first command keeps SERVER-ROOM lines, then keeps the after-hours ones. The second adds <code>cut</code>, <code>sort</code>, <code>uniq -c</code>, and <code>sort -nr</code> to count after-hours entries per badge. Two of the badges belong to IT staff; Marcus confirms they were doing planned evening work. One badge does not belong to a person at all.",
        "Then follow the top badge's whole trail: run <code>grep</code> with its badge ID, for example <code>grep B1011 badge_log.csv</code> (that one is Dee's badge; use the ID you found). Finally, read Jordan's memo about server room access with the last command."
      ],
      cmd: "grep SERVER-ROOM badge_log.csv | grep -E 'T(2[0-3]|0[0-5]):'\ngrep SERVER-ROOM badge_log.csv | grep -E 'T(2[0-3]|0[0-5]):' | cut -d, -f2,3 | sort | uniq -c | sort -nr\ncat ../memos/badge_access_list.txt",
      expect: "A short list of late-night SERVER-ROOM entries, then a ranked count with one badge clearly on top. That badge's trail shows a LOBBY-IN entry a minute or two before each SERVER-ROOM entry, always late at night. Jordan's memo explains what that badge is and why nobody knows who has it."
    },
    {
      title: "Least privilege: who actually uses the server room?",
      body: [
        "Jordan says 23 badges can open SERVER-ROOM. Marcus thinks only 4 people need to. <strong>Least privilege</strong> means giving each person only the access their job needs.",
        "<code>sort -u</code> sorts and keeps only unique lines, so this pipeline lists each badge that got into the server room at least once this week. Pipe it into <code>wc -l</code> to count them."
      ],
      cmd: "grep SERVER-ROOM badge_log.csv | grep GRANTED | cut -d, -f2,3 | sort -u\ngrep SERVER-ROOM badge_log.csv | grep GRANTED | cut -d, -f2,3 | sort -u | wc -l",
      expect: "A short list of badge IDs and names, then the count. Compare it with the 23 badges on the access list."
    },
    {
      title: "Check badges of people who have left",
      body: [
        "When someone leaves a company, all of their access should be removed on their last day. This is called <strong>deprovisioning</strong>. Rosa from HR sent IT a list of October departures. Read it, then search the log for each name. <code>grep -c</code> prints 0 when a name never appears.",
        "Any badge activity after a person's last day means their badge was never disabled. Note which doors it opened and at what times."
      ],
      cmd: "cat ../memos/hr_staff_changes_october.txt\ngrep -c \"Lori Vance\" badge_log.csv\ngrep -c \"Brian Kessler\" badge_log.csv\ngrep -c \"Hector Ruiz\" badge_log.csv",
      expect: "Rosa's memo, then a count for each name. Two of the names print 0. One does not. Run grep with that name (without -c) to see the rows."
    },
    {
      title: "Door held open alarms",
      body: [
        "An ALARM row means a door stayed open longer than 30 seconds. Alarm rows have the badge ID NONE, because the controller cannot tell who walked through an open door.",
        "The first command counts alarms per door. The second shows the server room alarms. Compare their times with Dee's memo about the server room air conditioning (memos/server_room_ac.txt)."
      ],
      cmd: "grep ALARM badge_log.csv | cut -d, -f4 | sort | uniq -c\ngrep SERVER-ROOM badge_log.csv | grep ALARM",
      expect: "Alarms on two doors, DOCK-SIDE and SERVER-ROOM. The server room alarms are all on weekday afternoons, when Dee wedges the door open."
    },
    {
      title: "Tailgating at the dock",
      body: [
        "<strong>Tailgating</strong> is when someone follows a person with a badge through a door without badging in themselves. A badge log cannot record the person who did not badge, so you have to look for clues.",
        "<code>grep -B1</code> prints each matching line plus the one line Before it. Here you first keep only DOCK-SIDE lines, then show each alarm together with the last badge swipe at that door. grep puts <code>--</code> between groups.",
        "Read the time gap in each pair. Most alarms come many minutes after the last swipe: nobody badged, the door was simply propped open (the side door the smokers use). <strong>One alarm comes less than a minute after a single swipe.</strong> One person badged, and the door then stayed open more than 30 seconds: long enough for more people to walk in on that one badge. That is the pattern tailgating leaves in a log, and it matches what Marcus saw on the walk when a person in a delivery uniform followed an employee into the plant.",
        "The log tells you when it happened and whose badge opened the door. To find out who followed, you would need the dock camera footage for that exact minute."
      ],
      cmd: "grep DOCK-SIDE badge_log.csv | grep -B1 ALARM",
      expect: "Pairs of lines separated by --. In each pair, the first line is a GRANTED swipe at DOCK-SIDE and the second is the DOOR HELD OPEN alarm. Only one pair is less than a minute apart."
    },
    {
      title: "Save your evidence to a file",
      body: [
        "Findings need evidence. The <code>&gt;</code> symbol sends a command's output into a file instead of the screen (and replaces the file if it already exists). <code>&gt;&gt;</code> adds to the end of a file instead.",
        "Save the after-hours server room entries and the dock alarm pairs to one evidence file in your labs folder, then print it to check it. You can quote it in the Mock Control Audit."
      ],
      cmd: "grep SERVER-ROOM badge_log.csv | grep -E 'T(2[0-3]|0[0-5]):' > ~/labs/badge_evidence.txt\ngrep DOCK-SIDE badge_log.csv | grep -B1 ALARM >> ~/labs/badge_evidence.txt\ncat ~/labs/badge_evidence.txt",
      expect: "The after-hours server room lines, followed by the dock alarm pairs."
    }
  ],
  checkpoints: [
    { id: "c1", q: "What number does wc -l badge_log.csv print?", kind: "number", answer: 684 },
    { id: "c2", q: "How many DENIED rows are in the log? (grep -c DENIED)", kind: "number", answer: 25 },
    { id: "c3", q: "Whose badge was denied at HR-OFFICE the most times? Give the name as it appears in the log.", kind: "text", answer: ["Ryan Doyle", "Doyle", "B1076"] },
    { id: "c4", q: "Which badge ID has the most after-hours (8:00 PM to 5:59 AM) SERVER-ROOM entries?", kind: "text", answer: ["B9003", "IT SPARE 3"] },
    { id: "c5", q: "How many after-hours SERVER-ROOM entries does that badge have?", kind: "number", answer: 5 },
    { id: "c6", q: "How many different badges were GRANTED into SERVER-ROOM during the week?", kind: "number", answer: 6 },
    { id: "c7", q: "What is the name on the badge that was still used after its owner left Cedar Creek?", kind: "text", answer: ["Brian Kessler", "Kessler", "B2047"] },
    { id: "c8", q: "How many ALARM rows are there at DOCK-SIDE?", kind: "number", answer: 12 },
    { id: "c9", q: "On what date did the tailgating alarm (the one less than a minute after a swipe) happen? Use the format YYYY-MM-DD.", kind: "text", answer: ["2026-11-04", "11/04/2026", "11/4/2026", "November 4, 2026", "Nov 4, 2026"] },
    { id: "c10", q: "Paste the ranked output of your after-hours server room pipeline (the one ending in sort -nr).", kind: "paste" }
  ],
  reflection: "Pick the one badge log finding you would put at the top of your Mock Control Audit. Describe the evidence (the command you ran and what it showed), explain the risk in plain words that Greg Palmer would understand, and recommend a control that would fix it. Name the control's category (technical, managerial, operational, or physical) and type (preventive, deterrent, detective, corrective, compensating, or directive)."
};
