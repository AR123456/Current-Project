// select the second hand div element
const secondHand = document.querySelector(".second-hand");
// select the min hand div element
const minHand = document.querySelector(".min-hand");
// select the hour hand div element
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  //using JS Date function
  const now = new Date();
  //*************** second hand ***********
  //using JS getSeconds function
  const seconds = now.getSeconds();
  //convert to base 10 for the degrees, add 90 deg to offset the original 90 deg used to orient the clock face up and down vs side to side
  const secondsDegrees = (seconds / 60) * 360 + 90;
  // apply styles to the second hand selected and made into const above,ES6 template literals
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //*******************min hand************
  //using JS get min function
  const min = now.getMinutes();
  // min to base 10 and take care of offset
  const minsDegrees = (min / 60) * 360 + 90;
  // apply styles ot the min hand const , ES 6 template literals
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  //*******************Hour hand************
  //using JS get min function
  const hour = now.getHours();
  // min to base 10 and take care of offset
  const hoursDegrees = (hour / 12) * 360 + 90;
  // apply styles ot the min hand const , ES 6 template literals
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);

//TODO Use Javascript if statements to fix the weird jump when the hands hit 12 take off the transition that is on line 45  of styles so that when it gets to the next one it will not transition itself backwards  and then re apply it after( inside of the set date  )
