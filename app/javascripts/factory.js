var weatherApp = angular.module('weatherApp');

weatherApp.factory('weatherFactory', [ '$http', function ($http) {
  var appid = '44c29d64c5474165cd6b8bed9de6a2c0';
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

  function getWeather(city, days) {
    return $http.get(weatherApiUrl + 'q=' + city + '&cnt=' + days + '&appid=' + appid);
  }

  return {
    weatherApiUrl: weatherApiUrl,
    getWeather: getWeather
  }
}]);