s="sree lakshmi hai how are you"
a=split (s," ")
msgbox "a(0)="&a(0) 
msgbox "a(1)="&a(1)
msgbox "a(2)="&a(2)
msgbox "a(3)="&a(3)
msgbox "a(4)="&a(4)
msgbox "a(5)="&a(5)
msgbox "a(0)="&a(0)&vbNewLine& "a(1)="&a(1) &vbNewLine& "a(2)="&a(2) &vbCrLf& "a(3)="&a(3) &vbNewLine& "a(4)="&a(4) &vbNewLine& "a(5)="&a(5)
k=len(s)

msgbox k
For i=1 to k

	c=mid(s,i,1)
g=g&vbCrLf&c	
	
Next
msgbox g
	
