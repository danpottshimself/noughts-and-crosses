angular.module('Tombola.MyModule')
    .directive('gameInfo', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/game-info.html'
        };
    });
