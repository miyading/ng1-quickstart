var angular = require('angular');

angular.module('filterArray', [])
.controller('filterController', ['filterFilter', function(filterFilter) {
  this.array = ['Toaster', 'master', 'bob', 'mlding'];
  
  this.filteredArray = filterFilter(this.array, 'a');
}]);