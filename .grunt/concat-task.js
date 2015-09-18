(function () {
    'use strict';
    module.exports={
        concat: {
            cwd: '',
            src: ['main-app/app/scripts/modules.js', 'main-app/app/scripts/server/server-services/*.*','main-app/app/scripts/player-select/player-service/*.*','main-app/app/scripts/player-select/player-controller/*.*', 'main-app/app/scripts/gameboard/gameboard-controller/*.*','main-app/app/scripts/gameboard/gameboard-directive/*.*','main-app/app/scripts/player-select/player-directive/*.*'],
            dest: '.build/main-app/app/scripts/app.js',
            expand: false,
            nonull: true,
            ext: '.min.js'
        }
    };
})();