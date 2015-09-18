angular.module('Server.MyModule')
    .service('PlayerService',  function () {
        var me= this;
        me.player1 = 'human';
        me.player2 = 'human';
        me.heroSelection = function (playerChoice) {
            if (playerChoice === 1) {
                me.player1 = selectCharacter(me.player1);
            }
            else {
                me.player2 = selectCharacter(me.player2);
            }
        };

        var selectCharacter = function (playerChoice) {
            if (playerChoice === "human") {
                return "random";
            }
            else if (playerChoice === "random") {
                return "pre-trained";
            }
            else {
                return "human";
            }
        };
    });