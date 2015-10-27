(function () {
    'use strict';
    describe('Test CharacterLogic', function () {
        var characterLogic,
            coreData;
        var sandbox;

        beforeEach(function(){
            module('Services.MyModule');
            module(function($provide){
                $provide.service('CharacterLogic', mocks.CharacterLogic);
                $provide.service('CoreData', mocks.CoreData);
            });
            sandbox = sinon.sandbox.create();
            characterLogic = sinon.sandbox.mock(mocks.CharacterLogic);
            coreData = sinon.sandbox.mock(mocks.CoreData);
        });

        it('Checks that the player switching changes from player 1 to 2 each turn.', function(){
            mocks.CoreData.currentPlayer = mocks.CharacterLogic.humanLogic(1);
            mocks.CoreData.currentPlayer.should.equal('2');
        });
        it('Checks that the player switching changes from player 2 to 1 each turn.', function(){
            mocks.CoreData.currentPlayer =  mocks.CharacterLogic.humanLogic(2);
            mocks.CoreData.currentPlayer.should.equal('1');
        });
        afterEach(function(){
            characterLogic.verify();
            coreData.verify();
            sandbox.restore();
        })
    });
}());
