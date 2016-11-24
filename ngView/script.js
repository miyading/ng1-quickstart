var angular = require('angular');
var ngRoute = require('angular-route');

angular.module('ngViewExample', ['ngRoute'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/Book/:bookId', {
          templateUrl: 'book.html',
          controller: 'BookCtrl',
          controllerAs: 'book'
        })
        .when('/Book/:bookId/ch/:chapterId', {
          templateUrl: 'chapter.html',
          controller: 'ChapterCtrl',
          controllerAs: 'chapter'
        });
    }])
  .controller('MainCtrl', ['$route', '$routeParams',
    function MainCtrl($route, $routeParams) {
      this.$route = $route;
      this.$routeParams = $routeParams;
    }])
  .controller('BookCtrl', ['$routeParams',
    function ($routeParams) {
      this.name = 'BookCtrl';
      this.params = $routeParams;
    }])
  .controller('ChapterCtrl', ['$routeParams',
    function ($routeParams) {
      this.name = 'ChapterCtrl';
      this.params = $routeParams;
    }]);
