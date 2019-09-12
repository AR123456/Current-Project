// const para = document.querySelector("p");
// // const para = document.querySelector('.error');
const para = document.querySelector("div.error");

console.log(para);

// query multiple elements at once
// this resutls in a node list that looks a log like an array but is not

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");
// but can use [] notation and for each to get
console.log(paras, errors);
console.log(paras[1], errors[0]);
console.log("*****************************************");
paras.forEach(para => {
  console.log(para);
});
