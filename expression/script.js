var angular = require('angular');

angular.module('myApp', [])
  .controller('myController', ['$scope', function ($scope) {
    $scope.expr = '4+5 | currency';
    $scope.exprs = [];
    
    $scope.add = function (expr) {
      $scope.exprs.push(expr);
    };
    
    $scope.delete = function (index) {
      $scope.exprs.splice(index, 1);
    }
  }]);