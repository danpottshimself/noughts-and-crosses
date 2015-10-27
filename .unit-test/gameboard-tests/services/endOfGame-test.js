(function () {
    'use strict';
    describe('Test endOfGame', function () {
        var timeout,
            sandbox,
            stateSpy,
            endedgame;

        beforeEach(function(){
            module('ui.router');
            module('Controllers.MyModule');
            module('Services.MyModule', function($provide){
                $provide.value('$state', mocks.StateChange);
            });

            inject(function($injector){
                timeout = $injector.get('$timeout');
                endedgame = $injector.get('EndOfGame')
            });
            sandbox = sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.StateChange, 'go');
        });

        it('Checks that the state changes to draw when game is drawn.', function(){
            endedgame.outcome ='Draw';
            endedgame.gameEnded();
            timeout.flush();
            stateSpy.should.have.been.calledOnce;
        });

        it('Checks that the state changes to draw when game is won.', function(){
            endedgame.outcome ='Win';
            endedgame.gameEnded();
            timeout.flush();
            stateSpy.should.have.been.calledOnce;
        });

        afterEach(function (){
            stateSpy.restore();
        })
    });
}());
