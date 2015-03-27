'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.compras
 * @description
 * # compras
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('compras', function ($resource) {
    return $resource('http://localhost:8000/api/compra');
  });

