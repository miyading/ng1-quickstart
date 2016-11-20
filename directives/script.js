var angular = require('angular');

angular.module('directive-example1', [])
  .controller('CustomerController', ['$scope', function ($scope) {
    $scope.haha = {
      name: 'haha',
      address: 'district'
    };
    $scope.mlding = {
      name: 'mlding',
      address: 'mamaamma'
    };
  }])
  .directive('myCustomer', function () {
    return {
      scope: {customerInfo: '=info'},
      
      templateUrl: function (elem, attr) {
        return 'customer-' + attr.type + '.html';
      }
    };
  });