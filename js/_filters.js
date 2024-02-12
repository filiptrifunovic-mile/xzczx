"use strict";

const Filters = () => {
    const init = () => {
        $(function() {
            var $filters = $('.js-filters');

            if ($filters.length) {
                var $form = $filters.find('.js-filters-form');
                var $sort = $filters.find('.js-filters-sort');
                var $tags = $filters.find('.js-filters-tag');
                var $toggle = $filters.find('.js-filters-toggle');
                var $dropdowns = $filters.find('.js-filters-dropdown');
                var $checkboxes = $filters.find('input[type="checkbox"]');

                $sort.on('change', function() {
                    $form.find('[name="sort"]').val($(this).val());
                    if ($form.hasClass('js-auto-submit')) {
                        $form.find('.ajax-submit').trigger('click');
                    }
                });

                $dropdowns.find('.nice-select').on('change', function() {
                    if ($(this).val() !== '') {
                        $(this).parents('.js-filters-dropdown').addClass('filled');
                    } else {
                        $(this).parents('.js-filters-dropdown').removeClass('filled');
                    }
                    $form.find('[name="page"]').val(1);
                });

                $tags.on('click', function() {
                    if ($(this).hasClass('active')) {
                        $tags.removeClass('active');
                        $form.find('[name="tag"]').val('');
                    } else {
                        $tags.removeClass('active');
                        $(this).addClass('active');
                        $form.find('[name="tag"]').val($(this).data('id'));
                    }
                    if ($form.hasClass('js-auto-submit')) {
                        $form.find('[name="page"]').val(1);
                        $form.find('.ajax-submit').trigger('click');
                    }
                });

                $checkboxes.on('change', function() {
                    $form.find('[name="page"]').val(1);
                });

                if ($form.hasClass('js-auto-submit')) {
                    $form.find('[type="checkbox"], .nice-select').on('change', function() {
                        $form.find('.ajax-submit').trigger('click');
                    });
                }

                if ($form.hasClass('js-update-url')) {
                    $form.find('.ajax-submit').on('click', function() {
                        var model = {};
                        $.map($form.serializeArray(), function(n, i) {
                            if (model[n['name']] !== undefined && Array.isArray(model[n['name']])) {
                                model[n['name']].push(n['value']);
                            } else if (model[n['name']] !== undefined) {
                                model[n['name']] = [model[n['name']], n['value']]
                            } else {
                                model[n['name']] = n['value'];
                            }
                        });
                        history.pushState({}, null, window.location.pathname + '?' + decodeURIComponent(new URLSearchParams(model).toString()));
                    });
                }

                $form.find('.js-filters-reset').on('click', function() {
                    $form.find('[type="checkbox"]').prop('checked', false);
                    $form.find('.nice-select').val('');
                    $form.find('.nice-select').niceSelect('update');
                    $sort.val('');
                    $sort.niceSelect('update');
                    $tags.removeClass('active');
                    $form.find('[name="tag"]').val('');
                    $form.find('[name="page"]').val(1);
                    $form.find('.ajax-submit').trigger('click');
                });

                $toggle.on('click', function() {
                    if ($form.hasClass('active')) {
                        $form.removeClass('active');
                        $('html, body').animate({
                            scrollTop: $filters.offset().top
                        }, 100);
                    } else {
                        $form.addClass('active');
                    }
                });
            }
        });
    };

    return {
        init: init
    };
};

export default Filters;