(function () {
    'use strict';
    describe('Test EndOfGame', function () {
        var stateChangeSpy,
            timeout,
            sandbox,
            endOfGame;

        beforeEach(function(){
            module('ui.router');
            module('Controllers.MyModule');
            module('Services.MyModule', function($provide){
                $provide.value('$state', mocks.stateChange);
            });

            inject(function($injector){
                timeout = $injector.get('$timeout');
                endOfGame = $injector.get('EndOfGame')
            });

            sandbox = sinon.sandbox.create();
            stateChangeSpy = sinon.sandbox.spy(mocks.stateChange, 'go');
        });

        it('Checks that the state changes to draw when game is drawn.', function(){
            endOfGame.outcome ='Draw';
            endOfGame.gameEnded();
            timeout.flush();

            stateChangeSpy.should.have.been.calledOnce;
        });

        it('Checks that the state changes to draw when game is won.', function(){
            endOfGame.outcome ='Win';
            endOfGame.gameEnded();
            timeout.flush();

            stateChangeSpy.should.have.been.calledOnce;
        });


        afterEach(function(){
            sandbox.restore();
            stateChangeSpy.restore();
        })
    });
}());
