'use strict';

angular.module('vetList')
    .controller('VetListController', ['$http', function ($http) {
        var self = this;

        $http.get('https://ascpetclinicentdev1-gateway-07451.svc.azuremicroservices.io/api/vets-service/vets').then(function (resp) {
            self.vetList = resp.data;
        });
    }]);
