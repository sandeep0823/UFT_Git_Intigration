Set objFso=CreateObject("Scripting.FileSystemObject")
objFso.CreateFolder("E:\srinew\sri")
objFso.CreateTextFile("E:\srinew\sri\testing.txt")
Set objFso1=objFso.CreateTextFile("E:\srinew\sri\testing.txt")
objFso1.WriteLine"mercury"
Set objRd=objFso.OpenTextFile("E:\srinew\sri\testing.txt",1)
While objRd.AtEndOfLine=false
	User=objRd.ReadLine
	Systemutil.Run"C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
	Dialog("Login").WinEdit("Agent Name:").Set User
	wait(10)
	Dialog("Login").WinEdit("Password:").Set User
	Dialog("Login").WinButton("OK").Click
	window("Flight Reservation").Close
Wend
objRd.close
set objRd=nothing
Set objFso=nothing















