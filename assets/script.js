var key = "7ec51d8adfb8894a3e41d376a38b7c34";

var searchButton = document.querySelector("#user-form");
var cityInputEl = document.querySelector('#city-input');
var currentWeather = document.querySelector('#current-weather');
var lastSearchEl = document.querySelector('#city-search-list');

var fiveDayEl = document.querySelector('#forecast-cards');

var currentCity = "";
var cityArray = [];
var getWeatherCityObj = [];

var getCityWeather = function(city) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;


    fetch(apiURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayCityWeather(data, city);
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
    
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    })
};

 
var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();
    

    if (cityName) {
        getCityWeather(cityName);
        cityInputEl.value = "";
    } else {
        alert("Enter a city name please");
    }
};

var displayCityWeather = function(city, searchTerm) {
    var displayCurrentDate = document.querySelector("#city-current-date");
    var currentDate = moment();
    displayCurrentDate.textContent = currentDate.format("(MMMM Do YYYY)");


    cityContainerEl.textContent = '';
    citySearchTerm.textContent = searchTerm;
};

 
// 5 day forecast

var displayForecast = function () {
    fiveDayEl.textContent = '';
}

var historyArray = function () {
    cityArray = json.parse(localStorage.getItem("previousCity"));
    displayHistory();
};

userFormEl.addEventListener("submit", formSubmitHandler);