$(document).ready(function () {

    checkMenuScroll();

    $('section.parallax').parallax({
        imageSrc: '../images/eiffel-tower.jpg',
        speed: 0.6
    });

    $('#social i, #my-contact').hover(function () {
        $('#my-contact').addClass('showing');
        $('#social i').css('transform', 'rotate(-180deg)');
    }, function () {
        $('#my-contact').removeClass('showing');
        $('#social i').css('transform', 'rotate(0deg)');
    });

    setTimeout(function () {
        $('#main-banner').css('right', '0');
    }, 400);

    setTimeout(function () {
        $('#menu').css('left', '0');
    }, 600);

    $('#top-menu').width($(window).width() - $('#social').width());

    $('#top-menu span').click(function () {
        $('#top-menu span').css({
            'font-weight': 'normal',
            opacity: 0.5
        });
        
        $(this).css({
            opacity: 1,
            'font-weight': 'bold'
        });
    })

    $('body').on('click', '.about', function () {
        var offset = $('#about-me').offset().top;

        $('html').animate({
            scrollTop: offset
        }, 500);
    });

    $('body').on('click', '.portfolio', function () {
        var offset = $('#port').offset().top;
        $('html').animate({
            scrollTop: offset
        }, 800);
    });


    $('body').on('click', '.contact', function () {
        var offset = $('#cont').offset().top;

        $('html').animate({
            scrollTop: offset
        }, 800);
    });

    $('.arrows').hover(function () {
        $(this).addClass('fas').removeClass('far');
    }, function () {
        $(this).addClass('far').removeClass('fas');
    });

    $(window).scroll(function () {
        checkMenuScroll();
    });

});

function checkMenuScroll() {
    var windowh = $(window).height();

    var a = $('#about-me').offset().top;
    var p = $('#port').offset().top;
    var c = $('#cont').offset().top;

    var scrollBottom = $(window).scrollTop() + windowh;
    var breakpoint = windowh * 0.75;

    if (scrollBottom >= (windowh * 1.5)) {


        $('#top-menu').css('top', '0');

        $('#top-menu span').css({
            'font-weight': 'normal',
            opacity: 0.5
        });

        if (scrollBottom < (p + breakpoint)) {
            $('.about').css({
                opacity: 1,
                'font-weight': 'bold'
            });
            setTimeout(() => {
                $('#likes p, #likes h2').animate({
                    opacity: '1',
                    right: 0,
                    left: 0
                });
            }, 300);
        }
        else if (scrollBottom > (p + breakpoint) && scrollBottom < (c + breakpoint)) {
            $('.portfolio').css({
                opacity: 1,
                'font-weight': 'bold'
            });
        }
        else if (scrollBottom > (c + breakpoint)) {
            $('.contact').css({
                opacity: 1,
                'font-weight': 'bold'
            })
        }

    }
    else {
        $('#top-menu').css('top', '-100%');
    }
}

function changeSlide(n) {
    var oldSlide = $('.current-slide').attr('data-slide');
    var newSlide = parseInt(oldSlide) + n;
    var slides = $('.slides').length;
    $('.current-slide').removeClass('current-slide');
    $('.active').removeClass('active');

    if (newSlide > slides) {
        setSlide(1);
    }
    else if (newSlide < 1) {
        setSlide(slides);
    }
    else {
        setSlide(newSlide);
    }
}

function setSlide(s) {
    var slideIndex = s - 1;
    setTimeout(function () {
        $('.slides')[slideIndex].classList.add('current-slide');
        $('.dots')[slideIndex].classList.add('active');
    }, 100);
}