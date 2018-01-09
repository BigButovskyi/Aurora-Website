var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWith = 0;
var slideInterval = 2000;
var switchInterval = setInterval(nextSlide, slideInterval);

function nextSlide() {
    if(slideNow === slideCount){
        $('#slidewrapper').css('transform', 'translateX(0)');
        slideNow = 1;
    }
    else{
        translateWidth = -$('#viewport').width() * slideNow;
        $('#slidewrapper').css('transform', 'translateX(' + translateWidth + 'px)');
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

var navBtnId = 0;


$(document).ready(function () {

    $('#viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#leftSlider').hover(function () {
       $(this).css('opacity','0.8');
    },function () {
        $(this).css('opacity','0.5');
    });

    $('#rightSlider').hover(function () {
        $(this).css('opacity','0.8');
    },function () {
        $(this).css('opacity','0.5');
    });


    $('#rightSlider').click(function() {
        nextSlide();
    });

    $('#leftSlider').click(function() {
        prevSlide();
    });


    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 !== slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});