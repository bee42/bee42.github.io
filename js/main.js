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


// open form
$('.open-form').each(function(){
	var getForm = $(this).data('form');
 	
 	$(this).click(function(){
 		$('.form-container').fadeIn();
 		$('.overlay').fadeIn();
 		return false;	
 	});
	console.log(getForm);
});

// Close form
$('.close').click(function(){
	$(this).parent().parent().fadeOut();
	$('.overlay').fadeOut();
	$('body').css({'overflow': 'scroll'});
      $('.form-container').animate({
       	scrollTop : 0
       });
});

// form validation
$(function(){
	$('form').validate({
	});

	$.extend($.validator.messages, {
		required: "This filed is required"
	});
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