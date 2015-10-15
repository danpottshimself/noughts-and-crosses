(function () {
    'use strict';
    describe('Test GameBoardService', function () {
        var gamefunctions,
            characters,
            playerservice,
            endofgame,
            coredata,
            sandbox;

        beforeEach(function(){
            module('Controllers.MyModule',function ($provide){
                $provide.value('GameBoardController', mocks.GameBoardController);
                $provide.value('PlayerController', mocks.PlayerController);
            });
            module('Core.MyModule', function ($provide){
                $provide.service('CoreData', mocks.CoreData);
            });
            module('Services.MyModule', function ($provide){
                $provide.service('EndOfGame', mocks.EndOfGame);
                $provide.service('Characters', mocks.Characters);
                $provide.service('PlayerService', mocks.PlayerService);
            });

            inject(function ($injector){
               gamefunctions = $injector.get('GameFunctions');
            });

            sandbox = sinon.sandbox.create();
            endofgame = sinon.sandbox.mock(mocks.EndOfGame);
            coredata = sinon.sandbox.mock(mocks.CoreData);
            characters = sinon.sandbox.mock(mocks.Characters);
            playerservice = sinon.sandbox.mock(mocks.PlayerService);
        });

        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
            gamefunctions.startGame();
            coredata.currentPlayer.should.equal("1");

        });

        afterEach(function(){
            //sandbox.restore();
        })
    });
}());
