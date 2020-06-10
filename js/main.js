$(document).ready(function () {
    $('svg[class^="stars"]').click(function () {
        startClick($(this), $(this).attr('class'))
    })
    $('.feel').click(function () {
        feelClick($(this))
    })
    $('#comments').keyup(function(){    
        console.log($(this).val().length);   
        var len = $(this).val().length;        
        $('#comments-counter').text(len +'/2500');
    })
}
);

function startClick(el, elClass) {
    var item = el.data('item');
    $("." + elClass).each(function () {        
        if ($(this).data('item') <= item)
            $(this).css('color', '#f6bb43')
        else
            $(this).css('color', '#d2d6dc')
    })
}

function feelClick(el) {
    var item = el.data('item');
    textFeelClick(item)
    $(el).css('color', '#f6bb43')    
    $(".feel").each(function () {        
        if ($(this).data('item') != item){
            $(this).css('color', '#d2d6dc')
        }            
    })
}

function textFeelClick(item) {    
    $('.text-feel[data-item='+item+']').css('color', '#f6bb43')    
    $(".text-feel").each(function () {        
        if ($(this).data('item') != item)
            $(this).css('color', '#d2d6dc')
    })
}


