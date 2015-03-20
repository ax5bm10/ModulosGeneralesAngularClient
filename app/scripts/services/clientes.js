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
    return $resource('http://localhost:8000/api/clientes');
  });
