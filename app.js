//Game
// player must guess a number between a randome generated  min and max
// player gets a certian number of guesses
// notify player of guesses remaining
// notify the player of the correct answer if they guess wrong
// let player choose to play agian

//variables
// Game values
let min = 1,
  max = getRandomNum(50, 1);
winningNum = getRandomNum(min, max);
guessesLeft = getRandomNum(min, 10);

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
// play again event listoner - the whole game is wrapped in the game wrapper
// use mousedown so that the game over message can be displayed before the page reload
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

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
    gameOver(true, `${winningNum} is correct, You Win !`);
  } else {
    //wrong guess
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over
      gameOver(false, `Game over, the correct number was ${winningNum}`);
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

// game over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // disable input
  guessInput.disable = true;
  //change border color of the input box
  guessInput.style.borderColor = color;
  //text color
  message.style.color = color;
  setMessage(msg);
  //dynamicaly add class to the button to change it into play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
  // event delegation have to add litioner to parrent then look for target  to compensate for page load
}
// random number generator
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(winningNum, guessesLeft);

//  setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
