min = 10;
max = 100;
size = 800;
time = 2.5;
delay = 0.25;
var tl = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".vert", time, { attr: { rx: max } })
  .to(".vert", time, { attr: { rx: min } });
var t2 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".horz", time, { attr: { ry: max } })
  .to(".horz", time, { attr: { ry: min } });
var t3 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".bottom", time, { attr: { cy: size - max } })
  .to(".bottom", time, { attr: { cy: size } });
var t4 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".top", time, { attr: { cy: max } })
  .to(".top", time, { attr: { cy: 0 } });
var t5 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".right", time, { attr: { cx: size - max } })
  .to(".right", time, { attr: { cx: size } });
var t6 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to(".left", time, { attr: { cx: max } })
  .to(".left", time, { attr: { cx: 0 } });
var t7 = new TimelineMax({ repeat: -1, repeatDelay: delay })
  .to("ellipse", time, { strokeWidth: 15 })
  .to("ellipse", time, { strokeWidth: 5 });
