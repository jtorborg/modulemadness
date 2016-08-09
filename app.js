var http = require('http');
var module1 = require('./module1.js');
var module2 = require('./module2.js');
var module3 = require('./module3.js');

http.createServer(function (req, res) {

  res.writeHead(200);

  res.write(module1.random(100, 10000 ) +  '\n');




  // res.write(module2.random(5) + '\n');

  //

  res.write(module3.results() + '\n');

  res.write(module3.combinedBalance() + '\n');   //module2.random  random1.module5
  //
  res.end();
}).listen(3000);

console.log('Listening on port 3000');
