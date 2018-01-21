
Set dia=description.Create
dia("text").value="Login"
Set Ana=description.Create
Ana("attached text").value="Agent Name:"
Set Pwd=description.Create
Pwd("attached text").value="Password:"
Set but=description.Create
but("text").value="Ok"
Set Wc=description.Create
Wc("text").value="Flight Reservation"
Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
Dialog(dia).WinEdit(Ana).Set "lakshmi"
dialog(dia).winEdit(Pwd).Set "mercury"
dialog(dia).winButton(but).Click
window(Wc).Close





