(function () {
    'use strict';
    describe('Test PlayerService', function () {
        var playerService;

        beforeEach(function(){
            module('Services.MyModule');
            inject(function($injector){
                playerService = $injector.get('PlayerService');
            });
        });

        it('Checks if player 1 is human', function(){
            playerService.player1.should.equal('human');
        });

        it('Checks if player 2 is human', function(){
            playerService.player2.should.equal('human');
        });

        it('Checks if player 1 toggle functions change player type', function(){
            playerService.togglePlayer1();
            playerService.player1.should.equal('random');
            playerService.togglePlayer1();
            playerService.player1.should.equal('pre-trained');
            playerService.togglePlayer1();
            playerService.player1.should.equal('human');
        });

        it('Checks if player 2 toggle functions change player type', function(){
            playerService.togglePlayer2();
            playerService.player2.should.equal('random');
            playerService.togglePlayer2();
            playerService.player2.should.equal('pre-trained');
            playerService.togglePlayer2();
            playerService.player2.should.equal('human');
        });

        it('Checks that functions are called after the if statements and promise for the make turn function.', function(){
            playerService.isPlayer1Human();
            playerService.player1.should.equal('human');
        });

        it('Checks that functions are called after the if statements and promise for the make turn function.', function(){
            playerService.isPlayer2Human();
            playerService.player2.should.equal('human');
        });

        it('Checks that functions are called after the if statements and promise for the make turn fiumnc.', function(){
            playerService.togglePlayer1();
            playerService.player1.should.equal('random');
        });

        it('Checks that functions are called after the if statements and promise for the make turn fiumnc.', function(){
            playerService.togglePlayer2();
            playerService.player2.should.equal('random');
        });
    });
}());