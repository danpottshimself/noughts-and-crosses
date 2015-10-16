//(function () {
//    'use strict';
//    describe('Test MainController', function () {
//        var state,
//            controller,
//            scope;
//        beforeEach(module('ui.router'));
//        beforeEach(function () {
//            module('Controllers.MyModule');
//
//            inject(function ($controller, $rootScope, $state) {
//                scope = $rootScope.$new();
//                state = $state;
//                controller = $controller('GameBoardController', {
//                    $scope: scope
//                });
//            });
//            sinon.spy(scope, 'chooseBlock');
//        });
//
//        it('Ensures the game title is correct', function () {
//         scope.chooseBlock();
//         expect(scope.chooseBlock).toHaveBeenCalled();
//        });
//    });
//
//})();