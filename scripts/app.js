// for dom manipulation

const cityForm = document.querySelector("form");
/// this function updates the dom with what we get back from the user search
// it is async becaseu we are making the 2 async calls in forecast.js - have to wait for them
// make call to getCity, pass in the city value that the user types in, then call get weather with the city key that comes back , then send the weather info to the dom
// the city being passed into this async funciton  what the user has typed in
const updateCity = async city => {
  // city details - passing into the getCity funciton in forcast.js use await to give it time to come back
  const cityDets = await getCity(city);
  // when getCity comes back call getWeather, pass cityDets Key property  from api into getWeather
  const weather = await getWeather(cityDets.Key);
  // 2 propertys being returned
  return {
    cityDets: cityDets,
    weather: weather
  };
};

// even though this is listed second here it is happening first

// need to listion to the submit event on the form
cityForm.addEventListener("submit", e => {
  // prevent default action -this prevents the reload of the form
  e.preventDefault();

  // get city value - this is the thing the user types in
  // the name of the input type is city so can use .city.value  . trim takes out white space is there is any
  const city = cityForm.city.value.trim();
  // now that we have the value we can clear the form
  cityForm.reset();

  // update the ui with new city - send the fetched data to the dom
  // the city here is what the user has typed in
  updateCity(city)
    // when the promis from update city is returned do this
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
