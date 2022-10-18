$(document).ready(function(){
	
    // Slick -> Building (Figures)
    $('.building span.imgs figure').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        dots:                   true,
        arrows:                 false,
    })

    // Slick -> Launch
    $('#launch section').slick({
        slidesToShow:           2,
        slidesToScroll:         2,
        dots:                   true,
        arrows:                 false,
    })

    // Slick -> Testmonials
    $('#testimonials section').slick({
        slidesToShow:           3,
        slidesToScroll:         3,
        infinite:               false,
        dots:                   true,
        arrows:                 false,
    })

});