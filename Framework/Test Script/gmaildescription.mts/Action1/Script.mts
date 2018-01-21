Set dia=description.Create
dia("text").value="Login"
Set Us=description.Create
Us("attached text").value="User Name:"
Set Pwd=description.Create
Pwd("attached text").value="Password:"
Set but1=description.Create
but1("text").value="Login"
Set Wc=description.Create
Wc("text").value="Gmail"
Set but=description.Create
but("text").value="Logout"
dialog(dia).winEdit(Us).Set "sreelakshmi@gmail.com
dialog(dia).winEdit(Pwd).Set "hanumeswara3"
dialog(dia).winButton(but1).Click
window(Wc).winButton(but).Click



