(function () {
    'use strict';
    describe('Test CharacterLogic', function () {
        var state,
            timeout,
            endedgame;

        beforeEach(function(){
            module('ui.router');
            module('Controllers.MyModule');
            module('Services.MyModule', function(){
            });

            inject(function($injector){
                state= $injector.get('$state');
                timeout = $injector.get('$timeout');
                endedgame = $injector.get('EndOfGame')
            });
        });

        it('Checks that the state changes to draw when game is drawn.', function(){
            endedgame.outcome ='Draw';
            endedgame.gameEnded();
            timeout.flush();
            state.current.url.should.equal('/draw');
        });

        it('Checks that the state changes to draw when game is won.', function(){
            endedgame.outcome ='Win';
            endedgame.gameEnded();
            timeout.flush();
            state.current.url.should.equal('/winner');
        });
        afterEach(function(){

        })
    });
}());
