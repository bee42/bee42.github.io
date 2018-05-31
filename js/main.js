$(document).ready(function(){

    //Highlight Code
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
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

	// init slick slider for tranings and conferences teaser
	$('.slick-trainings').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					infinite: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// init slick slider for tranings and conferences teaser
	$('.slick-conferences').slick({
		dots: true,
		infinite: true,
		autoplay: false,
	
		slidesToScroll: 1,
		arrows: false,
		variablewidth: true,
		width: 345,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

    $(".reference-slick").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".partner-slick").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //display the first element in accordion in trainings pages with (is-active) class
    var first_accordion_element = $('.accordion-item ')[0];
    $(first_accordion_element).addClass("is-active");
    $($(first_accordion_element).find(".accordion-content")).show();

    stripedTable();
    scrollTableToggle();
    tabsWidth();

});  // End of document.ready


$(window).resize(function() {
    scrollTableToggle();
    tabsWidth();
});


/**
 * add scroll class to training info table in mobile screen
 */
function scrollTableToggle(){
    var pageWidth =$( window ).width();
    if (pageWidth < 676){
        $(".trainings-table-info").addClass("scroll");
    }else{
        $(".trainings-table-info").removeClass("scroll");
    }
}

/**
 * let all tabs have the same width
 */
function tabsWidth(){

    var tab_titles = $('.tabs-title ');
    var tabs_count = tab_titles.length;
    var tabs_container_width = $(".tabs").innerWidth();

    var pageWidth =$( window ).width();
    if (pageWidth > 440){
        var tab_width = tabs_container_width / tabs_count;
        $(".tabs-title").width(tab_width);
    }

    var tab_width = tabs_container_width / tabs_count;
    $(".tabs-title").width(tab_width);

    //show the first tab content
    var first_tab_content = $('.tabs-panel ')[0];
    var first_tab_title = tab_titles[0];
    var first_tab_name = $('.tab-name ')[0];
    $(first_tab_content).addClass("is-active");
    $(first_tab_title).addClass("is-active");
    $(first_tab_name).show();
    $(first_tab_content).show();
}


/*
* to display stripped trainings table with grouped name
* */
function stripedTable(){
    var table_rows= $('.with-title');

    for(var i=0; i< table_rows.length  ; i++){

        if(i % 2 == 0){

            var td_parent = $(table_rows[i].parentNode);
            var tr_parent_className = td_parent.attr('class');

            td_parent.css('background', "#f8f9fb");

            if( tr_parent_className == "grouping-name"){

                var next_parents = td_parent.nextAll("tr");

                for(var j =0 ; j< next_parents.length ; j++){

                    var parent_first_td_child_class = $($(next_parents[j]).children()[0]).attr('class');

                    if($(next_parents[j]).attr('class') == "grouping-name" && parent_first_td_child_class == ''){
                        $(next_parents[j]).css('background', "#f8f9fb");
                    }else{
                        break;
                    }
                }
            }
        }
    }
}

//click event for days-tabs
(function(){
    $(".days-tabs .tabs li a").click(function(e){
        //prevent the page to scroll to top
        e.preventDefault();
        e.stopImmediatePropagation();

        var t = e.target;
        if (t.href.indexOf("#") != -1) {
            var hash = t.href.substr(t.href.indexOf("#"));//get href from the activated anchor
            selectTab(hash);
        }
    });

})();

/**
 * popup to display trainer details
 */
function trainerPopup(id){

    //button to display contact form
    var btn = $(".trainer-name#"+ id);

    //trainer container
    var trainer_container = jQuery("#trainer-popup-container");
    var trainer_header = jQuery("#trainer-popup-header");
    //close button
    var close_span= jQuery("#close");

    var displayed_trainer = $(".select-trainer-popup." + id);

    trainer_container.show();
    trainer_header.show();
    displayed_trainer.show();

    close_span.click(function() {
        trainer_container.hide();
        displayed_trainer.hide();
    });

    //hide the container if the user clicked any where outside it
    trainer_container.click(function(e) {
        if(trainer_container.has(e.target).length === 0){
            trainer_container.hide();
            displayed_trainer.hide();
        }
    });
}


/*
* get hash from the activated link
* remove all is-active classes from tabs title and content
* activate title and content, which user has selected
* */
function selectTab(hash){
    //remove is-active class from tab's header and its content
    var tabsContent = $(".days-tabs .tabs-content div");
    tabsContent.removeClass("is-active");
    tabsContent.hide();

    var tabsTitle = $(".days-tabs .tabs li");
    tabsTitle.removeClass("is-active");

    var tabName = $('.tab-name ');
    tabName.hide();

    var tabContentId = hash.substr(hash.indexOf('#')+1);

    //show tab content, which is already chosen(selected)
    $(hash).show();

    //get title parent to add is-active class to it
    var tabName = document.getElementsByName(tabContentId);
    var tabTitle = $("a[href='"+ hash +"']");
    var tabTitleParentLi = $(tabTitle).parent();
    $(tabTitleParentLi).addClass("is-active");
    $(tabName).show();
}

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
