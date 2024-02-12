"use strict";

const helpers = {
    setUrlParameter: (key, value) => {
        let url = new URL(window.location.href);
        let query_string = url.search;
        let search_params = new URLSearchParams(query_string);

        search_params.set(key, value);
        url.search = search_params.toString();

        window.history.pushState({}, "", url);
    },
    deleteUrlParameter: (key) => {
        let url = new URL(window.location.href);
        let query_string = url.search;
        let search_params = new URLSearchParams(query_string);

        search_params.delete(key);
        url.search = search_params.toString();

        window.history.pushState({}, "", url);
    },
    getUrlParameter: (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    isTouchDevice: () => {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }
};

export default helpers;