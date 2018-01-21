Set br=description.Create
br("name").value="OrangeHRM"
Set pg=description.Create
pg("title").value="OrangeHRM"
Set un=description.Create
un("name").value="txtUsername"
Set pw=description.Create
pw("name").value="txtPassword"
Set lg=description.Create
lg("html id").value="btnLogin"
browser(br).page(pg).webEdit(un).Set "Admin"
browser(br).page(pg).webEdit(pw).Set "admin"
browser(br).page(pg).webButton(lg).Click

 @@ hightlight id_;_Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN")_;_script infofile_;_ZIP::ssf1.xml_;_