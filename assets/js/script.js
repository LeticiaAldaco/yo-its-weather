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

// create function and for loop to get current weather
function getCurrentWeather() {
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

// create function, variables, and for loop to get city's current info
function renderCurrentWeather(data) {
  var cityTemp = document.querySelector("#cityTemp");
  var cityWind = document.querySelector("#cityWind");
  var cityHumid = document.querySelector("#cityHumid");
  var cityHeader = document.querySelector("#cityHeader");
  var uvInfo = document.querySelector("#uvInfo");
  var weatherIcon = document.querySelector("#topIcon");

  cityTemp.textContent = "Temp: " + data.main.temp;
  cityWind.textContent = "Wind: " + data.wind.speed + " MPH";
  cityHumid.textContent = "Humidity: " + data.main.humidity + "%";
  console.log(data);
  cityHeader.textContent =
    data.name +
    " - " +
    moment().format("dddd") +
    " " +
    moment().format("MMMM Do YYYY");
  // https://openweathermap.org/img/w/${data.list[i * 8 - 1].weather[0].icon}.png
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  );
  weatherIcon.setAttribute("style", "display: initial");
  weatherIcon.setAttribute("height", "50px");
  weatherIcon.setAttribute("width", "50px");
  fetch(
    "https://api.openweathermap.org/data/2.5/uvi?lat=" +
      data.coord.lat +
      "&lon=" +
      data.coord.lon +
      "&appid=" +
      apiKey
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      uvInfo.textContent = "UV Index: " + data.value;
      if (data.value < 2) {
        uvInfo.classList.add("favorable");
      } else if (data.value > 2 && data.value < 8) {
        uvInfo.classList.add("moderate");
      } else {
        uvInfo.classList.add("severe");
      }
    });
    
}

//create function, variables and for loop to run through 5 day cards info
function renderFivedayForecast(data) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apiKey}&units=imperial`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 1; i < 6; i++) {
        let divId = $("div#" + i);
        divId.children()[0].innerHTML = data.list[i * 8 - 1].dt_txt.split(
          " "
        )[0];
        divId
          .children()[1]
          .setAttribute(
            "src",
            `https://openweathermap.org/img/w/${
              data.list[i * 8 - 1].weather[0].icon
            }.png`
          );
        divId.children()[1].setAttribute("style", "display: initial");
        console.log(data.list[i * 8 - 1].weather[0].icon);
        divId.children()[2].innerHTML =
          "Temp: " + data.list[i * 8 - 1].main.temp;
        divId.children()[3].innerHTML =
          "Wind: " + data.list[i * 8 - 1].wind.speed + " MPH";
        divId.children()[4].innerHTML =
          "Humidity: " + data.list[i * 8 - 1].main.humidity;
      }
    });
}

form.addEventListener("submit", returnCityInfo);

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
