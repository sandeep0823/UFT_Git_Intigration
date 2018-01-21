Set obj=createObject("Excel.Application")
obj.Workbooks.Add
obj.Visible=true
Set obj2=obj.ActiveSheet
obj2.cells(1,1)="Admin"
obj2.cells(1,2)="admin"
obj3=obj2.cells(1,1)
obj4=obj2.cells(1,2)
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set obj3
browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set obj4
browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
ob9=browser("OrangeHRM").Page("OrangeHRM").GetROProperty("text")
msgbox obj9