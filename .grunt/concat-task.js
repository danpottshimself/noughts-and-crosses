(function () {
    'use strict';
    module.exports={
        concat: {
            cwd: '',
            src: ['main-app/app/scripts/*.*', 'main-app/app/scripts/services/*.*', 'main-app/app/scripts/controllers/*.*', 'main-app/app/scripts/directives/*.*'],
            dest: '.build/main-app/app/scripts/app.js',
            expand: false,
            nonull: true,
            ext: '.min.js'
        }
    };
})();