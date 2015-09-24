angular.module('Server.MyModule')
    .service('BothHumans', ['CoreData','PlayerTurn',  function (coreData, playerTurn) {
    var me = this;
         me.humanLogic = function (index) {
            if (coreData.currentPlayer === '1') {
                playerTurn.makeTurn(index);
                coreData.currentPlayer = '2';
            }
            else {
                playerTurn.makeTurn(index);
                coreData.currentPlayer = '1';
            }
        };
    }]);