'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.facturas
 * @description
 * # facturas
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('facturas', function ($resource) {
    return $resource('http://localhost:8000/api/factura');
  });
