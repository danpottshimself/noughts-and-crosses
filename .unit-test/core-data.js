(function () {
'use strict';
describe('Test CoreData', function () {
    var constants;
    beforeEach(function(){
        module('Services.MyModule');
        inject(function($injector){
            constants = $injector.get('CoreData');
        });
    });
    it('Checks if the current player defaults as player 1', function(){
        (constants.currentPlayer).should.equal('1');
    });
    it('Checks if the winner variable defaults as empty', function(){
        (constants.winner).should.equal('');
    });
    it('Checks if the game board defaults as empty', function(){
        (constants.gameBoard).should.equal('');
    });
    it('Checks that the current game state is defaulted as empty', function(){
        (constants.currentGameState).should.equal('');
    });
    afterEach( function(){

    });
});
}());
