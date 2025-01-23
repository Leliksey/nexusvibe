$(document).ready(function() {
    $(".burger").on("click", function() {
        $(".overlay").show();
        $(".header__menu").addClass("open");
        $("html, body").addClass("ovh");
    });
    $(".burger__close").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });
    $(".overlay").on("click", function() {
        $(".overlay").hide();
        $(".header__menu").removeClass("open");
        $("html, body").removeClass("ovh");
    });


    var track = $('.track');
    track.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },            
            960:{
                items:3
            }
        }
    });
    if ($(window).width() > 767) {
        track.on('mousewheel', '.owl-stage', { passive: false }, function (e) {
            if (e.originalEvent.deltaY > 0) {
                track.trigger('next.owl.carousel');
            } else {
                track.trigger('prev.owl.carousel');
            }
            e.preventDefault();
        });
    }
    


    $(".pagination__item a").on("click", function(e) {
        e.preventDefault();
        $(".pagination__item").removeClass("active");
        $(this).parent().addClass("active");
    })




    $('.product__main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        // adaptiveHeight: true,
        asNavFor: '.product__nav-slider'
      });
      $('.product__nav-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__main-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        // adaptiveHeight: true
      });

      var product_nav_slider = $(".product__nav-slider")
      if ($(window).width() > 767) {
        product_nav_slider.on('mousewheel', function (e) {
            if (e.originalEvent.deltaY > 0) {
                product_nav_slider.slick('slickNext');
            } else {
                product_nav_slider.slick('slickPrev');
            }
            e.preventDefault();
        });
    }


    $(".ejemplos .card__img").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        items:1
      });

});