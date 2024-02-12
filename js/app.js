window.$ = window.jQuery = require('jquery');
require('./vendor/modernizr-custom');
require('./vendor/jquery-ui');
require("@popperjs/core");
require('bootstrap');
require('jquery-nice-select');
require('./vendor/form-builder');
require("@fancyapps/ui");
require('jquery-visible');
require('pikaday');
require('clockpicker/dist/bootstrap-clockpicker');

import objectFitVideos from 'object-fit-videos';
import objectFitImages from 'object-fit-images';
import AOS from 'aos';

import gaEvents from './vendor/ga-events';
import forms from './_forms';
import sliders from './_sliders';
import pagination from './_pagination';
import gMap from './_map';
import fancybox from './_fancybox';
import accordions from './_accordions';
import tabs from './_tabs';
import banners from './_banners';
import navigation from './_navigation';
import bikeCategories from './_bike_categories';
import ctaPlusBrands from './_cta_plus_brands';
import filters from './_filters';
import scrollers from './_scrollers';
import datePickers from './_date_pickers';
import popout from './_popout';

$(function() { // Shorthand for $( document ).ready()
    "use strict";
    // Your js script is below this line
    // --------------------------------------------------------------------- //

    window.GA = new gaEvents();
    GA.init();

    window.Forms = new forms();
    Forms.init();

    window.Sliders = new sliders();
    Sliders.init();

    window.Pagination = new pagination();
    Pagination.init();

    window.GMap = new gMap();
    GMap.init();

    window.Fancybox = new fancybox();
    Fancybox.init();

    window.Banners = new banners();
    Banners.init();

    window.Navigation = new navigation();
    Navigation.init();

    window.BikeCategories = new bikeCategories();
    BikeCategories.init();

    window.CtaPlusBrands = new ctaPlusBrands();
    CtaPlusBrands.init();

    window.Filters = new filters();
    Filters.init();

    window.Scrollers = new scrollers();
    Scrollers.init();

    window.Accordions = new accordions();
    Accordions.init();

    window.DatePickers = new datePickers();
    DatePickers.init();

    window.Popout = new popout();
    Popout.init();

    window.Tabs = new tabs();
    Tabs.init();

    $(function() {
        // WebP background image fallback swap
        const checkWebp = function() {
            if (!Modernizr.webp) {
                let $elements = $('*[data-webp-bg-fallback]');
                $elements.each(function() {
                    let fallback = $(this).data('webp-bg-fallback');
                    $(this).css('background-image', 'url(' + fallback + ')');
                });

                // Update img's with fallback
                let $images = $('*[data-webp-img-fallback]');
                $images.each(function() {
                    let fallback = $(this).data('webp-image-fallback');
                    $(this).attr('src', fallback);
                    $(this).removeAttr('srcset');
                });
            }
        };

        $(document).on('ajaxUpdate', function(event, context) {
            checkWebp();
        });
        checkWebp();

        $(window).trigger('resize');
        $(window).trigger('scroll');

        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
            disable: function() {
                return window.innerWidth < 992;
            }
        });

        $('html').addClass('ready');
    });

    window.AOSrefresh = function() {
        AOS.refresh();
    }

    // Sets inputs as filled when Google autocomplete prefills them
    $(window).on('load', function() {
        $('input:-webkit-autofill').each(function() {
            $(this).parents('.form-group').addClass('focused filled');
        });
    });

    objectFitVideos();
    objectFitImages('img');
});