angular.module('Server.MyModule')
    .service('BothHumans', ['CoreData','PlayerTurn',  function (coreData, playerTurn) {
    var me = this;
         me.humanLogic = function (index) {
            if (coreData.currentPlayer === '1') {
                coreData.gameBoard = setCharAt(coreData.gameBoard, index, coreData.currentPlayer);
                playerTurn.makeTurn(index);
                coreData.currentPlayer = '2';
            }
            else {
                coreData.gameBoard = setCharAt(coreData.gameBoard, index, '2');
                playerTurn.makeTurn(index);
                coreData.currentPlayer = '1';
            }
        };
        function setCharAt(theString, index, chr) {
            if (index > theString.length - 1) return theString;
            return theString.substr(0, index) + chr + theString.substr(index + 1);
        }
    }]);