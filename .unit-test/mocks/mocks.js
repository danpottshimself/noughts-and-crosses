 'use strict';
    var mocks = {
        endOfGame: {
            gameEnded: function (index) {}
        },

        characters:['random', 'human'],
            value:function () {
            return "human";
        },

        gameModel:{
            isPlayer1Human : function () {
            return player1 === 'human';
            },

            isPlayer2Human :function () {
            return me.player2 === 'human';
            },

            player1: 'human',
            player2: 'human',
            currentPlayer :'1',
            winner : "",
            gameBoard : '',
            currentGameState : "",
            updateInformation:function(){},
            startGame:function(){},
            makeTurn:function(index){},
            setInitialPlayer:function(){}
        },

        playerService:{
            player1 : "human",
            player2: "human",
            areBothPlayersHuman: function (){},
            togglePlayer1: function (){},
            togglePlayer2: function (){}
        },

        proxy: {
            newGame: function () {
                return {outcome: 'Continue', gameboard: '000000000', winner: 0}
            },
            playerTurn: function () {
                return {outcome: 'Continue', gameboard: '100000000', winner: 0}
            }
        },

        stateChange: {
            go:function(gameState) {}
        },

        styleModel: {
            currentStyle: 'main',
            toggleStyle: function (){}
        },

        gameRouting: {
            $state: function(){},
            $timeout: function(){},
        }
};