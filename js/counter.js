let shift = 0;

let counter = document.getElementById("counter");
move();
function move() {
  counter.style.marginLeft = shift + "px";
  shift += 10;
  setTimeout(move, 2000);
}
//setInterval(function_name, time)
//let timerStop = setInterval(move, 30);

document.getElementById("stop").onclick = function () {
  //clearInterval(timerStop);
};

//setTimeout(move,5000)
