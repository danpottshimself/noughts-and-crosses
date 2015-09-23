angular.module('Server.MyModule')
    .service('PlayerTurn', ['CoreData', 'ServerTurn', function (coreData, serverTurn) {
        var me = this;
        me.makeTurn = function (index) {
            serverTurn.playerTurn(coreData.currentPlayer, index)
                .then(function (response) {
                    coreData.gameBoard = response.gameboard;
                    coreData.currentGameState = response.outcome;
                })
                .catch(function (response) {
                });
        };
    }]);