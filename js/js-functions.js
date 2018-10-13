/* Custome Js */



jQuery(document).ready(function() {
	"use strict";
	$('pre code').each(function (i, block) {
		hljs.highlightBlock(block);
	});

	jQuery(window).scroll(function() {
		jQuery(this).scrollTop() > 790 ? jQuery(".mini-sign-up-wrap").addClass("sticky-sidebar") : jQuery(".mini-sign-up-wrap").removeClass("sticky-sidebar")
	});

	// Sticky Header
	$(window).on("load resize scroll",function(e){
	    if ($(window).scrollTop() >= 200) {
	        $('.inner-header').addClass('sticky');
	    }
	    else {
	        $('.inner-header').removeClass('sticky');
	    }
	});	

	// Event Calender
	jQuery('.calender-content').hide();

	jQuery('.calender-header').each(function(){
			$(this).click(function(){
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next().slideUp();
				} else {
					$('.calender-header').removeClass('active');
					$(this).addClass('active');
					$('.calender-content').slideUp();
					$(this).next().slideDown();
				}
			});
	});

	// Accordion
	jQuery('.acc-content').hide();

	jQuery('.acc-title').each(function(){
			$(this).click(function(){
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next().slideUp();
				} else {
					$('.acc-title').removeClass('active');
					$(this).addClass('active');
					$('.acc-content').slideUp();
					$(this).next().slideDown();
				}
			});
	});

	//
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	   		});
		});

	// off canvans menu
	jQuery('.open-btn').click(function() {
		jQuery('nav.off-canvas').addClass('open');
	});

	jQuery('.close-btn').click(function(){
		jQuery(this).parent().removeClass('open');
	});

	jQuery('.default-slider').owlCarousel({
		autoPlay: true,
    loop:true,
    navContainer: true,
    dots: false,
    items: 3,
    rewind: false,
    pagination: false,
		itemsDesktop: [1024, 1],
		itemsDesktopSmall: [900, 1], 
		itemsTablet: [640, 1], 
		itemsMobile: [480, 1],    
    autoplayHoverPause: true,
 			navigation : true,
      navigationText : ['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>'],    
});

	jQuery('.logos').owlCarousel({
		autoPlay: true,
    loop:true,
    nav:false,
    dots: false,
    items: 5,
		itemsDesktop: [1024, 1],
		itemsDesktopSmall: [900, 1], 
		itemsTablet: [640, 1], 
		itemsMobile: [480, 1],    
    autoplayHoverPause: true,
});


	jQuery('.logos-front').owlCarousel({
		autoPlay: true,
		loop: true,
		nav: false,
		dots: true,
		items: 5,
		itemsDesktop: [1024, 1],
		itemsDesktopSmall: [900, 1],
		itemsTablet: [640, 1],
		itemsMobile: [480, 1],
		autoplayHoverPause: true,
	});


	jQuery('.testimonial-slider').owlCarousel({
		autoplay: true,
    loop:true,
    nav:false,
    dots: true,
    items:1,
		itemsDesktop: [1024, 1],
		itemsDesktopSmall: [900, 1], 
		itemsTablet: [640, 1], 
		itemsMobile: [480, 1],    
    autoplayHoverPause: true,
});

	/* testimonials Slider */
	jQuery("#testimonials .slider-items").owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1024, 1], //5 items between 1024px and 901px
		itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
		itemsTablet: [640, 1], //2 items between 600 and 0;
		itemsMobile: [480, 1],
		navigation: false,
		navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
		slideSpeed: 500,
		pagination: true,
		autoPlay: 6000
	});

    jQuery(".navRoot li").mouseover(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul').fadeIn(100);
        }
        return false;
    }).mouseleave(function() {
        if (jQuery(window).width() >= 740) {
            jQuery(this).children('ul').fadeOut(100);
        }
        return false;
    });

	if ( jQuery( '.box-cntrls' ).length > 0 ) {
		var currentValueSel = 1,
			$boxCntn = jQuery( '.box-cntn' );
		jQuery( '.box-cntrls .next' ).on( 'click', function(e){
			slideValuesMission( 'next' );
		});
		jQuery( '.box-cntrls .prev' ).on( 'click', function(e){
			slideValuesMission( 'prev' );
		});
	}
	var slideValuesMission = function( direction ) {
		jQuery( $boxCntn ).find( '[data-valid="' + currentValueSel + '"]' ).removeClass( 'shown' );
		if ( direction == 'prev' ) {
			currentValueSel--;
			if ( currentValueSel == 0 ) {
				currentValueSel = 5;
			}
		} else if ( direction == 'next' ) {
			currentValueSel++;
			if ( currentValueSel == 6 ) {
				currentValueSel = 1;
			}
		}
		jQuery( $boxCntn ).find( '[data-valid="' + currentValueSel + '"]' ).addClass( 'shown' );
	};



	/* Mobile Menu */



		jQuery( '#mob-menu' ).on( 'click', function(e){
			//var this = jQuery( this );
			jQuery(this).toggleClass( 'open' );
			jQuery( '#mob-menu-close' ).toggleClass( 'open' );
			jQuery( '#menu-sld' ).toggleClass( 'open' );
			jQuery( '#mobmenu-logo' ).toggleClass( 'open' );
			jQuery( '#site-logo' ).toggleClass( 'open' );
			jQuery( 'header' ).toggleClass( 'open' );
		});
		jQuery( '#mob-menu-close' ).on( 'click', function(e){
			//var this = jQuery( this );
			jQuery(this).toggleClass( 'open' );
			jQuery( '#mob-menu' ).toggleClass( 'open' );
			jQuery( '#menu-sld' ).toggleClass( 'open' );
			jQuery( '#mobmenu-logo' ).toggleClass( 'open' );
			jQuery( '#site-logo' ).toggleClass( 'open' );
			jQuery( 'header' ).toggleClass( 'open' );
		});


	/* Sticky */
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 1) {
			jQuery('.headerNav1').addClass("sticky");
		} else {
			jQuery('.headerNav1').removeClass("sticky");
		}
	});

	jQuery('#signup-terms').on( 'click', function(){
		if(jQuery(this).is(':checked')){
			jQuery('.checkbox-box').addClass("checkbox-box-checked");
			} else {
			jQuery('.checkbox-box').removeClass("checkbox-box-checked");
		}
	});

});
