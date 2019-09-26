// reduce can return any value you want based on the values in the array that are iterated over like a number, string or new array
//callback funtion perfomed on each value

const scores1 = [10, 20, 60, 40, 70, 90, 30];
// call back takes in accumulator(a running total) and current
const result = scores1.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
  //passing an argument which is the inital value of the accumulator of zero
}, 0);

console.log(result);

const scores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 }
];

const marioTotal = scores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);
