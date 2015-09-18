angular.module('Tombola.MyModule')
.controller('MyController', ['$scope','$q', 'Server', 'ServerTurn', 'NewGame', 'PlayerService', function ($scope,$q, server, serverTurn, newGame, playerService) {
        var currentPlayer;
        currentPlayer = '1';
        $scope.gameBoard = '000000000';
        $scope.currentGameState = '';
        $scope.chooseBlock = function (index){
            if ($scope.gameBoard.charAt(index)!=="0" || $scope.currentGameState === "Win"){
                return;
            }
            if ($scope.Player1 == 'human' && $scope.Player2 !=='human'){
                currentPlayer = '1';
                makeTurn(index);
            }
            if ($scope.Player1 == 'human' && $scope.Player2 =='human') {
                humanLogic(index);
            }
           if ($scope.Player2 == 'human' && $scope.Player1 !=='human') {
               currentPlayer = '2';
               makeTurn(index);
           }
        };

        function setCharAt(theString,index,chr) {
            if(index > theString.length-1) return theString;
            return theString.substr(0,index) + chr + theString.substr(index+1);
        }

        $scope.startGame = function () {
            currentPlayer = "1";
            $scope.Player1 = playerService.player1;
            $scope.Player2 = playerService.player2;
            newGame.newGame($scope.Player1, $scope.Player2)
                .then(function (data) {
                    $scope.gameBoard = data.gameboard;
                    $scope.currentGameState = data.outcome;
                })
                .catch(function (response) {
                    console.log(response);
                });
        };

       var makeTurn = function (index) {
           serverTurn.playerTurn(currentPlayer, index)
               .then(function (response) {
                   $scope.gameBoard = response.gameboard;
                   $scope.currentGameState = response.outcome;

               })
               .catch(function (response) {
                console.log(response);
               });
       };

       var humanLogic = function (index) {
            if (currentPlayer === '1') {
                $scope.gameBoard = setCharAt($scope.gameBoard, index, currentPlayer);
                makeTurn(index);
                currentPlayer = '2';
            }
            else{
                $scope.gameBoard = setCharAt($scope.gameBoard, index, '2');
                makeTurn(index);
                currentPlayer = '1';
            }
        };
    }]);



