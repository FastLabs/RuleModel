var Tag = (function () {
        function Taggable () {
                console.log('taggable constructor');
                this.test = function () {
                        console.log('test ' + this.name);
                    };
            }
        //var taggable = new Taggable();
        var constructor = function(name ) {
                this.name = name;
            };
        constructor.prototype = new Taggable();
        constructor.fromJSON = function() {
                console.log('from json');
            };
        return constructor;
    })();
    
    
var t1 = new Tag('unu');
var t2 = new Tag('doi');
console.log('the same prototypes -> ' + (t1.prototype== t2.prototype));
t1.test();
t2.test();
