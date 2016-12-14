var angular = require('angular');
var ui = require('angular-ui-router');

angular.module('helloSolarSystem', ['ui.router'])
  .config(function ($stateProvider) {
    var state = [
      {
        name: 'hello',
        url: '/hello',
        component: 'hello'
      },
      {
        name: 'about',
        url: '/about',
        component: 'about'
      },
      {
        name: 'people',
        url: '/people',
        component: 'people',
        resolve: {
          people: function (PeopleService) {
            return PeopleService.getAllPeople();
          }
        }
      },
      {
        name: 'person',
        url: '/people/{personId}',
        component: 'person',
        resolve: {
          person: function (PeopleService, $transition$) {
            return PeopleService.getPerson($transition$.params().personId);
          }
        }
      }
    ];
    
    state.forEach(function (state) {
      $stateProvider.state(state);
    });
  });