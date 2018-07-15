var $ = require('jquery');
var slick = require('slick-carousel');
var selectpicker = require('bootstrap-select');
var datetimepicker = require('eonasdan-bootstrap-datetimepicker');
var highcharts = require('highcharts');
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



    // highchart js evolutions script

    // $("#a1").click(function () {
    //     $('.highcharts-legend-item:nth-child(1)').click();
    //     $(this).toggleClass("leg-clicked");
    // });
    // $("#a2").click(function () {
    //     $('.highcharts-legend-item:nth-child(2)').click();
    //     $(this).toggleClass("leg-clicked");
    // });
    // $("#a3").click(function () {
    //     $('.highcharts-legend-item:nth-child(3)').click();
    //     $(this).toggleClass("leg-clicked");
    // });
    //
    // $('#container').highcharts({
    //     chart: {
    //         backgroundColor: '#fff',
    //         type: 'area'
    //         //type: 'column',
    //         //renderTo: 'container'
    //     },
    //     title: {
    //         text: '' //'CPM IMPS SPEND BY TIME'
    //     },
    //     legend: {
    //         align: 'center',
    //         x: 0,
    //         y: 10,
    //         backgroundColor: '#272D31',
    //         color: '#fff',
    //         layout: 'horizontal',
    //         floating: true,
    //         verticalAlign: 'top',
    //         shadow: false,
    //         border: 0,
    //         borderRadius: 0,
    //         borderWidth: 0
    //     },
    //
    //     subtitle: {
    //         text: ''
    //     },
    //     xAxis: {
    //         allowDecimals: false,
    //         labels: {
    //             formatter: function () {
    //                 return 'Week ' + this.value; // clean, unformatted number for year
    //             }
    //         }
    //     },
    //     yAxis: {
    //         title: {
    //             text: ''
    //         },
    //         labels: {
    //             formatter: function () {
    //                 return this.value / 1000 + 'k';
    //             }
    //         },
    //
    //         gridLineWidth: 0,
    //         minorGridLineWidth: 0
    //     },
    //     tooltip: {
    //         pointFormat: '{series.name}  <b>{point.y:,.0f}</b><br/>:{point.x}'
    //     },
    //     plotOptions: {
    //         area: {
    //             pointStart: 1,
    //             marker: {
    //                 enabled: false,
    //                 symbol: 'circle',
    //                 radius: 2,
    //                 states: {
    //                     hover: {
    //                         enabled: true
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     series: [{
    //         name: 'CPM',
    //         data: [20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20234,
    //             20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20434, 20234],
    //         color: '#57BC00'
    //     }, {
    //         name: 'IMPS',
    //         data: [30434, 30434, 30434, 30034, 30034, 30034, 20434, 30034, 30034, 20434, 20434, 30034,
    //             30434, 30434, 30434, 30034, 30034, 30034, 20434, 30034, 30034, 20434, 20434, 30034],
    //         color: '#D59C48'
    //     }, {
    //         name: 'SPEND',
    //         data: [30434, 30434, 40434, 40434, 30434, 40434, 40434, 40434, 30434, 40434, 30434, 30434,
    //             30434, 40434, 40434, 30434, 40434, 40434, 40434, 40434, 40434, 40434, 40434, 30434],
    //         color: '#0CAAE2'
    //     }]
    // });
});