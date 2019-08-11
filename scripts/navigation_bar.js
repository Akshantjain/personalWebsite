var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    }
    else if (window.pageYOffset < 200)    {
        document.getElementById("navbar").style.top = "0px";
    }
    else {
        document.getElementById("navbar").style.top = "-56px";
    }
    prevScrollpos = currentScrollPos;
}

window.outerWidth = function()  {
    if (window.pageXOffset < "900px") {
        this.document.getElementById("cont").style.display = "block";
    }
}