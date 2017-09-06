$(document).ready(function(){
	const url = 'https://talaikis.com/api/quotes/random/';
	$.getJSON(url, function(jsonFile){
		$('#sentence').html(jsonFile['quote']);
		$('#author').html(jsonFile['author']);
	});
	
	$('#generate-btn').on('click', function(){
			$.getJSON(url, function(jsonFile){
			$('#sentence').html(jsonFile['quote']);
			$('#author').html(jsonFile['author']);
		});
	});
	
});