
(function () {
    'use strict';
    describe('Test StyleModel', function () {
        var styleModel;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses.Style');
            inject(function($injector){
                styleModel = $injector.get('StyleModel');
            });
        });
        it('Checks that the value/array of player types is correct.', function(){
            styleModel.currentStyle = 'newStyle';
            styleModel.toggleStyle();
            styleModel.currentStyle.should.equal('main');
        });
        it('Checks that the value/array of player types is correct.', function(){
            styleModel.currentStyle = 'main';
            styleModel.toggleStyle();
            styleModel.currentStyle.should.equal('newStyle');
        });
    });
}());
