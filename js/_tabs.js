"use strict";

const Tabs = () => {
    const init = () => {
        $(function() {
            var $tabsContainer = $('.js-tabs');
            if ($tabsContainer.length > 0) {

                var $tabs = $tabsContainer.find('.js-tabs-tab');

                $('.js-tabs-mobile-toggle').on('change', function() {
                    var $tab = $tabs.filter('[data-id="' + $(this).val() + '"]');
                    showTab($tab);
                });

                $tabs.on('click', function() {
                    var $tab = $(this);
                    showTab($tab);
                    $('.js-tabs-mobile-toggle').val($tab.data('id'));
                    $('.nice-select').niceSelect('destroy');
                    $('.nice-select').niceSelect();
                });

                // Initial load
                if ($(window).width() >= 768) {
                    $tabs.filter(':first-child').trigger('click');
                } else {
                    var $tab_headers = $tabsContainer.find('.js-tab-acc-header');
                    $tabs.filter(':first-child').each(function() {
                        var $tab = $(this);
                        var $tab_header = $tab_headers.filter('[data-id="' + $tab.data('id') + '"]');
                        if (!$tab_header.hasClass('js-tab-acc-header')) {
                            $tab.trigger('click');
                        }
                    })
                }
            }

            function showTab($tab) {
                var $pages = $tabsContainer.find('.js-tabs-page');
                $tab.siblings('.js-tabs-tab').removeClass('open');
                $tab.addClass('open')
                $pages.removeClass('open');
                var $page = $pages.filter('[data-id="' + $tab.data('id') + '"]');
                $page.addClass('open');
                $page.parents('.js-tabbed-pages-container').height($page.height());
            }
        });
    };

    return {
        init: init
    };
};

export default Tabs;