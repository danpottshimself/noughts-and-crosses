(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Style')
        .filter('AnimationFilter', [
            function () {
                return function(animationName){
                    return animationName + ' animated flip';
                };
            }]);
})();