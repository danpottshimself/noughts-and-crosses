angular.module('Tombola.MyModule', []);

angular.module('Tombola.MyModule')
.controller('MyController', function ($scope) {
        var currentPlayer;
        currentPlayer = '1';
        $scope.stringLine = '00000000';
        $scope.Player1 = 'player';
        $scope.Player2 = 'player';

        $scope.chooseBlock = function (index){
        alert(index);

        if (currentPlayer === '1'){
            $scope.stringLine= setCharAt($scope.stringLine ,index,'1');
            currentPlayer = '2';
        }
            else {
            $scope.stringLine = setCharAt($scope.stringLine ,index,'2');
            currentPlayer = '1';
        }
        };

        function setCharAt(theString,index,chr) {
            if(index > theString.length-1) return theString;
            return theString.substr(0,index) + chr + theString.substr(index+1);
        }
    });



