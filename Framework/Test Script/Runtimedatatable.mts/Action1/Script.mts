Datatable.AddSheet "input"
datatable.ImportSheet "E:\srinew\Folder\Test Log\sample1.xls",1,"input"
RowCount=datatable.GetSheet("input").GetRowCount
For i=1 to RowCount step 1
	datatable.GetCurrentRow(i)
	Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
	Dialog("Login").WinEdit("Agent Name:").Set datatable.Value("AgentName","input")
	Dialog("Login").WinEdit("Password:").Set datatable.Value("Password","input")
	Dialog("Login").WinButton("OK").Click
	If window("Flight Reservation").Exist Then
		datatable.Value("Result","input")="Test Is Pass"
		else
		datatable.Value("Result","input")="Test is Fail"
	End If

Next
Datatable.ExportSheet"E:\srinew\Folder\Test Log\Result.xls","input"




