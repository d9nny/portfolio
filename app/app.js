'use strict';

var portfolio = angular.module('Portfolio', ['ngResource', 'ngRoute']);


	portfolio.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        redirectTo: '/about'
	      })
	     	.when('/about', {
	        templateUrl: 'app/partials/about/about.html',
					controller: 'AboutUsController',
	      	controllerAs: 'aboutCtrl'
	      })
	      .when('/portfolio', {
	        templateUrl: 'app/partials/portfolio/portfolio.html'
	      })
	      .when('/contact', {
	      	templateUrl: 'app/partials/contact/contact.html'
	      })
	      .otherwise({
        redirectTo: '/aboutUs'
      });
	}]);