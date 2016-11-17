var angular = require('angular');

angular.module('phonecatApp', []).component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  
  controller: function PhoneListController($http) {
    var self = this;
    self.orderProp = 'age';
   
    $http.get('../phones.json').then(function(response) {
      self.phones = response.data;
    });
  }
});