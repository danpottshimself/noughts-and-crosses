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
                $provide.value('PlayerService', mocks.playerService);
            });

            inject(function (_$controller_, $rootScope) {
                scope = $rootScope.$new();
                $controller = _$controller_;
                controller = $controller('PlayerController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            playerService = sinon.sandbox.mock(mocks.playerService);
            controller.playerService = mocks.playerService;
        });

        it('Ensures that the PlayerService service is used in the scope correctly', function () {
            controller.playerService.should.equal(mocks.playerService);
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();