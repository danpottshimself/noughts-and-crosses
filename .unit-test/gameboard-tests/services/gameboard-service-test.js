(function () {
    'use strict';
    describe('Test GameBoardService', function () {
        var gameModel,
            characters,
            playerService,
            endOfGame,
            proxy,
            changePlayerSpy,
            endGameSpy,
            $rootScope,
            $q,
            expectedReturn,
            updateInformationSpy,
            testString,
            toggleCurrentPlayerSpy,
            sandbox;

        beforeEach(function(){
            module('Services.MyModule', function ($provide){
                $provide.value('$state', mocks.stateChange);
                $provide.value('EndOfGame', mocks.endOfGame);
                $provide.value('Characters', mocks.characters);
                $provide.value('Proxy', mocks.proxy);
                $provide.value('PlayerService', mocks.playerService);
            });

            inject(['$rootScope', '$q', 'GameModel', function (_$rootScope_, _$q_, _gameModel_) {
                $rootScope = _$rootScope_;
                $q = _$q_;
                gameModel = _gameModel_;
            }]);

            sandbox = sinon.sandbox.create();
            endOfGame = sinon.sandbox.mock(mocks.endOfGame);
            characters = sinon.sandbox.mock(mocks.characters);
            playerService = sinon.sandbox.mock(mocks.playerService);
            proxy = sinon.sandbox.mock(mocks.proxy);
            updateInformationSpy = sinon.spy(gameModel, 'updateInformation');
            changePlayerSpy = sinon.sandbox.spy(gameModel, 'setInitialPlayer');
            toggleCurrentPlayerSpy = sinon.sandbox.spy(gameModel, 'toggleCurrentPlayer');
            endGameSpy = sinon.sandbox.spy(mocks.endOfGame, 'gameEnded');
            testString = {outcome: 'Continue', gameboard: '000000000', winner: 0};
            expectedReturn = {outcome: 'Continue', gameboard: '100000000', winner: 0};
        });

        it('Checks that the below variables are initialised with the correct values', function(){
            gameModel.currentPlayer = '1';
            gameModel.winner = "";
            gameModel.gameBoard = '';
            gameModel.currentGameState = "";
        });

        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
            gameModel.setInitialPlayer();
            gameModel.currentPlayer.should.equal("2");
        });

        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
            mocks.characters[0] = 'human';
            gameModel.setInitialPlayer();
            gameModel.currentPlayer.should.equal("1");
        });

        it('Checks that functions are called after the if statements and promise after the new game function.', function(){
            var deferred = $q.defer(),
                newGameSpy = sinon.sandbox.stub(mocks.proxy, 'newGame');
                newGameSpy.returns(deferred.promise);

            mocks.characters[0] = 'human';
            gameModel.startGame();
            deferred.resolve(testString);
            $rootScope.$digest();
            newGameSpy.should.have.been.calledOnce.calledWithExactly(mocks.playerService.player1, mocks.playerService.player2);

            updateInformationSpy.should.have.been.calledOnce;
            changePlayerSpy.should.have.been.calledOnce;
            endGameSpy.should.have.been.calledOnce;

            gameModel.gameBoard.should.equal('000000000');
            gameModel.currentGameState.should.equal('Continue');
            gameModel.winner.should.equal(0);
        });

        it('Checks that functions are called after the if statements and promise for the make turn function.', function(){
            var deferred = $q.defer(),
            playerTurnSpy = sinon.sandbox.stub(mocks.proxy, 'playerTurn');
            playerTurnSpy.returns(deferred.promise);

            gameModel.index = 1;
            gameModel.makeTurn();
            deferred.resolve(expectedReturn);
            $rootScope.$digest();
            playerTurnSpy.should.have.been.calledOnce.calledWithExactly('1', undefined);

            updateInformationSpy.should.have.been.calledOnce;
            toggleCurrentPlayerSpy.should.have.been.calledOnce;
            endGameSpy.should.have.been.calledOnce;

            gameModel.gameBoard.should.equal('100000000');
            gameModel.currentGameState.should.equal('Continue');
            gameModel.winner.should.equal(0);
        });

        afterEach(function(){
            sandbox.restore();
            changePlayerSpy.restore();
            updateInformationSpy.restore();
            endOfGame.verify();
            characters.verify();
            playerService.verify();
            proxy.verify();
        })
    });
}());
