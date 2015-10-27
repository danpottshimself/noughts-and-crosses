(function () {
    'use strict';
    describe('Test StyleController', function () {
        var controller,
            sandbox,
            styleModel,
            $controller,
            scope;

        beforeEach(function () {
            module('Tombola.NoughtsAndCrosses.Style',function ($provide) {
                $provide.value('StyleModel', mocks.styleModel);
            });

            inject(function (_$controller_, $rootScope) {
                scope = $rootScope.$new();
                $controller = _$controller_;
                controller = $controller('StyleController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            styleModel = sinon.sandbox.mock(mocks.styleModel);
            controller.styleModel = mocks.styleModel;
        });

        it('Ensures the model is injecting the style model service', function () {
            controller.styleModel.should.equal(mocks.styleModel);
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();