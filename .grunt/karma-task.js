(function () {
    'use strict';
    module.exports = {
            unit: {
                configFile: 'karma.conf.js'
            },
            options: {
                files: ['bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    '.unit-test/core-data.js',
                    '.unit-test/player-service-test.js',
                    '.build/main-app/app/scripts/app.js']
            }
    };
})();
