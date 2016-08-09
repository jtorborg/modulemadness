//The second module should accept a number and convert it to a USD value.
var module1 = require('./module1.js');
//
//
//
//
exports.random = function (number) {
  number = numberWithCommas(number);
   return ('$' + number);
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
