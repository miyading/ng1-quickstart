var angular = require('angular');

angular.module('ngMaxlengthExample', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.maxlength = 5;
  }]);