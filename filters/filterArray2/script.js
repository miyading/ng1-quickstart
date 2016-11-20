var angular = require('angular');

angular.module('filterArray', [])
  .filter('filterArray', ['filterFilter', function (filterFilter) {
    return function (input, word) {
      return filterFilter(input, word);
    }
  }])
  .controller('filterController', ['filterArrayFilter', function (filterArrayFilter) {
    this.array = ['Toaster', 'master', 'bob', 'mlding'];
  
    this.filteredArray = filterArrayFilter(this.array, 'a');
  }]);