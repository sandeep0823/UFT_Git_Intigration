Function Login(Uname,Pwd)
	browser("name:=OrangeHRM").page("title:=OrangeHRM").WebEdit("name:=txtUsername").Set Uname
	browser("name:=OrangeHRM").page("title:=OrangeHRM").WebEdit("name:=txtPassword").Set Pwd
	browser("name:=OrangeHRM").page("title:=OrangeHRM").WebButton("name:=LOGIN").Click
	
End Function