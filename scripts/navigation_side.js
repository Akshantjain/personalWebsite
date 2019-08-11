function myFunction(y) {
  y.classList.toggle("change");

  var x = document.getElementById("navbar-right");
  if (x.className === "fixed") {
    x.className = "responsive";
  }
  else if (x.className === "responsive") {
    x.className = "fixed";
  }

}