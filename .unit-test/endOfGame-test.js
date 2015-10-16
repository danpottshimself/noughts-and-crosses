(function () {
    'use strict';
    describe('Test CharacterLogic', function () {
        var state,
            timeout,
            endOfGame;

        beforeEach(function(){
            module('ui.router');
            module('Controllers.MyModule');
            module('Services.MyModule', function(){
            });

            inject(function($injector){
                state= $injector.get('$state');
                timeout = $injector.get('$timeout');
                endOfGame = $injector.get('EndOfGame')
            });
        });

        it('Checks that the state changes to draw when game is drawn.', function(){
            endOfGame.outcome ='Draw';
            endOfGame.gameEnded();
            timeout.flush();
            state.current.url.should.equal('/draw');
        });

        it('Checks that the state changes to draw when game is won.', function(){
            endOfGame.outcome ='Win';
            endOfGame.gameEnded();
            timeout.flush();
            state.current.url.should.equal('/winner');
        });
        afterEach(function(){

        })
    });
}());
