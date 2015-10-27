//(function () {
//    'use strict';
//    describe('Test PlayerValue', function () {
//        var compile,
//            scope,
//            sandbox,
//            reqUrl,
//            reqResponse,
//            element;
//
//        beforeEach(function() {
//            module ('ui.router');
//            module('Directives.MyModule', function ($provide) {
//            });
//
//            inject(['$compile', '$rootScope', function ($compile, $rootScope) {
//                compile = $compile;
//                scope = $rootScope;
//            }]);
//
//            var directiveElement = '<game-drawn></game-drawn>';
//            element = compile(directiveElement)(scope);
//            reqUrl = "http://localhost:35001/#/draw";
//            reqResponse = {};
//            scope.$digest();
//            sandbox = sinon.sandbox.create();
//        });
//
//        it('Checks that the directive has the correct controller', function(){
//            var  divFinder = element.find('div');
//            expect('GET', reqUrl).respond(reqResponse);
//            divFinder.attr('ng-controller').should.equal('GameBoardController');
//        });
//
//        it('Checks that the h1 has an animation class added', function(){
//            var  h1Finder = element.find('H1');
//            h1Finder.attr('class').should.equal('animated pulse infinite');
//        });
//
//        it('Checks that the h1 has an animation class added', function(){
//            var  h1Finder = element.find('source');
//            h1Finder.attr('src').should.equal('../sounds/2sad4me.mp3');
//        });
//
//        afterEach(function(){
//            sandbox.restore();
//        })
//    });
//})();