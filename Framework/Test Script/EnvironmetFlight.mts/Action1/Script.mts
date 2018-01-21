Systemutil.Run Environment.Value("Url")
Dialog("Login").WinEdit("Agent Name:").Set Environment.Value("Aname")
Dialog("Login").WinEdit("Password:").Set Environment.Value("Pwd")
Dialog("Login").WinButton("OK").Click
window("Flight Reservation").Close
