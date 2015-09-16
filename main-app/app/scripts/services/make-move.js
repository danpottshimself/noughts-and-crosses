/*angular.module('Server.MyModule')
    .service('Server',['$http', '$q', function ($http, $q) {
        this.playerTurn = function (playerNumber, chosenSquare) {
            var deferred = $q.defer();
            $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove", {"playerNumber": playerNumber,"chosenSquare": chosenSquare}, {withCredentials :true})
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch (function (response) {
                deferred.reject(response.data);
            });
            return deferred.promise;
        };
    }]);*/