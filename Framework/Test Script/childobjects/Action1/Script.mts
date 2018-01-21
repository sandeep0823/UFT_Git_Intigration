Set owin=Description.Create
Set owinobj=description.Create
'Set obut=description.Create
owin("micclass").value="Window"
owinobj("micclass").value="WinObject"
Set owinobj1=window(owin).ChildObjects(owinobj)
c1=owinobj1.count
msgbox c1
For  i=0 to c1-1
	owinobj_prop=owinobj1(i).getroproperty("name")
	msgbox owinobj_prop

Next
