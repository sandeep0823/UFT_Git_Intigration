Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\tt")
obj.CreateTextFile("E:\tt\tr.txt")
Set obj2=obj.CreateTextFile("E:\tt\tr.txt")
obj2.WriteLine"Admin"
obj2.WriteLine"admin"
Set obj3=obj.OpenTextFile("E:\tt\tr.txt")
obj4=obj3.ReadLine
obj5=obj3.ReadLine
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set obj4
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set obj5
browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
Set obk=description.Create
obk("micclass").value="Link"
Set obk1=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obk)
obk2=obk1.count
For i=0 to obk2-1
objk=obk1(i).GetRoProperty("name")
print objk	
obj2.WriteLine objk
Next


 

