$(function () {

	// Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');


    // Menu-burger 
    $('.menu-burger').click(function() {
    	$('.menu-collapse').toggleClass('d-none').css('order', '1');
    	$('.menu__list').toggleClass('menu-opened');
    });

    // Slider
    $('.reviews-slider').slick({
    	dots: true,
    	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
    	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>'

    });

    // Articmodal
    $('.phone-button_footer').click(function () {
    	 $('#exampleModal').arcticmodal({
	    	overlay: {
	    		css: {
	    			backgroundColor: '#131731',
	    			opacity: .93
	    		}
	    	}
	    });
    }); 
    $('.phone-button').click(function () {
    	 $('#exampleModal').arcticmodal({
	    	overlay: {
	    		css: {
	    			backgroundColor: '#131731',
	    			opacity: .93
	    		}
	    	}
	    });
    }); 
});