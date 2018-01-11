
//загрузка фото в галерею
let gallaryImages = ['images/image1.jpg', 'images/image1.jpg', 'images/image1.jpg', 'images/image1.jpg', 'images/image1.jpg'];
let string = '';
gallaryImages.forEach(function (item) {
    string += '<div class="back-photka" style="background-image: url(' + item + ')"></div>';
});
$('#photos').html(string);

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


    //Высота элемента для фото актеров вычиляется перед показом документа, должна быть width / 2
    let height = $('#actors-2').width() / 2;
    $('#actors-2').css('height', height);


});
