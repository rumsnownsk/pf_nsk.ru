$(function () {
    // Окошко Обратный звонок
    $('.popup-callbackme').magnificPopup({
        type: 'inline',
        preloader: false,
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        midClick: true,
        // removalDelay: 500,
        mainClass: 'my-mfp-slide-bottom'
    });

    // Открыть Постановление
    $(".popup-solution").magnificPopup({
        type: 'inline',
        midClick: true,
    });

    $(".callback").submit(function () {
        var th = $(this);
        $.ajax({
            type: "post",
            url: "/mail",
            data: th.serialize()
        }).done(function () {
            $(".success").addClass("visible");
            setTimeout(function () {
                th.trigger("reset");
                $(".success").removeClass("visible");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

    $("#menuShow").click(function () {
        if ($("#classicMenu").is(':visible')) {
            console.log(true)
            $('#classicMenu').hide();
        } else {
            console.log(false)
            $('#classicMenu').show()
            $('#classicMenu').addClass('my-d-flex flex-column');
        }
    });

    if ($(document).width() < 995) {
        $('#classicMenu').hide();
        $('#include').hide();
        window.onresize = function (ev) {
            $('#classicMenu').hide()
        }
    }

    $(document).scroll(function () {
        console.log('test')
        if ($(document).width() > 785) {

            console.log('scrollTop : ' + $(document).scrollTop())
            console.log('header + height + 10px : ' + $('#header').height())
            console.log($(document).scrollTop() > $('#header').height())

            if ($(document).scrollTop() > $('#header').height()) {
                $('nav').addClass('fixed-menu')
            } else {
                $('nav').removeClass('fixed-menu')
            }
        }
    });

    $("#phone").mask("+7 (999) 999-99-99");


    // Подсветка пунктов меню
    var pathname_url = window.location.pathname;

    $("nav .menu__item").each(function () {
        var link = $(this).find("a").attr("href");
        if (pathname_url == link) {
            $(this).addClass("active")
        }
    });

    $(document).ready(function () {
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: false,
                cursor: 'mfp-zoom-out-cur',
                titleSrc: false
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        })
    })

    setTimeout(function () {
        var d = new Date(),
            day = d.getDate(),
            hrs = d.getHours(),
            min = d.getMinutes(),
            sec = d.getSeconds(),
            dw = new Array("понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"),

            mnt = new Array("января", "февраля", "марта", "апреля", "мая",
                "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");

        if (hrs <= 9) hrs="0" + hrs;
        if (min <= 9 ) min="0" + min;

        $("#currentTime").html("Сегодня: </br>"
            + hrs + " : " + min + "</br>"
            + dw[d.getDay()] + ",</br> "
            + day + " " + mnt[d.getMonth()] + " " + d.getFullYear())

    }, 1000)


});

// (function($){
//     $(window).on("load", function(){
//
//         $("body").mCustomScrollbar({
//             theme: "dark-thin",
//             autoHideScrollbar: true,
//             autoExpandScrollbar: true,
//             scrollEasing: "linear",
//             mouseWheel: {
//                 scrollAmount: '400'
//             }
//         });
//
//     });
// })(jQuery);