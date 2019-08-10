function myFunction(y) {
  y.classList.toggle("change");
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }

  document.getElementById("mybody").style.marginTop = "300px";
}