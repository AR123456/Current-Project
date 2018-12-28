const box = document.querySelector(".box");

box.addEventListener("click", function() {
  let first = "opening";
  let second = "open";

  if (this.classList.contains(first)) {
    [first, second] = [second, first];
  }
  this.classList.toggle(first);
  setTimeout(() => {
    //use the arrow function here so that it is inherited from the function ( parent) vs from the window
    console.log(this);
    this.classList.toggle(second);
  }, 500);
});
