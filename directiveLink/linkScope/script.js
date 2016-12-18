var angular = require('angular');

angular.module('directiveLinkScope', [])
  .controller('ExamCtrl', function ($scope) {
    $scope.money = '123';
  })
  .directive('moneyWrap', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: {},
      link: function(scope) {
        scope.money = '789';
      },
      template: '<h1>money: &nbsp;{{money}}</h1>'
    }
  });