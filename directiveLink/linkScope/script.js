var angular = require('angular');

angular.module('directiveLinkScope', [])
  .controller('ExamCtrl', function ($scope) {
    $scope.reportDetailInfo = {
      'name': 'productIT',
      'creator': 'dingding',
      'createTime': new Date()
    };
    $scope.page = 1;
  })
  .directive('reportDetail', function () {
    return {
      restrict: 'E',
      scope: {
        reportDetailInfo: '=',
        page: '='
      },
      link: function(scope) {
        console.log('scope.reportDetailInfo ', scope.reportDetailInfo);
        console.log('scope.page ', scope.page);
        scope.page += 1;
        console.log('scope.page after', scope.page);
        
        scope.label = {
          'name': scope.reportDetailInfo.name + 'dingding',
          'creator': scope.reportDetailInfo.name + 'mengli'
        };
      },
      templateUrl: './reportDetail.html'
    }
  })
  .directive('configLabel', function() {
    return {
      restrict: 'E',
      scope: {
        label: '='
      },
      templateUrl: './configLabel.html'
    }
  });