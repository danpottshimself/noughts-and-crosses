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
        expect(constants.currentPlayer).to.equal('1');
    });
    it('Checks if the winner variable defaults as empty', function(){
        expect(constants.winner).to.equal('');
    });
    it('Checks if the game board defaults as empty', function(){
        expect(constants.gameBoard).to.equal('');
    });
    it('Checks that the current game state is defaulted as empty', function(){
        expect(constants.currentGameState).to.equal('');
    });
    afterEach( function(){

    });
});
}());
