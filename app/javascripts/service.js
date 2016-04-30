var weatherApp = angular.module('weatherApp');

weatherApp.service('weatherService', [ '$resource', function ($resource) {
  this.appid = '44c29d64c5474165cd6b8bed9de6a2c0';
  this.weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: 'JSON_CALLBACK'}, { get: { method: 'JSONP'}});
}])