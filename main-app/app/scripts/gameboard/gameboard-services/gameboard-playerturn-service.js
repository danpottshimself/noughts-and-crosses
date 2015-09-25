angular.module('Server.MyModule')
    .service('PlayerTurn', ['CoreData', 'ServerTurn','$state', function (coreData, serverTurn,$state) {
        var me = this;
        me.makeTurn = function (index) {
            serverTurn.playerTurn(coreData.currentPlayer, index)
                .then(function (response) {
                    coreData.gameBoard = response.gameboard;
                    coreData.currentGameState = response.outcome;
                        if (response.outcome === "Win"){
                            $state.go('route4');
                        }
                    else if (response.outcome === "Draw"){
                            $state.go('route5');
                        }
                })
                .catch(function (response) {
                });
        };
    }]);