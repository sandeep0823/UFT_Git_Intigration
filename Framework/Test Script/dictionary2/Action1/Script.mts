Set obj=createObject("Scripting.Dictionary")
obj.Add 1,"sri"
rem wait(10)
obj.Add 2,"lakshmi"
rem wait(10)
obj.Add 3,"mca"
rem wait(10)
msgbox obj.Item(1)
msgbox obj.Exists(2)
'msgbox obj.Key(1)
obj.Remove(2)
c=obj.keys
msgbox c(0)
msgbox  c(1)
msgbox obj.Exists(2)
d=obj.Items
msgbox d(0)
msgbox d(1)
msgbox obj.Item(1)
rem msgbox obj.Key("sri")
rem msgbox d(2)



























