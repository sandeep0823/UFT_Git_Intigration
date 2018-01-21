Set obj=createObject("Excel.Application")
obj.Workbooks.Add
obj.Visible=true
Set obj2=obj.ActiveSheet
obj2.cells(1,1)="Agent Name"
obj2.cells(1,2)="Password"
Set obj3=obj.ActiveSheet
obj3.cells(2,1)="sree"
obj3.cells(2,2)="mercury"
obj4=obj3.cells(2,1)
msgbox obj4
obj5=obj3.cells(2,2)
msgbox obj5
dialog("Login").WinEdit("Agent Name:").Set obj4

dialog("Login").WinEdit("Password:").Set obj5
dialog("Login").WinButton("OK").Click
If window("Flight Reservation").Exist Then
	obj3.cells(2,3)="pass"
End If