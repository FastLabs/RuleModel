var assert = require('assert');
var model = require('../Scripts/model.js');

console.log(model);


var testRuleSet = new model.model.rule.RuleSet("Guide");
testRuleSet.addRule('TestRule 1');
testRuleSet.addRule('TestRule 2');
testRuleSet.addRule('TestRule 3');

console.log(testRuleSet.name);

var tag1 = new model.model.Tag('Test Tag');
var tag2 = new model.model.Tag('Tag 2');
tag1.addChild(tag2);
var x = JSON.stringify(tag2);
console.log(x);
console.log(tag2.getPaths());

for(i = 0, length = testRuleSet.rules.length; i<length; i++) {
    console.log(testRuleSet.rules[i]);
}
