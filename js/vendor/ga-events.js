"use strict";

const gaEvents = () => {
    const init = () => {
        pdfDownload();
        telClick();
        mailToClick();
        formSubmit();
        iframeLoad();
    };

    const findParam = (name) => {
        let result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function(item) {
                tmp = item.split("=");
                if (tmp[0] === name) result = decodeURIComponent(tmp[1]);
            });
        return result;
    };

    const pdfDownload = () => {
        $('a[target="_blank"]').click(function() {
            var str = $(this).attr('href');
            if (str.indexOf('.pdf') >= 0) {
                gtag('event', 'DOWNLOADED', {
                    'event_category': 'MEDIA',
                    'event_label': 'pdf downloaded ' + $(location).attr('pathname') + $(location).attr('search')
                });
            } else {
                //offsite link
            }
        });
    };

    const telClick = () => {
        $('a[href^="tel:"]').click(function() {
            var t = $(this).parent();
            while (!t[0].hasAttribute('id') && !t.is('body')) {
                t = t.parent();
            }
            if (t[0].hasAttribute('id')) {
                var id = t.attr('id');
            } else {
                var id = 'body';
            }
            gtag('event', 'ENGAGED', {
                'event_category': 'ENQUIRY',
                'event_label': id + ' tel ' + $(location).attr('pathname') + $(location).attr('search')
            });
        });
    };

    const mailToClick = () => {
        $('a[href^="mailto:"]').click(function() {
            var t = $(this).parent();
            while (!t[0].hasAttribute('id') && !t.is('body')) {
                t = t.parent();
            }
            if (t[0].hasAttribute('id')) {
                var id = t.attr('id');
            } else {
                var id = 'body';
            }
            gtag('event', 'ENGAGED', {
                'event_category': 'ENQUIRY',
                'event_label': id + ' mailto ' + $(location).attr('pathname') + $(location).attr('search')
            });
        });
    };

    const formSubmit = () => {
        $('form').submit(function() {
            let context;
            let action = $(this).attr('action');
            if (action) {
                action = action.split('?');
                if (action.length > 1) {
                    context = action[1];
                } else {
                    context = action[0];
                }
                gtag('event', 'SUBMITTED', {
                    'event_category': 'ENQUIRY',
                    'event_label': 'form submitted ' + context + ' ' + $(location).attr('pathname') + $(location).attr('search')
                });
            }
        });
    };

    const iframeLoad = () => {
        $('iframe').on('load', function() {
            if ($(this).attr('src') != '') {
                gtag('event', 'VIEWED', {
                    'event_category': 'MEDIA',
                    'event_label': 'iframe viewed ' + $(this).attr('src') + ' ' + $(location).attr('pathname') + $(location).attr('search')
                });
            }
        });
    };

    const onFormSuccess = (form_id) => {
        // Check for successfull form submissions
        gtag('event', 'SUCCESSFUL', {
            'event_category': 'ENQUIRY',
            'event_label': 'form submitted successfully ' + form_id + ' ' + $(location).attr('pathname') + $(location).attr('search')
        });
    };

    return {
        init: init,
        onFormSuccess: onFormSuccess
    };
};

export default gaEvents;