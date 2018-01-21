Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\sree")
set obj8=obj.CreateTextFile("E:\sree\sri.xls")
Set obj1=description.Create
obj1("micclass").value="Link"
Set obj3=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obj1)
obj4=obj3.count
For i=0 to obj4-1
	obj9=obj3(i).GetRoProperty("name")
	obj8.WriteLine obj9
	
	
Next