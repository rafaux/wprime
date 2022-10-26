$(document).ready(function(){

    // Qtd
    $('#category aside .qtd nav ul li').click(function(){
        var num = $(this).html();
        $(this).parent().find('li').removeClass('on');
        $(this).parent().parent().find('input').val(num);
        $(this).addClass('on');
    })

    // Close Alert (Contact)
    $('#contact section .box .alert sup').click(function(){
        $(this).parent().slideUp(100);
    })

    // Accordion
    $('#about-services article').click(function(){
        $(this).toggleClass('on');
        $(this).find('.item').slideToggle();
    })
	
    // Slick -> Building (Figures)
    $('.building span.imgs figure').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        dots:                   true,
        arrows:                 false,
    })

    // Slick -> About (Slide)
    $('#about-header .slide').on('init', function(event, slick){
        $(this).append('<div class="slide-count"><span id="current">1</span> de <span id="total">'+slick.slideCount+'</span></div>');
    });
    $('#about-header .slide').slick({
        slidesToShow:           1,
        slidesToScroll:         1,
        dots:                   true,
        arrows:                 true,
        prevArrow:              '<button class="arrow arrow-prev"><i class="far fa-angle-left"></i></button>',
        nextArrow:              '<button class="arrow arrow-next"><i class="far fa-angle-right"></i></button>'
    })
    $('#about-header .slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slide-count #current').html(currentSlide+1);
    });

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