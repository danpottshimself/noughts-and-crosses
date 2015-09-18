/*angular.module('Server.MyModule')
    .service('StartGame',  function () {
        var me = this;
         me.makeTurn = function (index) {
            serverTurn.playerTurn(currentPlayer, index)
                .then(function (response) {
                    me.gameBoard = response.gameboard;
                    me.currentGameState = response.outcome;

                })
                .catch(function (response) {
                    console.log(response);
                });
        };
    });*/