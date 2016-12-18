var angular = require('angular');

angular.module('myApp', [])
  .controller('ExamCtrl', ['$scope', function ($scope) {
    $scope.configs = ['user', 'password'];
    
    $scope.param = {};
    
    $scope.check = function() {
      console.log('check ', $scope.param);
    }
  }]);