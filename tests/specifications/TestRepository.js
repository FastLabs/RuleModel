var jasmine = require('jasmine-node');
var assert = require('assert');

describe('tags could be stored in a repository', function() {
    var TagRepository = require('../../Scripts/repo/tagrepository.js');
    var Tag = require('../../Scripts/tag.js');
    
    it('should be possible to configure the repository', function(){
        });
        
    it('should be possible to store a tag', function() {
            var tag1 = new Tag('First');
            TagRepository.persist(tag1);
        });
    
    it('should be possible to find a tag by name', function() {
        });
        
    it('should be possible to find the tags on a path', function() {
        
        });
        
    
    });