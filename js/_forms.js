"use strict";

import helpers from "./_helpers";

const Forms = () => {
    const init = () => {
        $(document).ready(function() {

            // Enable niceselect on nice-selected dropdowns
            $('.nice-select').niceSelect();
            // Enable focus states
            $(document).on('click.nice_select', function(event) {
                $('.nice-select').parents('.form-group').removeClass('focused');

                if ($(event.target).closest('.nice-select').length !== 0) {
                    $(event.target).closest('.nice-select').parents('.form-group').addClass('focused');
                }
            });
            // Refreshonselect
            $('.refreshonselect').on('change', function() {
                $(this).parents('form').find('[name="page"]').val(1);
                $('.nice-select').niceSelect('destroy');
                $(this).parents('form').find('.ajax-submit').trigger('click');
                $('.nice-select').niceSelect();
            });
            // Close nice select on click
            $('.nice-select ul li').click(function() {
                setTimeout(function() {
                    $('.nice-select').removeClass("open");
                }, 10);
            });

            $("input[type='date']").parent().addClass('date-field');
            /**
             * Handle input focus to animate labels
             */
            $('input, textarea').each(function() {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).parents('.form-group').removeClass('filled');
                } else {
                    $(this).parents('.form-group').addClass('filled');
                }
            });

            $(document).on('focus', 'input, textarea', function(e) {
                $(this).parents('.form-group').addClass('focused');
            });

            $(document).on('blur', 'input, textarea, select', function(e) {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).parents('.form-group').removeClass('filled');
                    $(this).parents('.form-group').removeClass('focused');
                } else {
                    $(this).parents('.form-group').addClass('filled');
                }
            });

            $(document).on('change', 'select', function(e) {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).parents('.form-group').removeClass('filled');
                } else {
                    $(this).parents('.form-group').addClass('filled');
                }
            });

            $('input, textarea').on('animationstart webkitAnimationStart oAnimationStart MSAnimationStart', function() {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).parents('.form-group').removeClass('filled');
                    $(this).parents('.form-group').removeClass('focused');
                } else {
                    $(this).parents('.form-group').addClass('filled');
                }
            })

            $('input, textarea').on('animationstart webkitAnimationStart oAnimationStart MSAnimationStart', function() {
                var inputValue = $(this).val();
                if (inputValue == "") {
                    $(this).parents('.form-group').removeClass('filled');
                    $(this).parents('.form-group').removeClass('focused');
                } else {
                    $(this).parents('.form-group').addClass('filled');
                }
            })

            $('.nice-select').on('animationstart webkitAnimationStart oAnimationStart MSAnimationStart', function() {
                $(this).niceSelect('update');
            })

            // Make all 'disabled' values actually disabled - not available in form builder
            $("option:selected").each(function() {
                let $option = $(this);
                if ($option.val() === 'disabled') {
                    $option.attr('disabled', true);
                    $option.attr('selected', true);
                }
            });

            // Add '*' to required fields
            $('input:required, select:required, textarea:required').each(function() {
                let $label = $(this).parents('.form-group').find('label');
                $label.addClass('required');
            });
        });
        //////////////////////////////////////////////
        // Paginate Hook
        //////////////////////////////////////////////
        // Listen for ajax success events & jump the page to the results
        $(document).ajaxSuccess(function(xhr) {
            if (typeof xhr.target.nodeName !== 'undefined' && xhr.target.nodeName === 'FORM') {
                if ($(xhr.target).parents('.js-bike-filters').length > 0) {
                    $('html, body').animate({
                        scrollTop: $('.js-bike-filters').offset().top
                    }, 100);
                    paginateHook();
                } else if ($("#results").length > 0) {
                    $('html, body').animate({
                        scrollTop: $("#results").offset().top
                    }, 100);
                    paginateHook();
                }
                onSuccess(xhr.target);
            }
        });
        $(document).ajaxError(function(xhr) {
            if (typeof xhr.target.nodeName !== 'undefined' && xhr.target.nodeName === 'FORM') {
                if ($(xhr.target).parents('.js-bike-filters').length > 0) {
                    $('html, body').animate({
                        scrollTop: $('.js-bike-filters').offset().top
                    }, 100);
                    paginateHook();
                } else if ($("#results").length > 0) {
                    $('html, body').animate({
                        scrollTop: $("#results").offset().top
                    }, 100);
                    paginateHook();
                }
                onError(xhr.target);
            }
        });

        function getParam(name, url) {
            if (!url)
                url = location.href;
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            return results === null ? null : results[1];
        }

        function paginateHook() {
            // Duplicate pagination to outside of reload area
            $("#move-pagination-target").html($('#move-pagination-js').html());
            $('.pagination a').on('click', function(e) {
                e.preventDefault();
                var page = getParam('page', $(this).attr('href'));
                helpers.setUrlParameter('page', page);
                var form = $(this).parents('[data-form]').data('form');
                $(form).find('[name="page"]').val(page);
                $(form).find('.ajax-submit').trigger('click');
            });
        }

        paginateHook();
    };

    const onSuccess = (form) => {
        $(form).find('.alert-success').addClass('show');
        $(form).find('.alert-danger').removeClass('show');
        if ($(form).parents('.js-bike-filters').length > 0) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $('.js-bike-filters').offset().top
            }, 200);
        } else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(form).offset().top
            }, 200);
        }
    };

    const onError = (form) => {
        $(form).find('.alert-danger').addClass('show');
        $(form).find('.alert-success').removeClass('show');
        if ($(form).parents('.js-bike-filters').length > 0) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $('.js-bike-filters').offset().top
            }, 200);
        } else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(form).offset().top
            }, 200);
        }
    };

    return {
        init: init,
        onSuccess: onSuccess,
        onError: onError
    };
};

export default Forms;