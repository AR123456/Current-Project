// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//   var bottleWord = "bottle";
//   if (numberOfBottles === 1) {
//     bottleWord = "bottles";
//   }
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//   console.log(numberOfBottles + " " + bottleWord + " of beer,");
//   console.log("Take one down, pass it around,");
//   numberOfBottles--;
//   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }
bottles = () => {
  for (let i = 99; i > 0; i--) {
    console.log(
      i +
        "bottles of beer on the wall" +
        i +
        "bottles of beer, take one down pass it around"
    );
  }
};
bottles();
console.log("No bottles of beer on the wall , no bottles of beer ");
