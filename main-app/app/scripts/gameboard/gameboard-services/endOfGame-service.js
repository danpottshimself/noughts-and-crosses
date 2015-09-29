angular.module('Server.MyModule')
    .service('EndOfGame', ['$state',  function ($state) {
        var me = this;
        me.outcome = 'Continue';
        me.gameEnded = function () {
            if (me.outcome === "Win") {
                $state.go('route4');
            }
            else if (me.outcome === "Draw") {
                $state.go('route5');
            }
        };
}]);