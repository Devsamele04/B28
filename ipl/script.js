
var btn = document.querySelector("button");
var winner = document.querySelector("h4");
var main = document.querySelector("#main");

var teams = ["CSK", "MI", "KKR", "SRH", "GT", "RR", "RCB","DC","LSG","PK"];
var colors = ["Yellow", "blue", "purple", "orange", "goldenrod", "pink", "red", "lightgreen", "navy", "brown"];

btn.addEventListener("click", function () {
  var random = Math.floor(Math.random() * teams.length);
  console.log(teams[random]);
  winner.innerHTML = teams[random];
  main.style.backgroundColor = colors[random];
});
