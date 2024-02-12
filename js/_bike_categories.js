"use strict";

const BikeCategories = () => {
    const init = () => {
        $(function() {

            var $cats = $('.js-bike-categories');
            if ($cats.length > 0) {
                var $columns = $cats.find('.js-cat-column');
                var $images = $cats.find('.js-cat-image');

                $columns.on('mouseenter', function() {
                    if ($(window).width() >= 992) {
                        var $this = $(this);
                        $images.removeClass('active');
                        $images.filter('[data-id="' + $this.data('id') + '"]').addClass('active');
                        $this.find('.hidden').slideDown({
                            start: function() {
                                $(this).css('display', 'flex')
                            }
                        });
                    } else {
                        $columns.find('.hidden').show();
                    }
                });
                $columns.on('mouseleave', function() {
                    if ($(window).width() >= 992) {
                        var $this = $(this);
                        $images.filter('[data-id="' + $this.data('id') + '"]').removeClass('active');
                        $this.find('.hidden').slideUp();
                    }
                });
            }

            var $subs = $('.js-bike-subcategories');
            if ($subs.length > 0) {
                var $sections = $subs.find('.js-sub');
                var lastScrollPosition = 0;
                $(window).on('scroll', function() {
                    var currentScrollPosition = $(window).scrollTop();
                    if (currentScrollPosition + $(window).height() < $subs.outerHeight() + $subs.offset().top && currentScrollPosition + $(window).height() > $subs.offset().top) {
                        if (currentScrollPosition >= lastScrollPosition) {
                            $sections.each(function() {
                                if ($(this).find('.text .swatch').visible(true)) {
                                    $subs.find('.text').removeClass('bg-brand-navy-700 bg-brand-green-700')
                                    $subs.find('.text').addClass($(this).data('bg'));
                                    return false;
                                }
                            });
                        } else {
                            $($sections.get().reverse()).each(function() {
                                if ($(this).find('.text .swatch').visible(true)) {
                                    $subs.find('.text').removeClass('bg-brand-navy-700 bg-brand-green-700')
                                    $subs.find('.text').addClass($(this).data('bg'));
                                    return false;
                                }
                            });
                        }
                    }
                    lastScrollPosition = currentScrollPosition;
                });
            }
        });
    };

    return {
        init: init
    };
};

export default BikeCategories;