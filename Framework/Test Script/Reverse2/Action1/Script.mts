x="*$ $* *$"
Set obj=createObject("wscript.shell")
obj.Popup x,2
y=Strreverse(x)
obj.Popup y,2


	z=split(y," " )
obj.Popup z(0),2
obj.Popup z(1),2
obj.Popup z(2),2
k=z(0) & " " &z(1)& " " &z(2)

obj.Popup k,2
b=strreverse(z(0))
obj.Popup b,2
c=strreverse(z(1))

obj.Popup c,2

d=strreverse(z(2))
obj.Popup Z(2),2


e=b& " " &c& " "&d
obj.Popup e,2

'v=x& " " &k & " "  &e
'msgbox v
'g=Split(v," ")
'msgbox g(0)
'msgbox g(1)
'msgbox g(2)
obj.Popup  x &vbnewline& k & vbnewline & e

'err.Number


























