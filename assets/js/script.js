// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
// local storage on chrom will not retain the order of key value pairs - to get an ordered set of key value pairs use an array, local storage need to be a string stringigfy first then turn back into object by parsing it to turn it back into an object
// in chrome dev tools can see what is in local storage by typing local storage can clear it from console by typing localStorage.clear
const budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];
let lastID = localStorage.getItem("lastID") || 0;

// ======================
// FUNCTIONS
// ======================

// 4th: function to update localStorage with latest budgetItems and latest lastID
const updateStorage = () => {
  localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
  localStorage.setItem("lastID", lastID);
};
// 5th: function to render budgetItems on table; each item should be rendered in this format:
// <tr data-id="2"><td>Oct 14, 2019 5:08 PM</td><td>November Rent</td><td>Rent/Mortgage</td><td>1300</td><td>Fill out lease renewal form!</td><td class="delete"><span>x</span></td></tr>
// also, update total amount spent on page (based on selected category):
const renderItems = items => {
  if (!items) items = budgetItems;

  //create a variable pointer to the tbody
  const tbody = $("#budgetItems tbody");
  //clear out previous table rows
  tbody.empty();
  // loop through items array, make one row per item
  items.forEach(item => {
    const row = `<tr data-id=${item.id}><td>${item.date}</td><td>${item.name}</td><td>${item.category}</td><td>${item.amount}</td><td>${item.notes}</td><td class="delete"><span>x</span></td></tr>`;
  });
  //ect
};

// ======================
// MAIN PROCESS
// ======================
/// get items in loc storate on the page with initial render
renderItems();

// 2nd: wire up click event on 'Enter New Budget Item' button to toggle display of form
$("#toggleFormButton,#hideForm").on("click", function() {
  // add or hide the add item form
  const button = $("#toggleFormButton"); //points to button
  const form = $("#addItemForm"); // points to form
  form.toggle("slow", function() {
    // check css psudo calss if it is visible show Hide Form
    if ($(this).is(":visible")) {
      button.text("Hide Form");
    } else {
      button.text("Add New Budget Item ");
    }
  });
});

// 3rd: wire up click event on 'Add Budget Item' button, gather user input and add item to budgetItems array
// (each item's object should include: id / date / name / category / amount / notes)... then clear the form
// fields and trigger localStorage update/budgetItems rerender functions, once created
$("#addItem").on("click", function(event) {
  event.preventDefault(); // step off, browser -- JS has go this
  // build new item object
  const newItem = {
    // increment inside the object -preincrement - increments and stores it in the object in the same step
    id: ++lastID,
    date: moment().format("lll"), // moment syntax for current date/time
    name: $("#name")
      .val()
      .trim(),
    category: $("#category")
      .val()
      .trim(),
    amount: $("#amount")
      .val()
      .trim(),
    notes: $("#notes")
      .val()
      .trim()
  };
  console.log(newItem);
  $("input,select").val("");
  // push to array
  budgetItems.push(newItem);
  // update localStorage
  updateStorage();
  //reredender HTML
  renderItems();
});

// 6th: wire up change event on the category select menu, show filtered budgetItems based on selection

// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem
