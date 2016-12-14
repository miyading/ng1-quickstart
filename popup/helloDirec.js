var angular = require('angular');

angular.module('ui.bootstrap.demo')
  .directive('helloWorld', function () {
    return {
      restrict: 'E',
      scope: {
        hellos: '=hellos'
      },
      templateUrl: './hello.html'
    };
  });