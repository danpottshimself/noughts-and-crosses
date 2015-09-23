angular.module('Tombola.MyModule')
.controller('MyController', ['$scope','$q', 'Server', 'ServerTurn','FreshGame', 'CoreData', function ($scope,$q, server, serverTurn, freshGame, coreData) {
        $scope.model=freshGame;
        $scope.boardmodel=coreData;
        $scope.chooseBlock = function (index){
            if (coreData.gameBoard.charAt(index)!=="0" || coreData.currentGameState === "Win"){
                return;
            }
            if (freshGame.Player1 == 'human' && freshGame.Player2 !=='human'){
                coreData.currentPlayer = '1';
                makeTurn(index);
            }
            if (freshGame.Player1 == 'human' && freshGame.Player2 =='human') {
                humanLogic(index);
            }
           if (freshGame.Player2 == 'human' && freshGame.Player1 !=='human') {
               coreData.currentPlayer = '2';
               makeTurn(index);
           }
        };

        function setCharAt(theString,index,chr) {
            if(index > theString.length-1) return theString;
            return theString.substr(0,index) + chr + theString.substr(index+1);
        }

        var makeTurn = function (index) {
           serverTurn.playerTurn(coreData.currentPlayer, index)
               .then(function (response) {
                   coreData.gameBoard = response.gameboard;
                   coreData.currentGameState = response.outcome;
               })
               .catch(function (response) {
               });
       };

       var humanLogic = function (index) {
            if (coreData.currentPlayer === '1') {
                coreData.gameBoard = setCharAt(coreData.gameBoard, index, coreData.currentPlayer);
                makeTurn(index);
                coreData.currentPlayer = '2';
            }
            else{
                coreData.gameBoard = setCharAt(coreData.gameBoard, index, '2');
                makeTurn(index);
                coreData.currentPlayer = '1';
            }
        };
    }]);



