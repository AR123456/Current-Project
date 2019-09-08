//old school function
// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
// people.forEach(function(person) {
//   console.log(person);
// });

// passing into

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
// const logPerson = (person, index) => {
//   console.log(`${index} - hellow ${person}`);
// };
// people.forEach(logPerson);

// callback in action - putting on the page //////////
// const ul = document.querySelector(".people");

// const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// let html = ``;

// people.forEach(function(person) {
//   // create htmel template
//   html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);

// ul.innerHTML = html;

//as arrow/////
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
