Set objFso=createobject("scripting.FileSystemObject")
objFso.CreateFolder("E:\srinew\sree")
objFso.CreateTextFile("E:\srinew\sree\test.txt")
set objFso1=objFso.createTextFile("E:\srinew\sree\test.txt")
objFso1.WriteLine"mercury"
Set objRd=objFso.OpenTextFile("E:\srinew\sree\test.txt",1)
While objRd.AtEndOfLine=false
	user=objRd.ReadLine
	Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"

	dialog("Login").WinEdit("Agent Name:").Set user
	dialog("Login").WaitProperty "text",10


	dialog("Login").WinEdit("Password:").Set user
	dialog("Login").WaitProperty "text",10
	dialog("Login").WinButton("OK").Click
	window("Flight Reservation").WaitProperty "text",10
	window("Flight Reservation").Close
wend
objRd.Close
Set objRd=nothing
Set  objFso=nothing








