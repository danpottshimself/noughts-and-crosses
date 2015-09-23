angular.module('Server.MyModule')
    .service('FreshGame', ['PlayerService','NewGame','CoreData',  function (playerService, newGame, coreData) {
        var me= this;
        me.startGame = function () {
            me.Player1 = playerService.player1;
            me.Player2 = playerService.player2;
            newGame.newGame(me.Player1, me.Player2)
                .then(function (data) {
                    coreData.currentPlayer = "1";
                    coreData.gameBoard = data.gameboard;
                    coreData.currentGameState = data.outcome;
                })
                .catch(function (response) {
                    console.log(response);
                });
        };
    }]);