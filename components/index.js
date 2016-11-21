var angular = require('angular');

var heroApp = angular.module('heroApp', []);

heroApp.controller('MainController', function() {
  this.hero = {
    name: 'mlding'
  };
});

function HeroDetailController() {
  
}

heroApp.component('heroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});
