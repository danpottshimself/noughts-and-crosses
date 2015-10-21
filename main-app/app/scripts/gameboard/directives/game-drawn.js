
angular.module('Directives.MyModule')
    .directive('gameDrawn', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../partials/game-drawn.html'
        };
    });

