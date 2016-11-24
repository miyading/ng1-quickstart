var angular = require('angular');

angular.module('@scopeExample', [])
  .controller('myController', function ($scope) {
    $scope.name = 'hello world';
  })
  .directive('isolatedDirective', function () {
    return {
      scope: {
        name: '@'
      },
      template: 'Say {{name}} <br/> 改变隔离scope的name: <input type="text" value="" ng-model="name" />'
    }
  });