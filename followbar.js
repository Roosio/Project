$(function(){
    var $win = $(window);
    var top = $(window).scrollTop();

    var speed = 400;
    var easing = 'linear';
    var $layer = $('.sidebar');
    $layer.css('position','relative');

    if(top>0)
    $win.scrollTop(0+top);
    else
    $win.scrollTop(0);

    $(window).scroll(function(){
        yPosition = $win.scrollTop();
        if (yPosition < 0){
            yPosition = 0;
        }
        $layer.animate({"top":yPosition }, {duration:speed, queue:false});
    });
});