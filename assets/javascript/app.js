// use while for state
// while(someting is true){
//   do something
// }
// use for to iterate
// for (let i = 0; i < array.length; i++) {
//   do something

// }

//Fizz Buzz
// Write a program that prints the numbers from 1 to 100  but for multiples of three print "Fizz" instead of the number and for the multiples of five print "buzz". For numbers which are multiples of both three and five print "FizzBuzz"
let fizzBuzzy = function() {
  let num = [];
  for (let i = 1; num.length < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      num.push(" fizz buzz");
    } else if (i % 3 === 0) {
      num.push("fizz");
    } else if (i % 5 === 0) {
      num.push("buzz");
    } else {
      num.push(i);
    }
  }

  console.log(num);
};
fizzBuzzy();

// another fiz buzz  using  while

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
fizzBuzz();
