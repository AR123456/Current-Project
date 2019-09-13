// adding styles in the javascript
const title = document.querySelector("h1");
// this way fof settinghte attrbute overides everyething.
// title.setAttribute('style', 'margin: 50px;');
// console logging the many style attributes the  css propterty object
console.log(title.style);
console.log(title.style.color);

//this way of adding doesnet overide so it is better.
title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = " ";
