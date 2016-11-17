var angular = require('angular');

angular.module('finance2', [])
  .factory('currencyConvert', function() {
    var currencies = ["USD", "EUR", "CNY"];
    
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    
    var convert = function(amount, inCurr, outCurr) {
      return (amount / usdToForeignRates[inCurr]) * usdToForeignRates[outCurr]
    };
    
    return {
      currencies: currencies,
      convert: convert
    }
  });