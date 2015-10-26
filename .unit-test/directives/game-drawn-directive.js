(function () {
    'use strict';
    describe('Test PlayerValue', function () {
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

            var directiveElement = '<game-drawn></game-drawn>';
            element = compile(directiveElement)(scope);
            scope.$digest();
        });

        it('Checks that the h1 has an animation class added', function(){
            var  h1Finder = element[0].children[1];
            h1Finder.className.should.equal('animated pulse infinite');
        });

        it('Checks that the audio source has the correct path to be loaded from', function(){
            var  audioFinder = element[0].children[9].children[0];
            audioFinder.src.should.equal('http://localhost:9876/sounds/2sad4me.mp3');
            audioFinder.type.should.equal('audio/mpeg');
        });

        it('Checks that the image source has the correct path to be loaded from', function(){
            var  imgFinder = element[0].children[0];
            imgFinder.src.should.equal('http://localhost:9876/images/bloodsplat.png');
            imgFinder.className.should.equal(' animated fadeInDown');
        });

        it('Checks that the image source has the correct path to be loaded from', function(){
            var  imgFinder = element[0].children[2];
            imgFinder.src.should.equal('https://media.giphy.com/media/N5PsztQSjkYMw/giphy.gif');
        });

        it('Checks that the image source has the correct path to be loaded from', function(){
            var  imgFinder = element[0].children[3];
            imgFinder.src.should.equal('http://media.giphy.com/media/aVZeSJpQ0r42c/giphy.gif');
        });

        it('Checks that the image source has the correct path to be loaded from', function(){
            var  imgFinder = element[0].children[4];
            imgFinder.src.should.equal('http://localhost:9876/images/drawepic.png');
            imgFinder.className.should.equal('animated flip');
        });

        it('Checks that the image source has the correct path to be loaded from', function(){
            var  imgFinder = element[0].children[5];
            imgFinder.src.should.equal('http://img4.wikia.nocookie.net/__cb20140105221224/disneycreate/images/7/7a/Sigh.gif');
        });


        afterEach(function(){
        })
    });
})();