//get ref to the form
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
// function to generate a resuable text template with a do do in it
// pass in the users todo
const generateTemplate = todo => {
  //creating the template string
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};
//add event listoner
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo =
    // use .trim to remove the spaces
    addForm.add.value.trim();
  // check to see if user has a todo
  if (todo.length) {
    //call this function if there is a todo
    generateTemplate(todo);
    //use .reset to reset the input feilds in the form
    addForm.reset();
  }
});
