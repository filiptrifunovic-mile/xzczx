"use strict";

import Pikaday from 'pikaday';

const DatePickers = () => {
    const init = () => {
        $(function() {
            $('.js-datepicker').each(function() {
                var options = {
                    field: $(this)[0],
                    format: 'D/M/YYYY',
                }
                if ($(this).data('datepicker-options')) {
                    options = $.extend({}, options, $(this).data('datepicker-options'))
                }
                if ($(this).data('datepicker-past') !== undefined) {
                    options = $.extend({}, options, {
                        maxDate: new Date()
                    })
                }
                if ($(this).data('datepicker-future') !== undefined) {
                    options = $.extend({}, options, {
                        minDate: new Date()
                    })
                }
                new Pikaday(options);
            });

            $('.js-timepicker').clockpicker({
                autoclose: true,
            });
        });
    };

    return {
        init: init
    };
};

export default DatePickers;