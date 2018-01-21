Public Function Login(UName,Pwd)
   Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"ialog
   Dialog("Login").winEdit("Agent Name:").Set "sreee"
   Dialog("Login").WinEdit("Password:").Set "mercury"
   Dialog("Login").WinButton("OK").Click 
   window("Flight Reservation").Close
End Function
