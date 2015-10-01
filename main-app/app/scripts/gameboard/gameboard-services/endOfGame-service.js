angular.module('Services.MyModule')
    .service('EndOfGame', ['$state',  function ($state) {
        var me = this;
        me.outcome = 'Continue';
        me.gameEnded = function () {
            if (me.outcome === "Win") {
                $state.go('gameWon');
            }
            else if (me.outcome === "Draw") {
                $state.go('gameDrawn');
            }
        };
}]);