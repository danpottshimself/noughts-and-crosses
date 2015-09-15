angular.module('Server.MyModule')
    .service('Server', function ($http) {

        $http.post("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame",{"player1": "human", "player2": "human"})
            .then(function(response){
                console.log("successful connection" + response.data.outcome);
                },
                function(response) {
                console.log("bad response, please try again" + response);
                });

    });