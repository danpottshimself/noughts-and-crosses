angular.module('Server.MyModule')
    .service('NewGame',['DataHandle',  function (dataHandle) {
        this.newGame = function (player1Choice, player2Choice) {
            var data =  {
                "player1": player1Choice,
                "player2": player2Choice
            };
            return dataHandle.dataHandler('newgame', data);
        };
    }]);
