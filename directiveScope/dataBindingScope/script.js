var angular = require('angular');

angular.module('=scopeExample', [])
  .controller('myController', function ($scope) {
    $scope.user = {
      name: 'hello',
      id: 1
    };
  })
  .directive('isolatedDirective', function () {
    return {
      scope: {
        user: '='
      },
      template: 'Say {{user.name}} <br/> 改变隔离scope的name: <input type="text" value="" ng-model="user.name" />'
    }
  });