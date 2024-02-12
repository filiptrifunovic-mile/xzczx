"use strict";

const Banners = () => {
    const init = () => {
        $(function() {
            var $homeBanner = $('.js-home-banner');
            if ($homeBanner.length > 0) {
                var $bg = $homeBanner.find('.js-banner-background');
                var $scrolldown = $homeBanner.find('.js-scrolldown');
                var $hasBorder = $homeBanner.find('.container-small-inner');
                var $playButton = $homeBanner.find('.js-video-play');
                var $videoHolder = $homeBanner.find('.js-banner-video-holder');

                $(window).on('scroll', function() {
                    if ($(window).scrollTop() > $(window).height()) {
                        $bg.css('opacity', 0);
                        $bg.css('transform', 'translateY(-20%)');
                        $hasBorder.css('border-color', 'rgba(79,79,79,0)');
                    } else {
                        var ratio = $(window).scrollTop() / $(window).height();
                        var opacity = 1 - ratio;
                        var transform = ratio * 20;
                        $bg.css('opacity', opacity);
                        $bg.css('transform', 'translateY(-' + transform + '%)');
                        $hasBorder.css('border-color', 'rgba(79,79,79,' + opacity * (0.1 / (1 - opacity)) + ')');
                    }
                });

                $scrolldown.on('click', function() {
                    $('html, body').animate({
                        scrollTop: $(window).height()
                    }, 500);
                });

                $playButton.on('click', function() {
                    $playButton.remove();
                    if ($videoHolder.find('video source').length) {
                        $videoHolder.find('video')[0].play();
                    } else if ($videoHolder.find('iframe').length) {
                        $videoHolder.find('iframe').attr('src', $videoHolder.find('iframe').data('src'));
                    }
                });

                $(window).on('resize', function() {
                    var $videoHolder = $('.js-banner-video-holder');
                    var $video = $videoHolder.find('iframe, video');
                    $video.css('width', Math.max($videoHolder.outerWidth(), $videoHolder.outerHeight() * 16 / 9) + 'px');
                    $video.css('height', Math.max($videoHolder.outerHeight(), $videoHolder.outerWidth() * 9 / 16) + 'px');
                });
            }

            var $banner = $('.js-banner');
            if ($banner.length > 0) {
                var $bg = $banner.find('.js-banner-background');
                var $scrolldown = $banner.find('.js-scrolldown');

                $(window).on('scroll', function() {
                    if ($(window).scrollTop() > $(window).height()) {
                        $bg.css('opacity', 0);
                    } else {
                        var ratio = $(window).scrollTop() / $(window).height();
                        var opacity = 1 - ratio;
                        $bg.css('opacity', opacity);
                    }
                });

                $scrolldown.on('click', function() {
                    $('html, body').animate({
                        scrollTop: $(window).height()
                    }, 500);
                });
            }
        });
    };

    return {
        init: init
    };
};

export default Banners;