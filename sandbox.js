// const para = document.querySelector("p");
// this is a property , not a method
// console.log(para.innerText);
// this changes it on the page !
// para.innerText = "ninjas are awesome";
// console.log(para.innerText);
// to append to the page
// para.innerText += " ninjas are awesome";

const paras = document.querySelectorAll("p");
//cycle through the node list
// pass the item we are cycling through into the call back function, can name it whatever in this case Sean is calling it  p
// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText += "new text!";
// });

const content = document.querySelector(".content");

// //************************************* */
// outputting an html template for each item in the array.  could have gotten this from a database

const people = ["mario", "luigi", "yoshi"];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
