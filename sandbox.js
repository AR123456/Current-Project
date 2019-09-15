const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ul.appendChild(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

/// add the event listener here so that it gets applied to dynamicaly created tags above

ul.addEventListener("click", e => {
  console.log('event in UL');
 // /find out what was clicked
  console.log(e.target, e);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }

 
});
