'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.clientes
 * @description
 * # clientes
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('clientes', function ($resource) {
    return $resource('http://192.168.43.153:8000/api/clientes/');
  });
