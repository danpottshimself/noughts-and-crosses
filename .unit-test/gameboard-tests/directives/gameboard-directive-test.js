(function () {
    'use strict';
    describe('Test PlayerValue', function () {
        var compile,
            scope,
            sandbox,
            element,
            index = 5;

        beforeEach(function() {
            module('Directives.MyModule', function ($provide) {
                $provide.value('game', mocks.game);
            });

            inject(['$compile', '$rootScope', function ($compile, $rootScope) {
                compile = $compile;
                scope = $rootScope;
            }]);

            var directiveElement = '<squares index = "5"></squares>';
            scope.game = mocks.game;
            element = compile(directiveElement)(scope);
            scope.$digest();
            sandbox = sinon.sandbox.create();
        });

        it('Checks that the cell directives function as expected', function(){
            element[0].children.length.should.be.equal(1);
        });

        it('Checks that the cell directives function as expected', function(){
            var  divFinder = element.find('div');
            divFinder.attr('class').should.equal('square');
        });

        it('Checks that the value/array of player types is correct.', function(){
            var imgFinder = element.find('img');
            imgFinder.attr('class').should.equal('player');
        });

        it('Checks that game-cell directives has the correct square number attribute', function () {
            element.attr('index').should.be.equal('5');
        });

        it('Checks that game-cell directives has the correct ng-click function', function () {
            var  divFinder = element.find('div');
            divFinder.attr('ng-click').should.be.equal('chooseBlock(5)');
           });


        afterEach(function(){
            sandbox.restore();
        })
    });
})();