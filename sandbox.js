//sort changes the existing array it is destructive

// example 1 - sorting strings
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

// names.sort();
names.reverse();
console.log(names);

// example 2 - sorting numbers- sort only looks at the frist number
const scores = [10, 50, 20, 5, 35, 70, 45];
// to fix this use the compare
scores.sort((a, b) => a - b);

// scores.sort();
// scores.reverse();
console.log(scores);

// example 3 - sorting objects
const players = [
  { name: "mario", score: 20 },
  { name: "luigi", score: 10 },
  { name: "chun-li", score: 50 },
  { name: "yoshi", score: 30 },
  { name: "shaun", score: 70 }
];

players.sort((a, b) => {
  // using compare takes 2 consecutive elements in the array and compares them to oneanohter
  // returns a zero or postive or negative number , if a should come first return negative it b should come first return a positive number if they are equal retun zero
  if (a.score > b.score) {
    // makes a come first in the sorted array
    return -1;
  } else if (b.score > a.score) {
    // b will be switeched so it is first
    return 1;
  } else {
    return 0;
  }
});
//short hand
// players.sort((a, b) => b.score - a.score);

console.log(players);
