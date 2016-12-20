var angular = require('angular');

angular.module('myApp', [])
  .controller('ExamCtrl', ['$scope', function($scope) {
    $scope.allCheckList = [
      {
        'trType': 'TR5',
        'name': 'first'
      },
      {
        'trType': 'TR5',
        'name': 'second'
      },
      {
        'trType': 'TR6',
        'name': 'third'
      }
    ];
  }])
  .filter('trTypeExchange', [function () {
    return function(checkList, trType) {
      if(trType === 'ALL') {
        return checkList;
      } else {
        var filteredList = checkList.filter(function(element) {
          return element.trType === trType;
        });
        return filteredList;
      }
    }
    
  }])
  .directive('checkList', function() {
    return {
      restrict: 'E',
      scope: {
        checkList: '=',
        trType: '@'
      },
      templateUrl: './checkList.html'
    }
  });
