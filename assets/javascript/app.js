// variables
let user = "";
let computer = "";
let win = 0;
let loss = 0;
let tie = 0;

document.onkeyup = function(event) {
  user = event.key;
  console.log(user);
  var chars = "rps";
  var string_length = 1;
  var computer = "";
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    computer += chars.substring(rnum, rnum + 1);
  }
  if (user === "r" || user === "p" || user === "s") {
    console.log("you choose:", user);
    document.getElementById("user").value = user;
    console.log("computer chooses: ", computer);
    document.getElementById("computer").value = computer;
    if (user === computer) {
      tie++;
      console.log("tie number: ", tie);
      document.getElementById("tie").value = tie;
    }
    if (user === "r" && computer === "p") {
      // rock losses
      loss++;
      document.getElementById("loss").value = loss;
    }
    if (user === "p" && computer === "s") {
      // papaer loses
      loss++;
      document.getElementById("loss").value = loss;
    }
    if (user === "s" && computer === "p") {
      win++;
      document.getElementById("win").value = win;
    }
    if (user === "r" && computer === "s") {
      win++;
      document.getElementById("win").value = win;
    }
    if (user === "p" && computer === "r") {
      win++;
      document.getElementById("win").value = win;
    }
    if (user === "s" && computer === "r") {
      loss++;
      document.getElementById("loss").value = loss;
    }
  }
};
