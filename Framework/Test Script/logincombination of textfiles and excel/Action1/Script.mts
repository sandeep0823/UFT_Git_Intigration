Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\ex1")
obj.CreateTextFile("E:\ex1\g.txt")
Set obj2=obj.CreateTextFile("E:\ex1\g.txt")
obj2.WriteLine"sree"
obj2.WriteLine"mercury"
Set obj3=obj.OpenTextFile("E:\ex1\g.txt")
obj4=obj3.ReadLine
obj5=obj3.ReadLine
dialog("Login").WinEdit("Agent Name:").Set obj4
dialog("Login").WinEdit("Password:").Set obj5
dialog("Login").WinButton("OK").Click
If window("Flight Reservation").Exist Then
	obj2.WriteLine"pass"
	obj6=obj3.ReadLine
End If
obj.CopyFile"E:\ex1\g.txt","E:\ex1\g.xls"
Set objj=createObject("Excel.Application")
objj.Workbooks.Add
objj.Visible=true
Set objj1=objj.ActiveSheet
objj1.cells(1,1)="Agent Name"
set objj2=objj1.cells(1,1)
objj2.font.color=vbred
set objj3=objj1.cells(1,2)
objj3.font.color=vbred
set objj4=objj1.cells(1,3)
objj4.font.color=vbred
objj1.cells(1,2)="Password"
objj1.cells(1,3)="Result"
Set objj2=objj.ActiveSheet
objj2.cells(2,1)=obj4
objj2.cells(2,2)=obj5
objj2.cells(2,3)=obj6
objj.ActiveWorkbook.SaveAs"data.xls"
