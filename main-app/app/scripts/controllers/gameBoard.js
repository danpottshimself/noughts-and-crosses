angular.module('Tombola.MyModule')
.controller('MyController', ['$scope','Server', function ($scope,server) {
        var currentPlayer;
        currentPlayer = '1';
        $scope.gameBoard = '000000000';
        $scope.Player1 = 'player1';
        $scope.Player2 = 'player2';

        $scope.chooseBlock = function (index){
        if ($scope.gameBoard.charAt(index)!=="0"){
                return;
            }
        if (currentPlayer === '1'){
            $scope.gameBoard= setCharAt($scope.gameBoard ,index,'1');
            currentPlayer = '2';
        }
            else {
            $scope.gameBoard = setCharAt($scope.gameBoard, index, '2');
            currentPlayer = '1';
        }
        };

        function setCharAt(theString,index,chr) {
            if(index > theString.length-1) return theString;
            return theString.substr(0,index) + chr + theString.substr(index+1);
        }
    }]);



