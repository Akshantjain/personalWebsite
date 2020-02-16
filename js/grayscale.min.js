/*!
     Initial Work done by Blackrock Digital LLC under MIT License
        Copyright (c) 2013-2019 Blackrock Digital LLC

    Re-designed and edited by Akshant Jain under MIT License
        Copyright (c) 2019-2020 Akshant Jain
 */

!function (e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({
                    scrollTop: a.offset().top - 70
                }, 1e3, "easeInOutExpo"), !1
        }
    }), e(".js-scroll-trigger").click(function () {
        e(".navbar-collapse").collapse("hide")
    }), e("body").scrollspy({
        target: "#mainNav",
        offset: $('header').outerHeight()-150
    });
    function a() {
        $('header').outerHeight()-150 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }
    a(), e(window).scroll(a)

}(jQuery);

