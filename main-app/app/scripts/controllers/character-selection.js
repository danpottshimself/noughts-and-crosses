angular.module('Tombola.MyModule')
    .controller('PlayerController', ['$scope', 'PlayerService', function ($scope, playerService){
    $scope.model = playerService;
    }]);