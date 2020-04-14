$(window).on("load", function name() {

    setTimeout(() => {
        $(".masthead h2").css({ visibility: 'visible' });
        $(".masthead h1").animate({ height: '16rem' }, 600);
        setTimeout(() => {
            $("#mainNav").animate({ marginTop: '0px' });
        }, 100);
    }, 200);

})


const classes = ["encyption_project", "covid_tracker", "home_security", "personal_v1", "tic_tac_toe", "baccarat_game", "more_projects"]

const each_description = document.querySelectorAll(".projects-section .each .project-description");
let is_expanded = false;

function expandFunction(index) {

    if (is_expanded && each_description[index].classList.contains(classes[index])) {
        each_description[index].classList.remove(classes[index]);
        each_description[index].classList.add("minimize");
        is_expanded = false;
        return;
    }
    else if (is_expanded) {
        for (let i = 0; i < each_description.length; ++i) {
            if (each_description[i].classList.contains(classes[i])) {
                each_description[i].classList.remove(classes[i]);
                each_description[i].classList.add("minimize");
            }
        }
    }
    each_description[index].classList.remove("minimize");
    each_description[index].classList.add(classes[index]);
    is_expanded = true;
}



// Java Logo
function changejavain () {
    let react = document.querySelector("#java");
    react.classList.remove("devicon-java-plain");
    react.classList.add("devicon-java-plain-wordmark");
    react.classList.add("colored");
}

function changejavaout () {
    let react = document.querySelector("#java");
    react.classList.remove("devicon-java-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-java-plain");
}

// CPP logo
function changecppin () {
    let react = document.querySelector("#cpp");
    react.classList.remove("devicon-cplusplus-plain");
    react.classList.add("devicon-cplusplus-line");
    react.classList.add("colored");
}

function changecppout () {
    let react = document.querySelector("#cpp");
    react.classList.remove("devicon-cplusplus-line");
    react.classList.remove("colored");
    react.classList.add("devicon-cplusplus-plain");
}

// Python Logo
function changepythonin () {
    let react = document.querySelector("#python");
    react.classList.remove("devicon-python-plain");
    react.classList.add("devicon-python-plain-wordmark");
    react.classList.add("colored");
}

function changepythonout () {
    let react = document.querySelector("#python");
    react.classList.remove("devicon-python-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-python-plain");
}

// SQL Logo
function changesqlin () {
    let react = document.querySelector("#mysql");
    react.classList.remove("devicon-mysql-plain");
    react.classList.add("devicon-mysql-plain-wordmark");
    // react.classList.add("colored");
}

function changesqlout () {
    let react = document.querySelector("#mysql");
    react.classList.remove("devicon-mysql-plain-wordmark");
    // react.classList.remove("colored");
    react.classList.add("devicon-mysql-plain");
}

// Android Logo
function changeandroidin () {
    let react = document.querySelector("#android");
    react.classList.remove("devicon-android-plain");
    react.classList.add("devicon-android-plain-wordmark");
    react.classList.add("colored");
}

function changeandroidout () {
    let react = document.querySelector("#android");
    react.classList.remove("devicon-android-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-android-plain");
}

// HTML Logo 
function changehtmlin () {
    let react = document.querySelector("#html");
    react.classList.remove("devicon-html5-plain");
    react.classList.add("devicon-html5-plain-wordmark");
    react.classList.add("colored");
}

function changehtmlout () {
    let react = document.querySelector("#html");
    react.classList.remove("devicon-html5-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-html5-plain");
}

// CSS Logo
function changecssin() {
    let react = document.querySelector("#css");
    react.classList.remove("devicon-css3-plain");
    react.classList.add("devicon-css3-plain-wordmark");
    react.classList.add("colored");
}

function changecssout() {
    let react = document.querySelector("#css");
    react.classList.remove("devicon-css3-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-css3-plain");
}

// Javascript Logo
function changejscriptin() {
    let react = document.querySelector("#jscript");
    react.classList.add("colored");
}

function changejscriptout() {
    let react = document.querySelector("#jscript");
    react.classList.remove("colored");
}

// Bootstrap Logo
function changebootin () {
    let react = document.querySelector("#boot");
    react.classList.remove("devicon-bootstrap-plain");
    react.classList.add("devicon-bootstrap-plain-wordmark");
}

function changebootout () {
    let react = document.querySelector("#boot");
    react.classList.remove("devicon-bootstrap-plain-wordmark");
    react.classList.add("devicon-bootstrap-plain");
}

// Git logo
function changegitlogoin () {
    let react = document.querySelector("#gitlogo");
    react.classList.remove("devicon-github-plain");
    react.classList.add("devicon-github-plain-wordmark");
    react.classList.add("colored");
}

function changegitlogoout () {
    let react = document.querySelector("#gitlogo");
    react.classList.remove("devicon-github-plain-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-github-plain");
}

// React Logo
function changereactin() {
    let react = document.querySelector("#react");
    react.classList.remove("devicon-react-original");
    react.classList.add("devicon-react-original-wordmark");
    react.classList.add("colored");
}

function changereactout() {
    let react = document.querySelector("#react");
    react.classList.remove("devicon-react-original-wordmark");
    react.classList.remove("colored");
    react.classList.add("devicon-react-original");
}


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
        offset: $('header').outerHeight() - 150
    });
    function a() {
        $('header').outerHeight() - 150 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }
    a(), e(window).scroll(a)
}(jQuery);
