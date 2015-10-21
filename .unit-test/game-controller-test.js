//(function () {
//    'use strict';
//    describe('Test MainController', function () {
//        var state,
//            controller,
//            sandbox,
//            makeTurnSpy,
//            scope;
//
//        beforeEach(function () {
//            module('ui.router');
//            module('Controllers.MyModule');
//
//            inject(function ($controller, $rootScope, $state) {
//                scope = $rootScope.$new();
//                state = $state;
//                controller = $controller('GameBoardController', {
//                    $scope: scope
//                });
//            });
//            sandbox = sinon.sandbox.create();
//            makeTurnSpy = sinon.sandbox.spy(mocks.gameModel, 'makeTurn');
//        });
//
//        it('Ensures the game title is correct', function () {
//            scope.chooseBlock();
//            makeTurnSpy.should.have.been.called();
//        });
//    });
//
//    afterEach(function(){
//        sandbox.restore();
//        chooseBlockSpy.restore();
//        playerService.verify();
//        proxy.verify();
//    })
//})();