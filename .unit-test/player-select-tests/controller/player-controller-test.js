(function () {
    'use strict';
    describe('Test PlayerController', function () {
        var controller,
            sandbox,
            playerService,
            $controller,
            scope;

        beforeEach(function () {
            module('Controllers.MyModule',function ($provide) {
                $provide.value('PlayerService', mocks.PlayerService);
            });

            inject(function (_$controller_, $rootScope) {
                scope = $rootScope.$new();
                $controller = _$controller_;
                controller = $controller('PlayerController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            playerService = sinon.sandbox.mock(mocks.PlayerService);
            controller.playerService = mocks.PlayerService;
        });

        it('Ensures that the PlayerService service is used in the scope correctly', function () {
            controller.playerService.should.equal(mocks.PlayerService);
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();