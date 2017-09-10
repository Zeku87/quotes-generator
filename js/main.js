$(document).ready(function(){
	const url = 'https://talaikis.com/api/quotes/random/';
	let author = '';

	$.getJSON(url, function(jsonFile){
		author = jsonFile['author'];
		$('#sentence').html(jsonFile['quote']);
		$('#author-link').html('- ' + jsonFile['author']);
		$('#author-link').attr('href','https://en.wikipedia.org/wiki/' + jsonFile['author']);
		$('#twitter-intent').attr('href','https://twitter.com/intent/tweet?text=' + jsonFile['quote']
		 	 + ' -' + jsonFile['author']);
		$('#google-plus-intent').attr('href','https://plus.google.com/share?text=' + jsonFile['quote']
			 + ' -' + jsonFile['author']);
	});
	
	$('#generate-btn').on('click', function(){
			$.getJSON(url, function(jsonFile){
				author = jsonFile['author'];
				$('#sentence').html(jsonFile['quote']);
				$('#author-link').html('- '+jsonFile['author']);
				$('#author-link').attr('href','https://en.wikipedia.org/wiki/' + jsonFile['author']);
				$('#twitter-intent').attr('href','https://twitter.com/intent/tweet?text=' + jsonFile['quote']
					 + ' -' + jsonFile['author']);
				$('#google-plus-intent').attr('href','https://plus.google.com/share?text=' + jsonFile['quote']
					 + ' -' + jsonFile['author']);
			});
	});

	$('#twitter-icon').hover(function(){
		$('body').stop(true, false).animate({'background-color':'#3399ff'}, 1000);
	},function(){
		$('body').stop(true, false).animate({'background-color':'black'}, 'slow');

	});

	$('#google-plus-icon').hover(function(){
		$('body').stop(true, false).animate({'background-color':'#ff3333'}, 1000);
	},function(){
		$('body').stop(true, false).animate({'background-color':'black'}, 'slow');

	});

});