"use strict";
require('slick-carousel');

const Sliders = () => {
    const init = () => {
        $(function() {

            var $homeSliderContainer = $('.js-home-slider-container');
            if ($homeSliderContainer.length > 0) {
                var $homeSlider = $homeSliderContainer.find('.js-home-slider');
                var $sliderTracker = $homeSliderContainer.find('.js-slider-tracker');

                $homeSlider.on('init', function(event, slick) {
                    $sliderTracker.css('width', (100 / slick.slideCount) + '%');
                });

                $homeSlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    touchThreshold: 500,
                });

                $homeSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                    $sliderTracker.css('transform', 'translateX(' + (100 * nextSlide) + '%)')
                })
            }

            var $bannerSliderContainer = $('.js-banner-slider-container');
            if ($bannerSliderContainer.length > 0) {
                var $bannerSlider = $bannerSliderContainer.find('.js-banner-slider');

                $bannerSlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    touchThreshold: 500,
                });
            }

            var $bikeSliderContainer = $('.js-bike-slider-container');
            if ($bikeSliderContainer.length > 0) {
                var $bikeSlider = $bikeSliderContainer.find('.js-bike-slider');

                $bikeSlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    touchThreshold: 500,
                });

                $bikeSliderContainer.find('.js-slider-prev').on('click', function() {
                    $bikeSlider.slick('slickPrev');
                });

                $bikeSliderContainer.find('.js-slider-next').on('click', function() {
                    $bikeSlider.slick('slickNext');
                });
            }

            var $gallerySliderContainer = $('.js-gallery-slider-container');
            if ($gallerySliderContainer.length > 0) {
                var $gallerySlider = $gallerySliderContainer.find('.js-gallery-slider');
                var $currentSlide = $gallerySliderContainer.find('.js-slider-current');
                var $fullscreen = $gallerySliderContainer.find('.js-slider-fullscreen');

                $gallerySlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    variableWidth: true,
                    touchThreshold: 500,
                });

                $gallerySlider.on('beforeChange', function(event, slick, current, next) {
                    next++;
                    if (next > slick.slideCount) {
                        next = 1;
                    }
                    $currentSlide.text(next < 10 ? '0' + next : next);
                });

                $fullscreen.on('click', function() {
                    $gallerySliderContainer.find('[data-fancybox][data-id="' + $gallerySlider.find('.slick-active').data('slick-index') + '"]').trigger('click');
                });

                $gallerySliderContainer.find('.js-slider-prev').on('click', function() {
                    $gallerySlider.slick('slickPrev');
                });

                $gallerySliderContainer.find('.js-slider-next').on('click', function() {
                    $gallerySlider.slick('slickNext');
                });
            }

            var $relatedSliderContainer = $('.js-related-slider-container');
            if ($relatedSliderContainer.length > 0) {
                var $relatedSlider = $relatedSliderContainer.find('.js-related-slider');

                $relatedSlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    touchThreshold: 500,
                    slidesToShow: 1,
                    mobileFirst: true,
                    responsive: [{
                            breakpoint: 1365,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]
                });

                $relatedSliderContainer.find('.js-slider-prev').on('click', function() {
                    $relatedSlider.slick('slickPrev');
                });

                $relatedSliderContainer.find('.js-slider-next').on('click', function() {
                    $relatedSlider.slick('slickNext');
                });
            }

            var $reviewsSliderContainer = $('.js-reviews-slider-container');
            if ($reviewsSliderContainer.length > 0) {
                var $reviewsSlider = $reviewsSliderContainer.find('.js-reviews-slider');

                $reviewsSlider.slick({
                    infinite: true,
                    arrows: false,
                    dots: false,
                    variableWidth: true,
                    centerMode: true,
                    touchThreshold: 500,
                });

                $reviewsSliderContainer.find('.js-slider-prev').on('click', function() {
                    $reviewsSlider.slick('slickPrev');
                });

                $reviewsSliderContainer.find('.js-slider-next').on('click', function() {
                    $reviewsSlider.slick('slickNext');
                });
            }

        });
    };

    return {
        init: init
    };
};

export default Sliders;