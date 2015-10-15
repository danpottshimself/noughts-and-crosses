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
        Characters: {
            value:function (){
                return "human";
        }
        },
        GameFunctions:{
            updateInformaton:function(response){},
            startGame:function(){},
            makeTurn:function(index){},
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
        }
};