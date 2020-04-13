
var imageSize = 50;

var xPosition = 20;
var yPosition = 20;

class Shape {
    constructor(startX, startY) {
      this.startX = startX;
      this.startY = startY;
    }
  }

window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch (e.keyCode) {
        case 37:
            xPosition -= 10;
            break;
        case 38:
            yPosition -= 10;
            break;
        case 39:
            xPosition += 10;
            break;
        case 40:
            yPosition += 10;
            break;
    }
    drawShape();
}

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

var shape = new Shape(400,400);

function drawShape() {
    // the triangle
    context.clearRect(0, 0, canvas.width, canvas.height);
  

    var ctx = canvas.getContext("2d");
    console.log(xPosition);
    console.log(yPosition);

    console.log("_________");
    ctx.fillRect(xPosition, yPosition, imageSize, imageSize);
    drawTargetShape(shape);
}

function drawTargetShape(shape) {
    // the triangle
    var ctx = canvas.getContext("2d");
    console.log(xPosition);
    console.log(yPosition);

    console.log("_________");
    ctx.fillRect(shape.startX, shape.startY, imageSize, imageSize);
}
drawShape();
