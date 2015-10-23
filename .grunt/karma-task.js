(function () {
    'use strict';
    module.exports = {
            unit: {
                configFile: 'karma.conf.js'
            },
            options: {
                files: ['bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'node_modules/chai-spies/chai-spies.js',
                    '.unit-test/**/*.*',
                    '.unit-test/mocks/mocks.js',
                    '.build/main-app/app/scripts/app.js']
            }
    };
})();
