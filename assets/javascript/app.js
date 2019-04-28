// making sure window loads before the canvas starts
window.onload = function() {
  // paramiters

  // quadraticCurveTo(controlX,controly, endX, endY)

  var canvas = document.getElementById("lab-complex-shapes-canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 10;
  ctx.moveTo(200, 250);
  ctx.quadraticCurveTo(100, 110, 400, 250);
  ctx.stroke();
};
