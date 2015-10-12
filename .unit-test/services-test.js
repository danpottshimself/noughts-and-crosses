(function () {
'use strict';
describe('Test CoreData', function () {
    var constants;
    beforeEach(function(){
        module('Services.MyModule');
        inject(function($injector){
            constants = $injector.get('currentPlayer');
        });
    });  
    it('API URL has not changed', function(){
        expect(constants.url).to.equal('http://somewhere.com');
    });
    afterEach( function(){
        
    });
});
}());