var count = 0;

function doAction(actionType) {
	count++;
	var firstVal = document.querySelector("#fval").value;
	var secondVal = document.querySelector("#sval").value;

	firstVal = parseInt(firstVal);
	secondVal = parseInt(secondVal);
	var result = 0
	switch(actionType) {
		case 'sum':
			result = arthmaticUtils.addValues(firstVal, secondVal);
			break;
		case 'mul':
			result = arthmaticUtils.multiValues(firstVal, secondVal);
			break;

		case 'sub':
			result = arthmaticUtils.subValues(firstVal, secondVal);
			break;
		case 'div':
			result = arthmaticUtils.divValues(firstVal, secondVal);
			break;
	}
	var msg = "The " + actionType  + " of two numbers is " + result;
	document.querySelector("#rBlock").innerHTML = msg;
	document.querySelector("#cntBlk").innerHTML = count;

}



function displaymsg() {
	alert("hero");
}