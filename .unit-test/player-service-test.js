
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
            (constants.player1).should.equal('human');
        });
        it('Checks if player 2 is human', function(){
            (constants.player2).should.equal('human');
        });
        it('Checks if the selected index is 0', function(){
            (constants.selectedIndex1).should.equal(0);
        });
        it('Checks if the selected index is 0', function(){
            (constants.selectedIndex2).should.equal(0);
        });
        it('Checks if player 1 toggle functions change player type', function(){
            constants.togglePlayer1();
            (constants.player1).should.equal('random');
            constants.togglePlayer1();
            (constants.player1).should.equal('pre-trained');
            constants.togglePlayer1();
            (constants.player1).should.equal('human');
        });
        it('Checks if player 2 toggle functions change player type', function(){
            constants.togglePlayer2();
            (constants.player2).should.equal('random');
            constants.togglePlayer2();
            (constants.player2).should.equal('pre-trained');
            constants.togglePlayer2();
            (constants.player2).should.equal('human');
        });
        afterEach( function(){

        });
    });
}());
