angular.module('Controllers.MyModule')
.controller('GameBoardController', ['$scope','$q', 'Proxy','GameFunctions', 'CoreData','CharacterLogic','PlayerService','Characters', function ($scope,$q, proxy, gameFunctions, coreData, characterLogic, playerService, characters) {
        $scope.model=gameFunctions;
        $scope.boardmodel=coreData;
        $scope.versusModel = playerService;
        $scope.chooseBlock = function (index){
            if (coreData.gameBoard.charAt(index)!=="0" || coreData.currentGameState === "Win"){
                return;
            }
            if (playerService.player1=== characters[0] && playerService.player2 === characters[0]) {
                characterLogic.humanLogic(index);
            }
            else {
             gameFunctions.makeTurn(index);
            }
        };
    }]);