'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.servicios
 * @description
 * # servicios
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('servicio', function ($resource) {
    return $resource('http://localhost:8000/api/servicio');
  })
  .factory('detalleServicio', function ($resource) {
    return $resource('http://localhost:8000/api/detalle-servicio');
  });
