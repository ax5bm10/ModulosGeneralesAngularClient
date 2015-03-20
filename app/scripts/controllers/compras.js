'use strict';

/**
 * @ngdoc function
 * @name modulosGeneralesApp.controller:ComprasCtrl
 * @description
 * # ComprasCtrl
 * Controller of the modulosGeneralesApp
 */
angular.module('modulosGeneralesApp')
  .controller('ComprasCtrl', function ($scope, compras, detalleCompra) {

    compras.get(function (response) {
      $scope.compras = response.results;
    });

    detalleCompra.get(function (response) {
      $scope.detalleCompra = response.results;
    });
  });
