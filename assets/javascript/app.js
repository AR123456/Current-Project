// nested async call backs//////////////////
// code is hard to read
// logic is difficult to reason out
// code is not modular

// var counter = 0;
// setTimeout(function() {
//   counter++;
//   console.log("Counter: ", counter);
//   setTimeout(function() {
//     counter++;
//     console.log("Counter: ", counter);
//     setTimeout(function() {
//       counter++;
//       console.log("Counter: ", counter);
//     }, 3000);
//   }, 2000);
// }, 1000);

////////////Returning a promise with promise chaining

// var promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     randomInt = Math.floor(Math.random() * 10);
//     resolve(randomInt);
//   }, 500);
// });

// promise
//   .then(function(data) {
//     console.log("Random int passed to resolve: ", data);
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve(Math.floor(Math.random() * 10));
//       }, 3000);
//     });
//   })
//   .then(function(data) {
//     console.log("Second random int passed to resolve: ", data);
//   });

// ///////// Promise Chaining  Returning Data
// var promise = new Promise(function(resolve, reject) {
//   resolve(5);
// });
// promise
//   .then(function(data) {
//     return data * 2;
//   })
//   .then(function(data) {
//     return data + 20;
//   })
//   .then(function(data) {
//     console.log(data);
//   });

//// nested call back refactor
// var counter = 0;
// setTimeout(function() {
//   counter++;
//   console.log("Counter: ", counter);
//   setTimeout(function() {
//     counter++;
//     console.log("Counter: ", counter);
//     setTimeout(function() {
//       counter++;
//       console.log("Counter: ", counter);
//     }, 3000);
//   }, 2000);
// }, 1000);

///////////////////////////////// refactored ///////////////
var counter = 0;
// create function declaration
function incCounter() {
  counter++;
  console.log("Counter: ", counter);
}
// create a runLater function ///////
function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}
// Chain Promises
runLater(incCounter, 1000)
  .then(function() {
    return runLater(incCounter, 2000);
  })
  .then(function() {
    return runLater(incCounter, 3000);
  })
  .then(function() {
    //final.then not necessary
  });
