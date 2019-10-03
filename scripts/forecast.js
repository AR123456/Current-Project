const key = "X5qzdoyKCwiNNhtDP4jFxO2kPbTIH5m9";
// locations api
// get city information - the city code that we will use ins a second request to get the weather info
// make asynce cause it needs to be a promis
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  // a ? means a query peram to the url   using a template string to imbed the query params the & indicates the next query param
  // make city a peramiter to the function so that when invoked, can pass as an argument and then out put as a variable
  // this is what is being done with city
  const query = `?apikey=${key}&q=${city}`;
  // now combine together and "fetch" that resource - the endpoint url and the query
  //await resolves the promis and delivers it to the const response
  const response = await fetch(base + query);
  // now turn the response into data using the json method - this is await because the json methond returns a promise too
  const data = await response.json();
  // taking the first or closest city match using array
  return data[0];
};
// passing the city into the getCity function
getCity("manchester")
  .then(data => console.log(data))
  .catch(err => console.log(err));
