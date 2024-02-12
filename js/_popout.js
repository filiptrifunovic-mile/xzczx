"use strict";

const Popout = () => {
    const init = () => {
        $(function() {
            var $popout = $('.js-popout');
            var $anchorPopup = $('a[href*="#"]')

            window.resetPopoutTriggers = function() {
                var $popoutTriggers = $('.js-popout-trigger');

                $popoutTriggers.off('click');
                $popoutTriggers.on('click', function() {
                    var $this = $(this);
                    openPopup($this.data('popout'));
                    if ($this.data('prefill')) {
                        var prefill = $this.data('prefill')
                        for (var key in prefill) {
                            $popout.filter('.js-popout[data-hash="' + $(this).data('popout') + '"]').find('[name="' + key + '"]').val(prefill[key]);
                            $popout.filter('.js-popout[data-hash="' + $(this).data('popout') + '"]').find('[name="' + key + '"]').parents('.form-group').addClass('filled');
                        }
                    }
                });

                $anchorPopup.off('click')
                $anchorPopup.on('click', function(e) {
                    var $hash = $(this).attr('href').replace('#', '')
                    if ($popout.filter('.js-popout[data-hash="' + $hash + '"]').length) {
                        e.preventDefault();
                        openPopup($hash);
                    }
                })
            }

            const openPopup = ($hash) => {
                $popout.removeClass('open');
                console.log($popout.find('.popout-body'))
                $popout.filter('.js-popout[data-hash="' + $hash + '"]').addClass('open');
            }

            resetPopoutTriggers();

            $popout.find('.js-popout-close').on('click', function() {
                $popout.removeClass('open');
            });

            window.closePopout = function() {
                $('.js-popout').removeClass('open');
            };
        });
    };

    return {
        init: init
    };
};

export default Popout;