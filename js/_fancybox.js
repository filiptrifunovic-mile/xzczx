"use strict";

const Fancybox = () => {
    const init = () => {
        $(function() {

            //////////////////////////////////////////////
            // Fancybox
            //////////////////////////////////////////////
            Fancybox.bind('[data-fancybox!="gallery"]', {

            });
            Fancybox.bind('[data-fancybox="gallery"]', {
                Carousel: true
            });
        });
    };

    return {
        init: init
    };
};

export default Fancybox;