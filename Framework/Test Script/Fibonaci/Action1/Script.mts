Function Fib()
   a=0
   b=1
   For i=1 to 10
	   c=a+b
	   a=b
	   b=c
      msg1=msg1&","&b



   Next
   Msg = "The string is 1" & msg1

MsgBox Msg
End Function
call Fib()






