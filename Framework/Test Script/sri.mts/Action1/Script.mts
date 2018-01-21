



Set dia=Description.Create
dia("text").value="Login"
Set Ana=Description.Create
Window("Window").WinObject("Running applications").Check CheckPoint("Running applications") @@ hightlight id_;_65682_;_script infofile_;_ZIP::ssf6.xml_;_
Ana("Attached Text").value="Agent Name:"
Set Pwd=Description.Create
Pwd("Attached Text").value="Password:"
Set but=Description.Create
but("text").value="Ok"
Set Wc=Description.Create
Wc("text").value="Flight Reservation"
Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
Set obj=CreateObject("wscript.Shell")
obj.Popup "Enter AgentName",2
dialog(dia).winEdit(Ana).Set "lakshmi" @@ hightlight id_;_1574648_;_script infofile_;_ZIP::ssf1.xml_;_
obj.Popup "enter Password",3

dialog(dia).winEdit(Pwd).Set "mercury" @@ hightlight id_;_526308_;_script infofile_;_ZIP::ssf2.xml_;_
dialog(dia).winButton(but).Click @@ hightlight id_;_788370_;_script infofile_;_ZIP::ssf3.xml_;_
window(Wc).WaitProperty "text",20000 @@ hightlight id_;_657398_;_script infofile_;_ZIP::ssf4.xml_;_
window(wc).Close @@ hightlight id_;_657398_;_script infofile_;_ZIP::ssf5.xml_;_







