(function () {
    'use strict';
    describe('Test StyleFilter', function () {
        var styleFilter;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses.Style');
            inject(function($injector){
                styleFilter = $injector.get('$filter')('StyleFilter');
            });
        });

        it('Checks that the filter is returning the correct results.', function(){
            var testFilter = styleFilter('main');
            testFilter.should.equal('css/main.css');
        });
        it('Checks that the filter is returning the correct results.', function(){
            var testFilter = styleFilter('newStyle');
            testFilter.should.equal('css/newStyle.css');
        });
    });
}());
