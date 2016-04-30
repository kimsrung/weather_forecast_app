var weatherApp = angular.module('weatherApp');

weatherApp.directive('weatherReport', [ function () {
  return {
    restric: 'E',
    templateUrl: 'views/directives/weather_report.html',
    replace: true,
    scope: {
      weatherDay: '=',
      degree: '@'
    },
    controller: ['$scope', function ($scope) {
      $scope.convertToFehrenheit = function (degk) {
        if ($scope.degree == 'f') {
          return Math.round(( 1.8 * (degk - 273)) + 32);
        } else {
          return Math.round(degk - 273.15);
        }
      }

      $scope.convertToDateTime = function (d) {
        return new Date(d * 1000);
      }
    }]
  }
}])