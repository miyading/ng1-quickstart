var angular = require('angular');

var heroApp = angular.module('heroApp', []);

function HeroListController() {
  var ctrl = this;
  
  ctrl.list = [
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Bestman',
      location: 'manhaton'
    }
  ];
  
  ctrl.updateHero = function (hero, prop, value) {
    hero[prop] = value;
  };
  
  ctrl.deleteHero = function (hero) {
    var idx = ctrl.list.indexOf(hero);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}

function HeroDetailController() {
  var ctrl = this;
  
  ctrl.delete = function () {
    ctrl.onDelete({hero: ctrl.hero});
  };
  
  ctrl.update = function (prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
  };
}

function EditableFieldController() {
  var ctrl = this;
  ctrl.editMode = false;
  
  ctrl.handleModeChange = function() {
    if(ctrl.editMode) {
      ctrl.onUpdate({value: ctrl.fieldValue});
      ctrl.fieldValueCopy = ctrl.fieldValue;
    }
    ctrl.editMode = !ctrl.editMode;
  };
  
  ctrl.$onInit = function() {
    ctrl.fieldValueCopy = ctrl.fieldValue;
    
    if(!ctrl.fieldType) {
      ctrl.fieldType = 'text';
    }
  };
}

heroApp.component('heroList', {
  templateUrl: 'heroList.html',
  controller: HeroListController
});

heroApp.component('heroDetail', {
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});

heroApp.component('editableField', {
  templateUrl: 'editableField.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
});