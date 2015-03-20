'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.facturas
 * @description
 * # facturas
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('facturas', function () {
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
