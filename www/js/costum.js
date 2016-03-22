$(document).ready(function(){

	// main slider
	$('.main-slider').slick({
		
	});

	$('.main-slider .slide').each(function(){
		$(this).css('background', 'url(../'+$(this).find('img').attr('src')+') center top no-repeat');
	});

});