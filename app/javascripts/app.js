(function () {
  'use strict';
  // Create module
  var weatherApp = angular.module('weatherApp', ['ui.router', 'ngResource']);

  // Config Routes
  weatherApp.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
  })

  weatherApp.controller('HomeCtrl', ['$scope', 'weatherFactory', 'weatherService', function ($scope, weatherFactory, weatherService) {
    $scope.city = 'Phnom Penh';
    $scope.days = 5;
    $scope.degree = 'c';

    $scope.getForecast = function () {
      // $scope.weatherResult = weatherService.weatherApi.get({ q: $scope.city, cnt: $scope.days, appid: weatherService.appid });
      weatherFactory.getWeather($scope.city, $scope.days)
        .then(function (response) {
          $scope.weatherResult = response.data;
        }, function (response, status) {
          console.log(response);
        })
    }

    $scope.updateDay = function (days) {
      $scope.days = days;
      $scope.getForecast();
    }

    $scope.reset = function () {
      $scope.weatherResult = null;
      $scope.city = 'Phnom Penh';
      $scope.days = 5;
      $scope.degree = 'c';
    }
  }]);
})();