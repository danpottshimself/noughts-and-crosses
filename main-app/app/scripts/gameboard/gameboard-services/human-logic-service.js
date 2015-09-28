angular.module('Server.MyModule')
    .service('BothHumans', ['CoreData','FreshGame',  function (coreData, freshGame) {
    var me = this;
         me.humanLogic = function (index) {
            if (coreData.currentPlayer === '1') {
                freshGame.makeTurn(index);
                coreData.currentPlayer = '2';
            }
            else {
                freshGame.makeTurn(index);
                coreData.currentPlayer = '1';
            }
        };
    }]);