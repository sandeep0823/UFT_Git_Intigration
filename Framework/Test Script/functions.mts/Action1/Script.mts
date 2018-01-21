
x="lakshmi sri"
y="lakshmi sri "
Set obj=createObject("wscript.shell")
obj.Popup left(x,3),2
obj.Popup right(x,5),2
obj.Popup len(x),2
obj.Popup mid(x,2,len(x)-2),2
obj.Popup Trim(x),2
obj.Popup ucase(x),2
obj.Popup lcase(x),2
If  strcomp(x,y,1)=0 then
	obj.Popup "both r equal",2
	else
	obj.Popup  "both r not equal" ,2
end if
x1="11.9123"
obj.Popup cint(x1),2
obj.Popup cdbl(x1),2
obj.Popup Round(x1,2),2
obj.Popup Date,2





















































