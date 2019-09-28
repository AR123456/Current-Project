const addForm = document.querySelector(".add");
// target the search form input feild for the key up
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};
// create a filter todos so it is reusable
// pass in term each time user types in a key
const filterTodos = term => {
  // add filtered class
  // get the children and make it into an array
  Array.from(list.children)
    // now use the filter and for each on the array
    // chaining methods -filter out one that matches becasue we are going to not remove it from the list(so its last man standing)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));
  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

// add todos event
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos event
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos event
// liston for a keyup event in the search feild, user a rule in css to hid non matches
search.addEventListener("keyup", () => {
  //get the term as the user types it in , trim spaces, make it lower case ( do this with each key up)
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
