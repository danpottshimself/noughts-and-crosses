angular.module('Directives.MyModule')
    .directive('squares', function () {
        return {
            restrict: 'E',
            template: function (attr, element){
                console.log(element.squareNumber);
                return '<div ng-click="chooseBlock('+element.squareNumber+')" class="square"><img ng-src="images/transparent.png" class="player{{boardmodel.gameBoard['+element.squareNumber+']}}"> </div>';
            }
        };
    });
