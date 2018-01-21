



obj=browser("OrangeHRM").Page("OrangeHRM").WebTable("Username").RowCount
msgbox obj

	obj2=browser("OrangeHRM").Page("OrangeHRM").WebTable("Username").ColumnCount(obj)
	
For i=1 to obj2
obj4=browser("OrangeHRM").Page("OrangeHRM").WebTable("Username").GetCellData(obj,i)
rem obj3=browser("OrangeHRM").Page("OrangeHRM").WebTable("Username").GetCellData(i,obj2)
msgbox obj4
	
Next