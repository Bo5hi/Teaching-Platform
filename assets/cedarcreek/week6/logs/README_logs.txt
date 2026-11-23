Log exports for the Week 6 labs (times are Cedar Creek local time, Central)

vpn_auth.log       FW-CORE VPN sign-ins, Fri 11 Dec 18:00 to Sun 13 Dec 23:59 (Lab 6.3)
                   Profile CC-LEGACY only: domain password alone, no MFA. Any VPN-Users
                   member can use it. CC-REMOTE sign-ins (certificate + push) are in
                   a separate log and are not part of this export.
                   Lockout policy: 10 failed passwords locks an account for 30 minutes.
                   The VPN accepts a username or an email address.
message_trace.csv  Microsoft 365 message trace, Thu 10 Dec (Lab 6.7)
fw_web.log         FW-CORE web filter log, Thu 10 Dec, office network 10.20.0.0/16 (Lab 6.7)
m365_audit.csv     Microsoft 365 audit log: mailbox and SharePoint activity, Thu 10 Dec (Lab 6.7)
m365_signins.csv   Microsoft 365 sign-in log, Thu 10 Dec (Lab 6.7)
                   198.51.100.24 is Cedar Creek's own internet address.
