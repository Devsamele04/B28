// html or css/tailwindcss se ek circle shape bnaye or usmein border or bg color yellow de
// ab usey js se do button se ke dwara handle kare turn on or turn off.

var bulb = document.querySelector(".bulb");
var lightson = document.querySelector(".lightson");
var lightsoff = document.querySelector(".lightsoff");

lightson.addEventListener("click", function () {
  bulb.classList.add("bg-yellow-300");
});
lightsoff.addEventListener("click", function () {
  bulb.classList.remove("bg-yellow-300");
});
