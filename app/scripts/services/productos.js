'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.productos
 * @description
 * # productos
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('productos', function ($resource) {
    return $resource('http://localhost:8000/api/productos');
  });
