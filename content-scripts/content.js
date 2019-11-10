
//chrome.runtime.onMessage allows to communicate different parts of extension(content scripts, popups/sidebars , background)
chrome.runtime.onMessage.addListener(function (msg) {//first parameter is a JSON received from some sender(sidebar in our case)
	if(msg.action == "fillForm"){//just some flag that we need "fill" action
		// we want to fill in the input field like this, when the sidebar button is clicked:
		document.querySelector('[name="username"]').value="myusername";
	}
});