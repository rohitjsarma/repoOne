function getScoreDetails () {
	$(".loadAndMsgContainer").show();
	var match1promise = $.ajax({
		url: 'http://localhost:8081/cricinfo/matchDetails/match1',
		method: 'GET',
		dataType: 'JSON'
	});

	var match2promise = $.ajax({
		url: 'http://localhost:8081/cricinfo/matchDetails/match2',
		method: 'GET',
		dataType: 'JSON'
	});
	
	$.when(match1promise, match2promise).done(function(res1, res2){
		console.log("got response");
		$(".loadAndMsgContainer").hide();
		loadScoreDetails('#match1Container', res1[0]);
		loadScoreDetails('#match2Container', res2[0]);
		
	})

}

function loadScoreDetails(container, matchDetails) {
	var ulTag = $("<ul></ul>");
	var li1= $("<li></li>").html("Match Bteween: " + matchDetails.between);
	ulTag.append(li1);
	var li2= $("<li></li>").html("Location: " + matchDetails.location);
	ulTag.append(li2);
	var li3= $("<li></li>").html("Date: " + matchDetails.time);
	ulTag.append(li3);
	var li4= $("<li></li>").html("Match Type: " + matchDetails.type);
	ulTag.append(li4);
	$(container).append(ulTag);
}