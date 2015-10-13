angular.module('Core.MyModule', []);
angular.module('Directives.MyModule',[]);
angular.module('Services.MyModule',['Core.MyModule']);
angular.module('Controllers.MyModule', ['Services.MyModule','Directives.MyModule', 'ui.router', 'Core.MyModule'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/PlayerSelect");

        $stateProvider
            .state('gameBoard', {
                url: "/PlayGame",
                templateUrl: "partials/game-board.html"
            })
            .state ('rulePage', {
                 url: "/Rules",
                 templateUrl: "partials/rules.html"
            })
            .state('playerSelect', {
                url: "/PlayerSelect",
                templateUrl: "partials/player-select.html"
            })
            .state('gameWon', {
                url: "/winner",
                templateUrl: "partials/game-won.html"
            })
            .state ('gameDrawn', {
                url: "/draw",
                templateUrl: "partials/game-drawn.html"
             });
    });