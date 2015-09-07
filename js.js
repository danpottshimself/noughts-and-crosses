/**
 * Created by daniel.potts on 07/09/15.
 */

'use strict';
module.exports = function (grunt){
    grunt.registerTask('speak', function() {
        console.log("i'm speaking");
    });
};
grunt.registerTask('yell', function (){
console.log("I'm yelling");
});
grunt.registerTask('default', ['speak', 'yell']);
console.log("running");