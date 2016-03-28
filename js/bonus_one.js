// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var dataList = [];

(function() {
	// Magic!
	console.log('Keepin\'n it clean with an external script!');

	$.getJSON("http://www.mattbowytz.com/simple_api.json?data=all",function(info){

		console.log(info);

		// grabs interest data if present code 8 and code 9
		for(var i = 0; i < info.data.interests.length; i++){
			dataList.push(info.data.interests[i]);
		}

		// grabs programming data if present code 8 and code 10
		for(var i = 0; i < info.data.programming.length; i++){
			dataList.push(info.data.programming[i]);
		}

	});


	$("#search").keyup(function(){

		// initially empty search queue every time
		$("#search-suggest").empty();

		var search = $("#search").val().toLowerCase();
		console.log(search);

		if(search != ""){

		for(var i=0; i < dataList.length; i++){

			if(dataList[i].toLowerCase().indexOf(search) === 0){

				$("#search-suggest").append("<li><a href='http://www.google.com/search?q=" + dataList[i] + "' target='_blank'>" + dataList[i] + "</a></li>");
				console.log("Pattern Match " + dataList[i]);

			}
			
		}

		for(var i = 0; i < dataList.length; i++){

			if(dataList[i].toLowerCase().indexOf(search) > 0){

				$("#search-suggest").append("<li><a href='http://www.google.com/search?q="+ dataList[i] +"' target='_blank'>" + dataList[i] + "</a></li>");
				console.log("Within " + dataList[i]);

			}
		}

		}



	});


	

	





})();