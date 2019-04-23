// making sure window loads before the canvas starts
window.onload = function() {
  // a simple line
  var canvas = document.getElementById("hello-world-canvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "green";
  ctx.lineJoin = "round";
  ctx.shadowColor = "grey";
  ctx.shadowOffsetX = 15;
  ctx.shadowOffsetY = 15;
  ctx.shadowBlur = 5;
  ctx.moveTo(30, 30);
  ctx.lineTo(130, 30);
  // ctx.lineTo(130, 130);
  // ctx.lineTo(30, 130);
  // ctx.lineTo(30, 230);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "red";
  ctx.lineJoin = "round";
  ctx.shadowColor = "grey";
  ctx.shadowOffsetX = -15;
  ctx.shadowOffsetY = 15;
  ctx.shadowBlur = 5;
  ctx.moveTo(60, 60);
  ctx.lineTo(160, 60);
  // ctx.lineTo(160, 160);
  // ctx.lineTo(60, 160);
  // ctx.lineTo(60, 260);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "blue";
  ctx.lineJoin = "round";
  ctx.shadowColor = "grey";
  ctx.shadowOffsetX = -15;
  ctx.shadowOffsetY = 15;
  ctx.shadowBlur = 5;
  ctx.moveTo(90, 90);
  ctx.lineTo(190, 90);
  // ctx.lineTo(190, 190);
  // ctx.lineTo(90, 190);
  // ctx.lineTo(90, 290);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "yellow";
  ctx.lineJoin = "round";
  ctx.shadowColor = "grey";
  ctx.shadowOffsetX = -15;
  ctx.shadowOffsetY = -15;
  ctx.shadowBlur = 5;
  ctx.moveTo(110, 110);
  ctx.lineTo(220, 110);
  // ctx.lineTo(220, 220);
  // ctx.lineTo(110, 220);
  // ctx.lineTo(110, 320);
  ctx.stroke();
};
