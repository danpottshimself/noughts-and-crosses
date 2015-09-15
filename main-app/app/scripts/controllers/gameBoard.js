angular.module('Tombola.MyModule')
.controller('MyController', ['$scope', '$http', function ($scope, $http) {
        var currentPlayer;
        currentPlayer = '1';
        $scope.gameBoard = '000000000';
        $scope.Player1 = 'human';
        $scope.Player2 = 'human';

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

        $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",{"player1":$scope.Player1, "player2":$scope.Player2})
            .then(function(response){
                console.log("successful connection" + response.data.outcome + " " + response.data.gameboard);
            },
            function(response) {
                console.log("bad response, please try again" + response);
            });

       /* $http.post ("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove",{"player1": "human", "player2": "human"})
            .then(function(response) {

            },
            function (response){

            });*/
    }]);



