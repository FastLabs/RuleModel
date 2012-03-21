exports.Bucket = (function() {
    var name;
    var id;
    var fields = {};
    
    
    function Bucket(identifier) {
            id = identifier || undefined;
        }
    Bucket.prototype.getId = function() {
        return id;
        };
        
    Bucket.prototype.getName = function() {
        return name;
        };
    
    Bucket.prototype.addValue = function(pair) {
        var fieldName = pair.field;
        var getterName = 'get' + fieldName;
        var setterName = 'set' + fieldName;
        var value = pair.value;
        fields[fieldName] = value;
        // getters and setters should be properly organized, should be reuse, build the hierarhy
        this[getterName] = function() {
            return fields[fieldName];
            };
            
        this[setterName] = function (value) {
                fields[fieldName] = value;            
            };
        
        };

    return Bucket;
})();