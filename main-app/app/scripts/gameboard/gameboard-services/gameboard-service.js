angular.module('Server.MyModule')
    .service('GameFunctions', ['$state','PlayerService','Proxy','CoreData','EndOfGame',  function ($state, playerService, proxy, coreData, endOfGame) {
           var me = this,
                updateInformaton = function (response) {
                coreData.gameBoard = response.gameboard;
                coreData.currentGameState = response.outcome;
                endOfGame.outcome = response.outcome;
                coreData.winner = response.winner;
                    console.log(playerService.player1, playerService.player2);
            };
        endOfGame.gameEnded();

        me.startGame = function () {
            coreData.currentPlayer = "1";
            proxy.newGame(playerService.player1, playerService.player2)
                .then(function (response) {
                    updateInformaton(response);
                    endOfGame.gameEnded();
                })
                .catch(function (response) {
                    console.log(response);
                });
        };
        me.makeTurn = function (index) {
            proxy.playerTurn(coreData.currentPlayer, index)
                .then(function (response) {
                    updateInformaton(response);
                    endOfGame.gameEnded();
                })
                .catch(function (response) {
                });
        };
    }]);