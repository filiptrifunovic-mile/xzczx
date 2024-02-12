"use strict";

const Accordions = () => {
    const init = () => {
        $(function() {
            var $accordions = $('.js-accordion');
            if ($accordions.length) {
                $accordions.find('.js-accordion-title').off('click');
                $accordions.find('.js-accordion-title').on('click', function() {
                    var $parent = $(this).parents('.js-accordion');
                    if ($parent.hasClass('active')) {
                        $parent.removeClass('active');
                        $parent.find('.js-accordion-content').slideUp();
                    } else {
                        if ($parent.data('exclusive') !== undefined) {
                            $accordions.filter('.active').find('.js-accordion-content').slideUp();
                            $accordions.removeClass('active');
                            $parent.addClass('active');
                        } else {
                            $parent.addClass('active');
                            $parent.find('.js-accordion-content').slideDown();
                        }
                    }
                });

                $accordions.filter('[data-starts-open]').find('.js-accordion-title').trigger('click');
            }
        });
    };

    return {
        init: init
    };
};

export default Accordions;