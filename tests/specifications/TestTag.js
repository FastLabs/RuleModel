var jasmine = require('jasmine-node');
var assert = require('assert');

    
describe ('test tag instantiation', function () {
    var tagging = require('../../Scripts/tag.js');
    
    it('should have name property', function () {
        var tag1 = new tagging.Tag('Oleg');
        console.log(tag1.name);
        });
        
    it('should be able to map path', function() {
        console.log('test 2');
        var tag1 = new tagging.Tag('Oleg');
        var tag2 = new tagging.Tag('Luca');
        var tag3 = new tagging.Tag('Ioana');
        tag1.addChild(tag2);
        tag2.addChild(tag3);
        var paths = tag3.getPaths();
        for(var i = 0, len=paths.length; i<len; i++) {
           console.log(paths[i]);
            }
        });
        
    it('could be restored from json', function() {
            console.log('test 3');
            console.log(tagging.Tag.fromJSON('{"name":"tag 2","paths":[["tag 1"]]}'));
        });
        
    it('could be serialized to json', function() {
        console.log('test 4');
            var tag = new tagging.Tag('tag 1');
            var tag2;
            tag.addChild(tag2 = new tagging.Tag('tag 2'));
            console.log( tag2.asJSON());
        });
    
    it('is possible to extract a taglist from a string', function() {
        /*it should return a list of tags t1, t2, t3 each tag should have its paths populated*/
            tagging.Tag.fromStringPath('/t1/t2/t3');
        });
        
});
    