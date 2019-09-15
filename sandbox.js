const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

//// one way to add element to DOM
// button.addEventListener("click", () => {
//   ul.innerHTML += "<li>a new thing to do </li>";
// });
/////another way to add something to the DOM
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  ////adds to the bottom of the parent
  //ul.appendChild(li);
  ///// add to the top of the parent
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("click", e => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});
