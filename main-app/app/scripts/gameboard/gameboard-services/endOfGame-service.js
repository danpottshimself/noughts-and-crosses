angular.module('Services.MyModule')
    .service('EndOfGame', ['$state', '$timeout',  function ($state, $timeout) {
        var me = this;
        me.outcome = 'Continue';
        me.gameEnded = function () {
            if (me.outcome === "Win") {
                $timeout (function () { $state.go('gameWon');}, 3000);
            }
            else if (me.outcome === "Draw") {
                $timeout (function () {$state.go('gameDrawn');}, 3000);
            }
        };
}]);