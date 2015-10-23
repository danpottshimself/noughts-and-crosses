(function () {
    'use strict';
    describe('Test MainController', function () {
        var state,
            controller,
            sandbox,
            makeTurnSpy,
            gameModel,
            $controller,
            $q,
            scope;

        beforeEach(function () {
            module('ui.router');
            module('Controllers.MyModule',function ($provide) {
                $provide.value('GameModel', mocks.gameModel);
            });

            inject(function (_$controller_, $rootScope, $state, _$q_) {
                scope = $rootScope.$new();
                state = $state;
                $q = _$q_;
                $controller = _$controller_;
                controller = $controller('GameBoardController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            gameModel = sinon.sandbox.mock(mocks.gameModel);
            makeTurnSpy = sinon.sandbox.spy(mocks.gameModel, 'makeTurn');
        });

        it('Ensures the game title is correct', function () {

            scope.chooseBlock();
            //makeTurnSpy.should.have.been.calledOnce();
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();