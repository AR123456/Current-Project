import { timingSafeEqual } from "crypto";

// the container for the canvas
var width = 750,
  height = 400;
var canvas = d3
  .select("#container")
  .append("canvas")
  .attr("width", width)
  .attr("height", height);
// add the context which is the object carrying all the properties and methods
var context = canvas.node().getContext("2d");
// This is your SVG replacement and the parent of all other elements
var customBase = document.createElement("custom");
var custom = d3.select(customBase);
// Settings for a grid with 10 cells in a row,
// 100 cells in a block and 1000 cells in a row.
var groupSpacing = 4;
var cellSpacing = 2;
var offsetTop = height / 5;
var cellSize = Math.floor((width - 11 * groupSpacing) / 100) - cellSpacing;

// The Javascript structure  On a top level you only need 2 functions: databind(data) and draw()
function databind(data) {
  // Bind data to custom elements.
  // Get a scale for the colours - not essential but nice.
  colourScale = d3.scaleSequential(d3.interpolateSpectral).domain(
    d3.extent(data, function(d) {
      return d;
    })
  );
  var join = custom.selectAll("custom.rect").data(data);
  // custom elements
  var enterSel = join
    .enter()
    .append("custom")
    .attr("class", "rect")
    .attr("x", function(d, i) {
      var x0 = Math.floor(i / 100) % 10,
        x1 = Math.floor(i % 10);
      return groupSpacing * x0 + (cellspacing + cellSize) * (x1 + x0 * 10);
    })
    .attr("y", function(d, i) {
      var y0 = Math.floor(i / 1000),
        y1 = Math.floor((i % 100) / 10);
      return groupSpacing * y0 + (cellSpacing + cellSize) * (y1 + y0 * 10);
    })
    .attr("width", 0)
    .attr("height", 0);

  join
    .merge(enterSel)
    .transition()
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("fillStyle", function(d) {
      return colourScale(d);
    });

  var exitSel = join
    .exit()
    .transition()
    .attr("width", 0)
    .attr("height", 0)
    .remove();
}

function draw() {
  // Draw the elements on the canvas.
  context.clearRect(0, 0, width, height);
  var elements = custom.selectAll("custom.rect");
  elements.each(function(d, i) {
    var node = d3.select(this);
    context.fillStyle = node.attr("fillStyle");
    context.fillRect(
      node.attr("x"),
      node.attr("y"),
      node.attr("width"),
      node.attr("height")
    );
  });
}

databind(d3.range(value));
var t = d3.timer(function(elapsed) {
  draw();
  if (elapsed > 300) t.stop();
});

d3.select("#text-input").on("keydown", function() {
  if (d3.event.keyCode === 13) {
    if ((+this.value < 1 || +this.value > 10, 000)) {
      d3.select("#text-explain").classed("alert", true);
      return;
    } else {
      d3.select("#text-explain").classed("alert", false);
      value = +this.value;
      databind(d3.range(vaule));
      var t = d3.timer(function(elapsed) {
        draw();
        if (elapsed > 300) t.stop;
      });
    }
  }
});
