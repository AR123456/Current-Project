function bmiCalc(k, m) {
  bmi = k / (m ^ 2);
  console.log(bmi);
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Nomral ";
  }
  if (bmi > 24.99 && bmi <= 29.9) {
    return "Overweight";
  }
  if (bmi > 29.99 && bmi <= 34.9) {
    return "Obese";
  }
  if (bmi > 34.9) {
    return "Extremly Obese";
  }
}
bmiCalc(78, 1.5);
