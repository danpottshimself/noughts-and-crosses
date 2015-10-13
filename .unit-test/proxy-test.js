
(function () {
    'use strict';
    describe('Test Proxy', function () {
        var httpBackend,
            returnedPromise,
            proxyName;
        beforeEach(function(){
            module('Services.MyModule');
            inject(function( $httpBackend, $q, _Proxy_  ){
                httpBackend = $httpBackend;
                returnedPromise = $q;
                proxyName = _Proxy_;

            });
        });
        it('Checks if the newGame function in the proxy service returns the correct values', function(){
            var theResponse = {'outcome':'Continue','gameboard':'000000000','winner':0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame" , {'player1':"human", 'player2':"human"})
                .respond(theResponse);
            var returnedPromise = proxyName.newGame("human", "human");
            var result;
            returnedPromise.then(function(response){
                result = response;
            });
            httpBackend.flush();
            result.should.be.deep.equal(theResponse);
        });

        it('Checks if the proxy make turn function returns the correct values', function(){
            var theResponse = {'outcome':'Continue','gameboard':'100000000','winner':0};
            httpBackend.expectPOST("http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove" , {"playerNumber": "1",
                "chosenSquare": "0"})
                .respond(theResponse);
            var returnedPromise = proxyName.playerTurn("1", "0");
            var result;
            returnedPromise.then(function(response){
                result = response;
            });
            httpBackend.flush();
            result.should.be.deep.equal(theResponse);
        });

        afterEach( function(){
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
    });
}());
