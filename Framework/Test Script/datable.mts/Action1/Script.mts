Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
Dialog("Login").WinEdit("Agent Name:").Set DataTable("Anm", dtGlobalSheet) 
Dialog("Login").WinEdit("Password:").Set DataTable("pwd", dtGlobalSheet)
Dialog("Login").WinButton("OK").Click
wait(10)
Set obj=createObject("wscript.shell")
obj.Popup "sucess",2
window("Flight Reservation").Close


