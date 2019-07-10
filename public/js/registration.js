function readUserDetails() {
	var userDetails={};
	userDetails.uname=document.querySelector('#uname').value;
	userDetails.pswd  =document.querySelector('#pswd').value;
	userDetails.rpswd=document.querySelector('#rpswd').value;
	userDetails.mob = document.querySelector('#mob').value;
	if (userDetails.uname =='') {
		document.querySelector('.errMsgUname').style.display ='block';
	}else{
		document.querySelector(".errMsgUname").style.display = 'none';
	}
	if (userDetails.mob =='') {
		document.querySelector('.errMob').style.display ='block';
	}else{
		document.querySelector(".errMob").style.display = 'none';
	}

	if (userDetails.pswd != userDetails.rpswd) {
		document.querySelector('.errMsgPswd').style.display='block';
		console.log("matching");
		console.log(userDetails);
	}
}
function  validationMob(event) {
 
if (event.charCode>=48 && event.charCode<=57) {
                return true;
			}
				//document.querySelector('.errMsg').style.display='block';
				return false;
			
			
		}