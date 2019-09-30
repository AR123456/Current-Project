// XMLHttpRequest is a request object built into the browser
const request = new XMLHttpRequest();

// propertys and methods are on the XMLHttprequest
//special event listener "readystatechange"
request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4) {
    // console.log(request);
    console.log(request.responseText);
  }
});
// type of request is frist argument , the second argument is where the request is going to
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send actualy sends the request
request.send();
