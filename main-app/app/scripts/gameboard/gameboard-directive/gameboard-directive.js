angular.module('Tombola.MyModule')
.directive('gameBoard', function () {
    return {
        restrict: 'E',
        templateUrl: '../../../partials/game-board.html'
    };
});

