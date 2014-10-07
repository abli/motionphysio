//Navigation Script
$(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    var w;
    $(window).resize(function(){
        w = $(window).width();

        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

//Smooth Scroll.

$(function() {
    var $root = $('html, body');

    $('a').click(function() {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top - 50
        }, 800, function () {
            window.location.hash = href;
        });
    
        return false;
    });
});

// navigation color switch on scroll

var t = $('#home-text').offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > t) {
        $('header').css({'background-color': '#075c91'});
    }
    else {
        $('header').removeAttr('style');
    }
});
