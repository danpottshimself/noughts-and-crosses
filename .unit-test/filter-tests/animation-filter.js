(function () {
    'use strict';
    describe('Test AnimationFilter', function () {
        var animationFilter;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses.Style');
            inject(function($injector){
                animationFilter = $injector.get('$filter')('AnimationFilter');
            });
        });

        it('Checks that the filter is returning the correct results.', function(){
            var testFilter = animationFilter('square');
            testFilter.should.equal('square animated flip');
        });
        it('Checks that the filter is returning the correct results.', function(){
            var testFilter = animationFilter('player1 ');
            testFilter.should.equal('player1  animated flip');
        });
    });
}());
