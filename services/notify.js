var angular = require('angular');

angular.module('myApp', [])
  .controller('myController', ['$scope', 'notify', function ($scope, notify) {
    $scope.callNotify = function (msg) {
      notify(msg);
    };
  }])
  .factory('notify', ['$window', function ($window) {
    var msgs = [];
    
    return function (msg) {
      msgs.push(msg);
      if(msgs.length === 3) {
        $window.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]);