$(document).ready(function () {
    $('#owl-client').owlCarousel({
        items: 2,
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 2000,
        margin: 15,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.side-nav').click(function () {
        $('header nav').toggleClass('right-0');
        $(this).css('display', 'none');
        $('header .logo').css('display', 'none');
        $('.overlay').css({"opacity": "1", "z-index": "9999"})
    });
    $('.overlay').click(function () {
        $('header nav').toggleClass('right-0');
        $('.side-nav').css('display', 'block');
        $('header .logo').css('display', 'block');
        $(this).css({"opacity": "0", "z-index": "-1"})
    });
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    })
});
$(window).on('load', function () {
    $("#preloader_6").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    })
})