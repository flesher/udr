'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when('/'            , {templateUrl: 'partials/home.html'})
    $routeProvider.when('/detail'    , {templateUrl: 'partials/detail.html'});

    $routeProvider.otherwise({redirectTo: '/'});
	}]);