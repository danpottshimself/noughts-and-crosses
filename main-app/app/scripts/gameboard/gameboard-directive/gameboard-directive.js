angular.module('Tombola.MyModule')
.directive('theGameBoard', function () {
    return {
        restrict: 'E',
        templateUrl: '../../../partials/game-board.html'
    };
});

