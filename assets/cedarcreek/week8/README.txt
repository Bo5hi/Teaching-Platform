CEDAR CREEK INDUSTRIES
Incident CC-IR-2026-01 - evidence pack - Week 8 lab pack
COMPANY CONFIDENTIAL - TRAINING DATA

Overnight on Wednesday, December 23, 2026, files on the engineering file
server ENG-FS01 were encrypted by ransomware. This pack holds the logs and
evidence the IT team collected that morning.

Cedar Creek Industries and every person, address, and system named in
these files are fictional. They were made for MCCoE training labs.
All IP addresses are from ranges reserved for documentation and testing.
No file in this pack is malware.

What is inside
--------------
notes/      Marcus's handoff email and Dee's backup status note
logs/       fw-core_vpn.log       VPN logins and firewall changes (UTC)
            windows_security.csv  Windows security events (local time)
            edr_eng-fs01.csv      EDR events from ENG-FS01 (local time)
            fw-core_egress.csv    Outbound traffic through FW-CORE (UTC)
it/         A copy of the NETLOGON scripts every user runs at logon
evidence/   Triage files from ENG-FS01, their hashes, and the custody sheet

Lab 8.2 walks you through the investigation. Lab 8.3 uses your findings
to write the incident report.
