Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\sree123")
obj.CreateTextFile("E:\sree123\sreee.txt")
Set obj2=obj.CreateTextFile("E:\sree123\sreee.txt")
obj2.Write"hai sri"
obj2.WriteLine"hello"
obj2.WriteLine"how r u"
obj2.WriteBlankLines 3
obj2.WriteLine"its me"
If obj.FileExists("E:\sree123\sreee2.txt") Then
	obj.DeleteFile("E:\sree123\sreee2.txt")
	else
	obj.CreateTextFile("E:\sree123\sreee2.xls")
	obj.CopyFile"E:\sree123\sreee.txt","E:\sree123\sreee2.xls"
End If



