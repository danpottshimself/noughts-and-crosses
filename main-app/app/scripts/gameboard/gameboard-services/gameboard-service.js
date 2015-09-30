angular.module('Services.MyModule')
    .service('GameFunctions', ['$state','PlayerService','Proxy','CoreData','EndOfGame','Characters',  function ($state, playerService, proxy, coreData, endOfGame,characters) {
           var me = this,
                updateInformaton = function (response) {
                coreData.gameBoard = response.gameboard;
                coreData.currentGameState = response.outcome;
                endOfGame.outcome = response.outcome;
                coreData.winner = response.winner;
            };
        endOfGame.gameEnded();

        me.startGame = function () {
            proxy.newGame(playerService.player1, playerService.player2)
                .then(function (response) {
                    if (playerService.player1 !== characters[0]) {
                        coreData.currentPlayer = "2";
                    }
                    else {
                        coreData.currentPlayer = "1";
                    }
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