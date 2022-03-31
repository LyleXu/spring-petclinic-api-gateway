'use strict';

angular.module('vetList')
    .controller('VetListController', ['$http', function ($http) {
        var self = this;

        $http.get('api/vets-service/vets').then(function (resp) {
            self.vetList = resp.data;
        });
    }]);
