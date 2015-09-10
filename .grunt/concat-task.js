(function () {
    'use strict';
    module.exports={
        concat: {
            cwd: '',
            src: ['main-app/app/scripts/**/*.*'],
            dest: '.build/main-app/app/scripts/app.js',
            expand: false,
            nonull: true,
            ext: '.min.js'
        }
    };
})();