(function () {
    'use strict';
    angular.module('Controllers.MyModule')
        .controller('AnimationController', ['$scope', 'PlayerAnimation',
            function ($scope, playerAnimation) {
                $scope.animationModel= playerAnimation;
            }]);
})();