$(function(){

    $('.search-icon').on('click', function(){
        $('.mainSearchWrap, .searchOverlay').addClass('active');
    });
    $('.searchOverlay').on('click', function(){
        $('.mainSearchWrap, .searchOverlay').removeClass('active');
    });
    
    $('.closeSearch').on('click', function(){
        $('.mainSearchWrap, .searchOverlay').removeClass('active');
    });
    
    $(".exploreBtn").click(function() {
        $('html, body').animate({
            scrollTop: $(".serverSecWrap").offset().top
        }, 1000);
    });
    
    /*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        e.stopPropagation()
    });

     $('.close-icon').click(function(e) {
        e.preventDefault();
            $('#wrapper').addClass("active");
        e.stopPropagation()

    });

    //  $('.close-sidebar').click(function(event) {
    //     event.stopPropagation();
    //     if ($("#wrapper").toggleClass("active")) {
    //         $('#wrapper').addClass("active");
    //     } else {
    //         $('#wrapper').removeClass("active");
    //     }
    // });
    
    $(document).on("click", function(e) {
        // if($(e.target).is("#sidebar-wrapper") === true){
        //     $("#wrapper").removeClass("active");
        // }
        // else {
        //     $("#wrapper").addClass("active");
        // }
    });

    // Typed
    $("#aniText").typed({
        strings: ["LEADING","ROBUST", "TRUSTED"],
        typeSpeed: 180,
        loop: true,
        backDelay: 2000,
        // show cursor
        showCursor: false
    });
    
    // Header
    var shrinkHeader = 350;
    if($(window).scrollTop() > 350){
       $('header').addClass('shrink');
    }
    
    var serverBgCirclesPos = $(".serverWraper").offset().top - 205;
    if($(window).scrollTop() > serverBgCirclesPos){
       $('[class*="point"]').addClass('active');
    }
    
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
        }
        else {
            $('header').removeClass('shrink');
        };
        
        if(scroll >= serverBgCirclesPos){
           $('[class*="point"]').addClass('active');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

});