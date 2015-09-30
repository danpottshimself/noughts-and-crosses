angular.module('Server.MyModule')
    .service('PlayerService', ['Characters',  function (characters) {
        var me= this,
            human = characters[0];
        me.player1 = human;
        me.player2 = human;
        var selectCharacter = function (playerChoice) {
            if (playerChoice === human) {
                return characters[1];
            }
            else if (playerChoice === characters[1]) {
                return characters[2];
            }
            else {
                return human;
            }
        };
        me.togglePlayer1 = function (){
            me.player1 = selectCharacter(me.player1);
        };
        me.togglePlayer2 = function (){
            me.player2 = selectCharacter(me.player2);
        };
    }]);