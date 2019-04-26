//countDown function
// accept time in seconds
//print time remaining every second
// when at 0 time print ring  ring rng

function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}
countDown(30);
