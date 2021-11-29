(function($) {
	$.fn.countdown = function(options, callback) {

		//custom 'this' selector
		thisEl = $(this);

		//array of custom settings
		var settings = { 
			'date': null,
			'format': null
		};

		//append the settings array to options
		if(options) {
			$.extend(settings, options);
		}
		
		//main countdown function
		function countdown_proc() {
			
			eventDate = Date.parse(settings['date']) / 1000;
			currentDate = Math.floor($.now() / 1000);
			secondImageTimestamp = 1638486000;
			secondImageText = 'Rendez vous le 6 Décembre à minuit pour le prochain indice!';
			thirdImageTimestamp = 1638745200;
			thirdImageText = 'Rendez vous le 8 Décembre à minuit pour le prochain indice!';
			fourthImageTimestamp = 1638918000;
			fourthImageText = 'Rendez vous le 10 Décembre à minuit pour le prochain indice!';
			fifthImageTimestamp = 1639090800;
			fifthImageText = 'Rendez vous le 13 Décembre à minuit pour le prochain indice!';
			sixthImageTimestamp = 1639350000;
			sixthImageText = 'Rendez vous le 14 Décembre à minuit pour le prochain indice!';
			seventhImageTimestamp = 1639436400;
			seventhImageText = 'Rendez vous le 15 Décembre à minuit pour le prochain indice!';
			eighthImageTimestamp = 1639522800;
			eighthImageText = '';
			//2
			if(currentDate == secondImageTimestamp) {
				$(".imageIndice").attr('src', "images/second.jpg");
				$("#rendezvous").text(secondImageText);
			}
			//3
			if(currentDate == thirdImageTimestamp) {
				$(".imageIndice").attr('src', "images/third.jpg");
				$("#rendezvous").text(thirdImageText);
			}
			//4
			if(currentDate == fourthImageTimestamp) {
				$(".imageIndice").attr('src', "images/fourth.jpg");
				$("#rendezvous").text(fourthImageText);
			}
			//5
			if(currentDate == fifthImageTimestamp) {
				$(".imageIndice").attr('src', "images/fifth.jpg");
				$("#rendezvous").text(fifthImageText);
			}
			//6
			if(currentDate == sixthImageTimestamp) {
				$(".imageIndice").attr('src', "images/sixth.jpg");
				$("#rendezvous").text(sixthImageText);
			}
			//7
			if(currentDate == seventhImageTimestamp) {
				$(".imageIndice").attr('src', "images/seventh.jpg");
				$("#rendezvous").text(seventhImageText);
			}
			//8
			if(currentDate == eighthImageTimestamp) {
				$(".imageIndice").attr('src', "images/eighth.jpg");
				$("#rendezvous").text(eighthImageText);
			}
			if(eventDate <= currentDate) {
				callback.call(this);
			}
			
			seconds = eventDate - currentDate;
			
			days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
			seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
			
			hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
			
			minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
			
			//conditional Ss
			if (days == 1) { thisEl.find(".timeRefDays").text("day"); } else { thisEl.find(".timeRefDays").text("days"); }
			if (hours == 1) { thisEl.find(".timeRefHours").text("hour"); } else { thisEl.find(".timeRefHours").text("hours"); }
			if (minutes == 1) { thisEl.find(".timeRefMinutes").text("minute"); } else { thisEl.find(".timeRefMinutes").text("minutes"); }
			if (seconds == 1) { thisEl.find(".timeRefSeconds").text("second"); } else { thisEl.find(".timeRefSeconds").text("seconds"); }
			
			//logic for the two_digits ON setting
			if(settings['format'] == "on") {
				days = (String(days).length >= 2) ? days : "0" + days;
				hours = (String(hours).length >= 2) ? hours : "0" + hours;
				minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
			}
			
			//update the countdown's html values.
			if(!isNaN(eventDate)) {
				thisEl.find(".days").text(days);
				thisEl.find(".hours").text(hours);
				thisEl.find(".minutes").text(minutes);
				thisEl.find(".seconds").text(seconds);
			} else { 
				alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
				
			}
		}
		
		//run the function
		countdown_proc();
		
		//loop the function
		interval = setInterval(countdown_proc, 1000);
		
	}
}) (jQuery);