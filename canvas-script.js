window.onload = function() {
  // Definitions
  var canvas = document.getElementById("quadratic-curves-canvas");
  var ctx = canvas.getContext("2d");

  // ctx.quadraticCurveTo(controlX,controlY,endX,endY);

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.moveTo(200, 250);
  ctx.quadraticCurveTo(500, 110, 400, 250);
  ctx.stroke();
};
