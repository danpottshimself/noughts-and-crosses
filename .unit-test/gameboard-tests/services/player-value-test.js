
(function () {
    'use strict';
    describe('Test PlayerValue', function () {
        var constants;
        beforeEach(function(){
            module('Services.MyModule');
            inject(function($injector){
                constants = $injector.get('Characters');
            });
        });
        it('Checks that the value/array of player types is correct.', function(){
            constants.should.deep.equal(["human", "random", "pre-trained"]);
        });
        it('Checks that the value/array of player types is correct.', function(){
            should.equal('human', constants[0]);
        });
        it('Checks that the value/array of player types is correct.', function(){
            should.equal('random', constants[1]);
        });
        it('Checks that the value/array of player types is correct.', function(){
            should.equal('pre-trained', constants[2]);
        });
    });
}());
