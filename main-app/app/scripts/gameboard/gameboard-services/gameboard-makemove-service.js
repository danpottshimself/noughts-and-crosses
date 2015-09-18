/*angular.module('Server.MyModule')
    .service('MakeMove',  function () {
        var me= this;
        me.startGame = function () {
            me.currentPlayer = "1";
            me.Player1 = playerService.player1;
            me.Player2 = playerService.player2;
            newGame.newGame(me.Player1, me.Player2)
                .then(function (data) {
                    me.gameBoard = data.gameboard;
                    me.currentGameState = data.outcome;
                })
                .catch(function (response) {
                    console.log(response);
                });
        };
    });*/
