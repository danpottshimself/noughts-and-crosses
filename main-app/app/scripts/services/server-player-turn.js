angular.module('Server.MyModule')
    .service('ServerTurn', ['DataHandle', function (dataHandle) {
        this.playerTurn = function (playerNumber, chosenSquare) {
            var data = {
                "playerNumber": playerNumber,
                "chosenSquare": chosenSquare
            };
            return dataHandle.dataHandler('makemove', data);
        };
    }]);