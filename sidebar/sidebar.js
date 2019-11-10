document.getElementById("sidebar-button").addEventListener("click",function(){
	browser.tabs.query({active:true,currentWindow:true},function(tabs){
		if(tabs && tabs.length >0){
			browser.tabs.sendMessage(tabs[0].id,{action:"fillForm"})
		}
	})
});