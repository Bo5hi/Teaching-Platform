Two password exports, from Dee Ortiz.

old_parts_portal_users.csv  The retired parts-request web portal (2019-2025).
                            It stored each password as a plain MD5 hash.
new_portal_shadow.txt       The new supplier portal (2026). It stores each
                            password as a salted SHA-512 crypt hash ($6$).
                            Format: username:$6$<salt>$<hash>

Both exports are for the security review only. Delete your copies after.
