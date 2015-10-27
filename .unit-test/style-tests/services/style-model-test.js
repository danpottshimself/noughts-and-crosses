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

        it('Checks that the css toggle function switches css styles.', function(){
            styleModel.currentStyle = 'newStyle';
            styleModel.toggleStyle();
            styleModel.currentStyle.should.equal('main');
        });

        it('Checks that the css toggle function switches css styles.', function(){
            styleModel.currentStyle = 'main';
            styleModel.toggleStyle();
            styleModel.currentStyle.should.equal('newStyle');
        });
    });
}());
