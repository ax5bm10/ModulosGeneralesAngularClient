'use strict';

/**
 * @ngdoc service
 * @name modulosGeneralesApp.servicios
 * @description
 * # servicios
 * Factory in the modulosGeneralesApp.
 */
angular.module('modulosGeneralesApp')
  .factory('servicios', function () {
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
