Set dia=description.Create
dia("text").value="Login"
Set Ana=description.Create
Ana("Attached Text").value="Agent Name:"
Set Pwd=description.Create

Pwd("Attached Text").value="Password:"
Set But=description.Create
But("text").value="Ok"
Set Wc=description.Create
Wc("text").value="Flight Reservation"
Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
Dialog(dia).WinEdit(Ana).Set "lakshmi"
dialog(dia).WaitProperty"text",2
Dialog(dia).winEdit(Pwd).Set "mercury"
wait(10)
Dialog(dia).winButton(But).Click
Set obj=CreateObject("Wscript.shell")
obj.Popup "success",2

Window(Wc).Close




