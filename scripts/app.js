const cityForm = document.querySelector("form");

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  // becasue the property and value are the same name can use object shorthand notation to just use one
  return { cityDets, weather };
};

cityForm.addEventListener("submit", e => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
