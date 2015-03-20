'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.proveedores
 * @description
 * # proveedores
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('proveedores', function ($resource) {
    return $resource('http://localhost:8000/api/proveedores');
  });
