alert("controller reached");

$(document).ready(function(){
alert("about to add listener")	
	document.querySelector("#inputBtn").addEventListener("click", function(event){
		console.log("element got clicked");
	});
});
var count = 0;
setInterval(function(){
	count++;
	$('title').text("sample  " + count);
}, 1000);

function elementClick() {
	console.log("Second element got clicked");
}