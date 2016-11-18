var angular = require('angular');

angular.module('thisApp', [])
  .controller('GreetingController', ['$scope', function ($scope) {
    $scope.greeting = 'hello ';
  }])
  .controller('convertMsg', ['$scope', function($scope) {
    $scope.msg = '';
    $scope.inputMsg = '';
    $scope.customizeMsg = function() {
      $scope.msg = $scope.inputMsg;
    };
    $scope.convertToChill = function() {
      $scope.msg = 'chill';
    };
  
    $scope.convertToSpicy = function() {
      $scope.msg = 'spicy';
    };
  }]);