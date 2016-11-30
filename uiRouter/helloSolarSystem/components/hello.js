var angular = require('angular');

angular.module('helloSolarSystem')
  .component('hello', {
    template: '<h3>{{$ctrl.greeting}} solar system</h3>' +
    '<button ng-click="$ctrl.toggleGreeting()">Toggle greeting</button>',
    
    controller: function() {
      this.greeting = 'hello';
      
      this.toggleGreeting = function() {
        this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
      };
    }
    
  });