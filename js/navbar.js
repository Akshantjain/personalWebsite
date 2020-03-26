$(window).on("load", function name() {

    setTimeout(() => {
        $(".masthead h2").css({ visibility: 'visible' });
        $(".masthead h1").animate({ height: '16rem' }, 600);
        setTimeout(() => {
            $("#button-container").animate({ marginTop: '0px' });
            setTimeout(() => {
                $("#mainNav").animate({ marginTop: '0px' });
            }, 1000);
        }, 1200);
    }, 500);

})