(function () {
    'use strict';
    module.exports = {
            less: {
                files: ['main-app/app/main-less/*.less'],
                tasks: ['lessFiles']
        },
            javascriptWatcher: {
                files: ['main-app/app/scripts/**/*.js'],
                tasks: ['jsFiles']

        },
            htmlWatcher: {
                files: ['main-app/app/*.html', 'main-app/app/partials/*.html'],
                tasks: ['htmlFiles']
            }

    };
})();