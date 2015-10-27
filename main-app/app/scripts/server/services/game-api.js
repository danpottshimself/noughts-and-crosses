(function () {
    'use strict';
    angular.module('Services.MyModule')
        .service('GameApi', ['Proxy',
            function ( proxy) {
                var me  = this,
                    handlePromise = function (promise, updateCallback) {
                    promise.then(function (response) {
                        updateCallback(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                };

                me.startGame = function (player1Number, player2Number, updateCallback) {
                    var promise = proxy.newGame(player1Number, player2Number);
                    handlePromise(promise, updateCallback);
                };

                me.makeTurn = function (currentPlayerNumber, squareNumber, updateCallback) {
                    var promise = proxy.playerTurn(currentPlayerNumber, squareNumber);
                    handlePromise(promise, updateCallback);
                };
            }]);
})();