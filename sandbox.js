//json is just a long string htat looks like an object , need to turn it into a JS object

const getTodos = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      //JSON.parse turns the data into a JS object
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });

  request.open("GET", "todos.json");
  request.send();
};

getTodos((err, data) => {
  console.log("callback function fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
