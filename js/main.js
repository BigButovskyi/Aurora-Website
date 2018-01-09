$('#actors-2').css('height', '100px');




$(document).ready(function () {
    $(window).scroll(function () {

        $('.square').each(function () {
            let square_bottom = $(this).position().top + $(this).outerHeight();
            let window_bottom = $(window).scrollTop() + $(window).height();

            if (window_bottom > square_bottom) {
                $(this).animate({'opacity': '1'}, 2000);
            }
        });

        let square_bottom = $('#footer').position().top + $('#footer').outerHeight();
        let window_bottom = $(window).scrollTop() + $(window).height();

        if (window_bottom > square_bottom) {
            $('#footer').css('animation',"fadeInDown 1s ease both");
        }

    });

    let height = $('#actors-2').width() / 2;
    $('#actors-2').css('height', height);

});
