
(function () {
    'use strict';
    describe('Test PlayerService', function () {
        var constants;
        beforeEach(function(){
            module('Services.MyModule');
            inject(function($injector){
                constants = $injector.get('PlayerService');
            });
        });
        it('Checks if player 1 is human', function(){
            expect(constants.player1).to.equal('human');
        });
        it('Checks if player 2 is human', function(){
            expect(constants.player2).to.equal('human');
        });
        it('Checks if the selected index is 0', function(){
            expect(constants.selectedIndex1).to.equal(0);
        });
        it('Checks if the selected index is 0', function(){
            expect(constants.selectedIndex2).to.equal(0);
        });
        it('Checks if player 1 toggle functions change player type', function(){
            constants.togglePlayer1();
            expect(constants.player1).to.equal('random');
            constants.togglePlayer1();
            expect(constants.player1).to.equal('pre-trained');
            constants.togglePlayer1();
            expect(constants.player1).to.equal('human');
        });
        it('Checks if player 2 toggle functions change player type', function(){
            constants.togglePlayer2();
            expect(constants.player2).to.equal('random');
            constants.togglePlayer2();
            expect(constants.player2).to.equal('pre-trained');
            constants.togglePlayer2();
            expect(constants.player2).to.equal('human');
        });
        afterEach( function(){

        });
    });
}());
