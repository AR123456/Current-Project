const cityForm = document.querySelector("form");
// for the card class
const card = document.querySelector(".card");
// for the detail class
const details = document.querySelector(".details");
// this is updating the dom with the "data" we get back from the updateCity function
const updateUI = data => {
  // doing this so that we can just reference data.cityDets as cityDets and data.weather as weather
  const cityDets = data.cityDets;
  const weather = data.weather;

  // update details template
  // using a template string to send data to the dom
  //Sean just did a copy paste from the HTML file as a starter and then used ${} to switch the text out for the data that came back
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;

  // remove the d-none class if present - addded to the HTML
  //
  if (card.classList.contains("d-none")) {
    //   if present remove it
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
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
    // pass the data we get back into the updateUi function
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
