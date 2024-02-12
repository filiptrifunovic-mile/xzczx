"use strict";

const Scrollers = () => {
    const init = () => {
        $(function() {
            var $scrollto = $('.js-scrollto');
            if ($scrollto.length > 0) {
                $scrollto.on('click', function() {
                    var $this = $(this);
                    $('html, body').animate({
                        scrollTop: $($this.data('scrollto')).offset().top
                    }, 100);
                });
            }
            if (window.location.hash) {
                if (window.location.hash == '#results') {
                    $('html, body').animate({
                        scrollTop: $('.js-bike-filters').offset().top
                    }, 100);
                }
            }
        });
    };

    return {
        init: init
    };
};

export default Scrollers;