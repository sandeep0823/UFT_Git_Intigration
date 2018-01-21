Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
If dialog("Login").Exist Then
	Reporter.ReportEvent micPass, "verifying login dialog box","login Dialog is Displayed"
	else
	Reporter.ReportEvent micFail,"verifying Login Dialog box","login Dialog is Not displayed"
End If
dialog("Login").WinEdit("Agent Name:").Set "sree"
dialog("Login").WinEdit("Password:").Set "mercury"
dialog("Login").WinButton("OK").Click
If window("Flight Reservation").Exist Then
	Set obj=createObject("wscript.shell")
	obj.Popup "pass",2
	else
	Set obj1=createObject("wscript.shell")
	obj1.Popup "fail",2
End if
Window("Flight Reservation").ActiveX("MaskEdBox").Type "020216" @@ hightlight id_;_656742_;_script infofile_;_ZIP::ssf13.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Denver" @@ hightlight id_;_394740_;_script infofile_;_ZIP::ssf14.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "London" @@ hightlight id_;_394736_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_591292_;_script infofile_;_ZIP::ssf16.xml_;_
If window("Flight Reservation").WinButton("FLIGHT").Exist Then 
	msgbox "Success"
	else
	msgbox "not Success"	
End If
 @@ hightlight id_;_656894_;_script infofile_;_ZIP::ssf21.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "20263   DEN   11:12 AM   LON   06:23 PM   AA     $112.20" @@ hightlight id_;_722516_;_script infofile_;_ZIP::ssf22.xml_;_
window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click
window("Flight Reservation").WinEdit("Name:").Set "lakshmi"
window("Flight Reservation").WinEdit("Tickets:").Set "2"
window("Flight Reservation").WinRadioButton("Economy").Set
window("Flight Reservation").WinButton("Insert Order").Click
'window("Flight Reservation").ActiveX("Threed Panel Control").WaitProperty "text","Insert Done...",5000
wait(20)
str=window("Flight Reservation").ActiveX("Threed Panel Control").GetROProperty("text")
if str="Isert Done..." Then
	obj.Popup "Insert Done...",2
	else
	obj.Popup "Insert  not Done...",2
end If

window("Flight Reservation").WinMenu("Menu").Select("File;Open Order...")
If window("Flight Reservation").Dialog("Open Order").Exist Then
	msgbox "success"
	else
	msgbox "not success"
	
End If
window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON"
window("Flight Reservation").Dialog("Open Order").WinEdit("Edit_2").Set 2
window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click
wait(10)
window("Flight Reservation").WinButton("Update Order").Click
wait(10)
str1=window("Flight Reservation").WinButton("Update Order").GetROProperty("text")
msgbox "success"
window("Flight Reservation").Close
















