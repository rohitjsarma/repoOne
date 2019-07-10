function readUserDetails() {
	var userDetails{};
	userDetails.uname=document.querySelector('#uname').value;
	userDetails.pswd  =document.querySelector('#pswd').value;
	userDetails.rpswd=document.querySelector('#rpswd').value;
	if (userDetails.uname=='') {
		document.querySelector('#errMsgUname').style.display='block';
	}else{
		document.querySelector("#errMsgUname").style.display = 'none';
	}
	if (userDetails.pswd != userDetails.rpswd) {
		document.querySelector('errMsgPswd').style.display='block';
		console.log("matching");
		console.log(userDetails);
	}
}