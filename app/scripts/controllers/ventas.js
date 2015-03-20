'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:VentasCtrl
 * @description
 * # VentasCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('VentasCtrl', function ($scope, ventas, detalleVenta) {

    ventas.get(function (response) {
      $scope.ventas = response.results;
    });

    detalleVenta.get(function (response) {
      $scope.detalleVenta = response.results;
    });
  });
