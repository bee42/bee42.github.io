$(document).ready(function(){

});

// cover navigation on scroll with bg color
$(window).scroll(function() {
	var scroll = $(this).scrollTop();
	if(scroll > 50) {
		$('.navigation').addClass('covered');
		}	
		else {
			$('.navigation').removeClass('covered');
		}
});

// accordion
$('.accordion .acc-title').click(function(){
	$('.acc-content').slideUp();
	$(this).next().slideDown();
});


// Scroll To (anchor)
$('a').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top - $('nav.navigation').outerHeight()
	}, 1000);
	return false;
});	



// foundation inits
$(document).foundation();

	new Foundation.OffCanvas($('#offCanvasRight')); 