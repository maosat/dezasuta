//sp-header
$(function(){
    $('.sp-nav__hamburger').click(function(){
        $('.sp-header__nav').fadeToggle();
        $('.sp-nav__hamburger').toggleClass('open');
    });
});

$(function(){
    var flg = "off";
    $('.sp-nav__hamburger').on('click',function(){
        if(flg == "off"){
            $('.logo').css("display","none");
            $('#hamburger__text').text('CLOSE');
            $(this).css("background-color","#452e13");
            flg = "on";
        }else{
            $('.logo').css("display","block");
            $('#hamburger__text').text('MENU');
            $(this).css("background-color","#d8bf77");
            flg = "off";
        }
    });
});

//mv
$(function(){
    $('.slider').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});

//work-page
$(function () {
    var $filter = $(".work-page__filter [data-filter]"),
    $item = $(".work-page__list [data-category]");

    $filter.click(function (e) {
        e.preventDefault();
        var $this = $(this);

        $filter.removeClass("work-page__active");
        $this.addClass("work-page__active");

        var $filterItem = $this.attr("data-filter");
        if ($filterItem == "all") {
            $item.stop(true, true).fadeOut(200, function () {
            $item.addClass("work-page__active").fadeIn(200);
        });
        } else {
        $item.stop(true, true).fadeOut(200, function () {
            $item
            .filter('[data-category*="' + $filterItem + '"]')
            .addClass("work-page__active")
            .fadeIn(200);
        });
        }
    });
});

//scroll
$(document).ready(function() {
    AOS.init();
});

//graph
$(document).ready(function(){
    $(window).on('load scroll', function (){
        SetScrollTiming('.ani');
    });
});
function SetScrollTiming(target){
    var box = $(target);
    var animated = 'animated';
    box.each(function(){
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
        if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass('move');
        }
    });
}