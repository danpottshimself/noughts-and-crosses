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
            player1: 'human',
            player2: 'human',
            currentPlayer :'1',
            winner : "",
            gameBoard : '',
            currentGameState : "",
            updateInformation:function(){},
            startGame:function(){},
            makeTurn:function(index){},
            changePlayer:function(){},
            swapStyleSheet:function(){},
            toggleCss:function(){}
        },
        PlayerService:{
            player1 : "human",
            player2: "human",
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
        }
};