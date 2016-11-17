var angular = require('angular');

angular.module('invoice3', ['finance3'])
  .controller('InvoiceController', ['currencyConvert', function a(currencyConvert) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = "EUR";
    this.currencies = currencyConvert.currencies;
    
    this.total = function total(outCurr) {
      return currencyConvert.convert(this.qty * this.cost, this.inCurr, outCurr);
    };
    
    this.pay = function pay() {
      window.alert("Thanks");
    };
  }]);