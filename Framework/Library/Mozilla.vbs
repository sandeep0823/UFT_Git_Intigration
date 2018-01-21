Public Function Log( , )
   Systemutil.Run"C:\Program Files\Mozilla Firefox\firefox.exe"
   window("Mozilla Firefox").WaitProperty "text",30
   If window("Mozilla Firefox").Exist Then
	   Set obj=CreateObject("wscript.shell")
	   obj.Popup "pass",2
	   else
	   Set obj1=createObject("wscript.shell")
	   obj1.Popup "Fail",2
   End If
   window("Mozilla Firefox").Close
End Function

