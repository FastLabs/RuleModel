var jasmine = require('jasmine-node');
var assert = require('assert');
    
describe ('test tag instantiation', function () {
    var tagging = require('../../Scripts/tag.js');
    
    it('should instantiate the mdule', function() {
            console.log('test 0');
            expect(tagging).not.toEqual(undefined);
        });
         
    var tag1, tag2, tag3;
    beforeEach(function() {
        tag1 = new tagging.Tag('Tag1');
        tag2 = new tagging.Tag('Tag2');
        tag3 = new tagging.Tag('Tag3');
        });
    
    beforeEach(function() {
        this.addMatchers({
                toMatchThePath: function(path) {
                    var matched = true;
                    var path_length = path.length;
                    var paths = this.actual.getPaths();
                    for(var i=0, len=paths.length; i < len; i++) {
                        var actual_path = paths[i];
                        var len1 = actual_path.length;
                        matched = true;
                        if(!(path_length === len1)) {
                            mathced = false;
                            continue;
                            }
                        for(var j=0; j < len1; j++) {
                            console.log(actual_path[j] + ' ' + path[j]);
                            if(!(actual_path[j] === path[j])) {
                                matched = false;
                                break;
                                }
                            }
                            if(matched) {
                                return true;
                                }
                        }
                        return matched;
                    }
            });
        });
   
    it('should have name property', function () {
            expect(tag1).not.toEqual(undefined);
            expect(tag1.name).toEqual('Tag1');
            expect(tag2).not.toEqual(undefined);
            expect(tag2.name).toEqual('Tag2');
            expect(tag3).not.toEqual(undefined);
            expect(tag3.name).toEqual('Tag3');
        });
        
    it('shold have empty paths', function() {
        });
        
    it('should be able to map path', function() {
        tag1.addChild(tag2);
        tag2.addChild(tag3);
        var paths = tag3.getPaths();
        expect(tag3).toMatchThePath(['Tag1', 'Tag2']);
        expect(tag3).not.toMatchThePath(['Tag1', 'Tag4']);
        //expect(tag3.toMatchThePath(['Tag1', 'Tag4'])).not.toEqual(false);
        });
        
    it('could be restored from json', function() {
           // console.log('test 3');
            //console.log(tagging.Tag.fromJSON('{"name":"tag 2","paths":[["tag 1"]]}'));
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
        
    it('should be posible to extract the shortest path', function () {
        /*i'm not sure if this is important*/
        });
        
});
    