//Game
// player must guess a number between a randome generated  min and max
// player gets a certian number of guesses
// notify player of guesses remaining
// notify the player of the correct answer if they guess wrong
// let player choose to play agian

//variables
// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// functions

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  //validate the guess is number   between min and max ect
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // check for winner
  if (guess === winningNum) {
    // disable input
    guessInput.disable = true;
    //change border color of the input box
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct, You Win !`, "green");
  } else {
    //wrong guess
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      setMessage(`Game over, the correct number was ${winningNum}`, "red");
    } else {
      // clear the input from the form
      guessInput.value = "";
      //game continues
      guessInput.style.borderColor = "red";
      setMessage(
        `${guess} is not correct, try again.  ${guessesLeft} guesses remaining`,
        "red"
      );
    }
  }
});

// setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
