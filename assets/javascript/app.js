// Promise example
// var p1 = new Promise(function(resolve, reject) {
//   var num = Math.random();
//   if (num < 0.5) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });
// p1.then(function(result) {
//   console.log("Success: ", result);
// }).catch(function(error) {
//   console.log("Error: ", error);
// });

//Promise with asyncromis code
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});
promise.then(function(data) {
  console.log("Random init passed to resolve: ", data);
});
