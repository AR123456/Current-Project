// async & await
//  asynchronous code can be set off into a single function
// then use await  inside to chain promesies together

// all the async code (code that is going out somewhere to get something goes here)
// just add async between the = and () to make the function async, this key word will cause the function
// to return a promise regardles of what is inside the curly braces
const getTodos = async () => {
  // use await instead of .then  it stalls JS until promise come back.
  // but an async function is not blocking > async is not blocking the rest of the
  let response = await fetch("json/luigi.json");
  let data = await response.json();
  return data;
};

console.log(1);
console.log(2);

getTodos().then(data => console.log("resolved:", data));

console.log(3);
console.log(4);

console.log(getTodos());
////////////////////////////////////////////////////////////////////////////////
// this is the code if not using await and response
fetch("json/luigi.json")
  .then(response => {
    console.log("resolved", response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

////////////////////////////////////////
//this is the code if using await and response
const getTodos = async () => {
  const response = await fetch("json/luigi.json");
  const data = await response.json();
  console.log(data);
};
getTodos();
