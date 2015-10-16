(function () {
    'use strict';
    describe('Test GameBoardService', function () {
        var gamefunctions,
            characters,
            playerservice,
            endofgame,
            proxy,
            coredata,
            sandbox;

        beforeEach(function(){
            module('Services.MyModule', function ($provide){
                $provide.value('EndOfGame', mocks.EndOfGame);
                $provide.value('Characters', mocks.characters);
                $provide.value('Proxy', mocks.proxy);
                $provide.value('PlayerService', mocks.PlayerService);
            });
            module('Controllers.MyModule',function ($provide){
                $provide.value('GameBoardController', mocks.GameBoardController);
                $provide.value('PlayerController', mocks.PlayerController);
            });
            module('Core.MyModule', function ($provide){
                $provide.value('CoreData', mocks.CoreData);
            });

            inject(function ($injector){
               gamefunctions = $injector.get('GameFunctions');
            });

            sandbox = sinon.sandbox.create();
            endofgame = sinon.sandbox.mock(mocks.EndOfGame);
            coredata = sinon.sandbox.mock(mocks.CoreData);
            characters = sinon.sandbox.mock(mocks.characters);
            playerservice = sinon.sandbox.mock(mocks.PlayerService);
            proxy = sinon.sandbox.mock(mocks.proxy);
        });

        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
            gamefunctions.changePlayer();
            mocks.CoreData.currentPlayer.should.equal("2");
        });
        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
            mocks.characters[0] = 'human';
            gamefunctions.changePlayer();
            mocks.CoreData.currentPlayer.should.equal("1");
        });

        afterEach(function(){

            sandbox.restore();
            endofgame.verify();
            coredata.verify();
            characters.verify();
            playerservice.verify();
            proxy.verify();
        })
    });
}());
