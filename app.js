//array that stores the correc answers one for each question.
const correctAnswers = ["B", "B", "B", "B"];
// define form
const form = document.querySelector(".quiz-form");
// create the event listiner for the submint event and prevent page refresh
form.addEventListener("submit", e => {
  e.preventDefault();
  // create let scoure to store the users answers
  let score = 0;
  // targeting the form, the name of input field and the value of that name
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check the answers - comapre the userAnswere array to the correct answer array
  // use the forEach 2 paraments for (user) answer and index of the answer
  userAnswers.forEach((answer, index) => {
    // copair and if true increment score by 25
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // log the score to console
  console.log(score);
});
