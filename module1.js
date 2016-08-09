// The first module will export a function that returns a random number after
// taking in a min and max value as arguments (hint: you can use random number functions from previous assignments).
// When you call this module, use 100 as your min, and 1000000 as your max.





exports.random = function randomWholeNumber(min, max) {
 return Math.floor(Math.random() * (max - min) + min);
}
