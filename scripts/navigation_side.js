function myFunction(y) {
  y.classList.toggle("change");

  var x = document.getElementById("navbar-right");
  if (x.className === "fixed") {
    x.className = "responsive";
    document.getElementById("bdy").style.marginTop = "300px";
  }
  else if (x.className === "responsive") {
    x.className = "fixed";
    document.getElementById("bdy").style.marginTop = "0px";
  }
}