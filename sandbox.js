// fetch API
// this is native and built into javascript  can replace the old htp request
// a function in the language
// fetch has one arument which is the resource that needs to be fetched - fetch returns a promis so can use .then
fetch("json/luigi.json")
  // .then is for the success message
  .then(response => {
    //console.log(response);
    // response.json gets data and parses it to make it useful in the code.
    return response.json();
  })
  // becasue we have a promise returned we can use .then and chain them too
  .then(data => {
    console.log(data);
  })
  // .catch fires a call back when /if there is an error
  //  with the fetch API is is only ever rejected when there is a network error, if ther is just an error with like a typo in the end point it still resolves.  But, in the response thee is a status with a number for the type of error and statusText of the error

  .catch(err => {
    console.log(err);
  });

//////////////////////////////
// fetch("json/luigis.json")
//   .then(response => {
//     console.log("resolved", response);
//   })
//   .catch(err => {
//     console.log("rejected", err);
//   });
// Three steps   1) fetch data  2) take response  3) return response
