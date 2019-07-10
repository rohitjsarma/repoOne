
		function addition() {
		  var value1=parseInt(document.getElementById('no1').value);
		  var value2=parseInt(document.getElementById('no2').value);
		  var sum = document.getElementById("addition");
		   sum.value = value1+value2;
		   makesValueEmpty();
		   console.log(event);
		}
		function makesValueEmpty() {
			document.querySelector('#no1').value='';
			document.querySelector('#no2').value='';
		}
		function validationChar(event) {
			
			if (event.charCode>=48 && event.charCode<=57) {
                return true;
			}
				//document.querySelector('.errMsg').style.display='block';
				return false;
			
			
		}