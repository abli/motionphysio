//Navigation Script
$(function() {  
    var pull = $('#pull');  
    var menu = $('nav ul');  
    var menuHeight = menu.height();  

    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
        });  
    });

    $(window).resize(function(){  
    var w = $(window).width();  

    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style');  
    }  
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