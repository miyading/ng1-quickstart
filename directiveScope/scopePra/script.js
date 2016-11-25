var angular = require('angular');

angular.module('@scopePra', [])
  .controller('myController', function ($scope) {
    $scope.msg = '';
    
    $scope.addItem = function (item) {
      $scope.msg = 'changed';
    }
  })
  .directive('isolatedDirective', function () {
    return {
      scope: {
        msg: '@',
        add: '&onAdd'
      },
      template: '{{msg}} <br/> <input type="text" placeholder="new to do" ng-model="msg" /> <br/> <button ng-click="add({item: 1})"></button>'
    }
  });