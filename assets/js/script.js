// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
// local storage on chrom will not retain the order of key value pairs - to get an ordered set of key value pairs use an array, local storage need to be a string stringigfy first then turn back into object by parsing it to turn it back into an object
// in chrome dev tools can see what is in local storage by typing local storage can clear it from console by typing localStorage.clear
const budgetItem = JSON.parse(localStorage.getItem("budgetItems")) || [];
let lastID = localStorage.getItem("lastID") || 0;

// ======================
// FUNCTIONS
// ======================

// 4th: function to update localStorage with latest budgetItems and latest lastID

// 5th: function to render budgetItems on table; each item should be rendered in this format:
// <tr data-id="2"><td>Oct 14, 2019 5:08 PM</td><td>November Rent</td><td>Rent/Mortgage</td><td>1300</td><td>Fill out lease renewal form!</td><td class="delete"><span>x</span></td></tr>
// also, update total amount spent on page (based on selected category):

// ======================
// MAIN PROCESS
// ======================

// 2nd: wire up click event on 'Enter New Budget Item' button to toggle display of form
$("#toggleFormButton").on("click", function() {
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

// 6th: wire up change event on the category select menu, show filtered budgetItems based on selection

// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem
