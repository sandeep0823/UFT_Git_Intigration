Systemutil.Run"https://www.careerpower.in/ibps-rrb.html"
wait(5)
Set obj =description.Create
  obj("micclass").value="Link"
   Set obj2=Browser("IBPS RRB 2017 Notification").Page("IBPS RRB 2017 Notification").ChildObjects(obj)
   obj3=obj2.count
   msgbox obj3
   For i=0 to obj3-1
   	obj4=obj2(i).GetRoProperty("name")
   	print obj4
   Next
   
   
   