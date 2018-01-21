
Set obj=createObject("scripting.FileSystemObject")
If obj.FileExists("E:\sr123\s123") Then
obj.DeleteFile("E:\sr123\s123")
'obj5=obj.CopyFile("E:\sr123\s123","E:\sr123\s124")
' set obj6=obj.OpenTextFile("E:\sr123\s124")
' obj7=obj6.ReadAll
' msgbox obj7
 else
 obj.CreateFolder("E:\sr123")
obj.CreateTextFile("E:\sr123\s123")
Set obj2=obj.CreateTextFile("E:\sr123\s123")
obj2.Write "sree"
obj2.WriteLine "sree2"
obj2.WriteBlankLines 5
obj2.Write "hai"
Set obj3=obj.OpenTextFile("E:\sr123\s123")
obj4=obj3.ReadLine 
msgbox obj4	
End If
