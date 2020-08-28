var panel = new Panel
panel.location = "top";
panel.height = Math.round(gridUnit * 1.5);

var simplemenu = panel.addWidget("org.kde.plasma.simplemenu")
simplemenu.currentConfigGroup = ["Shortcuts"]
simplemenu.writeConfig("global", "Meta")

panel.addWidget("org.kde.plasma.appmenu");
panel.addWidget("org.kde.plasma.panelspacer") 
panel.addWidget("org.kde.plasma.icontasks")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.showdesktop")