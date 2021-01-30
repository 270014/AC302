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