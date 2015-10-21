angular.module('Services.MyModule')
    .service('DataHandle',['$http', '$q', function ($http, $q) {
        var me = this;
         me.dataHandler = function (endUrl, data) {
            var deferred = $q.defer();
            $http.post0('http://eutaveg-01.tombola.emea:35000/api/v1.0/' + endUrl, (data), {withCredentials: true})
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (response) {
                deferred.reject(response.data);
            });
            return deferred.promise;
        };
    }]);