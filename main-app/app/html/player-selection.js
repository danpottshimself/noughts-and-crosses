angular.module('Directives.MyModule')
    .directive('playerSelection', function () {
        return {
            restrict: 'E',
            templateUrl: '../../../partials/player-select.html'
        };
    });
