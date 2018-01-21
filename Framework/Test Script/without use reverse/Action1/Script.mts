x="lakshmi sree"
y=right(x,2)'because below function can count frst letter to last
z=instr(x,y)'compare 2 strings and return length of the string
msgbox z
For i=1 to z
	ch=mid(x,i,1)
	temp=ch&temp

Next
msgbox temp































