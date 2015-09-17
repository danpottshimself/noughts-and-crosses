angular.module('Tombola.MyModule')
    .directive('playerSelection', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/player-select.html'
        };
    });
