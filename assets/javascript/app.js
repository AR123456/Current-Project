const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
  //check if he shift key is down
  //if putting check in box
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    //loop over in between check boxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
