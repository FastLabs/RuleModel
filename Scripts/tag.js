exports.Tag = ( function() {
    var model = require('./model.js').model;
 
    var Tag = function(name) {
            this.base = model.NammedArtifact;
            this.base(name);
            var paths = [];
            var getPaths = function() {
            return paths;
        };
    var setPaths = function(newPaths) {
            paths = newPaths;
        };
        
    var addPath = function(path) {
            paths.push(path);
        };
    
    /*public methods*/
    this.getPaths = getPaths;
    this.addPath = addPath;
    this.setPaths = setPaths;
    };

    function Taggable() {
    var addChild = function (child) {
        var len = this.getPaths().length;
        if(len === 0 ) {
            child.addPath([this.name]);    
        } else  {
            for(var i=0; i< len; i++) {
                    var path = this.getPaths()[i];
                    var newPath = path.slice(0);
                    newPath.push(this.name);
                    child.addPath(newPath);
                }
            }
        };
    var toJSON = function () {
           return JSON.stringify({ name: this.name, 
                    paths: this.getPaths()
               });
        };
        /*public methods*/
        this.addChild = addChild;
        this.asJSON = toJSON;
    }
    Tag.prototype = new Taggable();
    Tag.fromJSON = function (jsonSource) { 
        var parsed = JSON.parse(jsonSource);
        var tag = new Tag(parsed.name);
        tag.setPaths(parsed.paths);
        return tag;
    };
    
    Tag.fromStringPath = function(path) {
    };
    
    return Tag;
})();