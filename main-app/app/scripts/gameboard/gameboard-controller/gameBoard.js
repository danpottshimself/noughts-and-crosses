angular.module('Tombola.MyModule')
.controller('MyController', ['$scope','$q', 'Proxy','GameFunctions', 'CoreData','BothHumans','PlayerService','Characters', function ($scope,$q, proxy, gameFunctions, coreData, bothHumans, playerService, characters) {
        $scope.model=gameFunctions;
        $scope.boardmodel=coreData;
        $scope.chooseBlock = function (index){
            if (coreData.gameBoard.charAt(index)!=="0" || coreData.currentGameState === "Win"){
                return;
            }
            if (playerService.player1 === characters[0]) {
                coreData.currentPlayer = '1';
                gameFunctions.makeTurn(index);
            }
           if (playerService.player2 === characters[0]) {
               coreData.currentPlayer = '2';
               gameFunctions.makeTurn(index);
           }
            else{
               bothHumans.humanLogic(index);
           }
        };
    }]);
