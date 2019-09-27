const addForm = document.querySelector(".add");
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

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
// add todos using event delegation to liston to the ul , the whole list.
list.addEventListener("click", e => {
  // target just the stuff with the delete transhcan
  if (e.target.classList.contains("delete")) {
    // travers the dom to delete the parent
    e.target.parentElement.remove();
  }
});
