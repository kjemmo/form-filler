document.getElementById("sidebar-button").addEventListener("click",function(){//adding click handler to our button
	browser.tabs.query({active:true,currentWindow:true},function(tabs){//querying active tab(active tab in current active window)
		if(tabs && tabs.length >0){ //if tab found, in rare cases/bugs it can be empty
			browser.tabs.sendMessage(tabs[0].id,{action:"fillForm"})// sending JSON with our "fill flag" to content script in this tab (tab.id)
		}
	})
});