var angular = require('angular');

angular.module('myApp', [])
  .controller('ExamCtrl', ['$scope', function ($scope) {
    $scope.configs = [
      {
        label: 'user',
        type: 'INPUT'
      },
      {
        label: 'password',
        type: 'PASSWORD'
      }
    ];
    $scope.param = {};
    
    $scope.check = function() {
      console.log('check ', $scope.param);
    }
  }]);