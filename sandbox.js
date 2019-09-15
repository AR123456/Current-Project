//const button = document.querySelector("button");
/////// addEventListner takes in 2 arguments the event and then the call back function (what to do)
// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });
/// getting the node list on li items that are the to do ////
const items = document.querySelectorAll("li");
// now using forEach to add the event listener to the items in the node list
items.forEach(item => {
  item.addEventListener("click", e => {
    console.log("item clicked");
    console.log(e);
    console.log(e.target);
    console.log(item);
    e.target.style.textDecoration = "line-through";
  });
});
