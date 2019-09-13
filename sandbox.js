const article = document.querySelector("article");

//// turn the HTML collection into an array using the .from method on the JS Array object - pass in what you want to make the array from.  Note Array.from is not destructive , it doesn't alter  artcle.children ////

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

Array.from(article.children).forEach(child => {
  child.classList.add("article-element");
});

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
