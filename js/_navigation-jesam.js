"use strict";

const Navigation = () => {
    const init = () => {
        $(function() {
            var $navigation = $('.js-navigation');
            if ($navigation.length > 0) {
                var lastScrollPosition = 0;
                $(window).on('scroll', function() {
                    var currentScrollPosition = $(this).scrollTop();
                    if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= 0) {
                        $navigation.removeClass('hidden');
                        $('body').removeClass('hidden-nav');
                    } else {
                        $navigation.addClass('hidden');
                        $('body').addClass('hidden-nav');
                    }
                    if (currentScrollPosition > 0) {
                        $navigation.addClass('has-bg');
                    } else {
                        $navigation.removeClass('has-bg');
                    }
                    lastScrollPosition = currentScrollPosition;
                });

                $navigation.find('.js-navbar-toggle').on('click', function() {
                    $navigation.toggleClass('open');
                });

                $navigation.find('.js-mega-toggle').on('click', function() {
                    var $this = $(this);
                    var $mega = $navigation.find('.js-mega-menu[data-mega="' + $this.data('mega') + '"]');
                    if ($mega.hasClass('open')) {
                        $this.removeClass('open');
                        $mega.removeClass('open');
                        $navigation.removeClass('mega-open');
                    } else {
                        $navigation.find('.js-mega-menu').removeClass('open');
                        $navigation.find('.js-mega-toggle').removeClass('open');
                        $this.addClass('open');
                        $mega.addClass('open');
                        $navigation.addClass('mega-open');
                    }
                });
                $navigation.find('.js-mega-close').on('click', function() {
                    $navigation.find('.js-mega-toggle').removeClass('open');
                    $navigation.find('.js-mega-menu').removeClass('open');
                    $navigation.removeClass('mega-open');
                });

                var $images = $navigation.find('.js-mega-image');
                $navigation.find('.js-mega-category').on('mouseenter', function() {
                    var $this = $(this);
                    $images.removeClass('active');
                    $images.filter('[data-id="' + $this.data('id') + '"]').addClass('active');
                });

                $(window).click(function(e) {
                    if (!$(e.target).hasClass('js-mega-menu') && !$(e.target).parents('.js-mega-menu').length && !$(e.target).hasClass('js-mega-toggle') && !$(e.target).parents('.js-mega-toggle').length) {
                        $navigation.find('.js-mega-toggle').removeClass('open');
                        $navigation.find('.js-mega-menu').removeClass('open');
                        $navigation.removeClass('mega-open');
                    }
                });
            }
        });
    };

    return {
        init: init
    };
};

export default Navigation;