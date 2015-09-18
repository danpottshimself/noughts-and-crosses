angular.module('Tombola.MyModule')
    .directive('playerSelection', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../partials/player-select.html'
        };
    });
