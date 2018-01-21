Systemutil.Run"C:\Program Files\Mozilla Firefox\firefox.exe"
window("Mozilla Firefox").WaitProperty "text",20
If window("Mozilla Firefox").Exist Then	
	Set obj=createObject("wscript.shell")
	obj.Popup "pass",2
	else
	 Set obj1=createObject("wscript.shell")
	 obj1.Popup "fail",3
End If
window("Mozilla Firefox").Close
















