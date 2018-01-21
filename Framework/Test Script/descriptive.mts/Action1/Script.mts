Dialog("text:=Login").Activate
Dialog("text:=Login").winEdit("attached text:=Agent Name:").Set "lakshmi"
Dialog("text:=Login").winEdit("attached text:=Password:").Set "mercury"
Dialog("text:=Login").winButton("text:=Ok").Click
Set obj=createObject("wscript.shell")
if Window("text:=Flight Reservation").Exist Then
	obj.Popup "success",2
	else
	obj.Popup "fail",2
	end if
	Window("text:=Flight Reservation").Close








