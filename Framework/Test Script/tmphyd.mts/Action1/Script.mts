Function Login()
	 Datatable.AddSheet "AgentNames"
	 Datatable.ImportSheet"E:\srinew\Folder\Test Data\Input.xls.xls","AgentNames","AgentNames"
	 RowCount=Datatable.GetSheet("AgentNames").GetRowCount
	 For i=1 To RowCount  step 1
		 Datatable.SetCurrentRow(i)
		 Aname=datatable.Value("AgentName","AgentNames")
		 Pwd=datatable.Value("Password","AgentNames")
		 Systemutil.Run Environment.Value("Url")
		 Dialog("Login").WinEdit("Agent Name:").Set Aname
		 Dialog("Login").WinEdit("Password:").Set Pwd
		 Dialog("Login").WinButton("OK").Click
		 If window("Flight Reservation").Exist Then
			 Datatable.Value("Result","AgentNames")="pass"
			 else
			 Datatable.Value("Result","AgentNames")="fail"
		 End If
		 Datatable.ExportSheet"E:\srinew\Folder\Test Log\Result.xls.xls","AgentNames" 


	 Next
  End Function
  'Call Login()
  '-----------------------------------------------------------------------------
  Function Insert_Order()
	 Datatable.AddSheet "InsertOder"
	 Datatable.ImportSheet"E:\srinew\Folder\Test Data\Input.xls.xls","InsertOrder","InsertOrder"
	 RowCount=Datatable.GetSheet("InserOrder").GetRowCount
	 For i=1 To RowCount step 1
		 Datatable.SetCurrentRow(i)

Window("Flight Reservation").WinMenu("Menu").Select "File;New Order"
Window("Flight Reservation").ActiveX("MaskEdBox").Type  @@ hightlight id_;_132682_;_script infofile_;_ZIP::ssf1.xml_;_
Datatable.Value("Date","InsertOrder")
Window("Flight Reservation").WinComboBox("Fly From:").Select  @@ hightlight id_;_198214_;_script infofile_;_ZIP::ssf2.xml_;_
Datatable.Value("FlyFrom","InsertOrder"")
Window("Flight Reservation").WinComboBox("Fly To:").Select  @@ hightlight id_;_2557262_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_394300_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select 0 @@ hightlight id_;_198042_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_590736_;_script infofile_;_ZIP::ssf6.xml_;_
window("Flight Reservation").WinEdit("Name:").Set Datatable.Value("Name","InsertOrder")
Window("Flight Reservation").WinEdit("Tickets:").Set @@ hightlight id_;_394554_;_script infofile_;_ZIP::ssf7.xml_;_
Datatable.Value("Tickets:","InsertOrder")
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_198202_;_script infofile_;_ZIP::ssf9.xml_;_
window("Flight Reservation").ActiveX("Threed Panel Control").WaitProperty "text","Insert Done...",20000
StrMsg=window("Flight Reservation").ActiveX("Threed Panel Control").GetROProperty("text")
If StrMsg="Insert Done..." Then
	Datatable.Value("Result","InsertOrder")="Pass"
	else
	Datatable.Value("Result","InsertOrder")="Fail"
End If
	 Next
	 Datatable.ExportSheet"E:\srinew\Folder\Test Log\Result.xls.xls","InsertOrder"
  End Function
Call Insert_Order()

