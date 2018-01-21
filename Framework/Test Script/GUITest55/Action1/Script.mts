Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\sre")
obj.CreateTextFile("E:\sre\sre1.txt")
Set obj2=obj.CreateTextFile("E:\sre\sre1.txt")
obj2.WriteLine"Admin"
obj2.WriteLine"  admin"
Set obj3=obj.OpenTextFile("E:\sre\sre1.txt")
obj4=obj3.ReadLine
obj5=obj3.ReadLine
msgbox obj5

browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set 
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set 
browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
Set obja=description.Create
obja("micclass").value="Link"
Set objb=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obja)
objc=objb.count
For i=0 to objc-1
	objd=objb(i).GetRoProperty("name")
	print objd
	If (objd="Admin") Then
		objb(i).click
		
	End If
Next