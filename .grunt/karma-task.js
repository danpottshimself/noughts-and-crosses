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
                    '.unit-test/core-data.js',
                    '.unit-test/player-service-test.js',
                    '.unit-test/gameboard-service-test.js',
                    '.unit-test/player-value-test.js',
                    '.unit-test/proxy-test.js',
                    '.unit-test/human-logic-test.js',
                    '.unit-test/endOfGame-test.js',
                    '.unit-test/mocks/mocks.js',
                    '.build/main-app/app/scripts/app.js']
            }
    };
})();
