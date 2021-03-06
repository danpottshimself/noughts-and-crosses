angular.module('Services.MyModule')
    .service('PlayerService', ['Characters',  function (characters) {
        var me = this,
            human = characters[0];

        me.player1 = human;
        me.player2 = human;


        var toggleSelection = function (playerChoice) {

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
            me.player1 = toggleSelection(me.player1);
        };

        me.togglePlayer2 = function (){
            me.player2 = toggleSelection(me.player2);
        };

        me.areBothPlayersHuman = function () {
            return me.isPlayer1Human() && me.isPlayer2Human();
        };

        me.isPlayer1Human = function () {
            return me.player1 === human;
        };

        me.isPlayer2Human = function () {
            return me.player2 === human;
        };
    }]);