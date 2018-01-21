Set obj=description.Create
obj("micclass").value="WebTable"
Set obj2=browser("OrangeHRM").Page("OrangeHRM").WebTable("Username")
obj3=obj2.GetROProperty("Rows")
msgbox obj3
obj4=obj2.GetROProperty("cols")
msgbox obj4
 obj11=obj2.GetRowWithCellText("hajri")
msgbox obj11