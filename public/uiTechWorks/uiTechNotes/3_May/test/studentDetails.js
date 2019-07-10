var studentDetails=[];

function loadStdnDetails() {
  $("#stdnContainer").loadTemplate($("#stdnTemplate"), studentDetails, {append:true});
}

function loadDetails() {
	$(".loadingBlock").show();
	$.ajax({
		url: 'http://localhost:8081/getStudentDetails/student',
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			$(".loadingBlock").hide();
			console.log("success communication");
			console.log(res);
			stdnDetails = res.studentDetails;
			showStdnDetails();
		},
		error: function(err) {
			$(".errBlock").show();
			$(".loadingBlock").hide();
		}
	});

}
function showStdnDetails() {
      for (var i = 0 ; i < studentDetails.length; i++) {
		loadStdnDetails(studentDetails[i]);	
}
}