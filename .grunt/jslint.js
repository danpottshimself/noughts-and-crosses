(function () {
    'use strict';
    module.exports = {
        jshint: {
            all: ['main-app/app/scripts/**/*.js', './.grunt/**/*.js'],
            cwd: '',
            src: ['main-app/app/scripts/**/*.js', './.grunt/**/*.js'],
            dest: '.build/main-app/app/Scripts/',
            expand: true
        }
    };
})();
