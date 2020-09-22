$(document).ready(function() { 
    $('.levis_top').slick({
        arrows: false,
        asNavFor: '.levis_bottom',
        infinite: true,
    });

    $('.levis_bottom').slick({
        arrows: true,
        asNavFor: '.levis_top',
        focusOnSelect: true,
        slidesToShow: 3,
        infinite: true,
    });
});


// $(document).ready(function() { 
//     $(window).width()
// if ( > 769px) {
//         $('.slider__text').slick({
//             arrows: true,
//             asNavFor: '.slider_left,.slider__nav',
//         });
//     });
// }

