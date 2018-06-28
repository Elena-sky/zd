var $ = require('jquery');
var slick = require('slick-carousel');
var selectpicker = require('bootstrap-select');
var datetimepicker = require('eonasdan-bootstrap-datetimepicker');

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
    $(".geste-slider").slick({
        centerPadding: '25%',
        slidesToShow: 1,
        arrows: true,
        centerMode: true,
        infinite: true,
        dots: true,
        prevArrow:"<button type='button' class='slick-prev btn btn-rounded bg-warning pull-left'><i class='fa fa-angle-left'" +
        " aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next btn btn-rounded bg-warning pull-right'><i class='fa fa-angle-right'" +
        " aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#datetimepicker12').datetimepicker({
        inline: true,
        format: 'Do MMM'
    });
});