Public Function Login(Url,Aname,Pwd)
	Systemutil.Run Environment.Value(Url)
	Dialog("Login").WinEdit("Agent Name:").Set Environment.Value(Aname)
	wait(10)
	Dialog("Login").WinEdit("Password:").Set Environment.Value(Pwd)
	wait(10)
	Dialog("Login").WinButton("OK").Click
	Set obj=createObject("wscript.shell")

	If window("Flight Reservation").Exist Then
		obj.Popup "success",2
		else
		obj.Popup "fail",2

	End If
	window("Flight Reservation").Close
 End Function