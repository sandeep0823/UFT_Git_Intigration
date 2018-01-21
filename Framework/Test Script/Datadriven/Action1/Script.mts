'Application lanuch

Sytemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"


' Adding the Sheet
datatable.AddSheet "Login"

' Import Data source to Destination
datatable.ImportSheet "E:\srinew\Folder\Test Data\sample1.xls",1,"Login"

'Count the Row's
RowCount=Datatable.GetSheet("Login").GetRowCount

'Read data by using for loop

For i=1 to RowCount
	datatable.SetCurrentRow(i)
	
	'Store Cell Data in a Variable
	txtUname=datatable.Value("AgentName","Login")
	
	TxtPwd=Datatable.Value("Password","Login")
	
	
	'Set the value in WebEdit agent Name Field
	Dialog("Login").WinEdit("Agent Name:").Set txtUname
	
	'Set the value in WebEdit PWD Name Field
	
	Dialog("Login").WinEdit("Password:").Set TxtPwd
	
	'Perform the Click Operation
	Dialog("Login").WinButton("OK").Click
Next





