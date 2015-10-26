(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Style')
        .filter('StyleFilter', [
            function () {
               return function(styleName){
                 return 'css/' + styleName + '.css';
                };
            }]);
})();