//TODO: fix module names.
angular.module('Core.MyModule', []);
angular.module('Directives.MyModule',[]);
angular.module('Services.MyModule',['Core.MyModule']);
angular.module('Tombola.NoughtsAndCrosses.Style',[]);
angular.module('Controllers.MyModule', ['Services.MyModule','Directives.MyModule', 'ui.router', 'Core.MyModule', 'Tombola.NoughtsAndCrosses.Style'])
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
                template: '<game-won></game-won>'
            })
            .state ('gameDrawn', {
                url: "/draw",
                template: '<game-drawn></game-drawn>'
             });
    });