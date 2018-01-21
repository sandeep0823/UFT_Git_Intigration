x="kavitha Krishna"
Set obj=createObject("wscript.shell")
y=len(x)
obj.Popup y,2
z=split(x," ")
obj.Popup z(0),2
obj.Popup z(1),2
a=strreverse(z(0))
obj.Popup a,2
b=strreverse(z(1))
obj.Popup b,2
c=a & " " &b
obj.Popup c,2
d=strreverse(c)
obj.Popup d,2




