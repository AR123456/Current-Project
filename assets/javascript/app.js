// using generators to make a waterfall API request

function ajax(url) {
  fetch(url).then(data => data.json()).then(data => dataGen.next(data))
}




// generator function for steps 
function* steps() {
  // making 3 ajax requests that relie on the one before 
  console.log('fetching beers');
  const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
  console.log(beers);

  // if the data is needed for the second request it could be done this way //////////
  // console.log('fetching wes');
  // const wes = yield ajax('https://api.github.com/users/' + beers[0]);
  // console.log(wes);



  console.log('fetching wes');
  const wes = yield ajax('https://api.github.com/users/wesbos');
  console.log(wes);

  console.log('fetching fat joe');
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
  console.log(fatJoe);


}
const dataGen = steps();
dataGen.next(); // kicks if off