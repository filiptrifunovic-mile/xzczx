"use strict";

const CtaPlusBrands = () => {
    const init = () => {
        $(function() {
            var $ctaPlusBrands = $('.js-cta-plus-brands');
            if ($ctaPlusBrands.length > 0) {
                var $overlay1 = $ctaPlusBrands.find('.js-cta-overlay1');
                var $overlay2 = $ctaPlusBrands.find('.js-cta-overlay2');
                var $bg = $ctaPlusBrands.find('.js-cta-background');
                var $brandsLinks = $ctaPlusBrands.find('.js-brands-links');

                $(window).on('scroll', function() {
                    if ($(window).scrollTop() > $ctaPlusBrands.offset().top + $ctaPlusBrands.outerHeight()) {
                        $overlay1.css('opacity', 1);
                        $overlay2.css('opacity', 1);
                        $bg.css('transform', 'translateY(-10vh)');
                    } else if ($(window).scrollTop() >= $ctaPlusBrands.offset().top) {
                        var opacity1 = ($(window).scrollTop() - $ctaPlusBrands.offset().top) / $ctaPlusBrands.find('.cta').outerHeight();
                        if ($brandsLinks.length) {
                            var opacity2 = ($(window).scrollTop() - $ctaPlusBrands.offset().top) / $brandsLinks.outerHeight();
                        } else {
                            var opacity2 = ($(window).scrollTop() - $ctaPlusBrands.offset().top) / $(window).height();
                        }
                        var positionRatio = ($(window).scrollTop() - $ctaPlusBrands.offset().top) / ($ctaPlusBrands.outerHeight());
                        if (positionRatio < 0) {
                            positionRatio = 0;
                        } else if (positionRatio > 1) {
                            positionRatio = 1;
                        }
                        var position = positionRatio * -10;
                        $overlay1.css('opacity', opacity1);
                        $overlay2.css('opacity', opacity2);
                        $bg.css('transform', 'translateY(' + position + 'vh)');
                    } else {
                        $overlay1.css('opacity', 0);
                        $overlay2.css('opacity', 0);
                        $bg.css('transform', 'translateY(0)');
                    }
                });
            }

            var $brands = $('.js-brands');
            if ($brands.length > 0) {
                var brandsPage = 0;
                $('.js-brand-prev').on('click', function() {
                    if (brandsPage > 0) {
                        brandsPage--;
                    } else {
                        brandsPage = 0;
                    }

                    $brands.find('.js-brand').removeClass('active')
                    for (var i = 1; i <= 7; i++) {
                        $ctaPlusBrands.find('.js-brand:nth-child(' + (brandsPage * 7 + i) + ')').addClass('active')
                    }
                });

                $('.js-brand-next').on('click', function() {
                    if (brandsPage < Math.floor($brands.find('.js-brand').length / 7) - 1) {
                        brandsPage++;
                    } else {
                        brandsPage = Math.floor($brands.find('.js-brand').length / 7) - 1;
                    }

                    $brands.find('.js-brand').removeClass('active');
                    for (var i = 1; i <= 7; i++) {
                        $brands.find('.js-brand:nth-child(' + (brandsPage * 7 + i) + ')').addClass('active')
                    }
                });
            }
        });
    };

    return {
        init: init
    };
};

export default CtaPlusBrands;