$(function() {


    // Fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight() - 50;
    let scrollPos = $(window).scrollTop();

    let nav = $("nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight() - 50;
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 800);

        console.log(elementOffset);
    });

    // navToggle


    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

    // feedback-slider : https://kenwheeler.github.io/slick/
    let slider = $("#feedbackSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true
    });



});
