const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let ballX = canvasWidth / 2;
let ballY = canvasHeight / 2;
let ballRadius = 10;
let ballXD = 2;
let ballYD = -2;

function drawBall(){
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.closePath();
}
drawBall();