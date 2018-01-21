 obj=browser("OrangeHRM").Page("OrangeHRM").WebTable("Date").RowCount
 msgbox obj
obj2=browser("OrangeHRM").Page("OrangeHRM").WebTable("Date").ColumnCount(obj)
msgbox obj2
set obj3=browser("OrangeHRM").Page("OrangeHRM").WebTable("Date").ChildItem(2,2,"Link",0)
obj3.click
Set obj5=description.Create
obj5("micclass").value="Link"
Set obj6=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obj5)
obj7=obj6.count
msgbox obj7
For i=0 to obj7-1
	obj8=obj6(i).GetRoProperty("name")
	print obj8
	If (obj8=Logout) Then
			obj6(i).click
	else

	End If
Next
