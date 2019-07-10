
var arthmaticUtils=(function(){
	var count=0;
	function addValues(a,b) {
		count++;
		var result=0;
		result=a+b;
		return result;
	}
	function mulValues(a,b) {
		count++;
		var result=0;
		result=a*b;
		return result;
	}
	function subValues(a,b) {
		count++;
		var result=0;
		result=a-b;
		return result;
	}
	function divValues(a,b) {
		count++;
		var result=0;
		result=a/b;
		return result;
	}

	return{
		addValues:function(a,b){
		return addValues(a,b);
	   },
	    mulValues:function(a,b){
	    	return mulValues(a,b)
	    },
	    divValues:function(a,b){
	    	return divValues(a,b)
	    },
	    subValues:function(a,b){
	    	return subValues(a,b)
	    }
	}
})()