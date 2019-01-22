// loop a line of a song 


function* lyrics() {
  //notice this is in back tickes so its dynamic 
  yield `But don't tell my heart`;
  yield `My achy breaky heart`;
  yield `I just don't think he'd understand`;
  yield `And if you tell my heart`;
  yield `My achy breaky heart`;
  yield `He might blow up and kill this man`;
}

const achy = lyrics();
//can use this instead of manualy calling .next 
for (const line of achy) {
  console.log(line);
}