// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
// local storage on chrom will not retain the order of key value pairs - to get an ordered set of key value pairs use an array, local storage need to be a string stringigfy first then turn back into object by parsing it to turn it back into an object
// in chrome dev tools can see what is in local storage by typing local storage can clear it from console by typing localStorage.clear
let budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];
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
  // if no specific array is passed in, use the full budgetItems array
  if (!items) items = budgetItems;
  // saving reference to tbody (to make reusability easier)
  const tbody = $("#budgetItems tbody");
  // emptying out previous budget items before rendering newest budget items
  tbody.empty();

  // looping through budget items
  items.forEach(item => {
    // creating a new row for each item, and putting a 'data-id' attribute on the row (we'll use this
    // later to know which budget item to delete on click of the delete 'x')
    const row = `<tr data-id=${item.id}><td>${item.date}</td><td>${
      item.name
    }</td><td>${item.category}</td><td>$${parseFloat(item.amount).toFixed(
      2
    )}</td><td>${item.notes}</td><td class="delete"><span>x</span></td></tr>`;
    // prepending each row (created above) to the tbody element
    tbody.append(row);
  });

  // using a reduce to get a total amount spent for all budget items in either the passed-in
  // array OR the default budgetItems array
  const total = items.reduce(
    (accum, item) => accum + parseFloat(item.amount),
    0
  );
  // printing that total on the page, and using '.toFixed(2)' to print out exactly two decimal points
  $("#total").text(`$${total.toFixed(2)}`);
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
$("#categoryFilter").on("change", function() {
  const category = $(this).val();
  if (category) {
    const filteredItems = budgetItems.filter(
      item => item.category === category
    );
    renderItems(filteredItems);
  } else {
    renderItems();
  }
});

// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem

$("#budgetItems").on("click", ".delete", function() {
  const id = parseInt(
    $(this)
      .parents("tr")
      .attr("data-id")
  );
  const remainingItems = budgetItems.filter(item => item.id !== id);
  budgetItems = remainingItems;
  updateStorage();
  renderItems();
  $("#categoryFilter").val("");
});
