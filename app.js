const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
// get the resutl class from the html
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

  // show the result in the DOM- use theresult const that we defined above
  // add querySelector to get the results from the span tag- span is in the scope of the result div - change the text content of it using textContent  - template literal score
  result.querySelector("span").textContent = `${score}%`;
  // remove the display none from the html - this will happen when the form gets submitted (IE there is a score), on page load
  result.classList.remove("d-none");
});
