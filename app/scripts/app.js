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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/clientes',{
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl'
      })
      .when('/proveedores',{
        templateUrl: 'views/proveedores.html',
        controller: 'ProveedoresCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
