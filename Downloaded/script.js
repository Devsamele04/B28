var btn = document.querySelector("button");
var timer = document.querySelector("h2");
var bar = document.querySelector(".bar");

var grow = 0;

btn.addEventListener("click", function () {
  var interval = setInterval(function () {
    grow++;
    timer.innerHTML = grow + "%";
    bar.style.width = grow + "%";
    btn.setAttribute("disabled",true);
  }, 40);

  setTimeout(function () {
    clearInterval(interval);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.7;
  },4000);
});
