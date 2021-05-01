// var currentUrl = "api.openweathermap.org/data/2.5/weather?q=";
// var apiKey = "feae67b17a7db2b1dc50bc7b73015b2c&units=imperial";
// var forecastUrl = "api.openweathermap.org/data/2.5/forecast?q=";
// var long = "";
// var lat = "";

var form = document.querySelector("#cityName");
var input = document.querySelector("#cityNameInput");
var apiKey = "feae67b17a7db2b1dc50bc7b73015b2c";
// Grab city name from input and create an event listener for the search button
function returnCityInfo(event) {
  event.preventDefault();
  cityName = input.value;
  console.log(cityName);
  input.value = "";
  getCurrentWeather();
}
function getCurrentWeather() {
  // var currentUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCurrentWeather(data);
      renderFivedayForecast(data);
    });
}
function renderCurrentWeather(data) {
  var cityTemp = document.querySelector("#cityTemp");
  var cityWind = document.querySelector("#cityWind");
  var cityHumid = document.querySelector("#cityHumid");
  var cityHeader = document.querySelector("#cityHeader");
  var uvInfo = document.querySelector("#uvInfo");
  cityTemp.textContent = "Temp: " + data.main.temp;
  cityWind.textContent = "Wind: " + data.wind.speed + " MPH";
  cityHumid.textContent = "Humidity: " + data.main.humidity + "%";
  uvInfo.textContent = "UV Index: ";
  console.log(data);
  cityHeader.textContent = data.name + " - " + moment().format("MMMM Do YYYY");
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      data.coord.lat +
      "&lon=" +
      data.coord.lon +
      apiKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //  console.log(data);
    });
}
function renderFivedayForecast(data) {
  fetch(
    `api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
    });
}

form.addEventListener("submit", returnCityInfo);
// Create the variable to grab the city name from the input

// Create function for current weather API call with city parameter

//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history

//WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
