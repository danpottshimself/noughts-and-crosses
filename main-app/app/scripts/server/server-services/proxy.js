angular.module('Services.MyModule')
.service('Proxy',['$http', '$q','DataHandle', function ($http, $q, dataHandle) {
        var me = this;
        me.newGame = function (player1Choice, player2Choice) {
            var data =  {
                "player1": player1Choice,
                "player2": player2Choice
            };
            return dataHandle.dataHandler('newgame', data);
        };
        me.playerTurn = function (playerNumber, chosenSquare) {
            var data = {
                "playerNumber": playerNumber,
                "chosenSquare": chosenSquare
            };
            return dataHandle.dataHandler('makemove', data);
        };
}]);