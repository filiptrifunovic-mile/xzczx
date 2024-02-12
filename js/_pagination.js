"use strict";

const Pagination = () => {
    const init = () => {
        window.updatePagination = function() {
            var $pagination = $('.js-pagination');
            if ($pagination.length > 0) {
                $pagination.each(function() {
                    var $this = $(this);
                    var $listItems = $this.find('li:not(:first-child):not(:last-child)');
                    var count = $listItems.length;
                    var $current = $listItems.filter('.active');
                    var current = parseInt($current.text());

                    if (count > 5) {
                        $listItems.hide();

                        if (current > 2) {
                            if (current < count - 1) {
                                $current.show();
                                $listItems.filter(':nth-child(2), :nth-last-child(2)').show();
                                $('<li class="ellipses"><span>&bull;&bull;&bull;</span></li>').insertAfter($current.prev());
                                $('<li class="ellipses"><span>&bull;&bull;&bull;</span></li>').insertBefore($current.next());
                            } else {
                                $listItems.filter(':nth-child(2), :nth-last-child(2), :nth-last-child(3), :nth-last-child(4)').show();
                                $('<li class="ellipses"><span>&bull;&bull;&bull;</span></li>').insertAfter($listItems.filter(':nth-child(2)'));
                            }
                        } else {
                            $listItems.filter(':nth-child(2), :nth-child(3), :nth-child(4), :nth-last-child(2)').show();
                            $('<li class="ellipses"><span>&bull;&bull;&bull;</span></li>').insertAfter($listItems.filter(':nth-child(4)'));
                        }
                    }
                });
            }
        }

        $(function() {
            updatePagination();
        });
    };

    return {
        init: init
    };
};

export default Pagination;