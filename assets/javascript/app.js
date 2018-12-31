const dict = {
  HTML: "Hyper Text Markup Language",
  CSS: "Cascading Style Sheets",
  JS: "JavaScript"
};

function addAbbreviations(strings, ...values) {
  //need new array of values for if a abbreviation wrap in a abbr tag.
  const abbreviated = values.map(value => {
    //check if the dictionary has a key for the value return the dictionary item with the matching key
    if (dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr> `;
    }
    //if it is not in the dictionary just return it
    return value;
  });
  //use reduce to return the string takes function and what yu start with
  return strings.reduce((sentence, string, i) => {
    return `
     ${sentence}${string}${abbreviated[i] || ""}
    `;
  }, "");
}
const first = "Anne";
const last = "Rottler";
//in this sentence the HTML , CSS and JS are being passed in as strings to be interpelated
const sentence = addAbbreviations`Hello my name is ${first} ${last} and I love to code ${"HTML"}, ${"CSS"} and ${"JS"}`;

const bio = document.querySelector(".bio");
const p = document.createElement("p");
p.innerHTML = sentence;
bio.appendChild(p);

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
