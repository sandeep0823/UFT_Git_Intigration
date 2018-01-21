'****Login Function*************
Function Login(Aname,pswd)
	Dialog("Login").Activate
dialog("Login").WinEdit("Agent Name:").Set Aname
dialog("Login").WinEdit("Password:").Set Pswd
If window("Flight Reservation").Exist Then
	Reporter.ReportEvent micPass,"login succes","verify login"
	else
	Reporter.ReportEvent micFail,"login succes","verify login"
End If
End Function
'*********order***************
 Function Insert_Order(dtDate,strFly_From,strFly_To,intTofstrName,intTic)
 	window("Flight Reservation").WinMenu("Menu").Select "File;New Order"
 	window("Flight Reservation").WinObject("Date of Flight:").Type daDate
 	window("Flight Reservation").WinComboBox("Fly From:").Select strFly_From
 	window("Flight Reservation").WinComboBox("Fly To:").Select strFly_To
 	window("Flight Reservation").WinButton("FLIGHT").Click
 	msgbox "flightTable" 		
 	
 End Function
 msgbox "success"