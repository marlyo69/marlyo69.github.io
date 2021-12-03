//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "15 dec 2021 19:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
