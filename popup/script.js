var angular = require('angular');

angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $scope) {
  $scope.items = ['item1111', 'item2111', 'item3111'];
  
  $scope.open = function (size) {
    $('.modal').addClass('fade');
    
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl2',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
    
    // modalInstance.result.then(function (selectedItem) {
    //   $scope.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });
  };
  
})
//   .controller('ModalInstanceCtrl', function ($uibModalInstance, $scope) {
//   // $scope.items = items;
//   // $scope.selected = {
//   //   item: $scope.items[0]
//   // };
//
//   $scope.ok = function () {
//     console.log('ok2');
//     $uibModalInstance.close();
//   };
//
//   $scope.cancel = function () {
//     console.log('cancel2');
//     $uibModalInstance.dismiss('cancel');
//   };
// });;

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
