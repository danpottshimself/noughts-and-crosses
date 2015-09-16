angular.module('Tombola.MyModule')
.service('Server',['$http', '$q', function ($http, $q) {
    var deferred = $q.defer();
    this.newGame = function (player1Choice, player2Choice) {
        $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame", {
                "player1": player1Choice,
                "player2": player2Choice
            },
            {
                withCredentials :true

            })
            .then(function (response) {
                deferred.resolve("Made turn successfully" + response.data.outcome + " " + response.data.gameboard);
            })
            .catch (function (response) {
            deferred.reject("Did not make turn" + response.data);
        });

        this.playerTurn = function (playerNumber, chosenSquare) {
            $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove", {
                "playerNumber": playerNumber,
                "chosenSquare": chosenSquare
            },
                {
                    withCredentials :true

                })
                .then(function (response) {
                    console.log("successful connection" + response.data.outcome + " " + response.data.gameboard);
                })
                .catch (function (response) {
                console.log("bad response, please try again" + response);
            });
            return deferred.promise;
        };
    };
}]);

