console.log("test....")
var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
ctx1.moveTo(0,0);
ctx1.lineTo(200,100);
ctx1.stroke();

var c2 = document.getElementById("two");
var ctx2 = c2.getContext("2d");
ctx2.fillStyle = "rgb(0, 100, 100)";
ctx2.fillRect(0, 0, 150, 150);
ctx2.fillRect(150, 150, 150, 150);

var c3 = document.getElementById("three");
var ctx3 = c3.getContext("2d");
ctx3.fillStyle="rgb(0,100,100)";
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(160,160,120,120);
ctx3.clearRect(20,160,120,120);


var c4 = document.getElementById("four");
var ctx4 = c4.getContext("2d");
ctx4.fillStyle="rgb(0,100,100)";
ctx4.fillRect(0,0,100,100);
ctx4.fillRect(200,0,100,100);
ctx4.fillRect(0,200,100,100);
ctx4.fillRect(200,200,100,100);
ctx4.fillRect(100,100,100,100);

var c5 = document.getElementById("five");
var ctx5 = c5.getContext("2d");
ctx5.fillStyle="rgb(0,100,100)";
ctx5.fillRect(0,0,300,300);
ctx5.clearRect(10,10,280,280);
ctx5.fillRect(20,20,260,260);
ctx5.clearRect(30,30,240,240);
ctx5.fillRect(40,40,220,220);
ctx5.clearRect(50,50,200,200);
ctx5.fillRect(60,60,180,180);
ctx5.clearRect(70,70,160,160);
ctx5.fillRect(80,80,140,140);
ctx5.clearRect(90,90,120,120);
ctx5.fillRect(100,100,100,100);
ctx5.clearRect(110,110,80,80);
ctx5.fillRect(120,120,60,60);
ctx5.clearRect(130,130,40,40);
ctx5.fillRect(140,140,20,20);
