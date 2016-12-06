var angular = require('angular');

angular.module('myApp', [])
  .controller('ExampleCtrl', ['$scope', function ($scope) {
    $scope.templates = [
      {
        name: 'template1.html',
        url: 'template1.html'
      },
      {
        name: 'template2.html',
        url: 'template2.html'
      }
    ];
    
    $scope.template = $scope.templates[0];
  }])
  .controller('OtherCtrl', ['$scope', function ($scope) {
    $scope.other = {
      name: 'other.html',
      url: 'other.html'
    };
  }]);