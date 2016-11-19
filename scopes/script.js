var angular = require('angular');

angular.module('myApp', [])
  .controller('myController', ['$scope', function($scope) {
    $scope.name = 'world';
    
    $scope.sayHello = function() {
      $scope.greet = 'Hello ' + $scope.name;
    };
  }]);