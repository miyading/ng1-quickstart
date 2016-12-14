var angular = require('angular');

angular.module('myApp', [])
  .controller('myController', function ($scope) {
    $scope.usersr = [
      {
        name: 'hello',
        id: 1
      },
      {
        name: 'world',
        id: 2
      }
    ];
    
    $scope.selectedUserName = $scope.usersr[0].name;
  })
  .directive('isolatedDirective', function () {
    return {
      scope: {
        users: '=',
        selectedUserName: '='
      },
      templateUrl: './users.html'
    }
  });