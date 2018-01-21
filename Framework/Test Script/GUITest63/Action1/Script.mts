
SystemUtil.Run "http://opensource.demo.orangehrmlive.com/"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin"

Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").Set "Admin"

Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click

