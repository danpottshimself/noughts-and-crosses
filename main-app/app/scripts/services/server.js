/*angular.module('Server.MyModule')
    .service('Server', function ($http, $scope) {

        $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",{"player1":$scope.Player1, "player2":$scope.Player2})
            .then(function(response){
                console.log("successful connection" + response.data.outcome);
                },
                function(response) {
                console.log("bad response, please try again" + response);
                });

        $http.post ("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",{"player1": "human", "player2": "human"})
            .then(function(response) {

            },
            function (response){

            });
    }); */