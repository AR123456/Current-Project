const clock = document.querySelector(".clock");
// get time every second
const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // injecting HTML template into the DOM
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  // every seocnd updating the html
  clock.innerHTML = html;
};
// pass in the tick, function and run it every second
setInterval(tick, 1000);
