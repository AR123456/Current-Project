// make ref to the element to be changed
const link = document.querySelector("a");
// innerText is not a methond , it is a property- so no paras at the end
// console.log(para.innerText);
// use the getAttribute method, pass in a string that is hte attribute we want to get
console.log(link.getAttribute("href"));
// use the setAttribute method that takes in 2 parameters, the attrbute to be changed and what to change it to.

link.setAttribute("href", "https://www.thenetninja.co.uk");
// setting the text
link.textContent = "The Net Ninja webiste";

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));
// this would be usefull if a user say filled out a form and was successfull to change text color or something
mssg.setAttribute("class", "success");
// creating a sytle attribute with javascript
mssg.setAttribute("style", "color: green");
