var angular = require('angular');

angular.module('directiveLink', [])
  .controller('DmCtrl', function ($scope) {
    $scope.money = "123";
  })
  .directive('moneyWrap', function () {
    function link(scope, element, attrs) {
      element.text(scope[attrs.cuName] + "$")
    }
    
    return {
      link: link
    };
  });