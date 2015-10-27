(function () {
    'use strict';
    module.exports={
        concat: {
            cwd: '',
            src: ['main-app/app/scripts/modules.js',
                'main-app/app/scripts/templateCache.js',
                'main-app/app/scripts/server/services/*.js',
                'main-app/app/scripts/player-select/services/*.js',
                'main-app/app/scripts/style/services/*.js',
                'main-app/app/scripts/gameboard/services/*.js',
                'main-app/app/scripts/gameboard/directives/*.js',
                'main-app/app/scripts/player-select/directives/*.js',
                'main-app/app/scripts/style/filters/*.js',
                'main-app/app/scripts/style/controllers/*.js',
                'main-app/app/scripts/player-select/controllers/*.js',
                'main-app/app/scripts/gameboard/controllers/*.*'],
            dest: '.build/main-app/app/scripts/app.js',
            expand: false,
            nonull: true,
            ext: '.min.js'
        }
    };
})();