//arrays
var guestList = ["Angela", "Jack", "Pam", "James", "Laura", "Jason"];
// array  .includes  .length
var name = prompt("What is your name ?");

if (guestList.includes(name)) {
  alert("Welcome to the party");
} else {
  alert("You are not on the list.");
}
