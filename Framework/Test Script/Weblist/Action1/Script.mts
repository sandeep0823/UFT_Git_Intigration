Set obj=description.Create
obj("micclass").value="WebList"
Set obj7=browser("OrangeHRM").Page("OrangeHRM").ChildObjects(obj)
obj8=obj7.count
msgbox obj8
 For i=0 to obj8-1
obj11=obj7(i).GetRoProperty("name")
msgbox obj11
If (obj11="searchSystemUser[userType]") Then
	obj7(i).select 1
	ElseIf (obj11="searchSystemUser[status]") Then
	obj7(i).select 1
	
End If
 Next