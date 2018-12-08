$(document).ready(function () {
    
    checkMenuScroll();

    $('section.parallax').parallax({
        imageSrc: '../images/eiffel-tower.jpg'
    });

    $('#want-to-know').click(function () {

        $(this).animate({
            opacity: '0'
        })

        setTimeout(() => {
            $(this).hide();
            $('#info-id > div').show();
            $('#info-id > div, #likes p, #likes h2').animate({
                opacity: '1',
                right: 0,
                left: 0
            });
        }, 300);

    });

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

    $(window).scroll(function () {
        checkMenuScroll();
    })

});

function checkMenuScroll() {
    var windowh = $(window).height();

    var a = $('#about-me').offset().top;
    var p = $('#port').offset().top;
    var c = $('#cont').offset().top;

    var scrollBottom = $(window).scrollTop() + windowh;
    var breakpoint = windowh * 0.75;

    if (scrollBottom >= (windowh * 1.5)) {

        var span1 = $('<span class="about">');
        var span2 = $('<span class="portfolio">');
        var span3 = $('<span class="contact">');
        var div = $('<div>');

        span1.text('ABOUT ME');

        $(div).append(span1, '<br>');

        span2.text('PORTFOLIO');

        $(div).append(span2, '<br>');

        span3.text('CONTACT');

        $(div).append(span3);

        $('#logo').html(div);

        $('#logo').css('width', 'auto');

        $('#logo span').css({
            'font-weight': 'normal',
            opacity: 0.5
        });

        if (scrollBottom < (p + breakpoint)) {
            $('.about').css({
                opacity: 1,
                'font-weight': 'bold'
            })
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
        $('#logo').empty();
    }
}
