// the find method returns the value of the first item in an array that passes a certain test in a callback function
// once the value is found it stops and returns it.
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => {
  // returns true or false, stops when true is found and returns the value to the variable
  return score > 50;
});
// short hand way to wright
const firstHighScore = scores.find(score => score > 50);
console.log(firstHighScore);
