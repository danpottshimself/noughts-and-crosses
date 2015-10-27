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
                templateProvider:function ($templateCache){ return $templateCache.get("partials/game-board.html");}
            })
            .state ('rulePage', {
                 url: "/Rules",
            templateProvider:function ($templateCache){ return $templateCache.get("partials/rules.html");}
            })
            .state('playerSelect', {
                url: "/PlayerSelect",
                templateProvider:function ($templateCache){ return $templateCache.get("partials/player-select.html");}
            })
            .state('gameWon', {
                url: "/winner",
                template: '<game-won></game-won>',
                controller: 'GameBoardController'
            })
            .state ('gameDrawn', {
                url: "/draw",
                template: '<game-drawn></game-drawn>',
                controller: 'GameBoardController'
             });
    });