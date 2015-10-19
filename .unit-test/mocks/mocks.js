 'use strict';
    var mocks = {
        GameBoardController: {
            chooseBlock: function(index){}
    },
        EndOfGame: {
            gameEnded: function () {}
        },
        CharacterLogic:{
            changeToTwo:function () {
                return '2';
            },
            changeToOne: function(){
                return '1';
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