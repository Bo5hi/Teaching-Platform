CEDAR CREEK INDUSTRIES
Weekend log exports - Week 7 lab pack
COMPANY CONFIDENTIAL - TRAINING DATA

What this is
------------
Marcus Reyes exported these logs on Monday morning, 2026-12-21, so you can
review the weekend before the 10:00 IT meeting. They cover Friday 2026-12-18
16:00 to Sunday 2026-12-20 23:59. Start with memos/monday_note_from_marcus.txt.

Cedar Creek Industries and every person, host, account and address in these
files are fictional. Every outside IP address uses a range reserved for
documentation (192.0.2.x and 203.0.113.x), and outside names ending in
.example are reserved too, so nothing here points at a real system.

What is inside
--------------
logs/fw-core.log        Every connection FW-CORE allowed or denied between the
                        internet and Cedar Creek. One line per connection.
logs/ips-alerts.log     Alerts from FW-CORE's intrusion prevention module.
logs/dns-queries.log    DNS lookups the office PCs sent to DC01.
logs/edr-alerts.csv     Alerts from the EDR console.
logs/dc01-auth.csv      Sign-in events DC01 recorded for office PCs (10.20.0.0/16).
it/dhcp_leases.csv      Which office PC had which IP address this weekend.
it/patch_status.csv     This morning's report from the patch console.
memos/                  Notes from Marcus and Dee.

Times
-----
All times are Cedar Creek local time. Most files write them as
2026-12-19T02:10:03. The IPS writes them as 12/19/2026-02:10:03.123456.

How to use it
-------------
Lab 7.1 uses logs/fw-core.log and it/dhcp_leases.csv.
Lab 7.2 uses every file in logs/.
Lab 7.3 uses it/patch_status.csv and memos/patch_report_note.txt.
