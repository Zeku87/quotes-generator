$(document).ready(function(){
	const url = 'https://talaikis.com/api/quotes/random/';
	$.getJSON(url, function(jsonFile){
		$('#sentence').html(jsonFile['quote']);
		$('#author').html(jsonFile['author']);
		$('#twitter-intent').attr('href','https://twitter.com/intent/tweet?text=' + jsonFile['quote']
		 	 + ' -' + jsonFile['author']);
		$('#google-plus-intent').attr('href','https://plus.google.com/share?text=' + jsonFile['quote']
			 + ' -' + jsonFile['author']);
	});
	
	$('#generate-btn').on('click', function(){
			$.getJSON(url, function(jsonFile){
			$('#sentence').html(jsonFile['quote']);
			$('#author').html(jsonFile['author']);
			$('#twitter-intent').attr('href','https://twitter.com/intent/tweet?text=' + jsonFile['quote']
				 + ' -' + jsonFile['author']);
			$('#google-plus-intent').attr('href','https://plus.google.com/share?text=' + jsonFile['quote']
				 + ' -' + jsonFile['author']);
		});
	});

});