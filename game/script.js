var timer = 60;
var score = 0;
var hitrn = 0;

function makebubble(){
    
var clutter ="";

for(var i = 0; i <=153; i++){
   var rn= Math.floor(Math.random()*10)
clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#p-btm").innerHTML = clutter;



}
function getNewHit(){
     hitrn = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent = hitrn;
}
function runTimer(){
var timerint = setInterval(function(){
    if(timer>0){
        
        timer--;
        document.querySelector("#timerval").innerHTML = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#p-btm").innerHTML = `<h1> Game Over</h1>`;
    }
},1000)
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#p-btm").addEventListener("click",function(dets){
var clickednum = Number(dets.target.textContent); 
if(clickednum === hitrn){
    increaseScore();
    makebubble();
    getNewHit();
}
})


runTimer();
makebubble();
getNewHit();


