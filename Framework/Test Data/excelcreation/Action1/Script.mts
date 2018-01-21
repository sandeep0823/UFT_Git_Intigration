Set obj=CreateObject("Excel.Application")
obj.Visible=true
obj.Workbooks.Add
set obj2=obj.ActiveSheet
obj.Cells(1,1)="Name"
set obj2=obj.Cells(1,1)
obj2.font.color=vbBlue
obj.Cells(1,2)="number"
Set obj3=obj.Cells(1,2)
obj3.font.color=VbBlue
obj.Cells(2,1)="sree"
obj.Cells(2,2)="C0254"
obj.Cells(3,1)="lakshmi"
obj.Cells(3,2)="c0255"
Set obj6=obj.Columns(2) 



