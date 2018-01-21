x="sri lakshmi"
Set obj=createObject("wscript.shell")

obj.Popup  x,2
rem obj.Popup  mid(x,1,len(x)-7)

obj.Popup strreverse(x),2

obj.Popup  len(x),2
obj.Popup right(x,3),2
obj.Popup left(x,3),2
obj.Popup mid(x,1,len(x)-3),2


obj.Popup trim(x),2
obj.Popup Ucase(x),2
obj.Popup Lcase(x),2
msgbox date
obj.Popup time,2























