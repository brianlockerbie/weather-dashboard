var searchButton = document.querySelector("#user-form");
var cityInputEl = document.querySelector('#city-input');
var currentWeather = document.querySelector('#current-weather');
var lastSearchEl = document.querySelector('#city-search-list');

var fiveDayEl = document.querySelector('#forecast-cards');

var currentCity = "";
var cityArray = [];
var getWeatherCityObj = [];

var getCityWeather = function(weather) {
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?q=" + cityName + "lat={lat}&lon={lon}&appid=7ec51d8adfb8894a3e41d376a38b7c34";


    fetch(apiURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayWeather(data, weather);
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
    
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    })
}

 
var searchCity = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();
    console.log(cityName);

    if (cityName) {
        getCityName(cityName);
        cityInputEl = "";
    } else {
        alert("Please enter a City name")
    }
}

 
// 5 day forecast

var displayForecast = function () {
    fiveDayEl.textContent = '';
}

var historyArray = function () {
    cityArray = json.parse(localStorage.getItem("previousCity"));
    displayHistory();
};

var displayHistory = function () {
    lastSearchEl.innerHTML = "";

    for (var i=0; i < cityArray.length; i++) {
        var cityList = document.createElement("li");
        cityList.classList = "list-group-item";
        cityList.textContent = cityArray[i].cityName; 
    }
}; 

var historyClick = function (event) {
    event.preventDefault();


}

lastSearchEl.addEventListener("click", historyClick);

searchButton.addEventListener("submit", searchCity); 