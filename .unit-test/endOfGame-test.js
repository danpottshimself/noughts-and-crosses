(function () {
    'use strict';
    describe('Test CharacterLogic', function () {
        var endOfGame,
            state,
            timeout,
            sandbox;

        beforeEach(function(){
            module('Services.MyModule', function($provide){
                $provide.value('EndOfGame', mocks.EndOfGame);
            });
            sandbox = sinon.sandbox.create();

            inject(function($state, $timeout){
                state= $state;
                timeout = $timeout;
            });
            endOfGame = sinon.sandbox.mock(mocks.EndOfGame);

        });

        it('Checks that the state changes to draw when game is drawn.', function(){
            mocks.EndOfGame.gameEnded({outcome:'Draw'});
            timeout.flush();
            state.current.url.should.equal('/draw');
        });

        afterEach(function(){
            //endOfGame.verify();
            //sandbox.restore();
        })
    });
}());
