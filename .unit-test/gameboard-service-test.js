//(function () {
//    'use strict';
//    describe('Test GameBoardService', function () {
//        var gameFunctions,
//            characters,
//            playerservice,
//            endofgame,
//            proxy,
//            coredata,
//            changePlayerSpy,
//            endGameSpy,
//            $q,
//            updateInformationSpy,
//            sandbox;
//
//        beforeEach(function(){
//            module('Services.MyModule', function ($provide){
//                $provide.value('EndOfGame', mocks.EndOfGame);
//                $provide.value('Characters', mocks.characters);
//                $provide.value('Proxy', mocks.proxy);
//                $provide.value('PlayerService', mocks.PlayerService);
//            });
//            module('Controllers.MyModule',function ($provide){
//                $provide.value('GameBoardController', mocks.GameBoardController);
//                $provide.value('PlayerController', mocks.PlayerController);
//            });
//            module('Core.MyModule', function ($provide){
//                $provide.value('CoreData', mocks.CoreData);
//            });
//
//            inject(function ($injector){
//                $q = $injector.get('$q');
//                gameFunctions = $injector.get('GameFunctions');
//            });
//
//            sandbox = sinon.sandbox.create();
//            endofgame = sinon.sandbox.mock(mocks.EndOfGame);
//            coredata = sinon.sandbox.mock(mocks.CoreData);
//            characters = sinon.sandbox.mock(mocks.characters);
//            playerservice = sinon.sandbox.mock(mocks.PlayerService);
//            proxy = sinon.sandbox.mock(mocks.proxy);
//            updateInformationSpy = sinon.sandbox.spy(mocks.GameFunctions, 'updateInformation');
//            changePlayerSpy = sinon.sandbox.spy(mocks.GameFunctions, 'changePlayer');
//            endGameSpy = sinon.sandbox.spy(mocks.EndOfGame, 'gameEnded');
//        });
//
//        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
//            gameFunctions.changePlayer();
//            mocks.CoreData.currentPlayer.should.equal("2");
//        });
//
//        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
//            mocks.characters[0] = 'human';
//            gameFunctions.changePlayer();
//            mocks.CoreData.currentPlayer.should.equal("1");
//        });
//
//        it('Checks that functions are called after the if statements.', function(){
//            var defered = $q.defer(),
//            newGameSpy = sinon.stub(mocks.proxy, 'newGame', function (){
//                return defered.promise;
//            });
//
//            mocks.characters[0] = 'human';
//            gameFunctions.startGame();
//            defered.resolve('testString');
//            newGameSpy.should.have.been.calledOnce.calledWithExactly(mocks.PlayerService.player1, mocks.PlayerService.player2);
//            updateInformationSpy.should.have.been.calledOnce.calledWithExactly('testString');
//            changePlayerSpy.should.have.been.calledOnce();
//            endGameSpy.should.have.been.called();
//        });
//
//        afterEach(function(){
//            sandbox.restore();
//            updateInformationSpy.restore();
//            changePlayerSpy.restore();
//            endofgame.verify();
//            coredata.verify();
//            characters.verify();
//            playerservice.verify();
//            proxy.verify();
//        })
//    });
//}());
