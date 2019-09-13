///// change classes with javascript

// const content = document.querySelector("p");
///// listing out the classList property for the p tag
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("success");

const paras = document.querySelectorAll("p");

paras.forEach(p => {
  // textContent vs innerText, innerText will not show visible  textContent shows even hidden
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  } else if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

//toggle classes
const title = document.querySelector("title");
//add
title.classList.toggle("test");
//then remove
title.classList.toggle("test");
