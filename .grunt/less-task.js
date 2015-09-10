(function () {
    'use strict';
    module.exports = {
        lesslint: {
            cwd: 'main-app/app/main-less',
            src: ['**/*.less'],
            dest: '.build/main-app/app/css/',
            expand: true,
            ext: '.css'
        }
    };
    })();
