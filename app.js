const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show the result
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    //inside the call back get resutls and output the output counter
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      // increment the output untill it is equal to score and run this every mili second  this gives the counting up effect to the number

      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
