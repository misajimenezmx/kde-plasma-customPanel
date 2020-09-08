var panel = new Panel
panel.location = "top";
panel.height = Math.round(gridUnit * 1.5);

var simplemenu
if(knownWidgetTypes.indexOf('org.kde.plasma.simplemenu') > -1){
    simplemenu = panel.addWidget("org.kde.plasma.simplemenu")
}else{
    simplemenu = panel.addWidget("org.kde.plasma.kickoff")
}
simplemenu.currentConfigGroup = ["Shortcuts"]
simplemenu.writeConfig("global", "Alt+F1")

panel.addWidget("org.kde.plasma.appmenu");
panel.addWidget("org.kde.plasma.panelspacer") 
panel.addWidget("org.kde.plasma.icontasks")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.showdesktop")
