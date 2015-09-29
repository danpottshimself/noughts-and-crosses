angular.module('Server.MyModule')
    .service('CoreData', [ function () {
        var me = this;
        me.currentPlayer = '1';
        me.winner = "";
        me.gameBoard = '';
        me.currentGameState = "";
    }]);