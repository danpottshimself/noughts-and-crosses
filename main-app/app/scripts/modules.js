angular.module('Server.MyModule',[]);
angular.module('Tombola.MyModule', ['Server.MyModule'])
.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/route1");

    $stateProvider
        .state('route1', {
            url: "/route1",
            templateUrl: "partials/gameboard.html"
        })
        .state('route2', {
            url: "/route2",
            templateUrl: "partials/game-info.html"
        });
});
