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
                $provide.value('StyleModel', mocks.StyleModel);
            });

            inject(function (_$controller_, $rootScope) {
                scope = $rootScope.$new();
                $controller = _$controller_;
                controller = $controller('StyleController', {
                    $scope: scope
                });
            });

            sandbox = sinon.sandbox.create();
            styleModel = sinon.sandbox.mock(mocks.StyleModel);
            controller.styleModel = mocks.StyleModel;
        });

        it('Ensures the model is injecting the style model service', function () {
            controller.styleModel.should.equal(mocks.StyleModel);
        });

        afterEach(function(){
            sandbox.restore();
        })
    });
})();