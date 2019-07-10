var count = 0;
function doAction(actionType) {
	count++;
	var firstval= document.querySelector('#fval').value;
	var secondval = document.querySelector('#sval').value;
	firstval = parseInt(firstval);
	secondval= parseInt(secondval);
	var result = 0
	

	switch(actionType){
		case 'sum':
		result = arthmaticUtils.addValues(firstval,secondval);
		break;

		case 'mul' :
		result = arthmaticUtils.mulValues(firstval,secondval);
		break;
		
		case 'sub' :
		result = arthmaticUtils.subValues(firstval,secondval);
		break;

		case 'div':
		result = arthmaticUtils.divValues(firstval,secondval);
		break;
	}
	var msg = "The " + actionType  + " of two numbers is " + result;
		document.querySelector(".rBlock").innerHTML = msg;
		console.log(msg);
		console.log(count);
}