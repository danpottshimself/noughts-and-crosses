angular.module('Server.MyModule')
    .service('FreshGame', ['PlayerService','NewGame','CoreData','ServerTurn','$state',  function (playerService, newGame, coreData, serverTurn, $state) {
        var outcome = 'Continue',
            me = this,
            gameEnded = function () {
                if (outcome === "Win") {
                    $state.go('route4');
                }
                else if (outcome === "Draw") {
                    $state.go('route5');
                }
            },
            updateInformaton = function (response) {
                coreData.gameBoard = response.gameboard;
                coreData.currentGameState = response.outcome;
                outcome = response.outcome;
                coreData.winner = response.winner;
            };

        me.startGame = function () {
            me.Player1 = playerService.player1;
            me.Player2 = playerService.player2;
            newGame.newGame(me.Player1, me.Player2)
                .then(function (response) {
                    updateInformaton(response);
                    gameEnded();
                })
                .catch(function (response) {
                    console.log(response);
                });
        };
        me.makeTurn = function (index) {
            serverTurn.playerTurn(coreData.currentPlayer, index)
                .then(function (response) {
                    updateInformaton(response);
                    gameEnded();
                })
                .catch(function (response) {
                });
        };
    }]);