//on scroll slide effect
$(document).ready(function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }



    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //on scroll slide effect

  });  

    // $('.hidden').hide();

$(document).ready(function() {    
    //form click effect
    $('.form-click').click(function(event) {
        event.stopPropagation();
        $("#formcontent").toggleClass("active")
    });


    $('.form-click').click(function(event) {
        event.stopPropagation();
        $(".form-click").toggleClass("form-click-active")
    });

    //form click effect

    //remove timeline animation class
    $(window).on("load, resize", function() {
        var viewportWidth = $(window).width();
        if (viewportWidth < 767) {
            $('.slide-right').removeClass();
            $('.slide-left').removeClass();
        } else {
            $('.slide-right').addClass();
            $('.slide-left').addClass();
        }
    });

    $(window).on("scroll resize", function() {
        var viewportWidth = $(window).width();
        if (viewportWidth < 767) {
            $('.slide-right.in-view').removeClass();
            $('.slide-left.in-view').removeClass();
        } else {
            $('.slide-right.in-view').addClass();
            $('.slide-left.in-view').addClass();
        }
    });
    //remove timeline animation class 

    //features-carousel
    $('.features-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        // autoHeight:true,
        margin: 50,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        navText: ["<i class='icon icon-left-open-big'></i>", "<i class='icon icon-right-open-big'></i>"]
    });

    //features-carousel

    //services carousel

    $('.services-carousel').owlCarousel({
        mouseDrag: true,
        loop: true,
        autoplay: true,
        center:true,
        // autoWidth: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 70,
        nav: true,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 2
            }
        },
        navText: ["<i class='icon icon-left-open-big'></i>", "<i class='icon icon-right-open-big'></i>"]
    });

    //ourservices carousel
    $('.ourservices-carousel').owlCarousel({
        mouseDrag: false,
        loop: true,
        autoplay: true,
        // autoWidth: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        margin: 10,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    });

});

//Gallery Slider for Datacenters
 $(document).ready(function () {
  // reference for main items
  var slider = $('#slider');
  // reference for thumbnail items
  var thumbnailSlider = $('#thumbnailSlider');
  //transition time in ms
  var duration = 500;

  // carousel function for main slider
  slider.owlCarousel({
   loop:false,
   nav:false,
   items:1
  }).on('changed.owl.carousel', function (e) {
   //On change of main item to trigger thumbnail item
   thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });

  // carousel function for thumbnail slider
  thumbnailSlider.owlCarousel({
   loop:false,
   center:true, //to display the thumbnail item in center
   nav:false,
   responsive:{
    0:{
     items:3
    },
    600:{
     items:4
    },
    1000:{
     items:6
    }
   }
  }).on('click', '.owl-item', function () {
   // On click of thumbnail items to trigger same main item
   slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

  }).on('changed.owl.carousel', function (e) {
   // On change of thumbnail item to trigger main item
   slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
  });


  //These two are navigation for main items
  $('.slider-right').click(function() {
   slider.trigger('next.owl.carousel');
  });
  $('.slider-left').click(function() {
   slider.trigger('prev.owl.carousel');
  });
 });