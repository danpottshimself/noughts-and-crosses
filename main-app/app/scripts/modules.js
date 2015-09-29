angular.module('Core.MyModule', []);
angular.module('Server.MyModule',['Core.MyModule']);
angular.module('Tombola.MyModule', ['Server.MyModule', 'ui.router', 'Core.MyModule'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/PlayerSelect");

        $stateProvider
            .state('route1', {
                url: "/PlayGame",
                templateUrl: "partials/game-board.html"
            })
            .state ('route2', {
                 url: "/Rules",
                 templateUrl: "partials/rules.html"
            })
            .state('route3', {
                url: "/PlayerSelect",
                templateUrl: "partials/player-select.html"
            })
            .state('route4', {
                url: "/winner",
                templateUrl: "partials/game-won.html"
            })
            .state ('route5', {
                url: "/draw",
                templateUrl: "partials/game-drawn.html"
             });
    });




