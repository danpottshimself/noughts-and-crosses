angular.module('Controllers.MyModule')
.controller('GameBoardController', ['$scope','$q', 'GameModel',
        function ($scope,$q, gameModel) {
        $scope.gameModel= gameModel;

        $scope.chooseBlock = function (index){
            if ( gameModel.currentGameState !== "Continue" || gameModel.gameBoard.charAt(index)!=="0" ){
                return;
            }
            gameModel.makeTurn(index);
        };
    }]);