var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function(){
    $('.big-trees-item.rating').click(function(){
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
    $('.small-trees-item.rating').click(function(){
        $(this).parent().attr('data-stars', $(this).data('rating'));
    });
});