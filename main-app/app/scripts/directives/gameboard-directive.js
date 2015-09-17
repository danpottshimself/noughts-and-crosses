angular.module('Tombola.MyModule')
.directive('theGameBoard', function () {
    return {
        restrict: 'E',
        templateUrl: 'html/gameboard.html'
    };
});

