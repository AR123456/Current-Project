// function declaration - are hoisted to top so can be delared anywhere even before delcared
function greet() {
  console.log("hello there");
}

// function expression - are not hoised , must be declared before run 
const speak = function() {
  console.log("good day!");
};

// greet();
// greet();

speak();
