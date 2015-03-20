'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.ventas
 * @description
 * # ventas
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('ventas', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
