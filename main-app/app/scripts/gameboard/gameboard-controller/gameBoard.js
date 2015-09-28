angular.module('Tombola.MyModule')
.controller('MyController', ['$scope','$q', 'Server', 'ServerTurn','FreshGame', 'CoreData','BothHumans', function ($scope,$q, server, serverTurn, freshGame, coreData, bothHumans) {
        $scope.model=freshGame;
        $scope.boardmodel=coreData;
        $scope.chooseBlock = function (index){
            if (coreData.gameBoard.charAt(index)!=="0" || coreData.currentGameState === "Win"){
                return;
            }
            if (freshGame.Player1 == 'human' && freshGame.Player2 !=='human'){
                coreData.currentPlayer = '1';
                freshGame.makeTurn(index);
            }
            if (freshGame.Player1 == 'human' && freshGame.Player2 =='human') {
                bothHumans.humanLogic(index);
            }
           if (freshGame.Player2 == 'human'  && freshGame.Player1 !=='human') {
               coreData.currentPlayer = '2';
               playerTurn.makeTurn(index);
           }
        };
    }]);
