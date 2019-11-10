// we want to fill in the input field like this, when the sidebar button is clicked:

chrome.runtime.onMessage.addListener(function (msg,sender) {
	if(msg.action == "fillForm"){
		document.querySelector('[name="username"]').value="myusername";
	}
});