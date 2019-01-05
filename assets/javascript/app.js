// on letter hover do the automation
//use map and spread + query selector all to put each letter into a span tag

//get the word Spreads out of the h2 of class jump
const heading = document.querySelector(".jump");
heading.innerHTML = spanWrap(heading.textContent);
console.log(heading.innerHTML);
//put each letter into a span tag
function spanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join("");
}
// use query selector all to apply the annimation to each when the mouse passes over it
