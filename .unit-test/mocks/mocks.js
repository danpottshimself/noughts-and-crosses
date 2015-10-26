 'use strict';
    var mocks = {
        GameBoardController: {
            chooseBlock: function(index){}
    },
        PlayerController:{

        },
        EndOfGame: {
            gameEnded: function (index) {

            }
        },
        CharacterLogic:{
            humanLogic:function (index) {
                if (index === 1) {
                    return '2';
                }
                else {
                    return '1';
                }
            }
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
            setInitialPlayer:function(){},
            swapStyleSheet:function(){},
            toggleCss:function(){}
        },
        PlayerService:{
            player1 : "human",
            player2: "human",
            areBothPlayersHuman: function (){},
            selectCharacter:function(){},
            togglePlayer1: function (){},
            togglePlayer2: function (){},
            animateCharacter1:function (){},
            animateCharacter2:function (){}
        },
        CoreData:{
            currentPlayer :'1',
            winner : "",
            gameBoard : '',
            currentGameState : ""
        },
        proxy: {
            newGame: function () {
                return {outcome: 'Continue', gameboard: '000000000', winner: 0}
            },
            playerTurn: function () {
                return {outcome: 'Continue', gameboard: '100000000', winner: 0}
            }
        },
        StateChange: {
            go:function(gameState) {}
        },
        game : {
            chooseBlock : function (number) {},
            gameModel: {
                gameboard : "000001000"
            }
        },
        StyleModel: {
            currentStyle: 'main',
            toggleStyle: function (){}

        },
        gameRouting: {
            $state: function(){},
            $timeout: function(){},
            resetGame: function(){}
        }
};