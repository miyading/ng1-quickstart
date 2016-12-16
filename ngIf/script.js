var angular = require('angular');

angular.module('myApp', [])
  .controller('ExaCtrl', ['$scope', function ($scope) {
    var pbiVersion = {
      'product': 'A5',
      'productLine': '8line'
    };
    $scope.hellosArray = [
      {
        'keyLabel': 'create Time',
        'valueLabel': '07.08'
      },
      {
        'keyLabel': 'PBI',
        'valueLabel': pbiVersion
      }];
  }])
  .directive('helloWorld', function () {
    return {
      restrict: 'E',
      scope: {
        hellosArray: '='
      },
      templateUrl: './hello.html',
      link: function (scope) {
        scope.typeof = function (value) {
          return typeof(value)
        };
        scope.keys = function (value) {
          return Object.keys(value);
        }
      }
    }
  });
