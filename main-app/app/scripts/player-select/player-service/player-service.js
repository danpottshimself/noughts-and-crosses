angular.module('Server.MyModule')
    .service('PlayerService',  function () {
        var me= this;
        me.playerArray = ["human", "random", "pre-trained"];
        me.player1 = me.playerArray[0];
        me.player2 = me.playerArray[0];
        var selectCharacter = function (playerChoice) {
            if (playerChoice === me.playerArray[0]) {
                return me.playerArray[1];
            }
            else if (playerChoice === me.playerArray[1]) {
                return me.playerArray[2];
            }
            else {
                return me.playerArray[0];
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
    });