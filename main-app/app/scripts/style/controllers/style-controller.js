(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Style')
    .controller('StyleController', ['$scope', 'StyleModel',
            function ($scope, styleModel) {
                $scope.styleModel = styleModel;
    }]);
})();