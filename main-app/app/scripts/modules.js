angular.module('Server.MyModule',[]);
angular.module('Tombola.MyModule', ['Server.MyModule', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/route3");

        $stateProvider
            .state('route1', {
                url: "/route1",
                templateUrl: "partials/game-board.html"
            })
            .state('route3', {
                url: "/route3",
                templateUrl: "partials/player-select.html"
            });
    });




