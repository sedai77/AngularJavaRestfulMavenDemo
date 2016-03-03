'use strict';

/* Controllers */


var app = angular.module('ngdemo.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('MyCtrl1', ['$scope', '$window', 'UserFactory','UserAuth', function ($scope, $window, UserFactory, UserAuth) {
    $scope.bla = 'bla from controller';
    $scope.user = {};
    UserFactory.get({}, function (userFactory) {
        $scope.firstname = userFactory.firstName;
        $scope.lastname = userFactory.lastName;
    })
    
    $scope.loginAuth = function(){
    	if( $scope.user.username &&  $scope.user.password){
    		UserAuth.get({}, function (auth) {
    	        $scope.authorized = auth.authorization;
    	        console.log(auth)
    	        if($scope.authorized){
    	        	console.log($scope.authorized)
        	    	$window.location.href = './#/landingPage';
        	    }
    	    })
    	   
    		
    	}
    }
}]);


app.controller('mainCtrl', ['$scope', 'UserFactory', function ($scope, UserFactory) {
	console.log('in second controller');
}]);
