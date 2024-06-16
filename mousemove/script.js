var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var h1 = document.querySelector("h1");
main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
h1.addEventListener("mouseenter", function () {
  cursor.style = "height :100px; width :100px;";
});

h1.addEventListener("mouseleave", function () {
  cursor.style = "";
});
