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

        me.heroSelection = function (playerChoice) {
            if (playerChoice === 1) {
                me.player1 = selectCharacter(me.player1);
            }
            else {
                me.player2 = selectCharacter(me.player2);
            }
        };
    }]);