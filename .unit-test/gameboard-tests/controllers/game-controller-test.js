(function () {
    'use strict';
    describe('Test GameBoardController', function () {
        var controller,
            sandbox,
            gameModel,
            $controller,
            scope;

        beforeEach(function () {
            module('Controllers.MyModule',function ($provide) {
                $provide.value('GameModel', mocks.gameModel);
            });

            inject(function (_$controller_, $rootScope) {
                scope = $rootScope.$new();
                $controller = _$controller_;
                controller = $controller('GameBoardController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            gameModel = sinon.sandbox.mock(mocks.gameModel);
            controller.gameModel = mocks.gameModel;
        });

        it('Ensures that the gameModel service is used in the scope correctly', function () {
            controller.gameModel.should.equal(mocks.gameModel);
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();