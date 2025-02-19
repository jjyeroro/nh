$(function () {
    alert('나현쌤만 볼수있음!')

    $(window).scroll(function () {
        $('main > section').each(function () { 

            if ($(this).offset().top <= $(window).scrollTop() + 114) {
                $('header ul li').removeClass('on')
                let idx = $(this).index()
                $('header ul li').eq(idx).addClass('on')
            }
        })
    })


    $('header ul li').click(function () {
        $(this).addClass('on').siblings().removeClass('on')

        let idx = $(this).index()

        let section = $('main > section').eq(idx)

        let sd = section.offset().top - (86)

        $('html, body').animate({
            scrollTop: sd
        })
    })

    // 이미지 클릭시 팝업
    $('.class3 > img').click(function () {
        $('.popupbg').show()
    })
    $('.class3 button').click(function () {
        $('.popupbg').hide()
    })

    // 탑버튼
    $('.topbtn').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
    $(window).scroll(function () {
        let scrolled = $(window).scrollTop() >= 10;
        $(".topbtn").toggleClass("down", scrolled);
    })
})