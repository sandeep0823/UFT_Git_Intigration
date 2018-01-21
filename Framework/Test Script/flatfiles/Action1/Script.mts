   Set obj=createobject("scripting.FileSystemObject")
  If Not obj.FolderExists("D:\hai") then  
  obj.CreateFolder("D:\hai") 
  obj.CreateTextFile("D:\hai\hello.txt")
  set obj2=obj.CreateTextFile("D:\hai\hello.txt")
 obj2.Write("ai hello how are you")
 obj2.Write("sreelakshmi")
 'obj2.WriteBlankLines(2,3)
 obj2.WriteLine"sreelakshmi"
 obj2.WriteLine"ai how r u"
 'obj.CopyFile"D:\hai\hello.txt","D:\hai\hello2.txt"
 obj.CopyFolder"D:\hai","D:\hai2"
 obj.MoveFolder"D:\hai2","D:\hai3"
 obj.GetAbsolutePathName"D:\hai3"
set ob3=obj.OpenTextFile("D:\hai3\hello.txt",1)
msgbox "success"
 obj3=ob3.ReadLine 
 msgbox obj3
'obj8=obj.GetFileName
'obj9=obj.GetStandardStreame 
'msgbox obj8
'msgbox obj9
'obj10=obj.GetSpecialFolder
'msgbox obj10
  	
  End If
  	
 