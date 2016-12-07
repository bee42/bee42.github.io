$(document).ready(function(){

	// open form
	$('.open-form').each(function(){
	 	$(this).click(function(){
	 		$('.form-container').fadeIn();
	 		$('.overlay').fadeIn();
	 		return false;	
	 	});
	});

	// select event
	$('#book-event option').each(function(){
		var pathname = window.location.pathname; 
		var getRef = '/'+$(this).data('ref');

		if(getRef == pathname) {
			$(this).attr('selected',true);
		}
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

	// validate form
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

// foundation inits
$(document).foundation();

	new Foundation.OffCanvas($('#offCanvasRight')); 