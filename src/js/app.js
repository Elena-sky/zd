var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function(){
    $('.star.rating').click(function(){
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
});