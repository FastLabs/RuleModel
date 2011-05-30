var model = {
    };
model.rule = {
    };
model.NammedArtifact = function (name) { 
    this.name = name || '';
};

model.rule.RuleArtifact = function (name) {
        this.base = NammedArtifact();
        this.base(name);
        this.criteria = [];
    };
    
model.rule.RuleArtifact.prototype = new model.NammedArtifact();

model.rule.RuleCriteria = function() {      
    };

model.rule.RuleSet = function(name) {
    this.base = model.NammedArtifact;
    this.base(name);
    this.rules = [];
    
    this.addRule = function(rule) {
        this.rules.push(rule);
       };
};
console.log(model);
exports.model = model;



