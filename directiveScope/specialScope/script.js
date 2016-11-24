var angular = require('angular');

angular.module('&scopeExample', [])
  .controller('myController', function ($scope) {
    $scope.value = 'hello world';
    $scope.click = function () {
      $scope.value = Math.random();
    };
  })
  .directive('isolatedDirective', function () {
    return {
      scope: {
        action: '&'
      },
      template: '<input type="button" value="在directive中执行父scope定义的方法" ng-click="action()" />'
    }
  });