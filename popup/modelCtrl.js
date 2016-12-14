var angular = require('angular');

angular.module('ui.bootstrap.demo')
  .controller('ModalInstanceCtrl2', function ($uibModalInstance, $scope, items) {
    $scope.items = items;
    $scope.hellos = items;
    
    
    $scope.ok = function () {
      console.log('ok1');
      $uibModalInstance.close();
    };
    
    $scope.cancel = function () {
      console.log('cancel1');
      $uibModalInstance.dismiss('cancel');
    };
  });