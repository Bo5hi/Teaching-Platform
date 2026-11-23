FW-CORE rule base export, taken 2026-11-30 08:12 by Jordan Pike.

FW-CORE checks rules from the top (rule 1) down. The FIRST rule that
matches a connection decides what happens; later rules are never read
for that connection.

Columns
  rule       order number (top = 1)
  enabled    yes = in use, no = switched off
  src_zone / src   where the connection starts
  dst_zone / dst   where it is going ("a:b>c" = public address a, port b,
                   forwarded to inside address c)
  service    ports allowed; several are separated by ;
  action     ALLOW or DENY
  log        yes = each match is written to the firewall log
  hits_90d   how many connections matched the rule in the last 90 days
