'use strict';

/* Services */

var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/ngdemo/rest/users', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
    
   
});


services.factory('UserAuth', function ($resource) {
   
     return $resource('/ngdemo/rest/users/auth', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});
