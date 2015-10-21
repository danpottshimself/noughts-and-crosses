//TODO: Rename to GameModel
angular.module('Services.MyModule')
    .service('GameModel', ['$state','PlayerService','Proxy','EndOfGame','Characters',
        function ($state, playerService, proxy, endOfGame,characters) {
           var me = this,
               styleArray = ['main.css', 'newStyle.css'],
               toggleCurrenrtPlayer = function () {
                   if (me.currentPlayer === '1') {
                       me.currentPlayer = '2';
                   }
                   else {
                       me.currentPlayer = '1';
                   }
               };

            me.currentPlayer = '1';
            me.winner = "";
            me.gameBoard = '';
            me.currentGameState = "";

        endOfGame.gameEnded(); //TODO: why is this called immediately?

        //****************************************
        //TODO: these should be the equivalent of private - probably
        me.changePlayer = function (){
            if (playerService.player1 !== characters[0]) {
                me.currentPlayer = "2";
            }
            else {
                me.currentPlayer = "1";
            }
        };

        me.updateInformation = function (response) {
            me.gameBoard = response.gameboard;
            me.currentGameState = response.outcome;
            endOfGame.outcome = response.outcome;
            me.winner = response.winner;
        };




        //****************************************


        me.startGame = function () {
            proxy.newGame(playerService.player1, playerService.player2)
                .then(function (response) {
                    me.changePlayer();
                    me.updateInformation(response);
                    endOfGame.gameEnded();
                })
                .catch(function (response) {
                    console.log(response);
                });
        };

        me.makeTurn = function (index) {
            proxy.playerTurn(me.currentPlayer, index)
                .then(function (response) {
                    me.updateInformation(response);
                    endOfGame.gameEnded();
                })
                .catch(function (response) {
                });
        };

        //****************************************
        var swapStyleSheet = function() {
           var nextInArray = styleArray.indexOf(me.cssStyle) +1;
            nextInArray =  nextInArray === styleArray.length ? 0 :  nextInArray;
            return styleArray[nextInArray];
        };

        //TODO: Create CSS toggle service.
        me.cssStyle = styleArray[0];

        me.toggleCss = function () {
            me.cssStyle = swapStyleSheet();
        };
        //****************************************


    }]);