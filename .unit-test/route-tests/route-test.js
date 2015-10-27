(function () {
        'use strict';
        describe('GameRouting Test', function () {
                var $state,
                    $rootscope,
                    $templateCache,
                    sandbox;

                    beforeEach(function () {
                            module('Controllers.MyModule');
                            sandbox = sinon.sandbox.create();
                            inject(function ($injector, _$state_, _$rootScope_, _$templateCache_) {
                                    $state = _$state_;
                                    $rootscope = _$rootScope_;
                                    $templateCache = _$templateCache_;
                                });

                            $templateCache.put('partials/game-board.html', 'partials/game-board.html');
                            $templateCache.put('partials/rules.html', 'partials/rules.html');
                            $templateCache.put('partials/player-select.html', 'partials/player-select.html');
                            $rootscope.$digest();
                            });

                    it('Make sure the default state is playerselect', function () {
                            var state = $state.get('playerSelect');
                            should.exist(state);
                            state.url.should.equal('/PlayerSelect');
                            state.templateProvider($templateCache).should.equal($templateCache.get('partials/player-select.html'));
                    });

                    it('Make sure the default state is gameboard', function () {
                        var state = $state.get('gameBoard');
                        should.exist(state);
                        state.url.should.equal('/PlayGame');
                        state.templateProvider($templateCache).should.equal($templateCache.get('partials/game-board.html'));
                    });

                    it('Make sure the default state is rulePage', function () {
                        var state = $state.get('rulePage');
                        should.exist(state);
                        state.url.should.equal('/Rules');
                        state.templateProvider($templateCache).should.equal($templateCache.get('partials/rules.html'));
                    });

                    it('Make sure the default state is rulePage', function () {
                        var state = $state.get('gameDrawn');
                        should.exist(state);
                        state.url.should.equal('/draw');
                        state.template.should.equal('<game-drawn></game-drawn>');
                    });

                    it('Make sure the default state is gameWon', function () {
                        var state = $state.get('gameWon');
                        should.exist(state);
                        state.url.should.equal('/winner');
                        state.template.should.equal('<game-won></game-won>');
                    });

            afterEach(function(){
                            sandbox.restore();
                    });

        });
})();
