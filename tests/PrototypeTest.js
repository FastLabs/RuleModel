
var Tag = function() {
    };
function Tagable () {
        var fromJSON = function () {
                console.log("fromJson");
            };
        this.fromJSON = fromJSON;
    }
Tag.prototype = new Tagable();
var t1 = new Tag();
Tag.fromJSON();

console.log(Tag.prototype);
