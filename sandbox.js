const getTodos = resource => {
  // JS Promise
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch the data");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};
// .then and  . catch
getTodos("json/luigi.json")
  .then(data => {
    console.log("promise resolved:", data);
  })
  .catch(err => {
    console.log("promise rejected:", err);
  });

// promise example one
const getSomething = () => {
  // first return a new Promise  it iwll resolve or be rejected if there is an error
  // resolve and refject are prarameters ready made in Promis
  return new Promise((resolve, reject) => {
    // do something  fetch data
    // resolve ('some data')
    reject("some error");
  });
};

getSomething().then(
  data => {
    console.log("promise resolved:", data);
  },
  err => {
    console.log("promise rejected:", err);
  }
);
// using catch  - looks better espcially when chaining promises
getSomething()
  .then(data => {
    console.log("promise resolved:", data);
  })
  .catch(err => {
    console.log("promise rejected:", err);
  });
