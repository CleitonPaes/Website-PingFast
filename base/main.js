(function ($) {
    "use strict";    
    
    // WOW
    new WOW().init();


	// Encurtar Nav
	if(window.location.pathname == "/") {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
	}
	
	if(window.location.pathname !== "/") {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
	}	

    // Efeito de rolagem
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "" && window.location.pathname == '/' ) {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Voltar ao Topo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });
    
})(jQuery);

