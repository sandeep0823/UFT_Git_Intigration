set obj=createObject("Excel.Application")
obj.Workbooks.Add
obj.Visible=true
Set obj1=obj.ActiveSheet
obj1.cells(1,1)="Agent Name"
obj1.cells(1,2)="PWD"
obj1.cells(1,3)="links"
Set obj2=obj.ActiveSheet
obj2.cells(2,1)="Admin"
obj2.cells(2,2)="admin"
obj3=obj2.cells(2,1)
obj4=obj2.cells(2,2)
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set obj3
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set obj4
browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click

	Set obj5=description.Create
	obj5("micclass").value="Link"
	Set obj6=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obj5)
	obj7=obj6.count
	For i=0 to obj7-1	
	obj8=obj6(i).GetRoProperty("name")
	print obj8
	obj2.cells(i+2,3)=obj8
	Next