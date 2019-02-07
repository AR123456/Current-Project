function fibonacciGenerator(n) {
  //TODO  every number after the first 2 is the some of the 2 proceeding numbers

  let fib = [];
  let num1 = 0;
  let num2 = 1;
  let num3 = 1;

  for (let i = 0; i < n; i++) {
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(fib.push(num3));
  }

  //Return an array of fibonacci numbers.
}
fibonacciGenerator(5);
