(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Style')
        .service('StyleModel', [
            function () {
                var me = this;
                me.currentStyle = 'main';
                me.toggleStyle = function(){
                  if(me.currentStyle=== 'main'){
                      me.currentStyle = 'newStyle';
                  }
                  else{
                    me.currentStyle ='main';
                  }
                };
    }]);
})();