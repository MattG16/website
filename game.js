var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
document.getElementById("canvas").style.background = "#00bfff";
var img_player = document.createElement("img");
img_player.src = "sprite.png";
var x = 0;
var y = 0;
var xac = 0;
var yac = 0;
var gravity = 1;
var xspeed = 0;
var yspeed = 0;
var playerW = 100;
var playerH = 100;
var plat = [];
var lava = [];
var score = 0;
var xab = 401;
var yab = 350;
var xMonsterSpeed = -3;
var yMonsterSpeed = 0;
var monsterW = 10;
var monsterH = 10;
var xC = 500;
var yC = 300;
var wC = 20;
var hC = 20;
var key = new Boolean(false);
var keyX = 450;
var keyY = 400;
var gameover = new Audio('gameover.wav');
var win = new Audio('win.wav');
var sound = new Audio('coin.wav');
var begin = new Audio('begin.wav');
var intro = new Audio('intro.mp3');
var limit = 50;
var level = 1;


plat.push({x: 0, y: 400, w:150, h:15});
plat.push({x: 250, y: 300, w:150, h:15});
plat.push({x: 500, y: 450, w:100, h:15});
plat.push({x: 250, y: 500, w:150, h:15});
plat.push({x: 750, y: 400, w:150, h:15});

lava.push({x: 0, y: 650, w:1000, h:50});

function animate() {
  req = requestAnimationFrame(animate);
  cx.clearRect(0, 0, canvas.width, canvas.height);
  cx.drawImage(img_player,x,y, playerW, playerH);
  x += xspeed; y += yspeed + gravity;
  xspeed += xac;
  yspeed += yac;
  if (xspeed > 2) {xac = 0}
  //if (yspeed > 2) {gravity = 0}
  if (xspeed < -2) {xac = 0}
//  if (yspeed < -0.0000005) {yac = 0}
  if (yac < -24) {yac = 0}
  if (yspeed >1 || yspeed<-1) {yac =0}
  monster();
  platform();
  obstacle();
  coin();
  scoreDisplay();
  
  console.log(key);
if(x > canvas.width - playerW || x < 0) {
  xspeed = -xspeed;
}

if(y > canvas.height - playerH || y < 0) {
  yspeed = -yspeed;
  gameOver();
}
}

function platform() {
  cx.fillStyle = "#000000";
  gravity = 1;
  for (var i = 0; i < plat.length; i++) {
    cx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    if(y === plat[i].y - playerH &&
    x >= plat[i].x - playerW * .63 &&
    x <= plat[i].x + plat[i].w * .70)
    {gravity = 0}
  }
}
function monster() {
  cx.fillStyle = "#05F810";
  cx.fillRect(xab,yab,50,50);
  xab = xab + xMonsterSpeed;
  if(xab > canvas.width - 50 || xab < 0) {
  xMonsterSpeed = -xMonsterSpeed;}
  if(x + playerW * .72 > xab && xab + 27 > x && yab + 10 > y && y + playerH * .72 > yab) {
    gameOver();
  }
}
function obstacle() {
  cx.fillStyle = "#cf1020";

  for (var i = 0; i < lava.length; i++) {
    cx.fillRect(lava[i].x, lava[i].y, lava[i].w, lava[i].h);
    if(y === lava[i].y && playerH &&
    x >= lava[i].x - playerW * .63 &&
    x <= lava[i].x + lava[i].w * .70)
    {gameOver();}
  }
}

function coin() {
  cx.fillStyle = "gold";
  cx.fillRect(xC, yC, wC, hC);
  if(x + playerW > xC && xC + wC > x && yC + hC > y &&
  y + playerH > yC && score < 100) {
      var i = Math.ceil(Math.random() * plat.length);
    xC = plat[i].x;
    yC = plat[i].y - 10;
    score += 10;
    sound.play();
  } else if (score >= 100 ) {
    xC = 1000;
    yC = 1000;
    return;
  }
}

function scoreDisplay() {
  if (score < 100) {
     cx.fillStyle = "black";
  cx.font = "40px Comic Sans MS";
  cx.fillText("Score:" + score, 100, 100);
  cx.fillText("Level:" + level, 100, 150)
  }
  if (score >= 100) {
    keyDisplay();
  }
}

function keyDisplay() {
  cx.fillStyle = "red";
  cx.fillRect(keyX, keyY, 30, 30);
  if(x + playerW > keyX && keyX + 30 > x && keyY + 30 > y &&
  y + playerH > keyY) {
    key = true;
    console.log(key);
    keyX = 1000;
    keyY = 1000;
  }
  if(key == true) {
    
    door();
  }
}

function door() {
  cx.fillStyle = "red";
  cx.fillRect(250, 440, 15, 75);
  if(x + playerW > 225 && 225 + 15 > x && 435 + 75 > y &&
  y + playerH > 435) {
    gameWin();
  }
}

function stop() {
  if(req) {
  cancelAnimationFrame(req);
  req = undefined;
    intro.pause();
  }
}

function gameOver() {
  cx.fillStyle = "red";
  cx.font = "40px Comic Sans MS";
  cx.fillText("Game Over",500, 100);
  gameover.play();
  stop();
}
function gameWin() {
  cx.fillStyle = "green";
  cx.font = "40px Comic Sans MS";
  cx.fillText("You Win",500, 100);
  win.play();
  stop();
}

function levelTwo() {
   req = requestAnimationFrame(animate);
   cx.clearRect(0, 0, canvas.width, canvas.height);
   cx.drawImage(img_player,x,y, playerW, playerH);
   score = 0;
   level ++;
   x += xspeed; y += yspeed + gravity;
  xspeed += xac;
  yspeed += yac;
  if (xspeed > 2) {xac = 0}
  //if (yspeed > 2) {gravity = 0}
  if (xspeed < -2) {xac = 0}
//  if (yspeed < -0.0000005) {yac = 0}
  if (yac < -24) {yac = 0}
  if (yspeed >1 || yspeed<-1) {yac =0}
   scoreDisplay();
   coin();
   
}

function setDirection(dir){
  if(dir === "up") {
    yspeed = -5;
    xspeed = 0;
  } else if(dir === "down" && gravity === 1) {
    yspeed = 5;
    xspeed = 0;
  } else if(dir === "left") {
    yspeed = 0;
    xac = -1;
    xspeed = -3;
  } else if(dir === "right") {
    yspeed = 0;
    xac = 1;
    xspeed = 3;
  } else if(dir === "stop") {
    yspeed = 0;
    xspeed = 0;
  }else if(dir === "jump" && gravity === 0 && yspeed <= limit) {
  yac = -25;
  }
}

var keyActions = {
  32: "jump",
  37: "left",
  39: "right"
};

document.addEventListener('keydown' ,function(event) {
  var dir = keyActions[event.keyCode];
  setDirection(dir);
});


document.addEventListener('keyup', function(event) {
  setDirection("stop");
})

intro.play();
begin.play();
animate();
