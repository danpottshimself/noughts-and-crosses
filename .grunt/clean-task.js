(function () {
    'use strict';
    module.exports = {
    less:{
        src: [".build/main-app/app/main-less/*.*"]
    },
    javascript:{
            src: [".build/main-app/app/scripts/*.*"]
        },
        html:{
            src: [".build/main-app/app/index.html"]
        },
        images: {
            src: [".build/main-app/app/images/*.*"]
        }
    };
})();