'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ProductosCtrl', function ($scope, productos) {
    productos.get(function (response) {
      $scope.productos = response.results;
    });
  });
