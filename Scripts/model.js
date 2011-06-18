/*namespace definition, to be refactored*/
var model = {
    };
    
model.rule = {
    };
        
/**/    
model.NammedArtifact = function (name) { 
    this.name = name || '';
};
model.Entity = function (name) {
    this.base = model.NammedArtifact();
    this.base(name);
    this.properties = [];
    this.operations = [];
    
    this.addOperation = function (operation) {
        };
    this.removeOperation = function (operation) {
        };
    this.addProperty = function (property) {
        };
    this.removeProperty = function (property) {
        
        };
};

model.rule.RuleArtifact = function (name) {
        this.base = model.NammedArtifact();
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
exports.model = model;



