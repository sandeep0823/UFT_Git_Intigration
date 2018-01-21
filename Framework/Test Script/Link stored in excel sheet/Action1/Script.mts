Set obj=createObject("Excel.Application")
obj.Workbooks.Add
obj.Visible=true
Set obj2=obj.ActiveSheet
Set obj3=description.Create
obj3("micclass").value="Link"
Set obj4=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obj3)
obj5=obj4.Count
For i=0 to obj5-1
	obj6=obj4(i).GetRoProperty("name")
	obj2.cells(i+1,1)=obj6	
	
Next