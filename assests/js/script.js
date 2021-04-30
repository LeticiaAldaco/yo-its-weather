var currentUrl = "api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=feae67b17a7db2b1dc50bc7b73015b2c&units=imperial";
var forecastUrl = "api.openweathermap.org/data/2.5/forecast?q=";
var long = "";
var lat = "";
var uvUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  lat +
  "&lon=" +
  long +
  apiKey;

// Grab the city name from input and create an event listener for the search button

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