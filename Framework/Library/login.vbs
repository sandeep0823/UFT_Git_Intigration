Public function Login(UserName,Password)
   Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
   Dialog("Login").WinEdit("Agent Name:").Set UserName
   Dialog("Login").WinEdit("Password:").Set Password
   Dialog("Login").WinButton("OK").Click
   window("Flight Reservation").Close
End Function

