var angular = require('angular');

angular.module('invoice1', [])
  .controller('InvoiceController', function InvoiceController() {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = "EUR";
    this.currencies = ["USD", "EUR", "CNY"];
    this.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    
    this.total = function total(outCurr) {
      return ((this.qty * this.cost) / this.usdToForeignRates[this.inCurr]) * this.usdToForeignRates[outCurr]
    };
    
    this.pay = function pay() {
      window.alert("Thanks");
    };
  });