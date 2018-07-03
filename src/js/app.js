var $ = require('jquery');
var slick = require('slick-carousel');
var selectpicker = require('bootstrap-select');
var datetimepicker = require('eonasdan-bootstrap-datetimepicker');
var Chart = require('chart.js');
var tooltipster = require('tooltipster');

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


    // Define data set for all charts
    var dataOne = [1, 10, 5, 2, 20, 30, 45];
    var dataTwo = [20, 30, 15, 12, 21, 30, 40];
    myData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data 1",
                fill: false,
                backgroundColor: "rgb(254, 179, 42, 0.25)",
                borderColor: "rgb(254, 179, 42)",
                data: dataOne
            },
            {
                label: "Data 2",
                fill: true,
                backgroundColor: "rgba(142, 184, 74, 0.25)",
                borderColor: "rgb(142, 184, 74)",
                data: dataTwo
            }
        ]
    };

    // Default chart defined with type: 'line'
    Chart.defaults.global.defaultFontFamily = "inherit";
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "line",
        data: myData,
        options: {
            legend: {
                //display: false,
                position: 'left'
            }
        }
    });
    var bd = $('<div class="modal-backdrop in"></div>');
    var hoverEffect = function () {
        bd.appendTo(document.body);
    };
    $(".hoverEffect").hover( function () {
        console.log('hover');
        bd.appendTo(document.body);
    });
    $('.hoverEffect').on("mouseleave", function () {
        bd.remove();
    });
    $(".hoverEffect").tooltipster({
        delay: 300,
        side: 'top',
        multiple: true,
        touchDevices: true,
        theme: 'tooltipster-shadow',
        autoClose: true,
        trigger: 'hover'
    });
});