Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\ex")
obj.CreateTextFile("E:\ex\t.txt")
Set obj2=obj.CreateTextFile("E:\ex\t.txt")
obj2.WriteLine"sree"
obj2.WriteLine"mercury"
set obj3=obj.OpenTextFile("E:\ex\t.txt")
obj4=obj3.ReadLine 
msgbox obj4
obj5=obj3.ReadLine
msgbox obj5
dialog("Login").WinEdit("Agent Name:").Set obj4
dialog("Login").WinEdit("Password:").Set obj5
dialog("Login").WinButton("OK").Click
If window("Flight Reservation").Exist Then
obj2.WriteLine "success"
	
End If