//
//(function () {
//    'use strict';
//    describe('Test GameBoardService', function () {
//        var gameFunctions,
//            sandbox;
//
//        beforeEach(function(){
//            module('Services.MyModule', function ($provide){
//                $provide.value('EndOfGame', mocks.EndOfGame);
//                $provide.value('Characters', mocks.characters);
//                $provide.value('Proxy', mocks.proxy);
//                $provide.value('PlayerService', mocks.PlayerService);
//                $provide.value('GameBoardController', mocks.GameBoardController);
//                $provide.value('PlayerController', mocks.PlayerController);
//                $provide.value('$state', mocks.stateCh)
//            });
//
//            inject(function ($injector){
//                gameFunctions = $injector.get('GameFunctions');
//            });
//
//            sandbox = sinon.sandbox.create();
//
//        });
//
//        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
//            gameFunctions.changePlayer();
//
//        });
//
//        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
//
//            gameFunctions.changePlayer();
//
//        });
//
//
//        afterEach(function(){
//
//        })
//    });
//}());
