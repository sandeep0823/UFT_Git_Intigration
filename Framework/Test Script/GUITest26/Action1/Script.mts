Set obj=description.Create
obj("micclass").value="WebButton"
Set obj2=browser("CAAS").Page("CAAS").ChildObjects(obj)
obj3=obj2.count
msgbox obj3
For i=0 to obj3-1
obj4=obj2(i).GetRoProperty("name")

If (obj4="Skip To Login") Then

else
wait(2)
	obj2(i).click
End If
Next