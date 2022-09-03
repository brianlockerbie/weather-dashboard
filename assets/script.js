var key = "7ec51d8adfb8894a3e41d376a38b7c34";

var searchButton = document.querySelector("#user-form");
var cityInputEl = document.querySelector('#city-input');
var currentWeather = document.querySelector('#current-weather');
var lastSearchEl = document.querySelector('#city-search-list');

var fiveDayEl = document.querySelector('#forecast-cards');


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
        getForecast(cityName);
        cityInputEl.value = "";
    } else {
        alert("Enter a city name please");
    }
};

var displayCityWeather = function(city, searchTerm) {
    cityContainerEl.textContent = '';
    citySearchTerm.textContent = searchTerm;

    var displayCurrentDate = document.querySelector("#city-current-date");
    var currentDate = moment();
    displayCurrentDate.textContent = currentDate.format("(L)");

    var displayTemp = document.querySelector("#temp-input");
    var currentTemp = city.main.temp + " °F";
    displayTemp.textContent = currentTemp;

    var displayHumidity = document.querySelector("#humidity-input");
    var currentHumidity = city.main.humidity + "%";
    displayHumidity.textContent = currentHumidity; 

    var displayWind = document.querySelector("#wind-input");
    var currentWind = city.wind.speed + " MPH";
    displayWind.textContent = currentWind;

    // lon = city.coord.lon; 
    // lat = city.coord.lat;

    // var displayUv = document.querySelector("uv-input"); 
    // var currentUv = getUvIndex();
    // displayUv.textContent = currentUv; 

};

var getForecast = function(city) {
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=58appid=" + key;


    fetch(forecastURL).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayForecast(data.list);
                console.log(data, "city");
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
    
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    })
};

var displayForecast = function (list) { 
    console.log(list);

    for (var i = 0; i <= 4; i++) {
        console.log(i);

        var displayDate = document.querySelector(`#date-${i}`);
        var forecastDate = list[i].dt;
        displayDate.textContent = forecastDate;

        var displayTemp = document.querySelector(`#temp-${i}`);
        var forecastTemp = list[i].main.temp + " °F";
        displayTemp.textContent = forecastTemp; 

        var displayHumidity = document.querySelector(`#humidity-${i}`);
        var forecastHumidity = list[i].main.humidity + "%";
        displayHumidity.textContent = forecastHumidity;
        }

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