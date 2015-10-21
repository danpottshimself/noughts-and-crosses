angular.module('Controllers.MyModule')
.controller('GameBoardController', ['$scope','$q', 'GameModel',
        function ($scope,$q, gameModel) {
        $scope.gameModel= gameModel;

        $scope.chooseBlock = function (index){
            if (gameModel.gameBoard.charAt(index)!=="0" || gameModel.currentGameState === "Win"){
                return;
            }
            if (gameModel.player1=== 'human' && gameModel.player2 === 'human') {
               gameModel.makeTurn(index);

            }
            else {
             gameModel.makeTurn(index);
            }
        };
    }]);