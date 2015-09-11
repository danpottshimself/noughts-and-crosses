myApp = angular.module('Tombola.MyModule', []);

myApp.controller('MyController', function ($scope) {
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
            document.getElementsByTagName('img')[index].setAttribute("src", "images/Crosses.gif");
            currentPlayer = '2';
        }
        else {
            $scope.gameBoard = setCharAt($scope.gameBoard, index, '2');
            document.getElementsByTagName('img')[index].setAttribute("src", "images/noughts.png");
            currentPlayer = '1';
        }
    };

    function setCharAt(theString,index,chr) {
        if(index > theString.length-1) return theString;
        return theString.substr(0,index) + chr + theString.substr(index+1);
    }
});

