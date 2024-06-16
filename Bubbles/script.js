// can not use event listner.
function makebubbles(){
  var container = "";
for (var i = 1; i < 120; i++) {
  var num = Math.floor(Math.random() * 100);

  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  container += `<div style="background-color: rgb(${red},${green},${blue});" class="h-20 w-20 rounded-full flex items-center justify-center text-2xl">${num}</div>`;
}
document.querySelector(".Bubbles").innerHTML = container;
}

makebubbles();
setInterval(function() {
  makebubbles();
},1000);


// for (var i = 0; i <119; i++){
//   var bubble = document.createElement("div");
//   bubble.textContent = Math.floor(Math.random() *100);
//   bubble.classList.add("h-20","w-20","rounded-full","flex","items-center","justify-center","text-2xl","bg-green-600");

//   bubble.addEventListener("click",function(){
//     console.log("chala");
//   })

//   document.querySelector(".Bubbles").appendChild(bubble);

// }

