
str="sadhgf#@#^5878475"
l=len(str)
For i=1 to l
j=mid(str,i,1)
If isnumeric(j) Then
	d=d&j
	
	msgbox d
	Else
	e=e&j
	msgbox e
End If
next
p=len(d)
	msgbox p
	oo=len(e)
	msgbox oo