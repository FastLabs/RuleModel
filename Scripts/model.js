function NammedArtifact (name) { 
    this.name = name || '';
}

function RuleArtifact (name) {
        this.base = NammedArtifact();
        this.base(name);
        this.criteria = [];
    }
RuleArtifact.prototype = new NammedArtifact();

function RuleCriteria() {
            
    }

function RuleSet(name) {
    this.base = NammedArtifact;
    this.base(name);
    this.rules = [];
    
    this.addRule = function(rule) {
        this.rules.push(rule);
       };
}
RuleSet.prototype = new NammedArtifact();

var testRuleSet = new RuleSet("Guidelines");
testRuleSet.addRule('TestRule 1');
testRuleSet.addRule('TestRule 2');
testRuleSet.addRule('TestRule 3');

console.log(testRuleSet.name);

var x = JSON.stringify(testRuleSet);
console.log(x);

for(i = 0, length = testRuleSet.rules.length; i<length; i++) {
    console.log(testRuleSet.rules[i]);
}