@echo off
rem Maps department drives at logon. Written 2017. Do not edit without asking IT.
rem Fixed the HR mapping after the server move - DO
net use H: \\FS-HR01\Company /persistent:no
net use P: \\ENG-FS01\Drawings /persistent:no
rem Older PCs lose the mapping, so map as the IT account:
net use S: \\ENG-FS01\Scans /user:CEDARCREEK\ccadmin [PASSWORD REMOVED FROM LAB PACK] /persistent:no
exit
