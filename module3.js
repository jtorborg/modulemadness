// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
var module1 = require('./module1.js');
var module2 = require('./module2.js');

exports.combinedBalance = function () {

return module2.random(module1.random(100, 100000))
// return module2.money(module1.random(100, 100000))
// var returnedValue = module1.random;           //define variable for module1.random
// var money = module2.combine(random);          //define variable for module2.combine(random)

};

exports.results = function() {return "Account Balance: \n" };                               //return variable of second module
