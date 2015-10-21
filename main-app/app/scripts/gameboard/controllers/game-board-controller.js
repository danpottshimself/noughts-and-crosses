angular.module('Controllers.MyModule')
.controller('GameBoardController', ['$scope','$q', 'GameModel',
        function ($scope,$q, gameModel) {
        $scope.gameModel= gameModel;

        //$scope.boardmodel=coreData;

        $scope.chooseBlock = function (index){
            //if (coreData.gameBoard.charAt(index)!=="0" || coreData.currentGameState === "Win"){
            //    return;
            //}
            //if (playerService.player1=== characters[0] && playerService.player2 === characters[0]) {
            //    characterLogic.humanLogic(index);
            //}
            //else {
            // gameFunctions.makeTurn(index);
            //}
        };
    }]);