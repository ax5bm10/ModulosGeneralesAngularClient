'use strict';

/**
 * @ngdoc overview
 * @name modulosGeneralesApp
 * @description
 * # modulosGeneralesApp
 *
 * Main module of the application.
 */
angular
  .module('modulosGeneralesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
  ])
  .config(['$resourceProvider',function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'];
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
