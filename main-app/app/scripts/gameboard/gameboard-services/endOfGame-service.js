angular.module('Services.MyModule')
    .service('EndOfGame', ['$state', '$timeout',  function ($state, $timeout) {
        var me = this,
            changeState = function (gameState) {
                $state.go(gameState);
            };
        me.outcome = 'Continue';
        me.gameEnded = function () {
            if (me.outcome === "Win") {
                $timeout(changeState,  3000, true, 'gameWon');

            }
            else if (me.outcome === "Draw") {
                $timeout (changeState, 3000, true, 'gameDrawn');
            }
        };
}]);