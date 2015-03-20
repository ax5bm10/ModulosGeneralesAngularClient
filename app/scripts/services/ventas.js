'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.ventas
 * @description
 * # ventas
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('ventas', function ($resource) {
    return $resource('http://localhost:8000/api/ventas');
  })
  .factory('detalle_venta', function ($resource){
    return $resource('http://localhost:8000/api/detalle-venta');
  });
