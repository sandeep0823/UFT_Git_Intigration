Set obj=createObject("scripting.FileSystemObject")
obj.CreateFolder("E:\pr")
obj.CreateTextFile("E:\pr\pr1.txt")
Set obj1=obj.CreateTextFile("E:\pr\pr1.txt")
obj1.Write "Admin"
obj1.Write " admin"
Set obj2=obj.OpenTextFile("E:\pr\pr1.txt")
obj3=obj2.ReadAll
msgbox obj3
obj5=split(obj3," ")
msgbox obj5(0)
msgbox obj5(1)
 browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set obj5(0)
 browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set obj5(1)
 browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
obj9=browser("OrangeHRM").Page("OrangeHRM").GetROProperty("text")
msgbox obj9