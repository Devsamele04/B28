// Light bulb
// modal
// make abutton which will show the modal
// make a full screen overlay which should be position fixed and make a moda inside it via html css
// add now,make the overlay display none
// now just remove the hidden class from the div via button click
// and add hidden class on th overlay div via close button click

var showmodal = document.querySelector(".showmodal");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".close");

showmodal.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
