var jasmine = require('jasmine-node');
var assert = require('assert');

describe('bucket module', function () {
    var bucket = require('../../Scripts/bucket.js');
    it('should be possible to instantiate a bucket', function() {
            var first_bucket = new bucket.Bucket();
            expect(first_bucket).not.toEqual(undefined);
            expect(first_bucket.getId()).toEqual(undefined);
            console.log('test');
        });
        
    it('should be possible to associate a literal id for the bucket', function() {
        var first_bucket = new bucket.Bucket('Oleg');
        expect(first_bucket).not.toEqual(undefined);
        expect(first_bucket.getId()).toEqual('Oleg');
        
        });
    it('should be possible to add attributes to the bucket', function() {
        var first = new bucket.Bucket('Oleg');
        first.addValue({ field: 'NPV', value: 10});
        expect(first.getNPV()).toEqual(10);
        });
        
    it('should be possible to update an attribute', function() {
            var first = new bucket.Bucket('Oleg');
            first.addValue({field: 'NPV', value: 11});
            expect(first.getNPV()).toEqual(11);
            first.setNPV(12);
            expect(first.getNPV()).toEqual(12);
        });
    
});