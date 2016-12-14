var angular = require('angular');
var ui = require('angular-ui-router');

angular.module('myApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    };
    
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the ui-router hello world app!</h3>'
    };
    
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  }])
  // .run(function ($rootScope, $state, $stateParams) {
  //   $rootScope.$state = $state;
  //   $rootScope.$stateParams = $stateParams;
  // })
  .controller('ExampleCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.toggle = function () {
      $state.go('hello');
    };
    //
    // function myApply(expr, locals) {
    //   return $scope.$eval(expr, locals);
    //
    // }
    
    /*$scope.navList = [{name: 'WorkSpace', func: $state.go('hello')}, {
      name: 'TR Check',
      func: $state.go('about')
    }];*/
  }]);