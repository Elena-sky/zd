var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function(){
    $('.big-trees-item.rating').click(function(){
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
    $('.small-trees-item.rating').click(function(){
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
    var cols =  $("" +
        " .row.oneHeight > .col-xs-6," +
        " .row.oneHeight > .col-sm-6," +
        " .row.oneHeight > .col-md-6," +
        " .row.oneHeight > .col-lg-6");
    var heights = cols.map(function() {
            return $(this).height();
        }).get(),

        maxHeight = Math.max.apply(null, heights);

    $(cols).height(maxHeight);
});