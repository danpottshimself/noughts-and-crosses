angular.module('Services.MyModule')
    .service('GameModel', ['$state','PlayerService','GameApi','EndOfGame','Characters',
        function ($state, playerService, gameApi, endOfGame,characters) {
           var me = this,
               gameInPlay = false,
               updateBoard = function (response) {
                   me.updateInformation(response);
                   me.toggleCurrentPlayer();
                   gameInPlay = true;
                   endOfGame.gameEnded();
               };
            me.currentPlayer = '1';
            me.winner = "";
            me.gameBoard = '';
            me.currentGameState = "";

            me.setInitialPlayer = function (){
                if (playerService.player1 !== characters[0]) {
                    me.currentPlayer = "2";
                }
                else {
                    me.currentPlayer = "1";
                }
            };

            me.toggleCurrentPlayer = function () {
                if (gameInPlay && playerService.areBothPlayersHuman()) {
                    me.currentPlayer = me.currentPlayer === '1' ? '2' : '1';
                }
            };

            me.updateInformation = function (response) {
                me.gameBoard = response.gameboard;
                me.currentGameState = response.outcome;
                endOfGame.outcome = response.outcome;
                me.winner = response.winner;
            };


            me.startGame = function () {
                me.setInitialPlayer();
                gameInPlay = false;
                gameApi.startGame(playerService.player1, playerService.player2, updateBoard);
            };

            me.makeTurn = function (index) {
                gameApi.makeTurn(me.currentPlayer, index, updateBoard);
            };
        }]);