var assert = require('assert');
var model = require('../Scripts/model.js');

console.log(model);


var testRuleSet = new model.model.rule.RuleSet("Guide");
testRuleSet.addRule('TestRule 1');
testRuleSet.addRule('TestRule 2');
testRuleSet.addRule('TestRule 3');

console.log(testRuleSet.name);

//var x = JSON.stringify(testRuleSet);
//console.log(x);

for(i = 0, length = testRuleSet.rules.length; i<length; i++) {
    console.log(testRuleSet.rules[i]);
}
