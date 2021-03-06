$(function () {
    $('.section__services-slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 1.5L2 9.3125L9.5 17.125" stroke="white" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16.75L9 8.9375L1.5 1.125" stroke="white" stroke-width="2"/></svg></button>',
        centerMode: true,
        centerPadding: '120px',
        infinite: false,
        responsive: [{
            breakpoint: 1220,
            settings: {
                centerPadding: '100px',
                centerMode: false,
            }
        }]
    });

    if ($('.section__work-card-wrapper').width() < 780) {

        $('.section__work-card-wrapper').slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            // centerPadding: '150px',
            // centerMode: true,
        });
    }


    $('.section__review-slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 1.5L2 9.3125L9.5 17.125" stroke="white" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16.75L9 8.9375L1.5 1.125" stroke="white" stroke-width="2"/></svg></button>',
        infinite: false,
        responsive: [{
            breakpoint: 978,
            settings: {
                arrows: false,
                infinite: true
            }
        }]
    });
    new WOW().init();
});