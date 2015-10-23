angular.module('Directives.MyModule')
    .directive('squares', function () {
        return {
            restrict: 'E',
            template: function (attr, element){
                return '<div ng-click="chooseBlock('+element.index+')" class="square">' +
                    '<img ng-src="images/transparent.png" class="player{{gameModel.gameBoard['+element.index+']}}"></div>';
            }
        };
    });
