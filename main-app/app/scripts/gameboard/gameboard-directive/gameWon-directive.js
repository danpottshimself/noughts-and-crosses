
angular.module('Directives.MyModule')
    .directive('gameWon', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../partials/game-won.html'
        };
    });

