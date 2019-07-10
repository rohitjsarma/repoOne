function sendDate() {
	var date = new Date();
	postMessage(date);
}

setInterval(function(){
	sendDate();	
}, 2000);
