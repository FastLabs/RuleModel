exports.Bucket = (function() {
    var name;
    var id;
    
    function Bucket(identifier) {
            id = identifier || undefined;
        }
    Bucket.prototype.getId = function() {
        return id;
        };
        
    Bucket.prototype.getName = function() {
        return name;
        };
    
    Bucket.prototype.addValue = function(value) {
        this[value.field] = value.value;
        };
        
    return Bucket;
})();