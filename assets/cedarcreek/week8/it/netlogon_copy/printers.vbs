' Adds the office printers at logon
Set net = CreateObject("WScript.Network")
net.AddWindowsPrinterConnection "\\PRINT01\Office-2F"
net.AddWindowsPrinterConnection "\\PRINT01\Office-1F"
