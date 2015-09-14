myApp = angular.module('Tombola.MyModule', []);

myApp.controller('MyController', function ($scope) {
    var currentPlayer;
    currentPlayer = '1';
    $scope.gameBoard = '000000000';
    $scope.Player1 = 'player1';
    $scope.Player2 = 'player2';

    $scope.chooseBlock = function (index){
        if($scope.gameBoard.charAt(index)=="111"){
            alert("you win");
        }
        else if ($scope.gameBoard.charAt(index)!=="0"){
            return;
        }

        if (currentPlayer === '1'){
            $scope.gameBoard= setCharAt($scope.gameBoard ,index,'1');
          //  document.getElementsByTagName('img')[index].setAttribute("src", "images/Crosses.gif");
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
});


/*
Top horizontal
0, 1, 2
Middle horizontal
3, 4, 5
Bottom horizontal
6, 7, 8
Left vertical
0, 3, 6
Middle vertical
1, 4, 7
Right vertical
2, 5, 8
Top left diagonal
0, 4, 8
Top right diagonal
2, 4, 6
*/
