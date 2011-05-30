var x = require('jasmine-node');
var sys = require('sys');
console.log(__dirname);

x.executeSpecsInFolder(__dirname + '/specifications' , function(runner, log) {
    if (runner.results().failedCount === 0) {
    process.exit(0);
  }
  else {
    process.exit(1);
  }
    }, true, true);