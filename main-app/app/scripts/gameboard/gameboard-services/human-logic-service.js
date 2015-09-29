angular.module('Server.MyModule')
    .service('BothHumans', ['CoreData','GameFunctions',  function (coreData, gameFunctions) {
    var me = this;
         me.humanLogic = function (index) {
            if (coreData.currentPlayer === '1') {
                gameFunctions.makeTurn(index);
                coreData.currentPlayer = '2';
            }
            else {
                gameFunctions.makeTurn(index);
                coreData.currentPlayer = '1';
            }
        };
    }]);