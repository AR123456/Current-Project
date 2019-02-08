//Love Calculator
prompt("What is your name ? ");
prompt("What is the name of your hearts desire ? ");
function LoveNum() {
  // var n = Math.random();

  // n = Math.floor(n * 100) + 1;

  var n = Math.floor(Math.random() * 100 + 1);
  if (n > 70) {
    alert("Your love score is:  " + n + "% the perfect love");
  }
  if (n < 70 && n > 30) {
    alert("Your love score is:  " + n + "% that is an average love");
  }
  if (n < 30) {
    alert("Your love score is:  " + n + "% keep looking !");
  }
}
LoveNum();
