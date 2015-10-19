(function () {
    'use strict';
    describe('Test CharacterLogic', function () {
        var characterLogic,
            functionSpy,
            sandbox;

        beforeEach(function(){
            module('Services.MyModule', function($provide){
                $provide.value('CoreData', mocks.CoreData);
                $provide.value('GameFunctions', mocks.GameFunctions);
            });
            inject(['CharacterLogic', function(_CharacterLogic_){
                characterLogic = _CharacterLogic_;
            }]);

            sandbox = sinon.sandbox.create();
            functionSpy = sinon.sandbox.spy(mocks.GameFunctions,'makeTurn');
        });

        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
            characterLogic.humanLogic("1");
            functionSpy.should.have.been.calledOnce.calledWithExactly("1");
            mocks.CoreData.currentPlayer.should.equal('2');
        });
        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
            mocks.CoreData.currentPlayer = '2';
            characterLogic.humanLogic("4");
            functionSpy.should.have.been.calledOnce.calledWithExactly("4");
            mocks.CoreData.currentPlayer.should.equal('1');
        });


        afterEach(function(){
            sandbox.restore();
        })
    });
}());
