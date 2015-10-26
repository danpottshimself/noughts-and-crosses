(function () {
    'use strict';
    describe('Test GameWon', function () {
        var compile,
            scope,
            element;

        beforeEach(function() {
            module ('ui.router');
            module('htmlLoader');
            module('Directives.MyModule', function ($provide) {
            });

            inject(['$compile', '$rootScope', function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope;
            }]);

            var directiveElement = '<game-won></game-won>';
            element = compile(directiveElement)(scope);
            scope.$digest();
        });

        it('Checks that the audio is set up correctly', function(){
            var  sourceFinder = element[0].children[0].children[0];
            sourceFinder.src.should.equal('http://localhost:9876/sounds/sound1.mp3');
        });

        it('Checks that the audio is set up correctly', function(){
            var  sourceFinder = element[0].children[1].children[0];
            sourceFinder.src.should.equal('http://localhost:9876/sounds/sound3.mp3');
        });
        
        it('Checks that the images are set up correctly', function(){
            var  h1Finder = element[0].children[2];
            h1Finder.className.should.equal('animated tada ng-binding');
        });

        it('Checks that the images are set up correctly', function(){
            var  imgFinder = element[0].children[3];
            imgFinder.src.should.equal('https://secure.static.tumblr.com/c7df88b223aebbb9d709aaa35f5873e4/bcgepjj/4yqn5ouf0/tumblr_static_tumblr_static_cblez45pkpsgsk8s8ko0kwcos_640.gif');
        });

        it('Checks that the images are set up correctly', function(){
            var  imgFinder = element[0].children[4];
            imgFinder.src.should.equal('http://localhost:9876/images/wintoss.png');
            imgFinder.className.should.equal('animated rollIn');
        });

        it('Checks that the images are set up correctly', function(){
            var  imgFinder = element[0].children[5];
            imgFinder.src.should.equal('http://cdn.makeagif.com/media/6-11-2014/r48XK_.gif');
        });

        it('Checks that the images are set up correctly', function(){
            var  imgFinder = element[0].children[6];
            imgFinder.src.should.equal('http://cdn.playbuzz.com/cdn/db78a69b-5010-4f4a-a336-adba4ef041fe/1d092a3d-1d18-41de-82aa-a3dcabcce84b.gif');
        });


        afterEach(function(){
        })
    });
})();