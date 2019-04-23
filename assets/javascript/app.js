// making sure window loads before the canvas starts
window.onload = function() {
  // Definitions
  var canvas = document.getElementById("chessboard-canvas");
  var context = canvas.getContext("2d");
  // Colors
  var lightCellColor = "#ddb180";
  var darkCellColor = "#7c330c";

  // Frame
  context.strokeStyle = "black";
  context.strokeRect(250, 100, 400, 400);
  // using a double for loop
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      if ((x + y) % 2 === 0) {
        context.fillStyle = darkCellColor;
      } else {
        context.fillStyle = lightCellColor;
      }
      context.fillRect(200 + x * 50, 50 + y * 50, 50, 50);
    }
  }
};
