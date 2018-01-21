x="sri Lakshmi mca"
Set obj=createObject("wscript.shell")
obj.Popup x,2
y=strreverse(x)
obj.Popup y,2
z=split(y," ")
obj.Popup z(0),2
obj.Popup z(1),2
obj.Popup z(2),2
a=Z(1)& " " &Z(2) & " "& z(0)
obj.Popup a,2
z1=split(a," ")
obj.Popup z1(0),2
obj.Popup z1(1),2
obj.Popup z1(2),2
b=strreverse(z1(0))
msgbox b
c=strreverse(z1(1))
msgbox c

d=strreverse(z1(2))
msgbox d
e=b&" " & c & " " &d
msgbox e
msgbox x&vbnewline&y&vbnewline&a&vbnewline&e








