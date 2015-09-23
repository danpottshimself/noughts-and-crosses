angular.module('Server.MyModule')
    .service('CoreData', [ function () {
        var me = this;
        me.currentPlayer = '1';
        me.gameBoard = '000000000';
        me.currentGameState = "";
    }]);