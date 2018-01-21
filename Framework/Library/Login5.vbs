Function Login(strurl,struid,strpwd)
	Systemutil.Run strurl
	Dialog("Login").WinEdit("Agent Name:").Set struid
	Dialog("Login").WinEdit("Password:").Set strpwd
	Dialog("Login").WinButton("OK").Click
	If window("Flight Reservation").Exist Then
		Login="pass"
		else
		Login="fail"
	End If
End Function