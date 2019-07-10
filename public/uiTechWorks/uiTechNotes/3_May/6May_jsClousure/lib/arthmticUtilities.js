var arthmaticUtils = (function(){
	var count = 0;
	

	function subValues(a , b) {
		var result = 0; 
		result = a - b;
		return result;
	}

	function mulValues(a , b) {
		count++;
		var result = 0; 
		result = a * b;
		return result;
	}

	function divValues(a , b) {
		var result = 0; 
		result = a / b;
		return result;
	}

	function displaymsg() {
		alert("Zero");
	}
	return {
		addValues: function(a , b) {
			count++;
			var result = 0; 
			result = a + b;
			return result
		},
		multiValues: function(p1, p2) {
			return mulValues(p1, p2);
		},
		divValues:function(a,b){
			return divValues(a,b);
		},
		subValues:function(t1,t2){
			return subValues(t1,t2)
		}
	}
})();